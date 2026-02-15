/**
 * Webpack Module #1307
 * Type: class
 * Name: GSelectByBlendModeAction
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
      (r.ID = "edit.select-by-blend-mode"),
      (r.TITLE = new i.GLocaleKey("GSelectByBlendModeAction", "title")),
      (r.prototype.getGroup = function () {
        return "edit/select-by-style";
      }),
      (r.prototype._getValue = function (e) {
        return e.hasMixin(i.GNode.Properties)
          ? e.getProperty("_sbl")
          : a.default.EmptyValue;
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByBlendModeAction]";
      }),
      (exports.exports = r);
  }