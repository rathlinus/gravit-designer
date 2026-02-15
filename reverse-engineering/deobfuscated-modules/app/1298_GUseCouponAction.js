/**
 * Webpack Module #1298
 * Type: class
 * Name: GUseCouponAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */;
    const GSystemDialog = require(44) /* GSystemDialog */,
      GCloudStorage = require(119) /* GCloudStorage */;
    function l() {}
    GCore.GObject.inherit(l, GAction),
      (l.ID = "use-coupon-action"),
      (l.TITLE = new GCore.GLocaleKey("GUseCouponAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP;
      }),
      (l.prototype.getGroup = function () {
        return "help";
      }),
      (l.prototype.isVisible = function () {
        if (!gDesigner.isInAppPurchaseAllowed()) return false;
        const exports = gDesigner.getLicense(),
          module = !(exports.isPro() && !exports.isExpired()),
          require = !gDesigner.isAnonymous(),
          GCore = !exports.isGuest();
        return module && require && GCore;
      }),
      (l.prototype.execute = function () {
        GSystemDialog.prompt(
          GCore.GLocale.get(
            new GCore.GLocaleKey("GUseCouponAction", "text.hava-coupon")
          ),
          async (e) => {
            if (e) return GCloudStorage.activateCoupon(e);
            GSystemDialog.alert(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GUseCouponAction", "text.invalid-coupon")
              )
            );
          }
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GUseCouponAction]";
      }),
      (exports.exports = l);
  }