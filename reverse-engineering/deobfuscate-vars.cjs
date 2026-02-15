/**
 * Deobfuscate variables in extracted webpack modules
 *
 * Uses proper AST-based scope analysis to:
 *   1. Rename webpack parameters (e,t,n) → (exports, module, require)
 *   2. Rename ALL references throughout the function body
 *   3. Apply safe transforms (!0→true, !1→false, void 0→undefined)
 *   4. Process BOTH app and vendor modules
 *
 * Usage: node deobfuscate-vars.cjs
 */

const fs = require('fs-extra');
const path = require('path');
const acorn = require('acorn');

// Directories
const SRC_MODULES_DIR = path.join(__dirname, 'src', 'modules');
const VENDOR_MODULES_DIR = path.join(__dirname, 'ast-extracted-modules');
const ANNOTATED_APP_DIR = path.join(__dirname, 'annotated-modules', 'app');
const ANNOTATED_VENDOR_DIR = path.join(__dirname, 'annotated-modules', 'vendor');
const OUTPUT_APP_DIR = path.join(__dirname, 'deobfuscated-modules', 'app');
const OUTPUT_VENDOR_DIR = path.join(__dirname, 'deobfuscated-modules', 'vendor');

// Standard webpack parameter names
const PARAM_NAMES = ['exports', 'module', 'require'];

// Statistics
const stats = {
  filesProcessed: 0,
  parametersRenamed: 0,
  referencesRenamed: 0,
  booleanTransforms: 0,
  undefinedTransforms: 0,
  parseErrors: 0
};

/**
 * Build a set of all binding names declared inside a function scope.
 * Used to detect naming collisions when renaming parameters.
 */
function collectBindings(funcNode) {
  const bindings = new Set();
  for (const p of funcNode.params) {
    if (p.type === 'Identifier') bindings.add(p.name);
  }
  function scanBlock(stmts) {
    if (!stmts) return;
    for (const stmt of stmts) {
      if (stmt.type === 'VariableDeclaration') {
        for (const decl of stmt.declarations) {
          if (decl.id && decl.id.type === 'Identifier') {
            bindings.add(decl.id.name);
          }
        }
      } else if (stmt.type === 'FunctionDeclaration' && stmt.id) {
        bindings.add(stmt.id.name);
      }
    }
  }
  if (funcNode.body && funcNode.body.body) {
    scanBlock(funcNode.body.body);
  }
  return bindings;
}

/**
 * Rename webpack function parameters and ALL their references using AST.
 * Returns the modified source code, or null if no changes needed.
 */
