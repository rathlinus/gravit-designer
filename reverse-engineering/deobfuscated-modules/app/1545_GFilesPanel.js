/**
 * Webpack Module #1545
 * Type: class
 * Name: GFilesPanel
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */,
      require(168) /* polyfill_Array_reduce */,
      require(328) /* polyfill_Array_sort */,
      require(180) /* DataModule_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(96) /* polyfill_JSON_stringify */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(356) /* polyfill_RegExp_constructor */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(271) /* polyfill_String_endsWith */,
      require(34) /* polyfill_String_replace */,
      require(851) /* DataModule_851 */,
      require(91) /* polyfill_String_trim */,
      require(218) /* module_218 */,
      require(189) /* DataModule_189 */,
      require(190) /* DataModule_190 */,
      require(191) /* module_191 */,
      require(192) /* DataModule_192 */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(169) /* stub_requires_683 */,
      require(97) /* stub_requires_684 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      DataModule_1546 = require(1546) /* DataModule_1546 */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GFileDownloadUtils = require(1154) /* GFileDownloadUtils */,
      l = require(1552) /* Exports_GGoogleDrive */,
      TYPES = require(862) /* Exports_TYPES */,
      d = require(858) /* Exports_GFilesPanel */,
      GObject_1556 = _interopRequireDefault(require(1556) /* GObject_1556 */),
      p = _interopRequireDefault(require(86) /* module_86 */),
      GCloudStorage = _interopRequireDefault(require(119) /* GCloudStorage */),
      h = _interopRequireDefault(require(802) /* CloudException */),
      f = _interopRequireDefault(require(1240) /* module_1240 */),
      GSaveAsAction = _interopRequireDefault(require(445) /* GSaveAsAction */),
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
      AppError = _interopRequireDefault(require(355) /* AppError */),
      AppSettings = require(10) /* AppSettings */,
      AppSettings2 = require(519) /* AppSettings */,
      GRepeatActionError = _interopRequireDefault(require(1557) /* GRepeatActionError */);
    const GCloudStorageItem = require(156) /* GCloudStorageItem */,
      GDocumentEvent = require(78) /* GDocumentEvent */;
    var S = AppSettings.CloudIntegration.cloudOptions,
      E = AppSettings.CloudIntegration.nativeOption,
      A = [..._.CloudIntegration.cloudOptions, AppSettings.CloudIntegration.nativeOption];
    function T(e) {
      this._initializeDefaultValues(e),
        (this._initializingPromise = this._init(e));
    }
    (T.prototype._initializingPromise = null),
      (T.prototype._GUISettings = null),
      (T.prototype._cloudSettings = null),
      (T.prototype.view = null),
      (T.prototype.drive = null),
      (T.prototype.MODE = null),
      (T.IMAGES_WAIT_TIMEOUT = 2e4),
      (T.DriveAccountsSettingName = "designer.filespanel.cloud-accounts"),
      (T.DriveAccountsActiveSettingsName =
        "designer.filespanel.cloud-accounts.active"),
      GCore.GObject.inherit(T, GCore.GObject),
      (T.prototype._showEmptyPanel = false),
      (T.prototype._hasFolders = false),
      (T.prototype._showRecentFiles = false),
      (T.prototype._isSaveMode = false),
      (T.prototype._documentToSave = null),
      (T.prototype._initializeDefaultValues = function (e) {
        var t = this;
        let {
          closeCallback: require = CollaborationMergeUtils.fakeFunction,
          documentToSave: _interopRequireDefault,
          cancelSave: GCore = CollaborationMergeUtils.fakeFunction,
          defaultFilename: DataModule_1546,
          readyStateChange: GFileDownloadUtils,
          showExampleFiles: l,
          GUISettings: TYPES,
          saveMode: GObject_1556,
          driveSettings: p = null,
          isDashboard: GCloudStorage,
          isCorporateStoragesEnabled: h = true,
        } = e;
        (this._GUISettings = TYPES || new T.GUISettings()),
          (this._driveSettings = p || new f.default()),
          (this.SELECTION = []),
          (this.TEMP_SELECTION = []),
          (this.CURRENT_FILE_LOAD = 0),
          (this.CURRENT_UPDATE_OPERATION_ID = -1),
          (this.MODE = d.GFilesPanelClipboardModes.DEFAULT),
          (this.BUILD_IN_PROGRESS = false),
          (this.DEFAULT_FILENAME = DataModule_1546),
          (this._newClipBoard = false),
          (this._showExampleFiles = l),
          (this._isDashboard = GCloudStorage),
          (this._isCorporateStoragesEnabled = h),
          (this.readyStateChange = GFileDownloadUtils),
          (this.search = (0, CollaborationMergeUtils.debounce)(this.search, 200));
        var GSaveAsAction = (e) =>
          function () {
            t._removeEventListeners(), e(...arguments);
          };
        (this._onCancelSaveCallback = GCore && GSaveAsAction(GCore)),
          (this._onCloseCallback = require && GSaveAsAction(require)),
          (this._documentToSave = _interopRequireDefault),
          (this._isSaveMode = GObject_1556 || this._documentToSave);
      }),
      (T.prototype._init = async function (e) {
        let { parentComponent: module, nativeCloud: require, initCallback: _interopRequireDefault } = e;
        return (
          (this.USER = await gDesigner.getUser()),
          (this.panel = $("<div/>").addClass("g-files-panel").appendTo(module)),
          this.initLayout(require)
            .then(() => {
              _interopRequireDefault && _interopRequireDefault();
            })
            .catch((e) => {
              _interopRequireDefault && _interopRequireDefault(e);
            })
        );
      }),
      (T.GUISettings = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        return Object.assign({ dialogControls: true, downloadSourceFile: false }, exports);
      }),
      (T.prototype.unmount = function () {
        function exports() {
          this.panel && $(this.panel).remove();
        }
        this._initializingPromise
          ? this._initializingPromise.then(() => exports.call(this))
          : exports.call(this);
      }),
      (T.isMaximized = () => gContainer.getProperty("GFilesPanel.maximized")),
      (T.isFilesGridListStyle = () =>
        gContainer.getProperty("GFilesPanel.isFilesListStyle")),
      (T.prototype.getContextSource = function () {
        return {
          toggleLoading: (e) => this.view.toggleLoading(e),
          update: () => this.updateFilesList(),
          close: () => {
            this.view.toggleLoading(true), this._onCloseCallback();
          },
        };
      }),
      (T.prototype.initLayout = async function (e) {
        (this.drive = l.GCloudDrive.getInstance()),
          this.drive.setQueryLimit(20),
          (this.view = new DataModule_1546.GFilesPanelViewNative(this.panel, this)),
          (this.accountSettingsKey = ""
            .concat(T.DriveAccountsSettingName, ".")
            .concat(this.USER.id));
        var t = this;
        let require = await gContainer.getProperty(T.DriveAccountsActiveSettingsName);
        return (async function (n) {
          let _interopRequireDefault,
            GCore = true;
          await t.updateCloudSettings(),
            e
              ? ((GCore = false), (_interopRequireDefault = E))
              : (n && (_interopRequireDefault = t.getCloudSettingsById(n)), _interopRequireDefault || (_interopRequireDefault = E));
          try {
            await t.setCloudDrive(_interopRequireDefault, GCore);
          } catch (e) {
            await t.setCloudDrive(E);
          }
          (await T.isFilesGridListStyle()) && t.toListView(),
            (await T.isMaximized()) && t._maximizeWindow(true),
            window.addEventListener("resize", t._minimizeWindow.bind(t));
        })(require && require.activeSettingsId);
      }),
      (T.prototype.updateCloudAccountName = function (e, t) {
        var n = this;
        return gContainer
          .getProperty(n.accountSettingsKey)
          .then(async function (_interopRequireDefault) {
            let GCore,
              DataModule_1546 = _interopRequireDefault ? n._stringToSettings(_interopRequireDefault) : [];
            DataModule_1546 instanceof Array || (DataModule_1546 = []);
            for (let t = 0, n = DataModule_1546.length; t < n; t++)
              if (DataModule_1546[t].id === e) {
                GCore = t;
                break;
              }
            GCore > -1 && (DataModule_1546[GCore].name = t),
              gContainer.setProperty(
                n.accountSettingsKey,
                n._settingsToString(DataModule_1546)
              ),
              await n.updateCloudSettings(),
              e === n.getCurrentDriveId() && n.view.updateTopBar();
          })
          .catch((e) => Promise.reject(e));
      }),
      (T.prototype.saveNewCloudAccount = function (e) {
        var t = this;
        return gContainer
          .getProperty(t.accountSettingsKey)
          .then(function (n) {
            let _interopRequireDefault = n ? t._stringToSettings(n) : [];
            return (
              _interopRequireDefault instanceof Array || (_interopRequireDefault = []),
              (e.id = new Date().getTime()),
              (e.deletable = true),
              _interopRequireDefault.push(e),
              gContainer.setProperty(
                t.accountSettingsKey,
                t._settingsToString(_interopRequireDefault)
              ),
              t.updateCloudSettings()
            );
          })
          .catch((e) => Promise.reject(e));
      }),
      (T.prototype.deleteCloudDrive = function (e) {
        var t = this;
        return gContainer
          .getProperty(t.accountSettingsKey)
          .then(async function (n) {
            let _interopRequireDefault,
              GCore = n ? t._stringToSettings(n) : [];
            GCore instanceof Array || (GCore = []);
            for (let t = 0, n = GCore.length; t < n; t++)
              if (GCore[t].id === e.id) {
                _interopRequireDefault = t;
                break;
              }
            _interopRequireDefault > -1 && GCore.splice(_interopRequireDefault, 1),
              GCore.length > 0
                ? gContainer.setProperty(
                    t.accountSettingsKey,
                    t._settingsToString(GCore)
                  )
                : gContainer.removeProperty(t.accountSettingsKey);
            try {
              if ("googledrive" === e.type) {
                var DataModule_1546 = new l.GGoogleDrive();
                await DataModule_1546.install(), await DataModule_1546.uninstall();
              }
              gDesigner.removeExternalRecentFiles(e.type, e.id);
            } catch (e) {
              console.log(e);
            }
            return t.updateCloudSettings();
          })
          .catch((e) => Promise.reject(e));
      }),
      (T.prototype.handleNewFolder = function (e) {
        var t = this;
        let require = false;
        gDesigner.stats("filespanel_create_cloudfolder"),
          this.view.toggleLoading(true);
        let _interopRequireDefault = 0;
        const DataModule_1546 = (CollaborationMergeUtils) => {
          if ((_interopRequireDefault++, _interopRequireDefault > AppSettings2.MAX_FOLDER_DEPTH_FOR_CLOUD))
            return (
              (require = false),
              t.view.toggleLoading(false),
              void GSystemDialog.default.alert(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "text.error-creating-folder")
                )
              )
            );
          let GFileDownloadUtils = {};
          t.drive.hasTitleValidation() && (GFileDownloadUtils = t.drive.getTitleValidator()),
            new GObject_1556.default(
              async function (_interopRequireDefault) {
                if (
                  ((_interopRequireDefault = _interopRequireDefault.trim()),
                  t.view.toggleLoading(true),
                  t.drive.supportsSaveCollisionFlow())
                ) {
                  if (
                    (await t.drive.folderExists(
                      _interopRequireDefault,
                      t.drive.getCurrentFolder()
                    )) &&
                    !(await ((l = _interopRequireDefault),
                    new Promise((e) => {
                      GSystemDialog.default.confirm(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GFilesPanel",
                            "text.folder-already-exists-on-current-location"
                          )
                        ).replace("%foldername", '"'.concat(l, '"')),
                        (t) => e(!!t),
                        null,
                        null,
                        true,
                        true,
                        true
                      );
                    })))
                  )
                    return DataModule_1546(_interopRequireDefault);
                  if (t.drive.requiresOverwriteCollisionHandling()) {
                    for (
                      var CollaborationMergeUtils = 0, GFileDownloadUtils = _interopRequireDefault;
                      await t.drive.folderExists(GFileDownloadUtils, t.drive.getCurrentFolder());

                    )
                      GFileDownloadUtils = "".concat(_interopRequireDefault, " (").concat(++CollaborationMergeUtils, ")");
                    _interopRequireDefault = GFileDownloadUtils;
                  }
                }
                var l;
                (require = true),
                  t.drive
                    .createFolder(_interopRequireDefault)
                    .then(() => {
                      t.view.toggleLoading(false), e ? e() : t.updateFilesList();
                    })
                    .catch((e) => {
                      if ((t.view.toggleLoading(false), e && e.badName))
                        return (
                          GSystemDialog.default.alert(e.message),
                          setTimeout(() => {
                            DataModule_1546(_interopRequireDefault);
                          })
                        );
                      (require = false),
                        console.error(e),
                        GSystemDialog.default.alert(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GFilesPanel",
                              "text.error-creating-folder"
                            )
                          )
                        );
                    });
              },
              function () {
                require || t.view.toggleLoading(false);
              },
              "primary",
              CollaborationMergeUtils,
              GFileDownloadUtils
            ).open();
        };
        return DataModule_1546(), this;
      }),
      (T.prototype.handleMaximizePanel = function () {
        return (
          this._maximizeWindow(),
          gDesigner.stats("filespanel_maximize_cloudfile"),
          this
        );
      }),
      (T.prototype.handleMinimizePanel = function () {
        return (
          this._minimizeWindow(),
          gDesigner.stats("filespanel_minimize_cloudfile"),
          this
        );
      }),
      (T.prototype.handleClosePanel = function () {
        return (
          this.panel.closest(".g-dialog-container").mousedown(),
          this._removeEventListeners(),
          gDesigner.stats("filespanel_close_cloudfile"),
          this
        );
      }),
      (T.prototype.handleDelete = function () {
        this.logStatsForCurrentFilesSelection(
          "filespanel_delete_cloud",
          "filespanel_delete_cloud-multiple"
        );
        var e = this;
        return (
          GSystemDialog.default.confirm(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "text.delete-confirm")
            ),
            function (t) {
              t && e.deleteSelection();
            }.bind(this),
            null,
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.delete-button")
            ),
            false,
            true,
            true
          ),
          this
        );
      }),
      (T.prototype.handleCancelSave = function () {
        return (
          gDesigner.stats("filespanel_cancelsave_cloud"),
          this._onCancelSaveCallback(),
          this
        );
      }),
      (T.prototype.handleSave = async function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        t || (t = this.getDefaultExtensionForSave());
        const _interopRequireDefault = (e) =>
          new Promise((t) => {
            GSystemDialog.default.confirm(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFilesPanel",
                  "text.file-already-exists-on-current-location"
                )
              ).replace("%filename", '"'.concat(e, '"')),
              (e) => t(!!e),
              null,
              null,
              false,
              true,
              true
            );
          });
        if (
          (this.view.toggleLoading(true),
          gDesigner.stats("filespanel_save_cloudfile", t),
          (e = (0, CollaborationMergeUtils.removeAllSuffixWhichLikeExtension)(e, t)).trim())
        ) {
          try {
            if (this.drive.supportsSaveCollisionFlow()) {
              if (
                (await this.drive.fileExists(
                  e,
                  t,
                  this.drive.getCurrentFolder()
                )) &&
                !(await _interopRequireDefault(e))
              )
                return (
                  this.view.toggleLoading(false),
                  void this.view.focusFileNameInput({ name: e })
                );
              if (this.drive.requiresOverwriteCollisionHandling()) {
                for (
                  var DataModule_1546 = 0, GFileDownloadUtils = e;
                  await this.drive.fileExists(
                    GFileDownloadUtils,
                    t,
                    this.drive.getCurrentFolder()
                  );

                )
                  GFileDownloadUtils = "".concat(e, " (").concat(++DataModule_1546, ")");
                e = GFileDownloadUtils;
              }
            }
            await this._triggerNewFileSave(e, t, require);
          } catch (e) {
            if (e && e.badName)
              return (
                this.view.toggleLoading(false), void GSystemDialog.default.alert(e.message)
              );
            this.getDocumentToSave() &&
              gDesigner.trigger(
                new GDocumentEvent(GDocumentEvent.Type.SynchronismUpdateFailed, this.getDocumentToSave())
              );
            let t = GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "text.error-saving-file")
            );
            e && e.message && e.dontExtend
              ? (t = e.message)
              : e && e.message
              ? (t = "".concat(t, "<br />").concat(e.message))
              : e && (t = "".concat(t, "<br />").concat(e)),
              GSystemDialog.default.alert(t),
              console.error(e);
          }
          this._onCloseCallback(true);
        } else
          GSystemDialog.default.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GFilesPanel",
                "text.please-inform-valid-file-name"
              )
            ),
            () => {
              this.view.toggleLoading(false),
                this.view.focusFileNameInput({
                  name: GCore.GLocale.get(
                    new GCore.GLocaleKey("GFilesPanel", "text.untitled")
                  ),
                });
            }
          );
        return this;
      }),
      (T.prototype._setFileNameInputValue = function (e) {
        this.view.setFileNameInputValue(e);
      }),
      (T.prototype._triggerNewFileSave = async function (e, t, n) {
        await this.drive.saveNewFile(
          this.getDocumentToSave(),
          e,
          t,
          n,
          this.readyStateChange
        );
      }),
      (T.prototype._triggerFileOpen = async function (e) {
        await this.drive.openFile(e);
      }),
      (T.prototype._triggerFileDeleted = async function (e) {}),
      (T.prototype._triggerFileRenamed = async function (e) {}),
      (T.prototype.setKeyListener = function (e) {
        return (
          this._handleKeyPress &&
            document.removeEventListener("keypress", this._handleKeyPress),
          (this._handleKeyPress = (t) => {
            var n = t.which || t.keyCode;
            e(n, t);
          }),
          document.addEventListener("keypress", this._handleKeyPress),
          this
        );
      }),
      (T.prototype.getDefaultSaveFormat = function () {
        return this.drive.getDefaultFileFormat();
      }),
      (T.prototype.handleBack = function () {
        if (
          (gDesigner.stats("filespanel_go-to-parent_cloudfolder"),
          this.drive.getCurrentFolder())
        ) {
          this.view.toggleLoading(true), this.drive.navigateToParentFolder();
          var exports = this.drive.getCurrentFolder();
          this.view.manageOpenFolder(null, exports), this.view.resetSelection();
        }
        return this.updateFilesList(true, false), this;
      }),
      (T.prototype.navigateToRoot = function () {
        let exports =
          !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
        return (
          gDesigner.stats("filespanel_go-to-root_cloudfolder"),
          this.drive.isRootFolder() ||
            (this.view.toggleLoading(true),
            this.drive.setCurrentFolder(this.drive.getRootFolder()),
            this.navigateToFolder(this.drive.getRootFolder(), exports),
            this.view.manageOpenFolder(null, this.drive.getRootFolder()),
            this.view.resetSelection()),
          this
        );
      }),
      (T.prototype.handleSaveAs = function (e, t, n) {
        gDesigner.stats("filespanel_download_file", e),
          this._onCancelSaveCallback(),
          gDesigner.executeAction(
            "".concat(GSaveAsAction.default.ID, ".").concat(e.toLowerCase()),
            [null, null, null, t, n],
            undefined,
            true
          );
      }),
      (T.prototype.handleDownload = function () {
        return (
          gDesigner.stats("filespanel_download_multiple-files"),
          this.downloadSelectedFiles(TYPES.DEFAULT_TYPE),
          this
        );
      }),
      (T.prototype.handleFileDblClick = function (e) {
        return (
          e.hasPermission(GCloudStorageItem.Permission.Open) && !this.isSaveMode()
            ? (gDesigner.stats("filespanel_open_cloudfile"), this.openFile(e))
            : e.hasPermission(GCloudStorageItem.Permission.Rename) &&
              (gDesigner.stats("filespanel_focus_filename-input"),
              this.view.focusFileNameInput(e)),
          this
        );
      }),
      (T.prototype.handleFileClick = function (e, t) {
        return (
          gDesigner.stats("filespanel_select_cloudfile"),
          this.view.manageSelection(t, e),
          this
        );
      }),
      (T.prototype.handleParentClose = function () {
        return (
          this._removeEventListeners(),
          this.view && this.view.handleParentClose(),
          this
        );
      }),
      (T.prototype.openFile = async function (e) {
        e.example && gDesigner.stats("filespanel_open_examplefile", e.name);
        if (await this.drive.canAccessFile(e).catch((e) => false))
          try {
            this._triggerFileOpen(e), this._onCloseCallback();
          } catch (e) {
            console.log(e.stack),
              GSystemDialog.default.alert(e.message),
              this.updateFilesList();
          }
        else
          GSystemDialog.default.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GFilesPanel",
                "text.file-can-not-be-accessed-missing-permissions"
              )
            )
          );
      }),
      (T.prototype.handleFolderClick = function (e, t) {
        return (
          gDesigner.stats("filespanel_open_cloudfolder"),
          this.view.resetSelection(),
          this.navigateToFolder(e),
          this.view.manageOpenFolder(t, e),
          this
        );
      }),
      (T.prototype.manageSelection = function (e, t) {
        return (
          gDesigner.stats("filespanel_select_cloudfolder"),
          this.view.manageSelection(t, e),
          this
        );
      }),
      (T.prototype.renameItem = async function (e, t) {
        return this.drive.renameItem(e, t);
      }),
      (T.prototype._removeEventListeners = function () {
        document.removeEventListener("keypress", this._handleKeyPress),
          window.removeEventListener("resize", this._minimizeWindow.bind(this));
      }),
      (T.prototype._getFullPathNames = function (e) {
        var t = this.drive.getFolders(),
          n = [e.name];
        let _interopRequireDefault, GCore;
        if (!t) return n;
        for (; e.parent && ((GCore = t[e.parent]), GCore) && ((_interopRequireDefault = GCore.folder), _interopRequireDefault.name); )
          n.unshift(_interopRequireDefault.name), (e = _interopRequireDefault);
        return n;
      }),
      (T.prototype.addFile = function (e, t, n, _interopRequireDefault) {
        this.view.addFile(this.updateCloudItemForUserPermission(e), t, n, _interopRequireDefault);
      }),
      (T.prototype._convertBlob = function (e, t, n) {
        return Promise.resolve(e);
      }),
      (T.prototype.downloadFile = function (e, t) {
        let require =
            arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
          _interopRequireDefault = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
        if (_interopRequireDefault) {
          if (!(t = this.drive.getFileFormat(e)))
            return GObject_1556(
              Promise.reject(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.file-not-supported")
                )
              )
            );
        } else t || (t = this.drive.getFileFormat(e) || TYPES.DEFAULT_TYPE);
        var { ext: DataModule_1546, type: CollaborationMergeUtils, mime: GFileDownloadUtils, version: l } = t;
        CollaborationMergeUtils = CollaborationMergeUtils || GFileDownloadUtils;
        const d = this._triggerFileDownload(e, require, DataModule_1546, CollaborationMergeUtils, l);
        function GObject_1556(t) {
          return { promise: t, file: e, cancel: () => require.cancel && require.cancel() };
        }
        return GObject_1556(d);
      }),
      (T.prototype._triggerFileDownload = function (e, t, n, _interopRequireDefault, GCore) {
        const DataModule_1546 = new AbortController(),
          l = DataModule_1546.signal;
        return (
          (t.progress = t.progress || (() => {})),
          this.drive
            .getRawFile(e, l, t)
            .then(async (l) => {
              let d,
                GObject_1556 = l;
              if (
                ((t.cancel = (0, CollaborationMergeUtils.chaining)(t.cancel, () => DataModule_1546.abort())),
                e.type !== _interopRequireDefault
                  ? ((GObject_1556 = await this._convertBlob(
                      GObject_1556,
                      { ext: n, type: _interopRequireDefault, version: GCore },
                      t
                    ).catch((e) => (d = e || true))),
                    GObject_1556 ||
                      (d = new Error(
                        "Unsupported mime type: #".concat(e.type)
                      )))
                  : _interopRequireDefault === TYPES.DEFAULT_TYPE.type &&
                    ((GObject_1556 = await this._repackNativeBlob(GObject_1556, t).catch(
                      (e) => (d = e || true)
                    )),
                    GObject_1556 ||
                      d ||
                      (d = new Error(
                        "Error fetching file contents for download"
                      ))),
                d)
              ) {
                if (d instanceof Error) throw d;
                throw new Error("Error fetching file contents for download");
              }
              {
                t.done && t.done();
                let GCore = e.name || l.name;
                GCore.endsWith(".".concat(n)) &&
                  (GCore = GCore.replace(new RegExp(".".concat(n, "$")), "")),
                  (0, GFileDownloadUtils.downloadDataURI)(GObject_1556, GCore, n, { type: _interopRequireDefault });
              }
            })
            .catch((e) => {
              if ((t.failed && t.failed(), e)) {
                if ((console.error(e), e instanceof Error)) throw e;
                throw new Error("Error fetching file contents for download");
              }
            })
        );
      }),
      (T.prototype._repackNativeBlob = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        return new Promise(async (n, _interopRequireDefault) => {
          const DataModule_1546 = new FileReader();
          (DataModule_1546.onload = async function () {
            const e = new Uint8Array(this.result),
              DataModule_1546 = GCore.GNode.deserialize(
                GCloudStorage.default.unzipData(e),
                gDesigner.getWorkspace()
              );
            var GFileDownloadUtils = { cancelled: false };
            (module.cancel = (0, CollaborationMergeUtils.chaining)(module.cancel, () => (GFileDownloadUtils.cancelled = true))),
              await (0, CollaborationMergeUtils.resolveDocumentImages)(
                DataModule_1546,
                T.IMAGES_WAIT_TIMEOUT,
                GFileDownloadUtils
              ).catch(() => {
                GFileDownloadUtils.cancelled
                  ? _interopRequireDefault()
                  : _interopRequireDefault(
                      new Error(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GCommonNames",
                            "text.file-no-images-cannot-be-processed"
                          )
                        )
                      )
                    );
              });
            var l = GCore.GNode.serialize(DataModule_1546, { save: true });
            (null === l || "" === l || l.length < 1 || GFileDownloadUtils.cancelled) && _interopRequireDefault();
            var TYPES = new Uint8Array(pako.gzip(l, { level: 9 }).buffer);
            TYPES.byteLength > 20 ? n(TYPES) : _interopRequireDefault();
          }),
            (DataModule_1546.onerror = _interopRequireDefault),
            DataModule_1546.readAsArrayBuffer(e);
        });
      }),
      (T.prototype.downloadSelectedFiles = async function () {
        let { ext: exports, type: module } =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : TYPES.DEFAULT_TYPE,
          require = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
          _interopRequireDefault = arguments.length > 2 ? arguments[2] : undefined;
        if (this.SELECTION.length < 1) return;
        const GCore = await Promise.all(
            this.SELECTION.map(
              async (e) =>
                this.drive.isFileSupported(e) &&
                (await this.drive
                  .canAccessFile(e)
                  .catch(
                    (e) => (console.error("drive.canAccessFile error", e), false)
                  ))
            )
          ),
          DataModule_1546 = this.SELECTION.filter((e, t) => !!GCore[t]);
        await this._triggerSelectedFilesDownload(DataModule_1546, exports, module, require, _interopRequireDefault);
      }),
      (T.prototype._triggerSelectedFilesDownload = async function (
        e,
        t,
        n,
        _interopRequireDefault,
        DataModule_1546
      ) {
        const CollaborationMergeUtils = e.map(() => 0),
          GFileDownloadUtils = e.length,
          l = 100 / GFileDownloadUtils,
          TYPES = {};
        let d = gDesigner.getActiveDocument();
        d || (d = gDesigner.newInfiniteDocument()),
          d.updateStatus(p.default.Downloading, TYPES),
          TYPES.text(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "text.downloading-files")
            ),
            true
          ),
          TYPES.progressInfo("0/".concat(GFileDownloadUtils));
        let GObject_1556 = 0,
          GCloudStorage = false;
        const h = () => TYPES.progressInfo("".concat(++GObject_1556, "/").concat(GFileDownloadUtils)),
          f = () => TYPES.progressInfo("".concat(++GObject_1556, "/").concat(GFileDownloadUtils)),
          GSaveAsAction = () => (GCloudStorage = true),
          AppError = e.map((e, GCore) => {
            var GFileDownloadUtils = _interopRequireDefault;
            !GFileDownloadUtils && this.fileRequiresSourceDownload(e) && (GFileDownloadUtils = true);
            var d = {
              ext: ((GFileDownloadUtils && (e.extension || e.ext)) || t).toLowerCase(),
              type: (GFileDownloadUtils && ((e instanceof GCloudStorageItem && e.getMimeType()) || e.type)) || n,
              version: DataModule_1546,
            };
            return this.downloadFile(
              e,
              d,
              {
                progress(e) {
                  CollaborationMergeUtils[GCore] = e;
                  const t = CollaborationMergeUtils.reduce((e, t) => e + Math.min(t / 100, 1) * l, 0);
                  TYPES.progress(t);
                },
                done: h,
                failed: f,
                cancel: GSaveAsAction,
              },
              _interopRequireDefault
            );
          });
        AppError.length &&
          (this._onCancelSaveCallback(), gDesigner.closeNewDocumentDialog()),
          d.initCancelHandler(() => {
            try {
              AppError.forEach((e) => e.cancel());
            } finally {
              d.updateStatus(p.default.DownloadCancelled);
            }
          });
        const AppSettings = await Promise.all(
          AppError.map((e) => {
            let { file: t, promise: n } = e;
            return n.catch((e) =>
              Object.create({ file: t, status: "rejected", error: e })
            );
          })
        );
        if (GCloudStorage) return void d.updateStatus(p.default.DownloadCancelled);
        const AppSettings2 = AppSettings.filter((e) => e && "rejected" === e.status);
        AppSettings2.length
          ? (d.updateStatus(p.default.DownloadFailed),
            GSystemDialog.default.alert(
              $("<div/>")
                .addClass("error-download-multiple-files")
                .append(
                  $("<span/>").text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanel",
                        "text.error-download-multiple-files"
                      )
                    )
                  )
                )
                .append(
                  $("<ul/>").append(
                    AppSettings2.map((e) => {
                      let { file: t, error: { message: n = "" } = {} } = e;
                      return $("<li/>").html(
                        "".concat(t.name).concat(n ? ": " + n : "")
                      );
                    })
                  )
                )
            ))
          : d.updateStatus(p.default.Downloaded);
      }),
      (T.prototype.navigateToFolder = function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        const require = this.getAvailableFileTypesFilter();
        this._navigateDriveToUserFolderOrRoot(e);
        const _interopRequireDefault = this.getAvailableFileTypesFilter();
        this._clearFileFiltersInCaseAvailableFiltersDoesNotMatch(require, _interopRequireDefault),
          module && this.updateFilesList(true, false);
        var GCore = this.SELECTION.indexOf(e);
        GCore > -1 && this.SELECTION.splice(GCore, 1);
        var DataModule_1546 = this.TEMP_SELECTION.indexOf(e);
        DataModule_1546 > -1 && this.TEMP_SELECTION.splice(DataModule_1546, 1),
          this.SELECTION.length < 1 && this.view.resetSelection();
      }),
      (T.prototype._clearFileFiltersInCaseAvailableFiltersDoesNotMatch =
        function (e, t) {
          GCore.GUtil.equals(e, t, true) ||
            this.clearAllFileTypesFromSelectedFilter();
        }),
      (T.prototype._navigateDriveToUserFolderOrRoot = function (e) {
        this._isUserAllowedToOpenTheFolder(e) ||
          (e = this.drive.getRootFolder()),
          this.drive.setCurrentFolder(e);
      }),
      (T.prototype._isUserAllowedToOpenTheFolder = function (e) {
        return true;
      }),
      (T.prototype.addFolder = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        this.view.addFolder(this.updateCloudItemForUserPermission(e), module);
      }),
      (T.prototype.addCustomFolder = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        this.view.addCustomFolder(this.updateCloudItemForUserPermission(e), module);
      }),
      (T.prototype.getSort = function () {
        let exports = this.getCurrentAscend() ? "" : "-";
        return (exports += this.getCurrentSortType()), exports;
      }),
      (T.prototype.hasMoreItemsToLoad = function () {
        return -1 !== this.CURRENT_FILE_LOAD || this.drive.hasMoreItemsToLoad();
      }),
      (T.prototype._sortFilesByMimeType = function (e) {
        if (0 === this.drive.getSelectedFilterForFileTypes().length) return e;
        return (function (e) {
          let module = {};
          e.forEach((e) => {
            let require = e.getMimeType();
            (module[require] = module[require] || []), module[require].push(e);
          });
          let require = [];
          return (
            Object.values(module).forEach((e) => {
              require = require.concat(e);
            }),
            require
          );
        })(e);
      }),
      (T.prototype._displayRecentFiles = async function () {
        let exports;
        if (this.isRootFolder() && !this._showExampleFiles)
          try {
            (exports = await this.drive.fetchRecentFiles()),
              (exports = this._sortFilesByMimeType(exports)),
              exports &&
                (this.view.toggleRecentFiles(!!exports && exports.length > 0),
                exports.forEach((e) => {
                  this.drive.isItemAllowedToBeRendered(e, true) &&
                    this.addFile(e, true),
                    this.drive.itemRequiresLazyUpdate(e).then((t) => {
                      t &&
                        this.drive.getItemLazyUpdate(e).then((e) => {
                          this.addFile(e, true, false, true);
                        });
                    });
                }));
          } catch (e) {
            throw new Error(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GFilesPanel", "text.error-fetching-files")
              )
            );
          } finally {
            this._showRecentFiles = !!exports && exports.length > 0;
          }
        else this._showRecentFiles = false;
      }),
      (T.prototype.buildDepth = async function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        if (!gDesigner.getApplicationManager().isOpenFromCloudEnabled())
          return this.view.toggleLoading(false), Promise.reject();
        var n = this;
        if (this.BUILD_IN_PROGRESS) return Promise.reject(new GRepeatActionError.default());
        async function _interopRequireDefault(e) {
          let DataModule_1546 = true;
          try {
            var CollaborationMergeUtils,
              GFileDownloadUtils = [];
            let _interopRequireDefault = n.getSort();
            var l = n.view.getSearchValue();
            if (l) {
              if (n.hasMoreItemsToLoad()) {
                try {
                  GFileDownloadUtils = await n.drive.fetchFiles(l, n.CURRENT_FILE_LOAD, _interopRequireDefault);
                } catch (e) {
                  throw new Error(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanel",
                        "text.error-fetching-files"
                      )
                    )
                  );
                }
                (CollaborationMergeUtils = (GFileDownloadUtils = n._sortFilesByMimeType(GFileDownloadUtils)).length),
                  n._updateCurrentFileLoad(CollaborationMergeUtils);
              }
              GFileDownloadUtils.forEach((e) => {
                (e._rootPath = "/ ".concat(n._getFullPathNames(e).join(" / "))),
                  n.addFile(e),
                  n.drive.itemRequiresLazyUpdate(e).then((t) => {
                    t &&
                      n.drive.getItemLazyUpdate(e).then((e) => {
                        n.addFile(e, false, false, true);
                      });
                  });
              }),
                e && n._buildFolder(module);
            } else {
              if (n.hasMoreItemsToLoad() && !n._showExampleFiles) {
                try {
                  (await n.drive.getPreviousSelectedFolder()) || (DataModule_1546 = false),
                    (CollaborationMergeUtils = (GFileDownloadUtils = await n.drive.fetchFiles(
                      null,
                      n.CURRENT_FILE_LOAD,
                      _interopRequireDefault
                    )).length),
                    n.isSaveMode() ||
                      n._isDashboard ||
                      (GFileDownloadUtils = GFileDownloadUtils.concat(await n.drive.loadExampleFiles())),
                    (GFileDownloadUtils = n._sortFilesByMimeType(GFileDownloadUtils));
                } catch (e) {
                  if (
                    (console.error(e),
                    !(
                      e instanceof h.default.CloudException &&
                      e.code === h.default.ExceptionCode.InvalidCredentials
                    ))
                  ) {
                    const t =
                      e && e.message
                        ? e.message
                        : GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GFilesPanel",
                              "text.error-fetching-files"
                            )
                          );
                    throw new AppError.default(t);
                  }
                  await n.setCloudDrive(E),
                    (CollaborationMergeUtils = (GFileDownloadUtils = await n.drive.fetchFiles(
                      null,
                      n.CURRENT_FILE_LOAD,
                      _interopRequireDefault
                    )).length),
                    n.isSaveMode() ||
                      n._isDashboard ||
                      (GFileDownloadUtils = GFileDownloadUtils.concat(await n.drive.loadExampleFiles())),
                    (GFileDownloadUtils = n._sortFilesByMimeType(GFileDownloadUtils));
                }
                n._updateCurrentFileLoad(CollaborationMergeUtils);
              }
              if (
                (await n._displayRecentFiles(),
                e &&
                  ((n._showEmptyPanel =
                    !n._showExampleFiles &&
                    !!n.drive.getDefaultEmptyMessage() &&
                    n.isRootFolder() &&
                    !n._showRecentFiles &&
                    0 === CollaborationMergeUtils &&
                    !((await n.drive.hasFolders()) && !n.isRootFolder())),
                  n._showExampleFiles && (GFileDownloadUtils = await n.drive.loadExampleFiles()),
                  0 === GFileDownloadUtils.length && (n._showEmptyPanel = false),
                  n._buildFolder(module)),
                n.view.removeExampleFiles(),
                GFileDownloadUtils.forEach((e) => {
                  (n.drive.isItemAllowedToBeRendered(e) ||
                    n._showExampleFiles) &&
                    n.addFile(e, false, n._showExampleFiles || n._showEmptyPanel),
                    n.drive.itemRequiresLazyUpdate(e).then((t) => {
                      t &&
                        n.drive.getItemLazyUpdate(e).then((e) => {
                          n.addFile(e, false, n._showExampleFiles, true);
                        });
                    });
                }),
                n.view.toggleRecentFiles(n._showRecentFiles),
                n.view.toggleExampleFiles(n._showExampleFiles),
                1 === n.SELECTION.length && e)
              )
                n.view.scrollToSelectedElement(n.SELECTION[0]) ||
                  n.view.resetSelection();
            }
            n.view.updateControls(e);
          } catch (e) {
            return (
              console.error(e),
              GSystemDialog.default.alert(
                ""
                  .concat(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "text.loading-failed")
                    ),
                    ":<br />"
                  )
                  .concat((e && e.message) || e || "")
              ),
              n.view.toggleLoading(false),
              Promise.reject()
            );
          }
          return (
            n.view.toggleLoading(false),
            n.view.shouldFilesBeRequested() &&
              n.hasMoreItemsToLoad() &&
              (await _interopRequireDefault(false)),
            Promise.resolve(DataModule_1546)
          );
        }
        if ((this.view.toggleLoading(true), this.hasMoreItemsToLoad())) {
          this.BUILD_IN_PROGRESS = true;
          try {
            const GCore = await _interopRequireDefault(e);
            if (
              (n.view.toggleFolders(n._hasFolders && !n._showExampleFiles),
              module && GCore)
            ) {
              var DataModule_1546 = await n.drive.getPreviousSelectedFolder();
              DataModule_1546 &&
                !n.drive.isRootFolder(DataModule_1546) &&
                (await n.view
                  .navigateToFolder(DataModule_1546)
                  .catch(() =>
                    n.view.navigateToFolder(n.drive.getRootFolder())
                  ));
            }
          } finally {
            this.BUILD_IN_PROGRESS = false;
          }
        }
        this.view.toggleLoading(false);
      }),
      (T.prototype._buildFolder = function (e) {
        if (!e) return;
        if (this._showExampleFiles) return;
        this.addFolder(this.drive.getRootFolder(), null);
        const module = [this.drive.getRootFolder()];
        if (!this.isSaveMode()) {
          const e = this._getSharedWithMeFolder();
          e && this.addCustomFolder(e, null);
        }
        this._hasFolders = !!module && module.length > 0;
      }),
      (T.prototype._getSharedWithMeFolder = function () {
        return null;
      }),
      (T.prototype._updateCurrentFileLoad = function (e) {
        let module;
        (module =
          e > 0
            ? e < this.getQueryLimit()
              ? -1
              : this.CURRENT_FILE_LOAD + e
            : -1),
          (this.CURRENT_FILE_LOAD = module);
      }),
      (T.prototype.getCloudSettingsById = function (e) {
        return this.CLOUD_SETTINGS.find((t) => {
          let { id: require } = t;
          return require === e;
        });
      }),
      (T.prototype.updateCloudItemForUserPermission = function (e) {
        return gDesigner
          .getApplicationManager()
          .isOnlyFileOpenFromCloudEnabled() &&
          e &&
          e instanceof GCloudStorageItem
          ? (e.setPermissions(Object.values(GCloudStorageItem.Permission), false),
            e.setPermission(GCloudStorageItem.Permission.Open),
            e)
          : e;
      }),
      (T.prototype.getDefaultCloudSettings = function () {
        return this.CLOUD_SETTINGS.find((e) => !!e.default);
      }),
      (T.prototype.getCloudSettings = function () {
        return this.CLOUD_SETTINGS;
      }),
      (T.prototype.getCurrentDriveId = function () {
        return this._currentDriveId;
      }),
      (T.prototype.getCurrentDriveSettings = function () {
        return this.getCloudSettingsById(this.getCurrentDriveId());
      }),
      (T.prototype.setCloudDrive = async function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        if (!e)
          throw new Error(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GFilesPanel",
                "text.error-incorrect-cloud-drive-settings"
              )
            )
          );
        this.view && this.view.toggleLoading(true);
        const require = A.find((t) => t.type === e.type);
        if (require.pro && !gDesigner.isEnabledProFeatures())
          return void gDesigner.handlePROFeatureInterruption();
        const _interopRequireDefault = this.drive,
          CollaborationMergeUtils = this.getCurrentDriveId()
            ? this.getCloudSettingsById(this.getCurrentDriveId())
            : null;
        try {
          switch (e.type) {
            case "googledrive":
              (this.drive = new l.GGoogleDrive(undefined, e.id)),
                await this.drive.install(),
                await this.drive.signIn(),
                (this.view = new DataModule_1546.GFilesPanelViewNative(this.panel, this)),
                this.view.setPermission(
                  DataModule_1546.GFilesPanelViewBase.Permission.CreateFolder,
                  false
                );
              break;
            default:
              (this.drive = l.GCloudDrive.getInstance()),
                (this.view = new DataModule_1546.GFilesPanelViewNative(this.panel, this));
          }
          this._currentDriveId = e.id;
          const n = { activeSettingsId: e.id };
          if (
            (module && gContainer.setProperty(T.DriveAccountsActiveSettingsName, n),
            this.drive.setQueryLimit(this.getQueryLimit()),
            this.drive.setDriveSettings(this._driveSettings),
            this.view.relayout(),
            this.updateFilesList(),
            this.drive.hasUserProfile())
          ) {
            var GFileDownloadUtils = await this.drive.getUser();
            GFileDownloadUtils && this.view.updateUserDetails(GFileDownloadUtils);
          }
          _interopRequireDefault &&
            _interopRequireDefault.removeEventListener(
              h.default.DriveEvent,
              this._handleDriveEvent,
              this
            ),
            this.drive.addEventListener(
              h.default.DriveEvent,
              this._handleDriveEvent,
              this
            );
        } catch (e) {
          var TYPES;
          throw (
            (e && e instanceof AppError.default && (TYPES = e),
            await this._setCorrectCloud(_interopRequireDefault, CollaborationMergeUtils),
            this.view && this.view.toggleLoading(false),
            TYPES ||
              Error(
                e.message ||
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.loading-failed")
                  )
              ))
          );
        }
      }),
      (T.prototype._setCorrectCloud = async function (e, t) {
        e ? await this.setCloudDrive(t) : await this.setCloudDrive(E);
      }),
      (T.prototype._handleDriveEvent = async function (e) {
        if (e.type === h.default.DriveEvent.Type.UserUpdated) {
          if (this.drive.hasUserProfile()) {
            var module = await this.drive.getUser();
            module && this.view.updateUserDetails(module);
          }
        } else if (e.type === h.default.DriveEvent.Type.FolderSwitchRequired) {
          const { folder: module } = e.data;
          this.drive.isRootFolder(module)
            ? (this.isRootFolder() || this.navigateToRoot(false),
              this.updateFilesList(true, true))
            : (this.drive.setCurrentFolder(module),
              this.updateFilesList(true, true),
              this.view.navigateToFolder(module));
        }
      }),
      (T.prototype.getCreateCloudAccountOptions = async function () {
        await this.updateCloudSettings();
        return this.getCloudSettings().some((e) => "googledrive" === e.type)
          ? S.filter((e) => "googledrive" !== e.type)
          : S;
      }),
      (T.prototype.updateCloudSettings = function () {
        var e = this;
        return gContainer.getProperty(e.accountSettingsKey).then(function (t) {
          let require = t ? e._stringToSettings(t) : [];
          return (
            require instanceof Array || (require = []),
            (require = require.filter((e) => {
              var t = A.find((t) => e.type === t.type);
              return (t.pro && gDesigner.isEnabledProFeatures()) || !t.pro;
            })),
            (e.CLOUD_SETTINGS = require.concat([E])),
            true
          );
        });
      }),
      (T.prototype.getDefaultExtensionForSave = function () {
        return this.drive.getDefaultFileFormat().ext.toUpperCase();
      }),
      (T.prototype.updateFilesList = async function () {
        let exports =
            !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
          module =
            !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        const require = Math.random();
        this.CURRENT_UPDATE_OPERATION_ID = require;
        const _interopRequireDefault = this.view.getSearchValue();
        if (
          (await this._waitForBuildToFinish(),
          require === this.CURRENT_UPDATE_OPERATION_ID &&
            _interopRequireDefault === this.view.getSearchValue())
        ) {
          exports && module ? this.view.clearFilesAndFolders() : this.view.clearFiles(),
            (this.CURRENT_FILE_LOAD = 0),
            this.view.toggleEmptyPanel(false);
          try {
            await this.buildDepth(exports, module);
          } catch (e) {
            return void console.warn(e);
          }
          this.view.toggleEmptyPanel(this._showEmptyPanel),
            this.view.toggleExampleFiles(
              this._showExampleFiles || this._showEmptyPanel
            ),
            this.view.toggleRecentFiles(this._showRecentFiles),
            exports && this.view.updateLayout();
        } else exports && this.view.updateLayout();
      }),
      (T.prototype._waitForBuildToFinish = async function () {
        for (; this.BUILD_IN_PROGRESS; ) await (0, CollaborationMergeUtils.sleep)(200);
      }),
      (T.prototype.search = function () {
        this.updateFilesList(false, false);
      }),
      (T.prototype.addToSelection = function (e) {
        if (
          (0 === this.SELECTION.length &&
            this.TEMP_SELECTION.length > 0 &&
            (this._newClipBoard = true),
          this.SELECTION.indexOf(e) < 0)
        ) {
          if (this.SELECTION.length)
            for (var module = 0; module < this.SELECTION.length; module++)
              this.SELECTION[module].getId() === e.getId() &&
                this.SELECTION.splice(module, 1);
          this.SELECTION.push(e);
        }
      }),
      (T.prototype.selectionHasFiles = function () {
        for (var exports = 0, module = this.SELECTION.length; exports < module; exports++)
          if (this.drive.isFileSupported(this.SELECTION[exports])) return true;
        return false;
      }),
      (T.prototype.removeFromSelection = function (e) {
        var t = this.SELECTION.indexOf(e);
        t > -1 && this.SELECTION.splice(t, 1),
          0 === this.SELECTION.length &&
            this._newClipBoard &&
            (this._newClipBoard = false);
      }),
      (T.prototype.resetSelection = function () {
        (this.SELECTION = []), (this._newClipBoard = false);
      }),
      (T.prototype._resetViewSelection = function () {
        this.view.resetSelection();
      }),
      (T.prototype.isMultiSelectionEnabled = function () {
        return true;
      }),
      (T.prototype._addToClipboard = function () {
        this._newClipBoard &&
          (this.resetClipboard(d.GFilesPanelClipboardModes.COPY),
          this.resetClipboard(d.GFilesPanelClipboardModes.CUT),
          (this._newClipBoard = false)),
          (this.TEMP_SELECTION = this.TEMP_SELECTION.concat(this.SELECTION)),
          this.view.addToClipboard(this.MODE);
      }),
      (T.prototype.resetClipboard = function (e) {
        (this.TEMP_SELECTION = []),
          (this._newClipBoard = false),
          this.view.resetClipboard(e || this.MODE);
      }),
      (T.prototype.performCopyPaste = function (e) {
        var t = this;
        this.isClipboardModeCopy(e)
          ? (gDesigner.stats("filespanel_paste-from-copy_cloud"),
            this.view.toggleLoading(true),
            this.SELECTION[0] && this.drive.setCurrentFolder(this.SELECTION[0]),
            this.drive
              .copyPaste(this.TEMP_SELECTION)
              .then(() => {
                const e = this.MODE;
                (this.MODE = d.GFilesPanelClipboardModes.DEFAULT),
                  t.view.resetSelection(),
                  t.resetClipboard(e),
                  t.updateFilesList();
              })
              .catch((e) => {
                let t = GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "text.error-moving")
                );
                e &&
                  e.cloud &&
                  e.message &&
                  e.message.trim() &&
                  (t = e.message),
                  GSystemDialog.default.alert(t),
                  this.view.toggleLoading(false),
                  console.error(e);
              }))
          : (this.logStatsForCurrentFilesSelection(
              "filespanel_copy_cloud",
              "filespanel_copy_cloud-multiple"
            ),
            (this.MODE = d.GFilesPanelClipboardModes.COPY),
            this._addToClipboard());
      }),
      (T.prototype.performCutPaste = function (e) {
        var t = this;
        this.isClipboardModeCut(e)
          ? (gDesigner.stats("filespanel_paste-from-cut_cloud"),
            this.view.toggleLoading(true),
            this.SELECTION[0] && this.drive.setCurrentFolder(this.SELECTION[0]),
            this.drive
              .cutPaste(this.TEMP_SELECTION)
              .then(() => {
                const e = this.MODE;
                (this.MODE = d.GFilesPanelClipboardModes.DEFAULT),
                  t.view.resetSelection(),
                  t.resetClipboard(e),
                  t.updateFilesList();
              })
              .catch((e) => {
                let t = GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "text.error-moving")
                );
                e &&
                  e.cloud &&
                  e.message &&
                  e.message.trim() &&
                  (t = e.message),
                  GSystemDialog.default.alert(t),
                  this.view.toggleLoading(false),
                  console.error(e);
              }))
          : (this.logStatsForCurrentFilesSelection(
              "filespanel_cut_cloud",
              "filespanel_cut_cloud-multiple"
            ),
            (this.MODE = d.GFilesPanelClipboardModes.CUT),
            this._addToClipboard());
      }),
      (T.prototype.performFileMove = function (e, t) {
        this.view.toggleLoading(true),
          gDesigner.stats("filespanel_move"),
          this.drive
            .fileMove(e, t)
            .then(() => {
              this.view.toggleLoading(false),
                this.view.resetSelection(),
                this.updateFilesList();
            })
            .catch((e) => {
              let t = GCore.GLocale.get(
                new GCore.GLocaleKey("GFilesPanel", "text.error-moving")
              );
              e && e.cloud && e.message && e.message.trim() && (t = e.message),
                GSystemDialog.default.alert(t),
                this.view.toggleLoading(false),
                console.error(e);
            });
      }),
      (T.prototype.deleteSelection = function () {
        var e = this;
        return (
          this.view.toggleLoading(true),
          (async function () {
            try {
              for (var module = 0; module < e.SELECTION.length; ++module) {
                var require = e.SELECTION[module];
                await e.drive.deleteItem(require),
                  gDesigner.hasEventListeners(h.default.DriveEvent) &&
                    gDesigner.trigger(
                      new h.default.DriveEvent(
                        null,
                        h.default.DriveEvent.Type.FileDeleted,
                        require
                      )
                    );
              }
            } catch (t) {
              return (
                GSystemDialog.default.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GFilesPanel", "text.error-deleting")
                  )
                ),
                e.view.toggleLoading(false),
                void console.error(t)
              );
            }
            if (
              e.SELECTION[0].getType &&
              e.SELECTION[0].getType() === GCloudStorageItem.Type.Folder
            ) {
              let t = null;
              if (
                (e.SELECTION[0].getParentId() &&
                  e.panel.find(".g-gravit-folder").each((n, _interopRequireDefault) => {
                    const GCore = $(_interopRequireDefault).data("node");
                    GCore.id === e.SELECTION[0].getParentId() && (t = GCore);
                  }),
                !t)
              ) {
                let n = $(e.panel.find(".g-gravit-folder")[0]);
                t = n && n.data("node");
              }
              t && e.drive.setCurrentFolder(t);
            }
            e._triggerFileDeleted(e.SELECTION),
              e.view.toggleLoading(false),
              e.view.resetSelection(),
              e.updateFilesList();
          })()
        );
      }),
      (T.prototype.sort = function () {
        this.updateFilesList();
      }),
      (T.prototype._minimizeWindow = function () {
        this.view.minimizeWindow(),
          gContainer && gContainer.setProperty("GFilesPanel.maximized", false),
          this.view.updateLayout();
      }),
      (T.prototype._maximizeWindow = function (e) {
        this.view.maximizeWindow(),
          gContainer && gContainer.setProperty("GFilesPanel.maximized", true),
          this.hasMoreItemsToLoad() && this.view.shouldFilesBeRequested()
            ? this.buildDepth(e, false).catch((e) => {})
            : this.view.updateLayout();
      }),
      (T.prototype.toCardView = function () {
        this.view.toCardView(),
          gContainer &&
            gContainer.setProperty("GFilesPanel.isFilesListStyle", false);
      }),
      (T.prototype.toListView = function () {
        this.view.toListView(),
          gContainer &&
            gContainer.setProperty("GFilesPanel.isFilesListStyle", true);
      }),
      (T.prototype.getCurrentFolder = function () {
        return this.drive.getCurrentFolder();
      }),
      (T.prototype.isRootFolder = function () {
        return this.drive.isRootFolder();
      }),
      (T.prototype.getFolders = function () {
        return this.drive.getFolders();
      }),
      (T.prototype.isItemSelected = function (e) {
        if (this.SELECTION.length < 1) return false;
        for (let module = 0, require = this.SELECTION.length; module < require; ++module) {
          if (this.SELECTION[module].id === e.id) return true;
        }
        return false;
      }),
      (T.prototype.isItemInClipboard = function (e) {
        if (this.TEMP_SELECTION.length < 1) return false;
        for (let module = 0, require = this.TEMP_SELECTION.length; module < require; ++module) {
          if (this.TEMP_SELECTION[module].id === e.id) return true;
        }
        return false;
      }),
      (T.prototype.isSaveMode = function () {
        return this._isSaveMode;
      }),
      (T.prototype.getSelection = function () {
        return this.SELECTION;
      }),
      (T.prototype.getTempSelection = function () {
        return this.TEMP_SELECTION;
      }),
      (T.prototype.getDocumentToSave = function () {
        return this._documentToSave;
      }),
      (T.prototype.getSortType = function () {
        return this.drive.getSortType();
      }),
      (T.prototype.setSortType = function (e) {
        return this.drive.setSortType(e), this;
      }),
      (T.prototype.getSelectedFilterForFileTypes = function () {
        return this.drive.getSelectedFilterForFileTypes();
      }),
      (T.prototype.addFileTypeToSelectedFilter = function (e) {
        const module = this.drive
          .getAvailableFileTypesFilter()
          .find((t) => t.type === e);
        gDesigner.stats("filespanel_format-filter_on", module.id),
          this.drive.addFileTypeToSelectedFilter(e);
      }),
      (T.prototype.clearAllFileTypesFromSelectedFilter = function () {
        gDesigner.stats("filespanel_format-filter_clear"),
          this.view.clearFileTypeFilterState(),
          this.drive.clearAllFileTypesFromSelectedFilter();
      }),
      (T.prototype.deleteFileTypeFromSelectedFilter = function (e) {
        const module = this.drive
          .getAvailableFileTypesFilter()
          .find((t) => t.type === e);
        gDesigner.stats("filespanel_format-filter_off", module.id),
          this.drive.deleteFileTypeFromSelectedFilter(e);
      }),
      (T.prototype.getAvailableFileTypesFilter = function () {
        return this.drive.getAvailableFileTypesFilter();
      }),
      (T.prototype.getSortDirection = function () {
        return this.drive.getSortDirection();
      }),
      (T.prototype.setSortDirection = function (e) {
        return this.drive.setSortDirection(e), this;
      }),
      (T.prototype.getClipboardMode = function () {
        return this.MODE;
      }),
      (T.prototype.isClipboardModeCopy = function (e) {
        return e
          ? e === d.GFilesPanelClipboardModes.COPY
          : this.MODE === d.GFilesPanelClipboardModes.COPY;
      }),
      (T.prototype.isClipboardModeCut = function (e) {
        return e
          ? e === d.GFilesPanelClipboardModes.CUT
          : this.MODE === d.GFilesPanelClipboardModes.CUT;
      }),
      (T.prototype.setDefaultClipboardMode = function () {
        return (this.MODE = d.GFilesPanelClipboardModes.DEFAULT), this;
      }),
      (T.prototype.getUser = function () {
        return this.USER;
      }),
      (T.prototype.getDefaultFilename = function () {
        return this.DEFAULT_FILENAME;
      }),
      (T.prototype.getPossibleExtensions = function () {
        return this.drive.getSupportedExtensions().map((e) => e.toUpperCase());
      }),
      (T.prototype.getAvailableExtensions = function () {
        for (
          var exports = false, module = null, require = 0;
          require < this.SELECTION.length && !exports;
          ++require
        ) {
          var _interopRequireDefault = this.SELECTION[require],
            GCore = this.drive
              .getSupportedFileFormats()
              .find((e) => _interopRequireDefault.type === e.type);
          GCore && GCore.secondary && (module ? (exports = module.type !== GCore.type) : (module = GCore));
        }
        return module
          ? exports
            ? [TYPES.DEFAULT_TYPE.ext.toUpperCase()]
            : [TYPES.DEFAULT_TYPE.ext.toUpperCase(), module.ext.toUpperCase()]
          : this.SELECTION.length
          ? TYPES.FILE_EXTENSIONS
          : [];
      }),
      (T.prototype.fileRequiresSourceDownload = function (e) {
        return !this.drive.getSupportedFileFormats().some((t) => {
          var n = e instanceof GCloudStorageItem ? e.getMimeType() : e.type;
          const _interopRequireDefault = e.extension || e.ext || null;
          return t.type === n || (_interopRequireDefault && t.ext.toLowerCase() === _interopRequireDefault.toLowerCase());
        });
      }),
      (T.prototype.getUISettings = function () {
        return this._GUISettings;
      }),
      (T.prototype._canDownload = function () {
        return true;
      }),
      (T.prototype._isContextMenuAvailableForFile = function (e) {
        return true;
      }),
      (T.prototype.logStatsForCurrentFilesSelection = function (e, t, n) {
        gDesigner.stats(1 === this.getSelection().length ? e : t, n);
      }),
      (T.prototype.getCurrentAscend = function () {
        return this.drive.getSortDirection();
      }),
      (T.prototype.getCurrentSortType = function () {
        return this.drive.getSortType();
      }),
      (T.prototype.getQueryLimit = () => 20),
      (T.prototype.getSupportedVersions = function () {
        return [];
      }),
      (T.prototype.getFooterSaveDescriptionForFileExtension = function (e) {
        return GCore.GLocale.get(
          new GCore.GLocaleKey("GFilesPanel", "text.info-".concat(e.toLowerCase()))
        );
      }),
      (T.prototype.toString = function () {
        return "[Object GFilesPanel]";
      }),
      (T.prototype._stringToSettings = function (e) {
        return JSON.parse((0, CollaborationMergeUtils.base64StringToString)(e));
      }),
      (T.prototype._settingsToString = function (e) {
        return (0, CollaborationMergeUtils.stringToBase64String)(JSON.stringify(e));
      }),
      (T.prototype.manageOpenFolder = function (e, t, n) {
        this.view.manageOpenFolder(e, t, n);
      }),
      (exports.exports = T);
  }