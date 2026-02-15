/**
 * Webpack Module #1651
 * Type: class
 * Name: GChangeActiveWindowAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GAction = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */);
    class l extends GAction.default {
      constructor(e) {
        super(),
          (this._type = e),
          (this._title = new GCore.GLocaleKey(
            "GChangeActiveWindowAction",
            "title.".concat(this._type)
          ));
      }
      getId() {
        return "".concat(l.ID, ".").concat(this._type);
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
        const exports = [GEditor.GKey.Constant.OPTION];
        switch (this._type) {
          case l.Type.Next:
            return exports.concat(GEditor.GKey.Constant.PERIOD);
          case l.Type.Previous:
            return exports.concat(GEditor.GKey.Constant.COMMA);
          default:
            return null;
        }
      }
      isEnabled() {
        const exports = gDesigner.getWindows(),
          module = exports && exports.getWindows();
        return module && module.length > 1;
      }
      execute() {
        if (this.isEnabled()) {
          const e = gDesigner.getWindows(),
            t = this._getNextWindowAccordingToType(e);
          e.activateWindow(t);
        }
      }
      _getNextWindowAccordingToType(e) {
        const module = e.getWindows(),
          require = e && e.getActiveWindow(),
          _interopRequireDefault = module.findIndex((e) => e === require);
        switch (this._type) {
          case l.Type.Next:
            return _interopRequireDefault === module.length - 1 ? module[0] : module[_interopRequireDefault + 1];
          case l.Type.Previous:
            return 0 === _interopRequireDefault ? module[module.length - 1] : module[_interopRequireDefault - 1];
          default:
            return null;
        }
      }
      toString() {
        return "[Object GChangeActiveWindowAction]";
      }
    }
    (l.ID = "view.change-active-window"),
      (l.Type = { Next: "next", Previous: "previous" }),
      (exports.exports = l);
  }