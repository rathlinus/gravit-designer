# Gravit Designer Decompilation — Copilot Agent Tasks

These are designed as individual GitHub issues to assign to Copilot coding agent.
Each is self-contained with full context so Copilot can work autonomously.
Create them in order — some depend on outputs of earlier tasks.

---

## Issue 1: Resolve require() calls to class names in all extracted modules

**Labels:** `reverse-engineering`, `automation`

### Context

The extracted webpack modules in `reverse-engineering/ast-extracted-modules/` (756 vendor modules) and `reverse-engineering/src/modules/` (965 app modules) reference other modules by numeric ID. For example:

```js
// In ast-extracted-modules/core/2-GNode.js:
var n = i(11), r = i(75), o = i(72), a = i(0), s = i(9), l = i(50);
```

We already have `reverse-engineering/extracted-modules/module-map.json` (209 vendor class mappings) and `reverse-engineering/src/module-map.json` (965 app module mappings).

### Task

Create `reverse-engineering/resolve-requires.cjs` that:

1. Loads both module maps (`extracted-modules/module-map.json` for vendor IDs, `src/module-map.json` for app module IDs)
2. For each `.js` file in `ast-extracted-modules/` and `src/modules/`:
   - Parse all `require()` calls: patterns like `i(0)`, `n(12)`, `i(60)`, `n(1)`, `o(844)` etc.
   - The require function parameter name varies per module (`i`, `n`, or the 3rd parameter of `function(e, t, n)`)
   - Add a comment after each require resolving it: `var a = i(0); /* GObject */`
   - If the ID maps to a known class, use that name. Otherwise use `/* module_<id> */`
3. Write the annotated files to `reverse-engineering/annotated-modules/vendor/` and `reverse-engineering/annotated-modules/app/` preserving the directory structure
4. Generate a report: how many require calls were resolved vs unresolved

**Important**: The require function is always the 3rd parameter of the webpack module function `function(e, t, n)` but the parameter name varies (could be `n`, `i`, etc). Parse the function signature to determine which variable is the require function.

### Verification

- Run `node resolve-requires.cjs` from `reverse-engineering/`
- Check that annotated files have comments like `var a = i(0); /* GObject */`
- The script should report resolution statistics

---

## Issue 2: AST-based variable deobfuscation for webpack module parameters

**Labels:** `reverse-engineering`, `automation`

### Context

Every webpack module in `reverse-engineering/ast-extracted-modules/` follows this pattern:

```js
function(e, t, i) {
  // e = exports, t = module, i = require
  var n = i(12); // local requires
  // ... module code with minified single-letter variables
}
```

The first 3 parameters always mean: `exports`, `module`, `require`. We need to rename them using AST transforms (not regex) to avoid breaking string literals.

### Task

Create `reverse-engineering/deobfuscate-vars.cjs` that:

1. Uses `acorn` (already in package.json) to parse each module file into an AST
2. Uses `acorn-walk` to find the top-level function and its parameters
3. Renames the webpack standard parameters:
   - 1st param → `exports` (commonly `e`)
   - 2nd param → `module` (commonly `t`)
   - 3rd param → `require` (commonly `i` or `n`)
4. Applies safe boolean transforms (not AST-dependent, these are always safe):
   - `!0` → `true`
   - `!1` → `false`
   - `void 0` → `undefined`
5. Applies object/array shorthand expansion:
   - `e.foo = e.bar = e.baz = ...` → separate assignments (for readability)
6. Writes output to `reverse-engineering/deobfuscated-modules/vendor/` and `deobfuscated-modules/app/` preserving structure
7. Reports: files processed, parameters renamed, boolean transforms applied

**Critical**: Use proper AST-based scope analysis for renaming. Do NOT use regex replacement — it will break string literals containing the same characters. The `acorn` and `astring` packages are already installed.

### Verification

- Run `node deobfuscate-vars.cjs`
- Check a sample output like `deobfuscated-modules/vendor/core/0-GObject.js`
- The `function(e, t)` should become `function(exports, module)`
- String literals must be unchanged
- `!0` and `!1` should become `true`/`false`

---

## Issue 3: Cross-reference with gravit-original to recover variable names and comments

