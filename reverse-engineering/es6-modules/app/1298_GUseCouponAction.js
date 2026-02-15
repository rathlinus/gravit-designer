/**
 * Webpack Module #1298
 * Type: class
 * Name: GUseCouponAction
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */, require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18);
  const GSystemDialog = require(44) /* GSystemDialog */,
    GCloudStorage = require(119);
  class l extends GAction {
    constructor() {
      super();
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_HELP;
    }

    getGroup() {
      return 'help';
    }

    isVisible() {
      if (!gDesigner.isInAppPurchaseAllowed()) return false;
      const exports = gDesigner.getLicense(),
        module = !(exports.isPro() && !exports.isExpired()),
        require = !gDesigner.isAnonymous(),
        GCore = !exports.isGuest();
      return module && require && GCore;
    }

    execute() {
      GSystemDialog.prompt(
        GCore.GLocale.get(new GCore.GLocaleKey('GUseCouponAction', 'text.hava-coupon')),
        async (e) => {
          if (e) return GCloudStorage.activateCoupon(e);
          GSystemDialog.alert(
            GCore.GLocale.get(new GCore.GLocaleKey('GUseCouponAction', 'text.invalid-coupon'))
          );
        }
      );
    }

    toString() {
      return '[Object GUseCouponAction]';
    }

    static ID = 'use-coupon-action';

    static TITLE = new GCore.GLocaleKey('GUseCouponAction', 'title');

  }
  exports.exports = l;
}