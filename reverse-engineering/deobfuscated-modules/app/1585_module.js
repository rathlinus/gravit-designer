/**
 * Webpack Module #1585
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = require(10) /* module_10 */,
      s = o(require(880) /* module_880 */),
      l = o(require(1189) /* module_1189 */);
    let c = false,
      d = 0,
      u = 0,
      p = 0,
      g = 0,
      h = 0,
      f = 0,
      m = 0,
      y = 0,
      v = 0,
      _ = 0,
      b =
        i.GPaintCanvas.getScreenDPI() *
        a.GSceneWidget.options.pinchToZoomFactor,
      w = 2 / i.GPaintCanvas.getScreenDPI();
    class C extends s.default {
      canActivate(e) {
        return e.areThereTwoTouchPointsOnTheTarget();
      }
      start(e) {
        const module = e.getOriginalEvent(),
          require = module.targetTouches[0];
        (h = d = m = require.clientX),
          (f = u = y = require.clientY),
          (c = e.areThereTwoTouchPointsOnTheTarget());
        const o = gDesigner.getActiveView();
        if (!o) return;
        const i = gDesigner.getContextMenu();
        i && i.close(),
          (this._twoFingersState = new l.default()),
          this._twoFingersState.update(module);
        let a = module.targetTouches[1];
        (p = v = a.clientX),
          (g = _ = a.clientY),
          o.startTouchMode(),
          (this._moved = false);
      }
      move(e) {
        if (!this._twoFingersState) return false;
        const module = e.getOriginalEvent();
        this._twoFingersState.update(module),
          (this._moved = true),
          module.cancelable && (module.preventDefault(), module.stopPropagation());
        const require = gDesigner.getActiveView();
        if (!require) return true;
        const o = module.targetTouches[0],
          s = module.targetTouches[1];
        if (!s) return true;
        const { clientX: l, clientY: h } = o,
          { clientX: f, clientY: C } = s;
        if (
          d &&
          ((c =
            i.GMath.isEqualEps(d, l, r.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE) &&
            i.GMath.isEqualEps(u, h, r.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE) &&
            i.GMath.isEqualEps(p, f, r.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE) &&
            i.GMath.isEqualEps(g, C, r.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE)),
          !c)
        ) {
          const e = i.GMath.ptDist(m, y, v, _),
            t = i.GMath.ptDist(l, h, f, C);
          if (i.GMath.isEqualEps(e, t, r.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE)) {
            const e = ((0 == m ? 0 : l - m) + (0 == v ? 0 : f - v)) / w,
              t = ((0 == y ? 0 : h - y) + (0 == _ ? 0 : C - _)) / w;
            require.scrollBy(-e, -t);
          } else {
            const r = t - e;
            let l =
              gDesigner.getWindows().getActiveWindow().getView().getZoom() +
              r / b;
            const c = new Touch({
              identifier: i.GUtil.uuid(),
              pageX: (o.pageX + s.pageX) / 2,
              pageY: (o.pageY + s.pageY) / 2,
              target: o.target,
            });
            l =
              l < a.GSceneWidget.options.minZoomFactor
                ? a.GSceneWidget.options.minZoomFactor
                : l;
            var x = require
              .getViewTransform()
              .mapPoint(require._convertClientPositionFromMousePosition(c));
            require.zoomAt(x, l);
          }
        }
        return (m = l), (y = h), (v = f), (_ = C), true;
      }
      end(e) {
        if (
          (this._twoFingersState &&
            this._twoFingersState.update(e.getOriginalEvent()),
          !this._twoFingersState ||
            !this._twoFingersState.hasActiveIdentifiers())
        ) {
          this._twoFingersState = null;
          const e = gDesigner.getActiveView();
          e && e.endTouchMode();
        }
        d = u = p = g = m = y = v = _ = 0;
        const module = !!this._moved;
        return (this._moved = false), module;
      }
    }
    exports.exports = C;
  }