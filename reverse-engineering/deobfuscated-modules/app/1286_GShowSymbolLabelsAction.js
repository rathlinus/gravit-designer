/**
 * Webpack Module #1286
 * Type: class
 * Name: GShowSymbolLabelsAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = (require(15) /* module */, require(18) /* module_18 */),
      a = require(31) /* GAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "view.canvas.show-symbol-labels"),
      (r.TITLE = new o.GLocaleKey("GShowSymbolLabelsAction", "title")),
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