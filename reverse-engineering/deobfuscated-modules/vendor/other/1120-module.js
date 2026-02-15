/**
 * Module 1120
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

function (exports, module) {
  function i(e, t) {
    this._canvas = document.createElement("canvas"), this.width = e, this.height = t, this.context = null;
  }
  i.prototype._canvas = null, i.prototype.context = null, Object.defineProperties(i.prototype, {
    width: {
      set: function (e) {
        this._canvas.width = e;
      },
      get: function () {
        return this._canvas.width;
      }
    },
    height: {
      set: function (e) {
        this._canvas.height = e;
      },
      get: function () {
        return this._canvas.height;
      }
    }
  }), i.prototype.getHTMLElement = function () {
    return this._canvas;
  }, exports.exports = i;
}
