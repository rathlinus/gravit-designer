/**
 * Rename source files in src/modules/ and intermediate directories
 * to match the current module-map.json filenames.
 */
const fs = require('fs');
const path = require('path');

const moduleMap = require('./src/module-map.json');

const DIRS = [
  'src/modules',
  'annotated-modules/app',
  'deobfuscated-modules/app',
  'readable-modules/app',
  'reconstructed-full/app',
];

let totalRenamed = 0;
let totalRemoved = 0;

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  
  // Build expected filenames from module-map
  const expectedFiles = new Set();
  for (const [id, m] of Object.entries(moduleMap)) {
    if (m && m.filename) expectedFiles.add(m.filename);
  }
  
  // Build a map from module ID -> expected filename
  const idToExpected = {};
  for (const [id, m] of Object.entries(moduleMap)) {
    if (m && m.filename) {
      idToExpected[id] = m.filename;
    }
  }
  
  const existingFiles = fs.readdirSync(dir);
  let renamed = 0;
  let removed = 0;
  
  for (const file of existingFiles) {
    const match = file.match(/^(\d+)_/);
    if (!match) continue;
    const id = String(parseInt(match[1], 10));
    const expected = idToExpected[id];
    
    if (!expected) continue;
    
    if (file === expected) continue; // Already correct
    
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, expected);
    
    if (fs.existsSync(newPath)) {
      // Both old and new exist — remove old
      fs.unlinkSync(oldPath);
      removed++;
    } else {
      // Rename old to new
      fs.renameSync(oldPath, newPath);
      renamed++;
    }
  }
  
  console.log(`${dir}: ${renamed} renamed, ${removed} stale removed`);
  totalRenamed += renamed;
  totalRemoved += removed;
}

console.log(`\nTotal: ${totalRenamed} renamed, ${totalRemoved} stale removed`);
