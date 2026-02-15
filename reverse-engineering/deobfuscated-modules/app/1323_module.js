/**
 * Webpack Module #1323
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i(e, t) {
      (this.document = e), (this.state = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.document = null),
      (i.prototype.state = null),
      (i.prototype.toString = function () {
        return "Object [GShareStateChangedEvent]";
      }),
      (exports.exports = i);
  }