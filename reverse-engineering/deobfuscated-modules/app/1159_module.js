/**
 * Webpack Module #1159
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* module */;
    function i(e, t) {
      (this.type = e), (this.fileId = t);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.Type = { Enable: 1, Disable: 0, Close: 2 }),
      (i.prototype.fileId = null),
      (i.prototype.type = null),
      (exports.exports = i);
  }