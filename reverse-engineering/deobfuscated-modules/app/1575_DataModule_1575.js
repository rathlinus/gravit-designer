/**
 * Webpack Module #1575
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const GCrossFrameManager = require(1252) /* GCrossFrameManager */,
      DataModule_1187 = require(1187) /* DataModule_1187 */,
      { gApi: a } = require(10) /* AppSettings */;
    exports.exports = class extends DataModule_1187 {
      constructor(e, t) {
        super(), (this._id = e), (this._url = t);
      }
      open() {
        if (this._isOpen()) return;
        const exports = new GCrossFrameManager({ id: this._id, className: "overlay" });
        exports.open(this._url),
          exports.on("error", () => {
            exports.close();
          }),
          a.isCookieEnabled &&
            !a.isCookieEnabled() &&
            exports.on("load", () => {
              exports.postMessage(
                { cmd: "auth", token: a.getAuthorizationToken() },
                a.url
              );
            });
      }
      _isOpen() {
        return !!$("#".concat(this._id)).length;
      }
    };
  }