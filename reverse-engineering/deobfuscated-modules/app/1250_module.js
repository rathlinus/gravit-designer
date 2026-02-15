/**
 * Webpack Module #1250
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* module */;
    function i(e, t) {
      (this.oldPersona = e), (this.newPersona = t);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.oldPersona = null),
      (i.prototype.newPersona = null),
      (exports.exports = i);
  }