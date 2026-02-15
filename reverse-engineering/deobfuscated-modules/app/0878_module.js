/**
 * Webpack Module #878
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */,
      i = require(10) /* AppSettings */,
      a = o(require(1582) /* module_1582 */);
    exports.exports = class {
      constructor(e) {
        (this._target = e),
          (this._lastTouchStartEvent = 0),
          (this._touchmoved = false),
          (this._touchStartX = 0),
          (this._touchStartY = 0),
          (this._handleEventBound = this._tryHandleEvent.bind(this)),
          (this._handleScrollEventBound = this._handleScrollEvent.bind(this)),
          (this._gestureHelper = new a.default()),
          this.activate(e);
      }
      addGesture(e) {
        this._gestureHelper.addGesture(e);
      }
      setDelayedTouchEventsEnabled(e) {
        this._gestureHelper.setDelayedTouchEventsEnabled(e);
      }
      setClickSuppressionEnabled(e) {
        this._gestureHelper.setClickSuppressionEnabled(e),
          document.removeEventListener(
            "scroll",
            this._handleScrollEventBound,
            true
          ),
          e &&
            document.addEventListener(
              "scroll",
              this._handleScrollEventBound,
              true
            );
      }
      activate(e) {
        this.deactivate(this._target),
          (this._target = e),
          this._target &&
            (this._target.addEventListener(
              "touchstart",
              this._handleEventBound
            ),
            this._target.addEventListener("touchmove", this._handleEventBound),
            this._target.addEventListener("touchend", this._handleEventBound),
            this._target.addEventListener(
              "touchcancel",
              this._handleEventBound
            ),
            this._target.addEventListener(
              "gesturestart",
              this._handleEventBound
            ));
      }
      deactivate(e) {
        const module = e || this._target;
        module &&
          (module.removeEventListener("touchstart", this._handleEventBound),
          module.removeEventListener("touchmove", this._handleEventBound),
          module.removeEventListener("touchend", this._handleEventBound),
          module.removeEventListener("touchcancel", this._handleEventBound),
          module.removeEventListener("gesturestart", this._handleEventBound)),
          document.removeEventListener(
            "scroll",
            this._handleScrollEventBound,
            true
          ),
          this._target && delete this._target;
      }
      _tryHandleEvent(e) {
        this._shouldHandle(e) && this._handleEvent(e);
      }
      _handleEvent(e) {
        switch (e.type) {
          case "touchstart":
            this._touchStart(e);
            break;
          case "touchmove":
            this._touchMove(e);
            break;
          case "touchend":
            this._touchEnd(e);
            break;
          case "touchcancel":
            this._touchCancel(e);
            break;
          case "gesturestart":
            this._gestureStart(e);
        }
      }
      _touchStart(e) {
        const module = e.targetTouches[0] || e.changedTouches[0];
        module
          ? ((this._touchStartX = module.clientX), (this._touchStartY = module.clientY))
          : ((this._touchStartX = 0), (this._touchStartY = 0)),
          (this._touchmoved = false),
          this._gestureHelper.touchStart(e);
      }
      _touchMove(e) {
        (this._touchmoved = this._wasMoved(e)),
          this._touchmoved && this._gestureHelper.touchMove(e);
      }
      _touchEnd(e) {
        (this._touchmoved = false), this._gestureHelper.touchEnd(e);
      }
      _touchCancel(e) {
        this._gestureHelper.touchCancel(e);
      }
      _gestureStart(e) {
        this._gestureHelper.gestureStart(e);
      }
      _handleScrollEvent(e) {
        this._gestureHelper.scroll(e);
      }
      _wasMoved(e) {
        const module = e.changedTouches[0],
          { clientX: require, clientY: o } = module;
        return !(
          Math.abs(require - this._touchStartX) < i.MIN_TOUCH_MOVE_DISTANCE &&
          Math.abs(o - this._touchStartY) < i.MIN_TOUCH_MOVE_DISTANCE
        );
      }
      _shouldHandle(e) {
        return !e.defaultPrevented;
      }
    };
  }