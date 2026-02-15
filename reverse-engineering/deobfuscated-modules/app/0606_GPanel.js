/**
 * Webpack Module #606
 * Type: class
 * Name: GPanel
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GView = require(394) /* GView */;
    function a() {
      GView.call(this);
    }
    GCore.GObject.inherit(a, GView),
      (a.prototype.init = function (e) {}),
      (a.prototype.activate = function () {}),
      (a.prototype.deactivate = function () {}),
      (a.prototype.isEnabled = function () {
        return true;
      }),
      (a.prototype.toString = function () {
        return "[Object GPanel]";
      }),
      (exports.exports = a);
  }