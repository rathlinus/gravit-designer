/**
 * Webpack Module #1581
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const GTouchEventHandler = require(878) /* GTouchEventHandler */,
      GTouchClickGesture = require(879) /* GTouchClickGesture */,
      a = require(1329) /* module_1329 */;
    exports.exports = class extends GTouchEventHandler {
      constructor(e) {
        super(e),
          this.addGesture(
            new GTouchClickGesture({
              doubleTapDetection: GTouchClickGesture.DetectionMode.Nearby,
              doubleTapThreshold: 200,
            })
          ),
          this.addGesture(new a()),
          this.setClickSuppressionEnabled(true);
      }
      _touchEnd(e) {
        const module = e.changedTouches[0];
        !module ||
          ($(module.target).data("ginputbox") && this._touchmoved) ||
          $(module.target).is(":focus") ||
          (document.activeElement &&
            document.activeElement !== module.target &&
            $(document.activeElement).blur(),
          $(module.target).focus()),
          super._touchEnd(e);
      }
      _handleEvent(e) {
        const module = e.changedTouches && e.changedTouches[0];
        if (!module || !$(module.target).is("select"))
          try {
            super._handleEvent(e);
          } finally {
            e.cancelable && (e.preventDefault(), e.stopPropagation());
          }
      }
    };
  }