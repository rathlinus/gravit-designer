/**
 * Webpack Module #1330
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    function i(e) {
      this.fullscreen = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.fullscreen = false),
      (exports.exports = i);
  }