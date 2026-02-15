/**
 * Module 105
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
  module.fail = function (e) {
    throw new Error(e);
  }, module.argument = function (e, i) {
    e || module.fail(i);
  }, module.assert = module.argument;
}
