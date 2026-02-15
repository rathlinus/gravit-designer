/**
 * Webpack Module #1321
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    function i(e, t) {
      (this.notification = Object.assign(
        { popup: false, annonymous: false },
        e || {}
      )),
        (this.builder = t);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.notification = null),
      (i.prototype.toString = function () {
        return "GEvent [GNotificationEvent]";
      }),
      (exports.exports = i);
  }