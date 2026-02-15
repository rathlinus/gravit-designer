/**
 * Webpack Module #1468
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(30) /* polyfill_Object_assign */, n(8) /* polyfill_bundle_ES6 */;
    var o = n(1469) /* module_1469 */,
      i = n(10) /* AppSettings */;
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