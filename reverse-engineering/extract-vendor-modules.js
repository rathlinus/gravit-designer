/**
 * Gravit Designer Reverse Engineering - Comprehensive Vendor Module Extractor
 * 
 * This script extracts all individual webpack modules from chunk.vendor.js
 * by parsing the webpack bundle structure and extracting each module function.
 * 
 * It creates individual files for each module with proper naming based on
 * the class definitions found within each module.
 * 
 * Usage: node extract-vendor-modules.js
 */

const fs = require('fs-extra');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'vendor-modules');

// Known module ID to class name mapping (from extract-modules.js)
const MODULE_MAP = require('./extracted-modules/module-map.json');

// Category mapping function
function getCategory(className) {
  if (!className) return 'other';
  
  // Core
  if (['GObject', 'GNode', 'GEvent', 'GEventTarget', 'GLocale', 'GUtil', 'GMath', 'GSystem', 'GLocaleKey', 'GLocaleLanguage', 'GDate', 'GTranslation', 'GDictionary'].includes(className)) {
    return 'core';
  }
  
  // Scene
  if (className.match(/Scene|Element|Layer|Page|Group|Block|Item|Symbol|Stylable|Style|Swatch|Background|Workspace|Actionable|SceneDictionary/)) {
    return 'scene';
  }
  
  // Geometry
  if (className.match(/Point|Rect|Transform|Path|Vertex|Shape|Polygon|Ellipse|Rectangle|Compound|Connector|Slice|SimpleShape/)) {
    return 'geometry';
  }
  
  // Effects
  if (className.match(/Effect|Shadow|Blur|Glow|Mirror|Overlay/)) {
    return 'effects';
  }
  
  // Rendering
  if (className.match(/Paint|Renderer|Canvas|Color|Gradient|Pattern|Bitmap|Image|WebGL|HitResult|HSV|CMYK|RGB/)) {
    return 'rendering';
  }
  
  // Text
  if (className.match(/Text|Font|OpenType|TL|Collab/)) {
    return 'text';
  }
  
  // Annotations
  if (className.match(/Annotation|Comment/)) {
    return 'annotations';
  }
  
  return 'other';
}

