/**
 * Module 261
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

function (exports, module) {
  function i() {
  }
  i.getTypeId = function (e) {
    return "number" == typeof e ? e : "function" == typeof e && e.prototype.hasOwnProperty("__gtype_id__") ? e.prototype.__gtype_id__ : e && "number" == typeof e.__gtype_id__ ? e.__gtype_id__ : null;
  }, i.getName = function (e) {
    if (e) {
      if ("object" == typeof e && (e = e.constructor), e && "function" == typeof e) {
        var module = /function (.{1,})\(/.exec(e.toString());
        return module && module.length > 1 ? module[1] : "anonymous";
      }
      return e.toString();
    }
    return "<null>";
  }, i.inherit = function (e, t) {
    if (e.prototype = Object.create(t.prototype), e.prototype.__gtype_id__ = i._internalTypeIdCounter++, e.prototype.constructor = e, delete e.prototype.__gmixins__, t.prototype.__gmixins__)
      for (var n in (e.prototype.__gmixins__ = {}, t.prototype.__gmixins__))
        e.prototype.__gmixins__[n] = true;
    if (t != i)
      for (var r in t)
        r && r.length > 0 && "constructor" !== r && "__gmixins__" != r && "toString" != r && "_" != r.charAt(0) && !e[r] && (e[r] = t[r]);
  }, i.mix = function (e, t) {
    i.inheritAndMix(e, null, t);
  }, i.inheritAndMix = function (e, t, n) {
    if (t && this.inherit(e, t), n) {
      e.prototype.__gmixins__ || (e.prototype.__gmixins__ = {});
      for (var r = 0; r < n.length; ++r) {
        var o = n[r].prototype;
        for (var a in o)
          if (a && "constructor" !== a && "toString" != a && "__gmixins__" != a && "__gtype_id__" != a && "hasMixin" != a) {
            if (a in e.prototype)
              throw new Error("Mixin " + o + " may not override " + a + " in " + e.prototype);
            e.prototype[a] = o[a];
          }
        if (o.__gtype_id__ || (o.__gtype_id__ = i._internalTypeIdCounter++), e.prototype.__gmixins__[o.__gtype_id__] = true, o.__gmixins__)
          for (var s in o.__gmixins__)
            e.prototype.__gmixins__[s] = true;
        for (var l = Object.getPrototypeOf(o); null != l && l !== Object.prototype; l = Object.getPrototypeOf(l))
          l.__gtype_id__ || (l.__gtype_id__ = i._internalTypeIdCounter++), e.prototype.__gmixins__[l.__gtype_id__] = true;
      }
    }
  }, i._internalTypeIdCounter = 0, i.prototype.__gtype_id__ = -1, i.prototype.__gmixins__ = null, i.prototype.hasMixin = function (e) {
    return !(!this.__gmixins__ || !this.__gmixins__[e.prototype.__gtype_id__]);
  }, i.prototype.toString = function () {
    var e = this.constructor.toString().match(/^function ([^\(]*)/);
    return "[Object " + (e ? e[1] : "object") + "]";
  }, exports.exports = i;
}
