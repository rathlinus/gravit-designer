/**
 * Webpack Module #1170
 * Type: class
 * Name: GToggleSidebarAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      a = require(198) /* Exports_GOutlineSidebar */,
      GAnnotationsSidebar = require(567) /* GAnnotationsSidebar */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      c = require(395) /* module_395 */;
    function d(e) {
      this._sidebar = e;
    }
    GCore.GObject.inherit(d, GAction),
      (d.ID = "view.toggle-sidebar"),
      (d.TITLE = new GCore.GLocaleKey("GToggleSidebarAction", "title")),
      (d.prototype._sidebar = null),
      (d.prototype.getId = function () {
        return d.ID + "." + this._sidebar.getId();
      }),
      (d.prototype.getTitle = function () {
        return GCore.GLocale.get(d.TITLE).replace(
          "%s",
          GCore.GLocale.get(this._sidebar.getTitle())
        );
      }),
      (d.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW;
      }),
      (d.prototype.getGroup = function () {
        return "view-sidebars";
      }),
      (d.prototype.isCheckable = function () {
        return true;
      }),
      (d.prototype.isChecked = function () {
        return this._sidebar.getId() === this._getSidebars().getActiveSidebar();
      }),
      (d.prototype.getShortcut = function () {
        switch (this._sidebar.getId()) {
          case a.SidebarsIds.GOutlineSidebar:
            return [GEditor.GKey.Constant.OPTION, "1"];
          case a.SidebarsIds.GInspectorSidebar:
            return [GEditor.GKey.Constant.OPTION, "2"];
          default:
            return null;
        }
      }),
      (d.prototype.execute = function () {
        this.isChecked()
          ? (this._getSidebars().setActiveSidebar(null),
            gDesigner.setPartVisible(this._getSidebars().getSidebarsPart(), false))
          : (this._getSidebars().setActiveSidebar(this._sidebar.getId()),
            gDesigner.setPartVisible(
              this._getSidebars().getSidebarsPart(),
              true
            )),
          c.setOrientationStateInSetting(
            this._sidebar.getOrientation(),
            this.isChecked()
          ),
          this._sidebar.getId() === GAnnotationsSidebar.ID &&
            gDesigner.getToolbar().updateCommentToggleStatus();
      }),
      (d.prototype._getSidebars = function () {
        switch (this._sidebar.getOrientation()) {
          case c.Orientation.Left:
            return gDesigner.getLeftSidebars();
          case c.Orientation.Right:
            return gDesigner.getRightSidebars();
        }
      }),
      (d.prototype.isVisible = function () {
        return this._sidebar.isVisible();
      }),
      (d.prototype.toString = function () {
        return "[Object GToggleSidebarAction]";
      }),
      (exports.exports = d);
  }