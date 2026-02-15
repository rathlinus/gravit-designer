/**
 * Module 653
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
  var n = require(267) /* module */, r = require(230) /* module */, o = require(0) /* GObject */, a = require(918) /* module */;
  function s(e, t, i, n, r, o, s, l, h, A) {
    this.lines = [], this._parent = r, this.ordinal = n, this._currLength = 0, this._currHeight = 0, this._wrapper = new a(e, t, i, n, this, o, s, l, h), this._bboxSpacing = A;
  }
  o.inherit(s, n), s.prototype.frame = function (e, t) {
    if (this._wrapper.wrap(function (e) {
        "number" == typeof e ? this._currHeight = e : (this._currLength = e.ordinal + e.length - this.ordinal, this.lines.push(e));
      }.bind(this), t, this._bboxSpacing))
      return this.length = this._currLength, this.height = this._currHeight, e(this), true;
  }, s.prototype._currLength = 0, s.prototype._currHeight = 0, s.prototype.lines = null, s.prototype.wrapper = null, s.prototype._parent = null, s.prototype.ordinal = 0, s.prototype.height = undefined, s.prototype.length = undefined, s.prototype._realBounds = null, s.prototype._bboxSpacing = null, s.prototype._topMargin = undefined, s.prototype._bottomMargin = undefined, s.prototype.realBounds = function () {
    if (null === this._realBounds) {
      for (var exports = Number.MAX_VALUE, module = Number.MAX_VALUE, require = -Number.MAX_VALUE, n = -Number.MAX_VALUE, o = 0; o < this.lines.length; o++) {
        var a = this.lines[o];
        if ("line" === a.type)
          module = Math.min(module, a.baseline + a.minY), exports = Math.min(exports, a.minX), n = Math.max(n, a.baseline + a.maxY), require = Math.max(require, a.maxX);
        else {
          var s = a.bounds(true);
          module = Math.min(module, s.t), exports = Math.min(exports, s.l), n = Math.max(n, s.b), require = Math.max(require, s.r);
        }
      }
      exports === Number.MAX_VALUE || module === Number.MAX_VALUE || require === -Number.MAX_VALUE || n === -Number.MAX_VALUE ? this._realBounds = new r(0, 0, 0, 0) : this._realBounds = new r(exports, module, require - exports, n - module);
    }
    return this._realBounds;
  }, s.prototype.topMargin = function () {
    if (undefined === this._topMargin) {
      this._topMargin = NaN;
      for (var exports = Number.MAX_VALUE, module = 0; module < this.lines.length; module++) {
        var require = this.lines[module], n = require.minY;
        if (n !== Number.MAX_VALUE) {
          var r = require.baseline;
          exports = Math.min(exports, r + n);
        }
      }
      exports !== Number.MAX_VALUE && (this._topMargin = exports);
    }
    return this._topMargin;
  }, s.prototype.bottomMargin = function () {
    if (undefined === this._bottomMargin && (this._bottomMargin = NaN, this.lines.length))
      for (var exports = this.bounds(), module = exports.t + exports.h, require = this.lines.length - 1; require >= 0; require--) {
        var n = this.lines[require], r = n.maxY;
        if (Number.isNaN(r))
          console.log();
        else if (r !== -Number.MAX_VALUE) {
          this._bottomMargin = module - n.baseline - r;
          break;
        }
      }
    return this._bottomMargin;
  }, s.prototype.bounds = function (e) {
    if (!this._bounds || e) {
      for (var module = 0, require = 0, n = 0, o = 0, a = 0; a < this.lines.length; ++a) {
        var s = this.lines[a].bounds(e);
        0 === a ? (module = s.l, require = s.t, n = s.l + s.w, o = s.t + s.h) : (e && (module = Math.min(module, s.l), require = Math.min(require, s.t)), n = Math.max(n, s.l + s.w), o = Math.max(o, s.t + s.h));
      }
      var l = o - require;
      l || e || (l = this.height);
      var h = new r(module, require, n - module, l);
      if (e)
        return h;
      this._bounds = h;
    }
    return this._bounds;
  }, s.prototype.leftPadding = function () {
    var e = this.realBounds();
    return e && e.l || 0;
  }, s.prototype.rightPadding = function () {
    var e = 0;
    return this.lines.forEach(function (t) {
      e = Math.max(e, t.rightPadding || 0);
    }), e;
  }, s.prototype.ascent = function () {
    var e = 0;
    return this.lines.forEach(function (t) {
      "number" == typeof t.ascent && (e = Math.max(e, t.ascent));
    }), e;
  }, s.prototype.descent = function () {
    var e = 0;
    return this.lines.forEach(function (t) {
      "number" == typeof t.descent && (e = Math.max(e, t.descent));
    }), e;
  }, s.prototype.baseline = function () {
    for (var exports = 0; exports < this.lines.length; exports++)
      if ("number" == typeof this.lines[exports].baseline)
        return this.lines[exports].baseline;
    return 0;
  }, s.prototype.actualWidth = function () {
    if (!this._actualWidth) {
      var exports = 0;
      this.lines.forEach(function (t) {
        "number" == typeof t.actualWidth && (exports = Math.max(exports, t.actualWidth));
      }), this._actualWidth = exports;
    }
    return this._actualWidth;
  }, s.prototype.children = function () {
    return this.lines;
  }, s.prototype.parent = function () {
    return this._parent;
  }, s.prototype.draw = function (e, t) {
    var i = t ? t.t : 0, n = t ? t.t + t.h : Number.MAX_VALUE;
    this.lines.some(function (r) {
      var o = r.bounds();
      return !(o.t + o.h < i) && (o.t > n || void r.draw(e, t));
    });
  }, s.prototype.getBBoxSpacing = function () {
    var e = 0, t = this.children();
    if (t && t.length) {
      var require = null;
      t.forEach(function (t) {
        if (require || (require = t), require.actualWidth < t.actualWidth)
          require = t;
        else if (require.actualWidth === t.actualWidth) {
          var n = require.getLastValidCharSpacing(), r = t.getLastValidCharSpacing();
          r > n && (require = t, e = r);
        }
      }), require && !e && (e = require.getLastValidCharSpacing());
    }
    return e;
  }, s.prototype.getMinX = function () {
    var e = 0, t = this.children();
    return t && t.length && (e = t[0].minX, t.forEach(function (t) {
      e = Math.min(e, t.minX);
    })), e;
  }, s.prototype.type = "frame", exports.exports = s;
}
