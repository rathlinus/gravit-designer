/**
 * Webpack Module #1301
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    type = null;

    hasKey(e) {
      return this.hasOwnProperty(e);
    }

    hasValue(e) {
      return this.hasKey(e) && undefined !== this[e] && null !== this[e];
    }

    getAsInt(e) {
      return parseInt(this[e]);
    }

    static from(e) {
      if (!e || (e && !Object.keys(e).length)) return null;
      var t = new o();
      return (t = Object.assign(t, e));
    }

    static FileExtension = {
      CDR: 'cdr',
      DES: 'des',
      CDRAPP: 'cdr',
      GVDESIGN: 'gvdesign',
    };

  }
  (require(30),
    require(57),
    exports.exports = o);
}