/**
 * Webpack Module #1172
 * Type: class
 * Name: GInstallToDesktopAction
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */;
    n(3) /* polyfill_RegExp_toString */;
    var i = n(1) /* GCore */,
      a = (n(15) /* GEditor */, o(n(31) /* GAction */)),
      r = (o(n(85) /* GContainer */), o(n(18) /* MenuItemBuilder */)),
      s = o(n(1173) /* module_1173 */);
    function l() {}
    i.GObject.inherit(l, a.default),
      (l.ID = "file.install-to-desktop"),
      (l.TITLE = new i.GLocaleKey("GInstallToDesktopAction", "title")),
      (l.closedInstallPWADialogDatePropName =
        "pwa.closed-install-pwa-dialog-date"),
      (l.installPWA3timesAWeekPropName =
        "pwa.show-install-dialog-3-times-a-week"),
      (l.install = function () {
        var e = gDesigner.getPwaEvent();
        e &&
          e.prompt &&
          e.prompt().then(function (e) {
            let { outcome: t } = e;
            "dismissed" === t ||
              ("accepted" === t &&
                (gContainer.removeProperty(l.installPWA3timesAWeekPropName),
                gContainer.removeProperty(l.closedInstallPWADialogDatePropName),
                gDesigner.closeInstallPwaDialog()));
          });
      }),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return r.default.CATEGORY_FILE;
      }),
      (l.prototype.getGroup = function () {
        return "install";
      }),
      (l.prototype.isAvailable = function () {
        return (
          s.default.isSupported() &&
          !window.matchMedia("(display-mode: standalone)").matches
        );
      }),
      (l.prototype.isVisible = function () {
        return !window.matchMedia("(display-mode: standalone)").matches;
      }),
      (l.prototype.isEnabled = function () {
        return gDesigner.hasPwaEvent();
      }),
      (l.prototype.execute = function () {
        return l.install();
      }),
      (l.prototype.toString = function () {
        return "[Object GInstallToDesktopAction]";
      }),
      (e.exports = l);
  }