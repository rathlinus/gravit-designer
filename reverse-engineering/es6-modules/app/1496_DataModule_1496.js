/**
 * Webpack Module #1496
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }), (module.default = undefined));
  var o = require(803) /* module_803 */,
    AppSettings = require(10); /* AppSettings */
  const a = window && window.location && 'localhost' === window.location.hostname,
    r = {
      getAppBaseUrl: function () {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        switch (o.nodeEnv) {
          case 'production':
            return AppSettings.prodURL;
          case 'lts':
            return AppSettings.ltsURL;
          case 'rc':
            return AppSettings.rcURL;
        }
        return o.isBeta
          ? AppSettings.betaURL
          : exports && a
            ? 'http://localhost:9000'
            : AppSettings.trunkURL;
      },
    };
  module.default = r;
}
