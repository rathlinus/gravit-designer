/**
 * Webpack Module #1664
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(4) /* module_4 */, n(41) /* module_41 */;
    var o = n(10) /* module_10 */;
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
    e.exports = i;
  }