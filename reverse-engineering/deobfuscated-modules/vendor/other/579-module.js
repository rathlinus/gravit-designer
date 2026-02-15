/**
 * Module 579
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
  require(30) /* polyfill_Object_assign */;
  exports.exports = class {
    constructor(e) {
      Object.assign(this, e);
    }
    getCreated() {
      return this.created;
    }
    getFileId() {
      return this.file_id;
    }
    getUser() {
      return this.user;
    }
    isLockedBy(e) {
      return this.user.id === e.id;
    }
    equals(e) {
      return this.file_id == e.file_id && this.user.id === e.user.id;
    }
    toJSON() {
      return {
        file_id: this.getFileId(),
        user: this.getUser(),
        created: this.getCreated()
      };
    }
  };
}
