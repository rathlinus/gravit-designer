/**
 * Webpack Module #1347
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    function i(e, t) {
      (this.type = e), (this.data = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.Type = { OpenInAppLink: 1 }),
      (i.prototype.type = null),
      (i.prototype.data = null),
      (exports.exports = i);
  }