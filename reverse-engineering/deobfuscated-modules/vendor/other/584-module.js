/**
 * Module 584
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
  require(19) /* polyfill_Array_iterator */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
  const {
      Events: n,
      EventProperties: r,
      UserProperties: o
    } = require(431) /* module */, a = require(979) /* module */;
  exports.exports = class {
    constructor(e) {
      let {
        userId: module,
        apiKey: require
      } = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      this._userId = module, this._amplitude = e, require && this.init(require);
    }
    init(e) {
      if (!a.Env.isTest())
        try {
          this._amplitude.init(e);
        } catch (e) {
          console.log(e);
        }
    }
    logEvent(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      try {
        this._amplitude.track(e, this._formatProperties(e, module), { user_id: module.userId || this._userId });
      } catch (e) {
        console.error(e);
      }
    }
    updateUserProperties(e, t, i) {
      try {
        const n = new this._amplitude.Identify();
        if (e)
          for (let [t, i] of Object.entries(e))
            n.set(t, i);
        t && (n.set(o.PRODUCT_LICENSE_TYPE, t.userType || t.getSubscriberUserType()), n.set(o.PRODUCT_LICENSE_STATUS, t.userStatus || t.getSubscriberUserStatus())), this._amplitude.identify(n, { user_id: i || this._userId });
      } catch (e) {
        console.error(e);
      }
    }
    _formatProperties(e, t) {
      if (!Object.keys(t).length)
        return t;
      const require = {}, o = Object.keys(n).find(t => n[t] === e);
      if (r[o])
        for (let [e, n] of Object.entries(r[o]))
          t.hasOwnProperty(e) && (require[n] = t[e]);
      return require;
    }
  };
}
