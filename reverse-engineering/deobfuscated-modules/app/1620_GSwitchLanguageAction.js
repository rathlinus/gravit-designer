/**
 * Webpack Module #1620
 * Type: class
 * Name: GSwitchLanguageAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      a = _interopRequireDefault(require(443) /* module_443 */),
      AppSettings = require(10) /* AppSettings */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      c = require(219) /* module_219 */,
      GContainer = require(85) /* GContainer */,
      GCloudStorage = require(119) /* GCloudStorage */;
    const GSystemDialog = require(44) /* GSystemDialog */,
      { isExecutingOnMSTeamsSync: g } = a.default;
    function h(e, t) {
      (this._locale = e), (this._title = h.Translations[e] || t);
    }
    (h.Translations = [
      "English",
      "Deutsch",
      "中文",
      "Português",
      "Español",
      "Français",
    ]),
      GCore.GObject.inherit(h, GAction),
      (h.ID = "language"),
      (h.prototype._locale = null),
      (h.prototype._title = null),
      (h.prototype.getId = function () {
        return h.ID + "." + this._locale;
      }),
      (h.prototype.isCheckable = function () {
        return true;
      }),
      (h.prototype.isChecked = function () {
        return GCore.GLocale.getLanguage() === this._locale;
      }),
      (h.prototype.getTitle = function () {
        return this._title;
      }),
      (h.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP_LANGUAGE;
      }),
      (h.prototype.getGroup = function () {
        return "help/language";
      }),
      (h.prototype.isEnabled = function () {
        return true;
      }),
      (h.prototype.isVisible = function () {
        return !g();
      }),
      (h.prototype.execute = function () {
        if (GCore.GLocale.getLanguage() !== this._locale) {
          let e = () => gDesigner.setSetting("language", this._locale),
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
      }),
      (h.prototype._reloadApp = function () {
        gContainer.getRuntime() === GContainer.Runtime.Browser ||
        gContainer.getRuntime() === GContainer.Runtime.PWA
          ? location.reload()
          : new c(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GNewDocumentDialog", "text.restart-app")
              )
            ).open();
      }),
      (h.prototype.toString = function () {
        return "[Object GSwitchLanguageAction]";
      }),
      (exports.exports = h);
  }