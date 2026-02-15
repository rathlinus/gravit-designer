/**
 * Webpack Module #1321
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */, require(3) /* module_3 */;
    var o = require(1) /* module */;
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
      (exports.exports = i);
  }