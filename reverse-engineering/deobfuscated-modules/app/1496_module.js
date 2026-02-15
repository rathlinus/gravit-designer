/**
 * Webpack Module #1496
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }), (module.default = undefined);
    var o = require(803) /* module_803 */,
      i = require(10) /* AppSettings */;
    const a =
        window && window.location && "localhost" === window.location.hostname,
      r = {
        getAppBaseUrl: function () {
          let exports =
            arguments.length > 0 && undefined !== arguments[0] && arguments[0];
          switch (o.nodeEnv) {
            case "production":
              return i.prodURL;
            case "lts":
              return i.ltsURL;
            case "rc":
              return i.rcURL;
          }
          return o.isBeta
            ? i.betaURL
            : exports && a
            ? "http://localhost:9000"
            : i.trunkURL;
        },
      };
    module.default = r;
  }