/**
 * Module 1399
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
  var n = require(1120) /* module */;
  function r() {
  }
  r.prototype.gfx = null, r.prototype.create = function (e, t) {
    if (e <= 0 || t <= 0)
      throw new Error("invalid canvas size");
    var i = new n(e, t);
    return {
      canvas: i,
      context: this.gfx.ctx.createContext(i)
    };
  }, r.prototype.reset = function (e, t, i) {
    if (!e.canvas)
      throw new Error("canvas is not specified");
    if (t <= 0 || i <= 0)
      throw new Error("invalid canvas size");
    e.canvas.width = t, e.canvas.height = i;
  }, r.prototype.destroy = function (e) {
    if (!e.canvas)
      throw new Error("canvas is not specified");
    e.canvas.width = 0, e.canvas.height = 0, e.canvas = null, e.context = null;
  }, exports.exports = r;
}
