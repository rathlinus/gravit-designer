/**
 * Webpack Module #1333
 * Type: class
 * Name: GSelectAllAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* MenuItemBuilder */,
      r = require(31) /* GAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "edit.select-all"),
      (s.TITLE = new o.GLocaleKey("GSelectAllAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_EDIT;
      }),
      (s.prototype.getGroup = function () {
        return "select";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, "A"];
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
            i = gDesigner
              .getActiveDocument()
              .getActiveWindow()
              .getView()
              .getViewConfiguration().multiPageView,
            a = [];
          module.accept(function (e) {
            if (
              e instanceof o.GItem &&
              !e.hasMixin(o.GAnnotation) &&
              !(e.getParent() instanceof o.GItem) &&
              (e.getPage() === require || i) &&
              !e.isLocked()
            ) {
              var module =
                  !e.getProperty("vis") ||
                  e.findParent(function (e) {
                    return e instanceof o.GBlock && !e.getProperty("vis");
                  }),
                r = e.getProperty("plkt"),
                s =
                  r & o.GBlock.ProgramLck.NoEdit &&
                  r & o.GBlock.ProgramLck.NoSizeChanges &&
                  r & o.GBlock.ProgramLck.NoMove &&
                  r & o.GBlock.ProgramLck.NoDelete;
              module || s || a.push(e);
            }
          }),
            exports.updateSelection(false, a);
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GSelectAllAction]";
      }),
      (exports.exports = s);
  }