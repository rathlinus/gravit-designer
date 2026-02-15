/**
 * Webpack Module #1344
 * Type: class
 * Name: GCycleThroughLayersAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    GEditor = require(15) /* GEditor */,
    GCore = require(1) /* GCore */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GAction = _interopRequireDefault(require(31) /* GAction */),
    l = require(198); /* Exports_GOutlineSidebar */
  class c extends GAction.default {
    constructor(e) {
      (super(),
        (this._type = e),
        (this._title = new GCore.GLocaleKey(
          'GCycleThroughLayersAction',
          'title.'.concat(this._type)
        )));
    }
    getId() {
      return ''.concat(c.ID, '.').concat(this._type);
    }
    getTitle() {
      return this._title;
    }
    getCategory() {
      return MenuItemBuilder.default.CATEGORY_VIEW;
    }
    getShortcut() {
      switch (this._type) {
        case c.Type.Next:
          return [GEditor.GKey.Constant.TAB];
        case c.Type.Previous:
          return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.TAB];
        default:
          return null;
      }
    }
    isVisible() {
      return false;
    }
    execute() {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : c.Mode.Level;
      const module = gDesigner.getLeftSidebars().getActiveSidebar(),
        require = gDesigner.getLeftSidebars().getSidebar(l.SidebarsIds.GOutlineSidebar),
        _interopRequireDefault = require.getLayerPanel(),
        GEditor = _interopRequireDefault.gLayerPanel('getCurrentFocusedNode');
      if (!GEditor || module !== require.getId()) return;
      const MenuItemBuilder = this._getNextNodeInIteration(exports, GEditor);
      if (MenuItemBuilder) {
        const e = _interopRequireDefault.gLayerPanel('getItem', GEditor),
          t = _interopRequireDefault.gLayerPanel('getItem', MenuItemBuilder);
        (e.removeFlag(GCore.GNode.Flag.Selected),
          t.setFlag(GCore.GNode.Flag.Selected),
          _interopRequireDefault.gLayerPanel('setCurrentFocusedNode', MenuItemBuilder),
          _interopRequireDefault.gLayerPanel('relayout'));
      }
    }
    _getNextNodeInIteration(e, t) {
      switch (e) {
        case c.Mode.Level:
          return this._getNextNodeOfCurrentLevel(t);
        case c.Mode.Focus:
          return this._getNextFocusableNode(t);
        default:
          return null;
      }
    }
    _getNextNodeOfCurrentLevel(e) {
      switch (this._type) {
        case c.Type.Next:
          return e.next || e.parent.firstChild;
        case c.Type.Previous:
          return e.previous || e.parent.lastChild;
        default:
          return null;
      }
    }
    _getNextFocusableNode(e) {
      switch (this._type) {
        case c.Type.Next:
          return e.getNextFocusableNode();
        case c.Type.Previous:
          return e.getPreviousFocusableNode();
        default:
          return null;
      }
    }
    toString() {
      return '[Object GCycleThroughLayersAction]';
    }
  }
  ((c.ID = 'view.cycle-through-layers'),
    (c.Type = { Next: 'next', Previous: 'previous' }),
    (c.Mode = { Focus: 'focus', Level: 'level' }),
    (exports.exports = c));
}
