/**
 * Cross-reference with gravit-original to recover variable names and comments
 * 
 * Scans the original open-source Gravit codebase (if available) and creates
 * mappings between the original IF-prefixed classes and the commercial G-prefixed classes.
 * 
 * Usage: node cross-reference-original.cjs
 */

const fs = require('fs-extra');
const path = require('path');
const acorn = require('acorn');
const walk = require('acorn-walk');

// Directories
const ORIGINAL_SRC_DIR = path.join(__dirname, '..', '..', 'gravit-original', 'src');
const OUTPUT_DIR = path.join(__dirname, 'cross-reference');
const VENDOR_MAP_PATH = path.join(__dirname, 'extracted-modules', 'module-map.json');

// Output files
const CLASS_MAPPING_FILE = path.join(OUTPUT_DIR, 'class-mapping.json');
const METHOD_MAPPING_FILE = path.join(OUTPUT_DIR, 'method-mapping.json');
const COMMENTS_FILE = path.join(OUTPUT_DIR, 'comments-extracted.json');

// Statistics
const stats = {
  filesScanned: 0,
  classesFound: 0,
  methodsExtracted: 0,
  commentsExtracted: 0,
  classesMatched: 0
};

/**
 * Check if gravit-original exists
 */
function checkOriginalSource() {
  if (!fs.existsSync(ORIGINAL_SRC_DIR)) {
    console.log('❌ gravit-original source not found!\n');
    console.log('The original Gravit Designer open-source code is needed for cross-referencing.');
    console.log('');
    console.log('To obtain it:');
    console.log('  1. Clone the original Gravit repository:');
    console.log('     git clone https://github.com/Quazistax/gravit.git gravit-original');
    console.log('');
    console.log('  2. Place it alongside the gravit-designer directory:');
    console.log('     parent-dir/');
    console.log('       ├── gravit-designer/');
    console.log('       └── gravit-original/');
    console.log('');
    console.log('Expected location: ' + ORIGINAL_SRC_DIR);
    console.log('');
    console.log('Note: The original project was renamed from "Gravit" to "Gravit Designer"');
    console.log('and became commercial. The open-source version used "IF*" prefixes');
    console.log('(e.g., IFObject, IFNode) which were changed to "G*" in the commercial version.');
    console.log('');
    return false;
  }
  return true;
}

/**
 * Extract class name from file path or content
 */
function extractClassName(filePath, code) {
  try {
    const ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script',
      allowHashBang: true
    });
    
    // Look for function declarations that look like class constructors
    let className = null;
    
    walk.simple(ast, {
      FunctionDeclaration(node) {
        if (node.id && node.id.name.startsWith('IF')) {
          className = node.id.name;
        }
      },
      VariableDeclaration(node) {
        for (const decl of node.declarations) {
          if (decl.id && decl.id.name && decl.id.name.startsWith('IF')) {
            className = decl.id.name;
          }
        }
      }
    });
    
    return className;
  } catch (e) {
    return null;
  }
}

/**
 * Extract methods from a class
 */
function extractMethods(code, className) {
  const methods = [];
  
  try {
    const ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'script',
      allowHashBang: true
    });
    
    // Look for prototype assignments: ClassName.prototype.methodName = function
    walk.simple(ast, {
      AssignmentExpression(node) {
        if (node.left.type === 'MemberExpression') {
          const obj = node.left.object;
          const prop = node.left.property;
          
          // Check if it's ClassName.prototype.methodName
          if (obj.type === 'MemberExpression' &&
              obj.object.name === className &&
              obj.property.name === 'prototype' &&
              prop.name) {
            
            methods.push({
              name: prop.name,
              line: node.loc ? node.loc.start.line : 0
            });
            
            stats.methodsExtracted++;
          }
        }
      }
    });
  } catch (e) {
    // Ignore parse errors
  }
  
  return methods;
}

/**
 * Extract JSDoc comments from code
 */
function extractJSDocComments(code) {
  const comments = [];
  const commentPattern = /\/\*\*([\s\S]*?)\*\//g;
  let match;
  
  while ((match = commentPattern.exec(code)) !== null) {
    comments.push({
      text: match[1].trim(),
      index: match.index
    });
    stats.commentsExtracted++;
  }
  
  return comments;
}

/**
 * Scan original source directory
 */
