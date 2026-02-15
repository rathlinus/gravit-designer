/**
 * Module 1138
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
  var n = i(1210);
  function r(e, t) {
    for (var i = 0, n = t = t || 0; n < e.byteLength; n++)
      i <<= 8, i |= 255 & e.getUint8(n);
    return i;
  }
  function o() {
  }
  o.prototype.parse = function (e) {
    var t = n(e);
    if ("bplist" !== t.slice(0, "bplist".length).getString())
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    var i = t.slice(t.byteLength - 32, t.byteLength), o = i.getUint8(6);
    var a = i.getUint8(7);
    var s = i.getUint64(8, !1);
    var l = i.getUint64(16, !1);
    var h = i.getUint64(24, !1);
    for (var A = [], c = 0; c < s; c++) {
      var p = t.slice(h + c * o, h + (c + 1) * o);
      A[c] = r(p, 0);
    }
    return function e(i) {
      var n, o = A[i], s = t.getUint8(o), l = (240 & s) >> 4, h = 15 & s;
      switch (l) {
      case 0:
        return function () {
          switch (h) {
          case 0:
            return null;
          case 8:
            return !1;
          case 9:
            return !0;
          case 15:
            return null;
          default:
            throw new Error("Unhandled simple type 0x" + l.toString(16));
          }
        }();
      case 1:
        return n = Math.pow(2, h), r(t.slice(o + 1, o + 1 + n));
      case 8:
        return function () {
          var e = h + 1;
          return r(t.slice(o + 1, o + 1 + e));
        }();
      case 2:
        return function () {
          var e = Math.pow(2, h), i = t.slice(o + 1, o + 1 + e);
          if (4 === e)
            return i.getFloat32(0, !1);
          if (8 === e)
            return i.getFloat64(0, !1);
        }();
      case 3:
        return function () {
          3 != h && console.error("Unknown date type :" + h + ". Parsing anyway...");
          var e = t.slice(o + 1, o + 9);
          return new Date(978307200000 + 1000 * e.getFloat64(0, !1));
        }();
      case 4:
        return function () {
          var e = 1, i = h;
          if (15 == h) {
            var n = t.getUint8(o + 1), a = (240 & n) / 16;
            1 != a && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + a);
            var s = 15 & n, l = Math.pow(2, s);
            e = 2 + l, i = r(t.slice(o + 2, o + 2 + l));
          }
          return t.slice(o + e, o + e + i);
        }();
      case 5:
        return c();
      case 6:
        return c(!0);
      case 10:
        return function () {
          var i = h, n = 1;
          if (15 == h) {
            var s = t.getUint8(o + 1), l = (240 & s) / 16;
            1 != l && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + l);
            var A = 15 & s, c = Math.pow(2, A);
            n = 2 + c, i = r(t.slice(o + 2, o + 2 + c));
          }
          for (var p = [], u = 0; u < i; u++) {
            var d = r(t.slice(o + n + u * a, o + n + (u + 1) * a));
            p[u] = e(d);
          }
          return p;
        }();
      case 13:
        return function () {
          var i = h, n = 1;
          if (15 == h) {
            var s = t.getUint8(o + 1), l = (240 & s) / 16;
            1 != l && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + l);
            var A = 15 & s, c = Math.pow(2, A);
            n = 2 + c, i = r(t.slice(o + 2, o + 2 + c));
          }
          0;
          for (var p = {}, u = 0; u < i; u++) {
            var d = r(t.slice(o + n + u * a, o + n + (u + 1) * a)), g = r(t.slice(o + n + i * a + u * a, o + n + i * a + (u + 1) * a)), f = e(d), m = e(g);
            0, p[f] = m;
          }
          return p;
        }();
      default:
        throw new Error("Unhandled type 0x" + l.toString(16));
      }
      function c(e) {
        e = e || 0;
        var i = "utf8", n = h, a = 1;
        if (15 == h) {
          var s = t.getUint8(o + 1), l = (240 & s) / 16;
          1 != l && console.err("UNEXPECTED LENGTH-INT TYPE! " + l);
          var A = 15 & s, c = Math.pow(2, A);
          a = 2 + c;
          n = r(t.slice(o + 2, o + 2 + c));
        }
        n *= e + 1;
        var p = t.slice(o + a, o + a + n);
        return e && (p = function (e) {
          for (var t = e.byteLength, i = 0; i < t; i += 2) {
            var n = e.getUint8(i);
            e.setUint8(i, e.getUint8(i + 1)), e.setUint8(i + 1, n);
          }
          return e;
        }(p), i = "ucs-2"), p.getString(p.byteLength, 0, i);
      }
    }(l);
  }, e.exports = o;
}
