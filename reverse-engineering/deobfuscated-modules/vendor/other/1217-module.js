/**
 * Module 1217
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
  var n = require(182) /* module */, r = require(90) /* Container */, o = require(338) /* module */, a = function (e, t) {
      this.operator = e, this.gtransform = t;
    };
  require(0) /* GObject */.inherit(a, r), a.prototype.write = function (e) {
    this.asArray().forEach(function (t) {
      t.write(e), e.writeSpace();
    }), e.write(this.operator);
  }, a.prototype.asArray = function () {
    var e = this.gtransform.getMatrix(), t = new n();
    return t.push(this._normalizeNumber(e[0])), t.push(this._normalizeNumber(e[1])), t.push(this._normalizeNumber(e[2])), t.push(this._normalizeNumber(e[3])), t.push(this._normalizeNumber(e[4])), t.push(this._normalizeNumber(e[5])), t;
  }, a.prototype._normalizeNumber = function (e) {
    return o.normalizeNumber(e);
  }, exports.exports = a;
}
