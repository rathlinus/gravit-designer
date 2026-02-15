/**
 * Module 775
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
  require(7) /* GTransform */;
  var n = require(335) /* SmoothingManager */, r = require(318) /* GHighlighterAnnotation */, o = require(0) /* GObject */, a = require(36) /* PartsPropertyVals */, s = require(212) /* GAnnotationTool */, l = require(52) /* module */;
  function h() {
    n.call(this, true, true);
  }
  require(776) /* GHighlighterAnnotationEditor */, o.inheritAndMix(h, n, [s]), h.prototype._getRelatedItemClass = function () {
    return r;
  }, h.prototype._createAndAppendPath = function () {
    var e = new (this._getRelatedItemClass())();
    return this._editor.insertElements([e], false, true, true), e.getScene() ? (this._pathEditor = a.openEditor(e), e) : null;
  }, h.prototype._mouseRelease = function (e) {
    n.prototype._mouseRelease.call(this, e), this._manager.notifyJobDone(this);
  }, h.prototype._escAction = function () {
  }, h.prototype._enterAction = function () {
  }, h.prototype.getCursor = function () {
    return l.CrossHighlight;
  }, h.prototype.toString = function () {
    return "[Object GHighlighterAnnotationTool]";
  }, exports.exports = h;
}
