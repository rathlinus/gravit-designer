/**
 * Webpack Module #1498
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor(e) {
      this._htmlElement = e;
    }

    init() {
    $('<div></div>').addClass('container').appendTo(this._htmlElement);
  }

    setEnabled(e) {
      $('#overlay').css('display', e ? 'none' : 'unset');
    }

  }
  exports.exports = o;
}