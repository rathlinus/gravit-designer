/**
 * Webpack Module #1649
 * Type: class
 * Name: GCloseActiveWindowAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(31) /* GAction */),
      s = o(require(18) /* MenuItemBuilder */);
    class l extends r.default {
      getId() {
        return l.ID;
      }
      getTitle() {
        return l.TITLE;
      }
      getCategory() {
        return s.default.CATEGORY_FILE;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        return [a.GKey.Constant.OPTION, a.GKey.Constant.Q];
      }
      isEnabled() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getActiveWindow(),
          require = gDesigner.getWindows();
        return !(!module || !require);
      }
      execute() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getActiveWindow();
        gDesigner.getWindows().removeWindow(module);
      }
      toString() {
        return "[Object GCloseActiveWindowAction]";
      }
    }
    (l.ID = "file.close-active-window"),
      (l.TITLE = new i.GLocaleKey("GCloseActiveWindowAction", "title")),
      (exports.exports = l);
  }