/**
 * Webpack Module #1333
 * Type: class
 * Name: GSelectAllAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function s() {}
    GCore.GObject.inherit(s, GAction),
      (s.ID = "edit.select-all"),
      (s.TITLE = new GCore.GLocaleKey("GSelectAllAction", "title")),
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
        return [GEditor.GKey.Constant.META, "A"];
      }),
      (s.prototype.isEnabled = function () {
        return (
          !(
            !document.activeElement ||
            !$(document.activeElement).is(":editable")
          ) || !!gDesigner.getActiveDocument()
        );
      }),
      (s.prototype.execute = function () {
        if (
          document.activeElement &&
          $(document.activeElement).is(":editable") &&
          !$(document.activeElement).is("button") &&
          !gDesigner.isGravitIME(document.activeElement)
        )
          document.execCommand("selectAll");
        else {
          var exports = gDesigner.getActiveDocument().getEditor(),
            module = gDesigner.getActiveDocument().getScene(),
            require = module.getActivePage(),
            GEditor = gDesigner
              .getActiveDocument()
              .getActiveWindow()
              .getView()
              .getViewConfiguration().multiPageView,
            MenuItemBuilder = [];
          module.accept(function (e) {
            if (
              e instanceof GCore.GItem &&
              !e.hasMixin(GCore.GAnnotation) &&
              !(e.getParent() instanceof GCore.GItem) &&
              (e.getPage() === require || GEditor) &&
              !e.isLocked()
            ) {
              var module =
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
              module || s || MenuItemBuilder.push(e);
            }
          }),
            exports.updateSelection(false, MenuItemBuilder);
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GSelectAllAction]";
      }),
      (exports.exports = s);
  }