/**
 * Webpack Module #1672
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
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