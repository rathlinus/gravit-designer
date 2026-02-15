/**
 * Webpack Module #680
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(29) /* isCallable */,
      a = require(65) /* module_65 */,
      r = require(37) /* toString_default */,
      s = require(143) /* module_143 */,
      l = require(371) /* module_371 */,
      c = require(323) /* module_323 */,
      d = require(102) /* module_102 */,
      u = require(149) /* module_149 */,
      p = require(74) /* createNonEnumerableProperty */,
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