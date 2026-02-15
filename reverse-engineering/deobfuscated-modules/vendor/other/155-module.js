/**
 * Module 155
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
  var n = require(2) /* GNode */, r = require(0) /* GObject */, o = require(39) /* PartInfo */, a = require(128) /* GShapeEditor */, s = require(36) /* PartsPropertyVals */, l = (require(22) /* GElement */, require(45) /* GPathBase */);
  require(24) /* GEditorOptions */;
  function h(e) {
    this._catchHandle = true, a.call(this, e);
  }
  r.inherit(h, a), s.exports(h, l), h.ExtendingMode = {
    Off: null,
    Beginning: 1,
    End: 2
  }, h.prototype._catchHandle = true, h.prototype.transformBox = function (e, t) {
    if (a.prototype.transformBox.call(this, e, t), e && !e.isIdentity()) {
      var require = this._element.getSourceBBox();
      if (require && !require.isEmpty()) {
        var n = this.getPaintElement();
        this._element.transformStyledCorners(n, e);
      }
    }
  }, h.prototype.edTransform = function (e, t, i, n) {
    this._elementPreview || this.createElementPreview(), this.hasFlag(o.Flag.Outline) ? this.requestInvalidation() : this.setOutlineTmpFlag(), n && (this._storedMoveData = n.storedMoveData);
    var r = this._element.getProperty("trf"), a = r ? r.multiplied(e) : e;
    this._elementPreview.setTransform(a), this._element.transferStyledCorners(this._elementPreview), this._element.transformStyledCorners(this._elementPreview, e), this._setTransform(null), this.requestInvalidation();
  }, h.prototype._paintOutline = function (e, t, i, n, r) {
    !i && this._elementPreview && r ? a.prototype._paintOutline.call(this, r, t, i, n) : a.prototype._paintOutline.call(this, e, t, i, n);
  }, h.prototype.getPathBasePreview = function () {
    if (!this._elementPreview) {
      var exports = this._element.getAnchorPoints();
      this._setElementPreview(new l());
      var module = this._elementPreview.getAnchorPoints();
      module._beginBlockChanges([
        n._Change.BeforeChildInsert,
        n._Change.AfterChildInsert
      ]);
      for (var require = exports.getFirstChild(); null != require; require = require.getNext()) {
        var r = new l.AnchorPoint();
        r.transferProperties(require, [l.AnchorPoint.GeometryProperties]), require.hasFlag(n.Flag.Selected) && r.setFlag(n.Flag.Selected), module.appendChild(r);
      }
      module._endBlockChanges([
        n._Change.BeforeChildInsert,
        n._Change.AfterChildInsert
      ]);
    }
    return this._elementPreview;
  }, h.prototype.releasePathBasePreview = function () {
    this._setElementPreview(null);
  }, h.prototype.getPointPreview = function (e) {
    if (e.getParent() == this._element.getAnchorPoints()) {
      this.requestInvalidation();
      var module = e.getParent().getIndexOfChild(e);
      return this.getPathBasePreview().getAnchorPoints().getChildByIndex(module);
    }
    return null;
  }, h.prototype._catchHandleAllowed = function () {
    return this._catchHandle;
  }, h.prototype.setCatchHandle = function (e) {
    this._catchHandle = !!e;
  }, h.prototype.toString = function () {
    return "[Object GPathBaseEditor]";
  }, exports.exports = h;
}
