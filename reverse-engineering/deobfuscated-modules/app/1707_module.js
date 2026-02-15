/**
 * Webpack Module #1707
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      toString_default = require(37) /* toString_default */,
      r = require(143) /* module_143 */,
      DataModule_1708 = require(1708) /* DataModule_1708 */,
      DataModule_576 = require(576) /* DataModule_576 */,
      DataModule_102 = require(102) /* DataModule_102 */,
      d = require(371) /* module_371 */,
      u = require(149) /* module_149 */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      g = !createNonEnumerableProperty && u("drop", RangeError),
      h = d(function () {
        for (var exports, module = this.iterator, require = this.next; this.remaining; )
          if ((this.remaining--, (exports = toString_default(isCallable(require, module))), (this.done = !!exports.done)))
            return;
        if (((exports = toString_default(isCallable(require, module))), !(this.done = !!exports.done))) return exports.value;
      });
    core_export(
      { target: "Iterator", proto: true, real: true, forced: createNonEnumerableProperty || g },
      {
        drop: function (e) {
          var t;
          toString_default(this);
          try {
            t = DataModule_576(DataModule_1708(+e));
          } catch (e) {
            DataModule_102(this, "throw", e);
          }
          return g ? isCallable(g, this, t) : new h(r(this), { remaining: t });
        },
      }
    );
  }