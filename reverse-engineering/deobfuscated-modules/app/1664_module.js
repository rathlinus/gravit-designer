/**
 * Webpack Module #1664
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var o = require(10) /* AppSettings */;
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