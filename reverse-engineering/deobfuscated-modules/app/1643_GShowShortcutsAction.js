/**
 * Webpack Module #1643
 * Type: class
 * Name: GShowShortcutsAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    const { GObject: o, GLocaleKey: i } = require(1) /* module */,
      a = require(31) /* GAction */,
      r = require(18) /* module_18 */,
      s = require(1644) /* module_1644 */;
    function l() {}
    o.inherit(l, a),
      (l.ID = "help.shortcuts"),
      (l.TITLE = new i("GShowShortcutsAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_HELP_LEARN;
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