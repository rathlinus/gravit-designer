/**
 * Webpack Module #1156
 * Type: class
 * Name: GMenuCloseEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i() {}
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.toString = function () {
        return "[Object GMenuCloseEvent]";
      }),
      (i.EVENT = new i()),
      (exports.exports = i);
  }