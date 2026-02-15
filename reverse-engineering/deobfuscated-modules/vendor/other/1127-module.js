/**
 * Module 1127
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
  var n = require(598) /* module */;
  function r(e) {
    this.cornerRadius = e.cornerRadius, this.curveMode = e.curveMode, this.curveFrom = n.parse(e.curveFrom), this.curveTo = n.parse(e.curveTo), this.hasCurveFrom = e.hasCurveFrom, this.hasCurveTo = e.hasCurveTo, this.point = n.parse(e.point);
  }
  r.prototype.cornerRadius = 0, r.prototype.curveFrom = null, r.prototype.curveTo = null, r.prototype.curveMode = 0, r.prototype.point = null, r.prototype.hasCurveFrom = false, r.prototype.hasCurveTo = false, r.prototype.transform = function (e) {
    e && (this.curveFrom = e.mapPoint(this.curveFrom), this.curveTo = e.mapPoint(this.curveTo), this.point = e.mapPoint(this.point));
  }, exports.exports = r;
}
