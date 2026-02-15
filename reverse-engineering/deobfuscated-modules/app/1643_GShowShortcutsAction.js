/**
 * Webpack Module #1643
 * Type: class
 * Name: GShowShortcutsAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    const { GObject: o, GLocaleKey: i } = require(1) /* module */,
      GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      s = require(1644) /* module_1644 */;
    function l() {}
    o.inherit(l, GAction),
      (l.ID = "help.shortcuts"),
      (l.TITLE = new i("GShowShortcutsAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP_LEARN;
      }),
      (l.prototype.getGroup = function () {
        return "help/learn";
      }),
      (l.prototype.execute = function () {
        new s().open();
      }),
      (l.prototype.toString = function () {
        return "[Object GShowShortcutsAction]";
      }),
      (exports.exports = l);
  }