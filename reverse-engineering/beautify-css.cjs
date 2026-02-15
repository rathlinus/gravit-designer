/**
 * Beautify CSS files for development
 * 
 * Beautifies minified CSS with proper indentation and formatting,
 * extracts class/ID selectors, and generates a diff report.
 * 
 * Usage: node beautify-css.cjs
 */

const fs = require('fs-extra');
const path = require('path');

// Directories
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'css');

const CSS_FILES = [
  'designer.browser.dark.css',
  'designer.browser.light.css'
];

/**
 * Beautify CSS code
 */
function beautifyCSS(css) {
  let beautified = css;
  
  // Add newlines after closing braces (rules end)
  beautified = beautified.replace(/}\s*/g, '}\n\n');
  
  // Add newline and indentation after opening braces
  beautified = beautified.replace(/\{\s*/g, ' {\n  ');
  
  // Add newline after semicolons (within rules)
  beautified = beautified.replace(/;\s*/g, ';\n  ');
  
  // Clean up: remove extra indentation before closing braces
  beautified = beautified.replace(/\s+}/g, '\n}');
  
  // Clean up multiple newlines
  beautified = beautified.replace(/\n{3,}/g, '\n\n');
  
  // Trim whitespace
  beautified = beautified.trim();
  
  return beautified;
}

/**
 * Extract CSS selectors (classes and IDs)
 */
function extractSelectors(css) {
  const selectors = {
    classes: new Set(),
    ids: new Set(),
    byPrefix: {}
  };
  
  // Match CSS selectors (simplified)
  const selectorPattern = /([\.#][\w-]+)/g;
  let match;
  
  while ((match = selectorPattern.exec(css)) !== null) {
    const selector = match[1];
    
    if (selector.startsWith('.')) {
      const className = selector.slice(1);
      selectors.classes.add(className);
      
      // Group by prefix
      const prefix = className.split('-')[0];
      if (!selectors.byPrefix[prefix]) {
        selectors.byPrefix[prefix] = [];
      }
      selectors.byPrefix[prefix].push(className);
    } else if (selector.startsWith('#')) {
      const idName = selector.slice(1);
      selectors.ids.add(idName);
    }
  }
  
  return {
    classes: Array.from(selectors.classes).sort(),
    ids: Array.from(selectors.ids).sort(),
    byPrefix: Object.fromEntries(
      Object.entries(selectors.byPrefix).map(([k, v]) => [k, Array.from(new Set(v)).sort()])
    )
  };
}

/**
 * Generate diff between two CSS files
 */
function generateDiff(css1, css2, name1, name2) {
  const lines1 = css1.split('\n');
  const lines2 = css2.split('\n');
  
  const diff = [];
  diff.push(`# Diff Report: ${name1} vs ${name2}`);
  diff.push('');
  diff.push(`Total lines in ${name1}: ${lines1.length}`);
  diff.push(`Total lines in ${name2}: ${lines2.length}`);
  diff.push('');
  
  // Count differences
  let differences = 0;
  const maxCheck = Math.min(lines1.length, lines2.length, 1000); // Check first 1000 lines
  
  for (let i = 0; i < maxCheck; i++) {
    if (lines1[i] !== lines2[i]) {
      differences++;
    }
  }
  
  diff.push(`Differences in first ${maxCheck} lines: ${differences}`);
  diff.push('');
  
  // Extract color differences (common in dark/light themes)
  const colorPattern = /#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)/g;
  const colors1 = new Set(css1.match(colorPattern) || []);
  const colors2 = new Set(css2.match(colorPattern) || []);
  
  diff.push('## Color Differences');
  diff.push('');
  diff.push(`Colors only in ${name1}: ${Array.from(colors1).filter(c => !colors2.has(c)).length}`);
  diff.push(`Colors only in ${name2}: ${Array.from(colors2).filter(c => !colors1.has(c)).length}`);
  diff.push(`Common colors: ${Array.from(colors1).filter(c => colors2.has(c)).length}`);
  
  return diff.join('\n');
}

/**
 * Process a single CSS file
 */
async function processCSSFile(filename) {
  console.log(`Processing ${filename}...`);
  
  const inputPath = path.join(PUBLIC_DIR, filename);
  const outputPath = path.join(OUTPUT_DIR, filename);
  
  // Read CSS
  const css = await fs.readFile(inputPath, 'utf8');
  const sizeKB = (css.length / 1024).toFixed(1);
  console.log(`  Input size: ${sizeKB} KB`);
  
  // Beautify
  console.log('  Beautifying...');
  const beautified = beautifyCSS(css);
  
  // Extract selectors
  console.log('  Extracting selectors...');
  const selectors = extractSelectors(css);
  console.log(`  Found ${selectors.classes.length} classes, ${selectors.ids.length} IDs`);
  
  // Write beautified CSS
  await fs.ensureDir(OUTPUT_DIR);
  await fs.writeFile(outputPath, beautified);
  
  const outputSizeKB = (beautified.length / 1024).toFixed(1);
  console.log(`  Output size: ${outputSizeKB} KB`);
  console.log(`  ✓ Written to ${path.relative(process.cwd(), outputPath)}\n`);
  
  return { beautified, selectors };
}

/**
 * Main execution
 */
async function main() {
  console.log('Beautify CSS Script');
  console.log('==================\n');
  
  const results = {};
  
  // Process each CSS file
  for (const filename of CSS_FILES) {
    try {
      const result = await processCSSFile(filename);
      results[filename] = result;
    } catch (err) {
      console.error(`Error processing ${filename}:`, err.message);
    }
  }
  
  // Generate combined selector report
  console.log('Generating CSS report...');
  const allSelectors = {
    dark: results['designer.browser.dark.css']?.selectors,
    light: results['designer.browser.light.css']?.selectors
  };
  
  const reportPath = path.join(OUTPUT_DIR, 'css-report.json');
  await fs.writeFile(reportPath, JSON.stringify(allSelectors, null, 2));
  console.log(`✓ Selector report written to ${path.relative(process.cwd(), reportPath)}\n`);
  
  // Generate diff report
  if (results['designer.browser.dark.css'] && results['designer.browser.light.css']) {
    console.log('Generating diff report...');
    const diff = generateDiff(
      results['designer.browser.dark.css'].beautified,
      results['designer.browser.light.css'].beautified,
      'dark',
      'light'
    );
    
    const diffPath = path.join(OUTPUT_DIR, 'diff-report.md');
    await fs.writeFile(diffPath, diff);
    console.log(`✓ Diff report written to ${path.relative(process.cwd(), diffPath)}\n`);
  }
  
  console.log('✓ Done!');
  console.log(`\nBeautified CSS files written to: ${OUTPUT_DIR}`);
}

// Run
main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
