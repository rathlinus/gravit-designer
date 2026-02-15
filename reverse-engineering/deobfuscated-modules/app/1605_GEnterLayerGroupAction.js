/**
 * Webpack Module #1605
 * Type: class
 * Name: GEnterLayerGroupAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GEditor = require(15) /* GEditor */,
      GCore = require(1) /* GCore */,
      r = require(198) /* Exports_GOutlineSidebar */,
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GAction = _interopRequireDefault(require(31) /* GAction */);
    class c extends GAction.default {
      constructor() {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        super(),
          (this._isReverse = exports),
          (this._title = new GCore.GLocaleKey(
            "GEnterLayerGroupAction",
            "title".concat(this._isReverse ? ".reverse" : "")
          ));
      }
      getId() {
        return this._isReverse ? c.ID_REVERSE : c.ID;
      }
      getTitle() {
        return this._title;
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_VIEW;
      }
      getShortcut() {
        return this._isReverse
          ? [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.ENTER]
          : [GEditor.GKey.Constant.ENTER];
      }
      isVisible() {
        return false;
      }
      execute() {
        const exports = gDesigner
            .getLeftSidebars()
            .getSidebar(r.SidebarsIds.GOutlineSidebar)
            .getLayerPanel(),
          { vtree: module, currentFocus: require } = exports.data("glayerpanel");
        if (!require) return;
        let _interopRequireDefault;
        if (
          (!this._isReverse && require.firstChild
            ? (_interopRequireDefault = require.firstChild)
            : this._isReverse && require.parent && require.parent.row && (_interopRequireDefault = require.parent),
          _interopRequireDefault)
        ) {
          const GEditor = exports.gLayerPanel("getItem", require),
            r = exports.gLayerPanel("getItem", _interopRequireDefault);
          GEditor.removeFlag(GCore.GNode.Flag.Selected),
            r.setFlag(GCore.GNode.Flag.Selected),
            module.expandAndFocus(r);
        }
      }
      toString() {
        return "[Object GEnterLayerGroupAction]";
      }
    }
    (c.ID = "view.enter-layer-group"),
      (c.ID_REVERSE = "view.enter-layer-group.reverse"),
      (exports.exports = c);
  }