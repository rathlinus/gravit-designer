/**
 * Webpack Module #1619
 * Type: class
 * Name: GShowEffectsAction
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

    isEnabled() {
      return !!gDesigner.getWindows().getActiveWindow();
    }

    isCheckable() {
      return true;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, 'E'];
    }

    isChecked() {
      var e = gDesigner.getWindows().getActiveWindow();
      return !!e && !e.getView().getViewConfiguration().ignoreEffects;
    }

    execute() {
      var e = gDesigner.getWindows().getActiveWindow();
      if (!e) return false;
      var t = e.getView();
      ((t.getViewConfiguration().ignoreEffects = !t.getViewConfiguration().ignoreEffects),
        t.invalidateAndResetCache(null));
    }

    toString() {
      return '[Object GShowEffectsAction]';
    }

    static ID = 'view.canvas.show-effects';

    static TITLE = new GCore.GLocaleKey('GShowEffectsAction', 'title');

  }
  exports.exports = s;
}