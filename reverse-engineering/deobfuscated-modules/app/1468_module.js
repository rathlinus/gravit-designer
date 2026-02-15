/**
 * Webpack Module #1468
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(30) /* module_30 */, n(8) /* module_8 */;
    var o = n(1469) /* module_1469 */,
      i = n(10) /* module_10 */;
    e.exports = new (class {
      async register(e) {
        const t = gDesigner.getEnv();
        if ("production" === t || "trunk" === t || "lts" === t || "rc" === t) {
          const t = (0, o.getOS)(),
            n = gDesigner.getVersion();
          return i.gApi.diagnostic(
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