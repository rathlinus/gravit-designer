/**
 * Webpack Module #1572
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16)(
    /* _interopRequireDefault */ require(1573) /* module_1573 */
  );
  exports.exports = class {
    constructor(e, t) {
      this._promiseManager = new _interopRequireDefault.default();
    }
    getAnnotations(e, t) {
      return this._fetch({ id: e, shareToken: t });
    }
    updateAnnotations(e, t, n) {
      return this._fetch({ id: e, data: t, shareToken: n });
    }
    _fetch(e) {
      let { id: module, data: require, shareToken: _interopRequireDefault } = e;
      const i = require
        ? () => gApi.updateAnnotations(module, require, _interopRequireDefault)
        : () => gApi.getAnnotations(module, _interopRequireDefault);
      return this._promiseManager.pushPromise(i);
    }
  };
}
