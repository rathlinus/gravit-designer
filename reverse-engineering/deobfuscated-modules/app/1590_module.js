/**
 * Webpack Module #1590
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */(require(879) /* module_879 */);
    const i = require(878) /* module_878 */;
    exports.exports = class extends i {
      constructor(e) {
        super(e),
          this.addGesture(new o.default()),
          this.setDelayedTouchEventsEnabled(false);
      }
      _handleEvent(e) {
        e.cancelable && e.preventDefault(), super._handleEvent(e);
      }
    };
  }