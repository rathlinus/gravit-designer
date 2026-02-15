/**
 * Module 45 - GPathBase
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
  var n = require(59) /* GVertexInfo */, r = require(2) /* GNode */, o = require(75) /* GEventTarget */, a = require(0) /* GObject */, s = require(11) /* GUtil */, l = require(56) /* GShape */, h = require(112) /* module */, A = require(229) /* GHitResult */, c = require(5) /* GPoint */, p = require(48) /* GVertex */, u = require(104) /* GItem */, d = require(54) /* GVertexContainer */, g = require(22) /* GElement */, f = require(12) /* GMath */, m = require(76) /* module */;
  function y(e, t) {
    l.call(this), this._setDefaultProperties(y.VisualProperties, y.MetaProperties), e && (this.$evenodd = e), this.setAnchorPoints(t || new y.AnchorPoints()), this._vertices = new d(), this._verticesDirty = true;
  }
  a.inherit(y, l), y.defaultEps = 1e-9, y.GeometryProperties = {}, y.MetaProperties = { csc: true }, y.CornerType = {
    Rounded: "R",
    InverseRounded: "U",
    Bevel: "B",
    Inset: "I",
    Fancy: "F"
  }, y.isCornerType = function (e) {
    for (var module in y.CornerType)
      if (y.CornerType[module] === e)
        return true;
    return false;
  }, y.VisualProperties = { evenodd: false }, y.AnchorPoint = function () {
    this.$tp = "R", this.$x = 0, this.$y = 0, this.$hlx = null, this.$hly = null, this.$hrx = null, this.$hry = null, this.$ah = false, this.$cu = true, this.$cl = 0, this.$cr = 0;
  }, r.inheritAndMix("anchorPoint", y.AnchorPoint, r, [
    r.Properties,
    r.Multireference,
    r.Reference,
    o,
    r.Identity,
    r.Store
  ]), y.AnchorPoint.Type = {
    Asymmetric: "TA",
    Symmetric: "TS",
    Mirror: "TM",
    Connector: "TC"
  }, y.AnchorPoint.GeometryProperties = {
    tp: y.CornerType.Rounded,
    x: 0,
    y: 0,
    hlx: null,
    hly: null,
    hrx: null,
    hry: null,
    ah: false,
    cu: true,
    cl: 0,
    cr: 0
  }, y.AnchorPoint.BEST_CIRCLE_COEFF = 0.55191502, y.AnchorPoint.HANDLE_COEFF = 0.39026286, y.AnchorPoint._invalidating = false, y.AnchorPoint.prototype._leadHr = false, y.AnchorPoint.prototype.validateInsertion = function (e, t) {
    return e instanceof y.AnchorPoints;
  }, y.AnchorPoint.prototype.clone = function () {
    var e = this.serialize(), t = new y.AnchorPoint();
    return t.deserialize(e), t;
  }, y.AnchorPoint.prototype.serialize = function () {
    var e = [];
    return null !== this.$tp && this.$tp !== y.AnchorPoint.GeometryProperties.tp && e.push(this.$tp), this.$ah && this.$ah !== y.AnchorPoint.GeometryProperties.ah && e.push(this.$ah), e.push(s.packPoint(this.$x, this.$y)), this._multiReferenceId && (e.push("&"), e.push(this._multiReferenceId)), this._referenceId && (e.push("#"), e.push(this._referenceId)), this.$ah || (null === this.$hlx && null === this.$hly || (e.push("h"), e.push(s.packPoint(this.$hlx, this.$hly))), null === this.$hrx && null === this.$hry || (e.push("H"), e.push(s.packPoint(this.$hrx, this.$hry)))), (null !== this.$cl && !f.isEqualEps(this.$cl, y.AnchorPoint.GeometryProperties.cl) || null !== this.$cr && !f.isEqualEps(this.$cr, y.AnchorPoint.GeometryProperties.cr)) && (e.push("C"), e.push(s.packPoint(this.$cl, this.$cr))), e;
  }, y.AnchorPoint.prototype.deserialize = function (e) {
    var t = 0, i = false;
    if (e.length > 0 && "string" == typeof e[0] && (1 === e[0].length || 2 === e[0].length) && (this.$tp = e[0], t++), e.length > t && "boolean" == typeof e[t] && (this.$ah = e[t], t++), t < e.length && "string" == typeof e[t]) {
      var n = s.unpackPoint(e[t]);
      this.$x = n[0], this.$y = n[1], i = true, t++;
    } else
      t + 1 < e.length && (this.$x = e[t], this.$y = e[t + 1], t += 2);
    if (t < e.length && "&" === e[t] && (this._multiReferenceId = e[t + 1], t += 2), t < e.length && "#" === e[t] && (this._referenceId = e[t + 1], t += 2), i)
      for (; t + 1 < e.length;) {
        if ("h" === e[t]) {
          n = s.unpackPoint(e[t + 1]);
          this.$hlx = n[0], this.$hly = n[1];
        } else if ("H" === e[t]) {
          n = s.unpackPoint(e[t + 1]);
          this.$hrx = n[0], this.$hry = n[1];
        } else if ("C" === e[t]) {
          n = s.unpackPoint(e[t + 1]);
          this.$cl = n[0], this.$cr = n[1];
        }
        t += 2;
      }
    else
      for (; t + 2 < e.length;)
        "h" === e[t] ? (this.$hlx = e[t + 1], this.$hly = e[t + 2]) : "H" === e[t] ? (this.$hrx = e[t + 1], this.$hry = e[t + 2]) : "C" === e[t] && (this.$cl = e[t + 1], this.$cr = e[t + 2]), t += 3;
  }, y.AnchorPoint.prototype._getTransformedCopy = function (e) {
    var t = new y.AnchorPoint(), i = null !== this.$hlx ? e.mapPoint(new c(this.$hlx, this.$hly)) : null, n = null !== this.$hrx ? e.mapPoint(new c(this.$hrx, this.$hry)) : null, r = e.mapPoint(new c(this.$x, this.$y));
    return t.$x = r.getX(), t.$y = r.getY(), t.$hlx = i ? i.getX() : null, t.$hly = i ? i.getY() : null, t.$hrx = n ? n.getX() : null, t.$hry = n ? n.getY() : null, t.$cl = this.$cl, t.$cr = this.$cr, t.$ah = this.$ah, t.$tp = this.$tp, t;
  }, y.AnchorPoint.prototype.getLeftShoulderPoint = function (e) {
    if (this.getPath() && this.$cl && (e || this.$cr)) {
      var module = this._parent.getPreviousPoint(this);
      return this._parent._getLeftShoulderPoint(this, module);
    }
    return null;
  }, y.AnchorPoint.prototype.getLeftShoulderPointTransformed = function (e, t) {
    var i = null;
    if (this.getPath() && this.$cl && (t || this.$cr)) {
      var n = this._parent.getPreviousPoint(this), r = this._getTransformedCopy(e), o = n._getTransformedCopy(e);
      i = this._parent._getLeftShoulderPoint(r, o);
    }
    return i;
  }, y.AnchorPoint.prototype.getRightShoulderPoint = function (e) {
    if (this.getPath() && this.$cr && (e || this.$cl)) {
      var module = this._parent.getNextPoint(this);
      return this._parent._getRightShoulderPoint(this, module);
    }
    return null;
  }, y.AnchorPoint.prototype.getRightShoulderPointTransformed = function (e, t) {
    var i = null;
    if (this.getPath() && this.$cr && (t || this.$cl)) {
      var n = this._parent.getNextPoint(this), r = this._getTransformedCopy(e), o = n._getTransformedCopy(e);
      i = this._parent._getRightShoulderPoint(r, o);
    }
    return i;
  }, y.AnchorPoint.prototype.getLeftShoulderLimitPoint = function (e, t) {
    var i = null;
    if (this.getPath()) {
      var n = this._parent.getPreviousPoint(this);
      if (n) {
        var r = this;
        e && (r = r._getTransformedCopy(e), n = n._getTransformedCopy(e)), i = this._parent._getLeftShoulderPoint(r, n, true, t);
      }
    }
    return i;
  }, y.AnchorPoint.prototype.getRightShoulderLimitPoint = function (e, t) {
    var i = null;
    if (this.getPath()) {
      var n = this._parent.getNextPoint(this);
      if (n) {
        var r = this;
        e && (r = r._getTransformedCopy(e), n = n._getTransformedCopy(e)), i = this._parent._getRightShoulderPoint(r, n, true, t);
      }
    }
    return i;
  }, y.AnchorPoint.prototype.flip = function () {
    this.setProperties([
      "hlx",
      "hly",
      "hrx",
      "hry",
      "cl",
      "cr"
    ], [
      this.$hrx,
      this.$hry,
      this.$hlx,
      this.$hly,
      this.$cr,
      this.$cl
    ]);
  }, y.AnchorPoint.prototype._handleChange = function (e, t) {
    var i = this.getPath();
    if (e == r._Change.Store)
      t.blob.stream = this.serialize();
    else if (e == r._Change.Restore)
      this.deserialize(t.blob.stream);
    else if ((e == r._Change.BeforePropertiesChange || e == r._Change.AfterPropertiesChange) && s.containsObjectKey(t.properties, y.AnchorPoint.GeometryProperties))
      if (e === r._Change.BeforePropertiesChange) {
        var n = t.properties.indexOf("cu");
        if (n >= 0 ? t.values[n] : this.$cu) {
          var o = t.properties.indexOf("cl"), a = t.properties.indexOf("cr");
          if (o >= 0) {
            var l = t.values[o];
            this.$cr != l && (a >= 0 ? t.values[a] = l : (t.properties.push("cr"), t.values.push(l)));
          } else if (a >= 0) {
            l = t.values[a];
            this.$cl != l && (t.properties.push("cl"), t.values.push(l));
          }
        }
        for (var h = [
              "x",
              "y",
              "hlx",
              "hly",
              "hrx",
              "hry"
            ], A = 0; A < h.length; ++A) {
          var c = t.properties.indexOf(h[A]);
          if (c >= 0) {
            var p = t.values[c];
            p != 1 / 0 && p != -1 / 0 && (null != p || 0 != A && 1 != A) && null != p && p == p || (t.values[c] = 0 == A || 1 == A ? 0 : null);
          }
        }
        i && i._notifyChange(g._Change.PrepareGeometryUpdate);
      } else if (e === r._Change.AfterPropertiesChange && ((this.$tp != y.AnchorPoint.Type.Symmetric || this.$ah || null == this.$hlx || null == this.$hrx) && (this.$tp != y.AnchorPoint.Type.Mirror || this.$ah || null == this.$hlx && null == this.$hrx) || ((t.properties.indexOf("hrx") >= 0 || t.properties.indexOf("hry") >= 0) && t.properties.indexOf("hlx") < 0 && t.properties.indexOf("hly") < 0 || t.properties.indexOf("tp") >= 0 && t.properties.indexOf("hlx") < 0 && t.properties.indexOf("hly") < 0 && null != this.$hrx ? this._leadHr = true : this._leadHr = false), (!i || i instanceof g && i.isRecordedTransaction()) && (i || (this.$tp != y.AnchorPoint.Type.Symmetric || this.$ah || null == this.$hlx || null == this.$hrx) && (this.$tp != y.AnchorPoint.Type.Mirror || this.$ah || null == this.$hlx && null == this.$hrx)) || this._invalidateCalculations(), i)) {
        if (this._parent && (!(i instanceof g) || !i.isRecordedTransaction()))
          if (t.properties.indexOf("x") >= 0 || t.properties.indexOf("y") >= 0)
            this._parent._invalidateLeft(this._parent.getPreviousPoint(this)), this._parent._invalidateRight(this._parent.getNextPoint(this));
          else if (t.properties.indexOf("tp") >= 0) {
            var u = this._parent.getPreviousPoint(this);
            u && (u.$ah || u.$tp == y.AnchorPoint.Type.Connector) && u._invalidateCalculations();
            var d = this._parent.getNextPoint(this);
            d && (d.$ah || d.$tp == y.AnchorPoint.Type.Connector) && d._invalidateCalculations();
          }
        i._verticesDirty = true, i._resetFxCacheAndState(), i._notifyChange(g._Change.FinishGeometryUpdate);
      }
    r.prototype._handleChange.call(this, e, t);
  }, y.AnchorPoint.prototype.getPath = function () {
    return this._parent ? this._parent._parent : null;
  }, y.AnchorPoint.prototype._invalidateCalculations = function () {
    if (!this._invalidating) {
      this._invalidating = true;
      var exports = this._parent;
      exports && this.$tp == y.AnchorPoint.Type.Connector ? this._calculateConnectorPoint() : this.$tp != y.AnchorPoint.Type.Symmetric || this.$ah ? this.$tp != y.AnchorPoint.Type.Mirror || this.$ah ? exports && this.$ah && this._calculateAutoHandles() : this._calculateMirrorPoint() : this._calculateSmoothPoint(), this._invalidating = false;
    }
  }, y.AnchorPoint.prototype._calculateConnectorPoint = function () {
    var e = this._parent;
    if (e) {
      var module, require, n, r = e.getPreviousPoint(this), o = e.getNextPoint(this), a = 0, s = 0;
      o && (s = Math.sqrt(f.ptSqrDist(this.$x, this.$y, o.$x, o.$y))), r && (a = Math.sqrt(f.ptSqrDist(this.$x, this.$y, r.$x, r.$y))), this.$ah ? (!o || !r || o.$tp != y.AnchorPoint.Type.Symmetric && o.$tp != y.AnchorPoint.Type.Mirror || f.isEqualEps(s, 0) || f.isEqualEps(a, 0) ? this.setProperties([
        "hrx",
        "hry"
      ], [
        null,
        null
      ]) : (module = s * y.AnchorPoint.HANDLE_COEFF, require = this.$x + (this.$x - r.$x) / a * module, n = this.$y + (this.$y - r.$y) / a * module, f.isEqualEps(this.$hrx, require, y.defaultEps) && f.isEqualEps(this.$hry, n, y.defaultEps) || this.setProperties([
        "hrx",
        "hry"
      ], [
        require,
        n
      ])), !r || !o || r.$tp != y.AnchorPoint.Type.Symmetric && r.$tp != y.AnchorPoint.Type.Mirror || f.isEqualEps(s, 0) || f.isEqualEps(a, 0) ? this.setProperties([
        "hlx",
        "hly"
      ], [
        null,
        null
      ]) : (module = a * y.AnchorPoint.HANDLE_COEFF, require = this.$x + (this.$x - o.$x) / s * module, n = this.$y + (this.$y - o.$y) / s * module, f.isEqualEps(this.$hlx, require, y.defaultEps) && f.isEqualEps(this.$hly, n, y.defaultEps) || this.setProperties([
        "hlx",
        "hly"
      ], [
        require,
        n
      ]))) : (null != this.$hlx && o && !f.isEqualEps(s, 0) && (module = Math.sqrt(f.ptSqrDist(this.$x, this.$y, this.$hlx, this.$hly)), require = this.$x + (this.$x - o.$x) / s * module, n = this.$y + (this.$y - o.$y) / s * module, f.isEqualEps(this.$hlx, require, y.defaultEps) && f.isEqualEps(this.$hly, n, y.defaultEps) || this.setProperties([
        "hlx",
        "hly"
      ], [
        require,
        n
      ])), null != this.$hrx && r && !f.isEqualEps(a, 0) && (module = Math.sqrt(f.ptSqrDist(this.$x, this.$y, this.$hrx, this.$hry)), require = this.$x + (this.$x - r.$x) / a * module, n = this.$y + (this.$y - r.$y) / a * module, f.isEqualEps(this.$hrx, require, y.defaultEps) && f.isEqualEps(this.$hry, n, y.defaultEps) || this.setProperties([
        "hrx",
        "hry"
      ], [
        require,
        n
      ])));
    }
  }, y.AnchorPoint.prototype._calculateSmoothPoint = function () {
    var e, t, i, n;
    null != this.$hlx && null != this.$hrx && (this._leadHr ? (t = Math.sqrt(f.ptSqrDist(this.$x, this.$y, this.$hrx, this.$hry)), f.isEqualEps(t, 0, y.defaultEps) || (e = Math.sqrt(f.ptSqrDist(this.$x, this.$y, this.$hlx, this.$hly)), i = this.$x + (this.$x - this.$hrx) / t * e, n = this.$y + (this.$y - this.$hry) / t * e, f.isEqualEps(this.$hlx, i, y.defaultEps) && f.isEqualEps(this.$hly, n, y.defaultEps) || this.setProperties([
      "hlx",
      "hly"
    ], [
      i,
      n
    ]))) : (t = Math.sqrt(f.ptSqrDist(this.$x, this.$y, this.$hlx, this.$hly)), f.isEqualEps(t, 0, y.defaultEps) || (e = Math.sqrt(f.ptSqrDist(this.$x, this.$y, this.$hrx, this.$hry)), i = this.$x + (this.$x - this.$hlx) / t * e, n = this.$y + (this.$y - this.$hly) / t * e, f.isEqualEps(this.$hrx, i, y.defaultEps) && f.isEqualEps(this.$hry, n, y.defaultEps) || this.setProperties([
      "hrx",
      "hry"
    ], [
      i,
      n
    ]))));
  }, y.AnchorPoint.prototype._calculateMirrorPoint = function () {
    if (this._leadHr && null != this.$hrx) {
      var exports = this.$x + (this.$x - this.$hrx), module = this.$y + (this.$y - this.$hry);
      f.isEqualEps(this.$hlx, exports, y.defaultEps) && f.isEqualEps(this.$hly, module, y.defaultEps) || this.setProperties([
        "hlx",
        "hly"
      ], [
        exports,
        module
      ]);
    } else if (!this._leadHr && null != this.$hlx) {
      exports = this.$x + (this.$x - this.$hlx), module = this.$y + (this.$y - this.$hly);
      f.isEqualEps(this.$hrx, exports, y.defaultEps) && f.isEqualEps(this.$hry, module, y.defaultEps) || this.setProperties([
        "hrx",
        "hry"
      ], [
        exports,
        module
      ]);
    }
  }, y.AnchorPoint.prototype._calculateAutoHandles = function () {
    var e = this._parent;
    if (e) {
      var module, require, n, r, o, a, s, l = e.getPreviousPoint(this), h = e.getNextPoint(this), A = y.AnchorPoint.HANDLE_COEFF, c = null, p = null, u = null, d = null;
      if (this.$tp == y.AnchorPoint.Type.Symmetric || this.$tp == y.AnchorPoint.Type.Mirror) {
        if (!h && !l)
          return;
        if (h && !l || h && this.$x == l.$x && this.$y == l.$y)
          u = this.$x + (h.$x - this.$x) * A, d = this.$y + (h.$y - this.$y) * A, c = this.$x + this.$x - u, p = this.$y + this.$y - d;
        else if (l && !h || l && this.$x == h.$x && this.$y == h.$y)
          c = this.$x + (l.$x - this.$x) * A, p = this.$y + (l.$y - this.$y) * A, u = this.$x + this.$x - c, d = this.$y + this.$y - p;
        else if (l && h)
          if (null == (n = f.getCircumcircleCenter(l.$x, l.$y, this.$x, this.$y, h.$x, h.$y)))
            r = (this.$y - l.$y) * A, o = (l.$x - this.$x) * A, c = this.$x - r, p = this.$y - o, u = this.$x + r, d = this.$y + o;
          else {
            module = Math.sqrt(f.ptSqrDist(this.$x, this.$y, n.getX(), n.getY())), r = (this.$y - n.getY()) / module, o = (n.getX() - this.$x) / module, a = (l.$x + h.$x) / 2, s = (l.$y + h.$y) / 2, f.segmentSide(this.$x, this.$y, a, s, l.$x, l.$y) != f.segmentSide(this.$x, this.$y, a, s, this.$x - r, this.$y - o) && (r = -r, o = -o);
            var g = f.ptDist(this.$x, this.$y, n.getX(), n.getY()), m = f.ptDist(this.$x, this.$y, l.$x, l.$y) / g, _ = 2 * Math.asin(m / 2);
            require = Math.sqrt(f.ptSqrDist(this.$x, this.$y, l.$x, l.$y)) / m * _ / f.PIHALF * y.AnchorPoint.BEST_CIRCLE_COEFF, c = this.$x - r * require, p = this.$y - o * require, m = f.ptDist(this.$x, this.$y, h.$x, h.$y) / g, _ = 2 * Math.asin(m / 2), require = Math.sqrt(f.ptSqrDist(this.$x, this.$y, h.$x, h.$y)) / m * _ / f.PIHALF * y.AnchorPoint.BEST_CIRCLE_COEFF, u = this.$x + r * require, d = this.$y + o * require;
          }
        f.isEqualEps(this.$hlx, c, y.defaultEps) && f.isEqualEps(this.$hly, p, y.defaultEps) && f.isEqualEps(this.$hrx, u, y.defaultEps) && f.isEqualEps(this.$hry, d, y.defaultEps) || this.setProperties([
          "hlx",
          "hly",
          "hrx",
          "hry"
        ], [
          c,
          p,
          u,
          d
        ]);
      } else {
        if (l && (l.$x != this.$x || l.$y != this.$y))
          if (l.$tp == y.AnchorPoint.Type.Symmetric || l.$tp == y.AnchorPoint.Type.Mirror) {
            var v = e.getPreviousPoint(l);
            if (!v || l.$x == v.$x && l.$y == v.$y)
              c = this.$x + (l.$x - this.$x) * A, p = this.$y + (l.$y - this.$y) * A;
            else if (null == (n = f.getCircumcircleCenter(this.$x, this.$y, l.$x, l.$y, v.$x, v.$y)))
              r = (this.$y - l.$y) * A, o = (l.$x - this.$x) * A, c = this.$x - r, p = this.$y - o;
            else {
              module = Math.sqrt(f.ptSqrDist(this.$x, this.$y, n.getX(), n.getY())), r = (this.$y - n.getY()) / module, o = (n.getX() - this.$x) / module, a = (l.$x + v.$x) / 2, s = (l.$y + v.$y) / 2, f.segmentSide(this.$x, this.$y, a, s, l.$x, l.$y) != f.segmentSide(this.$x, this.$y, a, s, this.$x - r, this.$y - o) && (r = -r, o = -o);
              g = f.ptDist(this.$x, this.$y, n.getX(), n.getY()), m = f.ptDist(this.$x, this.$y, l.$x, l.$y) / g, _ = 2 * Math.asin(m / 2);
              require = Math.sqrt(f.ptSqrDist(this.$x, this.$y, l.$x, l.$y)) / m * _ / f.PIHALF * y.AnchorPoint.BEST_CIRCLE_COEFF, c = this.$x - r * require, p = this.$y - o * require;
            }
            f.isEqualEps(this.$hlx, c, y.defaultEps) && f.isEqualEps(this.$hly, p, y.defaultEps) || this.setProperties([
              "hlx",
              "hly"
            ], [
              c,
              p
            ]);
          } else
            this.setProperties([
              "hlx",
              "hly"
            ], [
              null,
              null
            ]);
        if (h && (h.$x != this.$x || h.$y != this.$y))
          if (h.$tp == y.AnchorPoint.Type.Symmetric || h.$tp == y.AnchorPoint.Type.Mirror) {
            var b = e.getNextPoint(h);
            if (!b || h.$x == b.$x && h.$y == b.$y)
              u = this.$x + (h.$x - this.$x) * A, d = this.$y + (h.$y - this.$y) * A;
            else if (null == (n = f.getCircumcircleCenter(this.$x, this.$y, h.$x, h.$y, b.$x, b.$y)))
              r = (this.$y - h.$y) * A, o = (h.$x - this.$x) * A, u = this.$x - r, d = this.$y - o;
            else {
              module = Math.sqrt(f.ptSqrDist(this.$x, this.$y, n.getX(), n.getY())), r = (this.$y - n.getY()) / module, o = (n.getX() - this.$x) / module, a = (h.$x + b.$x) / 2, s = (h.$y + b.$y) / 2, f.segmentSide(this.$x, this.$y, a, s, h.$x, h.$y) != f.segmentSide(this.$x, this.$y, a, s, this.$x + r, this.$y + o) && (r = -r, o = -o);
              g = f.ptDist(this.$x, this.$y, n.getX(), n.getY()), m = f.ptDist(this.$x, this.$y, h.$x, h.$y) / g, _ = 2 * Math.asin(m / 2);
              require = Math.sqrt(f.ptSqrDist(this.$x, this.$y, h.$x, h.$y)) / m * _ / f.PIHALF * y.AnchorPoint.BEST_CIRCLE_COEFF, u = this.$x + r * require, d = this.$y + o * require;
            }
            f.isEqualEps(this.$hrx, u, y.defaultEps) && f.isEqualEps(this.$hry, d, y.defaultEps) || this.setProperties([
              "hrx",
              "hry"
            ], [
              u,
              d
            ]);
          } else
            this.setProperties([
              "hrx",
              "hry"
            ], [
              null,
              null
            ]);
      }
    }
  }, y.AnchorPoint.prototype.toString = function () {
    return "[Object GPathBase.AnchorPoint]";
  }, y.AnchorPoints = function () {
  }, a.inheritAndMix(y.AnchorPoints, r, [
    r.Container,
    r.Multireference
  ]), y.AnchorPoints.prototype._dirtyPrev = null, y.AnchorPoints.prototype._dirtyNext = null, y.AnchorPoints.prototype._sketchPath = false, y.AnchorPoints.prototype.validateInsertion = function (e, t) {
    return e instanceof y;
  }, y.AnchorPoints.prototype.validateRemoval = function () {
    return false;
  }, y.AnchorPoints.prototype.serialize = function (e) {
    var t, i = e && !e.isIdentity() ? e : null;
    if (t = this._multiReferenceId ? [
        "&",
        this._multiReferenceId
      ] : [], this._sketchPath && t.push(3735932941), i)
      for (var n = this.getFirstChild(); null !== n; n = n.getNext())
        t.push(n._getTransformedCopy(i).serialize());
    else
      for (n = this.getFirstChild(); null !== n; n = n.getNext())
        t.push(n.serialize());
    return t;
  }, y.AnchorPoints.prototype.deserialize = function (e) {
    var t;
    for ("&" === e[0] ? (t = 2, this._multiReferenceId = e[1]) : t = 0, 3735932941 === e[t] && (this._sketchPath = true, t++), this.getParent() && (this.getParent().beginUpdate(), this._beginBlockCompositeEvents(true, true, true)); t < e.length;) {
      var require = new y.AnchorPoint();
      require.deserialize(e[t++]), this.appendChild(require);
    }
    this.getParent() && (this._endBlockCompositeEvents(true, true, true), this.getParent().endUpdate());
  }, y.AnchorPoints.prototype.clone = function () {
    var e = new y.AnchorPoints();
    return e.deserialize(this.serialize()), e;
  }, y.AnchorPoints.prototype._invalidateLeft = function (e) {
    if (e && ((e.$ah || e.$tp == y.AnchorPoint.Type.Connector) && e._invalidateCalculations(), e.$tp == y.AnchorPoint.Type.Symmetric || e.$tp == y.AnchorPoint.Type.Mirror)) {
      var module = this.getPreviousPoint(e);
      module && module.$ah && module._invalidateCalculations();
    }
  }, y.AnchorPoints.prototype._invalidateRight = function (e) {
    if (e && ((e.$ah || e.$tp == y.AnchorPoint.Type.Connector) && e._invalidateCalculations(), e.$tp == y.AnchorPoint.Type.Symmetric || e.$tp == y.AnchorPoint.Type.Mirror)) {
      var module = this.getNextPoint(e);
      module && module.$ah && module._invalidateCalculations();
    }
  }, y.AnchorPoints.prototype._generateVertices = function (e, t, i) {
    var n, r, o, a;
    if (a = this.getFirstChild()) {
      var s, l = this._parent;
      if (i && a.$tp != y.AnchorPoint.Type.Asymmetric && a.$tp != y.AnchorPoint.Type.Connector && a.$tp != y.AnchorPoint.Type.Symmetric && a.$tp != y.AnchorPoint.Type.Mirror && l && l.$closed && a != this.getLastChild() ? (r = (n = this._getPathStartPt(t)).getX(), o = n.getY()) : (r = (s = t ? a._getTransformedCopy(t) : a).$x, o = s.$y), e.addVertex(p.Command.Move, r, o), a != this.getLastChild()) {
        var h, A, c = a, u = a = a.getNext(), d = false, g = this.getNextPoint(a);
        for (t && (s = a._getTransformedCopy(t), h = c._getTransformedCopy(t)); g && (a != u || !d);)
          d = true, t ? (A = g._getTransformedCopy(t), this._addMiddleVertices(e, s, h, A, i), h = s, s = A) : this._addMiddleVertices(e, a, c, g, i), c = a, a = g, g = this.getNextPoint(g);
        g ? e.addVertex(p.Command.Close, 0, 0) : this._addPathEndVertices(e, t);
      }
    }
  }, y.AnchorPoints.prototype._getPathStartPt = function (e) {
    var t = this.getFirstChild(), i = this.getPreviousPoint(t), n = this.getNextPoint(t);
    return e && (t = t._getTransformedCopy(e), n = n._getTransformedCopy(e), i = i._getTransformedCopy(e)), t.$cl && t.$cr && t.$tp != y.AnchorPoint.Type.Asymmetric && t.$tp != y.AnchorPoint.Type.Connector && t.$tp != y.AnchorPoint.Type.Symmetric && t.$tp != y.AnchorPoint.Type.Mirror && i && (i.$tp != y.AnchorPoint.Type.Connector || i.$x != t.$x || i.$y != t.$y) ? this._getRightShoulderPoint(t, n) : new c(t.$x, t.$y);
  }, y.AnchorPoints.prototype._getShoulderPoint = function (e, t, i, n, r, o) {
    var a, s, l = f.ptDist(e, t, n, r), h = (s = null == i || i <= 0 ? 0 : i) + (null == o || o <= 0 ? 0 : o);
    return h <= 0 ? null : (a = l >= h ? s : l * s / h, f.getPointAtLength(e, t, n, r, a, this._sketchPath));
  }, y.AnchorPoints.prototype._getRightShoulderPoint = function (e, t, i, n) {
    var r, o = null, a = null;
    if (null != e.$hrx ? (o = e.$hrx, a = e.$hry) : null != t.$hlx && (o = t.$hlx, a = t.$hly), null != o)
      r = i ? new c(o, a) : f.getPointAtLength(e.$x, e.$y, o, a, e.$cr, this._sketchPath);
    else if (i) {
      r = new c(t.$x, t.$y);
      var s = f.ptDist(e.$x, e.$y, t.$x, t.$y);
      r = this._getShoulderPoint(e.$x, e.$y, s, t.$x, t.$y, n ? s : t.$cl);
    } else
      r = this._getShoulderPoint(e.$x, e.$y, e.$cr, t.$x, t.$y, t.$cl);
    return r;
  }, y.AnchorPoints.prototype._getLeftShoulderPoint = function (e, t, i, n) {
    var r, o = null, a = null;
    if (null != e.$hlx ? (o = e.$hlx, a = e.$hly) : null != t.$hrx && (o = t.$hrx, a = t.$hry), null != o)
      r = i ? new c(o, a) : f.getPointAtLength(e.$x, e.$y, o, a, e.$cl, this._sketchPath);
    else if (i) {
      var s = f.ptDist(e.$x, e.$y, t.$x, t.$y);
      r = this._getShoulderPoint(e.$x, e.$y, s, t.$x, t.$y, n ? s : t.$cr);
    } else
      r = this._getShoulderPoint(e.$x, e.$y, e.$cl, t.$x, t.$y, t.$cr);
    return r;
  }, y.AnchorPoints.prototype._addMiddleVertices = function (e, t, i, n, r) {
    var o, a, s = null, l = null, h = null, A = null;
    null != t.$hlx && null != t.$hly && null != i.$hrx && null != i.$hry ? (h = i.$hrx, A = i.$hry, s = t.$hlx, l = t.$hly) : null != t.$hlx && null != t.$hly ? (h = t.$hlx, A = t.$hly) : null != i.$hrx && null != i.$hry && (h = i.$hrx, A = i.$hry), r && t.$tp != y.AnchorPoint.Type.Asymmetric && t.$tp != y.AnchorPoint.Type.Connector && t.$tp != y.AnchorPoint.Type.Symmetric && t.$tp != y.AnchorPoint.Type.Mirror && t.$cl && t.$cr ? (null == h ? (o = this._getShoulderPoint(t.$x, t.$y, t.$cl, i.$x, i.$y, i.$cr), e.addVertex(p.Command.Line, o.getX(), o.getY())) : null == s ? (o = f.getPointAtLength(t.$x, t.$y, h, A, t.$cl, this._sketchPath), e.addVertex(p.Command.Curve, o.getX(), o.getY()), e.addVertex(p.Command.Curve, h, A)) : (o = f.getPointAtLength(t.$x, t.$y, s, l, t.$cl, this._sketchPath), e.addVertex(p.Command.Curve2, o.getX(), o.getY()), e.addVertex(p.Command.Curve2, h, A), e.addVertex(p.Command.Curve2, s, l)), a = this._getRightShoulderPoint(t, n), this._addCornerToVertices(e, o.getX(), o.getY(), a.getX(), a.getY(), t.$x, t.$y, t.$tp)) : null == h ? e.addVertex(p.Command.Line, t.$x, t.$y) : null == s ? (e.addVertex(p.Command.Curve, t.$x, t.$y), e.addVertex(p.Command.Curve, h, A)) : (e.addVertex(p.Command.Curve2, t.$x, t.$y), e.addVertex(p.Command.Curve2, h, A), e.addVertex(p.Command.Curve2, s, l));
  }, y.AnchorPoints.prototype._addCornerToVertices = function (e, t, i, n, r, o, a, s) {
    var l, h, A, c, u, d, g, f, m, _;
    t != n || i != r ? t == o && i == a || n == o && r == a ? e.addVertex(p.Command.Line, n, r) : s == y.CornerType.Rounded || s == y.CornerType.InverseRounded ? t == n && t == o || i == r && i == a ? (e.addVertex(p.Command.Curve, n, r), e.addVertex(p.Command.Curve, o, a)) : (s == y.CornerType.Rounded ? (m = o, _ = a) : (m = t + n - o, _ = i + r - a), e.addVertex(p.Command.Curve2, n, r), e.addVertex(p.Command.Curve2, t + (m - t) * y.AnchorPoint.BEST_CIRCLE_COEFF, i + (_ - i) * y.AnchorPoint.BEST_CIRCLE_COEFF), e.addVertex(p.Command.Curve2, n + (m - n) * y.AnchorPoint.BEST_CIRCLE_COEFF, r + (_ - r) * y.AnchorPoint.BEST_CIRCLE_COEFF)) : s == y.CornerType.Fancy ? (u = (o - t) / 3, d = (a - i) / 3, l = t + 2 * (A = (n - o) / 3), h = i + 2 * (c = (r - a) / 3), e.addVertex(p.Command.Line, l, h), l += 2 * u, h += 2 * d, e.addVertex(p.Command.Line, l, h), l -= A, h -= c, e.addVertex(p.Command.Line, l, h), l -= u, h -= d, e.addVertex(p.Command.Line, l, h), l += 2 * A, h += 2 * c, e.addVertex(p.Command.Line, l, h), l += 2 * u, h += 2 * d, e.addVertex(p.Command.Line, l, h)) : s == y.CornerType.Bevel ? e.addVertex(p.Command.Line, n, r) : s == y.CornerType.Inset ? (g = t + n - o, f = i + r - a, e.addVertex(p.Command.Line, g, f), e.addVertex(p.Command.Line, n, r)) : (e.addVertex(p.Command.Line, o, a), e.addVertex(p.Command.Line, n, r)) : o == t && a == i || (e.addVertex(p.Command.Line, o, a), e.addVertex(p.Command.Line, n, r));
  }, y.AnchorPoints.prototype._addPathEndVertices = function (e, t) {
    var i, n, r = this.getLastChild(), o = r.getPrevious();
    t && (r = r._getTransformedCopy(t), o = o._getTransformedCopy(t)), null != r.$hlx && null != r.$hly && null != o.$hrx && null != o.$hry ? (e.addVertex(p.Command.Curve2, r.$x, r.$y), e.addVertex(p.Command.Curve2, o.$hrx, o.$hry), e.addVertex(p.Command.Curve2, r.$hlx, r.$hly)) : null != r.$hlx && null != r.$hly || null != o.$hrx && null != o.$hry ? (null != r.$hlx && null != r.$hly ? (i = r.$hlx, n = r.$hly) : (i = o.$hrx, n = o.$hry), e.addVertex(p.Command.Curve, r.$x, r.$y), e.addVertex(p.Command.Curve, i, n)) : e.addVertex(p.Command.Line, r.$x, r.$y);
  }, y.AnchorPoints.prototype._handleChange = function (e, t) {
    var i = this._parent;
    if (i) {
      var n, o, a, s, l = t;
      e == r._Change.BeforeChildInsert ? this.getParent() && this.getParent().beginUpdate() : e == r._Change.AfterChildInsert ? ((n = this.getPreviousPoint(l)) && null != n.$hrx && l.$tp == y.AnchorPoint.Type.Connector && (a = l.$x + (n.$x - l.$x) * y.AnchorPoint.HANDLE_COEFF, s = l.$y + (n.$y - l.$y) * y.AnchorPoint.HANDLE_COEFF, f.isEqualEps(l.$x - a, 0, y.defaultEps) && f.isEqualEps(l.$y - s, 0, y.defaultEps) || l.setProperties([
        "hlx",
        "hly"
      ], [
        a,
        s
      ])), (o = this.getNextPoint(l)) && null != o.$hlx && l.$tp == y.AnchorPoint.Type.Connector && (a = l.$x + (o.$x - l.$x) * y.AnchorPoint.HANDLE_COEFF, s = l.$y + (o.$y - l.$y) * y.AnchorPoint.HANDLE_COEFF, f.isEqualEps(l.$x - a, 0, y.defaultEps) && f.isEqualEps(l.$y - s, 0, y.defaultEps) || l.setProperties([
        "hrx",
        "hry"
      ], [
        a,
        s
      ])), (l.$ah || l.$tp == y.AnchorPoint.Type.Connector) && l._invalidateCalculations(), this._invalidateLeft(n), this._invalidateRight(o), this.getParent() && this.getParent().endUpdate()) : e == r._Change.BeforeChildRemove ? (this.getParent() && this.getParent().beginUpdate(), this._dirtyPrev = this.getPreviousPoint(l), this._dirtyNext = this.getNextPoint(l)) : e == r._Change.AfterChildRemove && (this._dirtyPrev && this._invalidateLeft(this._dirtyPrev), this._dirtyNext && this._invalidateRight(this._dirtyNext), this.getParent() && this.getParent().endUpdate());
    }
    !i || e != r._Change.AfterChildInsert && e != r._Change.AfterChildRemove || (i._notifyChange(g._Change.PrepareGeometryUpdate), i._verticesDirty = true, i._notifyChange(g._Change.FinishGeometryUpdate)), r.prototype._handleChange.call(this, e, t);
  }, y.AnchorPoints.prototype.getNextPoint = function (e) {
    var t = e ? e.getNext() : null;
    return !t && this._parent && this._parent.$closed && e == this.getLastChild() && (t = this.getFirstChild()), t;
  }, y.AnchorPoints.prototype.getPreviousPoint = function (e) {
    var t = e ? e.getPrevious() : null;
    return !t && this._parent && this._parent.$closed && e == this.getFirstChild() && (t = this.getLastChild()), t;
  }, y.AnchorPoints.prototype.getLastRelatedPoint = function (e) {
    var t = e, i = this.getNextPoint(e);
    if (i && (t = i, i.$tp == y.AnchorPoint.Type.Symmetric || i.$tp == y.AnchorPoint.Type.Mirror)) {
      var n = this.getNextPoint(i);
      n && n.$ah && n != e && (t = n);
    }
    return t;
  }, y.AnchorPoints.prototype.getFirstRelatedPoint = function (e) {
    var t = e, i = this.getPreviousPoint(e);
    if (i && (t = i, i.$tp == y.AnchorPoint.Type.Symmetric || i.$tp == y.AnchorPoint.Type.Mirror)) {
      var n = this.getPreviousPoint(i);
      n && n.$ah && n != e && (t = n);
    }
    return t;
  }, y.AnchorPoints.prototype.toString = function () {
    return "[Object GPathBase.AnchorPoints]";
  }, y.prototype._vertices = null, y.prototype._verticesDirty = false, y.prototype._anchorPoints = null, y.prototype._referencedNodes = null, y.prototype._delayedRefresh = false, y.prototype.transform = function (e, t, i) {
    this.transformStyledCorners(this, e), this._scene && t && (this._textsTransformed = true), l.prototype.transform.call(this, e, t, i), this._scene && (t && this._scene.visitReferences(this, function (t) {
      "text" === r.getName(t) && (t.transform(e, true), t.attachPath(this));
    }.bind(this)), this._scene.visitReferences(this, function (e) {
      e instanceof y.AnchorPoint && "connector" === r.getName(e.getPath()) && e.getPath().relayout();
    }.bind(this))), this._textsTransformed = false;
  }, y.prototype.setSketchPath = function (e) {
    this._anchorPoints._sketchPath = e;
  }, y.prototype.validateInsertion = function (e, t) {
    return u.prototype.validateInsertion.call(this, e, t) || "GPGEdge" === r.getName(e);
  }, y.prototype.assignFrom = function (e) {
    e instanceof y && this.transferProperties(e, [y.MetaProperties]), l.prototype.assignFrom.call(this, e);
  }, y.prototype.rewindVertices = function (e) {
    return (this._verticesDirty || null == this._vertices || 0 == this._vertices.getCount()) && (this._vertices.clearVertices(), this.getAnchorPoints()._generateVertices(this._vertices, this.$trf, true), this._verticesDirty = false), this._vertices.rewindVertices(e);
  }, y.prototype.readVertex = function (e) {
    return this._vertices.readVertex(e);
  }, y.prototype.hasVertexForRead = function () {
    return this._vertices.hasVertexForRead();
  }, y.prototype.findPivots = function (e, t) {
    for (var require = null, n = this.$trf, r = this.getAnchorPoints().getFirstChild(); r; r = r.getNext()) {
      var o = r.getProperty("tp");
      if (o != y.AnchorPoint.Type.Symmetric && o != y.AnchorPoint.Type.Mirror) {
        var a = new c(r.getProperty("x"), r.getProperty("y"));
        a = n ? n.mapPoint(a) : a, require ? require.push(a) : require = [a];
      }
    }
    return require;
  }, y.prototype.getSubnodeIds = function (e) {
    l.prototype.getSubnodeIds.call(this, e), this._anchorPoints && (e[this._anchorPoints.getMultireferenceId()] && this._anchorPoints.resetMultireference(), e[this._anchorPoints.getMultireferenceId()] = this._anchorPoints, this._anchorPoints.getSubnodeIds(e));
  }, y.prototype.cloneAnchorPoints = function () {
    return this._anchorPoints.clone();
  }, y.prototype._isEvenOddFill = function () {
    return !!this.$evenodd;
  }, y.prototype._calculateSourceBBox = function (e) {
    var t = new d();
    return this.getAnchorPoints()._generateVertices(t, null, false), n.calculateBounds(t, true);
  }, y.prototype._handleVisualChangeForProperties = function (e, t, i) {
    e == r._Change.AfterPropertiesChange && t.properties.indexOf("evenodd") >= 0 && (this._collidesWithChildrenSeparate = undefined, this._collidesWithChildren = undefined), l.prototype._handleVisualChangeForProperties.call(this, e, t, i);
  }, y.prototype._handleChange = function (e, t) {
    if (this._handleVisualChangeForProperties(e, t, y.VisualProperties), e === r._Change.Store) {
      if (this._scene) {
        var require = [];
        this._scene.visitReferences(this, function (e) {
          "text" === r.getName(e) && require.push(e);
        }), t.blob.reftxt = r.serialize(require);
        var n = [];
        this._scene.visitReferences(this, function (e) {
          e instanceof y.AnchorPoint && "connector" === r.getName(e.getPath()) && n.push(e.serialize());
        }), t.blob.refanchors = n;
      }
      this.storeProperties(t.blob, y.VisualProperties), this.storeProperties(t.blob, y.MetaProperties);
    } else if (e === r._Change.Restore) {
      if (this.restoreProperties(t.blob, y.MetaProperties), this.restoreProperties(t.blob, y.VisualProperties), this._referencedNodes = [], t.blob.hasOwnProperty("reftxt")) {
        var o = r.deserialize(t.blob.reftxt);
        o && (this._referencedNodes = o);
      }
      t.blob.hasOwnProperty("refanchors") && t.blob.refanchors.forEach(function (e) {
        var t = new y.AnchorPoint();
        t.deserialize(e), this._referencedNodes.push(t);
      }.bind(this));
    } else if (e === r._Change.AfterPropertiesChange)
      if (t.properties.indexOf("closed") >= 0) {
        var a = this.getAnchorPoints();
        a && (a._invalidateRight(a.getFirstChild()), a._invalidateLeft(a.getLastChild())), this._verticesDirty = true;
      } else
        t.properties.indexOf("trf") >= 0 ? this._verticesDirty = true : t.properties.indexOf("refs") >= 0 && (this._scene || (this._delayedRefresh = true));
    else
      e === r._Change.ParentAttached || e === r._Change.ParentDetach ? this._anchorPoints && (this._anchorPoints._detachFromParent(this), e === r._Change.ParentAttached && this._anchorPoints._attachToParent(this)) : e !== r._Change.WorkspaceAttached && e !== r._Change.WorkspaceDetach || this._anchorPoints && this._anchorPoints.accept(function (t) {
        t._setWorkspace(e === r._Change.WorkspaceDetach ? null : this._workspace);
      }.bind(this));
    l.prototype._handleChange.call(this, e, t), e !== g._Change.FinishGeometryUpdate || this.isRecordedTransaction() && !this.isRestoring() ? e == m._Change.SceneAttached && this._delayedRefresh && (this._scene.visitReferences(this, function (e) {
      "text" === r.getName(e) && e && e.attachPath(this);
    }.bind(this)), this._scene.visitReferences(this, function (e) {
      e instanceof y.AnchorPoint && "connector" === r.getName(e.getPath()) && e.getPath().relayout();
    }.bind(this)), this._delayedRefresh = false) : this._scene ? (this._textsTransformed || this._scene.visitReferences(this, function (e) {
      "text" === r.getName(e) && e.attachPath(this);
    }.bind(this)), this._scene.visitReferences(this, function (e) {
      e instanceof y.AnchorPoint && "connector" === r.getName(e.getPath()) && e.getPath().relayout();
    }.bind(this))) : this._delayedRefresh = true;
  }, y.prototype._handleReferencesOnSceneAttach = function () {
    l.prototype._handleReferencesOnSceneAttach.call(this, this._referencedNodes), this._referencedNodes = null;
  }, y.prototype.hasReferencedText = function (e) {
    if (this._referencedNodes && this._referencedNodes.length) {
      var module = e.getReferenceId();
      return this._referencedNodes.some(function (e) {
        return "text" === r.getName(e) && e.getReferenceId() === module;
      });
    }
    return false;
  }, y.prototype._referenceEvent = function (e) {
    if (e.target === this) {
      var module = e.linked;
      if ("text" === r.getName(e.reference)) {
        var require = e.reference;
        module ? require.attachPath(this) : require.attachPath(null);
      } else {
        if (!(e.reference instanceof y.AnchorPoint && "connector" === r.getName(e.reference.getPath())))
          return;
        if (module)
          e.reference.getPath().attachPath(e.reference, this);
        else {
          var n = e.reference.getPath();
          n && n.getParent().removeChild(n);
        }
      }
      l.prototype._referenceEvent.call(this, e);
    }
  }, y.prototype.getAnchorPoints = function () {
    return this._anchorPoints;
  }, y.prototype.setAnchorPoints = function (e) {
    this._anchorPoints && this._anchorPoints._detachFromParent(this), this._anchorPoints = e, this._anchorPoints._setParent(this);
  }, y.prototype.pathHitTest = function (e, t, i, r) {
    r = r || 0;
    var o = e, a = 1;
    t && t.invertible() && (o = (s = t.inverted()).mapPoint(e), a *= s.getScaleFactor());
    var s, l = null;
    this.$trf && this.$trf.invertible() && (l = this.$trf, this.$trf = null, o = (s = l.inverted()).mapPoint(o), a *= s.getScaleFactor());
    var c = new d();
    this.getAnchorPoints()._generateVertices(c, this.$trf, false);
    var p = new A(), u = null, g = a * r * 2;
    if (n.hitTest(o.getX(), o.getY(), c, g, !!this.$closed && i, p) && (u = new h(this, p), p.outline && 0 != p.slope && 1 != p.slope)) {
      var m = n.getSegmentPoint(c, p.segment, 0.5);
      if (m)
        2 * f.ptDist(o.getX(), o.getY(), m.getX(), m.getY()) <= g && (p.slope = 0.5, p.x = m.getX(), p.y = m.getY());
    }
    return l && (this.$trf = l), u;
  }, y.prototype.isClockWise = function () {
    var e = this.getProperty("trf");
    e = e && !e.isIdentity() ? e : null;
    for (var module = null, require = null, n = null, r = 0, o = this.getAnchorPoints().getFirstChild(), a = e ? o._getTransformedCopy(e) : o, s = new c(a.getProperty("x"), a.getProperty("y")), l = "a", h = false, A = false, p = function () {
          if (A)
            return s = null, l = null, null;
          if ("l" == l)
            return s = new c(a.getProperty("x"), a.getProperty("y")), l = "a", s;
          if ("a" == l && (this.getAnchorPoints().getLastChild() != o || this.getProperty("closed"))) {
            var module = a.getProperty("hrx"), require = a.getProperty("hry");
            if (null !== module && null !== require)
              return s = new c(module, require), l = "r", h && (A = true), s;
          }
          o = o.getNext(), h && (A = true), o || (h = true, o = this.getAnchorPoints().getFirstChild());
          var n = (a = e ? o._getTransformedCopy(e) : o).getProperty("hlx"), r = a.getProperty("hly");
          return null !== n && null !== r ? (s = new c(n, r), l = "l", s) : (s = new c(a.getProperty("x"), a.getProperty("y")), l = "a", s);
        }.bind(this); s;)
      require ? (module = require, require = n, n = s) : (module = s, require = s = p(), n = s = p()), module && require && n && (r += f.getTurnAngle(module, require, require, n), s = p());
    return r <= 0;
  }, y.prototype.reverseOrder = function () {
    var e;
    this.beginUpdate();
    var t = this.getAnchorPoints().getFirstChild();
    for (e = this.getAnchorPoints().getLastChild(); e !== t; e = this.getAnchorPoints().getLastChild())
      e.flip(), this.getAnchorPoints().removeChild(e), this.getAnchorPoints().insertChild(e, t);
    t.flip(), this.endUpdate();
  }, y.prototype.transformStyledCorners = function (e, t) {
    var i = this._scene ? this._scene.getTransformSettings() : null;
    !(i && null != i.scaleCorners || this.getProperty("csc")) || i && 0 == i.scaleCorners || this._transformStyledCorners(e, t);
  }, y.prototype._transformStyledCorners = function (e, t) {
    var i = 1, n = 1, r = t.decomposed().scale.getMatrix();
    if (this.getProperty("cu")) {
      var o = Math.abs(r[0] * r[3]);
      f.isEqualEps(o, 1) || (i = n = Math.sqrt(o));
    } else {
      o = Math.abs(r[0] * r[3]);
      f.isEqualEps(o, 1) || (i = n = Math.sqrt(o));
    }
    if (!f.isEqualEps(i, 1) && !f.isEqualEps(n, 1)) {
      var a = this.getAnchorPoints(), s = e.getAnchorPoints();
      e._beginBlockEvents([g.GeometryChangeEvent]), s._beginBlockCompositeEvents(false, true, false);
      for (var l = s.getFirstChild(), h = a.getFirstChild(); l && h && l.getNext() && h.getNext(); l = l.getNext(), h = h.getNext())
        l.setProperties([
          "cl",
          "cr"
        ], [
          h.getProperty("cl") * i,
          h.getProperty("cr") * n
        ]);
      e._endBlockEvents([g.GeometryChangeEvent]), s._endBlockCompositeEvents(false, true, false), l && h && l.setProperties([
        "cl",
        "cr"
      ], [
        h.getProperty("cl") * i,
        h.getProperty("cr") * n
      ]);
    }
  }, y.prototype.transferStyledCorners = function (e) {
    for (var module = this.getAnchorPoints(), require = e.getAnchorPoints().getFirstChild(), n = module.getFirstChild(); require && n; require = require.getNext(), n = n.getNext())
      require.$cl = n.$cl, require.$cr = n.$cr;
  }, y.prototype.toString = function () {
    return "[GPathBase]";
  }, exports.exports = y;
}
