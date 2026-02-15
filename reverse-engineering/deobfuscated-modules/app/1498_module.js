/**
 * Webpack Module #1498
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o(e) {
      this._htmlElement = e;
    }
    (o.prototype.init = function () {
      $("<div></div>").addClass("container").appendTo(this._htmlElement);
    }),
      (o.prototype.setEnabled = function (e) {
        $("#overlay").css("display", e ? "none" : "unset");
      }),
      (e.exports = o);
  }