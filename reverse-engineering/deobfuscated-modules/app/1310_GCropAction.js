/**
 * Webpack Module #1310
 * Type: class
 * Name: GCropAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GTools = require(53) /* GTools */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "modify.crop"),
      (s.TITLE = new GCore.GLocaleKey("GCropAction", "title")),
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
        return MenuItemBuilder.CATEGORY_MODIFY;
      }),
      (s.prototype.getGroup = function () {
        return "structure-group";
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor(),
            require = module.getIndividualSelection();
          if (
            require &&
            require.length &&
            require[0] instanceof GCore.GImage &&
            module.hasSelectionDetail()
          )
            return require[0].isReady();
        }
        return false;
      }),
      (s.prototype.execute = function (e, t) {
        var n = gDesigner.getToolManager();
        n.getActiveTool() instanceof GTools.GSubSelectTool
          ? (n.activateTool(GTools.GPointerTool, null, true),
            n.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select))
          : n.getActiveTool() instanceof GTools.GPointerTool &&
            n.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select);
      }),
      (s.prototype.toString = function () {
        return "[Object GCropAction]";
      }),
      (exports.exports = s);
  }