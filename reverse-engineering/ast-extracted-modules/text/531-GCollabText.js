/**
 * Module 531 - GCollabText
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
  var n = i(0), r = i(2), o = i(54), a = i(95), s = i(73), l = i(70), h = i(9), A = i(327), c = i(532), p = i(999), u = i(1000);
  function d() {
    a.call(this), this._setDefaultProperties(l.GeometryProperties), this._setDefaultProperties(l.MetaProperties), this._setDefaultProperties(d.GeometryProperties), this._setDefaultProperties(d.MetaProperties), this._runs = [], this._runsDirty = !1, this._vertexContainer = new o(), this.__gtype_id__ = n.getTypeId(d), this._textMode = !1, this.getNodeNameTranslated = function () {
      return h.getValue("GCollabText", "name", this.getNodeName());
    }, this.addAction(new u());
  }
  r.inheritAndMix("collabtext", d, a, [
    r.Reference,
    A,
    c
  ]), d.GeometryProperties = {
    imgTrf: null,
    textTrf: null
  }, d.MetaProperties = {
    collab: !0,
    Guid: null
  }, d.setModeText = function (e) {
    e._textMode || (Object.setPrototypeOf(e, p.prototype), e._calculatePaintBBox = d.prototype._calculatePaintBBox.bind(e), e._detailHitTest = d.prototype._detailHitTest.bind(e), e.getActionsBBox = d.prototype.getActionsBBox.bind(e), e.hitActionTest = d.prototype.hitActionTest.bind(e), e.getActions = d.prototype.getActions.bind(e), e.addAction = d.prototype.addAction.bind(e), e._fontAvailableEvent = d.prototype._fontAvailableEvent.bind(e), e._textMode = !0, e.$imgTrf = e.$trf, e.$trf = e.$textTrf, e.$afs = !0, e.adaptFontSizeToFitBBox());
  }, d.setModeImage = function (e) {
    e._textMode && (Object.setPrototypeOf(e, d.prototype), e._textMode = !1, e.$textTrf = e.$trf, e.$trf = e.$imgTrf);
  }, d.isTextMode = function (e) {
    return !!e._textMode;
  }, d.prototype.getPlainText = function () {
    var e = null;
    return this._tlCore && this._tlCore.isInitialized() ? (e = this._tlCore.getDocumentRange().plainText()) || (e = this._startText) : e = this._tempText, e;
  }, d.prototype._calculatePaintBBox = function () {
    var e;
    if (e = this._textMode ? l.prototype._calculatePaintBBox.apply(this, arguments) : a.prototype._calculatePaintBBox.apply(this, arguments)) {
      var t = this.getActionsBBox();
      t && (e = e.expanded(0, t.getHeight(), 0, 0));
    }
    return e;
  }, d.prototype._detailHitTest = function (e, t, i, n) {
    return (this._textMode ? l.prototype._detailHitTest.call(this, e, t, i, n) : s.prototype._detailHitTest.call(this, e, t, i, !0)) || this.hitActionTest(e, t);
  }, d.prototype._fontAvailableEvent = function (e) {
    this._textMode && l.prototype._fontAvailableEvent.call(this, e);
  }, d.prototype.toString = function () {
    return "[GCollabText]";
  }, e.exports = d;
}
