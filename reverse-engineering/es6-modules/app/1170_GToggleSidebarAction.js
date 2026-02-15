/**
 * Webpack Module #1170
 * Type: class
 * Name: GToggleSidebarAction
 */

function (exports, module, require) {
  'use strict';
  (require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34)) /* polyfill_String_replace */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    a = require(198) /* Exports_GOutlineSidebar */,
    GAnnotationsSidebar = require(567) /* GAnnotationsSidebar */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GSidebarContainer = require(395);
  class d extends GAction {
    constructor(e) {
      super();
      this._sidebar = e;
    }

    _sidebar = null;

    getId() {
      return d.ID + '.' + this._sidebar.getId();
    }

    getTitle() {
      return GCore.GLocale.get(d.TITLE).replace('%s', GCore.GLocale.get(this._sidebar.getTitle()));
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW;
    }

    getGroup() {
      return 'view-sidebars';
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      return this._sidebar.getId() === this._getSidebars().getActiveSidebar();
    }

    getShortcut() {
      switch (this._sidebar.getId()) {
        case a.SidebarsIds.GOutlineSidebar:
          return [GEditor.GKey.Constant.OPTION, '1'];
        case a.SidebarsIds.GInspectorSidebar:
          return [GEditor.GKey.Constant.OPTION, '2'];
        default:
          return null;
      }
    }

    execute() {
      (this.isChecked()
        ? (this._getSidebars().setActiveSidebar(null),
          gDesigner.setPartVisible(this._getSidebars().getSidebarsPart(), false))
        : (this._getSidebars().setActiveSidebar(this._sidebar.getId()),
          gDesigner.setPartVisible(this._getSidebars().getSidebarsPart(), true)),
        GSidebarContainer.setOrientationStateInSetting(
          this._sidebar.getOrientation(),
          this.isChecked()
        ),
        this._sidebar.getId() === GAnnotationsSidebar.ID &&
          gDesigner.getToolbar().updateCommentToggleStatus());
    }

    _getSidebars() {
      switch (this._sidebar.getOrientation()) {
        case GSidebarContainer.Orientation.Left:
          return gDesigner.getLeftSidebars();
        case GSidebarContainer.Orientation.Right:
          return gDesigner.getRightSidebars();
      }
    }

    isVisible() {
      return this._sidebar.isVisible();
    }

    toString() {
      return '[Object GToggleSidebarAction]';
    }

    static ID = 'view.toggle-sidebar';

    static TITLE = new GCore.GLocaleKey('GToggleSidebarAction', 'title');

  }
  exports.exports = d;
}