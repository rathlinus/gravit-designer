/**
 * Module 1220
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
  var n = require(90) /* Container */, r = require(182) /* module */, o = require(564) /* module */;
  function a(e) {
    this._offset = 0, this._dashArray = new r(e);
  }
  require(0) /* GObject */.inherit(a, n), a.prototype._dashArray = null, a.prototype._offset = 0, a.prototype._isDashPatternValid = function () {
    return !(this._dashArray.size() > 0) || !this._dashArray.every(function (e) {
      return 0 === e.getValue();
    });
  }, a.prototype.write = function (e) {
    this._isDashPatternValid() && (this._dashArray.write(e), e.writeSpace(), e.write(String(this._offset)), e.writeSpace(), e.write(o.setLineDash));
  }, exports.exports = a;
}
