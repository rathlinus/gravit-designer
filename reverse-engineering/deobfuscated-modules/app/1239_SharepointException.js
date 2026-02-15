/**
 * Webpack Module #1239
 * Type: class
 * Name: SharepointException
 */

function (exports, module, require) {
    "use strict";
    require(842) /* polyfill_String_trimStart */;
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = module.TEAMS_COMMANDS = module.GSharePointClient = undefined),
      require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(96) /* polyfill_JSON_stringify */,
      require(30) /* polyfill_Object_assign */,
      require(57) /* polyfill_parseInt */,
      require(8) /* polyfill_bundle_ES6 */,
      require(356) /* polyfill_RegExp_constructor */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(3) /* polyfill_RegExp_toString */,
      require(271) /* polyfill_String_endsWith */,
      require(34) /* polyfill_String_replace */,
      require(134) /* polyfill_String_startsWith */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(13) /* stub_requires_679 */,
      require(38) /* stub_requires_680 */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(125) /* stub_requires_673 */,
      require(126) /* polyfill_URL_toJSON */,
      require(114) /* stub_requires_424 */;
    var GCore = require(1) /* GCore */,
      AdalAuthLibrary = _interopRequireDefault(require(1476) /* AdalAuthLibrary */),
      CloudException = require(802) /* CloudException */,
      GCloudStorage = _interopRequireDefault(require(119) /* GCloudStorage */),
      AppSettings = require(10) /* AppSettings */,
      c = require(593) /* module_593 */,
      GError = _interopRequireDefault(require(594) /* GError */),
      GMicrosoftUser = _interopRequireDefault(require(1477) /* GMicrosoftUser */),
      MSTeamsAuthManager = _interopRequireDefault(require(1242) /* MSTeamsAuthManager */),
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */;
    const GCloudStorageItem = require(156) /* GCloudStorageItem */;
    let f = null,
      m = {};
    const y = (module.TEAMS_COMMANDS = MSTeamsAuthManager.default.COMMANDS),
      v = (module.GSharePointClient = function (e) {
        let {
          tenant: module,
          domain: require,
          clientID: _interopRequireDefault,
          id: GCore,
          authTenant: AdalAuthLibrary,
          corporate: CloudException,
          token: GCloudStorage,
          relativePath: AppSettings,
        } = e;
        (this.TOKEN = f || GCloudStorage),
          (this.BASE_URL = module),
          (this.AUTH_TENANT = AdalAuthLibrary || module),
          (this.DOMAIN = require),
          (this.CLIENT_ID = _interopRequireDefault),
          (this.SETTINGS_ID = GCore),
          (this.CORPORATE = CloudException || false),
          (this.RELATIVE_PATH = AppSettings),
          (this.HEADERS = v.requestHeaders);
      });
    (v.prototype.setTenantURL = function (e) {
      this.BASE_URL = e.replace("https://", "");
    }),
      (v.prototype.setRelativePath = function (e) {
        this.RELATIVE_PATH = e;
      }),
      (v.prototype.relativeUrlContainsSubsiteRelativePath = function (e) {
        return 0 === e.indexOf(this.RELATIVE_PATH);
      }),
      (v.prototype.getSanitizedFolderRelativePath = function (e) {
        let module = e;
        return (
          this.RELATIVE_PATH && (module = (0, CollaborationMergeUtils.trimStart)(module, this.RELATIVE_PATH)),
          (0, CollaborationMergeUtils.trimStart)(module, "/")
        );
      }),
      (v.prototype.getSanitizedFileRelativePath = function (e) {
        return this.RELATIVE_PATH
          ? "".concat(this.RELATIVE_PATH, "/").concat(e)
          : e;
      }),
      (v.prototype.setToken = function (e) {
        this.TOKEN = e;
      }),
      (v.CheckOutStatuses = { CheckedOut: 0, Available: 2 }),
      (v.FILE_STATUS = {
        LOCKED: 3,
        LOCKED_BY_ME: 2,
        AVAILABLE: 1,
        LOADING: -1,
      }),
      (v.requestHeaders = {
        Accept: "application/json;odata=nometadata",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US,en;q=0.8",
      }),
      (v.CheckinType = {
        MinorCheckIn: 0,
        MajorCheckIn: 1,
        OverwriteCheckIn: 2,
      }),
      (v.SpecialCharList = [
        "~",
        '"',
        "'",
        "#",
        "%",
        "&",
        "*",
        ":",
        "<",
        ">",
        "?",
        "/",
        "\\",
        "{",
        "|",
        "}",
      ]),
      (v.InvalidNames = [
        ".lock",
        "CON",
        "PRN",
        "AUX",
        "COM0",
        "COM1",
        "COM2",
        "COM3",
        "COM4",
        "COM5",
        "COM6",
        "COM7",
        "COM8",
        "COM9",
        "LPT0",
        "LPT1",
        "LPT2",
        "LPT3",
        "LPT4",
        "LPT5",
        "LPT6",
        "LPT7",
        "LPT8",
        "LPT9",
        "desktop.ini",
      ]),
      (v.InvalidNameBeginnings = ["~$"]),
      (v.InvalidNameEndings = ["."]),
      (v.InvalidContainings = ["_vti_"]),
      (v.InvalidOnlyCharacters = ["."]),
      (v.convertFileToCloudItem = function (e) {
        const module = (e) => {
          var t = GCloudStorageItem.from({
            id: e.UniqueId,
            version: e.UIVersionLabel,
            updated: e.TimeLastModified,
            created: e.TimeCreated,
            checkedOut: e.CheckOutType === v.CheckOutStatuses.CheckedOut,
            relativeUrl: e.ServerRelativeUrl,
          });
          (t.storage = GCloudStorageItem.Storage.SharePoint),
            t.setItemType(GCloudStorageItem.Type.File),
            (t.type = v.getFileType({ name: e.Name })),
            (t.mimeType = e._mimetype || e.mimeType || t.type);
          const require = AppSettings.FILE_FORMATS.find((e) => {
            let { type: require } = e;
            return require === t.type;
          });
          return (
            (t.extension = require && require.ext),
            (t.name = e.Name.replace(
              new RegExp(".(".concat(t.extension, ")$"), "i"),
              ""
            )),
            t.setModificationTime(t.updated),
            e.Length && t.setSize(parseInt(e.Length)),
            t.checkedOut
              ? (t.checkOutStatus = v.FILE_STATUS.LOADING)
              : ((t.checkOutStatus = v.FILE_STATUS.AVAILABLE),
                (t = v.updateFilePermissions(t))),
            t
          );
        };
        return e instanceof Array ? e.map(module) : module(e);
      }),
      (v.updateFilePermissions = function (e) {
        return e instanceof GCloudStorageItem && e.getType() === GCloudStorageItem.Type.File
          ? ([v.FILE_STATUS.AVAILABLE, v.FILE_STATUS.LOCKED_BY_ME].includes(
              e.checkOutStatus
            )
              ? e.setPermissions([
                  GCloudStorageItem.Permission.Open,
                  GCloudStorageItem.Permission.Delete,
                  GCloudStorageItem.Permission.Download,
                  GCloudStorageItem.Permission.Copy,
                  GCloudStorageItem.Permission.CutPaste,
                ])
              : e.revokePermissions(),
            e)
          : e;
      }),
      (v.hasSpecialChar = function (e) {
        return new RegExp("[".concat(v.SpecialCharList.join("|"), "]")).test(e);
      }),
      (v.isNameValid = function (e) {
        if (!e || !e.trim()) return false;
        if (v.hasSpecialChar(e)) return false;
        if (v.InvalidNames.indexOf(e) >= 0) return false;
        for (let module = 0, require = v.InvalidNameBeginnings.length; module < require; module++) {
          let n = v.InvalidNameBeginnings[module];
          if (e.startsWith(n)) return false;
        }
        for (let module = 0, require = v.InvalidNameEndings.length; module < require; module++) {
          let n = v.InvalidNameEndings[module];
          if (e.endsWith(n)) return false;
        }
        for (let module = 0, require = v.InvalidContainings.length; module < require; module++) {
          let n = v.InvalidContainings[module];
          if (e.indexOf(n) >= 0) return false;
        }
        for (let module = 0, require = v.InvalidOnlyCharacters.length; module < require; module++) {
          const n = v.InvalidOnlyCharacters[module];
          if (RegExp("^[".concat(n, "]+$")).test(e)) return false;
        }
        return true;
      }),
      (v.convertFolderToCloudItem = function (e) {
        const module = (e) => {
          var t = GCloudStorageItem.from({
            id: e.UniqueId ? e.UniqueId : e.id,
            name: e.Name ? e.Name : e.name,
            relativeUrl: e.ServerRelativeUrl
              ? e.ServerRelativeUrl
              : e.relativeUrl,
            type: "folder",
          });
          return (
            t.setItemType(GCloudStorageItem.Type.Folder),
            t.setPermission(GCloudStorageItem.Permission.Open),
            t.setPermission(GCloudStorageItem.Permission.Delete),
            t.setPermission(GCloudStorageItem.Permission.CutPaste),
            t
          );
        };
        return e instanceof Array ? e.map(module) : module(e);
      }),
      (v.getFileType = function (e) {
        return e.name.toLowerCase().endsWith(".cdrapp")
          ? AppSettings.FILE_FORMATS.find((e) => {
              let { ext: module } = e;
              return "cdrapp" === module;
            }).type
          : e.name.toLowerCase().endsWith(".cdr")
          ? AppSettings.FILE_FORMATS.find((e) => {
              let { ext: module } = e;
              return "cdr" === module;
            }).type
          : e.name.toLowerCase().endsWith(".des")
          ? AppSettings.FILE_FORMATS.find((e) => {
              let { ext: module } = e;
              return "des" === module;
            }).type
          : undefined;
      }),
      (v.ACCESS_TOKEN_PROP_NAME =
        "designer.filespanel.cloud-account.sharepoint.token"),
      (v.getInstance = function (e) {
        return (
          e.id || (e.id = "".concat(e.accountId, ".").concat(e.tenant)),
          (m[e.id] && m[e.id].TOKEN) || (m[e.id] = new v(e)),
          v.clearOldAccessTokens(),
          m[e.id]
        );
      }),
      (v.deleteToken = function (e) {
        gContainer.removeProperty(
          "".concat(v.ACCESS_TOKEN_PROP_NAME, ".").concat(e)
        );
      }),
      (v.getUserId = function () {
        return gDesigner.getSyncUser().id;
      }),
      (v.getUserEmail = function () {
        return gDesigner.getSyncUser().email;
      }),
      (v.clearOldAccessTokens = function () {
        const exports = [],
          module = gContainer.getStorageLength();
        for (let require = 0; require < module; require++) {
          let t = gContainer.getPropertyKeyByIndex(require);
          0 === t.indexOf("".concat(v.ACCESS_TOKEN_PROP_NAME, ".")) &&
            exports.push(t);
        }
        const require = v.getUserId();
        for (let module = 0; module < exports.length; module++) {
          _interopRequireDefault(exports[module]);
        }
        function _interopRequireDefault(e) {
          gContainer.getProperty(e).then((t) => {
            v.isTokenValid(t, require) || gContainer.removeProperty(e);
          });
        }
      }),
      (v.isTokenValid = function (e, t) {
        const require = gContainer.getSharepointAuthenticator();
        return require
          ? require.isTokenValid(e)
          : !(!e || !e.expires || e.expires <= Date.now() / 1e3) &&
              !(!e.id || e.id !== t);
      }),
      (v.getCachedToken = function (e) {
        return gContainer.getProperty(
          "".concat(v.ACCESS_TOKEN_PROP_NAME, ".").concat(e)
        );
      }),
      (v.getValidCachedTokenOrNull = async function (e) {
        const module = await v.getCachedToken(e);
        return v.isTokenValid(module, v.getUserId()) ? module : null;
      }),
      (v.saveTokenToCache = async function (e, t) {
        gContainer.setProperty(
          "".concat(v.ACCESS_TOKEN_PROP_NAME, ".").concat(e),
          t
        );
      }),
      (v.ExceptionCode = { LoginAborted: 1, FileAlreadyCheckedOut: 423 });
    class _ extends GError.default {
      constructor(e, t) {
        super(e),
          (this.code = t),
          (this.__proto__ = _.prototype),
          (this.name = "SharepointException");
      }
      toString() {
        return "[Object SharepointException]";
      }
    }
    (v.SharepointException = _),
      (v._logoutAndClearAdalCache = function (e) {
        var t = new AdalAuthLibrary.default(e);
        t.clearCache(), t.getCachedUser() && t.logOut(), (t._user = null);
        var n = [];
        for (let e = 0; e < localStorage.length; e++)
          "adal." === localStorage.key(e).substring(0, 5) &&
            n.push(localStorage.key(e));
        for (let e = 0; e < n.length; e++) localStorage.removeItem(n[e]);
      }),
      (v.prototype.getSettings = function () {
        return {
          tenant: this.BASE_URL,
          domain: this.DOMAIN,
          clientID: this.CLIENT_ID,
          accountId: this.SETTINGS_ID,
          authTenant: this.AUTH_TENANT,
          corporate: this.CORPORATE,
          token: this.TOKEN,
          relativePath: this.RELATIVE_PATH,
          type: AppSettings.EXTERNAL_APP.SHAREPOINT,
        };
      }),
      (v.prototype.getId = function () {
        return this.SETTINGS_ID;
      }),
      (v.prototype.getFile = function (e) {
        return this.getRawFile(e).then(function (e) {
          return GCloudStorage.default.createUint8ArrayFromBlob(e);
        });
      }),
      (v.prototype.queryFiles = function (e) {
        return this.get(this._createQueryFilesURL(e));
      }),
      (v.prototype.fetchFolders = function (e, t, n) {
        const _interopRequireDefault = this.getSanitizedFolderRelativePath(e.relativeUrl);
        var GCore = "/_api/web/GetFolderByServerRelativeUrl('"
          .concat(encodeURI(_interopRequireDefault), "')/Folders?$orderby=")
          .concat(encodeURI(t));
        return (
          n > 0 && (GCore += "&$top=".concat(n)),
          this.get(GCore).then((t) => {
            let { value: n } = t;
            const _interopRequireDefault = [];
            if (!n || !n.length) return _interopRequireDefault;
            for (let t = 0, GCore = n.length; t < GCore; t++) {
              let GCore = n[t];
              if (!GCore.Exists) continue;
              const AdalAuthLibrary = v.convertFolderToCloudItem(GCore);
              (AdalAuthLibrary.parent = e), _interopRequireDefault.push(AdalAuthLibrary);
            }
            return _interopRequireDefault;
          })
        );
      }),
      (v.prototype.queryFilesByOwner = function (e, t) {
        const require = (function (e) {
          return (
            e.searchParams.append("$select", "*"),
            e.searchParams.append("$expand", "Author"),
            e.searchParams.append("$filter", "Author/Id eq ".concat(t)),
            e
          );
        })(this._createQueryFilesURL(e));
        return this.get(require);
      }),
      (v.prototype._createQueryFilesURL = function (e) {
        const { folderRelativeUrl: module, orderBy: require, limit: _interopRequireDefault, skip: GCore } = e,
          AdalAuthLibrary = this.getSanitizedFolderRelativePath(module),
          CloudException = this.getAPIEndpointURL(
            "/_api/web/GetFolderByServerRelativeUrl('".concat(AdalAuthLibrary, "')/Files")
          );
        return (
          CloudException.searchParams.append("$orderby", require),
          CloudException.searchParams.append("$top", _interopRequireDefault),
          CloudException.searchParams.append("$skip", GCore),
          CloudException
        );
      }),
      (v.prototype.findFileById = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        return this.get(
          "/_api/search/query?querytext='" +
            e +
            "'&selectproperties='Title,Filename,ParentLink,DefaultEncodingURL'",
          { headers: module }
        ).then((e) => {
          if (e) {
            const {
                PrimaryQueryResult: {
                  RelevantResults: {
                    Table: {
                      Rows: [module],
                    },
                  },
                },
              } = e,
              n = module.Cells.find((e) => {
                let { Key: module } = e;
                return "Filename" === module;
              }).Value;
            return {
              name: module.Cells.find((e) => {
                let { Key: module } = e;
                return "Title" === module;
              }).Value,
              type: v.getFileType({ name: n }),
              relativeUrl: module.Cells.find((e) => {
                let { Key: module } = e;
                return "DefaultEncodingURL" === module;
              }).Value.replace("https://".concat(this.BASE_URL), ""),
            };
          }
          return null;
        });
      }),
      (v.prototype.getAdditionalItemData = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        const require = "/_api/web/GetFileByServerRelativeUrl('".concat(
          encodeURI("".concat(e.relativeUrl)),
          "')/ListItemAllFields?expand=Properties"
        );
        return this.get(require, { headers: module });
      }),
      (v.prototype.checkOutFile = async function (e) {
        const module = "/_api/web/GetFileByServerRelativeUrl('".concat(
          e.relativeUrl,
          "')/CheckOut()"
        );
        return this.post(module).catch((e) => {
          if (e.status === v.ExceptionCode.FileAlreadyCheckedOut)
            throw new v.SharepointException(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFilesPanelViewSharepoint",
                  "text.error-file-is-already-checked-out-by-someone-else"
                )
              ),
              v.ExceptionCode.FileAlreadyCheckedOut
            );
          throw e;
        });
      }),
      (v.prototype.discardCheckOut = function (e) {
        var t = "/_api/web/GetFileByServerRelativeUrl('".concat(
          e.relativeUrl,
          "')/UndoCheckOut()"
        );
        return this.post(t);
      }),
      (v.prototype.checkInFile = function (e) {
        let module =
            arguments.length > 1 && undefined !== arguments[1]
              ? arguments[1]
              : "New Comment",
          require =
            arguments.length > 2 && undefined !== arguments[2]
              ? arguments[2]
              : v.CheckinType.MinorCheckIn;
        const _interopRequireDefault = "/_api/web/GetFileByServerRelativeUrl('"
          .concat(e.relativeUrl, "')/CheckIn(comment='")
          .concat(module, "', checkintype=")
          .concat(require, ")");
        return this.post(_interopRequireDefault);
      }),
      (v.prototype.getCheckOutFileInfo = function (e) {
        const module = "/_api/web/GetFileByServerRelativeUrl('".concat(
          e.relativeUrl,
          "')/checkedOutByUser"
        );
        return this.get(module);
      }),
      (v.prototype.getCheckOutFileStatus = async function (e) {
        if (e.hasOwnProperty("checkedOut") && !e.checkedOut)
          return v.FILE_STATUS.AVAILABLE;
        const module = await this.getCheckOutFileInfo(e).catch(
          (e) => (
            console.error(">>>error retrieving checkout info: ", e.message),
            null
          )
        );
        if (!module || true === module["odata.null"]) return v.FILE_STATUS.AVAILABLE;
        const require = await this._getUser();
        return module.UserId.NameId === require.getNameId()
          ? v.FILE_STATUS.LOCKED_BY_ME
          : v.FILE_STATUS.LOCKED;
      }),
      (v.prototype._getUser = async function () {
        return (
          this._user || (this._user = new GMicrosoftUser.default(await this.getUser())),
          this._user
        );
      }),
      (v.prototype.getFileCreator = async function (e) {
        return new GMicrosoftUser.default(await this._getFileCreator(e));
      }),
      (v.prototype.getLibrarySettings = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
        return this.get("/_api/web/lists/getByTitle('Documents')", {
          headers: exports,
        }).then((e) => ({
          enableVersioning: e.EnableVersioning,
          enableMinorVersions: e.EnableMinorVersions,
          enableFolderCreation: e.EnableFolderCreation,
          forceCheckout: e.ForceCheckout,
        }));
      }),
      (v.prototype.getFileDetails = async function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        try {
          return await this._getFileDetailsByRelativeURL(e, module);
        } catch (n) {
          if (e.id) {
            const n = await this.findFileById(e.id);
            return this._getFileDetailsByRelativeURL(n, module);
          }
          throw n;
        }
      }),
      (v.prototype._getFileDetailsByRelativeURL = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        const require = "/_api/web/GetFileByServerRelativeUrl('".concat(
          encodeURI("".concat(e.relativeUrl)),
          "')"
        );
        return this.get(require, { headers: module });
      }),
      (v.prototype.getFolderDetails = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        const require = this.getSanitizedFolderRelativePath(e.relativeUrl),
          _interopRequireDefault = "/_api/web/GetFolderByServerRelativeUrl('".concat(
            encodeURI(require),
            "')"
          );
        return this.get(_interopRequireDefault, { headers: module });
      }),
      (v.prototype.getParentFolder = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        const require = this.getSanitizedFolderRelativePath(e.relativeUrl),
          _interopRequireDefault = "/_api/Web/GetFolderByServerRelativePath(decodedurl='".concat(
            encodeURI(require),
            "')/ParentFolder"
          );
        return this.get(_interopRequireDefault, { headers: module });
      }),
      (v.prototype.copyFileTo = function (e, t) {
        var n = "/_api/web/GetFileByServerRelativeUrl('"
          .concat(encodeURI(e.relativeUrl), "')/copyto(strnewurl='")
          .concat(encodeURI(t.relativeUrl), "/")
          .concat(e.name, ".")
          .concat(e.extension, "',boverwrite=false)");
        return this.post(n, null, { rawResponse: true });
      }),
      (v.prototype.moveFileTo = function (e, t) {
        var n = "/_api/web/GetFileByServerRelativeUrl('"
          .concat(encodeURI(e.relativeUrl), "')/moveto(newurl='")
          .concat(encodeURI(t.relativeUrl), "/")
          .concat(e.name, ".")
          .concat(e.extension, "',flags=0)");
        return this.post(n, null, { rawResponse: true });
      }),
      (v.prototype.moveFolderTo = function (e, t) {
        var n = "/_api/web/GetFolderByServerRelativeUrl('"
          .concat(encodeURI(e.relativeUrl), "')/moveto(newurl='")
          .concat(encodeURI(t.relativeUrl), "/")
          .concat(e.name, "')");
        return this.post(n, null, { rawResponse: true });
      }),
      (v.prototype.folderExists = function (e, t) {
        const require = this.getSanitizedFolderRelativePath(t.relativeUrl);
        return this.get(
          "/_api/Web/GetFolderByServerRelativePath(decodedurl='".concat(
            encodeURI("".concat(require) + "".concat(e ? "/".concat(e) : "")),
            "')/Exists/$value"
          )
        ).catch((e) => (!e.status || 404 !== e.status) && Promise.reject(e));
      }),
      (v.prototype.fileExists = function (e, t) {
        return this.get(
          "/_api/web/GetFileByServerRelativeUrl('".concat(
            encodeURI("".concat(t.relativeUrl, "/").concat(e)),
            "')/Exists/$value"
          )
        ).catch((e) => (!e.status || 404 !== e.status) && Promise.reject(e));
      }),
      (v.prototype.getRawFile = function (e, t) {
        var n = "/_api/web/GetFileByServerRelativeUrl('".concat(
          e.relativeUrl,
          "')/$value"
        );
        return this.get(n, { rawResponse: true, progress: t }).then((e) =>
          e.blob()
        );
      }),
      (v.prototype.getUser = function () {
        return this.get("/_api/Web/CurrentUser");
      }),
      (v.prototype._getFileCreator = function (e) {
        var t = "/_api/web/GetFileByServerRelativeUrl('".concat(
          e.relativeUrl,
          "')/Author"
        );
        return this.get(t);
      }),
      (v.prototype.get = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        return this._query("GET", e, null, module);
      }),
      (v.prototype.post = function (e, t) {
        let require,
          _interopRequireDefault =
            arguments.length > 2 && undefined !== arguments[2]
              ? arguments[2]
              : null;
        return (
          (require = _interopRequireDefault && _interopRequireDefault.blobRequest ? new Blob([t]) : t),
          this._query("POST", e, require, _interopRequireDefault)
        );
      }),
      (v.prototype._query = function (e, t) {
        let require,
          _interopRequireDefault =
            arguments.length > 2 && undefined !== arguments[2]
              ? arguments[2]
              : null,
          GCore =
            arguments.length > 3 && undefined !== arguments[3]
              ? arguments[3]
              : null;
        return (
          (require =
            (GCore && GCore.fullLink) || t instanceof URL
              ? t instanceof URL
                ? t.toString()
                : t
              : this.getAPIEndpointURL(t).toString()),
          this.query(e, require, _interopRequireDefault, GCore)
        );
      }),
      (v.prototype.getAPIEndpointURL = function (e) {
        return new URL("https://".concat(this.BASE_URL).concat(e));
      }),
      (v.prototype.hasPermissionToAccessFolder = async function (e) {
        try {
          return !!(await this.getFolderDetails(e));
        } catch (e) {
          return (
            (!e ||
              (e.status !== AppSettings.HTTP_STATUS_CODES.FORBIDDEN &&
                e.status !== AppSettings.HTTP_STATUS_CODES.NOT_FOUND)) &&
            (console.error(
              "GSharePointClient - failed to check folder permissions",
              e
            ),
            false)
          );
        }
      }),
      (v.prototype.getEffectiveBasePermissions = function (e) {
        return this.query(
          "GET",
          "".concat(e, "/_api/Web/effectiveBasePermissions")
        );
      }),
      (v.prototype.getFileEffectiveBasePermissions = function (e) {
        var t = "/_api/web/GetFileByServerRelativeUrl('".concat(
          e.relativeUrl,
          "')/ListItemAllFields/effectiveBasePermissions"
        );
        return this.get(t);
      }),
      (v.prototype.query = function (e, t) {
        let require =
            arguments.length > 2 && undefined !== arguments[2]
              ? arguments[2]
              : null,
          _interopRequireDefault =
            arguments.length > 3 && undefined !== arguments[3]
              ? arguments[3]
              : null;
        const GCore = this;
        return new Promise((e, t) =>
          GCore.TOKEN && v.isTokenValid(GCore.TOKEN, v.getUserId())
            ? AdalAuthLibrary(e, t)
            : GCore
                .connect()
                .then(() => {
                  AdalAuthLibrary(e, t);
                })
                .catch((e) => {
                  t(e);
                })
        );
        async function AdalAuthLibrary(CloudException, GCloudStorage) {
          const AppSettings = {
            method: e,
            cache: "no-cache",
            headers: GCore._prepareRequestHeaders(e, require, _interopRequireDefault),
            body: GCore._prepareRequestBody(e, require, _interopRequireDefault),
          };
          let GError;
          try {
            GError = await fetch(t, AppSettings);
          } catch (e) {
            return void GCloudStorage(e);
          }
          if (401 === GError.status)
            GCore.clearUserData(),
              GCore
                .connect(true)
                .then(() => {
                  AdalAuthLibrary(CloudException, GCloudStorage);
                })
                .catch((e) => {
                  GCloudStorage(e);
                });
          else if (
            200 === GError.status ||
            201 === GError.status ||
            202 === GError.status ||
            204 === GError.status
          ) {
            if (_interopRequireDefault && _interopRequireDefault.progress && "function" == typeof _interopRequireDefault.progress)
              return (0, c.readResponseWithProgress)(GError, _interopRequireDefault.progress, false).then(
                (e) => CloudException(e)
              );
            if (_interopRequireDefault && _interopRequireDefault.rawResponse) return CloudException(GError);
            let e = {};
            if (204 !== GError.status)
              try {
                e = await GError.json();
              } catch (e) {
                console.error("Incorrect response format: ", e.message), GCloudStorage(e);
              }
            CloudException(e);
          } else GCloudStorage({ status: GError.status, statusText: GError.statusText });
        }
      }),
      (v.prototype._prepareRequestHeaders = function (e, t, n) {
        if (n && n.noHeaders) return;
        const _interopRequireDefault = Object.assign({}, this.HEADERS, {
          Authorization: "Bearer ".concat(this.TOKEN.token),
        });
        this._isBodyRequestRequired(e, t) &&
          ((_interopRequireDefault["Content-Type"] =
            (n && n.headers && n.headers["Content-Type"]) ||
            "application/json;odata=verbose"),
          (_interopRequireDefault["Content-Length"] = JSON.stringify(t).length));
        return Object.assign(_interopRequireDefault, (n && n.headers) || {});
      }),
      (v.prototype._prepareRequestBody = function (e, t, n) {
        let _interopRequireDefault;
        return (
          this._isBodyRequestRequired(e, t) &&
            (_interopRequireDefault = n && n.blobRequest ? t : JSON.stringify(t)),
          _interopRequireDefault
        );
      }),
      (v.prototype._isBodyRequestRequired = function (e, t) {
        return !(!t || !["POST", "PUT", "PATCH"].includes(e));
      }),
      (v.prototype._getSharePointSettings = function () {
        return {
          tenant: this.AUTH_TENANT,
          clientId: this.CLIENT_ID,
          domain: this.DOMAIN,
          loginHint: v.getUserEmail(),
        };
      }),
      (v.prototype.clearUserData = function () {
        (this.TOKEN = null),
          (this._toClear = true),
          v._logoutAndClearAdalCache(this._getSharePointSettings());
      }),
      (v.prototype._getCachedToken = function (e) {
        return (
          e || (e = (e) => v.isTokenValid(e, v.getUserId())),
          gContainer.getProperty(this._getTokenPropertyName()).then((t) => {
            if (t && e(t)) return t;
          })
        );
      }),
      (v.prototype._setCachedToken = function (e) {
        this.setToken(e),
          gContainer.setProperty(this._getTokenPropertyName(), e);
      }),
      (v.prototype._getTokenPropertyName = function () {
        return ""
          .concat(v.ACCESS_TOKEN_PROP_NAME, ".")
          .concat(this.SETTINGS_ID);
      }),
      (v.prototype.connect = async function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        const require = this,
          _interopRequireDefault = this._getSharePointSettings(),
          AdalAuthLibrary = 6e4,
          GCloudStorage = 3e3;
        let c,
          GError = false;
        const GMicrosoftUser = await v.getValidCachedTokenOrNull(require.SETTINGS_ID);
        if (require._connect) return require._connect;
        const MSTeamsAuthManager = gContainer.getSharepointAuthenticator();
        return MSTeamsAuthManager
          ? !e && GMicrosoftUser
            ? void (require.TOKEN = GMicrosoftUser)
            : (AppSettings.msTeamsMode
                ? (require._connect = MSTeamsAuthManager.authenticate(require._getTeamsCommand()))
                : (require._connect = MSTeamsAuthManager.authenticate(_interopRequireDefault, { clearCache: e })),
              require._connect.then(
                (e) => (
                  (require.TOKEN = f = { id: v.getUserId() }),
                  e.expires && e.token
                    ? ((require.TOKEN.expires = f.expires = Number(e.expires)),
                      (require.TOKEN.token = f.token = e.token))
                    : "string" == typeof e &&
                      ((require.TOKEN.expires = f.expires =
                        Math.floor(Date.now() / 1e3) + 3600),
                      (require.TOKEN.token = f.token = e)),
                  v.saveTokenToCache(require.SETTINGS_ID, require.TOKEN),
                  delete require._connect,
                  require.TOKEN
                )
              ),
              require._connect)
          : ((require._connect = new Promise((GCloudStorage, AppSettings) => {
              !(function t(GMicrosoftUser) {
                gContainer
                  .getProperty(
                    ""
                      .concat(v.ACCESS_TOKEN_PROP_NAME, ".")
                      .concat(require.SETTINGS_ID)
                  )
                  .then((MSTeamsAuthManager) => {
                    if (MSTeamsAuthManager && !e && v.isTokenValid(MSTeamsAuthManager, v.getUserId()))
                      return (require.TOKEN = MSTeamsAuthManager), GCloudStorage(), void (require._connect = null);
                    $(window).on("message", b);
                    var m = new URL(
                      "".concat(window.location.origin, "/sp.html")
                    );
                    const y = require._popupToCenter(
                      m.href,
                      "SharePointToken",
                      680,
                      460
                    );
                    if (!y || y.closed || undefined === y.closed)
                      return (
                        $(window).off("message", b),
                        void AppSettings({
                          status: CloudException.WINDOW_STATUS_BLOCKED,
                          message: GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GExternalStorage",
                              "text.error-window-blocked-alternative"
                            )
                          ),
                        })
                      );
                    (y.onload = function () {
                      require._toClear &&
                        (y.postMessage(
                          { cmd: "clearCachedUser", sharepointSettings: _interopRequireDefault },
                          ""
                            .concat(window.location.protocol, "//")
                            .concat(window.location.host, "/sp.html")
                        ),
                        delete require._toClear),
                        y.postMessage(
                          { cmd: "sharepointSettings", sharepointSettings: _interopRequireDefault },
                          ""
                            .concat(window.location.protocol, "//")
                            .concat(window.location.host, "/sp.html")
                        );
                    }),
                      (y.onclose = function () {
                        _ && (clearInterval(_), (_ = null));
                      });
                    var _ = setInterval(function () {
                      y.closed &&
                        !GError &&
                        (clearInterval(_),
                        (_ = null),
                        gContainer.removeProperty("sp_getToken_data"),
                        v._logoutAndClearAdalCache(_interopRequireDefault),
                        c && clearTimeout(c),
                        AppSettings(
                          new v.SharepointException(
                            null,
                            v.ExceptionCode.LoginAborted
                          )
                        ));
                    }, 1e3);
                    async function b(e) {
                      let GCore = e.originalEvent.data;
                      const { cmd: CloudException } = GCore;
                      if (CloudException && "saveToken" === CloudException)
                        (require.TOKEN = f =
                          {
                            expires: Math.floor(Date.now() / 1e3) + 3600,
                            token: GCore.token,
                            id: v.getUserId(),
                          }),
                          v.saveTokenToCache(require.SETTINGS_ID, require.TOKEN),
                          (GError = true),
                          CollaborationMergeUtils(y),
                          c && clearTimeout(c),
                          $(window).off("message", b),
                          (require._connect = null),
                          GCloudStorage();
                      else if (CloudException && "saveTokenError" === CloudException) {
                        const { error: e } = GCore;
                        if ("User login is required" === e) return;
                        if (
                          (console.error(">>saveTokenError data", GCore),
                          c && clearTimeout(c),
                          GMicrosoftUser)
                        )
                          return void (c = setTimeout(function () {
                            GCloudStorageItem(y), v._logoutAndClearAdalCache(_interopRequireDefault), t(false);
                          }, AdalAuthLibrary));
                        v._logoutAndClearAdalCache(_interopRequireDefault),
                          GCloudStorageItem(y),
                          (require._connect = null),
                          AppSettings(e);
                      }
                    }
                    GMicrosoftUser &&
                      (c = setTimeout(function () {
                        CollaborationMergeUtils(y), v._logoutAndClearAdalCache(_interopRequireDefault), t(false);
                      }, AdalAuthLibrary));
                  });
              })(module);
            })),
            require._connect);
        function CollaborationMergeUtils(e) {
          let module =
            arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0;
          setTimeout(() => {
            e.close();
          }, module);
        }
        function GCloudStorageItem(e) {
          CollaborationMergeUtils(e, GCloudStorage);
        }
      }),
      (v.prototype.updateFileContent = function (e, t) {
        return this._putBlob(
          "/_api/web/GetFileByServerRelativeUrl('".concat(
            e.relativeUrl,
            "')/$value"
          ),
          t
        );
      }),
      (v.prototype.updateItem = function (e, t) {
        const require = this.getSanitizedFolderRelativePath(e.relativeUrl);
        return this.post(
          "/_api/web/GetFolderByServerRelativeUrl('".concat(
            require,
            "')/ListItemAllFields"
          ),
          t,
          { headers: { "X-HTTP-Method": "MERGE" } }
        );
      }),
      (v.prototype.deleteItem = function (e) {
        const module = this.getSanitizedFolderRelativePath(e.relativeUrl);
        return this.post(
          "/_api/web/GetFolderByServerRelativeUrl('".concat(module, "')"),
          null,
          { headers: { "X-HTTP-Method": "DELETE" }, rawResponse: true }
        ).then((e) => {
          if (200 !== e.status && 204 !== e.status)
            throw new Error(e.statusText);
        });
      }),
      (v.prototype._popupToCenter = function (e, t, n, _interopRequireDefault) {
        const GCore = this._getPopupWindowReference(),
          AdalAuthLibrary = GCore.outerHeight / 2 + GCore.screenY - n / 2,
          CloudException = GCore.outerWidth / 2 + GCore.screenX - _interopRequireDefault / 2;
        return window.open(
          e,
          t,
          "left="
            .concat(CloudException, ",top=")
            .concat(AdalAuthLibrary, ",width=")
            .concat(_interopRequireDefault, ",height=")
            .concat(
              n,
              ",menubar=no,toolbar=no,location=no,resizable=no,scrollbars=no"
            )
        );
      }),
      (v.prototype._getPopupWindowReference = function () {
        try {
          window.top.outerHeight;
          return window.top;
        } catch (e) {
          return window;
        }
      }),
      (v.prototype.updateFileContentById = function (e, t) {
        return this._putBlob(
          "/_api/web/GetFileById('".concat(e, "')/$value"),
          t
        );
      }),
      (v.prototype._putBlob = function (e, t) {
        return this.post(e, t, {
          headers: { "X-HTTP-Method": "PUT" },
          blobRequest: true,
          rawResponse: true,
        });
      }),
      (v.prototype._getTeamsCommand = function () {
        return y.SHAREPOINT_COMMAND;
      }),
      (v.prototype.createFile = function (e, t) {
        const require = e.parentUrl || e.parent.relativeUrl,
          _interopRequireDefault = this.getSanitizedFolderRelativePath(require);
        var GCore = "/_api/web/GetFolderByServerRelativeUrl('"
          .concat(_interopRequireDefault, "')/Files/add(url='")
          .concat(e.getNameWithExtension(), "',overwrite=true)");
        return this.post(GCore, t, { blobRequest: true, rawResponse: true });
      }),
      (v.prototype.getAccountByEmail = function (e) {
        if (!e || e.indexOf("@") <= 0)
          return Promise.reject(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GShareDialog", "text.invalid-email")
            ).replace("%email", e)
          );
        var t = "/_api/web/EnsureUser('".concat(e, "')");
        return this.post(t);
      }),
      (v.prototype.isCorporate = function () {
        return this.CORPORATE;
      }),
      (v.prototype.getCorporateProviderName = function () {
        return "microsoft";
      }),
      (v.prototype.toString = function () {
        return "[Object GSharePointClient]";
      });
    module.default = v;
  }