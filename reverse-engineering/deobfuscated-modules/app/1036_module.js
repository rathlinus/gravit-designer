/**
 * Webpack Module #1036
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.GGoogleAPI = module.GDefaultGoogleAPI = undefined),
      require(19) /* module_19 */,
      require(30) /* module_30 */,
      require(8) /* module_8 */,
      require(26) /* module_26 */;
    var o = require(10) /* module_10 */,
      i = require(1) /* module */;
    class a {
      isLoaded() {
        return true;
      }
      init() {
        let {
          appId: exports,
          apiKey: module,
          clientId: require,
          discoveryDocs: o,
          scope: i,
        } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        throw "Not implemented";
      }
      isSignedIn() {
        throw "Not implemented";
      }
      listenSignInStateChanges(e) {}
      install(e) {}
      signIn() {
        throw "Not implemented";
      }
      signOut() {
        throw "Not implemented";
      }
      getTokenConfiguration(e) {
        throw "Not implemented";
      }
      loadFilePicker() {
        throw "Not implemented";
      }
      openFilePicker(e, t) {
        throw "Not implemented";
      }
      getBasicProfile() {
        throw "Not implemented";
      }
      getAccessToken() {
        throw "Not implemented";
      }
      getRefreshToken() {
        throw "Not implemented";
      }
    }
    module.GGoogleAPI = a;
    module.GDefaultGoogleAPI = new (class extends a {
      isLoaded() {
        return !!window.gapi;
      }
      async init() {
        let {
          appId: exports,
          apiKey: module,
          clientId: require,
          discoveryDocs: o,
          scope: a,
        } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        return (
          (this._appId = exports),
          (this._apiKey = module),
          (this._clientId = require),
          (this._discoveryDocs = o),
          (this._scope = a),
          await new Promise((e, t) => {
            gapi.load("client", { callback: e, onerror: t });
          }),
          await gapi.client.init({ apiKey: module, discoveryDocs: o }),
          new Promise(async (e, t) => {
            try {
              const t = await gContainer.getProperty(
                "googleapi_auth_email_hint"
              );
              (this._tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: require,
                scope: a,
                prompt: "",
                callback: "",
                hint: t || "",
                error_callback: () => location.reload(),
              })),
                e();
            } catch (e) {
              t(
                i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.loading-failed")
                )
              );
            }
          })
        );
      }
      async isSignedIn() {
        if (this.isLoaded()) {
          const e = await gContainer.getProperty("googleapi_auth_key");
          return fetch(
            "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=".concat(
              e && e.access_token
            )
          )
            .then((e) => e.json())
            .then((e) => !!e.email)
            .catch(() => false);
        }
        return false;
      }
      install(e) {
        const module = [],
          require = (t) =>
            new Promise((n, o) => {
              let i = document.createElement("script");
              (i.async = true),
                (i.src = t),
                (i.onload = n),
                (i.onerror = o),
                (e || document.getElementsByTagName("head")[0]).appendChild(i);
            });
        return (
          module.push(require("https://apis.google.com/js/api.js")),
          module.push(require("https://accounts.google.com/gsi/client")),
          Promise.all(module)
        );
      }
      async signIn() {
        return (
          await gContainer.setProperty("googleapi_auth_key", null),
          new Promise(async (e, t) => {
            try {
              const n = await gContainer.getProperty(
                "googleapi_auth_email_hint"
              );
              (this._tokenClient.callback = async (n) => {
                n.error && t();
                const o = gapi.client.getToken(),
                  i = {
                    access_token: o.access_token,
                    expires_at: 1e3 * o.expires_in + Date.now(),
                  };
                await gContainer.setProperty("googleapi_auth_key", i), e();
              }),
                this._tokenClient.requestAccessToken({
                  prompt: "",
                  hint: n || "",
                });
            } catch (e) {
              t(
                i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.loading-failed")
                )
              );
            }
          })
        );
      }
      async signOut() {
        this._picker && delete this._picker;
        const exports = await gContainer.getProperty("googleapi_auth_key");
        await google.accounts.oauth2.revoke(exports && exports.access_token),
          gapi.client.setToken(null),
          gContainer.setProperty("googleapi_auth_key", null),
          gContainer.setProperty("googleapi_auth_email_hint", null);
      }
      async getTokenConfiguration() {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        const module = await gContainer.getProperty("googleapi_auth_key");
        return Object.assign(exports, {
          accessToken: module.access_token,
          expires: module.expires_at,
          corporate: false,
        });
      }
      async loadFilePicker() {
        return new Promise((e, t) => {
          gapi.load("picker", {
            timeout: 2e4,
            callback: e,
            ontimeout: () =>
              t(
                i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.loading-failed")
                )
              ),
            onerror: () =>
              t(
                i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.loading-failed")
                )
              ),
          });
        });
      }
      async openFilePicker(e, t) {
        try {
          (await this.isSignedIn()) || (await this.signIn());
          const t = (await gContainer.getProperty("googleapi_auth_key"))
            .access_token;
          this._picker && delete this._picker,
            (this._picker = (0, o.GooglePickerBuilder)({
              appId: this._appId,
              apiKey: this._apiKey,
              accessToken: t,
              language: i.GLocale.getLanguage(),
            })),
            this._picker.setCallback((t) => {
              t.action === google.picker.Action.PICKED && e(t.docs);
            }),
            this._picker.setVisible(true);
        } catch (e) {
          t && t(e);
        }
      }
      async getBasicProfile() {
        (await this.isSignedIn()) || (await this.signIn());
        const exports = await gContainer.getProperty("googleapi_auth_key");
        return fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo?access_token=".concat(
            exports && exports.access_token
          )
        )
          .then((e) => e.json())
          .then(
            (e) => (
              e.email &&
                gContainer.setProperty("googleapi_auth_email_hint", e.email),
              { email: e.email, imageUrl: e.picture, name: e.name }
            )
          )
          .catch(() =>
            reject(
              i.GLocale.get(
                new i.GLocaleKey("GCommonNames", "text.loading-failed")
              )
            )
          );
      }
      async getAccessToken() {
        (await this.isSignedIn()) || (await this.signIn());
        const exports = await gContainer.getProperty("googleapi_auth_key");
        return { expires: exports.expires_at, accessToken: exports.access_token };
      }
    })();
  }