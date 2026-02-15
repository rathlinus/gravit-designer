/**
 * Webpack Module #1650
 * Type: class
 * Name: GToggleMultiPageModeAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(31) /* GAction */),
      s = o(require(18) /* module_18 */),
      l = require(198) /* Exports_GOutlineSidebar */;
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
        const exports = gDesigner.getLeftSidebars(),
          module = exports && exports.getSidebar(l.SidebarsIds.GOutlineSidebar);
        module && module.toggleMultiPageMode();
      }
      toString() {
        return "[Object GToggleMultiPageModeAction]";
      }
    }
    (c.ID = "view.toggle-multi-page-mode"),
      (c.TITLE = new i.GLocaleKey("GToggleMultiPageModeAction", "title")),
      (exports.exports = c);
  }