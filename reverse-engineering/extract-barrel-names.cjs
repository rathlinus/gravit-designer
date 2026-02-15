#!/usr/bin/env node
/**
 * extract-barrel-names.cjs
 * 
 * Discovers "barrel" modules (modules that re-export many classes) and extracts 
 * the name→moduleId mappings from them to populate the vendor module map.
 * 
 * Barrel modules look like:
 *   e.exports = { GScene: i(160), GObject: i(0), ... }
 * 
 * This script also handles:
 *   - Nested assignment patterns: t.GClassName = i(NNN)
 *   - Object.defineProperty patterns
 *   - Named require patterns in app modules: var GClass = require(NNN)
 */

const fs = require('fs');
const path = require('path');

const vendorMapPath = path.join(__dirname, 'extracted-modules', 'module-map.json');
const appMapPath = path.join(__dirname, 'src', 'module-map.json');

const vendorMap = JSON.parse(fs.readFileSync(vendorMapPath, 'utf8'));
const appMap = JSON.parse(fs.readFileSync(appMapPath, 'utf8'));

const initialVendorCount = Object.keys(vendorMap).length;
const initialAppNamed = Object.values(appMap).filter(i => i.name).length;

let totalExtracted = 0;
let barrelsFound = 0;

// --- Process vendor barrel modules ---
function processVendorBarrels() {
  const vendorDir = path.join(__dirname, 'ast-extracted-modules');
  const allFiles = [];
  
  function walkDir(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walkDir(path.join(dir, entry.name));
      } else if (entry.name.endsWith('.js')) {
        allFiles.push(path.join(dir, entry.name));
      }
    }
  }
  walkDir(vendorDir);
  
  console.log(`Scanning ${allFiles.length} vendor module files for barrel patterns...`);
  
  for (const filePath of allFiles) {
    const code = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: Property assignments in exports object
    // e.exports = { GClassName: i(NNN), ... }
    const exportObjMatches = code.matchAll(/([A-Z]\w{2,})\s*:\s*[eitn]\((\d+)\)/g);
    let count = 0;
    for (const m of exportObjMatches) {
      const name = m[1];
      const id = parseInt(m[2]);
      if (!vendorMap[id] && name.length > 2) {
        vendorMap[id] = name;
        totalExtracted++;
        count++;
      }
    }
    
    // Pattern 2: t.GClassName = i(NNN)
    const propAssignMatches = code.matchAll(/[te]\.([A-Z]\w{2,})\s*=\s*[eitn]\((\d+)\)/g);
    for (const m of propAssignMatches) {
      const name = m[1];
      const id = parseInt(m[2]);
      if (!vendorMap[id] && name.length > 2) {
        vendorMap[id] = name;
        totalExtracted++;
        count++;
      }
    }
    
    // Pattern 3: Object.defineProperty(t, "GClassName", { get: function() { return i(NNN) } })
    const defPropMatches = code.matchAll(/defineProperty\s*\(\s*[te]\s*,\s*["']([A-Z]\w{2,})["']\s*,\s*\{[^}]*\breturn\s+[eitn]\((\d+)\)/g);
    for (const m of defPropMatches) {
      const name = m[1];
      const id = parseInt(m[2]);
      if (!vendorMap[id] && name.length > 2) {
        vendorMap[id] = name;
        totalExtracted++;
        count++;
      }
    }
    
    if (count > 0) {
      const basename = path.relative(vendorDir, filePath);
      console.log(`  Barrel: ${basename} → ${count} new names`);
      barrelsFound++;
    }
  }
}

// --- Process app modules for barrel patterns and named requires ---
function processAppModules() {
  const appDir = path.join(__dirname, 'src', 'modules');
  const files = fs.readdirSync(appDir).filter(f => f.endsWith('.js'));
  
  console.log(`\nScanning ${files.length} app modules for naming patterns...`);
  
  let appBarrels = 0;
  let namedRequires = 0;
  
  for (const file of files) {
    const code = fs.readFileSync(path.join(appDir, file), 'utf8');
    const moduleId = parseInt(file.split('_')[0]);
    
    // Skip already named modules
    if (appMap[moduleId] && appMap[moduleId].name) continue;
    
    // Pattern A: Barrel exports in app modules
    // e.exports = { ClassName: n(NNN), ... }
    const barrelMatches = code.matchAll(/([A-Z]\w{2,})\s*:\s*n\((\d+)\)/g);
    let barrelCount = 0;
    for (const m of barrelMatches) {
      const name = m[1];
      const id = parseInt(m[2]);
      // If this app module references a vendor module with a name, use it
      if (!vendorMap[id] && name.length > 2) {
        vendorMap[id] = name;
        totalExtracted++;
      }
      barrelCount++;
    }
    
    if (barrelCount >= 3 && !appMap[moduleId].name) {
      // This is a barrel module
      appMap[moduleId].name = `barrel_${moduleId}`;
      appBarrels++;
    }
    
    // Pattern B: Named variable from require
    // var GClassName = n(NNN) or const GClassName = n(NNN)
    const namedReqMatches = code.matchAll(/(?:var|let|const)\s+([A-Z]\w{2,})\s*=\s*n\((\d+)\)/g);
    for (const m of namedReqMatches) {
      const name = m[1];
      const id = parseInt(m[2]);
      if (!vendorMap[id] && name.length > 2) {
        vendorMap[id] = name;
        totalExtracted++;
        namedRequires++;
      }
    }
    
    // Pattern C: Named variable from require with .default
    // var GClassName = n(NNN).default
    const namedReqDefaultMatches = code.matchAll(/(?:var|let|const)\s+([A-Z]\w{2,})\s*=\s*n\((\d+)\)\.default/g);
    for (const m of namedReqDefaultMatches) {
      const name = m[1];
      const id = parseInt(m[2]);
      if (!vendorMap[id] && name.length > 2) {
        vendorMap[id] = name;
        totalExtracted++;
        namedRequires++;
      }
    }
    
    // Pattern D: Detect module's own name from prominent patterns
    if (!appMap[moduleId].name) {
      // Look for registration patterns: GClassName.prototype._className = "xxx"
      const classNameMatch = code.match(/_className\s*=\s*["']([A-Z]\w{2,})["']/);
      if (classNameMatch) {
        appMap[moduleId].name = classNameMatch[1];
        continue;
      }
      
      // GClassName.NAMESPACE = "xxx"
      const nsMatch = code.match(/([A-Z]\w{2,})\.NAMESPACE\s*=/);
      if (nsMatch && nsMatch[1].length > 2) {
        appMap[moduleId].name = nsMatch[1];
        continue;
      }
      
      // t.default = GClassName
      const defaultMatch = code.match(/t\.default\s*=\s*([A-Z]\w{2,})\s*[;\n,]/);
      if (defaultMatch) {
        appMap[moduleId].name = defaultMatch[1];
        continue;
      }
      
      // e.exports = GClassName
      const modExportMatch = code.match(/e\.exports\s*=\s*([A-Z]\w{2,})\s*[;\n,]/);
      if (modExportMatch) {
        appMap[moduleId].name = modExportMatch[1];
        continue;
      }

      // e.exports = new GClassName
      const newMatch = code.match(/e\.exports\s*=\s*new\s+([A-Z]\w{2,})/);
      if (newMatch) {
        appMap[moduleId].name = newMatch[1];
        continue;
      }
    }
  }
  
  console.log(`  App barrels found: ${appBarrels}`);
  console.log(`  Named requires extracted: ${namedRequires}`);
}

// --- Process annotated app modules (they have resolved require comments) ---
function processAnnotatedModules() {
  const annoDir = path.join(__dirname, 'annotated-modules', 'app');
  if (!fs.existsSync(annoDir)) return;
  
  const files = fs.readdirSync(annoDir).filter(f => f.endsWith('.js'));
  console.log(`\nScanning ${files.length} annotated app modules for named require patterns...`);
  
  let found = 0;
  
  for (const file of files) {
    const code = fs.readFileSync(path.join(annoDir, file), 'utf8');
    
    // In annotated modules, requires have comments like:
    // n(123) /* GClassName */
    // var x = n(456) /* GClassName */
    // These comments come from resolve-requires. We can extract variable->class mappings.
    
    // Look for: var localName = n(NNN) /* ClassName */
    // where localName is a single letter but ClassName tells us what it is
    // This helps us name the MODULE referenced by the require
    const matches = code.matchAll(/n\((\d+)\)\s*\/\*\s*(\w+)\s*\*\//g);
    for (const m of matches) {
      const id = parseInt(m[1]);
      const name = m[2];
      if (name.startsWith('module_') || name === 'module') continue;
      if (name.length <= 2) continue;
      
      // Check if this names an app module
      if (appMap[id] && !appMap[id].name && name.length > 2) {
        appMap[id].name = name;
        found++;
      }
    }
  }
  
  console.log(`  Named from annotations: ${found}`);
}

// --- Also scan for well-known libraries ---
function detectLibraries() {
  const vendorDir = path.join(__dirname, 'ast-extracted-modules');
  const otherDir = path.join(vendorDir, 'other');
  if (!fs.existsSync(otherDir)) return;
  
  const files = fs.readdirSync(otherDir).filter(f => f.endsWith('.js'));
  console.log(`\nScanning ${files.length} vendor 'other' modules for library fingerprints...`);
  
  let found = 0;
  
  const LIBRARY_FINGERPRINTS = [
    { pattern: '_dereq_', name: 'Bluebird_Promise' },
    { pattern: 'PDFJS', name: 'PDF_js' },
    { pattern: 'opentype.js', name: 'OpenType_js' },
    { pattern: 'bezierCurveTo', name: null }, // canvas, too generic
    { pattern: 'XMLHttpRequest', name: null }, // too generic
    { pattern: 'lodash', name: 'lodash' },
    { pattern: 'moment', name: 'moment' },
    { pattern: 'jszip', name: 'JSZip' },
    { pattern: 'JSZip', name: 'JSZip' },
    { pattern: 'base64', name: null },
    { pattern: 'EventEmitter', name: 'EventEmitter' },
    { pattern: 'setImmediate', name: null },
    { pattern: 'Buffer', name: null },
    { pattern: 'readable-stream', name: null },
    { pattern: 'pako', name: 'pako' },
    { pattern: 'zlib', name: 'zlib_binding' },
    { pattern: 'inflate', name: null },
    { pattern: 'deflate', name: null },
    { pattern: 'crc32', name: 'CRC32' },
    { pattern: 'adler32', name: 'Adler32' },
    { pattern: 'unicode', name: null },
    { pattern: 'UTF8', name: null },
    { pattern: 'jsbn', name: 'jsbn_BigInteger' },
    { pattern: 'SHA256', name: 'SHA256' },
    { pattern: 'sha256', name: 'SHA256' },
    { pattern: 'DOMParser', name: null },
    { pattern: 'XMLSerializer', name: null },
  ];
  
  for (const file of files) {
    const idMatch = file.match(/^(\d+)-/);
    if (!idMatch) continue;
    const id = parseInt(idMatch[1]);
    if (vendorMap[id]) continue;
    
    const code = fs.readFileSync(path.join(otherDir, file), 'utf8');
    
    for (const { pattern, name } of LIBRARY_FINGERPRINTS) {
      if (name && code.includes(pattern)) {
        vendorMap[id] = name;
        found++;
        console.log(`  Module ${id}: ${name} (matched '${pattern}')`);
        break;
      }
    }
  }
  
  console.log(`  Libraries identified: ${found}`);
}

// Run all extractors
processVendorBarrels();
processAppModules();
processAnnotatedModules();
detectLibraries();

// Save updated maps
fs.writeFileSync(vendorMapPath, JSON.stringify(vendorMap, null, 2));
fs.writeFileSync(appMapPath, JSON.stringify(appMap, null, 2));

const finalVendorCount = Object.keys(vendorMap).length;
const finalAppNamed = Object.values(appMap).filter(i => i.name).length;

console.log('\n=== Summary ===');
console.log(`Vendor map: ${initialVendorCount} → ${finalVendorCount} (+${finalVendorCount - initialVendorCount} new)`);
console.log(`App named: ${initialAppNamed} → ${finalAppNamed} (+${finalAppNamed - initialAppNamed} new)`);
console.log(`Total new names extracted: ${totalExtracted}`);
console.log(`Barrel modules found: ${barrelsFound}`);

// Save report
const report = {
  timestamp: new Date().toISOString(),
  vendorMap: { before: initialVendorCount, after: finalVendorCount },
  appNamed: { before: initialAppNamed, after: finalAppNamed },
  totalExtracted,
  barrelsFound
};
fs.writeFileSync(path.join(__dirname, 'reports', 'barrel-names-report.json'), JSON.stringify(report, null, 2));
console.log('\nSaved reports/barrel-names-report.json');
