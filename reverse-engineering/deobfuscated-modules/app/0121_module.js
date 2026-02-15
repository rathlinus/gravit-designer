/**
 * Webpack Module #121
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(124) /* module_124 */,
      i = n(29) /* module_29 */,
      a = n(37) /* module_37 */,
      r = n(185) /* module_185 */,
      s = n(305) /* module_305 */,
      l = n(101) /* module_101 */,
      c = n(144) /* module_144 */,
      d = n(246) /* module_246 */,
      u = n(204) /* module_204 */,
      p = n(102) /* module_102 */,
      g = TypeError,
      h = function (e, t) {
        (this.stopped = e), (this.result = t);
      },
      f = h.prototype;
    e.exports = function (e, t, n) {
      var m,
        y,
        v,
        _,
        b,
        w,
        C,
        x = n && n.that,
        S = !(!n || !n.AS_ENTRIES),
        E = !(!n || !n.IS_RECORD),
        A = !(!n || !n.IS_ITERATOR),
        T = !(!n || !n.INTERRUPTED),
        G = o(t, x),
        P = function (e) {
          return m && p(m, "normal", e), new h(true, e);
        },
        D = function (e) {
          return S
            ? (a(e), T ? G(e[0], e[1], P) : G(e[0], e[1]))
            : T
            ? G(e, P)
            : G(e);
        };
      if (E) m = e.iterator;
      else if (A) m = e;
      else {
        if (!(y = u(e))) throw new g(r(e) + " is not iterable");
        if (s(y)) {
          for (v = 0, _ = l(e); _ > v; v++)
            if ((b = D(e[v])) && c(f, b)) return b;
          return new h(false);
        }
        m = d(e, y);
      }
      for (w = E ? e.next : m.next; !(C = i(w, m)).done; ) {
        try {
          b = D(C.value);
        } catch (e) {
          p(m, "throw", e);
        }
        if ("object" == typeof b && b && c(f, b)) return b;
      }
      return new h(false);
    };
  }