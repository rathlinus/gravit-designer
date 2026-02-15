/**
 * Webpack Module #1472
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    let o;
    require(19) /* module_19 */, require(8) /* module_8 */, require(26) /* module_26 */;
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