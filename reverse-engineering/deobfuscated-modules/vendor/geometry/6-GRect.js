/**
 * Module 6 - GRect
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
  var n = require(5) /* GPoint */, r = require(12) /* GMath */;
  function o(e, t, i, n) {
    this._x = e || 0, this._y = t || 0, this._width = i || 0, this._height = n || 0;
  }
  o.Side = {
    TOP_LEFT: "tl",
    TOP_CENTER: "tc",
    TOP_RIGHT: "tr",
    RIGHT_CENTER: "rc",
    BOTTOM_RIGHT: "br",
    BOTTOM_CENTER: "bc",
    BOTTOM_LEFT: "bl",
    LEFT_CENTER: "lc",
    CENTER: "cc"
  }, o.UNIT_RECT = new o(0, 0, 1, 1), o.fromPoints = function () {
    var e = n.min.apply(null, arguments), t = n.max.apply(null, arguments);
    return new o(e.getX(), e.getY(), t.getX() - e.getX(), t.getY() - e.getY());
  }, o.equals = function (e, t) {
    return !e && e === t || !(!e || !t) && r.isEqualEps(e._x, t._x) && r.isEqualEps(e._y, t._y) && r.isEqualEps(e._width, t._width) && r.isEqualEps(e._height, t._height);
  }, o.serialize = function (e) {
    return [
      e._x,
      e._y,
      e._width,
      e._height
    ];
  }, o.deserialize = function (e) {
    return e && e.length >= 4 ? new o(e[0], e[1], e[2], e[3]) : new o();
  }, o.prototype._x = 0, o.prototype._y = 0, o.prototype._width = 0, o.prototype._height = 0, o.prototype.getX = function () {
    return this._x;
  }, o.prototype.getY = function () {
    return this._y;
  }, o.prototype.getWidth = function () {
    return this._width;
  }, o.prototype.getHeight = function () {
    return this._height;
  }, o.prototype.getX2 = function () {
    return this._x + this._width;
  }, o.prototype.getY2 = function () {
    return this._y + this._height;
  }, o.prototype.isEmpty = function () {
    return this._width <= 0 || this._height <= 0;
  }, o.prototype.containsPoint = function (e, t) {
    return this.containsPointXY(e.getX(), e.getY(), t);
  }, o.prototype.containsPointXY = function (e, t, i) {
    var n = this._x, r = this._x;
    if (this._width < 0 ? n += this._width : r += this._width, !i && n == r)
      return false;
    if (e < n || e > r)
      return false;
    var o = this._y, a = this._y;
    return this._height < 0 ? o += this._height : a += this._height, !(!i && o == a) && !(t < o || t > a);
  }, o.prototype.containsRect = function (e, t) {
    var i = this._x, n = this._x;
    if (this._width < 0 ? i += this._width : n += this._width, !t && i == n)
      return false;
    var r = e._x, o = e._x;
    if (e._width < 0 ? r += e._width : o += e._width, !t && r == o)
      return false;
    if (r < i || o > n)
      return false;
    var a = this._y, s = this._y;
    if (this._height < 0 ? a += this._height : s += this._height, !t && a == s)
      return false;
    var l = e._y, h = e._y;
    return e._height < 0 ? l += e._height : h += e._height, !(!t && l == h) && !(l < a || h > s);
  }, o.prototype.intersectsRect = function (e, t) {
    return this.intersectsRectXYWH(e._x, e._y, e._width, e._height, t);
  }, o.prototype.intersectsRectXYWH = function (e, t, i, n, r) {
    var o = this._x, a = this._x;
    if (this._width < 0 ? o += this._width : a += this._width, !r && o == a)
      return false;
    var s = e, l = e;
    if (i < 0 ? s += i : l += i, !r && s == l)
      return false;
    if (o > l || s > a || !r && (o == l || s == a))
      return false;
    var h = this._y, A = this._y;
    if (this._height < 0 ? h += this._height : A += this._height, !r && h == A)
      return false;
    var c = t, p = t;
    return n < 0 ? c += n : p += n, !(!r && c == p) && !(h > p || c > A || !(r || h != p && c != A));
  }, o.prototype.expanded = function (e, t, i, n) {
    return new o(this._x - e, this._y - t, this._width + e + i, this._height + t + n);
  }, o.prototype.translated = function (e, t) {
    return new o(this._x + e, this._y + t, this._width, this._height);
  }, o.prototype.scaled = function (e, t) {
    return new o(this._x * e, this._y * t, this._width * e, this._height * t);
  }, o.prototype.scaledAt = function (e, t, i) {
    return i ? new o((this._x - i.getX()) * e + i.getX(), (this._y - i.getY()) * t + i.getY(), this._width * e, this._height * t) : this.scaled(e, t);
  }, o.prototype.united = function (e, t) {
    var i = this._x, n = this._x;
    if (this._width < 0 ? i += this._width : n += this._width, t && i == n)
      return e;
    var r = e._x, a = e._x;
    if (e._width < 0 ? r += e._width : a += e._width, t && r == a)
      return this;
    var s = this._y, l = this._y;
    if (this._height < 0 ? s += this._height : l += this._height, t && s == l)
      return e;
    var h = e._y, A = e._y;
    if (e._height < 0 ? h += e._height : A += e._height, t && h == A)
      return this;
    var c = new o();
    return c._x = Math.min(i, r), c._y = Math.min(s, h), c._width = Math.max(n, a) - c._x, c._height = Math.max(l, A) - c._y, c;
  }, o.prototype.subtracted = function (e, t) {
    var i = this._x, n = this._x;
    if (this._width < 0 ? i += this._width : n += this._width, i == n)
      return new o(0, 0, 0, 0);
    var r = e._x, a = e._x;
    if (e._width < 0 ? r += e._width : a += e._width, r == a)
      return new o(this._x, this._y, this._width, this._height);
    if (i >= a || r >= n)
      return new o(this._x, this._y, this._width, this._height);
    var s = this._y, l = this._y;
    if (this._height < 0 ? s += this._height : l += this._height, s == l)
      return new o(0, 0, 0, 0);
    var h = e._y, A = e._y;
    return e._height < 0 ? h += e._height : A += e._height, h == A || s >= A || h >= l || s >= h && l <= A && i < r && n > a || i >= r && n <= a && s < h && l > A ? new o(this._x, this._y, this._width, this._height) : s >= h ? l <= A ? i >= r ? n <= a ? new o(i, s, 0, 0) : new o(a, s, n - a, l - s) : n <= a ? new o(i, s, r - i, l - s) : t ? [
      new o(i, s, r - i, this._height),
      new o(i, s, n - a, this._height)
    ] : new o(i, s, this._width, this._height) : i >= r ? n <= a ? new o(i, A, this._width, l - A) : t ? [
      new o(i, A, a - i, l - A),
      new o(a, s, n - a, this._height)
    ] : new o(i, s, this._width, this._height) : n <= a ? t ? [
      new o(i, s, r - i, this._height),
      new o(r, A, n - r, l - A)
    ] : new o(i, s, this._width, this._height) : t ? [
      new o(i, s, r - i, this._height),
      new o(r, A, a - r, l - A),
      new o(a, s, n - a, this._height)
    ] : new o(i, s, this._width, this._height) : l <= A ? i >= r ? n <= a ? new o(i, s, n - i, h - s) : t ? [
      new o(i, s, a - i, h - s),
      new o(a, s, n - a, this._height)
    ] : new o(i, s, this._width, this._height) : n <= a ? t ? [
      new o(i, s, r - i, this._height),
      new o(r, s, n - r, h - s)
    ] : new o(i, s, this._width, this._height) : t ? [
      new o(i, s, r - i, this._height),
      new o(r, s, a - r, h - s),
      new o(a, s, n - a, this._height)
    ] : new o(i, s, this._width, this._height) : t ? i >= r ? n <= a ? [
      new o(i, s, n - i, h - s),
      new o(i, A, n - i, l - A)
    ] : [
      new o(i, s, this._width, h - s),
      new o(a, h, n - a, A - h),
      new o(i, A, this._width, l - A)
    ] : n <= a ? [
      new o(i, s, this._width, h - s),
      new o(i, h, r - i, A - h),
      new o(i, A, this._width, l - A)
    ] : [
      new o(i, s, this._width, h - s),
      new o(i, h, r - i, A - h),
      new o(a, h, n - a, A - h),
      new o(i, A, this._width, l - A)
    ] : new o(this._x, this._y, this._width, this._height);
  }, o.prototype.intersected = function (e) {
    var t = this._x, i = this._x;
    if (this._width < 0 ? t += this._width : i += this._width, t == i)
      return new o(0, 0, 0, 0);
    var n = e._x, r = e._x;
    if (e._width < 0 ? n += e._width : r += e._width, n == r)
      return new o(0, 0, 0, 0);
    if (t >= r || n >= i)
      return new o(0, 0, 0, 0);
    var a = this._y, s = this._y;
    if (this._height < 0 ? a += this._height : s += this._height, a == s)
      return new o(0, 0, 0, 0);
    var l = e._y, h = e._y;
    if (e._height < 0 ? l += e._height : h += e._height, l == h)
      return new o(0, 0, 0, 0);
    if (a >= h || l >= s)
      return new o(0, 0, 0, 0);
    var A = new o();
    return A._x = Math.max(t, n), A._y = Math.max(a, l), A._width = Math.min(i, r) - A._x, A._height = Math.min(s, h) - A._y, A;
  }, o.prototype.toAlignedRect = function () {
    var e = Math.floor(this._x), t = Math.ceil(this._x + this._width), i = Math.floor(this._y);
    return new o(e, i, t - e, Math.ceil(this._y + this._height) - i);
  }, o.prototype.toAlignedWithGrid = function (e) {
    var t = e * Math.floor(this._x / e), i = e * Math.floor(this._y / e);
    return new o(t, i, e * Math.ceil((this._x + this._width) / e) - t, e * Math.ceil((this._y + this._height) / e) - i);
  }, o.prototype.toRoundedPrecision = function (e) {
    return e = e || 8, new o(Number(this._x.toFixed(e)), Number(this._y.toFixed(e)), Number(this._width.toFixed(e)), Number(this._height.toFixed(e)));
  }, o.prototype.getSide = function (e) {
    switch (e) {
    case o.Side.TOP_LEFT:
      return new n(this._x, this._y);
    case o.Side.TOP_CENTER:
      return new n(this._x + this._width / 2, this._y);
    case o.Side.TOP_RIGHT:
      return new n(this._x + this._width, this._y);
    case o.Side.RIGHT_CENTER:
      return new n(this._x + this._width, this._y + this._height / 2);
    case o.Side.BOTTOM_RIGHT:
      return new n(this._x + this._width, this._y + this._height);
    case o.Side.BOTTOM_CENTER:
      return new n(this._x + this._width / 2, this._y + this._height);
    case o.Side.BOTTOM_LEFT:
      return new n(this._x, this._y + this._height);
    case o.Side.LEFT_CENTER:
      return new n(this._x, this._y + this._height / 2);
    case o.Side.CENTER:
      return new n(this._x + this._width / 2, this._y + this._height / 2);
    default:
      throw new Error("Illegal Argument: " + e);
    }
  }, o.prototype.getClosestSideName = function (e) {
    var t = [
        o.Side.TOP_LEFT,
        o.Side.TOP_CENTER,
        o.Side.TOP_RIGHT,
        o.Side.LEFT_CENTER,
        o.Side.CENTER,
        o.Side.RIGHT_CENTER,
        o.Side.BOTTOM_LEFT,
        o.Side.BOTTOM_CENTER,
        o.Side.BOTTOM_RIGHT
      ], i = 1, n = 1;
    return e.getX() <= this._x + this._width / 3 ? i = 0 : e.getX() >= this._x + 2 * this._width / 3 && (i = 2), e.getY() <= this._y + this._height / 3 ? n = 0 : e.getY() >= this._y + 2 * this._height / 3 && (n = 2), t[3 * n + i];
  }, o.prototype.getXYOffset = function (e, t, i, n) {
    var r = {
      x: null,
      y: null
    };
    if (t) {
      for (var o, a = null, s = null, l = [
            this._x,
            this._x + this._width
          ], h = [
            e._x,
            e._x + e._width
          ], A = 0; A < l.length; ++A)
        for (var c = 0; c < h.length; ++c)
          o = h[c] - l[A], (null === a || o < a) && (a = o), (null === s || o > s) && (s = o);
      a >= 0 && s >= 0 ? r.x = Math.min(a, s) : a <= 0 && s <= 0 && (r.x = Math.max(a, s)), n && !r.x && (r.leftDist = h[0] - l[0], r.rightDist = h[1] - l[1]);
    }
    if (i) {
      var p = null, u = null;
      for (l = [
          this._y,
          this._y + this._height
        ], h = [
          e._y,
          e._y + e._height
        ], A = 0; A < l.length; ++A)
        for (c = 0; c < h.length; ++c)
          o = h[c] - l[A], (null === p || o < p) && (p = o), (null === u || o > u) && (u = o);
      p >= 0 && u >= 0 ? r.y = Math.min(p, u) : p <= 0 && u <= 0 && (r.y = Math.max(p, u)), n && !r.y && (r.topDist = h[0] - l[0], r.bottomDist = h[1] - l[1]);
    }
    return r;
  }, o.prototype.toString = function () {
    return "[Object GRect(x=" + this._x + ", y=" + this._y + ", width=" + this._width + ", height=" + this._height + ")]";
  }, exports.exports = o;
}
