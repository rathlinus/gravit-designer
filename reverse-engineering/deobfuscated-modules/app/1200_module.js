/**
 * Webpack Module #1200
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(290) /* module_290 */, require(1381) /* stub_requires_1382 */, require(19) /* polyfill_Array_iterator */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* module */;
    function i(e) {
      function module(e) {
        if (Object(e) !== e)
          return Promise.reject(new TypeError(e + " is not an object."));
        var t = e.done;
        return Promise.resolve(e.value).then(function (e) {
          return { value: e, done: t };
        });
      }
      return (
        ((i = function (e) {
          (this.s = e), (this.n = e.next);
        }).prototype = {
          s: null,
          n: null,
          next: function () {
            return module(this.n.apply(this.s, arguments));
          },
          return: function (e) {
            var n = this.s.return;
            return undefined === n
              ? Promise.resolve({ value: e, done: true })
              : module(n.apply(this.s, arguments));
          },
          throw: function (e) {
            var n = this.s.return;
            return undefined === n
              ? Promise.reject(e)
              : module(n.apply(this.s, arguments));
          },
        }),
        new i(e)
      );
    }
    exports.exports = {
      generateFormattedList: function (e) {
        if (!e) return null;
        const module = [];
        var n = e.slice();
        for (let e = 0; e < n.length; e++) {
          var GCore = n[e],
            i = GCore.displayname || GCore.family,
            a = [
              {
                weight: parseInt(GCore.weight),
                style: GCore.style,
                family: GCore.family,
                subfamily: GCore.subfamily || null,
                displayname: GCore.displayname || null,
              },
            ],
            r = [GCore.family];
          module.push({ family: null, displayname: i, fonts: a, families: r });
          for (let module = n.length - 1; module > e; module--)
            i === (n[module].displayname || n[module].family) &&
              (r.indexOf(n[module].family) < 0 && r.push(n[module].family),
              a.push({
                weight: parseInt(n[module].weight),
                style: n[module].style,
                family: n[module].family,
                subfamily: n[module].subfamily || null,
                displayname: n[module].displayname || null,
              }),
              n.splice(module, 1));
          var s = 0,
            l = r[0].length;
          if (l > 0)
            for (let e = 1; e < r.length; e++) {
              if (r[e].toLowerCase().indexOf("regular") >= 0) {
                (l = 0), (s = e);
                break;
              }
              l > r[e].length && ((l = r[e].length), (s = e));
            }
          module[module.length - 1].family = r[s];
        }
        return module;
      },
      parseNativeFonts: async function (e) {
        if (!e || !Array.isArray(e) || !e.length) return [];
        const module = [];
        for (var require = 0; require < e.length; require++) {
          const l = e[require],
            c = await l.blob(),
            d = await c.arrayBuffer();
          if (d) {
            var i = GCore.GOpenTypeUtil.getFont(null, null, null, d, true, true);
            if (i && i.length)
              for (var a = 0; a < i.length; a++) {
                for (
                  var r = i[a], s = 2;
                  module.find(
                    (e) =>
                      e.family === r.family &&
                      e.weight === r.weight &&
                      e.style === r.style
                  );

                )
                  r.subfamily && r.family.indexOf(r.subfamily) < 0
                    ? (r.family = r.family + " " + r.subfamily)
                    : ((r.subfamily = "variant " + s++),
                      (r.family =
                        r.family.replace(
                          /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]variant[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF][0-9]+$/,
                          ""
                        ) +
                        " " +
                        r.subfamily));
                module.push({
                  weight: r.weight,
                  style: r.style,
                  family: r.family,
                  blob: d,
                  displayname: r.displayname,
                  subfamily: r.subfamily,
                });
              }
          }
        }
        return module;
      },
      getLocalFontsData: async () => {
        const exports = [];
        try {
          var module,
            require = false,
            GCore = false;
          try {
            for (
              var a,
                r = (function (e) {
                  var t,
                    n,
                    GCore,
                    a = 2;
                  for (
                    "undefined" != typeof Symbol &&
                    ((n = Symbol.asyncIterator), (GCore = Symbol.iterator));
                    a--;

                  ) {
                    if (n && null != (t = e[n])) return t.call(e);
                    if (GCore && null != (t = e[GCore])) return new i(t.call(e));
                    (n = "@@asyncIterator"), (GCore = "@@iterator");
                  }
                  throw new TypeError("Object is not async iterable");
                })(await window.queryLocalFonts());
              (require = !(a = await r.next()).done);
              require = false
            ) {
              const t = a.value;
              exports.push(t);
            }
          } catch (e) {
            (GCore = true), (module = e);
          } finally {
            try {
              require && null != r.return && (await r.return());
            } finally {
              if (GCore) throw module;
            }
          }
        } catch (e) {
          console.error(">>>error getting local fonts data:", e);
        }
        return exports;
      },
      getFontFamily: function (e, t) {
        let require = e,
          GCore = t(require);
        if (
          (GCore ||
            ((require = require.replace(
              /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]variant[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF][0-9]+$/,
              ""
            )),
            (GCore = t(require))),
          !GCore)
        ) {
          let e = require.split(" ");
          for (
            ;
            e.length > 0 && (e.pop(), (require = e.join(" ")), (GCore = t(require)), !GCore);

          );
        }
        return GCore;
      },
    };
  }