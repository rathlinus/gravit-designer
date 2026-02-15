/**
 * Webpack Module #1707
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(29) /* module_29 */,
      a = n(37) /* module_37 */,
      r = n(143) /* module_143 */,
      s = n(1708) /* module_1708 */,
      l = n(576) /* module_576 */,
      c = n(102) /* module_102 */,
      d = n(371) /* module_371 */,
      u = n(149) /* module_149 */,
      p = n(74) /* module_74 */,
      g = !p && u("drop", RangeError),
      h = d(function () {
        for (var e, t = this.iterator, n = this.next; this.remaining; )
          if ((this.remaining--, (e = a(i(n, t))), (this.done = !!e.done)))
            return;
        if (((e = a(i(n, t))), !(this.done = !!e.done))) return e.value;
      });
    o(
      { target: "Iterator", proto: !0, real: !0, forced: p || g },
      {
        drop: function (e) {
          var t;
          a(this);
          try {
            t = l(s(+e));
          } catch (e) {
            c(this, "throw", e);
          }
          return g ? i(g, this, t) : new h(r(this), { remaining: t });
        },
      }
    );
  }