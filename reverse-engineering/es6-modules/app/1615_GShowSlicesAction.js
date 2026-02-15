/**
 * Webpack Module #1615
 * Type: class
 * Name: GShowSlicesAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class r extends GAction {
    constructor() {
      super();
    }

    getId() {
      return r.ID;
    }

    getTitle() {
      return r.TITLE;
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

    isChecked() {
      var e = gDesigner.getWindows().getActiveWindow();
      if (e) {
        var module = e.getView().getViewConfiguration();
        return !!module && true === module.slices;
      }
      return false;
    }

    execute() {
      var e = gDesigner.getWindows().getActiveWindow().getView();
      ((e.getViewConfiguration().slices = !e.getViewConfiguration().slices),
        e.invalidateAndResetCache(null));
    }

    toString() {
      return '[Object GShowSlicesAction]';
    }

    static ID = 'view.canvas.show-slices';

    static TITLE = new GCore.GLocaleKey('GShowSlicesAction', 'title');

  }
  exports.exports = r;
}