/**
 * Webpack Module #271
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o,
      i = n(25) /* core_export */,
      a = n(223) /* module_223 */,
      r = n(222) /* objectGetOwnPropertyDescriptor */.f,
      s = n(117) /* toStringTagSupport */,
      l = n(62) /* requireObjectCoercible */,
      c = n(361) /* module_361 */,
      d = n(92) /* classof */,
      u = n(362) /* module_362 */,
      p = n(74) /* createNonEnumerableProperty */,
      g = a("".slice),
      h = Math.min,
      f = u("endsWith");
    i(
      {
        target: "String",
        proto: !0,
        forced:
          !!(
            p ||
            f ||
            ((o = r(String.prototype, "endsWith")), !o || o.writable)
          ) && !f,
      },
      {
        endsWith: function (e) {
          var t = l(d(this));
          c(e);
          var n = arguments.length > 1 ? arguments[1] : void 0,
            o = t.length,
            i = void 0 === n ? o : h(s(n), o),
            a = l(e);
          return g(t, i - a.length, i) === a;
        },
      }
    );
  }