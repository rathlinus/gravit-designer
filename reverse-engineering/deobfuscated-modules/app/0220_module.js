/**
 * Webpack Module #220
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(96) /* polyfill_JSON_stringify */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      AppSettings = require(10) /* AppSettings */,
      r = _interopRequireDefault(require(336) /* module_336 */),
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      c = _interopRequireDefault(require(554) /* module_554 */),
      d = _interopRequireDefault(require(555) /* module_555 */),
      u = require(237) /* Item */,
      p = require(119) /* GCloudStorage */;
    const g = require(436) /* module_436 */,
      h = require(86) /* module_86 */;
    var f = AppSettings.FILE_FORMATS.find((e) => e.default),
      m = AppSettings.FILE_FORMATS.filter((e) => !e.default);
    const Md5 = require(435) /* Md5 */,
      v = require(165) /* module_165 */;
    function _(e) {
      return fetch(AppSettings.gApi.url + "/error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.assign(e, { ua: window.navigator.userAgent })
        ),
      });
    }
    function b() {}
    GCore.GObject.inherit(b, u),
      (b.ProgressStages = {
        Preparing: 0,
        SyncingImages: 50,
        UploadingFile: 100,
      }),
      (b.from = async function (e, t, n, _interopRequireDefault, GCore) {
        let AppSettings = t;
        return (
          "string" == typeof t &&
            (AppSettings = await p.getFileDataForVersionOrAutoSave(t, _interopRequireDefault, GCore)),
          AppSettings
            ? new b.Item(e, AppSettings.id, n || AppSettings.name, AppSettings, _interopRequireDefault || AppSettings.version, null, GCore)
            : null
        );
      }),
      (b.Item = function (e, t, n, _interopRequireDefault, GCore, AppSettings, r) {
        if (
          (u.Item.call(this, e),
          (this._filename = n),
          (this._id = t),
          (this._file = _interopRequireDefault && p.convertToCloudItem(_interopRequireDefault)),
          (this._versionId = GCore),
          (this._token = AppSettings),
          (this._isAutoSave = "boolean" == typeof r ? r : !(!_interopRequireDefault || !_interopRequireDefault.autosave)),
          (this._fileLastModifiedDate = _interopRequireDefault && new Date(_interopRequireDefault.updated || _interopRequireDefault.created)),
          (this._fileAutoSaveLastModifiedDate =
            _interopRequireDefault && new Date(_interopRequireDefault.autosave_updated)),
          _interopRequireDefault && m.length)
        ) {
          var GSystemDialog = null;
          _interopRequireDefault.type
            ? (GSystemDialog = m.find((e) => e.type === this._file.getMimeType()))
            : this._file.getExtension() &&
              (GSystemDialog = m.find((e) => e.ext === this._file.getExtension())),
            GSystemDialog && ((this._ext = GSystemDialog.ext.toUpperCase()), (this._type = GSystemDialog.type));
        }
      }),
      GCore.GObject.inheritAndMix(b.Item, u.Item, [g]),
      (b.Item.prototype._filename = null),
      (b.Item.prototype._ext = null),
      (b.Item.prototype._type = null),
      (b.Item.prototype._id = null),
      (b.Item.prototype._file = null),
      (b.Item.prototype._versionId = null),
      (b.Item.prototype._token = null),
      (b.Item.prototype._isAutoSave = null),
      (b.Item.prototype.isRegistrable = function () {
        return !!this.getId();
      }),
      (b.Item.prototype.getId = function () {
        return this._id;
      }),
      (b.Item.prototype.isVersionAutoSave = function () {
        return this._isAutoSave;
      }),
      (b.Item.prototype.getToken = function () {
        return this._token;
      }),
      (b.Item.prototype.getFullName = function () {
        return this._filename;
      }),
      (b.Item.prototype.getName = function () {
        return GCore.GUtil.xss(this._filename);
      }),
      (b.Item.prototype.getVersionId = function () {
        return this._versionId || null;
      }),
      (b.Item.prototype.setVersionId = function (e) {
        this._versionId = e;
      }),
      (b.Item.prototype.storeFileFormatVersion = function (e) {
        return (
          (this._fileFormatVersion = e),
          this.supportsSharing()
            ? AppSettings.gApi.updateFileFormat(this.getId(), {
                fileFormat: this._fileFormatVersion,
              })
            : Promise.resolve()
        );
      }),
      (b.Item.prototype.setCollaborativeFileStatus = async function (e) {
        if (this._file.status !== e) {
          var module = this._file.status;
          (this._file.status = e),
            gDesigner.hasEventListeners(r.default.FileStatusUpdate) &&
              gDesigner.trigger(new r.default.FileStatusUpdate(this, module, e));
        }
      }),
      (b.Item.prototype.getCollaborativeFile = async function () {
        return this._file;
      }),
      (b.Item.prototype.setFileName = function (e) {
        this._filename = e;
      }),
      (b.Item.prototype.getOrCreateCollaborativeFile = async function () {
        return gDesigner
          .getCloudCommunicationManager()
          .getFileExtended(this.getId());
      }),
      (b.Item.prototype.getExtension = function () {
        return this._ext || f.ext.toUpperCase();
      }),
      (b.Item.prototype.getType = function () {
        return this._type || f.type;
      }),
      (b.Item.prototype.setFile = function (e) {
        if (!e) throw new Error("File can not be null");
        const module = this._file && this._file.status,
          require = new AppSettings.FileExtended(e);
        (this._file = p.convertToCloudItem(e)),
          (this._id = e.id),
          (this._name = e.name),
          (this._versionId = e.version),
          (this._fileLastModifiedDate = new Date(e.updated)),
          (this._fileAutoSaveLastModifiedDate = new Date(e.autosave_updated)),
          (this._isAutoSave = !!require.isAutoSave()),
          this._file.status !== module &&
            null != module &&
            gDesigner.hasEventListeners(r.default.FileStatusUpdate) &&
            gDesigner.trigger(
              new r.default.FileStatusUpdate(this, module, this._file.status)
            );
      }),
      (b.Item.prototype.getFile = function () {
        return this._file;
      }),
      (b.Item.prototype.read = async function (e, t) {
        if (!this._file.url) {
          const e = await p.getFileDataForVersionOrAutoSave(
            this._id,
            this._versionId,
            this._isAutoSave
          );
          this._file.url = e.url;
        }
        p.loadDesignData(
          this._id,
          true,
          this._versionId,
          this._token,
          this._file,
          this._isAutoSave
        )
          .then((t) => {
            e(t.data);
          })
          .catch(t);
      }),
      (b.Item.prototype.supportsSharing = function () {
        let exports = true;
        return this._id || (exports = false), exports;
      }),
      (b.Item.prototype._canPerformExtensionSpecificWrite = function () {
        return false;
      }),
      (b.Item.prototype._performExtensionSpecificWrite = async function () {}),
      (b.Item.prototype._syncPreviewThumbnailWithCloud = async function (e) {
        if (e)
          try {
            const t = await c.default.fromBlob(e);
            await this._uploadThumbnail(t, false);
          } catch (e) {
            console.warn(
              "GCloudStorage.Item.prototype._performDefaultWrite",
              "_uploadThumbnail",
              e
            );
          }
      }),
      (b.Item.prototype._performDefaultWrite = async function (e, t, n, _interopRequireDefault, GCore) {
        e.updateStatus(h.Saving);
        const GSystemDialog = (e) => {
          _interopRequireDefault && _interopRequireDefault(e);
        };
        return p
          .syncCloudImages(e, this._id, GCore, (e) => {
            GSystemDialog(
              d.default.calculateProgress(
                b.ProgressStages.Preparing,
                b.ProgressStages.SyncingImages,
                e
              )
            );
          })
          .then((_interopRequireDefault) => {
            let [c] = _interopRequireDefault;
            return (async () => {
              if (!c)
                return (
                  _({
                    message: "[cloud] scene is null",
                    stack: "id: ".concat(this._id, "\nscene: ").concat(c),
                  }),
                  (this._writing = false),
                  n && n("scene is null")
                );
              try {
                const u = v.gzip(c, { level: 9 }),
                  p = u.hasOwnProperty("size") ? u.size : u.length;
                if (p <= 0)
                  return (
                    _({
                      message: "[cloud] empty scene/blob",
                      stack: "id: ".concat(this._id, "\nscene: ").concat(c),
                    }),
                    (this._writing = false),
                    n && n("empty blob")
                  );
                const g = v.ungzip(u, { to: "string" });
                if ((this._verifyFileNotTooSmall(p, e), !g))
                  return (
                    _({
                      message: "[cloud] invalid Scene",
                      stack: "id: "
                        .concat(this._id, "\nscene original: ")
                        .concat(c, "\nscene parsed: ")
                        .concat(g),
                    }),
                    (this._writing = false),
                    n &&
                      n(
                        "Scene invalid, sending error, please try again or submit a bug issue on https://discuss.gravit.io"
                      )
                  );
                var _interopRequireDefault = Md5.base64(u);
                const m = await e.buildPreview().catch(() => null),
                  w = await AppSettings.gApi.signedPutUrls(this._id, {
                    type: f.type,
                    md5: _interopRequireDefault,
                    commit: false,
                  }),
                  C = await this._uploadWithProgress(w.url, {
                    method: "PUT",
                    headers: {
                      "Content-Type": f.type,
                      "Content-Encoding": "gzip",
                      "Cache-Control": "public,max-age=31536000",
                      "Content-MD5": _interopRequireDefault,
                    },
                    body: u,
                    onProgress: (e) => {
                      GSystemDialog(
                        d.default.calculateProgress(
                          b.ProgressStages.SyncingImages,
                          b.ProgressStages.UploadingFile,
                          e
                        )
                      );
                    },
                  });
                if (C.status >= 400)
                  return (
                    e.updateStatus(h.SaveFailed),
                    (this._writing = false),
                    400 === C.status
                      ? n &&
                        n(
                          "Invalid response, probably corrupted upload: " +
                            C.status
                        )
                      : n && n("Invalid response status: " + C.status)
                  );
                await this._syncPreviewThumbnailWithCloud(m);
                const x = AppSettings.COMPUTE_SHA256_FOR_FILES
                  ? await (0, CollaborationMergeUtils.getFileSHA256Digest)(u)
                  : null;
                await AppSettings.gApi.commitManualFileUpdate(this._id, [
                  AppSettings.FileTypes.MainFile,
                  AppSettings.FileTypes.ThumbnailPreview,
                ]),
                  await AppSettings.gApi.updateFile(this._id, { trashed: false, sha256: x }),
                  this.setVersionId(null),
                  gDesigner.hasEventListeners(r.default) &&
                    gDesigner.trigger(
                      new r.default(r.default.Type.VersionUpdate, this)
                    ),
                  e.updateStatus(h.Saved, GCore),
                  t && t(),
                  (this._writing = false);
              } catch (t) {
                (this._writing = false), e.updateStatus(h.SaveFailed), n && n(t);
              }
            })();
          })
          .catch((e) => {
            n(e), (this._writing = false);
          });
      }),
      (b.Item.prototype.write = async function (e, t, n, _interopRequireDefault, AppSettings) {
        if ((gContainer.verifyEnoughMemoryToSave(e), !this._writing)) {
          if (!e.hasPagesWithInfiniteEmptyCanvas()) {
            this._writing = true;
            try {
              await this._checkUserQuotaLimit();
            } catch (e) {
              return n && n(e), void (this._writing = false);
            }
            return this._canPerformExtensionSpecificWrite()
              ? this._performExtensionSpecificWrite(e, t, n, _interopRequireDefault, AppSettings)
              : this._performDefaultWrite(e, t, n, _interopRequireDefault, AppSettings);
          }
          n
            ? n({
                code: 507,
                noFailCall: true,
                message: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    "text.error-emtpy-infinite-canvas"
                  )
                ),
              })
            : GSystemDialog.default.alert(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    "text.error-emtpy-infinite-canvas"
                  )
                )
              );
        }
      }),
      (b.Item.prototype.createOrUpdateFileWithMetadata = async function (e, t) {
        if (!this._writing) {
          this._writing = true;
          try {
            await this._checkUserQuotaLimit(),
              await this._createFileInCaseNew(),
              await this._uploadBinary(e),
              await this._uploadThumbnail(t.thumbnail),
              await this._makeFileVisibleUpdateInternalVersionAndHash(e),
              await this._updateFileAfterSave();
          } finally {
            this._writing = false;
          }
        }
      }),
      (b.Item.prototype._makeFileVisibleUpdateInternalVersionAndHash =
        async function (e) {
          const module = AppSettings.COMPUTE_SHA256_FOR_FILES
              ? await (0, CollaborationMergeUtils.getFileSHA256Digest)(e)
              : null,
            require = { trashed: false };
          module && (require.sha256 = module);
          const _interopRequireDefault = await AppSettings.gApi.updateFile(this.getId(), require);
          this.setVersionId(_interopRequireDefault.versionId);
        }),
      (b.Item.prototype._updateFileAfterSave = async function () {
        const exports = await AppSettings.gApi.getFile(this._id);
        (this._fileLastModifiedDate = new Date(exports.updated)),
          (this._file = p.convertToCloudItem(exports));
      }),
      (b.Item.prototype._isNewFile = function () {
        return !this.getId();
      }),
      (b.Item.prototype._createFileInCaseNew = async function () {
        if (this._isNewFile()) {
          const e = await AppSettings.gApi.createFile({
              name: this.getName(),
              parent: this._file.getParentId(),
              type: this.getType(),
              app: "designer",
              trashed: null,
            }),
            t = await AppSettings.gApi.getFile(e.id, true);
          (this._id = this._file.id = e.id),
            (this._fileLastModifiedDate = new Date(t.updated || t.created)),
            this._file.setModificationTime(new Date(t.updated || t.created));
        }
      }),
      (b.Item.prototype._uploadBinary = async function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const require = Md5.base64(e),
          _interopRequireDefault = await AppSettings.gApi.signedPutUrls(this.getId(), {
            type: this.getType(),
            md5: require,
          }),
          GCore = await fetch(_interopRequireDefault.url, {
            method: "PUT",
            headers: Object.assign(
              {
                "Content-Type": this.getType(),
                "Cache-Control": "public,max-age=31536000",
                "Content-MD5": require,
              },
              module
            ),
            body: e,
          });
        if (GCore.status >= 400) {
          if (400 === GCore.status)
            throw new Error(
              "Invalid response, probably corrupted upload: " + GCore.status
            );
          throw new Error("Invalid response status: " + GCore.status);
        }
      }),
      (b.Item.prototype._uploadThumbnail = async function (e, t) {
        if (e)
          return p.updateFileThumbnail(
            this.getId(),
            e.getImageAsBlob(),
            e.getMimeType(),
            t
          );
      }),
      (b.Item.prototype._checkUserQuotaLimit = async function () {
        const { pro: exports, free: module } = gDesigner.getLicense().getQuotas(),
          require = gDesigner.isEnabledProFeatures() ? exports : module;
        if (require > 0) {
          if ((await AppSettings.gApi.quota()) > require) {
            const e = new Error(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GCommonNames",
                  "text.running-out-of-cloud-space"
                )
              )
            );
            throw ((e.code = 507), e);
          }
        }
      }),
      require(1100) /* CommercialProduct */(b),
      (b.Item.prototype.getUniqueId = function () {
        return this._id;
      }),
      (b.Item.prototype.hasUpdates = async function () {
        if (!this.getUniqueId()) return false;
        let exports = await this.getLatestFileInfo();
        const module = exports.getModificationTime() || exports.updated || exports.created,
          require =
            this._file.getModificationTime() ||
            this._file.updated ||
            this._file.created;
        (this._fileLastModifiedDate &&
          !isNaN(this._fileLastModifiedDate.getTime())) ||
          (this._fileLastModifiedDate = new Date(require)),
          (this._fileAutoSaveLastModifiedDate &&
            !isNaN(this._fileAutoSaveLastModifiedDate.getTime())) ||
            (this._fileAutoSaveLastModifiedDate = new Date(
              this._file.autosave_updated
            ));
        return (
          (exports.autosave
            ? Math.max(
                new Date(module).getTime(),
                new Date(exports.autosave_updated).getTime()
              )
            : new Date(module).getTime()) >
          (this._file.autosave
            ? Math.max(
                this._fileLastModifiedDate.getTime(),
                this._fileAutoSaveLastModifiedDate.getTime()
              )
            : this._fileLastModifiedDate.getTime())
        );
      }),
      (b.Item.prototype.getLatestFileInfo = async function () {
        const exports = await gDesigner
          .getCloudCommunicationManager()
          .getFile(this._id);
        return p.convertToCloudItem(exports);
      }),
      (b.Item.prototype.exists = async function () {
        return p.fileExists(this._id);
      }),
      (b.Item.prototype._uploadWithProgress = function (e, t) {
        return new Promise((n, _interopRequireDefault) => {
          const GCore = new XMLHttpRequest();
          if ((GCore.open(t.method || "PUT", e), t.headers))
            for (let e in t.headers) GCore.setRequestHeader(e, t.headers[e]);
          (GCore.onload = () => n(GCore)),
            (GCore.onerror = () => _interopRequireDefault(GCore)),
            GCore.upload &&
              t.onProgress &&
              (GCore.upload.onprogress = (e) => {
                t.onProgress(e.loaded / e.total);
              }),
            GCore.send(t.body);
        });
      }),
      (exports.exports = b);
  }