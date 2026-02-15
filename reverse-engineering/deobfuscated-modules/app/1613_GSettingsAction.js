/**
 * Webpack Module #1613
 * Type: class
 * Name: GSettingsAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(18) /* module_18 */,
      a = require(31) /* GAction */,
      r = require(1275) /* module_1275 */,
      s = require(1277) /* Action_edit_settings */;
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
      (exports.exports = l);
  }