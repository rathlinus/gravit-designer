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

function (e, t, i) {
  "use strict";
  i(19), i(30), i(4), i(13), i(32), i(38), i(33), i(26);
  const n = i(575), r = i(951);
  class o extends r {
    constructor() {
      super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
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
      const t = {}, i = e.indexOf("?");
      if (-1 !== i) {
        const n = e.substr(i + 1, e.length);
        e = e.substr(0, i);
        n.split("&").forEach(e => {
          const [i, n = ""] = e.split("=");
          Object.assign(t, { [i]: n });
        });
      }
      const n = this.getPublicShare();
      n && n.getToken() && (t.token = n.getToken()), t.d = this.id;
      const r = Object.entries(t).map(e => {
        let [t, i] = e;
        return "".concat(t, "=").concat(i);
      }).join("&");
      return e.lastIndexOf("/") === e.length - 1 && (e = e.substr(0, e.length - 1)), "".concat(e, "/?").concat(r);
    }
    clone() {
      return new o(this);
    }
  }
  e.exports = o;
}
