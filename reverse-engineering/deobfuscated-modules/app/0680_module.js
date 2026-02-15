/**
 * Webpack Module #680
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      a = require(65) /* module_65 */,
      toString_default = require(37) /* toString_default */,
      s = require(143) /* module_143 */,
      l = require(371) /* module_371 */,
      c = require(323) /* module_323 */,
      d = require(102) /* module_102 */,
      u = require(149) /* module_149 */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      g = !createNonEnumerableProperty && u("map", TypeError),
      h = l(function () {
        var e = this.iterator,
          t = toString_default(isCallable(this.next, e));
        if (!(this.done = !!t.done))
          return c(e, this.mapper, [t.value, this.counter++], true);
      });
    core_export(
      { target: "Iterator", proto: true, real: true, forced: createNonEnumerableProperty || g },
      {
        map: function (e) {
          toString_default(this);
          try {
            a(e);
          } catch (e) {
            d(this, "throw", e);
          }
          return g ? isCallable(g, this, e) : new h(s(this), { mapper: e });
        },
      }
    );
  }