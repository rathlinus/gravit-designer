/**
 * Webpack Module #1599
 * Type: class
 * Name: GInvertSelectionAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function s() {}
    GCore.GObject.inherit(s, GAction),
      (s.ID = "edit.invert-selection"),
      (s.TITLE = new GCore.GLocaleKey("GInvertSelectionAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT;
      }),
      (s.prototype.getGroup = function () {
        return "select";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "I"];
      }),
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getActiveDocument();
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e.getScene(),
          n = t.getActivePage(),
          GEditor = gDesigner
            .getActiveDocument()
            .getActiveWindow()
            .getView()
            .getViewConfiguration().multiPageView,
          MenuItemBuilder = [];
        t.accept(function (e) {
          if (
            e instanceof GCore.GItem &&
            !e.hasMixin(GCore.GAnnotation) &&
            !(e.getParent() instanceof GCore.GItem) &&
            !e.hasFlag(GCore.GNode.Flag.Selected) &&
            (e.getPage() === n || GEditor) &&
            !e.isLocked()
          ) {
            var t =
                !e.getProperty("vis") ||
                e.findParent(function (e) {
                  return e instanceof GCore.GBlock && !e.getProperty("vis");
                }),
              GAction = e.getProperty("plkt"),
              s =
                GAction & GCore.GBlock.ProgramLck.NoEdit &&
                GAction & GCore.GBlock.ProgramLck.NoSizeChanges &&
                GAction & GCore.GBlock.ProgramLck.NoMove &&
                GAction & GCore.GBlock.ProgramLck.NoDelete;
            t || s || MenuItemBuilder.push(e);
          }
        }),
          e.getEditor().updateSelection(false, MenuItemBuilder);
      }),
      (s.prototype.toString = function () {
        return "[Object GInvertSelectionAction]";
      }),
      (exports.exports = s);
  }