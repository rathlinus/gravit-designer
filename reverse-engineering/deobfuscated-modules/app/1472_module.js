/**
 * Webpack Module #1472
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    let o;
    require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(26) /* polyfill_DOMCollection_iterator */;
    class i {
      static async getInstance() {
        if (!o) {
          const e = await require.e(12).then(require.t.bind(null, 1740, 7));
          o = e.default;
        }
        return new i();
      }
      parse(e) {
        return o({ blob: e });
      }
    }
    exports.exports = i;
  }