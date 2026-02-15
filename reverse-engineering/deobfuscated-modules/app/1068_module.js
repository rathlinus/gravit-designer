/**
 * Webpack Module #1068
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(8) /* module_8 */, require(4) /* module_4 */, require(322) /* module_322 */, require(32) /* module_32 */, require(38) /* module_38 */, require(97) /* module_97 */, require(33) /* module_33 */, require(26) /* module_26 */;
    const { GObject: o } = require(1) /* module */,
      i = require(1069) /* module_1069 */;
    function a() {
      (this._resourceMap = new i()),
        (this._controlSubjectState = { locked: false });
    }
    o.inherit(a, o),
      (a.prototype._controlSubjectState = null),
      (a.prototype.lockPermissions = function () {
        (this._controlSubjectState.locked = true),
          Object.freeze(this._controlSubjectState),
          Object.freeze(this._resourceMap);
      }),
      (a.prototype.grant = function (e, t) {
        if (this._controlSubjectState.locked) return this;
        if (
          (e = e instanceof Array ? e : [e]).some((e) =>
            this._resourceMap.has(e)
          )
        )
          throw "Can't override an existing resource";
        return e.forEach((e) => this._resourceMap.set(e, t)), this;
      }),
      (a.prototype.revoke = function (e) {
        return (
          this._controlSubjectState.locked ||
            (e = e instanceof Array ? e : [e]).forEach((e) => {
              this._resourceMap.has(e) && this._resourceMap.delete(e);
            }),
          this
        );
      }),
      (a.prototype.can = function (e) {
        return (
          (e = e instanceof Array ? e : [e]),
          Promise.all(
            e.map(async (e) => {
              if (!this._resourceMap.has(e)) return false;
              var t = this._resourceMap.get(e);
              return !t || !!(await t(this, e));
            })
          ).then((e) => e.every((e) => !!e))
        );
      }),
      (a.prototype.canSync = function (e) {
        return (e = e instanceof Array ? e : [e]).every((e) => {
          if (!this._resourceMap.has(e)) return false;
          const module = this._resourceMap.get(e);
          if (!module) return true;
          return !!module(this, e);
        });
      }),
      (a.prototype.extend = function (e) {
        if (this._controlSubjectState.locked) return this;
        if (!(e instanceof a)) throw "Not a valid instance to extend";
        const module = o(this._resourceMap),
          require = o(e._resourceMap);
        return (this._resourceMap = new i(...module, ...require)), this;
        function o(e) {
          return e instanceof Map ? e : new Map(Object.entries(e));
        }
      }),
      (exports.exports = a);
  }