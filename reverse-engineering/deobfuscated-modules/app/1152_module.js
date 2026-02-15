/**
 * Webpack Module #1152
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */, require(3) /* polyfill_RegExp_toString */;
    var i = require(1) /* module */,
      a = require(847) /* module_847 */,
      r = o(require(1239) /* SharepointException */),
      s = o(require(388) /* Item */),
      l = o(require(1481) /* module_1481 */),
      c = require(10) /* AppSettings */,
      d = o(require(594) /* GError */);
    const u = require(86) /* module_86 */,
      p = require(336) /* module_336 */,
      g = require(436) /* module_436 */,
      h = require(78) /* GDocumentEvent */,
      f = require(156) /* module_156 */,
      m = 10,
      y = 50,
      v = 80,
      _ = 100;
    function b() {}
    i.GObject.inherit(b, s.default),
      (b.Item = function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
        s.default.Item.call(this, e, t),
          (this._ext = null),
          (this._token = require),
          this._setExtension(),
          g.call(this, c.FILE_ID_PREFIX.SHAREPOINT);
      }),
      i.GObject.inheritAndMix(b.Item, s.default.Item, [g]),
      (b.Item.prototype._app = c.FILE_ID_PREFIX.SHAREPOINT),
      (b.Item.prototype.getId = function () {
        const exports = this._getSharepointId();
        return exports ? "".concat(this._app, "_").concat(exports) : null;
      }),
      (b.Item.prototype.setFile = function (e) {
        e &&
          ((e.storage = f.Storage.SharePoint),
          !e.relativeUrl &&
            e instanceof f &&
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
            gDesigner.hasEventListeners(p.FileStatusUpdate) &&
              gDesigner.trigger(new p.FileStatusUpdate(this, require, e));
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
          var o = this._rawData;
          return (this._rawData = null), e(o);
        }
        return function o() {
          let i =
            arguments.length > 0 && undefined !== arguments[0] && arguments[0];
          return this._getClient()
            .getFile(require)
            .then(async (t) => {
              const o = r.default.convertFileToCloudItem(
                await this._getClient().getFileDetails(this.getFile())
              );
              (o.status = require.status),
                (o.checkOutStatus = require.checkOutStatus),
                this.setFile(o),
                this._setExtension(),
                await this.syncShadowFile(),
                e(t);
            })
            .catch((e) => {
              const { id: a } = require;
              return !i && e && e.status && 404 === e.status && a
                ? this._getClient()
                    .findFileById(a)
                    .then((e) => {
                      let { relativeUrl: t, name: i, type: a } = e;
                      const r = Object.assign(require, {
                        name: i,
                        relativeUrl: t,
                        type: a,
                      });
                      return (
                        this.setFile(r),
                        this._setExtension(),
                        this.updateShadowFile(),
                        o.call(this, true)
                      );
                    })
                    .catch(r)
                : r();
              function r() {
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
          o = new b.Item(
            this.getStorage(),
            Object.assign(require, {
              settings: module.settings,
              relativeUrl: module.relativeUrl,
            })
          );
        return (o._rawData = await exports.getFile(module)), o.setCloudClient(exports), o;
      }),
      (b.Item.prototype.getLatestFileInfo = async function () {
        const exports = this.getFile(),
          module = { relativeUrl: exports.relativeUrl };
        if (!module.relativeUrl) {
          const n = exports.getParent();
          n instanceof f &&
            (module.relativeUrl = ""
              .concat(n.relativeUrl, "/")
              .concat(exports.getNameWithExtension()));
        }
        const require = await this._getClient().getFileDetails(module);
        return r.default.convertFileToCloudItem(require);
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
      (b.Item.prototype.write = async function (e, t, n, o, a) {
        if (this._writing) return;
        this._writing = true;
        let r = null;
        try {
          gContainer.verifyEnoughMemoryToSave(e),
            (r = e.getEditor().markSavePoint());
          const n = {};
          e.updateStatus(u.Saving, n);
          const s = o || n.progress,
            l = (e) => {
              s && s(e);
            },
            c = e.isNew();
          l(m), i.GUtil.prepareForSaving(e.getScene(), this.getExtension());
          const d = await this._getDocumentBlob(e, o, a);
          l(y),
            this._verifyFileNotTooSmall(d.size, e),
            this._setFileSizeBeforeSaved(d.size),
            await this._createOrUpdateFile(d),
            l(v),
            c && (await this.createShadowFile());
          try {
            await this._setFileSizeAfterSaved(this.getFile()).catch((e) => {
              console.error(e);
            }),
              this._verifyFileSizeAfterSaved();
          } catch (e) {
            console.error(e);
          }
          e.updateStatus(u.Saved),
            gDesigner.hasEventListeners(h) &&
              gDesigner.trigger(new h(h.Type.StorageItemUpdated, e)),
            await this._updateModificationTime(),
            l(_),
            t && t(this.getFile());
        } catch (t) {
          e.updateStatus(u.SaveFailed), r && r.rollback(), n && n(t);
        } finally {
          this._writing = false;
        }
      }),
      (b.Item.prototype._getDocumentBlob = async function (e, t, n) {
        let o = null;
        if ("CDR" === this.getExtension() || "DES" === this.getExtension()) {
          var a = { progress: t, ext: this.getExtension().toLowerCase() };
          o = await this._exportDocumentToCDR(e, a, n);
        } else {
          var r = e.getScene(),
            s = i.GNode.serialize(r, i.GUtil.extend({ save: true }, n));
          o = new Blob([s]);
        }
        return o;
      }),
      (b.Item.prototype._checkHttpResponseAndThrowIfNecessary = function (e) {
        if (e.status >= c.HTTP_STATUS_CODES.BAD_REQUEST) {
          if (e.status === c.HTTP_STATUS_CODES.BAD_REQUEST)
            throw Error(
              "Invalid this.response, probably corrupted upload: " + e.status
            );
          throw Error("Invalid response status: " + e.status);
        }
      }),
      (b.Item.prototype._updateFileWithCreatedResponse = function (e) {
        const module = r.default.convertFileToCloudItem(e);
        (module.settings = f.GCloudSettings.from(this._getClient().getSettings())),
          this.setFile(Object.assign(this.getFile(), module));
      }),
      (b.Item.prototype._updateModificationTime = async function () {
        const exports = this._getClient();
        if (this.getFile().relativeUrl) {
          const t = r.default.convertFileToCloudItem(
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
          o = e instanceof Blob ? e : new Blob([e]);
        this._getSharepointId()
          ? ((module = await require.updateFileContentById(this._getSharepointId(), o)),
            this._checkHttpResponseAndThrowIfNecessary(module))
          : ((module = await require.createFile(this.getFile(), o)),
            this._checkHttpResponseAndThrowIfNecessary(module),
            this._updateFileWithCreatedResponse(await module.json())),
          await async function () {
            const e = this.getFile(),
              module = this._getClient();
            let require = Object.assign(e, {
              settings: f.GCloudSettings.from(module.getSettings()),
            });
            e.relativeUrl ||
              (e.relativeUrl =
                e.parent &&
                e.parent.relativeUrl + "/" + e.getNameWithExtension());
            if (e.relativeUrl) {
              const o = await module.getFileDetails(e),
                i = r.default.convertFileToCloudItem(o);
              Object.assign(require, i);
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
          if (t === r.default.FILE_STATUS.LOCKED)
            throw new d.default(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GSharePointStorage",
                  "text.error-failed-check-out-file"
                )
              )
            );
          await this._getClient().checkOutFile(e),
            this._setCheckOutStatus(r.default.FILE_STATUS.LOCKED_BY_ME);
        } catch (e) {
          throw e instanceof d.default
            ? e
            : new d.default(
                i.GLocale.get(
                  new i.GLocaleKey(
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
            this._setCheckOutStatus(r.default.FILE_STATUS.AVAILABLE),
            this._triggerStorageItemEvent(p.Type.FileCheckIn);
        } catch (e) {
          throw (
            (console.error("Error checking in", e),
            e instanceof d.default
              ? e
              : new d.default(
                  i.GLocale.get(
                    i.GLocale.get(
                      new i.GLocaleKey(
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
        e === r.default.FILE_STATUS.AVAILABLE
          ? (module.checkedOut = false)
          : (e !== r.default.FILE_STATUS.LOCKED_BY_ME &&
              e !== r.default.FILE_STATUS.LOCKED) ||
            (module.checkedOut = true),
          (module.checkOutStatus = e),
          this._triggerStorageItemEvent(p.Type.FileUpdated);
      }),
      (b.Item.prototype.refreshCheckOutStatus = async function () {
        return (
          this._refreshCheckOutPromise ||
            ((this.getFile().checkOutStatus = r.default.FILE_STATUS.LOADING),
            (this._refreshCheckOutPromise =
              this._getAndUpdateCheckOutFileStatus().finally(() => {
                delete this._refreshCheckOutPromise;
              }))),
          this._refreshCheckOutPromise
        );
      }),
      (b.Item.prototype.isCheckedOutByMe = function () {
        return (
          this.getFile().checkOutStatus === r.default.FILE_STATUS.LOCKED_BY_ME
        );
      }),
      (b.Item.prototype.isCheckedOutLoading = function () {
        return this.getFile().checkOutStatus === r.default.FILE_STATUS.LOADING;
      }),
      (b.Item.prototype.isEditingEnabled = function () {
        return !c.msTeamsMode || this.isCheckedOutByMe();
      }),
      (b.Item.prototype._getAndUpdateCheckOutFileStatus = async function () {
        const exports = await this._getCheckOutFileStatus();
        return this._setCheckOutStatus(exports), this.getFile().checkOutStatus;
      }),
      (b.Item.prototype._triggerStorageItemEvent = async function (e) {
        gDesigner.hasEventListeners(p) && gDesigner.trigger(new p(e, this));
      }),
      (b.Item.prototype._getCheckOutFileStatus = async function () {
        const exports = this.getFile();
        return exports.checkOutStatus &&
          exports.checkOutStatus !== r.default.FILE_STATUS.LOADING
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
        return new Promise(async (o, i) => {
          (0, a.prepareCDRforSaving)(
            e,
            function (e) {
              return i(e);
            },
            t,
            require,
            function (e) {
              return o(new Blob([e]));
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
            ((exports = r.default.getInstance(module.settings)), this.setCloudClient(exports)),
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
          { High: require, Low: o } = await exports
            .getFileEffectiveBasePermissions(module)
            .catch(() => ({ High: 0, Low: 0 }));
        if (
          new l.default(require, o).hasPermission(l.default.Permissions.EditListItems)
        ) {
          const n = await exports._getUser(),
            o = await exports.getFileCreator(module);
          return [
            { email: n.getEmail(), role: c.ShareRoles.ContentEditor.id },
            { email: o.getEmail(), role: c.ShareRoles.Owner.id },
          ];
        }
        return [];
      }),
      (b.Item.prototype.toString = function () {
        return "[Object GSharePointStorage.Item]";
      }),
      (exports.exports = b);
  }