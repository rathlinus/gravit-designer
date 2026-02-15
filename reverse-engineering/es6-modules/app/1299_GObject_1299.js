/**
 * Webpack Module #1299
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    GOpenAction = _interopRequireDefault(require(813) /* GOpenAction */);
  class s extends GOpenAction.default {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.ALT_LEFT, 'O'];
    }

    isAvailable() {
      return GEditor.GPlatform.webBrowser === GEditor.GPlatform.constructor.WebBrowser.Safari;
    }

    static ID = ''.concat(GOpenAction.default.ID, '.safari');

  }
  exports.exports = s;
}