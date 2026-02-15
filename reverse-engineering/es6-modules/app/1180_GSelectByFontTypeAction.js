/**
 * Webpack Module #1180
 * Type: class
 * Name: GSelectByFontTypeAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class s extends GElementAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getGroup() {
      return 'edit/select-by-font';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT_SELECT_SAME;
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e && e.getEditor() && e.getEditor().getSelection()) {
        var module = this._getFontFamily();
        return !(!module || !module.length);
      }
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = this._getFontFamily(),
        n = gDesigner.getWorkspace().getFontManager().getDefaultFont(),
        GTools = [];
      (e.getScene().acceptChildren(function (e) {
        (e.removeFlag(GCore.GNode.Flag.Selected), e instanceof GCore.GText) &&
          (e.getProperty('_tff') || (n && n.getFamily())) === t &&
          GTools.push(e);
      }),
        e.getEditor().updateSelection(true, GTools));
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-select-by-font' : '';
    }

    toString() {
      return '[Object GSelectByFontTypeAction]';
    }

    _getFontFamily() {
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
          var s = (GTools.GElementEditor.getEditor(GElementAction) || GElementAction).getProperty(
            '_tff'
          );
          if ((s || (s = require && require.getFamily()), exports)) {
            if (exports !== s) {
              exports = '';
              break;
            }
          } else exports = s;
        }
      }
      return exports;
    }

    static ID = 'edit.selectbyfonttype';

    static TITLE = new GCore.GLocaleKey('GSelectByFontTypeAction', 'title');

  }
  exports.exports = s;
}