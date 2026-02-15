/**
 * Webpack Module #1649
 * Type: class
 * Name: GCloseActiveWindowAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      GAction = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */);
    class l extends GAction.default {
      getId() {
        return l.ID;
      }
      getTitle() {
        return l.TITLE;
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_FILE;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        return [GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.Q];
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
      (l.TITLE = new GCore.GLocaleKey("GCloseActiveWindowAction", "title")),
      (exports.exports = l);
  }