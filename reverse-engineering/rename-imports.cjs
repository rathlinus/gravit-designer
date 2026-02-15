#!/usr/bin/env node
//
// rename-imports.cjs
//
// Renames single-letter local variables to meaningful names based on their
// require() import. Uses regex for safe renaming.
//
// Example: var o = require(16) becomes var _interopRequireDefault = require(16)
//
// Reads from annotated-modules (which have name comments)
// and writes to deobfuscated-modules (enhancing the deobfuscation output).
//
// Usage: node rename-imports.cjs [--app-only] [--vendor-only]
//

const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const walk = require('acorn-walk');

const ANNO_APP_DIR = path.join(__dirname, 'annotated-modules', 'app');
const ANNO_VENDOR_DIR = path.join(__dirname, 'annotated-modules', 'vendor');
const DEOB_APP_DIR = path.join(__dirname, 'deobfuscated-modules', 'app');
const DEOB_VENDOR_DIR = path.join(__dirname, 'deobfuscated-modules', 'vendor');

const args = process.argv.slice(2);
const appOnly = args.includes('--app-only');
const vendorOnly = args.includes('--vendor-only');

// Well-known barrel module name overrides
const BARREL_NAMES = {
  '1': 'GCore',       // Main vendor barrel: GScene, GObject, GText, etc.
  '15': 'GEditor',    // Editor barrel: GKey, GSceneWidget, GPlatform, etc.  
  '53': 'GTools',     // Tools barrel: GSelectTool, GTextTool, etc.
};

const stats = {
  filesProcessed: 0,
  importsRenamed: 0,
  referencesRenamed: 0,
  filesModified: 0,
  conflictsResolved: 0,
  parseErrors: 0,
};

