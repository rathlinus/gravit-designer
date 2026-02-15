/**
 * Webpack Module #1691
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    "function" != typeof window.CustomEvent &&
      ((window.CustomEvent = function (e, t) {
        t = t || { bubbles: false, cancelable: false, detail: undefined };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
      }),
      (window.CustomEvent.prototype = window.Event.prototype)),
      (window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e) {
          window.setTimeout(e, 1e3 / 60);
        }),
      require(1692) /* module_1692 */;
  }