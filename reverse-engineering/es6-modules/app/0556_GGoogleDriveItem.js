/**
 * Webpack Module #556
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(58) /* polyfill_Array_includes */,
    require(30) /* polyfill_Object_assign */,
    require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(196) /* polyfill_Promise_finally */,
    require(356) /* polyfill_RegExp_constructor */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(97)) /* stub_requires_684 */;
  var GCore = require(1) /* GCore */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    r = _interopRequireDefault(require(847) /* module_847 */),
    GoogleDriveException = _interopRequireDefault(require(848) /* GoogleDriveException */),
    GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
    AppSettings = require(10) /* AppSettings */,
    GoogleToCloudRoleMap = _interopRequireDefault(require(787) /* Exports_GoogleToCloudRoleMap */),
    NoAccessId = _interopRequireDefault(require(789) /* Exports_NoAccessId */),
    p = _interopRequireDefault(require(555) /* module_555 */);
  const g = require(388) /* Item */,
    GCloudStorage = require(119) /* GCloudStorage */,
    f = require(595) /* module_595 */,
    GEvent_storageItem = require(336) /* GEvent_storageItem */,
    DataModule_436 = require(436) /* DataModule_436 */,
    GDocumentEvent = require(78) /* GDocumentEvent */,
    GCloudStorageItem = require(156) /* GCloudStorageItem */,
    GDocument_389 = require(389) /* GDocument_389 */,
    w = require(86) /* module_86 */,
    C = require(790) /* module_790 */,
    x = require(554) /* module_554 */,
    { FILE_FORMATS: S } = require(10) /* AppSettings */,
    E = Object.values(S).find((e) => e.default),
    A = 10,
    T = 50,
    G = 80,
    P = 100;
  class D extends g {
    constructor() {
      super();
    }

    static getSupportedFileFormats() {
      return GDocument_389.getFileTypesArray().filter((e) => e.load);
    }

    static convertToCloudItem(e) {
      var t = GCloudStorageItem.from(e);
      if (
        ((t.updated = e.modifiedTime),
        (t.created = e.createdTime),
        (t.storage = GCloudStorageItem.Storage.GoogleDrive),
        !t.kind ||
        (t.kind !== GoogleDriveException.default.Kind.TeamDrive &&
          t.kind !== GoogleDriveException.default.Kind.Drive)
          ? t.mimeType === GoogleDriveException.default.MimeType.Folder
            ? t.setItemType(GCloudStorageItem.Type.Folder)
            : (t.setItemType(GCloudStorageItem.Type.File),
              t.setVersion(e.version),
              t.setModificationTime(e.modifiedTime))
          : t.setItemType(GCloudStorageItem.Type.CorporateStorage),
        t.mimeType && (t.type = t.mimeType),
        t.fileExtension)
      ) {
        ((t.extension = t.fileExtension),
          (t.name = e.name.replace(new RegExp('.('.concat(t.extension, ')$'), 'i'), '')));
        const n = D.getSupportedFileFormats().find(
          (e) => e.ext.toLowerCase() === t.fileExtension.toLowerCase()
        );
        n && ((t.type = n.type || n.mime), t.setMimeType(t.type));
      }
      return (
        t.capabilities &&
          (t.capabilities.canDownload &&
            (t.setPermission(GCloudStorageItem.Permission.Download),
            t.setPermission(GCloudStorageItem.Permission.Open)),
          t.capabilities.canEdit && t.setPermission(GCloudStorageItem.Permission.Editing)),
        t.parent || (t.parent = null),
        t.hasThumbnail && t.setPreviewURL(t.thumbnailLink),
        t.size && t.setSize(t.size),
        t
      );
    }

    static Item(e, t, n) {
      let _interopRequireDefault =
        arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : null;
      (g.Item.call(this, e, t),
        (this._rawData = n),
        (this._token = _interopRequireDefault),
        t && (this._setExtension(), t.version && (this._version = t.version)));
    }

  }
  (GCore.GObject.inheritAndMix(D.Item, g.Item, [DataModule_436]),
    D.Item.prototype._version = null,
    D.Item.prototype._writing = false,
    D.Item.prototype.setFile = function (e) {
      if (!e) throw 'File is incorrect';
      e instanceof GCloudStorageItem || (e = D.convertToCloudItem(e));
      const module = this._getOrCreateClient(),
        require = module && module.getTokenIssuerSettings();
      (!e.settings && require && (e = Object.assign(e, { settings: require })),
        g.Item.prototype.setFile.call(this, e),
        this._setExtension(),
        this._setVersion(e.version));
    },
    D.Item.prototype.isVersionNewerThan = function (e) {
      if (e instanceof D.Item && this.getUniqueId() === e.getUniqueId()) {
        var module = this.getVersion() > e.getVersion(),
          require = e.getFile();
        const GCore = this.getFile();
        if (module && _interopRequireDefault(GCore.modifiedTime, require.modifiedTime)) return true;
        const CollaborationMergeUtils = GCore.getVersion() > require.getVersion(),
          r = _interopRequireDefault(GCore.getModificationTime(), require.getModificationTime());
        if (CollaborationMergeUtils && r) return true;
      }
      return false;
      function _interopRequireDefault(e, t) {
        return new Date(e).getTime() > new Date(t).getTime();
      }
    },
    D.Item.prototype.supportsShadowFile = function () {
      const exports = this._getOrCreateClient();
      return !!exports && exports.isCorporate();
    },
    D.Item.prototype.getCollaborativeFile = async function () {
      if (!this.supportsShadowFile()) throw 'Not the collaborative mode';
      return (
        (this._collaborativeFile = await gDesigner
          .getCloudCommunicationManager()
          .getExternalFile(this.getId())
          .catch(() => null)),
        this._collaborativeFile
      );
    },
    D.Item.prototype.setCollaborativeFileStatus = async function (e) {
      if (!this.supportsShadowFile()) throw 'Not the collaborative mode';
      const module = this._collaborativeFile
        ? this._collaborativeFile
        : await this.getCollaborativeFile();
      if (module && Number(module.status) !== Number(e)) {
        var require = module.status;
        ((module.status = e),
          gDesigner.hasEventListeners(GEvent_storageItem.FileStatusUpdate) &&
            gDesigner.trigger(new GEvent_storageItem.FileStatusUpdate(this, require, e)));
      }
    },
    D.Item.prototype.getOrCreateCollaborativeFile = async function () {
      if (!this.supportsShadowFile()) throw 'Not the collaborative mode';
      var e = await this.getCollaborativeFile();
      return (e || (await this.createShadowFile(), (e = await this.getCollaborativeFile())), e);
    },
    D.Item.prototype._app = AppSettings.FILE_ID_PREFIX.GOOGLEDRIVE,
    D.Item.prototype.getId = function () {
      const exports = this._getGoogleId();
      return exports
        ? GCloudStorageItem.getCollaborativeFileId(exports, GCloudStorageItem.Storage.GoogleDrive)
        : null;
    },
    D.Item.prototype._getGoogleId = function () {
      return this._id || null;
    },
    D.Item.prototype._setExtension = function () {
      const exports = this.getFile();
      exports &&
        (exports.fileExtension
          ? (this._ext = exports.fileExtension)
          : ['application/vnd.corel-draw', 'application/cdr'].includes(exports.mimeType)
            ? (this._ext = 'CDR')
            : 'application/des' === exports.mimeType && (this._ext = 'DES'));
    },
    D.Item.prototype._setFileSizeAfterSaved = async function () {
      return this._getOrCreateClient()
        .getFileDetails(this.getUniqueId())
        .then((e) => {
          this._fileSizeAfterSaved = e.Length;
        });
    },
    D.Item.prototype.write = async function (
      e,
      t,
      n,
      _interopRequireDefault,
      CollaborationMergeUtils
    ) {
      gContainer.verifyEnoughMemoryToSave(e);
      try {
        if (this._writing) return;
        if (e.hasPagesWithInfiniteEmptyCanvas())
          return void (n
            ? n({
                code: 507,
                noFailCall: true,
                message: GCore.GLocale.get(
                  new GCore.GLocaleKey('GCommonNames', 'text.error-emtpy-infinite-canvas')
                ),
              })
            : GSystemDialog.default.alert(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCommonNames', 'text.error-emtpy-infinite-canvas')
                )
              ));
        this._writing = true;
        const GCloudStorage = e.getEditor().markSavePoint(),
          f = (e) => {
            (GCloudStorage.rollback(), n && n(e));
          };
        try {
          const n = {};
          e.updateStatus(w.Saving, n);
          const GSystemDialog = _interopRequireDefault || n.progress,
            GCloudStorage = (e) => {
              GSystemDialog && GSystemDialog(e);
            };
          let GEvent_storageItem;
          var r = this.getExtension();
          const DataModule_436 = e.isNew();
          if (
            (GCloudStorage(A),
            GCore.GUtil.prepareForSaving(e.getScene(), r),
            'CDR' === r || 'DES' === r)
          ) {
            var AppSettings = { progress: _interopRequireDefault, ext: r.toLowerCase() };
            GEvent_storageItem = await this._exportDocumentToCDR(
              e,
              AppSettings,
              CollaborationMergeUtils
            );
          } else {
            var GoogleToCloudRoleMap = e.getScene(),
              NoAccessId = GCore.GNode.serialize(
                GoogleToCloudRoleMap,
                GCore.GUtil.extend({ save: true }, CollaborationMergeUtils)
              );
            GEvent_storageItem = new Blob([NoAccessId]);
          }
          (GCloudStorage(T),
            this._verifyFileNotTooSmall(GEvent_storageItem.size, e),
            this._setFileSizeBeforeSaved(GEvent_storageItem.size));
          const GCloudStorageItem = await this._buildGoogleMetadataForDoc(e),
            GDocument_389 = (e) => {
              GCloudStorage(p.default.calculateProgress(T, G, e));
            };
          var g = this._id ? this._id : null;
          await this._getOrCreateClient()
            .upload(
              g,
              GEvent_storageItem,
              GCloudStorageItem,
              GoogleDriveException.default.DefaultUploadType,
              GDocument_389
            )
            .then(async (n) => {
              this._updateInternalFileWithGoogleResponse(n);
              try {
                (await this._setFileSizeAfterSaved(), this._verifyFileSizeAfterSaved());
              } catch (e) {
                console.error(e);
              }
              if ((e.updateStatus(w.Saved), DataModule_436 && this.supportsShadowFile()))
                return this.createShadowFile().then(() => {
                  (gDesigner.hasEventListeners(GDocumentEvent) &&
                    gDesigner.trigger(
                      new GDocumentEvent(GDocumentEvent.Type.StorageItemUpdated, e)
                    ),
                    t && t());
                });
              (gDesigner.hasEventListeners(GDocumentEvent) &&
                gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.StorageItemUpdated, e)),
                GCloudStorage(P),
                t && t());
            })
            .catch((t) => {
              (e.updateStatus(w.SaveFailed), f(t));
            })
            .finally(() => {
              this._writing = false;
            });
        } catch (e) {
          f(e);
        }
      } catch (t) {
        return (e.updateStatus(w.SaveFailed), (this._writing = false), n && n(t));
      }
    },
    D.Item.prototype.createOrUpdateFileWithMetadata = async function (e, t) {
      try {
        if (this._writing) return;
        this._writing = true;
        const n = await this._buildGoogleMetadata(t),
          _interopRequireDefault = await this._getOrCreateClient().upload(
            this._getGoogleId(),
            new Blob([e]),
            n
          );
        this._updateInternalFileWithGoogleResponse(_interopRequireDefault);
      } finally {
        this._writing = false;
      }
    },
    D.Item.prototype._updateInternalFileWithGoogleResponse = function (e) {
      this.setFile(
        Object.assign(D.convertToCloudItem(e), {
          settings: this._getOrCreateClient().getTokenIssuerSettings(),
        })
      );
    },
    D.Item.prototype._getOrCreateClient = function () {
      let exports = this.getCloudClient();
      return (
        !exports &&
          this._file &&
          ((exports = new GoogleDriveException.default(new f(this._file.settings))),
          this.setCloudClient(exports)),
        exports
      );
    },
    D.Item.prototype._getClient = function () {
      return this._getOrCreateClient();
    },
    D.Item.prototype._exportDocumentToCDR = function (e, t) {
      let require = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      return new Promise(async (_interopRequireDefault, GCore) => {
        r.default.prepareCDRforSaving(
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
    },
    D.Item.prototype._setVersion = function (e) {
      this._version = e;
    },
    D.Item.prototype.getVersion = function () {
      return parseInt(this._version);
    },
    D.Item.prototype.read = async function (e, t) {
      if (this._rawData) {
        var require = this._rawData;
        return ((this._rawData = null), e(require));
      }
      await this._getOrCreateClient()
        .getFile(this.getUniqueId(), this._getQuery())
        .then(async (t) => {
          const require = await this._getOrCreateClient().getFileDetails(
            this.getUniqueId(),
            this._getQuery()
          );
          (this.setFile(require),
            this.supportsShadowFile() && (await this.syncShadowFile()),
            e(await GCloudStorage.createUint8ArrayFromBlob(t)));
        })
        .catch((e) => t(e));
    },
    D.Item.prototype.getToken = function () {
      return this._token;
    },
    D.Item.prototype.getMimeType = function () {
      return this.getFile().mimeType;
    },
    D.Item.prototype.getPermissionsList = function () {
      return this._getOrCreateClient().getFilePermissions(this.getUniqueId());
    },
    D.Item.prototype.rolesMatch = function (e, t) {
      return GoogleToCloudRoleMap.default[e] === t || NoAccessId.default[t] === e;
    },
    D.Item.prototype.getShareRole = async function (e) {
      return this._getOrCreateClient()
        .getFilePermissions(this.getUniqueId())
        .then((t) => {
          let require = null;
          return (
            t &&
              t.permissions &&
              t.permissions.length &&
              t.permissions.some((t) => {
                let { email: _interopRequireDefault, role: GCore } = t;
                if (e === _interopRequireDefault) return ((require = GCore), true);
              }),
            require
          );
        });
    },
    D.Item.prototype.requestExternalShare = function (e, t) {
      let require = false;
      try {
        require = this._getOrCreateClient().isCorporate();
      } catch (e) {}
      return require
        ? e
          ? this._shareWithUser(e, t.getRole())
          : this._shareWithDomain(t.getRole())
        : Promise.reject(
            GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
          );
    },
    D.Item.prototype.requestExternalUnShare = async function (e, t) {
      let require = false;
      try {
        require = this._getOrCreateClient().isCorporate();
      } catch (e) {}
      if (!require)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
        );
      if (t && t.is(AppSettings.ShareRoles.NoAccess)) return Promise.resolve();
      const _interopRequireDefault = await this._getOrCreateClient().getShareIdForEmail(
        this.getUniqueId(),
        e
      );
      for (let e = 0, t = _interopRequireDefault.length; e < t; e++)
        try {
          const t = await this._getOrCreateClient().removeShare(
            this.getUniqueId(),
            _interopRequireDefault[e]
          );
          if (
            t.status !== AppSettings.gApi.HTTP_STATUS_CODES.OK &&
            t.status !== AppSettings.gApi.HTTP_STATUS_CODES.NO_CONTENT
          ) {
            const e =
              (t && t.error && t.error.message) ||
              GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.google-api-error'));
            return Promise.reject(e);
          }
        } catch (e) {
          return Promise.reject(e);
        }
      return Promise.resolve();
    },
    D.Item.prototype._shareWithUser = async function (e, t) {
      return this._getOrCreateClient().createOrUpdateUserShare(this.getUniqueId(), {
        role: t,
        emailAddress: e,
      });
    },
    D.Item.prototype.isEmailFromCorporateDomain = async function (e) {
      const module = gDesigner.getSyncUser();
      let require = true;
      if (await this._getOrCreateClient().supportsEmailDomainCheck()) {
        (await this._getOrCreateClient()
          .getAccountByEmail(e)
          .catch(() => false)) || (require = false);
      } else AppSettings.gApi.sameDomain(module, { email: e }) || (require = false);
      return require;
    },
    D.Item.prototype._shareWithDomain = async function (e) {
      const module = await gDesigner.getUser(),
        require = module && module.email.split('@')[1];
      return this._getOrCreateClient().createDomainShare(this.getUniqueId(), {
        role: e,
        domain: require,
      });
    },
    D.Item.prototype._setId = function (e) {
      ((this._id = e), this._file && (this._file.id = e));
    },
    D.Item.prototype._buildGoogleMetadataForDoc = async function (e) {
      const module = new C();
      module.thumbnail = await x.fromBlob(await e.buildPreview());
      const require = e.getScene();
      module.unit = require.getProperty('ut');
      const _interopRequireDefault = require.getActivePage(),
        GCore = _interopRequireDefault && _interopRequireDefault.getGeometryBBox();
      return (
        GCore && ((module.width = GCore.getWidth()), (module.height = GCore.getHeight())),
        this._buildGoogleMetadata(module)
      );
    },
    D.Item.prototype._buildGoogleMetadata = async function (e) {
      const module = this._file.getExtension() || E.ext.toUpperCase(),
        require =
          this._file.getMimeType() ||
          ((_interopRequireDefault = module),
          Object.values(S).find((e) => {
            let { ext: module } = e;
            return !!module && module.toLowerCase() === _interopRequireDefault.toLowerCase();
          }) || E).type;
      var _interopRequireDefault;
      const GCore = e.thumbnail.getImageAsBlob(),
        CollaborationMergeUtils = await this._buildSafeEncodedBase64ForBlob(GCore),
        r = {
          name: this._file.getNameWithExtension(),
          mimeType: require,
          contentHints: {
            thumbnail: { mimeType: e.thumbnail.getMimeType(), image: CollaborationMergeUtils },
          },
          appProperties: {
            type: require,
            app: 'designer',
            unit: e.unit,
            width: e.width,
            height: e.height,
            trashed: null,
          },
          viewedByMeTime: new Date().toISOString(),
        };
      return (
        this._file.parent && !this.getUniqueId() && (r.parents = [this._file.getParentId()]),
        this._isFromGSuite() && (r.driveId = this._getTeamDriveId()),
        r
      );
    },
    D.Item.prototype._buildSafeEncodedBase64ForBlob = function (e) {
      return new Promise((t, n) => {
        const _interopRequireDefault = new FileReader();
        ((_interopRequireDefault.onload = (e) => {
          const n = e.target.result,
            _interopRequireDefault = n.substr(n.indexOf(',') + 1),
            GCore = (0, CollaborationMergeUtils.base64URLSafeEncode)(_interopRequireDefault);
          t(GCore);
        }),
          (_interopRequireDefault.onerror = function () {
            n(_interopRequireDefault.error);
          }),
          _interopRequireDefault.readAsDataURL(e));
      });
    },
    D.Item.prototype.hasVersionControl = function () {
      return true;
    },
    D.Item.prototype.hasUpdates = async function () {
      if (!this.getUniqueId() || !this.getVersion()) return false;
      const exports = await this._getOrCreateClient().getFileDetails(
        this.getUniqueId(),
        this._getQuery()
      );
      return new D.Item(this.getStorage(), exports).isVersionNewerThan(this);
    },
    D.Item.prototype._getQuery = function () {
      return this._isFromGSuite() ? { supportsAllDrives: true } : {};
    },
    D.Item.prototype._isFromGSuite = function () {
      return !!this._getTeamDriveId();
    },
    D.Item.prototype._getTeamDriveId = function () {
      const exports = this._file.driveId;
      if (exports) return exports;
      const module = this._file.parent && this._file.parent.driveId;
      return module || null;
    },
    D.Item.prototype.getLatestFileVersion = async function () {
      const exports = this._getOrCreateClient(),
        module = await this.getLatestFileInfo(),
        require = await exports.getFile(this.getUniqueId(), this._getQuery()),
        _interopRequireDefault = await GCloudStorage.createUint8ArrayFromBlob(require),
        GCore = new D.Item(this._storage, module, _interopRequireDefault);
      return (GCore.setCloudClient(exports), GCore);
    },
    D.Item.prototype.getLatestFileInfo = async function () {
      const exports = await this._getOrCreateClient().getFileDetails(
        this.getUniqueId(),
        this._getQuery()
      );
      return D.convertToCloudItem(exports);
    },
    D.Item.prototype.exists = function () {
      return this._getOrCreateClient().fileExists(this.getUniqueId(), this._getQuery());
    },
    D.Item.prototype.toString = function () {
      return '[Object GGoogleDriveStorage.Item]';
    },
    exports.exports = D);
}