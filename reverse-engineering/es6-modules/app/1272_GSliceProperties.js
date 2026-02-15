/**
 * Webpack Module #1272
 * Type: class
 * Name: GSliceProperties
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
    GProperties = require(123) /* GProperties */,
    l = (require(173) /* stub_requires_1 */, require(135)) /* GSettingChangedEvent */;
  class c extends GProperties {
    constructor() {
      super();
      this._slices = [];
    }

    _panel = null;
    _document = null;
    _slices = null;
    _ownChange = false;
    _chooserElem = null;

    init(e, t) {
      ((this._panel = e),
        this._panel.addClass('slice-property-panel'),
        this.setTouchTools([GTouchTool.default.APPEARANCE_TOUCH_TOOL]));
      var n = function (e) {
        var t = this;
        if ('x' === e || 'y' === e || 'w' === e || 'h' === e)
          return $('<input>')
            .addClass(e + '-input')
            .attr('type', 'text')
            .attr('data-property', e)
            .on(
              'change',
              function (n) {
                (gDesigner.stats('sliceproperties_change_size'),
                  t._assignProperty(
                    e,
                    t._document.getScene().stringToPoint($(n.target).gInputBox('value'))
                  ));
              }.bind(t)
            )
            .gInputBox({ minValue: 'w' === e || 'h' === e ? 1e-10 : null });
        if ('cls' === e)
          return $('<button></button>')
            .attr('data-property', e)
            .gPatternChooser({ types: [GCore.GColor], hasOpacity: false })
            .on('chooseropen', function () {
              (t._document.getEditor().hideSelection(), (t._chooserElem = $(this)));
            })
            .on('chooserclose', function (e, n, _interopRequireDefault) {
              (t._document && t._document.getEditor().resetHideSelection(),
                (t._chooserElem = null));
            })
            .on(
              'patternchange',
              function (n, _interopRequireDefault, GCore, GTools, GTouchTool) {
                var GProperties = null;
                (GTouchTool && (GProperties = { chooserOn: true, slicePattern: true }),
                  t._assignProperty(e, _interopRequireDefault, GTools, GProperties));
              }.bind(t)
            );
        if ('cls-check' === e)
          return $('<label></label>')
            .addClass('g-checkbox-label')
            .append(
              $('<input>')
                .addClass('cls-check-checkbox')
                .attr('type', 'checkbox')
                .attr('data-property', e)
                .on(
                  'change',
                  function (e) {
                    (gDesigner.stats('sliceproperties_change_background'),
                      t._assignProperty(
                        'cls',
                        $(e.target).is(':checked') ? GCore.GRGBColor.WHITE : null
                      ));
                  }.bind(t)
                )
            )
            .append(
              $(
                '<span>' +
                  GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.background-color')) +
                  '</span>'
              )
            );
        if ('trm' === e)
          return $('<label></label>')
            .addClass('g-checkbox-label')
            .append(
              $('<input>')
                .addClass('trm-checkbox')
                .attr('type', 'checkbox')
                .attr('data-property', e)
                .on(
                  'change',
                  function (n) {
                    (gDesigner.stats('sliceproperties_trim_transparent'),
                      t._assignProperty(e, $(n.target).is(':checked')));
                  }.bind(t)
                )
            )
            .append(
              $(
                '<span>' +
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GSliceProperties', 'text.trim-transparent-pixels')
                  ) +
                  '</span>'
              )
            );
        throw new Error('Unknown input property: ' + e);
      }.bind(this);
      ($('<div></div>')
        .addClass('slice-position-left-row')
        .gPropertyRow({
          label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.left')),
          columns: [{ width: '44%', content: n('x') }],
        })
        .appendTo(e),
        $('<div></div>')
          .addClass('slice-position-top-row')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.top')),
            columns: [{ width: '44%', content: n('y') }],
          })
          .appendTo(e),
        $('<div></div>')
          .addClass('slice-size-width-row')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.width')),
            columns: [{ width: '44%', content: n('w') }],
          })
          .appendTo(e),
        $('<div></div>')
          .addClass('slice-size-height-row')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.height')),
            columns: [{ width: '44%', content: n('h') }],
          })
          .appendTo(e),
        $('<div></div>')
          .addClass('slice-trm-row')
          .gPropertyRow({ columns: [{ width: '100%', content: n('trm') }] })
          .appendTo(e),
        $('<div></div>')
          .addClass('slice-bg-row')
          .gPropertyRow({
            columns: [
              { width: '80%', content: n('cls-check') },
              { width: '20%', content: n('cls') },
            ],
          })
          .appendTo(e));
    }

    update(e, t, n) {
      if ((this._updateUI(), this._ownChange)) return true;
      if (
        (this._chooserElem && this._chooserElem.gPatternChooser('close'),
        this._document &&
          (this._document
            .getScene()
            .removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChange,
              this
            ),
          gDesigner.removeEventListener(l, this._settingChanged),
          (this._document = null)),
        (this._slices = []),
        e)
      ) {
        for (
          var _interopRequireDefault = 0;
          _interopRequireDefault < t.length;
          ++_interopRequireDefault
        )
          t[_interopRequireDefault] instanceof GCore.GSlice &&
            this._slices.push(t[_interopRequireDefault]);
        if (this._slices.length && this._slices.length === t.length)
          return (
            (this._document = e),
            this._document
              .getScene()
              .addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            gDesigner.addEventListener(l, this._settingChanged, this),
            this._updateProperties(n),
            true
          );
      }
      return false;
    }

    _updateUI() {
      let exports = (e) => {
          e.prev().remove();
        },
        module = (e, t) => {
          e.prev().length || $('<span/>').addClass('g-input-label').text(t).insertBefore(e);
        },
        require = this._panel.find('.slice-position-left-row .property-label span'),
        _interopRequireDefault = this._panel.find('.slice-size-width-row .property-label span'),
        GTools = this._panel.find('.x-input'),
        GTouchTool = this._panel.find('.y-input'),
        GProperties = this._panel.find('.w-input'),
        l = this._panel.find('.h-input');
      gDesigner.isTouchEnabled()
        ? (this._panel.find('.trm-checkbox').gCheckboxSlider(),
          this._panel.find('.cls-check-checkbox').gCheckboxSlider(),
          require.text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.position'))),
          _interopRequireDefault.text(
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.size'))
          ),
          module(GTools, 'x'),
          module(GTouchTool, 'y'),
          module(GProperties, 'w'),
          module(l, 'h'))
        : (this._panel.find('.trm-checkbox').gCheckboxSlider('unmount'),
          this._panel.find('.cls-check-checkbox').gCheckboxSlider('unmount'),
          require.text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.left'))),
          _interopRequireDefault.text(
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.width'))
          ),
          exports(GTools),
          exports(GTouchTool),
          exports(GProperties),
          exports(l));
    }

    _afterPropertiesChange(e) {
      !e.temporary &&
        this._slices.length > 0 &&
        this._slices[0] === e.node &&
        this._updateProperties();
    }

    _settingChanged(e) {
      ('decimals_num' === e.key && this._updateProperties(), 'touch' === e.key && this._updateUI());
    }

    _updateProperties(e) {
      var t = this._document.getScene(),
        n = this._slices[0],
        _interopRequireDefault = function (e) {
          var _interopRequireDefault = this._panel.find('input[data-property="' + e + '"]');
          this._slices.length > 1
            ? _interopRequireDefault.gInputBox('value', null).prop('disabled', true)
            : _interopRequireDefault
                .gInputBox('value', t.pointToString(n.getProperty(e), t.getOptimalDecimalsCount()))
                .prop('disabled', false);
        }.bind(this);
      (_interopRequireDefault('x'),
        _interopRequireDefault('y'),
        _interopRequireDefault('w'),
        _interopRequireDefault('h'));
      var GCore = n.getProperty('cls');
      (this._panel.find('[data-property="cls-check"]').prop('checked', !!GCore),
        this._panel
          .find('[data-property="cls"]')
          .prop('disabled', !GCore)
          .gPatternChooser('value', n.getProperty('cls')),
        this._panel.find('input[data-property="trm"]').prop('checked', n.getProperty('trm')),
        e &&
          (e.evtType == GTools.GEditor.ModifiedEvent.Type.Undo ||
            e.evtType == GTools.GEditor.ModifiedEvent.Type.Redo) &&
          e.chooserOn &&
          e.slicePattern &&
          this._panel.find('[data-property="cls"]').find('.preview').trigger('click'));
    }

    _assignProperty(e, t, n, _interopRequireDefault) {
      this._assignProperties([e], [t], n, _interopRequireDefault);
    }

    _assignProperties(e, t, n, _interopRequireDefault) {
      if (n)
        for (var GTools = 0; GTools < this._slices.length; ++GTools)
          this._slices[GTools].setProperties(e, t, true);
      else {
        this._ownChange = true;
        var GTouchTool = this._document.getEditor();
        GTouchTool.beginTransaction();
        try {
          for (GTools = 0; GTools < this._slices.length; ++GTools)
            this._slices[GTools].setProperties(e, t);
        } finally {
          (GTouchTool.commitTransaction(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GSliceProperties', 'action.modify-slice-properties')
            ),
            _interopRequireDefault || null
          ),
            (this._ownChange = false));
        }
      }
    }

    toString() {
      return '[Object GSliceProperties]';
    }

  }
  exports.exports = c;
}