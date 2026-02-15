/**
 * Apply recovered variable names and JSDoc from gravit-original cross-reference.
 *
 * For each deobfuscated vendor module with a known G* class name:
 *   1. Adds a JSDoc class header from the original source
 *   2. Annotates prototype method assignments with method names from original
 *   3. Injects original JSDoc comments above matched methods
 *
 * For app modules: adds file-level header noting the module purpose if known.
 *
 * Reads from: deobfuscated-modules/{app,vendor}
 * Writes to:  readable-modules/{app,vendor}
 *
 * Usage: node apply-names.cjs
 */

const fs = require('fs-extra');
const path = require('path');

// Directories
const CROSS_REF_DIR = path.join(__dirname, 'cross-reference');
const CLASS_MAPPING_FILE = path.join(CROSS_REF_DIR, 'class-mapping.json');
const METHOD_MAPPING_FILE = path.join(CROSS_REF_DIR, 'method-mapping.json');
const COMMENTS_FILE = path.join(CROSS_REF_DIR, 'comments-extracted.json');
const VENDOR_MAP_PATH = path.join(__dirname, 'extracted-modules', 'module-map.json');
const DEOB_APP_DIR = path.join(__dirname, 'deobfuscated-modules', 'app');
const DEOB_VENDOR_DIR = path.join(__dirname, 'deobfuscated-modules', 'vendor');
const OUTPUT_APP_DIR = path.join(__dirname, 'readable-modules', 'app');
const OUTPUT_VENDOR_DIR = path.join(__dirname, 'readable-modules', 'vendor');

// Stats
const stats = {
  filesProcessed: 0,
  classesAnnotated: 0,
  methodsAnnotated: 0,
  commentsInjected: 0
};

/**
 * Load all cross-reference data
 */
function loadCrossRef() {
  const classMapping = fs.existsSync(CLASS_MAPPING_FILE)
    ? JSON.parse(fs.readFileSync(CLASS_MAPPING_FILE, 'utf8'))
    : {};
  const methodMapping = fs.existsSync(METHOD_MAPPING_FILE)
    ? JSON.parse(fs.readFileSync(METHOD_MAPPING_FILE, 'utf8'))
    : {};
  const commentsMapping = fs.existsSync(COMMENTS_FILE)
    ? JSON.parse(fs.readFileSync(COMMENTS_FILE, 'utf8'))
    : {};

  // Build reverse map: G* -> IF* (for display purposes)
  const reverseClassMap = {};
  for (const [ifName, gName] of Object.entries(classMapping)) {
    reverseClassMap[gName] = ifName;
  }

  console.log(`Cross-reference loaded:`);
  console.log(`  ${Object.keys(classMapping).length} class mappings (IF* → G*)`);
  console.log(`  ${Object.keys(methodMapping).length} classes with method names`);
  console.log(`  ${Object.keys(commentsMapping).length} classes with JSDoc comments`);

  return { classMapping, methodMapping, commentsMapping, reverseClassMap };
}

/**
 * Load vendor module map to know which module IDs map to which classes
 */
function loadVendorMap() {
  if (!fs.existsSync(VENDOR_MAP_PATH)) return {};
  const data = JSON.parse(fs.readFileSync(VENDOR_MAP_PATH, 'utf8'));
  console.log(`  ${Object.keys(data).length} vendor module ID → class name mappings\n`);
  return data;
}

/**
 * Extract class name from vendor filename like "0-GObject.js" or "285-GCommentAnnotation.js"
 */
function classNameFromFilename(filename) {
  const m = filename.match(/^\d+-(.+)\.js$/);
  return m ? m[1] : null;
}

/**
 * Build a JSDoc header for a class
 */
function buildClassHeader(gClassName, reverseClassMap, commentsMapping) {
  const ifName = reverseClassMap[gClassName];
  const comments = commentsMapping[gClassName] || [];

  // Find the class-level comment (usually the first one, containing @class)
  let classComment = null;
  for (const c of comments) {
    if (c.text.includes('@class') || c.text.includes('@constructor')) {
      classComment = c;
      break;
    }
  }
  if (!classComment && comments.length > 0) {
    classComment = comments[0];
  }

  const lines = [];
  lines.push('/**');
  if (classComment) {
    // Clean up and re-indent the original comment
    const text = classComment.text
      .replace(/\r\n/g, '\n')
      .replace(/IF(\w+)/g, 'G$1') // Replace IF* references with G*
      .split('\n')
      .map(l => ' ' + l.trim())
      .join('\n');
    lines.push(text);
  } else {
    lines.push(` * @class ${gClassName}`);
  }
  if (ifName) {
    lines.push(` * @original ${ifName}`);
  }
  lines.push(' */');
  return lines.join('\n');
}

/**
 * Get the list of known method names for a class
 */
function getMethodNames(gClassName, methodMapping) {
  return methodMapping[gClassName] || [];
}

/**
 * Find JSDoc comment for a specific method
 */
function findMethodComment(gClassName, methodName, commentsMapping) {
  const comments = commentsMapping[gClassName] || [];
  // Try to find a comment mentioning this method name
  for (const c of comments) {
    if (c.text.includes(methodName) || c.text.includes(`@method ${methodName}`)) {
      return c;
    }
  }
  return null;
}

/**
 * Annotate a vendor module with recovered names
 */
