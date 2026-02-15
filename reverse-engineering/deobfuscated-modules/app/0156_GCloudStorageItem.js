/**
 * Webpack Module #156
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(30) /* polyfill_Object_assign */,
      require(20) /* polyfill_RegExp_exec */,
      require(271) /* polyfill_String_endsWith */,
      require(71) /* polyfill_String_includes */,
      require(151) /* DataModule_151 */,
      require(34) /* polyfill_String_replace */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(32) /* stub_requires_670 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GRegex = _interopRequireDefault(require(263) /* Exports_GRegex */);
    const { FILE_ID_PREFIX: r } = require(10) /* AppSettings */;
    function s() {
      this._permissions = [];
    }
    (s.prototype.parent = null),
      (s.prototype._previewURL = null),
      (s.prototype.setPreviewURL = function (e) {
        this._previewURL = e;
      }),
      (s.prototype.getPreviewURL = function () {
        return this._previewURL;
      }),
      (s.prototype.getParentId = function () {
        const exports = this.getParent();
        return exports instanceof s ? exports.getId() : exports;
      }),
      (s.prototype.getParent = function () {
        return this.parent;
      }),
      (s.prototype.getId = function () {
        return this.id;
      }),
      (s.prototype._permissions = null),
      (s.prototype._itemType = null),
      (s.prototype.storage = null),
      (s.prototype.settings = null),
      (s.prototype.autosave = null),
      (s.prototype.getStorage = function () {
        return this.storage;
      }),
      (s.prototype.isAutoSavedVersion = function () {
        return this.autosave;
      }),
      (s.prototype.getExtension = function () {
        const exports = this.extension || this.ext;
        return (exports && exports.toLowerCase()) || null;
      }),
      (s.prototype.getNameWithExtension = function () {
        let exports = this.getName();
        exports = s.normalizeMultipleDotsEnd(exports);
        const module = ".".concat(this.getExtension());
        return (
          !exports.toLowerCase().endsWith(module)
            ? (exports += module)
            : (exports = exports.substr(0, exports.lastIndexOf(".")) + module),
          exports
        );
      }),
      (s.prototype.getNameWithoutExtension = function () {
        return (0, CollaborationMergeUtils.getFileNameWithoutExtension)(
          this.getName(),
          this.getExtension()
        );
      }),
      (s.prototype.getName = function () {
        return (this.name && this.name.trim()) || this.name;
      }),
      (s.prototype.setItemType = function (e) {
        if (!Object.values(s.Type).includes(e)) throw Error("Invalid type!");
        this._itemType = e;
      }),
      (s.prototype.getType = function () {
        return this._itemType;
      }),
      (s.prototype.getPermissions = function () {
        return this._permissions;
      }),
      (s.prototype.revokePermissions = function () {
        this._permissions = [];
      }),
      (s.prototype.getIcon = function () {
        return this.icon;
      }),
      (s.prototype.setMimeType = function (e) {
        this._mimetype = e;
      }),
      (s.prototype.getMimeType = function () {
        return this._mimetype || this.mimeType || this.type;
      }),
      (s.prototype.setSize = function (e) {
        this._size = e;
      }),
      (s.prototype.getSize = function () {
        return this._size;
      }),
      (s.prototype.hasPermission = function (e) {
        return this._permissions.includes(e);
      }),
      (s.prototype.setPermission = function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        if (this._permissionSupported(e)) {
          if (module) this.hasPermission(e) || this._permissions.push(e);
          else if (this.hasPermission(e)) {
            var require = this._permissions.indexOf(e);
            this._permissions.splice(require, 1);
          }
        } else console.warn("Permission not supported: " + e);
      }),
      (s.prototype.setVersion = function (e) {
        this._version = e;
      }),
      (s.prototype.getVersion = function () {
        return this._version;
      }),
      (s.prototype.setModificationTime = function (e) {
        this._modificationTime = e;
      }),
      (s.prototype.getModificationTime = function () {
        return this._modificationTime;
      }),
      (s.prototype.setPermissions = function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        e.forEach((e) => this.setPermission(e, module));
      }),
      (s.prototype._permissionSupported = function (e) {
        return Object.values(s.Permission).includes(e);
      }),
      (s.from = function (e) {
        var t = new s();
        return (
          (t = Object.assign(t, e)).settings &&
            (t.settings = s.GCloudSettings.from(t.settings)),
          t
        );
      }),
      (s.parseFromJSON = function (e, t) {
        try {
          const t = JSON.parse(e);
          return s.from(t);
        } catch (e) {
          if (!t && undefined === t) throw e;
          return t;
        }
      }),
      (s.Permission = {
        Open: "open",
        Copy: "copy",
        Editing: "editing",
        Rename: "rename",
        CutPaste: "cutPaste",
        Download: "download",
        Delete: "delete",
        UnshareWithMe: "unshareWithMe",
      }),
      (s.Storage = {
        GoogleDrive: "GOOGLE_DRIVE",
        SharePoint: "SHAREPOINT",
        OneDriveBusiness: "ONEDRIVE_BUSINESS",
        Gravit: "GRAVIT_CLOUD",
      }),
      (s.Type = {
        Folder: "folder",
        File: "file",
        CorporateStorage: "corporate-storage",
      }),
      (s.GCloudSettings = function () {}),
      (s.GCloudSettings.from = function (e) {
        let module = new s.GCloudSettings();
        return (module = Object.assign(module, e)), module;
      }),
      (s.GCloudSettings.parseFromJSON = function (e, t) {
        try {
          const t = JSON.parse(e);
          return s.GCloudSettings.from(t);
        } catch (e) {
          if (!t && undefined === t) throw e;
          return t;
        }
      }),
      (s.getPrefixIdForStorage = function (e) {
        switch (e) {
          case s.Storage.Gravit:
            return "";
          case s.Storage.GoogleDrive:
            return r.GOOGLEDRIVE;
          case s.Storage.SharePoint:
            return r.SHAREPOINT;
          case s.Storage.OneDriveBusiness:
            return r.ONEDRIVEBUSINESS;
        }
        throw new Error("Unsupported storage!");
      }),
      (s.getFileStorageId = function (e) {
        if (!e.id) return null;
        const module = s.getPrefixIdForStorage(e.storage);
        let require = e.id;
        return module && (require = require.replace("".concat(module, "_"), "")), require;
      }),
      (s.getCollaborativeFileId = function (e, t) {
        const require = s.getPrefixIdForStorage(t);
        return "".concat(require ? require + "_" : "").concat(e);
      }),
      (s.createOrReturnSelfInstance = function (e) {
        return e instanceof s ? e : s.from(e);
      }),
      (s.getExtensionFromName = function (e) {
        const module = e.match(GRegex.default.String.FileExtension);
        return module ? module[0].slice(1) : null;
      }),
      (s.normalizeMultipleDotsEnd = function (e) {
        if (e.endsWith(".")) {
          const t = e.match(GRegex.default.String.MultipleDotsEnd);
          if (t) return e.slice(0, t.index);
        }
        return e;
      }),
      (exports.exports = s);
  }