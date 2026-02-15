/**
 * Webpack Module #1334
 * Type: class
 * Name: GDeselectAllAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class s extends GAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT;
    }

    getGroup() {
      return 'select';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'A'];
    }

    isEnabled() {
      if (document.activeElement && $(document.activeElement).is(':editable')) return true;
      if (gDesigner.getActiveDocument()) {
        var exports = gDesigner.getActiveDocument().getEditor().getSelection();
        if (exports && exports.length) return true;
      }
      return false;
    }

    execute() {
      document.activeElement &&
      $(document.activeElement).is(':editable') &&
      !$(document.activeElement).is('button') &&
      !gDesigner.isGravitIME(document.activeElement)
        ? document.execCommand('selectAll')
        : gDesigner.getActiveDocument().getEditor().clearSelection();
    }

    toString() {
      return '[Object GDeselectAllAction]';
    }

    static ID = 'edit.deselect-all';

    static TITLE = new GCore.GLocaleKey('GDeselectAllAction', 'title');

  }
  exports.exports = s;
}