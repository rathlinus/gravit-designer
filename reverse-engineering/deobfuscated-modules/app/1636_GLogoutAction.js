/**
 * Webpack Module #1636
 * Type: class
 * Name: GLogoutAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "account.logout"),
      (r.TITLE = new GCore.GLocaleKey("GLogoutAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_ACCOUNT;
      }),
      (r.prototype.getGroup = function () {
        return "account";
      }),
      (r.prototype.execute = function () {
        return gDesigner.signout();
      }),
      (r.prototype.isVisible = function () {
        return gDesigner.isTouchEnabled();
      }),
      (r.prototype.toString = function () {
        return "[Object GLogoutAction]";
      }),
      (exports.exports = r);
  }