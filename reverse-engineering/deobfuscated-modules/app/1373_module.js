/**
 * Webpack Module #1373
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i,
      GBrowserContainer = require(1374) /* GBrowserContainer */,
      GDesignerApp = require(1483) /* GDesignerApp */;
    function s() {
      var e = new GBrowserContainer();
      e.initLanguage(function () {
        (o = e.init(GDesignerApp)),
          i &&
            o.then(() => {
              l(i);
            });
      });
    }
    function l(e) {
      gDesigner && gDesigner.setPwaEvent
        ? gDesigner.setPwaEvent(e)
        : (window.__pwaEvent__ = e);
    }
    "complete" === document.readyState
      ? s()
      : window.addEventListener("load", s),
      window.addEventListener("beforeinstallprompt", function (e) {
        if (e && "beforeinstallprompt" === e.type) {
          if (!o) return void (i = e);
          o.then(() => {
            l(e);
          });
        }
      }),
      window.addEventListener("appinstalled", (e) => {
        e && "appinstalled" === e.type && location.reload();
      });
  }