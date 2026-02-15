/**
 * Webpack Module #556
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(30) /* polyfill_Object_assign */,
      require(57) /* polyfill_parseInt */,
      require(8) /* polyfill_bundle_ES6 */,
      require(196) /* polyfill_Promise_finally */,
      require(356) /* module_356 */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(34) /* polyfill_String_replace */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(97) /* stub_requires_684 */;
    var i = require(1) /* module */,
      a = require(40) /* CollaborationMergeUtils */,
      r = o(require(847) /* module_847 */),
      s = o(require(848) /* GoogleDriveException */),
      l = o(require(44) /* GSystemDialog */),
      c = require(10) /* AppSettings */,
      d = o(require(787) /* Exports_GoogleToCloudRoleMap */),
      u = o(require(789) /* Exports_NoAccessId */),
      p = o(require(555) /* module_555 */);
    const g = require(388) /* Item */,
      h = require(119) /* module_119 */,
      f = require(595) /* module_595 */,
      m = require(336) /* module_336 */,
      y = require(436) /* module_436 */,
      v = require(78) /* GDocumentEvent */,
      _ = require(156) /* module_156 */,
      b = require(389) /* module_389 */,
      w = require(86) /* module_86 */,
      C = require(790) /* module_790 */,
      x = require(554) /* module_554 */,
      { FILE_FORMATS: S } = require(10) /* AppSettings */,
      E = Object.values(S).find((e) => e.default),
      A = 10,
      T = 50,
      G = 80,
      P = 100;
    function D() {}
    i.GObject.inherit(D, g),
      (D.getSupportedFileFormats = function () {
        return b.getFileTypesArray().filter((e) => e.load);
      }),
      (D.convertToCloudItem = function (e) {
        var t = _.from(e);
        if (
          ((t.updated = e.modifiedTime),
          (t.created = e.createdTime),
          (t.storage = _.Storage.GoogleDrive),
          !t.kind ||
          (t.kind !== s.default.Kind.TeamDrive &&
            t.kind !== s.default.Kind.Drive)
            ? t.mimeType === s.default.MimeType.Folder
              ? t.setItemType(_.Type.Folder)
              : (t.setItemType(_.Type.File),
                t.setVersion(e.version),
                t.setModificationTime(e.modifiedTime))
            : t.setItemType(_.Type.CorporateStorage),
          t.mimeType && (t.type = t.mimeType),
          t.fileExtension)
        ) {
          (t.extension = t.fileExtension),
            (t.name = e.name.replace(
              new RegExp(".(".concat(t.extension, ")$"), "i"),
              ""
            ));
          const n = D.getSupportedFileFormats().find(
            (e) => e.ext.toLowerCase() === t.fileExtension.toLowerCase()
          );
          n && ((t.type = n.type || n.mime), t.setMimeType(t.type));
        }
        return (
          t.capabilities &&
            (t.capabilities.canDownload &&
              (t.setPermission(_.Permission.Download),
              t.setPermission(_.Permission.Open)),
            t.capabilities.canEdit && t.setPermission(_.Permission.Editing)),
          t.parent || (t.parent = null),
          t.hasThumbnail && t.setPreviewURL(t.thumbnailLink),
          t.size && t.setSize(t.size),
          t
        );
      }),
      (D.Item = function (e, t, n) {
        let o =
          arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : null;
        g.Item.call(this, e, t),
          (this._rawData = n),
          (this._token = o),
          t && (this._setExtension(), t.version && (this._version = t.version));
      }),
      i.GObject.inheritAndMix(D.Item, g.Item, [y]),
      (D.Item.prototype._version = null),
      (D.Item.prototype._writing = false),
      (D.Item.prototype.setFile = function (e) {
        if (!e) throw "File is incorrect";
        e instanceof _ || (e = D.convertToCloudItem(e));
        const module = this._getOrCreateClient(),
          require = module && module.getTokenIssuerSettings();
        !e.settings && require && (e = Object.assign(e, { settings: require })),
          g.Item.prototype.setFile.call(this, e),
          this._setExtension(),
          this._setVersion(e.version);
      }),
      (D.Item.prototype.isVersionNewerThan = function (e) {
        if (e instanceof D.Item && this.getUniqueId() === e.getUniqueId()) {
          var module = this.getVersion() > e.getVersion(),
            require = e.getFile();
          const i = this.getFile();
          if (module && o(i.modifiedTime, require.modifiedTime)) return true;
          const a = i.getVersion() > require.getVersion(),
            r = o(i.getModificationTime(), require.getModificationTime());
          if (a && r) return true;
        }
        return false;
        function o(e, t) {
          return new Date(e).getTime() > new Date(t).getTime();
        }
      }),
      (D.Item.prototype.supportsShadowFile = function () {
        const exports = this._getOrCreateClient();
        return !!exports && exports.isCorporate();
      }),
      (D.Item.prototype.getCollaborativeFile = async function () {
        if (!this.supportsShadowFile()) throw "Not the collaborative mode";
        return (
          (this._collaborativeFile = await gDesigner
            .getCloudCommunicationManager()
            .getExternalFile(this.getId())
            .catch(() => null)),
          this._collaborativeFile
        );
      }),
      (D.Item.prototype.setCollaborativeFileStatus = async function (e) {
        if (!this.supportsShadowFile()) throw "Not the collaborative mode";
        const module = this._collaborativeFile
          ? this._collaborativeFile
          : await this.getCollaborativeFile();
        if (module && Number(module.status) !== Number(e)) {
          var require = module.status;
          (module.status = e),
            gDesigner.hasEventListeners(m.FileStatusUpdate) &&
              gDesigner.trigger(new m.FileStatusUpdate(this, require, e));
        }
      }),
      (D.Item.prototype.getOrCreateCollaborativeFile = async function () {
        if (!this.supportsShadowFile()) throw "Not the collaborative mode";
        var e = await this.getCollaborativeFile();
        return (
          e ||
            (await this.createShadowFile(),
            (e = await this.getCollaborativeFile())),
          e
        );
      }),
      (D.Item.prototype._app = c.FILE_ID_PREFIX.GOOGLEDRIVE),
      (D.Item.prototype.getId = function () {
        const exports = this._getGoogleId();
        return exports ? _.getCollaborativeFileId(exports, _.Storage.GoogleDrive) : null;
      }),
      (D.Item.prototype._getGoogleId = function () {
        return this._id || null;
      }),
      (D.Item.prototype._setExtension = function () {
        const exports = this.getFile();
        exports &&
          (exports.fileExtension
            ? (this._ext = exports.fileExtension)
            : ["application/vnd.corel-draw", "application/cdr"].includes(
                exports.mimeType
              )
            ? (this._ext = "CDR")
            : "application/des" === exports.mimeType && (this._ext = "DES"));
      }),
      (D.Item.prototype._setFileSizeAfterSaved = async function () {
        return this._getOrCreateClient()
          .getFileDetails(this.getUniqueId())
          .then((e) => {
            this._fileSizeAfterSaved = e.Length;
          });
      }),
      (D.Item.prototype.write = async function (e, t, n, o, a) {
        gContainer.verifyEnoughMemoryToSave(e);
        try {
          if (this._writing) return;
          if (e.hasPagesWithInfiniteEmptyCanvas())
            return void (n
              ? n({
                  code: 507,
                  noFailCall: true,
                  message: i.GLocale.get(
                    new i.GLocaleKey(
                      "GCommonNames",
                      "text.error-emtpy-infinite-canvas"
                    )
                  ),
                })
              : l.default.alert(
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GCommonNames",
                      "text.error-emtpy-infinite-canvas"
                    )
                  )
                ));
          this._writing = true;
          const h = e.getEditor().markSavePoint(),
            f = (e) => {
              h.rollback(), n && n(e);
            };
          try {
            const n = {};
            e.updateStatus(w.Saving, n);
            const l = o || n.progress,
              h = (e) => {
                l && l(e);
              };
            let m;
            var r = this.getExtension();
            const y = e.isNew();
            if (
              (h(A),
              i.GUtil.prepareForSaving(e.getScene(), r),
              "CDR" === r || "DES" === r)
            ) {
              var c = { progress: o, ext: r.toLowerCase() };
              m = await this._exportDocumentToCDR(e, c, a);
            } else {
              var d = e.getScene(),
                u = i.GNode.serialize(d, i.GUtil.extend({ save: true }, a));
              m = new Blob([u]);
            }
            h(T),
              this._verifyFileNotTooSmall(m.size, e),
              this._setFileSizeBeforeSaved(m.size);
            const _ = await this._buildGoogleMetadataForDoc(e),
              b = (e) => {
                h(p.default.calculateProgress(T, G, e));
              };
            var g = this._id ? this._id : null;
            await this._getOrCreateClient()
              .upload(g, m, _, s.default.DefaultUploadType, b)
              .then(async (n) => {
                this._updateInternalFileWithGoogleResponse(n);
                try {
                  await this._setFileSizeAfterSaved(),
                    this._verifyFileSizeAfterSaved();
                } catch (e) {
                  console.error(e);
                }
                if ((e.updateStatus(w.Saved), y && this.supportsShadowFile()))
                  return this.createShadowFile().then(() => {
                    gDesigner.hasEventListeners(v) &&
                      gDesigner.trigger(new v(v.Type.StorageItemUpdated, e)),
                      t && t();
                  });
                gDesigner.hasEventListeners(v) &&
                  gDesigner.trigger(new v(v.Type.StorageItemUpdated, e)),
                  h(P),
                  t && t();
              })
              .catch((t) => {
                e.updateStatus(w.SaveFailed), f(t);
              })
              .finally(() => {
                this._writing = false;
              });
          } catch (e) {
            f(e);
          }
        } catch (t) {
          return e.updateStatus(w.SaveFailed), (this._writing = false), n && n(t);
        }
      }),
      (D.Item.prototype.createOrUpdateFileWithMetadata = async function (e, t) {
        try {
          if (this._writing) return;
          this._writing = true;
          const n = await this._buildGoogleMetadata(t),
            o = await this._getOrCreateClient().upload(
              this._getGoogleId(),
              new Blob([e]),
              n
            );
          this._updateInternalFileWithGoogleResponse(o);
        } finally {
          this._writing = false;
        }
      }),
      (D.Item.prototype._updateInternalFileWithGoogleResponse = function (e) {
        this.setFile(
          Object.assign(D.convertToCloudItem(e), {
            settings: this._getOrCreateClient().getTokenIssuerSettings(),
          })
        );
      }),
      (D.Item.prototype._getOrCreateClient = function () {
        let exports = this.getCloudClient();
        return (
          !exports &&
            this._file &&
            ((exports = new s.default(new f(this._file.settings))),
            this.setCloudClient(exports)),
          exports
        );
      }),
      (D.Item.prototype._getClient = function () {
        return this._getOrCreateClient();
      }),
      (D.Item.prototype._exportDocumentToCDR = function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        return new Promise(async (o, i) => {
          r.default.prepareCDRforSaving(
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
      (D.Item.prototype._setVersion = function (e) {
        this._version = e;
      }),
      (D.Item.prototype.getVersion = function () {
        return parseInt(this._version);
      }),
      (D.Item.prototype.read = async function (e, t) {
        if (this._rawData) {
          var require = this._rawData;
          return (this._rawData = null), e(require);
        }
        await this._getOrCreateClient()
          .getFile(this.getUniqueId(), this._getQuery())
          .then(async (t) => {
            const require = await this._getOrCreateClient().getFileDetails(
              this.getUniqueId(),
              this._getQuery()
            );
            this.setFile(require),
              this.supportsShadowFile() && (await this.syncShadowFile()),
              e(await h.createUint8ArrayFromBlob(t));
          })
          .catch((e) => t(e));
      }),
      (D.Item.prototype.getToken = function () {
        return this._token;
      }),
      (D.Item.prototype.getMimeType = function () {
        return this.getFile().mimeType;
      }),
      (D.Item.prototype.getPermissionsList = function () {
        return this._getOrCreateClient().getFilePermissions(this.getUniqueId());
      }),
      (D.Item.prototype.rolesMatch = function (e, t) {
        return d.default[e] === t || u.default[t] === e;
      }),
      (D.Item.prototype.getShareRole = async function (e) {
        return this._getOrCreateClient()
          .getFilePermissions(this.getUniqueId())
          .then((t) => {
            let require = null;
            return (
              t &&
                t.permissions &&
                t.permissions.length &&
                t.permissions.some((t) => {
                  let { email: o, role: i } = t;
                  if (e === o) return (require = i), true;
                }),
              require
            );
          });
      }),
      (D.Item.prototype.requestExternalShare = function (e, t) {
        let require = false;
        try {
          require = this._getOrCreateClient().isCorporate();
        } catch (e) {}
        return require
          ? e
            ? this._shareWithUser(e, t.getRole())
            : this._shareWithDomain(t.getRole())
          : Promise.reject(
              i.GLocale.get(
                new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
              )
            );
      }),
      (D.Item.prototype.requestExternalUnShare = async function (e, t) {
        let require = false;
        try {
          require = this._getOrCreateClient().isCorporate();
        } catch (e) {}
        if (!require)
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
            )
          );
        if (t && t.is(c.ShareRoles.NoAccess)) return Promise.resolve();
        const o = await this._getOrCreateClient().getShareIdForEmail(
          this.getUniqueId(),
          e
        );
        for (let e = 0, t = o.length; e < t; e++)
          try {
            const t = await this._getOrCreateClient().removeShare(
              this.getUniqueId(),
              o[e]
            );
            if (
              t.status !== c.gApi.HTTP_STATUS_CODES.OK &&
              t.status !== c.gApi.HTTP_STATUS_CODES.NO_CONTENT
            ) {
              const e =
                (t && t.error && t.error.message) ||
                i.GLocale.get(
                  new i.GLocaleKey("GGoogleDrive", "error.google-api-error")
                );
              return Promise.reject(e);
            }
          } catch (e) {
            return Promise.reject(e);
          }
        return Promise.resolve();
      }),
      (D.Item.prototype._shareWithUser = async function (e, t) {
        return this._getOrCreateClient().createOrUpdateUserShare(
          this.getUniqueId(),
          { role: t, emailAddress: e }
        );
      }),
      (D.Item.prototype.isEmailFromCorporateDomain = async function (e) {
        const module = gDesigner.getSyncUser();
        let require = true;
        if (await this._getOrCreateClient().supportsEmailDomainCheck()) {
          (await this._getOrCreateClient()
            .getAccountByEmail(e)
            .catch(() => false)) || (require = false);
        } else c.gApi.sameDomain(module, { email: e }) || (require = false);
        return require;
      }),
      (D.Item.prototype._shareWithDomain = async function (e) {
        const module = await gDesigner.getUser(),
          require = module && module.email.split("@")[1];
        return this._getOrCreateClient().createDomainShare(this.getUniqueId(), {
          role: e,
          domain: require,
        });
      }),
      (D.Item.prototype._setId = function (e) {
        (this._id = e), this._file && (this._file.id = e);
      }),
      (D.Item.prototype._buildGoogleMetadataForDoc = async function (e) {
        const module = new C();
        module.thumbnail = await x.fromBlob(await e.buildPreview());
        const require = e.getScene();
        module.unit = require.getProperty("ut");
        const o = require.getActivePage(),
          i = o && o.getGeometryBBox();
        return (
          i && ((module.width = i.getWidth()), (module.height = i.getHeight())),
          this._buildGoogleMetadata(module)
        );
      }),
      (D.Item.prototype._buildGoogleMetadata = async function (e) {
        const module = this._file.getExtension() || E.ext.toUpperCase(),
          require =
            this._file.getMimeType() ||
            ((o = module),
            Object.values(S).find((e) => {
              let { ext: module } = e;
              return !!module && module.toLowerCase() === o.toLowerCase();
            }) || E).type;
        var o;
        const i = e.thumbnail.getImageAsBlob(),
          a = await this._buildSafeEncodedBase64ForBlob(i),
          r = {
            name: this._file.getNameWithExtension(),
            mimeType: require,
            contentHints: {
              thumbnail: { mimeType: e.thumbnail.getMimeType(), image: a },
            },
            appProperties: {
              type: require,
              app: "designer",
              unit: e.unit,
              width: e.width,
              height: e.height,
              trashed: null,
            },
            viewedByMeTime: new Date().toISOString(),
          };
        return (
          this._file.parent &&
            !this.getUniqueId() &&
            (r.parents = [this._file.getParentId()]),
          this._isFromGSuite() && (r.driveId = this._getTeamDriveId()),
          r
        );
      }),
      (D.Item.prototype._buildSafeEncodedBase64ForBlob = function (e) {
        return new Promise((t, n) => {
          const o = new FileReader();
          (o.onload = (e) => {
            const n = e.target.result,
              o = n.substr(n.indexOf(",") + 1),
              i = (0, a.base64URLSafeEncode)(o);
            t(i);
          }),
            (o.onerror = function () {
              n(o.error);
            }),
            o.readAsDataURL(e);
        });
      }),
      (D.Item.prototype.hasVersionControl = function () {
        return true;
      }),
      (D.Item.prototype.hasUpdates = async function () {
        if (!this.getUniqueId() || !this.getVersion()) return false;
        const exports = await this._getOrCreateClient().getFileDetails(
          this.getUniqueId(),
          this._getQuery()
        );
        return new D.Item(this.getStorage(), exports).isVersionNewerThan(this);
      }),
      (D.Item.prototype._getQuery = function () {
        return this._isFromGSuite() ? { supportsAllDrives: true } : {};
      }),
      (D.Item.prototype._isFromGSuite = function () {
        return !!this._getTeamDriveId();
      }),
      (D.Item.prototype._getTeamDriveId = function () {
        const exports = this._file.driveId;
        if (exports) return exports;
        const module = this._file.parent && this._file.parent.driveId;
        return module || null;
      }),
      (D.Item.prototype.getLatestFileVersion = async function () {
        const exports = this._getOrCreateClient(),
          module = await this.getLatestFileInfo(),
          require = await exports.getFile(this.getUniqueId(), this._getQuery()),
          o = await h.createUint8ArrayFromBlob(require),
          i = new D.Item(this._storage, module, o);
        return i.setCloudClient(exports), i;
      }),
      (D.Item.prototype.getLatestFileInfo = async function () {
        const exports = await this._getOrCreateClient().getFileDetails(
          this.getUniqueId(),
          this._getQuery()
        );
        return D.convertToCloudItem(exports);
      }),
      (D.Item.prototype.exists = function () {
        return this._getOrCreateClient().fileExists(
          this.getUniqueId(),
          this._getQuery()
        );
      }),
      (D.Item.prototype.toString = function () {
        return "[Object GGoogleDriveStorage.Item]";
      }),
      (exports.exports = D);
  }