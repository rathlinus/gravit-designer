/**
 * Webpack Module #1346
 * Type: class
 * Name: GUnloadEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i() {}
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.message = null),
      (i.prototype.toString = function () {
        return "[Object GUnloadEvent]";
      }),
      (exports.exports = i);
  }