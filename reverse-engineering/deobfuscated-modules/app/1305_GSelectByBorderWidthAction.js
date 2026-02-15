/**
 * Webpack Module #1305
 * Type: class
 * Name: GSelectByBorderWidthAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */, require(38) /* stub_requires_680 */;
    var GCore = require(1) /* GCore */,
      GSelectByAction = _interopRequireDefault(require(609) /* GSelectByAction */);
    function r() {
      GSelectByAction.default.call(this, r.ID, r.TITLE);
    }
    GCore.GObject.inherit(r, GSelectByAction.default),
      (r.ID = "edit.select-by-border-width"),
      (r.TITLE = new GCore.GLocaleKey("GSelectByBorderWidthAction", "title")),
      (r.prototype.getGroup = function () {
        return "edit/select-by-style";
      }),
      (r.prototype._getValue = function (e) {
        if (e.hasMixin(GCore.GStylable)) {
          const t = e.getPaintLayers(),
            n = t && t.getBorderLayers(true);
          if (n && n.length > 0) return n.map((e) => e.getProperty("_bw"));
        }
        return GSelectByAction.default.EmptyValue;
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByBorderWidthAction]";
      }),
      (exports.exports = r);
  }