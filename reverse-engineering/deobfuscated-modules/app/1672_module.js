/**
 * Webpack Module #1672
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(19) /* module_19 */, n(3) /* module_3 */, n(26) /* module_26 */, n(125) /* module_125 */, n(126) /* module_126 */, n(114) /* module_114 */;
    const o = n(1347) /* module_1347 */;
    e.exports = class {
      static setupInAppLinkReloadAppForOnce() {
        const e = function (t) {
          let { type: n, data: i } = t;
          if (n === o.Type.OpenInAppLink) {
            gContainer.removeEventListener(o, e);
            const t = i.params,
              n = new URL(window.location.href);
            for (let e in t) n.searchParams.set(e, t[e]);
            window.location.href = n.toString();
          }
        };
        gContainer.addEventListener(o, e);
      }
    };
  }