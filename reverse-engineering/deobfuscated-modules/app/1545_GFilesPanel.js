/**
 * Webpack Module #1545
 * Type: class
 * Name: GFilesPanel
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(19) /* module_19 */,
      require(168) /* module_168 */,
      require(328) /* module_328 */,
      require(180) /* module_180 */,
      require(181) /* module_181 */,
      require(96) /* module_96 */,
      require(30) /* module_30 */,
      require(8) /* module_8 */,
      require(356) /* module_356 */,
      require(20) /* module_20 */,
      require(3) /* module_3 */,
      require(271) /* module_271 */,
      require(34) /* module_34 */,
      require(851) /* module_851 */,
      require(91) /* module_91 */,
      require(218) /* module_218 */,
      require(189) /* module_189 */,
      require(190) /* module_190 */,
      require(191) /* module_191 */,
      require(192) /* module_192 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(13) /* module_13 */,
      require(32) /* module_32 */,
      require(38) /* module_38 */,
      require(169) /* module_169 */,
      require(97) /* module_97 */,
      require(33) /* module_33 */,
      require(26) /* module_26 */;
    var i = require(1) /* module */,
      a = require(1546) /* module_1546 */,
      r = require(40) /* module_40 */,
      s = require(1154) /* module_1154 */,
      l = require(1552) /* module_1552 */,
      c = require(862) /* module_862 */,
      d = require(858) /* module_858 */,
      u = o(require(1556) /* module_1556 */),
      p = o(require(86) /* module_86 */),
      g = o(require(119) /* module_119 */),
      h = o(require(802) /* CloudException */),
      f = o(require(1240) /* module_1240 */),
      m = o(require(445) /* GSaveAsAction */),
      y = o(require(44) /* GSystemDialog */),
      v = o(require(355) /* module_355 */),
      _ = require(10) /* module_10 */,
      b = require(519) /* module_519 */,
      w = o(require(1557) /* module_1557 */);
    const C = require(156) /* module_156 */,
      x = require(78) /* GDocumentEvent */;
    var S = _.CloudIntegration.cloudOptions,
      E = _.CloudIntegration.nativeOption,
      A = [..._.CloudIntegration.cloudOptions, _.CloudIntegration.nativeOption];
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
      i.GObject.inherit(T, i.GObject),
      (T.prototype._showEmptyPanel = false),
      (T.prototype._hasFolders = false),
      (T.prototype._showRecentFiles = false),
      (T.prototype._isSaveMode = false),
      (T.prototype._documentToSave = null),
      (T.prototype._initializeDefaultValues = function (e) {
        var t = this;
        let {
          closeCallback: require = r.fakeFunction,
          documentToSave: o,
          cancelSave: i = r.fakeFunction,
          defaultFilename: a,
          readyStateChange: s,
          showExampleFiles: l,
          GUISettings: c,
          saveMode: u,
          driveSettings: p = null,
          isDashboard: g,
          isCorporateStoragesEnabled: h = true,
        } = e;
        (this._GUISettings = c || new T.GUISettings()),
          (this._driveSettings = p || new f.default()),
          (this.SELECTION = []),
          (this.TEMP_SELECTION = []),
          (this.CURRENT_FILE_LOAD = 0),
          (this.CURRENT_UPDATE_OPERATION_ID = -1),
          (this.MODE = d.GFilesPanelClipboardModes.DEFAULT),
          (this.BUILD_IN_PROGRESS = false),
          (this.DEFAULT_FILENAME = a),
          (this._newClipBoard = false),
          (this._showExampleFiles = l),
          (this._isDashboard = g),
          (this._isCorporateStoragesEnabled = h),
          (this.readyStateChange = s),
          (this.search = (0, r.debounce)(this.search, 200));
        var m = (e) =>
          function () {
            t._removeEventListeners(), e(...arguments);
          };
        (this._onCancelSaveCallback = i && m(i)),
          (this._onCloseCallback = require && m(require)),
          (this._documentToSave = o),
          (this._isSaveMode = u || this._documentToSave);
      }),
      (T.prototype._init = async function (e) {
        let { parentComponent: module, nativeCloud: require, initCallback: o } = e;
        return (
          (this.USER = await gDesigner.getUser()),
          (this.panel = $("<div/>").addClass("g-files-panel").appendTo(module)),
          this.initLayout(require)
            .then(() => {
              o && o();
            })
            .catch((e) => {
              o && o(e);
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
          (this.view = new a.GFilesPanelViewNative(this.panel, this)),
          (this.accountSettingsKey = ""
            .concat(T.DriveAccountsSettingName, ".")
            .concat(this.USER.id));
        var t = this;
        let require = await gContainer.getProperty(T.DriveAccountsActiveSettingsName);
        return (async function (n) {
          let o,
            i = true;
          await t.updateCloudSettings(),
            e
              ? ((i = false), (o = E))
              : (n && (o = t.getCloudSettingsById(n)), o || (o = E));
          try {
            await t.setCloudDrive(o, i);
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
          .then(async function (o) {
            let i,
              a = o ? n._stringToSettings(o) : [];
            a instanceof Array || (a = []);
            for (let t = 0, n = a.length; t < n; t++)
              if (a[t].id === e) {
                i = t;
                break;
              }
            i > -1 && (a[i].name = t),
              gContainer.setProperty(
                n.accountSettingsKey,
                n._settingsToString(a)
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
            let o = n ? t._stringToSettings(n) : [];
            return (
              o instanceof Array || (o = []),
              (e.id = new Date().getTime()),
              (e.deletable = true),
              o.push(e),
              gContainer.setProperty(
                t.accountSettingsKey,
                t._settingsToString(o)
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
            let o,
              i = n ? t._stringToSettings(n) : [];
            i instanceof Array || (i = []);
            for (let t = 0, n = i.length; t < n; t++)
              if (i[t].id === e.id) {
                o = t;
                break;
              }
            o > -1 && i.splice(o, 1),
              i.length > 0
                ? gContainer.setProperty(
                    t.accountSettingsKey,
                    t._settingsToString(i)
                  )
                : gContainer.removeProperty(t.accountSettingsKey);
            try {
              if ("googledrive" === e.type) {
                var a = new l.GGoogleDrive();
                await a.install(), await a.uninstall();
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
        let o = 0;
        const a = (r) => {
          if ((o++, o > b.MAX_FOLDER_DEPTH_FOR_CLOUD))
            return (
              (require = false),
              t.view.toggleLoading(false),
              void y.default.alert(
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "text.error-creating-folder")
                )
              )
            );
          let s = {};
          t.drive.hasTitleValidation() && (s = t.drive.getTitleValidator()),
            new u.default(
              async function (o) {
                if (
                  ((o = o.trim()),
                  t.view.toggleLoading(true),
                  t.drive.supportsSaveCollisionFlow())
                ) {
                  if (
                    (await t.drive.folderExists(
                      o,
                      t.drive.getCurrentFolder()
                    )) &&
                    !(await ((l = o),
                    new Promise((e) => {
                      y.default.confirm(
                        i.GLocale.get(
                          new i.GLocaleKey(
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
                    return a(o);
                  if (t.drive.requiresOverwriteCollisionHandling()) {
                    for (
                      var r = 0, s = o;
                      await t.drive.folderExists(s, t.drive.getCurrentFolder());

                    )
                      s = "".concat(o, " (").concat(++r, ")");
                    o = s;
                  }
                }
                var l;
                (require = true),
                  t.drive
                    .createFolder(o)
                    .then(() => {
                      t.view.toggleLoading(false), e ? e() : t.updateFilesList();
                    })
                    .catch((e) => {
                      if ((t.view.toggleLoading(false), e && e.badName))
                        return (
                          y.default.alert(e.message),
                          setTimeout(() => {
                            a(o);
                          })
                        );
                      (require = false),
                        console.error(e),
                        y.default.alert(
                          i.GLocale.get(
                            new i.GLocaleKey(
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
              r,
              s
            ).open();
        };
        return a(), this;
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
          y.default.confirm(
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "text.delete-confirm")
            ),
            function (t) {
              t && e.deleteSelection();
            }.bind(this),
            null,
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.delete-button")
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
        const o = (e) =>
          new Promise((t) => {
            y.default.confirm(
              i.GLocale.get(
                new i.GLocaleKey(
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
          (e = (0, r.removeAllSuffixWhichLikeExtension)(e, t)).trim())
        ) {
          try {
            if (this.drive.supportsSaveCollisionFlow()) {
              if (
                (await this.drive.fileExists(
                  e,
                  t,
                  this.drive.getCurrentFolder()
                )) &&
                !(await o(e))
              )
                return (
                  this.view.toggleLoading(false),
                  void this.view.focusFileNameInput({ name: e })
                );
              if (this.drive.requiresOverwriteCollisionHandling()) {
                for (
                  var a = 0, s = e;
                  await this.drive.fileExists(
                    s,
                    t,
                    this.drive.getCurrentFolder()
                  );

                )
                  s = "".concat(e, " (").concat(++a, ")");
                e = s;
              }
            }
            await this._triggerNewFileSave(e, t, require);
          } catch (e) {
            if (e && e.badName)
              return (
                this.view.toggleLoading(false), void y.default.alert(e.message)
              );
            this.getDocumentToSave() &&
              gDesigner.trigger(
                new x(x.Type.SynchronismUpdateFailed, this.getDocumentToSave())
              );
            let t = i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "text.error-saving-file")
            );
            e && e.message && e.dontExtend
              ? (t = e.message)
              : e && e.message
              ? (t = "".concat(t, "<br />").concat(e.message))
              : e && (t = "".concat(t, "<br />").concat(e)),
              y.default.alert(t),
              console.error(e);
          }
          this._onCloseCallback(true);
        } else
          y.default.alert(
            i.GLocale.get(
              new i.GLocaleKey(
                "GFilesPanel",
                "text.please-inform-valid-file-name"
              )
            ),
            () => {
              this.view.toggleLoading(false),
                this.view.focusFileNameInput({
                  name: i.GLocale.get(
                    new i.GLocaleKey("GFilesPanel", "text.untitled")
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
            "".concat(m.default.ID, ".").concat(e.toLowerCase()),
            [null, null, null, t, n],
            undefined,
            true
          );
      }),
      (T.prototype.handleDownload = function () {
        return (
          gDesigner.stats("filespanel_download_multiple-files"),
          this.downloadSelectedFiles(c.DEFAULT_TYPE),
          this
        );
      }),
      (T.prototype.handleFileDblClick = function (e) {
        return (
          e.hasPermission(C.Permission.Open) && !this.isSaveMode()
            ? (gDesigner.stats("filespanel_open_cloudfile"), this.openFile(e))
            : e.hasPermission(C.Permission.Rename) &&
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
              y.default.alert(e.message),
              this.updateFilesList();
          }
        else
          y.default.alert(
            i.GLocale.get(
              new i.GLocaleKey(
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
        let o, i;
        if (!t) return n;
        for (; e.parent && ((i = t[e.parent]), i) && ((o = i.folder), o.name); )
          n.unshift(o.name), (e = o);
        return n;
      }),
      (T.prototype.addFile = function (e, t, n, o) {
        this.view.addFile(this.updateCloudItemForUserPermission(e), t, n, o);
      }),
      (T.prototype._convertBlob = function (e, t, n) {
        return Promise.resolve(e);
      }),
      (T.prototype.downloadFile = function (e, t) {
        let require =
            arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
          o = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
        if (o) {
          if (!(t = this.drive.getFileFormat(e)))
            return u(
              Promise.reject(
                i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.file-not-supported")
                )
              )
            );
        } else t || (t = this.drive.getFileFormat(e) || c.DEFAULT_TYPE);
        var { ext: a, type: r, mime: s, version: l } = t;
        r = r || s;
        const d = this._triggerFileDownload(e, require, a, r, l);
        function u(t) {
          return { promise: t, file: e, cancel: () => require.cancel && require.cancel() };
        }
        return u(d);
      }),
      (T.prototype._triggerFileDownload = function (e, t, n, o, i) {
        const a = new AbortController(),
          l = a.signal;
        return (
          (t.progress = t.progress || (() => {})),
          this.drive
            .getRawFile(e, l, t)
            .then(async (l) => {
              let d,
                u = l;
              if (
                ((t.cancel = (0, r.chaining)(t.cancel, () => a.abort())),
                e.type !== o
                  ? ((u = await this._convertBlob(
                      u,
                      { ext: n, type: o, version: i },
                      t
                    ).catch((e) => (d = e || true))),
                    u ||
                      (d = new Error(
                        "Unsupported mime type: #".concat(e.type)
                      )))
                  : o === c.DEFAULT_TYPE.type &&
                    ((u = await this._repackNativeBlob(u, t).catch(
                      (e) => (d = e || true)
                    )),
                    u ||
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
                let i = e.name || l.name;
                i.endsWith(".".concat(n)) &&
                  (i = i.replace(new RegExp(".".concat(n, "$")), "")),
                  (0, s.downloadDataURI)(u, i, n, { type: o });
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
        return new Promise(async (n, o) => {
          const a = new FileReader();
          (a.onload = async function () {
            const e = new Uint8Array(this.result),
              a = i.GNode.deserialize(
                g.default.unzipData(e),
                gDesigner.getWorkspace()
              );
            var s = { cancelled: false };
            (module.cancel = (0, r.chaining)(module.cancel, () => (s.cancelled = true))),
              await (0, r.resolveDocumentImages)(
                a,
                T.IMAGES_WAIT_TIMEOUT,
                s
              ).catch(() => {
                s.cancelled
                  ? o()
                  : o(
                      new Error(
                        i.GLocale.get(
                          new i.GLocaleKey(
                            "GCommonNames",
                            "text.file-no-images-cannot-be-processed"
                          )
                        )
                      )
                    );
              });
            var l = i.GNode.serialize(a, { save: true });
            (null === l || "" === l || l.length < 1 || s.cancelled) && o();
            var c = new Uint8Array(pako.gzip(l, { level: 9 }).buffer);
            c.byteLength > 20 ? n(c) : o();
          }),
            (a.onerror = o),
            a.readAsArrayBuffer(e);
        });
      }),
      (T.prototype.downloadSelectedFiles = async function () {
        let { ext: exports, type: module } =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : c.DEFAULT_TYPE,
          require = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
          o = arguments.length > 2 ? arguments[2] : undefined;
        if (this.SELECTION.length < 1) return;
        const i = await Promise.all(
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
          a = this.SELECTION.filter((e, t) => !!i[t]);
        await this._triggerSelectedFilesDownload(a, exports, module, require, o);
      }),
      (T.prototype._triggerSelectedFilesDownload = async function (
        e,
        t,
        n,
        o,
        a
      ) {
        const r = e.map(() => 0),
          s = e.length,
          l = 100 / s,
          c = {};
        let d = gDesigner.getActiveDocument();
        d || (d = gDesigner.newInfiniteDocument()),
          d.updateStatus(p.default.Downloading, c),
          c.text(
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "text.downloading-files")
            ),
            true
          ),
          c.progressInfo("0/".concat(s));
        let u = 0,
          g = false;
        const h = () => c.progressInfo("".concat(++u, "/").concat(s)),
          f = () => c.progressInfo("".concat(++u, "/").concat(s)),
          m = () => (g = true),
          v = e.map((e, i) => {
            var s = o;
            !s && this.fileRequiresSourceDownload(e) && (s = true);
            var d = {
              ext: ((s && (e.extension || e.ext)) || t).toLowerCase(),
              type: (s && ((e instanceof C && e.getMimeType()) || e.type)) || n,
              version: a,
            };
            return this.downloadFile(
              e,
              d,
              {
                progress(e) {
                  r[i] = e;
                  const t = r.reduce((e, t) => e + Math.min(t / 100, 1) * l, 0);
                  c.progress(t);
                },
                done: h,
                failed: f,
                cancel: m,
              },
              o
            );
          });
        v.length &&
          (this._onCancelSaveCallback(), gDesigner.closeNewDocumentDialog()),
          d.initCancelHandler(() => {
            try {
              v.forEach((e) => e.cancel());
            } finally {
              d.updateStatus(p.default.DownloadCancelled);
            }
          });
        const _ = await Promise.all(
          v.map((e) => {
            let { file: t, promise: n } = e;
            return n.catch((e) =>
              Object.create({ file: t, status: "rejected", error: e })
            );
          })
        );
        if (g) return void d.updateStatus(p.default.DownloadCancelled);
        const b = _.filter((e) => e && "rejected" === e.status);
        b.length
          ? (d.updateStatus(p.default.DownloadFailed),
            y.default.alert(
              $("<div/>")
                .addClass("error-download-multiple-files")
                .append(
                  $("<span/>").text(
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GFilesPanel",
                        "text.error-download-multiple-files"
                      )
                    )
                  )
                )
                .append(
                  $("<ul/>").append(
                    b.map((e) => {
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
        const o = this.getAvailableFileTypesFilter();
        this._clearFileFiltersInCaseAvailableFiltersDoesNotMatch(require, o),
          module && this.updateFilesList(true, false);
        var i = this.SELECTION.indexOf(e);
        i > -1 && this.SELECTION.splice(i, 1);
        var a = this.TEMP_SELECTION.indexOf(e);
        a > -1 && this.TEMP_SELECTION.splice(a, 1),
          this.SELECTION.length < 1 && this.view.resetSelection();
      }),
      (T.prototype._clearFileFiltersInCaseAvailableFiltersDoesNotMatch =
        function (e, t) {
          i.GUtil.equals(e, t, true) ||
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
              i.GLocale.get(
                new i.GLocaleKey("GFilesPanel", "text.error-fetching-files")
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
        if (this.BUILD_IN_PROGRESS) return Promise.reject(new w.default());
        async function o(e) {
          let a = true;
          try {
            var r,
              s = [];
            let o = n.getSort();
            var l = n.view.getSearchValue();
            if (l) {
              if (n.hasMoreItemsToLoad()) {
                try {
                  s = await n.drive.fetchFiles(l, n.CURRENT_FILE_LOAD, o);
                } catch (e) {
                  throw new Error(
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GFilesPanel",
                        "text.error-fetching-files"
                      )
                    )
                  );
                }
                (r = (s = n._sortFilesByMimeType(s)).length),
                  n._updateCurrentFileLoad(r);
              }
              s.forEach((e) => {
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
                  (await n.drive.getPreviousSelectedFolder()) || (a = false),
                    (r = (s = await n.drive.fetchFiles(
                      null,
                      n.CURRENT_FILE_LOAD,
                      o
                    )).length),
                    n.isSaveMode() ||
                      n._isDashboard ||
                      (s = s.concat(await n.drive.loadExampleFiles())),
                    (s = n._sortFilesByMimeType(s));
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
                        : i.GLocale.get(
                            new i.GLocaleKey(
                              "GFilesPanel",
                              "text.error-fetching-files"
                            )
                          );
                    throw new v.default(t);
                  }
                  await n.setCloudDrive(E),
                    (r = (s = await n.drive.fetchFiles(
                      null,
                      n.CURRENT_FILE_LOAD,
                      o
                    )).length),
                    n.isSaveMode() ||
                      n._isDashboard ||
                      (s = s.concat(await n.drive.loadExampleFiles())),
                    (s = n._sortFilesByMimeType(s));
                }
                n._updateCurrentFileLoad(r);
              }
              if (
                (await n._displayRecentFiles(),
                e &&
                  ((n._showEmptyPanel =
                    !n._showExampleFiles &&
                    !!n.drive.getDefaultEmptyMessage() &&
                    n.isRootFolder() &&
                    !n._showRecentFiles &&
                    0 === r &&
                    !((await n.drive.hasFolders()) && !n.isRootFolder())),
                  n._showExampleFiles && (s = await n.drive.loadExampleFiles()),
                  0 === s.length && (n._showEmptyPanel = false),
                  n._buildFolder(module)),
                n.view.removeExampleFiles(),
                s.forEach((e) => {
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
              y.default.alert(
                ""
                  .concat(
                    i.GLocale.get(
                      new i.GLocaleKey("GCommonNames", "text.loading-failed")
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
              (await o(false)),
            Promise.resolve(a)
          );
        }
        if ((this.view.toggleLoading(true), this.hasMoreItemsToLoad())) {
          this.BUILD_IN_PROGRESS = true;
          try {
            const i = await o(e);
            if (
              (n.view.toggleFolders(n._hasFolders && !n._showExampleFiles),
              module && i)
            ) {
              var a = await n.drive.getPreviousSelectedFolder();
              a &&
                !n.drive.isRootFolder(a) &&
                (await n.view
                  .navigateToFolder(a)
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
          e instanceof C
          ? (e.setPermissions(Object.values(C.Permission), false),
            e.setPermission(C.Permission.Open),
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
            i.GLocale.get(
              new i.GLocaleKey(
                "GFilesPanel",
                "text.error-incorrect-cloud-drive-settings"
              )
            )
          );
        this.view && this.view.toggleLoading(true);
        const require = A.find((t) => t.type === e.type);
        if (require.pro && !gDesigner.isEnabledProFeatures())
          return void gDesigner.handlePROFeatureInterruption();
        const o = this.drive,
          r = this.getCurrentDriveId()
            ? this.getCloudSettingsById(this.getCurrentDriveId())
            : null;
        try {
          switch (e.type) {
            case "googledrive":
              (this.drive = new l.GGoogleDrive(undefined, e.id)),
                await this.drive.install(),
                await this.drive.signIn(),
                (this.view = new a.GFilesPanelViewNative(this.panel, this)),
                this.view.setPermission(
                  a.GFilesPanelViewBase.Permission.CreateFolder,
                  false
                );
              break;
            default:
              (this.drive = l.GCloudDrive.getInstance()),
                (this.view = new a.GFilesPanelViewNative(this.panel, this));
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
            var s = await this.drive.getUser();
            s && this.view.updateUserDetails(s);
          }
          o &&
            o.removeEventListener(
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
          var c;
          throw (
            (e && e instanceof v.default && (c = e),
            await this._setCorrectCloud(o, r),
            this.view && this.view.toggleLoading(false),
            c ||
              Error(
                e.message ||
                  i.GLocale.get(
                    new i.GLocaleKey("GCommonNames", "text.loading-failed")
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
        const o = this.view.getSearchValue();
        if (
          (await this._waitForBuildToFinish(),
          require === this.CURRENT_UPDATE_OPERATION_ID &&
            o === this.view.getSearchValue())
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
        for (; this.BUILD_IN_PROGRESS; ) await (0, r.sleep)(200);
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
                let t = i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "text.error-moving")
                );
                e &&
                  e.cloud &&
                  e.message &&
                  e.message.trim() &&
                  (t = e.message),
                  y.default.alert(t),
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
                let t = i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "text.error-moving")
                );
                e &&
                  e.cloud &&
                  e.message &&
                  e.message.trim() &&
                  (t = e.message),
                  y.default.alert(t),
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
              let t = i.GLocale.get(
                new i.GLocaleKey("GFilesPanel", "text.error-moving")
              );
              e && e.cloud && e.message && e.message.trim() && (t = e.message),
                y.default.alert(t),
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
                y.default.alert(
                  i.GLocale.get(
                    new i.GLocaleKey("GFilesPanel", "text.error-deleting")
                  )
                ),
                e.view.toggleLoading(false),
                void console.error(t)
              );
            }
            if (
              e.SELECTION[0].getType &&
              e.SELECTION[0].getType() === C.Type.Folder
            ) {
              let t = null;
              if (
                (e.SELECTION[0].getParentId() &&
                  e.panel.find(".g-gravit-folder").each((n, o) => {
                    const i = $(o).data("node");
                    i.id === e.SELECTION[0].getParentId() && (t = i);
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
          var o = this.SELECTION[require],
            i = this.drive
              .getSupportedFileFormats()
              .find((e) => o.type === e.type);
          i && i.secondary && (module ? (exports = module.type !== i.type) : (module = i));
        }
        return module
          ? exports
            ? [c.DEFAULT_TYPE.ext.toUpperCase()]
            : [c.DEFAULT_TYPE.ext.toUpperCase(), module.ext.toUpperCase()]
          : this.SELECTION.length
          ? c.FILE_EXTENSIONS
          : [];
      }),
      (T.prototype.fileRequiresSourceDownload = function (e) {
        return !this.drive.getSupportedFileFormats().some((t) => {
          var n = e instanceof C ? e.getMimeType() : e.type;
          const o = e.extension || e.ext || null;
          return t.type === n || (o && t.ext.toLowerCase() === o.toLowerCase());
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
        return i.GLocale.get(
          new i.GLocaleKey("GFilesPanel", "text.info-".concat(e.toLowerCase()))
        );
      }),
      (T.prototype.toString = function () {
        return "[Object GFilesPanel]";
      }),
      (T.prototype._stringToSettings = function (e) {
        return JSON.parse((0, r.base64StringToString)(e));
      }),
      (T.prototype._settingsToString = function (e) {
        return (0, r.stringToBase64String)(JSON.stringify(e));
      }),
      (T.prototype.manageOpenFolder = function (e, t, n) {
        this.view.manageOpenFolder(e, t, n);
      }),
      (exports.exports = T);
  }