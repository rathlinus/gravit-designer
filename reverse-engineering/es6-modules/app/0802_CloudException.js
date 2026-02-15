/**
 * Webpack Module #802
 * Type: class
 * Name: CloudException
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.default = module.WINDOW_STATUS_BLOCKED = undefined),
    require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(96) /* polyfill_JSON_stringify */,
    require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(71) /* polyfill_String_includes */,
    require(134) /* polyfill_String_startsWith */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(38) /* stub_requires_680 */,
    require(97) /* stub_requires_684 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    AppError = _interopRequireDefault(require(355) /* AppError */),
    GError = _interopRequireDefault(require(594) /* GError */),
    GFilesPanel = require(858);
  const l = require(1240) /* module_1240 */,
    barrel_purchase_urls = require(520) /* barrel_purchase_urls */,
    { FILE_FORMATS: d } = require(10);
  module.WINDOW_STATUS_BLOCKED = 'window-blocked';
  class u {
    constructor(e) {
      ((this._settings = e),
      this.setQueryLimit(10),
      (this._currentFolder = null),
      (this._folders = {}),
      (this._actions = []),
      (this._filterFileTypes = new Set()),
      (this.PREVIOUS_SELECTED_FOLDER_PATH = []),
      this.getPreviousSelectedFolder().then((e) => {
      e && this.setCurrentFolder(e);
      }));
    }

    _driveSettings = null;
    _queryLimit = null;
    _currentFolder = null;
    SORT_TYPES = GFilesPanel.GFilesPanelSortTypes;
    FILTER_FILE_TYPES = GFilesPanel.GFilesPanelFileTypesFilter;
    _sortType = u.prototype.SORT_TYPES.UPDATED;
    _filterFileTypes = null;
    _sortDirection = GFilesPanel.GFilesPanelSortDirections.DESCEND;
    _folders = null;
    _corporateStorage = null;
    _actions = null;
    _defaultEmpyMessage = null;
    CURRENT_FOLDER_PROP = 'designer.filespanel.base-drive.current-folder';
    _driveInstalled = false;

    setDriveSettings(e) {
      this._driveSettings = l.from(e);
    }

    shouldOnlyListOwnedFiles() {
      return !!this._driveSettings && this._driveSettings.onlyListFilesOwnedByUser;
    }

    getUser() {
      throw Error('Not implemented!');
    }

    hasUserProfile() {
      return false;
    }

    getSortType() {
      return this._sortType;
    }

    setSortType(e) {
      Object.values(this.SORT_TYPES).includes(e) && (this._sortType = e);
    }

    getAvailableFileTypesFilter() {
      return this._driveSettings && this._driveSettings.supportedFileFilters
        ? this._driveSettings.supportedFileFilters
        : this.FILTER_FILE_TYPES;
    }

    getSelectedFilterForFileTypes() {
      return Array.from(this._filterFileTypes);
    }

    addFileTypeToSelectedFilter(e) {
      this._isFilterFileTypeSupported(e) && this._filterFileTypes.add(e);
    }

    deleteFileTypeFromSelectedFilter(e) {
      this._isFilterFileTypeSupported(e) && this._filterFileTypes.delete(e);
    }

    _isFilterFileTypeSupported(e) {
      return this.getAvailableFileTypesFilter().some((t) => t.type === e);
    }

    clearAllFileTypesFromSelectedFilter() {
      this._filterFileTypes = new Set();
    }

    getSortDirection() {
      return this._sortDirection;
    }

    setSortDirection(e) {
      Object.values(GFilesPanel.GFilesPanelSortDirections).includes(e) && (this._sortDirection = e);
    }

    hasMoreItemsToLoad() {
      return false;
    }

    setQueryLimit(e) {
      return ((this._queryLimit = parseInt(e, 10)), this);
    }

    isInstalled() {
      return this._driveInstalled;
    }

    install(e) {
      return ((this._driveInstalled = true), Promise.resolve());
    }

    uninstall() {
      return ((this._driveInstalled = false), Promise.resolve());
    }

    getQueryLimit() {
      return this._queryLimit;
    }

    setCurrentFolder(e) {
      return (
        (this._currentFolder = e),
        gContainer.setProperty(this.CURRENT_FOLDER_PROP, JSON.stringify(e)),
        this
      );
    }

    isFolderSharedWithMeFolder(e) {
      return false;
    }

    getCurrentFolder() {
      return this._currentFolder;
    }

    fetchFolders(e) {
      throw Error('Not implemented!');
    }

    isLoadFoldersOnDemandSupported() {
      return false;
    }

    async hasFolders() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
      return this.fetchFolders('name', exports, 1).then((e) => !!e && e.length > 0);
    }

    getFolders() {
      return this._folders;
    }

    createFolder(e) {
      throw Error('Not implemented!');
    }

    navigateToParentFolder() {
      throw Error('Not implemented!');
    }

    getFile(e) {
      throw Error('Not implemented!');
    }

    getFolder(e) {
      throw Error('Not implemented!');
    }

    getRawFile(e, t, n) {
      throw Error('Not implemented!');
    }

    async openFile(e, t) {
      return new Promise((e, t) => {
        t('Not implemented!');
      });
    }

    saveNewFile(e, t) {
      throw Error('Not implemented!');
    }

    fetchFiles(e, t, n) {
      throw Error('Not implemented!');
    }

    async fetchRecentFiles() {
      return [];
    }

    filterSupportedFileFormats() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
      const module = this.getSupportedMIMETypes();
      return exports.filter((e) => module.includes(e.getMimeType()));
    }

    renameItem(e, t) {
      throw Error('Not implemented!');
    }

    isItemAllowedToBeRendered(e) {
      throw Error('Not implemented!');
    }

    async itemRequiresLazyUpdate(e) {
      return false;
    }

    async getItemLazyUpdate(e) {
      return e;
    }

    isFileAllowedToBeOpened(e) {
      throw Error('Not implemented!');
    }

    deleteItem(e) {
      throw Error('Not implemented!');
    }

    cutPaste(e) {
      throw Error('Not implemented!');
    }

    fileMove(e, t) {
      throw Error('Not implemented!');
    }

    copyPaste(e) {
      throw Error('Not implemented!');
    }

    supportsCorporateStorage() {
      return false;
    }

    async setCorporateStorage(e) {
      this._corporateStorage = e;
    }

    initLastCorporateStorage(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'id';
      const require = this;
      async function _interopRequireDefault(e) {
        if (!e) return null;
        const _interopRequireDefault = await require.getCorporateStorages();
        return _interopRequireDefault.length
          ? _interopRequireDefault.find((n) => n[module] === e)
          : null;
      }
      async function GCore(e) {
        require.setCorporateStorage(e);
        let module = await require.getPreviousSelectedFolder();
        require.setCurrentFolder(module || require.getRootFolder());
      }
      return e && this.supportsCorporateStorage()
        ? gContainer.getProperty(e).then(_interopRequireDefault).then(GCore)
        : GCore(null);
    }

    saveLastTeamDriveId(e, t) {
      if (!e) throw new AppError.default('Invalid arguments for saving last team drive id');
      return (gContainer.setProperty(e, t), this);
    }

    getCorporateStorage() {
      return this._corporateStorage;
    }

    async getCorporateStorages() {
      return [];
    }

    isRootFolder(e) {
      throw new Error('Not implemented!');
    }

    getRootFolder() {
      throw new Error('Not implemented!');
    }

    supportsSaveCollisionFlow() {
      return false;
    }

    requiresOverwriteCollisionHandling() {
      return false;
    }

    async fileExists(e, t, n) {
      throw new Error('Not implemented!');
    }

    folderExists(e, t) {
      throw new Error('Not implemented!');
    }

    getPreviousSelectedFolder() {
      return this.CURRENT_FOLDER_PROP
        ? gContainer
            .getProperty(this.CURRENT_FOLDER_PROP)
            .then(JSON.parse)
            .catch((e) => {
              console.log('Current folder is not set', e.message);
            })
        : Promise.resolve(null);
    }

    clearPreviousSelectedFolder() {
      return gContainer.removeProperty(this.CURRENT_FOLDER_PROP);
    }

    getSupportedExtensions() {
      return this.getSupportedFileFormats().map((e) => {
        let { ext: module } = e;
        return module.toLowerCase();
      });
    }

    getSupportedMIMETypes() {
      return this.getSupportedFileFormats().map((e) => g(e));
    }

    filterTypesWithSearchString(e, t) {
      if (!t || !e) return e;
      let require;
      if (
        ((t = t.toLowerCase()).startsWith('.')
          ? (require = t.slice(1))
          : t.startsWith('*.') && (require = t.slice(2)),
        !require)
      )
        return e;
      const _interopRequireDefault = this.getSupportedFileFormats(),
        GCore = _interopRequireDefault
          .filter((t) => e.includes(g(t)))
          .map((e) => e.ext)
          .filter((e) => e.startsWith(require));
      if (GCore.length > 0) {
        return _interopRequireDefault.filter((e) => GCore.includes(e.ext)).map(g);
      }
      return [];
    }

    getSupportedFileFormats() {
      return this._driveSettings && this._driveSettings.supportedFileFormats
        ? this._driveSettings.supportedFileFormats
        : d;
    }

    getDefaultFileFormat() {
      return this.getSupportedFileFormats().find((e) => e.default);
    }

    findFileFormatByExtension(e) {
      return this.getSupportedFileFormats().find((t) => {
        let { ext: require } = t;
        return !!require && require.toLowerCase() === e.toLowerCase();
      });
    }

    lookupByMimeType(e) {
      const module = e.toLowerCase();
      return this.getSupportedFileFormats().find((e) => {
        const require = g(e);
        return !!require && require.toLowerCase() === module;
      });
    }

    getFileFormat(e) {
      var t = this.findFileFormatByExtension(e.extension || e.ext);
      return (t || (t = this.lookupByMimeType(e.type)), t);
    }

    isFileSupported(e) {
      return !(
        !e ||
        !(
          this.getSupportedMIMETypes().includes(e.type) ||
          this.getSupportedMIMETypes().includes(e.mimeType) ||
          (e.extension && this.getSupportedExtensions().includes(e.extension.toLowerCase()))
        )
      );
    }

    async canAccessFile() {
      return true;
    }

    addAction(e) {
      this._actions.push(e);
    }

    getActions() {
      return this._actions;
    }

    setDefaultEmptyMessage(e) {
      this._defaultEmpyMessage = e;
    }

    getDefaultEmptyMessage() {
      return this._defaultEmpyMessage;
    }

    generatePreviousSelectedFolderPath() {
      throw new Error('Not implemented!');
    }

    containsInPreviousPath(e) {
      return this.PREVIOUS_SELECTED_FOLDER_PATH.find((t) => t === e.getId());
    }

    resetPreviousSelectedFolderPath() {
      this.PREVIOUS_SELECTED_FOLDER_PATH = [];
    }

    removeLoadedFolderFromPreviousPath(e) {
      this.PREVIOUS_SELECTED_FOLDER_PATH = this.PREVIOUS_SELECTED_FOLDER_PATH.filter(
        (t) => t !== e.getId()
      );
    }

    hasTitleValidation() {
      return false;
    }

    getTitleValidator() {
      throw Error('NOT IMPLEMENTED');
    }

    async loadExampleFiles() {
      return Promise.resolve([]);
    }

    isAssetsSharedWithMeFolder() {
      return false;
    }

    getSharedFilesWithMeFolder() {
      return null;
    }

    getDriveIdPropertyName() {
      return 'id';
    }

    static DriveEvent(e, t) {
      let require = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
      ((this.source = e), (this.type = t), (this.data = require));
    }

    static ExceptionCode = { InvalidCredentials: 1 };

    static CloudException = p;

    static getInstance() {
      throw Error('Not implemented!');
    }

    static Provider = barrel_purchase_urls.Provider;

  }
  (GCore.GObject.inheritAndMix(u, GCore.GObject, [GCore.GEventTarget]),
    GCore.GObject.inherit(u.DriveEvent, GCore.GEvent),
    u.DriveEvent.type = null,
    u.DriveEvent.source = null,
    u.DriveEvent.data = null,
    u.DriveEvent.Type = {
      Added: 0,
      UserUpdated: 1,
      FolderSwitchRequired: 2,
      FileDeleted: 3,
    });
  class p extends GError.default {
    constructor(e, t) {
      (super(e), (this.code = t), (this.__proto__ = p.prototype), (this.name = 'CloudException'));
    }
    toString() {
      return '[Object CloudException]';
    }
  };
  function g(e) {
    return e.type || e.mime;
  };
  module.default = u;
}