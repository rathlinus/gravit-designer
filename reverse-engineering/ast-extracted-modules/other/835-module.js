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

function (e, t, i) {
  "use strict";
  i(58), i(71);
  const {
      UNKNOWN: n,
      IN_REVIEW: r,
      AWAITING_APPROVAL: o,
      APPROVED: a,
      REOPENED: s
    } = i(586), l = Object.freeze({
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
  }, e.exports = h;
}
