/**
 * Webpack Module #1612
 * Type: class
 * Name: GSaveAllAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(18) /* module_18 */,
      a = n(31) /* GAction */;
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
        for (var e = gDesigner.getDocuments(), t = 0; t < e.length; ++t)
          e[t].isModified() && e[t].save();
      }),
      (r.prototype.toString = function () {
        return "[Object GSaveAllAction]";
      }),
      (e.exports = r);
  }