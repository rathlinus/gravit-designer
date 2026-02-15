/**
 * Webpack Module #1238
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(38) /* stub_requires_680 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1);
  require(1150) /* GPatternChooser */;
  class i extends GCore.GObject {
    constructor(e) {
      super();
      let module = [
      ...new Set(
      e.map((e) =>
      e.features
      .map((t) =>
      '• '
      .concat(
      ((e) =>
      e instanceof GCore.GNode
      ? e.getNodeNameTranslated()
      : e instanceof GCore.GNoisePattern
      ? GCore.GLocale.get(
      new GCore.GLocaleKey('GPatternChooser', 'pattern-type.noise')
      )
      : e instanceof GCore.GTexturePattern
      ? GCore.GLocale.get(
      new GCore.GLocaleKey('GPatternChooser', 'pattern-type.texture')
      )
      : e instanceof GCore.GBackground
      ? GCore.GLocale.get(
      new GCore.GLocaleKey(
      'GPatternChooser',
      'pattern-type.backgroundfill'
      )
      )
      : e instanceof GCore.GAngularGradient
      ? GCore.GLocale.get(
      new GCore.GLocaleKey(
      'GPatternChooser',
      'pattern-type.angulargradient'
      )
      )
      : '')(t),
      ' ['
      )
      .concat(e.name, ']')
      )
      .join('<br>')
      )
      ),
      ].join('<br>');
      ((this._dialog = $('<div></div>').gDialog({
      releaseOnClose: true,
      buttons: [
      $('<button>' + GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')) + '</button>').on(
      'click',
      () => this.close()
      ),
      ],
      })),
      $('<div/>')
      .addClass('message')
      .css({ lineHeight: '1.5em', maxHeight: '60%', overflow: 'auto' })
      .append(
      $('<span/>').html(
      GCore.GLocale.get(
      new GCore.GLocaleKey('GUnsupportedFeaturesDialog', 'text.title-unsupported')
      ) +
      '<br>' +
      module
      )
      )
      .appendTo(this._dialog),
      $('<div></div>')
      .css('margin-top', '10px')
      .append(
      $('<label></label>')
      .append(
      $('<input>')
      .attr('type', 'checkbox')
      .css('margin-right', '5px')
      .on('change', (e) => {
      let module = $(e.target).is(':checked');
      gDesigner.setSetting('disable_warning_unsupported_features', module);
      })
      )
      .append(
      $('<span></span>').text(
      GCore.GLocale.get(
      new GCore.GLocaleKey('GUnsupportedFeaturesDialog', 'text.checked-unsupported')
      )
      )
      )
      )
      .appendTo(this._dialog));
    }

    open() {
      this._dialog.gDialog('open');
    }

    close() {
      this._dialog.gDialog('close');
    }

  }
  exports.exports = i;
}