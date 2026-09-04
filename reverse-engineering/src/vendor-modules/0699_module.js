/**
 * chunk.vendor.js Module #699
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(96), i(30), i(4), i(41), i(13), i(32), i(38), i(33));
      var n = i(524),
        r = i(940),
        o = i(943),
        a = i(944);

      function s() {}
      ((r = r.map(function (e) {
        var t = e.translations.find(function (e) {
            return e.isDefault;
          }),
          i = e.temporary;
        if (t) {
          (Object.keys(t.translationsExtended).forEach(function (e) {
            if (t.translations.hasOwnProperty(e))
              for (var i in t.translationsExtended[e])
                t.translations[e].hasOwnProperty(i) ||
                  (t.translations[e][i] = t.translationsExtended[e][i]);
            else
              t.translations[e] = Object.assign({}, t.translationsExtended[e]);
          }),
            Object.keys(t.translations).forEach(function (e) {
              for (var i in (t.translationsExtended.hasOwnProperty(e) ||
                (t.translationsExtended[e] = {}),
              t.translations[e]))
                t.translationsExtended[e].hasOwnProperty(i) ||
                  (t.translationsExtended[e][i] = "");
            }));
          var n = JSON.parse(JSON.stringify(t.translations));
          for (var r in n) for (var o in n[r]) n[r][o] = "";
          var a = null;
          if (t.translationsExtended)
            for (r in (a = JSON.parse(JSON.stringify(t.translationsExtended))))
              for (o in a[r]) a[r][o] = "";
          e.translations = e.translations.map(function (e) {
            if (!e.isDefault) {
              for (var r in n)
                e.translations[r] = Object.assign(
                  {},
                  n[r],
                  e.translations.hasOwnProperty(r) ? e.translations[r] : {},
                );
              for (r in a)
                e.translationsExtended[r] = Object.assign(
                  {},
                  a[r],
                  e.translationsExtended.hasOwnProperty(r)
                    ? e.translationsExtended[r]
                    : {},
                );
              for (var r in t.translations)
                if (e.translationsExtended)
                  for (var o in (e.translationsExtended.hasOwnProperty(r) ||
                    (e.translationsExtended[r] = {}),
                  t.translations[r]))
                    e.translationsExtended[r].hasOwnProperty(o) ||
                      (e.translationsExtended[r][o] = "");
            }
            var s = i.find(function (t) {
              return t.keyValue === e.keyValue;
            });
            return (
              s &&
                (s.translations &&
                  (e.translationsTemporary = Object.assign({}, s.translations)),
                s.translationsExtended &&
                  (e.translationsExtendedTemporary = Object.assign(
                    {},
                    s.translationsExtended,
                  ))),
              e
            );
          });
        }
        return e;
      })),
        (s.prototype.getMapped = function () {
          return r;
        }),
        (s.prototype.getByProject = function (e) {
          var t = r.find(function (t) {
            return t.project === e;
          });
          return t && t.translations;
        }),
        (s.prototype.getDiffByProject = function (e) {
          return e === n.Designer ? a : e === n.Cloud ? o : void 0;
        }),
        (s.prototype.getProjectAvailableLanguages = function (e) {
          return this.getByProject(e)
            .filter(function (e) {
              return e.isAvailable;
            })
            .map(function (e) {
              return e.keyValue;
            });
        }),
        (s.Projects = n),
        (e.exports = s));
    }