/**
 * Webpack Module #1648
 * Type: class
 * Name: GChangeAnchorPointsJointTypeSubAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GSubAction = _interopRequireDefault(require(1168) /* GSubAction */),
    GOutlineSidebar = require(198) /* Exports_GOutlineSidebar */,
    GChangeAnchorPointsJointTypeMainAction = _interopRequireDefault(
      require(1345) /* GChangeAnchorPointsJointTypeMainAction */
    );
  class d extends GSubAction.default {
    constructor(e) {
      (super(e),
        (this._title = new GCore.GLocaleKey(
          'GChangeAnchorPointsJointTypeSubAction',
          'title.'.concat(this._type)
        )));
    }
    _getMainActionId() {
      return GChangeAnchorPointsJointTypeMainAction.default.ID;
    }
    getCategory() {
      return MenuItemBuilder.default.CATEGORY_MODIFY;
    }
    getShortcutSubKey() {
      switch (this._type) {
        case d.Type.Straight:
          return GEditor.GKey.Constant.S;
        case d.Type.Mirrored:
          return GEditor.GKey.Constant.M;
        case d.Type.Disconnected:
          return GEditor.GKey.Constant.D;
        case d.Type.Connector:
          return GEditor.GKey.Constant.C;
        case d.Type.Asymmetric:
          return GEditor.GKey.Constant.A;
        default:
          return null;
      }
    }
    execute() {
      const exports = gDesigner
          .getRightSidebars()
          .getSidebar(GOutlineSidebar.SidebarsIds.GInspectorSidebar),
        module = this._getNodeType();
      module && exports.setPathPointsNodeType(module);
    }
    _getNodeType() {
      switch (this._type) {
        case d.Type.Straight:
          return '-';
        case d.Type.Mirrored:
          return GCore.GPathBase.AnchorPoint.Type.Mirror;
        case d.Type.Disconnected:
          return GCore.GPathBase.AnchorPoint.Type.Asymmetric;
        case d.Type.Connector:
          return GCore.GPathBase.AnchorPoint.Type.Connector;
        case d.Type.Asymmetric:
          return GCore.GPathBase.AnchorPoint.Type.Symmetric;
        default:
          return null;
      }
    }
    toString() {
      return '[Object GChangeAnchorPointsJointTypeSubAction]';
    }
  }
  ((d.Type = {
    Straight: 'straight',
    Mirrored: 'mirrored',
    Disconnected: 'disconnected',
    Connector: 'connector',
    Asymmetric: 'asymmetric',
  }),
    (exports.exports = d));
}
