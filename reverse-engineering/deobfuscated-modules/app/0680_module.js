/**
 * Webpack Module #680
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(29) /* module_29 */,
      a = n(65) /* module_65 */,
      r = n(37) /* module_37 */,
      s = n(143) /* module_143 */,
      l = n(371) /* module_371 */,
      c = n(323) /* module_323 */,
      d = n(102) /* module_102 */,
      u = n(149) /* module_149 */,
      p = n(74) /* module_74 */,
      g = !p && u("map", TypeError),
      h = l(function () {
        var e = this.iterator,
          t = r(i(this.next, e));
        if (!(this.done = !!t.done))
          return c(e, this.mapper, [t.value, this.counter++], true);
      });
    o(
      { target: "Iterator", proto: true, real: true, forced: p || g },
      {
        map: function (e) {
          r(this);
          try {
            a(e);
          } catch (e) {
            d(this, "throw", e);
          }
          return g ? i(g, this, e) : new h(s(this), { mapper: e });
        },
      }
    );
  }