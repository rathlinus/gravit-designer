/**
 * Webpack Module #1336
 * Type: class
 * Name: GOpenQuickHelpScreenAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      r = require(1589) /* module_1589 */;
    function s() {}
    GCore.GObject.inherit(s, GAction),
      (s.ID = "help.open-quick-help"),
      (s.TITLE = new GCore.GLocaleKey("GOpenQuickHelpScreenAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP;
      }),
      (s.prototype.getGroup = function () {
        return "help";
      }),
      (s.prototype.isEnabled = function () {
        return true;
      }),
      (s.prototype.isVisible = function () {
        return gDesigner.isTouchEnabled();
      }),
      (s.prototype.execute = function () {
        r.open();
      }),
      (s.prototype.toString = function () {
        return "[Object GOpenQuickHelpScreenAction]";
      }),
      (exports.exports = s);
  }