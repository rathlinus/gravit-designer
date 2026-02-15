/**
 * Extract and beautify worker files
 * 
 * Extracts webpack modules from worker bundles and beautifies standalone workers.
 * 
 * Usage: node extract-workers.cjs
 */

const fs = require('fs-extra');
const path = require('path');
const acorn = require('acorn');
const astring = require('astring');

// Directories
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'workers');

// Worker files
const WORKERS = {
  'autosave.worker.js': {
    type: 'webpack',
    purpose: 'Autosave logic'
  },
  'pdf.worker.js': {
    type: 'standalone',
    purpose: 'PDF rendering (mozilla pdf.js)'
  },
  'pdfexport.worker.js': {
    type: 'standalone',
    purpose: 'PDF export'
  },
  'ps.worker.js': {
    type: 'standalone',
    purpose: 'PostScript support'
  }
};

// Statistics
const stats = {
  workersProcessed: 0,
  modulesExtracted: 0,
  standaloneBeautified: 0
};

/**
 * Determine if a file is a webpack bundle
 */
function isWebpackBundle(code) {
  // Check for webpack signatures
  return code.includes('webpackJsonp') || 
         (code.includes('function(e)') && code.includes('i.m=e') && code.includes('i.c=')) ||
         code.match(/var \w+=function\(e\)\{var t=\{\}/);
}

/**
 * Extract modules from webpack bundle (simplified)
 */
function extractWebpackModules(code, workerName) {
  console.log('  Detected webpack bundle');
  console.log('  Note: This is a simplified extraction. For full extraction,');
  console.log('  use a proper webpack module extractor similar to extract-all-modules.cjs');
  
  // For now, just beautify the whole bundle
  // A proper implementation would parse the bundle structure and extract individual modules
  try {
    const ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script'
    });
    
    const beautified = astring.generate(ast, {
      indent: '  ',
      lineEnd: '\n'
    });
    
    return beautified;
  } catch (e) {
    console.warn('  Warning: Could not parse as AST, returning original');
    return code;
  }
}

/**
 * Beautify standalone worker
 */
function beautifyStandalone(code) {
  try {
    const ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script',
      allowHashBang: true
    });
    
    const beautified = astring.generate(ast, {
      indent: '  ',
      lineEnd: '\n'
    });
    
    // Apply safe transforms
    let transformed = beautified;
    transformed = transformed.replace(/!0/g, 'true');
    transformed = transformed.replace(/!1/g, 'false');
    transformed = transformed.replace(/void 0/g, 'undefined');
    
    return transformed;
  } catch (e) {
    console.warn('  Warning: Could not parse as AST, returning original');
    return code;
  }
}

/**
 * Process a worker file
 */
async function processWorker(filename, info) {
  console.log(`\nProcessing ${filename}...`);
  console.log(`  Type: ${info.type}`);
  console.log(`  Purpose: ${info.purpose}`);
  
  const inputPath = path.join(PUBLIC_DIR, filename);
  const baseName = path.basename(filename, '.js');
  const outputDir = path.join(OUTPUT_DIR, baseName);
  
  // Read file
  const code = await fs.readFile(inputPath, 'utf8');
  const sizeKB = (code.length / 1024).toFixed(1);
  const sizeMB = (code.length / 1024 / 1024).toFixed(2);
  console.log(`  Size: ${sizeMB} MB (${sizeKB} KB)`);
  
  // Check if webpack bundle
  const isWebpack = isWebpackBundle(code);
  
  let processed;
  if (isWebpack) {
    processed = extractWebpackModules(code, baseName);
    stats.modulesExtracted++;
  } else {
    processed = beautifyStandalone(code);
    stats.standaloneBeautified++;
  }
  
  // Write output
  await fs.ensureDir(outputDir);
  const outputFile = path.join(outputDir, filename);
  await fs.writeFile(outputFile, processed);
  
  const outputSizeKB = (processed.length / 1024).toFixed(1);
  console.log(`  Output size: ${outputSizeKB} KB`);
  console.log(`  ✓ Written to ${path.relative(process.cwd(), outputFile)}`);
  
  stats.workersProcessed++;
  
  return {
    filename,
    isWebpack,
    inputSize: code.length,
    outputSize: processed.length
  };
}

