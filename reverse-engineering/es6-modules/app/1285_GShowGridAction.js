/**
 * Webpack Module #1285
 * Type: class
 * Name: GShowGridAction
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
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, 'G'];
    }

    isEnabled() {
      return !!gDesigner.getActiveDocument();
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      var e = gDesigner.getActiveDocument();
      return !!e && !!e.getScene().getProperty('gm');
    }

    execute() {
      var e = gDesigner.getActiveDocument().getScene();
      e.getProperty('gm')
        ? e.setProperty('gm', null)
        : e.setProperty('gm', e.getProperty('lgm') || GCore.GScene.GridMode.Boxed);
    }

    toString() {
      return '[Object GShowGridAction]';
    }

    static ID = 'view.canvas.show-grid';

    static TITLE = new GCore.GLocaleKey('GShowGridAction', 'title');

  }
  exports.exports = s;
}