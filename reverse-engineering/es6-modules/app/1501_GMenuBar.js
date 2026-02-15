/**
 * Webpack Module #1501
 * Type: class
 * Name: GMenuBar
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GMenu = require(238) /* GMenu */,
    GMenu2 = require(339) /* GMenu */,
    GMenuManager = require(1157);
  class r {
    constructor(e) {
      ((this._htmlElement = $('<nav></nav>').addClass('g-menu-bar')),
      this.setMenu(e || new GMenu(this)));
    }

    _menu = null;

    getMenu() {
      return this._menu;
    }

    isActive() {
      var e = GMenuManager.getActiveMenu();
      return !!(e && e._parent && e._parent instanceof GMenu2) && e._parent.getMenuBar() === this;
    }

    getParent() {
      return null;
    }

    setMenu(e) {
      (e.detach(),
        (this._menu = e),
        (this._menu._parent = this),
        this._menu._htmlElement.addClass('g-menu-root'),
        this._htmlElement.append(this._menu._htmlElement),
        e.update());
    }

    toString() {
      return '[Object GMenuBar]';
    }

  }
  exports.exports = r;
}