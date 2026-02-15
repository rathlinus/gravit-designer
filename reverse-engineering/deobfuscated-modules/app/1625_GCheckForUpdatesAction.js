/**
 * Webpack Module #1625
 * Type: class
 * Name: GCheckForUpdatesAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "check-for-updates"),
      (r.TITLE = new GCore.GLocaleKey("GCheckForUpdatesAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP;
      }),
      (r.prototype.getGroup = function () {
        return "help";
      }),
      (r.prototype.isEnabled = function () {
        return true;
      }),
      (r.prototype.execute = function () {
        gDesigner.getSoftwareUpdateManager().checkForUpdates();
      }),
      (r.prototype.toString = function () {
        return "[Object GCheckForUpdatesAction]";
      }),
      (exports.exports = r);
  }