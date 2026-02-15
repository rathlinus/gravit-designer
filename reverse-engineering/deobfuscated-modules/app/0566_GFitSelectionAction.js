/**
 * Webpack Module #566
 * Type: class
 * Name: GFitSelectionAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(18) /* MenuItemBuilder */,
      a = require(31) /* GAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "view.zoom.fit-selection"),
      (r.TITLE = new o.GLocaleKey("GFitSelectionAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return i.CATEGORY_VIEW;
      }),
      (r.prototype.getGroup = function () {
        return "zoom";
      }),
      (r.prototype.isEnabled = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null;
        return t && t.hasSelection();
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = (e ? e.getEditor() : null).getSelectionBBox();
        t && !t.isEmpty() && e.getActiveWindow().getView().zoomAll(t, false, true);
      }),
      (r.prototype.toString = function () {
        return "[Object GFitSelectionAction]";
      }),
      (exports.exports = r);
  }