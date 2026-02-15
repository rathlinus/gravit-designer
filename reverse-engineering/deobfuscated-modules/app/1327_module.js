/**
 * Webpack Module #1327
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    const DataModule_1574 = require(1574) /* DataModule_1574 */,
      i = require(1576) /* module_1576 */;
    require(1186) /* DataModule_1186 */;
    exports.exports = class {
      static async newBuilder(e) {
        return (await gDesigner.isOfflineAsync()) ? new i(e) : new DataModule_1574();
      }
    };
  }