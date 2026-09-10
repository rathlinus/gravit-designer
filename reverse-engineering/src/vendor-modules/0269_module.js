/**
 * chunk.vendor.js Module #269
 * Type: unknown
 */

function (e, t, i) {
      "use strict";

      function n() {}
      (i(20),
        i(3),
        i(151),
        (n.getTypeId = function (e) {
          return "number" == typeof e
            ? e
            : "function" == typeof e &&
                e.prototype.hasOwnProperty("__gtype_id__")
              ? e.prototype.__gtype_id__
              : e && "number" == typeof e.__gtype_id__
                ? e.__gtype_id__
                : null;
        }),
        (n.getName = function (e) {
          if (e) {
            if (
              ("object" == typeof e && (e = e.constructor),
              e && "function" == typeof e)
            ) {
              var t = /function (.{1,})\(/.exec(e.toString());
              return t && t.length > 1 ? t[1] : "anonymous";
            }
            return e.toString();
          }
          return "<null>";
        }),
        (n.inherit = function (e, t) {
          if (
            ((e.prototype = Object.create(t.prototype)),
            (e.prototype.__gtype_id__ = n._internalTypeIdCounter++),
            (e.prototype.constructor = e),
            delete e.prototype.__gmixins__,
            t.prototype.__gmixins__)
          )
            for (var i in ((e.prototype.__gmixins__ = {}),
            t.prototype.__gmixins__))
              e.prototype.__gmixins__[i] = !0;
          if (t != n)
            for (var r in t)
              r &&
                r.length > 0 &&
                "constructor" !== r &&
                "__gmixins__" != r &&
                "toString" != r &&
                "_" != r.charAt(0) &&
                !e[r] &&
                (e[r] = t[r]);
        }),
        (n.mix = function (e, t) {
          n.inheritAndMix(e, null, t);
        }),
        (n.inheritAndMix = function (e, t, i) {
          if ((t && this.inherit(e, t), i)) {
            e.prototype.__gmixins__ || (e.prototype.__gmixins__ = {});
            for (var r = 0; r < i.length; ++r) {
              var o = i[r].prototype;
              for (var a in o)
                if (
                  a &&
                  "constructor" !== a &&
                  "toString" != a &&
                  "__gmixins__" != a &&
                  "__gtype_id__" != a &&
                  "hasMixin" != a
                ) {
                  if (a in e.prototype)
                    throw new Error(
                      "Mixin " +
                        o +
                        " may not override " +
                        a +
                        " in " +
                        e.prototype,
                    );
                  e.prototype[a] = o[a];
                }
              if (
                (o.__gtype_id__ ||
                  (o.__gtype_id__ = n._internalTypeIdCounter++),
                (e.prototype.__gmixins__[o.__gtype_id__] = !0),
                o.__gmixins__)
              )
                for (var s in o.__gmixins__) e.prototype.__gmixins__[s] = !0;
              for (
                var l = Object.getPrototypeOf(o);
                null != l && l !== Object.prototype;
                l = Object.getPrototypeOf(l)
              )
                (l.__gtype_id__ ||
                  (l.__gtype_id__ = n._internalTypeIdCounter++),
                  (e.prototype.__gmixins__[l.__gtype_id__] = !0));
            }
          }
        }),
        (n._internalTypeIdCounter = 0),
        (n.prototype.__gtype_id__ = -1),
        (n.prototype.__gmixins__ = null),
        (n.prototype.hasMixin = function (e) {
          return !(
            !this.__gmixins__ || !this.__gmixins__[e.prototype.__gtype_id__]
          );
        }),
        (n.prototype.toString = function () {
          var e = this.constructor.toString().match(/^function ([^\(]*)/);
          return "[Object " + (e ? e[1] : "object") + "]";
        }),
        (e.exports = n));
    }