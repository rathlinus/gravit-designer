/**
 * Webpack Module #1650
 * Type: class
 * Name: GToggleMultiPageModeAction
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */,
      i = n(1) /* module_1 */,
      a = n(15) /* module_15 */,
      r = o(n(31) /* GAction */),
      s = o(n(18) /* module_18 */),
      l = n(198) /* Exports_GOutlineSidebar */;
    class c extends r.default {
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getCategory() {
        return s.default.CATEGORY_VIEW;
      }
      getShortcut() {
        return [a.GKey.Constant.F6];
      }
      isVisible() {
        return false;
      }
      execute() {
        const e = gDesigner.getLeftSidebars(),
          t = e && e.getSidebar(l.SidebarsIds.GOutlineSidebar);
        t && t.toggleMultiPageMode();
      }
      toString() {
        return "[Object GToggleMultiPageModeAction]";
      }
    }
    (c.ID = "view.toggle-multi-page-mode"),
      (c.TITLE = new i.GLocaleKey("GToggleMultiPageModeAction", "title")),
      (e.exports = c);
  }