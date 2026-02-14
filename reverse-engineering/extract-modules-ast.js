/**
 * Gravit Designer Reverse Engineering - AST-Based Module Extractor
 * 
 * This script uses Abstract Syntax Tree (AST) parsing to reliably extract
 * all webpack modules from chunk.vendor.js
 * 
 * Usage: node extract-modules-ast.js
 */

const fs = require('fs-extra');
const path = require('path');
const esprima = require('esprima');
const escodegen = require('escodegen');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'ast-extracted-modules');

// Load module map
const MODULE_MAP = require('./extracted-modules/module-map.json');

// Category mapping
function getCategory(className) {
  if (!className) return 'other';
  
  const patterns = {
    core: /^(GObject|GNode|GEvent|GEventTarget|GLocale|GUtil|GMath|GSystem|GLocaleKey|GLocaleLanguage|GDate|GTranslation|GDictionary|GTransactionRecorder)$/,
    scene: /(Scene|Element|Layer|Page|Group|Block|Item|Symbol|Stylable|Style|Swatch|Background|Workspace|Actionable|SceneDictionary|ActionItem|Annotable|AnnotationsList)/,
    geometry: /(Point|Rect|Transform|PathBase|PathUtil|PathsGraph|Path|Vertex|Shape|Polygon|Ellipse|Rectangle|Compound|Connector|Slice|SimpleShape|Length)/,
    effects: /(Effect|Shadow|Blur|Glow|Mirror|Overlay|Multi)/,
    rendering: /(Paint|Renderer|Canvas|Color|Gradient|Pattern|Bitmap|Image|WebGL|HitResult|HSV|CMYK|RGB|Texture|NoisePattern)/,
    text: /(Text|Font|OpenType|TL|Collab)/,
    annotations: /(Annotation|Comment)/,
  };
  
  for (const [category, pattern] of Object.entries(patterns)) {
    if (pattern.test(className)) {
      return category;
    }
  }
  
  return 'other';
}

async function extractModulesAST() {
  console.log('📦 Gravit Designer AST-Based Module Extractor');
  console.log('===============================================\n');
  
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
  
  console.log(`📄 Reading vendor bundle...`);
  const vendorCode = await fs.readFile(vendorPath, 'utf8');
  console.log(`   Size: ${(vendorCode.length / 1024 / 1024).toFixed(2)} MB`);
  
  console.log(`\n🔍 Parsing with AST...`);
  let ast;
  try {
    ast = esprima.parseScript(vendorCode, { range: true, loc: true });
  } catch (error) {
    console.error(`❌ Parse error: ${error.message}`);
    return;
  }
  
  console.log(`   ✅ AST parsed successfully`);
  
  // Find the webpack array push call
  console.log(`\n🔎 Searching for webpack modules array...`);
  const modulesArray = findWebpackModulesArray(ast, vendorCode);
  
  if (!modulesArray) {
    console.error('❌ Could not find webpack modules array');
    return;
  }
  
  console.log(`   ✅ Found ${modulesArray.length} modules`);
  
  // Extract and save each module
  console.log(`\n💾 Extracting modules...`);
  let savedCount = 0;
  
  for (let i = 0; i < modulesArray.length; i++) {
    try {
      const moduleNode = modulesArray[i];
      
      // Skip null/undefined entries (webpack uses sparse arrays)
      if (!moduleNode || moduleNode.type === 'Literal' && moduleNode.value === null) {
        continue;
      }
      
      const moduleCode = escodegen.generate(moduleNode, {
        format: {
          indent: {
            style: '  '
          },
          quotes: 'double'
        }
      });
      
      const className = MODULE_MAP[i] || null;
      const category = getCategory(className);
      const fileName = className ? `${i}-${className}.js` : `${i}-module.js`;
      const outputPath = path.join(OUTPUT_DIR, category, fileName);
      
      const header = generateHeader(i, className);
      await fs.writeFile(outputPath, header + moduleCode + '\n');
      savedCount++;
      
      if (savedCount % 100 === 0) {
        console.log(`   Extracted ${savedCount}/${modulesArray.length} modules...`);
      }
    } catch (error) {
      console.log(`   ⚠️ Error extracting module ${i}: ${error.message}`);
    }
  }
  
  console.log(`\n✅ Successfully extracted ${savedCount} modules`);
  
  // Create reports
  await createIndex(OUTPUT_DIR, modulesArray.length);
  await createReport(savedCount, OUTPUT_DIR);
  
  // Show category breakdown
  console.log(`\n📁 Extracted modules by category:`);
  for (const cat of categories) {
    const catPath = path.join(OUTPUT_DIR, cat);
    if (await fs.pathExists(catPath)) {
      const files = await fs.readdir(catPath);
      if (files.length > 0) {
        console.log(`   ${cat.padEnd(15)} - ${files.length} modules`);
      }
    }
  }
  
  console.log(`\n✨ Extraction complete!`);
  console.log(`📂 Output: ${OUTPUT_DIR}/`);
}

