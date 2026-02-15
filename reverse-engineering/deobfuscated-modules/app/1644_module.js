/**
 * Webpack Module #1644
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var o = require(1) /* module */,
      i = require(15) /* module */;
    exports.exports = class {
      function Object() { [native code] }() {
        (this._dialog = this._createDialog()),
          this._dialog.append(
            this._createCloseButton(),
            this._getTitle(),
            this._getContent()
          );
      }
      open() {
        this._dialog.gDialog("open", true);
      }
      close() {
        this._dialog.gDialog("close");
      }
      _getTitle() {
        const exports = o.GLocale.getValue("GShortcutsDialog", "text.title");
        return $("<div />").addClass("title").text(exports);
      }
      _getContent() {
        const exports = $("<table/>"),
          module = $("<tbody/>").appendTo(exports);
        return (
          gDesigner.getActions().forEach((e) => {
            if (!e.isAvailable()) return;
            const require = e.getShortcutHint({ isWordMode: true });
            if (require) {
              const i = o.GLocale.get(e.getFullTitle());
              this._createTableRow(i, require).appendTo(module);
            }
          }),
          gravit.tools.forEach((e) => {
            if (e.key) {
              const n = i.GKey.shortcutToString(e.key);
              if (!n) return;
              const a = o.GLocale.get(e.richTooltipConfig.getConfig().title);
              this._createTableRow(a, n).appendTo(module);
            }
          }),
          $("<div/>").addClass("wrapper").append(exports)
        );
      }
      _createDialog() {
        return $("<div/>").gDialog({
          releaseOnClose: true,
          className: "g-shortcuts-dialog",
        });
      }
      _createCloseButton() {
        const exports = $("<span />").addClass("gravit-icon-close");
        return $("<div />")
          .addClass("g-btn-close")
          .append(exports)
          .on("click", this.close.bind(this));
      }
      _createTableRow(e, t) {
        const require = $("<tr/>");
        return (
          $("<td/>").text(e).appendTo(require), $("<td/>").text(t).appendTo(require), require
        );
      }
    };
  }