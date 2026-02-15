/**
 * Webpack Module #1487
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  exports.exports = class {
    static getSetting() {
      return 'show_welcome_screen';
    }
    static isEnabled() {
      const exports = gDesigner.getSetting('show_welcome_screen');
      return 'boolean' != typeof exports || exports;
    }
  };
}
