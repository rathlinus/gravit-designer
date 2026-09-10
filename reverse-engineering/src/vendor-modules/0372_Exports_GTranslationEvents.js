/**
 * chunk.vendor.js Module #372
 * Type: exports
 * Name: Exports_GTranslationEvents
 */

function (e, t, i) {
      "use strict";
      (i(30), i(4), i(41), i(13), i(32), i(97), i(33));
      for (
        var n = i(685),
          r = i(686),
          o = i(699),
          a = i(700),
          s = i(701),
          l = i(945),
          h = i(703),
          A = i(704),
          c = i(705),
          p = new o().getMapped(),
          u = new l(),
          d = 0;
        d < p.length;
        d++
      ) {
        var g = p[d],
          f = g.project;
        u.setProject(f);
        for (var m = g.importStack, y = 0; y < m.length; y++) {
          var _ = m[y];
          if (
            _.some(function (e) {
              return (
                e.hasOwnProperty("translations") &&
                Object.keys(e.translations).length
              );
            })
          ) {
            if (
              _.filter(function (e) {
                return e.isDefault;
              }).length > 1
            )
              throw "Only one default language can exist!";
            for (var v = 0; v < _.length; v++) {
              var b = _[v];
              if (b.translations) {
                s.hasOwnProperty(b.language) || (s[b.language] = b.keyValue);
                for (
                  var C = Object.keys(b.translations), w = 0;
                  w < C.length;
                  w++
                ) {
                  var E = C[w],
                    B = Object.assign({}, b.translations[E]);
                  if (
                    (Object.keys(B).forEach(function (e) {
                      B[e] || delete B[e];
                    }),
                    u.setValues(
                      new a(E),
                      s[b.language],
                      Object.keys(B),
                      Object.values(B),
                      !0,
                    ),
                    b.translationsExtended && b.translationsExtended[E])
                  ) {
                    var x = n.extend({}, B, b.translationsExtended[E]);
                    (Object.keys(x).forEach(function (e) {
                      x[e] || delete x[e];
                    }),
                      u.setValues(
                        new a(E),
                        s[b.language],
                        Object.keys(x),
                        Object.values(x),
                        !0,
                        !0,
                      ));
                  }
                }
              }
            }
          }
        }
        var P = g.translations.find(function (e) {
          return (
            r.language &&
            ((5 === r.fullLanguage.length &&
              e.abbreviation.toLowerCase() === r.fullLanguage) ||
              (5 !== r.fullLanguage.length &&
                e.abbreviation.indexOf(r.fullLanguage) >= 0))
          );
        });
        P && u.setLanguage(P.keyValue);
      }
      e.exports = {
        GLocale: u,
        GLocaleLanguage: s,
        ClassReference: a,
        GTranslation: o,
        GLocaleKey: h,
        GTranslationNotificationEvent: A,
        GTranslationEvents: c,
        Factory: function (e) {
          var t = new l();
          return ((t = Object.assign(t, u)).setProject(e), t);
        },
      };
    }