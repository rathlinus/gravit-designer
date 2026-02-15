/**
 * Extract and beautify standalone JS files
 * 
 * Processes standalone JavaScript files (PostScript, cacher, static)
 * and beautifies them for development use.
 * 
 * Usage: node extract-standalone.cjs
 */

const fs = require('fs-extra');
const path = require('path');
const astring = require('astring');
const acorn = require('acorn');

// Directories
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'standalone');

// Files to process
const FILES = {
  postscript: [
    'pscore.js',
    'psclasses.js',
    'pscolor.js',
    'psparser.js',
    'psctm.js'
  ],
  cacher: [
    'cacher.js'
  ],
  static: [
    'static.maintenance.js'
  ]
};

// Statistics
const stats = {
  filesProcessed: 0,
  totalSize: 0,
  beautifiedSize: 0
};

/**
 * Apply safe transforms
 */
function applySafeTransforms(code) {
  let transformed = code;
  
  // Transform !0 -> true
  transformed = transformed.replace(/!0/g, 'true');
  
  // Transform !1 -> false
  transformed = transformed.replace(/!1/g, 'false');
  
  // Transform void 0 -> undefined
  transformed = transformed.replace(/void 0/g, 'undefined');
  
  return transformed;
}

/**
 * Beautify JavaScript code
 */
function beautifyJS(code) {
  try {
    // Parse code
    const ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script',
      allowHashBang: true
    });
    
    // Generate formatted code
    const beautified = astring.generate(ast, {
      indent: '  ',
      lineEnd: '\n'
    });
    
    // Apply safe transforms
    return applySafeTransforms(beautified);
    
  } catch (e) {
    console.warn(`  Warning: AST parsing failed, using safe transforms only: ${e.message}`);
    return applySafeTransforms(code);
  }
}

/**
 * Identify named functions and classes in code
 */
function identifyComponents(code) {
  const components = {
    functions: [],
    classes: [],
    variables: []
  };
  
  try {
    const ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script',
      allowHashBang: true
    });
    
    // Walk the AST
    for (const node of ast.body) {
      if (node.type === 'FunctionDeclaration' && node.id) {
        components.functions.push(node.id.name);
      } else if (node.type === 'ClassDeclaration' && node.id) {
        components.classes.push(node.id.name);
      } else if (node.type === 'VariableDeclaration') {
        for (const decl of node.declarations) {
          if (decl.id && decl.id.name) {
            components.variables.push(decl.id.name);
          }
        }
      }
    }
  } catch (e) {
    // Ignore parse errors
  }
  
  return components;
}

/**
 * Process a single file
 */
async function processFile(filename, category) {
  console.log(`Processing ${filename}...`);
  
  const inputPath = path.join(PUBLIC_DIR, filename);
  const outputSubDir = path.join(OUTPUT_DIR, category);
  const outputPath = path.join(outputSubDir, filename);
  
  // Read file
  const code = await fs.readFile(inputPath, 'utf8');
  const inputSizeKB = (code.length / 1024).toFixed(1);
  console.log(`  Input size: ${inputSizeKB} KB`);
  
  stats.totalSize += code.length;
  
  // Beautify
  console.log('  Beautifying...');
  const beautified = beautifyJS(code);
  
  const outputSizeKB = (beautified.length / 1024).toFixed(1);
  console.log(`  Output size: ${outputSizeKB} KB`);
  
  stats.beautifiedSize += beautified.length;
  
  // Identify components
  const components = identifyComponents(beautified);
  console.log(`  Components: ${components.functions.length} functions, ${components.classes.length} classes, ${components.variables.length} variables`);
  
  // Write beautified file
  await fs.ensureDir(outputSubDir);
  await fs.writeFile(outputPath, beautified);
  
  console.log(`  ✓ Written to ${path.relative(process.cwd(), outputPath)}\n`);
  
  stats.filesProcessed++;
  
  return { filename, components, inputSize: code.length, outputSize: beautified.length };
}

/**
 * Generate index documentation
 */
