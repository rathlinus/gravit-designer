/**
 * Webpack Module #1174
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    function i(e, t) {
      (this.type = e), (this.data = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.Type = { DoubleClickFile: 1, Reload: 2, UnshareWithMe: 3 }),
      (i.prototype.type = null),
      (i.prototype.data = null),
      (exports.exports = i);
  }