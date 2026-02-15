/**
 * Webpack Module #1584
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(53) /* GTools */;
    const i = n(878) /* GTouchEventHandler */,
      a = n(1585) /* GTouchPinchZoomGesture */,
      r = n(879) /* GTouchClickGesture */,
      s = n(1586) /* DataModule_1586 */,
      l = n(1329) /* DataModule_1329 */;
    e.exports = class extends i {
      constructor(e) {
        super(e),
          this.addGesture(new a()),
          this.addGesture(new r()),
          this.addGesture(new l()),
          this.addGesture(new s());
      }
      _handleEvent(e) {
        e.cancelable && e.preventDefault(), super._handleEvent(e);
      }
      _touchStart(e) {
        (this._isSelecting() && this._gestureHelper.hasActiveIdentifiers()) ||
          super._touchStart(e);
      }
      _isSelecting() {
        const e = gDesigner.getToolManager().getActiveTool();
        return !!(e && e instanceof o.GSelectTool) && e.hasSelectedArea();
      }
    };
  }