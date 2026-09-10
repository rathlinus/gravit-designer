/**
 * chunk.vendor.js Module #1120
 * Type: unknown
 */

function (e, t) {
      function i(e, t) {
        ((this._canvas = document.createElement("canvas")),
          (this.width = e),
          (this.height = t),
          (this.context = null));
      }
      ((i.prototype._canvas = null),
        (i.prototype.context = null),
        Object.defineProperties(i.prototype, {
          width: {
            set: function (e) {
              this._canvas.width = e;
            },
            get: function () {
              return this._canvas.width;
            },
          },
          height: {
            set: function (e) {
              this._canvas.height = e;
            },
            get: function () {
              return this._canvas.height;
            },
          },
        }),
        (i.prototype.getHTMLElement = function () {
          return this._canvas;
        }),
        (e.exports = i));
    }