function renameWebpackParams(code) {
  let ast;
  let wrapperOffset = 0; // offset added by wrapping

  // Try parsing directly first
  try {
    ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script',
      ranges: true
    });
  } catch (e) {
    // Anonymous function expression like `function(e, t, n) { ... }` is not valid
    // as a statement. Find the function keyword and wrap with assignment.
    // First, strip leading comments
    const funcMatch = code.match(/(\/\*[\s\S]*?\*\/\s*\n?\s*)?function\s*\(/);
    if (funcMatch) {
      const prefix = 'var __m__ = ';
      const headerLen = funcMatch[1] ? funcMatch[1].length : 0;
      const wrappedCode = code.slice(0, headerLen) + prefix + code.slice(headerLen);
      wrapperOffset = prefix.length;
      try {
        ast = acorn.parse(wrappedCode, {
          ecmaVersion: 2020,
          sourceType: 'script',
          ranges: true
        });
      } catch (e2) {
        stats.parseErrors++;
        return null;
      }
    } else {
      stats.parseErrors++;
      return null;
    }
  }

  // Find the webpack module function at top level
  let funcNode = null;
  for (const node of ast.body) {
    if (node.type === 'FunctionDeclaration' && node.params.length >= 1) {
      funcNode = node;
      break;
    }
    if (node.type === 'ExpressionStatement') {
      const expr = node.expression;
      if (expr.type === 'FunctionExpression' && expr.params.length >= 1) {
        funcNode = expr;
        break;
      }
      if (expr.type === 'ArrowFunctionExpression' && expr.params.length >= 1) {
        funcNode = expr;
        break;
      }
    }
    // Handle wrapped case: var __m__ = function(e, t, n) { ... }
    if (node.type === 'VariableDeclaration') {
      for (const decl of node.declarations) {
        if (decl.init && decl.init.type === 'FunctionExpression' && decl.init.params.length >= 1) {
          funcNode = decl.init;
          break;
        }
      }
      if (funcNode) break;
    }
  }

  if (!funcNode || funcNode.params.length < 1) {
    return null;
  }

  // Get original parameter names
  const origNames = [];
  for (let i = 0; i < Math.min(funcNode.params.length, 3); i++) {
    const p = funcNode.params[i];
    if (p.type === 'Identifier') {
      origNames.push(p.name);
    } else {
      origNames.push(null);
    }
  }

  // Build rename map
  const renameMap = {};
  const existingBindings = collectBindings(funcNode);

  for (let i = 0; i < origNames.length; i++) {
    const orig = origNames[i];
    if (!orig) continue;
    const target = PARAM_NAMES[i];
    if (orig === target) continue;
    // Skip if target collides with an existing local binding that isn't one of our params
    if (existingBindings.has(target) && !origNames.includes(target)) {
      continue;
    }
    renameMap[orig] = target;
  }

  if (Object.keys(renameMap).length === 0) {
    return null;
  }

  // Collect all identifier positions that need renaming
  const replacements = [];
  const scopeStack = [new Set(origNames)]; // top scope has the params

  function isShadowed(name) {
    for (let i = scopeStack.length - 1; i > 0; i--) {
      if (scopeStack[i].has(name)) return true;
    }
    return false;
  }

  function scanVarDecls(bodyStmts, scope) {
    for (const stmt of bodyStmts) {
      if (stmt.type === 'VariableDeclaration' && stmt.kind === 'var') {
        for (const decl of stmt.declarations) {
          if (decl.id && decl.id.type === 'Identifier') {
            scope.add(decl.id.name);
          }
        }
      }
    }
  }

  function visitNode(node, parentNode, propName) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        visitNode(node[i], parentNode, propName);
      }
      return;
    }
    if (!node.type) return;

    // Scope-creating: functions
    if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' ||
        node.type === 'ArrowFunctionExpression') {
      if (node === funcNode) {
        // The root function — rename its params, then visit body
        for (const p of node.params) {
          if (p.type === 'Identifier' && renameMap[p.name]) {
            replacements.push({ start: p.start, end: p.end, newName: renameMap[p.name] });
            stats.parametersRenamed++;
          }
        }
        if (node.body) {
          if (node.body.type === 'BlockStatement') {
            for (const stmt of node.body.body) {
              visitNode(stmt, node.body, 'body');
            }
          } else {
            visitNode(node.body, node, 'body');
          }
        }
        return;
      }

      // Nested function — creates new scope
      const newScope = new Set();
      for (const p of (node.params || [])) {
        if (p.type === 'Identifier') newScope.add(p.name);
        else if (p.type === 'AssignmentPattern' && p.left && p.left.type === 'Identifier') newScope.add(p.left.name);
        else if (p.type === 'RestElement' && p.argument && p.argument.type === 'Identifier') newScope.add(p.argument.name);
      }

      // FunctionDeclaration name is in the OUTER scope
      if (node.type === 'FunctionDeclaration' && node.id && node.id.type === 'Identifier') {
        const name = node.id.name;
        if (renameMap[name] && !isShadowed(name)) {
          replacements.push({ start: node.id.start, end: node.id.end, newName: renameMap[name] });
          stats.referencesRenamed++;
        }
      }

      // FunctionExpression id is in its own scope
      if (node.type === 'FunctionExpression' && node.id) {
        newScope.add(node.id.name);
      }

      scopeStack.push(newScope);

      // Visit params (for default values)
      for (const p of (node.params || [])) {
        if (p.type === 'AssignmentPattern') {
          visitNode(p.right, p, 'right');
        }
      }

      // Visit body
      if (node.body) {
        if (node.body.type === 'BlockStatement') {
          scanVarDecls(node.body.body, newScope);
          for (const stmt of node.body.body) {
            visitNode(stmt, node.body, 'body');
          }
        } else {
          visitNode(node.body, node, 'body');
        }
      }

      scopeStack.pop();
      return;
    }

    // Catch clause
    if (node.type === 'CatchClause') {
      const catchScope = new Set();
      if (node.param && node.param.type === 'Identifier') {
        catchScope.add(node.param.name);
      }
      scopeStack.push(catchScope);
      if (node.param) visitNode(node.param, node, 'param');
      visitNode(node.body, node, 'body');
      scopeStack.pop();
      return;
    }

    // Block statements with let/const
    if (node.type === 'BlockStatement' && parentNode &&
        parentNode.type !== 'FunctionDeclaration' && parentNode.type !== 'FunctionExpression' &&
        parentNode.type !== 'ArrowFunctionExpression' && parentNode.type !== 'CatchClause') {
      const blockScope = new Set();
      for (const stmt of node.body) {
        if (stmt.type === 'VariableDeclaration' && (stmt.kind === 'let' || stmt.kind === 'const')) {
          for (const decl of stmt.declarations) {
            if (decl.id && decl.id.type === 'Identifier') {
              blockScope.add(decl.id.name);
            }
          }
        }
      }
      if (blockScope.size > 0) {
        scopeStack.push(blockScope);
        for (const stmt of node.body) {
          visitNode(stmt, node, 'body');
        }
        scopeStack.pop();
        return;
      }
      for (const stmt of node.body) {
        visitNode(stmt, node, 'body');
      }
      return;
    }

    // Identifier — check if it should be renamed
    if (node.type === 'Identifier') {
      const name = node.name;
      if (renameMap[name] && !isShadowed(name)) {
        // Skip non-computed property access: obj.e → keep .e
        if (parentNode && parentNode.type === 'MemberExpression' &&
            parentNode.property === node && !parentNode.computed) {
          return;
        }
        // Skip non-computed object property keys: { e: value }
        if (parentNode && parentNode.type === 'Property' &&
            parentNode.key === node && !parentNode.computed) {
          if (parentNode.shorthand) {
            return; // shorthand { e } — complex to handle with text replacement
          }
          return;
        }
        // Skip labels
        if (parentNode && (parentNode.type === 'LabeledStatement' ||
            parentNode.type === 'BreakStatement' || parentNode.type === 'ContinueStatement') &&
            parentNode.label === node) {
          return;
        }
        replacements.push({ start: node.start, end: node.end, newName: renameMap[name] });
        stats.referencesRenamed++;
      }
      return;
    }

    // For all other node types, recurse into children
    for (const key of Object.keys(node)) {
      if (key === 'type' || key === 'start' || key === 'end' || key === 'range' ||
          key === 'loc' || key === 'raw' || key === 'sourceType') continue;
      const child = node[key];
      if (child && typeof child === 'object') {
        visitNode(child, node, key);
      }
    }
  }

  // Walk from root funcNode
  visitNode(funcNode, null, null);

  // Apply replacements in reverse order to preserve offsets
  // Adjust positions if we added a wrapper prefix
  replacements.sort((a, b) => b.start - a.start);
  let result = code;
  for (const r of replacements) {
    const start = r.start - wrapperOffset;
    const end = r.end - wrapperOffset;
    if (start < 0 || end < 0 || start > result.length) continue; // safety
    result = result.slice(0, start) + r.newName + result.slice(end);
  }

  return result;
}

