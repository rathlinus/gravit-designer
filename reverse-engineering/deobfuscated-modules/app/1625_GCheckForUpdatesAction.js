/**
 * Webpack Module #1625
 * Type: class
 * Name: GCheckForUpdatesAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(31) /* GAction */,
      a = n(18) /* module_18 */;
    function r() {}
    o.GObject.inherit(r, i),
      (r.ID = "check-for-updates"),
      (r.TITLE = new o.GLocaleKey("GCheckForUpdatesAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return a.CATEGORY_HELP;
      }),
      (r.prototype.getGroup = function () {
        return "help";
      }),
      (r.prototype.isEnabled = function () {
        return true;
      }),
      (r.prototype.execute = function () {
        gDesigner.getSoftwareUpdateManager().checkForUpdates();
      }),
      (r.prototype.toString = function () {
        return "[Object GCheckForUpdatesAction]";
      }),
      (e.exports = r);
  }