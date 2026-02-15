/**
 * Webpack Module #1485
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = async function (e, t, n, _interopRequireDefault) {
        var GCore = undefined !== window.dataLayer ? window.dataLayer : [],
          s = n;
        GCore.push({ version: "3.15.0" }),
          GCore.push({ gtmLocation: s }),
          GCore.push({ hardware: u() }),
          await (0, CollaborationMergeUtils._tryAndCatch)(async () => {
            if (_interopRequireDefault && !_interopRequireDefault.isAnonymous()) {
              l && l.forEach((e) => dataLayer.push({ [e]: undefined }));
              const { type: e = "EWOSU", token: t } = _interopRequireDefault;
              GCore.push({ [e]: t });
            }
          });
        var c = DataModule_859.default.getRuntimeCode();
        GCore.push({ installType: c }), GCore.push({ event: "INIT_GTM_EVENT" });
      }),
      require(8) /* polyfill_bundle_ES6 */,
      require(4) /* stub_requires_668 */,
      require(32) /* stub_requires_670 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      DataModule_859 = _interopRequireDefault(require(859) /* DataModule_859 */),
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      s = require(803) /* module_803 */;
    const { GA: { customDimensions: l } = {}, GoogleTagManagerSettings: c } =
      require(10) /* AppSettings */;
    window.dataLayer = [];
    const d = c.getContainerId(s.nodeEnv);
    !(function (e, t, n, _interopRequireDefault, GCore) {
      (e[_interopRequireDefault] = e[_interopRequireDefault] || []),
        e[_interopRequireDefault].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var DataModule_859 = t.getElementsByTagName(n)[0],
        CollaborationMergeUtils = t.createElement(n);
      (CollaborationMergeUtils.async = true),
        (CollaborationMergeUtils.src = "https://www.googletagmanager.com/gtm.js?id=" + GCore),
        DataModule_859.parentNode.insertBefore(CollaborationMergeUtils, DataModule_859);
    })(window, document, "script", "dataLayer", d);
    const u = () => {
      switch (GCore.GSystem.hardware) {
        case GCore.GSystem.Hardware.Desktop:
          return "desktop";
        case GCore.GSystem.Hardware.Tablet:
          return "tablet";
        case GCore.GSystem.Hardware.Phone:
          return "phone";
        default:
          return "unknown";
      }
    };
  }