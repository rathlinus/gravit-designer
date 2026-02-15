/**
 * Webpack Module #1345
 * Type: class
 * Name: GChangeAnchorPointsJointTypeMainAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(18) /* module_18 */),
      s = o(require(1281) /* GMainAction */),
      l = require(198) /* Exports_GOutlineSidebar */;
    class c extends s.default {
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getCategory() {
        return r.default.CATEGORY_MODIFY;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        return [
          a.GKey.Constant.META,
          a.GKey.Constant.OPTION,
          a.GKey.Constant.A,
        ];
      }
      isEnabled() {
        return (
          gDesigner.getRightSidebars().getActiveSidebar() ===
          l.SidebarsIds.GInspectorSidebar
        );
      }
      toString() {
        return "[Object GChangeAnchorPointsJointTypeMainAction]";
      }
    }
    (c.ID = "modify.change-anchor-points-joint-type"),
      (c.TITLE = new i.GLocaleKey(
        "GChangeAnchorPointsJointTypeMainAction",
        "title"
      )),
      (exports.exports = c);
  }