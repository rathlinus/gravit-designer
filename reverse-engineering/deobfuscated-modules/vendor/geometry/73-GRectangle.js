/**
 * Module 73 - GRectangle
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
  var n = require(5) /* GPoint */, r = require(6) /* GRect */, o = require(2) /* GNode */, a = require(45) /* GPathBase */, s = require(12) /* GMath */, l = (require(22) /* GElement */, require(9) /* GLocale */);
  function h(e, t, i, n) {
    (e || 0 === e) && (this._x = e), (t || 0 === t) && (this._y = t), i && (this._w = i), n && (this._h = n), a.call(this), this.$closed = true, this._setDefaultProperties(h.GeometryProperties), this._invalidatePath(), this._paintSharp = true;
  }
  o.inherit("rectangle", h, a), h.GeometryProperties = {
    uf: true,
    tl_uf: true,
    tl_ct: a.CornerType.Rounded,
    tl_sx: 0,
    tl_sy: 0,
    tr_uf: true,
    tr_ct: a.CornerType.Rounded,
    tr_sx: 0,
    tr_sy: 0,
    br_uf: true,
    br_ct: a.CornerType.Rounded,
    br_sx: 0,
    br_sy: 0,
    bl_uf: true,
    bl_ct: a.CornerType.Rounded,
    bl_sx: 0,
    bl_sy: 0
  }, h.VisualProperties = {}, h.getGeometryPropertiesSidePrefix = function (e) {
    switch (e) {
    case r.Side.TOP_LEFT:
      return "tl";
    case r.Side.TOP_RIGHT:
      return "tr";
    case r.Side.BOTTOM_RIGHT:
      return "br";
    case r.Side.BOTTOM_LEFT:
      return "bl";
    default:
      throw new Error("Invalid side");
    }
  }, h.SIDES = [
    r.Side.TOP_LEFT,
    r.Side.TOP_RIGHT,
    r.Side.BOTTOM_RIGHT,
    r.Side.BOTTOM_LEFT
  ], h.prototype._x = -1, h.prototype._y = -1, h.prototype._w = 2, h.prototype._h = 2, h.prototype._blockHandle = false, h.prototype.iterateSegments = function (e, t) {
    for (var require = t ? this.$trf : null, o = 0; o < h.SIDES.length; ++o) {
      var a = h.SIDES[o], s = h.getGeometryPropertiesSidePrefix(a), l = null;
      switch (a) {
      case r.Side.TOP_LEFT:
        l = new n(this._x, this._y);
        break;
      case r.Side.TOP_RIGHT:
        l = new n(this._x + this._w, this._y);
        break;
      case r.Side.BOTTOM_RIGHT:
        l = new n(this._x + this._w, this._y + this._h);
        break;
      case r.Side.BOTTOM_LEFT:
        l = new n(this._x, this._y + this._h);
      }
      if (require && (l = require.mapPoint(l)), true === e(l, a, this["$" + s + "_ct"], this["$" + s + "_sx"], this["$" + s + "_sy"], o))
        break;
    }
  }, h.prototype.getPointsMinDistance = function () {
    var e = new n(this._x, this._y), t = new n(this._x + this._w, this._y), i = new n(this._x, this._y + this._h);
    return this.$trf && (e = this.$trf.mapPoint(e), t = this.$trf.mapPoint(t), i = this.$trf.mapPoint(i)), Math.min(s.ptDist(e.getX(), e.getY(), t.getX(), t.getY()), s.ptDist(e.getX(), e.getY(), i.getX(), i.getY()));
  }, h.prototype.getNodeNameTranslated = function () {
    return l.getValue("GRectangle", "name", this.getNodeName());
  }, h.prototype._handleChange = function (e, t) {
    if (e === o._Change.Store)
      if (this.$uf)
        t.blob.uf = true, t.blob.ct = this.$tl_ct, t.blob.sl = this.$tl_sx;
      else {
        t.blob.uf = false;
        for (var require = 0; require < h.SIDES.length; ++require) {
          var n = h.SIDES[require], r = h.getGeometryPropertiesSidePrefix(n);
          t.blob[r + "uf"] = this["$" + r + "_uf"], t.blob[r + "ct"] = this["$" + r + "_ct"], t.blob[r + "sl"] = [
            this["$" + r + "_sx"],
            this["$" + r + "_sy"]
          ];
        }
      }
    else if (e === o._Change.Restore) {
      if (true !== t.blob.uf && false !== t.blob.uf)
        this._setDefaultProperties(h.GeometryProperties);
      else {
        this.$uf = t.blob.uf;
        for (require = 0; require < h.SIDES.length; ++require) {
          n = h.SIDES[require];
          this["$" + (r = h.getGeometryPropertiesSidePrefix(n)) + "_uf"] = t.blob.uf ? t.blob.uf : t.blob[r + "uf"], this["$" + r + "_ct"] = t.blob.uf ? t.blob.ct : t.blob[r + "ct"], this["$" + r + "_sx"] = t.blob.uf ? t.blob.sl : t.blob[r + "sl"][0], this["$" + r + "_sy"] = t.blob.uf ? t.blob.sl : t.blob[r + "sl"][1];
        }
      }
      this._invalidatePath();
    }
    if (this._canHandleGeometryChangeForProperties(e, t, h.GeometryProperties) && e == o._Change.AfterPropertiesChange && !this.isRecordedTransaction()) {
      var s = [], l = [], A = t.properties, c = false;
      if (this._blockHandle && (c = true), !c) {
        if (this.$uf) {
          var p = null, u = null, d = false, g = false;
          for (require = 0; require < h.SIDES.length && (!d || !g); ++require) {
            n = h.SIDES[require], r = h.getGeometryPropertiesSidePrefix(n);
            if (!d) {
              var f = r + "_sx";
              if (A.indexOf(f) >= 0)
                p = this["$" + f], d = true;
              else {
                f = r + "_sy";
                A.indexOf(f) >= 0 && (p = this["$" + f], d = true);
              }
            }
            if (!g) {
              f = r + "_ct";
              A.indexOf(f) >= 0 && (u = this["$" + f], g = true);
            }
          }
          d || (p = this.getProperty("tl_sx")), g || (u = this.getProperty("tl_ct")), s.push("tl_uf", "tr_uf", "br_uf", "bl_uf"), l.push(true, true, true, true), s.push("tl_sx", "tl_sy", "tr_sx", "tr_sy", "br_sx", "br_sy", "bl_sx", "bl_sy"), l.push(p, p, p, p, p, p, p, p), s.push("tl_ct", "tr_ct", "br_ct", "bl_ct"), l.push(u, u, u, u);
        } else
          for (require = 0; require < h.SIDES.length; ++require) {
            n = h.SIDES[require], p = null, d = false;
            if (this["$" + (r = h.getGeometryPropertiesSidePrefix(n)) + "_uf"]) {
              f = r + "_sx";
              if (A.indexOf(f) >= 0)
                p = this["$" + f], d = true;
              else {
                f = r + "_sy";
                A.indexOf(f) >= 0 && (p = this["$" + f], d = true);
              }
              d || (p = this.getProperty(r + "_sx")), s.push(r + "_sx"), l.push(p), s.push(r + "_sy"), l.push(p);
            }
          }
        this._blockHandle = true, this.setProperties(s, l, false, false, t.temporary), this._invalidatePath(), this._handleGeometryChangeForProperties(e, t, h.GeometryProperties);
      }
      this._blockHandle = false;
    } else
      this._blockHandle || this._handleGeometryChangeForProperties(e, t, h.GeometryProperties);
    a.prototype._handleChange.call(this, e, t);
  }, h.prototype._calculateSourceBBox = function (e) {
    return new r(this._x, this._y, this._w, this._h);
  }, h.prototype._requireMiterLimitApproximation = function () {
    if (this.getTransform()) {
      var exports = this.getTransform().decomposed();
      return !exports.skew.isIdentity() || !exports.rotate.isIdentity();
    }
    return false;
  }, h.prototype.calculateMitterLimit = function (e) {
    var t = function (e, t, i) {
        if (e && t && i) {
          var n = Math.sqrt(Math.pow(i.getX() - e.getX(), 2) + Math.pow(i.getY() - e.getY(), 2)), r = Math.sqrt(Math.pow(i.getX() - t.getX(), 2) + Math.pow(i.getY() - t.getY(), 2)), o = Math.sqrt(Math.pow(t.getX() - e.getX(), 2) + Math.pow(t.getY() - e.getY(), 2));
          return Math.acos((r * r + n * n - o * o) / (2 * r * n));
        }
        return null;
      }, i = 0, n = [];
    this.iterateSegments(function (e, t, i) {
      n.push(e);
    }, true);
    for (var r = n.length - 1; r > 0; r -= 2) {
      var o = n[r], a = n[r - 1], s = t(o, n[r - 2 < 0 ? n.length - 1 : r - 2], a);
      "number" == typeof s && (i = Math.max(i, Math.abs(1 / Math.sin(s / 2))));
    }
    return Math.ceil(i);
  }, h.prototype._invalidatePath = function () {
    var e = this.getAnchorPoints();
    this.beginUpdate(), e._beginBlockCompositeEvents(true, true, true);
    try {
      e.clearChildren(), this.iterateSegments(function (t, i, n, r, o) {
        var s = new a.AnchorPoint();
        s.setProperties([
          "tp",
          "x",
          "y",
          "cl",
          "cr",
          "cu"
        ], [
          n,
          t.getX(),
          t.getY(),
          r,
          o,
          false
        ]), e.appendChild(s);
      }.bind(this));
    } finally {
      this.endUpdate(), e._endBlockCompositeEvents(true, true, true);
    }
  }, h.prototype.assignFrom = function (e) {
    e instanceof h && this.transferProperties(e, [h.GeometryProperties]), a.prototype.assignFrom.call(this, e);
  }, h.prototype._transformStyledCorners = function (e, t) {
    var i = 1, n = 1, r = t.decomposed().scale.getMatrix();
    if (this.getProperty("cu")) {
      var o = Math.abs(r[0] * r[3]);
      s.isEqualEps(o, 1) || (i = n = Math.sqrt(o));
    } else {
      o = Math.abs(r[0] * r[3]);
      s.isEqualEps(o, 1) || (i = n = Math.sqrt(o));
    }
    if (!s.isEqualEps(i, 1) || !s.isEqualEps(n, 1)) {
      for (var a = [], l = [], A = 0; A < h.SIDES.length; ++A) {
        var c = h.SIDES[A], p = h.getGeometryPropertiesSidePrefix(c), u = p + "_sx";
        a.push(u), l.push(this.getProperty(u) * i), u = p + "_sy", a.push(u), l.push(this.getProperty(u) * n);
      }
      e.setProperties(a, l);
    }
  }, h.prototype.transferStyledCorners = function (e) {
    e instanceof h && e.transferProperties(this, [h.GeometryProperties]);
  }, h.prototype.toString = function () {
    return "[GRectangle]";
  }, exports.exports = h;
}
