/**
 * Webpack Module #1037
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(134) /* polyfill_String_startsWith */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var i = require(1) /* module */,
      a = require(10) /* AppSettings */,
      r = o(require(536) /* module_536 */);
    class s {
      static async setLanguage(e) {
        try {
          const t = i.GLocale.getTranslations(),
            n = i.GTranslation.Projects.Cloud,
            o = i.GTranslation.Projects.Designer,
            r = t.find((t) => t.keyValue === e);
          if (!r) return;
          const s = await this._fetchTranslation(o, r),
            l = await this._fetchTranslation(n, r);
          i.GLocale.replaceValues(o, e, s.translations),
            i.GLocale.replaceValues(n, e, l.translations),
            i.GLocale.setLanguage(e),
            a.GLocaleFactory.setLanguage(e),
            a.gApi.setLanguage(e);
        } catch (e) {}
      }
      static async _shouldFetchTranslation(e, t) {
        if (t.keyValue === i.GLocale.getLanguage())
          try {
            const n = await fetch(await this._getCDNURL(e, t), {
              method: "HEAD",
            }).then((e) => {
              if (e.ok) return e.headers.get("etag");
            });
            if (this._isEtagsEqual(n, t.etag)) return false;
          } catch (e) {}
        return true;
      }
      static _isEtagsEqual(e, t) {
        return (
          e.startsWith("W/") && (e = e.substring(3, e.length - 1)), e === t
        );
      }
      static async _fetchTranslation(e, t) {
        if (!(await this._shouldFetchTranslation(e, t))) return;
        return await fetch(await this._getCDNURL(e, t)).then((e) => e.json());
      }
      static async _getCDNURL(e, t) {
        const require = t.abbreviation,
          o = e.toLowerCase(),
          i = "".concat(require, "/").concat(o);
        let s = this.translationsCacheMap.get(i);
        return (
          s ||
            (s = this.translationsCacheMap
              .set(
                i,
                new r.default(() =>
                  a.gApi
                    .fetchTranslationsURL(require, o)
                    .then((e) => e.url)
                    .catch(() => null)
                )
              )
              .get(i)),
          await s.get()
        );
      }
    }
    (s.translationsCacheMap = new Map()), (exports.exports = s);
  }