function findWebpackModulesArray(ast, sourceCode) {
  // Look for pattern: .push([[0], [modules...], {...}])
  // We want the second element of the array argument (the modules array)
  
  let modulesArray = null;
  
  function visit(node) {
    if (!node || typeof node !== 'object') return;
    
    // Look for .push() call
    if (node.type === 'CallExpression' &&
        node.callee && node.callee.type === 'MemberExpression' &&
        node.callee.property && node.callee.property.name === 'push') {
      
      // Check if argument is an array with at least 2 elements
      if (node.arguments && node.arguments.length > 0) {
        const arg = node.arguments[0];
        if (arg.type === 'ArrayExpression' && arg.elements.length >= 2) {
          const secondElement = arg.elements[1];
          if (secondElement && secondElement.type === 'ArrayExpression') {
            // This looks like our webpack modules array!
            modulesArray = secondElement.elements;
            return;
          }
        }
      }
    }
    
    // Recursively visit child nodes
    for (const key in node) {
      if (node.hasOwnProperty(key) && key !== 'loc' && key !== 'range') {
        const child = node[key];
        if (Array.isArray(child)) {
          child.forEach(visit);
        } else if (child && typeof child === 'object') {
          visit(child);
        }
      }
    }
  }
  
  visit(ast);
  return modulesArray;
}

function generateHeader(moduleId, className) {
  let header = `/**\n * Module ${moduleId}`;
  
  if (className) {
    header += ` - ${className}`;
  }
  
  header += `\n * Extracted from chunk.vendor.js\n *\n`;
  header += ` * Original: Gravit Designer by Corel\n`;
  header += ` * Reverse engineered for educational purposes\n`;
  header += ` *\n`;
  header += ` * Note: This is minified code. Variable names are compressed.\n`;
  header += ` * Common patterns:\n`;
  header += ` *   e = exports object\n`;
  header += ` *   t = module object\n`;
  header += ` *   n = require function\n`;
  header += ` *   i, o, a, r, s, l, c, h, u, d = local variables\n`;
  header += ` */\n\n`;
  
  return header;
}

async function createIndex(outputDir, totalModules) {
  const indexContent = `/**
 * Gravit Designer - AST-Extracted Modules Index
 * 
 * Total modules extracted: ${totalModules}
 * 
 * Each module is a webpack module function with signature:
 *   function(e, t, n) where:
 *     e = exports
 *     t = module
 *     n = require
 */

const MODULE_MAP = ${JSON.stringify(MODULE_MAP, null, 2)};

module.exports = MODULE_MAP;
`;

  await fs.writeFile(path.join(outputDir, 'index.js'), indexContent);
  console.log('✅ Created index.js');
}

async function createReport(extractedCount, outputDir) {
  const report = {
    totalExtracted: extractedCount,
    knownClasses: Object.keys(MODULE_MAP).length,
    classMap: MODULE_MAP,
    extractionDate: new Date().toISOString(),
    method: 'AST-based parsing with esprima'
  };
  
  await fs.writeJson(path.join(outputDir, 'extraction-report.json'), report, { spaces: 2 });
  
  let mdReport = `# AST-Based Module Extraction Report\n\n`;
  mdReport += `**Date:** ${report.extractionDate}\n`;
  mdReport += `**Method:** ${report.method}\n\n`;
  mdReport += `## Summary\n\n`;
  mdReport += `- **Total Modules Extracted:** ${report.totalExtracted}\n`;
  mdReport += `- **Known Classes:** ${report.knownClasses}\n\n`;
  mdReport += `## Module Structure\n\n`;
  mdReport += `Each module follows the webpack module pattern:\n\n`;
  mdReport += `\`\`\`javascript\n`;
  mdReport += `function(e, t, n) {\n`;
  mdReport += `  // e = exports\n`;
  mdReport += `  // t = module\n`;
  mdReport += `  // n = require function\n`;
  mdReport += `  // Module code here...\n`;
  mdReport += `}\n`;
  mdReport += `\`\`\`\n\n`;
  mdReport += `## Known Classes\n\n`;
  
  const classesByCategory = {};
  for (const [moduleId, className] of Object.entries(MODULE_MAP)) {
    const category = getCategory(className);
    if (!classesByCategory[category]) {
      classesByCategory[category] = [];
    }
    classesByCategory[category].push({ id: moduleId, name: className });
  }
  
  for (const [category, classes] of Object.entries(classesByCategory).sort()) {
    mdReport += `### ${category.toUpperCase()}\n\n`;
    for (const cls of classes.sort((a, b) => parseInt(a.id) - parseInt(b.id))) {
      mdReport += `- Module ${cls.id}: ${cls.name}\n`;
    }
    mdReport += `\n`;
  }
  
  await fs.writeFile(path.join(outputDir, 'EXTRACTION_REPORT.md'), mdReport);
  console.log('✅ Created extraction report');
}

extractModulesAST().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
