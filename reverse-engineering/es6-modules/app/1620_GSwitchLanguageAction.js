/**
 * Webpack Module #1620
 * Type: class
 * Name: GSwitchLanguageAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    a = _interopRequireDefault(require(443) /* module_443 */),
    AppSettings = require(10) /* AppSettings */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    c = require(219) /* GLocale */,
    GContainer = require(85) /* GContainer */,
    GCloudStorage = require(119);
  const GSystemDialog = require(44) /* GSystemDialog */,
    { isExecutingOnMSTeamsSync: g } = a.default;
  class h extends GAction {
    constructor(e, t) {
      super();
      ((this._locale = e), (this._title = h.Translations[e] || t));
    }

    _locale = null;
    _title = null;

    getId() {
      return h.ID + '.' + this._locale;
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      return GCore.GLocale.getLanguage() === this._locale;
    }

    getTitle() {
      return this._title;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_HELP_LANGUAGE;
    }

    getGroup() {
      return 'help/language';
    }

    isEnabled() {
      return true;
    }

    isVisible() {
      return !g();
    }

    execute() {
      if (GCore.GLocale.getLanguage() !== this._locale) {
        let e = () => gDesigner.setSetting('language', this._locale),
          t = () =>
            AppSettings.gApi
              .updateUser({ locale: GCore.GLocale.lookupLocale(this._locale) })
              .then(() => e())
              .then(() => this._reloadApp())
              .catch((e) => GSystemDialog.alert(AppSettings.gApi.formatError(e)));
        gDesigner.getUser().then((n) => {
          n
            ? gDesigner.isAnonymous()
              ? (e(), this._reloadApp())
              : t()
            : GCloudStorage.performLogin().then((e) => {
                e && t();
              });
        });
      }
    }

    _reloadApp() {
      gContainer.getRuntime() === GContainer.Runtime.Browser ||
      gContainer.getRuntime() === GContainer.Runtime.PWA
        ? location.reload()
        : new c(
            GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.restart-app'))
          ).open();
    }

    toString() {
      return '[Object GSwitchLanguageAction]';
    }

    static Translations = ['English', 'Deutsch', '中文', 'Português', 'Español', 'Français'];

    static ID = 'language';

  }
  exports.exports = h;
}