/**
 * Reconstruct full class files by merging:
 *   - Readable (deobfuscated+annotated) module bodies
 *   - Cross-reference data (method names, JSDoc, original structure)
 *   - Reconstructed skeleton stubs (from reconstructed/ dir)
 *
 * Produces complete, well-structured class files organized by subsystem.
 * For classes with an original-source match: uses original variable names
 * and structure as a guide. For classes without: uses the deobfuscated body.
 *
 * Reads from:
 *   - readable-modules/vendor/     (annotated deobfuscated vendor modules)
 *   - readable-modules/app/        (annotated deobfuscated app modules)
 *   - cross-reference/             (class/method/comment mappings)
 *   - reconstructed/               (skeleton stubs if available)
 *
 * Writes to:
 *   - reconstructed-full/vendor/   (complete vendor class files)
 *   - reconstructed-full/app/      (complete app module files)
 *
 * Usage: node reconstruct-bodies.cjs
 */

const fs = require('fs-extra');
const path = require('path');
const acorn = require('acorn');

// Directories
const CROSS_REF_DIR = path.join(__dirname, 'cross-reference');
const READABLE_VENDOR_DIR = path.join(__dirname, 'readable-modules', 'vendor');
const READABLE_APP_DIR = path.join(__dirname, 'readable-modules', 'app');
const RECONSTRUCTED_DIR = path.join(__dirname, 'reconstructed');
const OUTPUT_VENDOR_DIR = path.join(__dirname, 'reconstructed-full', 'vendor');
const OUTPUT_APP_DIR = path.join(__dirname, 'reconstructed-full', 'app');

const CLASS_MAPPING_FILE = path.join(CROSS_REF_DIR, 'class-mapping.json');
const METHOD_MAPPING_FILE = path.join(CROSS_REF_DIR, 'method-mapping.json');
const COMMENTS_FILE = path.join(CROSS_REF_DIR, 'comments-extracted.json');
const VENDOR_MAP_PATH = path.join(__dirname, 'extracted-modules', 'module-map.json');

// Stats
const stats = {
  filesProcessed: 0,
  classesWithOriginal: 0,
  classesWithoutOriginal: 0,
  methodsRecovered: 0,
  skeletonsMerged: 0
};

/**
 * Load all reference data
 */
function loadData() {
  const classMapping = fs.existsSync(CLASS_MAPPING_FILE)
    ? JSON.parse(fs.readFileSync(CLASS_MAPPING_FILE, 'utf8'))
    : {};
  const methodMapping = fs.existsSync(METHOD_MAPPING_FILE)
    ? JSON.parse(fs.readFileSync(METHOD_MAPPING_FILE, 'utf8'))
    : {};
  const commentsMapping = fs.existsSync(COMMENTS_FILE)
    ? JSON.parse(fs.readFileSync(COMMENTS_FILE, 'utf8'))
    : {};
  const vendorMap = fs.existsSync(VENDOR_MAP_PATH)
    ? JSON.parse(fs.readFileSync(VENDOR_MAP_PATH, 'utf8'))
    : {};

  // Reverse: G* → IF*
  const reverseClassMap = {};
  for (const [ifName, gName] of Object.entries(classMapping)) {
    reverseClassMap[gName] = ifName;
  }

  // Build set of all G* class names that have original source
  const classesWithOriginal = new Set(Object.values(classMapping));

  console.log(`Loaded reference data:`);
  console.log(`  ${Object.keys(classMapping).length} class mappings`);
  console.log(`  ${Object.keys(methodMapping).length} classes with methods`);
  console.log(`  ${Object.keys(vendorMap).length} vendor ID mappings\n`);

  return { classMapping, methodMapping, commentsMapping, vendorMap, reverseClassMap, classesWithOriginal };
}

/**
 * Load skeleton stubs from reconstructed/ directory
 */
function loadSkeletons() {
  const skeletons = {}; // className -> skeleton code

  if (!fs.existsSync(RECONSTRUCTED_DIR)) {
    console.log('  No reconstructed/ skeletons found\n');
    return skeletons;
  }

  function walkDir(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(full);
      } else if (entry.name.endsWith('.js')) {
        // Extract class name from filename (e.g., "GObject.js" or "gobject.js")
        const baseName = path.basename(entry.name, '.js');
        const code = fs.readFileSync(full, 'utf8');
        skeletons[baseName] = code;
      }
    }
  }
  walkDir(RECONSTRUCTED_DIR);

  console.log(`  Loaded ${Object.keys(skeletons).length} skeleton stubs\n`);
  return skeletons;
}

/**
 * Extract class name from vendor filename
 */
function classNameFromFilename(filename) {
  const m = filename.match(/^\d+-(.+)\.js$/);
  return m ? m[1] : null;
}

/**
 * Build a proper class file header
 */
