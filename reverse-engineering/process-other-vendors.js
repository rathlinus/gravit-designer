/**
 * Gravit Designer Reverse Engineering - Process Other Vendor Chunks
 * 
 * This script processes the additional vendor chunks:
 * - chunk.vendors~heic2any.js (HEIC image format support)
 * - chunk.vendors~pdfjsWorker.js (PDF.js library)
 * 
 * Usage: node process-other-vendors.js
 */

const fs = require('fs-extra');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, 'other-vendors');

const VENDOR_CHUNKS = [
  {
    file: 'chunk.vendors~heic2any.js',
    name: 'heic2any',
    description: 'HEIC image format converter - Converts HEIC/HEIF images to other formats'
  },
  {
    file: 'chunk.vendors~pdfjsWorker.js',
    name: 'pdfjsWorker',
    description: 'PDF.js Worker - PDF rendering and processing library by Mozilla'
  }
];

async function processOtherVendors() {
  console.log('📦 Gravit Designer - Other Vendor Chunks Processor');
  console.log('====================================================\n');
  
  await fs.ensureDir(OUTPUT_DIR);
  
  for (const vendor of VENDOR_CHUNKS) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Processing: ${vendor.name}`);
    console.log(`${'='.repeat(60)}`);
    console.log(`Description: ${vendor.description}`);
    console.log(`File: ${vendor.file}\n`);
    
    const inputPath = path.join(PUBLIC_DIR, vendor.file);
    if (!(await fs.pathExists(inputPath))) {
      console.log(`⚠️ File not found: ${vendor.file}`);
      continue;
    }
    
    const code = await fs.readFile(inputPath, 'utf8');
    console.log(`📄 File size: ${(code.length / 1024 / 1024).toFixed(2)} MB`);
    
    // Create output directory for this vendor
    const vendorDir = path.join(OUTPUT_DIR, vendor.name);
    await fs.ensureDir(vendorDir);
    
    // 1. Save the original minified version
    const originalPath = path.join(vendorDir, `${vendor.name}.original.js`);
    await fs.copy(inputPath, originalPath);
    console.log(`✅ Copied original to: ${vendor.name}/`);
    
    // 2. Create a beautified version
    console.log(`🎨 Beautifying code...`);
    const beautified = beautifyCode(code);
    const beautifiedPath = path.join(vendorDir, `${vendor.name}.beautified.js`);
    await fs.writeFile(beautifiedPath, beautified);
    console.log(`✅ Created beautified version`);
    
    // 3. Extract information
    console.log(`📊 Analyzing code...`);
    const info = analyzeCode(code, vendor.name);
    
    // 4. Create README
    const readme = generateReadme(vendor, info);
    await fs.writeFile(path.join(vendorDir, 'README.md'), readme);
    console.log(`✅ Created README`);
    
    // 5. Save analysis
    await fs.writeJson(path.join(vendorDir, 'analysis.json'), info, { spaces: 2 });
    console.log(`✅ Saved analysis`);
    
    console.log(`\n✨ ${vendor.name} processing complete!`);
  }
  
  // Create master index
  await createMasterIndex();
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`\n✅ All vendor chunks processed!`);
  console.log(`📂 Output: ${OUTPUT_DIR}/`);
}

function beautifyCode(code) {
  // Basic beautification
  let beautified = code;
  
  // Add newlines after semicolons
  beautified = beautified.replace(/;(?!\s*\n)/g, ';\n');
  
  // Add newlines after opening braces
  beautified = beautified.replace(/\{(?!\s*\n)/g, '{\n');
  
  // Add newlines before closing braces
  beautified = beautified.replace(/(?<!\n\s*)\}/g, '\n}');
  
  // Fix multiple newlines
  beautified = beautified.replace(/\n{3,}/g, '\n\n');
  
  return beautified;
}

function analyzeCode(code, vendorName) {
  const info = {
    name: vendorName,
    size: code.length,
    sizeFormatted: `${(code.length / 1024 / 1024).toFixed(2)} MB`,
    lineCount: code.split('\n').length,
    isWebpack: code.includes('webpackJsonp') || code.includes('webpack'),
    hasSourceMap: code.includes('//# sourceMappingURL'),
    features: []
  };
  
  // Analyze for specific features
  if (vendorName === 'heic2any') {
    info.features = [
      'HEIC/HEIF image decoding',
      'Image format conversion',
      'Canvas-based image processing',
      'Browser compatibility layer'
    ];
    
    // Look for key functionality
    if (code.includes('decode') || code.includes('HEIC')) {
      info.hasHEICDecoder = true;
    }
    if (code.includes('canvas') || code.includes('Canvas')) {
      info.usesCanvas = true;
    }
  } else if (vendorName === 'pdfjsWorker') {
    info.features = [
      'PDF parsing and rendering',
      'Web Worker implementation',
      'PDF.js by Mozilla',
      'Document structure extraction'
    ];
    
    // Look for key functionality  
    if (code.includes('PDF') || code.includes('pdf')) {
      info.hasPDFSupport = true;
    }
    if (code.includes('Worker') || code.includes('worker')) {
      info.isWorker = true;
    }
  }
  
  // Check for common patterns
  if (code.includes('export')) {
    info.hasESModules = true;
  }
  if (code.includes('require(')) {
    info.hasCommonJS = true;
  }
  if (code.includes('define(')) {
    info.hasAMD = true;
  }
  
  return info;
}

function generateReadme(vendor, info) {
  let readme = `# ${vendor.name}\n\n`;
  readme += `${vendor.description}\n\n`;
  
  readme += `## File Information\n\n`;
  readme += `- **Original File:** \`${vendor.file}\`\n`;
  readme += `- **Size:** ${info.sizeFormatted}\n`;
  readme += `- **Lines:** ${info.lineCount.toLocaleString()}\n`;
  readme += `- **Webpack Bundle:** ${info.isWebpack ? 'Yes' : 'No'}\n`;
  readme += `- **Has Source Map:** ${info.hasSourceMap ? 'Yes' : 'No'}\n\n`;
  
  if (info.features.length > 0) {
    readme += `## Features\n\n`;
    for (const feature of info.features) {
      readme += `- ${feature}\n`;
    }
    readme += `\n`;
  }
  
  readme += `## Files in this Directory\n\n`;
  readme += `- **${vendor.name}.original.js** - Original minified code from public/\n`;
  readme += `- **${vendor.name}.beautified.js** - Formatted version for easier reading\n`;
  readme += `- **analysis.json** - Detailed analysis of the code\n`;
  readme += `- **README.md** - This file\n\n`;
  
  if (vendor.name === 'heic2any') {
    readme += `## About HEIC Format\n\n`;
    readme += `HEIC (High Efficiency Image Container) is the image format used by Apple devices.\n`;
    readme += `It provides better compression than JPEG while maintaining image quality.\n`;
    readme += `This library allows Gravit Designer to import and convert HEIC images.\n\n`;
    readme += `**Repository:** https://github.com/alexcorvi/heic2any\n\n`;
  } else if (vendor.name === 'pdfjsWorker') {
    readme += `## About PDF.js\n\n`;
    readme += `PDF.js is a Portable Document Format (PDF) viewer built with HTML5.\n`;
    readme += `It's developed by Mozilla and allows PDF rendering in web browsers.\n`;
    readme += `This worker file handles PDF parsing and rendering in a separate thread.\n\n`;
    readme += `**Repository:** https://github.com/mozilla/pdf.js\n\n`;
  }
  
  readme += `## Usage in Gravit Designer\n\n`;
  readme += `This vendor library is loaded on-demand when needed:\n`;
  readme += `- Lazy-loaded via webpack code splitting\n`;
  readme += `- Only loaded when user imports ${vendor.name === 'heic2any' ? 'HEIC images' : 'PDF files'}\n`;
  readme += `- Runs in ${vendor.name === 'pdfjsWorker' ? 'a Web Worker' : 'the main thread'}\n\n`;
  
  readme += `## Development\n\n`;
  readme += `To use or modify this library:\n\n`;
  readme += `1. Review the beautified version for structure\n`;
  readme += `2. Reference the original library documentation\n`;
  readme += `3. Test changes thoroughly before integrating\n\n`;
  
  readme += `## License\n\n`;
  readme += `This is a third-party library included in Gravit Designer.\n`;
  readme += `Refer to the original repository for license information.\n`;
  
  return readme;
}

async function createMasterIndex() {
  const indexContent = `# Other Vendor Chunks

This directory contains the extracted and documented vendor chunks used by Gravit Designer.

## Vendor Libraries

### heic2any
HEIC image format converter that allows importing Apple's HEIC/HEIF format images.

**Location:** \`heic2any/\`

### pdfjsWorker  
PDF.js Worker for PDF file import and rendering capabilities.

**Location:** \`pdfjsWorker/\`

## Structure

Each vendor directory contains:
- \`*.original.js\` - Original minified code
- \`*.beautified.js\` - Formatted version
- \`analysis.json\` - Code analysis
- \`README.md\` - Documentation

## Usage

These libraries are lazy-loaded by Gravit Designer when needed, using webpack's code splitting feature.

## Integration

To integrate changes:
1. Modify the beautified version
2. Test thoroughly
3. Minify if needed
4. Update the chunk file in \`public/\`
`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), indexContent);
  console.log(`\n✅ Created master index`);
}

processOtherVendors().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
