/**
 * Webpack Module #1685
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    const i = {
      [o.GLocaleLanguage.Portuguese]: "pt-br",
      [o.GLocaleLanguage.Spanish]: "es",
      [o.GLocaleLanguage.German]: "de",
      [o.GLocaleLanguage.Italian]: "it",
      [o.GLocaleLanguage.French]: "fr",
    };
    exports.exports = class {
      constructor() {
        const exports = i[o.GLocale.getLanguage()] || 'en',
          module = $('<iframe>')
            .attr(
              'src',
              ''
            )
            .on('load error', () => this._dialog.removeClass('g-loading'));
        this._dialog = $("<div/>")
          .addClass("g-loading")
          .gDialog({
            releaseOnClose: true,
            className: "g-windows-store-announcement-dialog",
            buttons: [
              $("<button/>")
                .addClass("primary")
                .text(o.GLocale.get(new o.GLocaleKey("GLocale", "ok")))
                .on("click", () => this.close()),
            ],
          })
          .append(module);
      }
      open() {
        this._dialog.gDialog("open", false);
      }
      close() {
        this._dialog.gDialog("close");
      }
    };
  }