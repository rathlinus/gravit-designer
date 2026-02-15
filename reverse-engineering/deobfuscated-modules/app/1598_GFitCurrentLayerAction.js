/**
 * Webpack Module #1598
 * Type: class
 * Name: GFitCurrentLayerAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "view.zoom.fit-current-layer"),
      (r.TITLE = new GCore.GLocaleKey("GFitCurrentLayerAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW;
      }),
      (r.prototype.getGroup = function () {
        return "zoom";
      }),
      (r.prototype.isEnabled = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getScene().getActiveLayer() : null;
        return t && t.getPaintBBox() && !t.getPaintBBox().isEmpty();
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e.getScene().getActiveLayer();
        e.getActiveWindow().getView().zoomAll(t.getPaintBBox(), false, true);
      }),
      (r.prototype.toString = function () {
        return "[Object GFitCurrentLayerAction]";
      }),
      (exports.exports = r);
  }