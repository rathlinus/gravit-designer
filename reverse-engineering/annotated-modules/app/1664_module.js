/**
 * Webpack Module #1664
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(4) /* stub_requires_668 */, n(41) /* stub_requires_682 */;
    var o = n(10) /* AppSettings */;
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