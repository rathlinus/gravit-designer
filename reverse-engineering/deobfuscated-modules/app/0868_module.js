/**
 * Webpack Module #868
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* module */;
    function i(e) {
      this.type = e;
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.type = null),
      (i.Type = { Updated: 0 }),
      (exports.exports = i);
  }