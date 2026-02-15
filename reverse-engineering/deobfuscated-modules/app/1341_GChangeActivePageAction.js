/**
 * Webpack Module #1341
 * Type: class
 * Name: GChangeActivePageAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(31) /* GAction */),
      s = o(require(18) /* MenuItemBuilder */),
      l = require(198) /* Exports_GOutlineSidebar */;
    class c extends r.default {
      constructor(e) {
        super(),
          (this._type = e),
          (this._title = new i.GLocaleKey(
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
        return s.default.CATEGORY_VIEW;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        const exports = [a.GKey.Constant.META, a.GKey.Constant.OPTION];
        switch (this._type) {
          case c.Type.Next:
            return exports.concat(a.GKey.Constant.DOWN);
          case c.Type.Previous:
            return exports.concat(a.GKey.Constant.UP);
          default:
            return null;
        }
      }
      getAdditionalShortcuts() {
        switch (this._type) {
          case c.Type.Next:
            return [a.GKey.Constant.PAGE_DOWN];
          case c.Type.Previous:
            return [a.GKey.Constant.PAGE_UP];
          default:
            return null;
        }
      }
      execute() {
        const exports = gDesigner.getLeftSidebars(),
          module = exports && exports.getSidebar(l.SidebarsIds.GOutlineSidebar),
          require = gDesigner.getActiveDocument(),
          o = require && require.getScene();
        if (module && o) {
          const e = this.getNextPage(o);
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
          if (e instanceof i.GPage) return e;
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