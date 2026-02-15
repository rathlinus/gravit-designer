/**
 * Webpack Module #85
 * Type: class
 * Name: GContainer
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(168) /* polyfill_Array_reduce */,
    require(96) /* polyfill_JSON_stringify */,
    require(8) /* polyfill_bundle_ES6 */,
    require(3) /* polyfill_RegExp_toString */,
    require(71) /* polyfill_String_includes */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(169) /* stub_requires_683 */,
    require(26) /* polyfill_DOMCollection_iterator */,
    require(125) /* stub_requires_673 */,
    require(126) /* polyfill_URL_toJSON */,
    require(114)) /* stub_requires_424 */;
  var GCore = require(1) /* GCore */,
    GGoogleAPI = require(1036) /* Exports_GGoogleAPI */,
    AppSettings = require(10) /* AppSettings */,
    ExternalFileSettingsError = _interopRequireDefault(
      require(734) /* ExternalFileSettingsError */
    ),
    l =
      (_interopRequireDefault(require(355) /* AppError */),
      _interopRequireDefault(require(1037) /* module_1037 */)),
    GFontsProviderManager = require(255) /* GFontsProviderManager */,
    barrel_editor_actions = require(590) /* barrel_editor_actions */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GOpenRecentAction = require(843) /* GOpenRecentAction */,
    barrel_panels = require(257) /* barrel_panels */,
    h = require(219) /* GLocale */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GDocumentEvent = require(78);
  class y extends GCore.GEventTarget {
    constructor() {
      super();
    }

    _recentDocuments = null;
    _deepLinking = null;

    getRuntime() {
      throw new Error('Not implemented.');
    }

    getStorage() {
      throw new Error('Not implemented.');
    }

    getRootPath() {
      return '';
    }

    registerFontProviders() {
      GFontsProviderManager.registerProvider(barrel_editor_actions);
    }

    getSystemFontsProvider() {
      return null;
    }

    supportsLocalFonts() {
      return false;
    }

    getProperty(e) {
      return new Promise((t) => {
        var n = window.localStorage.getItem(e) || null;
        t(n ? JSON.parse(n) : null);
      });
    }

    setProperty(e, t) {
      window.localStorage.setItem(e, JSON.stringify(t));
    }

    removeProperty(e) {
      window.localStorage.removeItem(e);
    }

    getPropertyKeyByIndex(e) {
      return window.localStorage.key(e);
    }

    getStorageLength() {
      return window.localStorage.length;
    }

    setCookie(e) {
      let { name: module, value: require } = e;
      return navigator.cookieEnabled
        ? ((document.cookie = ''.concat(module, '=').concat(require, '; path=/')),
          (document.cookie = ''
            .concat(module, '=')
            .concat(require, '; path=/; domain=')
            .concat(AppSettings.DOMAIN)),
          Promise.resolve())
        : Promise.reject();
    }

    handleDeepLinking(e) {
      const module = new URL(e || window.location.href).searchParams,
        require = Object.keys(y.DeepLinking).find((e) => module.has(y.DeepLinking[e]));
      if (require) {
        const e = {
          link: y.DeepLinking[require],
          options: Array.from(module.entries()).reduce((e, t) => ((e[t[0]] = t[1]), e), {}),
        };
        return ((this._deepLinking = e), this._deepLinking);
      }
      return null;
    }

    shouldBypassEmailVerification() {
      return this._deepLinking && this._deepLinking.link === y.DeepLinking.DirectLink;
    }

    init(e) {
      return (
        window.gDesigner && gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
        e(this)
      );
    }

    _documentEvent(e) {
      (e.type !== GDocumentEvent.Type.Activated &&
        e.type !== GDocumentEvent.Type.StorageItemUpdated) ||
        this._updateClientAPI(e.document);
    }

    _updateClientAPI(e) {
      const module = e && e.getToken();
      if (module) {
        const n = gDesigner.getActiveDocument();
        (!n || e === n) && AppSettings.gApi.setToken({ token: module });
      }
    }

    start() {}

    async preLogin() {}

    signWithMagicLink(e, t, n) {
      return AppSettings.gApi.magicLink.authenticate(e, t, n);
    }

    canUnload(e, t) {
      let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
      var _interopRequireDefault = !e && !t;
      return require ? Promise.resolve(_interopRequireDefault) : _interopRequireDefault;
    }

    openExternalLink() {}

    copyToClipboard() {
      return Promise.resolve();
    }

    initLanguage(e, t) {
      const require = () =>
        this.getProperty('designer.settings').then(async (e) => {
          if (e && e.hasOwnProperty('language')) {
            const t = e.language;
            if (y.GravitLanguages.indexOf(t) >= 0) await l.default.setLanguage(t);
            else {
              let e =
                GCore.GSystem.language && GCore.GLocale.lookupLanguage(GCore.GSystem.language);
              e && y.GravitLanguages.includes(e)
                ? await l.default.setLanguage(e)
                : await l.default.setLanguage(GCore.GLocaleLanguage.English);
            }
          }
        });
      if (t)
        return new Promise(async (GCore) => {
          try {
            (await _interopRequireDefault(t), e && e(), GCore());
          } catch (t) {
            (await require(), e && e(), GCore());
          }
        });
      async function _interopRequireDefault(e) {
        const t = GCore.GLocale.lookupLanguage(e);
        null !== t &&
          (y.GravitLanguages.indexOf(t) >= 0
            ? ('undefined' != typeof gDesigner && gDesigner.setSetting('language', t),
              await l.default.setLanguage(t))
            : await l.default.setLanguage(GCore.GLocaleLanguage.English));
      }
      AppSettings.gApi
        .getUser()
        .then(async (t) => {
          (t && !t.anonymous ? await _interopRequireDefault(t.locale) : await require(), e && e());
        })
        .catch(async () => {
          (await require(), e && e());
        });
    }

    newDocumentActionPerformed(e) {
      e && e();
    }

    getRecentDocuments() {
      return this._recentDocuments || [];
    }

    isRecentDocument(e) {
      return (
        !!(e && this._recentDocuments && this._recentDocuments.length) &&
        !!this._recentDocuments.find((t) => t._id === e._id)
      );
    }

    updateRecentDocumentsAction(e) {
      var t;
      this._recentDocuments = e;
      const require = gDesigner.getMainMenu();
      if (require) {
        const e = (t = require.findItem(GCore.GLocale.get(MenuItemBuilder.CATEGORY_FILE.label)));
        if (e && e.getMenu()) {
          const n = e
            .getMenu()
            .findItem(
              GCore.GLocale.get(MenuItemBuilder.CATEGORY_FILE_OPEN_RECENT.label).split('/')[1]
            );
          n && (t = n.getMenu());
        }
      }
      if (t)
        if ((t.clearItems(), e.length > 0))
          for (
            var _interopRequireDefault = e[0] instanceof this._storage.constructor.Item,
              GGoogleAPI = 0;
            GGoogleAPI < e.length;
            ++GGoogleAPI
          ) {
            let n = e[GGoogleAPI];
            n instanceof this._storage.constructor.Item ||
              !_interopRequireDefault ||
              (gDesigner.addMenuSeparator(t), (_interopRequireDefault = false));
            const GCore = this.getRecentDocumentIconClass(n),
              AppSettings = n.getName() + '.' + n.getExtension().toLowerCase();
            gDesigner.addMenuItem(t, AppSettings, GCore, null, null, function () {
              try {
                gDesigner.openDocument(n);
              } catch (e) {
                if (!(e instanceof ExternalFileSettingsError.default)) throw e;
                GSystemDialog.externalFileError(true);
              }
            });
          }
        else {
          var AppSettings = gDesigner.addMenuItem(t);
          gDesigner.updateMenuItem(
            AppSettings,
            GCore.GLocale.get(GOpenRecentAction.TITLE),
            false,
            false
          );
        }
    }

    getRecentDocumentIconClass(e) {
      return e instanceof this._storage.constructor.Item
        ? null
        : '[Object GGoogleDriveStorage.Item]' === e.toString()
          ? 'gravit-icon-googledrive-logo'
          : '[Object GSharePointStorage.Item]' === e.toString()
            ? 'gravit-icon-sharepoint-logo'
            : '[Object GOneDriveBusinessStorage.Item]' === e.toString()
              ? 'gravit-icon-onedrivebusiness-logo'
              : barrel_panels['gravit-icon-cloud-logo'];
    }

    triggerClose() {}

    getGoogleAPI() {
      return GGoogleAPI.GDefaultGoogleAPI;
    }

    signWithOAuth(e) {
      return new Promise((t, n) => {
        AppSettings.gApi
          .popup('/auth/' + e)
          .then((e) => {
            e ? t(e) : n();
          })
          .catch((e) => {
            let t;
            ('string' == typeof e && (t = e),
              !t && e && e.message && (t = e.message),
              !t && e && e.errors && (t = e.errors.toString()),
              !t && e && (t = e),
              n(t));
          });
      });
    }

    isMemoryInfoAvailable() {
      return false;
    }

    getMemoryInfo() {
      return null;
    }

    _getJsHeapLimitSize() {
      return window.performance.memory
        ? window.performance.memory.jsHeapSizeLimit
        : AppSettings.JS_HEAP_SIZE_LIMIT_POYFILL;
    }

    _estimatingMemoryUsage() {
      return (
        gDesigner
          .getDocuments()
          .reduce(
            (e, t) => (e + (t && t.getStorageItem()) ? t.getStorageItem().documentRealFileSize : 0),
            0
          ) *
          AppSettings.FILE_SIZE_TO_RAM_COEFFCIENT +
        AppSettings.MIN_JS_HEAP_SIZE
      );
    }

    verifyEnoughMemoryToSave(e) {
      try {
        if (e && e.getStorageItem()) {
          var module = this._estimatingMemoryUsage(),
            require =
              this._getJsHeapLimitSize() -
              (module +=
                e.getStorageItem().documentRealFileSize *
                AppSettings.FILE_SIZE_TO_SAVING_RAM_COEFFCIENT);
          if (2 * e.getStorageItem().documentRealFileSize > require) {
            var _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey('GContainer', 'text.not-memary-enough')
            );
            new h(_interopRequireDefault).open();
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    minimizeWindow() {}

    maximizeWindow() {}

    closeWindow() {}

    getStorageDestinations() {
      return [];
    }

    getDefaultStorageDestination(e) {
      const module = this.getStorageDestinations();
      return module ? module.find((t) => t.isSupported(e)) : null;
    }

    getSharepointAuthenticator() {
      return null;
    }

    toString() {
      return '[Object GContainer]';
    }

    nativeShareLink(e, t, n) {
      return this._getNativeShareLinkInstance().share(e, t, n);
    }

    isNativeShareLinkSupported() {
      return (
        !!this._getNativeShareLinkInstance() && this._getNativeShareLinkInstance().isSupported()
      );
    }

    _getNativeShareLinkInstance() {
      return null;
    }

    static OpenFileRequest(e, t) {
      ((this._type = e), (this._content = t));
    }

    static DeepLinking = {
      ProCoupon: 'procoupon',
      PurchaseFlow: 'purchase_flow',
      PurchaseFlowNew: 'purchase_flow_new',
      Purchase: 'purchase',
      ResetPassword: AppSettings.PasswordlessAuthenticationActions.ResetPassword,
      SetPassword: AppSettings.PasswordlessAuthenticationActions.SetPassword,
      PasswordlessToken: AppSettings.PasswordlessAuthenticationActions.PasswordlessToken,
      ConfirmEmail: 'confirm_email',
      Account: 'account',
      Purchases: 'purchases',
      EnterpriseLogIn: 'enterprise',
      DirectLink: 'directlink',
      ResetTrial: 'reset_trial',
      PWADialog: 'pwainstall',
      FocusAnnot: 'annot',
      CreateShare: 'create_share',
      ActivateTrial: 'activate_trial',
    };

    static Runtime = {
      Browser: 'browser',
      Chrome: 'chrome',
      WebWorker: 'webworker',
      Phonegap: 'phonegap',
      Electron: 'electron',
      PWA: 'pwa',
      IPad: 'ipad',
    };

    static GravitLanguages = [...i.GLocale.getAvailableLanguages()];

  }
  (y.OpenFileRequest.prototype.getType = function () {
      return this._type;
    },
    y.OpenFileRequest.prototype.getContent = function () {
      return this._content;
    },
    y.OpenFileRequest.Type = {
      Document: 'document',
      Token: 'token',
      DocumentOrToken: 'documentOrToken',
      StoreContent: 'storeContent',
      ExternalAsset: 'externalAsset',
      Template: 'template',
      Preset: 'preset',
      MSTeamsDeepLink: 'msteamsdeeplink',
    },
    exports.exports = y);
}