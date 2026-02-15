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

function (exports, module, require) {
  "use strict";
  require(58) /* polyfill_Array_includes */, require(19) /* polyfill_Array_iterator */, require(168) /* polyfill_Array_reduce */, require(30) /* polyfill_Object_assign */, require(71) /* polyfill_String_includes */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(169) /* stub_requires_683 */, require(26) /* polyfill_DOMCollection_iterator */;
  const n = require(352) /* module */, r = require(287) /* module */, o = require(950) /* module */, {
      share: {
        pro: a = false
      } = {}
    } = require(253) /* module */;
  class s {
    static isPro() {
      return !!a;
    }
    constructor() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(this, exports);
    }
    getRole() {
      if (this.role) {
        const e = Object.values(r).find(e => {
          let {id: module} = e;
          return module === this.role;
        });
        if (e)
          return e;
      }
      return o.newFromPermissions(this.getPermissions());
    }
    getPermissions() {
      const exports = Object.values(n);
      return Object.assign({}, o.ALL_PERMISSIONS_DENIED, Object.entries(this).filter(t => {
        let [require] = t;
        return exports.includes(require);
      }).reduce((e, t) => {
        let [require, n] = t;
        return Object.assign(e, { [require]: n || false });
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
  exports.exports = s;
}
