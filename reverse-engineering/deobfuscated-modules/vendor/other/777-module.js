/**
 * Module 777
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
  var n = require(133) /* GScenePaintConfiguration */;
  function r() {
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.pageDecoration = {
    chessboard: true,
    margin: true,
    shadow: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBackground: "rgba(0,0,0,0.5)",
    background: "white"
  }, r.prototype.gridVisible = true, r.prototype.pageLabelsVisible = false, r.prototype.symbolLabelsVisible = true, r.prototype.guideLinesVisible = true, r.prototype.toString = function () {
    return "[Object GEditorPaintConfiguration]";
  }, exports.exports = r;
}
