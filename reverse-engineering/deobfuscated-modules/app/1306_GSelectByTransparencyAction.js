/**
 * Webpack Module #1306
 * Type: class
 * Name: GSelectByTransparencyAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GSelectByAction = _interopRequireDefault(require(609) /* GSelectByAction */);
    function r() {
      GSelectByAction.default.call(this, r.ID, r.TITLE);
    }
    GCore.GObject.inherit(r, GSelectByAction.default),
      (r.ID = "edit.select-by-transparency"),
      (r.TITLE = new GCore.GLocaleKey("GSelectByTransparencyAction", "title")),
      (r.prototype.getGroup = function () {
        return "edit/select-by-style";
      }),
      (r.prototype._getValue = function (e) {
        return e.hasMixin(GCore.GNode.Properties)
          ? e.getProperty("_stop")
          : GSelectByAction.default.EmptyValue;
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByTransparencyAction]";
      }),
      (exports.exports = r);
  }