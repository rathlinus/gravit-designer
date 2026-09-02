/**
 * chunk.vendor.js Module #77
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(505);

      function o() {}
      (n.inherit(o, r),
        (o.BUTTON_LEFT = 0),
        (o.BUTTON_MIDDLE = 1),
        (o.BUTTON_RIGHT = 2),
        (o.BUTTONS_UNDEF = 0),
        (o.BUTTONS_LEFT = 1),
        (o.BUTTONS_RIGHT = 2),
        (o.BUTTONS_MIDDLE = 4),
        (o.isDragEvent = function (e) {
          return (
            (e instanceof o &&
              (e instanceof o.DragStart ||
                e instanceof o.Drag ||
                e instanceof o.DragEnd)) ||
            e == o.DragStart ||
            e == o.Drag ||
            e == o.DragEnd
          );
        }),
        (o.prototype.client = 0),
        (o.prototype.button = 0),
        (o.prototype.toString = function () {
          return "[Object GMouseEvent(" + this._paramsToString() + ")]";
        }),
        (o.prototype._paramsToString = function () {
          return (
            "client=" +
            this.client.toString() +
            ", " +
            r.prototype._paramsToString.call(this)
          );
        }),
        (o.Wheel = function () {}),
        n.inherit(o.Wheel, o),
        (o.Wheel.prototype.deltaX = 0),
        (o.Wheel.prototype.deltaY = 0),
        (o.Wheel.prototype.zoom = !1),
        (o.Wheel.prototype.toString = function () {
          return "[Object GMouseEvent.Wheel(" + this._paramsToString() + ")]";
        }),
        (o.Move = function () {}),
        n.inherit(o.Move, o),
        (o.Move.prototype.toString = function () {
          return "[Object GMouseEvent.Move(" + this._paramsToString() + ")]";
        }),
        (o.Enter = function () {}),
        n.inherit(o.Enter, o),
        (o.Enter.prototype.toString = function () {
          return "[Object GMouseEvent.Enter(" + this._paramsToString() + ")]";
        }),
        (o.Leave = function () {}),
        n.inherit(o.Leave, o),
        (o.Leave.prototype.toString = function () {
          return "[Object GMouseEvent.Leave(" + this._paramsToString() + ")]";
        }),
        (o.Down = function () {}),
        n.inherit(o.Down, o),
        (o.Down.prototype.clickCount = 0),
        (o.Down.prototype.toString = function () {
          return "[Object GMouseEvent.Down(" + this._paramsToString() + ")]";
        }),
        (o.Release = function () {}),
        n.inherit(o.Release, o),
        (o.Release.prototype.clickCount = 0),
        (o.Release.prototype.toString = function () {
          return "[Object GMouseEvent.Release(" + this._paramsToString() + ")]";
        }),
        (o.Click = function () {}),
        n.inherit(o.Click, o),
        (o.Click.prototype.clickCount = 0),
        (o.Click.prototype.toString = function () {
          return "[Object GMouseEvent.Click(" + this._paramsToString() + ")]";
        }),
        (o.DblClick = function () {}),
        n.inherit(o.DblClick, o),
        (o.DblClick.prototype.toString = function () {
          return (
            "[Object GMouseEvent.DblClick(" + this._paramsToString() + ")]"
          );
        }),
        (o.DragStart = function () {}),
        n.inherit(o.DragStart, o),
        (o.DragStart.prototype.toString = function () {
          return (
            "[Object GMouseEvent.DragStart(" + this._paramsToString() + ")]"
          );
        }),
        (o.Drag = function () {}),
        n.inherit(o.Drag, o),
        (o.prototype.clientStart = 0),
        (o.prototype.clientDelta = 0),
        (o.Drag.prototype.toString = function () {
          return "[Object GMouseEvent.Drag(" + this._paramsToString() + ")]";
        }),
        (o.DragEnd = function () {}),
        n.inherit(o.DragEnd, o.Drag),
        (o.DragEnd.prototype.toString = function () {
          return "[Object GMouseEvent.DragEnd(" + this._paramsToString() + ")]";
        }),
        (e.exports = o));
    }