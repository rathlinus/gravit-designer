/**
 * Webpack Module #1250
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    function i(e, t) {
      (this.oldPersona = e), (this.newPersona = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.oldPersona = null),
      (i.prototype.newPersona = null),
      (exports.exports = i);
  }