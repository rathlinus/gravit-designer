/**
 * Webpack Module #1315
 * Type: class
 * Name: GDuplicateAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "edit.duplicate"),
      (s.TITLE = new GCore.GLocaleKey("GDuplicateAction", "title")),
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
        return "ccp";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, "D"];
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-duplicate" : null;
      }),
      (s.prototype.getAdditionalShortcuts = function () {
        return [[GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "D"]];
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        return e && null != e.getEditor().getSelection();
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor();
        e.beginTransaction();
        try {
          e.cloneSelection(false, true);
        } finally {
          e.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GDuplicateAction]";
      }),
      (exports.exports = s);
  }