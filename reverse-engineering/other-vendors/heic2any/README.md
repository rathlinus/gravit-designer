# heic2any

HEIC image format converter - Converts HEIC/HEIF images to other formats

## File Information

- **Original File:** `chunk.vendors~heic2any.js`
- **Size:** 1.15 MB
- **Lines:** 1
- **Webpack Bundle:** Yes
- **Has Source Map:** No

## Features

- HEIC/HEIF image decoding
- Image format conversion
- Canvas-based image processing
- Browser compatibility layer

## Files in this Directory

- **heic2any.original.js** - Original minified code from public/
- **heic2any.beautified.js** - Formatted version for easier reading
- **analysis.json** - Detailed analysis of the code
- **README.md** - This file

## About HEIC Format

HEIC (High Efficiency Image Container) is the image format used by Apple devices.
It provides better compression than JPEG while maintaining image quality.
This library allows Gravit Designer to import and convert HEIC images.

**Repository:** https://github.com/alexcorvi/heic2any

## Usage in Gravit Designer

This vendor library is loaded on-demand when needed:
- Lazy-loaded via webpack code splitting
- Only loaded when user imports HEIC images
- Runs in the main thread

## Development

To use or modify this library:

1. Review the beautified version for structure
2. Reference the original library documentation
3. Test changes thoroughly before integrating

## License

This is a third-party library included in Gravit Designer.
Refer to the original repository for license information.
