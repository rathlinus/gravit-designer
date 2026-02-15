/**
 * Webpack Module #237
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */;
    var i = require(1) /* module */,
      a = require(10) /* AppSettings */,
      r = o(require(1091) /* module_1091 */),
      s = require(165) /* module_165 */,
      l = require(219) /* module_219 */,
      c = require(9) /* GLocale */,
      d = require(47) /* GLocaleKey */;
    function u() {}
    (u.Directory = function (e) {
      this._storage = e;
    }),
      (u.Directory.prototype._storage = null),
      (u.Directory.prototype.getStorage = function () {
        return this._storage;
      }),
      (u.Directory.prototype.getUniqueId = function () {
        return null;
      }),
      (u.Directory.prototype.addDirectory = async function (e, t) {
        throw new Error("Not implemented.");
      }),
      (u.Directory.prototype.addFile = async function (e, t) {
        throw new Error("Not implemented.");
      }),
      (u.Item = function (e) {
        this._storage = e;
      }),
      i.GObject.inherit(u.Item, i.GObject),
      (u.Item.prototype._storage = null),
      (u.Item.prototype._fileFormatVersion = null),
      (u.Item.prototype.isRegistrable = function () {
        return false;
      }),
      (u.Item.prototype.release = function () {
        this._data && (this._data = null);
      }),
      (u.Item.prototype.getStorage = function () {
        return this._storage;
      }),
      (u.Item.prototype.getUniqueId = function () {
        return null;
      }),
      (u.Item.prototype.getVersionId = function () {
        return null;
      }),
      (u.Item.prototype.getFile = function () {
        return null;
      }),
      (u.Item.prototype.getId = function () {
        return null;
      }),
      (u.Item.prototype.getFullName = function () {
        throw new Error("Not implemented.");
      }),
      (u.Item.prototype.setFileName = function (e) {
        throw new Error("Not implemented.");
      }),
      (u.Item.prototype.getName = function () {
        var e = this.getFullName();
        if (e) {
          var module = e.lastIndexOf(".");
          return module >= 0 ? e.substr(0, module) : e;
        }
        return null;
      }),
      (u.Item.prototype.getExtension = function () {
        var e = this.getFullName();
        if (e) {
          var module = e.lastIndexOf(".");
          if (module >= 0) return e.substr(module + 1).toUpperCase();
        }
        return null;
      }),
      (u.Item.prototype.storeFileFormatVersion = async function (e) {
        this._fileFormatVersion = e;
      }),
      (u.Item.prototype.getFileFormatVersion = function () {
        return this._fileFormatVersion;
      }),
      (u.Item.prototype.read = function (e, t, n) {
        throw new Error("Not implemented.");
      }),
      (u.Item.prototype.write = function (e, t, n, o, i) {
        throw new Error("Not implemented.");
      }),
      (u.Item.prototype.createOrUpdateFileWithMetadata = async function (e, t) {
        throw new Error("Not implemented");
      }),
      (u.Item.prototype.getToken = function () {
        throw new Error("Not implemented");
      }),
      (u.Item.prototype.supportsShadowFile = function () {
        return false;
      }),
      (u.Item.prototype.isEditingEnabled = function () {
        return true;
      }),
      (u.Item.prototype.supportsSharing = function () {
        return false;
      }),
      (u.Item.prototype.hasVersionControl = function () {
        return false;
      }),
      (u.Item.prototype.supportsExternalSharing = function () {
        return false;
      }),
      (u.Item.prototype.supportsExternalSharingByLink = function () {
        return false;
      }),
      (u.Item.prototype.getPermissionsList = function () {}),
      (u.Item.prototype._fileSizeBeforeSaved = 0),
      (u.Item.prototype._fileSizeAfterSaved = 0),
      (u.Item.prototype.documentRealFileSize = 0),
      (u.Item.prototype._fileLastModifiedDate = null),
      (u.Item.prototype._fileAutoSaveLastModifiedDate = null),
      (u.Item.prototype._isSaveCounterMeasureEnabled = false),
      (u.Item.prototype.getFileSizeBeforeSaved = function () {
        return this._fileSizeBeforeSaved;
      }),
      (u.Item.prototype._setFileSizeBeforeSaved = function (e) {
        this._fileSizeBeforeSaved = e;
      }),
      (u.Item.prototype.getFileLastModifiedDate = function () {
        return this._fileLastModifiedDate;
      }),
      (u.Item.prototype.setFileLastModifiedDate = function (e) {
        this._fileLastModifiedDate = e;
      }),
      (u.Item.prototype.getFileAutoSaveLastModifiedDate = function () {
        return this._fileAutoSaveLastModifiedDate;
      }),
      (u.Item.prototype.setFileAutoSaveLastModifiedDate = function (e) {
        this._fileAutoSaveLastModifiedDate = e;
      }),
      (u.Item.prototype._setFileSizeAfterSaved = async function () {
        throw new Error("Not implemented");
      }),
      (u.Item.prototype.getFileSizeAfterSaved = function () {
        return this._fileSizeAfterSaved;
      }),
      (u.Item.prototype.isSaveCounterMeasureEnabled = function () {
        return this._isSaveCounterMeasureEnabled;
      }),
      (u.Item.prototype.setSaveCounterMeasureEnabled = function (e) {
        this._isSaveCounterMeasureEnabled = e;
      }),
      (u.Item.prototype._verifyFileNotTooSmall = function (e, t) {
        try {
          e < a.UN_BELIVEVABLE_FEW_BYTES_TO_SAVE &&
            !this.isSaveCounterMeasureEnabled() &&
            new l(c.get(new d("GDocument", "text.saveing-error"))).open(),
            this.getDocumentRealSizeAfterSave(t);
        } catch (e) {
          console.error(e);
        }
      }),
      (u.Item.prototype._verifyFileSizeAfterSaved = function () {
        try {
          (() =>
            !(this.getFileSizeBeforeSaved() < this.getFileSizeAfterSaved()) &&
            this.getFileSizeBeforeSaved() / 2 >
              this.getFileSizeAfterSaved())() &&
            this.getFileSizeAfterSaved() &&
            this.getFileSizeAfterSaved() > 0 &&
            new l(c.get(new d("GDocument", "text.saveing-error"))).open();
        } catch (e) {
          console.error(e);
        }
      }),
      (u.Item.prototype.notEnoughDiskSpace = function () {
        new l(c.get(new d("GDocument", "text.save-no-space"))).open();
      }),
      (u.Item.prototype.getDocumentRealSizeAfterSave = function (e) {
        let module = null;
        e = e || gDesigner.getActiveDocument();
        try {
          module = i.GNode.serialize(e.getScene(), { save: true, singleton: false });
        } catch (e) {
          return (
            console.error(e),
            (this.documentRealFileSize = 0),
            this.documentRealFileSize
          );
        }
        return null === module || "" === module
          ? ((this.documentRealFileSize = 0), this.documentRealFileSize)
          : ((this.documentRealFileSize = s.gzip(module, { level: 9 }).length),
            this.documentRealFileSize);
      }),
      (u.Item.prototype.hasUpdates = async function () {
        throw Error("Not implemented!");
      }),
      (u.prototype.canChooseDirectory = function () {
        return false;
      }),
      (u.prototype.canPromptOpen = function () {
        return false;
      }),
      (u.prototype.canPromptSave = function () {
        return false;
      }),
      (u.prototype.canSave = function () {
        return false;
      }),
      (u.prototype.canDownload = function () {
        return false;
      }),
      (u.prototype.chooseDirectory = function (e, t) {
        throw new Error("Not implemented.");
      }),
      (u.prototype.openPrompt = function (e, t, n, o) {
        throw new Error("Not implemented.");
      }),
      (u.prototype.savePrompt = function (e, t, n, o) {
        throw new Error("Not implemented.");
      }),
      (u.prototype.download = function (e, t) {
        throw new Error("Not implemented.");
      }),
      (u.prototype.storeLastDirectory = function (e) {
        gDesigner.setSetting("lastDirectory", e);
      }),
      (u.prototype.getLastDirectory = function () {
        var e =
          i.GSystem.operatingSystem === i.GSystem.OperatingSystem.Windows
            ? "\\"
            : "/";
        if (gDesigner.getSetting("lastDirectory"))
          return gDesigner.getSetting("lastDirectory");
        if (
          gDesigner.getActiveDocument() &&
          gDesigner.getActiveDocument().getStorageItem()
        ) {
          let t = gDesigner.getActiveDocument().getStorageItem().getUniqueId();
          return t.substring(0, t.lastIndexOf(e));
        }
        for (var module = 0; module < gDesigner.getDocuments().length; ++module)
          if (gDesigner.getDocuments()[module].getStorageItem()) {
            let n = gDesigner.getDocuments()[module].getStorageItem().getUniqueId();
            return n.substring(0, n.lastIndexOf(e));
          }
        return "";
      }),
      (u.prototype.getPlugins = function () {
        return [];
      }),
      (u.prototype.getPluginPath = function (e) {
        return null;
      }),
      (u.prototype.getPluginSrc = function (e) {
        return null;
      }),
      (u.prototype.getWritePermission = async function (e) {
        return new r.default(true);
      }),
      (exports.exports = u);
  }