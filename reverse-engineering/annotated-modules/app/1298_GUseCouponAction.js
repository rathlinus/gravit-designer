/**
 * Webpack Module #1298
 * Type: class
 * Name: GUseCouponAction
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */, n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* module */,
      i = n(31) /* GAction */,
      a = n(18) /* MenuItemBuilder */;
    const r = n(44) /* GSystemDialog */,
      s = n(119) /* GCloudStorage */;
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
        if (!gDesigner.isInAppPurchaseAllowed()) return !1;
        const e = gDesigner.getLicense(),
          t = !(e.isPro() && !e.isExpired()),
          n = !gDesigner.isAnonymous(),
          o = !e.isGuest();
        return t && n && o;
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
      (e.exports = l);
  }