**Labels:** `reverse-engineering`, `automation`

### Context

The original open-source Gravit (before it became Gravit Designer) is in `gravit-original/src/` with 267 readable `.js` files across:
- `infinity/` (81 files) — core engine, classes prefixed `IF*` (e.g., `IFObject`, `IFNode`, `IFPath`)
- `infinity-editor/` (53 files) — editor tools
- `gravit/` (80 files) — application layer
- `application/` (45 files) — app framework

In the commercial version, `IF*` was renamed to `G*` (e.g., `IFObject` → `GObject`, `IFNode` → `GNode`). Method names and structure are largely preserved.

### Task

Create `reverse-engineering/cross-reference-original.cjs` that:

1. Scans all files in `gravit-original/src/` to build a map of:
   - Class name (IF-prefixed) → G-prefixed equivalent
   - All method names per class (from `prototype.methodName` assignments)
   - All JSDoc comments per method
   - All property names and their documentation
2. For each identified class in the vendor modules (`ast-extracted-modules/`):
   - Find the matching original source file
   - Extract all method bodies from both files
   - Match methods by name (they're preserved: `IFNode.prototype.store` → `GNode.prototype.store`)
   - Generate a side-by-side comparison file
3. Output to `reverse-engineering/cross-reference/`:
   - `class-mapping.json` — IF→G name mapping
   - `method-mapping.json` — per-class method name mapping with line numbers in both files
   - `comments-extracted.json` — all JSDoc comments from original, keyed by G-class + method name
   - For each matched class: `<GClassName>.comparison.md` showing the original readable code alongside the minified version
4. Report: how many classes matched, methods matched, comments recovered

### Example mapping

Original `gravit-original/src/infinity/scene/node.js`:
```js
IFNode.prototype.store = function (blob, options) { ... }
```

Maps to `ast-extracted-modules/core/2-GNode.js`:
```js
h.prototype.store = function (e, t) { ... }
```

So we know `h` = `GNode`, `e` = `blob`, `t` = `options` in that method.

### Verification

- Run `node cross-reference-original.cjs`
- Check `cross-reference/class-mapping.json` has entries like `{"IFObject": "GObject", "IFNode": "GNode", ...}`
- Check comparison files are generated

---

## Issue 4: Apply recovered variable names from cross-reference to extracted modules

**Labels:** `reverse-engineering`, `automation`

### Prerequisites

Issues 2 and 3 must be completed first.

### Context

After cross-referencing with `gravit-original/`, we know many local variable names from the original source. For example, if `IFNode.prototype.store = function(blob, options)` matches `h.prototype.store = function(e, t)`, then in that method scope `e` = `blob` and `t` = `options`.

### Task

Create `reverse-engineering/apply-names.cjs` that:

1. Loads the cross-reference output from `cross-reference/method-mapping.json` and `comments-extracted.json`
2. For each matched module file in `deobfuscated-modules/vendor/`:
   - Parse with `acorn`
   - For each matched method:
     - Rename function parameters based on the original source parameter names
     - Add the original JSDoc comment above the method
   - For the constructor function: rename based on original constructor parameter names
3. Write output to `reverse-engineering/readable-modules/vendor/` preserving structure
4. Add the original class-level JSDoc comment at the top of each file
5. Report: methods with recovered names, parameters renamed, comments added

### Verification

- Run `node apply-names.cjs`
- Check `readable-modules/vendor/core/2-GNode.js` — it should have JSDoc comments from the original and method parameters like `blob`, `options` instead of `e`, `t`
- Method names should still be intact (they were never minified)

---

## Issue 5: Extract and beautify worker files

**Labels:** `reverse-engineering`, `automation`

### Context

The app uses 4 Web Worker files in `public/` that haven't been reverse-engineered:

| File | Size | Purpose |
|------|------|---------|
| `autosave.worker.js` | 4.9 MB | Autosave logic (likely contains webpack modules) |
| `pdf.worker.js` | 769 KB | PDF rendering (mozilla pdf.js) |
| `pdfexport.worker.js` | 183 KB | PDF export |
| `ps.worker.js` | 2 KB | PostScript support |

### Task

Create `reverse-engineering/extract-workers.cjs` that:

1. For each worker file in `public/`:
   - Determine if it's a webpack bundle (check for `webpackJsonp` or module array pattern)
   - If webpack: extract modules using the same AST approach as `extract-modules-ast.js`
   - If standalone: just beautify with proper indentation
2. Output to `reverse-engineering/workers/`:
   - `autosave/` — extracted modules or beautified code
   - `pdf-worker/` — likely a third-party lib (pdf.js), just beautify
   - `pdfexport/` — extracted/beautified
   - `ps-worker/` — beautified (only 2 KB)
3. For `autosave.worker.js` specifically (4.9 MB, likely webpack):
   - Extract all modules
   - Try to identify class names using the same patterns as `discover-classes.cjs`
   - Create a module map for the worker modules
4. Generate a build script `build-workers.cjs` that can reassemble worker files from extracted modules

### Verification

- Run `node extract-workers.cjs`
- Check `workers/` directory has beautified/extracted output for each worker
- Run `node build-workers.cjs` and verify the output files pass syntax check with `new Function(code)`

---

## Issue 6: Extract and beautify standalone JS files (PS, cacher, static)

**Labels:** `reverse-engineering`, `automation`

### Context

Several standalone JS files in `public/` are not part of the webpack bundles:

| File | Size | Purpose |
|------|------|---------|
| `pscore.js` | 161 KB | PostScript core interpreter |
| `psclasses.js` | 10 KB | PostScript class definitions |
| `pscolor.js` | 27 KB | PostScript color handling |
| `psparser.js` | 11 KB | PostScript parser |
| `psctm.js` | 3 KB | PostScript CTM transforms |
| `cacher.js` | 124 KB | Service worker caching logic |
| `static.maintenance.js` | 643 KB | Maintenance/static page JS |

### Task

Create `reverse-engineering/extract-standalone.cjs` that:

1. For each standalone JS file:
   - Beautify with proper indentation using `escodegen` or `astring`
   - If the file is minified, detect and expand:
     - Comma expressions into separate statements
     - Ternary chains into if/else
     - `!0`/`!1` → `true`/`false`
     - `void 0` → `undefined`
   - Identify named functions and classes
2. Output to `reverse-engineering/standalone/`:
   - `postscript/pscore.js`, `postscript/psclasses.js`, etc.
   - `cacher/cacher.js`
   - `static/static.maintenance.js`
3. Generate an index documenting what each file does

### Verification

- Run `node extract-standalone.cjs`
- Check that beautified files are readable
- Syntax check each output file

---

## Issue 7: Beautify CSS files for development

**Labels:** `reverse-engineering`, `automation`

### Context

Two large CSS files need beautification for development:
- `public/designer.browser.dark.css` (2.4 MB)
- `public/designer.browser.light.css` (2.4 MB)

### Task

Create `reverse-engineering/beautify-css.cjs` that:

1. Reads both CSS files from `public/`
2. Beautifies them:
   - One rule per line
   - Proper indentation
   - Expand shorthand where readable
3. Identifies all custom CSS classes/IDs used (prefix patterns like `gaia-`, `gravit-`, `g-`, etc.)
4. Outputs to `reverse-engineering/css/`:
   - `designer.browser.dark.css` (beautified)
   - `designer.browser.light.css` (beautified)
   - `css-report.json` — all class/ID selectors found, grouped by prefix
   - `diff-report.md` — differences between dark and light themes (they should be mostly the same with different color values)

### Verification

- Run `node beautify-css.cjs`
- Beautified CSS should be parseable (no syntax errors)
- Diff report should show the color/theme differences

---

## Issue 8: Build complete development bundle that runs from source modules

**Labels:** `reverse-engineering`, `build-system`

### Prerequisites

Issues 1-6 should be completed first, but this can start in parallel using the existing extracted modules.

### Context

Currently we have two working build scripts:
- `build-bundle.cjs` — rebuilds `designer.browser.dev.js` from `src/modules/`
- `build-vendor.cjs` — rebuilds `chunk.vendor.dev.js` from `ast-extracted-modules/`

Both produce syntax-valid drop-in replacements. But they just reassemble the original minified code.

The goal is a build system that:
1. Takes the deobfuscated/readable module source as input
2. Produces working `chunk.vendor.js` and `designer.browser.js` output
3. Supports source maps for debugging
4. Supports watch mode for development

### Task

Create `reverse-engineering/webpack.dev.config.js` that:

1. Configures webpack to build from the readable module sources (or falls back to extracted modules if readable versions don't exist yet)
2. Builds two entry points:
   - `chunk.vendor.js` — from `readable-modules/vendor/` (or `ast-extracted-modules/`)
   - `designer.browser.js` — from `readable-modules/app/` (or `src/modules/`)
3. Preserves the webpack runtime and chunk loading mechanism:
   - The vendor chunk uses `webpackJsonpGravitDesigner.push([[0], [...modules]])` format
   - The app chunk has the webpack bootstrap runtime
4. Generates source maps (`.map` files) so browser DevTools shows the individual module files
5. Outputs to `public/` (replacing the production files)
6. Supports `--watch` mode

Also update `reverse-engineering/package.json`:
- `"dev-build"`: builds both bundles from readable sources
- `"dev-watch"`: builds in watch mode
- `"dev-serve"`: builds + starts the server from `server.js`

### Important technical detail

The app's webpack runtime is embedded in `designer.browser.js` (stored in `src/runtime.js`). The vendor chunk is loaded via `push()` into the global array. This relationship must be preserved — the webpack runtime in `designer.browser.js` processes the modules from both chunks.

### Verification

- Run `npm run dev-build` from `reverse-engineering/`
- Start the server with `node server.js` from `gravit-designer/`
- The app should load in the browser at http://localhost:3100
- Browser DevTools Sources tab should show individual module files (if source maps work)

---

## Issue 9: Comprehensive module body reconstruction using original source as reference

**Labels:** `reverse-engineering`, `large-task`

### Prerequisites

Issue 3 (cross-reference) must be completed first.

### Context

The `reconstructed/` folder currently has 369 skeleton files with only constructors, inheritance calls, and toString methods — about 38K lines. The actual module code is ~299K lines across 1,721 modules.

The original open-source `gravit-original/src/` has 267 readable files. While the commercial version has added classes and modified implementations, the core structure and many method bodies are similar or identical (just with `IF` → `G` prefix and minified variables).

### Task

Create `reverse-engineering/reconstruct-bodies.cjs` that:

1. For each class that has a match in `gravit-original/src/` (from Issue 3's cross-reference output):
   a. Read the original method body (readable, with real variable names)
   b. Read the minified method body from the extracted module
   c. Compare the structure — if the logic matches (same operations, same branching), use the original's variable names and add them as comments or through AST-based renaming
   d. If the method was added/changed in the commercial version, keep the minified body but annotate it with `// NEW: not in original` or `// MODIFIED: differs from original`
2. For each class that does NOT have an original match:
   a. Keep the extracted minified body
   b. Apply the deobfuscation from Issue 2
   c. Add heuristic variable names where possible (e.g., if a variable is used as `var x = new GPoint()`, name it `point`)
3. Write complete class files to `reverse-engineering/reconstructed-full/` with:
   - Directory structure matching `reconstructed/` (infinity/core/, infinity/scene/, etc.)
   - Full method bodies (not stubs)
   - JSDoc comments from original where available
   - Proper variable names where known
   - `module.exports` at the bottom

### Verification

- Run `node reconstruct-bodies.cjs`
- `reconstructed-full/` should have the same files as `reconstructed/` but with full method bodies
- Line count should be significantly higher (closer to the extracted modules' ~299K total)
- Spot-check a few files: `GObject.js`, `GNode.js`, `GPath.js` should have complete implementations

---

## Execution order

**Phase 1 (parallel):** Issues 1, 5, 6, 7 — independent extraction/beautification tasks
**Phase 2 (parallel):** Issues 2, 3 — deobfuscation and cross-referencing
**Phase 3 (sequential):** Issue 4 (depends on 2+3), then Issue 9 (depends on 3+4)
**Phase 4:** Issue 8 — build system (can start early, iterate as readable sources improve)
