/**
 * Webpack Module #1648
 * Type: class
 * Name: GChangeAnchorPointsJointTypeSubAction
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */,
      i = n(1) /* module */,
      a = n(15) /* module */,
      r = o(n(18) /* MenuItemBuilder */),
      s = o(n(1168) /* GSubAction */),
      l = n(198) /* Exports_GOutlineSidebar */,
      c = o(n(1345) /* GChangeAnchorPointsJointTypeMainAction */);
    class d extends s.default {
      constructor(e) {
        super(e),
          (this._title = new i.GLocaleKey(
            "GChangeAnchorPointsJointTypeSubAction",
            "title.".concat(this._type)
          ));
      }
      _getMainActionId() {
        return c.default.ID;
      }
      getCategory() {
        return r.default.CATEGORY_MODIFY;
      }
      getShortcutSubKey() {
        switch (this._type) {
          case d.Type.Straight:
            return a.GKey.Constant.S;
          case d.Type.Mirrored:
            return a.GKey.Constant.M;
          case d.Type.Disconnected:
            return a.GKey.Constant.D;
          case d.Type.Connector:
            return a.GKey.Constant.C;
          case d.Type.Asymmetric:
            return a.GKey.Constant.A;
          default:
            return null;
        }
      }
      execute() {
        const e = gDesigner
            .getRightSidebars()
            .getSidebar(l.SidebarsIds.GInspectorSidebar),
          t = this._getNodeType();
        t && e.setPathPointsNodeType(t);
      }
      _getNodeType() {
        switch (this._type) {
          case d.Type.Straight:
            return "-";
          case d.Type.Mirrored:
            return i.GPathBase.AnchorPoint.Type.Mirror;
          case d.Type.Disconnected:
            return i.GPathBase.AnchorPoint.Type.Asymmetric;
          case d.Type.Connector:
            return i.GPathBase.AnchorPoint.Type.Connector;
          case d.Type.Asymmetric:
            return i.GPathBase.AnchorPoint.Type.Symmetric;
          default:
            return null;
        }
      }
      toString() {
        return "[Object GChangeAnchorPointsJointTypeSubAction]";
      }
    }
    (d.Type = {
      Straight: "straight",
      Mirrored: "mirrored",
      Disconnected: "disconnected",
      Connector: "connector",
      Asymmetric: "asymmetric",
    }),
      (e.exports = d);
  }