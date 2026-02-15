/**
 * Webpack Module #1321
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(30) /* module_30 */, n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
    function i(e, t) {
      (this.notification = Object.assign(
        { popup: false, annonymous: false },
        e || {}
      )),
        (this.builder = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.notification = null),
      (i.prototype.toString = function () {
        return "GEvent [GNotificationEvent]";
      }),
      (e.exports = i);
  }