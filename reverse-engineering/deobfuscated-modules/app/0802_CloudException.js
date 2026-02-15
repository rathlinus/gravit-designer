/**
 * Webpack Module #802
 * Type: class
 * Name: CloudException
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
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
      require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      a = _interopRequireDefault(require(355) /* module_355 */),
      GError = _interopRequireDefault(require(594) /* GError */),
      GFilesPanel = require(858) /* Exports_GFilesPanel */;
    const l = require(1240) /* module_1240 */,
      barrel_purchase_urls = require(520) /* barrel_purchase_urls */,
      { FILE_FORMATS: d } = require(10) /* AppSettings */;
    module.WINDOW_STATUS_BLOCKED = "window-blocked";
    function u(e) {
      (this._settings = e),
        this.setQueryLimit(10),
        (this._currentFolder = null),
        (this._folders = {}),
        (this._actions = []),
        (this._filterFileTypes = new Set()),
        (this.PREVIOUS_SELECTED_FOLDER_PATH = []),
        this.getPreviousSelectedFolder().then((e) => {
          e && this.setCurrentFolder(e);
        });
    }
    GCore.GObject.inheritAndMix(u, GCore.GObject, [GCore.GEventTarget]),
      (u.DriveEvent = function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
        (this.source = e), (this.type = t), (this.data = require);
      }),
      GCore.GObject.inherit(u.DriveEvent, GCore.GEvent),
      (u.DriveEvent.type = null),
      (u.DriveEvent.source = null),
      (u.DriveEvent.data = null),
      (u.DriveEvent.Type = {
        Added: 0,
        UserUpdated: 1,
        FolderSwitchRequired: 2,
        FileDeleted: 3,
      }),
      (u.ExceptionCode = { InvalidCredentials: 1 });
    class p extends GError.default {
      constructor(e, t) {
        super(e),
          (this.code = t),
          (this.__proto__ = p.prototype),
          (this.name = "CloudException");
      }
      toString() {
        return "[Object CloudException]";
      }
    }
    function g(e) {
      return e.type || e.mime;
    }
    (u.CloudException = p),
      (u.prototype._driveSettings = null),
      (u.prototype.setDriveSettings = function (e) {
        this._driveSettings = l.from(e);
      }),
      (u.prototype.shouldOnlyListOwnedFiles = function () {
        return (
          !!this._driveSettings && this._driveSettings.onlyListFilesOwnedByUser
        );
      }),
      (u.prototype._queryLimit = null),
      (u.prototype._currentFolder = null),
      (u.prototype.SORT_TYPES = GFilesPanel.GFilesPanelSortTypes),
      (u.prototype.FILTER_FILE_TYPES = GFilesPanel.GFilesPanelFileTypesFilter),
      (u.prototype._sortType = u.prototype.SORT_TYPES.UPDATED),
      (u.prototype._filterFileTypes = null),
      (u.prototype._sortDirection = GFilesPanel.GFilesPanelSortDirections.DESCEND),
      (u.prototype._folders = null),
      (u.prototype._corporateStorage = null),
      (u.prototype._actions = null),
      (u.prototype._defaultEmpyMessage = null),
      (u.prototype.CURRENT_FOLDER_PROP =
        "designer.filespanel.base-drive.current-folder"),
      (u.prototype.getUser = function () {
        throw Error("Not implemented!");
      }),
      (u.prototype._driveInstalled = false),
      (u.getInstance = function () {
        throw Error("Not implemented!");
      }),
      (u.prototype.hasUserProfile = function () {
        return false;
      }),
      (u.prototype.getSortType = function () {
        return this._sortType;
      }),
      (u.prototype.setSortType = function (e) {
        Object.values(this.SORT_TYPES).includes(e) && (this._sortType = e);
      }),
      (u.prototype.getAvailableFileTypesFilter = function () {
        return this._driveSettings && this._driveSettings.supportedFileFilters
          ? this._driveSettings.supportedFileFilters
          : this.FILTER_FILE_TYPES;
      }),
      (u.prototype.getSelectedFilterForFileTypes = function () {
        return Array.from(this._filterFileTypes);
      }),
      (u.prototype.addFileTypeToSelectedFilter = function (e) {
        this._isFilterFileTypeSupported(e) && this._filterFileTypes.add(e);
      }),
      (u.prototype.deleteFileTypeFromSelectedFilter = function (e) {
        this._isFilterFileTypeSupported(e) && this._filterFileTypes.delete(e);
      }),
      (u.prototype._isFilterFileTypeSupported = function (e) {
        return this.getAvailableFileTypesFilter().some((t) => t.type === e);
      }),
      (u.prototype.clearAllFileTypesFromSelectedFilter = function () {
        this._filterFileTypes = new Set();
      }),
      (u.prototype.getSortDirection = function () {
        return this._sortDirection;
      }),
      (u.prototype.setSortDirection = function (e) {
        Object.values(GFilesPanel.GFilesPanelSortDirections).includes(e) &&
          (this._sortDirection = e);
      }),
      (u.prototype.hasMoreItemsToLoad = function () {
        return false;
      }),
      (u.prototype.setQueryLimit = function (e) {
        return (this._queryLimit = parseInt(e, 10)), this;
      }),
      (u.prototype.isInstalled = function () {
        return this._driveInstalled;
      }),
      (u.prototype.install = function (e) {
        return (this._driveInstalled = true), Promise.resolve();
      }),
      (u.prototype.uninstall = function () {
        return (this._driveInstalled = false), Promise.resolve();
      }),
      (u.prototype.getQueryLimit = function () {
        return this._queryLimit;
      }),
      (u.prototype.setCurrentFolder = function (e) {
        return (
          (this._currentFolder = e),
          gContainer.setProperty(this.CURRENT_FOLDER_PROP, JSON.stringify(e)),
          this
        );
      }),
      (u.prototype.isFolderSharedWithMeFolder = function (e) {
        return false;
      }),
      (u.prototype.getCurrentFolder = function () {
        return this._currentFolder;
      }),
      (u.prototype.fetchFolders = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.isLoadFoldersOnDemandSupported = function () {
        return false;
      }),
      (u.prototype.hasFolders = async function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
        return this.fetchFolders("name", exports, 1).then((e) => !!e && e.length > 0);
      }),
      (u.prototype.getFolders = function () {
        return this._folders;
      }),
      (u.prototype.createFolder = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.navigateToParentFolder = function () {
        throw Error("Not implemented!");
      }),
      (u.prototype.getFile = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.getFolder = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.getRawFile = function (e, t, n) {
        throw Error("Not implemented!");
      }),
      (u.prototype.openFile = async function (e, t) {
        return new Promise((e, t) => {
          t("Not implemented!");
        });
      }),
      (u.prototype.saveNewFile = function (e, t) {
        throw Error("Not implemented!");
      }),
      (u.prototype.fetchFiles = function (e, t, n) {
        throw Error("Not implemented!");
      }),
      (u.prototype.fetchRecentFiles = async function () {
        return [];
      }),
      (u.prototype.filterSupportedFileFormats = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
        const module = this.getSupportedMIMETypes();
        return exports.filter((e) => module.includes(e.getMimeType()));
      }),
      (u.prototype.renameItem = function (e, t) {
        throw Error("Not implemented!");
      }),
      (u.prototype.isItemAllowedToBeRendered = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.itemRequiresLazyUpdate = async function (e) {
        return false;
      }),
      (u.prototype.getItemLazyUpdate = async function (e) {
        return e;
      }),
      (u.prototype.isFileAllowedToBeOpened = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.deleteItem = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.cutPaste = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.fileMove = function (e, t) {
        throw Error("Not implemented!");
      }),
      (u.prototype.copyPaste = function (e) {
        throw Error("Not implemented!");
      }),
      (u.prototype.supportsCorporateStorage = function () {
        return false;
      }),
      (u.prototype.setCorporateStorage = async function (e) {
        this._corporateStorage = e;
      }),
      (u.prototype.initLastCorporateStorage = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "id";
        const require = this;
        async function _interopRequireDefault(e) {
          if (!e) return null;
          const _interopRequireDefault = await require.getCorporateStorages();
          return _interopRequireDefault.length ? _interopRequireDefault.find((n) => n[module] === e) : null;
        }
        async function GCore(e) {
          require.setCorporateStorage(e);
          let module = await require.getPreviousSelectedFolder();
          require.setCurrentFolder(module || require.getRootFolder());
        }
        return e && this.supportsCorporateStorage()
          ? gContainer.getProperty(e).then(_interopRequireDefault).then(GCore)
          : GCore(null);
      }),
      (u.prototype.saveLastTeamDriveId = function (e, t) {
        if (!e)
          throw new a.default(
            "Invalid arguments for saving last team drive id"
          );
        return gContainer.setProperty(e, t), this;
      }),
      (u.prototype.getCorporateStorage = function () {
        return this._corporateStorage;
      }),
      (u.prototype.getCorporateStorages = async function () {
        return [];
      }),
      (u.prototype.isRootFolder = function (e) {
        throw new Error("Not implemented!");
      }),
      (u.prototype.getRootFolder = function () {
        throw new Error("Not implemented!");
      }),
      (u.prototype.supportsSaveCollisionFlow = function () {
        return false;
      }),
      (u.prototype.requiresOverwriteCollisionHandling = function () {
        return false;
      }),
      (u.prototype.fileExists = async function (e, t, n) {
        throw new Error("Not implemented!");
      }),
      (u.prototype.folderExists = function (e, t) {
        throw new Error("Not implemented!");
      }),
      (u.prototype.getPreviousSelectedFolder = function () {
        return this.CURRENT_FOLDER_PROP
          ? gContainer
              .getProperty(this.CURRENT_FOLDER_PROP)
              .then(JSON.parse)
              .catch((e) => {
                console.log("Current folder is not set", e.message);
              })
          : Promise.resolve(null);
      }),
      (u.prototype.clearPreviousSelectedFolder = function () {
        return gContainer.removeProperty(this.CURRENT_FOLDER_PROP);
      }),
      (u.prototype.getSupportedExtensions = function () {
        return this.getSupportedFileFormats().map((e) => {
          let { ext: module } = e;
          return module.toLowerCase();
        });
      }),
      (u.prototype.getSupportedMIMETypes = function () {
        return this.getSupportedFileFormats().map((e) => g(e));
      }),
      (u.prototype.filterTypesWithSearchString = function (e, t) {
        if (!t || !e) return e;
        let require;
        if (
          ((t = t.toLowerCase()).startsWith(".")
            ? (require = t.slice(1))
            : t.startsWith("*.") && (require = t.slice(2)),
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
      }),
      (u.prototype.getSupportedFileFormats = function () {
        return this._driveSettings && this._driveSettings.supportedFileFormats
          ? this._driveSettings.supportedFileFormats
          : d;
      }),
      (u.prototype.getDefaultFileFormat = function () {
        return this.getSupportedFileFormats().find((e) => e.default);
      }),
      (u.prototype.findFileFormatByExtension = function (e) {
        return this.getSupportedFileFormats().find((t) => {
          let { ext: require } = t;
          return !!require && require.toLowerCase() === e.toLowerCase();
        });
      }),
      (u.prototype.lookupByMimeType = function (e) {
        const module = e.toLowerCase();
        return this.getSupportedFileFormats().find((e) => {
          const require = g(e);
          return !!require && require.toLowerCase() === module;
        });
      }),
      (u.prototype.getFileFormat = function (e) {
        var t = this.findFileFormatByExtension(e.extension || e.ext);
        return t || (t = this.lookupByMimeType(e.type)), t;
      }),
      (u.prototype.isFileSupported = function (e) {
        return !(
          !e ||
          !(
            this.getSupportedMIMETypes().includes(e.type) ||
            this.getSupportedMIMETypes().includes(e.mimeType) ||
            (e.extension &&
              this.getSupportedExtensions().includes(e.extension.toLowerCase()))
          )
        );
      }),
      (u.prototype.canAccessFile = async function () {
        return true;
      }),
      (u.prototype.addAction = function (e) {
        this._actions.push(e);
      }),
      (u.prototype.getActions = function () {
        return this._actions;
      }),
      (u.prototype.setDefaultEmptyMessage = function (e) {
        this._defaultEmpyMessage = e;
      }),
      (u.prototype.getDefaultEmptyMessage = function () {
        return this._defaultEmpyMessage;
      }),
      (u.prototype.generatePreviousSelectedFolderPath = function () {
        throw new Error("Not implemented!");
      }),
      (u.prototype.containsInPreviousPath = function (e) {
        return this.PREVIOUS_SELECTED_FOLDER_PATH.find((t) => t === e.getId());
      }),
      (u.prototype.resetPreviousSelectedFolderPath = function () {
        this.PREVIOUS_SELECTED_FOLDER_PATH = [];
      }),
      (u.prototype.removeLoadedFolderFromPreviousPath = function (e) {
        this.PREVIOUS_SELECTED_FOLDER_PATH =
          this.PREVIOUS_SELECTED_FOLDER_PATH.filter((t) => t !== e.getId());
      }),
      (u.prototype.hasTitleValidation = function () {
        return false;
      }),
      (u.prototype.getTitleValidator = function () {
        throw Error("NOT IMPLEMENTED");
      }),
      (u.prototype.loadExampleFiles = async function () {
        return Promise.resolve([]);
      }),
      (u.prototype.isAssetsSharedWithMeFolder = function () {
        return false;
      }),
      (u.prototype.getSharedFilesWithMeFolder = function () {
        return null;
      }),
      (u.prototype.getDriveIdPropertyName = function () {
        return "id";
      }),
      (u.Provider = barrel_purchase_urls.Provider);
    module.default = u;
  }