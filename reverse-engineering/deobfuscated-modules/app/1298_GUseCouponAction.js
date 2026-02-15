/**
 * Webpack Module #1298
 * Type: class
 * Name: GUseCouponAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(31) /* GAction */,
      a = require(18) /* MenuItemBuilder */;
    const r = require(44) /* GSystemDialog */,
      s = require(119) /* module_119 */;
    function l() {}
    o.GObject.inherit(l, i),
      (l.ID = "use-coupon-action"),
      (l.TITLE = new o.GLocaleKey("GUseCouponAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return a.CATEGORY_HELP;
      }),
      (l.prototype.getGroup = function () {
        return "help";
      }),
      (l.prototype.isVisible = function () {
        if (!gDesigner.isInAppPurchaseAllowed()) return false;
        const exports = gDesigner.getLicense(),
          module = !(exports.isPro() && !exports.isExpired()),
          require = !gDesigner.isAnonymous(),
          o = !exports.isGuest();
        return module && require && o;
      }),
      (l.prototype.execute = function () {
        r.prompt(
          o.GLocale.get(
            new o.GLocaleKey("GUseCouponAction", "text.hava-coupon")
          ),
          async (e) => {
            if (e) return s.activateCoupon(e);
            r.alert(
              o.GLocale.get(
                new o.GLocaleKey("GUseCouponAction", "text.invalid-coupon")
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