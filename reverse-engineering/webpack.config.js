/**
 * Gravit Designer Development Build Configuration
 * 
 * This webpack configuration allows you to:
 * 1. Build the reconstructed source
 * 2. Create development bundles with source maps
 * 3. Run a development server with hot reload
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  
  return {
    entry: {
      // Main entry point - loads the reconstructed engine
      'gravit-engine': './reconstructed/index.js',
    },
    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: {
        name: 'GravitEngine',
        type: 'umd',
        export: 'default'
      },
      globalObject: 'this'
    },
    
    mode: isDev ? 'development' : 'production',
    
    devtool: isDev ? 'source-map' : false,
    
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3001,
      hot: true,
      open: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3000',
        }
      ]
    },
    
    resolve: {
      extensions: ['.js', '.json'],
      alias: {
        '@core': path.resolve(__dirname, 'reconstructed/infinity/core'),
        '@scene': path.resolve(__dirname, 'reconstructed/infinity/scene'),
        '@geometry': path.resolve(__dirname, 'reconstructed/infinity/geometry'),
        '@paint': path.resolve(__dirname, 'reconstructed/infinity/paint'),
        '@vertex': path.resolve(__dirname, 'reconstructed/infinity/vertex'),
        '@event': path.resolve(__dirname, 'reconstructed/infinity/event'),
        '@effects': path.resolve(__dirname, 'reconstructed/infinity/effects'),
      }
    },
    
    module: {
      rules: []
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        template: './dev-server/index.html',
        filename: 'index.html'
      })
    ],
    
    optimization: {
      minimize: !isDev,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            // Preserve class and function names
            keep_classnames: true,
            keep_fnames: true,
            mangle: false
          }
        })
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    
    performance: {
      hints: false,
      maxEntrypointSize: 10 * 1024 * 1024, // 10MB - Gravit is large
      maxAssetSize: 10 * 1024 * 1024
    }
  };
};
