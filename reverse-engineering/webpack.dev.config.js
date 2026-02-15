/**
 * Webpack Development Configuration
 * 
 * Builds Gravit Designer from deobfuscated/readable sources with source maps
 * 
 * Usage:
 *   npm run dev-build    - Build once
 *   npm run dev-watch    - Build and watch for changes
 */

const path = require('path');
const fs = require('fs');

// Paths
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const SRC_DIR = path.join(__dirname, 'src');
const READABLE_APP_DIR = path.join(__dirname, 'readable-modules', 'app');
const DEOBF_APP_DIR = path.join(__dirname, 'deobfuscated-modules', 'app');
const ANNOTATED_APP_DIR = path.join(__dirname, 'annotated-modules', 'app');
const MODULES_DIR = path.join(SRC_DIR, 'modules');

// Determine which source directory to use (prefer more readable versions)
function getSourceDir() {
  if (fs.existsSync(READABLE_APP_DIR)) {
    console.log('Building from readable-modules/');
    return READABLE_APP_DIR;
  } else if (fs.existsSync(DEOBF_APP_DIR)) {
    console.log('Building from deobfuscated-modules/');
    return DEOBF_APP_DIR;
  } else if (fs.existsSync(ANNOTATED_APP_DIR)) {
    console.log('Building from annotated-modules/');
    return ANNOTATED_APP_DIR;
  } else {
    console.log('Building from original src/modules/');
    return MODULES_DIR;
  }
}

const SOURCE_DIR = getSourceDir();

module.exports = {
  mode: 'development',
  
  // We don't use a traditional entry point since we're rebuilding webpack modules
  // Instead, we'll use a custom build script
  entry: false,
  
  output: {
    path: PUBLIC_DIR,
    filename: 'designer.browser.dev.js',
    libraryTarget: 'var',
    library: 'GravitDesigner'
  },
  
  devtool: 'source-map',
  
  optimization: {
    minimize: false
  },
  
  resolve: {
    extensions: ['.js']
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['last 2 versions']
                },
                modules: false
              }]
            ]
          }
        }
      }
    ]
  },
  
  plugins: []
};

/**
 * Note: This webpack config is a placeholder.
 * The actual build is done using build-bundle.cjs which reassembles
 * the webpack module array format that Gravit Designer expects.
 * 
 * A proper webpack build would require:
 * 1. Converting modules from webpack format to ES modules
 * 2. Resolving all require() calls to actual file paths
 * 3. Handling the webpack runtime and chunk loading mechanism
 * 
 * For now, use:
 *   node build-bundle.cjs  - to build from src/modules
 * 
 * Future enhancement: Create a proper webpack plugin that can
 * consume the module map and build a proper bundle.
 */
