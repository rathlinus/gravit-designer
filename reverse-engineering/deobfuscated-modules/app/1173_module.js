/**
 * Webpack Module #1173
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GEditor = require(15) /* GEditor */,
      GContainer = _interopRequireDefault(require(85) /* GContainer */);
    class r {
      static isSupported() {
        return (
          r.isRuntimeSupported() &&
          r.isWebBrowserSupported() &&
          r.isPWAEventSupported()
        );
      }
      static isRuntimeSupported() {
        return gContainer.getRuntime() === GContainer.default.Runtime.Browser;
      }
      static isWebBrowserSupported() {
        return (
          GEditor.GPlatform.webBrowser ===
            GEditor.GPlatform.constructor.WebBrowser.Chrome ||
          GEditor.GPlatform.webBrowser === GEditor.GPlatform.constructor.WebBrowser.Edge
        );
      }
      static isPWAEventSupported() {
        return undefined !== window.BeforeInstallPromptEvent;
      }
    }
    exports.exports = r;
  }