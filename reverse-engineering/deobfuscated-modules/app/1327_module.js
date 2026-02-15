/**
 * Webpack Module #1327
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    const o = require(1574) /* module_1574 */,
      i = require(1576) /* module_1576 */;
    require(1186) /* module_1186 */;
    exports.exports = class {
      static async newBuilder(e) {
        return (await gDesigner.isOfflineAsync()) ? new i(e) : new o();
      }
    };
  }