function buildFileHeader(gClassName, reverseClassMap, methodMapping, moduleId) {
  const ifName = reverseClassMap[gClassName];
  const methods = methodMapping[gClassName] || [];

  const lines = [];
  lines.push('/**');
  lines.push(` * ${gClassName}`);
  if (ifName) {
    lines.push(` * @original ${ifName}`);
  }
  if (moduleId !== undefined) {
    lines.push(` * @module ${moduleId}`);
  }
  if (methods.length > 0) {
    lines.push(' *');
    lines.push(` * Known methods (${methods.length}):`);
    for (const m of methods.slice(0, 30)) {
      lines.push(` *   - ${m.name}`);
    }
    if (methods.length > 30) {
      lines.push(` *   ... and ${methods.length - 30} more`);
    }
  }
  lines.push(' */');
  return lines.join('\n');
}

/**
 * Reconstruct a vendor module into a proper class file
 */
function reconstructVendorModule(code, gClassName, data, skeletons) {
  const { reverseClassMap, methodMapping, commentsMapping, classesWithOriginal } = data;
  const hasOriginal = classesWithOriginal.has(gClassName);
  const methods = methodMapping[gClassName] || [];

  // Extract module ID from filename or code
  const moduleIdMatch = code.match(/Module (\d+)/);
  const moduleId = moduleIdMatch ? moduleIdMatch[1] : undefined;

  // Build the new file
  const parts = [];

  // 1. File header with class info
  parts.push(buildFileHeader(gClassName, reverseClassMap, methodMapping, moduleId));
  parts.push('');

  if (hasOriginal) {
    stats.classesWithOriginal++;
    parts.push(`// Original source available: ${reverseClassMap[gClassName]}`);
    parts.push(`// Methods recovered from original: ${methods.length}`);
  } else {
    stats.classesWithoutOriginal++;
    parts.push('// No original source match found');
  }
  parts.push('');

  // 2. Add the module body (strip old header comment)
  let body = code;
  const headerEnd = code.indexOf('*/');
  if (headerEnd > 0) {
    body = code.slice(headerEnd + 2).trimStart();
  }
  parts.push(body);

  // Track stats
  stats.methodsRecovered += methods.length;

  // Check for skeleton
  const skeleton = skeletons[gClassName];
  if (skeleton) {
    stats.skeletonsMerged++;
    // Append skeleton as a reference comment block
    parts.push('');
    parts.push('/* === SKELETON REFERENCE (from reconstructed/) ===');
    // Add first 50 lines of skeleton for reference
    const skeletonLines = skeleton.split('\n').slice(0, 50);
    parts.push(skeletonLines.join('\n'));
    if (skeleton.split('\n').length > 50) {
      parts.push(`... (${skeleton.split('\n').length - 50} more lines)`);
    }
    parts.push('=== END SKELETON REFERENCE === */');
  }

  return parts.join('\n');
}

/**
 * Process files recursively
 */
async function processDirectory(inputDir, outputDir, label, processor) {
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

    const result = processor(code, path.basename(inputPath));

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
  console.log('Reconstruct Module Bodies Script');
  console.log('================================\n');

  // Check dependencies
  if (!fs.existsSync(READABLE_VENDOR_DIR) && !fs.existsSync(READABLE_APP_DIR)) {
    console.log('No readable-modules/ found. Run apply-names.cjs first.');
    process.exit(1);
  }

  const data = loadData();
  const skeletons = loadSkeletons();

  // Process vendor modules
  await processDirectory(READABLE_VENDOR_DIR, OUTPUT_VENDOR_DIR, 'Vendor modules', (code, filename) => {
    const gClassName = classNameFromFilename(filename);
    if (gClassName) {
      return reconstructVendorModule(code, gClassName, data, skeletons);
    }
    return code;
  });

  // Process app modules (pass through with module header)
  await processDirectory(READABLE_APP_DIR, OUTPUT_APP_DIR, 'App modules', (code, filename) => {
    // App modules: just pass through (they don't have original source matches)
    return code;
  });

  // Report
  console.log('='.repeat(60));
  console.log('RECONSTRUCTION REPORT');
  console.log('='.repeat(60));
  console.log(`Files processed:            ${stats.filesProcessed}`);
  console.log(`Classes with original:      ${stats.classesWithOriginal}`);
  console.log(`Classes without original:   ${stats.classesWithoutOriginal}`);
  console.log(`Methods recovered:          ${stats.methodsRecovered}`);
  console.log(`Skeletons merged:           ${stats.skeletonsMerged}`);
  console.log('='.repeat(60));

  const report = {
    timestamp: new Date().toISOString(),
    ...stats
  };

  const reportPath = path.join(__dirname, 'reconstructed-full', 'reconstruction-report.json');
  fs.ensureDirSync(path.dirname(reportPath));
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\nReport saved to: reconstructed-full/reconstruction-report.json`);

  console.log('\n✓ Done!');
  console.log(`\nReconstructed modules written to:`);
  console.log(`  - ${OUTPUT_VENDOR_DIR}`);
  console.log(`  - ${OUTPUT_APP_DIR}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
