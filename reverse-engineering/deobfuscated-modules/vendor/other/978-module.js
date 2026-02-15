/**
 * Module 978
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */;
  exports.exports = class {
    static isAvailable() {
      return undefined !== window.grecaptcha && /^(prod|trunk)/.test(window.env || "") && "localhost" !== location.hostname;
    }
  };
}
