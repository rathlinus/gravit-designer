/**
 * Webpack Module #1614
 * Type: class
 * Name: GShowRulersAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GShowGuideLinesAction = require(1169);
  class l extends GAction {
    constructor() {
      super();
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW_CANVAS;
    }

    getGroup() {
      return 'show/canvas';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, 'R'];
    }

    isEnabled() {
      return !(
        !gDesigner.getWindows().getActiveWindow() ||
        !gDesigner.getWindows().getActiveWindow().getView()
      );
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      return (
        gDesigner.getWindows().getActiveWindow() &&
        gDesigner.getWindows().getActiveWindow().getView() &&
        gDesigner.getWindows().getActiveWindow().getView().hasRulers()
      );
    }

    execute() {
      var e = gDesigner.getWindows().getActiveWindow().getView(),
        t = !e.hasRulers(),
        n = gDesigner.getAction(GShowGuideLinesAction.ID);
      (t &&
        !n.isChecked() &&
        gDesigner.executeAction(GShowGuideLinesAction.ID, undefined, undefined, true),
        e.setRulers(t),
        $('#mainframe').toggleClass('rulers', t),
        gDesigner.setSetting('rulers_visible', t));
    }

    toString() {
      return '[Object GShowRulersAction]';
    }

    static ID = 'view.canvas.show-rulers';

    static TITLE = new GCore.GLocaleKey('GShowRulersAction', 'title');

  }
  exports.exports = l;
}