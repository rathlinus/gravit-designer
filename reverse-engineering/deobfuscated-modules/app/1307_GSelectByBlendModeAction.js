/**
 * Webpack Module #1307
 * Type: class
 * Name: GSelectByBlendModeAction
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
      (r.ID = "edit.select-by-blend-mode"),
      (r.TITLE = new GCore.GLocaleKey("GSelectByBlendModeAction", "title")),
      (r.prototype.getGroup = function () {
        return "edit/select-by-style";
      }),
      (r.prototype._getValue = function (e) {
        return e.hasMixin(GCore.GNode.Properties)
          ? e.getProperty("_sbl")
          : GSelectByAction.default.EmptyValue;
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByBlendModeAction]";
      }),
      (exports.exports = r);
  }