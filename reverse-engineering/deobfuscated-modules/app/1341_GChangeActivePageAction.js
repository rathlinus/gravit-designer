/**
 * Webpack Module #1341
 * Type: class
 * Name: GChangeActivePageAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      GAction = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      l = require(198) /* Exports_GOutlineSidebar */;
    class c extends GAction.default {
      constructor(e) {
        super(),
          (this._type = e),
          (this._title = new GCore.GLocaleKey(
            "GChangeActivePageAction",
            "title.".concat(this._type)
          ));
      }
      getId() {
        return "".concat(c.ID, ".").concat(this._type);
      }
      getTitle() {
        return this._title;
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_VIEW;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        const exports = [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION];
        switch (this._type) {
          case c.Type.Next:
            return exports.concat(GEditor.GKey.Constant.DOWN);
          case c.Type.Previous:
            return exports.concat(GEditor.GKey.Constant.UP);
          default:
            return null;
        }
      }
      getAdditionalShortcuts() {
        switch (this._type) {
          case c.Type.Next:
            return [GEditor.GKey.Constant.PAGE_DOWN];
          case c.Type.Previous:
            return [GEditor.GKey.Constant.PAGE_UP];
          default:
            return null;
        }
      }
      execute() {
        const exports = gDesigner.getLeftSidebars(),
          module = exports && exports.getSidebar(l.SidebarsIds.GOutlineSidebar),
          require = gDesigner.getActiveDocument(),
          _interopRequireDefault = require && require.getScene();
        if (module && _interopRequireDefault) {
          const e = this.getNextPage(_interopRequireDefault);
          module.changeActivePage(e);
        }
      }
      getNextPage(e) {
        const module = e.getActivePage();
        for (
          let e = this._getNextPageAccordingToType(module);
          null !== e;
          e = this._getNextPageAccordingToType(e)
        )
          if (e instanceof GCore.GPage) return e;
        return null;
      }
      _getNextPageAccordingToType(e) {
        switch (this._type) {
          case c.Type.Next:
            return e.getNext();
          case c.Type.Previous:
            return e.getPrevious();
          default:
            return null;
        }
      }
      toString() {
        return "[Object GChangeActivePageAction]";
      }
    }
    (c.ID = "view.change-active-page"),
      (c.Type = { Next: "next", Previous: "previous" }),
      (exports.exports = c);
  }