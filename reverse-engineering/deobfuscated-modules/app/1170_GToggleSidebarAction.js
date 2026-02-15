/**
 * Webpack Module #1170
 * Type: class
 * Name: GToggleSidebarAction
 */

function (exports, module, require) {
    "use strict";
    n(20) /* module_20 */, n(3) /* module_3 */, n(34) /* module_34 */;
    var o = n(1) /* module_1 */,
      i = n(15) /* module_15 */,
      a = n(198) /* Exports_GOutlineSidebar */,
      r = n(567) /* GAnnotationsSidebar */,
      s = n(18) /* module_18 */,
      l = n(31) /* GAction */,
      c = n(395) /* module_395 */;
    function d(e) {
      this._sidebar = e;
    }
    o.GObject.inherit(d, l),
      (d.ID = "view.toggle-sidebar"),
      (d.TITLE = new o.GLocaleKey("GToggleSidebarAction", "title")),
      (d.prototype._sidebar = null),
      (d.prototype.getId = function () {
        return d.ID + "." + this._sidebar.getId();
      }),
      (d.prototype.getTitle = function () {
        return o.GLocale.get(d.TITLE).replace(
          "%s",
          o.GLocale.get(this._sidebar.getTitle())
        );
      }),
      (d.prototype.getCategory = function () {
        return s.CATEGORY_VIEW;
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
            return [i.GKey.Constant.OPTION, "1"];
          case a.SidebarsIds.GInspectorSidebar:
            return [i.GKey.Constant.OPTION, "2"];
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
          this._sidebar.getId() === r.ID &&
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
      (e.exports = d);
  }