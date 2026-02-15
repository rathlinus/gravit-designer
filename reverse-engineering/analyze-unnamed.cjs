/**
 * Analyze unnamed modules and suggest names based on code patterns
 */
const fs = require('fs');
const path = require('path');

const map = require('./src/module-map.json');
const entries = Object.entries(map);
const unnamed = entries.filter(([k, m]) => m && !m.name).sort((a, b) => b[1].size - a[1].size);
const ids = unnamed.map(([k, m]) => m.filename.match(/^(\d+)/)[1]);

console.log('Total unnamed:', ids.length);

const suggestions = {};
let autoNamed = 0;

for (const id of ids) {
  const padded = id.padStart(4, '0');
  const dir = 'readable-modules/app/';
  const files = fs.readdirSync(dir).filter(f => f.startsWith(padded + '_'));
  if (files.length === 0) continue;
  const code = fs.readFileSync(dir + files[0], 'utf8');

  // Strategy 1: Look for GCore/GEditor/GTools class references that indicate what this module creates
  const apiCalls = [...new Set([...code.matchAll(/(?:GCore|GEditor|GTools)\.(\w+)/g)].map(m => m[1]))].filter(n => n.length > 2);
  
  // Strategy 2: String literals that look like class/type names (PascalCase, 4+ chars)
  const pascalStrings = [...new Set([...code.matchAll(/['"]([A-Z][a-zA-Z]{3,}(?:\.[A-Z][a-zA-Z]*)*)['"]/g)].map(m => m[1]))];
  
  // Strategy 3: Inheritance calls
  const extendCalls = [...code.matchAll(/(?:inherits|__extends|_inherits)\s*\(\s*(\w+)\s*,\s*(\w+)/g)].map(m => ({ child: m[1], parent: m[2] }));
  
  // Strategy 4: Constructor-like patterns - function that sets this._ properties
  const constructors = [...code.matchAll(/function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*this\._/g)].map(m => m[1]).filter(n => n.length > 2);
  
  // Strategy 5: exports.default assignment
  const defaultExport = code.match(/exports(?:\.default|\["default"\])\s*=\s*(\w+)/);
  
  // Strategy 6: Specific registration patterns  
  const actionReg = code.match(/GAction\.(?:register|getId).*?['"]([^'"]+)['"]/);
  const eventReg = code.match(/new\s+GCore\.GEventBase\s*\(\s*['"]([^'"]+)['"]/);
  
  // Strategy 7: Module type detection from imports
  const importsGEditor = code.includes('require(15)') || code.includes('GEditor');
  const importsGTools = code.includes('require(53)') || code.includes('GTools');
  
  // Strategy 8: Look for _typeid or type string assignments
  const typeId = code.match(/\.(?:_typeid|_typeId|typeid)\s*=\s*['"]([^'"]+)['"]/);
  const mimeType = code.match(/\._mimeType\s*=\s*['"]([^'"]+)['"]/);
  
  // Strategy 9: Common widget/dialog patterns
  const widgetTitle = code.match(/\.title\s*=\s*['"]([^'"]{3,30})['"]/);
  
  // Try to determine a name
  let suggestedName = null;
  let reason = '';
  
  // Check typeId first - most reliable
  if (typeId) {
    suggestedName = typeId[1].split('.').pop();
    reason = 'typeId: ' + typeId[1];
  }
  // Action registration
  else if (actionReg) {
    const actionName = actionReg[1].replace(/\./g, '_');
    suggestedName = 'G' + actionName.charAt(0).toUpperCase() + actionName.slice(1);
    reason = 'action: ' + actionReg[1];
  }
  // Extend calls with meaningful parent names
  else if (extendCalls.length > 0 && apiCalls.length > 0) {
    // The API calls tell us what GCore/GEditor classes are used
    const parentClasses = apiCalls.filter(a => /^G[A-Z]/.test(a) || /^[A-Z][a-z]/.test(a));
    if (parentClasses.length > 0) {
      reason = 'extends: ' + JSON.stringify(extendCalls[0]) + ', uses: ' + parentClasses.join(', ');
    }
  }
  
  // For PascalCase strings that look like Gravit class names
  if (!suggestedName && pascalStrings.length > 0) {
    const gravitNames = pascalStrings.filter(s => /^G[A-Z]/.test(s) || /^IF[A-Z]/.test(s));
    if (gravitNames.length === 1) {
      suggestedName = gravitNames[0];
      reason = 'unique GClass string: ' + gravitNames[0];
    } else if (gravitNames.length > 1) {
      reason = 'multiple GClass strings: ' + gravitNames.join(', ');
    }
  }
  
  suggestions[id] = {
    size: map[id] ? map[id].size : 0,
    suggestedName,
    reason,
    apiCalls: apiCalls.slice(0, 6),
    pascalStrings: pascalStrings.slice(0, 8),
    extends: extendCalls.slice(0, 2),
    constructors: constructors.slice(0, 3),
    defaultExport: defaultExport ? defaultExport[1] : null,
  };
  
  if (suggestedName) autoNamed++;
}

console.log('Auto-suggested names:', autoNamed);
console.log('\n=== AUTO-NAMED ===');
for (const [id, info] of Object.entries(suggestions)) {
  if (info.suggestedName) {
    console.log(`  ${id.padStart(5)}: ${info.suggestedName} (${info.reason})`);
  }
}

console.log('\n=== NEED MANUAL REVIEW (with clues) ===');
let clueCount = 0;
for (const [id, info] of Object.entries(suggestions)) {
  if (!info.suggestedName && (info.pascalStrings.length > 0 || info.apiCalls.length > 0 || info.extends.length > 0)) {
    clueCount++;
    const parts = [];
    if (info.pascalStrings.length) parts.push('str=[' + info.pascalStrings.join(', ') + ']');
    if (info.extends.length) parts.push('ext=' + JSON.stringify(info.extends[0]));
    if (info.apiCalls.length) parts.push('api=[' + info.apiCalls.slice(0, 4).join(', ') + ']');
    console.log(`  ${id.padStart(5)} (${(info.size/1024).toFixed(1)}KB): ${parts.join(' | ')}`);
  }
}
console.log('Total with clues:', clueCount);

console.log('\n=== NO CLUES ===');
let noClue = 0;
for (const [id, info] of Object.entries(suggestions)) {
  if (!info.suggestedName && info.pascalStrings.length === 0 && info.apiCalls.length === 0 && info.extends.length === 0) {
    noClue++;
  }
}
console.log('Total with no clues:', noClue);

fs.writeFileSync('unnamed-analysis.json', JSON.stringify(suggestions, null, 2));
