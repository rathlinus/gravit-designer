/**
 * Webpack Module #1468
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */;
    var o = require(1469) /* module_1469 */,
      AppSettings = require(10) /* AppSettings */;
    exports.exports = new (class {
      async register(e) {
        const module = gDesigner.getEnv();
        if ("production" === module || "trunk" === module || "lts" === module || "rc" === module) {
          const t = (0, o.getOS)(),
            n = gDesigner.getVersion();
          return AppSettings.gApi.diagnostic(
            Object.assign(
              {
                runtime: gContainer.getRuntime(),
                os: t,
                userAgent: window.navigator.userAgent,
                version: n,
              },
              e
            )
          );
        }
      }
    })();
  }