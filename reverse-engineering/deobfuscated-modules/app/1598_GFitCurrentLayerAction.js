/**
 * Webpack Module #1598
 * Type: class
 * Name: GFitCurrentLayerAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(18) /* module_18 */,
      a = require(31) /* GAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "view.zoom.fit-current-layer"),
      (r.TITLE = new o.GLocaleKey("GFitCurrentLayerAction", "title")),
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