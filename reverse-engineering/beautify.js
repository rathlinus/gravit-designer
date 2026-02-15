/**
 * Gravit Designer Reverse Engineering - Code Beautifier
 * 
 * Formats the minified code for readability and adds back some structure.
 * 
 * Usage: node beautify.js
 */

const fs = require('fs-extra');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'beautified');

// Common minified variable names and their likely meanings
const VARIABLE_HINTS = {
  // Webpack require function
  'n': 'require', // in modules
  'i': 'require', // alternative
  // Module exports
  'e': 'module',
  't': 'exports',
  // Common patterns
  'o': 'GObject or result',
  'a': 'GEventTarget or array',
  'r': 'GEvent or reference',
  's': 'string or state',
  'l': 'length or local',
  'c': 'count or callback',
  'h': 'handler or helper',
  'p': 'prototype or property',
  'u': 'undefined or util',
  'd': 'data or document',
};

async function beautify() {
  console.log('🎨 Gravit Designer Code Beautifier');
  console.log('===================================\n');
  
  await fs.ensureDir(OUTPUT_DIR);
  
  const files = [
    { name: 'chunk.vendor.js', desc: 'Core engine (GObject, GScene, etc.)' },
    { name: 'designer.browser.js', desc: 'Application code' },
    { name: 'chunk.vendors~heic2any.js', desc: 'HEIC image format support' },
    { name: 'chunk.vendors~pdfjsWorker.js', desc: 'PDF.js library' },
  ];
  
  for (const file of files) {
    console.log(`📄 Processing ${file.name} - ${file.desc}`);
    
    const inputPath = path.join(PUBLIC_DIR, file.name);
    const outputPath = path.join(OUTPUT_DIR, file.name);
    
    if (!(await fs.pathExists(inputPath))) {
      console.log(`   ⚠️ File not found: ${inputPath}`);
      continue;
    }
    
    let code = await fs.readFile(inputPath, 'utf8');
    
    // Basic beautification without external dependencies
    code = beautifyCode(code);
    
    await fs.writeFile(outputPath, code);
    console.log(`   ✅ Saved: ${outputPath}`);
  }
  
  // Save variable hints
  const hintsPath = path.join(OUTPUT_DIR, 'variable-hints.json');
  await fs.writeJson(hintsPath, VARIABLE_HINTS, { spaces: 2 });
  console.log(`\n📝 Variable hints saved to: ${hintsPath}`);
  
  console.log('\n✨ Beautification complete!');
  console.log('\n💡 Tips for reading the code:');
  console.log('   - Look for .prototype. to find class methods');
  console.log('   - Search for "GObject.inherit" to find class definitions');
  console.log('   - String literals are preserved and searchable');
  console.log('   - Event names like "GEditor.ModifiedEvent" are intact');
}

function beautifyCode(code) {
  // Add newlines after semicolons (basic formatting)
  code = code.replace(/;(?!\s*\n)/g, ';\n');
  
  // Add newlines after opening braces
  code = code.replace(/\{(?!\s*\n)/g, '{\n');
  
  // Add newlines before closing braces
  code = code.replace(/(?<!\n\s*)\}/g, '\n}');
  
  // Add newlines after commas in object literals (simple cases)
  code = code.replace(/,(?=\s*[a-zA-Z_$][\w$]*\s*:)/g, ',\n');
  
  // Fix multiple newlines
  code = code.replace(/\n{3,}/g, '\n\n');
  
  // Add basic indentation (rough)
  const lines = code.split('\n');
  let indent = 0;
  const indentedLines = lines.map(line => {
    const trimmed = line.trim();
    
    // Decrease indent for closing braces
    if (trimmed.startsWith('}') || trimmed.startsWith(']') || trimmed.startsWith(')')) {
      indent = Math.max(0, indent - 1);
    }
    
    const result = '  '.repeat(indent) + trimmed;
    
    // Increase indent after opening braces
    const opens = (trimmed.match(/[\[{(]/g) || []).length;
    const closes = (trimmed.match(/[\]\})]/g) || []).length;
    indent += opens - closes;
    indent = Math.max(0, indent);
    
    return result;
  });
  
  return indentedLines.join('\n');
}

beautify().catch(console.error);
