/**
 * Webpack Module #1651
 * Type: class
 * Name: GChangeActiveWindowAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(31) /* GAction */),
      s = o(require(18) /* MenuItemBuilder */);
    class l extends r.default {
      constructor(e) {
        super(),
          (this._type = e),
          (this._title = new i.GLocaleKey(
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
        return s.default.CATEGORY_VIEW;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        const exports = [a.GKey.Constant.OPTION];
        switch (this._type) {
          case l.Type.Next:
            return exports.concat(a.GKey.Constant.PERIOD);
          case l.Type.Previous:
            return exports.concat(a.GKey.Constant.COMMA);
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
          o = module.findIndex((e) => e === require);
        switch (this._type) {
          case l.Type.Next:
            return o === module.length - 1 ? module[0] : module[o + 1];
          case l.Type.Previous:
            return 0 === o ? module[module.length - 1] : module[o - 1];
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