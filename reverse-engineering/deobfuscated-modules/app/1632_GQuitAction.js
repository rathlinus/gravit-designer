/**
 * Webpack Module #1632
 * Type: class
 * Name: GQuitAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GContainer = require(85) /* GContainer */;
    function l() {}
    GCore.GObject.inherit(l, GAction),
      (l.ID = "file.quit"),
      (l.TITLE = new GCore.GLocaleKey("GQuitAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (l.prototype.getGroup = function () {
        return "file-quit";
      }),
      (l.prototype.isEnabled = function () {
        return (
          gContainer.getRuntime() !== GContainer.Runtime.Browser &&
          gContainer.getRuntime() !== GContainer.Runtime.PWA
        );
      }),
      (l.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, "Q"];
      }),
      (l.prototype.isAvailable = function () {
        return (
          gContainer.getRuntime() !== GContainer.Runtime.Browser &&
          gContainer.getRuntime() !== GContainer.Runtime.PWA
        );
      }),
      (l.prototype.execute = function () {
        gContainer.triggerClose();
      }),
      (l.prototype.toString = function () {
        return "[Object GQuitAction]";
      }),
      (exports.exports = l);
  }