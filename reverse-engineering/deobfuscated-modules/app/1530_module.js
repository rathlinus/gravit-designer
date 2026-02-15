/**
 * Webpack Module #1530
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */, require(8) /* polyfill_bundle_ES6 */;
    const o = require(86) /* module_86 */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      a = require(1531) /* module_1531 */,
      DataModule_1532 = require(1532) /* DataModule_1532 */,
      DataModule_1533 = require(1533) /* DataModule_1533 */,
      GCloudStorageItem = require(156) /* GCloudStorageItem */,
      c = require(790) /* module_790 */,
      d = require(554) /* module_554 */;
    function u(e) {
      (this._worker = e), (this._docs = []);
    }
    (u.prototype._docs = null),
      (u.prototype._worker = null),
      (u.prototype.has = function (e) {
        return this._docs.indexOf(e) >= 0;
      }),
      (u.prototype._addDocToQueue = function (e) {
        this._docs.push(e);
      }),
      (u.prototype._removeDocFromQueue = function (e) {
        this._docs.splice(this._docs.indexOf(e), 1);
      }),
      (u.prototype.isSaving = function () {
        return this._docs.length > 0;
      }),
      (u.prototype.save = async function (e) {
        if (this.has(e)) return Promise.resolve(null);
        this._addDocToQueue(e);
        const module = e.getEditor(),
          require = module && module.markSavePoint();
        try {
          if (this._isDocAllowedToBeAutoSaved(e)) {
            gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.AutoSaveSynchronizing, e));
            const t = this._getAutoSaveHelper(e.getStorageItem().getFile());
            return (
              (function (t) {
                const require = e.getStorageItem();
                require.setVersionId && require.setVersionId(null);
                require.setFile(t);
              })(
                await t.updateFileSceneAndMetadata(
                  e.getId(),
                  e.getStorageItem().getFile(),
                  e.getScene(),
                  await this._createDocumentMetadata(e)
                )
              ),
              gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, e)),
              gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.AutoSaveSynchronized, e)),
              true
            );
          }
          return false;
        } catch (t) {
          throw (
            (gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.AutoSaveSynchronizationFailed, e)),
            require && require.rollback(),
            t)
          );
        } finally {
          this._removeDocFromQueue(e);
        }
      }),
      (u.prototype._isDocAllowedToBeAutoSaved = function (e) {
        return (
          ![o.Saving, o.Syncing].includes(e.getStatus()) && e.canSaveToCloud()
        );
      }),
      (u.prototype._createDocumentMetadata = async function (e) {
        const module = new c();
        return (module.thumbnail = await d.fromBlob(await e.buildPreview())), module;
      }),
      (u.prototype._getAutoSaveHelper = function (e) {
        let module = null;
        const require = e.getStorage(),
          o = gDesigner.getSyncUser();
        return (
          require === GCloudStorageItem.Storage.Gravit
            ? (module = new a(this._worker, o))
            : require === GCloudStorageItem.Storage.GoogleDrive
            ? (module = new DataModule_1532(this._worker, o))
            : (require !== GCloudStorageItem.Storage.SharePoint &&
                require !== GCloudStorageItem.Storage.OneDriveBusiness) ||
              (module = new DataModule_1533(this._worker, o)),
          module
        );
      }),
      (exports.exports = u);
  }