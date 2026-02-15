/**
 * Webpack Module #1568
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */, require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */, require(71) /* polyfill_String_includes */, require(134) /* polyfill_String_startsWith */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(26) /* polyfill_DOMCollection_iterator */;
    var AppSettings = require(10) /* AppSettings */;
    const GEvent_user = require(292) /* GEvent_user */,
      Item = require(220) /* Item */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      s = require(536) /* module_536 */,
      GUserModel = require(177) /* GUserModel */,
      GCollaborationEvent = require(393) /* GCollaborationEvent */;
    var d = null;
    function u(e) {
      if (d) throw new Error("GCloudCommunicationManager is a singleton");
      e.addEventListener(GEvent_user, this._userLoggedEvent, this),
        e.addEventListener(GDocumentEvent, this._documentEvent, this),
        (d = this),
        this.initialize();
    }
    (u.clearSingleton = function () {
      d = null;
    }),
      (u.prototype._fileCacheMapExt = {}),
      (u.prototype._userCache = null),
      (u.prototype.getUser = async function () {
        this._initializeUserCache();
        const exports = await this._userCache.get();
        return exports || this._userCache.reset(), exports;
      }),
      (u.prototype.confirmEmail = function (e) {
        return AppSettings.gApi.confirmEmail(e).then((e) => (this._removeUserCache(), e));
      }),
      (u.prototype.updateUser = function (e) {
        return AppSettings.gApi
          .updateUser(e)
          .then((e) => (this._removeUserCache(), new GUserModel(e)));
      }),
      (u.prototype.updateAvatar = function (e) {
        return AppSettings.gApi.updateAvatar(e).then((e) => (this._removeUserCache(), e));
      }),
      (u.prototype.useAuthorizationToken = function (e) {
        this._removeUserCache(), AppSettings.gApi.useAuthorizationToken(e);
      }),
      (u.prototype.userPropertiesChanged = function () {
        this._removeUserCache();
      }),
      (u.prototype.getFileExtendedCached = async function (e) {
        var t = (e = e || gDesigner.getActiveDocument()).getId();
        return t
          ? (this._fileCacheMapExt[t] ||
              (this._fileCacheMapExt[t] = new s(() =>
                this._getFileExtended(e)
              )),
            this._fileCacheMapExt[t].get())
          : null;
      }),
      (u.prototype._userLoggedEvent = function (e) {
        const { user: module } = e;
        module
          ? (this._initializeUserCache(), this._userCache.setCacheValue(module))
          : this._removeUserCache(),
          this._resetAllCache();
      }),
      (u.prototype._removeUserCache = function () {
        this._userCache = null;
      }),
      (u.prototype._initializeUserCache = async function () {
        this._userCache ||
          (this._userCache = new s(
            () =>
              AppSettings.gApi
                .getUser()
                .then((e) => new GUserModel(e))
                .catch(() => null),
            AppSettings.USER_CHECK_MIN_WAIT
          ));
      }),
      (u.prototype._updateDocState = function (e) {
        this._resetFileCache(e);
      }),
      (u.prototype._resetFileCache = function (e) {
        if (e) {
          var module = e.getId();
          return module && this._fileCacheMapExt[module]
            ? this._fileCacheMapExt[module].reset()
            : undefined;
        }
      }),
      (u.prototype._resetAllCache = function () {
        this._fileCacheMapExt = {};
      }),
      (u.prototype._documentEvent = function (e) {
        const module = e.document;
        if (module)
          switch (e.type) {
            case GDocumentEvent.Type.Added:
              this._updateDocState(module),
                module.addEventListener(GCollaborationEvent, this._collaborationEvent, this);
              break;
            case GDocumentEvent.Type.Removed:
              module.removeEventListener(GCollaborationEvent, this._collaborationEvent, this);
              break;
            case GDocumentEvent.Type.Modified:
              this._updateDocState(module);
          }
      }),
      (u.prototype._collaborationEvent = function (e) {
        const { sender: module, type: require } = e;
        require === GCollaborationEvent.Type.ShareUpdate && this._updateDocState(module);
      }),
      (u.prototype._getFileExtended = async function (e) {
        const module =
          (e = e || gDesigner.getActiveDocument()) && e.getStorageItem();
        if (!module) return null;
        const require = module.getId();
        return require
          ? module instanceof Item.Item
            ? this.getFileExtended(require).catch(() => null)
            : module && module.supportsSharing() && module.supportsShadowFile()
            ? module.getOrCreateCollaborativeFile()
            : null
          : null;
      });
    var p = {};
    async function g(e, t, n) {
      let GEvent_user, Item;
      try {
        if (((GEvent_user = AppSettings.gApi[t](n)), !(GEvent_user instanceof Promise))) return GEvent_user;
        Item = await GEvent_user;
      } catch (e) {
        throw e;
      } finally {
        delete e[n];
      }
      return Item;
    }
    (u.prototype.initialize = function () {
      const exports = Object.keys(d).filter((e) => e.startsWith("get")),
        module = AppSettings.CACHED_GAPI_FUNCTIONS.filter(
          (t) => /^is|^get/.test(t) && !exports.includes(t)
        );
      for (let exports of module)
        (p[exports] = {}),
          (d[exports] = async function (e) {
            const module = p[this];
            if (undefined !== module[e]) return module[e];
            const require = g(module, this, e);
            return require instanceof Promise && (module[e] = require), require;
          }.bind(exports));
    }),
      (exports.exports = u);
  }