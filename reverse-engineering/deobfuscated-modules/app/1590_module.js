/**
 * Webpack Module #1590
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */(require(879) /* GTouchClickGesture */);
    const GTouchEventHandler = require(878) /* GTouchEventHandler */;
    exports.exports = class extends GTouchEventHandler {
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