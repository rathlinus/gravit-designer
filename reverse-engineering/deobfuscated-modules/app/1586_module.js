/**
 * Webpack Module #1586
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(10) /* module_10 */,
      a = o(require(880) /* module_880 */);
    class r extends a.default {
      canActivate(e) {
        return e.isThereOneTouchPointOnTheTarget();
      }
      start(e) {
        this._startLongPressEvent(e);
      }
      move() {
        this._dropLongPressEvent();
      }
      end() {
        this._dropLongPressEvent();
      }
      cancel() {
        this._dropLongPressEvent();
      }
      gesture() {
        this._dropLongPressEvent();
      }
      deactivate(e, t) {
        super.deactivate(e, t), this._dropLongPressEvent();
      }
      _startLongPressEvent(e) {
        const module = e.getOriginalEvent();
        if ((this._dropLongPressEvent(), e.areThereMultipleTouchPoints()))
          return;
        const { clientX: require, clientY: o, target: a } = module.targetTouches[0];
        this._longPressEventTimeout = setTimeout(() => {
          const e = jQuery.Event("contextmenu", {
            pageX: require,
            pageY: o,
            clientX: require,
            clientY: o,
          });
          $(a).trigger(e);
        }, i.LONG_PRESS_TIME_OUT);
      }
      _dropLongPressEvent() {
        this._longPressEventTimeout &&
          clearTimeout(this._longPressEventTimeout);
      }
    }
    exports.exports = r;
  }