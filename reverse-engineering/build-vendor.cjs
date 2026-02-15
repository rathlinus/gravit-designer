/**
 * Build chunk.vendor.dev.js from AST-extracted modules
 * 
 * Reassembles extracted vendor modules into a working chunk.vendor.js replacement.
 * This mirrors what build-bundle.cjs does for designer.browser.js.
 * 
 * Usage: node build-vendor.cjs
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const AST_DIR = path.join(__dirname, 'ast-extracted-modules');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'chunk.vendor.dev.js');

// Strip JSDoc header from module file
function stripHeader(code) {
    return code.replace(/^\/\*\*[\s\S]*?\*\/\s*\n?/, '');
}

function build() {
    console.log('Building chunk.vendor.dev.js from extracted modules...\n');
    
    // Read original to get the wrapper structure
    const originalPath = path.join(PUBLIC_DIR, 'chunk.vendor.js');
    if (!fs.existsSync(originalPath)) {
        throw new Error('chunk.vendor.js not found in public/');
    }
    
    const original = fs.readFileSync(originalPath, 'utf8');
    
    // Extract the wrapper parts
    // Format: (this.webpackJsonpGravitDesigner = this.webpackJsonpGravitDesigner || []).push([[0], [\n modules... \n]]);
    
    // Find prefix: everything up to and including the start of the modules array
    const pushMatch = original.match(
        /^([\s\S]*?\.push\s*\(\s*\[\s*\[\s*\d+\s*\]\s*,\s*\[)\s*\n?/
    );
    
    if (!pushMatch) {
        throw new Error('Could not find webpack wrapper pattern in chunk.vendor.js');
    }
    
    const prefix = pushMatch[1] + '\n';
    const suffix = '\n]\n]);\n';
    
    // Collect all extracted modules by their ID
    // Scan all categories
    const categories = fs.readdirSync(AST_DIR).filter(d => {
        const dPath = path.join(AST_DIR, d);
        return fs.statSync(dPath).isDirectory();
    });
    
    const modules = {};
    let maxId = 0;
    
    for (const cat of categories) {
        const catDir = path.join(AST_DIR, cat);
        const files = fs.readdirSync(catDir).filter(f => f.endsWith('.js'));
        
        for (const file of files) {
            const idMatch = file.match(/^(\d+)-/);
            if (!idMatch) continue;
            
            const moduleId = parseInt(idMatch[1]);
            const filePath = path.join(catDir, file);
            let code = fs.readFileSync(filePath, 'utf8');
            code = stripHeader(code);
            
            modules[moduleId] = code;
            if (moduleId > maxId) maxId = moduleId;
        }
    }
    
    console.log(`Found ${Object.keys(modules).length} extracted modules (max ID: ${maxId})`);
    
    // Now we need to figure out the original's total array size
    // Parse the original to count total slots  
    // We'll do a lightweight parse: count top-level commas in the array
    const arrayStartPos = pushMatch[0].length;
    
    // Find the matching end of the array by tracking bracket depth
    let depth = 0;
    let totalSlots = 0;
    let inString = false;
    let stringChar = '';
    let escaped = false;
    
    // Actually, simpler approach: build from extracted modules
    // The original has sparse array with null slots for modules in other chunks
    // We know the total from the extraction report
    
    // Read extraction report if it exists
    const reportPath = path.join(AST_DIR, 'extraction-report.json');
    let totalModules = maxId + 1;
    
    if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        if (report.totalExtracted) {
            // The array may be larger than the max extracted ID
            // Use the original to determine total size
        }
    }
    
    // Better approach: count elements in original's array
    // Use regex to find function boundaries and null/empty slots
    console.log('Analyzing original array structure...');
    
    // Extract just the module array content from original
    // Find the position after [[0], [
    const arrStart = pushMatch[0].length;
    // Find the closing ]]);
    const arrEnd = original.lastIndexOf(']\n]);') !== -1 
        ? original.lastIndexOf(']\n]);') 
        : original.lastIndexOf('],\n]);') !== -1
            ? original.lastIndexOf('],\n]);')
            : original.lastIndexOf(']])');
    
    if (arrEnd === -1) {
        throw new Error('Could not find end of modules array');
    }
    
    // Parse original to find total slot count 
    // We do this by using esprima on a wrapped version
    // But that's too slow for 12MB. Instead, track brackets manually.
    
    // Simplified approach: build the array with our extracted modules
    // filling nulls for missing slots
    console.log(`Building sparse array with ${maxId + 1} slots...`);
    
    const arrayElements = [];
    let loadedCount = 0;
    let nullCount = 0;
    
    for (let i = 0; i <= maxId; i++) {
        if (modules[i] !== undefined) {
            arrayElements.push(modules[i]);
            loadedCount++;
        } else {
            // Null slot (module belongs to another chunk or is unused)
            arrayElements.push('');  // sparse array comma
            nullCount++;
        }
    }
    
    console.log(`  ${loadedCount} modules loaded`);
    console.log(`  ${nullCount} null slots`);
    
    // Build the final bundle
    const modulesCode = arrayElements.join(',\n');
    const bundle = prefix + modulesCode + suffix;
    
    // Write output
    fs.writeFileSync(OUTPUT_FILE, bundle);
    
    const sizeMB = (bundle.length / 1024 / 1024).toFixed(2);
    const origSizeMB = (original.length / 1024 / 1024).toFixed(2);
    
    console.log(`\nWrote: ${OUTPUT_FILE}`);
    console.log(`Size: ${sizeMB} MB (original: ${origSizeMB} MB)`);
    
    return bundle;
}

function verify(code) {
    console.log('\nVerifying syntax...');
    try {
        new Function(code);
        console.log('✓ Syntax OK');
        return true;
    } catch (e) {
        console.error('✗ Syntax error:', e.message);
        
        // Show context around error
        const match = e.message.match(/position (\d+)/);
        if (match) {
            const pos = parseInt(match[1]);
            const start = Math.max(0, pos - 200);
            const end = Math.min(code.length, pos + 200);
            console.log(`\nContext around position ${pos}:`);
            console.log(code.substring(start, pos) + '>>HERE<<' + code.substring(pos, end));
        }
        
        return false;
    }
}

function compareWithOriginal(devBundle) {
    console.log('\nComparing with original...');
    const original = fs.readFileSync(path.join(PUBLIC_DIR, 'chunk.vendor.js'), 'utf8');
    
    // Normalize whitespace for comparison
    const normDev = devBundle.replace(/\s+/g, ' ').trim();
    const normOrig = original.replace(/\s+/g, ' ').trim();
    
    if (normDev === normOrig) {
        console.log('✓ Identical to original (after whitespace normalization)');
    } else {
        // Find first difference
        let diffPos = 0;
        const minLen = Math.min(normDev.length, normOrig.length);
        for (let i = 0; i < minLen; i++) {
            if (normDev[i] !== normOrig[i]) {
                diffPos = i;
                break;
            }
        }
        
        const pct = ((diffPos / minLen) * 100).toFixed(1);
        console.log(`  First difference at position ${diffPos} (${pct}% identical)`);
        console.log(`  Dev:  ...${normDev.substring(Math.max(0, diffPos - 50), diffPos + 50)}...`);
        console.log(`  Orig: ...${normOrig.substring(Math.max(0, diffPos - 50), diffPos + 50)}...`);
        console.log(`  Dev length: ${normDev.length}, Orig length: ${normOrig.length}`);
    }
}

// Run
try {
    const bundle = build();
    const valid = verify(bundle);
    
    if (valid) {
        compareWithOriginal(bundle);
        console.log('\n✓ Vendor bundle build successful!');
        console.log('\nTo use the development vendor bundle:');
        console.log('1. Back up chunk.vendor.js:');
        console.log('   copy public\\chunk.vendor.js public\\chunk.vendor.original.js');
        console.log('2. Replace with dev version:');
        console.log('   copy public\\chunk.vendor.dev.js public\\chunk.vendor.js');
        console.log('3. Restart server and refresh the app');
    } else {
        console.log('\n✗ Build has syntax errors - investigating...');
        process.exit(1);
    }
} catch (e) {
    console.error('Build failed:', e.message);
    console.error(e.stack);
    process.exit(1);
}
