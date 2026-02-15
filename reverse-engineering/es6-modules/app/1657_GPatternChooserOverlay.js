/**
 * Webpack Module #1657
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(53) /* GTools */;
  var GCore = require(1) /* GCore */,
    i = (require(15) /* GEditor */, require(40)) /* CollaborationMergeUtils */,
    a = (require(67) /* GRichTooltipConfig */, require(238)) /* GMenu */,
    r =
      (require(1151) /* GSwatchesChangedEvent */,
      require(857) /* GInputSliderWidget */,
      require(173) /* stub_requires_1 */,
      require(877) /* GPasteAction */,
      require(44)) /* GSystemDialog */,
    s = require(1150);
  class l {
    constructor() {
      (this.initLayout(),
      this._container.gOverlay({
      releaseOnClose: false,
      padding: false,
      clazz: 'pattern-chooser-overlay',
      customRight: -250,
      }),
      this.initContextMenu());
    }

    _advancedExpanded = true;
    _longPressTimer = null;
    _islongPress = false;
    _contextMenu = null;
    _currentLongPressTarget = null;

    _createChoosers(e) {
      return $('<div />')
        .addClass('chooser')
        .append(
          $('<button />')
            .attr('data-palette', 'colors')
            .append(
              $('<div />')
                .addClass('mini-font')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GCommonNames', 'text.colors')
                  ).toUpperCase()
                )
            )
            .on('click', e)
        )
        .append(
          $('<button />')
            .gPro({ feature: 'swatches' })
            .attr('data-palette', 'swatches')
            .append(
              $('<div />')
                .addClass('mini-font')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPatternChooser', 'text.swatches')
                  ).toUpperCase()
                )
            )
            .on(
              'click',
              i.watchDog.trap(
                e,
                null,
                (e) => gDesigner.stats('patternchooser_nonprotriespro_palette', 'swatches'),
                'swatches'
              )
            )
        )
        .append(
          $('<button />')
            .attr('data-palette', 'used')
            .append(
              $('<div />')
                .addClass('mini-font')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPatternChooser', 'text.in-use')
                  ).toUpperCase()
                )
            )
            .on('click', e)
        )
        .append(
          $('<button />')
            .attr('data-palette', 'mixer')
            .append(
              $('<div />')
                .addClass('mini-font')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPatternChooser', 'text.mixer')
                  ).toUpperCase()
                )
            )
            .on('click', e)
        )
        .appendTo(this._palettes);
    }

    initContextMenu(e) {
      this._contextMenu = new a(null, 'g-pattern-chooser-context-menu');
      var t = (e, t, n) => {
          gDesigner.stats('patternchooser_add_swatch', e);
          var i = new GCore.GSwatch(t, n),
            a = gDesigner.getSwatches(e);
          if (a) {
            for (var s = 0; s < a.length; ++s)
              if (GCore.GUtil.equals(i, a[s], true))
                return void r.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPatternChooser', 'text.equal-swatch-alert')
                  )
                );
            (a.push(i), gDesigner.setSwatches(e, a));
          }
        },
        n = (e) => {
          var t = this._pattern.clone();
          return (
            (t instanceof GCore.GRadialGradient ||
              t instanceof GCore.GLinearGradient ||
              t instanceof GCore.GAngularGradient) &&
              (t._stops[0].color = e),
            t
          );
        },
        i = (e) => {
          var GCore = $(this._currentLongPressTarget).closest('.swatch').data('swatch');
          if (GCore) {
            var i = GCore.getProperty('_pt'),
              a = GCore.getProperty('_op');
            e = this._getSwatchScope(e, this._pattern);
            ((i = n(i)), t(e, i, a));
          } else
            'INPUT' === this._currentLongPressTarget.nodeName &&
              t(this._getSwatchScope('document', this._pattern), this._pattern, this._opacity);
        };
      (this._contextMenu
        .createAddItem(
          GCore.GLocale.get(
            new GCore.GLocaleKey('GPatternChooser', 'action.add-to-document-swatches')
          ),
          () => {
            i('document');
          }
        )
        .setIcon('gravit-icon-add-swatches'),
        this._contextMenu
          .createAddItem(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GPatternChooser', 'action.add-to-global-swatches')
            ),
            () => {
              i('global');
            }
          )
          .setIcon('gravit-icon-add-swatches'));
    }

    __getColorModeParams() {
      return {
        hexWidth: '25%',
        isTouchEnabled: true,
        rgbWidth: '12%',
        cymkWidth: '12%',
      };
    }

    _createPatternEditorFirstRow(e, t) {
      return [
        {
          width: '80%',
          padding: false,
          content: $('<button />')
            .prepend($('<span></span>').addClass('gravit-icon-add-image'))
            .append(
              $('<div />')
                .addClass('mini-font')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPatternChooser', 'action.choose-image')
                  ) + '...'
                )
            )
            .addClass('pattern-choose-image-button')
            .on('click', e),
        },
        {
          width: '20%',
          content: $('<button />')
            .addClass('paste-btn')
            .addClass('g-flat')
            .append($('<span></span>').addClass('gravit-icon-paste-color-choose'))
            .on('click', t),
        },
      ];
    }

    _createPatternEditorMaskRow(e) {
      return [
        {
          padding: false,
          width: '50px',
          content: $('<label />')
            .addClass('g-switch')
            .append(
              $('<input>')
                .attr('id', 'texture-mask-touch')
                .attr('type', 'checkbox')
                .attr('data-property', 'texture_mask')
                .prop('disabled', true)
                .on('change', e)
            )
            .append($('<div />')),
        },
        {
          padding: false,
          width: 'auto',
          content: $('<label></label>')
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GPatternChooser', 'action.set-transparency-mask')
              )
            )
            .addClass('set-transparency-mask')
            .attr('for', 'texture-mask-touch'),
        },
      ];
    }

    _createPatternEditorScaleRow(e, t, n) {
      return [
        {
          padding: false,
          width: '120px',
          content: $('<span></span>').text(
            GCore.GLocale.get(new GCore.GLocaleKey('GPatternChooser', 'text.scale'))
          ),
        },
        {
          width: 'auto',
          content: $('<div/>')
            .attr('data-property', 'texture_tile')
            .gInputSlider({ min: 10, max: 200 })
            .on('input', e)
            .on('change', t),
        },
        {
          width: '50px',
          content: $('<input>')
            .attr('data-property', 'texture_tile')
            .attr('type', 'text')
            .on('change', n)
            .gInputBox({
              minValue: 10,
              maxValue: 200,
              incrementValue: 1,
              postfix: '%',
            }),
        },
      ];
    }

    _createPatternEditorAdvancedRow(e) {
      return [
        {
          width: 'auto',
          content: $('<div />')
            .addClass('advanced-option')
            .append(
              $(
                '<b>' +
                  GCore.GLocale.get(new GCore.GLocaleKey('GPatternChooser', 'text.advanced')) +
                  ' </b>'
              ).addClass('title')
            )
            .append(
              $('<div />').addClass('gravit-icon-right expand-icon').attr('id', 'expand-icon')
            )
            .on(
              'click',
              function () {
                (gDesigner.stats('patternchooser_click_advanced'),
                  e.slideToggle(),
                  (this._advancedExpanded = !this._advancedExpanded),
                  $('#expand-icon')
                    .removeClass('gravit-icon-right')
                    .removeClass('gravit-icon-down'),
                  $('#expand-icon').addClass(
                    this._advancedExpanded ? 'gravit-icon-right' : 'gravit-icon-down'
                  ));
              }.bind(this)
            ),
        },
      ];
    }

    __getCreatePatternEditorParams() {
      return {
        isTouchEnabled: true,
        repeatWidth: '48%',
        ghostWidth: '4%',
        postionWith: '48%',
        sizeWidth: '48%',
        unitWidth: '8%',
      };
    }

    _createMixerPalette(e) {
      for (
        var module = $('<div />')
            .attr('data-container', 'tints')
            .addClass('tints')
            .append(
              $('<div/>')
                .addClass('title')
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPatternChooser', 'text.tints')
                  ).toUpperCase()
                )
            )
            .appendTo(e),
          require = 1;
        require <= 8;
        require += 1
      )
        this._createPaletteSwatch(GCore.GRGBColor.WHITE, module, false, false);
      var i = $('<div />')
        .attr('data-container', 'shades')
        .addClass('shades')
        .append(
          $('<div/>')
            .addClass('title')
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GPatternChooser', 'text.shades')
              ).toUpperCase()
            )
        )
        .appendTo(e);
      for (require = 1; require <= 8; require += 1)
        this._createPaletteSwatch(GCore.GRGBColor.WHITE, i, false, false);
      var a = $('<div />')
        .attr('data-container', 'tones')
        .addClass('tones')
        .append(
          $('<div/>')
            .addClass('title')
            .text(
              GCore.GLocale.get(new GCore.GLocaleKey('GPatternChooser', 'text.tones')).toUpperCase()
            )
        )
        .appendTo(e);
      for (require = 1; require <= 8; require += 1)
        this._createPaletteSwatch(GCore.GRGBColor.WHITE, a, false, false);
      var r = $('<div />')
        .attr('data-container', 'mixes')
        .addClass('mixes')
        .append(
          $('<div/>')
            .addClass('title')
            .text(
              GCore.GLocale.get(new GCore.GLocaleKey('GPatternChooser', 'text.mixes')).toUpperCase()
            )
        )
        .appendTo(e);
      for (require = 1; require <= 8; require += 1)
        this._createPaletteSwatch(GCore.GRGBColor.WHITE, r, false, false);
      this._updateMixerPalette();
    }

    __getUpdateMixerPaletteParams() {
      return { maxCount: 8 };
    }

    __getCreateUsedPaletteParams() {
      return { isTouchEnabled: true, maxCount: 8 };
    }

    __getUpdateSwatchesPaletteParams() {
      return { isTouchEnabled: true };
    }

    __getUpdateGradientStopParams() {
      return { isTouchEnabled: true };
    }

    __getCreatePaletteSwatchParamas() {
      return { isTouchEnabled: true };
    }

    __getUpdateOpacityParams() {
      return { isTouchEnabled: true };
    }

    __getUpdateColorParams() {
      return { isTouchEnabled: true };
    }

  }
  (GCore.GObject.inheritAndMix(l, s),
    s.prototype._relayout = function () {
      let exports = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
      this._container.gOverlay('relayout', { preserveTop: exports });
    },
    exports.exports = l);
}