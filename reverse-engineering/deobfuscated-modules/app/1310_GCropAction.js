/**
 * Webpack Module #1310
 * Type: class
 * Name: GCropAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(53) /* module */,
      a = require(18) /* MenuItemBuilder */,
      r = require(106) /* GElementAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "modify.crop"),
      (s.TITLE = new o.GLocaleKey("GCropAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getIcon = function () {
        return "gravit-icon-crop";
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_MODIFY;
      }),
      (s.prototype.getGroup = function () {
        return "structure-group";
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor(),
            require = module.getIndividualSelection();
          if (
            require &&
            require.length &&
            require[0] instanceof o.GImage &&
            module.hasSelectionDetail()
          )
            return require[0].isReady();
        }
        return false;
      }),
      (s.prototype.execute = function (e, t) {
        var n = gDesigner.getToolManager();
        n.getActiveTool() instanceof i.GSubSelectTool
          ? (n.activateTool(i.GPointerTool, null, true),
            n.getActiveTool().setEditMode(i.GSelectTool.EditMode.Select))
          : n.getActiveTool() instanceof i.GPointerTool &&
            n.getActiveTool().setEditMode(i.GSelectTool.EditMode.Select);
      }),
      (s.prototype.toString = function () {
        return "[Object GCropAction]";
      }),
      (exports.exports = s);
  }