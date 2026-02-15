/**
 * Webpack Module #21
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return true;
      }
    };
  }