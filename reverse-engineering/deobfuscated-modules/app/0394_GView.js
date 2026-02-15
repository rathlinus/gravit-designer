/**
 * Webpack Module #394
 * Type: class
 * Name: GView
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
    function i() {}
    o.GObject.inherit(i, o.GEventTarget),
      (i.UpdateEvent = function () {}),
      o.GObject.inherit(i.UpdateEvent, o.GEvent),
      (i.UpdateEvent.prototype.toString = function () {
        return "[Object GView.UpdateEvent]";
      }),
      (i.UPDATE_EVENT = new i.UpdateEvent()),
      (i.prototype.getId = function () {
        throw new Error("Not Supported");
      }),
      (i.prototype.getTitle = function () {
        throw new Error("Not Supported");
      }),
      (i.prototype.isEnabled = function () {
        return true;
      }),
      (i.prototype.isVisible = function () {
        return true;
      }),
      (i.prototype._fireUpdateEvent = function () {
        this.trigger(i.UPDATE_EVENT);
      }),
      (i.prototype.toString = function () {
        return "[Object GView]";
      }),
      (e.exports = i);
  }