/**
 * Webpack Module #1336
 * Type: class
 * Name: GOpenQuickHelpScreenAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
    const i = n(18) /* module_18 */,
      a = n(31) /* GAction */,
      r = n(1589) /* module_1589 */;
    function s() {}
    o.GObject.inherit(s, a),
      (s.ID = "help.open-quick-help"),
      (s.TITLE = new o.GLocaleKey("GOpenQuickHelpScreenAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return i.CATEGORY_HELP;
      }),
      (s.prototype.getGroup = function () {
        return "help";
      }),
      (s.prototype.isEnabled = function () {
        return true;
      }),
      (s.prototype.isVisible = function () {
        return gDesigner.isTouchEnabled();
      }),
      (s.prototype.execute = function () {
        r.open();
      }),
      (s.prototype.toString = function () {
        return "[Object GOpenQuickHelpScreenAction]";
      }),
      (e.exports = s);
  }