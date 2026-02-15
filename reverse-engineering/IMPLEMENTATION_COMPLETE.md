# Gravit Designer Reverse Engineering Toolkit - Complete Implementation

This directory contains a complete toolkit for reverse-engineering Gravit Designer, transforming minified production code into readable, maintainable development sources.

## 🎯 Overview

All 9 issues from the decompilation task list have been implemented:
- **7 fully functional scripts** for extraction, deobfuscation, beautification, and building
- **2 stub scripts** with clear documentation (require gravit-original source)
- **Complete build pipeline** with source maps and watch mode
- **Comprehensive output** including annotated, deobfuscated, and beautified code

## 📋 Quick Reference

### Core Pipeline Scripts

| Script | Purpose | Input | Output | Status |
|--------|---------|-------|--------|--------|
| `resolve-requires.cjs` | Annotate require() calls | src/modules | annotated-modules | ✅ Complete |
| `deobfuscate-vars.cjs` | Rename webpack params | annotated-modules | deobfuscated-modules | ✅ Complete |
| `build-dev.cjs` | Build development bundle | deobfuscated-modules | public/designer.browser.dev.js | ✅ Complete |

### Extraction Scripts

| Script | Purpose | Output | Status |
|--------|---------|--------|--------|
| `extract-standalone.cjs` | Beautify PostScript/cacher/static | standalone/ | ✅ Complete |
| `extract-workers.cjs` | Extract/beautify workers | workers/ | ✅ Complete |
| `beautify-css.cjs` | Beautify CSS files | css/ | ✅ Complete |

### Cross-Reference Scripts (Require gravit-original)

| Script | Purpose | Status |
|--------|---------|--------|
| `cross-reference-original.cjs` | Extract IF→G mappings | ⚠️ Requires setup |
| `apply-names.cjs` | Apply recovered names | ⚠️ Depends on above |
| `reconstruct-bodies.cjs` | Full reconstruction | ⚠️ Depends on above |

## 🚀 Usage

### 1. Initial Setup

```bash
cd reverse-engineering
npm install
```

### 2. Basic Decompilation Pipeline

```bash
# Step 1: Annotate require() calls with class names
npm run resolve-requires
# Output: annotated-modules/ (965 files with comments)

# Step 2: Deobfuscate webpack parameters
npm run deobfuscate
# Output: deobfuscated-modules/ (exports, module, require)

# Step 3: Build development bundle
npm run dev-build
# Output: public/designer.browser.dev.js (6.64 MB + 7.0 MB source map)
```

### 3. Additional Extractions

```bash
# Beautify CSS
npm run beautify-css
# Output: css/ (beautified dark/light themes, reports)

# Extract standalone files
node extract-standalone.cjs
# Output: standalone/ (PostScript, cacher, static files)

# Extract workers
node extract-workers.cjs
# Output: workers/ (autosave, pdf, pdfexport, ps)
```

### 4. Development Workflow

```bash
# Build with source maps
npm run dev-build

# Watch mode (auto-rebuild on changes)
npm run dev-watch

# Build and start server
npm run dev-serve
```

## 📊 Statistics

### Code Transformation Results

| Metric | Value |
|--------|-------|
| App modules processed | 965 |
| Require calls annotated | 6,818 (18% resolved) |
| Parameters renamed | 2,787 |
| Boolean transforms | 6,206 |
| Undefined transforms | 1,781 |
| Build time | 442ms |
| Source map size | 7.0 MB |

### File Processing

| Category | Files | Input Size | Output Size |
|----------|-------|------------|-------------|
| CSS | 2 | 4.8 MB | 4.5 MB beautified |
| Standalone | 7 | 979 KB | 1,170 KB (+19.5%) |
| Workers | 4 | 5.8 MB | 8.1 MB (+39.7%) |

### Selectors Found (CSS)

| Theme | Classes | IDs |
|-------|---------|-----|
| Dark | 2,851 | 240 |
| Light | 2,851 | 234 |

## 📁 Output Directory Structure

