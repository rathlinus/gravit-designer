/**
 * Webpack Module #1501
 * Type: class
 * Name: GMenuBar
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GMenu = require(238) /* GMenu */,
      GMenu2 = require(339) /* GMenu */,
      GMenuManager = require(1157) /* GMenuManager */;
    function r(e) {
      (this._htmlElement = $("<nav></nav>").addClass("g-menu-bar")),
        this.setMenu(e || new GMenu(this));
    }
    (r.prototype._menu = null),
      (r.prototype.getMenu = function () {
        return this._menu;
      }),
      (r.prototype.isActive = function () {
        var e = GMenuManager.getActiveMenu();
        return (
          !!(e && e._parent && e._parent instanceof GMenu2) &&
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