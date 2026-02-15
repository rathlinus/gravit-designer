/**
 * Module 1450
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
  var n = require(0) /* GObject */, r = require(90) /* Container */, o = require(564) /* module */;
  function a(e) {
    this._resource = e;
  }
  n.inherit(a, r), a.prototype._resource = null, a.prototype.write = function (e) {
    e.write("/" + this._resource.getName() + " " + o.Do);
  }, a.prototype.toString = function () {
    return "[Object GPDFInvokeResource]";
  }, exports.exports = a;
}
