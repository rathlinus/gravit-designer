/**
 * Webpack Module #1613
 * Type: class
 * Name: GSettingsAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GSettingsDialog = require(1275) /* GSettingsDialog */,
      Action_edit_settings = require(1277) /* Action_edit_settings */;
    function l() {}
    GCore.GObject.inherit(l, GAction),
      (l.ID = Action_edit_settings.ID),
      (l.TITLE = new GCore.GLocaleKey("GSettingsAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT;
      }),
      (l.prototype.getGroup = function () {
        return "settings";
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-setting-touch" : "";
      }),
      (l.prototype.execute = async function () {
        new GSettingsDialog().then((e) => e.open());
      }),
      (l.prototype.toString = function () {
        return "[Object GSettingsAction]";
      }),
      (exports.exports = l);
  }