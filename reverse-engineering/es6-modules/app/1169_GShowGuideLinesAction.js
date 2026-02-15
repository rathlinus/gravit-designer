/**
 * Webpack Module #1169
 * Type: class
 * Name: GShowGuideLinesAction
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
      return MenuItemBuilder.CATEGORY_VIEW_CANVAS;
    }

    getGroup() {
      return 'show/canvas';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, ','];
    }

    isEnabled() {
      return !!gDesigner.getWindows().getActiveWindow();
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      var e = gDesigner.getWindows().getActiveWindow();
      if (e) {
        var module = e.getView().getViewConfiguration();
        return !!module && true === module.guideLinesVisible;
      }
      return false;
    }

    execute() {
      var e = gDesigner.getWindows().getActiveWindow().getView();
      ((e.getViewConfiguration().guideLinesVisible = !e.getViewConfiguration().guideLinesVisible),
        e.invalidate(),
        gDesigner.setSetting('guide_lines_visible', e.getViewConfiguration().guideLinesVisible));
    }

    toString() {
      return '[Object GShowGuideLinesAction]';
    }

    static ID = 'view.canvas.show-guide-lines';

    static TITLE = new GCore.GLocaleKey('GShowGuideLinesAction', 'title');

  }
  exports.exports = s;
}