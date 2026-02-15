/**
 * Webpack Module #1526
 * Type: class
 * Name: GEffectsPanel
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEffectsButton = require(1527);
  class a {
    constructor(e) {
      ((this._htmlElement = $('<div></div>')
      .addClass('g-effects-panel')
      .gOverlay({ releaseOnClose: false, padding: false })),
      (this._catTranslate = e));
    }

    _htmlElement = null;
    _content = null;
    _catTranslate = null;
    _parent = null;

    addItem(e) {
      this._content.append(e._htmlElement);
    }

    createSelector() {
      var e = $('<select></select>').addClass('g-effects-select').addClass('active');
      return (
        (this._htmlElementSelector = $('<div></div>').addClass('g-effects-selector').append(e)),
        this._htmlElement.append(this._htmlElementSelector),
        e
      );
    }

    addItems(e) {
      for (
        this._content ||
        ((this._content = $('<div></div>').addClass('g-effects-content')),
        this._htmlElement.append(this._content));
        e.length % 3 != 0;
      ) {
        var module = new GEffectsButton();
        e.push(module);
      }
      this._content.children('.g-effects-button').remove();
      for (var require = 0; require < e.length; ++require)
        if (e[require] instanceof GEffectsButton) this.addItem(e[require]);
        else {
          module = new GEffectsButton(
            GCore.GLocale.getValue(e[require].i18n, 'name'),
            e[require].icon,
            e[require].clazz,
            e[require].cb,
            !e[require].mostUsed,
            e[require],
            this._catTranslate
          );
          this.addItem(module);
        }
    }

    open(e) {
      ((this._parent = e), this._htmlElement.gOverlay('open', e));
    }

    close(e) {
      this._htmlElement.gOverlay('close', e || this._parent);
    }

    toString() {
      return '[Object GEffectsPanel]';
    }

  }
  exports.exports = a;
}