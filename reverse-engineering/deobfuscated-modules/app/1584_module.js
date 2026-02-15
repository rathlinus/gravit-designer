/**
 * Webpack Module #1584
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GTools = require(53) /* module */;
    const i = require(878) /* module_878 */,
      a = require(1585) /* module_1585 */,
      r = require(879) /* module_879 */,
      s = require(1586) /* module_1586 */,
      l = require(1329) /* module_1329 */;
    exports.exports = class extends i {
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
        const exports = gDesigner.getToolManager().getActiveTool();
        return !!(exports && exports instanceof GTools.GSelectTool) && exports.hasSelectedArea();
      }
    };
  }