/**
 * Webpack Module #808
 * Type: class
 * Name: GApplicationStatusEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i(e) {
      this.status = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.Status = { Init: 0, Ready: 1 }),
      (i.prototype.status = null),
      (i.prototype.toString = function () {
        return "[Object GApplicationStatusEvent]";
      }),
      (exports.exports = i);
  }