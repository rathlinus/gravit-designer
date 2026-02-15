/**
 * Webpack Module #1299
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(813) /* GOpenAction */);
    function s() {}
    i.GObject.inherit(s, r.default),
      (s.ID = "".concat(r.default.ID, ".safari")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getShortcut = function () {
        return [a.GKey.Constant.META, a.GKey.Constant.ALT_LEFT, "O"];
      }),
      (s.prototype.isAvailable = function () {
        return (
          a.GPlatform.webBrowser === a.GPlatform.constructor.WebBrowser.Safari
        );
      }),
      (exports.exports = s);
  }