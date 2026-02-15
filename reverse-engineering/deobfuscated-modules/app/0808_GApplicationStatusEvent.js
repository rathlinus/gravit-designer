/**
 * Webpack Module #808
 * Type: class
 * Name: GApplicationStatusEvent
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
    function i(e) {
      this.status = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.Status = { Init: 0, Ready: 1 }),
      (i.prototype.status = null),
      (i.prototype.toString = function () {
        return "[Object GApplicationStatusEvent]";
      }),
      (e.exports = i);
  }