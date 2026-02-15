/**
 * Module 758
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
  var n = require(2) /* GNode */, r = require(0) /* GObject */, o = require(56) /* GShape */, a = require(28) /* GStylable */, s = require(52) /* module */, l = require(77) /* Wheel */, h = require(211) /* GTool */, A = require(162) /* GPathsGraph */, c = require(9) /* GLocale */, p = require(47) /* GLocaleKey */;
  function u() {
    h.call(this);
  }
  r.inherit(u, h), u.prototype._transactionStarted = false, u.prototype.getCursor = function () {
    return s.Pipette;
  }, u.prototype.activate = function (e, t) {
    h.prototype.activate.call(this, e, t), t || (e.addEventListener(l.Down, this._mouseDown, this), e.addEventListener(l.Drag, this._mouseFill, this), e.addEventListener(l.Release, this._mouseRelease, this)), this._transactionStarted = false, this._editor.setSelectionDetail(true), this._editor.setSelectionEdit(true);
  }, u.prototype.deactivate = function (e, t) {
    !t && this._editor && (this._editor.setSelectionDetail(false), this._editor.setSelectionEdit(false)), h.prototype.deactivate.call(this, e, t), e.removeEventListener(l.Down, this._mouseDown), e.removeEventListener(l.Drag, this._mouseFill), e.removeEventListener(l.Release, this._mouseRelease);
  }, u.prototype.isActivatable = function (e) {
    var t = e ? e.getEditor() : null, i = t ? t.getIndividualSelection() : null, n = false;
    if (i && i.length) {
      n = true;
      for (var r = 0; r < i.length && n; ++r)
        i[r] instanceof A || (n = false);
    }
    return n;
  }, u.prototype._mouseDown = function (e) {
    this._transactionStarted = false, this._mouseFill(e);
  }, u.prototype._mouseRelease = function (e) {
    this._mouseFill(e), this._transactionStarted && (this._editor.commitTransaction(c.get(new p("GFillTool", "action.modify-fill"))), this._transactionStarted = false);
  }, u.prototype._mouseFill = function (e) {
    this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration());
    var t = this._editor.getIndividualSelection();
    if (t && t.length) {
      var require = this._scene.hitTest(e.client, this._view.getWorldTransform(this._scene), function (e) {
        return e.hasFlag(n.Flag.Selected) && e instanceof A;
      }, false, -1, 0, true, null, false, false, this._view.getViewConfiguration().multiPageView);
      if (require && 1 == require.length && require[0].data.hitRes.type == o.HitResult.Type.Fill) {
        var r = require[0].data.facet;
        if (this._transactionStarted || (this._editor.beginTransaction(), this._transactionStarted = true), r.setProperties(["cSt"], [!!this._fpt]), r.getPaintLayers().clearFillLayers(), this._fpt)
          r.getPaintLayers().appendChild(new a.FillPaintLayer(this._fpt, this._fop));
        else {
          var s = r.getParent();
          s instanceof n.MapContainer && (s = s.getParent()), r.assignStyleFrom(s);
        }
      }
    }
  }, u.prototype.getSelectionFillPattern = function () {
    var e = this._editor.getIndividualSelection();
    if (e && e.length)
      for (var module = 0; module < e.length; ++module)
        if (e[module] instanceof A) {
          var require = e[module].getPaintLayers().getFillLayers()[0];
          return require ? require.$_pt : null;
        }
    return null;
  }, u.prototype.getSelectionFillOpacity = function () {
    var e = this._editor.getIndividualSelection();
    if (e && e.length)
      for (var module = 0; module < e.length; ++module)
        if (e[module] instanceof A) {
          var require = e[module].getPaintLayers().getFillLayers()[0];
          return require ? require.$_op : null;
        }
    return 1;
  }, u.prototype.getFillPattern = function () {
    return this._fpt;
  }, u.prototype.getFillOpacity = function () {
    return this._fop;
  }, u.prototype.setFill = function (e, t) {
    this._fpt = e, this._fop = t;
  }, u.prototype.toString = function () {
    return "[Object GFillTool]";
  }, exports.exports = u;
}
