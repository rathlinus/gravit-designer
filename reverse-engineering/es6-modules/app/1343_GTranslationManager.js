/**
 * Webpack Module #1343
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(96) /* polyfill_JSON_stringify */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(247) /* module_247 */,
    require(91) /* polyfill_String_trim */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1);
  const { TRANSLATION_MANAGER: i } = require(10);
  class a extends GCore.GObject {
    constructor() {
      super();
    }

    _translationBase = null;
    _translations = null;
    _project = null;

    getProjectsDescription() {
      return this._translationBase.getMapped().map((e) => e.project);
    }

    loadProjectTranslations(e) {
      if (!GCore.GTranslation.Projects.hasOwnProperty(e))
        throw Error("Can't load translations, invalid project!");
      ((this._project = e),
        (this._translations = this._translationBase.getByProject(e)),
        (this._classesMap = Object.keys(
          this._translations.find((e) => e.keyValue === GCore.GLocaleLanguage.English).translations
        )));
    }

    getActiveProject() {
      return this._project;
    }

    init() {
      return (
        (this._translationBase = new GCore.GTranslation()),
        this.loadProjectTranslations(GCore.GTranslation.Projects.Designer),
        (this._localeLanguage = GCore.GLocaleLanguage),
        this.isConsideringExtension() && GCore.GLocale.enableExtension(),
        Promise.resolve()
      );
    }

    getTranslationByKey(e) {
      return this._translations.find((t) => t.keyValue === e);
    }

    _clone(e) {
      return JSON.parse(JSON.stringify(e));
    }

    getTranslationCopy(e) {
      return this._clone(this.getTranslationByKey(e));
    }

    import(e) {
      let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : a.FormatTypes.CSV,
        require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
      switch (module) {
        case a.FormatTypes.CSV:
          return this._handleCSVImport(e).then((e) => this.applyTranslationPatch(e, require));
      }
    }

    applyTranslationPatch(e) {
      let module = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
      var n = module ? this._translations : this._clone(this._translations);
      return (
        e.forEach((e) => {
          var t = n.find((t) => t.language === e.language);
          let i = e.translations;
          Object.keys(i).forEach((e) => {
            Object.keys(i[e]).forEach((n) => {
              t.translations[e][n] = i[e][n];
            });
          });
          let a = e.translationsExtended;
          (a &&
            Object.keys(a).forEach((e) => {
              if (0 === Object.keys(a[e]).length) delete t.translationsExtended[e];
              else {
                (t.translationsExtended || (t.translationsExtended = {}),
                  t.translationsExtended[e] || (t.translationsExtended[e] = {}),
                  Object.keys(a[e]).forEach((n) => {
                    t.translationsExtended[e][n] = a[e][n];
                  }));
              }
            }),
            t.translationsExtended &&
              0 === Object.keys(t.translationsExtended).length &&
              delete t.translationsExtended);
          var r = this._clone(e);
          (delete r.translations, delete r.translationsExtended, (t = GCore.GUtil.extend(t, r)));
        }),
        Promise.resolve(n)
      );
    }

    export() {
      let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : a.FormatTypes.CSV,
        module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null,
        require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      switch (exports) {
        case a.FormatTypes.CSV:
          return this._exportAsCSV({ language: module, onlyEmpty: require });
      }
    }

    getMetaData() {
      return Promise.resolve(JSON.stringify(this._translations, null, 4));
    }

    _exportAsCSV(e) {
      let { language: module = null, onlyEmpty: require = false } = e;
      const GCore = function (e) {
        return (e && e.replace(/\r?\n|\r/g, '')) || '';
      };
      var i =
          (null != module &&
            !isNaN(module) &&
            this._translations.filter((e) => e.keyValue === module)) ||
          this._translations,
        r = [];
      const s = this._translations.find((e) => e.isDefault);
      return (
        i.forEach((e) => {
          Object.keys(e.translations).forEach((t) => {
            Object.keys(e.translations[t]).forEach((i) => {
              var l;
              (this.isConsideringExtension() &&
                (l =
                  e.translationsExtended &&
                  e.translationsExtended[t] &&
                  e.translationsExtended[t][i]),
                (require && '' !== e.translations[t][i].trim()) ||
                  r.push(
                    [
                      e.language,
                      t,
                      i,
                      GCore(require ? s.translations[t][i] : e.translations[t][i]),
                      GCore(l),
                    ].join(a._CSV_SEPARATOR)
                  ));
            });
          });
        }),
        Promise.resolve(r.join('\r\n'))
      );
    }

    _handleCSVImport(e) {
      var t = (e) => e.length >= 4,
        n = [];
      return new Promise((i, r) => {
        if (e) {
          var s = e.split(/\r?\n/);
          if (s.length < 1) return r('No rows were found!');
          for (let e = 0; e < s.length; e++) {
            var l = s[e],
              c = l.split(a._CSV_SEPARATOR);
            if (!t(c))
              return r(
                'Invalid number of columns on row ' +
                  (e + 1) +
                  (l.trim().length ? ", content '" + l.substr(0, 30) + "...'" : ', is empty')
              );
            var [d, u, p, g, h] = c;
            if (!GCore.GLocaleLanguage.hasOwnProperty(d))
              return r("Language not available ('".concat(d, "'), row ").concat(e + 1, '!'));
            if (!this._classesMap.find((e) => e === u))
              return r("Reference to UI not available ('".concat(u, "')!, row ").concat(e + 1));
            var f = this._translations.find((e) => e.language === d.trim());
            if (f) {
              var m = n.find((e) => e.language === d);
              (m || ((m = { language: d, translations: {} }), n.push(m)),
                f.translations[u] &&
                  (m.translations[u] || (m.translations[u] = {}),
                  f.translations[u].hasOwnProperty(p) &&
                    ((m.translations[u][p] = g),
                    h &&
                      this.isConsideringExtension() &&
                      (m.translationsExtended || (m.translationsExtended = {}),
                      m.translationsExtended[u] || (m.translationsExtended[u] = {}),
                      (m.translationsExtended[u][p] = h)))));
            }
          }
          return i(n);
        }
      });
    }

    getTranslationRealName(e) {
      var t = this._translations.find((t) => t.keyValue === e);
      return t ? t.realName : null;
    }

    async createNewLanguage(e, t, n) {
      return new Promise((GCore, i) => {
        var a = this.getTranslationTemplate();
        return (
          (a.language = e),
          (a.realName = t),
          (a.abbreviation = n),
          (a.keyValue = this._localeLanguage.hasOwnProperty(e)
            ? this._localeLanguage[e]
            : Math.max(...Object.values(this._localeLanguage)) + 1),
          this._translations.push(a),
          this._localeLanguage.hasOwnProperty(e) || (this._localeLanguage[e] = a.keyValue),
          GCore(a)
        );
      });
    }

    getTranslationTemplate() {
      var e = this.getTranslationCopy(this._localeLanguage.Default);
      return (
        (e.keyValue = null),
        (e.language = null),
        (e.isDefault = false),
        (e.isAvailable = true),
        (e.abbreviation = null),
        Object.keys(e.translations).forEach((t) => {
          Object.keys(e.translations[t]).forEach((n) => {
            e.translations[t][n] = '';
          });
        }),
        e.translationsExtended &&
          Object.keys(e.translationsExtended).forEach((t) => {
            Object.keys(e.translationsExtended[t]).forEach((n) => {
              e.translationsExtended[t][n] = '';
            });
          }),
        e
      );
    }

    isConsideringExtension() {
      return !!i.CONSIDER_EXTENSION;
    }

    static _CSV_SEPARATOR = '|||';

    static FormatTypes = { CSV: 'CSV' };

    static language = e;

    static realName = t;

    static abbreviation = n;

    static keyValue = this._localeLanguage.hasOwnProperty(e)
            ? this._localeLanguage[e]
            : Math.max(...Object.values(this._localeLanguage)) + 1;

  }
  exports.exports = a;
}