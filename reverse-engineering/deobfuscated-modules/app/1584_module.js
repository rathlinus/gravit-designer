/**
 * Webpack Module #1584
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(53) /* module_53 */;
    const i = n(878) /* module_878 */,
      a = n(1585) /* module_1585 */,
      r = n(879) /* module_879 */,
      s = n(1586) /* module_1586 */,
      l = n(1329) /* module_1329 */;
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