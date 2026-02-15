/**
 * Webpack Module #1613
 * Type: class
 * Name: GSettingsAction
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */, n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* module */,
      i = n(18) /* MenuItemBuilder */,
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