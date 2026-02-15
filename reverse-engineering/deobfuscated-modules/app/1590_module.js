/**
 * Webpack Module #1590
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */(require(879) /* module_879 */);
    const i = require(878) /* module_878 */;
    exports.exports = class extends i {
      constructor(e) {
        super(e),
          this.addGesture(new _interopRequireDefault.default()),
          this.setDelayedTouchEventsEnabled(false);
      }
      _handleEvent(e) {
        e.cancelable && e.preventDefault(), super._handleEvent(e);
      }
    };
  }