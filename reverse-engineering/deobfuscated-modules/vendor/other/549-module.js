/**
 * Module 549
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
  var n = require(7) /* GTransform */, r = require(236) /* GShapeTool */, o = require(0) /* GObject */, a = require(73) /* GRectangle */;
  function s() {
    r.call(this, true, true);
  }
  require(330) /* GRectangleEditor */, o.inherit(s, r), s.prototype._getRelatedItemClass = function () {
    return a;
  }, s.prototype._updateShape = function (e, t, i) {
    return !!t && (e.setProperty("trf", new n(Math.max(t.getWidth(), 1) / 2, 0, 0, Math.max(t.getHeight(), 1) / 2, t.getX() + t.getWidth() / 2, t.getY() + t.getHeight() / 2)), true);
  }, s.prototype._hasCenterCross = function () {
    return true;
  }, s.prototype._showMousePositionInlineHint = function () {
    return true;
  }, s.prototype._showAreaInlineHint = function () {
    return true;
  }, s.prototype.toString = function () {
    return "[Object GRectangleTool]";
  }, exports.exports = s;
}