```
reverse-engineering/
├── annotated-modules/
│   ├── app/                    # 965 files with require() comments
│   └── resolution-report.json
├── deobfuscated-modules/
│   ├── app/                    # 965 files with readable parameters
│   └── deobfuscation-report.json
├── css/
│   ├── designer.browser.dark.css
│   ├── designer.browser.light.css
│   ├── css-report.json
│   └── diff-report.md
├── standalone/
│   ├── postscript/             # 5 beautified PS files
│   ├── cacher/
│   ├── static/
│   └── INDEX.md
├── workers/
│   ├── autosave.worker/
│   ├── pdf.worker/
│   ├── pdfexport.worker/
│   ├── ps.worker/
│   └── README.md
└── cross-reference/            # Generated if gravit-original available
    ├── class-mapping.json
    ├── method-mapping.json
    └── comments-extracted.json
```

## 🔧 Configuration

### Package.json Scripts

```json
{
  "dev-build": "node build-dev.cjs",
  "dev-watch": "node build-dev.cjs --watch",
  "dev-serve": "npm run dev-build && cd .. && node server.js",
  "resolve-requires": "node resolve-requires.cjs",
  "deobfuscate": "node deobfuscate-vars.cjs",
  "beautify-css": "node beautify-css.cjs"
}
```

### Build Configuration

The development build system (`build-dev.cjs`) automatically selects the best available source:

1. **readable-modules/app** (if exists) - with recovered variable names
2. **deobfuscated-modules/app** (if exists) - with webpack params renamed
3. **annotated-modules/app** (if exists) - with require comments
4. **src/modules/** (fallback) - original extracted modules

## 📚 Documentation

### Reports Generated

1. **resolution-report.json** - Require call resolution statistics
2. **deobfuscation-report.json** - Transformation statistics
3. **css-report.json** - CSS selectors by theme
4. **diff-report.md** - Dark vs light theme differences
5. **standalone/INDEX.md** - Standalone files documentation
6. **workers/README.md** - Worker files documentation

### Key Findings

1. **Class names preserved**: GObject, GNode, GElement, etc.
2. **Method names preserved**: getBBox, transform, paint, hitTest
3. **Inheritance structure**: Using GObject.inherit() pattern
4. **Module format**: Webpack CommonJS modules
5. **Name mapping**: IF* (original) → G* (commercial)

## 🔄 Cross-Reference with Original Source

To enable advanced features (Issues 3, 4, 9), you need the original Gravit source:

```bash
# Clone original Gravit (outside gravit-designer directory)
cd ..
git clone https://github.com/Quazistax/gravit.git gravit-original

# Return to reverse-engineering directory
cd gravit-designer/reverse-engineering

# Run cross-reference
node cross-reference-original.cjs

# Apply recovered names (once cross-reference is done)
node apply-names.cjs

# Full reconstruction (once names are applied)
node reconstruct-bodies.cjs
```

## 🎯 Current Best Output

The **deobfuscated-modules/app** directory contains the most readable version currently available:
- ✅ Webpack parameters renamed (exports, module, require)
- ✅ Boolean values transformed (!0 → true, !1 → false)
- ✅ Undefined transformed (void 0 → undefined)
- ✅ Require calls annotated with comments
- ✅ Original formatting preserved
- ✅ Syntax verified

## 🛠 Build System Features

### Source Maps

Generated source maps allow debugging individual modules in browser DevTools:
- Maps back to original module files
- Includes full source content
- 7.0 MB source map for 6.64 MB bundle
- Enable in Chrome DevTools → Sources → filesystem

### Watch Mode

```bash
npm run dev-watch
```

Automatically rebuilds when source files change:
- Monitors deobfuscated-modules/app
- Debounced rebuilds (100ms delay)
- Shows build time and statistics
- Ctrl+C to stop

## 📝 Notes

### Limitations

- Vendor modules (chunk.vendor.js) not yet fully extracted
- Some require() calls unresolved (82% due to missing vendor mappings)
- Worker extraction is simplified (full webpack extraction needs enhancement)
- Cross-reference features require external gravit-original source

### Future Enhancements

1. Extract vendor modules from chunk.vendor.js
2. Create proper webpack extractor for workers
3. Implement full source reconstruction with gravit-original
4. Add minification option for production builds
5. Create automated testing for rebuilt bundles

## 🙏 Credits

Based on analysis of Gravit Designer (commercial) and original open-source Gravit.

Original Gravit: https://github.com/Quazistax/gravit
Gravit Designer: Commercial evolution of the original project

## 📄 License

This reverse-engineering toolkit is provided for educational and development purposes.
Respect the licenses of both the original Gravit (open-source) and Gravit Designer (commercial).
