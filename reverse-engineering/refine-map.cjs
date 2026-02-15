/**
 * Refine discovered class names - filter out minified artifacts
 * Then update the module map and re-categorize extracted modules
 */

const fs = require('fs');
const path = require('path');

const MAP_FILE = path.join(__dirname, 'extracted-modules', 'module-map.json');
const ENHANCED_MAP = path.join(__dirname, 'extracted-modules', 'module-map-enhanced.json');
const DISCOVERIES = path.join(__dirname, 'extracted-modules', 'discovered-classes.json');

const existingMap = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));
const discoveries = JSON.parse(fs.readFileSync(DISCOVERIES, 'utf8'));

// Filter: keep only meaningful names (>2 chars, not single letter, not JS builtins)
const REJECT_NAMES = new Set([
    'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'Symbol',
    'Map', 'Set', 'WeakMap', 'WeakSet', 'Promise', 'Proxy', 'Reflect',
    'Error', 'TypeError', 'RangeError', 'SyntaxError', 'URIError',
    'Date', 'RegExp', 'JSON', 'Math', 'NaN', 'Infinity', 'Console',
    'Iterator', 'Buffer', 'Element', 'Node', 'Document', 'Event',
    'Image', 'Blob', 'URL', 'Headers', 'Request', 'Response',
    'GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS',
    'GSUB', 'GPOS', // OpenType table names, not classes
    'Down', 'Group', // Too generic
]);

const updatedMap = { ...existingMap };
let added = 0;

for (const [moduleId, info] of Object.entries(discoveries)) {
    const name = info.name;
    
    // Skip if already mapped
    if (existingMap[moduleId]) continue;
    
    // Skip single character names
    if (name.length <= 1) continue;
    
    // Skip rejected names
    if (REJECT_NAMES.has(name)) continue;
    
    // Skip single-char or two-char names that aren't G-prefixed
    if (name.length <= 2 && !name.startsWith('G')) continue;
    
    // For medium confidence: require at least 2 chars meaningful name and has some proto methods
    if (info.confidence === 'medium') {
        if (name.length < 3) continue; // skip single/double char minified vars
        if (info.protoMethods < 1 && !info.hasTypeId) continue; // skip if no evidence
    }
    
    // For low confidence: only accept G-prefixed names (those are very likely correct)
    if (info.confidence === 'low') {
        if (!name.startsWith('G') || name.length < 4) continue;
        // Filter out OpenType table names
        if (['GET', 'GSUB', 'GPOS', 'GSuite'].includes(name)) continue;
    }
    
    updatedMap[moduleId] = name;
    added++;
}

// Sort by module ID
const sorted = Object.entries(updatedMap)
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

const finalMap = {};
for (const [k, v] of sorted) {
    finalMap[k] = v;
}

// Write the refined map back as the main module-map
fs.writeFileSync(MAP_FILE, JSON.stringify(finalMap, null, 2));

console.log(`Updated module-map.json:`);
console.log(`  Original: ${Object.keys(existingMap).length} classes`);
console.log(`  Added: ${added} refined discoveries`);
console.log(`  Total: ${Object.keys(finalMap).length} classes`);

// Show what was added
console.log(`\nNewly added classes:`);
for (const [id, name] of sorted) {
    if (!existingMap[id]) {
        const info = discoveries[id];
        console.log(`  Module ${id}: ${name} (${info?.confidence || 'n/a'}, ${info?.protoMethods || 0} methods)`);
    }
}
