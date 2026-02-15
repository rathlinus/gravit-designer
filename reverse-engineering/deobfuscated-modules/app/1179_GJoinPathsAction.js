/**
 * Webpack Module #1179
 * Type: class
 * Name: GJoinPathsAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "modify.join-paths"),
      (s.TITLE = new GCore.GLocaleKey("GJoinPathsAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_PATH;
      }),
      (s.prototype.getGroup = function () {
        return "structure/path";
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-join-paths" : null;
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, "J"];
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection();
          if (module && module.length > 1)
            for (var require = 0, GEditor = 0; GEditor < module.length; ++GEditor)
              if (
                !(module[GEditor] instanceof GCore.GImage) &&
                ((module[GEditor] instanceof GCore.GPathBase ||
                  module[GEditor].hasMixin(GCore.GVertexSource)) &&
                  require++,
                2 === require)
              )
                return true;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = e.getSelection();
        if (t && t.length) {
          e.beginTransaction();
          try {
            var require = new GCore.GRectangle();
            GCore.GElement.prototype.assignFrom.call(require, t[0]),
              e.convertSelectionToPaths(true);
            var GEditor = e.joinPaths();
            GEditor &&
              (GCore.GElement.prototype.assignFrom.call(GEditor, require),
              e.updateSelection(false, [GEditor]));
          } finally {
            e.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GJoinPathsAction]";
      }),
      (exports.exports = s);
  }