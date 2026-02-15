/**
 * Webpack Module #156
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(58) /* polyfill_Array_includes */,
    require(30) /* polyfill_Object_assign */,
    require(20) /* polyfill_RegExp_exec */,
    require(271) /* polyfill_String_endsWith */,
    require(71) /* polyfill_String_includes */,
    require(151) /* DataModule_151 */,
    require(34) /* polyfill_String_replace */,
    require(91) /* polyfill_String_trim */,
    require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    GRegex = _interopRequireDefault(require(263) /* Exports_GRegex */);
  const { FILE_ID_PREFIX: r } = require(10);
  class s {
    constructor() {
      this._permissions = [];
    }

    parent = null;
    _previewURL = null;
    _permissions = null;
    _itemType = null;
    storage = null;
    settings = null;
    autosave = null;

    setPreviewURL(e) {
      this._previewURL = e;
    }

    getPreviewURL() {
      return this._previewURL;
    }

    getParentId() {
      const exports = this.getParent();
      return exports instanceof s ? exports.getId() : exports;
    }

    getParent() {
      return this.parent;
    }

    getId() {
      return this.id;
    }

    getStorage() {
      return this.storage;
    }

    isAutoSavedVersion() {
      return this.autosave;
    }

    getExtension() {
      const exports = this.extension || this.ext;
      return (exports && exports.toLowerCase()) || null;
    }

    getNameWithExtension() {
      let exports = this.getName();
      exports = s.normalizeMultipleDotsEnd(exports);
      const module = '.'.concat(this.getExtension());
      return (
        !exports.toLowerCase().endsWith(module)
          ? (exports += module)
          : (exports = exports.substr(0, exports.lastIndexOf('.')) + module),
        exports
      );
    }

    getNameWithoutExtension() {
      return (0, CollaborationMergeUtils.getFileNameWithoutExtension)(
        this.getName(),
        this.getExtension()
      );
    }

    getName() {
      return (this.name && this.name.trim()) || this.name;
    }

    setItemType(e) {
      if (!Object.values(s.Type).includes(e)) throw Error('Invalid type!');
      this._itemType = e;
    }

    getType() {
      return this._itemType;
    }

    getPermissions() {
      return this._permissions;
    }

    revokePermissions() {
      this._permissions = [];
    }

    getIcon() {
      return this.icon;
    }

    setMimeType(e) {
      this._mimetype = e;
    }

    getMimeType() {
      return this._mimetype || this.mimeType || this.type;
    }

    setSize(e) {
      this._size = e;
    }

    getSize() {
      return this._size;
    }

    hasPermission(e) {
      return this._permissions.includes(e);
    }

    setPermission(e) {
      let module = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
      if (this._permissionSupported(e)) {
        if (module) this.hasPermission(e) || this._permissions.push(e);
        else if (this.hasPermission(e)) {
          var require = this._permissions.indexOf(e);
          this._permissions.splice(require, 1);
        }
      } else console.warn('Permission not supported: ' + e);
    }

    setVersion(e) {
      this._version = e;
    }

    getVersion() {
      return this._version;
    }

    setModificationTime(e) {
      this._modificationTime = e;
    }

    getModificationTime() {
      return this._modificationTime;
    }

    setPermissions(e) {
      let module = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
      e.forEach((e) => this.setPermission(e, module));
    }

    _permissionSupported(e) {
      return Object.values(s.Permission).includes(e);
    }

    static from(e) {
      var t = new s();
      return (
        (t = Object.assign(t, e)).settings && (t.settings = s.GCloudSettings.from(t.settings)),
        t
      );
    }

    static parseFromJSON(e, t) {
      try {
        const t = JSON.parse(e);
        return s.from(t);
      } catch (e) {
        if (!t && undefined === t) throw e;
        return t;
      }
    }

    static Permission = {
      Open: 'open',
      Copy: 'copy',
      Editing: 'editing',
      Rename: 'rename',
      CutPaste: 'cutPaste',
      Download: 'download',
      Delete: 'delete',
      UnshareWithMe: 'unshareWithMe',
    };

    static Storage = {
      GoogleDrive: 'GOOGLE_DRIVE',
      SharePoint: 'SHAREPOINT',
      OneDriveBusiness: 'ONEDRIVE_BUSINESS',
      Gravit: 'GRAVIT_CLOUD',
    };

    static Type = {
      Folder: 'folder',
      File: 'file',
      CorporateStorage: 'corporate-storage',
    };

    static GCloudSettings() {}

    static getPrefixIdForStorage(e) {
      switch (e) {
        case s.Storage.Gravit:
          return '';
        case s.Storage.GoogleDrive:
          return r.GOOGLEDRIVE;
        case s.Storage.SharePoint:
          return r.SHAREPOINT;
        case s.Storage.OneDriveBusiness:
          return r.ONEDRIVEBUSINESS;
      }
      throw new Error('Unsupported storage!');
    }

    static getFileStorageId(e) {
      if (!e.id) return null;
      const module = s.getPrefixIdForStorage(e.storage);
      let require = e.id;
      return (module && (require = require.replace(''.concat(module, '_'), '')), require);
    }

    static getCollaborativeFileId(e, t) {
      const require = s.getPrefixIdForStorage(t);
      return ''.concat(require ? require + '_' : '').concat(e);
    }

    static createOrReturnSelfInstance(e) {
      return e instanceof s ? e : s.from(e);
    }

    static getExtensionFromName(e) {
      const module = e.match(GRegex.default.String.FileExtension);
      return module ? module[0].slice(1) : null;
    }

    static normalizeMultipleDotsEnd(e) {
      if (e.endsWith('.')) {
        const t = e.match(GRegex.default.String.MultipleDotsEnd);
        if (t) return e.slice(0, t.index);
      }
      return e;
    }

  }
  (s.GCloudSettings.from = function (e) {
      let module = new s.GCloudSettings();
      return ((module = Object.assign(module, e)), module);
    },
    s.GCloudSettings.parseFromJSON = function (e, t) {
      try {
        const t = JSON.parse(e);
        return s.GCloudSettings.from(t);
      } catch (e) {
        if (!t && undefined === t) throw e;
        return t;
      }
    },
    exports.exports = s);
}