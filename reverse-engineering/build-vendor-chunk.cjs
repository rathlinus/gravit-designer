/**
 * Build chunk.vendor.dev.js from extracted vendor-modules/.
 * Mirrors build-bundle.cjs, but reassembles chunk.vendor.js's webpackJsonp
 * push([...]) shape (see extract-vendor-chunk.cjs) instead of designer.
 * browser.js's IIFE shape.
 *
 * Writes to chunk.vendor.dev.js, not chunk.vendor.js directly — same
 * "build a dev copy, verify it, then swap it in" caution designer.browser.
 * dev.js already uses, deliberately not skipped just because chunk.vendor.js
 * happened to get hand-patched in place up to now.
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_DIR = path.join(__dirname, 'src');
const MODULES_DIR = path.join(SRC_DIR, 'vendor-modules');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'chunk.vendor.dev.js');

function stripHeader(code) {
    return code.replace(/^\/\*\*[\s\S]*?\*\/\s*\n?/, '');
}

function build() {
    console.log('Building chunk.vendor.dev.js...\n');

    const mapPath = path.join(SRC_DIR, 'vendor-module-map.json');
    if (!fs.existsSync(mapPath)) {
        throw new Error('vendor-module-map.json not found. Run extract-vendor-chunk.cjs first.');
    }
    const moduleMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

    const headerPath = path.join(SRC_DIR, 'vendor-header.js');
    const footerPath = path.join(SRC_DIR, 'vendor-footer.js');
    if (!fs.existsSync(headerPath) || !fs.existsSync(footerPath)) {
        throw new Error('vendor-header.js/vendor-footer.js not found. Run extract-vendor-chunk.cjs first.');
    }
    const header = fs.readFileSync(headerPath, 'utf8');
    const footer = fs.readFileSync(footerPath, 'utf8');

    const moduleIds = Object.keys(moduleMap).map(Number).sort((a, b) => a - b);
    const maxId = Math.max(...moduleIds);

    console.log(`Building from ${moduleIds.length} modules (max ID: ${maxId})`);

    const moduleStrings = [];
    let loaded = 0;
    let missing = 0;

    for (let i = 0; i <= maxId; i++) {
        if (moduleMap[i]) {
            const modulePath = path.join(MODULES_DIR, moduleMap[i].filename);
            if (fs.existsSync(modulePath)) {
                let code = fs.readFileSync(modulePath, 'utf8');
                code = stripHeader(code);
                moduleStrings[i] = code;
                loaded++;
            } else {
                console.warn(`Missing: ${moduleMap[i].filename}`);
                moduleStrings[i] = null;
                missing++;
            }
        } else {
            moduleStrings[i] = null;
        }
    }

    console.log(`Loaded ${loaded} modules, ${missing} missing`);

    const arrayElements = moduleStrings.map(m => m === null ? '' : m);
    const modulesArrayCode = arrayElements.join(',\n');

    // header/footer are captured up to/from the modules array's own start/end
    // (see extract-vendor-chunk.cjs), which excludes the array's own [ ]
    // brackets — same convention build-bundle.cjs uses for designer.browser.js,
    // so they're added back here explicitly.
    const bundle = `${header}[\n${modulesArrayCode}\n]${footer}`;

    fs.writeFileSync(OUTPUT_FILE, bundle);

    const sizeKB = (bundle.length / 1024).toFixed(1);
    const sizeMB = (bundle.length / 1024 / 1024).toFixed(2);

    console.log(`\nWrote: ${OUTPUT_FILE}`);
    console.log(`Size: ${sizeMB} MB (${sizeKB} KB)`);

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
        const match = e.message.match(/position (\d+)/);
        if (match) {
            const pos = parseInt(match[1]);
            const context = code.slice(Math.max(0, pos - 100), pos + 100);
            console.log('\nContext around error:');
            console.log(context);
        }
        return false;
    }
}

try {
    const bundle = build();
    const valid = verify(bundle);

    if (valid) {
        console.log('\n✓ Build successful!');
        console.log('\nTo use it: back up chunk.vendor.js, then copy chunk.vendor.dev.js');
        console.log('over it (or point public/index.html at chunk.vendor.dev.js to test');
        console.log('first) — same swap-in workflow as designer.browser.dev.js.');
    } else {
        console.log('\n✗ Build has syntax errors');
        process.exit(1);
    }
} catch (e) {
    console.error('Build failed:', e.message);
    process.exit(1);
}
