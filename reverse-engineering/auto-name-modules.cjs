#!/usr/bin/env node
/**
 * auto-name-modules.cjs
 * 
 * Automatically discovers and assigns names to unnamed app modules by analyzing
 * their source code for recognizable patterns:
 * 
 * 1. Prototype assignments (e.g., GObject.prototype.foo = ...)
 * 2. Class declarations (e.g., class GNode extends ...)
 * 3. Constructor function patterns (e.g., function GRect(...))
 * 4. Babel default exports (e.g., t.default = SomeClass)
 * 5. core-js polyfill registration patterns
 * 6. $export / polyfill target patterns (e.g., { target: "Array", ... })
 * 7. Babel helper patterns (_interopRequireDefault, etc.)
 * 8. Tiny stub modules that just re-export another module
 * 9. Named function exports (t.functionName = ...)
 * 10. Module.exports assignments (e.exports = SomeClass)
 */

const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, 'src', 'modules');
const appMapPath = path.join(__dirname, 'src', 'module-map.json');
const vendorMapPath = path.join(__dirname, 'extracted-modules', 'module-map.json');

const appMap = JSON.parse(fs.readFileSync(appMapPath, 'utf8'));
const vendorMap = JSON.parse(fs.readFileSync(vendorMapPath, 'utf8'));

const stats = {
  alreadyNamed: 0,
  protoPattern: 0,
  classDecl: 0,
  constructorFunc: 0,
  babelDefault: 0,
  coreJsPolyfill: 0,
  exportTarget: 0,
  babelHelper: 0,
  tinyStub: 0,
  namedExport: 0,
  moduleExport: 0,
  settingsModule: 0,
  unidentified: 0,
  total: 0
};

// Known babel helper patterns
const BABEL_HELPERS = {
  'e && e.__esModule ? e : { default: e }': '_interopRequireDefault',
  'e.__esModule ? e : { default: e }': '_interopRequireDefault',
  '_typeof': '_typeof_helper',
  'Symbol.iterator': null, // detected separately
  'Object.defineProperty(t, "__esModule"': null,
  'return e && e.__esModule': '_interopRequireDefault',
  'Object.getOwnPropertyDescriptor': null,
  'Object.keys': null,
};

// core-js polyfill naming
function detectCoreJsName(code) {
  // Pattern: o({ target: "Array", proto: true ... }, { flat: ... })
  const targetMatch = code.match(/\btarget:\s*["'](\w+)["']/);
  const protoMatch = code.match(/\bproto:\s*(!0|true)/);
  const statMatch = code.match(/\bstat:\s*(!0|true)/);
  
  if (targetMatch) {
    const target = targetMatch[1];
    // Try to find the method name from the second argument object
    const methodMatch = code.match(/\},\s*\{\s*(\w+):\s*(?:function|[\w.]+)/);
    if (methodMatch) {
      const method = methodMatch[1];
      const scope = protoMatch ? 'prototype' : (statMatch ? 'static' : '');
      return `polyfill_${target}${scope ? '_' + scope : ''}_${method}`;
    }
    return `polyfill_${target}`;
  }
  
  // Pattern: n(XXX) only - stub that just loads a polyfill
  const stubMatch = code.match(/^[^{}]*function\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\s*\)\s*\{\s*"use strict";\s*n\((\d+)\);\s*\}[^{}]*$/s);
  if (stubMatch) {
    return `polyfill_stub_${stubMatch[1]}`;
  }
  
  // Pattern: multiple requires only
  const multiStub = code.match(/^[^{}]*function\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\s*\)\s*\{\s*"use strict";\s*(n\(\d+\)[,;]\s*)+\s*\}[^{}]*$/s);
  if (multiStub) {
    return 'polyfill_bundle';
  }
  
  return null;
}

