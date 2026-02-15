/**
 * Webpack Module #1151
 * Type: class
 * Name: GSwatchesChangedEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i(e) {
      this.scope = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.scope = null),
      (i.prototype.toString = function () {
        return "[Object GSwatchesChangedEvent]";
      }),
      (exports.exports = i);
  }