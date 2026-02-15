/**
 * Module 938
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
  require(57) /* polyfill_parseInt */;
  exports.exports = class {
    constructor() {
      let {
        public_stats: exports,
        private_stats: module,
        team_stats: require
      } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      this._public_stats = exports, this._private_stats = module, this._team_stats = require;
    }
    getPrivateShareQuota() {
      return this._private_stats && parseInt(this._private_stats.quota) || 0;
    }
    getPublicShareQuota() {
      return this._public_stats && parseInt(this._public_stats.quota) || 0;
    }
    toJSON() {
      return {
        public_stats: this._public_stats,
        private_stats: this._private_stats,
        team_stats: this._team_stats
      };
    }
  };
}
