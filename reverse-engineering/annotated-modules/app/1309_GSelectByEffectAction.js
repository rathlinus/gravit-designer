/**
 * Webpack Module #1309
 * Type: class
 * Name: GSelectByEffectAction
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */;
    n(3) /* polyfill_RegExp_toString */;
    var i = n(1) /* GCore */,
      a = o(n(609) /* GSelectByAction */);
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
        const t = e.getEffects();
        return t ? t.getChildren() : [];
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByEffectAction]";
      }),
      (e.exports = r);
  }