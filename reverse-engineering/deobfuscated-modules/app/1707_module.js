/**
 * Webpack Module #1707
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(29) /* isCallable */,
      a = require(37) /* toString_default */,
      r = require(143) /* module_143 */,
      s = require(1708) /* module_1708 */,
      l = require(576) /* module_576 */,
      c = require(102) /* module_102 */,
      d = require(371) /* module_371 */,
      u = require(149) /* module_149 */,
      p = require(74) /* createNonEnumerableProperty */,
      g = !p && u("drop", RangeError),
      h = d(function () {
        for (var exports, module = this.iterator, require = this.next; this.remaining; )
          if ((this.remaining--, (exports = a(i(require, module))), (this.done = !!exports.done)))
            return;
        if (((exports = a(i(require, module))), !(this.done = !!exports.done))) return exports.value;
      });
    o(
      { target: "Iterator", proto: true, real: true, forced: p || g },
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