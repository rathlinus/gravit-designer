/**
 * Resolve require() calls to class names
 * 
 * Annotates all require() calls in extracted webpack modules with comments
 * showing the resolved class name or module ID.
 * 
 * Usage: node resolve-requires.cjs
 */

const fs = require('fs-extra');
const path = require('path');
const acorn = require('acorn');
const walk = require('acorn-walk');

// Directories
const SRC_MODULES_DIR = path.join(__dirname, 'src', 'modules');
const VENDOR_MAP_PATH = path.join(__dirname, 'extracted-modules', 'module-map.json');
const APP_MAP_PATH = path.join(__dirname, 'src', 'module-map.json');
const OUTPUT_VENDOR_DIR = path.join(__dirname, 'annotated-modules', 'vendor');
const OUTPUT_APP_DIR = path.join(__dirname, 'annotated-modules', 'app');

// Statistics
const stats = {
  filesProcessed: 0,
  requireCallsTotal: 0,
  requireCallsResolved: 0,
  requireCallsUnresolved: 0
};

/**
 * Load module maps
 */
function loadModuleMaps() {
  const vendorMap = {};
  const appMap = {};
  
  // Load vendor map (ID -> class name)
  if (fs.existsSync(VENDOR_MAP_PATH)) {
    const vendorData = JSON.parse(fs.readFileSync(VENDOR_MAP_PATH, 'utf8'));
    Object.assign(vendorMap, vendorData);
    console.log(`Loaded ${Object.keys(vendorMap).length} vendor class mappings`);
  } else {
    console.warn('Warning: vendor module map not found');
  }
  
  // Load app map (ID -> module info)
  if (fs.existsSync(APP_MAP_PATH)) {
    const appData = JSON.parse(fs.readFileSync(APP_MAP_PATH, 'utf8'));
    // Convert to ID -> name mapping
    for (const [id, info] of Object.entries(appData)) {
      if (info.name) {
        appMap[id] = info.name;
      }
    }
    console.log(`Loaded ${Object.keys(appMap).length} app module mappings\n`);
  } else {
    console.warn('Warning: app module map not found\n');
  }
  
  return { vendorMap, appMap };
}

/**
 * Parse module function to determine which parameter is the require function
 * Webpack modules follow: function(e, t, n) where n is usually require
 */
function findRequireParamName(code) {
  try {
    const ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script'
    });
    
    // Find the function declaration or expression
    let funcNode = null;
    
    if (ast.body.length > 0) {
      const firstNode = ast.body[0];
      
      if (firstNode.type === 'FunctionDeclaration') {
        funcNode = firstNode;
      } else if (firstNode.type === 'ExpressionStatement' && 
                 firstNode.expression.type === 'FunctionExpression') {
        funcNode = firstNode.expression;
      }
    }
    
    // The require function is the 3rd parameter
    if (funcNode && funcNode.params && funcNode.params.length >= 3) {
      return funcNode.params[2].name;
    }
    
    // Fallback: look for common patterns
    const match = code.match(/function\s*\(\s*\w+\s*,\s*\w+\s*,\s*(\w+)\s*\)/);
    if (match) {
      return match[1];
    }
    
    return null;
  } catch (e) {
    // If parsing fails, try regex fallback
    const match = code.match(/function\s*\(\s*\w+\s*,\s*\w+\s*,\s*(\w+)\s*\)/);
    return match ? match[1] : null;
  }
}

/**
 * Annotate require() calls in module code
 */
