/**
 * Module 375
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  "use strict";
  let n = 0;
  const r = (e, t, i) => {
    if (void 0 !== window._GLOBAL_GA_EVENTS && (i || !(Date.now() - n <= 100))) {
      var r = e.split("_"), o = r[0], a = r[1], s = (r[2] || "") + ("string" == typeof t || "number" == typeof t || t instanceof String ? ":" + t : "");
      "undefined" != typeof dataLayer && dataLayer.push({
        event: "PAGE_STATS_EVENT_CONVERT",
        eventCategory: o,
        eventAction: a,
        eventValue: s
      }), n = Date.now();
    }
  };
  let o = 0;
  e.exports = function (e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
      if (i && r(e, t), void 0 === window._GLOBAL_GA_EVENTS)
        return;
      if (void 0 === window.ga)
        return;
      if (Date.now() - o > 100) {
        let i = e.split("_"), n = (i[2] || "unknown") + ("string" == typeof t || "number" == typeof t || t instanceof String ? ":" + t : "");
        ga(_GLOBAL_GA_EVENTS, "event", i[0], i[1] || "unknown", n), void 0 !== window.dataLayer && dataLayer.push({
          event: i[0],
          eventCategory: i[1] || "unknown",
          eventAction: i[2] || "unknown",
          eventValue: t || "none"
        });
      }
      o = Date.now();
    } catch (e) {
      console.error("stats", e);
    }
  };
}
