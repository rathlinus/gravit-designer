/**
 * Webpack Module #1641
 * Type: class
 * Name: GSwitchWebcdrAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    var r = require(219) /* module_219 */,
      GContainer = require(85) /* GContainer */;
    const { IS_TRUNK: l, IS_LOCALHOST: c, IS_BETA: d } = require(231) /* module_231 */;
    function u(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      (this._serverName = e), (this._isDefault = !!module);
    }
    GCore.GObject.inherit(u, GAction),
      (u.ID = "help.switchwebcdr"),
      (u.TITLE = new GCore.GLocaleKey("GSwitchWebcdrAction", "title")),
      (u.prototype.getId = function () {
        return u.ID + "." + this._serverName;
      }),
      (u.prototype.isCheckable = function () {
        return true;
      }),
      (u.prototype.isChecked = function () {
        let exports = gDesigner.getSetting("webcdr_choice");
        return (!!exports && exports === this._serverName) || (!exports && this._isDefault);
      }),
      (u.prototype.getTitle = function () {
        return this._serverName;
      }),
      (u.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP_SWITCHWEBCDR;
      }),
      (u.prototype.getGroup = function () {
        return "help/switchwebcdr";
      }),
      (u.prototype.isEnabled = function () {
        return true;
      }),
      (u.prototype.isVisible = function () {
        return !!(l || d || c);
      }),
      (u.prototype.execute = function () {
        gDesigner.setSetting("webcdr_choice", this._serverName),
          this._reloadApp();
      }),
      (u.prototype._reloadApp = function () {
        gContainer.getRuntime() === GContainer.Runtime.Browser ||
        gContainer.getRuntime() === GContainer.Runtime.PWA
          ? location.reload()
          : new r(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GNewDocumentDialog", "text.restart-app")
              )
            ).open();
      }),
      (u.prototype.toString = function () {
        return "[Object GSwitchWebcdrAction]";
      }),
      (exports.exports = u);
  }