/**
 * chunk.vendor.js Module #148
 * Type: unknown
 */

function (e, t, i) {
      var n = i(11),
        r = i(50);

      function o() {}
      ((o.formattingKeys = [
        "fontWeight",
        "fontStyle",
        "underline",
        "strikeout",
        "fontColor",
        "fontFamily",
        "fontSize",
        "align",
        "script",
        "transformation",
        "charSpacing",
        "wordSpacing",
        "lineSpacing",
        "transformation",
        "paragraphSpacing",
        "paragraphIndent",
        "ligatures",
        "langScript",
        "variant",
        "fractions",
        "listDepth",
        "listMarker",
        "stylisticSet",
        "localizedForm",
      ]),
        (o.defaultFormatting = {
          fontSize: 10,
          fontFamily: null,
          fontWeight: null,
          fontStyle: null,
          fontColor: "transparent",
          underline: !1,
          strikeout: !1,
          ligatures: !1,
          fractions: !1,
          align: "left",
          script: "normal",
          langScript: "auto",
          variant: null,
          transformation: null,
          charSpacing: 0,
          lineSpacing: 1,
          paragraphSpacing: "0",
          paragraphIndent: 0,
          wordSpacing: 0,
          listDepth: 0,
          listMarker: null,
          stylisticSet: null,
          localizedForm: null,
        }),
        (o.sameFormatting = function (e, t) {
          return o.formattingKeys.every(function (i) {
            return n.equals(e[i], t[i], !0);
          });
        }),
        (o.clone = function (e) {
          var t = {
            text: e.text,
          };
          return (
            o.formattingKeys.forEach(function (i) {
              var n = e[i];
              (!n && Number.isNaN(n)) || (t[i] = n);
            }),
            t
          );
        }),
        (o.multipleValues = {}),
        (o.merge = function (e, t) {
          if (1 === arguments.length)
            return Array.isArray(e) ? e.reduce(o.merge) : e;
          if (arguments.length > 2)
            return o.merge(Array.prototype.slice.call(arguments, 0));
          for (
            var i = {}, a = o.formattingKeys, s = a.length - 1;
            s >= 0;
            s--
          ) {
            var l = a[s];
            if (l in e || l in t) {
              var h = e[l],
                A = t[l];
              h instanceof r && A instanceof r && n.equals(h, A, !0)
                ? (i[l] = h)
                : (i[l] = h === A ? h : o.multipleValues);
            }
          }
          return i;
        }),
        (o.format = function (e, t, i) {
          var n;
          if (Array.isArray(e))
            i
              ? ((n = []),
                e.forEach(function (e) {
                  n.push(o.format(e, t, i));
                }))
              : e.forEach(function (e) {
                  o.format(e, t, i);
                });
          else if (i) {
            var r = {},
              a = {};
            (Object.keys(t)
              .concat(Object.keys(Object.getPrototypeOf(t)))
              .forEach(function (e) {
                t[e] !== o.multipleValues && (r[e] = t[e]);
              }),
              Object.keys(Object.getPrototypeOf(e)).forEach(function (t) {
                r[t] = e[t];
              }),
              Object.keys(e).forEach(function (t) {
                a[t] = {
                  value: e[t],
                };
              }),
              (n = Object.create(r, a)));
          } else
            Object.keys(t).forEach(function (i) {
              t[i] !== o.multipleValues && (e[i] = t[i]);
            });
          return n;
        }),
        (o.consolidate = function () {
          var e;
          return function (t, i) {
            e &&
            o.sameFormatting(e, i) &&
            "string" == typeof e.text &&
            "string" == typeof i.text
              ? (e.text += i.text)
              : t((e = o.clone(i)));
          };
        }),
        (o.getPlainText = function (e) {
          if ("string" == typeof e.text) return e.text;
          if (Array.isArray(e.text)) {
            var t = [];
            return (
              e.text.forEach(function (e) {
                t.push(o.getPiecePlainText(e));
              }),
              t.join("")
            );
          }
          return "_";
        }),
        (o.getPieceLength = function (e) {
          return e.length || 1;
        }),
        (o.getPiecePlainText = function (e) {
          return e.length ? e : "_";
        }),
        (o.getTextLength = function (e) {
          if ("string" == typeof e) return e.length;
          if (Array.isArray(e)) {
            var t = 0;
            return (
              e.forEach(function (e) {
                t += o.getPieceLength(e);
              }),
              t
            );
          }
          return 1;
        }),
        (o.getSubText = function (e, t, i, n) {
          if (0 !== n)
            if ("string" != typeof t)
              if (Array.isArray(t)) {
                var r = 0;
                t.some(function (t) {
                  if (n <= 0) return !0;
                  var a = o.getPieceLength(t);
                  if (r + a > i)
                    if (1 === a) (e(t), (n -= 1));
                    else {
                      var s = t.substr(Math.max(0, i - r), n);
                      (e(s), (n -= s.length));
                    }
                  r += a;
                });
              } else e(t);
            else e(t.substr(i, n));
        }),
        (o.getTextChar = function (e, t) {
          var i;
          return (
            o.getSubText(
              function (e) {
                i = e;
              },
              e,
              t,
              1,
            ),
            i
          );
        }),
        (o.pieceCharacters = function (e, t) {
          if ("string" == typeof t)
            for (var i = 0; i < t.length; i++) e(t[i], i);
          else e(t);
        }),
        (e.exports = o));
    }