/**
 * Module 551
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
  var n = require(7) /* GTransform */, r = require(236) /* GShapeTool */, o = require(214) /* GEllipse */, a = require(0) /* GObject */;
  function s() {
    r.call(this, true, true);
  }
  require(552) /* GEllipseEditor */, a.inherit(s, r), s.prototype._getRelatedItemClass = function () {
    return o;
  }, s.prototype._updateShape = function (e, t, i) {
    return !!t && (e.setProperty("trf", new n(Math.max(1, t.getWidth()) / 2, 0, 0, Math.max(1, t.getHeight()) / 2, t.getX() + t.getWidth() / 2, t.getY() + t.getHeight() / 2)), true);
  }, s.prototype._showMousePositionInlineHint = function () {
    return true;
  }, s.prototype._showAreaInlineHint = function () {
    return true;
  }, s.prototype._hasCenterCross = function () {
    return true;
  }, s.prototype.toString = function () {
    return "[Object GEllipseTool]";
  }, exports.exports = s;
}
