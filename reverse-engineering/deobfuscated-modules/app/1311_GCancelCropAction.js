/**
 * Webpack Module #1311
 * Type: class
 * Name: GCancelCropAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GTools = require(53) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      r = (require(31) /* GAction */, require(106) /* GElementAction */);
    function s() {}
    GCore.GObject.inherit(s, r),
      (s.ID = "modify.cancel-crop"),
      (s.TITLE = new GCore.GLocaleKey("GCancelCropAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getIcon = function () {
        return null;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY;
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
            require[0] instanceof GCore.GImage &&
            module.hasSelectionDetail()
          )
            return require[0].isReady();
        }
        return false;
      }),
      (s.prototype.execute = function (e, t) {
        if (!r.prototype.isEnabled.call(this)) return false;
        var n = gDesigner.getActiveDocument();
        if (n) {
          var MenuItemBuilder = n.getEditor().getIndividualSelection(),
            l = MenuItemBuilder && MenuItemBuilder.length ? MenuItemBuilder[0] : null;
          l &&
            l instanceof GCore.GImage &&
            !GCore.GTransform.equals(l.getTransform(), l.getImageTransform()) &&
            GTools.GEditor.tryRunTransaction(
              l,
              function () {
                var e = l.getImageTransform();
                l.setProperties(["trf", "ut", "tl_sx"], [e, true, 0]);
              }.bind(this),
              GCore.GLocale.get(s.TITLE)
            );
        }
        var c = gDesigner.getToolManager();
        c.getActiveTool() instanceof GTools.GSubSelectTool
          ? (c.activateTool(GTools.GPointerTool, null, true),
            c.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select))
          : c.getActiveTool() instanceof GTools.GPointerTool &&
            c.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select);
      }),
      (s.prototype.toString = function () {
        return "[Object GCancelCropAction]";
      }),
      (exports.exports = s);
  }