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

function (e, t, i) {
  "use strict";
  i(30);
  class n {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (e.autosave_updated) {
        const t = e.file_updated ? e.file_updated : e.updated ? e.updated : e.created;
        new Date(e.autosave_updated) > new Date(t) && (e.autosave = !0);
      }
      Object.assign(this, e);
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
  e.exports = n;
}
