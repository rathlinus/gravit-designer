/**
 * Webpack Module #1572
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */(require(1573) /* module_1573 */);
    exports.exports = class {
      function Object() { [native code] }(e, t) {
        this._promiseManager = new o.default();
      }
      getAnnotations(e, t) {
        return this._fetch({ id: e, shareToken: t });
      }
      updateAnnotations(e, t, n) {
        return this._fetch({ id: e, data: t, shareToken: n });
      }
      _fetch(e) {
        let { id: module, data: require, shareToken: o } = e;
        const i = require
          ? () => gApi.updateAnnotations(module, require, o)
          : () => gApi.getAnnotations(module, o);
        return this._promiseManager.pushPromise(i);
      }
    };
  }