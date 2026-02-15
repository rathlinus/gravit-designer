/**
 * Webpack Module #1468
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */, require(8)) /* polyfill_bundle_ES6 */;
  var DataModule_1469 = require(1469) /* DataModule_1469 */,
    AppSettings = require(10); /* AppSettings */
  exports.exports = new (class {
    async register(e) {
      const module = gDesigner.getEnv();
      if ('production' === module || 'trunk' === module || 'lts' === module || 'rc' === module) {
        const t = (0, DataModule_1469.getOS)(),
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
