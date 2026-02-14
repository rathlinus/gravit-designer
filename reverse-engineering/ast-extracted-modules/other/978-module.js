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

function (e, t, i) {
  "use strict";
  i(20), i(107);
  e.exports = class {
    static isAvailable() {
      return void 0 !== window.grecaptcha && /^(prod|trunk)/.test(window.env || "") && "localhost" !== location.hostname;
    }
  };
}
