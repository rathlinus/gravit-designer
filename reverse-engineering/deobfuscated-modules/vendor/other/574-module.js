/**
 * Module 574
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
  require(19) /* polyfill_Array_iterator */, require(30) /* polyfill_Object_assign */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
  const n = require(575) /* module */, r = require(951) /* module */;
  class o extends r {
    constructor() {
      super(arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {});
    }
    getPrivateShare(e) {
      if ("string" != typeof e && (e = e.id), this.user_accesses) {
        const t = this.user_accesses.find(t => t.id === e);
        if (t)
          return new n(t);
      }
      return null;
    }
    getInvitedShare(e) {
      if (this.invite_accesses) {
        const t = this.invite_accesses.find(t => t.email === e);
        if (t)
          return new n(t);
      }
      return null;
    }
    getPrivateShareList() {
      return this.user_accesses ? this.user_accesses.map(e => new n(e)) : [];
    }
    getInvitedShareList() {
      return this.invite_accesses ? this.invite_accesses.map(e => new n(e)) : [];
    }
    getPublicShare() {
      return this.link_accesses && this.link_accesses ? new n(this.link_accesses[0]) : null;
    }
    getShareLink(e) {
      const module = {}, require = e.indexOf("?");
      if (-1 !== require) {
        const n = e.substr(require + 1, e.length);
        e = e.substr(0, require);
        n.split("&").forEach(e => {
          const [require, n = ""] = e.split("=");
          Object.assign(module, { [require]: n });
        });
      }
      const n = this.getPublicShare();
      n && n.getToken() && (module.token = n.getToken()), module.d = this.id;
      const r = Object.entries(module).map(e => {
        let [module, require] = e;
        return "".concat(module, "=").concat(require);
      }).join("&");
      return e.lastIndexOf("/") === e.length - 1 && (e = e.substr(0, e.length - 1)), "".concat(e, "/?").concat(r);
    }
    clone() {
      return new o(this);
    }
  }
  exports.exports = o;
}
