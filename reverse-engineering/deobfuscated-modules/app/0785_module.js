/**
 * Webpack Module #785
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */, require(8) /* module_8 */;
    exports.exports = new (class {
      function Object() { [native code] }() {
        (this._cache = {}), (this._initiliazed = false);
      }
      updateLicense(e) {
        e._offline || this._update({ license: e });
      }
      updateUser(e) {
        this._update({ user: e });
      }
      getUser() {
        return this._cache.user;
      }
      getLicense() {
        if (this._cache.license) {
          const { lastUpdate: exports } = this._cache;
          return (
            (this._cache.license = Object.assign({}, this._cache.license, {
              lastUpdate: exports,
            })),
            this._cache.license
          );
        }
        return null;
      }
      clear() {
        (this._cache = {}), this._store();
      }
      _update(e) {
        this._initiliazed &&
          ((this._cache = Object.assign(this._cache, e)), this._store());
      }
      async init() {
        return gContainer
          .getProperty("offline_cache")
          .then((e) => {
            (this._cache = e || {}), (this._initiliazed = true);
          })
          .catch((e) => Promise.reject(e));
      }
      _store() {
        this._initiliazed &&
          ((this._cache.lastUpdate = gDesigner.now()),
          gContainer.setProperty("offline_cache", this._cache));
      }
    })();
  }