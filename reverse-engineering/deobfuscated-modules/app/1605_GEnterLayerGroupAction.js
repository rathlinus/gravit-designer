/**
 * Webpack Module #1605
 * Type: class
 * Name: GEnterLayerGroupAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(15) /* module */,
      a = require(1) /* module */,
      r = require(198) /* Exports_GOutlineSidebar */,
      s = o(require(18) /* module_18 */),
      l = o(require(31) /* GAction */);
    class c extends l.default {
      constructor() {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        super(),
          (this._isReverse = exports),
          (this._title = new a.GLocaleKey(
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
        return s.default.CATEGORY_VIEW;
      }
      getShortcut() {
        return this._isReverse
          ? [i.GKey.Constant.SHIFT, i.GKey.Constant.ENTER]
          : [i.GKey.Constant.ENTER];
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
        let o;
        if (
          (!this._isReverse && require.firstChild
            ? (o = require.firstChild)
            : this._isReverse && require.parent && require.parent.row && (o = require.parent),
          o)
        ) {
          const i = exports.gLayerPanel("getItem", require),
            r = exports.gLayerPanel("getItem", o);
          i.removeFlag(a.GNode.Flag.Selected),
            r.setFlag(a.GNode.Flag.Selected),
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