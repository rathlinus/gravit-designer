/**
 * Webpack Module #1511
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GObject {
    constructor(e, t) {
      super();
      ((this._neverRemind = false),
      (this._agreeCb = e),
      (this._rejectCb = t || this.close),
      gContainer
      .getProperty('designer.settings.warn-linked-image-dialog.never-remind')
      .then((t) => {
      (t = t || false) ? e() : this._init();
      }));
    }

    _init() {
      ((this._dialog = $('<div></div>')
        .addClass('container')
        .append(
          $('<div />')
            .addClass('text-content')
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GWarnLinkedImageDialog', 'warn-linked-image.text')
              )
            )
        )
        .append(
          $('<div />')
            .addClass('checkbox-content')
            .append(
              $('<input />')
                .attr('type', 'checkbox')
                .attr('name', 'never-remind')
                .attr('checked', this._neverRemind)
                .on(
                  'change',
                  function () {
                    this._neverRemind = !this._neverRemind;
                  }.bind(this)
                )
            )
            .append(
              $('<span />')
                .addClass('checkbox-text')
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GWarnLinkedImageDialog', 'warn-linked-image.never-remind')
                  )
                )
            )
        )
        .gDialog({
          releaseOnClose: true,
          className: 'g-warn-linked-image-dialog',
          buttons: [
            $('<button />')
              .addClass('native-button')
              .attr('type', 'submit')
              .html(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GWarnLinkedImageDialog', 'warn-linked-image.proceed')
                )
              )
              .on('click', this.save.bind(this)),
            $('<button />')
              .addClass('native-button')
              .html(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GWarnLinkedImageDialog', 'warn-linked-image.cancel')
                )
              )
              .on('click', this._rejectCb.bind(this)),
          ],
        })),
        $('<div></div>')
          .addClass('g-btn-close')
          .append($('<span></span>').addClass('gravit-icon-close'))
          .on('click', this.close.bind(this))
          .appendTo(this._dialog));
    }

    save() {
      (this._neverRemind &&
        gContainer &&
        gContainer.setProperty &&
        gContainer.setProperty('designer.settings.warn-linked-image-dialog.never-remind', true),
        this.close(),
        this._agreeCb());
    }

    open() {
      this._dialog.gDialog('open', true);
    }

    close() {
      this._dialog.gDialog('close');
    }

  }
  exports.exports = i;
}