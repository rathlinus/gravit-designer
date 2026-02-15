/**
 * Webpack Module #1330
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    function i(e) {
      this.fullscreen = e;
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.fullscreen = false),
      (exports.exports = i);
  }