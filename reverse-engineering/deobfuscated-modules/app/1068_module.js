/**
 * Webpack Module #1068
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(19) /* module_19 */, n(8) /* module_8 */, n(4) /* module_4 */, n(322) /* module_322 */, n(32) /* module_32 */, n(38) /* module_38 */, n(97) /* module_97 */, n(33) /* module_33 */, n(26) /* module_26 */;
    const { GObject: o } = n(1) /* module_1 */,
      i = n(1069) /* module_1069 */;
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
          const t = this._resourceMap.get(e);
          if (!t) return true;
          return !!t(this, e);
        });
      }),
      (a.prototype.extend = function (e) {
        if (this._controlSubjectState.locked) return this;
        if (!(e instanceof a)) throw "Not a valid instance to extend";
        const t = o(this._resourceMap),
          n = o(e._resourceMap);
        return (this._resourceMap = new i(...t, ...n)), this;
        function o(e) {
          return e instanceof Map ? e : new Map(Object.entries(e));
        }
      }),
      (e.exports = a);
  }