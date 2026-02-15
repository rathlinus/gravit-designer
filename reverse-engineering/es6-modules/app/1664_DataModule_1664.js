/**
 * Webpack Module #1664
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(4) /* stub_requires_668 */, require(41)) /* stub_requires_682 */;
  var AppSettings = require(10); /* AppSettings */
  class i {
    static getElements() {
      return i.isUnsplashIntegrationEnabled()
        ? AppSettings.ELEMENTS
        : AppSettings.ELEMENTS.filter((e) => 'element.image' !== e.path);
    }
    static isUnsplashIntegrationEnabled() {
      return AppSettings.ENABLE_UNSPLASH_INTEGRATION;
    }
  }
  exports.exports = i;
}
