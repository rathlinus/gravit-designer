/**
 * Webpack Module #1575
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const o = require(1252) /* module_1252 */,
      i = require(1187) /* module_1187 */,
      { gApi: a } = require(10) /* AppSettings */;
    exports.exports = class extends i {
      constructor(e, t) {
        super(), (this._id = e), (this._url = t);
      }
      open() {
        if (this._isOpen()) return;
        const exports = new o({ id: this._id, className: "overlay" });
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