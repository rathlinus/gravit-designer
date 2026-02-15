/**
 * Webpack Module #1568
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* module_58 */, require(19) /* module_19 */, require(8) /* module_8 */, require(20) /* module_20 */, require(107) /* module_107 */, require(71) /* module_71 */, require(134) /* module_134 */, require(4) /* module_4 */, require(41) /* module_41 */, require(26) /* module_26 */;
    var o = require(10) /* module_10 */;
    const i = require(292) /* module_292 */,
      a = require(220) /* module_220 */,
      r = require(78) /* GDocumentEvent */,
      s = require(536) /* module_536 */,
      l = require(177) /* module_177 */,
      c = require(393) /* GCollaborationEvent */;
    var d = null;
    function u(e) {
      if (d) throw new Error("GCloudCommunicationManager is a singleton");
      e.addEventListener(i, this._userLoggedEvent, this),
        e.addEventListener(r, this._documentEvent, this),
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
        return o.gApi.confirmEmail(e).then((e) => (this._removeUserCache(), e));
      }),
      (u.prototype.updateUser = function (e) {
        return o.gApi
          .updateUser(e)
          .then((e) => (this._removeUserCache(), new l(e)));
      }),
      (u.prototype.updateAvatar = function (e) {
        return o.gApi.updateAvatar(e).then((e) => (this._removeUserCache(), e));
      }),
      (u.prototype.useAuthorizationToken = function (e) {
        this._removeUserCache(), o.gApi.useAuthorizationToken(e);
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
              o.gApi
                .getUser()
                .then((e) => new l(e))
                .catch(() => null),
            o.USER_CHECK_MIN_WAIT
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
            case r.Type.Added:
              this._updateDocState(module),
                module.addEventListener(c, this._collaborationEvent, this);
              break;
            case r.Type.Removed:
              module.removeEventListener(c, this._collaborationEvent, this);
              break;
            case r.Type.Modified:
              this._updateDocState(module);
          }
      }),
      (u.prototype._collaborationEvent = function (e) {
        const { sender: module, type: require } = e;
        require === c.Type.ShareUpdate && this._updateDocState(module);
      }),
      (u.prototype._getFileExtended = async function (e) {
        const module =
          (e = e || gDesigner.getActiveDocument()) && e.getStorageItem();
        if (!module) return null;
        const require = module.getId();
        return require
          ? module instanceof a.Item
            ? this.getFileExtended(require).catch(() => null)
            : module && module.supportsSharing() && module.supportsShadowFile()
            ? module.getOrCreateCollaborativeFile()
            : null
          : null;
      });
    var p = {};
    async function g(e, t, n) {
      let i, a;
      try {
        if (((i = o.gApi[t](n)), !(i instanceof Promise))) return i;
        a = await i;
      } catch (e) {
        throw e;
      } finally {
        delete e[n];
      }
      return a;
    }
    (u.prototype.initialize = function () {
      const exports = Object.keys(d).filter((e) => e.startsWith("get")),
        module = o.CACHED_GAPI_FUNCTIONS.filter(
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