function annotateRequires(code, moduleMap) {
  const requireParam = findRequireParamName(code);
  
  if (!requireParam) {
    // No webpack module pattern found, return unchanged
    return code;
  }
  
  // Find all require calls: requireParam(number)
  // Pattern: var x = requireParam(123)
  // Pattern: requireParam(456)
  // Pattern: o = requireParam(789)
  
  const requirePattern = new RegExp(
    `\\b${requireParam}\\s*\\(\\s*(\\d+)\\s*\\)`,
    'g'
  );
  
  let annotatedCode = code;
  const matches = [];
  let match;
  
  // Collect all matches first
  while ((match = requirePattern.exec(code)) !== null) {
    matches.push({
      fullMatch: match[0],
      moduleId: match[1],
      index: match.index
    });
  }
  
  // Process matches in reverse order to maintain correct indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    const moduleId = m.moduleId;
    stats.requireCallsTotal++;
    
    let comment;
    if (moduleMap[moduleId]) {
      comment = ` /* ${moduleMap[moduleId]} */`;
      stats.requireCallsResolved++;
    } else {
      comment = ` /* module_${moduleId} */`;
      stats.requireCallsUnresolved++;
    }
    
    // Insert comment after the require call
    const insertPos = m.index + m.fullMatch.length;
    annotatedCode = 
      annotatedCode.slice(0, insertPos) + 
      comment + 
      annotatedCode.slice(insertPos);
  }
  
  return annotatedCode;
}

/**
 * Process a single module file
 */
async function processModuleFile(inputPath, outputPath, moduleMap) {
  const code = await fs.readFile(inputPath, 'utf8');
  const annotatedCode = annotateRequires(code, moduleMap);
  
  await fs.ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, annotatedCode);
  
  stats.filesProcessed++;
}

/**
 * Process all modules in a directory
 */
async function processDirectory(inputDir, outputDir, moduleMap, label) {
  console.log(`Processing ${label}...`);
  
  if (!fs.existsSync(inputDir)) {
    console.log(`  Directory not found: ${inputDir}`);
    return;
  }
  
  const files = await fs.readdir(inputDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  
  console.log(`  Found ${jsFiles.length} JavaScript files`);
  
  for (const file of jsFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    await processModuleFile(inputPath, outputPath, moduleMap);
  }
  
  console.log(`  ✓ Processed ${jsFiles.length} files\n`);
}

/**
 * Generate report
 */
function generateReport() {
  console.log('\n' + '='.repeat(60));
  console.log('RESOLUTION REPORT');
  console.log('='.repeat(60));
  console.log(`Files processed:         ${stats.filesProcessed}`);
  console.log(`Total require() calls:   ${stats.requireCallsTotal}`);
  if (stats.requireCallsTotal > 0) {
    console.log(`Resolved:                ${stats.requireCallsResolved} (${Math.round(stats.requireCallsResolved / stats.requireCallsTotal * 100)}%)`);
    console.log(`Unresolved:              ${stats.requireCallsUnresolved} (${Math.round(stats.requireCallsUnresolved / stats.requireCallsTotal * 100)}%)`);
  } else {
    console.log(`Resolved:                0`);
    console.log(`Unresolved:              0`);
  }
  console.log('='.repeat(60));
  
  // Save report to file
  const report = {
    timestamp: new Date().toISOString(),
    filesProcessed: stats.filesProcessed,
    requireCalls: {
      total: stats.requireCallsTotal,
      resolved: stats.requireCallsResolved,
      unresolved: stats.requireCallsUnresolved,
      resolvedPercentage: stats.requireCallsTotal > 0 ? Math.round(stats.requireCallsResolved / stats.requireCallsTotal * 100) : 0
    }
  };
  
  fs.writeFileSync(
    path.join(__dirname, 'annotated-modules', 'resolution-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\nReport saved to: annotated-modules/resolution-report.json\n');
}

/**
 * Main execution
 */
async function main() {
  console.log('Resolve Requires Script');
  console.log('=======================\n');
  
  // Load module maps
  const { vendorMap, appMap } = loadModuleMaps();
  
  // Combine both maps (app modules take precedence for overlaps)
  const combinedMap = { ...vendorMap, ...appMap };
  
  // Process app modules from src/modules
  await processDirectory(
    SRC_MODULES_DIR,
    OUTPUT_APP_DIR,
    combinedMap,
    'App modules (src/modules)'
  );
  
  // Note: Vendor modules would be processed similarly if they were extracted
  // to a separate directory. For now, we only have app modules extracted.
  
  // Generate report
  generateReport();
  
  console.log('✓ Done!');
  console.log(`\nAnnotated modules written to:`);
  console.log(`  - ${OUTPUT_APP_DIR}`);
  console.log(`  - ${OUTPUT_VENDOR_DIR} (if vendor modules exist)`);
}

// Run
main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
