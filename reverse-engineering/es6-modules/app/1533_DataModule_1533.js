/**
 * Webpack Module #1533
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1); /* GCore */
  const GCloudStorageItem = require(156) /* GCloudStorageItem */,
    { FILE_FORMATS: a } = require(10) /* AppSettings */,
    r = a.find((e) => e.default),
    { COMMAND_SAVE: s } = require(591) /* DataModule_591 */,
    DataModule_1164 = require(1164); /* DataModule_1164 */
  exports.exports = class extends DataModule_1164 {
    constructor(e, t) {
      super(e, t);
    }
    async updateFileSceneAndMetadata(e, t, n, GCore) {
      const a = await this._requestWorkerToSave(e, t, n, GCore);
      return GCloudStorageItem.from(a);
    }
    _requestWorkerToSave(e, t, n, GCloudStorageItem) {
      return new Promise((a, DataModule_1164) => {
        const c = this._request(s.REQUEST, {
          id: e,
          file: t,
          metadata: GCloudStorageItem,
          scene: GCore.GNode.serialize(n, { save: true }),
          type: r.type,
        });
        this._worker.addEventListener(
          'message',
          function (e) {
            const { cmd: t, id: n, data: GCore } = e.data;
            if ((t !== s.SUCCESS && t !== s.FAILED) || n !== c) return false;
            t === s.SUCCESS ? a(GCore.file) : t === s.FAILED && DataModule_1164();
            return true;
          }.bind(this),
          { once: true }
        );
      });
    }
  };
}
