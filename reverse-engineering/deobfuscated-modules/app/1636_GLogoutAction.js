/**
 * Webpack Module #1636
 * Type: class
 * Name: GLogoutAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
    const i = n(18) /* module_18 */,
      a = n(31) /* GAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "account.logout"),
      (r.TITLE = new o.GLocaleKey("GLogoutAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return i.CATEGORY_ACCOUNT;
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
      (e.exports = r);
  }