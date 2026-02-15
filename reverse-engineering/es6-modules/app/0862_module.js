/**
 * Webpack Module #862
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.lookupByMimeType =
      module.lookupByExtension =
      module.default =
      module.TYPES =
      module.FILE_MIME_TYPES =
      module.FILE_EXTENSIONS =
      module.DEFAULT_TYPE =
        undefined),
    require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(168) /* polyfill_Array_reduce */,
    require(96) /* polyfill_JSON_stringify */,
    require(30) /* polyfill_Object_assign */,
    require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(71) /* polyfill_String_includes */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(169) /* stub_requires_683 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    AppSettings = require(10) /* AppSettings */,
    GCloudStorage = _interopRequireDefault(require(119) /* GCloudStorage */),
    Item = _interopRequireDefault(require(220) /* Item */),
    GDocument = _interopRequireDefault(require(163) /* GDocument */),
    c = _interopRequireDefault(require(86) /* module_86 */),
    CloudException = _interopRequireDefault(require(802) /* CloudException */),
    DataModule_593 = require(593);
  const GCloudStorageItem = require(156) /* GCloudStorageItem */,
    { FILE_FORMATS: g, FOLDER_FORMAT: h, MAX_FOLDER_DEPTH_FOR_CLOUD: f } = require(
      10
    );
  let m;
  class y extends CloudException.default {
    constructor() {
      super();
      (CloudException.default.apply(this, arguments),
      (this.CURRENT_FOLDER = this.getRootFolder()),
      (this.FOLDERS = {}),
      (this.QUERY_LIMIT = 10),
      (this.EXAMPLE_FILES_CACHE = []),
      this.getPreviousSelectedFolder().then((e) => {
      e && this.setCurrentFolder(e);
      }),
      this.setDefaultEmptyMessage({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GCommonNames', 'text.message-explore-cloud-templates')
      ),
      }));
    }

    CURRENT_FOLDER_PROP = 'designer.filespanel.cloud-drive.current-folder';

    getPreviousSelectedFolder() {
      return CloudException.default.prototype.getPreviousSelectedFolder
        .apply(this, arguments)
        .then((e) => (e ? this._convertToFolderElement(e) : e));
    }

    setQueryLimit(e) {
      return ((this.QUERY_LIMIT = parseInt(e, 10)), this);
    }

    setCurrentFolder(e) {
      return (
        (this.CURRENT_FOLDER = e),
        gContainer.setProperty(this.CURRENT_FOLDER_PROP, JSON.stringify(e)),
        this
      );
    }

    isRootFolder(e) {
      return (
        !(e = undefined !== e ? e : this.getCurrentFolder()) || (e && 'object' == typeof e && !e.id)
      );
    }

    getRootFolder() {
      return GCloudStorageItem.from({
        id: null,
        name: GCore.GLocale.get(new GCore.GLocaleKey('GFilesPanel', 'action.my-cloud')),
      });
    }

    getFolder(e) {
      return AppSettings.gApi.getFile(e.id || e).then((e) => this._convertToFolderElement(e));
    }

    getCurrentFolder() {
      return this.CURRENT_FOLDER;
    }

    buildFoldersHierarchy(e) {
      var t = {},
        n = new Set(),
        _interopRequireDefault = {};
      if (!e.length) return t;
      for (let t = 0; t < e.length; t++) {
        let n = GCloudStorage.default.definePath(e[t]);
        _interopRequireDefault[n] = e[t];
      }
      function GCore(e) {
        let t = new Set();
        for (; e && e.parent; ) {
          if (e.id === e.parent) return (console.warn('Invalid folder'), (e.parent = null), []);
          if (t.has(e.parent)) return (console.warn('Invalid folder'), (e.parent = null), []);
          (t.add(e.parent), (e = _interopRequireDefault[e.parent]));
        }
        return [...t];
      }
      return (
        e.forEach((e) => {
          if (n.has(e.id)) return;
          let _interopRequireDefault = { path: GCore(e), folder: e };
          if (_interopRequireDefault.path.length > f)
            for (let e = 0; e < _interopRequireDefault.path.length - f; e++)
              n.add(_interopRequireDefault.path[e]);
          else t[e.id] = _interopRequireDefault;
        }),
        t
      );
    }

    isLoadFoldersOnDemandSupported() {
      return true;
    }

    async fetchFolders(e, t) {
      let require = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : -1,
        _interopRequireDefault =
          arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0;
      return (
        Object.keys(this.FOLDERS).length || (await this._buildFolderStructure(e)),
        this.isRootFolder(t) && this.generatePreviousSelectedFolderPath(),
        (t = t || this.CURRENT_FOLDER),
        AppSettings.gApi
          .listFiles({
            type: h,
            parent: this._extractId(t),
            sort: e + '',
            limit: require > 0 ? require : 100,
            skip: _interopRequireDefault,
          })
          .then((e) => this._convertToFolderElement(e))
      );
    }

    _convertToFolderElement(e) {
      const module = (e) => {
        var t = GCloudStorageItem.from(e);
        return (
          t.setItemType(GCloudStorageItem.Type.Folder),
          t.setPermissions([
            GCloudStorageItem.Permission.Open,
            GCloudStorageItem.Permission.Copy,
            GCloudStorageItem.Permission.Editing,
            GCloudStorageItem.Permission.Rename,
            GCloudStorageItem.Permission.CutPaste,
            GCloudStorageItem.Permission.Delete,
          ]),
          t
        );
      };
      return e instanceof Array ? e.map(module) : module(e);
    }

    async _buildFolderStructure() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 'asc';
      if (Object.keys(this.FOLDERS).length) return;
      const module = await AppSettings.gApi.listFiles({
        type: h,
        parent: '*',
        sort: exports + '',
        limit: Number.MAX_SAFE_INTEGER,
      });
      ((this.FOLDERS = this.buildFoldersHierarchy(module)),
        !this.CURRENT_FOLDER ||
          this.FOLDERS[this.CURRENT_FOLDER.id] ||
          this.isRootFolder(this.CURRENT_FOLDER) ||
          this._isCustomFolder(this.CURRENT_FOLDER) ||
          this.setCurrentFolder(null));
    }

    _isCustomFolder(e) {
      return false;
    }

    getFolders() {
      return this.FOLDERS;
    }

    createFolder(e) {
      return GCloudStorage.default.createFolder(e, this.CURRENT_FOLDER);
    }

    navigateToParentFolder() {
      var e =
        this.CURRENT_FOLDER && this.CURRENT_FOLDER.parent
          ? this.FOLDERS[this.CURRENT_FOLDER.parent].folder
          : null;
      return (this.setCurrentFolder(e), this);
    }

    getFile(e) {
      return AppSettings.gApi
        .getFile(e, true)
        .then((e) => GCloudStorage.default.convertToCloudItem(e));
    }

    async getRawFile(e, t, n) {
      const _interopRequireDefault = await AppSettings.gApi.getFileExtended(e.id),
        GCore = await fetch(_interopRequireDefault.getFileDataURL(), { signal: t });
      return (0, DataModule_593.readResponseWithProgress)(GCore, n.progress, true).then((e) =>
        e.blob()
      );
    }

    openFile(e, t) {
      return new Promise(async (n, _interopRequireDefault) => {
        try {
          const _interopRequireDefault = await Item.default.from(
            gDesigner.getDefaultStorage(),
            e,
            undefined,
            undefined,
            e.autosave
          );
          (gDesigner.openDocument(_interopRequireDefault, t), n());
        } catch (e) {
          _interopRequireDefault(e);
        }
      });
    }

    saveNewFile(e, t) {
      let require = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '',
        _interopRequireDefault =
          arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {},
        CloudException = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : null;
      require = require || _.ext.toUpperCase();
      var DataModule_593 = e.getScene();
      if (e.hasPagesWithInfiniteEmptyCanvas())
        return Promise.reject({
          message: GCore.GLocale.get(
            new GCore.GLocaleKey('GCommonNames', 'text.error-emtpy-infinite-canvas')
          ),
          dontExtend: true,
        });
      let GCloudStorageItem = gDesigner.getWindows().getActiveWindow().getView();
      const g = GCloudStorageItem.getZoom(),
        h = GCloudStorageItem.getScrollX(),
        f = GCloudStorageItem.getScrollY(),
        m = DataModule_593.getActivePage(),
        y = m.getReferenceId(),
        v = DataModule_593.getActivePage().getGeometryBBox();
      return AppSettings.gApi
        .createFile({
          name: t,
          parent: this._extractId(this.CURRENT_FOLDER),
          type: (b(require) || _).type,
          app: 'designer',
          unit: DataModule_593.getProperty('ut'),
          width: v.getWidth(),
          height: v.getHeight(),
          trashed: null,
        })
        .then(async (AppSettings) => {
          AppSettings.type === _.type && DataModule_593.setCloudSynchronization(AppSettings.id);
          const m = AppSettings.type !== _.type;
          (await e.saveAnnotations(m),
            (_interopRequireDefault = e.updateSaveOptionsLastModifiedDate(_interopRequireDefault)));
          var v = await Item.default.from(gDesigner.getDefaultStorage(), AppSettings.id);
          e.setStorageItem(v);
          var b = new GDocument.default(v);
          return b
            .deserializeData(GCore.GNode.serialize(DataModule_593, _interopRequireDefault))
            .then(
              async () => (
                e.getFileFormatVersion() && b.setFileFormatVersion(e.getFileFormatVersion()),
                await b.saveAnnotations(m, true),
                (DataModule_593 = b.getScene()).iteratePages((e) => {
                  if (e.getReferenceId() === y) return (DataModule_593.setActivePage(e), false);
                }),
                gDesigner.addDocument(b),
                CloudException
                  ? CloudException(c.default.Loaded)
                  : gDesigner.removeDocument(e, null, true),
                (GCloudStorageItem = gDesigner.getWindows().getActiveWindow().getView()),
                GCloudStorageItem.transform(h, f, g),
                (_interopRequireDefault =
                  b.updateSaveOptionsLastModifiedDate(_interopRequireDefault)),
                GCore.GUtil.prepareForSaving(DataModule_593, require),
                GCloudStorage.default.performSave(
                  b,
                  () => {
                    (b.getFileFormatVersion() &&
                      b.getStorageItem().storeFileFormatVersion(b.getFileFormatVersion()),
                      CloudException && CloudException(c.default.Saved));
                  },
                  () => {
                    CloudException && CloudException(c.default.SaveFailed);
                  },
                  _interopRequireDefault
                ),
                e.isCloudFile() || e.setTitle(t),
                AppSettings
              )
            )
            .catch(
              (e) => (
                console.error(e),
                new Promise((e, t) => {
                  t(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GCommonNames', 'text.error-saving-file')
                    )
                  );
                })
              )
            );
        })
        .catch(
          (e) => (
            console.error(e),
            new Promise((e, t) => {
              t(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.error-saving-file')));
            })
          )
        );
    }

    fetchRecentFiles() {
      const exports = this._getFileTypesForFilter().map((e) => ({ type: e }));
      return GCloudStorage.default
        .getRecentStorageItems(exports)
        .then((e) => this._convertAndUpdateCloudItems(e));
    }

    fetchFiles(e, t, n) {
      var _interopRequireDefault = {
        type: this._getFileTypesForFilter().join('|'),
        parent: this._extractId(this.CURRENT_FOLDER),
        limit: this.QUERY_LIMIT + '',
        skip: t + '',
        sort: n + '',
      };
      return (
        e && ((_interopRequireDefault.name = e), (_interopRequireDefault.parent = '*')),
        AppSettings.gApi
          .listFiles(_interopRequireDefault)
          .then((e) => this._convertAndUpdateCloudItems(e))
      );
    }

    _convertAndUpdateCloudItems(e) {
      return GCloudStorage.default.convertToCloudItem(e);
    }

    _getFileTypesForFilter() {
      const exports = this.getSelectedFilterForFileTypes();
      return 0 !== exports.length ? exports : this.getSupportedMIMETypes();
    }

    renameItem(e, t) {
      return AppSettings.gApi.updateFile(e.id, { name: t });
    }

    isItemAllowedToBeRendered(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
        require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      return (
        !(!module && !require) || GCloudStorage.default.definePath(this.CURRENT_FOLDER) === e.parent
      );
    }

    deleteItem(e) {
      return AppSettings.gApi
        .updateFile(e.id, { trashed: true })
        .then(() => AppSettings.gApi.deleteFile(e.id));
    }

    cutPaste(e) {
      var t = GCloudStorage.default.definePath(this.CURRENT_FOLDER);
      return GCloudStorage.default.changePathTree(e, t);
    }

    fileMove(e, t) {
      return GCloudStorage.default.changePathTree([e], t.id);
    }

    copyPaste(e) {
      const module = GCloudStorage.default.definePath(this.CURRENT_FOLDER);
      return Promise.all(
        e.map(async (e) => {
          const { id: require } = await AppSettings.gApi.copyFile(e.id, { parent: module });
          return { id: require, parent: module };
        })
      );
    }

    supportsSaveCollisionFlow() {
      return true;
    }

    _extractId(e) {
      return e ? ('string' == typeof e ? e || null : e.id || null) : null;
    }

    async fileExists(e, t, n) {
      n = n || this.CURRENT_FOLDER;
      var _interopRequireDefault = {
        type: this.getSupportedFileFormats().find(
          (e) => e.ext.toLocaleLowerCase() === t.toLocaleLowerCase()
        ).type,
        parent: this._extractId(n),
        name: '"'.concat(e, '"'),
      };
      return AppSettings.gApi.listFiles(_interopRequireDefault).then((e) => !!e.length);
    }

    folderExists(e, t) {
      return (
        (t = t || this.CURRENT_FOLDER),
        AppSettings.gApi
          .listFiles({
            type: h,
            parent: this._extractId(t),
            name: '"'.concat(e, '"'),
          })
          .then((e) => !!e.length)
      );
    }

    generatePreviousSelectedFolderPath() {
      if (!this.PREVIOUS_SELECTED_FOLDER_PATH.length && this.CURRENT_FOLDER) {
        const e = this.FOLDERS && this.FOLDERS[this.CURRENT_FOLDER.getId()];
        if (!e) return;
        ((this.PREVIOUS_SELECTED_FOLDER_PATH = this.PREVIOUS_SELECTED_FOLDER_PATH.concat(e.path)),
          this.PREVIOUS_SELECTED_FOLDER_PATH.find((t) => t === e.folder.id) ||
            this.PREVIOUS_SELECTED_FOLDER_PATH.push(e.folder.id));
      }
    }

    async loadExampleFiles() {
      0 === this.EXAMPLE_FILES_CACHE.length &&
        (this.EXAMPLE_FILES_CACHE = await AppSettings.gApi.getExampleFiles().catch(() => []));
      const exports = this.getSelectedFilterForFileTypes();
      let module = this.EXAMPLE_FILES_CACHE;
      return (
        0 !== exports.length &&
          (module = module.filter((e) => this._getFileTypesForFilter().includes(e.type))),
        module.map((e) => {
          let module = GCloudStorageItem.from(e);
          return (module.setPermissions([GCloudStorageItem.Permission.Open]), module);
        })
      );
    }

    static getInstance() {
      return (m || (m = new y()), m);
    }

  }
  module.default = y;
  const v = (module.TYPES = Object.assign(
      { FOLDER: h },
      g.reduce((e, t) => ((e[t.ext.toUpperCase() + '_FILE'] = t), e), {})
    )),
    _ = (module.DEFAULT_TYPE = Object.values(v).find((e) => e.default));
  ((module.FILE_EXTENSIONS = g.map((e) => {
    let { ext: module } = e;
    return module.toUpperCase();
  })),
    (module.FILE_MIME_TYPES = g.map((e) => {
      let { type: module } = e;
      return module;
    })));
  module.lookupByMimeType = (e) =>
    Object.values(v).find((t) => {
      let { type: require } = t;
      return !!require && require.toLowerCase() === e.toLowerCase();
    });
  const b = (e) =>
    Object.values(v).find((t) => {
      let { ext: require } = t;
      return !!require && require.toLowerCase() === e.toLowerCase();
    });
  module.lookupByExtension = b;
}