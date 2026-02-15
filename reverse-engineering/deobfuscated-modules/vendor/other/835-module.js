/**
 * Module 835
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
  require(58) /* polyfill_Array_includes */, require(71) /* polyfill_String_includes */;
  const {
      UNKNOWN: n,
      IN_REVIEW: r,
      AWAITING_APPROVAL: o,
      APPROVED: a,
      REOPENED: s
    } = require(586) /* module */, l = Object.freeze({
      [n]: [r],
      [r]: [o],
      [o]: [
        r,
        s,
        a
      ],
      [s]: [
        r,
        o
      ],
      [a]: [
        r,
        s
      ]
    });
  function h(e) {
    this._currentStatus = e, this._flow = l[e];
  }
  h.prototype.canMoveTo = function (e) {
    return this._flow.includes(e);
  }, exports.exports = h;
}
