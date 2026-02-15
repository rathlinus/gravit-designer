/**
 * Webpack Module #1299
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      GOpenAction = _interopRequireDefault(require(813) /* GOpenAction */);
    function s() {}
    GCore.GObject.inherit(s, GOpenAction.default),
      (s.ID = "".concat(GOpenAction.default.ID, ".safari")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.ALT_LEFT, "O"];
      }),
      (s.prototype.isAvailable = function () {
        return (
          GEditor.GPlatform.webBrowser === GEditor.GPlatform.constructor.WebBrowser.Safari
        );
      }),
      (exports.exports = s);
  }