/**
 * Webpack Module #1323
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    function i(e, t) {
      (this.document = e), (this.state = t);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.document = null),
      (i.prototype.state = null),
      (i.prototype.toString = function () {
        return "Object [GShareStateChangedEvent]";
      }),
      (exports.exports = i);
  }