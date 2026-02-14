/**
 * Module 820
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
  const n = {
    production: "GTM-PCQVB7H",
    trunk: "GTM-PXF3B3T",
    lts: "GTM-NQ8344N",
    beta: "GTM-NW9G8S4",
    rc: "GTM-TTRN3TK"
  };
  e.exports = class {
    static getContainerId() {
      return n[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""] || n.trunk;
    }
  };
}
