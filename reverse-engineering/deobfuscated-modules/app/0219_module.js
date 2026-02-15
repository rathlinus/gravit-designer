/**
 * Webpack Module #219
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* module */;
    exports.exports = class {
      constructor(e, t) {
        (this._cb = t || null),
          (this._dialog = $("<div></div>")),
          $("<div/>")
            .addClass("message")
            .css({ lineHeight: "1.5em" })
            .append($("<span/>").html(e))
            .appendTo(this._dialog),
          this._dialog.gDialog({
            releaseOnClose: true,
            buttons: [
              $(
                "<button>" +
                  GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")) +
                  "</button>"
              ).on("click", () => this.close()),
            ],
          });
      }
      open() {
        this._dialog.gDialog("open", true);
      }
      close() {
        this._dialog.gDialog("close"), this._cb && this._cb();
      }
    };
  }