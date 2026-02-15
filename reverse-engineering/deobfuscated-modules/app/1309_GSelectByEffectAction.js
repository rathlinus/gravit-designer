/**
 * Webpack Module #1309
 * Type: class
 * Name: GSelectByEffectAction
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
      (r.ID = "edit.select-by-effect"),
      (r.TITLE = new GCore.GLocaleKey("GSelectByEffectAction", "title")),
      (r.prototype.getGroup = function () {
        return "edit/select-by-style";
      }),
      (r.prototype._getValue = function (e) {
        if (!e.hasMixin(GCore.GStylable)) return GSelectByAction.default.EmptyValue;
        const module = e.getEffects();
        return module ? module.getChildren() : [];
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByEffectAction]";
      }),
      (exports.exports = r);
  }