async function scanOriginalSource() {
  console.log('Scanning gravit-original source...\n');
  
  const classMapping = {}; // IF* -> G*
  const methodMapping = {}; // { className: [methods] }
  const commentsMapping = {}; // { className: { methodName: comment } }
  
  // Scan infinity/ directory (core engine)
  const infinityDir = path.join(ORIGINAL_SRC_DIR, 'infinity');
  if (fs.existsSync(infinityDir)) {
    await scanDirectory(infinityDir, classMapping, methodMapping, commentsMapping);
  }
  
  // Scan infinity-editor/ directory
  const editorDir = path.join(ORIGINAL_SRC_DIR, 'infinity-editor');
  if (fs.existsSync(editorDir)) {
    await scanDirectory(editorDir, classMapping, methodMapping, commentsMapping);
  }
  
  // Scan gravit/ directory
  const gravitDir = path.join(ORIGINAL_SRC_DIR, 'gravit');
  if (fs.existsSync(gravitDir)) {
    await scanDirectory(gravitDir, classMapping, methodMapping, commentsMapping);
  }
  
  // Scan application/ directory
  const appDir = path.join(ORIGINAL_SRC_DIR, 'application');
  if (fs.existsSync(appDir)) {
    await scanDirectory(appDir, classMapping, methodMapping, commentsMapping);
  }
  
  return { classMapping, methodMapping, commentsMapping };
}

/**
 * Scan a directory recursively
 */
async function scanDirectory(dir, classMapping, methodMapping, commentsMapping) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      await scanDirectory(filePath, classMapping, methodMapping, commentsMapping);
    } else if (file.endsWith('.js')) {
      await scanFile(filePath, classMapping, methodMapping, commentsMapping);
    }
  }
}

/**
 * Scan a single file
 */
async function scanFile(filePath, classMapping, methodMapping, commentsMapping) {
  stats.filesScanned++;
  
  const code = await fs.readFile(filePath, 'utf8');
  const className = extractClassName(filePath, code);
  
  if (className && className.startsWith('IF')) {
    stats.classesFound++;
    
    // Map IF* to G* (e.g., IFObject -> GObject)
    const gClassName = className.replace(/^IF/, 'G');
    classMapping[className] = gClassName;
    
    // Extract methods
    const methods = extractMethods(code, className);
    if (methods.length > 0) {
      methodMapping[gClassName] = methods;
    }
    
    // Extract JSDoc comments
    const comments = extractJSDocComments(code);
    if (comments.length > 0) {
      commentsMapping[gClassName] = comments;
    }
    
    if (stats.classesFound % 10 === 0) {
      process.stdout.write(`\rScanned ${stats.filesScanned} files, found ${stats.classesFound} classes...`);
    }
  }
}

/**
 * Generate comparison files
 */
async function generateComparisonFiles(classMapping) {
  console.log('\n\nGenerating comparison files...');
  
  // For each mapped class, create a comparison file
  // This would require loading the commercial versions too
  // Skipping for now as it would be very large
  
  console.log('Comparison files generation skipped (would be too large)');
  console.log('Use class-mapping.json and method-mapping.json for reference instead');
}

/**
 * Main execution
 */
async function main() {
  console.log('Cross-Reference Original Script');
  console.log('==============================\n');
  
  // Check if original source exists
  if (!checkOriginalSource()) {
    process.exit(1);
  }
  
  // Scan original source
  const { classMapping, methodMapping, commentsMapping } = await scanOriginalSource();
  
  // Save outputs
  await fs.ensureDir(OUTPUT_DIR);
  
  await fs.writeFile(
    CLASS_MAPPING_FILE,
    JSON.stringify(classMapping, null, 2)
  );
  console.log(`\n✓ Class mapping saved: ${CLASS_MAPPING_FILE}`);
  
  await fs.writeFile(
    METHOD_MAPPING_FILE,
    JSON.stringify(methodMapping, null, 2)
  );
  console.log(`✓ Method mapping saved: ${METHOD_MAPPING_FILE}`);
  
  await fs.writeFile(
    COMMENTS_FILE,
    JSON.stringify(commentsMapping, null, 2)
  );
  console.log(`✓ Comments saved: ${COMMENTS_FILE}`);
  
  // Generate comparison files (optional)
  // await generateComparisonFiles(classMapping);
  
  // Report
  console.log('\n' + '='.repeat(60));
  console.log('CROSS-REFERENCE REPORT');
  console.log('='.repeat(60));
  console.log(`Files scanned:        ${stats.filesScanned}`);
  console.log(`Classes found:        ${stats.classesFound}`);
  console.log(`Methods extracted:    ${stats.methodsExtracted}`);
  console.log(`Comments extracted:   ${stats.commentsExtracted}`);
  console.log('='.repeat(60));
  
  console.log('\n✓ Done!');
}

// Run
main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
