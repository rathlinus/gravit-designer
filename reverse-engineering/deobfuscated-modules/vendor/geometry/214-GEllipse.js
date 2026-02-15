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

function (exports, module, require) {
  var n = require(6) /* GRect */, r = require(2) /* GNode */, o = require(12) /* GMath */, a = require(45) /* GPathBase */, s = require(9) /* GLocale */;
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
    this.beginUpdate(), e._beginBlockCompositeEvents(true, true, true);
    try {
      var module;
      for (e.clearChildren(), module = Math.PI / 2; module <= this.$sa || o.isEqualEps(module, this.$sa); module += Math.PI / 2);
      var require = o.isEqualEps(this.$sa, this.$ea) ? this.$sa + o.PI2 : this.$ea;
      require < this.$sa && (require += o.PI2);
      var n = o.isEqualEps(this.$sa + o.PI2, require), r = new a.AnchorPoint(), s = false, h = false, A = false, c = Math.floor(this.$sa / o.PIHALF) * o.PIHALF, p = (Math.floor(this.$sa / o.PIHALF) + 1) * o.PIHALF;
      if (o.isEqualEps(c, this.$sa) && require > p || o.isEqualEps(p, this.$sa) && require > p + o.PIHALF)
        r.setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(this.$sa),
          Math.sin(this.$sa),
          a.AnchorPoint.Type.Symmetric,
          true
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
          true
        ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(p),
          Math.sin(p),
          a.AnchorPoint.Type.Symmetric,
          true
        ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(p + o.PIHALF),
          Math.sin(p + o.PIHALF),
          a.AnchorPoint.Type.Symmetric,
          true
        ]), u.appendChild(_), y.setProperty("closed", true);
        var d = (this.$sa - c) / o.PIHALF, g = 1, f = new Float64Array(4), m = new Float64Array(4);
        require <= p && (g = (require - c) / o.PIHALF), o.getCtrlPts(u.getFirstChild().getProperty("x"), u.getFirstChild().getNext().getProperty("x"), u.getFirstChild().getProperty("hrx"), u.getFirstChild().getNext().getProperty("hlx"), d, g, f), o.getCtrlPts(u.getFirstChild().getProperty("y"), u.getFirstChild().getNext().getProperty("y"), u.getFirstChild().getProperty("hry"), u.getFirstChild().getNext().getProperty("hly"), d, g, m), r.setProperties([
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
          false
        ]), s = true, e.appendChild(r), require <= p && ((r = new a.AnchorPoint()).setProperties([
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
          false
        ]), e.appendChild(r), A = true);
      }
      if (A)
        this.setProperty("closed", true);
      else {
        for (; module < require && !o.isEqualEps(module, require); module += Math.PI / 2)
          (r = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(module),
            Math.sin(module),
            a.AnchorPoint.Type.Symmetric,
            true
          ]), e.appendChild(r);
        if (!n && o.isEqualEps(module, require))
          (r = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(require),
            Math.sin(require),
            a.AnchorPoint.Type.Symmetric,
            true
          ]), e.appendChild(r);
        else {
          c = Math.floor(require / o.PIHALF) * o.PIHALF, p = (Math.floor(require / o.PIHALF) + 1) * o.PIHALF;
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
            true
          ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(p),
            Math.sin(p),
            a.AnchorPoint.Type.Symmetric,
            true
          ]), u.appendChild(_), (_ = new a.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp",
            "ah"
          ], [
            Math.cos(p + o.PIHALF),
            Math.sin(p + o.PIHALF),
            a.AnchorPoint.Type.Symmetric,
            true
          ]), u.appendChild(_), y.setProperty("closed", true);
          var v = (require - c) / o.PIHALF, b = new Float64Array(4), C = new Float64Array(4);
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
            false
          ]), h = true, e.appendChild(r));
        }
        var w = null;
        e.getFirstChild().getNext() == e.getLastChild() && (r = new a.AnchorPoint(), o.isEqualEps(module, require) && (module += Math.PI / 2), r.setProperties([
          "x",
          "y",
          "tp",
          "ah"
        ], [
          Math.cos(module),
          Math.sin(module),
          a.AnchorPoint.Type.Symmetric,
          true
        ]), e.appendChild(r), w = r), this.setProperty("closed", true);
        for (var E = e.getFirstChild(); null != E; E = E.getNext())
          E.setProperty("ah", false);
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
      ]), this.$etp == l.Type.Pie ? (r = new a.AnchorPoint(), e.appendChild(r)) : this.$etp == l.Type.Arc && this.setProperty("closed", false));
    } finally {
      this.endUpdate(), e._endBlockCompositeEvents(true, true, true);
    }
  }, l.prototype.toString = function () {
    return "[GEllipse]";
  }, exports.exports = l;
}
