/**
 * Module 332
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

function (e, t, i) {
  var n = i(0), r = i(211);
  function o() {
  }
  i(274), n.inherit(o, r), o.prototype.getDefaultStyle = function () {
    var e = this._scene ? this._scene.getStyles().querySingle("style[_sdf=\"" + n.getTypeId(this._getRelatedItemClass()) + "\"]") : null;
    return e || null;
  }, o.prototype._getRelatedItemClass = function () {
    throw new Error("GItemTool.getRelatedItemClass: virtual method");
  }, o.prototype.toString = function () {
    return "[Object GItemTool]";
  }, e.exports = o;
}
