/**
 * chunk.vendor.js Module #938
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      i(57);
      e.exports = class {
        constructor() {
          let {
            public_stats: e,
            private_stats: t,
            team_stats: i,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          ((this._public_stats = e),
            (this._private_stats = t),
            (this._team_stats = i));
        }
        getPrivateShareQuota() {
          return (
            (this._private_stats && parseInt(this._private_stats.quota)) || 0
          );
        }
        getPublicShareQuota() {
          return (
            (this._public_stats && parseInt(this._public_stats.quota)) || 0
          );
        }
        toJSON() {
          return {
            public_stats: this._public_stats,
            private_stats: this._private_stats,
            team_stats: this._team_stats,
          };
        }
      };
    }