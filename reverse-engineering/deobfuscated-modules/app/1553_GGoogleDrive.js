/**
 * Webpack Module #1553
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(96) /* polyfill_JSON_stringify */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      a = _interopRequireDefault(require(163) /* GDocument */),
      GDocumentEvent = _interopRequireDefault(require(78) /* GDocumentEvent */),
      s = _interopRequireDefault(require(86) /* module_86 */),
      CloudException = _interopRequireDefault(require(802) /* CloudException */),
      AppError = _interopRequireDefault(require(355) /* AppError */);
    const RawValue = require(1554) /* RawValue */,
      DataModule_1301 = require(1301) /* DataModule_1301 */,
      GGoogleDriveItem = require(556) /* GGoogleDriveItem */,
      GCloudStorageItem = require(156) /* GCloudStorageItem */,
      DataModule_1555 = require(1555) /* DataModule_1555 */,
      GoogleDriveException = require(848) /* GoogleDriveException */,
      m = require(595) /* module_595 */,
      barrel_purchase_urls = require(520) /* barrel_purchase_urls */,
      GCloudStorage = require(119) /* GCloudStorage */,
      { gApi: _, CloudIntegration: b } = require(10) /* AppSettings */,
      { decrypt: w } = require(40) /* CollaborationMergeUtils */,
      GSystemDialog = require(44) /* GSystemDialog */;
    let x;
    function S() {
      let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
        module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
      CloudException.default.call(this, exports), (this._accountId = module);
      const {
        clientId: require = null,
        apiKey: _interopRequireDefault = null,
        appId: a = null,
        accessToken: GDocumentEvent,
        expires: s,
        corporate: AppError = false,
      } = this._settings;
      if (
        ((this._settings = Object.assign(this._settings, {
          clientId: require,
          apiKey: _interopRequireDefault,
          appId: a,
          accessToken: GDocumentEvent,
          expires: s,
          corporate: AppError,
        })),
        this._settings.corporate &&
          (this._securityLevel = barrel_purchase_urls.SecurityLevel.Highest),
        GDocumentEvent &&
          (this._googleDriveClient = this._buildGoogleClient({
            accessToken: GDocumentEvent,
            expires: s,
            corporate: AppError,
            accountId: module,
          })),
        (this._clientId = require),
        (this._apiKey = _interopRequireDefault),
        (this._appId = a),
        (this._folders = {}),
        this.isLowestSecurityLevel())
      ) {
        const e = async (e) =>
          this._googlePickerLoaded
            ? this._openFilePicker(e).catch(() =>
                GSystemDialog.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.loading-failed")
                  )
                )
              )
            : gContainer
                .getGoogleAPI()
                .loadFilePicker()
                .then(() => {
                  this._googlePickerLoaded = true;
                })
                .then(() => this._openFilePicker(e))
                .catch((e) => {
                  console.log("[GGoogleDrive error - Google Drive Picker]", e),
                    GSystemDialog.alert(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GCommonNames", "text.loading-failed")
                      )
                    );
                });
        this.addAction({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GGoogleDrive", "text.add-files")
          ),
          icon: "gravit-icon-add-files",
          execute: e,
        }),
          this.setDefaultEmptyMessage({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey("GGoogleDrive", "text.you-have-not-added")
            ),
            buttons: [
              {
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey("GGoogleDrive", "text.add-additional-files")
                ),
                execute: e,
              },
            ],
          }),
          this.addEventListener(CloudException.default.DriveEvent, (t) => {
            if (t.type === CloudException.default.DriveEvent.Type.Added) {
              const n = $("<div/>")
                .gDialog({
                  className: "g-googledrive-warning-dialog",
                  releaseOnClose: true,
                })
                .append(
                  $("<div></div>")
                    .addClass("g-btn-close")
                    .append($("<span></span>").addClass("gravit-icon-close"))
                    .on("click", () => n.gDialog("close"))
                )
                .append(
                  $("<span/>").text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GGoogleDrive", "text.warning-message")
                    )
                  )
                )
                .append(
                  $("<div/>")
                    .addClass("buttons")
                    .append(
                      $("<button/>")
                        .addClass("g-highlight-button")
                        .text(GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")))
                        .on("click", () => n.gDialog("close"))
                    )
                    .append(
                      $("<button/>")
                        .addClass("g-highlight-button highlighted")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GGoogleDrive",
                              "text.add-additional-files"
                            )
                          )
                        )
                        .on("click", () => {
                          e(t.source), n.gDialog("close");
                        })
                    )
                )
                .gDialog("open", false);
            }
          });
      }
    }
    GCore.GObject.inherit(S, CloudException.default),
      (S.LAST_TEAM_DRIVE_ID_PROP_NAME =
        (b &&
          b.cloudOptions &&
          (b.cloudOptions.find((e) => "googledrive" === e.type) || {})
            .lastTeamDrivePropName) ||
        null),
      (S.prototype._securityLevel = barrel_purchase_urls.SecurityLevel.Lowest),
      (S.prototype._googlePickerLoaded = false),
      (S.prototype._googleDriveClient = null),
      (S.prototype.CURRENT_FOLDER_PROP =
        "designer.filespanel.google-drive.current-folder"),
      (S.getInstance = function () {
        return x || (x = new S()), x;
      }),
      (S.prototype.setCorporateStorage = function (e) {
        if (
          (CloudException.default.prototype.setCorporateStorage.call(this, e),
          S.LAST_TEAM_DRIVE_ID_PROP_NAME)
        ) {
          let t = null;
          e && ({ id: t } = e),
            this.saveLastTeamDriveId(S.LAST_TEAM_DRIVE_ID_PROP_NAME, t);
        }
      }),
      (S.prototype.getPreviousSelectedFolder = function () {
        return CloudException.default.prototype.getPreviousSelectedFolder
          .apply(this, arguments)
          .then((e) => (e ? GCloudStorageItem.from(e) : e));
      }),
      (S.prototype._openFilePicker = function (e) {
        const module = this;
        async function require(e) {
          const require = module.getRootFolder();
          let _interopRequireDefault,
            GCore,
            a = false;
          if ((({ parentId: _interopRequireDefault } = e[0]), _interopRequireDefault !== require.id))
            try {
              GCore = await module._googleDriveClient.getFileDetails(_interopRequireDefault);
            } catch (e) {
              (_interopRequireDefault = require.id), (a = true);
            }
          return GCore || (GCore = require), { folder: GCore, showMessage: a };
        }
        async function _interopRequireDefault(e, _interopRequireDefault) {
          for (let require = 0; require < e.length; require++) {
            let _interopRequireDefault = e[require];
            const { id: GCore, type: a } = _interopRequireDefault;
            "folder" !== a &&
              (await module._googleDriveClient.updateFileDetails(GCore, {
                viewedByMeTime: new Date().toISOString(),
              }));
          }
          const { showMessage: a, folder: GDocumentEvent } = await require(e);
          a &&
            GSystemDialog.messageWithInfo({
              mainMessage: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GGoogleDrive",
                  "text.selected-files-folder-not-added"
                )
              ),
              infoMessage: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GGoogleDrive",
                  "text.selected-files-folder-not-added-additional"
                )
              ),
            }),
            module.trigger(
              new CloudException.default.DriveEvent(
                null,
                CloudException.default.DriveEvent.Type.FolderSwitchRequired,
                { folder: GDocumentEvent }
              )
            ),
            _interopRequireDefault();
        }
        return new Promise((t, a) => {
          if (!this.isSignedIn() || !this._googlePickerLoaded) return a();
          gContainer.getGoogleAPI().openFilePicker((GDocumentEvent) => {
            if ((e.toggleLoading(true), 1 === GDocumentEvent.length)) {
              const s = GDocumentEvent[0],
                { id: CloudException, type: AppError } = s;
              "folder" !== AppError
                ? (require(GDocumentEvent).then((e) => {
                    let { showMessage: t } = e;
                    t &&
                      GSystemDialog.messageWithInfo({
                        mainMessage: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GGoogleDrive",
                            "text.selected-file-folder-not-added"
                          )
                        ),
                        infoMessage: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GGoogleDrive",
                            "text.selected-files-folder-not-added-additional"
                          )
                        ),
                      });
                  }),
                  this.getFile(CloudException)
                    .then((e) => this._convertToCloudItems(e).then((e) => e[0]))
                    .then(
                      (e) =>
                        new Promise((t, n) => {
                          if (this.isFileSupported(e)) return t(e);
                          GSystemDialog.alert(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDocument",
                                "text.unsupported-file-extension"
                              )
                            ),
                            n
                          );
                        })
                    )
                    .then((e) => this.openFile(e))
                    .then(() => e.close())
                    .then(t)
                    .catch(a)
                    .finally(() => e.toggleLoading(false)))
                : _interopRequireDefault(GDocumentEvent, t);
            } else _interopRequireDefault(GDocumentEvent, t);
          }, a);
        });
      }),
      (S.prototype.hasUserProfile = function () {
        return true;
      }),
      (S.prototype.isRootFolder = function (e) {
        e = undefined !== e ? e : this.getCurrentFolder();
        var t = this.getRootFolder();
        return "string" == typeof e
          ? e === t.id
          : !e || (e && !e.id) || e === t || e.id === t.id;
      }),
      (S.prototype.getRootFolder = function () {
        return this.getCorporateStorage()
          ? this.getCorporateStorage()
          : GCloudStorageItem.from({
              id: "root",
              name: GCore.GLocale.get(
                new GCore.GLocaleKey("GFilesPanel", "action.my-cloud")
              ),
            });
      }),
      (S.prototype.uninstall = async function () {
        return new Promise(
          async (e) => (
            CloudException.default.prototype.uninstall.call(this),
            this.isLowestSecurityLevel() &&
              this.isSignedIn() &&
              (await this.signOut()),
            e()
          )
        );
      }),
      (S.prototype.getUser = async function () {
        return new Promise(async (e, t) => {
          try {
            var require;
            if (this._settings.corporate) require = await gDesigner.getUser();
            else {
              if (!gContainer.getGoogleAPI().isLoaded())
                return t("Google Drive Client not loaded!");
              require = await gContainer.getGoogleAPI().getBasicProfile();
            }
            return e(require);
          } catch (e) {
            t(e);
          }
        });
      }),
      (S.prototype.install = function (e) {
        return this.isInstalled()
          ? Promise.resolve()
          : this.isLowestSecurityLevel()
          ? gContainer
              .getGoogleAPI()
              .install(e)
              .then(() => this._loadClient())
              .then(() => (this._driveInstalled = true))
          : ((this._driveInstalled = true), Promise.resolve());
      }),
      (S.prototype.isLowestSecurityLevel = function () {
        return this._securityLevel === barrel_purchase_urls.SecurityLevel.Lowest;
      }),
      (S.prototype._loadClient = function () {
        return new Promise(async (e, t) => {
          const require = this.isLowestSecurityLevel()
            ? "https://www.googleapis.com/auth/drive.file         https://www.googleapis.com/auth/userinfo.email"
            : "https://www.googleapis.com/auth/drive";
          var _interopRequireDefault, a, GDocumentEvent;
          try {
            if (this._apiKey && this._clientId)
              (a = this._clientId), (_interopRequireDefault = this._apiKey), (GDocumentEvent = this._appId);
            else {
              var s =
                await _.cloudServices.googleDrive.getClientConfiguration();
              const {
                GOOGLE_DRIVE_PUBLIC_CLIENT_ID: e,
                GOOGLE_DRIVE_PUBLIC_API_KEY: t,
                GOOGLE_DRIVE_APP_ID: require,
              } = JSON.parse(w(s));
              (a = e),
                (_interopRequireDefault = t),
                (GDocumentEvent = require),
                (this._apiKey = _interopRequireDefault),
                (this._clientId = a),
                (this._appId = GDocumentEvent);
            }
          } catch (e) {
            return t(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.loading-failed")
              )
            );
          }
          gContainer
            .getGoogleAPI()
            .init({
              appId: GDocumentEvent,
              apiKey: _interopRequireDefault,
              clientId: a,
              discoveryDocs: [
                "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
              ],
              scope: require,
            })
            .then(
              () => {
                e();
              },
              (e) => {
                t(e);
              }
            );
        });
      }),
      (S.prototype.isSignedIn = async function () {
        return (
          gContainer.getGoogleAPI().isLoaded() ||
            console.error("Google Drive Client not loaded!"),
          gContainer.getGoogleAPI().isSignedIn()
        );
      }),
      (S.prototype.signIn = function () {
        return new Promise(async (e, t) =>
          gContainer.getGoogleAPI().isLoaded()
            ? (await this.isSignedIn())
              ? ((this._googleDriveClient = await this._buildGoogleClient()),
                e())
              : gContainer
                  .getGoogleAPI()
                  .signIn()
                  .then(async () => {
                    (this._googleDriveClient = await this._buildGoogleClient()),
                      e();
                  })
                  .catch((e) =>
                    e && "popup_blocked_by_browser" === e.error
                      ? t(
                          new AppError.default(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GExternalStorage",
                                "text.error-window-blocked-alternative"
                              )
                            )
                          )
                        )
                      : t(e)
                  )
            : t("Google Drive Client not loaded!")
        );
      }),
      (S.prototype.signOut = function () {
        if (!gContainer.getGoogleAPI().isLoaded())
          throw Error("Google Drive Client not loaded!");
        return gContainer.getGoogleAPI().signOut();
      }),
      (S.prototype.fetchFolders = async function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : -1;
        var _interopRequireDefault = t ? this._getParentReference(t) : this._getParentContext();
        return this._search(
          DataModule_1301.from({
            type: GCloudStorageItem.Type.Folder,
            limit: require > 0 ? require : 1e3,
            orderBy: S.SearchEngine.SortMap[e],
            parent: _interopRequireDefault,
          })
        ).then(async (e) => {
          this._currentPage = e;
          let require = e.getItems();
          return (
            this.isRootFolder(t) &&
              !this.PREVIOUS_SELECTED_FOLDER_PATH.length &&
              ((this._rootFolderID =
                require && require.length && "root" === require[0].getParentId()
                  ? require[0].parents[0]
                  : null),
              await this.generatePreviousSelectedFolderPath()),
            require
          );
        });
      }),
      (S.prototype._buildSearchQuery = function (e) {
        const module = new RawValue();
        var n = e.hasValue("type") && e.type;
        const _interopRequireDefault = n === GCloudStorageItem.Type.Folder,
          GCore = n === GCloudStorageItem.Type.File;
        return (
          _interopRequireDefault
            ? module.add("mimeType", "=", GoogleDriveException.MimeType.Folder)
            : GCore &&
              (module.group((e) => {
                this.getSupportedExtensions().forEach((t) =>
                  e.or("fileExtension", "=", t)
                ),
                  this.getSupportedMIMETypes().forEach((t) =>
                    e.or("mimeType", "=", t)
                  );
              }),
              this.shouldOnlyListOwnedFiles() && module.in("me", "owners")),
          e.hasValue("parent")
            ? "*" !== e.parent && module.in(e.parent, "parents")
            : module.in("root", "parents"),
          e.hasValue("name") && module.add("name", "contains", e.name),
          e.hasValue("exactname") && module.add("name", "=", e.exactname),
          e.hasValue("fileExtension") &&
            module.add("fileExtension", "=", e.fileExtension.toLowerCase()),
          module.add("trashed", "=", new RawValue.RawValue(false)),
          module.build()
        );
      }),
      (S.prototype._getParentContext = function () {
        return (
          this._getParentReference(this.getCurrentFolder()) ||
          this._getParentReference(this.getCorporateStorage())
        );
      }),
      (S.prototype.getFolders = function () {
        var e = {},
          t = this._getParentContext();
        return (
          t && (e[t] = { folder: { name: null, id: null, parent: null } }), e
        );
      }),
      (S.prototype._search = async function (e, t) {
        var n =
          (e.hasKey("limit") && e.getAsInt("limit")) || this.getQueryLimit();
        t = t || new DataModule_1555({ query: e });
        return new Promise(async (_interopRequireDefault, GCore) => {
          try {
            var a = {
                q: this._buildSearchQuery(e),
                pageSize: n - t.getSize(),
                fields:
                  "nextPageToken, files( id, driveId, parents, name, fileExtension, fullFileExtension, hasThumbnail, thumbnailLink, size, contentHints(thumbnail(image, mimeType)), description, mimeType, version, createdTime, modifiedTime, webContentLink, capabilities(canDownload, canEdit) )",
                pageToken:
                  (e.hasValue("nextPageToken") && e.nextPageToken) || "",
              },
              GDocumentEvent = this.getCorporateStorage();
            GDocumentEvent &&
              (a = Object.assign(a, {
                includeItemsFromAllDrives: true,
                corpora: "drive",
                supportsAllDrives: true,
                driveId: GDocumentEvent.id,
              })),
              e.hasValue("orderBy") && (a.orderBy = e.orderBy);
            const GCore = await this._googleDriveClient.searchFiles(a);
            var { files: s, nextPageToken: CloudException } = GCore;
            if (!s.length) return _interopRequireDefault(t);
            s =
              t.getSize() + s.length > n
                ? s.slice(0, Math.max(n - t.getSize(), 0))
                : s;
            var AppError = await this._convertToCloudItems(s);
            return (
              e.hasValue("parent") &&
                AppError.forEach((t) => {
                  t.parent = e.parent;
                }),
              t.update({ nextPageToken: CloudException, items: AppError }),
              t.getSize() < n && CloudException && (t = await this._search(e, t)),
              _interopRequireDefault(t)
            );
          } catch (e) {
            GCore();
          }
        });
      }),
      (S.prototype._convertToCloudItems = async function (e) {
        return (e = e instanceof Array ? e : [e]).map((e) =>
          GGoogleDriveItem.convertToCloudItem(e)
        );
      }),
      (S.prototype.navigateToParentFolder = function () {
        var e = this._currentFolder.parent ? this._currentFolder.parent : null;
        return this.setCurrentFolder(this._getParentReference(e)), this;
      }),
      (S.prototype._getParentReference = function (e) {
        return e && "object" == typeof e ? e._id || e.id : e;
      }),
      (S.prototype.getFile = function (e) {
        return this._googleDriveClient.getFileDetails(
          e,
          this.getCorporateStorage() ? { supportsAllDrives: true } : {}
        );
      }),
      (S.prototype.getFolder = async function (e) {
        const module = await this._googleDriveClient.getFileDetails(
          e.id || e,
          this.getCorporateStorage() ? { supportsAllDrives: true } : {}
        );
        return this._convertToCloudItems(module).then((e) => e[0]);
      }),
      (S.prototype.supportsSaveCollisionFlow = function () {
        return true;
      }),
      (S.prototype.fileExists = async function (e, t, n) {
        var _interopRequireDefault = n ? this._getParentReference(n) : this._getParentContext();
        return this._search(
          DataModule_1301.from({
            type: GCloudStorageItem.Type.File,
            parent: _interopRequireDefault,
            exactname: "".concat(e, ".").concat(t),
            fileExtension: t,
          })
        ).then((e) => !!e.getItems().length);
      }),
      (S.prototype.folderExists = function (e, t) {
        var n = t ? this._getParentReference(t) : this._getParentContext();
        return this._search(
          DataModule_1301.from({ type: GCloudStorageItem.Type.Folder, parent: n, exactname: e })
        ).then((e) => !!e.getItems().length);
      }),
      (S.prototype.getRawFile = function (e, t, n) {
        return this._googleDriveClient.getFile(
          e.id,
          this.getCorporateStorage() ? { supportsAllDrives: true } : {},
          t,
          n && n.progress
        );
      }),
      (S.prototype._createStorageItem = async function (e, t, n) {
        const _interopRequireDefault = t && (await GCloudStorage.createUint8ArrayFromBlob(t));
        return new GGoogleDriveItem.Item(gDesigner.getDefaultStorage(), e, _interopRequireDefault, n);
      }),
      (S.prototype.openFile = async function (e, t) {
        return new Promise(
          async function (n, _interopRequireDefault) {
            try {
              const _interopRequireDefault = Object.assign(e, {
                settings: this._googleDriveClient.getTokenIssuerSettings(),
              });
              var GCore = await this._createStorageItem(
                _interopRequireDefault,
                await this.getRawFile(e)
              );
              GCore.setCloudClient(this._googleDriveClient),
                gDesigner.openDocument(GCore, t),
                await this._googleDriveClient.updateFileDetails(
                  GCore.getUniqueId(),
                  { viewedByMeTime: new Date().toISOString() },
                  { supportsAllDrives: true }
                ),
                n();
            } catch (e) {
              _interopRequireDefault(e);
            }
          }.bind(this)
        );
      }),
      (S.prototype.saveNewFile = function (e, t) {
        let require =
            arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : "",
          _interopRequireDefault =
            arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {},
          CloudException = arguments.length > 4 ? arguments[4] : undefined;
        return new Promise(async (AppError, RawValue) => {
          const DataModule_1301 = function (e, t, n) {
            console.log(e);
            const _interopRequireDefault = gDesigner.getHeader(),
              a = _interopRequireDefault.getWindowTab(gDesigner.getWindows().getWindow(t)),
              GDocumentEvent = _interopRequireDefault.getWindowTab(gDesigner.getWindows().getWindow(n));
            a && GDocumentEvent
              ? (n.updateStatus(s.default.SaveFailed),
                gDesigner.removeDocument(n, function () {
                  t.updateStatus(s.default.SaveFailed);
                }))
              : a
              ? t.updateStatus(s.default.SaveFailed)
              : n.updateStatus(s.default.SaveFailed),
              RawValue(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.error-saving-file")
                )
              );
          };
          var GGoogleDriveItem = new a.default();
          try {
            require = require || this.getDefaultFileFormat().ext.toUpperCase();
            var GCloudStorageItem = e.getScene();
            GCloudStorageItem.getActivePage().getGeometryBBox() ||
              RawValue(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    "text.error-emtpy-infinite-canvas"
                  )
                )
              ),
              (_interopRequireDefault = e.updateSaveOptionsLastModifiedDate(_interopRequireDefault));
            const a = (
                this.findFileFormatByExtension(require) || this.getDefaultFileFormat()
              ).mime,
              GoogleDriveException = {
                name: t,
                mimeType: a,
                fileExtension: require,
                parent: this._getParentContext(),
                settings: this._settings,
              },
              m = a !== this.getDefaultFileFormat().mime,
              barrel_purchase_urls = this.getCorporateStorage();
            barrel_purchase_urls && (GoogleDriveException.driveId = barrel_purchase_urls.id);
            var DataModule_1555 = await this._createStorageItem(GoogleDriveException);
            DataModule_1555.setCloudClient(this._googleDriveClient),
              gDesigner.addDocument(GGoogleDriveItem),
              GGoogleDriveItem.setSynchronizing(true),
              GGoogleDriveItem.setTitle(t),
              GGoogleDriveItem.updateStatus(s.default.Saving);
            const GCloudStorage = GCore.GNode.store(GCloudStorageItem, _interopRequireDefault);
            GCloudStorage.cfs = false;
            const _ = JSON.stringify(GCloudStorage);
            return GGoogleDriveItem
              .deserializeData(_)
              .then(async () => {
                e.getFileFormatVersion() &&
                  GGoogleDriveItem.setFileFormatVersion(e.getFileFormatVersion()),
                  CloudException && CloudException(s.default.Loaded),
                  (_interopRequireDefault = GGoogleDriveItem.updateSaveOptionsLastModifiedDate(_interopRequireDefault)),
                  DataModule_1555.write(
                    GGoogleDriveItem,
                    async () => {
                      e &&
                        e.getEditor() &&
                        gDesigner.removeDocument(e, null, true),
                        GGoogleDriveItem.setStorageItem(DataModule_1555),
                        await GGoogleDriveItem.saveAnnotations(m, true),
                        GGoogleDriveItem.setSynchronizing(false),
                        CloudException && CloudException(s.default.Saved),
                        gDesigner.hasEventListeners(GDocumentEvent.default) &&
                          (gDesigner.trigger(
                            new GDocumentEvent.default(GDocumentEvent.default.Type.Modified, GGoogleDriveItem)
                          ),
                          gDesigner.trigger(
                            new GDocumentEvent.default(GDocumentEvent.default.Type.Activated, GGoogleDriveItem)
                          )),
                        gDesigner.addToRecentFiles(DataModule_1555),
                        GGoogleDriveItem.updateStatus(s.default.Saved),
                        AppError();
                    },
                    () => {
                      console.error(">>>saveNewFile write error", arguments),
                        GGoogleDriveItem.setSynchronizing(false),
                        CloudException && CloudException(s.default.SaveFailed),
                        RawValue();
                    },
                    null,
                    _interopRequireDefault
                  );
              })
              .catch((t) => DataModule_1301(t, GGoogleDriveItem, e));
          } catch (t) {
            DataModule_1301(t, GGoogleDriveItem, e);
          }
        });
      }),
      (S.prototype.fetchRecentFiles = function () {
        return this._fetchFiles(
          null,
          0,
          "-viewed",
          "*",
          this._currentRecentFilesPage
        ).then((e) => ((this._currentRecentFilesPage = e), e.getItems()));
      }),
      (S.prototype.fetchFiles = async function (e, t, n) {
        var _interopRequireDefault = this.getCurrentFolder(),
          GCore = _interopRequireDefault && this._getParentReference(_interopRequireDefault);
        this._currentFilesPage &&
          ((this._currentFilesPage.__parent === GCore &&
            this._currentFilesPage.__search === e &&
            this._currentFilesPage.__sort === n) ||
            (this._currentFilesPage = null));
        return await this._fetchFiles(e, t, n, _interopRequireDefault, this._currentFilesPage).then(
          (t) => (
            (this._currentFilesPage = t),
            (this._currentFilesPage.__search = e),
            (this._currentFilesPage.__sort = n),
            (this._currentFilesPage.__parent = GCore),
            t.getItems()
          )
        );
      }),
      (S.prototype._fetchFiles = async function (e, t, n) {
        let _interopRequireDefault =
            arguments.length > 3 && undefined !== arguments[3]
              ? arguments[3]
              : null,
          GCore = arguments.length > 4 ? arguments[4] : undefined;
        var a = _interopRequireDefault ? this._getParentReference(_interopRequireDefault) : this._getParentContext();
        if (t && GCore && !GCore.nextPageToken) {
          var GDocumentEvent = DataModule_1555.from(GCore);
          return (GDocumentEvent.items = []), GDocumentEvent;
        }
        return this._search(
          DataModule_1301.from({
            type: GCloudStorageItem.Type.File,
            limit: this.getQueryLimit(),
            orderBy: S.SearchEngine.SortMap[n],
            nextPageToken: t ? GCore && GCore.nextPageToken : "",
            parent: a,
            name: e,
          })
        );
      }),
      (S.prototype.isItemAllowedToBeRendered = function (e) {
        return e.hasPermission(GCloudStorageItem.Permission.Download);
      }),
      (S.prototype.isFileAllowedToBeOpened = function (e) {
        return e.hasPermission(GCloudStorageItem.Permission.Download);
      }),
      (S.prototype.supportsCorporateStorage = function () {
        return true;
      }),
      (S.prototype.getCorporateStorages = function () {
        let exports =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : new DataModule_1301(),
          module = arguments.length > 1 ? arguments[1] : undefined;
        if (this.shouldOnlyListOwnedFiles()) return Promise.resolve([]);
        var n =
          (exports.hasKey("limit") && exports.getAsInt("limit")) || this.getQueryLimit();
        return (
          (module = module || new DataModule_1555({ query: exports })),
          new Promise(async (_interopRequireDefault, GCore) => {
            try {
              const GCore = {
                  pageSize: n - module.getSize(),
                  fields: "*",
                  nextPageToken: exports.hasValue("nextPageToken") && exports.nextPageToken,
                },
                CloudException = await this._googleDriveClient.searchTeamDrives(GCore);
              var { drives: a, nextPageToken: GDocumentEvent } = CloudException;
              if (!a.length) return _interopRequireDefault(module);
              a =
                module.getSize() + a.length > n
                  ? a.slice(0, Math.max(n - module.getSize(), 0))
                  : a;
              var s = await this._convertToCloudItems(a);
              return (
                module.update({ nextPageToken: GDocumentEvent, items: s }),
                module.getSize() < n && GDocumentEvent && (module = await this.getStorages(exports, module)),
                _interopRequireDefault(module.getItems())
              );
            } catch (e) {
              GCore();
            }
          })
        );
      }),
      (S.prototype._buildGoogleClient = async function (e) {
        if (!e) {
          if (!gContainer.getGoogleAPI().isLoaded())
            throw Error("Google Drive Client not loaded!");
          e = await gContainer.getGoogleAPI().getTokenConfiguration({
            corporate: false,
            accountId: this._accountId,
          });
        }
        return new GoogleDriveException(new m(e));
      }),
      (S.prototype.getSupportedFileFormats = function () {
        return GGoogleDriveItem.getSupportedFileFormats();
      }),
      (S.prototype.generatePreviousSelectedFolderPath = async function () {
        const exports = this.getCurrentFolder();
        if (this.isRootFolder(exports))
          return (
            (this.PREVIOUS_SELECTED_FOLDER_PATH = []),
            this.PREVIOUS_SELECTED_FOLDER_PATH
          );
        this.PREVIOUS_SELECTED_FOLDER_PATH.push(exports.id);
        let module = exports.getParentId()
          ? exports.getParentId()
          : exports.parents
          ? exports.parents[0]
          : null;
        if (module && module !== this._rootFolderID) {
          let e = await this.getFolder(module).catch(() => null);
          for (; e; )
            this.PREVIOUS_SELECTED_FOLDER_PATH.push(e.id),
              (module = e.getParentId()
                ? e.getParentId()
                : e.parents
                ? e.parents[0]
                : null),
              (e =
                module && module !== this._rootFolderID
                  ? await this.getFolder(module).catch(() => null)
                  : null);
        }
        return this.PREVIOUS_SELECTED_FOLDER_PATH;
      }),
      (S.SearchEngine = {
        SortMap: {
          "-updated": ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.ModifiedTime, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Descending),
          updated: ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.ModifiedTime, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Ascending),
          "-created": ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.CreatedTime, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Descending),
          created: ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.CreatedTime, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Ascending),
          "-name": ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.Name, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Descending),
          name: ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.Name, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Ascending),
          "-viewed": ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.ViewedByMeTime, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Descending),
          viewed: ""
            .concat(GoogleDriveException.SearchEngine.OrderBy.ViewedByMeTime, " ")
            .concat(GoogleDriveException.SearchEngine.Sorts.Ascending),
        },
      }),
      (exports.exports = S);
  }