/**
 * Webpack Module #1106
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(23) /* module_23 */,
      a = n(27) /* module_27 */,
      r = n(277) /* module_277 */,
      s = n(79) /* module_79 */,
      l = n(558) /* module_558 */,
      c = n(121) /* module_121 */,
      d = n(146) /* module_146 */,
      u = n(35) /* module_35 */,
      p = n(194) /* module_194 */,
      g = n(46) /* module_46 */,
      h = n(21) /* module_21 */,
      f = n(343) /* module_343 */,
      m = n(137) /* module_137 */,
      y = n(288) /* module_288 */;
    e.exports = function (e, t, n) {
      var v = -1 !== e.indexOf("Map"),
        _ = -1 !== e.indexOf("Weak"),
        b = v ? "set" : "add",
        w = i[e],
        C = w && w.prototype,
        x = w,
        S = {},
        E = function (e) {
          var t = a(C[e]);
          s(
            C,
            e,
            "add" === e
              ? function (e) {
                  return t(this, 0 === e ? 0 : e), this;
                }
              : "delete" === e
              ? function (e) {
                  return !(_ && !g(e)) && t(this, 0 === e ? 0 : e);
                }
              : "get" === e
              ? function (e) {
                  return _ && !g(e) ? undefined : t(this, 0 === e ? 0 : e);
                }
              : "has" === e
              ? function (e) {
                  return !(_ && !g(e)) && t(this, 0 === e ? 0 : e);
                }
              : function (e, n) {
                  return t(this, 0 === e ? 0 : e, n), this;
                }
          );
        };
      if (
        r(
          e,
          !u(w) ||
            !(
              _ ||
              (C.forEach &&
                !h(function () {
                  new w().entries().next();
                }))
            )
        )
      )
        (x = n.getConstructor(t, e, v, b)), l.enable();
      else if (r(e, true)) {
        var A = new x(),
          T = A[b](_ ? {} : -0, 1) !== A,
          G = h(function () {
            A.has(1);
          }),
          P = f(function (e) {
            new w(e);
          }),
          D =
            !_ &&
            h(function () {
              for (var e = new w(), t = 5; t--; ) e[b](t, t);
              return !e.has(-0);
            });
        P ||
          (((x = t(function (e, t) {
            d(e, C);
            var n = y(new w(), e, x);
            return p(t) || c(t, n[b], { that: n, AS_ENTRIES: v }), n;
          })).prototype = C),
          (C.constructor = x)),
          (G || D) && (E("delete"), E("has"), v && E("get")),
          (D || T) && E(b),
          _ && C.clear && delete C.clear;
      }
      return (
        (S[e] = x),
        o({ global: true, constructor: true, forced: x !== w }, S),
        m(x, e),
        _ || n.setStrong(x, e, v),
        x
      );
    };
  }