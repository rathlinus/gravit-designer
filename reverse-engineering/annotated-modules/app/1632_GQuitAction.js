/**
 * Webpack Module #1632
 * Type: class
 * Name: GQuitAction
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* module */,
      i = n(15) /* module */,
      a = n(31) /* GAction */,
      r = n(18) /* MenuItemBuilder */,
      s = n(85) /* GContainer */;
    function l() {}
    o.GObject.inherit(l, a),
      (l.ID = "file.quit"),
      (l.TITLE = new o.GLocaleKey("GQuitAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_FILE;
      }),
      (l.prototype.getGroup = function () {
        return "file-quit";
      }),
      (l.prototype.isEnabled = function () {
        return (
          gContainer.getRuntime() !== s.Runtime.Browser &&
          gContainer.getRuntime() !== s.Runtime.PWA
        );
      }),
      (l.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, "Q"];
      }),
      (l.prototype.isAvailable = function () {
        return (
          gContainer.getRuntime() !== s.Runtime.Browser &&
          gContainer.getRuntime() !== s.Runtime.PWA
        );
      }),
      (l.prototype.execute = function () {
        gContainer.triggerClose();
      }),
      (l.prototype.toString = function () {
        return "[Object GQuitAction]";
      }),
      (e.exports = l);
  }