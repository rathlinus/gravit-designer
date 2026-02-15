/**
 * Webpack Module #880
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GEditor = require(15); /* GEditor */
  exports.exports = class {
    canActivate() {
      return false;
    }
    activate(e, t) {
      this._active = true;
    }
    deactivate(e, t) {
      this._active = false;
    }
    isActive() {
      return this._active;
    }
    start(e, t) {}
    move(e, t) {}
    end(e, t) {}
    cancel(e, t) {}
    gesture(e, t) {}
    _dispatchEventFromTouch(e, t) {
      let require =
          arguments.length > 2 && undefined !== arguments[2]
            ? arguments[2]
            : GEditor.GMouseEvent.BUTTON_LEFT,
        i = !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3];
      const a = document.createEvent('MouseEvent');
      (a.initMouseEvent(
        e,
        true,
        i,
        window,
        1,
        t.screenX,
        t.screenY,
        t.clientX,
        t.clientY,
        false,
        false,
        false,
        false,
        require,
        null
      ),
        t.target.dispatchEvent(a));
    }
  };
}
