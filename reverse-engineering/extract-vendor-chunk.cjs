/**
 * Extract webpack modules from chunk.vendor.js using AST parsing with Acorn.
 *
 * chunk.vendor.js is a separate compiled webpack chunk from designer.browser.js
 * (a webpack JSONP-chunk, not the entry bundle's IIFE), and until now had no
 * extract/rebuild pipeline at all — only read-only analysis scripts touched it,
 * so every patch to it (guide-tools double-click detection, ruler-drag guide
 * add/move/delete, etc.) was hand-edited directly into the compiled file and
 * committed as-is. This mirrors extract-all-modules.cjs's approach so
 * chunk.vendor.js can go through the same source-module -> rebuild workflow.
 *
 * Structure being parsed:
 *   (this.webpackJsonpGravitDesigner = this.webpackJsonpGravitDesigner || []).push([
 *     [0],           <- chunk ids, part of the "header" we preserve verbatim
 *     [ module0, module1, ... ]   <- the array this script extracts
 *   ]);
 */

const fs = require('fs');
const path = require('path');
const acorn = require('./src/node_modules/acorn');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'src');
const MODULES_DIR = path.join(OUTPUT_DIR, 'vendor-modules');

function parseChunk() {
    console.log('Reading chunk.vendor.js...');
    const code = fs.readFileSync(path.join(PUBLIC_DIR, 'chunk.vendor.js'), 'utf8');
    console.log(`Chunk size: ${(code.length / 1024 / 1024).toFixed(2)} MB\n`);

    console.log('Parsing with Acorn (this may take a moment)...');
    const ast = acorn.parse(code, {
        ecmaVersion: 2020,
        sourceType: 'script',
        locations: true,
        ranges: true
    });
    console.log('AST parsed successfully\n');

    // Find the `<expr>.push([ [chunkIds], [modules] ])` call — walk every
    // node rather than assuming a fixed top-level shape, same approach
    // extract-all-modules.cjs uses for the designer.browser.js IIFE.
    let modulesArray = null;
    let header = null;
    let footer = null;

    function findPushCall(node) {
        if (
            node.type === 'CallExpression' &&
            node.callee.type === 'MemberExpression' &&
            !node.callee.computed &&
            node.callee.property.type === 'Identifier' &&
            node.callee.property.name === 'push' &&
            node.arguments.length === 1 &&
            node.arguments[0].type === 'ArrayExpression' &&
            node.arguments[0].elements.length === 2 &&
            node.arguments[0].elements[1] &&
            node.arguments[0].elements[1].type === 'ArrayExpression'
        ) {
            const pushArg = node.arguments[0];
            modulesArray = pushArg.elements[1];
            header = code.slice(0, modulesArray.start);
            footer = code.slice(modulesArray.end);
        }

        for (const key of Object.keys(node)) {
            if (node[key] && typeof node[key] === 'object') {
                if (Array.isArray(node[key])) {
                    for (const child of node[key]) {
                        if (child && typeof child === 'object' && child.type) {
                            findPushCall(child);
                        }
                    }
                } else if (node[key].type) {
                    findPushCall(node[key]);
                }
            }
        }
    }

    findPushCall(ast);

    if (!modulesArray) {
        throw new Error('Could not find the webpackJsonp push([...]) modules array');
    }

    console.log(`Header: ${header.length} chars`);
    console.log(`Footer: ${footer.length} chars`);
    console.log(`Modules array has ${modulesArray.elements.length} elements`);

    const modules = [];
    let nonEmpty = 0;
    for (let i = 0; i < modulesArray.elements.length; i++) {
        const element = modulesArray.elements[i];
        if (element === null) {
            modules[i] = null;
        } else {
            modules[i] = code.slice(element.start, element.end);
            nonEmpty++;
        }
    }
    console.log(`Non-empty modules: ${nonEmpty}\n`);

    return { header, footer, modules };
}

// Same lightweight identification heuristic as extract-all-modules.cjs, kept
// separate (not shared) since chunk.vendor.js's module IDs are a distinct
// numbering space from designer.browser.js's — a "module 163" in one file
// has nothing to do with "module 163" in the other.
function identifyModule(code) {
    if (!code) return { type: 'sparse', name: null };

    const classMatch = code.match(/\[Object\s+([A-Z][a-zA-Z0-9_]+)\]/);
    if (classMatch) return { type: 'class', name: classMatch[1] };

    const funcMatch = code.match(/function\s+([A-Z][a-zA-Z0-9]+)\s*\(/);
    if (funcMatch) return { type: 'class', name: funcMatch[1] };

    const actionMatch = code.match(/\.ID\s*=\s*["']([^"']+)["']/);
    if (actionMatch) return { type: 'action', name: 'Action_' + actionMatch[1].replace(/[.-]/g, '_') };

    const exportMatch = code.match(/e\.exports\s*=\s*\{[\s\S]{0,200}(G[A-Z][a-zA-Z]+)/);
    if (exportMatch) return { type: 'exports', name: 'Exports_' + exportMatch[1] };

    return { type: 'unknown', name: null };
}

function main() {
    const { header, footer, modules } = parseChunk();

    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    if (fs.existsSync(MODULES_DIR)) fs.rmSync(MODULES_DIR, { recursive: true });
    fs.mkdirSync(MODULES_DIR);

    fs.writeFileSync(path.join(OUTPUT_DIR, 'vendor-header.js'), header);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'vendor-footer.js'), footer);
    console.log('Wrote vendor-header.js and vendor-footer.js');

    const moduleMap = {};
    const stats = { class: 0, action: 0, exports: 0, unknown: 0, sparse: 0 };
    let totalSize = 0;

    for (let i = 0; i < modules.length; i++) {
        const code = modules[i];
        if (!code) {
            stats.sparse++;
            continue;
        }

        const identity = identifyModule(code);
        stats[identity.type] = (stats[identity.type] || 0) + 1;

        const filename = identity.name
            ? `${String(i).padStart(4, '0')}_${identity.name}.js`
            : `${String(i).padStart(4, '0')}_module.js`;

        const header = `/**
 * chunk.vendor.js Module #${i}
 * Type: ${identity.type}${identity.name ? '\n * Name: ' + identity.name : ''}
 */

`;
        fs.writeFileSync(path.join(MODULES_DIR, filename), header + code);

        moduleMap[i] = {
            filename,
            type: identity.type,
            name: identity.name,
            size: code.length
        };
        totalSize += code.length;
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, 'vendor-module-map.json'), JSON.stringify(moduleMap, null, 2));
    console.log('Wrote vendor-module-map.json');

    console.log(`\nTotal modules code: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log('\nExtraction summary:');
    console.log(`  Classes: ${stats.class}`);
    console.log(`  Actions: ${stats.action}`);
    console.log(`  Exports: ${stats.exports}`);
    console.log(`  Unknown: ${stats.unknown}`);
    console.log(`  Sparse: ${stats.sparse}`);
}

main();
