/**
 * chunk.vendor.js Module #167
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(505);

      function o() {}
      (n.inherit(o, r),
        (o.prototype.key = null),
        (o.prototype.keyUTF = null),
        (o.prototype.timestamp = 0),
        (o.prototype.preventDefault = null),
        (o.prototype.stopPropagation = null),
        (o.prototype.toString = function () {
          return "[Object GKeyEvent(" + this._paramsToString() + ")]";
        }),
        (o.prototype._paramsToString = function () {
          return (
            "key=" +
            this.key +
            (this.keyUTF ? " keyUTF:" + this.keyUTF : "") +
            (this.timestamp ? " timestamp:" + this.timestamp : "")
          );
        }),
        (o.Down = function () {}),
        n.inherit(o.Down, o),
        (o.Down.prototype.toString = function () {
          return "[Object GKeyEvent.Down(" + this._paramsToString() + ")]";
        }),
        (o.Release = function () {}),
        n.inherit(o.Release, o),
        (o.Release.prototype.toString = function () {
          return "[Object GKeyEvent.Release(" + this._paramsToString() + ")]";
        }),
        (o.Press = function () {}),
        n.inherit(o.Press, o),
        (o.Press.prototype.toString = function () {
          return "[Object GKeyEvent.Press(" + this._paramsToString() + ")]";
        }),
        (e.exports = o));
    }