/**
 * Webpack Module #1286
 * Type: class
 * Name: GShowSymbolLabelsAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    i = (require(15) /* GEditor */, require(18)) /* MenuItemBuilder */,
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
      return i.CATEGORY_VIEW_CANVAS;
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
        return !!module && !!module.symbolLabelsVisible;
      }
      return false;
    }

    execute() {
      var e = gDesigner.getWindows().getActiveWindow().getView();
      ((e.getViewConfiguration().symbolLabelsVisible =
        !e.getViewConfiguration().symbolLabelsVisible),
        e.invalidate(),
        gDesigner.setSetting(
          'symbol_labels_visible',
          e.getViewConfiguration().symbolLabelsVisible
        ));
    }

    toString() {
      return '[Object GShowSymbolLabelsAction]';
    }

    static ID = 'view.canvas.show-symbol-labels';

    static TITLE = new GCore.GLocaleKey('GShowSymbolLabelsAction', 'title');

  }
  exports.exports = r;
}