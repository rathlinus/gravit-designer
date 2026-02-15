/**
 * Webpack Module #1317
 * Type: class
 * Name: GOffsetAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GOutlineAction = require(1185);
  class a extends GOutlineAction {
    constructor() {
      super();
    }

    getId() {
      return a.ID;
    }

    getTitle() {
      return a.TITLE;
    }

    getGroup() {
      return 'structure/modify';
    }

    getShortcut() {
      return null;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-expand-shrink' : null;
    }

    _dialogPromptMessage() {
      return GCore.GLocale.get(new GCore.GLocaleKey('GOffsetAction', 'text.dialog-prompt-message'));
    }

    _makeOffsetter(e, t) {
      var n;
      if (t.hasMixin(GCore.GStylable)) {
        var GOutlineAction = t.getPaintLayers();
        if (GOutlineAction) {
          var a = GOutlineAction.getBorderLayers(true).pop();
          a && (n = a.$_blc);
        }
      }
      return (
        (t = GCore.GPathUtil.makeClockWise(t)),
        e > 0
          ? new GCore.GVertexOffsetter(t, e, false, true, 0, n)
          : new GCore.GVertexOffsetter(t, -e, true, false, 0, n)
      );
    }

    _dialogAlertMessage() {
      return GCore.GLocale.get(new GCore.GLocaleKey('GOffsetAction', 'text.invalid-value'));
    }

    toString() {
      return '[Object GOffsetAction]';
    }

    static ID = 'modify.offset';

    static TITLE = new GCore.GLocaleKey('GOffsetAction', 'title');

  }
  exports.exports = a;
}