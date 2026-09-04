/**
 * chunk.vendor.js Module #835
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(58), i(71));
      const {
          UNKNOWN: n,
          IN_REVIEW: r,
          AWAITING_APPROVAL: o,
          APPROVED: a,
          REOPENED: s,
        } = i(586),
        l = Object.freeze({
          [n]: [r],
          [r]: [o],
          [o]: [r, s, a],
          [s]: [r, o],
          [a]: [r, s],
        });

      function h(e) {
        ((this._currentStatus = e), (this._flow = l[e]));
      }
      ((h.prototype.canMoveTo = function (e) {
        return this._flow.includes(e);
      }),
        (e.exports = h));
    }