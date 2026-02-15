/**
 * Webpack Module #1172
 * Type: class
 * Name: GInstallToDesktopAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = (require(15) /* module */, o(require(31) /* GAction */)),
      r = (o(require(85) /* GContainer */), o(require(18) /* module_18 */)),
      s = o(require(1173) /* module_1173 */);
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
            let { outcome: module } = e;
            "dismissed" === module ||
              ("accepted" === module &&
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
      (exports.exports = l);
  }