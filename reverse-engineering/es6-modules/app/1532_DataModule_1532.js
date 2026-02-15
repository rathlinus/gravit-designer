/**
 * Webpack Module #1532
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1); /* GCore */
  const { FILE_FORMATS: i } = require(10) /* AppSettings */,
    a = i.find((e) => e.default),
    { COMMAND_SAVE: r } = require(591) /* DataModule_591 */,
    DataModule_1164 = require(1164) /* DataModule_1164 */,
    GGoogleDriveItem = require(556); /* GGoogleDriveItem */
  exports.exports = class extends DataModule_1164 {
    constructor(e, t) {
      super(e, t);
    }
    async updateFileSceneAndMetadata(e, t, n, GCore) {
      const i = await this._requestWorkerToSave(e, t, n, GCore);
      return GGoogleDriveItem.convertToCloudItem(i);
    }
    _requestWorkerToSave(e, t, n, i) {
      return new Promise((DataModule_1164, GGoogleDriveItem) => {
        const c = this._request(r.REQUEST, {
          id: e,
          file: t,
          metadata: i,
          scene: GCore.GNode.serialize(n, { save: true }),
          type: a.type,
        });
        this._worker.addEventListener(
          'message',
          function (e) {
            const { cmd: t, id: n, data: GCore } = e.data;
            if ((t !== r.SUCCESS && t !== r.FAILED) || n !== c) return false;
            t === r.SUCCESS ? DataModule_1164(GCore.file) : t === r.FAILED && GGoogleDriveItem();
            return true;
          }.bind(this),
          { once: true }
        );
      });
    }
  };
}
