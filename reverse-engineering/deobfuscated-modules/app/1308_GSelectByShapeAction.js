/**
 * Webpack Module #1308
 * Type: class
 * Name: GSelectByShapeAction
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
      (r.ID = "edit.select-by-shape"),
      (r.TITLE = new GCore.GLocaleKey("GSelectByShapeAction", "title")),
      (r.prototype.getGroup = function () {
        return "edit/select-by-style";
      }),
      (r.prototype._getValue = function (e) {
        return e.getNodeName();
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByShapeAction]";
      }),
      (exports.exports = r);
  }