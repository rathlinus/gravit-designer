/**
 * Webpack Module #1485
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = async function (e, t, n, o) {
        var i = undefined !== window.dataLayer ? window.dataLayer : [],
          s = n;
        i.push({ version: "3.15.0" }),
          i.push({ gtmLocation: s }),
          i.push({ hardware: u() }),
          await (0, r._tryAndCatch)(async () => {
            if (o && !o.isAnonymous()) {
              l && l.forEach((e) => dataLayer.push({ [e]: undefined }));
              const { type: e = "EWOSU", token: t } = o;
              i.push({ [e]: t });
            }
          });
        var c = a.default.getRuntimeCode();
        i.push({ installType: c }), i.push({ event: "INIT_GTM_EVENT" });
      }),
      require(8) /* polyfill_bundle_ES6 */,
      require(4) /* stub_requires_668 */,
      require(32) /* stub_requires_670 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var i = require(1) /* module */,
      a = o(require(859) /* module_859 */),
      r = require(40) /* CollaborationMergeUtils */,
      s = require(803) /* module_803 */;
    const { GA: { customDimensions: l } = {}, GoogleTagManagerSettings: c } =
      require(10) /* AppSettings */;
    window.dataLayer = [];
    const d = c.getContainerId(s.nodeEnv);
    !(function (e, t, n, o, i) {
      (e[o] = e[o] || []),
        e[o].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var a = t.getElementsByTagName(n)[0],
        r = t.createElement(n);
      (r.async = true),
        (r.src = "https://www.googletagmanager.com/gtm.js?id=" + i),
        a.parentNode.insertBefore(r, a);
    })(window, document, "script", "dataLayer", d);
    const u = () => {
      switch (i.GSystem.hardware) {
        case i.GSystem.Hardware.Desktop:
          return "desktop";
        case i.GSystem.Hardware.Tablet:
          return "tablet";
        case i.GSystem.Hardware.Phone:
          return "phone";
        default:
          return "unknown";
      }
    };
  }