/**
 * Webpack Module #1496
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), (t.default = undefined);
    var o = n(803) /* module_803 */,
      i = n(10) /* module_10 */;
    const a =
        window && window.location && "localhost" === window.location.hostname,
      r = {
        getAppBaseUrl: function () {
          let e =
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
            : e && a
            ? "http://localhost:9000"
            : i.trunkURL;
        },
      };
    t.default = r;
  }