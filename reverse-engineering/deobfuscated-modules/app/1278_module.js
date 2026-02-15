/**
 * Webpack Module #1278
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    class o {
      static getSetting() {
        return "scrubbing_flag";
      }
      static isEnabled() {
        return !!gDesigner.getSetting(o.getSetting(), true);
      }
    }
    exports.exports = o;
  }