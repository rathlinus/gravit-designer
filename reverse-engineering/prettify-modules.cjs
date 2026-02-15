#!/usr/bin/env node
/**
 * prettify-modules.cjs
 * 
 * Uses prettier to format extracted webpack modules for maximum readability.
 * Processes deobfuscated modules and outputs to readable-modules/.
 * 
 * Usage: node prettify-modules.cjs [--app-only] [--vendor-only]
 */

const fs = require('fs');
const path = require('path');

// Read from readable-modules (after apply-names has written there) and write back in-place
const DEOB_APP_DIR = path.join(__dirname, 'readable-modules', 'app');
const DEOB_VENDOR_DIR = path.join(__dirname, 'readable-modules', 'vendor');
const OUT_APP_DIR = path.join(__dirname, 'readable-modules', 'app');
const OUT_VENDOR_DIR = path.join(__dirname, 'readable-modules', 'vendor');

const args = process.argv.slice(2);
const appOnly = args.includes('--app-only');
const vendorOnly = args.includes('--vendor-only');

const stats = {
  total: 0,
  prettified: 0,
  fallbackCopy: 0,
  parseErrors: 0,
};

const PRETTIER_OPTIONS = {
  parser: 'babel',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
};

/**
 * Prettify a single module file using prettier
 */
async function prettifyModule(code, filename) {
  const prettier = require('prettier');
  
  // Find the actual function declaration (not inside comments)
  // Skip past the closing */ of the JSDoc comment
  let funcIndex = -1;
  const commentEnd = code.indexOf('*/');
  if (commentEnd !== -1) {
    funcIndex = code.indexOf('function', commentEnd);
  } else {
    funcIndex = code.indexOf('function');
  }
  
  if (funcIndex === -1) {
    try {
      const formatted = await prettier.format(code, PRETTIER_OPTIONS);
      return formatted;
    } catch (e) {
      return null;
    }
  }
  
  const header = code.substring(0, funcIndex);
  const funcCode = code.substring(funcIndex);
  
  // Wrap as a variable assignment to make it a valid statement
  const wrappedCode = 'var __module__ = ' + funcCode;
  
  try {
    let formatted = await prettier.format(wrappedCode, PRETTIER_OPTIONS);
    
    // Unwrap: remove the "var __module__ = " prefix
    formatted = formatted.replace(/^var __module__ = /, '');
    
    // Remove trailing semicolon and newline added by prettier
    formatted = formatted.replace(/;\s*$/, '\n');
    
    return header + formatted;
  } catch (parseErr) {
    // Try parsing the function body only  
    try {
      const bodyMatch = funcCode.match(/^(function\s*\([^)]*\)\s*\{)([\s\S]*)\}\s*$/);
      if (bodyMatch) {
        const funcSignature = bodyMatch[1];
        const body = bodyMatch[2];
        
        const formattedBody = await prettier.format(body, PRETTIER_OPTIONS);
        
        const indentedBody = formattedBody
          .split('\n')
          .map(line => line ? '  ' + line : line)
          .join('\n');
        
        return header + funcSignature + '\n' + indentedBody + '}\n';
      }
    } catch (e2) {
      // Continue
    }
    
    // Last resort: format as-is
    try {
      const formatted = await prettier.format(code, PRETTIER_OPTIONS);
      return formatted;
    } catch (e3) {
      stats.parseErrors++;
      return null;
    }
  }
}

/**
 * Recursively find all .js files in a directory
 */
function findJsFiles(dir, baseDir) {
  baseDir = baseDir || dir;
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findJsFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.js')) {
      results.push(path.relative(baseDir, fullPath));
    }
  }
  return results;
}

/**
 * Process a directory of modules (supports nested subdirectories)
 */
async function processDirectory(inputDir, outputDir, label) {
  if (!fs.existsSync(inputDir)) {
    console.log(`Skipping ${label}: directory not found`);
    return;
  }
  
  fs.mkdirSync(outputDir, { recursive: true });
  
  const files = findJsFiles(inputDir);
  console.log(`\nProcessing ${files.length} ${label} modules...`);
  
  const BATCH_SIZE = 50;
  let processed = 0;
  
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    
    await Promise.all(batch.map(async (relPath) => {
      const inputPath = path.join(inputDir, relPath);
      const outputPath = path.join(outputDir, relPath);
      
      // Ensure subdirectory exists
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      
      const code = fs.readFileSync(inputPath, 'utf8');
      stats.total++;
      
      const prettified = await prettifyModule(code, relPath);
      
      if (prettified) {
        fs.writeFileSync(outputPath, prettified);
        stats.prettified++;
      } else {
        fs.writeFileSync(outputPath, code);
        stats.fallbackCopy++;
      }
    }));
    
    processed += batch.length;
    process.stdout.write(`  ${processed}/${files.length}\r`);
  }
  
  console.log(`  ${processed}/${files.length} done`);
}

async function main() {
  console.log('=== Module Prettifier (prettier) ===\n');
  
  const startTime = Date.now();
  
  if (!vendorOnly) {
    await processDirectory(DEOB_APP_DIR, OUT_APP_DIR, 'app');
  }
  
  if (!appOnly) {
    await processDirectory(DEOB_VENDOR_DIR, OUT_VENDOR_DIR, 'vendor');
  }
  
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  
  console.log('\n=== Prettify Results ===');
  console.log(`Total modules: ${stats.total}`);
  console.log(`Prettified:    ${stats.prettified} (${(stats.prettified / stats.total * 100).toFixed(1)}%)`);
  console.log(`Fallback copy: ${stats.fallbackCopy}`);
  console.log(`Parse errors:  ${stats.parseErrors}`);
  console.log(`Time:          ${elapsed}s`);
  
  // Show a sample comparison
  if (!vendorOnly) {
    const sampleFile = fs.readdirSync(DEOB_APP_DIR).find(f => f.includes('GContainer') || f.includes('GAction'));
    if (sampleFile) {
      const original = fs.readFileSync(path.join(DEOB_APP_DIR, sampleFile), 'utf8');
      const pretty = fs.readFileSync(path.join(OUT_APP_DIR, sampleFile), 'utf8');
      const origLines = original.split('\n').length;
      const prettyLines = pretty.split('\n').length;
      console.log(`\nSample: ${sampleFile}`);
      console.log(`  Original:  ${origLines} lines, ${original.length} bytes`);
      console.log(`  Prettified: ${prettyLines} lines, ${pretty.length} bytes`);
      console.log(`  Expansion: ${(prettyLines / origLines).toFixed(1)}x lines`);
    }
  }
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    stats,
    elapsedSeconds: parseFloat(elapsed)
  };
  fs.mkdirSync(path.join(__dirname, 'reports'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, 'reports', 'prettify-report.json'), JSON.stringify(report, null, 2));
  console.log('\nSaved reports/prettify-report.json');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
