# pdfjsWorker

PDF.js Worker - PDF rendering and processing library by Mozilla

## File Information

- **Original File:** `chunk.vendors~pdfjsWorker.js`
- **Size:** 0.72 MB
- **Lines:** 2
- **Webpack Bundle:** Yes
- **Has Source Map:** No

## Features

- PDF parsing and rendering
- Web Worker implementation
- PDF.js by Mozilla
- Document structure extraction

## Files in this Directory

- **pdfjsWorker.original.js** - Original minified code from public/
- **pdfjsWorker.beautified.js** - Formatted version for easier reading
- **analysis.json** - Detailed analysis of the code
- **README.md** - This file

## About PDF.js

PDF.js is a Portable Document Format (PDF) viewer built with HTML5.
It's developed by Mozilla and allows PDF rendering in web browsers.
This worker file handles PDF parsing and rendering in a separate thread.

**Repository:** https://github.com/mozilla/pdf.js

## Usage in Gravit Designer

This vendor library is loaded on-demand when needed:
- Lazy-loaded via webpack code splitting
- Only loaded when user imports PDF files
- Runs in a Web Worker

## Development

To use or modify this library:

1. Review the beautified version for structure
2. Reference the original library documentation
3. Test changes thoroughly before integrating

## License

This is a third-party library included in Gravit Designer.
Refer to the original repository for license information.
