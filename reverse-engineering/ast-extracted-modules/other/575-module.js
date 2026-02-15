/**
 * Module 575
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
  i(58), i(19), i(168), i(30), i(71), i(4), i(41), i(13), i(169), i(26);
  const n = i(352), r = i(287), o = i(950), {
      share: {
        pro: a = !1
      } = {}
    } = i(253);
  class s {
    static isPro() {
      return !!a;
    }
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Object.assign(this, e);
    }
    getRole() {
      if (this.role) {
        const e = Object.values(r).find(e => {
          let {id: t} = e;
          return t === this.role;
        });
        if (e)
          return e;
      }
      return o.newFromPermissions(this.getPermissions());
    }
    getPermissions() {
      const e = Object.values(n);
      return Object.assign({}, o.ALL_PERMISSIONS_DENIED, Object.entries(this).filter(t => {
        let [i] = t;
        return e.includes(i);
      }).reduce((e, t) => {
        let [i, n] = t;
        return Object.assign(e, { [i]: n || !1 });
      }, {}));
    }
    isPublic() {
      return !!this.token;
    }
    getToken() {
      return this.token;
    }
    assignRole(e) {
      return new s(Object.assign({}, this, o.ALL_PERMISSIONS_DENIED, e.permissions, { role: e.id }));
    }
  }
  e.exports = s;
}
