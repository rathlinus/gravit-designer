/**
 * Webpack Module #1672
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(19) /* polyfill_Array_iterator */, n(3) /* polyfill_RegExp_toString */, n(26) /* polyfill_DOMCollection_iterator */, n(125) /* stub_requires_673 */, n(126) /* polyfill_URL_toJSON */, n(114) /* stub_requires_424 */;
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