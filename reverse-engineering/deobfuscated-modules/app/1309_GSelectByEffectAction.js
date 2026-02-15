/**
 * Webpack Module #1309
 * Type: class
 * Name: GSelectByEffectAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = o(require(609) /* GSelectByAction */);
    function r() {
      a.default.call(this, r.ID, r.TITLE);
    }
    i.GObject.inherit(r, a.default),
      (r.ID = "edit.select-by-effect"),
      (r.TITLE = new i.GLocaleKey("GSelectByEffectAction", "title")),
      (r.prototype.getGroup = function () {
        return "edit/select-by-style";
      }),
      (r.prototype._getValue = function (e) {
        if (!e.hasMixin(i.GStylable)) return a.default.EmptyValue;
        const module = e.getEffects();
        return module ? module.getChildren() : [];
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByEffectAction]";
      }),
      (exports.exports = r);
  }