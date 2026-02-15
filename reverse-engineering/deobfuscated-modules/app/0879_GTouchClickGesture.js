/**
 * Webpack Module #879
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(4) /* stub_requires_668 */, require(322) /* stub_requires_669 */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */;
    const DataModule_880 = require(880) /* DataModule_880 */;
    class r extends DataModule_880 {
      constructor() {
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
                  GEditor.GMouseEvent.BUTTON_LEFT,
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
              GEditor.GMouseEvent.BUTTON_LEFT,
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
        const DataModule_880 = e.getOriginalEvent().changedTouches[0];
        DataModule_880 &&
          (this._doubleTapTouches ||
            (this._isDblClick(DataModule_880, require) &&
              this._dispatchEventFromTouch("dblclick", DataModule_880)),
          (this._lastClickEventTime = require),
          (this._lastClickPoint = new GCore.GPoint(DataModule_880.screenX, DataModule_880.screenY)));
      }
      cancel(e) {
        e.iterateChangedTouches((e) => {
          this._dispatchEventFromTouch("mouseup", e);
        });
      }
      _isDblClick(e, t) {
        if (this._lastClickPoint && this._lastClickEventTime) {
          if (
            GCore.GMath.ptDist(
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
            for (let GEditor = require + 1; GEditor < module; GEditor++) {
              const t = e[require],
                DataModule_880 = e[GEditor];
              if (
                GCore.GMath.ptDist(t.screenX, t.screenY, DataModule_880.screenX, DataModule_880.screenY) <=
                this._config.doubleTapThreshold
              )
                return [t, DataModule_880];
            }
        return null;
      }
    }
    (r.DetectionMode = { Target: 0, Nearby: 1 }), (exports.exports = r);
  }