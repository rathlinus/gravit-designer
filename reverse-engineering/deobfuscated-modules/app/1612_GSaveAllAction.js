/**
 * Webpack Module #1612
 * Type: class
 * Name: GSaveAllAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(18) /* MenuItemBuilder */,
      a = require(31) /* GAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "file.save-all"),
      (r.TITLE = new o.GLocaleKey("GSaveAllAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return i.CATEGORY_FILE;
      }),
      (r.prototype.getGroup = function () {
        return "file";
      }),
      (r.prototype.isAvailable = function (e) {
        return false;
      }),
      (r.prototype.isEnabled = function () {
        return false;
      }),
      (r.prototype.execute = function () {
        for (var exports = gDesigner.getDocuments(), module = 0; module < exports.length; ++module)
          exports[module].isModified() && exports[module].save();
      }),
      (r.prototype.toString = function () {
        return "[Object GSaveAllAction]";
      }),
      (exports.exports = r);
  }