function annotateVendorModule(code, gClassName, crossRef) {
  const { reverseClassMap, methodMapping, commentsMapping } = crossRef;
  const methods = getMethodNames(gClassName, methodMapping);

  if (!methods.length && !commentsMapping[gClassName]) {
    return code; // No data to apply
  }

  stats.classesAnnotated++;
  let result = code;

  // Replace the generic header with a proper JSDoc header
  const headerEnd = code.indexOf('*/');
  if (headerEnd > 0) {
    const header = buildClassHeader(gClassName, reverseClassMap, commentsMapping);
    result = header + '\n' + code.slice(headerEnd + 2).trimStart();
  }

  // Annotate prototype method assignments
  // Pattern: ClassName.prototype.methodName = function OR .prototype.methodName =
  // In minified code, the class is a local var like A, so look for
  // patterns like: A.prototype.xxx = function
  // Since we can't easily determine which local var is the class constructor,
  // instead annotate any .prototype.xxx assignments with known method names

  for (const method of methods) {
    // Look for .prototype.<methodName> patterns (including get/set patterns)
    const methodRegex = new RegExp(
      `(\\.prototype\\.${escapeRegex(method.name)}\\s*=)`,
      'g'
    );
    if (methodRegex.test(result)) {
      stats.methodsAnnotated++;

      // Try to inject JSDoc comment above
      const comment = findMethodComment(gClassName, method.name, commentsMapping);
      if (comment) {
        // Build JSDoc
        const jsdoc = formatJSDoc(comment.text);
        // Insert before the line containing the method
        const lineRegex = new RegExp(
          `(^[^\n]*\\.prototype\\.${escapeRegex(method.name)}\\s*=)`,
          'gm'
        );
        result = result.replace(lineRegex, jsdoc + '\n$1');
        stats.commentsInjected++;
      }
    }
  }

  return result;
}

/**
 * Format a JSDoc comment text
 */
function formatJSDoc(text) {
  const cleaned = text
    .replace(/\r\n/g, '\n')
    .replace(/IF(\w+)/g, 'G$1')
    .split('\n')
    .map(l => ' * ' + l.trim())
    .join('\n');
  return `/**\n${cleaned}\n */`;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Process files recursively
 */
async function processDirectory(inputDir, outputDir, label, annotator) {
  console.log(`Processing ${label}...`);

  if (!fs.existsSync(inputDir)) {
    console.log(`  Directory not found: ${inputDir}\n`);
    return;
  }

  const allFiles = [];
  function walkDir(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkDir(full);
      else if (entry.name.endsWith('.js')) allFiles.push(full);
    }
  }
  walkDir(inputDir);

  console.log(`  Found ${allFiles.length} JavaScript files`);

  let processed = 0;
  for (const inputPath of allFiles) {
    const relPath = path.relative(inputDir, inputPath);
    const outputPath = path.join(outputDir, relPath);
    const code = await fs.readFile(inputPath, 'utf8');

    const result = annotator(code, path.basename(inputPath));

    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, result);
    stats.filesProcessed++;
    processed++;
    if (processed % 200 === 0) {
      console.log(`    Processed ${processed}/${allFiles.length}...`);
    }
  }

  console.log(`  ✓ Processed ${allFiles.length} files\n`);
}

/**
 * Main
 */
async function main() {
  console.log('Apply Names Script');
  console.log('==================\n');

  // Check cross-reference
  if (!fs.existsSync(CLASS_MAPPING_FILE)) {
    console.log('Cross-reference output not found!');
    console.log('Run: node cross-reference-original.cjs first.');
    process.exit(1);
  }

  const crossRef = loadCrossRef();
  const vendorMap = loadVendorMap();

  // Process vendor modules
  await processDirectory(DEOB_VENDOR_DIR, OUTPUT_VENDOR_DIR, 'Vendor modules', (code, filename) => {
    const gClassName = classNameFromFilename(filename);
    if (gClassName) {
      return annotateVendorModule(code, gClassName, crossRef);
    }
    return code;
  });

  // Process app modules (just copy with minor enhancements for now)
  await processDirectory(DEOB_APP_DIR, OUTPUT_APP_DIR, 'App modules', (code, filename) => {
    // App modules don't have a direct class mapping from gravit-original,
    // since they are the commercial application layer. Just pass through.
    return code;
  });

  // Report
  console.log('='.repeat(60));
  console.log('APPLY NAMES REPORT');
  console.log('='.repeat(60));
  console.log(`Files processed:       ${stats.filesProcessed}`);
  console.log(`Classes annotated:     ${stats.classesAnnotated}`);
  console.log(`Methods annotated:     ${stats.methodsAnnotated}`);
  console.log(`Comments injected:     ${stats.commentsInjected}`);
  console.log('='.repeat(60));

  const report = {
    timestamp: new Date().toISOString(),
    filesProcessed: stats.filesProcessed,
    classesAnnotated: stats.classesAnnotated,
    methodsAnnotated: stats.methodsAnnotated,
    commentsInjected: stats.commentsInjected
  };

  const reportPath = path.join(__dirname, 'readable-modules', 'apply-names-report.json');
  fs.ensureDirSync(path.dirname(reportPath));
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\nReport saved to: readable-modules/apply-names-report.json`);

  console.log('\n✓ Done!');
  console.log(`\nReadable modules written to:`);
  console.log(`  - ${OUTPUT_VENDOR_DIR}`);
  console.log(`  - ${OUTPUT_APP_DIR}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
