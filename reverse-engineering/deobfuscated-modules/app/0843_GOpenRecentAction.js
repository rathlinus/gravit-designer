/**
 * Webpack Module #843
 * Type: class
 * Name: GOpenRecentAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(18) /* MenuItemBuilder */,
      a = require(31) /* GAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "file.open-recent"),
      (r.TITLE = new o.GLocaleKey("GOpenRecentAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return i.CATEGORY_FILE_OPEN_RECENT;
      }),
      (r.prototype.getGroup = function () {
        return "file-open/open-recent";
      }),
      (r.prototype.isEnabled = function (e) {
        return false;
      }),
      (r.prototype.execute = function () {}),
      (r.prototype.toString = function () {
        return "[Object GOpenRecentAction]";
      }),
      (exports.exports = r);
  }