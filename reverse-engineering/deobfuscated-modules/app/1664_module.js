/**
 * Webpack Module #1664
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* module_4 */, require(41) /* module_41 */;
    var o = require(10) /* module_10 */;
    class i {
      static getElements() {
        return i.isUnsplashIntegrationEnabled()
          ? o.ELEMENTS
          : o.ELEMENTS.filter((e) => "element.image" !== e.path);
      }
      static isUnsplashIntegrationEnabled() {
        return o.ENABLE_UNSPLASH_INTEGRATION;
      }
    }
    exports.exports = i;
  }