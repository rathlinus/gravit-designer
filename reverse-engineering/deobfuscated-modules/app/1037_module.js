/**
 * Webpack Module #1037
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(134) /* polyfill_String_startsWith */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      AppSettings = require(10) /* AppSettings */,
      r = _interopRequireDefault(require(536) /* module_536 */);
    class s {
      static async setLanguage(e) {
        try {
          const t = GCore.GLocale.getTranslations(),
            n = GCore.GTranslation.Projects.Cloud,
            _interopRequireDefault = GCore.GTranslation.Projects.Designer,
            r = t.find((t) => t.keyValue === e);
          if (!r) return;
          const s = await this._fetchTranslation(_interopRequireDefault, r),
            l = await this._fetchTranslation(n, r);
          GCore.GLocale.replaceValues(_interopRequireDefault, e, s.translations),
            GCore.GLocale.replaceValues(n, e, l.translations),
            GCore.GLocale.setLanguage(e),
            AppSettings.GLocaleFactory.setLanguage(e),
            AppSettings.gApi.setLanguage(e);
        } catch (e) {}
      }
      static async _shouldFetchTranslation(e, t) {
        if (t.keyValue === GCore.GLocale.getLanguage())
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
          _interopRequireDefault = e.toLowerCase(),
          GCore = "".concat(require, "/").concat(_interopRequireDefault);
        let s = this.translationsCacheMap.get(GCore);
        return (
          s ||
            (s = this.translationsCacheMap
              .set(
                GCore,
                new r.default(() =>
                  AppSettings.gApi
                    .fetchTranslationsURL(require, _interopRequireDefault)
                    .then((e) => e.url)
                    .catch(() => null)
                )
              )
              .get(GCore)),
          await s.get()
        );
      }
    }
    (s.translationsCacheMap = new Map()), (exports.exports = s);
  }