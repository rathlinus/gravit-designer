/**
 * Webpack Module #237
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(8) /* polyfill_bundle_ES6 */;
  var GCore = require(1) /* GCore */,
    AppSettings = require(10) /* AppSettings */,
    r = _interopRequireDefault(require(1091) /* module_1091 */),
    s = require(165) /* module_165 */,
    GLocale = require(219) /* GLocale */,
    GLocale2 = require(9) /* GLocale */,
    GLocaleKey = require(47);
  class u {
    canChooseDirectory() {
      return false;
    }

    canPromptOpen() {
      return false;
    }

    canPromptSave() {
      return false;
    }

    canSave() {
      return false;
    }

    canDownload() {
      return false;
    }

    chooseDirectory(e, t) {
      throw new Error('Not implemented.');
    }

    openPrompt(e, t, n, _interopRequireDefault) {
      throw new Error('Not implemented.');
    }

    savePrompt(e, t, n, _interopRequireDefault) {
      throw new Error('Not implemented.');
    }

    download(e, t) {
      throw new Error('Not implemented.');
    }

    storeLastDirectory(e) {
      gDesigner.setSetting('lastDirectory', e);
    }

    getLastDirectory() {
      var e = GCore.GSystem.operatingSystem === GCore.GSystem.OperatingSystem.Windows ? '\\' : '/';
      if (gDesigner.getSetting('lastDirectory')) return gDesigner.getSetting('lastDirectory');
      if (gDesigner.getActiveDocument() && gDesigner.getActiveDocument().getStorageItem()) {
        let t = gDesigner.getActiveDocument().getStorageItem().getUniqueId();
        return t.substring(0, t.lastIndexOf(e));
      }
      for (var module = 0; module < gDesigner.getDocuments().length; ++module)
        if (gDesigner.getDocuments()[module].getStorageItem()) {
          let n = gDesigner.getDocuments()[module].getStorageItem().getUniqueId();
          return n.substring(0, n.lastIndexOf(e));
        }
      return '';
    }

    getPlugins() {
      return [];
    }

    getPluginPath(e) {
      return null;
    }

    getPluginSrc(e) {
      return null;
    }

    async getWritePermission(e) {
      return new r.default(true);
    }

    static Directory(e) {
    this._storage = e;
  }

    static Item(e) {
      this._storage = e;
    }

  }
  (u.Directory.prototype._storage = null,
    u.Directory.prototype.getStorage = function () {
      return this._storage;
    },
    u.Directory.prototype.getUniqueId = function () {
      return null;
    },
    u.Directory.prototype.addDirectory = async function (e, t) {
      throw new Error('Not implemented.');
    },
    u.Directory.prototype.addFile = async function (e, t) {
      throw new Error('Not implemented.');
    },
    GCore.GObject.inherit(u.Item, GCore.GObject),
    u.Item.prototype._storage = null,
    u.Item.prototype._fileFormatVersion = null,
    u.Item.prototype.isRegistrable = function () {
      return false;
    },
    u.Item.prototype.release = function () {
      this._data && (this._data = null);
    },
    u.Item.prototype.getStorage = function () {
      return this._storage;
    },
    u.Item.prototype.getUniqueId = function () {
      return null;
    },
    u.Item.prototype.getVersionId = function () {
      return null;
    },
    u.Item.prototype.getFile = function () {
      return null;
    },
    u.Item.prototype.getId = function () {
      return null;
    },
    u.Item.prototype.getFullName = function () {
      throw new Error('Not implemented.');
    },
    u.Item.prototype.setFileName = function (e) {
      throw new Error('Not implemented.');
    },
    u.Item.prototype.getName = function () {
      var e = this.getFullName();
      if (e) {
        var module = e.lastIndexOf('.');
        return module >= 0 ? e.substr(0, module) : e;
      }
      return null;
    },
    u.Item.prototype.getExtension = function () {
      var e = this.getFullName();
      if (e) {
        var module = e.lastIndexOf('.');
        if (module >= 0) return e.substr(module + 1).toUpperCase();
      }
      return null;
    },
    u.Item.prototype.storeFileFormatVersion = async function (e) {
      this._fileFormatVersion = e;
    },
    u.Item.prototype.getFileFormatVersion = function () {
      return this._fileFormatVersion;
    },
    u.Item.prototype.read = function (e, t, n) {
      throw new Error('Not implemented.');
    },
    u.Item.prototype.write = function (e, t, n, _interopRequireDefault, GCore) {
      throw new Error('Not implemented.');
    },
    u.Item.prototype.createOrUpdateFileWithMetadata = async function (e, t) {
      throw new Error('Not implemented');
    },
    u.Item.prototype.getToken = function () {
      throw new Error('Not implemented');
    },
    u.Item.prototype.supportsShadowFile = function () {
      return false;
    },
    u.Item.prototype.isEditingEnabled = function () {
      return true;
    },
    u.Item.prototype.supportsSharing = function () {
      return false;
    },
    u.Item.prototype.hasVersionControl = function () {
      return false;
    },
    u.Item.prototype.supportsExternalSharing = function () {
      return false;
    },
    u.Item.prototype.supportsExternalSharingByLink = function () {
      return false;
    },
    u.Item.prototype.getPermissionsList = function () {},
    u.Item.prototype._fileSizeBeforeSaved = 0,
    u.Item.prototype._fileSizeAfterSaved = 0,
    u.Item.prototype.documentRealFileSize = 0,
    u.Item.prototype._fileLastModifiedDate = null,
    u.Item.prototype._fileAutoSaveLastModifiedDate = null,
    u.Item.prototype._isSaveCounterMeasureEnabled = false,
    u.Item.prototype.getFileSizeBeforeSaved = function () {
      return this._fileSizeBeforeSaved;
    },
    u.Item.prototype._setFileSizeBeforeSaved = function (e) {
      this._fileSizeBeforeSaved = e;
    },
    u.Item.prototype.getFileLastModifiedDate = function () {
      return this._fileLastModifiedDate;
    },
    u.Item.prototype.setFileLastModifiedDate = function (e) {
      this._fileLastModifiedDate = e;
    },
    u.Item.prototype.getFileAutoSaveLastModifiedDate = function () {
      return this._fileAutoSaveLastModifiedDate;
    },
    u.Item.prototype.setFileAutoSaveLastModifiedDate = function (e) {
      this._fileAutoSaveLastModifiedDate = e;
    },
    u.Item.prototype._setFileSizeAfterSaved = async function () {
      throw new Error('Not implemented');
    },
    u.Item.prototype.getFileSizeAfterSaved = function () {
      return this._fileSizeAfterSaved;
    },
    u.Item.prototype.isSaveCounterMeasureEnabled = function () {
      return this._isSaveCounterMeasureEnabled;
    },
    u.Item.prototype.setSaveCounterMeasureEnabled = function (e) {
      this._isSaveCounterMeasureEnabled = e;
    },
    u.Item.prototype._verifyFileNotTooSmall = function (e, t) {
      try {
        (e < AppSettings.UN_BELIVEVABLE_FEW_BYTES_TO_SAVE &&
          !this.isSaveCounterMeasureEnabled() &&
          new GLocale(GLocale2.get(new GLocaleKey('GDocument', 'text.saveing-error'))).open(),
          this.getDocumentRealSizeAfterSave(t));
      } catch (e) {
        console.error(e);
      }
    },
    u.Item.prototype._verifyFileSizeAfterSaved = function () {
      try {
        (() =>
          !(this.getFileSizeBeforeSaved() < this.getFileSizeAfterSaved()) &&
          this.getFileSizeBeforeSaved() / 2 > this.getFileSizeAfterSaved())() &&
          this.getFileSizeAfterSaved() &&
          this.getFileSizeAfterSaved() > 0 &&
          new GLocale(GLocale2.get(new GLocaleKey('GDocument', 'text.saveing-error'))).open();
      } catch (e) {
        console.error(e);
      }
    },
    u.Item.prototype.notEnoughDiskSpace = function () {
      new GLocale(GLocale2.get(new GLocaleKey('GDocument', 'text.save-no-space'))).open();
    },
    u.Item.prototype.getDocumentRealSizeAfterSave = function (e) {
      let module = null;
      e = e || gDesigner.getActiveDocument();
      try {
        module = GCore.GNode.serialize(e.getScene(), { save: true, singleton: false });
      } catch (e) {
        return (console.error(e), (this.documentRealFileSize = 0), this.documentRealFileSize);
      }
      return null === module || '' === module
        ? ((this.documentRealFileSize = 0), this.documentRealFileSize)
        : ((this.documentRealFileSize = s.gzip(module, { level: 9 }).length),
          this.documentRealFileSize);
    },
    u.Item.prototype.hasUpdates = async function () {
      throw Error('Not implemented!');
    },
    exports.exports = u);
}