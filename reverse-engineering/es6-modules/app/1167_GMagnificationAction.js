/**
 * Webpack Module #1167
 * Type: class
 * Name: GMagnificationAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class s extends GAction {
    constructor(e) {
      super();
      this._zoomLevel = e;
    }

    _zoomLevel = null;

    getId() {
      return s.ID + '.' + this._zoomLevel.toString();
    }

    getTitle() {
      let exports = this._zoomLevel.toString() + '%';
      return (
        gDesigner.isTouchEnabled() &&
          100 === this._zoomLevel &&
          (exports += ' ('.concat(
            GCore.GLocale.get(new GCore.GLocaleKey('GMagnificationAction', 'text.actual-size')),
            ')'
          )),
        exports
      );
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW_MAGNIFICATION;
    }

    getGroup() {
      return 'zoom/magnification-level';
    }

    getShortcut() {
      switch (this._zoomLevel) {
        case 50:
          return [GEditor.GKey.Constant.META, '5'];
        case 100:
          return [GEditor.GKey.Constant.META, '1'];
        case 400:
          return [GEditor.GKey.Constant.META, '4'];
        case 800:
          return [GEditor.GKey.Constant.META, '8'];
        default:
          return null;
      }
    }

    isEnabled() {
      return !!gDesigner.getWindows().getActiveWindow();
    }

    execute() {
      var e = this._zoomLevel / 100,
        t = gDesigner.getWindows().getActiveWindow().getView(),
        n = t.getScene(),
        GEditor = n ? n.getPaintBBox() : null,
        MenuItemBuilder =
          GEditor && !GEditor.isEmpty()
            ? GEditor.getSide(GCore.GRect.Side.CENTER)
            : new GCore.GPoint(0, 0);
      if (t.getViewConfiguration().multiPageView) {
        var GAction = n.getActivePage();
        GAction && (MenuItemBuilder = MenuItemBuilder.add(GAction.getPosition(true)));
      }
      t.zoomAtCenter(MenuItemBuilder, e);
    }

    toString() {
      return '[Object GMagnificationAction]';
    }

    static ID = 'view.magnification';

    static ZOOM_LEVELS = [
      6, 12, 25, 50, 66, 100, 150, 200, 300, 400, 800, 1600, 3200, 6400, 12800, 25600,
    ];

  }
  exports.exports = s;
}