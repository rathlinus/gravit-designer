/**
 * Webpack Module #392
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* GCore */;
    function i(e, t) {
      (this.document = e), (this.state = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.document = null),
      (i.prototype.state = null),
      (i.prototype.toString = function () {
        return "Object [GApplicationStateChangedEvent]";
      }),
      (e.exports = i);
  }