/**
 * Apply safe code transforms (regex-based)
 */
function applySafeTransforms(code) {
  let transformed = code;
  transformed = transformed.replace(/!0\b/g, () => { stats.booleanTransforms++; return 'true'; });
  transformed = transformed.replace(/!1\b/g, () => { stats.booleanTransforms++; return 'false'; });
  transformed = transformed.replace(/\bvoid 0\b/g, () => { stats.undefinedTransforms++; return 'undefined'; });
  return transformed;
}

/**
 * Full deobfuscation of a single module
 */
function deobfuscateModule(code) {
  let result = renameWebpackParams(code);
  if (result === null) {
    result = code;
  }
  result = applySafeTransforms(result);
  return result;
}

/**
 * Process a single module file
 */
async function processModuleFile(inputPath, outputPath) {
  try {
    const code = await fs.readFile(inputPath, 'utf8');
    const deobfuscated = deobfuscateModule(code);

    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, deobfuscated);

    stats.filesProcessed++;
  } catch (e) {
    console.error(`Error processing ${path.basename(inputPath)}: ${e.message}`);
  }
}

/**
 * Process all modules in a directory (flat or nested with subdirectories)
 */
async function processDirectory(inputDir, outputDir, label) {
  console.log(`Processing ${label}...`);

  if (!fs.existsSync(inputDir)) {
    console.log(`  Directory not found: ${inputDir}\n`);
    return;
  }

  const allFiles = [];
  function walkDir(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(full);
      } else if (entry.name.endsWith('.js')) {
        allFiles.push(full);
      }
    }
  }
  walkDir(inputDir);

  console.log(`  Found ${allFiles.length} JavaScript files`);

  let processed = 0;
  for (const inputPath of allFiles) {
    const relPath = path.relative(inputDir, inputPath);
    const outputPath = path.join(outputDir, relPath);
    await processModuleFile(inputPath, outputPath);
    processed++;
    if (processed % 200 === 0) {
      console.log(`    Processed ${processed}/${allFiles.length} files...`);
    }
  }

  console.log(`  ✓ Processed ${allFiles.length} files\n`);
}

