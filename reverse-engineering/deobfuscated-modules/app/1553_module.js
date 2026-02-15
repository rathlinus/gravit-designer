/**
 * Webpack Module #1553
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(96) /* polyfill_JSON_stringify */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */;
    var i = require(1) /* module */,
      a = o(require(163) /* module_163 */),
      r = o(require(78) /* GDocumentEvent */),
      s = o(require(86) /* module_86 */),
      l = o(require(802) /* CloudException */),
      c = o(require(355) /* module_355 */);
    const d = require(1554) /* RawValue */,
      u = require(1301) /* module_1301 */,
      p = require(556) /* Item */,
      g = require(156) /* module_156 */,
      h = require(1555) /* module_1555 */,
      f = require(848) /* GoogleDriveException */,
      m = require(595) /* module_595 */,
      y = require(520) /* barrel_purchase_urls */,
      v = require(119) /* module_119 */,
      { gApi: _, CloudIntegration: b } = require(10) /* AppSettings */,
      { decrypt: w } = require(40) /* CollaborationMergeUtils */,
      C = require(44) /* GSystemDialog */;
    let x;
    function S() {
      let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
        module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
      l.default.call(this, exports), (this._accountId = module);
      const {
        clientId: require = null,
        apiKey: o = null,
        appId: a = null,
        accessToken: r,
        expires: s,
        corporate: c = false,
      } = this._settings;
      if (
        ((this._settings = Object.assign(this._settings, {
          clientId: require,
          apiKey: o,
          appId: a,
          accessToken: r,
          expires: s,
          corporate: c,
        })),
        this._settings.corporate &&
          (this._securityLevel = y.SecurityLevel.Highest),
        r &&
          (this._googleDriveClient = this._buildGoogleClient({
            accessToken: r,
            expires: s,
            corporate: c,
            accountId: module,
          })),
        (this._clientId = require),
        (this._apiKey = o),
        (this._appId = a),
        (this._folders = {}),
        this.isLowestSecurityLevel())
      ) {
        const e = async (e) =>
          this._googlePickerLoaded
            ? this._openFilePicker(e).catch(() =>
                C.alert(
                  i.GLocale.get(
                    new i.GLocaleKey("GCommonNames", "text.loading-failed")
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
                    C.alert(
                      i.GLocale.get(
                        new i.GLocaleKey("GCommonNames", "text.loading-failed")
                      )
                    );
                });
        this.addAction({
          title: i.GLocale.get(
            new i.GLocaleKey("GGoogleDrive", "text.add-files")
          ),
          icon: "gravit-icon-add-files",
          execute: e,
        }),
          this.setDefaultEmptyMessage({
            title: i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "text.you-have-not-added")
            ),
            buttons: [
              {
                title: i.GLocale.get(
                  new i.GLocaleKey("GGoogleDrive", "text.add-additional-files")
                ),
                execute: e,
              },
            ],
          }),
          this.addEventListener(l.default.DriveEvent, (t) => {
            if (t.type === l.default.DriveEvent.Type.Added) {
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
                    i.GLocale.get(
                      new i.GLocaleKey("GGoogleDrive", "text.warning-message")
                    )
                  )
                )
                .append(
                  $("<div/>")
                    .addClass("buttons")
                    .append(
                      $("<button/>")
                        .addClass("g-highlight-button")
                        .text(i.GLocale.get(new i.GLocaleKey("GLocale", "ok")))
                        .on("click", () => n.gDialog("close"))
                    )
                    .append(
                      $("<button/>")
                        .addClass("g-highlight-button highlighted")
                        .text(
                          i.GLocale.get(
                            new i.GLocaleKey(
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
    i.GObject.inherit(S, l.default),
      (S.LAST_TEAM_DRIVE_ID_PROP_NAME =
        (b &&
          b.cloudOptions &&
          (b.cloudOptions.find((e) => "googledrive" === e.type) || {})
            .lastTeamDrivePropName) ||
        null),
      (S.prototype._securityLevel = y.SecurityLevel.Lowest),
      (S.prototype._googlePickerLoaded = false),
      (S.prototype._googleDriveClient = null),
      (S.prototype.CURRENT_FOLDER_PROP =
        "designer.filespanel.google-drive.current-folder"),
      (S.getInstance = function () {
        return x || (x = new S()), x;
      }),
      (S.prototype.setCorporateStorage = function (e) {
        if (
          (l.default.prototype.setCorporateStorage.call(this, e),
          S.LAST_TEAM_DRIVE_ID_PROP_NAME)
        ) {
          let t = null;
          e && ({ id: t } = e),
            this.saveLastTeamDriveId(S.LAST_TEAM_DRIVE_ID_PROP_NAME, t);
        }
      }),
      (S.prototype.getPreviousSelectedFolder = function () {
        return l.default.prototype.getPreviousSelectedFolder
          .apply(this, arguments)
          .then((e) => (e ? g.from(e) : e));
      }),
      (S.prototype._openFilePicker = function (e) {
        const module = this;
        async function require(e) {
          const require = module.getRootFolder();
          let o,
            i,
            a = false;
          if ((({ parentId: o } = e[0]), o !== require.id))
            try {
              i = await module._googleDriveClient.getFileDetails(o);
            } catch (e) {
              (o = require.id), (a = true);
            }
          return i || (i = require), { folder: i, showMessage: a };
        }
        async function o(e, o) {
          for (let require = 0; require < e.length; require++) {
            let o = e[require];
            const { id: i, type: a } = o;
            "folder" !== a &&
              (await module._googleDriveClient.updateFileDetails(i, {
                viewedByMeTime: new Date().toISOString(),
              }));
          }
          const { showMessage: a, folder: r } = await require(e);
          a &&
            C.messageWithInfo({
              mainMessage: i.GLocale.get(
                new i.GLocaleKey(
                  "GGoogleDrive",
                  "text.selected-files-folder-not-added"
                )
              ),
              infoMessage: i.GLocale.get(
                new i.GLocaleKey(
                  "GGoogleDrive",
                  "text.selected-files-folder-not-added-additional"
                )
              ),
            }),
            module.trigger(
              new l.default.DriveEvent(
                null,
                l.default.DriveEvent.Type.FolderSwitchRequired,
                { folder: r }
              )
            ),
            o();
        }
        return new Promise((t, a) => {
          if (!this.isSignedIn() || !this._googlePickerLoaded) return a();
          gContainer.getGoogleAPI().openFilePicker((r) => {
            if ((e.toggleLoading(true), 1 === r.length)) {
              const s = r[0],
                { id: l, type: c } = s;
              "folder" !== c
                ? (require(r).then((e) => {
                    let { showMessage: t } = e;
                    t &&
                      C.messageWithInfo({
                        mainMessage: i.GLocale.get(
                          new i.GLocaleKey(
                            "GGoogleDrive",
                            "text.selected-file-folder-not-added"
                          )
                        ),
                        infoMessage: i.GLocale.get(
                          new i.GLocaleKey(
                            "GGoogleDrive",
                            "text.selected-files-folder-not-added-additional"
                          )
                        ),
                      });
                  }),
                  this.getFile(l)
                    .then((e) => this._convertToCloudItems(e).then((e) => e[0]))
                    .then(
                      (e) =>
                        new Promise((t, n) => {
                          if (this.isFileSupported(e)) return t(e);
                          C.alert(
                            i.GLocale.get(
                              new i.GLocaleKey(
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
                : o(r, t);
            } else o(r, t);
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
          : g.from({
              id: "root",
              name: i.GLocale.get(
                new i.GLocaleKey("GFilesPanel", "action.my-cloud")
              ),
            });
      }),
      (S.prototype.uninstall = async function () {
        return new Promise(
          async (e) => (
            l.default.prototype.uninstall.call(this),
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
        return this._securityLevel === y.SecurityLevel.Lowest;
      }),
      (S.prototype._loadClient = function () {
        return new Promise(async (e, t) => {
          const require = this.isLowestSecurityLevel()
            ? "https://www.googleapis.com/auth/drive.file         https://www.googleapis.com/auth/userinfo.email"
            : "https://www.googleapis.com/auth/drive";
          var o, a, r;
          try {
            if (this._apiKey && this._clientId)
              (a = this._clientId), (o = this._apiKey), (r = this._appId);
            else {
              var s =
                await _.cloudServices.googleDrive.getClientConfiguration();
              const {
                GOOGLE_DRIVE_PUBLIC_CLIENT_ID: e,
                GOOGLE_DRIVE_PUBLIC_API_KEY: t,
                GOOGLE_DRIVE_APP_ID: require,
              } = JSON.parse(w(s));
              (a = e),
                (o = t),
                (r = require),
                (this._apiKey = o),
                (this._clientId = a),
                (this._appId = r);
            }
          } catch (e) {
            return t(
              i.GLocale.get(
                new i.GLocaleKey("GCommonNames", "text.loading-failed")
              )
            );
          }
          gContainer
            .getGoogleAPI()
            .init({
              appId: r,
              apiKey: o,
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
                          new c.default(
                            i.GLocale.get(
                              new i.GLocaleKey(
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
        var o = t ? this._getParentReference(t) : this._getParentContext();
        return this._search(
          u.from({
            type: g.Type.Folder,
            limit: require > 0 ? require : 1e3,
            orderBy: S.SearchEngine.SortMap[e],
            parent: o,
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
        const module = new d();
        var n = e.hasValue("type") && e.type;
        const o = n === g.Type.Folder,
          i = n === g.Type.File;
        return (
          o
            ? module.add("mimeType", "=", f.MimeType.Folder)
            : i &&
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
          module.add("trashed", "=", new d.RawValue(false)),
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
        t = t || new h({ query: e });
        return new Promise(async (o, i) => {
          try {
            var a = {
                q: this._buildSearchQuery(e),
                pageSize: n - t.getSize(),
                fields:
                  "nextPageToken, files( id, driveId, parents, name, fileExtension, fullFileExtension, hasThumbnail, thumbnailLink, size, contentHints(thumbnail(image, mimeType)), description, mimeType, version, createdTime, modifiedTime, webContentLink, capabilities(canDownload, canEdit) )",
                pageToken:
                  (e.hasValue("nextPageToken") && e.nextPageToken) || "",
              },
              r = this.getCorporateStorage();
            r &&
              (a = Object.assign(a, {
                includeItemsFromAllDrives: true,
                corpora: "drive",
                supportsAllDrives: true,
                driveId: r.id,
              })),
              e.hasValue("orderBy") && (a.orderBy = e.orderBy);
            const i = await this._googleDriveClient.searchFiles(a);
            var { files: s, nextPageToken: l } = i;
            if (!s.length) return o(t);
            s =
              t.getSize() + s.length > n
                ? s.slice(0, Math.max(n - t.getSize(), 0))
                : s;
            var c = await this._convertToCloudItems(s);
            return (
              e.hasValue("parent") &&
                c.forEach((t) => {
                  t.parent = e.parent;
                }),
              t.update({ nextPageToken: l, items: c }),
              t.getSize() < n && l && (t = await this._search(e, t)),
              o(t)
            );
          } catch (e) {
            i();
          }
        });
      }),
      (S.prototype._convertToCloudItems = async function (e) {
        return (e = e instanceof Array ? e : [e]).map((e) =>
          p.convertToCloudItem(e)
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
        var o = n ? this._getParentReference(n) : this._getParentContext();
        return this._search(
          u.from({
            type: g.Type.File,
            parent: o,
            exactname: "".concat(e, ".").concat(t),
            fileExtension: t,
          })
        ).then((e) => !!e.getItems().length);
      }),
      (S.prototype.folderExists = function (e, t) {
        var n = t ? this._getParentReference(t) : this._getParentContext();
        return this._search(
          u.from({ type: g.Type.Folder, parent: n, exactname: e })
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
        const o = t && (await v.createUint8ArrayFromBlob(t));
        return new p.Item(gDesigner.getDefaultStorage(), e, o, n);
      }),
      (S.prototype.openFile = async function (e, t) {
        return new Promise(
          async function (n, o) {
            try {
              const o = Object.assign(e, {
                settings: this._googleDriveClient.getTokenIssuerSettings(),
              });
              var i = await this._createStorageItem(
                o,
                await this.getRawFile(e)
              );
              i.setCloudClient(this._googleDriveClient),
                gDesigner.openDocument(i, t),
                await this._googleDriveClient.updateFileDetails(
                  i.getUniqueId(),
                  { viewedByMeTime: new Date().toISOString() },
                  { supportsAllDrives: true }
                ),
                n();
            } catch (e) {
              o(e);
            }
          }.bind(this)
        );
      }),
      (S.prototype.saveNewFile = function (e, t) {
        let require =
            arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : "",
          o =
            arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {},
          l = arguments.length > 4 ? arguments[4] : undefined;
        return new Promise(async (c, d) => {
          const u = function (e, t, n) {
            console.log(e);
            const o = gDesigner.getHeader(),
              a = o.getWindowTab(gDesigner.getWindows().getWindow(t)),
              r = o.getWindowTab(gDesigner.getWindows().getWindow(n));
            a && r
              ? (n.updateStatus(s.default.SaveFailed),
                gDesigner.removeDocument(n, function () {
                  t.updateStatus(s.default.SaveFailed);
                }))
              : a
              ? t.updateStatus(s.default.SaveFailed)
              : n.updateStatus(s.default.SaveFailed),
              d(
                i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.error-saving-file")
                )
              );
          };
          var p = new a.default();
          try {
            require = require || this.getDefaultFileFormat().ext.toUpperCase();
            var g = e.getScene();
            g.getActivePage().getGeometryBBox() ||
              d(
                i.GLocale.get(
                  new i.GLocaleKey(
                    "GCommonNames",
                    "text.error-emtpy-infinite-canvas"
                  )
                )
              ),
              (o = e.updateSaveOptionsLastModifiedDate(o));
            const a = (
                this.findFileFormatByExtension(require) || this.getDefaultFileFormat()
              ).mime,
              f = {
                name: t,
                mimeType: a,
                fileExtension: require,
                parent: this._getParentContext(),
                settings: this._settings,
              },
              m = a !== this.getDefaultFileFormat().mime,
              y = this.getCorporateStorage();
            y && (f.driveId = y.id);
            var h = await this._createStorageItem(f);
            h.setCloudClient(this._googleDriveClient),
              gDesigner.addDocument(p),
              p.setSynchronizing(true),
              p.setTitle(t),
              p.updateStatus(s.default.Saving);
            const v = i.GNode.store(g, o);
            v.cfs = false;
            const _ = JSON.stringify(v);
            return p
              .deserializeData(_)
              .then(async () => {
                e.getFileFormatVersion() &&
                  p.setFileFormatVersion(e.getFileFormatVersion()),
                  l && l(s.default.Loaded),
                  (o = p.updateSaveOptionsLastModifiedDate(o)),
                  h.write(
                    p,
                    async () => {
                      e &&
                        e.getEditor() &&
                        gDesigner.removeDocument(e, null, true),
                        p.setStorageItem(h),
                        await p.saveAnnotations(m, true),
                        p.setSynchronizing(false),
                        l && l(s.default.Saved),
                        gDesigner.hasEventListeners(r.default) &&
                          (gDesigner.trigger(
                            new r.default(r.default.Type.Modified, p)
                          ),
                          gDesigner.trigger(
                            new r.default(r.default.Type.Activated, p)
                          )),
                        gDesigner.addToRecentFiles(h),
                        p.updateStatus(s.default.Saved),
                        c();
                    },
                    () => {
                      console.error(">>>saveNewFile write error", arguments),
                        p.setSynchronizing(false),
                        l && l(s.default.SaveFailed),
                        d();
                    },
                    null,
                    o
                  );
              })
              .catch((t) => u(t, p, e));
          } catch (t) {
            u(t, p, e);
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
        var o = this.getCurrentFolder(),
          i = o && this._getParentReference(o);
        this._currentFilesPage &&
          ((this._currentFilesPage.__parent === i &&
            this._currentFilesPage.__search === e &&
            this._currentFilesPage.__sort === n) ||
            (this._currentFilesPage = null));
        return await this._fetchFiles(e, t, n, o, this._currentFilesPage).then(
          (t) => (
            (this._currentFilesPage = t),
            (this._currentFilesPage.__search = e),
            (this._currentFilesPage.__sort = n),
            (this._currentFilesPage.__parent = i),
            t.getItems()
          )
        );
      }),
      (S.prototype._fetchFiles = async function (e, t, n) {
        let o =
            arguments.length > 3 && undefined !== arguments[3]
              ? arguments[3]
              : null,
          i = arguments.length > 4 ? arguments[4] : undefined;
        var a = o ? this._getParentReference(o) : this._getParentContext();
        if (t && i && !i.nextPageToken) {
          var r = h.from(i);
          return (r.items = []), r;
        }
        return this._search(
          u.from({
            type: g.Type.File,
            limit: this.getQueryLimit(),
            orderBy: S.SearchEngine.SortMap[n],
            nextPageToken: t ? i && i.nextPageToken : "",
            parent: a,
            name: e,
          })
        );
      }),
      (S.prototype.isItemAllowedToBeRendered = function (e) {
        return e.hasPermission(g.Permission.Download);
      }),
      (S.prototype.isFileAllowedToBeOpened = function (e) {
        return e.hasPermission(g.Permission.Download);
      }),
      (S.prototype.supportsCorporateStorage = function () {
        return true;
      }),
      (S.prototype.getCorporateStorages = function () {
        let exports =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : new u(),
          module = arguments.length > 1 ? arguments[1] : undefined;
        if (this.shouldOnlyListOwnedFiles()) return Promise.resolve([]);
        var n =
          (exports.hasKey("limit") && exports.getAsInt("limit")) || this.getQueryLimit();
        return (
          (module = module || new h({ query: exports })),
          new Promise(async (o, i) => {
            try {
              const i = {
                  pageSize: n - module.getSize(),
                  fields: "*",
                  nextPageToken: exports.hasValue("nextPageToken") && exports.nextPageToken,
                },
                l = await this._googleDriveClient.searchTeamDrives(i);
              var { drives: a, nextPageToken: r } = l;
              if (!a.length) return o(module);
              a =
                module.getSize() + a.length > n
                  ? a.slice(0, Math.max(n - module.getSize(), 0))
                  : a;
              var s = await this._convertToCloudItems(a);
              return (
                module.update({ nextPageToken: r, items: s }),
                module.getSize() < n && r && (module = await this.getStorages(exports, module)),
                o(module.getItems())
              );
            } catch (e) {
              i();
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
        return new f(new m(e));
      }),
      (S.prototype.getSupportedFileFormats = function () {
        return p.getSupportedFileFormats();
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
            .concat(f.SearchEngine.OrderBy.ModifiedTime, " ")
            .concat(f.SearchEngine.Sorts.Descending),
          updated: ""
            .concat(f.SearchEngine.OrderBy.ModifiedTime, " ")
            .concat(f.SearchEngine.Sorts.Ascending),
          "-created": ""
            .concat(f.SearchEngine.OrderBy.CreatedTime, " ")
            .concat(f.SearchEngine.Sorts.Descending),
          created: ""
            .concat(f.SearchEngine.OrderBy.CreatedTime, " ")
            .concat(f.SearchEngine.Sorts.Ascending),
          "-name": ""
            .concat(f.SearchEngine.OrderBy.Name, " ")
            .concat(f.SearchEngine.Sorts.Descending),
          name: ""
            .concat(f.SearchEngine.OrderBy.Name, " ")
            .concat(f.SearchEngine.Sorts.Ascending),
          "-viewed": ""
            .concat(f.SearchEngine.OrderBy.ViewedByMeTime, " ")
            .concat(f.SearchEngine.Sorts.Descending),
          viewed: ""
            .concat(f.SearchEngine.OrderBy.ViewedByMeTime, " ")
            .concat(f.SearchEngine.Sorts.Ascending),
        },
      }),
      (exports.exports = S);
  }