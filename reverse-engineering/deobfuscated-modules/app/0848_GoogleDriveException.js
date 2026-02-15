/**
 * Webpack Module #848
 * Type: class
 * Name: GoogleDriveException
 */

function (exports, module, require) {
    "use strict";
    require(557) /* stub_requires_1102 */;
    var o = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */,
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
      require(114) /* stub_requires_424 */;
    var i = require(1) /* module */,
      a = require(40) /* CollaborationMergeUtils */,
      r = require(593) /* module_593 */,
      s = o(require(787) /* Exports_GoogleToCloudRoleMap */),
      l = (function (e, t) {
        if ("function" == typeof WeakMap)
          var require = new WeakMap(),
            o = new WeakMap();
        return (function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            a,
            r = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return r;
          if ((i = t ? o : require)) {
            if (i.has(e)) return i.get(e);
            i.set(e, r);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((a =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (a.get || a.set)
                ? i(r, t, a)
                : (r[t] = e[t]));
          return r;
        })(e, t);
      })(require(789) /* Exports_NoAccessId */),
      c = o(require(594) /* GError */);
    const d = require(1108) /* module_1108 */,
      u = require(595) /* module_595 */,
      { HTTP_STATUS_CODES: p } = require(10) /* AppSettings */;
    function g(e) {
      this.setTokenIssuer(e);
    }
    (g.TRIAL_UNTIL_FAIL = 3),
      (g.isUsageLimitError = function (e) {
        return (
          !(!e || !e.error) &&
          Number(e.error.code) === p.FORBIDDEN &&
          e.error.errors.some((e) => "usageLimits" === e.domain)
        );
      }),
      (g.ExceptionCode = { LoginAborted: 1 });
    class h extends c.default {
      constructor(e, t) {
        super(e),
          (this.code = t),
          (this.__proto__ = h.prototype),
          (this.name = "GoogleDriveException");
      }
      toString() {
        return "[Object GoogleDriveException]";
      }
    }
    (g.GoogleDriveException = h),
      (g.prototype.setTokenIssuer = function (e) {
        this._tokenIssuer = e;
      }),
      (g.prototype.getTokenIssuerSettings = function () {
        return this._tokenIssuer ? this._tokenIssuer.getSettings() : null;
      }),
      (g.prototype.getSettings = function () {
        return this.getTokenIssuerSettings();
      }),
      (g.prototype.getAccessToken = async function () {
        return (
          this._tokenIssuer &&
            (this._accessToken = await this._tokenIssuer.get()),
          this._accessToken
        );
      }),
      (g.prototype.upload = function (e, t, n) {
        let o =
            arguments.length > 3 && undefined !== arguments[3]
              ? arguments[3]
              : g.DefaultUploadType,
          i = arguments.length > 4 ? arguments[4] : undefined;
        switch (o) {
          case g.UploadType.Simple:
            return this._simpleUpload(e, t, n);
          case g.UploadType.Resumable:
            return this._resumableUpload(e, t, n, i);
        }
      }),
      (g.prototype.isCorporate = function () {
        if (!this.getTokenIssuerSettings()) throw "No Token Issuer for Google";
        return this.getTokenIssuerSettings().corporate;
      }),
      (g.prototype.getCorporateProviderName = function () {
        return "google";
      }),
      (g.prototype.getFilePermissions = async function (e) {
        let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
        if (
          !this.getTokenIssuerSettings() ||
          !this.getTokenIssuerSettings().corporate
        )
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
            )
          );
        if (!e)
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.no-file-found")
            )
          );
        let require = [];
        const o = await this.getAccessToken(),
          a = { fields: "*", supportsAllDrives: true, pageSize: 50 };
        return new Promise((i, r) => {
          !(function l(c) {
            const d = new URL(
                "https://www.googleapis.com/drive/v3/files/".concat(
                  e,
                  "/permissions"
                )
              ),
              u = Object.assign({}, a);
            c && (u.pageToken = c);
            for (var p in u) d.searchParams.append(p, u[p]);
            return fetch(d.toString(), {
              method: "GET",
              headers: new Headers({ Authorization: "Bearer ".concat(o) }),
            })
              .then((e) => e.json())
              .then((e) => {
                const { permissions: o, nextPageToken: a } = e;
                o.length && (require = require.concat(o)),
                  a
                    ? setTimeout(function () {
                        l(a);
                      })
                    : i(
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
                      );
              })
              .catch((e) => r(e));
          })();
        });
      }),
      (g.prototype.createOrUpdateUserShare = async function (e, t) {
        if (!e)
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.no-file-found")
            )
          );
        if (
          !this.getTokenIssuerSettings() ||
          !this.getTokenIssuerSettings().corporate
        )
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
            )
          );
        const { role: require, emailAddress: o } = t;
        if (!require || !o)
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.not-enough-parameters")
            )
          );
        const a = await this.getShareIdForEmail(e, o).catch(() => []),
          r = { type: "user", emailAddress: o, role: l.default[require.id] };
        if (a && a.length > 0) {
          const t = await this.removeShare(e, a[0]);
          if (t.error) {
            const {
              error: {
                errors: [{ message: e }],
              },
            } = t;
            return Promise.reject(e);
          }
          if (r.role === l.NoAccessId) return t;
        }
        return this._createShare(e, r).then((e) => {
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
      }),
      (g.prototype.createDomainShare = function (e, t) {
        if (!e)
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.no-file-found")
            )
          );
        if (
          !this.getTokenIssuerSettings() ||
          !this.getTokenIssuerSettings().corporate
        )
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
            )
          );
        const { role: require, domain: o } = t;
        if (!require || !o)
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.not-enough-parameters")
            )
          );
        const a = {
          type: "domain",
          domain: o,
          role: l.default[require.id],
          allowFileDiscovery: true,
        };
        return this._createShare(e, a);
      }),
      (g.prototype._createShare = async function (e, t) {
        if (
          !this.getTokenIssuerSettings() ||
          !this.getTokenIssuerSettings().corporate
        )
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
            )
          );
        const require = new URL(
            "https://www.googleapis.com/drive/v3/files/".concat(
              e,
              "/permissions"
            )
          ),
          o = await this.getAccessToken(),
          a = { fields: "*", supportsAllDrives: true, sendNotificationEmail: false };
        for (var r in a) require.searchParams.append(r, a[r]);
        return fetch(require.toString(), {
          method: "POST",
          headers: new Headers({
            Authorization: "Bearer ".concat(o),
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(t),
        }).then((e) => e.json());
      }),
      (g.prototype.getShareIdForEmail = async function (e, t) {
        return this.getTokenIssuerSettings() &&
          this.getTokenIssuerSettings().corporate
          ? (await this.getFilePermissions(e, true)).filter((e) => {
              let { emailAddress: require } = e;
              return require === t;
            })
          : Promise.reject(
              i.GLocale.get(
                new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
              )
            );
      }),
      (g.prototype.removeShare = async function (e, t) {
        let { id: require } = t;
        if (
          !this.getTokenIssuerSettings() ||
          !this.getTokenIssuerSettings().corporate
        )
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GGoogleDrive", "error.only-for-corporate")
            )
          );
        const o = new URL(
            "https://www.googleapis.com/drive/v3/files/"
              .concat(e, "/permissions/")
              .concat(require)
          ),
          a = await this.getAccessToken(),
          r = { fields: "*", supportsAllDrives: true };
        for (var s in r) o.searchParams.append(s, r[s]);
        return fetch(o.toString(), {
          method: "DELETE",
          headers: new Headers({ Authorization: "Bearer ".concat(a) }),
        }).then((e) => (204 !== e.status ? e.json() : e));
      }),
      (g.prototype._simpleUpload = async function (e, t, n) {
        const o = await this.getAccessToken();
        return new Promise((i, a) => {
          var r = new FormData();
          r.append(
            "metadata",
            new Blob([JSON.stringify(n)], { type: "application/json" })
          ),
            r.append("file", t);
          var s = new URL(
              "https://www.googleapis.com/upload/drive/v3/files/".concat(
                e || ""
              )
            ),
            l = { uploadType: "multipart", fields: "*" };
          for (var c in (n.hasOwnProperty("driveId") &&
            (l.supportsAllDrives = true),
          l))
            s.searchParams.append(c, l[c]);
          fetch(s.toString(), {
            method: e ? "PATCH" : "POST",
            headers: new Headers({ Authorization: "Bearer ".concat(o) }),
            body: r,
          })
            .then((e) => e.json())
            .then((e) => {
              i(e);
            })
            .catch((e) => {
              console.error(e), a(e);
            });
        });
      }),
      (g.prototype._resumableUpload = async function (e, t, n, o) {
        const i = await this.getAccessToken();
        return new Promise((a, r) => {
          var s = n.mimeType || "application/octet-stream";
          const l = { fields: "*" };
          n.hasOwnProperty("driveId") && (l.supportsAllDrives = true),
            new d({
              file: t,
              fileId: e,
              token: i,
              contentType: s,
              metadata: n,
              params: l,
              onComplete: function (e) {
                var t;
                try {
                  t = "string" == typeof e ? JSON.parse(e) : e;
                } catch (n) {
                  t = e;
                }
                a(t);
              },
              onError: function (e) {
                r(e);
              },
              onProgress: function (e) {
                o && o(e.loaded / e.total);
              },
            }).upload();
        });
      }),
      (g.prototype._request = async function (e, t, n, o) {
        o = "number" == typeof o ? o : 0;
        const i = await this.getAccessToken(),
          r = { Authorization: "Bearer ".concat(i) },
          s = t.headers ? Object.assign(r, t.headers) : r;
        return (
          delete t.headers,
          fetch(
            e,
            Object.assign({ headers: new Headers(s), signal: n }, t)
          ).then(async (i) => {
            if (!i.ok) {
              var r = await i.json();
              return i.status === p.UNAUTHORIZED &&
                (await gContainer.getGoogleAPI().signIn(), 0 === o)
                ? this._request(e, t, n, ++o)
                : i.status === p.FORBIDDEN &&
                  g.isUsageLimitError(r) &&
                  o < g.TRIAL_UNTIL_FAIL
                ? (await (0, a.sleep)(1e3 * Math.pow(1 + o, 2)),
                  this._request(e, t, n, ++o))
                : Promise.reject(r);
            }
            return i;
          })
        );
      }),
      (g.prototype._requestWithProgress = async function (e, t, n, o, i) {
        i = "number" == typeof i ? i : 0;
        const s = await this.getAccessToken(),
          l = { Authorization: "Bearer ".concat(s) },
          c = t.headers ? Object.assign(l, t.headers) : l;
        delete t.headers;
        const d = await fetch(
          e,
          Object.assign({ headers: new Headers(c), signal: n }, t)
        );
        if (!d.ok) {
          var u = await d.json();
          return d.status === p.UNAUTHORIZED &&
            (await gContainer.getGoogleAPI().signIn(), 0 === i)
            ? this._requestWithProgress(e, t, n, o, ++i)
            : d.status === p.FORBIDDEN &&
              g.isUsageLimitError(u) &&
              i < g.TRIAL_UNTIL_FAIL
            ? (await (0, a.sleep)(1e3 * Math.pow(1 + i, 2)),
              this._requestWithProgress(e, t, n, o, ++i))
            : Promise.reject(u);
        }
        return (0, r.readResponseWithProgress)(d, o, true);
      }),
      (g.prototype.getFile = function (e, t, n, o) {
        var i = new URL(
          "https://www.googleapis.com/drive/v3/files/".concat(e, "?alt=media")
        );
        for (var a in t) i.searchParams.append(a, t[a]);
        return this._requestWithProgress(
          i.toString(),
          { method: "GET" },
          n,
          o
        ).then((e) => e.blob());
      }),
      (g.prototype.getFileDetails = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        var n = new URL(
          "https://www.googleapis.com/drive/v3/files/".concat(e, "?fields=*")
        );
        for (var o in module) n.searchParams.append(o, module[o]);
        return this._request(n.toString(), { method: "GET" }).then((e) =>
          e.ok ? e.json() : e.json().then((e) => Promise.reject(e))
        );
      }),
      (g.prototype.fileExists = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
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
      }),
      (g.prototype.updateFileDetails = function (e) {
        let module =
            arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
          require =
            arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        if (Object.keys(module).length < 1) return Promise.resolve();
        var o = new URL("https://www.googleapis.com/drive/v3/files/".concat(e));
        for (var i in require) o.searchParams.append(i, require[i]);
        return this._request(o.toString(), {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(module),
        });
      }),
      (g.prototype.searchFiles = function (e) {
        var t = new URL("https://www.googleapis.com/drive/v3/files");
        for (var require in e) t.searchParams.append(require, e[require]);
        return this._request(t.toString(), { method: "GET" }).then((e) =>
          e.json()
        );
      }),
      (g.prototype.searchTeamDrives = function (e) {
        var t = new URL("https://www.googleapis.com/drive/v3/drives");
        for (var require in e) t.searchParams.append(require, e[require]);
        return this._request(t.toString(), { method: "GET" }).then((e) =>
          e.json()
        );
      }),
      (g.prototype.getAccountByEmail = function (e) {
        if (!e || e.indexOf("@") <= 0)
          return Promise.reject(
            i.GLocale.get(
              new i.GLocaleKey("GShareDialog", "text.invalid-email")
            ).replace("%email", e)
          );
        var t = new URL(
          "https://www.googleapis.com/admin/directory/v1/users/".concat(
            e,
            "?viewType=domain_public"
          )
        );
        return this._request(t.toString(), { method: "GET" }).then((e) =>
          e.json()
        );
      }),
      (g.prototype.supportsEmailDomainCheck = async function () {
        const exports = await this.getTokenInfo().catch(() => null);
        if (!exports) return false;
        const { scope: module } = exports;
        return Array.isArray(module) ? module.some((e) => require(e)) : require(module);
        function require(e) {
          return e.indexOf("admin.directory.user") >= 0;
        }
      }),
      (g.prototype.getTokenInfo = async function () {
        var e = new URL(
          "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(
            await this.getAccessToken()
          )
        );
        return this._request(e.toString(), { method: "GET" }).then((e) =>
          e.json()
        );
      }),
      (g.MimeType = { Folder: "application/vnd.google-apps.folder" }),
      (g.Kind = { TeamDrive: "drive#teamDrive", Drive: "drive#drive" }),
      (g.UploadType = { Simple: "simple", Resumable: "resumeable" }),
      (g.DefaultUploadType = g.UploadType.Resumable),
      (g.CloudToGoogleRoleMap = l.default),
      (g.GoogleToCloudRoleMap = s.default),
      (g.SearchEngine = {
        Sorts: { Ascending: "", Descending: "desc" },
        OrderBy: {
          CreatedTime: "createdTime",
          ModifiedTime: "modifiedTime",
          Name: "name",
          ViewedByMeTime: "viewedByMeTime",
        },
      }),
      (g.build = function (e) {
        if (!e) {
          if (!gContainer.getGoogleAPI().isLoaded())
            throw Error("Google Drive Client not loaded!");
          e = gContainer.getGoogleAPI().getTokenConfiguration({
            corporate: false,
            accountId: this._accountId,
          });
        }
        return new g(new u(e));
      }),
      (exports.exports = g);
  }