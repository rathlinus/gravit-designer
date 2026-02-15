/**
 * Webpack Module #1501
 * Type: class
 * Name: GMenuBar
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(238) /* GMenu */,
      i = require(339) /* GMenu */,
      a = require(1157) /* module_1157 */;
    function r(e) {
      (this._htmlElement = $("<nav></nav>").addClass("g-menu-bar")),
        this.setMenu(e || new o(this));
    }
    (r.prototype._menu = null),
      (r.prototype.getMenu = function () {
        return this._menu;
      }),
      (r.prototype.isActive = function () {
        var e = a.getActiveMenu();
        return (
          !!(e && e._parent && e._parent instanceof i) &&
          e._parent.getMenuBar() === this
        );
      }),
      (r.prototype.getParent = function () {
        return null;
      }),
      (r.prototype.setMenu = function (e) {
        e.detach(),
          (this._menu = e),
          (this._menu._parent = this),
          this._menu._htmlElement.addClass("g-menu-root"),
          this._htmlElement.append(this._menu._htmlElement),
          e.update();
      }),
      (r.prototype.toString = function () {
        return "[Object GMenuBar]";
      }),
      (exports.exports = r);
  }