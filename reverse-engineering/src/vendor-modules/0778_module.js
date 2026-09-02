/**
 * chunk.vendor.js Module #778
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(280),
        o = i(779),
        a = i(553);

      function s() {
        (r.call(this),
          (this._styleEdManager = new o()),
          (this._toolManager = new a()));
      }
      (n.inherit(s, r),
        (s.prototype._styleEdManager = null),
        (s.prototype._toolManager = null),
        (s.prototype.getStyleEdManager = function () {
          return this._styleEdManager;
        }),
        (s.prototype.getToolManager = function () {
          return this._toolManager;
        }),
        (e.exports = s));
    }