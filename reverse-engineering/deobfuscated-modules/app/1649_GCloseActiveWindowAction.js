/**
 * Webpack Module #1649
 * Type: class
 * Name: GCloseActiveWindowAction
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */,
      i = n(1) /* module_1 */,
      a = n(15) /* module_15 */,
      r = o(n(31) /* GAction */),
      s = o(n(18) /* module_18 */);
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
        const e = gDesigner.getActiveDocument(),
          t = e && e.getActiveWindow(),
          n = gDesigner.getWindows();
        return !(!t || !n);
      }
      execute() {
        const e = gDesigner.getActiveDocument(),
          t = e && e.getActiveWindow();
        gDesigner.getWindows().removeWindow(t);
      }
      toString() {
        return "[Object GCloseActiveWindowAction]";
      }
    }
    (l.ID = "file.close-active-window"),
      (l.TITLE = new i.GLocaleKey("GCloseActiveWindowAction", "title")),
      (e.exports = l);
  }