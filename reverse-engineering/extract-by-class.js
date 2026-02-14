/**
 * Gravit Designer Reverse Engineering - Class-Based Extractor
 * 
 * This script extracts individual classes from chunk.vendor.js by searching
 * for class definitions and extracting all related code (constructor, 
 * prototype methods, static properties, etc.)
 * 
 * This approach is more reliable than trying to parse the webpack bundle structure.
 * 
 * Usage: node extract-by-class.js
 */

const fs = require('fs-extra');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'extracted-classes');

// Load module map
const MODULE_MAP = require('./extracted-modules/module-map.json');

// Get all known class names
const KNOWN_CLASSES = Object.values(MODULE_MAP);

// Category mapping
function getCategory(className) {
  if (!className) return 'other';
  
  const categories = {
    core: /^(GObject|GNode|GEvent|GEventTarget|GLocale|GUtil|GMath|GSystem|GLocaleKey|GLocaleLanguage|GDate|GTranslation|GDictionary)$/,
    scene: /(Scene|Element|Layer|Page|Group|Block|Item|Symbol|Stylable|Style|Swatch|Background|Workspace|Actionable|SceneDictionary|ActionItem|Annotable)/,
    geometry: /(Point|Rect|Transform|PathBase|PathUtil|Path|Vertex|Shape|Polygon|Ellipse|Rectangle|Compound|Connector|Slice|SimpleShape|Length)/,
    effects: /(Effect|Shadow|Blur|Glow|Mirror|Overlay)/,
    rendering: /(Paint|Renderer|Canvas|Color|Gradient|Pattern|Bitmap|Image|WebGL|HitResult|HSV|CMYK|RGB|Texture)/,
    text: /(Text|Font|OpenType|TL|Collab)/,
    annotations: /(Annotation|Comment)/,
  };
  
  for (const [category, pattern] of Object.entries(categories)) {
    if (pattern.test(className)) {
      return category;
    }
  }
  
  return 'other';
}

async function extractByClass() {
  console.log('📦 Gravit Designer Class-Based Extractor');
  console.log('==========================================\n');
  
  // Create output directories
  const categories = ['core', 'scene', 'geometry', 'effects', 'rendering', 'text', 'annotations', 'other'];
  for (const cat of categories) {
    await fs.ensureDir(path.join(OUTPUT_DIR, cat));
  }
  
  // Read the vendor chunk
  const vendorPath = path.join(PUBLIC_DIR, 'chunk.vendor.js');
  if (!(await fs.pathExists(vendorPath))) {
    console.error('❌ chunk.vendor.js not found');
    return;
  }
  
  const vendorCode = await fs.readFile(vendorPath, 'utf8');
  console.log(`📄 Reading vendor bundle (${(vendorCode.length / 1024 / 1024).toFixed(2)} MB)`);
  console.log(`📝 Extracting ${KNOWN_CLASSES.length} known classes\n`);
  
  let extractedCount = 0;
  let failedClasses = [];
  
  for (let i = 0; i < KNOWN_CLASSES.length; i++) {
    const className = KNOWN_CLASSES[i];
    
    try {
      const classCode = extractClassCode(vendorCode, className);
      
      if (classCode && classCode.length > 100) {
        const category = getCategory(className);
        const fileName = `${className}.js`;
        const outputPath = path.join(OUTPUT_DIR, category, fileName);
        
        const header = generateHeader(className);
        await fs.writeFile(outputPath, header + classCode);
        extractedCount++;
        
        if (extractedCount % 20 === 0) {
          console.log(`   Extracted ${extractedCount}/${KNOWN_CLASSES.length} classes...`);
        }
      } else {
        failedClasses.push(className);
      }
    } catch (error) {
      console.log(`   ⚠️ Error extracting ${className}: ${error.message}`);
      failedClasses.push(className);
    }
  }
  
  console.log(`\n✅ Successfully extracted ${extractedCount} classes`);
  
  if (failedClasses.length > 0) {
    console.log(`⚠️ Failed to extract ${failedClasses.length} classes:`);
    console.log(`   ${failedClasses.slice(0, 10).join(', ')}${failedClasses.length > 10 ? '...' : ''}`);
  }
  
  // Create index and reports
  await createIndex(OUTPUT_DIR);
  await createReport(extractedCount, failedClasses, OUTPUT_DIR);
  
  // Show category breakdown
  console.log('\n📁 Extracted classes by category:');
  for (const cat of categories) {
    const catPath = path.join(OUTPUT_DIR, cat);
    if (await fs.pathExists(catPath)) {
      const files = await fs.readdir(catPath);
      if (files.length > 0) {
        console.log(`   ${cat.padEnd(15)} - ${files.length} classes`);
      }
    }
  }
  
  console.log(`\n✨ Extraction complete!`);
  console.log(`📂 Output: ${OUTPUT_DIR}/`);
}