// Detect G* class from prototype pattern
function detectPrototypeClass(code) {
  // Look for constructor or prototype patterns typical of Gravit classes
  // Pattern: X.prototype.method = function
  const protoMatches = code.matchAll(/(\w+)\.prototype\.(\w+)\s*=/g);
  const classCounts = Object.create(null);
  
  for (const m of protoMatches) {
    const name = m[1];
    // Skip single-char minified names and common built-ins
    if (name.length <= 2) continue;
    if (['Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Date', 'Error', 'Map', 'Set', 'Promise', 'Symbol', 'Math'].includes(name)) continue;
    classCounts[name] = (classCounts[name] || 0) + 1;
  }
  
  // Find the most common class name
  let bestName = null, bestCount = 0;
  for (const [name, count] of Object.entries(classCounts)) {
    if (count > bestCount) {
      bestName = name;
      bestCount = count;
    }
  }
  
  return bestName;
}

// Detect class declaration
function detectClassDeclaration(code) {
  const match = code.match(/class\s+([A-Z]\w+)(?:\s+extends\s+|\s*\{)/);
  if (match) return match[1];
  return null;
}

// Detect constructor function
function detectConstructorFunction(code) {
  // function GFoo(args) { this.property = ... }
  const match = code.match(/function\s+([A-Z]\w{2,})\s*\([^)]*\)\s*\{[^}]*this\./);
  if (match) return match[1];
  return null;
}

// Detect babel default export: t.default = X
function detectBabelDefaultExport(code) {
  const match = code.match(/t\.default\s*=\s*([A-Z]\w{2,})/);
  if (match) return match[1];
  return null;
}

// Detect babel helper
function detectBabelHelper(code) {
  if (code.length < 400) {
    if (code.includes('e.__esModule') && code.includes('default')) return '_interopRequireDefault';
    if (code.includes('_typeof') || (code.includes('Symbol') && code.includes('typeof'))) return '_typeof';
    if (code.includes('Object.assign') || code.includes('.assign')) {
      if (code.includes('target:')) return 'polyfill_Object_assign';
    }
    if (code.includes('parseInt') && code.includes('target:')) return 'polyfill_parseInt';
  }
  
  // asyncToGenerator pattern
  if (code.includes('asyncGeneratorStep') || code.includes('_asyncToGenerator')) return '_asyncToGenerator';
  
  // objectSpread
  if (code.includes('ownKeys') && code.includes('getOwnPropertySymbols') && code.length < 2000) return '_objectSpread';
  
  return null;
}

// Detect named exports pattern: t.exportName = ...
function detectNamedExports(code) {
  const exports = [];
  const matches = code.matchAll(/(?:t|exports)\.([A-Z]\w{3,})\s*=/g);
  for (const m of matches) {
    if (!['__esModule', 'default'].includes(m[1])) {
      exports.push(m[1]);
    }
  }
  if (exports.length === 1) return exports[0];
  if (exports.length > 1) {
    // Find common prefix
    const prefix = exports.reduce((a, b) => {
      let i = 0;
      while (i < a.length && i < b.length && a[i] === b[i]) i++;
      return a.substring(0, i);
    });
    if (prefix.length >= 3) return 'Exports_' + prefix;
    return 'Exports_' + exports[0];
  }
  return null;
}

// Detect module.exports = new Constructor or specific class
function detectModuleExport(code) {
  // e.exports = new X()
  let match = code.match(/e\.exports\s*=\s*new\s+([A-Z]\w{2,})/);
  if (match) return match[1];
  
  // e.exports = X (where X is a class-like name)
  match = code.match(/e\.exports\s*=\s*([A-Z]\w{2,})\s*[;\n]/);
  if (match) return match[1];
  
  return null;
}

// Detect settings/config module
function detectSettingsModule(code) {
  if (code.includes('GoogleTagManager') || code.includes('GA:') || code.includes('DOMAIN')) {
    return 'AppSettings';
  }
  if (code.includes('PURCHASE') && code.includes('URL_TO_PRODUCT')) {
    return 'AppSettings';
  }
  return null;
}

// Detect merge/collaboration utilities
function detectUtilityModule(code) {
  if (code.includes('_mergeChildren') && code.includes('_mergePath')) {
    return 'CollaborationMergeUtils';
  }
  if (code.includes('_cloneChildrenIntoReceiver')) {
    return 'CollaborationMergeUtils';
  }
  return null;
}

// Detect menu/action module patterns
function detectMenuModule(code) {
  if (code.includes('GLocale.get') && code.includes('this.label') && code.includes('this.parent')) {
    return 'MenuItemBuilder';
  }
  return null;
}

