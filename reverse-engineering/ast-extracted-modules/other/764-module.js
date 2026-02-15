/**
 * Module 764
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
  var n = i(264), r = i(2), o = i(187), a = i(87), s = i(60), l = i(179), h = i(0), A = i(54), c = i(48), p = i(59), u = i(335), d = i(99);
  function g() {
    u.call(this);
  }
  h.inherit(g, u), g.prototype._willMerge = !0, g.prototype._mouseDown = function (e) {
    u.prototype._mouseDown.call(this, e);
    var t = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
    this._editor.getGuides().beginMap(this._editor.getMappingScopes()), t = this._editor.getGuides().mapPoint(t, d.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), this._willMerge = !1;
    var i = this._startingSelection;
    if (i)
      for (var n = 0; n < i.length; n++)
        if (i[n].hasMixin(a)) {
          var r = i[n], o = r.getGeometryBBox();
          if (o && o.containsPoint(t) && p.hitTest(t.getX(), t.getY(), r, 0, !0)) {
            this._willMerge = !0;
            break;
          }
        }
  }, g.prototype._finalizeDrawing = function () {
    this._doTheClip();
  }, g.prototype._doTheClip = function () {
    var e = null;
    if (this._closeIfNeeded())
      e = this._newPath, this._correctFillVisibility();
    else {
      var t = (e = this._newPath.clone()).getAnchorPoints(), i = t.getFirstChild(), n = new s.AnchorPoint();
      n.setProperties([
        "x",
        "y"
      ], [
        i.$x,
        i.$y
      ]), t.appendChild(n), e.correctClosedAttribute();
    }
    var h = this._startingSelection;
    if (h) {
      for (var p = [], u = [], d = new o(), g = !1, f = 0; f < h.length; f++)
        if (h[f].hasMixin(a)) {
          for (var m = o.redistributeVertexSource(h[f]), y = m.containers.length, _ = [], v = 0; v < y; v++)
            for (var b = m.containers[v], C = 0; C < b.length; C++) {
              var w = b[C], E = new c(), B = new c(), x = !1;
              if (w.rewindVertices(0) && w.readVertex(E) && w.readVertex(B)) {
                for (; w.readVertex(B););
                (B.command === c.Command.Close || B.x === E.x && B.y === E.y) && (_.push(w), x = !0, d.intersect(e, w, !1, !0, null, m.polys[v][C]) && (g = !0));
              }
              x || u.push(w);
            }
          _.length && p.push({
            item: h[f],
            sub: !1,
            splitted: _
          });
        }
      if (p.length) {
        var P, S = [];
        for (f = 0; f < p.length; f++)
          S = S.concat(p[f].splitted);
        !g && this._willMerge ? e.isClockWise() || (this._willMerge = !1) : g || e.isClockWise() && (this._willMerge = !0), P = (P = this._willMerge ? this._doTheMerge(S, [e]) : this._doTheSub(S, [e])).concat(u);
        var T = A.mergeVertexSources(P), I = l.createPathFromVertexSource(T);
        if (I) {
          var F = (w = p[0].item).$trf;
          w.$trf = null, I.assignFrom(w), w.$trf = F;
        }
        for (f = 0; f < p.length; f++) {
          (R = p[f].item.getParent()) && R.removeChild(p[f].item);
        }
        for (f = 0; f < u.length; f++) {
          var R;
          (R = u[f].item.getParent()) && R.removeChild(u[f].item);
        }
        I && this._newPath.getParent().insertChild(I, this._newPath), this._newPath.getParent().removeChild(this._newPath), I && (this._newPath = I, this._editor.updateSelection(!1, [I]));
      } else
        this._newPath.setFlag(r.Flag.Selected);
    } else
      this._newPath.setFlag(r.Flag.Selected);
  }, g.prototype._doTheMerge = function (e, t) {
    var i = new n(n.PIP_CHECK_ODDEVEN, n.AUTO), r = A.mergeVertexSources(e), o = A.mergeVertexSources(t);
    return i.initializeSources(r, o) ? i.clipOp(n.OR) : e.concat(t);
  }, g.prototype._doTheSub = function (e, t) {
    var i = new n(n.PIP_CHECK_ODDEVEN, n.AUTO), r = A.mergeVertexSources(e), o = A.mergeVertexSources(t);
    return i.initializeSources(r, o) ? i.clipOp(n.SUB) : e;
  }, g.prototype.toString = function () {
    return "[Object GMagicTool]";
  }, e.exports = g;
}