//
// Extract import-name mappings from annotated module code
// Finds patterns like: var x = require(NNN) [comment: ClassName]
// Also: var x = someWrapper(require(NNN) [comment: ClassName])
//
function extractImportMappings(code) {
  const mappings = []; // { localName, desiredName, moduleId }
  
  // Pattern: var/let/const localName = require(ID) [comment: Name]
  // Also handles: localName = require(ID) [comment: Name] (in comma-separated var declarations)
  const requireWithComment = /\b(\w+)\s*=\s*(?:\w+\()?\s*require\((\d+)\)\s*\/\*\s*([^*]+?)\s*\*\//g;
  let match;
  
  while ((match = requireWithComment.exec(code)) !== null) {
    const localName = match[1];
    const moduleId = match[2];
    let commentName = match[3].trim();
    
    // Skip if the local name is already meaningful (more than 2 chars)
    if (localName.length > 2) continue;
    
    // Skip if this is not a real variable assignment (e.g., inside a string)
    // Simple check: the local name should be a valid identifier character  
    if (!/^[a-zA-Z_$]/.test(localName)) continue;
    
    // Derive a good name from the comment
    let desiredName = deriveImportName(commentName, moduleId);
    if (!desiredName || desiredName === localName) continue;
    
    mappings.push({ localName, desiredName, moduleId });
  }
  
  return mappings;
}

/**
 * Derive a meaningful variable name from a module name comment
 */
function deriveImportName(commentName, moduleId) {
  // Check barrel overrides
  if (BARREL_NAMES[moduleId]) return BARREL_NAMES[moduleId];
  
  // Skip unhelpful names
  if (commentName === 'module' || commentName.startsWith('module_')) return null;
  
  // Clean up name patterns
  let name = commentName;
  
  // Exports_XXX → XXX
  if (name.startsWith('Exports_')) {
    name = name.substring(8);
  }
  
  // barrel_XXX → keep as-is (descriptive)  
  // polyfill_XXX → skip (not useful as var name)
  if (name.startsWith('polyfill_') || name.startsWith('stub_requires_') || name.startsWith('corejs_')) {
    return null;
  }
  
  // Names starting with _ are helpers — keep them
  // Names starting with G are Gravit classes — keep them
  // Names starting with uppercase are class names — keep them
  
  // Make sure it's a valid JavaScript identifier
  name = name.replace(/[^a-zA-Z0-9_$]/g, '_');
  
  // Don't start with a number
  if (/^\d/.test(name)) name = '_' + name;
  
  // Skip very short names
  if (name.length <= 2) return null;
  
  return name;
}

/**
 * Rename a variable throughout a module using AST
 */
function renameVariable(code, oldName, newName) {
  // Use word boundary regex for safe replacement
  // Need to be careful not to rename:
  // - Property access: obj.oldName (but oldName.prop is OK)
  // - String literals containing the name
  // - Comments containing the name
  // - Labels
  
  // Simple but effective approach: replace standalone identifiers
  // Use negative lookbehind for . (property access) and negative lookahead for :
  const pattern = new RegExp(
    '(?<![.\'"])\\b' + escapeRegex(oldName) + '\\b(?![\'":])' ,
    'g'
  );
  
  let count = 0;
  const result = code.replace(pattern, (match, offset) => {
    // Check if we're inside a string or comment
    if (isInsideStringOrComment(code, offset)) return match;
    
    // Check if this is a property access (preceded by .)
    const before = code.substring(Math.max(0, offset - 1), offset);
    if (before === '.') return match;
    
    count++;
    return newName;
  });
  
  return { code: result, count };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Check if offset is inside a string literal, comment, or regex literal.
 * Handles regex flag positions correctly (e.g., /pattern/g — the 'g' is inside regex).
 */
function isInsideStringOrComment(code, offset) {
  let inSingle = false, inDouble = false, inTemplate = false;
  let inLineComment = false, inBlockComment = false, inRegex = false;
  
  // Track the last significant token type to disambiguate / as division vs regex
  // A '/' starts a regex after: ( [ { ; , = + - * % ! ~ & | ^ ? : < > return typeof void delete throw new case in instanceof
  // A '/' is division after: ) ] } identifier number
  let lastTokenType = 'operator'; // start as operator so leading / is regex
  
  for (let i = 0; i < offset; i++) {
    const ch = code[i];
    const next = code[i + 1];
    
    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (ch === '*' && next === '/') { inBlockComment = false; i++; }
      continue;
    }
    if (inSingle) {
      if (ch === '\\') { i++; continue; }
      if (ch === "'") { inSingle = false; lastTokenType = 'value'; }
      continue;
    }
    if (inDouble) {
      if (ch === '\\') { i++; continue; }
      if (ch === '"') { inDouble = false; lastTokenType = 'value'; }
      continue;
    }
    if (inTemplate) {
      if (ch === '\\') { i++; continue; }
      if (ch === '`') { inTemplate = false; lastTokenType = 'value'; }
      continue;
    }
    if (inRegex) {
      if (ch === '\\') { i++; continue; }
      if (ch === '/') {
        // Closing / — check if offset falls within the regex flags
        let flagEnd = i;
        while (flagEnd + 1 < code.length && /[gimsuvyd]/.test(code[flagEnd + 1])) flagEnd++;
        // If offset is between closing / and end of flags (inclusive), it's inside the regex
        if (offset <= flagEnd) return true;
        i = flagEnd;
        inRegex = false;
        lastTokenType = 'value';
      }
      continue;
    }
    
    // Skip whitespace (doesn't change lastTokenType)
    if (/\s/.test(ch)) continue;
    
    if (ch === '/' && next === '/') { inLineComment = true; i++; continue; }
    if (ch === '/' && next === '*') { inBlockComment = true; i++; continue; }
    
    // Is this / a regex start or division?
    if (ch === '/') {
      if (lastTokenType === 'value' || lastTokenType === 'close') {
        // Division operator
        lastTokenType = 'operator';
      } else {
        // Regex literal
        inRegex = true;
      }
      continue;
    }
    
    if (ch === "'") { inSingle = true; continue; }
    if (ch === '"') { inDouble = true; continue; }
    if (ch === '`') { inTemplate = true; continue; }
    
    // Track token types for regex disambiguation
    if (ch === ')' || ch === ']') { lastTokenType = 'close'; continue; }
    if (ch === '}') { lastTokenType = 'operator'; continue; } // could be block end, treat as operator
    if ('({[;,=+-*%!~&|^?:<>'.includes(ch)) { lastTokenType = 'operator'; continue; }
    
    // Check for keywords that precede regex: return, typeof, void, delete, throw, new, case, in, instanceof
    if (/[a-zA-Z_$]/.test(ch)) {
      let end = i + 1;
      while (end < code.length && /[a-zA-Z0-9_$]/.test(code[end])) end++;
      const word = code.substring(i, end);
      i = end - 1;
      if (['return','typeof','void','delete','throw','new','case','in','instanceof'].includes(word)) {
        lastTokenType = 'operator';
      } else {
        lastTokenType = 'value'; // identifier
      }
      continue;
    }
    
    // Numbers
    if (/[0-9]/.test(ch)) {
      while (i + 1 < code.length && /[0-9a-fA-FxXoObBeE._]/.test(code[i + 1])) i++;
      lastTokenType = 'value';
      continue;
    }
    
    lastTokenType = 'operator'; // anything else (punctuation etc)
  }
  
  return inSingle || inDouble || inTemplate || inLineComment || inBlockComment || inRegex;
}

/**
 * Process a single module file
 */
function processModule(inputPath, outputPath) {
  // Read the deobfuscated code (has both require() and name comments)
  if (!fs.existsSync(outputPath)) return false;
  let code = fs.readFileSync(outputPath, 'utf8');
  
  // Extract import mappings directly from the deobfuscated code
  const mappings = extractImportMappings(code);
  if (mappings.length === 0) return false;
  
  // Resolve naming conflicts
  const usedNames = new Set();
  const resolvedMappings = [];
  
  for (const mapping of mappings) {
    let name = mapping.desiredName;
    
    // Handle duplicates by appending a suffix
    if (usedNames.has(name)) {
      let suffix = 2;
      while (usedNames.has(name + suffix)) suffix++;
      name = name + suffix;
      stats.conflictsResolved++;
    }
    
    // Also check if the desired name already exists as a different variable in the code
    // Strip comments before checking to avoid false positives (the name appears in its own comment)
    const codeNoComments = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');
    const namePattern = new RegExp('\\b' + escapeRegex(name) + '\\b');
    if (namePattern.test(codeNoComments) && name !== mapping.localName) {
      // Name collision — skip this rename
      continue;
    }
    
    usedNames.add(name);
    resolvedMappings.push({ ...mapping, desiredName: name });
  }
  
  // Apply renames (in reverse order of name length to avoid partial matches)
  let totalRefs = 0;
  let totalImports = 0;
  
  for (const { localName, desiredName } of resolvedMappings) {
    const { code: newCode, count } = renameVariable(code, localName, desiredName);
    if (count > 0) {
      code = newCode;
      totalRefs += count;
      totalImports++;
    }
  }
  
  if (totalImports > 0) {
    fs.writeFileSync(outputPath, code);
    stats.importsRenamed += totalImports;
    stats.referencesRenamed += totalRefs;
    return true;
  }
  
  return false;
}

/**
 * Process a directory (supports nested)
 */
function processDirectory(annoDir, deobDir, label) {
  if (!fs.existsSync(annoDir)) {
    console.log(`Skipping ${label}: directory not found`);
    return;
  }
  
  const files = [];
  function walkDir(dir, base) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walkDir(path.join(dir, entry.name), base);
      } else if (entry.name.endsWith('.js')) {
        files.push(path.relative(base, path.join(dir, entry.name)));
      }
    }
  }
  walkDir(annoDir, annoDir);
  
  console.log(`\nProcessing ${files.length} ${label} modules...`);
  
  let modified = 0;
  for (let i = 0; i < files.length; i++) {
    const relPath = files[i];
    const annoPath = path.join(annoDir, relPath);
    const deobPath = path.join(deobDir, relPath);
    
    stats.filesProcessed++;
    
    if (processModule(annoPath, deobPath)) {
      modified++;
    }
    
    if ((i + 1) % 200 === 0) {
      process.stdout.write(`  ${i + 1}/${files.length}\r`);
    }
  }
  
  stats.filesModified += modified;
  console.log(`  ${files.length} scanned, ${modified} modified`);
}

// Main
console.log('=== Import Renaming Script ===\n');
const startTime = Date.now();

if (!vendorOnly) {
  processDirectory(ANNO_APP_DIR, DEOB_APP_DIR, 'app');
}

if (!appOnly) {
  processDirectory(ANNO_VENDOR_DIR, DEOB_VENDOR_DIR, 'vendor');
}

const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

console.log('\n=== Results ===');
console.log(`Files processed:    ${stats.filesProcessed}`);
console.log(`Files modified:     ${stats.filesModified}`);
console.log(`Imports renamed:    ${stats.importsRenamed}`);
console.log(`References renamed: ${stats.referencesRenamed}`);
console.log(`Conflicts resolved: ${stats.conflictsResolved}`);
console.log(`Parse errors:       ${stats.parseErrors}`);
console.log(`Time:               ${elapsed}s`);

// Save report
const report = { timestamp: new Date().toISOString(), stats, elapsedSeconds: parseFloat(elapsed) };
fs.mkdirSync(path.join(__dirname, 'reports'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'reports', 'rename-imports-report.json'), JSON.stringify(report, null, 2));
console.log('\nSaved reports/rename-imports-report.json');
