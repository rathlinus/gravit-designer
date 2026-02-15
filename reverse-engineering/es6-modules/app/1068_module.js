/**
 * Webpack Module #1068
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(8) /* polyfill_bundle_ES6 */,
    require(4) /* stub_requires_668 */,
    require(322) /* stub_requires_669 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(97) /* stub_requires_684 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  const { GObject: o } = require(1) /* GCore */,
    i = require(1069);
  class a extends o {
    constructor() {
      super();
      ((this._resourceMap = new i()), (this._controlSubjectState = { locked: false }));
    }

    _controlSubjectState = null;

    lockPermissions() {
      ((this._controlSubjectState.locked = true),
        Object.freeze(this._controlSubjectState),
        Object.freeze(this._resourceMap));
    }

    grant(e, t) {
      if (this._controlSubjectState.locked) return this;
      if ((e = e instanceof Array ? e : [e]).some((e) => this._resourceMap.has(e)))
        throw "Can't override an existing resource";
      return (e.forEach((e) => this._resourceMap.set(e, t)), this);
    }

    revoke(e) {
      return (
        this._controlSubjectState.locked ||
          (e = e instanceof Array ? e : [e]).forEach((e) => {
            this._resourceMap.has(e) && this._resourceMap.delete(e);
          }),
        this
      );
    }

    can(e) {
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
    }

    canSync(e) {
      return (e = e instanceof Array ? e : [e]).every((e) => {
        if (!this._resourceMap.has(e)) return false;
        const module = this._resourceMap.get(e);
        if (!module) return true;
        return !!module(this, e);
      });
    }

    extend(e) {
      if (this._controlSubjectState.locked) return this;
      if (!(e instanceof a)) throw 'Not a valid instance to extend';
      const module = o(this._resourceMap),
        require = o(e._resourceMap);
      return ((this._resourceMap = new i(...module, ...require)), this);
      function o(e) {
        return e instanceof Map ? e : new Map(Object.entries(e));
      }
    }

  }
  exports.exports = a;
}