// Process all modules
const files = fs.readdirSync(modulesDir).filter(f => f.endsWith('.js')).sort();
const newNames = Object.create(null);
const unidentified = [];

for (const file of files) {
  const id = parseInt(file.split('_')[0]);
  const info = appMap[String(id)];
  stats.total++;
  
  if (info && info.name) {
    stats.alreadyNamed++;
    continue;
  }
  
  const code = fs.readFileSync(path.join(modulesDir, file), 'utf8');
  
  // Try each detection strategy in order of reliability
  let name = null;
  let strategy = null;
  
  // 1. Class declaration (most reliable)
  name = detectClassDeclaration(code);
  if (name) { strategy = 'classDecl'; stats.classDecl++; }
  
  // 2. Prototype-based class detection
  if (!name) {
    name = detectPrototypeClass(code);
    if (name) { strategy = 'protoPattern'; stats.protoPattern++; }
  }
  
  // 3. Constructor function
  if (!name) {
    name = detectConstructorFunction(code);
    if (name) { strategy = 'constructorFunc'; stats.constructorFunc++; }
  }
  
  // 4. Babel default export
  if (!name) {
    name = detectBabelDefaultExport(code);
    if (name) { strategy = 'babelDefault'; stats.babelDefault++; }
  }
  
  // 5. Module export
  if (!name) {
    name = detectModuleExport(code);
    if (name) { strategy = 'moduleExport'; stats.moduleExport++; }
  }
  
  // 6. Named exports
  if (!name) {
    name = detectNamedExports(code);
    if (name) { strategy = 'namedExport'; stats.namedExport++; }
  }
  
  // 7. Settings/config module
  if (!name) {
    name = detectSettingsModule(code);
    if (name) { strategy = 'settingsModule'; stats.settingsModule++; }
  }
  
  // 8. Utility module
  if (!name) {
    name = detectUtilityModule(code);
    if (name) { strategy = 'utility'; }
  }
  
  // 9. Menu module
  if (!name) {
    name = detectMenuModule(code);
    if (name) { strategy = 'menu'; }
  }
  
  // 10. Babel helper
  if (!name) {
    name = detectBabelHelper(code);
    if (name) { strategy = 'babelHelper'; stats.babelHelper++; }
  }
  
  // 11. core-js polyfill
  if (!name) {
    name = detectCoreJsPolyfill(code);
    if (name) { strategy = 'coreJsPolyfill'; stats.coreJsPolyfill++; }
  }
  
  // 12. Export target pattern
  if (!name) {
    const targetMatch = code.match(/\btarget:\s*["'](\w+)["']/);
    if (targetMatch) {
      const target = targetMatch[1];
      const methodMatch = code.match(/\},\s*\{\s*(\w+):/);
      if (methodMatch) {
        name = `polyfill_${target}_${methodMatch[1]}`;
      } else {
        name = `polyfill_${target}`;
      }
      strategy = 'exportTarget';
      stats.exportTarget++;
    }
  }
  
  // 13. Tiny stub - just loads another module
  if (!name && code.length < 200) {
    const stubMatch = code.match(/n\((\d+)\)/g);
    if (stubMatch && stubMatch.length <= 3) {
      const ids = stubMatch.map(s => s.match(/\d+/)[0]);
      name = `stub_requires_${ids.join('_')}`;
      strategy = 'tinyStub';
      stats.tinyStub++;
    }
  }
  
  if (name) {
    newNames[id] = { name, strategy };
  } else {
    stats.unidentified++;
    unidentified.push({ id, size: code.length });
  }
}

// Apply names to app map
let applied = 0;
for (const [id, { name }] of Object.entries(newNames)) {
  if (appMap[id]) {
    appMap[id].name = name;
    applied++;
  }
}

// Save updated map
fs.writeFileSync(appMapPath, JSON.stringify(appMap, null, 2));

// Also create combined map for resolve-requires
const combinedMap = Object.create(null);

// Add vendor names
for (const [id, name] of Object.entries(vendorMap)) {
  combinedMap[id] = name;
}

// Add app names (using __app_ prefix to distinguish)
for (const [id, info] of Object.entries(appMap)) {
  if (info.name) {
    combinedMap[`app_${id}`] = info.name;
  }
}

// Report
console.log('\n=== Auto-Name Results ===');
console.log('Total modules:', stats.total);
console.log('Already named:', stats.alreadyNamed);
console.log('New names applied:', applied);
console.log('\nBy strategy:');
console.log('  Class declarations:', stats.classDecl);
console.log('  Prototype patterns:', stats.protoPattern);
console.log('  Constructor funcs: ', stats.constructorFunc);
console.log('  Babel default:     ', stats.babelDefault);
console.log('  Module exports:    ', stats.moduleExport);
console.log('  Named exports:     ', stats.namedExport);
console.log('  Settings modules:  ', stats.settingsModule);
console.log('  Babel helpers:     ', stats.babelHelper);
console.log('  core-js polyfills: ', stats.coreJsPolyfill);
console.log('  Export targets:    ', stats.exportTarget);
console.log('  Tiny stubs:        ', stats.tinyStub);
console.log('  Unidentified:      ', stats.unidentified);

console.log('\nNow named:', stats.alreadyNamed + applied, '/', stats.total);
console.log('Naming rate:', ((stats.alreadyNamed + applied) / stats.total * 100).toFixed(1) + '%');

// Show some of the newly named modules
console.log('\nSample new names (first 40):');
const entries = Object.entries(newNames).slice(0, 40);
for (const [id, { name, strategy }] of entries) {
  console.log(`  Module ${String(id).padStart(4)}: ${name} (${strategy})`);
}

// Show largest unidentified
console.log('\nLargest unidentified (top 20):');
unidentified.sort((a, b) => b.size - a.size);
for (const { id, size } of unidentified.slice(0, 20)) {
  console.log(`  Module ${String(id).padStart(4)}: ${size} bytes`);
}

// Save report
const report = {
  timestamp: new Date().toISOString(),
  stats,
  newNames: Object.fromEntries(Object.entries(newNames).map(([id, { name, strategy }]) => [id, { name, strategy }])),
  unidentified: unidentified.map(u => u.id)
};
fs.writeFileSync(path.join(__dirname, 'reports', 'auto-name-report.json'), JSON.stringify(report, null, 2));
console.log('\nReport saved to reports/auto-name-report.json');
console.log('App module map updated: src/module-map.json');

// Also detect names in vendor modules that aren't in the vendor map
const vendorModulesDir = path.join(__dirname, 'ast-extracted-modules');
const vendorFiles = fs.existsSync(vendorModulesDir) 
  ? fs.readdirSync(vendorModulesDir).filter(f => f.endsWith('.js'))
  : [];

let vendorNewNames = 0;
for (const file of vendorFiles) {
  // Extract ID from filename like "0123-GClassName.js"  
  const idMatch = file.match(/^(\d+)-/);
  if (!idMatch) continue;
  const id = parseInt(idMatch[1]);
  
  // Skip if already named
  if (vendorMap[id]) continue;
  
  const code = fs.readFileSync(path.join(vendorModulesDir, file), 'utf8');
  
  let name = detectClassDeclaration(code) 
    || detectPrototypeClass(code) 
    || detectConstructorFunction(code)
    || detectBabelDefaultExport(code)
    || detectModuleExport(code);
  
  if (name) {
    vendorMap[id] = name;
    vendorNewNames++;
  }
}

if (vendorNewNames > 0) {
  fs.writeFileSync(vendorMapPath, JSON.stringify(vendorMap, null, 2));
  console.log('\nVendor map: ' + vendorNewNames + ' new names added (total: ' + Object.keys(vendorMap).length + ')');
}

// Helper function for core-js detection (needs to be above where it's called)
function detectCoreJsPolyfill(code) {
  // Check for core-js module paths in the code
  const cjsMatch = code.match(/["']es\.([\w.-]+)["']/);
  if (cjsMatch) return 'corejs_es_' + cjsMatch[1].replace(/\./g, '_');
  
  const webMatch = code.match(/["']web\.([\w.-]+)["']/);
  if (webMatch) return 'corejs_web_' + webMatch[1].replace(/\./g, '_');
  
  return null;
}
