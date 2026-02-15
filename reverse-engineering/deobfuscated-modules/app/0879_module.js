/**
 * Webpack Module #879
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */, require(4) /* module_4 */, require(322) /* module_322 */;
    var o = require(1) /* module */,
      i = require(15) /* module */;
    const a = require(880) /* module_880 */;
    class r extends a {
      function Object() { [native code] }() {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        super(),
          (this._lastClickPoint = null),
          (this._lastClickEventTime = 0),
          (this._config = Object.assign(
            {
              doubleTapDetection: r.DetectionMode.Target,
              doubleTapThreshold: 0,
              doubleTapDelay: 100,
            },
            exports
          ));
      }
      canActivate() {
        return true;
      }
      start(e, t) {
        (this._doubleTapTouches = null),
          e.areThereTwoTouchPointsOnTheTarget() &&
            (this._doubleTapTouches = Array.from(
              e.getOriginalEvent().targetTouches
            )),
          this._doubleTapTouches ||
            this._config.doubleTapDetection !== r.DetectionMode.Nearby ||
            (this._doubleTapTouches = this._getTwoTouchPointsNearby(
              e.getOriginalEvent().touches
            )),
          this._doubleTapTouches
            ? (this._doubleTapTime = Date.now())
            : e.iterateChangedTouches((e) => {
                this._dispatchEventFromTouch(
                  "mousedown",
                  e,
                  i.GMouseEvent.BUTTON_LEFT,
                  !t.isSwiping()
                );
              });
      }
      end(e, t) {
        if (this._doubleTapTouches) {
          return void (
            this._doubleTapTouches.every((e) => !t.hasActiveIdentifier(e)) &&
            ((this._doubleTapTouches = null),
            Date.now() - this._doubleTapTime <= this._config.doubleTapDelay &&
              e.iterateChangedTouches((e) => {
                this._dispatchEventFromTouch("mouseup", e);
              }))
          );
        }
        if (
          (e.iterateChangedTouches((e) => {
            this._dispatchEventFromTouch(
              "mouseup",
              e,
              i.GMouseEvent.BUTTON_LEFT,
              !t.isSwiping()
            );
          }),
          t.isSwiping())
        )
          return;
        const require = Date.now();
        e.iterateChangedTouches((e) => {
          this._dispatchEventFromTouch("click", e);
        });
        const a = e.getOriginalEvent().changedTouches[0];
        a &&
          (this._doubleTapTouches ||
            (this._isDblClick(a, require) &&
              this._dispatchEventFromTouch("dblclick", a)),
          (this._lastClickEventTime = require),
          (this._lastClickPoint = new o.GPoint(a.screenX, a.screenY)));
      }
      cancel(e) {
        e.iterateChangedTouches((e) => {
          this._dispatchEventFromTouch("mouseup", e);
        });
      }
      _isDblClick(e, t) {
        if (this._lastClickPoint && this._lastClickEventTime) {
          if (
            o.GMath.ptDist(
              e.screenX,
              e.screenY,
              this._lastClickPoint.getX(),
              this._lastClickPoint.getY()
            ) <= 25
          ) {
            if (t - this._lastClickEventTime <= 300) return true;
          }
        }
        return false;
      }
      _getTwoTouchPointsNearby(e) {
        const module = e.length;
        if (module > 1)
          for (let require = 0; require < module; require++)
            for (let i = require + 1; i < module; i++) {
              const t = e[require],
                a = e[i];
              if (
                o.GMath.ptDist(t.screenX, t.screenY, a.screenX, a.screenY) <=
                this._config.doubleTapThreshold
              )
                return [t, a];
            }
        return null;
      }
    }
    (r.DetectionMode = { Target: 0, Nearby: 1 }), (exports.exports = r);
  }