/**
 * Webpack Module #606
 * Type: class
 * Name: GPanel
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(394) /* GView */;
    function a() {
      i.call(this);
    }
    o.GObject.inherit(a, i),
      (a.prototype.init = function (e) {}),
      (a.prototype.activate = function () {}),
      (a.prototype.deactivate = function () {}),
      (a.prototype.isEnabled = function () {
        return true;
      }),
      (a.prototype.toString = function () {
        return "[Object GPanel]";
      }),
      (e.exports = a);
  }