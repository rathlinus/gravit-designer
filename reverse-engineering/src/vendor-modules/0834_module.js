/**
 * chunk.vendor.js Module #834
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      i(30);
      const {
        TYPES: { TYPE: n },
        ACTIONS: { ACTION: r },
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
      ((o.from = function (e) {
        return new o(e);
      }),
        (e.exports = o));
    }