/**
 * Webpack Module #381
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor(e) {
      this._providerManager = e;
    }

    _providerManager = null;
    _enabled = true;

    addPreviews(e) {
      throw new Error('GFontsProvider.addPreviews: virtual');
    }

    load(e, t, n, o) {
      throw new Error('GFontsProvider.load: virtual');
    }

    getTotalFonts(e) {
      throw new Error('GFontsProvider.getTotalFonts: virtual');
    }

    getProviderId() {
      throw new Error('GFontsProvider.getProviderId: virtual');
    }

    resolveFont(e, t, n, o) {
      throw new Error('GFontsProvider.resolveFont: virtual');
    }

    isInitialized() {
      return true;
    }

    resetProvider() {}

    hasEnabler() {
      return false;
    }

    getEnabler() {
      return null;
    }

    setEnabled(e) {
      this._enabled = !!e;
    }

    isEnabled() {
      return this._enabled;
    }

    _searchFilter(e) {
      return function (t) {
        return e.indexOf('%') >= 0
          ? t.family.toLowerCase().startsWith(e.replace(/%/g, ''))
          : t.family.toLowerCase() == e.toLowerCase();
      };
    }

    _getClosestKey(e, t, n, o) {
      var i,
        a = Number.POSITIVE_INFINITY;
      n = Number(n);
      for (var r = -1, s = 0; s < e.length; s++) {
        var l = e[s];
        l.family === t &&
          ((i = (n - l.weight) * (n - l.weight)),
          o !== l.style && (i += 9e4),
          i < a && ((a = i), (r = s)));
      }
      return r;
    }

    static Errors = { UnknownError: 0, ConnectionError: 1 };

  }
  (require(20),
    require(34),
    require(134),
    exports.exports = o);
}