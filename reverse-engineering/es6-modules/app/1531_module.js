/**
 * Webpack Module #1531
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(38)) /* stub_requires_680 */;
  var GCore = require(1); /* GCore */
  const { FILE_FORMATS: i, gApi: a } = require(10) /* AppSettings */,
    r = i.find((e) => e.default),
    { COMMAND_SAVE: s, COMMAND_SYNC_IMAGES: l } = require(591) /* DataModule_591 */,
    DataModule_1164 = require(1164); /* DataModule_1164 */
  exports.exports = class extends DataModule_1164 {
    constructor(e, t) {
      super(e, t);
    }
    async updateFileSceneAndMetadata(e, t, n, GCore) {
      await this._syncSceneImages(e, n);
      const { sceneSnapshot: i, urls: r } = await this._saveScene(e, t, n);
      return (
        console.log({ documentId: e, file: t, sceneSnapshot: i, urls: r }),
        await this._saveThumbnail(GCore.thumbnail.getImageAsBlob(), r.url_t),
        await a.commitAutoSaveFileUpdate(t.id),
        a.getFile(e + '?edit')
      );
    }
    _syncSceneImages(e, t) {
      return new Promise((n) => {
        let i = t.getDictionary().getEntries(),
          r = [];
        ((i = i.map((e) => (e.hasOwnProperty('cachedCanvas') && (e.cachedCanvas = null), e))),
          t.acceptChildren((e) => {
            e instanceof GCore.GImage &&
              r.push({
                name: e.getProperty('name'),
                url: e.getProperty('url'),
              });
          }));
        const s = Object.create(t),
          DataModule_1164 = this._request(l.REQUEST, {
            id: e,
            images: r,
            entries: i,
            cloudURL: a.url,
          });
        this._worker.addEventListener(
          'message',
          function (e) {
            const { cmd: t, id: i, data: a } = e.data;
            if (t !== l.SUCCESS || i !== DataModule_1164) return false;
            let r = s.getDictionary();
            s.setCloudSynchronization(null);
            let d = new GCore.GDictionary();
            return (d.deserialize(a), r.merge(d), n(), true);
          }.bind(this),
          { once: true }
        );
      });
    }
    _saveScene(e, t, n) {
      return new Promise((i, a) => {
        let l = GCore.GNode.serialize(n, { save: true });
        const DataModule_1164 = Object.create(n),
          d = this._request(s.REQUEST, {
            id: e,
            file: t,
            scene: l,
            type: r.type,
          });
        this._worker.addEventListener(
          'message',
          function (e) {
            const { cmd: t, id: n, data: GCore } = e.data;
            if ((t !== s.SUCCESS && t !== s.FAILED) || n !== d) return false;
            t === s.SUCCESS
              ? i({ sceneSnapshot: DataModule_1164, urls: GCore.urls })
              : t === s.FAILED && a();
            return true;
          }.bind(this),
          { once: true }
        );
      });
    }
    _saveThumbnail(e, t) {
      const require = new XMLHttpRequest();
      require.open('PUT', t);
      const GCore = {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public,max-age=31600000',
      };
      for (var i in GCore) require.setRequestHeader(i, GCore[i]);
      require.send(e);
    }
  };
}
