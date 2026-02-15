/**
 * Webpack Module #1618
 * Type: unknown
 */

function (exports, module, require) {
    !(function () {
      "use strict";
      var t =
          "undefined" != typeof window && undefined !== window.document
            ? window.document
            : {},
        n = exports.exports,
        o = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        i = (function () {
          for (
            var exports,
              n = [
                [
                  "requestFullscreen",
                  "exitFullscreen",
                  "fullscreenElement",
                  "fullscreenEnabled",
                  "fullscreenchange",
                  "fullscreenerror",
                ],
                [
                  "webkitRequestFullscreen",
                  "webkitExitFullscreen",
                  "webkitFullscreenElement",
                  "webkitFullscreenEnabled",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror",
                ],
                [
                  "webkitRequestFullScreen",
                  "webkitCancelFullScreen",
                  "webkitCurrentFullScreenElement",
                  "webkitCancelFullScreen",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror",
                ],
                [
                  "mozRequestFullScreen",
                  "mozCancelFullScreen",
                  "mozFullScreenElement",
                  "mozFullScreenEnabled",
                  "mozfullscreenchange",
                  "mozfullscreenerror",
                ],
                [
                  "msRequestFullscreen",
                  "msExitFullscreen",
                  "msFullscreenElement",
                  "msFullscreenEnabled",
                  "MSFullscreenChange",
                  "MSFullscreenError",
                ],
              ],
              o = 0,
              i = n.length,
              a = {};
            o < i;
            o++
          )
            if ((exports = n[o]) && exports[1] in t) {
              for (o = 0; o < exports.length; o++) a[n[0][o]] = exports[o];
              return a;
            }
          return false;
        })(),
        a = { change: i.fullscreenchange, error: i.fullscreenerror },
        r = {
          request: function (e) {
            var n = i.requestFullscreen;
            (e = e || t.documentElement),
              / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)
                ? e[n]()
                : e[n](o ? Element.ALLOW_KEYBOARD_INPUT : {});
          },
          exit: function () {
            t[i.exitFullscreen]();
          },
          toggle: function (e) {
            this.isFullscreen ? this.exit() : this.request(e);
          },
          onchange: function (e) {
            this.on("change", e);
          },
          onerror: function (e) {
            this.on("error", e);
          },
          on: function (e, n) {
            var o = a[e];
            o && t.addEventListener(o, n, false);
          },
          off: function (e, n) {
            var o = a[e];
            o && t.removeEventListener(o, n, false);
          },
          raw: i,
        };
      i
        ? (Object.defineProperties(r, {
            isFullscreen: {
              get: function () {
                return Boolean(t[i.fullscreenElement]);
              },
            },
            element: {
              enumerable: true,
              get: function () {
                return t[i.fullscreenElement];
              },
            },
            enabled: {
              enumerable: true,
              get: function () {
                return Boolean(t[i.fullscreenEnabled]);
              },
            },
          }),
          n ? (exports.exports = r) : (window.screenfull = r))
        : n
        ? (exports.exports = false)
        : (window.screenfull = false);
    })();
  }