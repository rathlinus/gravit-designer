/**
 * Webpack Module #1173
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */,
      i = require(15) /* module */,
      a = o(require(85) /* GContainer */);
    class r {
      static isSupported() {
        return (
          r.isRuntimeSupported() &&
          r.isWebBrowserSupported() &&
          r.isPWAEventSupported()
        );
      }
      static isRuntimeSupported() {
        return gContainer.getRuntime() === a.default.Runtime.Browser;
      }
      static isWebBrowserSupported() {
        return (
          i.GPlatform.webBrowser ===
            i.GPlatform.constructor.WebBrowser.Chrome ||
          i.GPlatform.webBrowser === i.GPlatform.constructor.WebBrowser.Edge
        );
      }
      static isPWAEventSupported() {
        return undefined !== window.BeforeInstallPromptEvent;
      }
    }
    exports.exports = r;
  }