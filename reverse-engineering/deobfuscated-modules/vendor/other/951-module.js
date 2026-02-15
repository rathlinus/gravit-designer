/**
 * Module 951
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
  class n {
    constructor() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      if (exports.autosave_updated) {
        const t = exports.file_updated ? exports.file_updated : exports.updated ? exports.updated : exports.created;
        new Date(exports.autosave_updated) > new Date(t) && (exports.autosave = true);
      }
      Object.assign(this, exports);
    }
    clone() {
      return new n(this);
    }
    getOwner() {
      return this.owner;
    }
    isOwner(e) {
      return this.owner.user_id === e.id;
    }
    isAutoSave() {
      return this.autosave;
    }
    getFileDataURL() {
      return this.isAutoSave() ? this.autosave_url : this.url;
    }
  }
  exports.exports = n;
}