function extractClassCode(sourceCode, className) {
  const segments = [];
  
  // 1. Find constructor function
  // Pattern: function ClassName() { ... }
  const constructorPattern = new RegExp(
    `function\\s+${escapeRegExp(className)}\\s*\\([^)]*\\)\\s*{`,
    'g'
  );
  
  let match = constructorPattern.exec(sourceCode);
  if (match) {
    const funcStart = match.index;
    const funcBody = extractFunctionBody(sourceCode, match.index + match[0].length);
    segments.push({
      pos: funcStart,
      code: sourceCode.slice(funcStart, funcStart + match[0].length + funcBody.length + 1)
    });
  }
  
  // 2. Find inheritance declarations
  // Pattern: GObject.inherit(ClassName, ParentClass)
  const inheritPatterns = [
    new RegExp(`GObject\\.inherit\\(\\s*${escapeRegExp(className)}\\s*,[^)]+\\)`, 'g'),
    new RegExp(`GObject\\.inheritAndMix\\(\\s*${escapeRegExp(className)}\\s*,[^)]+\\)`, 'g')
  ];
  
  for (const pattern of inheritPatterns) {
    let m = pattern.exec(sourceCode);
    if (m) {
      segments.push({ pos: m.index, code: m[0] + ';' });
    }
  }
  
  // 3. Find all prototype methods
  // Pattern: ClassName.prototype.methodName = function(...) { ... }
  const prototypePattern = new RegExp(
    `${escapeRegExp(className)}\\.prototype\\.(\\w+)\\s*=\\s*function\\s*\\([^)]*\\)\\s*{`,
    'g'
  );
  
  while ((match = prototypePattern.exec(sourceCode)) !== null) {
    const methodStart = match.index;
    const funcBody = extractFunctionBody(sourceCode, match.index + match[0].length);
    segments.push({
      pos: methodStart,
      code: sourceCode.slice(methodStart, methodStart + match[0].length + funcBody.length + 1) + ';'
    });
  }
  
  // 4. Find static properties and methods
  // Pattern: ClassName.PROPERTY = value;
  // Pattern: ClassName.method = function(...) { ... };
  const staticPattern = new RegExp(
    `${escapeRegExp(className)}\\.(\\w+)\\s*=([^;]+);`,
    'g'
  );
  
  while ((match = staticPattern.exec(sourceCode)) !== null) {
    const propertyName = match[1];
    // Skip 'prototype' assignments (already handled above)
    if (propertyName === 'prototype') continue;
    
    segments.push({ pos: match.index, code: match[0] });
  }
  
  // 5. Find event class definitions if this is an event
  // Pattern: ClassName.EventName = function() { ... }
  if (className.includes('Event') || className === 'GEvent') {
    const eventPattern = new RegExp(
      `${escapeRegExp(className)}\\.(\\w+Event)\\s*=\\s*function\\s*\\([^)]*\\)\\s*{`,
      'g'
    );
    
    while ((match = eventPattern.exec(sourceCode)) !== null) {
      const eventStart = match.index;
      const funcBody = extractFunctionBody(sourceCode, match.index + match[0].length);
      segments.push({
        pos: eventStart,
        code: sourceCode.slice(eventStart, eventStart + match[0].length + funcBody.length + 1) + ';'
      });
    }
  }
  
  // Sort by position and combine
  segments.sort((a, b) => a.pos - b.pos);
  
  if (segments.length === 0) {
    return null;
  }
  
  return segments.map(s => s.code).join('\n\n');
}

