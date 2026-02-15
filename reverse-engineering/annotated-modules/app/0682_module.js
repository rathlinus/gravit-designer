/**
 * Webpack Module #682
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(29) /* isCallable */,
      a = n(65) /* DataModule_65 */,
      r = n(37) /* toString_default */,
      s = n(143) /* module_143 */,
      l = n(371) /* module_371 */,
      c = n(323) /* DataModule_323 */,
      d = n(74) /* createNonEnumerableProperty */,
      u = n(102) /* DataModule_102 */,
      p = n(149) /* module_149 */,
      g = !d && p("filter", TypeError),
      h = l(function () {
        for (
          var e, t, n = this.iterator, o = this.predicate, a = this.next;
          ;

        ) {
          if (((e = r(i(a, n))), (this.done = !!e.done))) return;
          if (((t = e.value), c(n, o, [t, this.counter++], !0))) return t;
        }
      });
    o(
      { target: "Iterator", proto: !0, real: !0, forced: d || g },
      {
        filter: function (e) {
          r(this);
          try {
            a(e);
          } catch (e) {
            u(this, "throw", e);
          }
          return g ? i(g, this, e) : new h(s(this), { predicate: e });
        },
      }
    );
  }