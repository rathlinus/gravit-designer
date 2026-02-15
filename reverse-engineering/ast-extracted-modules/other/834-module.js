/**
 * Module 834
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
  i(30);
  const {
    TYPES: {TYPE: n},
    ACTIONS: {ACTION: r}
  } = i(585);
  class o {
    constructor(e) {
      Object.assign(this, e);
    }
    getAction() {
      return this.change & r;
    }
    getType() {
      return this.change & n;
    }
  }
  o.from = function (e) {
    return new o(e);
  }, e.exports = o;
}
