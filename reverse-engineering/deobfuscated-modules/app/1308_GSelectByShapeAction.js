/**
 * Webpack Module #1308
 * Type: class
 * Name: GSelectByShapeAction
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
      (r.ID = "edit.select-by-shape"),
      (r.TITLE = new i.GLocaleKey("GSelectByShapeAction", "title")),
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