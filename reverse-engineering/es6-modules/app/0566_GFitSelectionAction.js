/**
 * Webpack Module #566
 * Type: class
 * Name: GFitSelectionAction
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
      return MenuItemBuilder.CATEGORY_VIEW;
    }

    getGroup() {
      return 'zoom';
    }

    isEnabled() {
      var e = gDesigner.getActiveDocument(),
        t = e ? e.getEditor() : null;
      return t && t.hasSelection();
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = (e ? e.getEditor() : null).getSelectionBBox();
      t && !t.isEmpty() && e.getActiveWindow().getView().zoomAll(t, false, true);
    }

    toString() {
      return '[Object GFitSelectionAction]';
    }

    static ID = 'view.zoom.fit-selection';

    static TITLE = new GCore.GLocaleKey('GFitSelectionAction', 'title');

  }
  exports.exports = r;
}