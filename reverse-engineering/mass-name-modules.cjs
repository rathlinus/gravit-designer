/**
 * Mass-name unnamed modules using multiple strategies:
 * 1. Auto-name from unique GClass strings  
 * 2. Name GEvent subclasses from Type enum keys
 * 3. Deeper pattern analysis for remaining modules
 */
const fs = require('fs');
const path = require('path');

const moduleMap = require('./src/module-map.json');

// Track what names are already taken
const existingNames = new Set();
for (const [id, m] of Object.entries(moduleMap)) {
  if (m && m.name) existingNames.add(m.name);
}

const nameUpdates = {};

function readModule(id) {
  const padded = id.toString().padStart(4, '0');
  const dir = 'readable-modules/app/';
  const files = fs.readdirSync(dir).filter(f => f.startsWith(padded + '_'));
  if (files.length === 0) return null;
  return fs.readFileSync(dir + files[0], 'utf8');
}

function suggestName(id, code) {
  // Strategy 1: Unique GClass string  
  const gravitNames = [...new Set([...code.matchAll(/['"]([GI]F?[A-Z][a-zA-Z]{3,})['"]/g)].map(m => m[1]))];
  if (gravitNames.length === 1) {
    return { name: gravitNames[0], reason: 'unique GClass string' };
  }

  // Strategy 2: GEvent subclass - look at Type enum to determine event kind
  const isEvent = code.includes('GCore.GObject.inherit') && code.includes('GCore.GEvent');
  if (isEvent) {
    const typeKeys = [...code.matchAll(/['"](\w+)['"]\s*:\s*\d+/g)].map(m => m[1]);
    if (typeKeys.length > 0) {
      // Try to determine the event name from enum keys
      const keyStr = typeKeys.join('_');
      // Check for common event groupings
      if (typeKeys.some(k => /Version|Share|File|CheckIn/.test(k))) return { name: 'GFileEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Selection|Select/.test(k))) return { name: 'GSelectionEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Page/.test(k))) return { name: 'GPageEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Layer/.test(k))) return { name: 'GLayerEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Transform/.test(k))) return { name: 'GTransformEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Color|Paint|Fill/.test(k))) return { name: 'GPaintEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Style/.test(k))) return { name: 'GStyleEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Font/.test(k))) return { name: 'GFontEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Invalidat/.test(k))) return { name: 'GInvalidationEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Drag|Drop/.test(k))) return { name: 'GDragDropEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Key|Keyboard/.test(k))) return { name: 'GKeyEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Mouse|Click|Pointer/.test(k))) return { name: 'GMouseEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Scroll|Wheel/.test(k))) return { name: 'GScrollEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Resize|Size/.test(k))) return { name: 'GResizeEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Undo|Redo/.test(k))) return { name: 'GUndoEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Zoom|Scale/.test(k))) return { name: 'GZoomEvent', reason: 'event types: ' + typeKeys.join(', ') };
      if (typeKeys.some(k => /Property|Change|Changed|Update/.test(k))) return { name: 'GPropertyEvent', reason: 'event types: ' + typeKeys.join(', ') };
      // Generic event with descriptive suffix
      return { name: 'GEvent_' + typeKeys[0], reason: 'event types: ' + typeKeys.join(', ') };
    }
    // Event without type enum
    const props = [...code.matchAll(/\.prototype\.(\w+)\s*=/g)].map(m => m[1]).filter(p => p !== 'constructor' && p.length > 2);
    if (props.length > 0) {
      return { name: 'GEvent_' + props[0], reason: 'event with props: ' + props.join(', ') };
    }
    return { name: 'GEvent_' + id, reason: 'generic event' };
  }

  // Strategy 3: GObject subclass (inherits from GObject but not GEvent)
  const isGObject = code.includes('GCore.GObject.inherit') && !isEvent;
  if (isGObject) {
    // Look for _typeid which is the class type identifier
    const typeId = code.match(/\._typeid\s*=\s*['"]([^'"]+)['"]/);
    if (typeId) return { name: typeId[1].split('.').pop(), reason: 'typeid: ' + typeId[1] };
    
    // Look at prototype methods for naming clues
    const methods = [...code.matchAll(/\.prototype\.(\w+)\s*=\s*function/g)].map(m => m[1]);
    if (methods.length > 0) {
      return { name: 'GObject_' + id, reason: 'GObject with methods: ' + methods.slice(0, 5).join(', ') };
    }
  }

  // Strategy 4: Module that adds to GCore/GEditor/GTools namespace
  const nsAssign = code.match(/(?:GCore|GEditor|GTools)\.(\w{3,})\s*=\s*(?:function|class|\w)/);
  if (nsAssign) {
    return { name: nsAssign[1], reason: 'namespace assignment: ' + nsAssign[0].substring(0, 40) };
  }

  // Strategy 5: Polyfill detection
  if (code.includes('core-js') || code.includes('$export') || code.includes('__webpack_require__')) {
    const target = code.match(/['"](\w+)['"]\s*,\s*\{/);
    if (target) return { name: 'polyfill_' + target[1], reason: 'polyfill for ' + target[1] };
  }

  // Strategy 6: Look for constructor name setting
  const ctorName = code.match(/\.(?:displayName|name)\s*=\s*['"](\w+)['"]/);
  if (ctorName) return { name: ctorName[1], reason: 'display/constructor name' };

  // Strategy 7: Large string blocks indicate data modules
  const longStrings = [...code.matchAll(/['"][^'"]{100,}['"]/g)];
  if (longStrings.length > 0 && code.length < 2000) {
    return { name: 'DataModule_' + id, reason: 'data module with long string constants' };
  }

  // Strategy 8: Check for specific API patterns
  if (code.includes('.registerAction')) return { name: 'GAction_' + id, reason: 'registers an action' };
  if (code.includes('.registerTool')) return { name: 'GTool_' + id, reason: 'registers a tool' };
  if (code.includes('.registerPanel')) return { name: 'GPanel_' + id, reason: 'registers a panel' };
  if (code.includes('GEditor.GAction')) return { name: 'GAction_' + id, reason: 'uses GEditor.GAction' };

  // Strategy 9: CryptoJS modules
  if (code.includes('CryptoJS') || code.includes('WordArray')) {
    const algo = code.match(/Algo\.(\w+)/);
    if (algo) return { name: 'CryptoJS' + algo[1], reason: 'CryptoJS algorithm: ' + algo[1] };
  }

  // Strategy 10: jQuery plugin
  if (code.includes('$.fn.') || code.includes('jQuery.fn.')) {
    const plugin = code.match(/\$\.fn\.(\w+)/);
    if (plugin) return { name: 'jQuery_' + plugin[1], reason: 'jQuery plugin' };
  }

  return null;
}

// Process all unnamed modules
const entries = Object.entries(moduleMap);
const unnamed = entries.filter(([k, m]) => m && !m.name);

console.log('Processing', unnamed.length, 'unnamed modules...');

let named = 0;
let skipped = 0;
const nameCounts = {};

for (const [id, m] of unnamed) {
  const code = readModule(id);
  if (!code) { skipped++; continue; }
  
  const suggestion = suggestName(id, code);
  if (suggestion) {
    let finalName = suggestion.name;
    // Handle duplicate names by appending ID
    if (!nameCounts[finalName]) nameCounts[finalName] = 0;
    nameCounts[finalName]++;
    if (nameCounts[finalName] > 1 || existingNames.has(finalName)) {
      finalName = finalName + '_' + id;
    }
    existingNames.add(finalName);
    
    nameUpdates[id] = { name: finalName, reason: suggestion.reason };
    named++;
  }
}

console.log('\nResults:');
console.log('  Named:', named);
console.log('  Skipped:', skipped);
console.log('  Still unnamed:', unnamed.length - named - skipped);

// Apply names to module map
let applied = 0;
for (const [id, update] of Object.entries(nameUpdates)) {
  if (moduleMap[id]) {
    const oldFilename = moduleMap[id].filename;
    const newFilename = oldFilename.replace(/_module\.js$/, '_' + update.name + '.js');
    moduleMap[id].name = update.name;
    moduleMap[id].filename = newFilename;
    applied++;
  }
}

fs.writeFileSync('./src/module-map.json', JSON.stringify(moduleMap, null, 2));
console.log('Applied', applied, 'name updates to module-map.json');

// Print all updates
console.log('\n=== APPLIED NAMES ===');
for (const [id, update] of Object.entries(nameUpdates)) {
  console.log(`  ${id.padStart(5)}: ${update.name} (${update.reason})`);
}

// Count remaining unnamed
const stillUnnamed = Object.values(moduleMap).filter(m => m && !m.name).length;
console.log('\nTotal named now:', Object.values(moduleMap).filter(m => m && m.name).length);
console.log('Still unnamed:', stillUnnamed);
