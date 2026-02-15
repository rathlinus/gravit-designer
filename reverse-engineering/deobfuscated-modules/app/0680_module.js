/**
 * Webpack Module #680
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      DataModule_65 = require(65) /* DataModule_65 */,
      toString_default = require(37) /* toString_default */,
      s = require(143) /* module_143 */,
      l = require(371) /* module_371 */,
      DataModule_323 = require(323) /* DataModule_323 */,
      DataModule_102 = require(102) /* DataModule_102 */,
      u = require(149) /* module_149 */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      g = !createNonEnumerableProperty && u("map", TypeError),
      h = l(function () {
        var e = this.iterator,
          t = toString_default(isCallable(this.next, e));
        if (!(this.done = !!t.done))
          return DataModule_323(e, this.mapper, [t.value, this.counter++], true);
      });
    core_export(
      { target: "Iterator", proto: true, real: true, forced: createNonEnumerableProperty || g },
      {
        map: function (e) {
          toString_default(this);
          try {
            DataModule_65(e);
          } catch (e) {
            DataModule_102(this, "throw", e);
          }
          return g ? isCallable(g, this, e) : new h(s(this), { mapper: e });
        },
      }
    );
  }