/**
 * Webpack Module #1582
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  const o = require(1583) /* module_1583 */,
    i = require(1189); /* module_1189 */
  exports.exports = class {
    constructor() {
      ((this._gestures = []),
        (this._state = new i()),
        (this._delayedTouchEventsEnabled = true),
        (this._suppressClickEnabled = false),
        (this._swiping = false));
    }
    addGesture(e) {
      this._gestures.push(e);
    }
    setDelayedTouchEventsEnabled(e) {
      this._delayedTouchEventsEnabled = e;
    }
    setClickSuppressionEnabled(e) {
      this._suppressClickEnabled = e;
    }
    touchStart(e) {
      ((this._swiping = false), this._state.update(e), this._handleDelayedTouchStartEvent(e));
      const module = new o(e);
      this._delayedTouchEventsEnabled && !module.areThereMultipleTouchPoints()
        ? ((this._delayedTouchEvent = e),
          (this._delayedTouchEventTimeout = setTimeout(
            this._triggerDelayedTouchEvent.bind(this),
            50
          )))
        : this._execute('start', e);
    }
    touchMove(e) {
      ((this._swiping = true),
        this._state.update(e),
        this._handleDelayedTouchStartEvent(e),
        this._execute('move', e));
    }
    touchEnd(e) {
      (this._state.update(e), this._handleDelayedTouchStartEvent(e), this._execute('end', e));
    }
    touchCancel(e) {
      (this._state.update(e), this._execute('cancel', e));
    }
    gestureStart(e) {
      (this._dropDelayedTouchEvent(), this._execute('gesture', e));
    }
    scroll(e) {
      this._swiping = true;
    }
    _execute(e, t) {
      this._state.setSwiping(this._isSwiping());
      const require = new o(t),
        i = this._gestures.length;
      let a = false;
      for (let t = 0; t < i; t++) {
        const o = this._gestures[t];
        try {
          if (a) {
            o.deactivate(require, this._state);
            continue;
          }
          if (
            ('start' === e &&
              (o.canActivate(require, this._state)
                ? o.activate(require, this._state)
                : o.deactivate(require, this._state)),
            !o.isActive())
          )
            continue;
          a = o[e](require, this._state);
        } catch (e) {
          console.error('GGestureHelper', e);
          try {
            o.deactivate(require, this._state);
          } catch (e) {
            console.warn('GGestureHelper deactivation', e);
          }
        }
      }
    }
    _isSwiping() {
      return !!this._suppressClickEnabled && this._swiping;
    }
    _handleDelayedTouchStartEvent(e) {
      this._delayedTouchEventTimeout && new o(e).areThereMultipleTouchPointsOnTheTarget()
        ? this._dropDelayedTouchEvent()
        : this._triggerDelayedTouchEvent();
    }
    _triggerDelayedTouchEvent() {
      this._delayedTouchEventTimeout &&
        (clearTimeout(this._delayedTouchEventTimeout),
        (this._delayedTouchEventTimeout = null),
        this._delayedTouchEvent &&
          (this._execute('start', this._delayedTouchEvent), (this._delayedTouchEvent = null)));
    }
    _dropDelayedTouchEvent() {
      (this._delayedTouchEventTimeout && clearTimeout(this._delayedTouchEventTimeout),
        (this._delayedTouchEventTimeout = null),
        (this._delayedTouch = null));
    }
    hasActiveIdentifiers() {
      return this._state.hasActiveIdentifiers();
    }
  };
}