/**
 * Generate report
 */
function generateReport() {
  console.log('\n' + '='.repeat(60));
  console.log('DEOBFUSCATION REPORT');
  console.log('='.repeat(60));
  console.log(`Files processed:         ${stats.filesProcessed}`);
  console.log(`Parameters renamed:      ${stats.parametersRenamed}`);
  console.log(`References renamed:      ${stats.referencesRenamed}`);
  console.log(`Boolean transforms:      ${stats.booleanTransforms}`);
  console.log(`Undefined transforms:    ${stats.undefinedTransforms}`);
  console.log(`Parse errors (skipped):  ${stats.parseErrors}`);
  console.log('='.repeat(60));

  const report = {
    timestamp: new Date().toISOString(),
    filesProcessed: stats.filesProcessed,
    transformations: {
      parametersRenamed: stats.parametersRenamed,
      referencesRenamed: stats.referencesRenamed,
      booleanTransforms: stats.booleanTransforms,
      undefinedTransforms: stats.undefinedTransforms,
      parseErrors: stats.parseErrors
    }
  };

  const reportPath = path.join(__dirname, 'deobfuscated-modules', 'deobfuscation-report.json');
  fs.ensureDirSync(path.dirname(reportPath));
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\nReport saved to: deobfuscated-modules/deobfuscation-report.json\n`);
}

/**
 * Main execution
 */
async function main() {
  console.log('Deobfuscate Variables Script (AST-based)');
  console.log('========================================\n');

  // Process app modules: prefer annotated, fallback to original
  const appInputDir = fs.existsSync(ANNOTATED_APP_DIR) ? ANNOTATED_APP_DIR : SRC_MODULES_DIR;
  const appInputLabel = fs.existsSync(ANNOTATED_APP_DIR)
    ? 'Annotated app modules'
    : 'Original app modules (src/modules)';

  await processDirectory(appInputDir, OUTPUT_APP_DIR, appInputLabel);

  // Process vendor modules: prefer annotated, fallback to ast-extracted
  const vendorInputDir = fs.existsSync(ANNOTATED_VENDOR_DIR) ? ANNOTATED_VENDOR_DIR : VENDOR_MODULES_DIR;
  const vendorInputLabel = fs.existsSync(ANNOTATED_VENDOR_DIR)
    ? 'Annotated vendor modules'
    : 'Original vendor modules (ast-extracted-modules)';

  await processDirectory(vendorInputDir, OUTPUT_VENDOR_DIR, vendorInputLabel);

  generateReport();

  console.log('✓ Done!');
  console.log(`\nDeobfuscated modules written to:`);
  console.log(`  - ${OUTPUT_APP_DIR}`);
  console.log(`  - ${OUTPUT_VENDOR_DIR}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
