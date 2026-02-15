/**
 * Webpack Module #1180
 * Type: class
 * Name: GSelectByFontTypeAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "edit.selectbyfonttype"),
      (s.TITLE = new GCore.GLocaleKey("GSelectByFontTypeAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getGroup = function () {
        return "edit/select-by-font";
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT_SELECT_SAME;
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e && e.getEditor() && e.getEditor().getSelection()) {
          var module = this._getFontFamily();
          return !(!module || !module.length);
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = this._getFontFamily(),
          n = gDesigner.getWorkspace().getFontManager().getDefaultFont(),
          GTools = [];
        e.getScene().acceptChildren(function (e) {
          (e.removeFlag(GCore.GNode.Flag.Selected), e instanceof GCore.GText) &&
            (e.getProperty("_tff") || (n && n.getFamily())) === t &&
            GTools.push(e);
        }),
          e.getEditor().updateSelection(true, GTools);
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-select-by-font" : "";
      }),
      (s.prototype.toString = function () {
        return "[Object GSelectByFontTypeAction]";
      }),
      (s.prototype._getFontFamily = function () {
        for (
          var exports,
            module = gDesigner.getActiveDocument().getEditor().getSelection(),
            require = gDesigner.getWorkspace().getFontManager().getDefaultFont(),
            MenuItemBuilder = 0;
          MenuItemBuilder < module.length;
          MenuItemBuilder++
        ) {
          var GElementAction = module[MenuItemBuilder];
          if (GElementAction instanceof GCore.GText) {
            var s = (GTools.GElementEditor.getEditor(GElementAction) || GElementAction).getProperty("_tff");
            if ((s || (s = require && require.getFamily()), exports)) {
              if (exports !== s) {
                exports = "";
                break;
              }
            } else exports = s;
          }
        }
        return exports;
      }),
      (exports.exports = s);
  }