/**
 * Discover additional class names from vendor modules
 * Scans all extracted modules (especially 'other') for class-like patterns
 */

const fs = require('fs');
const path = require('path');

const AST_DIR = path.join(__dirname, 'ast-extracted-modules');
const MAP_FILE = path.join(__dirname, 'extracted-modules', 'module-map.json');

// Load existing map
const existingMap = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));
const existingIds = new Set(Object.keys(existingMap));

// Scan all categories
const categories = fs.readdirSync(AST_DIR).filter(d => 
    fs.statSync(path.join(AST_DIR, d)).isDirectory()
);

const discoveries = {};
let totalScanned = 0;

for (const cat of categories) {
    const catDir = path.join(AST_DIR, cat);
    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.js'));
    
    for (const file of files) {
        const code = fs.readFileSync(path.join(catDir, file), 'utf8');
        const moduleId = file.match(/^(\d+)/)?.[1];
        totalScanned++;
        
        if (!moduleId || existingIds.has(moduleId)) continue;
        
        // Strategy 1: prototype assignments — ClassName.prototype.method =
        const protoMatches = code.match(/([A-Z][A-Za-z]{2,})\.prototype\.\w+\s*=/g);
        const protoNames = {};
        if (protoMatches) {
            for (const m of protoMatches) {
                const name = m.match(/^([A-Z][A-Za-z]+)/)?.[1];
                if (name) protoNames[name] = (protoNames[name] || 0) + 1;
            }
        }
        
        // Strategy 2: .inherit(ClassName, BaseClass)
        const inheritMatches = code.match(/\.inherit\s*\(\s*([A-Za-z]+)\s*,\s*([A-Za-z]+)\s*\)/g);
        let inheritName = null;
        let inheritBase = null;
        if (inheritMatches) {
            for (const m of inheritMatches) {
                const parts = m.match(/\.inherit\s*\(\s*([A-Za-z]+)\s*,\s*([A-Za-z]+)\s*\)/);
                if (parts) {
                    inheritName = parts[1];
                    inheritBase = parts[2];
                }
            }
        }
        
        // Strategy 3: Named function declarations (constructors)
        const funcMatches = code.match(/function\s+([A-Z][A-Za-z]{2,})\s*\(/g);
        const funcNames = [];
        if (funcMatches) {
            for (const m of funcMatches) {
                const name = m.match(/function\s+([A-Z][A-Za-z]+)/)?.[1];
                if (name && !['Function', 'Object', 'Array', 'String', 'Number', 'Boolean', 'RegExp', 'Error', 'TypeError', 'RangeError', 'Date', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Symbol', 'Proxy', 'Reflect', 'Uint8Array', 'Int32Array', 'Float32Array', 'Float64Array', 'ArrayBuffer', 'DataView', 'XMLHttpRequest', 'FormData', 'Blob', 'FileReader', 'Image', 'Element', 'Node', 'Document', 'Event', 'MouseEvent', 'KeyboardEvent', 'TouchEvent', 'Worker', 'MessageEvent', 'WebSocket', 'Headers', 'Request', 'Response', 'URL', 'URLSearchParams', 'TextEncoder', 'TextDecoder', 'AbortController'].includes(name)) {
                    funcNames.push(name);
                }
            }
        }
        
        // Strategy 4: module.exports = ClassName or e.exports = ClassName
        const exportsMatch = code.match(/(?:e|t)\.exports\s*=\s*([A-Z][A-Za-z]{2,})\b/);
        const exportName = exportsMatch?.[1];
        
        // Strategy 5: __gtype_id__ assignment (definitive G-class marker)
        const hasTypeId = /__gtype_id__/.test(code);
        
        // Strategy 6: GObject.inherit or .mix calls  
        const gInheritMatch = code.match(/([A-Za-z]+)\.inherit\s*\(/);
        
        // Strategy 7: String "GClassName" in the code
        const gStringMatches = code.match(/["'](G[A-Z][A-Za-z]+)["']/g);
        const gStrings = [];
        if (gStringMatches) {
            for (const m of gStringMatches) {
                const name = m.match(/["'](G[A-Z][A-Za-z]+)["']/)?.[1];
                if (name) gStrings.push(name);
            }
        }
        
        // Determine best class name
        let bestName = null;
        let confidence = 'low';
        
        // Highest confidence: inherit + prototype combo
        if (inheritName && protoNames[inheritName]) {
            bestName = inheritName;
            confidence = 'high';
        }
        // Export name matching prototype
        else if (exportName && protoNames[exportName]) {
            bestName = exportName;
            confidence = 'high';
        }
        // Prototype with many methods
        else if (Object.keys(protoNames).length > 0) {
            const sorted = Object.entries(protoNames).sort((a,b) => b[1] - a[1]);
            bestName = sorted[0][0];
            confidence = sorted[0][1] >= 3 ? 'high' : 'medium';
        }
        // Inherit name alone
        else if (inheritName) {
            bestName = inheritName;
            confidence = 'medium';
        }
        // Export name alone
        else if (exportName) {
            bestName = exportName;
            confidence = 'medium';
        }
        // Function name (if single constructor-like)
        else if (funcNames.length === 1) {
            bestName = funcNames[0];
            confidence = 'low';
        }
        // G-string heuristic
        else if (gStrings.length === 1) {
            bestName = gStrings[0];
            confidence = 'low';
        }
        
        if (bestName) {
            // Filter out obvious non-class names
            if (['Infinity', 'NaN', 'Math', 'JSON', 'Console', 'Iterator'].includes(bestName)) continue;
            
            discoveries[moduleId] = {
                name: bestName,
                confidence,
                hasTypeId,
                protoMethods: Object.values(protoNames).reduce((a,b) => a+b, 0),
                source: cat + '/' + file
            };
        }
    }
}

// Results
const sorted = Object.entries(discoveries)
    .sort((a,b) => parseInt(a[0]) - parseInt(b[0]));

console.log(`\nScanned ${totalScanned} modules`);
console.log(`Existing mappings: ${existingIds.size}`);
console.log(`New discoveries: ${sorted.length}\n`);

const byConfidence = { high: [], medium: [], low: [] };
for (const [id, info] of sorted) {
    byConfidence[info.confidence].push({ id, ...info });
}

console.log(`=== HIGH CONFIDENCE (${byConfidence.high.length}) ===`);
for (const d of byConfidence.high) {
    console.log(`  Module ${d.id}: ${d.name} (${d.protoMethods} proto methods${d.hasTypeId ? ', G-class' : ''})`);
}

console.log(`\n=== MEDIUM CONFIDENCE (${byConfidence.medium.length}) ===`);
for (const d of byConfidence.medium) {
    console.log(`  Module ${d.id}: ${d.name} (${d.protoMethods} proto methods${d.hasTypeId ? ', G-class' : ''})`);
}

console.log(`\n=== LOW CONFIDENCE (${byConfidence.low.length}) ===`);
for (const d of byConfidence.low.slice(0, 30)) {
    console.log(`  Module ${d.id}: ${d.name}${d.hasTypeId ? ' (G-class)' : ''}`);
}
if (byConfidence.low.length > 30) {
    console.log(`  ... and ${byConfidence.low.length - 30} more`);
}

// Build updated map
const updatedMap = { ...existingMap };
let addedHigh = 0, addedMedium = 0;
for (const [id, info] of sorted) {
    if (info.confidence === 'high' || info.confidence === 'medium') {
        updatedMap[id] = info.name;
        if (info.confidence === 'high') addedHigh++;
        else addedMedium++;
    }
}

// Write updated map
const outputMapPath = path.join(__dirname, 'extracted-modules', 'module-map-enhanced.json');
fs.writeFileSync(outputMapPath, JSON.stringify(updatedMap, null, 2));
console.log(`\nWrote enhanced map: ${outputMapPath}`);
console.log(`  Original: ${existingIds.size} classes`);
console.log(`  Added: ${addedHigh} high + ${addedMedium} medium confidence`);
console.log(`  Total: ${Object.keys(updatedMap).length} classes`);

// Also write all discoveries including low confidence to a separate file
const allDiscoveries = {};
for (const [id, info] of sorted) {
    allDiscoveries[id] = info;
}
fs.writeFileSync(
    path.join(__dirname, 'extracted-modules', 'discovered-classes.json'),
    JSON.stringify(allDiscoveries, null, 2)
);