/**
 * Generate build script (stub)
 */
async function generateBuildScript(results) {
  console.log('\n\nGenerating build-workers.cjs...');
  
  const script = `/**
 * Rebuild worker files from extracted sources
 * 
 * This is a stub script. To properly rebuild workers:
 * 1. For webpack workers: use webpack to bundle the extracted modules
 * 2. For standalone workers: concatenate and minify as needed
 * 
 * Usage: node build-workers.cjs
 */

const fs = require('fs');
const path = require('path');

console.log('Build Workers Script');
console.log('===================\\n');

// TODO: Implement worker rebuilding
console.log('⚠️  This script is a stub.');
console.log('To rebuild workers, you need to:');
console.log('');

// autosave.worker.js (webpack bundle)
console.log('// autosave.worker.js (webpack bundle)');
console.log('// - Extract individual modules using a proper webpack extractor');
console.log('// - Bundle them back using webpack');
console.log('');

// pdf.worker.js (standalone/webpack)
console.log('// pdf.worker.js (may be webpack or standalone)');
console.log('// - Check the extracted file to determine type');
console.log('// - Use appropriate rebuild method');
console.log('');

// pdfexport.worker.js (standalone)
console.log('// pdfexport.worker.js (standalone)');
console.log('// - Use the beautified version from workers/pdfexport.worker/');
console.log('');

// ps.worker.js (standalone)
console.log('// ps.worker.js (standalone)');
console.log('// - Use the beautified version from workers/ps.worker/');
console.log('');

console.log('For now, use the original worker files from public/');
process.exit(1);
`;
  
  const scriptPath = path.join(__dirname, 'build-workers.cjs');
  await fs.writeFile(scriptPath, script);
  
  console.log(`✓ Build script saved: ${path.relative(process.cwd(), scriptPath)}`);
}

/**
 * Generate README
 */
async function generateReadme(results) {
  const lines = [];
  lines.push('# Worker Files');
  lines.push('');
  lines.push('Extracted and beautified worker files from Gravit Designer.');
  lines.push('');
  
  for (const result of results) {
    lines.push(`## ${result.filename}`);
    lines.push('');
    lines.push(`- Type: ${result.isWebpack ? 'Webpack bundle' : 'Standalone'}`);
    lines.push(`- Input size: ${(result.inputSize / 1024 / 1024).toFixed(2)} MB`);
    lines.push(`- Output size: ${(result.outputSize / 1024 / 1024).toFixed(2)} MB`);
    lines.push('');
    
    if (result.isWebpack) {
      lines.push('This is a webpack bundle. For full module extraction, use a proper webpack extractor.');
      lines.push('');
    }
  }
  
  const readmePath = path.join(OUTPUT_DIR, 'README.md');
  await fs.writeFile(readmePath, lines.join('\n'));
  
  console.log(`✓ README saved: ${path.relative(process.cwd(), readmePath)}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('Extract Workers Script');
  console.log('=====================\n');
  
  const results = [];
  
  // Process each worker
  for (const [filename, info] of Object.entries(WORKERS)) {
    try {
      const result = await processWorker(filename, info);
      results.push(result);
    } catch (e) {
      console.error(`Error processing ${filename}:`, e.message);
    }
  }
  
  // Generate build script
  await generateBuildScript(results);
  
  // Generate README
  await generateReadme(results);
  
  // Report
  console.log('\n' + '='.repeat(60));
  console.log('EXTRACTION REPORT');
  console.log('='.repeat(60));
  console.log(`Workers processed:       ${stats.workersProcessed}`);
  console.log(`Webpack bundles:         ${stats.modulesExtracted}`);
  console.log(`Standalone beautified:   ${stats.standaloneBeautified}`);
  console.log('='.repeat(60));
  
  console.log('\n✓ Done!');
  console.log(`\nExtracted workers written to: ${OUTPUT_DIR}`);
}

// Run
main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
