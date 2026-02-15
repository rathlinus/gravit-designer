/**
 * Webpack Module #1590
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* module_16 */(n(879) /* module_879 */);
    const i = n(878) /* module_878 */;
    e.exports = class extends i {
      constructor(e) {
        super(e),
          this.addGesture(new o.default()),
          this.setDelayedTouchEventsEnabled(!1);
      }
      _handleEvent(e) {
        e.cancelable && e.preventDefault(), super._handleEvent(e);
      }
    };
  }