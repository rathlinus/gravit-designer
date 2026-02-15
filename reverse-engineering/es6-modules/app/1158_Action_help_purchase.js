/**
 * Webpack Module #1158
 * Type: action
 * Name: Action_help_purchase
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18);
  class r extends GAction {
    constructor() {
      super();
    }

    getId() {
      return r.ID;
    }

    getTitle() {
      return r.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_HELP;
    }

    getGroup() {
      return 'help';
    }

    isVisible() {
      if (!gDesigner.isInAppPurchaseAllowed()) return false;
      var e = gDesigner.getLicense();
      return !(gDesigner.isAnonymous() || (e.isPro() && !e.isExpired()));
    }

    isEnabled() {
      var e = gDesigner.getLicense();
      return !(e.isPro() && !e.isExpired());
    }

    execute() {
      gDesigner.openPaymentDialog();
    }

    getStyleClass() {
      return 'purchase-pro-menu-item';
    }

    noHover() {
      return true;
    }

    toString() {
      return '[GObject GPurchaseProAction]';
    }

    static ID = 'help.purchase';

    static TITLE = new GCore.GLocaleKey('GPurchaseProAction', 'title');

  }
  exports.exports = r;
}