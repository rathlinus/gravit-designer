/**
 * Webpack Module #1345
 * Type: class
 * Name: GChangeAnchorPointsJointTypeMainAction
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */,
      i = n(1) /* GCore */,
      a = n(15) /* GEditor */,
      r = o(n(18) /* MenuItemBuilder */),
      s = o(n(1281) /* GMainAction */),
      l = n(198) /* Exports_GOutlineSidebar */;
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
        return !1;
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
      (e.exports = c);
  }