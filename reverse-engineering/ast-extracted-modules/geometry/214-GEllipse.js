/**
 * Module 214 - GEllipse
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
  var n = i(6), r = i(2), o = i(12), a = i(45), s = i(9);
  function l() {
    a.call(this), this._setDefaultProperties(l.GeometryProperties), this._invalidatePath();
  }
  r.inherit("ellipse", l, a), l.Type = {
    Pie: 0,
    Chord: 1,
    Arc: 2
  }, l.GeometryProperties = {
    sa: Math.PI,
    ea: Math.PI,
    etp: l.Type.Pie
  }, l.VisualProperties = {}, l.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? this.storeProperties(t.blob, l.GeometryProperties) : e === r._Change.Restore && (this.restoreProperties(t.blob, l.GeometryProperties), this._invalidatePath()), this._canHandleGeometryChangeForProperties(e, t, l.GeometryProperties) && e == r._Change.AfterPropertiesChange && !this.isRecordedTransaction() && this._invalidatePath(), this._handleGeometryChangeForProperties(e, t, l.GeometryProperties), a.prototype._handleChange.call(this, e, t);
  }, l.prototype.assignFrom = function (e) {
    e instanceof l && this.transferProperties(e, [l.GeometryProperties]), a.prototype.assignFrom.call(this, e);
  }, l.prototype.getNodeNameTranslated = function () {
    return s.getValue("GEllipse", "name", this.getNodeName());
  }, l.prototype._calculateSourceBBox = function (e) {
    return o.isEqualEps(this.$sa, this.$ea) ? new n(-1, -1, 2, 2) : a.prototype._calculateSourceBBox.call(this, e);
  }, l.prototype._invalidatePath = function () {
    var e = this.getAnchorPoints();
    this.beginUpdate(), e._beginBlockCompositeEvents(!0, !0, !0);
    try {
      var t;
      for (e.clearChildren(), t = Math.PI / 2; t <= this.$sa || o.isEqualEps(t, this.$sa); t += Math.PI / 2);
      var i = o.isEqualEps(this.$sa, this.$ea) ? this.$sa + o.PI2 : this.$ea;
      i < this.$sa && (i += o.PI2);
      var n = o.isEqualEps(this.$sa + o.PI2, i), r = new a.AnchorPoint(), s = !1, h = !1, A = !1, c = Math.floor(this.$sa / o.PIHALF) * o.PIHALF, p = (Math.floor(this.$sa / o.PIHALF) + 1) * o.PIHALF;
      if (o.isEqualEps(c, this.$sa) && i > p || o.isEqualEps(p, this.$sa) && i > p + o.PIHALF)
        r.setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(this.$sa),
          Math.sin(this.$sa),
          a.AnchorPoint.Type.Symmetric,
          !0
        ]), e.appendChild(r);
      else {
        var u = (y = new a()).getAnchorPoints();
        (_ = new a.AnchorPoint()).setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(c),
          Math.sin(c),
          a.AnchorPoint.Type.Symmetric,
          !0
        ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(p),
          Math.sin(p),
          a.AnchorPoint.Type.Symmetric,
          !0
        ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(p + o.PIHALF),
          Math.sin(p + o.PIHALF),
          a.AnchorPoint.Type.Symmetric,
          !0
        ]), u.appendChild(_), y.setProperty("closed", !0);
        var d = (this.$sa - c) / o.PIHALF, g = 1, f = new Float64Array(4), m = new Float64Array(4);
        i <= p && (g = (i - c) / o.PIHALF), o.getCtrlPts(u.getFirstChild().getProperty("x"), u.getFirstChild().getNext().getProperty("x"), u.getFirstChild().getProperty("hrx"), u.getFirstChild().getNext().getProperty("hlx"), d, g, f), o.getCtrlPts(u.getFirstChild().getProperty("y"), u.getFirstChild().getNext().getProperty("y"), u.getFirstChild().getProperty("hry"), u.getFirstChild().getNext().getProperty("hly"), d, g, m), r.setProperties([
          "x",
          "y",
          "hrx",
          "hry",
          "tp",
          "ah"
        ], [
          f[0],
          m[0],
          f[1],
          m[1],
          a.AnchorPoint.Type.Asymmetric,
          !1
        ]), s = !0, e.appendChild(r), i <= p && ((r = new a.AnchorPoint()).setProperties([
          "hlx",
          "hly",
          "x",
          "y",
          "tp",
          "ah"
        ], [
          f[2],
          m[2],
          f[3],
          m[3],
          a.AnchorPoint.Type.Asymmetric,
          !1
        ]), e.appendChild(r), A = !0);
      }
      if (A)
        this.setProperty("closed", !0);
      else {
        for (; t < i && !o.isEqualEps(t, i); t += Math.PI / 2)
          (r = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(t),
            Math.sin(t),
            a.AnchorPoint.Type.Symmetric,
            !0
          ]), e.appendChild(r);
        if (!n && o.isEqualEps(t, i))
          (r = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(i),
            Math.sin(i),
            a.AnchorPoint.Type.Symmetric,
            !0
          ]), e.appendChild(r);
        else {
          c = Math.floor(i / o.PIHALF) * o.PIHALF, p = (Math.floor(i / o.PIHALF) + 1) * o.PIHALF;
          var y, _;
          u = (y = new a()).getAnchorPoints();
          (_ = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(c),
            Math.sin(c),
            a.AnchorPoint.Type.Symmetric,
            !0
          ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(p),
            Math.sin(p),
            a.AnchorPoint.Type.Symmetric,
            !0
          ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(p + o.PIHALF),
            Math.sin(p + o.PIHALF),
            a.AnchorPoint.Type.Symmetric,
            !0
          ]), u.appendChild(_), y.setProperty("closed", !0);
          var v = (i - c) / o.PIHALF, b = new Float64Array(4), C = new Float64Array(4);
          o.getCtrlPtsCasteljau(u.getFirstChild().getProperty("x"), u.getFirstChild().getProperty("hrx"), u.getFirstChild().getNext().getProperty("hlx"), u.getFirstChild().getNext().getProperty("x"), v, 1, b), o.getCtrlPtsCasteljau(u.getFirstChild().getProperty("y"), u.getFirstChild().getProperty("hry"), u.getFirstChild().getNext().getProperty("hly"), u.getFirstChild().getNext().getProperty("y"), v, 1, C), n || ((r = new a.AnchorPoint()).setProperties([
            "hlx",
            "hly",
            "x",
            "y",
            "tp",
            "ah"
          ], [
            b[2],
            C[2],
            b[3],
            C[3],
            a.AnchorPoint.Type.Asymmetric,
            !1
          ]), h = !0, e.appendChild(r));
        }
        var w = null;
        e.getFirstChild().getNext() == e.getLastChild() && (r = new a.AnchorPoint(), o.isEqualEps(t, i) && (t += Math.PI / 2), r.setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(t),
          Math.sin(t),
          a.AnchorPoint.Type.Symmetric,
          !0
        ]), e.appendChild(r), w = r), this.setProperty("closed", !0);
        for (var E = e.getFirstChild(); null != E; E = E.getNext())
          E.setProperty("ah", !1);
        w && e.removeChild(w), s && (e.getFirstChild().getNext().setProperties([
          "hlx",
          "hly"
        ], [
          f[2],
          m[2]
        ]), n && (e.getFirstChild().setProperties([
          "hlx",
          "hly",
          "tp"
        ], [
          b[2],
          C[2],
          a.AnchorPoint.Type.Symmetric
        ]), e.getLastChild().setProperties([
          "hrx",
          "hry"
        ], [
          b[1],
          C[1]
        ]))), h && e.getLastChild().getPrevious().setProperties([
          "hrx",
          "hry"
        ], [
          b[1],
          C[1]
        ]);
      }
      n || (e.getFirstChild().setProperties([
        "tp",
        "hlx",
        "hly"
      ], [
        a.AnchorPoint.Type.Asymmetric,
        null,
        null
      ]), e.getLastChild().setProperties([
        "tp",
        "hrx",
        "hry"
      ], [
        a.AnchorPoint.Type.Asymmetric,
        null,
        null
      ]), this.$etp == l.Type.Pie ? (r = new a.AnchorPoint(), e.appendChild(r)) : this.$etp == l.Type.Arc && this.setProperty("closed", !1));
    } finally {
      this.endUpdate(), e._endBlockCompositeEvents(!0, !0, !0);
    }
  }, l.prototype.toString = function () {
    return "[GEllipse]";
  }, e.exports = l;
}
