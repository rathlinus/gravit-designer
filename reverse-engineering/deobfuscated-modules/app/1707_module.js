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
      s = require(1708) /* module_1708 */,
      l = require(576) /* module_576 */,
      c = require(102) /* module_102 */,
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
            t = l(s(+e));
          } catch (e) {
            c(this, "throw", e);
          }
          return g ? isCallable(g, this, t) : new h(r(this), { remaining: t });
        },
      }
    );
  }