async function extractVendorModules() {
  console.log('📦 Gravit Designer Comprehensive Vendor Module Extractor');
  console.log('=========================================================\n');
  
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
  
  // Parse the webpack bundle structure
  // Structure: (this.webpackJsonpGravitDesigner = ...).push([[0], [module0, module1, ...], {...}])
  
  // Find the start of the modules array
  const modulesMatch = vendorCode.match(/\.push\s*\(\s*\[\s*\[\s*\d+\s*\]\s*,\s*\[/);
  if (!modulesMatch) {
    console.error('❌ Could not find webpack modules array');
    return;
  }
  
  const startIndex = modulesMatch.index + modulesMatch[0].length;
  console.log(`📍 Found modules array at position ${startIndex}`);
  
  // Extract modules using bracket matching
  const modules = extractModulesFromArray(vendorCode, startIndex);
  console.log(`\n📊 Extracted ${modules.length} modules from vendor bundle`);
  
  // Process and save each module
  let savedCount = 0;
  let classesFound = new Set();
  
  for (let i = 0; i < modules.length; i++) {
    const moduleCode = modules[i];
    if (!moduleCode || moduleCode.trim() === '') continue;
    
    // Try to identify the class in this module
    const classNames = identifyClasses(moduleCode);
    const primaryClass = classNames[0] || MODULE_MAP[i] || null;
    
    if (classNames.length > 0) {
      classNames.forEach(name => classesFound.add(name));
    }
    
    const category = getCategory(primaryClass);
    const fileName = primaryClass ? `${i}-${primaryClass}.js` : `${i}-module.js`;
    const outputPath = path.join(OUTPUT_DIR, category, fileName);
    
    // Add header comment
    const header = generateModuleHeader(i, primaryClass, classNames);
    const formattedCode = formatModuleCode(moduleCode);
    
    await fs.writeFile(outputPath, header + formattedCode);
    savedCount++;
    
    if (savedCount % 50 === 0) {
      console.log(`   Processed ${savedCount}/${modules.length} modules...`);
    }
  }
  
  console.log(`\n✅ Saved ${savedCount} modules to ${OUTPUT_DIR}/`);
  console.log(`📝 Found ${classesFound.size} unique classes`);
  
  // Create index file
  await createModuleIndex(modules, OUTPUT_DIR);
  
  // Create statistics report
  await createStatisticsReport(modules, classesFound, OUTPUT_DIR);
  
  console.log('\n💡 Module organization:');
  for (const cat of categories) {
    const catPath = path.join(OUTPUT_DIR, cat);
    if (await fs.pathExists(catPath)) {
      const files = await fs.readdir(catPath);
      if (files.length > 0) {
        console.log(`   ${cat.padEnd(15)} - ${files.length} modules`);
      }
    }
  }
  
  console.log('\n✨ Extraction complete!');
  console.log(`\n📂 Output: ${OUTPUT_DIR}/`);
}

function extractModulesFromArray(code, startIndex) {
  const modules = [];
  let depth = 1; // We're already inside the array
  let moduleStart = startIndex;
  let i = startIndex;
  let inString = false;
  let stringChar = '';
  let escaped = false;
  let inRegex = false;
  
  while (i < code.length && depth > 0) {
    const char = code[i];
    const prevChar = i > 0 ? code[i - 1] : '';
    
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
    
    // Handle strings
    if (inString) {
      if (char === stringChar) {
        inString = false;
      }
      i++;
      continue;
    }
    
    // Detect regex (simple heuristic)
    if (char === '/' && !inRegex) {
      // Check if this could be a regex
      const before = code.slice(Math.max(0, i - 10), i);
      if (before.match(/[=(,\[!&|?:]\s*$/)) {
        inRegex = true;
        i++;
        continue;
      }
    }
    
    if (inRegex) {
      if (char === '/' && prevChar !== '\\') {
        inRegex = false;
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
    
    // Track depth
    if (char === '[' || char === '{' || char === '(') {
      depth++;
    } else if (char === ']' || char === '}' || char === ')') {
      depth--;
      if (depth === 0) {
        // End of modules array
        break;
      }
    } else if (char === ',' && depth === 1) {
      // Module boundary at top level
      const moduleCode = code.slice(moduleStart, i).trim();
      if (moduleCode) {
        modules.push(moduleCode);
      }
      moduleStart = i + 1;
    }
    
    i++;
  }
  
  // Add the last module
  if (moduleStart < i) {
    const moduleCode = code.slice(moduleStart, i).trim();
    if (moduleCode) {
      modules.push(moduleCode);
    }
  }
  
  return modules;
}

function identifyClasses(moduleCode) {
  const classes = [];
  
  // Look for class name patterns
  const patterns = [
    // Direct class definitions: function GClassName() {}
    /function\s+(G[A-Z]\w+)\s*\(/g,
    // Prototype assignments: GClassName.prototype.method
    /(G[A-Z]\w+)\.prototype\.\w+/g,
    // Inheritance: GObject.inherit(GClassName, ...)
    /GObject\.inherit\(\s*(G[A-Z]\w+)\s*,/g,
    // InheritAndMix: GObject.inheritAndMix(GClassName, ...)
    /GObject\.inheritAndMix\(\s*(G[A-Z]\w+)\s*,/g,
    // Export patterns: t.GClassName = ...
    /t\.(G[A-Z]\w+)\s*=/g,
    // Class references in comments or strings
    /\/\*\*.*?(G[A-Z]\w+).*?\*\//g,
  ];
  
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(moduleCode)) !== null) {
      const className = match[1];
      if (className && className.startsWith('G') && className.length > 2) {
        if (!classes.includes(className)) {
          classes.push(className);
        }
      }
    }
  }
  
  return classes;
}

function formatModuleCode(code) {
  // Basic formatting
  code = code.trim();
  
  // Ensure it ends with a newline
  if (!code.endsWith('\n')) {
    code += '\n';
  }
  
  return code;
}

function generateModuleHeader(moduleId, primaryClass, allClasses) {
  let header = `/**\n * Module ${moduleId}`;
  
  if (primaryClass) {
    header += ` - ${primaryClass}`;
  }
  
  header += `\n * Extracted from chunk.vendor.js\n *\n`;
  
  if (allClasses.length > 0) {
    header += ` * Classes in this module:\n`;
    for (const className of allClasses) {
      header += ` *   - ${className}\n`;
    }
    header += ` *\n`;
  }
  
  header += ` * Original: Gravit Designer by Corel\n`;
  header += ` * Reverse engineered for educational purposes\n`;
  header += ` *\n`;
  header += ` * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s\n`;
  header += ` * have been compressed. Refer to the original open-source Gravit code\n`;
  header += ` * for better understanding of the logic.\n`;
  header += ` */\n\n`;
  
  return header;
}

async function createModuleIndex(modules, outputDir) {
  let indexContent = `/**
 * Gravit Designer - Vendor Modules Index
 * 
 * This file provides an index of all extracted modules from chunk.vendor.js
 * 
 * Total modules: ${modules.length}
 */

const MODULE_INFO = {\n`;

  for (let i = 0; i < modules.length; i++) {
    const className = MODULE_MAP[i];
    if (className) {
      const category = getCategory(className);
      indexContent += `  ${i}: { name: '${className}', category: '${category}' },\n`;
    }
  }

  indexContent += `};

module.exports = MODULE_INFO;
`;

  await fs.writeFile(path.join(outputDir, 'index.js'), indexContent);
  console.log('✅ Created index.js');
}

async function createStatisticsReport(modules, classesFound, outputDir) {
  const report = {
    totalModules: modules.length,
    totalClasses: classesFound.size,
    classes: Array.from(classesFound).sort(),
    categoryCounts: {},
    extractionDate: new Date().toISOString(),
  };
  
  // Count by category
  for (const className of classesFound) {
    const category = getCategory(className);
    report.categoryCounts[category] = (report.categoryCounts[category] || 0) + 1;
  }
  
  await fs.writeJson(path.join(outputDir, 'extraction-report.json'), report, { spaces: 2 });
  
  // Also create a markdown report
  let mdReport = `# Vendor Module Extraction Report\n\n`;
  mdReport += `**Extraction Date:** ${report.extractionDate}\n\n`;
  mdReport += `## Summary\n\n`;
  mdReport += `- **Total Modules:** ${report.totalModules}\n`;
  mdReport += `- **Total Classes:** ${report.totalClasses}\n\n`;
  mdReport += `## Classes by Category\n\n`;
  
  for (const [category, count] of Object.entries(report.categoryCounts).sort((a, b) => b[1] - a[1])) {
    mdReport += `- **${category}**: ${count} classes\n`;
  }
  
  mdReport += `\n## All Classes (Alphabetical)\n\n`;
  for (const className of report.classes) {
    const category = getCategory(className);
    mdReport += `- ${className} (${category})\n`;
  }
  
  await fs.writeFile(path.join(outputDir, 'EXTRACTION_REPORT.md'), mdReport);
  console.log('✅ Created extraction report');
}

extractVendorModules().catch(console.error);
