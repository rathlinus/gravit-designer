/**
 * Enhanced build script for Gravit Designer
 * 
 * Builds designer.browser.js from the best available source:
 * 1. readable-modules/ (if exists - with recovered variable names)
 * 2. deobfuscated-modules/ (if exists - with renamed parameters)
 * 3. annotated-modules/ (if exists - with require comments)
 * 4. src/modules/ (original extracted modules)
 * 
 * Supports:
 * - Source map generation
 * - Watch mode
 * - Development and production builds
 * 
 * Usage:
 *   node build-dev.cjs                - Build once
 *   node build-dev.cjs --watch        - Build and watch for changes
 *   node build-dev.cjs --production   - Production build (minified)
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const WATCH_MODE = args.includes('--watch');
const PRODUCTION = args.includes('--production');

// Directories
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_DIR = path.join(__dirname, 'src');
const READABLE_DIR = path.join(__dirname, 'readable-modules', 'app');
const DEOBF_DIR = path.join(__dirname, 'deobfuscated-modules', 'app');
const ANNOTATED_DIR = path.join(__dirname, 'annotated-modules', 'app');
const MODULES_DIR = path.join(SRC_DIR, 'modules');
const OUTPUT_FILE = path.join(PUBLIC_DIR, PRODUCTION ? 'designer.browser.js' : 'designer.browser.dev.js');
const SOURCE_MAP_FILE = OUTPUT_FILE + '.map';

// Build statistics
let buildCount = 0;
let lastBuildTime = 0;

/**
 * Determine the best source directory to use
 */
function getSourceDirectory() {
  if (fs.existsSync(READABLE_DIR)) {
    return { dir: READABLE_DIR, label: 'readable-modules/app' };
  } else if (fs.existsSync(DEOBF_DIR)) {
    return { dir: DEOBF_DIR, label: 'deobfuscated-modules/app' };
  } else if (fs.existsSync(ANNOTATED_DIR)) {
    return { dir: ANNOTATED_DIR, label: 'annotated-modules/app' };
  } else {
    return { dir: MODULES_DIR, label: 'src/modules' };
  }
}

/**
 * Strip JSDoc header from module file
 */
function stripHeader(code) {
  return code.replace(/^\/\*\*[\s\S]*?\*\/\s*\n?/, '');
}

/**
 * Generate source map
 */
function generateSourceMap(modules, moduleMap) {
  const mappings = [];
  const sources = [];
  const sourcesContent = [];
  
  // Build mappings for each module
  for (let i = 0; i < modules.length; i++) {
    if (modules[i] && moduleMap[i]) {
      sources.push(moduleMap[i].filename);
      sourcesContent.push(modules[i]);
    }
  }
  
  const sourceMap = {
    version: 3,
    file: path.basename(OUTPUT_FILE),
    sources,
    sourcesContent,
    names: [],
    mappings: '' // Simplified - proper source maps would need detailed line mappings
  };
  
  return JSON.stringify(sourceMap, null, 2);
}

/**
 * Main build function
 */
function build() {
  const startTime = Date.now();
  buildCount++;
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Build #${buildCount} - ${new Date().toLocaleTimeString()}`);
  console.log('='.repeat(60));
  
  try {
    // Determine source directory
    const source = getSourceDirectory();
    console.log(`Source: ${source.label}`);
    
    // Load module map
    const mapPath = path.join(SRC_DIR, 'module-map.json');
    if (!fs.existsSync(mapPath)) {
      throw new Error('module-map.json not found. Run extract-all-modules.cjs first.');
    }
    const moduleMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
    
    // Load runtime
    const runtimePath = path.join(SRC_DIR, 'runtime.js');
    if (!fs.existsSync(runtimePath)) {
      throw new Error('runtime.js not found. Run extract-all-modules.cjs first.');
    }
    const runtime = fs.readFileSync(runtimePath, 'utf8');
    
    // Get module IDs
    const moduleIds = Object.keys(moduleMap).map(Number).sort((a, b) => a - b);
    const maxId = Math.max(...moduleIds);
    
    console.log(`Modules: ${moduleIds.length} (max ID: ${maxId})`);
    
    // Build modules array
    const moduleStrings = [];
    let loaded = 0;
    let missing = 0;
    
    for (let i = 0; i <= maxId; i++) {
      if (moduleMap[i]) {
        const modulePath = path.join(source.dir, moduleMap[i].filename);
        if (fs.existsSync(modulePath)) {
          let code = fs.readFileSync(modulePath, 'utf8');
          code = stripHeader(code);
          moduleStrings[i] = code;
          loaded++;
        } else {
          moduleStrings[i] = null;
          missing++;
        }
      } else {
        // Sparse slot
        moduleStrings[i] = null;
      }
    }
    
    console.log(`Loaded: ${loaded} modules`);
    if (missing > 0) {
      console.log(`Missing: ${missing} modules`);
    }
    
    // Build the array string
    const arrayElements = moduleStrings.map(m => m === null ? '' : m);
    const modulesArrayCode = arrayElements.join(',\n');
    
    // Assemble final bundle
    let bundle = `${runtime}[\n${modulesArrayCode}\n]);`;
    
    // Add source map reference if not production
    if (!PRODUCTION) {
      bundle += `\n//# sourceMappingURL=${path.basename(SOURCE_MAP_FILE)}`;
      
      // Generate and write source map
      const sourceMap = generateSourceMap(moduleStrings, moduleMap);
      fs.writeFileSync(SOURCE_MAP_FILE, sourceMap);
      console.log(`Source map: ${path.basename(SOURCE_MAP_FILE)}`);
    }
    
    // Write output
    fs.writeFileSync(OUTPUT_FILE, bundle);
    
    const sizeKB = (bundle.length / 1024).toFixed(1);
    const sizeMB = (bundle.length / 1024 / 1024).toFixed(2);
    
    console.log(`Output: ${path.basename(OUTPUT_FILE)}`);
    console.log(`Size: ${sizeMB} MB (${sizeKB} KB)`);
    
    // Verify bundle syntax
    console.log('Verifying syntax...');
    try {
      new Function(bundle);
      console.log('✓ Syntax OK');
    } catch (e) {
      console.error('✗ Syntax error:', e.message);
      return false;
    }
    
    const buildTime = Date.now() - startTime;
    lastBuildTime = buildTime;
    console.log(`Build time: ${buildTime}ms`);
    console.log('✓ Build successful!\n');
    
    return true;
    
  } catch (e) {
    console.error('✗ Build failed:', e.message);
    console.error(e.stack);
    return false;
  }
}

/**
 * Watch mode
 */
function watch() {
  console.log('Watch mode enabled - watching for file changes...\n');
  
  const source = getSourceDirectory();
  
  // Initial build
  build();
  
  // Watch for changes
  fs.watch(source.dir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
      console.log(`\nFile changed: ${filename}`);
      // Debounce builds
      clearTimeout(watch.buildTimeout);
      watch.buildTimeout = setTimeout(() => {
        build();
      }, 100);
    }
  });
  
  console.log('Watching for changes... Press Ctrl+C to stop.\n');
}

// Run
if (WATCH_MODE) {
  watch();
} else {
  const success = build();
  process.exit(success ? 0 : 1);
}
