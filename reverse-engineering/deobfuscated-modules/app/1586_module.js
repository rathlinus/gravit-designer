/**
 * Webpack Module #1586
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      AppSettings = require(10) /* AppSettings */,
      a = _interopRequireDefault(require(880) /* module_880 */);
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
        const { clientX: require, clientY: _interopRequireDefault, target: a } = module.targetTouches[0];
        this._longPressEventTimeout = setTimeout(() => {
          const e = jQuery.Event("contextmenu", {
            pageX: require,
            pageY: _interopRequireDefault,
            clientX: require,
            clientY: _interopRequireDefault,
          });
          $(a).trigger(e);
        }, AppSettings.LONG_PRESS_TIME_OUT);
      }
      _dropLongPressEvent() {
        this._longPressEventTimeout &&
          clearTimeout(this._longPressEventTimeout);
      }
    }
    exports.exports = r;
  }