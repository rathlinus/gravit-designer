/**
 * Webpack Module #449
 * Type: class
 * Name: GFitAllAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    a = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class l extends GAction {
    constructor() {
      super();
      l.TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GFitAllAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GFitAllAction', 'tooltip-description')
      ),
      shortcut: l.SHORTCUT,
      }),
      };
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-fit-all' : null;
    }

    getGroup() {
      return 'zoom';
    }

    getShortcut() {
      return l.SHORTCUT;
    }

    isEnabled() {
      var e = gDesigner.getActiveDocument(),
        t = (e && e.getScene() && e.getScene().getPaintBBox()) || null;
      return t && !t.isEmpty();
    }

    execute() {
      var e,
        t = gDesigner.getActiveDocument(),
        n = t.getScene(),
        GEditor = t.getActiveWindow().getView().getViewConfiguration().multiPageView;
      if (n.isFixedSized() && !GEditor) {
        var a = n.getActivePage();
        e = new GCore.GRect(0, 0, a.getProperty('w'), a.getProperty('h'));
      } else e = n.getPaintBBox(GEditor);
      e && !e.isEmpty() && t.getActiveWindow().getView().zoomAll(e, false);
    }

    getTooltipConfig(e) {
      return (e && l.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GFitAllAction]';
    }

    static TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GFitAllAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GFitAllAction', 'tooltip-description')
        ),
        shortcut: l.SHORTCUT,
      }),
    };

    static ID = 'view.zoom.fit.all';

    static TITLE = new GCore.GLocaleKey('GFitAllAction', 'title');

    static SHORTCUT = [GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.META, '0'];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = l;
}