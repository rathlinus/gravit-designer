/**
 * Webpack Module #1160
 * Type: class
 * Name: GAppearanceProperties
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(19) /* polyfill_Array_iterator */,
    require(30) /* polyfill_Object_assign */,
    require(193) /* polyfill_Object_keys */,
    require(57) /* polyfill_parseInt */,
    require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    r = require(67) /* GRichTooltipConfig */,
    GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
    GProperties = require(123) /* GProperties */,
    GInputSliderWidget = require(857);
  require(173) /* stub_requires_1 */;
  const GSettingChangedEvent = require(135);
  class u extends GProperties {
    constructor() {
      super();
      this._elements = [];
    }

    _panel = null;
    _document = null;
    _elements = null;

    _getBlendingProperties() {
      var e = this;
      return $('<select></select>')
        .attr('data-property', '_sbl')
        .gBlendMode()
        .append(
          $(
            '<optgroup label="' +
              GCore.GLocale.get(new GCore.GLocaleKey('GAppearanceProperties', 'text.masking')) +
              '"></optgroup>'
          )
            .append(
              $('<option></option>')
                .attr('value', 'm')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GAppearanceProperties', 'blending.mask'))
                )
            )
            .append(
              $('<option></option>')
                .attr('value', '!m')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GAppearanceProperties', 'blending.inverse-mask')
                  )
                )
            )
        )
        .gRichTooltip(
          r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GAppearanceProperties', 'text.blend-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GAppearanceProperties', 'text.blend-tooltip-description')
            ),
            middle: false,
            learnMore: '',
          })
        )
        .on('change', function (t) {
          (gDesigner.stats('appearance_change_blending', $(t.target).val()),
            e._assignProperty(
              '_sbl',
              $(t.target).val(),
              GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.change-blending-mode'))
            ));
        });
    }

    init(e, t) {
      ((this._panel = e), this.setTouchTools([GTouchTool.default.APPEARANCE_TOUCH_TOOL]));
      var n = function (e) {
        var t = this;
        if ('evenodd' === e)
          return $('<select></select>')
            .attr('data-property', 'evenodd')
            .append(
              $('<option></option>')
                .attr('value', '0')
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'evenodd.non-zero')))
            )
            .append(
              $('<option></option>')
                .attr('value', '1')
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'evenodd.non-odd')))
            )
            .on('change', function () {
              (gDesigner.stats(
                'appearance_toggle_evenodd',
                '1' === $(this).val() ? 'activate' : 'deactivate'
              ),
                t._assignProperty(
                  'evenodd',
                  '1' === $(this).val(),
                  GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.change-fill-rule'))
                ));
            });
        if ('_sbl' === e) return t._getBlendingProperties();
        if ('opacity-slider' === e)
          return $('<div/>')
            .attr('data-property', '_stop')
            .addClass('gravit-icon-touch-transparency')
            .gInputSlider(
              Object.assign({}, GInputSliderWidget.prototype.OPACITY_DEFAULT, {
                richTooltipConfig: r.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      'GAppearanceProperties',
                      'text.opacity-slider-tooltip-title'
                    )
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      'GAppearanceProperties',
                      'text.opacity-slider-tooltip-description'
                    )
                  ),
                }),
              })
            )
            .on('mousedown', function () {
              (t._document.getEditor().hideSelection(),
                $(document).one('mouseup', function () {
                  t._document.getEditor().resetHideSelection();
                }));
            })
            .on('input', function (e) {
              for (
                var n = $(e.target),
                  _interopRequireDefault = n.attr('data-property'),
                  GTools = parseInt(n.gInputSlider('value')) / 100,
                  r = 0;
                r < t._elements.length;
                ++r
              )
                t._elements[r].setProperty(_interopRequireDefault, GTools, false, false, true);
              t._panel
                .find('[type="text"][data-property="' + _interopRequireDefault + '"]')
                .gInputBox('value', GCore.GUtil.formatOpacity(100 * GTools));
            })
            .on('change', function (e) {
              (gDesigner.stats('appearance_change_opacity'),
                t._assignProperty(
                  $(this).attr('data-property'),
                  parseFloat($(this).gInputSlider('value')) / 100,
                  'Change opacity'
                ));
            });
        if ('opacity-input' === e)
          return $('<input>')
            .attr('type', 'text')
            .attr('data-property', '_stop')
            .on('change', function (e) {
              (gDesigner.stats('appearance_change_opacity'),
                t._assignProperty(
                  $(this).attr('data-property'),
                  GCore.GLength.parseEquationValue($(this).gInputBox('value')) / 100,
                  'Change opacity'
                ));
            })
            .gInputBox({
              minValue: 0,
              maxValue: 100,
              incrementValue: gDesigner.getOpacityIncrement(),
              postfix: '%',
            });
        throw new Error('Unknown input property: ' + e);
      }.bind(this);
      ($('<div></div>')
        .addClass('appearance-opacity-property')
        .gPropertyRow({
          label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.opacity')),
          columns: [
            {
              width: 'auto',
              clazz: 'opacity-slider-col',
              content: n('opacity-slider'),
            },
            { width: '5px' },
            { clazz: 'opacity-input-col', content: n('opacity-input') },
          ],
        })
        .appendTo(this._panel),
        $('<div></div>')
          .addClass('appearance-blending-property')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.blending')),
            columns: [{ width: '100%', content: n('_sbl') }],
          })
          .appendTo(this._panel));
      var _interopRequireDefault = this,
        GTools = gDesigner.getLicense();
      $('<div/>')
        .addClass('g-property-row appearance-style-property')
        .append(
          $('<label/>')
            .addClass('property-label')
            .append(
              $('<span />')
                .addClass('vertical-align')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GAppearanceProperties', 'text.style'))
                )
            )
        )
        .append(
          $('<div/>')
            .addClass('style-selector-container')
            .css('display', 'flex')
            .append(
              $('<div/>')
                .addClass('style-selector-inner-wrapper')
                .css({ display: 'flex', width: '100%', overflow: 'hidden' })
                .append(
                  $('<div/>')
                    .addClass('g-styles-preview')
                    .css('margin-right', '5px')
                    .css('align-self', 'center')
                    .css('display', 'none')
                )
                .append(
                  $('<div/>')
                    .addClass('g-select')
                    .addClass('g-styles-field-container')
                    .css('overflow', 'hidden')
                    .css('margin-right', '5px')
                    .append(
                      $('<span/>')
                        .css({
                          width: '95%',
                          alignSelf: 'center',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                        })
                        .attr('type', 'text')
                        .addClass('g-styles-field')
                        .attr('data-property', '_styles')
                    )
                    .gDesignerStyleEditor()
                    .gRichTooltip(
                      r.GRichTooltipConfig.from({
                        title: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            'GAppearanceProperties',
                            'text.shared-styles-tooltip-title'
                          )
                        ),
                        description: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            'GAppearanceProperties',
                            'text.shared-styles-tooltip-description'
                          )
                        ),
                        middle: false,
                        isPro:
                          !gDesigner.isEnabledProFeatures() ||
                          !(GTools.isPro() && !GTools.isExpired()),
                        learnMore: '',
                      })
                    )
                )
            )
            .append(
              $('<button></button>')
                .addClass('g-style-sync')
                .addClass('g-disabled')
                .on('click', function () {
                  if (
                    (gDesigner.stats('appearance_click_stylebutton'),
                    !$(this).hasClass('g-disabled') &&
                      _interopRequireDefault._elements &&
                      _interopRequireDefault._elements.length > 0)
                  ) {
                    var e = _interopRequireDefault._elements[0].getReferencedStyle();
                    e.assignStyleFrom(_interopRequireDefault._elements[0]);
                    var t = gDesigner.createNewStylePreview(
                      e,
                      true,
                      _interopRequireDefault._elements[0] instanceof GCore.GText
                    );
                    (t && _interopRequireDefault._addPreview(t), $(this).addClass('g-disabled'));
                  }
                })
            )
        )
        .appendTo(this._panel);
    }

    update(e, t) {
      if (
        (this._updateUI(),
        this._document &&
          (gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged, this),
          this._document
            .getScene()
            .removeEventListener(GCore.GNode.AfterInsertEvent, this._styleChanged),
          this._document
            .getScene()
            .removeEventListener(GCore.GNode.AfterRemoveEvent, this._styleChanged),
          this._document
            .getScene()
            .removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChange
            ),
          this._document
            .getScene()
            .removeEventListener(GCore.GElement.AfterFlagChangeEvent, this._afterFlagChange),
          (this._document = null)),
        (this._elements = []),
        e)
      ) {
        gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this);
        for (var require = 0; require < t.length; ++require) {
          var _interopRequireDefault = t[require];
          _interopRequireDefault.hasMixin(GCore.GStylable) &&
            _interopRequireDefault
              .getStylePropertySets()
              .indexOf(GCore.GStylable.PropertySet.Style) >= 0 &&
            this._elements.push(_interopRequireDefault);
        }
        if (this._elements.length)
          return (
            (this._document = e),
            this._document
              .getScene()
              .addEventListener(GCore.GNode.AfterInsertEvent, this._styleChanged, this),
            this._document
              .getScene()
              .addEventListener(GCore.GNode.AfterRemoveEvent, this._styleChanged, this),
            this._document
              .getScene()
              .addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            this._document
              .getScene()
              .addEventListener(GCore.GElement.AfterFlagChangeEvent, this._afterFlagChange, this),
            this._updateProperties(),
            true
          );
      }
      return false;
    }

    _updateUI() {
      let exports = this._panel.find('.g-style-sync');
      gDesigner.isTouchEnabled()
        ? (exports.text(''),
          exports.append($('<span></span>').addClass('g-style-sync-refresh-item')))
        : exports.text(
            GCore.GLocale.get(new GCore.GLocaleKey('GAppearanceProperties', 'action.sync'))
          );
    }

    _settingChanged(e) {
      'touch' === e.key && this._updateUI();
    }

    _afterFlagChange(e) {
      if (
        e.flag === GCore.GNode.Flag.Selected &&
        (e.node instanceof GCore.GPGEdge || e.node instanceof GCore.GPGFacet)
      ) {
        var module = e.node.getParent() ? e.node.getParent().getParent() : null;
        module && this._elements.indexOf(module) >= 0 && this._updateProperties();
      }
    }

    _afterPropertiesChange(e) {
      (e.temporary || e.node !== this._elements[0] || this._updateProperties(),
        this._styleChanged());
    }

    _styleChanged() {
      1 === this._elements.length && this._checkSyncState();
    }

    _updateProperties() {
      if (this._elements && this._elements.length) {
        var exports = this._elements[0],
          module = GTools.GElementEditor.getEditor(exports),
          require = function (n, _interopRequireDefault, GTools) {
            var GCore = module ? module.getPartsProperty(n) : null;
            if (GCore) {
              if (GCore.values.length) {
                if (1 == GCore.values.length || _interopRequireDefault) return GCore.values[0];
                for (
                  var r = GCore.values, GTouchTool = r[0], GProperties = 1;
                  GProperties < r.length;
                  ++GProperties
                )
                  if (r[GProperties] !== GTouchTool) return GTools;
                return GTouchTool;
              }
              return GTools;
            }
            return exports.getProperty(n);
          },
          _interopRequireDefault = 100 * require('_stop', false, null);
        (this._panel
          .find('.g-input-slider[data-property="_stop"]')
          .gInputSlider('value', null !== _interopRequireDefault ? _interopRequireDefault : 100),
          this._panel
            .find('[type="text"][data-property="_stop"]')
            .gInputBox('value', GCore.GUtil.formatOpacity(_interopRequireDefault)),
          this._panel.find('[data-property="_sbl"]').val(require('_sbl', true)));
        var r = null,
          GTouchTool = null;
        if (
          1 === this._elements.length &&
          this._elements[0].hasProperty('sref') &&
          this._elements[0].getReferencedStyle()
        ) {
          var GProperties = this._elements[0].getReferencedStyle();
          ((r = gDesigner.getStylePreview(GProperties, this._elements[0] instanceof GCore.GText)),
            (GTouchTool = GProperties.getProperty('name')));
        }
        if ((this._checkSyncState(), r))
          (this._addPreview(r),
            this._panel.find('.g-styles-field').text(GTouchTool),
            this._panel.find('.g-styles-field').removeClass('g-disabled'));
        else {
          for (
            var GInputSliderWidget = false, GSettingChangedEvent = 0;
            GSettingChangedEvent < this._elements.length;
            ++GSettingChangedEvent
          )
            this._elements[0].hasProperty('sref') &&
              this._elements[GSettingChangedEvent].getReferencedStyle() &&
              (GInputSliderWidget = true);
          GInputSliderWidget && this._elements.length > 1
            ? (this._panel.find('.g-styles-preview').empty(),
              this._panel.find('.g-styles-preview').css('display', 'none'),
              this._panel
                .find('.g-styles-field')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GAppearanceProperties', 'text.multiple-selection')
                  )
                ),
              this._panel.find('.g-styles-field').addClass('g-disabled'))
            : (this._panel.find('.g-styles-preview').empty(),
              this._panel.find('.g-styles-preview').css('display', 'none'),
              this._panel
                .find('.g-styles-field')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GAppearanceProperties', 'text.no-style'))
                ),
              this._panel.find('.g-styles-field').removeClass('g-disabled'));
        }
      } else console.warn('GAppearanceProperties: empty _elements array');
    }

    _addPreview(e) {
      (this._panel.find('.g-styles-preview').empty(),
        this._panel
          .find('.g-styles-preview')
          .css('display', '')
          .append(
            $('<img/>').css({ height: '20px', width: '20px', borderRadius: '3px' }).attr('src', e)
          ));
    }

    _assignProperty(e, t, n) {
      this._assignProperties([e], [t], n);
    }

    _assignProperties(e, t, n) {
      if (this._document) {
        var _interopRequireDefault = this._document.getEditor();
        _interopRequireDefault.beginTransaction();
        try {
          for (var GCore = 0; GCore < this._elements.length; ++GCore) {
            this._elements[GCore];
            var r = GTools.GElementEditor.getEditor(this._elements[GCore]);
            (r && r.applyPropertiesToParts(e, t)) || this._elements[GCore].setProperties(e, t);
          }
        } finally {
          _interopRequireDefault.commitTransaction(n);
        }
      } else console.warn('GAppearanceProperties: empty _document property');
    }

    _checkSyncState() {
      this._elements &&
      this._elements.length > 0 &&
      this._elements[0].hasProperty('sref') &&
      !this._elements[0].equalsStyle()
        ? this._panel.find('.g-style-sync').removeClass('g-disabled')
        : this._panel.find('.g-style-sync').addClass('g-disabled');
    }

    toString() {
      return '[Object GAppearanceProperties]';
    }

  }
  exports.exports = u;
}