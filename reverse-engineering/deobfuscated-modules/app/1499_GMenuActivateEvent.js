/**
 * Webpack Module #1499
 * Type: class
 * Name: GMenuActivateEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i(e) {
      this.item = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.item = null),
      (i.prototype.toString = function () {
        return "[Object GMenuActivateEvent]";
      }),
      (i.EVENT = new i()),
      (exports.exports = i);
  }