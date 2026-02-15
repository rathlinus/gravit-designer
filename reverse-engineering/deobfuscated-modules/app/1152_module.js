/**
 * Webpack Module #1152
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      a = require(847) /* module_847 */,
      SharepointException = _interopRequireDefault(require(1239) /* SharepointException */),
      s = _interopRequireDefault(require(388) /* Item */),
      l = _interopRequireDefault(require(1481) /* module_1481 */),
      AppSettings = require(10) /* AppSettings */,
      GError = _interopRequireDefault(require(594) /* GError */);
    const u = require(86) /* module_86 */,
      GEvent_storageItem = require(336) /* GEvent_storageItem */,
      DataModule_436 = require(436) /* DataModule_436 */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GCloudStorageItem = require(156) /* GCloudStorageItem */,
      m = 10,
      y = 50,
      v = 80,
      _ = 100;
    function b() {}
    GCore.GObject.inherit(b, s.default),
      (b.Item = function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
        s.default.Item.call(this, e, t),
          (this._ext = null),
          (this._token = require),
          this._setExtension(),
          DataModule_436.call(this, AppSettings.FILE_ID_PREFIX.SHAREPOINT);
      }),
      GCore.GObject.inheritAndMix(b.Item, s.default.Item, [DataModule_436]),
      (b.Item.prototype._app = AppSettings.FILE_ID_PREFIX.SHAREPOINT),
      (b.Item.prototype.getId = function () {
        const exports = this._getSharepointId();
        return exports ? "".concat(this._app, "_").concat(exports) : null;
      }),
      (b.Item.prototype.setFile = function (e) {
        e &&
          ((e.storage = GCloudStorageItem.Storage.SharePoint),
          !e.relativeUrl &&
            e instanceof GCloudStorageItem &&
            (e.relativeUrl =
              e.parent &&
              e.parent.relativeUrl + "/" + e.getNameWithExtension())),
          s.default.Item.prototype.setFile.call(this, e);
      }),
      (b.Item.prototype._getSharepointId = function () {
        return this._id ? this._id : null;
      }),
      (b.Item.prototype.getCollaborativeFile = async function () {
        return (
          (this._collaborativeFile = await gDesigner
            .getCloudCommunicationManager()
            .getExternalFile(this.getId())
            .catch(() => null)),
          this._collaborativeFile
        );
      }),
      (b.Item.prototype.setCollaborativeFileStatus = async function (e) {
        const module = this._collaborativeFile;
        if (module && module.status !== e) {
          var require = module.status;
          (module.status = e),
            gDesigner.hasEventListeners(GEvent_storageItem.FileStatusUpdate) &&
              gDesigner.trigger(new GEvent_storageItem.FileStatusUpdate(this, require, e));
        }
      }),
      (b.Item.prototype.getOrCreateCollaborativeFile = async function () {
        var e = await this.getCollaborativeFile();
        return (
          e ||
            (await this.createShadowFile(),
            (e = await this.getCollaborativeFile())),
          e
        );
      }),
      (b.Item.prototype.read = function (e, t) {
        const require = this.getFile();
        if (this._rawData) {
          var _interopRequireDefault = this._rawData;
          return (this._rawData = null), e(_interopRequireDefault);
        }
        return function _interopRequireDefault() {
          let GCore =
            arguments.length > 0 && undefined !== arguments[0] && arguments[0];
          return this._getClient()
            .getFile(require)
            .then(async (t) => {
              const _interopRequireDefault = SharepointException.default.convertFileToCloudItem(
                await this._getClient().getFileDetails(this.getFile())
              );
              (_interopRequireDefault.status = require.status),
                (_interopRequireDefault.checkOutStatus = require.checkOutStatus),
                this.setFile(_interopRequireDefault),
                this._setExtension(),
                await this.syncShadowFile(),
                e(t);
            })
            .catch((e) => {
              const { id: a } = require;
              return !GCore && e && e.status && 404 === e.status && a
                ? this._getClient()
                    .findFileById(a)
                    .then((e) => {
                      let { relativeUrl: t, name: GCore, type: a } = e;
                      const SharepointException = Object.assign(require, {
                        name: GCore,
                        relativeUrl: t,
                        type: a,
                      });
                      return (
                        this.setFile(SharepointException),
                        this._setExtension(),
                        this.updateShadowFile(),
                        _interopRequireDefault.call(this, true)
                      );
                    })
                    .catch(SharepointException)
                : SharepointException();
              function SharepointException() {
                if (!t) throw e;
                t(e);
              }
            });
        }.call(this);
      }),
      (b.Item.prototype.isVersionNewerThan = function (e) {
        if (
          e instanceof b.Item &&
          this.getFile().id === e.getFile().id &&
          new Date(this.getFile().updated) > new Date(e.getFile().updated)
        )
          return true;
        const module = this.getFile(),
          require = e.getFile();
        return (
          new Date(module.getModificationTime()).getTime() >
          new Date(require.getModificationTime()).getTime()
        );
      }),
      (b.Item.prototype.hasVersionControl = function () {
        return true;
      }),
      (b.Item.prototype.hasUpdates = async function () {
        const exports = this.getFile();
        if (!this.getId() || !exports || (!exports.updated && !exports.getModificationTime()))
          return false;
        const module = await this.getLatestFileInfo();
        return new b.Item(this.getStorage(), module).isVersionNewerThan(this);
      }),
      (b.Item.prototype.getLatestFileVersion = async function () {
        let exports = this._getClient();
        const module = this.getFile(),
          require = await this.getLatestFileInfo(),
          _interopRequireDefault = new b.Item(
            this.getStorage(),
            Object.assign(require, {
              settings: module.settings,
              relativeUrl: module.relativeUrl,
            })
          );
        return (_interopRequireDefault._rawData = await exports.getFile(module)), _interopRequireDefault.setCloudClient(exports), _interopRequireDefault;
      }),
      (b.Item.prototype.getLatestFileInfo = async function () {
        const exports = this.getFile(),
          module = { relativeUrl: exports.relativeUrl };
        if (!module.relativeUrl) {
          const n = exports.getParent();
          n instanceof GCloudStorageItem &&
            (module.relativeUrl = ""
              .concat(n.relativeUrl, "/")
              .concat(exports.getNameWithExtension()));
        }
        const require = await this._getClient().getFileDetails(module);
        return SharepointException.default.convertFileToCloudItem(require);
      }),
      (b.Item.prototype.exists = async function () {
        const exports = this.getFile();
        return this._getClient().fileExists(
          exports.getNameWithExtension(),
          exports.getParent()
        );
      }),
      (b.Item.prototype._setFileSizeAfterSaved = async function (e) {
        return this._getClient()
          .getFileDetails(e)
          .then((e) => {
            this._fileSizeAfterSaved = e.size;
          });
      }),
      (b.Item.prototype.write = async function (e, t, n, _interopRequireDefault, a) {
        if (this._writing) return;
        this._writing = true;
        let SharepointException = null;
        try {
          gContainer.verifyEnoughMemoryToSave(e),
            (SharepointException = e.getEditor().markSavePoint());
          const n = {};
          e.updateStatus(u.Saving, n);
          const s = _interopRequireDefault || n.progress,
            l = (e) => {
              s && s(e);
            },
            AppSettings = e.isNew();
          l(m), GCore.GUtil.prepareForSaving(e.getScene(), this.getExtension());
          const GError = await this._getDocumentBlob(e, _interopRequireDefault, a);
          l(y),
            this._verifyFileNotTooSmall(GError.size, e),
            this._setFileSizeBeforeSaved(GError.size),
            await this._createOrUpdateFile(GError),
            l(v),
            AppSettings && (await this.createShadowFile());
          try {
            await this._setFileSizeAfterSaved(this.getFile()).catch((e) => {
              console.error(e);
            }),
              this._verifyFileSizeAfterSaved();
          } catch (e) {
            console.error(e);
          }
          e.updateStatus(u.Saved),
            gDesigner.hasEventListeners(GDocumentEvent) &&
              gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.StorageItemUpdated, e)),
            await this._updateModificationTime(),
            l(_),
            t && t(this.getFile());
        } catch (t) {
          e.updateStatus(u.SaveFailed), SharepointException && SharepointException.rollback(), n && n(t);
        } finally {
          this._writing = false;
        }
      }),
      (b.Item.prototype._getDocumentBlob = async function (e, t, n) {
        let _interopRequireDefault = null;
        if ("CDR" === this.getExtension() || "DES" === this.getExtension()) {
          var a = { progress: t, ext: this.getExtension().toLowerCase() };
          _interopRequireDefault = await this._exportDocumentToCDR(e, a, n);
        } else {
          var SharepointException = e.getScene(),
            s = GCore.GNode.serialize(SharepointException, GCore.GUtil.extend({ save: true }, n));
          _interopRequireDefault = new Blob([s]);
        }
        return _interopRequireDefault;
      }),
      (b.Item.prototype._checkHttpResponseAndThrowIfNecessary = function (e) {
        if (e.status >= AppSettings.HTTP_STATUS_CODES.BAD_REQUEST) {
          if (e.status === AppSettings.HTTP_STATUS_CODES.BAD_REQUEST)
            throw Error(
              "Invalid this.response, probably corrupted upload: " + e.status
            );
          throw Error("Invalid response status: " + e.status);
        }
      }),
      (b.Item.prototype._updateFileWithCreatedResponse = function (e) {
        const module = SharepointException.default.convertFileToCloudItem(e);
        (module.settings = GCloudStorageItem.GCloudSettings.from(this._getClient().getSettings())),
          this.setFile(Object.assign(this.getFile(), module));
      }),
      (b.Item.prototype._updateModificationTime = async function () {
        const exports = this._getClient();
        if (this.getFile().relativeUrl) {
          const t = SharepointException.default.convertFileToCloudItem(
            await exports.getFileDetails(this.getFile())
          );
          this.getFile().setModificationTime(t.updated),
            this.setFile(Object.assign(this.getFile(), { updated: t.updated }));
        }
      }),
      (b.Item.prototype.createOrUpdateFileWithMetadata = async function (e) {
        if (!this._writing) {
          this._writing = true;
          try {
            await this._createOrUpdateFile(e);
          } finally {
            this._writing = false;
          }
        }
      }),
      (b.Item.prototype._createOrUpdateFile = async function (e) {
        let module;
        const require = this._getClient(),
          _interopRequireDefault = e instanceof Blob ? e : new Blob([e]);
        this._getSharepointId()
          ? ((module = await require.updateFileContentById(this._getSharepointId(), _interopRequireDefault)),
            this._checkHttpResponseAndThrowIfNecessary(module))
          : ((module = await require.createFile(this.getFile(), _interopRequireDefault)),
            this._checkHttpResponseAndThrowIfNecessary(module),
            this._updateFileWithCreatedResponse(await module.json())),
          await async function () {
            const e = this.getFile(),
              module = this._getClient();
            let require = Object.assign(e, {
              settings: GCloudStorageItem.GCloudSettings.from(module.getSettings()),
            });
            e.relativeUrl ||
              (e.relativeUrl =
                e.parent &&
                e.parent.relativeUrl + "/" + e.getNameWithExtension());
            if (e.relativeUrl) {
              const _interopRequireDefault = await module.getFileDetails(e),
                GCore = SharepointException.default.convertFileToCloudItem(_interopRequireDefault);
              Object.assign(require, GCore);
            }
            this.setFile(require);
          }.call(this);
      }),
      (b.Item.prototype.getToken = function () {
        return this._token;
      }),
      (b.Item.prototype.checkOut = async function () {
        try {
          const e = this.getFile(),
            t = await this._getAndUpdateCheckOutFileStatus();
          if (this.isCheckedOutByMe()) return;
          if (t === SharepointException.default.FILE_STATUS.LOCKED)
            throw new GError.default(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GSharePointStorage",
                  "text.error-failed-check-out-file"
                )
              )
            );
          await this._getClient().checkOutFile(e),
            this._setCheckOutStatus(SharepointException.default.FILE_STATUS.LOCKED_BY_ME);
        } catch (e) {
          throw e instanceof GError.default
            ? e
            : new GError.default(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSharePointStorage",
                    "text.error-failed-check-out-file"
                  )
                )
              );
        }
      }),
      (b.Item.prototype.checkIn = async function (e, t) {
        try {
          const n = this.getFile();
          await this._getClient().checkInFile(n, e, t),
            await this._updateModificationTime(),
            this._setCheckOutStatus(SharepointException.default.FILE_STATUS.AVAILABLE),
            this._triggerStorageItemEvent(GEvent_storageItem.Type.FileCheckIn);
        } catch (e) {
          throw (
            (console.error("Error checking in", e),
            e instanceof GError.default
              ? e
              : new GError.default(
                  GCore.GLocale.get(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewSharepoint",
                        "text.error-could-not-check-in"
                      )
                    )
                  )
                ))
          );
        }
      }),
      (b.Item.prototype._setCheckOutStatus = function (e) {
        const module = this.getFile();
        e === SharepointException.default.FILE_STATUS.AVAILABLE
          ? (module.checkedOut = false)
          : (e !== SharepointException.default.FILE_STATUS.LOCKED_BY_ME &&
              e !== SharepointException.default.FILE_STATUS.LOCKED) ||
            (module.checkedOut = true),
          (module.checkOutStatus = e),
          this._triggerStorageItemEvent(GEvent_storageItem.Type.FileUpdated);
      }),
      (b.Item.prototype.refreshCheckOutStatus = async function () {
        return (
          this._refreshCheckOutPromise ||
            ((this.getFile().checkOutStatus = SharepointException.default.FILE_STATUS.LOADING),
            (this._refreshCheckOutPromise =
              this._getAndUpdateCheckOutFileStatus().finally(() => {
                delete this._refreshCheckOutPromise;
              }))),
          this._refreshCheckOutPromise
        );
      }),
      (b.Item.prototype.isCheckedOutByMe = function () {
        return (
          this.getFile().checkOutStatus === SharepointException.default.FILE_STATUS.LOCKED_BY_ME
        );
      }),
      (b.Item.prototype.isCheckedOutLoading = function () {
        return this.getFile().checkOutStatus === SharepointException.default.FILE_STATUS.LOADING;
      }),
      (b.Item.prototype.isEditingEnabled = function () {
        return !AppSettings.msTeamsMode || this.isCheckedOutByMe();
      }),
      (b.Item.prototype._getAndUpdateCheckOutFileStatus = async function () {
        const exports = await this._getCheckOutFileStatus();
        return this._setCheckOutStatus(exports), this.getFile().checkOutStatus;
      }),
      (b.Item.prototype._triggerStorageItemEvent = async function (e) {
        gDesigner.hasEventListeners(GEvent_storageItem) && gDesigner.trigger(new GEvent_storageItem(e, this));
      }),
      (b.Item.prototype._getCheckOutFileStatus = async function () {
        const exports = this.getFile();
        return exports.checkOutStatus &&
          exports.checkOutStatus !== SharepointException.default.FILE_STATUS.LOADING
          ? exports.checkOutStatus
          : this._getClient().getCheckOutFileStatus(exports);
      }),
      (b.Item.prototype.getMimeType = function () {
        return this.getFile().type;
      }),
      (b.Item.prototype.isEmailFromCorporateDomain = async function (e) {
        const module = this._getClient();
        return !!(await module.getAccountByEmail(e).catch(() => null));
      }),
      (b.Item.prototype._exportDocumentToCDR = function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        return new Promise(async (_interopRequireDefault, GCore) => {
          (0, a.prepareCDRforSaving)(
            e,
            function (e) {
              return GCore(e);
            },
            t,
            require,
            function (e) {
              return _interopRequireDefault(new Blob([e]));
            }
          );
        });
      }),
      (b.Item.prototype._getClient = function () {
        let exports = this.getCloudClient();
        const module = this.getFile();
        return (
          !exports &&
            module &&
            module.settings &&
            ((exports = SharepointException.default.getInstance(module.settings)), this.setCloudClient(exports)),
          exports
        );
      }),
      (b.Item.prototype._setExtension = function (e) {
        const module = e || this.getFile();
        module &&
          module.type &&
          (["application/vnd.corel-draw", "application/cdr"].includes(module.type)
            ? (this._ext = "CDR")
            : "application/des" === module.type && (this._ext = "DES"));
      }),
      (b.Item.prototype.getMyPermissionsList = async function () {
        const exports = this._getClient(),
          module = this.getFile(),
          { High: require, Low: _interopRequireDefault } = await exports
            .getFileEffectiveBasePermissions(module)
            .catch(() => ({ High: 0, Low: 0 }));
        if (
          new l.default(require, _interopRequireDefault).hasPermission(l.default.Permissions.EditListItems)
        ) {
          const n = await exports._getUser(),
            _interopRequireDefault = await exports.getFileCreator(module);
          return [
            { email: n.getEmail(), role: AppSettings.ShareRoles.ContentEditor.id },
            { email: _interopRequireDefault.getEmail(), role: AppSettings.ShareRoles.Owner.id },
          ];
        }
        return [];
      }),
      (b.Item.prototype.toString = function () {
        return "[Object GSharePointStorage.Item]";
      }),
      (exports.exports = b);
  }