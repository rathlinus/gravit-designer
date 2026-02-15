/**
 * Webpack Module #1301
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o() {}
    require(30) /* polyfill_Object_assign */,
      require(57) /* polyfill_parseInt */,
      (o.prototype.type = null),
      (o.prototype.hasKey = function (e) {
        return this.hasOwnProperty(e);
      }),
      (o.prototype.hasValue = function (e) {
        return this.hasKey(e) && undefined !== this[e] && null !== this[e];
      }),
      (o.prototype.getAsInt = function (e) {
        return parseInt(this[e]);
      }),
      (o.from = function (e) {
        if (!e || (e && !Object.keys(e).length)) return null;
        var t = new o();
        return (t = Object.assign(t, e));
      }),
      (o.FileExtension = {
        CDR: "cdr",
        DES: "des",
        CDRAPP: "cdr",
        GVDESIGN: "gvdesign",
      }),
      (exports.exports = o);
  }