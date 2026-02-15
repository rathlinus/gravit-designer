/**
 * Webpack Module #1242
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(96) /* polyfill_JSON_stringify */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* GCore */,
      DataModule_1479 = require(1479) /* DataModule_1479 */,
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
      s = _interopRequireDefault(require(443) /* module_443 */),
      l = require(1243) /* Exports_SHAREPOINT_COMMAND */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */;
    const { getAuthenticator: d, getTeamsContext: u } = s.default;
    function p() {}
    (p.Error = {
      NOT_REGISTERED: 1,
      ONEDRIVE_BUSINESS_ERROR: 2,
      SHAREPOINT_ERROR: 3,
      SHAREPOINT_ONEDRIVE_BUSINESS_ERROR: 4,
      OFFLINE: 5,
      FAILED_TO_OPEN_WINDOW: 6,
      CANCELLED_BY_USER: 7,
    }),
      (p.COMMANDS = {
        ONE_DRIVE_BUSINESS_COMMAND: l.ONE_DRIVE_BUSINESS_COMMAND,
        SHAREPOINT_COMMAND: l.SHAREPOINT_COMMAND,
        MS_TEAMS_COMMAND: l.MS_TEAMS_COMMAND,
      }),
      (p.FAIL_REASONS = {
        POPUP_WINDOW_BLOCKED: "FailedToOpenWindow",
        CANCELLED_BY_USER: "CancelledByUser",
      }),
      (p._instance = null),
      (p.CACHED_TOKENS_PROPERTY_NAME = "msteams.authentication.tokens"),
      (p.getInstance = () => (
        p._instance || (p._instance = new p()), p._instance
      )),
      (p.prototype._loaded = false),
      (p.prototype._loading = false),
      (p.prototype._authenticated = false),
      (p.prototype._tokens = null),
      (p.prototype.authenticate = async function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0]
            ? arguments[0]
            : [l.MS_TEAMS_COMMAND];
        if (!(exports instanceof Array)) return this._connectDrives(exports);
        if (this._authenticated) return true;
        const module = this;
        return new Promise(
          async (n, _interopRequireDefault) => (
            await module._authenticateCommand(exports),
            module
              ._authWithCorelCloud(await module.getOrFetchMSTeamsAccessToken())
              .then((e) => {
                e ? ((module._authenticated = true), n(true)) : _interopRequireDefault();
              })
              .catch(() => {
                _interopRequireDefault();
              })
          )
        );
      }),
      (p.prototype._connectDrives = async function (e) {
        return this._tokens[e] && this.isTokenValid(this._tokens[e])
          ? Promise.resolve(this._tokens[e])
          : (await this._authenticateCommand([e]), this._tokens[e]);
      }),
      (p.prototype.isTokenValid = function (e) {
        return !(!e || !e.expires || e.expires <= Date.now() / 1e3);
      }),
      (p.prototype.isAuthenticated = function () {
        const exports = (this._tokens && this._tokens[l.MS_TEAMS_COMMAND]) || null;
        return (
          !(!exports || !this.isTokenValid(exports)) || ((this._authenticated = false), false)
        );
      }),
      (p.prototype._authenticateCommand = async function (e) {
        const module = this,
          require = await this._getValidCachedTokens(),
          _interopRequireDefault = {};
        let GCore = [];
        if (!require || !Object.values(require).length)
          return this._processAuthenticationCommands(e);
        for (let module = 0, DataModule_1479 = e.length; module < DataModule_1479; module++)
          require[e[module]] ? (_interopRequireDefault[e[module]] = require[e[module]]) : GCore.push(e[module]);
        return 0 === GCore.length
          ? (await module.setTokens(_interopRequireDefault, false), _interopRequireDefault)
          : this._processAuthenticationCommands(e, _interopRequireDefault);
      }),
      (p.prototype._processAuthenticationCommands = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const require = this;
        return new Promise((_interopRequireDefault, DataModule_1479) => {
          d()
            .then((GSystemDialog) =>
              GSystemDialog.authenticate({
                url: ""
                  .concat(window.location.origin, "/msteams-sp.html#")
                  .concat(l.COMMAND_QUERY_PARAM, "=")
                  .concat(e.join(",")),
                width: 600,
                height: 535,
                successCallback: async function (e) {
                  const GCore = {};
                  for (let module in e) {
                    const { expires: require, accessToken: _interopRequireDefault } = e[module];
                    GCore[module] = { token: _interopRequireDefault, expires: Number(require) };
                  }
                  await require.setTokens(Object.assign(module, GCore)), _interopRequireDefault(GCore);
                },
                failureCallback: function (t) {
                  t === p.FAIL_REASONS.POPUP_WINDOW_BLOCKED
                    ? require._handleError(
                        p.Error.FAILED_TO_OPEN_WINDOW,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GMSTeamsAuthenticator",
                            "text.authenticate"
                          )
                        ),
                        (t) => {
                          console.log("target", t.target),
                            require
                              ._processAuthenticationCommands(e)
                              .then((e) => {
                                _interopRequireDefault(e);
                              })
                              .catch((e) => {
                                console.error(">>>reautherror", e), DataModule_1479(e);
                              });
                        }
                      )
                    : t === p.FAIL_REASONS.CANCELLED_BY_USER
                    ? (require._handleError(
                        p.Error.CANCELLED_BY_USER,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GMSTeamsAuthenticator",
                            "text.try-again"
                          )
                        ),
                        () => window.location.reload()
                      ),
                      DataModule_1479())
                    : (require._handleError({ message: t }), DataModule_1479());
                },
              })
            )
            .catch((e) => {
              DataModule_1479(e);
            });
        });
      }),
      (p.prototype._getValidCachedTokens = async function () {
        const exports = this._getCachedTokens();
        if (!exports) return null;
        const module = await u(),
          require = {};
        if (exports.userId !== module.loginHint) return require;
        const _interopRequireDefault = Object.keys(exports);
        for (let module = 0, GCore = _interopRequireDefault.length; module < GCore; module++) {
          const GCore = exports[_interopRequireDefault[module]];
          this.isTokenValid(GCore) && (require[_interopRequireDefault[module]] = GCore);
        }
        return require;
      }),
      (p.prototype._getCachedTokens = function () {
        const exports = window.localStorage.getItem(p.CACHED_TOKENS_PROPERTY_NAME);
        if (!exports) return null;
        let module = null;
        try {
          module = JSON.parse((0, CollaborationMergeUtils.base64StringToString)(exports));
        } catch (e) {
          console.error("Cant decode cache tokens");
        }
        return module;
      }),
      (p.prototype.setTokens = async function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        const require = (await u()).loginHint,
          _interopRequireDefault = await this._getValidCachedTokens();
        (this._tokens = Object.assign({ userId: require }, _interopRequireDefault, e)),
          module &&
            localStorage.setItem(
              p.CACHED_TOKENS_PROPERTY_NAME,
              (0, CollaborationMergeUtils.stringToBase64String)(JSON.stringify(this._tokens))
            );
      }),
      (p.prototype.getOrFetchMSTeamsAccessToken = async function () {
        const exports = (this._tokens && this._tokens[l.MS_TEAMS_COMMAND]) || null;
        return (
          (exports && this.isTokenValid(exports)) ||
            ((this._authenticated = false), await this.authenticate()),
          (this._tokens &&
            this._tokens[l.MS_TEAMS_COMMAND] &&
            this._tokens[l.MS_TEAMS_COMMAND].token) ||
            null
        );
      }),
      (p.prototype._handleError = function (e, t, n) {
        let _interopRequireDefault = null;
        switch (e) {
          case p.Error.OFFLINE:
            _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey("GMSTeamsAuthenticator", "text.offline")
            );
            break;
          case p.Error.ONEDRIVE_BUSINESS_ERROR:
            _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GMSTeamsAuthenticator",
                "text.onedrive-business-error"
              )
            );
            break;
          case p.Error.SHAREPOINT_ERROR:
            _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey("GMSTeamsAuthenticator", "text.sharepoint-error")
            );
            break;
          case p.Error.SHAREPOINT_ONEDRIVE_BUSINESS_ERROR:
            _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GMSTeamsAuthenticator",
                "text.sharepoint-onedrive-business-error"
              )
            );
            break;
          case p.Error.NOT_REGISTERED:
            _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey("GMSTeamsAuthenticator", "text.not_registered")
            );
            break;
          case p.Error.FAILED_TO_OPEN_WINDOW:
            _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GMSTeamsAuthenticator",
                "text.failed-to-open-window"
              )
            );
            break;
          case p.Error.CANCELLED_BY_USER:
            _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GMSTeamsAuthenticator",
                "text.cancelled-by-user"
              )
            );
            break;
          default:
            _interopRequireDefault =
              e && e.message
                ? e.message
                : GCore.GLocale.get(
                    new GCore.GLocaleKey("GMSTeamsAuthenticator", "text.unknown")
                  );
        }
        GSystemDialog.default.splashScreenError(_interopRequireDefault, t, n);
      }),
      (p.prototype._validateAuthenticatedUser = async function () {
        const exports = await this.getUser();
        return !exports || exports.reload || exports.deactivated
          ? (this._handleError(p.Error.NOT_REGISTERED), false)
          : exports && exports.microsoft_corporate_config
          ? exports.microsoft_corporate_config.client_id
            ? !!exports.microsoft_corporate_config.odb_client_id ||
              (this._handleError(p.Error.ONEDRIVE_BUSINESS_ERROR), false)
            : (this._handleError(p.Error.SHAREPOINT_ERROR), false)
          : (this._handleError(p.Error.SHAREPOINT_ONEDRIVE_BUSINESS_ERROR), false);
      }),
      (p.prototype._authWithCorelCloud = async function (e) {
        if (this._loaded || this._loading) return false;
        this._loading = true;
        if (await DataModule_1479.gApi.isOffline({ includeCredentials: false }))
          return (this._loading = false), this._handleError(p.Error.OFFLINE), null;
        const module = await DataModule_1479.gApi
          .authenticateMsTeamsUser(e)
          .catch(
            (e) => (
              console.error(">>>authenticateMsTeamsUser error", e),
              this._handleError(p.Error.NOT_REGISTERED),
              null
            )
          );
        if (!module || !module.ok)
          return (
            this._handleError(p.Error.NOT_REGISTERED), (this._loading = false), false
          );
        return (await module.json().catch(() => null))
          ? ((this._loaded = true),
            (this._loading = false),
            this._validateAuthenticatedUser())
          : (this._handleError(p.Error.NOT_REGISTERED),
            (this._loading = false),
            false);
      }),
      (p.prototype.getUser = async function () {
        if (this._user) return this._user;
        const exports = await gDesigner.getUser();
        return exports ? ((this._user = exports), this._user) : null;
      }),
      (exports.exports = p);
  }