async function generateIndex(results) {
  console.log('Generating index documentation...');
  
  const indexLines = [];
  indexLines.push('# Standalone JavaScript Files');
  indexLines.push('');
  indexLines.push('Beautified standalone JavaScript files from Gravit Designer.');
  indexLines.push('');
  
  // Group by category
  const categories = {
    postscript: [],
    cacher: [],
    static: []
  };
  
  for (const result of results) {
    for (const [cat, files] of Object.entries(FILES)) {
      if (files.includes(result.filename)) {
        categories[cat].push(result);
      }
    }
  }
  
  // PostScript files
  if (categories.postscript.length > 0) {
    indexLines.push('## PostScript Support');
    indexLines.push('');
    indexLines.push('PostScript interpreter and related utilities:');
    indexLines.push('');
    for (const result of categories.postscript) {
      indexLines.push(`### ${result.filename}`);
      indexLines.push('');
      indexLines.push(`- Input size: ${(result.inputSize / 1024).toFixed(1)} KB`);
      indexLines.push(`- Output size: ${(result.outputSize / 1024).toFixed(1)} KB`);
      indexLines.push(`- Functions: ${result.components.functions.length}`);
      indexLines.push(`- Classes: ${result.components.classes.length}`);
      indexLines.push(`- Variables: ${result.components.variables.length}`);
      indexLines.push('');
      
      if (result.components.functions.length > 0 && result.components.functions.length <= 20) {
        indexLines.push('Key functions: ' + result.components.functions.slice(0, 10).join(', '));
        indexLines.push('');
      }
    }
  }
  
  // Cacher
  if (categories.cacher.length > 0) {
    indexLines.push('## Service Worker Caching');
    indexLines.push('');
    indexLines.push('Service worker caching logic:');
    indexLines.push('');
    for (const result of categories.cacher) {
      indexLines.push(`### ${result.filename}`);
      indexLines.push('');
      indexLines.push(`- Size: ${(result.outputSize / 1024).toFixed(1)} KB`);
      indexLines.push(`- Purpose: Service worker for offline caching`);
      indexLines.push('');
    }
  }
  
  // Static/maintenance
  if (categories.static.length > 0) {
    indexLines.push('## Static/Maintenance Pages');
    indexLines.push('');
    for (const result of categories.static) {
      indexLines.push(`### ${result.filename}`);
      indexLines.push('');
      indexLines.push(`- Size: ${(result.outputSize / 1024).toFixed(1)} KB`);
      indexLines.push(`- Purpose: Static maintenance page JavaScript`);
      indexLines.push('');
    }
  }
  
  const indexPath = path.join(OUTPUT_DIR, 'INDEX.md');
  await fs.writeFile(indexPath, indexLines.join('\n'));
  
  console.log(`✓ Index saved: ${path.relative(process.cwd(), indexPath)}\n`);
}

/**
 * Main execution
 */
async function main() {
  console.log('Extract Standalone Files Script');
  console.log('===============================\n');
  
  const results = [];
  
  // Process PostScript files
  console.log('PostScript files:');
  for (const filename of FILES.postscript) {
    const result = await processFile(filename, 'postscript');
    results.push(result);
  }
  
  // Process cacher
  console.log('Cacher:');
  for (const filename of FILES.cacher) {
    const result = await processFile(filename, 'cacher');
    results.push(result);
  }
  
  // Process static files
  console.log('Static files:');
  for (const filename of FILES.static) {
    const result = await processFile(filename, 'static');
    results.push(result);
  }
  
  // Generate index
  await generateIndex(results);
  
  // Report
  console.log('='.repeat(60));
  console.log('EXTRACTION REPORT');
  console.log('='.repeat(60));
  console.log(`Files processed:      ${stats.filesProcessed}`);
  console.log(`Total input size:     ${(stats.totalSize / 1024).toFixed(1)} KB`);
  console.log(`Total output size:    ${(stats.beautifiedSize / 1024).toFixed(1)} KB`);
  console.log(`Size change:          ${((stats.beautifiedSize / stats.totalSize - 1) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));
  
  console.log('\n✓ Done!');
  console.log(`\nBeautified files written to: ${OUTPUT_DIR}`);
}

// Run
main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
