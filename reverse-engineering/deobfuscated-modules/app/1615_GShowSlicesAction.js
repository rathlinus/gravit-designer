/**
 * Webpack Module #1615
 * Type: class
 * Name: GShowSlicesAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(18) /* MenuItemBuilder */,
      a = require(31) /* GAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "view.canvas.show-slices"),
      (r.TITLE = new o.GLocaleKey("GShowSlicesAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return i.CATEGORY_VIEW_CANVAS;
      }),
      (r.prototype.getGroup = function () {
        return "show/canvas";
      }),
      (r.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (r.prototype.isCheckable = function () {
        return true;
      }),
      (r.prototype.isChecked = function () {
        var e = gDesigner.getWindows().getActiveWindow();
        if (e) {
          var module = e.getView().getViewConfiguration();
          return !!module && true === module.slices;
        }
        return false;
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getWindows().getActiveWindow().getView();
        (e.getViewConfiguration().slices = !e.getViewConfiguration().slices),
          e.invalidateAndResetCache(null);
      }),
      (r.prototype.toString = function () {
        return "[Object GShowSlicesAction]";
      }),
      (exports.exports = r);
  }