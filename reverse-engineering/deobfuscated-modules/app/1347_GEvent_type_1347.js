/**
 * Webpack Module #1347
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    function i(e, t) {
      (this.type = e), (this.data = t);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.Type = { OpenInAppLink: 1 }),
      (i.prototype.type = null),
      (i.prototype.data = null),
      (exports.exports = i);
  }