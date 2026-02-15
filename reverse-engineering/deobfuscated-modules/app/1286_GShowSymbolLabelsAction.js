/**
 * Webpack Module #1286
 * Type: class
 * Name: GShowSymbolLabelsAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      i = (require(15) /* module */, require(18) /* MenuItemBuilder */),
      GAction = require(31) /* GAction */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "view.canvas.show-symbol-labels"),
      (r.TITLE = new GCore.GLocaleKey("GShowSymbolLabelsAction", "title")),
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
          return !!module && !!module.symbolLabelsVisible;
        }
        return false;
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getWindows().getActiveWindow().getView();
        (e.getViewConfiguration().symbolLabelsVisible =
          !e.getViewConfiguration().symbolLabelsVisible),
          e.invalidate(),
          gDesigner.setSetting(
            "symbol_labels_visible",
            e.getViewConfiguration().symbolLabelsVisible
          );
      }),
      (r.prototype.toString = function () {
        return "[Object GShowSymbolLabelsAction]";
      }),
      (exports.exports = r);
  }