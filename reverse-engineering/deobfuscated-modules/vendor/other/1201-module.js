/**
 * Module 1201
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  var n = require(792) /* PDFJSBundle */.GlobalWorkerOptions;
  n && (n.workerSrc = "pdf.worker.js"), exports.exports = {
    GSVGImport: require(1390) /* GSVGImport */,
    GPDFImport: require(1393) /* FontManagerProxy */,
    GSketchImport: require(1121) /* GSketchImport */,
    GEPSImport: require(1403) /* GEPSParser */,
    GBitmapImport: require(1405) /* GBitmapImport */
  };
}
