/**
 * Gravit Designer Reverse Engineering - Master Build Script
 * 
 * This script orchestrates the complete reverse engineering process:
 * 1. Beautifies the minified code
 * 2. Extracts webpack modules  
 * 3. Unbundles into separate files
 * 4. Analyzes class structure
 * 5. Reconstructs source code
 * 6. Renames variables
 * 
 * Usage: node build-all.js
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const STEPS = [
  { name: 'Beautify', script: 'beautify.js', desc: 'Format minified code' },
  { name: 'Extract Modules', script: 'extract-modules.js', desc: 'Extract module mappings' },
  { name: 'Extract Vendor Modules (AST)', script: 'extract-modules-ast.js', desc: 'Extract all vendor modules using AST parsing' },
  { name: 'Process Other Vendors', script: 'process-other-vendors.js', desc: 'Process heic2any and pdfjsWorker chunks' },
  { name: 'Unbundle', script: 'unbundle.js', desc: 'Extract individual modules (legacy)' },
  { name: 'Analyze Classes', script: 'analyze-classes.js', desc: 'Analyze class structure' },
  { name: 'Reconstruct', script: 'reconstruct-source.js', desc: 'Reconstruct source code' },
  { name: 'Rename Variables', script: 'rename-variables.js', desc: 'Improve variable names' },
];

async function runStep(step, index) {
  const total = STEPS.length;
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Step ${index + 1}/${total}: ${step.name}`);
  console.log(`${'─'.repeat(60)}`);
  console.log(`Description: ${step.desc}`);
  console.log(`Script: ${step.script}`);
  console.log(`${'─'.repeat(60)}\n`);
  
  const scriptPath = path.join(__dirname, step.script);
  
  if (!(await fs.pathExists(scriptPath))) {
    console.log(`⚠️ Script not found: ${step.script}`);
    return false;
  }
  
  try {
    execSync(`node "${scriptPath}"`, { 
      stdio: 'inherit',
      cwd: __dirname
    });
    console.log(`\n✅ ${step.name} completed successfully`);
    return true;
  } catch (error) {
    console.log(`\n❌ ${step.name} failed:`, error.message);
    return false;
  }
}

async function main() {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║     GRAVIT DESIGNER REVERSE ENGINEERING TOOLKIT v2.0              ║
║                                                                   ║
║     Complete Build Process                                        ║
║                                                                   ║
╚══════════════════════════════════════════════════════════════════╝
`);
  
  const startTime = Date.now();
  
  // Check prerequisites
  console.log('📋 Checking prerequisites...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  if (!(await fs.pathExists(publicDir))) {
    console.error('❌ Public directory not found. Cannot proceed.');
    process.exit(1);
  }
  
  const vendorFile = path.join(publicDir, 'chunk.vendor.js');
  if (!(await fs.pathExists(vendorFile))) {
    console.error('❌ chunk.vendor.js not found. Cannot proceed.');
    process.exit(1);
  }
  
  console.log('✅ Prerequisites met\n');
  
  // Run each step
  const results = [];
  
  for (let i = 0; i < STEPS.length; i++) {
    const success = await runStep(STEPS[i], i);
    results.push({ step: STEPS[i].name, success });
    
    if (!success) {
      console.log(`\n⚠️ Continuing despite ${STEPS[i].name} failure...`);
    }
  }
  
  // Summary
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const successful = results.filter(r => r.success).length;
  
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                           BUILD SUMMARY                           ║
╠══════════════════════════════════════════════════════════════════╣
`);
  
  for (const result of results) {
    const status = result.success ? '✅' : '❌';
    console.log(`║  ${status} ${result.step.padEnd(55)}║`);
  }
  
  console.log(`╠══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  Completed: ${successful}/${STEPS.length} steps                                           ║
║  Time: ${elapsed}s                                                      ║
║                                                                   ║
╚══════════════════════════════════════════════════════════════════╝
`);

  // Output directories
  console.log('📁 Output Directories:');
  console.log('   beautified/     - Formatted minified code');
  console.log('   extracted-modules/ - Module mappings');
  console.log('   modules/        - Extracted webpack modules');
  console.log('   analysis/       - Class analysis reports');
  console.log('   reconstructed/  - Reconstructed source code');
  console.log('   renamed/        - Code with improved variable names');
  
  console.log('\n📌 Next Steps:');
  console.log('   1. Review reconstructed/ for the readable source code');
  console.log('   2. Compare with gravit-original/src for original implementations');
  console.log('   3. Run "npm run dev" to start the development server');
  console.log('   4. Use the debug helper in the browser console');
  
  if (successful < STEPS.length) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
