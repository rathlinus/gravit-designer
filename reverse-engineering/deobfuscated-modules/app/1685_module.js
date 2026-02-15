/**
 * Webpack Module #1685
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    const i = {
      [GCore.GLocaleLanguage.Portuguese]: "pt-br",
      [GCore.GLocaleLanguage.Spanish]: "es",
      [GCore.GLocaleLanguage.German]: "de",
      [GCore.GLocaleLanguage.Italian]: "it",
      [GCore.GLocaleLanguage.French]: "fr",
    };
    exports.exports = class {
      constructor() {
        const exports = i[GCore.GLocale.getLanguage()] || 'en',
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
                .text(GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")))
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