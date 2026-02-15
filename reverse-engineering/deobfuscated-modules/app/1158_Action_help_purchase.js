/**
 * Webpack Module #1158
 * Type: action
 * Name: Action_help_purchase
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "help.purchase"),
      (r.TITLE = new GCore.GLocaleKey("GPurchaseProAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP;
      }),
      (r.prototype.getGroup = function () {
        return "help";
      }),
      (r.prototype.isVisible = function () {
        if (!gDesigner.isInAppPurchaseAllowed()) return false;
        var e = gDesigner.getLicense();
        return !(gDesigner.isAnonymous() || (e.isPro() && !e.isExpired()));
      }),
      (r.prototype.isEnabled = function () {
        var e = gDesigner.getLicense();
        return !(e.isPro() && !e.isExpired());
      }),
      (r.prototype.execute = function () {
        gDesigner.openPaymentDialog();
      }),
      (r.prototype.getStyleClass = function () {
        return "purchase-pro-menu-item";
      }),
      (r.prototype.noHover = function () {
        return true;
      }),
      (r.prototype.toString = function () {
        return "[GObject GPurchaseProAction]";
      }),
      (exports.exports = r);
  }