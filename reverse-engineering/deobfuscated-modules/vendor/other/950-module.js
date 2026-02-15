/**
 * Module 950
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
  require(19) /* polyfill_Array_iterator */, require(168) /* polyfill_Array_reduce */, require(30) /* polyfill_Object_assign */, require(4) /* stub_requires_668 */, require(322) /* stub_requires_669 */, require(13) /* stub_requires_679 */, require(169) /* stub_requires_683 */, require(26) /* polyfill_DOMCollection_iterator */;
  const n = require(287) /* module */, r = require(352) /* module */;
  class o {
    static get ALL_PERMISSIONS_DENIED() {
      return Object.values(r).reduce((e, t) => Object.assign(e, { [t]: false }), {});
    }
    static newFromPermissions() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      if (exports[r.OWNER])
        return n.Owner;
      if (!exports[r.ACCESS])
        return n.NoAccess;
      const module = Object.assign({}, o.ALL_PERMISSIONS_DENIED, Object.entries(exports).reduce((e, t) => {
          let [require, n] = t;
          return Object.assign(e, { [require]: n || false });
        }, {})), require = Object.keys(module).length, a = Object.values(n).find(e => {
          let {permissions: n} = e;
          const r = Object.entries(Object.assign({}, o.ALL_PERMISSIONS_DENIED, n));
          if (r.length === require)
            return r.every(e => {
              let [require, n] = e;
              return module[require] === n;
            });
        });
      return a || (exports[r.COPY] ? n.Developer : n.Viewer);
    }
  }
  exports.exports = o;
}
