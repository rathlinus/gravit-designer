/**
 * Webpack Module #1644
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15); /* GEditor */
  exports.exports = class {
    constructor() {
      ((this._dialog = this._createDialog()),
        this._dialog.append(this._createCloseButton(), this._getTitle(), this._getContent()));
    }
    open() {
      this._dialog.gDialog('open', true);
    }
    close() {
      this._dialog.gDialog('close');
    }
    _getTitle() {
      const exports = GCore.GLocale.getValue('GShortcutsDialog', 'text.title');
      return $('<div />').addClass('title').text(exports);
    }
    _getContent() {
      const exports = $('<table/>'),
        module = $('<tbody/>').appendTo(exports);
      return (
        gDesigner.getActions().forEach((e) => {
          if (!e.isAvailable()) return;
          const require = e.getShortcutHint({ isWordMode: true });
          if (require) {
            const GEditor = GCore.GLocale.get(e.getFullTitle());
            this._createTableRow(GEditor, require).appendTo(module);
          }
        }),
        gravit.tools.forEach((e) => {
          if (e.key) {
            const n = GEditor.GKey.shortcutToString(e.key);
            if (!n) return;
            const a = GCore.GLocale.get(e.richTooltipConfig.getConfig().title);
            this._createTableRow(a, n).appendTo(module);
          }
        }),
        $('<div/>').addClass('wrapper').append(exports)
      );
    }
    _createDialog() {
      return $('<div/>').gDialog({
        releaseOnClose: true,
        className: 'g-shortcuts-dialog',
      });
    }
    _createCloseButton() {
      const exports = $('<span />').addClass('gravit-icon-close');
      return $('<div />')
        .addClass('g-btn-close')
        .append(exports)
        .on('click', this.close.bind(this));
    }
    _createTableRow(e, t) {
      const require = $('<tr/>');
      return ($('<td/>').text(e).appendTo(require), $('<td/>').text(t).appendTo(require), require);
    }
  };
}
