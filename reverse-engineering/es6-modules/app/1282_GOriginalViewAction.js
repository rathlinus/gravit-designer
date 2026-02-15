/**
 * Webpack Module #1282
 * Type: class
 * Name: GOriginalViewAction
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
      return MenuItemBuilder.CATEGORY_VIEW;
    }

    getGroup() {
      return 'zoom';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, '0'];
    }

    isEnabled() {
      return !!gDesigner.getActiveDocument();
    }

    execute() {
      var e,
        t = gDesigner.getActiveDocument(),
        n = t.getActiveWindow().getView().getViewConfiguration().multiPageView,
        GEditor = t.getScene();
      if (GEditor.isFixedSized()) {
        var MenuItemBuilder = GEditor.getActivePage();
        if (
          ((e = new GCore.GRect(
            0,
            0,
            MenuItemBuilder.getProperty('w'),
            MenuItemBuilder.getProperty('h')
          )),
          n)
        ) {
          var GAction = MenuItemBuilder.getPosition(true);
          GAction && (e = e.translated(GAction.getX(), GAction.getY()));
        }
      } else e = GEditor.getPaintBBox(n);
      e &&
        !e.isEmpty() &&
        t.getActiveWindow().getView().zoomAtCenter(e.getSide(GCore.GRect.Side.CENTER), 1);
    }

    toString() {
      return '[Object GOriginalViewAction]';
    }

    static ID = 'view.zoom.original';

    static TITLE = new GCore.GLocaleKey('GOriginalViewAction', 'title');

  }
  exports.exports = s;
}