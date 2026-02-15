/**
 * Webpack Module #1327
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* module_8 */;
    const o = n(1574) /* module_1574 */,
      i = n(1576) /* module_1576 */;
    n(1186) /* module_1186 */;
    e.exports = class {
      static async newBuilder(e) {
        return (await gDesigner.isOfflineAsync()) ? new i(e) : new o();
      }
    };
  }