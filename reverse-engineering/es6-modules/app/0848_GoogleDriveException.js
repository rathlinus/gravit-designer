/**
 * Webpack Module #848
 * Type: class
 * Name: GoogleDriveException
 */

function (exports, module, require) {
  'use strict';
  require(557) /* stub_requires_1102 */;
  var _interopRequireDefault = require(16);
  (require(19) /* polyfill_Array_iterator */,
    require(96) /* polyfill_JSON_stringify */,
    require(30) /* polyfill_Object_assign */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(38) /* stub_requires_680 */,
    require(97) /* stub_requires_684 */,
    require(26) /* polyfill_DOMCollection_iterator */,
    require(125) /* stub_requires_673 */,
    require(126) /* polyfill_URL_toJSON */,
    require(114)) /* stub_requires_424 */;
  var GCore = require(1) /* GCore */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    DataModule_593 = require(593) /* DataModule_593 */,
    s = _interopRequireDefault(require(787) /* Exports_GoogleToCloudRoleMap */),
    l = (function (e, t) {
      if ('function' == typeof WeakMap)
        var require = new WeakMap(),
          _interopRequireDefault = new WeakMap();
      return (function (e, t) {
        if (!t && e && e.__esModule) return e;
        var GCore,
          CollaborationMergeUtils,
          DataModule_593 = { __proto__: null, default: e };
        if (null === e || ('object' != typeof e && 'function' != typeof e)) return DataModule_593;
        if ((GCore = t ? _interopRequireDefault : require)) {
          if (GCore.has(e)) return GCore.get(e);
          GCore.set(e, DataModule_593);
        }
        for (const t in e)
          'default' !== t &&
            {}.hasOwnProperty.call(e, t) &&
            ((CollaborationMergeUtils =
              (GCore = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) &&
            (CollaborationMergeUtils.get || CollaborationMergeUtils.set)
              ? GCore(DataModule_593, t, CollaborationMergeUtils)
              : (DataModule_593[t] = e[t]));
        return DataModule_593;
      })(e, t);
    })(require(789) /* Exports_NoAccessId */),
    GError = _interopRequireDefault(require(594) /* GError */);
  const GoogleDriveResumableUpload = require(1108) /* GoogleDriveResumableUpload */,
    u = require(595) /* module_595 */,
    { HTTP_STATUS_CODES: p } = require(10);
  class g {
    constructor(e) {
      this.setTokenIssuer(e);
    }

    setTokenIssuer(e) {
      this._tokenIssuer = e;
    }

    getTokenIssuerSettings() {
      return this._tokenIssuer ? this._tokenIssuer.getSettings() : null;
    }

    getSettings() {
      return this.getTokenIssuerSettings();
    }

    async getAccessToken() {
      return (
        this._tokenIssuer && (this._accessToken = await this._tokenIssuer.get()),
        this._accessToken
      );
    }

    upload(e, t, n) {
      let _interopRequireDefault =
          arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : g.DefaultUploadType,
        GCore = arguments.length > 4 ? arguments[4] : undefined;
      switch (_interopRequireDefault) {
        case g.UploadType.Simple:
          return this._simpleUpload(e, t, n);
        case g.UploadType.Resumable:
          return this._resumableUpload(e, t, n, GCore);
      }
    }

    isCorporate() {
      if (!this.getTokenIssuerSettings()) throw 'No Token Issuer for Google';
      return this.getTokenIssuerSettings().corporate;
    }

    getCorporateProviderName() {
      return 'google';
    }

    async getFilePermissions(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      if (!this.getTokenIssuerSettings() || !this.getTokenIssuerSettings().corporate)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
        );
      if (!e)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.no-file-found'))
        );
      let require = [];
      const _interopRequireDefault = await this.getAccessToken(),
        CollaborationMergeUtils = { fields: '*', supportsAllDrives: true, pageSize: 50 };
      return new Promise((GCore, DataModule_593) => {
        !(function l(GError) {
          const GoogleDriveResumableUpload = new URL(
              'https://www.googleapis.com/drive/v3/files/'.concat(e, '/permissions')
            ),
            u = Object.assign({}, CollaborationMergeUtils);
          GError && (u.pageToken = GError);
          for (var p in u) GoogleDriveResumableUpload.searchParams.append(p, u[p]);
          return fetch(GoogleDriveResumableUpload.toString(), {
            method: 'GET',
            headers: new Headers({ Authorization: 'Bearer '.concat(_interopRequireDefault) }),
          })
            .then((e) => e.json())
            .then((e) => {
              const {
                permissions: _interopRequireDefault,
                nextPageToken: CollaborationMergeUtils,
              } = e;
              (_interopRequireDefault.length && (require = require.concat(_interopRequireDefault)),
                CollaborationMergeUtils
                  ? setTimeout(function () {
                      l(CollaborationMergeUtils);
                    })
                  : GCore(
                      module
                        ? require
                        : require.map((e) => {
                            let { emailAddress: module, role: require } = e;
                            return {
                              email: module,
                              role: s.default[require],
                              externalRole: require,
                            };
                          })
                    ));
            })
            .catch((e) => DataModule_593(e));
        })();
      });
    }

    async createOrUpdateUserShare(e, t) {
      if (!e)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.no-file-found'))
        );
      if (!this.getTokenIssuerSettings() || !this.getTokenIssuerSettings().corporate)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
        );
      const { role: require, emailAddress: _interopRequireDefault } = t;
      if (!require || !_interopRequireDefault)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.not-enough-parameters'))
        );
      const CollaborationMergeUtils = await this.getShareIdForEmail(
          e,
          _interopRequireDefault
        ).catch(() => []),
        DataModule_593 = {
          type: 'user',
          emailAddress: _interopRequireDefault,
          role: l.default[require.id],
        };
      if (CollaborationMergeUtils && CollaborationMergeUtils.length > 0) {
        const t = await this.removeShare(e, CollaborationMergeUtils[0]);
        if (t.error) {
          const {
            error: {
              errors: [{ message: e }],
            },
          } = t;
          return Promise.reject(e);
        }
        if (DataModule_593.role === l.NoAccessId) return t;
      }
      return this._createShare(e, DataModule_593).then((e) => {
        if (e.error) {
          const {
            error: {
              errors: [{ message: t }],
            },
          } = e;
          return Promise.reject(t);
        }
        return e;
      });
    }

    createDomainShare(e, t) {
      if (!e)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.no-file-found'))
        );
      if (!this.getTokenIssuerSettings() || !this.getTokenIssuerSettings().corporate)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
        );
      const { role: require, domain: _interopRequireDefault } = t;
      if (!require || !_interopRequireDefault)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.not-enough-parameters'))
        );
      const CollaborationMergeUtils = {
        type: 'domain',
        domain: _interopRequireDefault,
        role: l.default[require.id],
        allowFileDiscovery: true,
      };
      return this._createShare(e, CollaborationMergeUtils);
    }

    async _createShare(e, t) {
      if (!this.getTokenIssuerSettings() || !this.getTokenIssuerSettings().corporate)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
        );
      const require = new URL(
          'https://www.googleapis.com/drive/v3/files/'.concat(e, '/permissions')
        ),
        _interopRequireDefault = await this.getAccessToken(),
        CollaborationMergeUtils = {
          fields: '*',
          supportsAllDrives: true,
          sendNotificationEmail: false,
        };
      for (var DataModule_593 in CollaborationMergeUtils)
        require.searchParams.append(DataModule_593, CollaborationMergeUtils[DataModule_593]);
      return fetch(require.toString(), {
        method: 'POST',
        headers: new Headers({
          Authorization: 'Bearer '.concat(_interopRequireDefault),
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(t),
      }).then((e) => e.json());
    }

    async getShareIdForEmail(e, t) {
      return this.getTokenIssuerSettings() && this.getTokenIssuerSettings().corporate
        ? (await this.getFilePermissions(e, true)).filter((e) => {
            let { emailAddress: require } = e;
            return require === t;
          })
        : Promise.reject(
            GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
          );
    }

    async removeShare(e, t) {
      let { id: require } = t;
      if (!this.getTokenIssuerSettings() || !this.getTokenIssuerSettings().corporate)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GGoogleDrive', 'error.only-for-corporate'))
        );
      const _interopRequireDefault = new URL(
          'https://www.googleapis.com/drive/v3/files/'.concat(e, '/permissions/').concat(require)
        ),
        CollaborationMergeUtils = await this.getAccessToken(),
        DataModule_593 = { fields: '*', supportsAllDrives: true };
      for (var s in DataModule_593)
        _interopRequireDefault.searchParams.append(s, DataModule_593[s]);
      return fetch(_interopRequireDefault.toString(), {
        method: 'DELETE',
        headers: new Headers({ Authorization: 'Bearer '.concat(CollaborationMergeUtils) }),
      }).then((e) => (204 !== e.status ? e.json() : e));
    }

    async _simpleUpload(e, t, n) {
      const _interopRequireDefault = await this.getAccessToken();
      return new Promise((GCore, CollaborationMergeUtils) => {
        var DataModule_593 = new FormData();
        (DataModule_593.append(
          'metadata',
          new Blob([JSON.stringify(n)], { type: 'application/json' })
        ),
          DataModule_593.append('file', t));
        var s = new URL('https://www.googleapis.com/upload/drive/v3/files/'.concat(e || '')),
          l = { uploadType: 'multipart', fields: '*' };
        for (var GError in (n.hasOwnProperty('driveId') && (l.supportsAllDrives = true), l))
          s.searchParams.append(GError, l[GError]);
        fetch(s.toString(), {
          method: e ? 'PATCH' : 'POST',
          headers: new Headers({ Authorization: 'Bearer '.concat(_interopRequireDefault) }),
          body: DataModule_593,
        })
          .then((e) => e.json())
          .then((e) => {
            GCore(e);
          })
          .catch((e) => {
            (console.error(e), CollaborationMergeUtils(e));
          });
      });
    }

    async _resumableUpload(e, t, n, _interopRequireDefault) {
      const GCore = await this.getAccessToken();
      return new Promise((CollaborationMergeUtils, DataModule_593) => {
        var s = n.mimeType || 'application/octet-stream';
        const l = { fields: '*' };
        (n.hasOwnProperty('driveId') && (l.supportsAllDrives = true),
          new GoogleDriveResumableUpload({
            file: t,
            fileId: e,
            token: GCore,
            contentType: s,
            metadata: n,
            params: l,
            onComplete: function (e) {
              var t;
              try {
                t = 'string' == typeof e ? JSON.parse(e) : e;
              } catch (n) {
                t = e;
              }
              CollaborationMergeUtils(t);
            },
            onError: function (e) {
              DataModule_593(e);
            },
            onProgress: function (e) {
              _interopRequireDefault && _interopRequireDefault(e.loaded / e.total);
            },
          }).upload());
      });
    }

    async _request(e, t, n, _interopRequireDefault) {
      _interopRequireDefault =
        'number' == typeof _interopRequireDefault ? _interopRequireDefault : 0;
      const GCore = await this.getAccessToken(),
        DataModule_593 = { Authorization: 'Bearer '.concat(GCore) },
        s = t.headers ? Object.assign(DataModule_593, t.headers) : DataModule_593;
      return (
        delete t.headers,
        fetch(e, Object.assign({ headers: new Headers(s), signal: n }, t)).then(async (GCore) => {
          if (!GCore.ok) {
            var DataModule_593 = await GCore.json();
            return GCore.status === p.UNAUTHORIZED &&
              (await gContainer.getGoogleAPI().signIn(), 0 === _interopRequireDefault)
              ? this._request(e, t, n, ++_interopRequireDefault)
              : GCore.status === p.FORBIDDEN &&
                  g.isUsageLimitError(DataModule_593) &&
                  _interopRequireDefault < g.TRIAL_UNTIL_FAIL
                ? (await (0, CollaborationMergeUtils.sleep)(
                    1e3 * Math.pow(1 + _interopRequireDefault, 2)
                  ),
                  this._request(e, t, n, ++_interopRequireDefault))
                : Promise.reject(DataModule_593);
          }
          return GCore;
        })
      );
    }

    async _requestWithProgress(e, t, n, _interopRequireDefault, GCore) {
      GCore = 'number' == typeof GCore ? GCore : 0;
      const s = await this.getAccessToken(),
        l = { Authorization: 'Bearer '.concat(s) },
        GError = t.headers ? Object.assign(l, t.headers) : l;
      delete t.headers;
      const GoogleDriveResumableUpload = await fetch(
        e,
        Object.assign({ headers: new Headers(GError), signal: n }, t)
      );
      if (!GoogleDriveResumableUpload.ok) {
        var u = await GoogleDriveResumableUpload.json();
        return GoogleDriveResumableUpload.status === p.UNAUTHORIZED &&
          (await gContainer.getGoogleAPI().signIn(), 0 === GCore)
          ? this._requestWithProgress(e, t, n, _interopRequireDefault, ++GCore)
          : GoogleDriveResumableUpload.status === p.FORBIDDEN &&
              g.isUsageLimitError(u) &&
              GCore < g.TRIAL_UNTIL_FAIL
            ? (await (0, CollaborationMergeUtils.sleep)(1e3 * Math.pow(1 + GCore, 2)),
              this._requestWithProgress(e, t, n, _interopRequireDefault, ++GCore))
            : Promise.reject(u);
      }
      return (0, DataModule_593.readResponseWithProgress)(
        GoogleDriveResumableUpload,
        _interopRequireDefault,
        true
      );
    }

    getFile(e, t, n, _interopRequireDefault) {
      var GCore = new URL('https://www.googleapis.com/drive/v3/files/'.concat(e, '?alt=media'));
      for (var CollaborationMergeUtils in t)
        GCore.searchParams.append(CollaborationMergeUtils, t[CollaborationMergeUtils]);
      return this._requestWithProgress(
        GCore.toString(),
        { method: 'GET' },
        n,
        _interopRequireDefault
      ).then((e) => e.blob());
    }

    getFileDetails(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      var n = new URL('https://www.googleapis.com/drive/v3/files/'.concat(e, '?fields=*'));
      for (var _interopRequireDefault in module)
        n.searchParams.append(_interopRequireDefault, module[_interopRequireDefault]);
      return this._request(n.toString(), { method: 'GET' }).then((e) =>
        e.ok ? e.json() : e.json().then((e) => Promise.reject(e))
      );
    }

    fileExists(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      return this.getFileDetails(e, module)
        .then(() => true)
        .catch((e) => {
          if (e.error) {
            if (e.error.code === p.NOT_FOUND) return false;
            const t = new Error(e.error.message);
            throw ((t.code = e.error.code), t);
          }
          throw new Error();
        });
    }

    updateFileDetails(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
        require = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      if (Object.keys(module).length < 1) return Promise.resolve();
      var _interopRequireDefault = new URL('https://www.googleapis.com/drive/v3/files/'.concat(e));
      for (var GCore in require) _interopRequireDefault.searchParams.append(GCore, require[GCore]);
      return this._request(_interopRequireDefault.toString(), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(module),
      });
    }

    searchFiles(e) {
      var t = new URL('https://www.googleapis.com/drive/v3/files');
      for (var require in e) t.searchParams.append(require, e[require]);
      return this._request(t.toString(), { method: 'GET' }).then((e) => e.json());
    }

    searchTeamDrives(e) {
      var t = new URL('https://www.googleapis.com/drive/v3/drives');
      for (var require in e) t.searchParams.append(require, e[require]);
      return this._request(t.toString(), { method: 'GET' }).then((e) => e.json());
    }

    getAccountByEmail(e) {
      if (!e || e.indexOf('@') <= 0)
        return Promise.reject(
          GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.invalid-email')).replace(
            '%email',
            e
          )
        );
      var t = new URL(
        'https://www.googleapis.com/admin/directory/v1/users/'.concat(e, '?viewType=domain_public')
      );
      return this._request(t.toString(), { method: 'GET' }).then((e) => e.json());
    }

    async supportsEmailDomainCheck() {
      const exports = await this.getTokenInfo().catch(() => null);
      if (!exports) return false;
      const { scope: module } = exports;
      return Array.isArray(module) ? module.some((e) => require(e)) : require(module);
      function require(e) {
        return e.indexOf('admin.directory.user') >= 0;
      }
    }

    async getTokenInfo() {
      var e = new URL(
        'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token='.concat(
          await this.getAccessToken()
        )
      );
      return this._request(e.toString(), { method: 'GET' }).then((e) => e.json());
    }

    static TRIAL_UNTIL_FAIL = 3;

    static isUsageLimitError(e) {
      return (
        !(!e || !e.error) &&
        Number(e.error.code) === p.FORBIDDEN &&
        e.error.errors.some((e) => 'usageLimits' === e.domain)
      );
    }

    static ExceptionCode = { LoginAborted: 1 };

    static GoogleDriveException = h;

    static MimeType = { Folder: 'application/vnd.google-apps.folder' };

    static Kind = { TeamDrive: 'drive#teamDrive', Drive: 'drive#drive' };

    static UploadType = { Simple: 'simple', Resumable: 'resumeable' };

    static DefaultUploadType = g.UploadType.Resumable;

    static CloudToGoogleRoleMap = l.default;

    static GoogleToCloudRoleMap = s.default;

    static SearchEngine = {
      Sorts: { Ascending: '', Descending: 'desc' },
      OrderBy: {
        CreatedTime: 'createdTime',
        ModifiedTime: 'modifiedTime',
        Name: 'name',
        ViewedByMeTime: 'viewedByMeTime',
      },
    };

    static build(e) {
      if (!e) {
        if (!gContainer.getGoogleAPI().isLoaded()) throw Error('Google Drive Client not loaded!');
        e = gContainer.getGoogleAPI().getTokenConfiguration({
          corporate: false,
          accountId: this._accountId,
        });
      }
      return new g(new u(e));
    }

  }
  class h extends GError.default {
    constructor(e, t) {
      (super(e),
        (this.code = t),
        (this.__proto__ = h.prototype),
        (this.name = 'GoogleDriveException'));
    }
    toString() {
      return '[Object GoogleDriveException]';
    }
  };
  exports.exports = g;
}