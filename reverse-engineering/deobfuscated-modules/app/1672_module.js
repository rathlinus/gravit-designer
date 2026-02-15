/**
 * Webpack Module #1672
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(3) /* module_3 */, require(26) /* module_26 */, require(125) /* module_125 */, require(126) /* module_126 */, require(114) /* module_114 */;
    const o = require(1347) /* module_1347 */;
    exports.exports = class {
      static setupInAppLinkReloadAppForOnce() {
        const exports = function (t) {
          let { type: require, data: i } = t;
          if (require === o.Type.OpenInAppLink) {
            gContainer.removeEventListener(o, exports);
            const t = i.params,
              n = new URL(window.location.href);
            for (let exports in t) n.searchParams.set(exports, t[exports]);
            window.location.href = n.toString();
          }
        };
        gContainer.addEventListener(o, exports);
      }
    };
  }