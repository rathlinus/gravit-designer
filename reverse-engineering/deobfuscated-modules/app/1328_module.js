/**
 * Webpack Module #1328
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    function i(e) {
      this.paintMode = e;
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.paintMode = null),
      (exports.exports = i);
  }