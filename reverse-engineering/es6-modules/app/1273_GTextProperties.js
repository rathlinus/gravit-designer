/**
 * Webpack Module #1273
 * Type: class
 * Name: GTextProperties
 */

function (exports, module, require) {
  'use strict';
  (require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(168) /* polyfill_Array_reduce */,
    require(328) /* polyfill_Array_sort */,
    require(96) /* polyfill_JSON_stringify */,
    require(193) /* polyfill_Object_keys */,
    require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(71) /* polyfill_String_includes */,
    require(247) /* module_247 */,
    require(134) /* polyfill_String_startsWith */,
    require(4) /* stub_requires_668 */,
    require(322) /* stub_requires_669 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(169) /* stub_requires_683 */,
    require(97) /* stub_requires_684 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    a = require(15) /* GEditor */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    s = require(67) /* GRichTooltipConfig */,
    GProperties = require(123) /* GProperties */,
    GFontsProviderManager = require(255) /* GFontsProviderManager */,
    barrel_editor_actions = require(590) /* barrel_editor_actions */,
    GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
    GSystemDialog = require(44);
  const g = require(148) /* module */,
    { toCapitalize: h } = require(40) /* CollaborationMergeUtils */,
    { LISTS_FEATURE: f } = require(10);
  var m = '#2635#';
  const y = {
    None: {
      get label() {
        return GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.marker-none'));
      },
      value: 'none',
    },
    Bullet: {
      get label() {
        return GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.marker-bulleted'));
      },
      value: 'bulleted',
      types: [
        { icon: 'gravit-icon-bullets-1', value: GCore.GText.Markers.Bullet },
        { icon: 'gravit-icon-bullets-2', value: GCore.GText.Markers.Check },
        { icon: 'gravit-icon-bullets-3', value: GCore.GText.Markers.Square },
      ],
    },
    Number: {
      get label() {
        return GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.marker-numbered'));
      },
      value: 'numbered',
      types: [
        { icon: 'gravit-icon-numbers-1', value: GCore.GText.Markers.RomanDot },
        {
          icon: 'gravit-icon-numbers-2',
          value: GCore.GText.Markers.RomanBracket,
        },
        { icon: 'gravit-icon-numbers-3', value: GCore.GText.Markers.Number },
      ],
    },
  };
  class v extends GProperties {
    constructor() {
      super();
      ((this._text = []), (this._weightsAvailable = []));
    }

    _panel = null;
    _document = null;
    _text = null;
    _ownChange = false;
    _chooserElem = null;
    _openingInlineEditor = false;
    _weightsAvailable = null;
    _advancedSettings = null;
    _listTypeSettings = null;
    _advancedSettingsButton = null;
    _scriptBlock = null;
    _sizingBlock = null;
    _autoScrollBlock = null;

    init(e, t) {
      ((this._panel = e.addClass('text-properties-panel')),
        (this._advancedSettings = this._getAdvancedSettingsOverlayDiv()),
        (this._listTypeSettings = $('<div></div>')
          .addClass('list-type-settings')
          .append(
            $('<div></div>')
              .addClass('list-type-options')
              .append(
                Object.values(y).map((e) => {
                  let { label: t, value: n, types: GTools } = e;
                  return $('<div></div>')
                    .addClass('list-type-group')
                    .attr('value', n)
                    .append(
                      $('<div/>')
                        .addClass('list-type-group-header')
                        .append($('<span/>').addClass('gravit-icon-check'))
                        .append($('<span/>').text(t))
                    )
                    .on('click', GTools ? null : () => this._assignMarker(null))
                    .append(
                      $('<div/>')
                        .addClass('list-type-group-container')
                        .append(
                          GTools
                            ? GTools.map((e) => {
                                let { value: t, icon: n } = e;
                                return $('<div></div>')
                                  .addClass('list-type-option')
                                  .attr('value', t)
                                  .append($('<div/>').addClass(n))
                                  .on('click', (e) => {
                                    const t = $(e.target)
                                      .closest('.list-type-option')
                                      .attr('value');
                                    (gDesigner.stats('textproperties_change_list-type', t),
                                      this._assignMarker(t));
                                  });
                              })
                            : ''
                        )
                    );
                })
              )
          )
          .gOverlay({
            releaseOnClose: false,
            clazz: 'list-type-settings-overlay',
          })));
      var n = function (e) {
        var t = this;
        if ('_pm' === e)
          return $('<div></div>')
            .attr('data-property', e)
            .addClass('g-select')
            .append($('<span/>'))
            .on(
              'click',
              CollaborationMergeUtils.watchDog.trap(
                (e) => {
                  this._listTypeSettings.gOverlay('open', $(e.target));
                },
                null,
                (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
              )
            );
        if (0 === e.indexOf('typography')) {
          const n = e.substr('typography-'.length);
          return $('<button></button>')
            .addClass('g-button')
            .addClass('typography-button')
            .attr('data-property', e)
            .on(
              'click',
              CollaborationMergeUtils.watchDog.trap(
                (e) => {
                  (gDesigner.stats('textproperties_change_typography', n), t._toggleFormatting(n));
                },
                null,
                (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
              )
            )
            .append($('<span></span>').addClass('gravit-icon-text-typography-'.concat(n)));
        }
        if (0 === e.indexOf('_ttsc')) {
          const n = e.substr('_ttsc-'.length);
          return $('<button></button>')
            .addClass('g-button')
            .addClass('script-button')
            .attr('data-property', e)
            .on(
              'click',
              CollaborationMergeUtils.watchDog.trap(
                (e) => {
                  (gDesigner.stats('textproperties_change_typography', n),
                    t._assignProperty(
                      '_ttsc',
                      $(e.target).closest('button').hasClass('g-active') ? null : n
                    ));
                },
                null,
                (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
              )
            )
            .append(
              $('<span></span>').addClass('gravit-icon-text-typography-'.concat(n, 'script'))
            );
        }
        if ('_tlsc' === e) {
          var n = $('<select></select>').attr('data-property', '_tlsc');
          return (
            n.append(
              $('<option></option>')
                .attr('value', 'auto')
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.auto')))
            ),
            n.on('change', function (e) {
              (gDesigner.stats('textproperties_change_language-script', $(e.target).val()),
                t._assignProperty('_tlsc', $(e.target).val()));
            }),
            n
          );
        }
        if ('_tv' === e)
          return $('<select />')
            .attr('data-property', '_tv')
            .on(
              'change',
              CollaborationMergeUtils.watchDog.trap(
                (e) => {
                  var n = $(e.target).text();
                  (gDesigner.stats('textproperties_change_variation', n),
                    t._assignProperty('_tv', $(e.target).val()));
                },
                null,
                (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
              )
            );
        if (0 === e.indexOf('_ttrf-')) {
          var a = '',
            s = e.substr('_ttrf-'.length);
          switch (s) {
            case GCore.GStylable.TextTransformation.Uppercase:
              a = 'gravit-icon-text-transform-uppercase';
              break;
            case GCore.GStylable.TextTransformation.Lowercase:
              a = 'gravit-icon-text-transform-lowercase';
              break;
            case GCore.GStylable.TextTransformation.Capitalize:
              a = 'gravit-icon-text-transform-capitalize';
              break;
            case GCore.GStylable.TextTransformation.SmallCaps:
              a = 'gravit-icon-text-transform-smallcaps';
          }
          var GProperties = Object.keys(GCore.GStylable.TextTransformation).find(
            (e) => GCore.GStylable.TextTransformation[e] === s
          );
          return $('<button></button>')
            .addClass('g-button')
            .addClass('transformation-button')
            .attr('data-property', e)
            .on(
              'click',
              CollaborationMergeUtils.watchDog.trap(
                (e) => {
                  (gDesigner.stats(
                    'textproperties_change_transformation',
                    GProperties ? GProperties.toLowerCase() : ''
                  ),
                    t._assignProperty(
                      '_ttrf',
                      $(e.target).closest('button').hasClass('g-active') ? null : s
                    ));
                },
                null,
                (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
              )
            )
            .append($('<span></span>').addClass(a));
        }
        if (0 === e.indexOf('va-')) {
          a = '';
          switch ((barrel_editor_actions = e.substr('va-'.length))) {
            case GCore.GText.VerticalAlign.Top:
              a = 'gravit-icon-text-align-top';
              break;
            case GCore.GText.VerticalAlign.Middle:
              a = 'gravit-icon-text-align-middle';
              break;
            case GCore.GText.VerticalAlign.Bottom:
              a = 'gravit-icon-text-align-bottom';
          }
          return $('<button></button>')
            .addClass('g-button')
            .addClass('vertical-align')
            .attr('data-property', e)
            .on('click', function () {
              (gDesigner.stats(
                'textproperties_change_vertical-align',
                barrel_editor_actions === GCore.GText.VerticalAlign.Top
                  ? 'top'
                  : GCore.GText.VerticalAlign.Middle
                    ? 'middle'
                    : 'bottom'
              ),
                t._assignProperty(
                  'va',
                  $(this).hasClass('g-active') ? null : barrel_editor_actions
                ));
            })
            .append($('<span></span>').addClass(a));
        }
        if (0 === e.indexOf('_pal-')) {
          var barrel_editor_actions;
          a = '';
          switch ((barrel_editor_actions = e.substr('_pal-'.length))) {
            case GCore.GStylable.ParagraphAlignment.Left:
              a = 'gravit-icon-text-align-left';
              break;
            case GCore.GStylable.ParagraphAlignment.Center:
              a = 'gravit-icon-text-align-center';
              break;
            case GCore.GStylable.ParagraphAlignment.Right:
              a = 'gravit-icon-text-align-right';
              break;
            case GCore.GStylable.ParagraphAlignment.Justify:
              a = 'gravit-icon-text-justify';
          }
          return $('<button></button>')
            .addClass('g-button')
            .addClass('alignment-button')
            .attr('data-property', e)
            .on('click', function () {
              (gDesigner.stats(
                'textproperties_change_paragraph-align',
                barrel_editor_actions === GCore.GStylable.ParagraphAlignment.Left
                  ? 'left'
                  : barrel_editor_actions === GCore.GStylable.ParagraphAlignment.Right
                    ? 'right'
                    : barrel_editor_actions === GCore.GStylable.ParagraphAlignment.Justify
                      ? 'justify'
                      : barrel_editor_actions === GCore.GStylable.ParagraphAlignment.Center
                        ? 'center'
                        : 'unkn'
              ),
                t._assignProperty(
                  '_pal',
                  $(this).hasClass('g-active') ? null : barrel_editor_actions
                ));
            })
            .append($('<span></span>').addClass(a));
        }
        if ('aw' === e || 'ah' === e)
          return $('<div></div>')
            .attr('data-property', e)
            .append(
              $('<button></button>')
                .addClass('sizing-button-auto')
                .addClass('g-group-start g-button')
                .on('click', () => {
                  (gDesigner.stats('textproperties_change_auto-widthheight', 'auto'),
                    t._assignProperty(e, true));
                })
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.auto')))
            )
            .append(
              $('<button></button>')
                .addClass('sizing-button-fixed')
                .addClass('g-group-end g-button')
                .on('click', () => {
                  (gDesigner.stats('textproperties_change_auto-widthheight', 'fixed'),
                    t._assignProperty(e, false));
                })
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.fix')))
            );
        if ('_fc' === e)
          return $('<div></div>')
            .prop('disabled', true)
            .attr('data-property', '_fc')
            .attr('id', 'text-color')
            .gPatternChooser({ types: [GCore.GColor], hasOpacity: false })
            .on('chooseropen', function () {
              (t._document.getEditor().hideSelection(), (t._chooserElem = $(this)));
            })
            .on('chooserclose', function (e, n, GTools) {
              (t._document && t._document.getEditor().resetHideSelection(),
                (t._chooserElem = null));
            })
            .on(
              'patternchange',
              function (e, n, GCore, a, CollaborationMergeUtils) {
                for (var s = [], GProperties = 0; GProperties < this._text.length; GProperties++) {
                  var GFontsProviderManager = GTools.GElementEditor.getEditor(
                    this._text[GProperties]
                  );
                  s.push(GFontsProviderManager || this._text[GProperties]);
                }
                var barrel_editor_actions = null;
                CollaborationMergeUtils &&
                  (barrel_editor_actions = { chooserOn: true, textPattern: true });
                var GSettingChangedEvent = this._getProperty('_fc', s);
                (GSettingChangedEvent || (GSettingChangedEvent = this._getFontColor(s)),
                  t._assignProperty('_fc', n, a, barrel_editor_actions));
              }.bind(this)
            );
        if ('_tff' === e)
          return $('<input/>')
            .addClass('g-select')
            .attr('data-property', e)
            .attr('type', 'button')
            .gFontsButton({
              closeCallback: function () {
                t._document && t._document.getActiveWindow().getView().focus();
              },
              assignFontCallback: function (e) {
                t._assignFont(e);
              },
            });
        if ('_tfi' === e)
          return $('<div></div>').append(
            $('<input>')
              .attr('type', 'text')
              .attr('data-property', e)
              .addClass('g-select')
              .addClass('text-size')
              .on('change', function () {
                gDesigner.stats('textproperties_change_size');
                var n = $(this).gUnitBox('value'),
                  GTools = n ? n.toUnit(GCore.GLength.Unit.PT) : null;
                null === GTools || ('number' == typeof GTools && GTools >= 0)
                  ? t._assignProperty(e, GTools)
                  : t._updateProperties();
              })
              .gUnitBox({ source: 'text' })
          );
        if ('_tws' === e || '_tcs' === e)
          return $('<input>')
            .attr('type', 'text')
            .attr('data-property', e)
            .on('change', function () {
              '_tws' === e
                ? gDesigner.stats('textproperties_change_wordspacing')
                : gDesigner.stats('textproperties_change_charspacing');
              var n = t._document;
              if (n) {
                var GTools = n.getScene().stringToPoint($(this).val());
                null === GTools || 'number' == typeof GTools
                  ? t._assignProperty(e, GTools)
                  : t._updateProperties();
              }
            })
            .gInputBox();
        if ('style' === e)
          return $('<select></select>')
            .attr('data-property', e)
            .on('change', function () {
              gDesigner.stats('textproperties_choose_fontstyle');
              var e = $(this).val() || null;
              if (e) {
                var n = gDesigner.getWorkspace().getFontManager().getDefaultFont(),
                  GTools = e.split(m);
                GTools[0] = parseInt(GTools[0]) || 400;
                var GCore = [GTools[0], GTools[1]],
                  a = ['_tfw', '_tfs'];
                (GTools[2] &&
                  GTools[2].length &&
                  GTools[2] !== n.getFamily() &&
                  (a.push('_tff'), GCore.push(GTools[2])),
                  t._assignProperties(a, GCore));
              }
              t._document.getActiveWindow().getView().focus();
            });
        if (0 !== e.indexOf('tpth')) {
          if ('_plh' === e)
            return $('<div>')
              .addClass('text-line-height')
              .append(
                $('<input>')
                  .attr('type', 'text')
                  .attr('data-property', e)
                  .addClass('value')
                  .on('change', function () {
                    gDesigner.stats('textproperties_change_line-height');
                    var n = $(this).val(),
                      GTools = t._document.getScene(),
                      a = t._panel.find('button[data-property="_plh_unit"]').text();
                    if ('%' !== a) {
                      let e = GCore.GLength.parseEquation(n, GTools.getProperty('ut'));
                      e && (n = e.toUnit(GCore.GLength.Unit.PX));
                    } else n = GCore.GUtil.parseNumber(n);
                    null === n || n > 0 || ('%' !== a && 0 === n)
                      ? ('number' == typeof n && ('%' === a ? (n /= 100) : (n = String(n))),
                        t._assignProperty(e, n))
                      : t._updateProperties();
                  })
                  .gInputBox()
              )
              .append(
                $('<button>')
                  .addClass('g-flat')
                  .attr('data-property', '_plh_unit')
                  .addClass('text-unit')
                  .text('%')
                  .on('click', function () {
                    gDesigner.stats('textproperties_change_size');
                    var n = $(this).text(),
                      a = t._document.getScene(),
                      CollaborationMergeUtils = t._panel.find('input[data-property="_plh"]').val(),
                      s = t._document.getEditor();
                    if ('%' !== n) {
                      let e = GCore.GLength.parseEquation(
                        CollaborationMergeUtils,
                        a.getProperty('ut')
                      );
                      e && (CollaborationMergeUtils = e.toUnit(GCore.GLength.Unit.PX));
                    } else
                      CollaborationMergeUtils = GCore.GUtil.parseNumber(CollaborationMergeUtils);
                    if (null !== CollaborationMergeUtils && '%' === n) {
                      var GProperties = a.getProperty('ut') || 'px';
                      if (($(this).text(GProperties), 'number' == typeof CollaborationMergeUtils))
                        try {
                          s.beginTransaction();
                          for (
                            var GFontsProviderManager = 0;
                            GFontsProviderManager < t._text.length;
                            GFontsProviderManager++
                          ) {
                            var barrel_editor_actions =
                                GTools.GElementEditor.getEditor(t._text[GFontsProviderManager]) ||
                                t._text[GFontsProviderManager],
                              GSettingChangedEvent = (
                                ((CollaborationMergeUtils / 100) *
                                  (GSystemDialog =
                                    t._getProperty('_tfi', [barrel_editor_actions]) || 20) *
                                  4) /
                                3
                              ).toString();
                            barrel_editor_actions.setProperties([e], [GSettingChangedEvent]);
                          }
                        } finally {
                          s.commitTransaction(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                'GTextProperties',
                                'action.modify-text-properties'
                              )
                            )
                          );
                        }
                    } else if (
                      null !== CollaborationMergeUtils &&
                      ($(this).text('%'), 'number' == typeof CollaborationMergeUtils)
                    )
                      try {
                        s.beginTransaction();
                        for (
                          GFontsProviderManager = 0;
                          GFontsProviderManager < t._text.length;
                          GFontsProviderManager++
                        ) {
                          barrel_editor_actions =
                            GTools.GElementEditor.getEditor(t._text[GFontsProviderManager]) ||
                            t._text[GFontsProviderManager];
                          var GSystemDialog = t._getProperty('_tfi', [barrel_editor_actions]) || 20;
                          GSettingChangedEvent =
                            Math.round(
                              100 *
                                Math.max(CollaborationMergeUtils / ((4 * GSystemDialog) / 3), 0.01)
                            ) / 100;
                          barrel_editor_actions.setProperties([e], [GSettingChangedEvent]);
                        }
                      } finally {
                        s.commitTransaction(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey('GTextProperties', 'action.modify-text-properties')
                          )
                        );
                      }
                  })
              );
          if ('fontSet' === e)
            return $('<input/>')
              .attr('type', 'checkbox')
              .attr('data-property', e)
              .on('change', function (e) {
                gDesigner.stats('textproperties_change_set-of-fonts');
                var t = $(this).prop('checked');
                gDesigner.setSetting('font-set', t);
                var n = gContainer.getSystemFontsProvider();
                t
                  ? GFontsProviderManager.enableProviders([n])
                  : GFontsProviderManager.disableProviders([n]);
              });
          if ('sc' === e)
            return $('<label></label>')
              .append(
                $('<input>')
                  .addClass('auto-scale-checkbox')
                  .attr('type', 'checkbox')
                  .attr('data-property', e)
                  .on(
                    'change',
                    function (e) {
                      (gDesigner.stats('textproperties_scale_content'),
                        t._assignProperty('sc', $(e.target).is(':checked')));
                    }.bind(this)
                  )
              )
              .append(
                $('<span></span>').text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.scale-content'))
                )
              );
          if (0 === e.indexOf('decoration-')) {
            var GSettingChangedEvent = e.substr('decoration-'.length);
            return $('<button></button>')
              .addClass('g-button')
              .addClass('decoration-buttons')
              .attr('data-property', e)
              .attr(
                'data-title',
                h(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      'GTextProperties',
                      'text.decoration-'.concat(GSettingChangedEvent)
                    )
                  )
                )
              )
              .on('click', function () {
                (gDesigner.stats('textproperties_change_decoration', GSettingChangedEvent),
                  t._toggleFormatting(GSettingChangedEvent));
              })
              .append(
                $('<span></span>').addClass(
                  'gravit-icon-text-decoration-'.concat(GSettingChangedEvent)
                )
              );
          }
          if ('_pas' === e)
            return $('<div></div>')
              .addClass('text-paragraph-spacing')
              .append(
                $('<input>')
                  .attr('type', 'text')
                  .addClass('value')
                  .attr('data-property', e)
                  .on(
                    'click',
                    CollaborationMergeUtils.watchDog.trap(null, null, (t) => {
                      (t.stopPropagation(),
                        t.preventDefault(),
                        gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e));
                    })
                  )
                  .on(
                    'change',
                    CollaborationMergeUtils.watchDog.trap(
                      (n) => {
                        const GTools = t._document;
                        if (!GTools) return;
                        gDesigner.stats('textproperties_change_paragraph-spacing');
                        const a = t._advancedSettings
                          .find('button[data-property="_pas_unit"]')
                          .text();
                        let CollaborationMergeUtils = null;
                        if ('%' !== a) {
                          let e = GCore.GLength.parseEquation(
                            $(n.target).closest('input').val(),
                            GTools.getScene().getProperty('ut')
                          );
                          e && (CollaborationMergeUtils = e.toUnit(GCore.GLength.Unit.PX));
                        } else
                          CollaborationMergeUtils = GCore.GUtil.parseNumber(
                            $(n.target).closest('input').val()
                          );
                        null === CollaborationMergeUtils ||
                        ('number' == typeof CollaborationMergeUtils && CollaborationMergeUtils >= 0)
                          ? ('number' == typeof CollaborationMergeUtils &&
                              ('%' === a
                                ? (CollaborationMergeUtils /= 100)
                                : (CollaborationMergeUtils = String(CollaborationMergeUtils))),
                            t._assignProperty(e, CollaborationMergeUtils))
                          : t._updateProperties();
                      },
                      null,
                      (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
                    )
                  )
                  .gInputBox({ minValue: 0, allowEmptyValue: false })
              )
              .append(
                $('<button>')
                  .addClass('g-flat')
                  .addClass('unit')
                  .attr('data-property', '_pas_unit')
                  .text('px')
                  .on(
                    'click',
                    CollaborationMergeUtils.watchDog.trap(
                      (e) => {
                        const n = t._document;
                        if (!n) return;
                        const a = n.getScene(),
                          CollaborationMergeUtils = $(e.target).text(),
                          s = '%' === CollaborationMergeUtils ? a.getProperty('ut') || 'px' : '%';
                        (gDesigner.stats('textproperties_change_paragraph-spacing-unit', s),
                          $(e.target).text(s));
                        let GProperties = null;
                        if ('%' !== CollaborationMergeUtils) {
                          let e = GCore.GLength.parseEquation(
                            t._advancedSettings.find('input[data-property="_pas"]').val(),
                            a.getProperty('ut')
                          );
                          e && (GProperties = e.toUnit(GCore.GLength.Unit.PX));
                        } else
                          GProperties = GCore.GUtil.parseNumber(
                            t._advancedSettings.find('input[data-property="_pas"]').val()
                          );
                        if (!isNaN(GProperties)) {
                          const e = t._text.map((e) => GTools.GElementEditor.getEditor(e) || e),
                            n = t._getProperty('_tfi', e) || 20;
                          let GCore;
                          ((GCore =
                            '%' === s
                              ? Math.round(100 * parseFloat(GProperties / ((4 * n) / 3))) / 100
                              : String(((GProperties / 100) * n * 4) / 3)),
                            t._assignProperties(['_pas'], [GCore]));
                        }
                      },
                      null,
                      (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
                    )
                  )
              );
          if ('_pai' === e)
            return $('<input>')
              .attr('type', 'text')
              .attr('data-property', e)
              .on(
                'click',
                CollaborationMergeUtils.watchDog.trap(null, null, (t) => {
                  (t.stopPropagation(),
                    t.preventDefault(),
                    gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e));
                })
              )
              .on(
                'change',
                CollaborationMergeUtils.watchDog.trap(
                  (n) => {
                    const GTools = t._document;
                    if (!GTools) return;
                    gDesigner.stats('textproperties_change_paragraph-indent');
                    const GCore = GTools.getScene().stringToPoint(
                      $(n.target).closest('input').val()
                    );
                    null === GCore || ('number' == typeof GCore && GCore >= 0)
                      ? t._assignProperty(e, GCore)
                      : t._updateProperties();
                  },
                  null,
                  (t) => gDesigner.stats('textproperties_nonprotriespro_advanced-settings', e)
                )
              )
              .gInputBox({ minValue: 0, allowEmptyValue: false });
          if ('dir' === e)
            return $('<select></select>')
              .attr('data-property', 'dir')
              .append(
                $('<option></option>')
                  .attr('value', GCore.GTLDirectionTextTransformer.LTR)
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GTextProperties', 'text.orientation-ltr')
                    )
                  )
              )
              .append(
                $('<option></option>')
                  .attr('value', GCore.GTLDirectionTextTransformer.RTL)
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GTextProperties', 'text.orientation-rtl')
                    )
                  )
              )
              .append(
                $('<option></option>')
                  .attr('value', GCore.GTLDirectionTextTransformer.TTB)
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GTextProperties', 'text.orientation-ttb')
                    )
                  )
              )
              .on('change', function (e) {
                var n = '';
                switch (parseInt($(e.target).val())) {
                  case GCore.GTLDirectionTextTransformer.LTR:
                    n = 'ltr';
                    break;
                  case GCore.GTLDirectionTextTransformer.RTL:
                    n = 'rtl';
                    break;
                  case GCore.GTLDirectionTextTransformer.TTB:
                    n = 'ttb';
                    break;
                  case GCore.GTLDirectionTextTransformer.BTT:
                    n = 'btt';
                }
                (gDesigner.stats('textproperties_change_orientation', n),
                  t._assignProperty('dir', parseInt($(e.target).val())));
              });
          if ('_tlocl' === e) return this._createLanguageSelector();
          if ('_tstyls' === e) return this._createStylisticSetSelector();
          throw new Error('Unknown input property: ' + e);
        }
        return 'tpthd' === e
          ? $('<label></label>')
              .addClass('g-switch')
              .append(
                $('<input>')
                  .attr('type', 'checkbox')
                  .attr('data-property', e)
                  .on('change', function () {
                    (gDesigner.stats('textproperties_change_path-attachment', 'direction'),
                      t._assignProperty(
                        e,
                        $(this).is(':checked')
                          ? GCore.GTLPathTextTransformer.DIRECTION_OUTWARDS
                          : GCore.GTLPathTextTransformer.DIRECTION_INWARDS
                      ));
                  })
              )
              .append($('<div></div>'))
          : 'tpths' === e
            ? $('<label></label>')
                .addClass('g-switch')
                .append(
                  $('<input>')
                    .attr('type', 'checkbox')
                    .attr('data-property', e)
                    .on('change', function () {
                      (gDesigner.stats('textproperties_change_path-attachment', 'insideoutside'),
                        t._assignProperty(
                          e,
                          $(this).is(':checked')
                            ? GCore.GTLPathTextTransformer.OUTSIDE
                            : GCore.GTLPathTextTransformer.INSIDE
                        ));
                    })
                )
                .append($('<div></div>'))
            : 'tptho' === e
              ? $('<input>')
                  .attr('type', 'text')
                  .attr('data-property', e)
                  .on('change', function () {
                    gDesigner.stats('textproperties_change_path-attachment', 'offset');
                    var n = t._document.getScene().stringToPoint($(this).val());
                    null === n || 'number' == typeof n
                      ? t._assignProperty(e, n)
                      : t._updateProperties();
                  })
                  .gInputBox()
              : undefined;
      }.bind(this);
      ($('<div></div>')
        .addClass('typography-properties')
        .gPropertyRow({
          label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.typography')),
          columns: [
            {
              width: '100%',
              label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.typography')),
              content: $('<div></div>')
                .addClass('typography')
                .append(
                  n('_ttsc-' + GCore.GStylable.TypographyScript.Subscript)
                    .addClass('g-group-start')
                    .attr(
                      'data-title',
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GTextProperties', 'text.typography-subscript')
                      )
                    )
                )
                .append(
                  n('_ttsc-' + GCore.GStylable.TypographyScript.Superscript)
                    .addClass('g-group-end')
                    .attr(
                      'data-title',
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GTextProperties', 'text.typography-superscript')
                      )
                    )
                )
                .append(
                  n('typography-ligatures').attr(
                    'data-title',
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GTextProperties', 'text.typography-ligatures')
                    )
                  )
                )
                .append(
                  n('typography-fractions').attr(
                    'data-title',
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GTextProperties', 'text.typography-fractions')
                    )
                  )
                ),
            },
          ],
        })
        .appendTo(this._advancedSettings),
        $('<div></div>')
          .addClass('transform-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.transform')),
            columns: [
              {
                width: '100%',
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.transform')),
                content: $('<div></div>')
                  .append(
                    n('_ttrf-' + GCore.GStylable.TextTransformation.Uppercase)
                      .addClass('g-group-start')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GTextProperties', 'text.transform-uppercase')
                        )
                      )
                  )
                  .append(
                    n('_ttrf-' + GCore.GStylable.TextTransformation.Capitalize)
                      .addClass('g-group-element')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GTextProperties', 'text.transform-capitalize')
                        )
                      )
                  )
                  .append(
                    n('_ttrf-' + GCore.GStylable.TextTransformation.Lowercase)
                      .addClass('g-group-element')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GTextProperties', 'text.transform-lowercase')
                        )
                      )
                  )
                  .append(
                    n('_ttrf-' + GCore.GStylable.TextTransformation.SmallCaps)
                      .addClass('g-group-end')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GTextProperties', 'text.transform-smallcaps')
                        )
                      )
                  ),
              },
            ],
          })
          .appendTo(this._advancedSettings),
        f &&
          ($('<div></div>')
            .addClass('list-type-properties')
            .gPropertyRow({
              label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.list-type')),
              columns: [
                {
                  width: '100%',
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey('GTextProperties', 'text.list-type')
                  ),
                  content: n('_pm'),
                },
              ],
            })
            .appendTo(this._advancedSettings),
          $('<hr/>').appendTo(this._advancedSettings)),
        $('<div></div>')
          .addClass('paragraph-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.paragraph')),
            columns: [
              {
                width: '50%',
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey('GTextProperties', 'text.paragraph-indent')
                ),
                content: n('_pai'),
              },
              {
                width: '50%',
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey('GTextProperties', 'text.paragraph-spacing')
                ),
                content: n('_pas'),
              },
            ],
          })
          .appendTo(this._advancedSettings),
        $('<hr/>').appendTo(this._advancedSettings),
        $('<div></div>')
          .addClass('language-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.language')),
            columns: [{ width: '100%', content: n('_tlocl') }],
          })
          .appendTo(this._advancedSettings),
        $('<hr/>').appendTo(this._advancedSettings),
        $('<div></div>')
          .addClass('stylistic-set-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.stylisticset')),
            columns: [{ width: '100%', content: n('_tstyls') }],
          })
          .appendTo(this._advancedSettings),
        (this._advancedSettingsButton = this._getAdvancedSettingsButton().appendTo(t)));
      var a = $('<div/>').addClass('color-font').appendTo(e);
      ($('<div></div>')
        .addClass('font-color-properties')
        .gPropertyRow({
          columns: [
            { clazz: 'color-picker-button', padding: false, content: n('_fc') },
            { width: 'auto', content: n('_tff') },
          ],
        })
        .appendTo(a),
        $('<div></div>')
          .addClass('font-style-properties')
          .gPropertyRow({
            columns: [
              {
                clazz: 'color-title-label',
                content: $(
                  '<span>'.concat(
                    GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.color')),
                    '</span>'
                  )
                ).addClass('color-title'),
              },
              {
                width: 'auto',
                content: n('style'),
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.weight')),
              },
              {
                width: '25%',
                content: n('_tfi'),
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.size')),
              },
            ],
          })
          .appendTo(a),
        $('<hr/>').appendTo(e),
        $('<div></div>')
          .addClass('decoration-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.decoration')),
            columns: [
              { width: '25%', content: n('decoration-bold') },
              { width: '25%', content: n('decoration-italic') },
              { width: '25%', content: n('decoration-underline') },
              { width: '25%', content: n('decoration-strikeout') },
            ],
          })
          .appendTo(e),
        $('<hr/>').appendTo(e),
        $('<div></div>')
          .addClass('alignment-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.alignment')),
            columns: [
              {
                width: '100%',
                content: $('<div></div>')
                  .append(
                    n('_pal-' + GCore.GStylable.ParagraphAlignment.Left)
                      .addClass('g-group-start')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(new GCore.GLocaleKey('GAlignAction', 'title.align-left'))
                      )
                  )
                  .append(
                    n('_pal-' + GCore.GStylable.ParagraphAlignment.Center)
                      .addClass('g-group-element')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GAlignAction', 'title.align-center')
                        )
                      )
                  )
                  .append(
                    n('_pal-' + GCore.GStylable.ParagraphAlignment.Right)
                      .addClass('g-group-element')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(new GCore.GLocaleKey('GAlignAction', 'title.align-right'))
                      )
                  )
                  .append(
                    n('_pal-' + GCore.GStylable.ParagraphAlignment.Justify)
                      .addClass('g-group-end')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'action.justify'))
                      )
                  ),
              },
            ],
          })
          .appendTo(e),
        $('<div></div>')
          .addClass('vertical-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.vertical')),
            columns: [
              {
                width: 'auto',
                content: $('<div></div>')
                  .append(
                    n('va-' + GCore.GText.VerticalAlign.Top)
                      .addClass('g-group-start')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(new GCore.GLocaleKey('GAlignAction', 'title.align-top'))
                      )
                  )
                  .append(
                    n('va-' + GCore.GText.VerticalAlign.Middle)
                      .addClass('g-group-element')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GAlignAction', 'title.align-middle')
                        )
                      )
                  )
                  .append(
                    n('va-' + GCore.GText.VerticalAlign.Bottom)
                      .addClass('g-group-end')
                      .attr(
                        'data-title',
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GAlignAction', 'title.align-bottom')
                        )
                      )
                  ),
              },
            ],
          })
          .appendTo(e),
        $('<div></div>')
          .addClass('spacing-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.spacing')),
            columns: [
              {
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.char')),
                width: '30%',
                content: n('_tcs'),
              },
              {
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.word')),
                width: '30%',
                content: n('_tws'),
              },
              {
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.line')),
                width: '40%',
                content: n('_plh'),
              },
            ],
          })
          .appendTo(e),
        $('<hr/>').appendTo(e),
        (this._sizingBlock = $('<div></div>')
          .addClass('sizing-properties')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.sizing')),
            columns: [
              {
                width: '50%',
                content: n('aw'),
                label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.width')),
              },
              {
                width: '50%',
                content: n('ah'),
                label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.height')),
              },
            ],
          })
          .appendTo(e)),
        (this._scriptBlock = $('<div></div>')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.script')),
            columns: [
              { width: '50%', content: n('dir') },
              { width: '50%', content: n('_tlsc') },
            ],
          })
          .appendTo(this._panel)),
        (this._autoScrollBlock = $('<div></div>')
          .addClass('auto-scale-font')
          .attr('major-item-only', true)
          .gPropertyRow({ columns: [{ width: 'auto', content: n('sc') }] })
          .appendTo(this._panel)),
        $('<div></div>')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.on-path')),
            columns: [
              {
                width: '30%',
                content: n('tpths'),
                label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.outside')),
              },
              {
                width: '30%',
                content: n('tpthd'),
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.reverse')),
              },
              {
                width: '40%',
                content: n('tptho'),
                label: GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.distance')),
              },
            ],
          })
          .appendTo(e),
        e.find('button').each(function (e, t) {
          $(t).attr('tabindex', -1);
        }),
        this._reInitLayout(),
        gDesigner.addEventListener(GSettingChangedEvent, this._touchChanged, this));
    }

    _createLanguageSelector() {
      return $('<select/>')
        .attr('data-property', '_tlocl')
        .gPro()
        .on('mousedown', CollaborationMergeUtils.watchDog.trap())
        .on(
          'change',
          CollaborationMergeUtils.watchDog.trap((e) => {
            const module = $(e.target).closest('select').val();
            (this._assignProperties(['_tlocl'], [module || null]),
              gDesigner.stats('textproperties_change_language'));
          })
        );
    }

    _createStylisticSetSelector() {
      return $('<select/>')
        .attr('data-property', '_tstyls')
        .gPro()
        .on('mousedown', CollaborationMergeUtils.watchDog.trap())
        .on(
          'change',
          CollaborationMergeUtils.watchDog.trap((e) => {
            const module = $(e.target).closest('select').val();
            (this._assignProperties(['_tstyls'], [module || null]),
              gDesigner.stats('textproperties_change_stylistic-set'));
          })
        );
    }

    openEyeDropper(e, t) {
      this._panel.find('[data-property="_fc"]').gPatternChooser('openEyeDropper', e, t);
    }

    _getAdvancedSettingsOverlayDiv() {
      return $('<div></div>').gOverlay({
        releaseOnClose: false,
        clazz: gDesigner.isEnabledProFeatures()
          ? 'g-overlay-advanced-setting'
          : 'dialog-expired-pro g-overlay-advanced-setting',
      });
    }

    _getAdvancedSettingsButton() {
      var e = gDesigner.getLicense();
      return $('<button></button>')
        .attr('data-action', 'text-settings')
        .attr(
          'data-title',
          GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.advanced-text-settings'))
        )
        .append($('<span></span>').addClass('gravit-icon-settings'))
        .on('click', (e) => {
          (gDesigner.stats('textproperties_open_advanced-settings'),
            this._advancedSettings.gOverlay('open', $(e.target).closest('button')));
        })
        .gPro()
        .gRichTooltip(
          s.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GTextProperties', 'text.advanced-properties-icon-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                'GTextProperties',
                'text.advanced-properties-icon-tooltip-description'
              )
            ),
            isPro: !gDesigner.isEnabledProFeatures() || !(e.isPro() && !e.isExpired()),
            learnMore: '',
          })
        );
    }

    update(e, t, n) {
      if (this._ownChange) return true;
      if (
        (this._chooserElem && this._chooserElem.gPatternChooser('close'),
        this._document &&
          (this._document
            .getScene()
            .removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChange
            ),
          this._document
            .getEditor()
            .removeEventListener(GTools.GEditor.InlineEditorEvent, this._inlineEditorEvent),
          this._document
            .getEditor()
            .removeEventListener(GTools.GEditor.HotkeyEvent, this._hotKeyEvent, this),
          gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged),
          (this._document = null)),
        (this._text = []),
        e)
      ) {
        for (
          var a = false, CollaborationMergeUtils = 0;
          CollaborationMergeUtils < t.length;
          ++CollaborationMergeUtils
        )
          t[CollaborationMergeUtils] instanceof GCore.GText
            ? this._text.push(t[CollaborationMergeUtils])
            : t[CollaborationMergeUtils] instanceof GCore.GStyle &&
              t[CollaborationMergeUtils].getProperty('_sdf') ===
                GCore.GObject.getTypeId(GCore.GText) &&
              (this._text.push(t[CollaborationMergeUtils]), (a = true));
        if ((this._text.length && this._text.length === t.length) || a)
          return (
            (this._document = e),
            this._document
              .getScene()
              .addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            this._document
              .getEditor()
              .addEventListener(GTools.GEditor.InlineEditorEvent, this._inlineEditorEvent, this),
            this._document
              .getEditor()
              .addEventListener(GTools.GEditor.HotkeyEvent, this._hotKeyEvent, this),
            gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
            this._updateProperties(n),
            this._advancedSettingsButton.css('display', ''),
            true
          );
      }
      return (this._advancedSettingsButton.css('display', 'none'), false);
    }

    _settingChanged(e) {
      if ('font-set' === e.key) {
        var module = this._panel.find('input[data-property="fontSet"]');
        module.length &&
          module.prop('checked') !== !!e.newValue &&
          module.prop('checked', !!e.newValue);
      } else 'decimals_num' === e.key && this._updateProperties();
    }

    _touchChanged(e) {
      'touch' === e.key && this._reInitLayout();
    }

    _reInitLayout() {
      gDesigner.isTouchEnabled()
        ? (this._autoScrollBlock.insertAfter(this._sizingBlock),
          this._autoScrollBlock.find('.auto-scale-checkbox').gCheckboxSlider())
        : (this._autoScrollBlock.insertAfter(this._scriptBlock),
          this._autoScrollBlock.find('.auto-scale-checkbox').gCheckboxSlider('unmount'));
    }

    _afterPropertiesChange(e) {
      const module = this._text.length > 0 && this._text[this._text.length - 1];
      !e.temporary &&
        module &&
        (module === e.node ||
          module instanceof GCore.GStyle ||
          (module instanceof GCore.GText && module.getContent() === e.node)) &&
        (this._updateProperties(),
        module instanceof GCore.GText &&
          module.hasEmbeddedFonts() &&
          this._document.getEditor().closeInlineEditor());
    }

    _hotKeyEvent(e) {
      const module = { B: 'bold', I: 'italic', U: 'underline', S: 'strikeout' },
        [require, GTools, ...i] = e.keys;
      !require ||
        require !== a.GKey.Constant.CONTROL ||
        !(GTools in module) ||
        (GCore && GCore.length) ||
        gDesigner.stats('textproperties_hotkey_change-decoration', module[GTools]);
    }

    _inlineEditorEvent(e) {
      switch (e.type) {
        case GTools.GEditor.InlineEditorEvent.Type.AfterOpen:
        case GTools.GEditor.InlineEditorEvent.Type.AfterClose:
        case GTools.GEditor.InlineEditorEvent.Type.SelectionChanged:
          this._updateProperties();
          break;
        case GTools.GEditor.InlineEditorEvent.Type.TryOpen:
          this._tryOpenInlineEditor();
          break;
        case GTools.GEditor.InlineEditorEvent.Type.BeforeClose:
        case GTools.GEditor.InlineEditorEvent.Type.TextEdited:
          this._tryModifyingInitialFont(e.type, e.data && e.data.wasModifiedBefore);
      }
    }

    _tryModifyingInitialFont(e, t) {
      if (this._document && this._text && 1 === this._text.length) {
        var require = this._text[0];
        if (!require.getProperty('_we')) {
          var a = require instanceof GCore.GText && require.getTLCore();
          if (
            a &&
            ((e === GTools.GEditor.InlineEditorEvent.Type.BeforeClose && a.getWasEdited()) ||
              (e === GTools.GEditor.InlineEditorEvent.Type.TextEdited && !t))
          ) {
            var CollaborationMergeUtils = a.getDocumentRange().plainText(),
              s =
                GFontsProviderManager.getProviderInstance(
                  barrel_editor_actions
                ).getDefaultFamilyForString(CollaborationMergeUtils),
              GProperties =
                gDesigner.getWorkspace() &&
                gDesigner.getWorkspace().getFontManager() &&
                gDesigner.getWorkspace().getFontManager().getDefaultFont() &&
                gDesigner.getWorkspace().getFontManager().getDefaultFont().getFamily();
            if (s && GProperties && GProperties !== s) {
              var GSettingChangedEvent =
                GCore.GOpenTypeFont.getDirectionForString(CollaborationMergeUtils);
              GSettingChangedEvent !== GCore.GTLDirectionTextTransformer.LTR
                ? require.setProperties(['_tff', 'dir'], [s, GSettingChangedEvent])
                : require.setProperty('_tff', s);
            }
          }
        }
      }
    }

    _tryOpenInlineEditor() {
      if (this._document && this._text && 1 === this._text.length && !this._openingInlineEditor) {
        var exports = this._text[0];
        exports.isFakeText() &&
          GSystemDialog.confirm(
            GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.edit')),
            (t) => {
              if (t) {
                (GTools.GEditor.tryRunTransaction(
                  exports,
                  () => {
                    exports.replaceFonts(
                      gDesigner.getWorkspace().getFontManager().getDefaultFont(),
                      exports.hasEmbeddedFonts()
                    );
                  },
                  'Replace fonts'
                ),
                  (this._openingInlineEditor = true));
                try {
                  this._document
                    .getEditor()
                    .openInlineEditor(exports, this._document.getActiveWindow().getView());
                } finally {
                  this._openingInlineEditor = false;
                }
              }
            },
            GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'no')),
            GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'yes'))
          );
      }
    }

    _intersectArrays(e, t) {
      return null === e
        ? t
        : null === t
          ? e
          : e.filter(function (e) {
              return -1 !== t.indexOf(e);
            });
    }

    _getFormatting(e, t) {
      const require = t.length;
      if (0 === require) return null;
      const a = function (t) {
        let require;
        if (
          (t instanceof GTools.GTextEditor
            ? (require = t.getElement())
            : t instanceof GCore.GText && (require = t),
          require)
        ) {
          const t = require.getTLCore();
          if (t) {
            let GCore;
            const a = GTools.GElementEditor.getEditor(require);
            if (((GCore = a && a.isInlineEdit() ? t.selectedRange() : t.getDocumentRange()), GCore))
              return GCore.getFormatting()[e];
          }
        }
        return null;
      };
      let CollaborationMergeUtils = a(t[0]);
      for (let e = 1; e < require; e++) if (a(t[e]) !== CollaborationMergeUtils) return null;
      return CollaborationMergeUtils;
    }

    _getProperty(e, t, n) {
      var GTools = t.length;
      if (0 == GTools) return null;
      for (var GCore = t[0].getProperty(e), a = 1; a < GTools; a++)
        if (t[a].getProperty(e) !== GCore) return null;
      return GCore || !isNaN(GCore) ? GCore : 3 === arguments.length ? n : GCore;
    }

    _getFontColor(e) {
      var t = e[0] instanceof GTools.GElementEditor ? e[0].getElement() : e[0];
      if (!(t && t instanceof GCore.GText)) return null;
      var n = t.getTLCore().getRichContent();
      return n && n.length ? t._getGravitValue('fontColor', n[0].fontColor) : null;
    }

    async _updateProperties(e) {
      var t,
        n = (ye = gDesigner.getWorkspace().getFontManager()).getDefaultFont(),
        a = null,
        CollaborationMergeUtils = null;
      if (!n) return;
      t = [];
      for (var s = 0; s < this._text.length; s++) {
        var GProperties = GTools.GElementEditor.getEditor(this._text[s]);
        t.push(GProperties || this._text[s]);
      }
      var GFontsProviderManager = this._panel.find('input[data-property="fontSet"]');
      GFontsProviderManager.length &&
        GFontsProviderManager.prop('checked', gDesigner.getSetting('font-set'), false);
      var barrel_editor_actions = this._getFormatting('underline', t) || null,
        GSettingChangedEvent = this._getFormatting('strikeout', t) || null,
        GSystemDialog = this._getFormatting('fractions', t) || false,
        h = this._getFormatting('listMarker', t) || null,
        f = this._getProperty('_pai', t, GCore.GStylable.PropertySetInfo.P.geometryProperties._pai),
        v = this._getProperty('_pas', t, GCore.GStylable.PropertySetInfo.P.geometryProperties._pas),
        _ = (this._getProperty('_tv', t), this._getProperty('_tlsc', t)),
        b = this._getProperty('_ttsc', t),
        w = this._getProperty('_ttrf', t) || null,
        C = this._getProperty('_tfw', t) || '',
        x = this._getProperty('_tfs', t) || '',
        S = this._getProperty('aw', t) || false,
        E = this._getProperty('ah', t) || false,
        A = this._getProperty('sc', t) || false,
        T = this._getProperty('va', t) || '',
        G = this._getProperty('_tfi', t),
        P = this._getProperty('_fc', t),
        D = this._getProperty('_tws', t),
        L = this._getProperty('_tcs', t),
        I = (this._getProperty('_fop', t), this._getProperty('_pal', t)),
        k = this._getProperty('_plh', t),
        O = this._getProperty('tpthd', t),
        F = this._getProperty('tpths', t),
        R = this._getProperty('tptho', t),
        M = this._getProperty('dir', t),
        N = this._getProperty('_tlocl', t),
        B = this._getProperty('_tstyls', t),
        U = this._getFormatting('ligatures', t);
      ((U = 'auto' === U ? !L : !!U), P || (P = this._getFontColor(t)));
      var j = this._document && this._document.getEditor(),
        K = j && j.isInlineEditing() && j.getCurrentInlineEditorNode() instanceof GCore.GText,
        V = t.every(function (e) {
          return e.hasPathAttached && e.hasPathAttached();
        });
      (this._advancedSettings.find('[data-property^="_ttsc"]').each(function (e, t) {
        var n = $(t),
          GTools = n.attr('data-property').substr('_ttsc-'.length);
        n.toggleClass('g-active', b === GTools);
      }),
        this._advancedSettings.find('[data-property^="_ttrf"]').each(function (e, t) {
          var n = $(t),
            GTools = n.attr('data-property').substr('_ttrf-'.length);
          n.toggleClass('g-active', w === GTools);
        }),
        this._advancedSettings
          .find('[data-property="_pai"]')
          .gInputBox(
            'value',
            null !== f
              ? this._document
                  .getScene()
                  .pointToString(f, this._document.getScene().getOptimalDecimalsCount())
              : ''
          ));
      const H = this._advancedSettings.find('button[data-property="_pas_unit"]');
      if ('number' == typeof v)
        (H.text('%'),
          this._advancedSettings
            .find('[data-property="_pas"]')
            .val(
              GCore.GUtil.formatNumber(100 * v, this._document.getScene().getOptimalDecimalsCount())
            ));
      else if ('string' == typeof v) {
        const e = this._document.getScene();
        (H.text(e.getProperty('ut') || 'px'),
          this._advancedSettings
            .find('[data-property="_pas"]')
            .val(e.pointToString(v, e.getOptimalDecimalsCount())));
      } else this._advancedSettings.find('[data-property="_pas"]').val('');
      var W = T || GCore.GText.VerticalAlign.Top,
        z = this._panel.find('button[data-property^="va"]');
      (z.each(function (e, t) {
        var n = $(t);
        n.prop('disabled', K || V).toggleClass('g-active', n.attr('data-property') === 'va-' + W);
      }),
        z.closest('.g-property-row').css('display', V || E || K ? 'none' : ''),
        this._panel.find('[data-property="ah"] button').each((e, t) => {
          var n = $(t);
          n.prop('disabled', K).toggleClass('g-active', n.is(':first-child') === E);
        }));
      var q = this._panel.find('[data-property="aw"] button');
      q.each((e, t) => {
        var n = $(t);
        n.prop('disabled', K).toggleClass('g-active', n.is(':first-child') === S);
      });
      var Y = this._panel.find('select[data-property="dir"]');
      (Y.prop('disabled', K),
        K || Y.val(M),
        this._panel.find('[data-property="sc"]').prop('checked', A),
        q.closest('.g-property-row').css('display', V ? 'none' : ''),
        this._panel
          .find('input[data-property="tpthd"]')
          .prop('checked', O === GCore.GTLPathTextTransformer.DIRECTION_OUTWARDS),
        this._panel
          .find('input[data-property="tpths"]')
          .prop('checked', F === GCore.GTLPathTextTransformer.OUTSIDE),
        this._panel
          .find('input[data-property="tptho"]')
          .val(R)
          .closest('.g-property-row')
          .css('display', V ? '' : 'none'));
      var X = function () {
          setTimeout(this._updateProperties.bind(this), 1);
        }.bind(this),
        Q = this._panel.find('input[data-property="_tff"]'),
        J = Q.gFontsButton('getFontList'),
        Z = null,
        ee = true,
        te = true;
      let ne, oe;
      for (s = 0; s < t.length; s++) {
        const e = t[s];
        let a;
        if (
          ((a = e instanceof GTools.GTextEditor ? e.getFonts() : [e.getProperty('_tff')]),
          1 == t.length)
        ) {
          var ie = e instanceof GTools.GTextEditor ? e.getElement() : e;
          if (ie instanceof GCore.GText) {
            var ae = ie.hasFontsToResolve();
            if (ae && ae.length && ie.isFakeText()) {
              var re = ae[0].getFamily();
              re && (Z = re);
            }
          }
        }
        for (var se = 0; se < a.length; se++) {
          let e,
            t = a[se];
          if (
            (t
              ? t === n.getFamily()
                ? (e = t)
                : ((e = J.gFontsPanel('fontDisplayName', t, X)),
                  undefined === e && ((X = null), (e = t)))
              : ((t = ''), (e = t)),
            undefined === ne)
          )
            ne = e;
          else if (ne !== e) {
            ((ne = ''), (ee = false), (te = false));
            break;
          }
          undefined === oe ? (oe = t) : oe !== t && ((te = false), (oe = ''));
        }
      }
      for (s = 0; s < t.length; s++) {
        var le = null,
          ce = null;
        let e;
        e =
          t[s] instanceof GTools.GTextEditor
            ? t[s].getFonts()
            : [t[s].getProperty('_tff') || n.getFamily()];
        for (se = 0; se < e.length; se++) {
          var de = e[se];
          let t;
          (de === n.getFamily()
            ? ((le = ye.getDefaultFontWeights()),
              (le = GCore.GUtil.unique(le)),
              (ce = le.map(function (e) {
                return {
                  weight: e,
                  styles: ye
                    .getDefaultFontStyles()
                    .map((e) => e + m + (ee ? n.getFamily() : '') + m),
                };
              })))
            : J &&
              (undefined === (le = await J.gFontsPanel('weightsForFont', de, X)) && (X = null),
              (le = le || []),
              (le = GCore.GUtil.unique(le)),
              (ce = le.map(function (e) {
                for (
                  var t = J.gFontsPanel('stylesForWeight', e, de),
                    n = J.gFontsPanel('subfamiliesForWeight', e, de),
                    GTools = 0;
                  GTools < n.length;
                  GTools++
                )
                  t[GTools] =
                    t[GTools] +
                    m +
                    (ee ? n[GTools].realName : '') +
                    m +
                    (n[GTools].subFamily || '');
                return { weight: e, styles: t };
              }))),
            (a = GCore.GUtil.unique(this._intersectArrays(a, le))),
            CollaborationMergeUtils
              ? ((t = CollaborationMergeUtils),
                (t = t.filter((e) => {
                  if (a.indexOf(e.weight) >= 0) {
                    var t = ce.find((t) => t.weight === e.weight);
                    if (!t) return false;
                    var n = [];
                    if (
                      ((e.styles = e.styles.filter((e) => {
                        var GTools = e.split(m)[0];
                        if (GTools && GTools.length) {
                          var GCore = t.styles.find((e) => {
                            if (e.startsWith(GTools)) return true;
                          });
                          if (GCore)
                            return GCore !== e ? (n.push(GTools + m + m), true) : (n.push(e), true);
                        }
                      })),
                      (e.styles = n),
                      e.styles.length)
                    )
                      return true;
                  }
                  return false;
                })))
              : (t = ce.filter((e) => a.indexOf(e.weight) >= 0)),
            (CollaborationMergeUtils = t));
        }
      }
      (Z ? Q.val(Z) : Q.val(ne),
        Q[0] === document.activeElement && Q[0].select(),
        this._panel
          .find('input[data-property="_tfi"]')
          .gUnitBox({
            unit:
              this._document && this._document.getScene().$ut === GCore.GLength.Unit.PX
                ? GCore.GLength.Unit.PX
                : GCore.GLength.Unit.PT,
            list: [6, 7, 8, 9, 10, 11, 12, 14, 18, 21, 24, 36, 48, 60, 72],
            source: 'text',
          })
          .gUnitBox('value', null !== G ? new GCore.GLength(G, GCore.GLength.Unit.PT) : null),
        this._panel.find('[data-property="_fc"]').gPatternChooser('value', P));
      var ue = this._panel.find('select[data-property="style"]');
      (ue.empty(),
        (CollaborationMergeUtils && CollaborationMergeUtils.length) ||
          (CollaborationMergeUtils = [{ weight: 400, styles: [GCore.GFont.Style.Normal] }]),
        (a && a.length) || (a = [400]));
      for (s = 100; s <= 900; s += 100)
        if (a.indexOf(s) >= 0) {
          for (var pe = null, ge = 0; ge < CollaborationMergeUtils.length; ge++)
            if (CollaborationMergeUtils[ge].weight === s) {
              pe = CollaborationMergeUtils[ge].styles;
              break;
            }
          for (ge = 0; pe && ge < pe.length; ge++) {
            let e;
            var he = pe[ge].split(m);
            ((e =
              he[0] === GCore.GFont.Style.Italic
                ? GCore.GLocale.get(GCore.GFont.WeightNameItalic[s])
                : GCore.GLocale.get(GCore.GFont.WeightName[s])),
              he[2] && he[2].length && 0 != e.indexOf(he[2]) && (e = he[2] + ' ' + e));
            var fe = s.toString() + m + he[0] + m + (he[1] || '');
            $('<option></option>').attr('value', fe).text(e).appendTo(ue);
          }
        }
      (this._advancedSettings
        .find('[data-property="_ttrf-'.concat(GCore.GStylable.TextTransformation.SmallCaps, '"]'))
        .prop('disabled', false),
        this._advancedSettings
          .find('[data-property="typography-fractions"]')
          .prop('disabled', false),
        this._advancedSettings
          .find('[data-property="typography-ligatures"]')
          .toggleClass('g-active', true === U),
        this._advancedSettings
          .find('[data-property="typography-fractions"]')
          .toggleClass('g-active', true === GSystemDialog));
      var me = this._panel.find('select[data-property="_tlsc"]');
      (me.empty(),
        me.append(
          $('<option></option>')
            .attr('value', 'auto')
            .text(GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.auto')))
        ));
      var ye,
        ve = (ye = gDesigner.getWorkspace().getFontManager()).getFont(
          (te && t[0] && t[0].getProperty('_tff')) || n.getFamily(),
          x,
          C
        );
      if (ve.isResolved()) {
        ve.hasFeature(GCore.GFont.Features.SmallCaps) ||
          this._advancedSettings
            .find(
              '[data-property="_ttrf-'.concat(GCore.GStylable.TextTransformation.SmallCaps, '"]')
            )
            .prop('disabled', true);
        var _e = ve.getAvailableScripts();
        for (s = 0; s < _e.length; s++) {
          var be = _e[s];
          if (be) {
            var we = be.toLowerCase().split('');
            ((we[0] = we[0].toUpperCase()),
              (be = we.join('')),
              me.append(
                $('<option></option>')
                  .attr('value', _e[s])
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GTextProperties', 'text.'.concat(be.toLowerCase())),
                      be
                    )
                  )
              ));
          }
        }
      }
      ([
        ...new Set(
          t
            .map((e) => {
              let t = [],
                n = e.getProperty('_tff'),
                a = e.getProperty('_tfs'),
                CollaborationMergeUtils = e.getProperty('_tfw');
              if (e instanceof GTools.GTextEditor && !n) {
                const GTools = e.getElement().getContent();
                if (GTools) {
                  const s = GCore.GText.PropertyMapping._tff,
                    GProperties = GCore.GText.PropertyMapping._tfs,
                    GFontsProviderManager = GCore.GText.PropertyMapping._tfw;
                  t = GTools.map(
                    (t) => (
                      (n = e.getElement()._getGravitValue(s, t[s])),
                      (a = e.getElement()._getGravitValue(GProperties, t[GProperties])),
                      (CollaborationMergeUtils = e
                        .getElement()
                        ._getGravitValue(GFontsProviderManager, t[GFontsProviderManager])),
                      n && a && CollaborationMergeUtils
                        ? ye.getFont(n, a, CollaborationMergeUtils, false)
                        : null
                    )
                  ).filter((e) => !!e);
                }
              } else
                n &&
                  a &&
                  CollaborationMergeUtils &&
                  (t = [ye.getFont(n, a, CollaborationMergeUtils, false)]);
              return t;
            })
            .reduce((e, t) => e.concat(t), [])
        ),
      ].every((e) => e && e.isResolved() && e.hasFeature(GCore.GFont.Features.Fractions)) ||
        this._advancedSettings
          .find('[data-property="typography-fractions"]')
          .prop('disabled', true),
        me.val(_));
      let Ce = ue.val();
      (ue.val(C + m + x + m + (te ? (t[0] || n).getProperty('_tff') || n.getFamily() : '')),
      ue.val()) ||
        (this._text.some(
          (e) =>
            e instanceof GCore.GText &&
            (g.multipleValues ===
              e.getTLCore().getDocumentRange().getFormatting()[GCore.GText.PropertyMapping._tfw] ||
              g.multipleValues ===
                e.getTLCore().getDocumentRange().getFormatting()[GCore.GText.PropertyMapping._tfs])
        )
          ? ($('<option></option>')
              .attr('value', 'mixed')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.mixed')))
              .appendTo(ue),
            ue.val('mixed'))
          : ue.val(Ce));
      let xe = a.indexOf(GCore.GFont.Weight.Bold) >= 0;
      ((C && parseInt(C) === GCore.GFont.Weight.Bold) ||
        (x &&
          x === GCore.GFont.Style.Italic &&
          (xe = CollaborationMergeUtils.some((e) => {
            let { weight: t, styles: n } = e;
            return (
              t === GCore.GFont.Weight.Bold &&
              n.some((e) => 0 === e.indexOf(GCore.GFont.Style.Italic))
            );
          }))),
        this._panel
          .find('[data-property="decoration-bold"]')
          .toggleClass('g-active', xe && !!C && parseInt(C) === GCore.GFont.Weight.Bold)
          .prop('disabled', !xe));
      const Se = CollaborationMergeUtils.some((e) => {
        let { weight: t, styles: n } = e;
        return (
          t === parseInt(C || GCore.GFont.Weight.Regular) &&
          n.some((e) => 0 === e.indexOf(GCore.GFont.Style.Italic))
        );
      });
      (this._panel
        .find('[data-property="decoration-italic"]')
        .toggleClass('g-active', Se && !!x && x === GCore.GFont.Style.Italic)
        .prop('disabled', !Se),
        this._panel
          .find('[data-property="decoration-underline"]')
          .toggleClass('g-active', 1 == barrel_editor_actions),
        this._panel
          .find('[data-property="decoration-strikeout"]')
          .toggleClass('g-active', 1 == GSettingChangedEvent),
        this._panel
          .find('input[data-property="_tws"]')
          .val(
            null !== D
              ? this._document
                  .getScene()
                  .pointToString(D, this._document.getScene().getOptimalDecimalsCount())
              : '0'
          ),
        this._panel
          .find('input[data-property="_tcs"]')
          .val(
            null !== L
              ? this._document
                  .getScene()
                  .pointToString(L, this._document.getScene().getOptimalDecimalsCount())
              : '0'
          ));
      var Ee = I || GCore.GStylable.ParagraphAlignment.Left,
        Ae = this._panel.find('button[data-property^="_pal"]');
      (Ae.each(function (e, t) {
        var n = $(t);
        n.toggleClass('g-active', n.attr('data-property') === '_pal-' + Ee);
      }),
        Ae.closest('.g-property-row').css('display', V ? 'none' : ''));
      var Te = k,
        Ge = this._panel.find('button[data-property="_plh_unit"]');
      if ('number' == typeof Te)
        (Ge.text('%'),
          this._panel.find('input[data-property="_plh"]').val(GCore.GUtil.formatNumber(100 * Te)));
      else if ('string' == typeof Te || Te instanceof String) {
        const e = this._document.getScene();
        var Pe = e.getProperty('ut');
        (Ge.text(Pe || 'px'),
          this._panel
            .find('input[data-property="_plh"]')
            .val(e.pointToString(k, e.getOptimalDecimalsCount())));
      } else this._panel.find('input[data-property="_plh"]').val('');
      if (
        (e &&
          (e.evtType == GTools.GEditor.ModifiedEvent.Type.Undo ||
            e.evtType == GTools.GEditor.ModifiedEvent.Type.Redo) &&
          e.chooserOn &&
          e.textPattern &&
          this._panel.find('[data-property="_fc"]').find('.preview').trigger('click'),
        (this._weightsAvailable = a),
        this._listTypeSettings.find('.list-type-group.g-selected').removeClass('g-selected'),
        this._listTypeSettings.find('.list-type-option.g-selected').removeClass('g-selected'),
        this._advancedSettings.find('[data-property="_pm"] > span').text(''),
        'string' == typeof h)
      ) {
        const e = Object.values(y).find((e) => {
          let { types: t = [] } = e;
          return t.find((e) => {
            let { value: t } = e;
            return t === h;
          });
        });
        (e && this._advancedSettings.find('[data-property="_pm"] > span').text(e.label),
          this._listTypeSettings
            .find('.list-type-option[value="'.concat(h, '"]'))
            .addClass('g-selected')
            .closest('.list-type-group')
            .addClass('g-selected'));
      } else
        null == h &&
          (this._advancedSettings.find('[data-property="_pm"] > span').text(y.None.label),
          this._listTypeSettings
            .find('.list-type-group[value="'.concat(y.None.value, '"]'))
            .addClass('g-selected'));
      (this._updateLanguageSelector(ve, _, N), this._updateStylisticSetSelector(ve, _, B));
    }

    _updateLanguageSelector(e, t, n) {
      const GTools = this._advancedSettings
        .find('select[data-property="_tlocl"]')
        .empty()
        .attr('disabled', true)
        .addClass('g-disabled');
      if (!e.isResolved() || !e.hasFeature(GCore.GFont.Features.LocalizedForm)) return;
      let a = null;
      t && 'auto' !== t && (a = GCore.GOpenTypeFont.scriptNameToOpenTypeScriptTagString(t));
      const CollaborationMergeUtils = e.getAvailableLanguageSystemTags(a);
      if (CollaborationMergeUtils && 0 !== CollaborationMergeUtils.length)
        if (
          (GTools.attr('disabled', false).removeClass('g-disabled'),
          GTools.append(
            $('<option/>')
              .attr('value', '')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.default')))
          ),
          GTools.append(
            CollaborationMergeUtils.map((e) => {
              const t = GCore.GOpenTypeFont.openTypeLanguageSystemTagStringToBCP47(e);
              return {
                name: GCore.GLocale.get(
                  new GCore.GLocaleKey('GBCP47LanguageTags', 'text.lang.'.concat(t))
                ),
                tag: e,
              };
            })
              .sort((e, t) => e.name.localeCompare(t.name))
              .map((e) => {
                let { name: t, tag: n } = e;
                return $('<option/>').attr('value', n).text(t);
              })
          ),
          n)
        )
          GTools.val(n);
        else {
          this._hasMultipleLanguages() &&
            (GTools.append(
              $('<option/>')
                .attr('value', 'mixed')
                .attr('hidden', true)
                .attr('disabled', true)
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.mixed')))
            ),
            GTools.val('mixed'));
        }
    }

    _updateStylisticSetSelector(e, t, n) {
      const GTools = this._advancedSettings
        .find('select[data-property="_tstyls"]')
        .empty()
        .attr('disabled', true)
        .addClass('g-disabled');
      if (!e.isResolved() || !e.hasFeature(GCore.GFont.Features.StylisticSet)) return;
      let a = null;
      t && 'auto' !== t && (a = GCore.GOpenTypeFont.scriptNameToOpenTypeScriptTagString(t));
      const CollaborationMergeUtils = e.getAvailableStylisticSets(a);
      if (CollaborationMergeUtils && 0 !== CollaborationMergeUtils.length)
        if (
          (GTools.attr('disabled', false).removeClass('g-disabled'),
          GTools.append(
            $('<option/>')
              .attr('value', '')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.none')))
          ),
          GTools.append(
            CollaborationMergeUtils.map((e) =>
              $('<option/>').attr('value', e).text(e.toUpperCase())
            )
          ),
          n)
        )
          GTools.val(n);
        else {
          this._hasMultipleStylisticSets() &&
            (GTools.append(
              $('<option/>')
                .attr('value', 'mixed')
                .attr('hidden', true)
                .attr('disabled', true)
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GTextProperties', 'text.mixed')))
            ),
            GTools.val('mixed'));
        }
    }

    _hasMultipleLanguages() {
      return this._hasMultipleValues(GCore.GText.PropertyMapping._tlocl);
    }

    _hasMultipleStylisticSets() {
      return this._hasMultipleValues(GCore.GText.PropertyMapping._tstyls);
    }

    _hasMultipleValues(e) {
      return this._text.some((t) => {
        if (t instanceof GCore.GText) {
          const n = t.getTLCore().getDocumentRange().getFormatting()[e];
          return g.multipleValues === n;
        }
      });
    }

    async _correctStyleAndWeight(e, t, n) {
      var GTools = null,
        a = null,
        CollaborationMergeUtils = gDesigner.getWorkspace().getFontManager(),
        s = CollaborationMergeUtils.getDefaultFont(),
        GProperties = this._panel.find('input[data-property="_tff"]').gFontsButton('getFontList'),
        GFontsProviderManager = false;
      if (
        (e === s.getFamily()
          ? (a =
              (GTools = CollaborationMergeUtils.getDefaultFontWeights()) &&
              GTools.map(function (e) {
                return { weight: e, styles: CollaborationMergeUtils.getDefaultFontStyles() };
              }))
          : GProperties &&
            (a =
              (GTools = await GProperties.gFontsPanel(
                'weightsForFont',
                e,
                function () {
                  console.warn('textproperties: Unexpected callback');
                },
                true
              )) &&
              GTools.map(function (t) {
                return {
                  weight: t,
                  styles: GProperties.gFontsPanel(
                    'stylesForWeight',
                    t,
                    e,
                    function () {
                      console.warn('textproperties: Unexpected callback');
                    },
                    true
                  ),
                };
              })),
        GTools && GTools.indexOf(n[0]) < 0)
      ) {
        for (
          var barrel_editor_actions = 0, GSettingChangedEvent = 0;
          GSettingChangedEvent < GTools.length;
          GSettingChangedEvent++
        )
          Math.abs(n[0] - GTools[GSettingChangedEvent]) <
            Math.abs(n[0] - GTools[barrel_editor_actions]) &&
            (barrel_editor_actions = GSettingChangedEvent);
        ((n[0] = GTools[barrel_editor_actions]), (GFontsProviderManager = true));
      }
      var GSystemDialog =
        (a || []).filter(function (e) {
          if (e.weight === n[0]) return true;
        }) || [];
      return (
        GSystemDialog.length &&
          GSystemDialog[0].styles.indexOf(t[0]) < 0 &&
          (t[0] === GCore.GFont.Style.Normal && GSystemDialog[0].styles.length
            ? (t[0] = GCore.GFont.Style.Italic)
            : (t[0] = GCore.GFont.Style.Normal),
          (GFontsProviderManager = true)),
        GFontsProviderManager
      );
    }

    _toggleFormatting(e) {
      if (this._text && this._text.length) {
        const n = this._text.map((e) => GTools.GElementEditor.getEditor(e) || e),
          a = this._getFormatting('underline', n) || null,
          CollaborationMergeUtils = this._getFormatting('strikeout', n) || null;
        var module = this._getFormatting('ligatures', n);
        const s = {
            underline: a,
            strikeout: CollaborationMergeUtils,
            ligatures: (module = 'auto' === module ? !this._getProperty('_tcs', n) : !!module),
            fractions: this._getFormatting('fractions', n),
          },
          GProperties = this._getProperty('_tfw', n) || '',
          GFontsProviderManager = this._getProperty('_tfs', n) || '';
        if ('bold' === e) {
          let e;
          (parseInt(GProperties) === GCore.GFont.Weight.Bold
            ? ((e =
                this._weightsAvailable.indexOf(GCore.GFont.Weight.Regular) >= 0
                  ? GCore.GFont.Weight.Regular
                  : Math.min.apply(null, this._weightsAvailable)),
              (e = e || GCore.GFont.Style.Regular))
            : (e = GCore.GFont.Weight.Bold),
            this._assignProperties(['_tfw'], [e]));
        } else if ('italic' === e)
          this._assignProperties(
            ['_tfs'],
            [
              GFontsProviderManager === GCore.GFont.Style.Italic
                ? GCore.GFont.Style.Normal
                : GCore.GFont.Style.Italic,
            ]
          );
        else {
          const t = this._document.getEditor();
          try {
            (t.beginTransaction(),
              this._text.forEach((t) => {
                if (
                  (t instanceof GTools.GTextEditor && (t = t.getElement()),
                  t instanceof GCore.GText)
                ) {
                  const n = t.getTLCore();
                  if (n) {
                    let GCore;
                    const a = GTools.GElementEditor.getEditor(t);
                    ((GCore = a && a.isInlineEdit() ? n.selectedRange() : n.getDocumentRange()),
                      GCore && GCore.setFormatting(e, 1 != s[e]));
                  }
                }
              }));
          } finally {
            t.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GTextProperties', 'action.modify-text-properties')
              )
            );
          }
        }
        this._updateProperties();
      }
    }

    async _assignFont(e) {
      if (gDesigner.getWorkspace().getFontManager().getDefaultFont().getFamily() !== e) {
        var module = this._panel.find('input[data-property="_tff"]').gFontsButton('getFontList');
        if (
          undefined ===
          (await module.gFontsPanel('weightsForFont', e, () => {
            this._assignFontMain(e);
          }))
        )
          return;
      }
      this._assignFontMain(e);
    }

    _assignMarker(e) {
      if (!this._document) return;
      const module = this._document.getEditor();
      ((this._ownChange = true), module.beginTransaction());
      try {
        this._text.forEach((t) => {
          if ((t instanceof GTools.GTextEditor && (t = t.getElement()), t instanceof GCore.GText)) {
            const n = t.getTLCore();
            if (n) {
              let GCore;
              const a = GTools.GElementEditor.getEditor(t);
              ((GCore = a && a.isInlineEdit() ? n.selectedRange() : n.getDocumentRange()),
                GCore && GCore.toggleList(e));
            }
          }
        });
      } finally {
        (module.commitTransaction(
          GCore.GLocale.get(
            new GCore.GLocaleKey('GTextProperties', 'action.modify-text-properties')
          )
        ),
          (this._ownChange = false));
      }
    }

    async _assignFontMain(e) {
      var t,
        n,
        a = gDesigner.getWorkspace().getFontManager();
      a.getDefaultFont();
      if (this._document) {
        var CollaborationMergeUtils = this._document.getEditor();
        if (this._text.length) {
          CollaborationMergeUtils.beginTransaction();
          try {
            for (var s = 0; s < this._text.length; ++s) {
              var GProperties = GTools.GElementEditor.getEditor(this._text[s]);
              if (this._text[s] instanceof GCore.GText && this._text[s].isFakeText()) {
                var GFontsProviderManager = this._text[s].getContent(),
                  barrel_editor_actions = {};
                GFontsProviderManager &&
                  GFontsProviderManager.forEach((t) => {
                    barrel_editor_actions[t.fontFamily] = e;
                  });
                var GSettingChangedEvent = this._text[s].getProperty('_tff');
                ((barrel_editor_actions[GSettingChangedEvent] = e),
                  this._text[s].replaceFonts(barrel_editor_actions, true));
              } else {
                var GSystemDialog = GProperties || this._text[s],
                  g = ['_tff'],
                  h = [e],
                  f = this._text[s] instanceof GCore.GText && this._text[s].getTLCore();
                if (f) {
                  let GTools;
                  GTools =
                    GProperties && GProperties.isInlineEdit()
                      ? f.selectedRange()
                      : f.getDocumentRange();
                  for (
                    var m = GTools.save(),
                      y = GCore.GText.PropertyMapping._tfs,
                      v = GCore.GText.PropertyMapping._tfw,
                      _ = (GCore.GText.PropertyMapping._tff, false),
                      b = false,
                      w = 0;
                    w < m.length;
                    w++
                  ) {
                    var C =
                        'italic' === m[w][y] ? GCore.GFont.Style.Italic : GCore.GFont.Style.Normal,
                      x = ~~m[w][v];
                    if (((t = [C]), (n = [x]), await this._correctStyleAndWeight(e, t, n))) {
                      var S = g.indexOf('_tfs'),
                        E = g.indexOf('_tfw');
                      if (C !== t[0]) {
                        if ((S < 0 && ((S = g.length), g.push('_tfs'), h.push('')), b)) {
                          ((h[E] = n[0]), (h[S] = t[0]));
                          break;
                        }
                        ((h[S] = t[0]), (_ = true));
                      }
                      if (x !== n[0]) {
                        if ((E < 0 && ((E = g.length), g.push('_tfw'), h.push('')), _)) {
                          ((h[S] = t[0]), (h[E] = n[0]));
                          break;
                        }
                        ((h[E] = n[0]), (b = true));
                      }
                    }
                  }
                } else {
                  if (
                    ((t = [GSystemDialog.getProperty('_tfs') || GCore.GFont.Style.Normal]),
                    (n = [GSystemDialog.getProperty('_tfw') || GCore.GFont.Weight.Regular]),
                    await this._correctStyleAndWeight(e, t, n),
                    !a.getFont(e, t[0], n[0]))
                  )
                    continue;
                  (Array.prototype.push.apply(g, ['_tfs', '_tfw']),
                    Array.prototype.push.apply(h, [t[0], n[0]]));
                }
                GSystemDialog.setProperties(g, h);
              }
              if (GProperties) {
                var A = GProperties.getDefaultStyle();
                A && A.assignStyleFrom(this._text[s]);
              }
              this._text[s] instanceof GCore.GStyle && this._updateProperties();
            }
          } finally {
            CollaborationMergeUtils.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GTextProperties', 'action.modify-text-properties')
              )
            );
          }
        }
      }
    }

    _assignProperty(e, t, n, GTools) {
      this._assignProperties([e], [t], n, GTools);
    }

    _assignProperties(e, t, n, a) {
      if (this._document) {
        var CollaborationMergeUtils = this._document.getEditor();
        n || ((this._ownChange = true), CollaborationMergeUtils.beginTransaction());
        try {
          for (var s = 0; s < this._text.length; ++s) {
            (GProperties = GTools.GElementEditor.getEditor(this._text[s]))
              ? GProperties.setProperties(e, t, n)
              : this._text[s].setProperties(e, t, false, false, n);
          }
        } finally {
          n ||
            (CollaborationMergeUtils.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GTextProperties', 'action.modify-text-properties')
              ),
              a || null
            ),
            (this._ownChange = false));
        }
        if (e.includes('sc'))
          for (s = 0; s < this._text.length; ++s) {
            var GProperties;
            (GProperties = GTools.GElementEditor.getEditor(this._text[s])) &&
              GProperties.requestInvalidation();
          }
      }
    }

    toString() {
      return '[Object GTextProperties]';
    }

  }
  exports.exports = v;
}