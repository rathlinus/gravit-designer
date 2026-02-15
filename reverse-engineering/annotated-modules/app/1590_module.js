/**
 * Webpack Module #1590
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */(n(879) /* GTouchClickGesture */);
    const i = n(878) /* GTouchEventHandler */;
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