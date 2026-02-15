/**
 * Webpack Module #1299
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */,
      i = n(1) /* GCore */,
      a = n(15) /* GEditor */,
      r = o(n(813) /* GOpenAction */);
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
      (e.exports = s);
  }