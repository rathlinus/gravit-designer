/**
 * Webpack Module #1598
 * Type: class
 * Name: GFitCurrentLayerAction
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
        t = e ? e.getScene().getActiveLayer() : null;
      return t && t.getPaintBBox() && !t.getPaintBBox().isEmpty();
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = e.getScene().getActiveLayer();
      e.getActiveWindow().getView().zoomAll(t.getPaintBBox(), false, true);
    }

    toString() {
      return '[Object GFitCurrentLayerAction]';
    }

    static ID = 'view.zoom.fit-current-layer';

    static TITLE = new GCore.GLocaleKey('GFitCurrentLayerAction', 'title');

  }
  exports.exports = r;
}