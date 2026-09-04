/**
 * chunk.vendor.js Module #1450
 * Type: class
 * Name: GPDFInvokeResource
 */

function (e, t, i) {
      var n = i(0),
        r = i(90),
        o = i(564);

      function a(e) {
        this._resource = e;
      }
      (n.inherit(a, r),
        (a.prototype._resource = null),
        (a.prototype.write = function (e) {
          e.write("/" + this._resource.getName() + " " + o.Do);
        }),
        (a.prototype.toString = function () {
          return "[Object GPDFInvokeResource]";
        }),
        (e.exports = a));
    }