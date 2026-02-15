/**
 * Webpack Module #1531
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(4) /* module_4 */, require(13) /* module_13 */, require(38) /* module_38 */;
    var o = require(1) /* module */;
    const { FILE_FORMATS: i, gApi: a } = require(10) /* module_10 */,
      r = i.find((e) => e.default),
      { COMMAND_SAVE: s, COMMAND_SYNC_IMAGES: l } = require(591) /* module_591 */,
      c = require(1164) /* module_1164 */;
    exports.exports = class extends c {
      function Object() { [native code] }(e, t) {
        super(e, t);
      }
      async updateFileSceneAndMetadata(e, t, n, o) {
        await this._syncSceneImages(e, n);
        const { sceneSnapshot: i, urls: r } = await this._saveScene(e, t, n);
        return (
          console.log({ documentId: e, file: t, sceneSnapshot: i, urls: r }),
          await this._saveThumbnail(o.thumbnail.getImageAsBlob(), r.url_t),
          await a.commitAutoSaveFileUpdate(t.id),
          a.getFile(e + "?edit")
        );
      }
      _syncSceneImages(e, t) {
        return new Promise((n) => {
          let i = t.getDictionary().getEntries(),
            r = [];
          (i = i.map(
            (e) => (
              e.hasOwnProperty("cachedCanvas") && (e.cachedCanvas = null), e
            )
          )),
            t.acceptChildren((e) => {
              e instanceof o.GImage &&
                r.push({
                  name: e.getProperty("name"),
                  url: e.getProperty("url"),
                });
            });
          const s = Object.create(t),
            c = this._request(l.REQUEST, {
              id: e,
              images: r,
              entries: i,
              cloudURL: a.url,
            });
          this._worker.addEventListener(
            "message",
            function (e) {
              const { cmd: t, id: i, data: a } = e.data;
              if (t !== l.SUCCESS || i !== c) return false;
              let r = s.getDictionary();
              s.setCloudSynchronization(null);
              let d = new o.GDictionary();
              return d.deserialize(a), r.merge(d), n(), true;
            }.bind(this),
            { once: true }
          );
        });
      }
      _saveScene(e, t, n) {
        return new Promise((i, a) => {
          let l = o.GNode.serialize(n, { save: true });
          const c = Object.create(n),
            d = this._request(s.REQUEST, {
              id: e,
              file: t,
              scene: l,
              type: r.type,
            });
          this._worker.addEventListener(
            "message",
            function (e) {
              const { cmd: t, id: n, data: o } = e.data;
              if ((t !== s.SUCCESS && t !== s.FAILED) || n !== d) return false;
              t === s.SUCCESS
                ? i({ sceneSnapshot: c, urls: o.urls })
                : t === s.FAILED && a();
              return true;
            }.bind(this),
            { once: true }
          );
        });
      }
      _saveThumbnail(e, t) {
        const require = new XMLHttpRequest();
        require.open("PUT", t);
        const o = {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public,max-age=31600000",
        };
        for (var i in o) require.setRequestHeader(i, o[i]);
        require.send(e);
      }
    };
  }