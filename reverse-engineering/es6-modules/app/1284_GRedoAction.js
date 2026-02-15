/**
 * Webpack Module #1284
 * Type: class
 * Name: GRedoAction
 */

function (exports, module, require) {
  'use strict';
  (require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34)) /* polyfill_String_replace */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    a = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class l extends GAction {
    constructor() {
      super();
      l.TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GRedoAction', 'tooltip-title')),
      description: GCore.GLocale.get(new GCore.GLocaleKey('GRedoAction', 'tooltip-description')),
      shortcut: l.SHORTCUT,
      }),
      };
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      var e = gDesigner.getActiveDocument();
      return e && e.getEditor().hasRedoState()
        ? GCore.GLocale.get(new GCore.GLocaleKey('GRedoAction', 'redo-action')).replace(
            '%action',
            e.getEditor().getRedoStateName()
          )
        : GCore.GLocale.get(l.TITLE);
    }

    getIcon() {
      return 'gravit-icon-redo';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT;
    }

    getGroup() {
      return 'undo_redo';
    }

    getShortcut() {
      return l.SHORTCUT;
    }

    isEnabled() {
      return (
        !(gDesigner.getActiveDocument() && !gDesigner.getActiveDocument().isEditingEnabled()) &&
        (!(
          !document.activeElement ||
          !$(document.activeElement).is(':editable') ||
          $(document.activeElement).is(':button') ||
          $(document.activeElement).is('select') ||
          gDesigner.isGravitIME(document.activeElement)
        ) ||
          !(
            !gDesigner.getActiveDocument() ||
            !gDesigner.getActiveDocument().getEditor().hasRedoState()
          ))
      );
    }

    execute() {
      !document.activeElement ||
      !$(document.activeElement).is(':editable') ||
      $(document.activeElement).is(':button') ||
      $(document.activeElement).is('select') ||
      gDesigner.isGravitIME(document.activeElement)
        ? gDesigner.getActiveDocument().getEditor().redoState()
        : document.execCommand('redo');
    }

    getTooltipConfig(e) {
      return (e && l.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GRedoAction]';
    }

    static TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GRedoAction', 'tooltip-title')),
        description: GCore.GLocale.get(new GCore.GLocaleKey('GRedoAction', 'tooltip-description')),
        shortcut: l.SHORTCUT,
      }),
    };

    static ID = 'edit.redo';

    static TITLE = new GCore.GLocaleKey('GRedoAction', 'title');

    static SHORTCUT = [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'z'];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = l;
}