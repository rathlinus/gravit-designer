/**
 * Webpack Module #1585
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      AppSettings = require(10) /* AppSettings */,
      s = _interopRequireDefault(require(880) /* module_880 */),
      l = _interopRequireDefault(require(1189) /* module_1189 */);
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
        GCore.GPaintCanvas.getScreenDPI() *
        GEditor.GSceneWidget.options.pinchToZoomFactor,
      w = 2 / GCore.GPaintCanvas.getScreenDPI();
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
        const _interopRequireDefault = gDesigner.getActiveView();
        if (!_interopRequireDefault) return;
        const GCore = gDesigner.getContextMenu();
        GCore && GCore.close(),
          (this._twoFingersState = new l.default()),
          this._twoFingersState.update(module);
        let GEditor = module.targetTouches[1];
        (p = v = GEditor.clientX),
          (g = _ = GEditor.clientY),
          _interopRequireDefault.startTouchMode(),
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
        const _interopRequireDefault = module.targetTouches[0],
          s = module.targetTouches[1];
        if (!s) return true;
        const { clientX: l, clientY: h } = _interopRequireDefault,
          { clientX: f, clientY: C } = s;
        if (
          d &&
          ((c =
            GCore.GMath.isEqualEps(d, l, AppSettings.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE) &&
            GCore.GMath.isEqualEps(u, h, AppSettings.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE) &&
            GCore.GMath.isEqualEps(p, f, AppSettings.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE) &&
            GCore.GMath.isEqualEps(g, C, AppSettings.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE)),
          !c)
        ) {
          const e = GCore.GMath.ptDist(m, y, v, _),
            t = GCore.GMath.ptDist(l, h, f, C);
          if (GCore.GMath.isEqualEps(e, t, AppSettings.MIN_TWO_FINGERS_TOUCH_MOVE_DISTANCE)) {
            const e = ((0 == m ? 0 : l - m) + (0 == v ? 0 : f - v)) / w,
              t = ((0 == y ? 0 : h - y) + (0 == _ ? 0 : C - _)) / w;
            require.scrollBy(-e, -t);
          } else {
            const AppSettings = t - e;
            let l =
              gDesigner.getWindows().getActiveWindow().getView().getZoom() +
              AppSettings / b;
            const c = new Touch({
              identifier: GCore.GUtil.uuid(),
              pageX: (_interopRequireDefault.pageX + s.pageX) / 2,
              pageY: (_interopRequireDefault.pageY + s.pageY) / 2,
              target: _interopRequireDefault.target,
            });
            l =
              l < GEditor.GSceneWidget.options.minZoomFactor
                ? GEditor.GSceneWidget.options.minZoomFactor
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