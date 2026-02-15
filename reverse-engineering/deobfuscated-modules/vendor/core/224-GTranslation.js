/**
 * Module 224 - GTranslation
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  for (var n = require(632) /* module */, r = require(633) /* module */, o = require(634) /* module */, a = require(635) /* module */, s = require(636) /* module */, l = require(889) /* module */, h = require(637) /* module */, A = require(638) /* module */, c = require(639) /* module */, p = new o().getMapped(), u = new l(), d = 0; d < p.length; d++) {
    var g = p[d], f = g.project;
    u.setProject(f);
    for (var m = g.importStack, y = 0; y < m.length; y++) {
      var _ = m[y];
      if (_.some(function (e) {
          return e.hasOwnProperty("translations") && Object.keys(e.translations).length;
        })) {
        if (_.filter(function (e) {
            return e.isDefault;
          }).length > 1)
          throw "Only one default language can exist!";
        for (var v = 0; v < _.length; v++) {
          var b = _[v];
          if (b.translations) {
            s.hasOwnProperty(b.language) || (s[b.language] = b.keyValue);
            for (var C = Object.keys(b.translations), w = 0; w < C.length; w++) {
              var E = C[w], B = Object.assign({}, b.translations[E]);
              if (Object.keys(B).forEach(function (e) {
                  B[e] || delete B[e];
                }), u.setValues(new a(E), s[b.language], Object.keys(B), Object.values(B), true), b.translationsExtended && b.translationsExtended[E]) {
                var x = n.extend({}, B, b.translationsExtended[E]);
                Object.keys(x).forEach(function (e) {
                  x[e] || delete x[e];
                }), u.setValues(new a(E), s[b.language], Object.keys(x), Object.values(x), true, true);
              }
            }
          }
        }
      }
    }
    var P = g.translations.find(function (e) {
      return r.language && (5 === r.fullLanguage.length && e.abbreviation.toLowerCase() === r.fullLanguage || 5 !== r.fullLanguage.length && e.abbreviation.indexOf(r.fullLanguage) >= 0);
    });
    P && u.setLanguage(P.keyValue);
  }
  exports.exports = {
    GLocale: u,
    GLocaleLanguage: s,
    ClassReference: a,
    GTranslation: o,
    GLocaleKey: h,
    GTranslationNotificationEvent: A,
    GTranslationEvents: c,
    Factory: function (e) {
      var t = new l();
      return (t = Object.assign(t, u)).setProject(e), t;
    }
  };
}
