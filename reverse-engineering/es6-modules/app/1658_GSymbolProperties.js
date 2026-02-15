/**
 * Webpack Module #1658
 * Type: class
 * Name: GSymbolProperties
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    GProperties = require(123) /* GProperties */,
    a = (require(173) /* stub_requires_1 */, require(874)) /* GDetachSymbolAction */,
    GFitSelectionAction = require(566);
  const GSettingChangedEvent = require(135);
  class l extends GProperties {
    constructor() {
      super();
    }

    _panel = null;
    _toolbar = null;
    _document = null;
    _symbols = null;
    _disabledSiblingMaps = null;

    init(e, t) {
      ((this._panel = e),
        (this._toolbar = t),
        t.addClass('filled'),
        t.addClass('page-toolbar'),
        t.addClass('symbol-instance-toolbar'),
        e.addClass('symbol-instance-panel'));
      var n = $('<select></select>')
        .attr('data-property', 'symbol-instance')
        .on(
          'change',
          function (e) {
            gDesigner.stats('symbolproperties_select_swap');
            var t = this._document.getScene(),
              n = this._document.getEditor(),
              GProperties = function (e) {
                var n = e.findParent(function (e) {
                  return e instanceof GCore.GPage;
                });
                n && t.getActivePage() !== n && t.setActivePage(n);
              };
            if (e.target.value && '0' !== e.target.value && '-1' !== e.target.value) {
              var GSettingChangedEvent = $(e.target)
                .find('option[value="' + e.target.value + '"]')
                .data('symbol');
              if (GSettingChangedEvent) {
                (n = this._document.getEditor()).beginTransaction();
                var l = GSettingChangedEvent,
                  c = this._symbols[0],
                  d = c.getMasterSymbol(),
                  u = c.getDisabledSiblings(),
                  p = c.swapWith(l);
                if ((this._disabledSiblingMaps || (this._disabledSiblingMaps = {}), u)) {
                  var g = d.getMultireferenceId() + '_' + p.getMultireferenceId();
                  this._disabledSiblingMaps[g] = u;
                }
                var h =
                  this._disabledSiblingMaps[
                    l.getMultireferenceId() + '_' + c.getMultireferenceId()
                  ];
                (h && p.desynchronize(h),
                  p && (GProperties(p), n.updateSelection(false, [p])),
                  n.commitTransaction('Swap symbol instance'));
              }
            } else if (e.target.value && '0' === e.target.value) {
              var f = this._symbols[0].getMasterSymbol();
              (n.beginTransaction(),
                GProperties(f),
                n.clearSelection(),
                n.updateSelection(false, [f]),
                n.hasSelection() &&
                  gDesigner.executeAction(GFitSelectionAction.ID, undefined, undefined, true),
                n.commitTransaction('Select master symbol'));
            } else
              e.target.value &&
                '-1' === e.target.value &&
                (gDesigner.executeAction(a.ID, undefined, undefined, true),
                n.updateSelection(false, n.getSelection().slice()));
          }.bind(this)
        );
      ($('<label></label>')
        .text(GCore.GLocale.get(new GCore.GLocaleKey('GSymbolProperties', 'title')))
        .appendTo(t),
        $('<div></div>')
          .addClass('chooseinstance-row')
          .gPropertyRow({
            columns: [
              {
                clazz: 'chooseinstance-title-col',
                content: $(
                  '<span>' +
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GSymbolProperties', 'text.chooseinstance')
                    ) +
                    '</span>'
                ),
              },
              { clazz: 'chooseinstance-select-col', content: n },
            ],
          })
          .appendTo(e));
    }

    update(e, t) {
      return (
        this._updateUI(),
        this._document &&
          (gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged, this),
          (this._document = null)),
        (this._symbols = null),
        !(
          !e ||
          (gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
          !(t = t.filter(
            (e) => e instanceof GCore.GSymbol && !e.isMaster() && !!e.getMasterSymbol()
          )).length)
        ) && ((this._symbols = t.slice()), (this._document = e), this._updateProperties(), true)
      );
    }

    _updateUI() {
      gDesigner.isTouchEnabled()
        ? this._panel.find('.frm-checkbox').gCheckboxSlider()
        : this._panel.find('.frm-checkbox').gCheckboxSlider('unmount');
    }

    _settingChanged(e) {
      'touch' === e.key && this._updateUI();
    }

    _updateProperties() {
      var e,
        t = this._document.getScene(),
        n = this._symbols[0],
        GProperties = n.getMasterSymbol(),
        GFitSelectionAction = (t.isFixedSized(), t.getSymbols());
      (this._symbols.length > 1
        ? (e =
            this._symbols.length +
            ' ' +
            GCore.GLocale.get(new GCore.GLocaleKey('GSymbolProperties', 'text.instances')))
        : ((e =
            n.getProperty('name') ||
            GCore.GLocale.get(new GCore.GLocaleKey('GSymbolProperties', 'title'))),
          GProperties.getProperty('name')
            ? (e +=
                ' (' +
                GCore.GLocale.get(new GCore.GLocaleKey('GSymbolProperties', 'text.instanceof')) +
                ' ' +
                GProperties.getProperty('name'))
            : (e +=
                ' (' +
                GCore.GLocale.get(new GCore.GLocaleKey('GSymbolProperties', 'text.instance'))),
          (e += ')')),
        this._toolbar.find('label:first-child').text(e));
      var GSettingChangedEvent,
        l = this._panel.find('select[data-property="symbol-instance"]').empty();
      gDesigner.canExecuteAction(a.ID) &&
        (l.append($('<option value="-1">(' + GCore.GLocale.get(a.TITLE) + ')</option>')),
        l.append((GSettingChangedEvent = $('<option value="-2"></option>'))));
      var c = 0;
      (!GFitSelectionAction.length && GProperties && (GFitSelectionAction = [GProperties]),
        GFitSelectionAction.length
          ? l.removeClass('g-disabled').attr('disabled', null)
          : l.addClass('g-disabled').attr('disabled', ''));
      var d = false;
      (GFitSelectionAction.forEach(function (e) {
        var t = $('<option></option>')
          .data('symbol', e)
          .attr('value', ++c)
          .text(e.getProperty('name'))
          .appendTo(l);
        GProperties.getMultireferenceId() === e.getMultireferenceId() &&
          (t.prop('selected', true), (d = true));
      }),
        d || GSettingChangedEvent.prop('selected', true),
        GProperties &&
          GProperties.getScene() &&
          l.append(
            $(
              '<option value="0">(' +
                GCore.GLocale.get(new GCore.GLocaleKey('GSymbolProperties', 'text.master')) +
                ')</option>'
            )
          ));
    }

    toString() {
      return '[Object GSymbolProperties]';
    }

  }
  exports.exports = l;
}