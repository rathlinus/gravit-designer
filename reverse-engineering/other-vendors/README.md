# Other Vendor Chunks

This directory contains the extracted and documented vendor chunks used by Gravit Designer.

## Vendor Libraries

### heic2any
HEIC image format converter that allows importing Apple's HEIC/HEIF format images.

**Location:** `heic2any/`

### pdfjsWorker  
PDF.js Worker for PDF file import and rendering capabilities.

**Location:** `pdfjsWorker/`

## Structure

Each vendor directory contains:
- `*.original.js` - Original minified code
- `*.beautified.js` - Formatted version
- `analysis.json` - Code analysis
- `README.md` - Documentation

## Usage

These libraries are lazy-loaded by Gravit Designer when needed, using webpack's code splitting feature.

## Integration

To integrate changes:
1. Modify the beautified version
2. Test thoroughly
3. Minify if needed
4. Update the chunk file in `public/`
