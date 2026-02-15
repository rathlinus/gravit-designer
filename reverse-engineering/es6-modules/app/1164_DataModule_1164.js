/**
 * Webpack Module #1164
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  const GUtil = require(11); /* GUtil */
  exports.exports = class {
    constructor(e, t) {
      ((this._worker = e), (this._user = t));
    }
    async updateFileSceneAndMetadata(e, t, n) {
      throw 'Not implemented';
    }
    _request(e, t) {
      const require = GUtil.uuid(64);
      return (
        this._worker.postMessage({
          cmd: e,
          data: t,
          id: require,
          user: this._user,
        }),
        require
      );
    }
  };
}
