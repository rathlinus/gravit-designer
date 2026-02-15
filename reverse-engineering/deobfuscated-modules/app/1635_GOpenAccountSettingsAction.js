/**
 * Webpack Module #1635
 * Type: class
 * Name: GOpenAccountSettingsAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "account.open"),
      (r.TITLE = new GCore.GLocaleKey("GOpenAccountSettingsAction", "title")),
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
        gDesigner.runDeepLink("account");
      }),
      (r.prototype.isVisible = function () {
        const exports = gDesigner.getSyncUser();
        return (
          !(exports && !exports.canUpdateSelfAccountData()) && gDesigner.isTouchEnabled()
        );
      }),
      (r.prototype.toString = function () {
        return "[Object GOpenAccountSettingsAction]";
      }),
      (exports.exports = r);
  }