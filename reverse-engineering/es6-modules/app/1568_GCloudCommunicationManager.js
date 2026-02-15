/**
 * Webpack Module #1568
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(107) /* polyfill_RegExp_test */,
    require(71) /* polyfill_String_includes */,
    require(134) /* polyfill_String_startsWith */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var AppSettings = require(10);
  const GEvent_user = require(292) /* GEvent_user */,
    a = require(220) /* Item */,
    GDocumentEvent = require(78) /* GDocumentEvent */,
    s = require(536) /* module_536 */,
    GUserModel = require(177) /* GUserModel */,
    GCollaborationEvent = require(393);
  var d = null;
  class u {
    constructor(e) {
      if (d) throw new Error('GCloudCommunicationManager is a singleton');
      (e.addEventListener(GEvent_user, this._userLoggedEvent, this),
      e.addEventListener(GDocumentEvent, this._documentEvent, this),
      (d = this),
      this.initialize());
    }

    _fileCacheMapExt = {};
    _userCache = null;

    async getUser() {
      this._initializeUserCache();
      const exports = await this._userCache.get();
      return (exports || this._userCache.reset(), exports);
    }

    confirmEmail(e) {
      return AppSettings.gApi.confirmEmail(e).then((e) => (this._removeUserCache(), e));
    }

    updateUser(e) {
      return AppSettings.gApi
        .updateUser(e)
        .then((e) => (this._removeUserCache(), new GUserModel(e)));
    }

    updateAvatar(e) {
      return AppSettings.gApi.updateAvatar(e).then((e) => (this._removeUserCache(), e));
    }

    useAuthorizationToken(e) {
      (this._removeUserCache(), AppSettings.gApi.useAuthorizationToken(e));
    }

    userPropertiesChanged() {
      this._removeUserCache();
    }

    async getFileExtendedCached(e) {
      var t = (e = e || gDesigner.getActiveDocument()).getId();
      return t
        ? (this._fileCacheMapExt[t] ||
            (this._fileCacheMapExt[t] = new s(() => this._getFileExtended(e))),
          this._fileCacheMapExt[t].get())
        : null;
    }

    _userLoggedEvent(e) {
      const { user: module } = e;
      (module
        ? (this._initializeUserCache(), this._userCache.setCacheValue(module))
        : this._removeUserCache(),
        this._resetAllCache());
    }

    _removeUserCache() {
      this._userCache = null;
    }

    async _initializeUserCache() {
      this._userCache ||
        (this._userCache = new s(
          () =>
            AppSettings.gApi
              .getUser()
              .then((e) => new GUserModel(e))
              .catch(() => null),
          AppSettings.USER_CHECK_MIN_WAIT
        ));
    }

    _updateDocState(e) {
      this._resetFileCache(e);
    }

    _resetFileCache(e) {
      if (e) {
        var module = e.getId();
        return module && this._fileCacheMapExt[module]
          ? this._fileCacheMapExt[module].reset()
          : undefined;
      }
    }

    _resetAllCache() {
      this._fileCacheMapExt = {};
    }

    _documentEvent(e) {
      const module = e.document;
      if (module)
        switch (e.type) {
          case GDocumentEvent.Type.Added:
            (this._updateDocState(module),
              module.addEventListener(GCollaborationEvent, this._collaborationEvent, this));
            break;
          case GDocumentEvent.Type.Removed:
            module.removeEventListener(GCollaborationEvent, this._collaborationEvent, this);
            break;
          case GDocumentEvent.Type.Modified:
            this._updateDocState(module);
        }
    }

    _collaborationEvent(e) {
      const { sender: module, type: require } = e;
      require === GCollaborationEvent.Type.ShareUpdate && this._updateDocState(module);
    }

    async _getFileExtended(e) {
      const module = (e = e || gDesigner.getActiveDocument()) && e.getStorageItem();
      if (!module) return null;
      const require = module.getId();
      return require
        ? module instanceof a.Item
          ? this.getFileExtended(require).catch(() => null)
          : module && module.supportsSharing() && module.supportsShadowFile()
            ? module.getOrCreateCollaborativeFile()
            : null
        : null;
    }

    initialize() {
    const exports = Object.keys(d).filter((e) => e.startsWith('get')),
      module = AppSettings.CACHED_GAPI_FUNCTIONS.filter(
        (t) => /^is|^get/.test(t) && !exports.includes(t)
      );
    for (let exports of module)
      ((p[exports] = {}),
        (d[exports] = async function (e) {
          const module = p[this];
          if (undefined !== module[e]) return module[e];
          const require = g(module, this, e);
          return (require instanceof Promise && (module[e] = require), require);
        }.bind(exports)));
  }

    static clearSingleton() {
    d = null;
  }

  }
  var p = {};
  async function g(e, t, n) {
    let GEvent_user, a;
    try {
      if (((GEvent_user = AppSettings.gApi[t](n)), !(GEvent_user instanceof Promise)))
        return GEvent_user;
      a = await GEvent_user;
    } catch (e) {
      throw e;
    } finally {
      delete e[n];
    }
    return a;
  };
  exports.exports = u;
}