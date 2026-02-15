/**
 * Module 0 - GObject
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

function (e, t) {
  function i() {
  }
  i.getTypeId = function (e) {
    return "number" == typeof e ? e : "function" == typeof e && e.prototype.hasOwnProperty("__gtype_id__") ? e.prototype.__gtype_id__ : e && "number" == typeof e.__gtype_id__ ? e.__gtype_id__ : null;
  }, i.getName = function (e) {
    if (e) {
      if ("object" == typeof e && (e = e.constructor), e && "function" == typeof e) {
        var t = /function (.{1,})\(/.exec(e.toString());
        return t && t.length > 1 ? t[1].trim() : "anonymous";
      }
      return e.toString();
    }
    return "<null>";
  }, i.inherit = function (e, t) {
    if (e.prototype = Object.create(t.prototype), e.prototype.__gtype_id__ = i._internalTypeIdCounter++, e.prototype.constructor = e, delete e.prototype.__gmixins__, t.prototype.__gmixins__)
      for (var n in (e.prototype.__gmixins__ = {}, t.prototype.__gmixins__))
        e.prototype.__gmixins__[n] = !0;
    if (t != i)
      for (var r in t)
        r && r.length > 0 && "constructor" !== r && "__gmixins__" != r && "toString" != r && "_" != r.charAt(0) && !e[r] && (e[r] = t[r]);
  }, i.mix = function (e, t) {
    i.inheritAndMix(e, null, t);
  }, i.inheritAndMix = function (e, t, n, r) {
    if (t && this.inherit(e, t), n) {
      e.prototype.__gmixins__ || (e.prototype.__gmixins__ = {});
      for (var o = 0; o < n.length; ++o) {
        var a = n[o].prototype;
        for (var s in a)
          if (s && "constructor" !== s && "toString" != s && "__gmixins__" != s && "__gtype_id__" != s && "hasMixin" != s)
            if (s in e.prototype) {
              if (!r)
                throw new Error("Mixin " + a + " may not override " + s + " in " + e.prototype);
              e.prototype[s] = a[s];
            } else
              e.prototype[s] = a[s];
        if (a.__gtype_id__ || (a.__gtype_id__ = i._internalTypeIdCounter++), e.prototype.__gmixins__[a.__gtype_id__] = !0, a.__gmixins__)
          for (var l in a.__gmixins__)
            e.prototype.__gmixins__[l] = !0;
        for (var h = Object.getPrototypeOf(a); null != h && h !== Object.prototype; h = Object.getPrototypeOf(h))
          h.__gtype_id__ || (h.__gtype_id__ = i._internalTypeIdCounter++), e.prototype.__gmixins__[h.__gtype_id__] = !0;
      }
    }
  }, i._internalTypeIdCounter = 0, i.prototype.__gtype_id__ = -1, i.prototype.__gmixins__ = null, i.prototype.hasMixin = function (e) {
    return !(!this.__gmixins__ || !this.__gmixins__[e.prototype.__gtype_id__]);
  }, i.prototype.toString = function () {
    var e = this.constructor.toString().match(/^function ([^\(]*)/);
    return "[Object " + (e ? e[1] : "object") + "]";
  }, e.exports = i;
}