function extractFunctionBody(code, startIndex) {
  let depth = 1;
  let i = startIndex;
  let inString = false;
  let stringChar = '';
  let escaped = false;
  
  while (i < code.length && depth > 0) {
    const char = code[i];
    
    if (escaped) {
      escaped = false;
      i++;
      continue;
    }
    
    if (char === '\\') {
      escaped = true;
      i++;
      continue;
    }
    
    if (inString) {
      if (char === stringChar) {
        inString = false;
      }
      i++;
      continue;
    }
    
    if (char === '"' || char === "'" || char === '`') {
      inString = true;
      stringChar = char;
      i++;
      continue;
    }
    
    if (char === '{') {
      depth++;
    } else if (char === '}') {
      depth--;
    }
    
    i++;
  }
  
  return code.slice(startIndex, i - 1);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function generateHeader(className) {
  return `/**
 * ${className}
 * 
 * Extracted from chunk.vendor.js (Gravit Designer)
 * 
 * Note: This code is minified. Variable names have been compressed.
 * Refer to the original open-source Gravit code for better understanding.
 * 
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 */

`;
}

async function createIndex(outputDir) {
  const categories = ['core', 'scene', 'geometry', 'effects', 'rendering', 'text', 'annotations', 'other'];
  
  let indexContent = `/**
 * Gravit Designer - Extracted Classes Index
 * 
 * Provides access to all extracted classes from chunk.vendor.js
 */

`;

  for (const cat of categories) {
    const catPath = path.join(outputDir, cat);
    if (!(await fs.pathExists(catPath))) continue;
    
    const files = await fs.readdir(catPath);
    if (files.length === 0) continue;
    
    indexContent += `// ${cat.toUpperCase()}\n`;
    
    for (const file of files.sort()) {
      if (!file.endsWith('.js')) continue;
      const className = file.replace('.js', '');
      indexContent += `// - ${className}\n`;
    }
    
    indexContent += '\n';
  }

  indexContent += `module.exports = {};\n`;

  await fs.writeFile(path.join(outputDir, 'index.js'), indexContent);
  console.log('✅ Created index.js');
}

async function createReport(extractedCount, failedClasses, outputDir) {
  const report = {
    extracted: extractedCount,
    failed: failedClasses.length,
    failedClasses: failedClasses,
    total: KNOWN_CLASSES.length,
    date: new Date().toISOString()
  };
  
  await fs.writeJson(path.join(outputDir, 'extraction-report.json'), report, { spaces: 2 });
  
  let mdReport = `# Class Extraction Report\n\n`;
  mdReport += `**Date:** ${report.date}\n\n`;
  mdReport += `## Summary\n\n`;
  mdReport += `- **Total Classes:** ${report.total}\n`;
  mdReport += `- **Successfully Extracted:** ${report.extracted}\n`;
  mdReport += `- **Failed:** ${report.failed}\n\n`;
  
  if (failedClasses.length > 0) {
    mdReport += `## Failed to Extract\n\n`;
    for (const className of failedClasses) {
      mdReport += `- ${className}\n`;
    }
  }
  
  await fs.writeFile(path.join(outputDir, 'EXTRACTION_REPORT.md'), mdReport);
  console.log('✅ Created extraction report');
}

extractByClass().catch(console.error);
