/**
 * Webpack Module #1199
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(328) /* polyfill_Array_sort */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */, require(134) /* polyfill_String_startsWith */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */;
    var GCore = require(1) /* GCore */,
      i = require(381) /* module_381 */;
    const {
      parseNativeFonts: a,
      getLocalFontsData: r,
      getFontFamily: s,
    } = require(1200) /* GFontListFormatter */;
    function l(e) {
      i.call(this, e);
    }
    GCore.GObject.inherit(l, i);
    var c = GCore.GUtil.uuid();
    (l.VERSION = 1),
      (l.prototype._totalFonts = 0),
      (l.prototype._fontList = []),
      (l.prototype._cachedParsedFonts = {}),
      (l.prototype.addPreviews = function (e) {
        if (e.length)
          for (var module = 0; module < e.length; module++)
            e[module].cachedPreview ||
              (e[module].addPreviewCallback = function (e) {
                var t = document.createElement("div");
                (t.innerHTML = this.displayname || this.family),
                  (t.style.fontFamily = this.family),
                  (t.style.fontStyle =
                    this.style === GCore.GFont.Style.Italic ? "italic" : "normal"),
                  (t.style.fontWeight = this.weight),
                  (t.style.fontSize = "13px"),
                  (t.style.height = "20px"),
                  (t.style.textOverflow = "ellipsis"),
                  (t.style.whiteSpace = "nowrap"),
                  (t.style.overflow = "hidden"),
                  (t.style.display = "flex"),
                  (t.style.alignItems = "center"),
                  e(t);
              });
      }),
      (l.prototype.load = function (e, t, n, GCore) {
        return this._createLocalFontList(e, t, n, GCore);
      }),
      (l.prototype.getTotalFonts = function (e) {
        return e
          ? this._fontList.filter(this._searchFilter(e)).length
          : this._totalFonts;
      }),
      (l.prototype.resetProvider = function () {
        this._fontList = [];
      }),
      (l.prototype.resolveFont = function (e, t, n, i) {
        (n = parseInt(n) || 400), (t = t || GCore.GFont.Style.Normal);
        const a = "".concat(e, "_").concat(t, "_").concat(n);
        return this._cachedParsedFonts[a]
          ? i.done(
              this._cachedParsedFonts[
                "".concat(e, "_").concat(t, "_").concat(n)
              ].blob
            )
          : this._fontList.length
          ? this._processResolveFont(e, t, n, i)
          : this._createLocalFontList("%", 0, 9999, {
              done: () => {
                this._processResolveFont(e, t, n, i);
              },
              fail: i.fail,
            });
      }),
      (l.prototype._processResolveFont = async function (e, t, n, GCore) {
        const i = s(e, this._findInFontsList.bind(this));
        if (!i) return GCore.fail();
        const r = i.isLocalFont ? await a(i.fonts) : i.fonts;
        if (!r || !Array.isArray(r) || !r.length) return GCore.fail();
        const l = r.find(function (GCore) {
          return (
            (GCore.style === t && GCore.weight === n && GCore.family === e) ||
            (GCore.style === t &&
              GCore.weight === n &&
              GCore.family.replace(" " + GCore.subfamily, "") === e)
          );
        });
        if (l) {
          const i = "".concat(e, "_").concat(t, "_").concat(n);
          return (
            (this._cachedParsedFonts[i] = l),
            void setTimeout(() => {
              GCore.done(l.blob);
            }, 10)
          );
        }
        GCore.fail();
      }),
      (l.prototype._createLocalFontList = function (e, t, n, GCore) {
        if (this._fontList && this._fontList.length > 0)
          return GCore.done(
            this._getFilteredFontsList.call(this, e, t, n),
            true,
            null
          );
        this._createLocalFontListPromise
          ? this._createLocalFontListCallbacks.push(GCore)
          : ((this._createLocalFontListCallbacks = [GCore]),
            (this._createLocalFontListPromise = new Promise(async (e) => {
              let t = await r(),
                n = [];
              for (var GCore = 0; GCore < t.length; GCore++) {
                const e = t[GCore],
                  i = n.findIndex((t) => {
                    let { family: n } = t;
                    return n === e.family;
                  });
                -1 === i
                  ? n.push({ family: e.family, fonts: [e], isLocalFont: true })
                  : n[i].fonts.push(e);
              }
              (this._fontList = n.sort((e, t) => {
                let { family: n } = e,
                  { family: GCore } = t;
                return n - GCore;
              })),
                e();
            })),
            this._createLocalFontListPromise.then(() => {
              this._createLocalFontListCallbacks.map((GCore) => {
                let { done: i } = GCore;
                i(this._getFilteredFontsList.call(this, e, t, n), true, null),
                  (this._createLocalFontListPromise = null),
                  (this._createLocalFontListCallbacks = null);
              }),
                (this._createLocalFontListCallbacks = []);
            }));
      }),
      (l.prototype._getFilteredFontsList = function (e) {
        let module =
            arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0,
          require =
            arguments.length > 2 && undefined !== arguments[2]
              ? arguments[2]
              : 9999;
        return this._fontList
          .filter((t) =>
            e.indexOf("%") >= 0
              ? t.family.toLowerCase().startsWith(e.replace(/%/g, ""))
              : t.family.toLowerCase() === e.toLowerCase()
          )
          .slice(module, module + require);
      }),
      (l.prototype._findInFontsList = function (e) {
        return this._fontList.find(function (t) {
          let { family: require } = t;
          return e === require;
        });
      }),
      (l.prototype.getProviderId = function () {
        return c;
      }),
      (exports.exports = l);
  }