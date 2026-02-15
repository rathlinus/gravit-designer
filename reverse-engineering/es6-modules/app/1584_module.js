/**
 * Webpack Module #1584
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GTools = require(53); /* GTools */
  const GTouchEventHandler = require(878) /* GTouchEventHandler */,
    GTouchPinchZoomGesture = require(1585) /* GTouchPinchZoomGesture */,
    GTouchClickGesture = require(879) /* GTouchClickGesture */,
    DataModule_1586 = require(1586) /* DataModule_1586 */,
    DataModule_1329 = require(1329); /* DataModule_1329 */
  exports.exports = class extends GTouchEventHandler {
    constructor(e) {
      (super(e),
        this.addGesture(new GTouchPinchZoomGesture()),
        this.addGesture(new GTouchClickGesture()),
        this.addGesture(new DataModule_1329()),
        this.addGesture(new DataModule_1586()));
    }
    _handleEvent(e) {
      (e.cancelable && e.preventDefault(), super._handleEvent(e));
    }
    _touchStart(e) {
      (this._isSelecting() && this._gestureHelper.hasActiveIdentifiers()) || super._touchStart(e);
    }
    _isSelecting() {
      const exports = gDesigner.getToolManager().getActiveTool();
      return !!(exports && exports instanceof GTools.GSelectTool) && exports.hasSelectedArea();
    }
  };
}
