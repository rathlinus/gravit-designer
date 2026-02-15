/**
 * Webpack Module #1613
 * Type: class
 * Name: GSettingsAction
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */, n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(18) /* module_18 */,
      a = n(31) /* GAction */,
      r = n(1275) /* module_1275 */,
      s = n(1277) /* Action_edit_settings */;
    function l() {}
    o.GObject.inherit(l, a),
      (l.ID = s.ID),
      (l.TITLE = new o.GLocaleKey("GSettingsAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return i.CATEGORY_EDIT;
      }),
      (l.prototype.getGroup = function () {
        return "settings";
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-setting-touch" : "";
      }),
      (l.prototype.execute = async function () {
        new r().then((e) => e.open());
      }),
      (l.prototype.toString = function () {
        return "[Object GSettingsAction]";
      }),
      (e.exports = l);
  }