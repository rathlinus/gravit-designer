/**
 * Webpack Module #1174
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    function i(e, t) {
      (this.type = e), (this.data = t);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.Type = { DoubleClickFile: 1, Reload: 2, UnshareWithMe: 3 }),
      (i.prototype.type = null),
      (i.prototype.data = null),
      (exports.exports = i);
  }