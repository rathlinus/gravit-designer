/**
 * Webpack Module #1513
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(596) /* polyfill_Array_reverse */,
    require(30) /* polyfill_Object_assign */,
    require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(38) /* stub_requires_680 */,
    require(97) /* stub_requires_684 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    i = require(797) /* module */,
    GEditor = require(15) /* GEditor */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    AppSettings = require(10) /* AppSettings */,
    GMenu = require(238) /* GMenu */,
    c = require(444) /* module_444 */,
    barrel_panels = require(257) /* barrel_panels */,
    ZipDirectory = require(1253);
  const GUnsupportedFeaturesDialog = require(1238);
  var GSystemDialog = require(44);
  const GDocument_389 = require(389);
  var f = {};
  class m extends GCore.GObject {
    constructor(e, t, n) {
      super();
      ((this._document = e),
      (this._options = t),
      (this._settings = GCore.GUtil.extend(
      {
      size: '1x',
      format: 'png',
      jpegQuality: AppSettings.JPEG_EXPORT_QUALITY_DEFAULT,
      backgroundColor: e ? e.getScene().getActivePage().getProperty('bck') : null,
      backgroundOpacity: e ? e.getScene().getActivePage().getProperty('bop') : 1,
      chooserColor: e ? e.getScene().getActivePage().getProperty('bck') : null,
      chooserOpacity: e ? e.getScene().getActivePage().getProperty('bop') : 1,
      convertTextToPath: false,
      decimalPlacesPrecision: 3,
      configuration: {
      ignoreEffects: false,
      forceEffectsWhenZoomed: true,
      sceneBackground: true,
      isOutline: function () {
      return false;
      },
      },
      preserveEditingCapabilities: false,
      layerNamesAsId: i.GSVGExport.DefaultOptions.layerNamesAsId,
      downsampleImages: false,
      },
      this._options || f
      )));
      var GEditor = this._isUserFree();
      this.init(GEditor, n);
    }

    _warningSection = null;

    _isUserFree() {
      var e = gDesigner.getLicense();
      return !e.isLegacy() && (e.isFree() || gDesigner.isAnonymous() || e.isExpired());
    }

    init(e, t) {
      (this._settings.background || (this._settings.background = 'page-background'),
        (this._chooserElem = null),
        (this._dialog = $('<div></div>')),
        (this._setupContainer = $('<div></div>')
          .addClass('setup-container')
          .appendTo(this._dialog)),
        (this._modeContainer = $('<div/>')
          .addClass('mode-container')
          .appendTo(this._setupContainer)));
      var n = function (e, t, n) {
        return $('<label/>')
          .attr('data-mode', e)
          .append($('<span></span>').addClass('icon ' + n))
          .append($('<span></span>').addClass('name').text(t))
          .on(
            'click',
            function (t) {
              (gDesigner.stats('export_change_mode', e),
                $(t.target).closest('label').hasClass('g-disabled') || this._setActiveMode(e));
            }.bind(this)
          )
          .appendTo(this._modeContainer);
      }.bind(this);
      (n(
        'canvas',
        GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.canvas')),
        barrel_panels['gravit-icon-display']
      ),
        n(
          'selection',
          GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.selection')),
          barrel_panels['gravit-icon-cursor-filled']
        ),
        n(
          'assets',
          GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.assets')),
          'gravit-icon-layers'
        ),
        (this._settingsContainer = $('<div/>')
          .addClass('settings-container')
          .appendTo(this._setupContainer)));
      var i = function (n, GCore, i, GEditor) {
          GEditor = $.extend({ controlLeft: false, forbiddenForFree: true }, GEditor);
          var AppSettings = $('<span></span>').addClass('control').append(i);
          (e && GEditor.forbiddenForFree
            ? (AppSettings.find('*')
                .on(
                  'mousedown',
                  CollaborationMergeUtils.watchDog.trap(
                    null,
                    null,
                    (e) => {
                      (e.stopPropagation(),
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        GEditor.prostats && gDesigner.stats(GEditor.prostats));
                    },
                    t
                  )
                )
                .on(
                  'click',
                  CollaborationMergeUtils.watchDog.trap(
                    null,
                    null,
                    (e) => {
                      (e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault());
                    },
                    t
                  )
                ),
              AppSettings.find('*').each((e, t) => {
                ($._data(t, 'events').click.reverse(), $._data(t, 'events').mousedown.reverse());
              }))
            : GEditor.pro &&
              AppSettings.find('input')
                .gPro()
                .on(
                  'click',
                  CollaborationMergeUtils.watchDog.trap(
                    null,
                    null,
                    (e) => GEditor.prostats && gDesigner.stats(GEditor.prostats)
                  )
                )
                .after($('<span></span>').gPro()),
            GEditor.controlLeft && AppSettings.addClass('control-left'),
            'jpeg-quality' === n &&
              AppSettings.css('width', '55%')
                .css('height', '100%')
                .css('display', 'flex')
                .css('justify-content', 'center'));
          var GMenu = $('<div></div>').attr('data-setting', n);
          return (
            '' !== GCore && GMenu.append($('<span></span>').addClass('label').text(GCore)),
            GMenu.append(AppSettings).appendTo(this._settingsContainer),
            GMenu
          );
        }.bind(this),
        GEditor = { controlLeft: true };
      (i(
        'format',
        GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.format')),
        $('<select/>')
          .on(
            'change',
            function (e) {
              ((this._settings.format = $(e.target).val()),
                gDesigner.stats('export_change_documenttype', this._settings.format),
                'pdf' !== this._settings.format &&
                  (this._settings.configuration.ignoreEffects = false),
                ('pdf' != this._settings.format && 'jpg' != this._settings.format) ||
                  'no-background' != this._settings.background ||
                  (this._settings.background = 'page-background'),
                this._updateSettings(),
                this._updatePreview(),
                this._updateSizeMenu());
            }.bind(this)
          )
          .append($('<option></option>').attr('value', 'png').text('PNG'))
          .append($('<option></option>').attr('value', 'jpg').text('JPEG'))
          .append($('<option></option>').attr('value', 'svg').text('SVG'))
          .append($('<option></option>').attr('value', 'pdf').text('PDF')),
        { forbiddenForFree: false }
      ),
        i(
          'size',
          GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.size')),
          $('<div></div>')
            .addClass('g-input-select')
            .append(
              $('<input/>')
                .attr('size', '6')
                .val(this._settings.size)
                .on(
                  'change',
                  function (e) {
                    (gDesigner.stats('export_change_size', $(e.target).val()),
                      (this._settings.size = $(e.target).val()),
                      this._updatePreview());
                  }.bind(this)
                )
            )
            .append(
              $('<button></button>').on(
                'click',
                function (e) {
                  (gDesigner.stats('export_open_size-menu'),
                    this._sizeMenu.open(
                      e.target,
                      c.Position.Right_Bottom,
                      c.Position.Right_Bottom,
                      function (t) {
                        $(e.target)
                          .closest('div')
                          .find('input')
                          .val(this._formatCaption(t.getCaption()))
                          .trigger('change')
                          .focus()
                          .select();
                      }.bind(this)
                    ));
                }.bind(this)
              )
            ),
          { prostats: 'export_nonprotriespro_size' }
        ));
      const ZipDirectory = $('<div />')
          .gInputSlider({ min: 25, max: 100 })
          .css('align-self', 'center')
          .gInputSlider('value', this._settings.jpegQuality)
          .on(
            'change',
            function (e) {
              gDesigner.stats('export_change_jpeg-quality');
              var t = parseInt($(e.target).gInputSlider('value'), 10);
              ((this._settings.jpegQuality = t),
                this._updatePreview(),
                GUnsupportedFeaturesDialog.gInputBox('value', t));
            }.bind(this)
          ),
        GUnsupportedFeaturesDialog = $('<input />')
          .attr('type', 'text')
          .gInputBox({
            minValue: 25,
            maxValue: 100,
            incrementValue: 1,
            postfix: '%',
          })
          .gInputBox('value', this._settings.jpegQuality)
          .on(
            'change',
            function (e) {
              var t = parseInt(GUnsupportedFeaturesDialog.gInputBox('value'), 10);
              (t > 100 ? (t = 100) : t < 25 && (t = 25),
                ZipDirectory.gInputSlider('value', t),
                (this._settings.jpegQuality = t),
                this._updatePreview());
            }.bind(this)
          );
      i(
        'jpeg-quality',
        GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.jpeg-quality')),
        $('<div/>')
          .addClass('jpeg-quality')
          .append(ZipDirectory)
          .append($('<label />').append(GUnsupportedFeaturesDialog)),
        { prostats: 'export_nonprotriespro_jpeg-quality' }
      );
      var GSystemDialog = $('<div/>')
        .addClass('export-background-selector')
        .append(
          $('<select/>')
            .on(
              'change',
              function (e) {
                (false & e.isTrigger &&
                  gDesigner.stats('export_change_background-pattern', $(e.target).val()),
                  (this._settings.background = $(e.target).val()),
                  $(e.target)
                    .next('.export-background-pattern-chooser')
                    .css(
                      'display',
                      'custom-background' === this._settings.background ? '' : 'none'
                    ),
                  this._updateBackground(),
                  this._updatePreview());
              }.bind(this)
            )
            .append(
              $('<option></option>')
                .attr('value', 'page-background')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.page-background'))
                )
            )
            .append(
              $('<option></option>')
                .attr('value', 'custom-background')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.custom-background'))
                )
            )
            .append(
              $('<option></option>')
                .attr('value', 'no-background')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.no-background'))
                )
            )
        )
        .append(
          $('<span></span>')
            .css('display', 'custom-background' === this._settings.background ? '' : 'none')
            .addClass('export-background-pattern-chooser')
            .gPatternChooser({
              noEyedropper: true,
              types: [GCore.GColor],
              hasOpacity: true,
            })
            .gPatternChooser('value', this._settings.chooserColor)
            .on('chooseropen', function () {
              this._chooserElem = $(this);
            })
            .on('chooserclose', function (e, t, n) {
              this._chooserElem = null;
            })
            .on(
              'patternchange',
              function (e, t, n, GCore) {
                (t && ((this._settings.backgroundColor = t), (this._settings.chooserColor = t)),
                  n
                    ? ((this._settings.backgroundOpacity = n), (this._settings.chooserOpacity = n))
                    : (this._settings.backgroundOpacity = this._document
                        ? this._document.getScene().getActivePage().getProperty('bop')
                        : 1),
                  this._updateBackground(),
                  this._updatePreview());
              }.bind(this)
            )
        );
      (this._settings.chooserColor &&
        GSystemDialog.find('.export-background-pattern-chooser').gPatternChooser(
          'setPattern',
          this._settings.chooserColor
        ),
        this._settings.chooserOpacity &&
          GSystemDialog.find('.export-background-pattern-chooser').gPatternChooser(
            'opacity',
            this._settings.chooserOpacity
          ),
        i(
          'background-color',
          GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.background-color')),
          GSystemDialog,
          { prostats: 'export_nonprotriespro_select-background' }
        ),
        GSystemDialog.find('option[value="' + this._settings.background + '"]').prop(
          'selected',
          true
        ),
        i(
          'color-space',
          GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.color-mode')),
          $('<select/>')
            .on(
              'change',
              function (e) {
                (gDesigner.stats('export_change_colorspace', $(e.target).val()),
                  (this._settings.colorSpace = $(e.target).val()));
              }.bind(this)
            )
            .append($('<option/>').attr('value', 'rgb').text('RGB'))
            .append($('<option/>').attr('value', 'cmyk').text('CMYK')),
          { prostats: 'export_nonprotriespro_color-space' }
        ),
        i(
          'ignore-effects',
          '',
          $('<label></label>')
            .addClass('label')
            .append(
              $('<input/>')
                .attr('type', 'checkbox')
                .prop('checked', true)
                .on(
                  'change',
                  function (e) {
                    (gDesigner.stats(
                      'export_toggle_ignoreeffects',
                      $(e.target).prop('checked') ? 'enable' : 'disable'
                    ),
                      (this._settings.configuration.ignoreEffects = !$(e.target).prop('checked')),
                      this._updatePreview());
                  }.bind(this)
                )
            )
            .append(
              $('<span></span>').html(
                '&nbsp;' +
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.with-effects'))
              )
            ),
          Object.assign({}, GEditor, {
            prostats: 'export_nonprotriespro_ignore-effects',
          })
        ),
        i(
          'decimal-places-precision',
          GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.decimal-places-precision')),
          $('<input/>')
            .attr('type', 'text')
            .css('width', '63px')
            .gInputBox({ minValue: 0, maxValue: 6 })
            .gInputBox('value', this._settings.decimalPlacesPrecision)
            .on(
              'change',
              function (e) {
                (gDesigner.stats('export_change_decimalprecision'),
                  (this._settings.decimalPlacesPrecision = parseInt(
                    $(e.target).gInputBox('value')
                  )));
              }.bind(this)
            ),
          { pro: true, prostats: 'export_nonprotriespro_decimalprecision' }
        ),
        i(
          'convert-text-to-path',
          '',
          $('<label></label>')
            .addClass('label')
            .append(
              $('<input/>')
                .attr('type', 'checkbox')
                .prop('checked', true)
                .on(
                  'change',
                  function (e) {
                    (gDesigner.stats(
                      'export_toggle_convert-to-path',
                      $(e.target).prop('checked') ? 'enable' : 'disable'
                    ),
                      (this._settings.convertTextToPath = $(e.target).prop('checked')));
                  }.bind(this)
                )
            )
            .append(
              $('<span></span>').html(
                '&nbsp;' +
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.export-as-curves'))
              )
            ),
          Object.assign({}, GEditor, {
            prostats: 'export_nonprotriespro_convert-text-to-path',
          })
        ),
        i(
          'export-all',
          '',
          $('<label></label>')
            .addClass('label')
            .append(
              $('<input/>')
                .attr('type', 'checkbox')
                .prop('checked', true)
                .on(
                  'change',
                  function (e) {
                    gDesigner.stats('export_click_exportall');
                    var t = $(e.target).prop('checked');
                    this._previewContainer.find('.item .preview-check input').each((e, n) => {
                      ($(n).prop('checked', t), this._updateStorageDestinationSetting());
                    });
                  }.bind(this)
                )
            )
            .append(
              $('<span></span>').html(
                '&nbsp;' +
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.export-all'))
              )
            ),
          Object.assign({}, GEditor, {
            prostats: 'export_nonprotriespro_export-all',
          })
        ),
        i(
          'layer-as-id',
          '',
          $('<label></label>')
            .addClass('label')
            .append(
              $('<input/>')
                .attr('type', 'checkbox')
                .prop('checked', this._settings.layerNamesAsId)
                .on(
                  'change',
                  function (e) {
                    (gDesigner.stats('export_click_layer-as-id'),
                      (this._settings.layerNamesAsId = $(e.target).prop('checked')));
                  }.bind(this)
                )
            )
            .append(
              $('<span></span>').html(
                '&nbsp;' +
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.layer-as-id'))
              )
            )
            .append(
              $('<div></div>')
                .addClass('description')
                .html(
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.layer-as-id-info'))
                )
            ),
          Object.assign(GEditor, {
            pro: true,
            prostats: 'export_nonprotriespro_layer-as-id',
          })
        ),
        i(
          'export-preserve-editing-capabilities',
          '',
          $('<label></label>')
            .addClass('label')
            .append(
              $('<input/>')
                .attr('type', 'checkbox')
                .prop('checked', true)
                .on(
                  'change',
                  function (e) {
                    (gDesigner.stats(
                      'export_toggle_preserve-svg-editing-capabilities',
                      $(e.target).prop('checked') ? 'enable' : 'disable'
                    ),
                      (this._settings.preserveEditingCapabilities = $(e.target).prop('checked')));
                  }.bind(this)
                )
            )
            .append(
              $('<span></span>').html(
                '&nbsp;' +
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GExportDialog', 'text.preserve-svg-editing-capabilites')
                  )
              )
            )
            .append(
              $('<div></div>')
                .addClass('description')
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      'GExportDialog',
                      'text.preserve-svg-editing-capabilites-description'
                    )
                  )
                )
            ),
          Object.assign(GEditor, {
            pro: true,
            prostats: 'export_nonprotriespro_preserve-svg-editing-capabilities',
          })
        ),
        i(
          'do-not-downsample-images',
          '',
          $('<label></label>')
            .addClass('label')
            .append(
              $('<input/>')
                .attr('type', 'checkbox')
                .prop('checked', !this._settings.downsampleImages)
                .on(
                  'change',
                  function (e) {
                    (gDesigner.stats(
                      'export_toggle_do-not-downsample-images',
                      $(e.target).prop('checked')
                    ),
                      (this._settings.downsampleImages = !$(e.target).prop('checked')));
                  }.bind(this)
                )
            )
            .append(
              $('<span></span>').html(
                '&nbsp;' +
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GExportDialog', 'text.do-not-downsample-images')
                  )
              )
            )
            .append(
              $('<div></div>')
                .addClass('description')
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GExportDialog', 'text.do-not-downsample-images-info')
                  )
                )
            ),
          Object.assign({}, GEditor, { prostats: 'do-not-downsample-images' })
        ),
        i(
          'storage-destination',
          GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.export-to')),
          $('<select/>').on('change', () => {
            const e = this._getSelectedStorageDestination();
            e && gDesigner.stats('export_change_output', e.stats);
          })
        ),
        (this._previewContainer = $('<div></div>')
          .addClass('preview-container')
          .appendTo(this._dialog)),
        (this._sizeMenu = new GMenu()),
        this._setActiveMode('canvas', true),
        this._updateSettings(),
        this._updateSizeMenu(),
        this._dialog.gDialog({
          releaseOnClose: true,
          className: e ? 'g-export-dialog dialog-expired-pro' : 'g-export-dialog',
          buttons: [
            $(
              '<button>' +
                GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'cancel')) +
                '</button>'
            ).on('click', () => {
              (gDesigner.stats('export_cancel_button'), this.close());
            }),
            $(
              '<button>' +
                GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.export')) +
                '</button>'
            )
              .addClass('primary')
              .on(
                'click',
                CollaborationMergeUtils.watchDog.trap(
                  () => {
                    (gDesigner.stats(
                      'export_execute_button',
                      this._settings && this._settings.format
                    ),
                      gDesigner
                        .getAmplitudeHelper()
                        .logEvent(AppSettings.AmplitudeData.Events.DOCUMENT_EXPORTED, {
                          DOCUMENT_EXPORT_TYPE: AppSettings.AmplitudeData.ExportTypes.Advanced,
                          DOCUMENT_FILE_FORMAT: this._getFormat(),
                        }),
                      this._export());
                  },
                  null,
                  (e) => gDesigner.stats('export_nonprotriespro_export'),
                  t
                )
              ),
          ],
        }),
        GSystemDialog.find('select').trigger('change'));
    }

    open() {
      this._dialog.gDialog('open', true);
    }

    close() {
      (this._chooserElem && this._chooserElem.gPatternChooser('close'),
        this._dialog.gDialog('close'));
    }

    _shouldWarningBeShown(e) {
      if (!this._hasFormat()) return false;
      if (!(this._settings.format === GDocument_389.PDF.ext)) return false;
      if (!e || !e.length) return false;
      const module = new GCore.GLength(200, GCore.GLength.Unit.IN).toUnit(GCore.GLength.Unit.PX),
        require = GCore.GLength.DPI;
      return e.some((e) => {
        const GCore = i.GBitmapExport.getBitmapPaintArea(e.element, e.size, require);
        if (GCore.getWidth() > module || GCore.getHeight() > module) return true;
      });
    }

    _updateWarningSection(e) {
      this._shouldWarningBeShown(e)
        ? (this._warningSection ||
            (this._warningSection = this._buildWarningSection().appendTo(this._settingsContainer)),
          this._warningSection.show())
        : this._warningSection && this._warningSection.hide();
    }

    _buildWarningSection() {
      return $('<div/>')
        .addClass('warning-section')
        .append(
          $('<span/>')
            .addClass('control')
            .append(
              $('<label/>')
                .addClass('label')
                .append($('<span/>').addClass('icon').addClass('gravit-icon-export-warning'))
                .append(
                  $('<span/>')
                    .addClass('title')
                    .text(GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.warning')))
                )
                .append(
                  $('<div/>')
                    .addClass('description')
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GExportDialog', 'text.canvas-bigger-than-200-in')
                      )
                    )
                )
            )
        );
    }

    _getStorageDestinations() {
      const exports = this._getFormat();
      if (exports) {
        const t = gContainer.getStorageDestinations();
        if (t) return t.filter((t) => t.isSupported(exports));
      }
      return [];
    }

    _getSelectedStorageDestination() {
      const exports = parseInt(
        this._settingsContainer.find('[data-setting=storage-destination] > .control > select').val()
      );
      return this._getStorageDestinations().find((t) => t.id === exports);
    }

    _isStorageDestinationSettingAvailable() {
      return !(this._getStorageDestinations().length < 2);
    }

    _updateStorageDestinationSetting() {
      const exports = this._isStorageDestinationSettingAvailable(),
        module = exports ? this._getStorageDestinations() : [];
      this._settingsContainer
        .find('[data-setting=storage-destination]')
        .css('display', exports ? '' : 'none')
        .find('select')
        .empty()
        .append(module.map((e) => $('<option/>').attr('value', e.id).text(e.label)));
    }

    _getFormat() {
      if (this._hasFormat()) {
        if ('assets' === this._activeMode) return GDocument_389.ZIP.ext;
        if (this._previewContainer.find('.item .preview-check input:checked').length > 1) {
          if (!(this._settings.format === GDocument_389.PDF.ext)) return GDocument_389.ZIP.ext;
        }
        return this._settings.format;
      }
      return null;
    }

    _setActiveMode(e, t) {
      e !== this._activeMode &&
        ((this._activeMode = e),
        this._modeContainer.find('> label').each(function (t, n) {
          var GCore = $(n);
          GCore.toggleClass('g-active', GCore.attr('data-mode') === e);
        }),
        'selection' === e &&
          'page-background' === this._settings.background &&
          (this._settings.background = 'custom-background'),
        this._updateSettings(),
        t || this._updatePreview(),
        this._updateSizeMenu());
    }

    _hasBackgroundColor() {
      return (
        'canvas' === this._activeMode ||
        ('selection' === this._activeMode && this._settings.format in { png: 1, jpg: 1, pdf: 1 })
      );
    }

    _hasSize() {
      return this._hasFormat() && this._settings.format in { png: 1, jpg: 1, pdf: 1 };
    }

    _hasJpegQuality() {
      return this._hasFormat() && this._settings.format in { jpg: 1, pdf: 1 };
    }

    _hasFormat() {
      return 'canvas' === this._activeMode || 'selection' === this._activeMode;
    }

    _updateBackground() {
      if (((this._settings.configuration.sceneBackground = true), !this._hasBackgroundColor()))
        return (
          (this._settings.backgroundColor = null),
          void (this._settings.backgroundOpacity = 0)
        );
      if ('custom-background' !== this._settings.background)
        ((this._settings.configuration.sceneBackground =
          'page-background' == this._settings.background),
          (this._settings.backgroundColor =
            'jpg' === this._settings.format ? GCore.GRGBColor.WHITE : null),
          (this._settings.backgroundOpacity = 1));
      else {
        this._settings.configuration.sceneBackground = false;
        var exports = this._settingsContainer
          .find('[data-setting=background-color]')
          .find('.export-background-pattern-chooser');
        if (
          (exports.gPatternChooser('value')
            ? ((this._settings.backgroundColor = exports.gPatternChooser('value')),
              (this._settings.backgroundOpacity = exports.gPatternChooser('opacity')),
              this._settings.backgroundColor instanceof GCore.GColor ||
                ((this._settings.backgroundColor = GCore.GRGBColor.WHITE),
                (this._settings.backgroundOpacity = 1),
                exports.gPatternChooser('value', this._settings.backgroundColor),
                exports.gPatternChooser('opacity', this._settings.backgroundOpacity)))
            : ((this._settings.backgroundColor = this._document
                ? this._document.getScene().getActivePage().getProperty('bck')
                : null),
              (this._settings.backgroundOpacity = this._document
                ? this._document.getScene().getActivePage().getProperty('bop')
                : 1),
              this._settings.backgroundColor &&
              this._settings.backgroundColor instanceof GCore.GColor
                ? null == this._settings.backgroundOpacity && (this._settings.backgroundOpacity = 1)
                : ((this._settings.backgroundOpacity = 1),
                  (this._settings.backgroundColor = GCore.GRGBColor.WHITE)),
              exports.gPatternChooser('value', this._settings.backgroundColor),
              exports.gPatternChooser('opacity', this._settings.backgroundOpacity)),
          'jpg' === this._settings.format)
        ) {
          var module = GCore.GRGBColor.WHITE.getValue().slice(),
            require = this._settings.backgroundColor.getValue().slice();
          ((module[3] = 1), (require[3] = this._settings.backgroundOpacity));
          var i = GCore.GRGBColor.mix(module, require);
          ((this._settings.backgroundColor = new GCore.GRGBColor(i)),
            (this._settings.backgroundOpacity = 1));
        }
      }
    }

    _updateSettings() {
      (this._updateBackground(),
        this._settingsContainer
          .find('[data-setting=size]')
          .css('display', this._hasSize() ? '' : 'none'),
        this._settingsContainer
          .find('[data-setting=format]')
          .css('display', this._hasFormat() ? '' : 'none'),
        this._settingsContainer
          .find('[data-setting=jpeg-quality]')
          .css('display', this._hasJpegQuality() ? '' : 'none'),
        this._settingsContainer
          .find('[data-setting=background-color]')
          .css('display', this._hasBackgroundColor() ? '' : 'none'),
        this._settingsContainer
          .find('[data-setting=background-color]')
          .find('.export-background-pattern-chooser')
          .css('display', 'custom-background' === this._settings.background ? '' : 'none'),
        this._settingsContainer
          .find('[data-setting=color-space]')
          .css('display', this._hasFormat() && 'pdf' === this._settings.format ? '' : 'none'),
        this._settingsContainer
          .find('[value=no-background]')
          .css(
            'display',
            !this._hasFormat() ||
              ('pdf' !== this._settings.format && 'jpg' !== this._settings.format)
              ? ''
              : 'none'
          ),
        this._settingsContainer
          .find('[data-setting=retina-display]')
          .css(
            'display',
            !this._hasSize() || ('jpg' !== this._settings.format && 'png' !== this._settings.format)
              ? 'none'
              : ''
          ),
        this._settingsContainer
          .find('[data-setting=ignore-effects]')
          .css('display', this._hasFormat() && 'pdf' === this._settings.format ? '' : 'none')
          .find('input')
          .prop('checked', !this._settings.configuration.ignoreEffects),
        this._settingsContainer
          .find('[data-setting=convert-text-to-path]')
          .css(
            'display',
            !this._hasFormat() ||
              ('svg' !== this._settings.format && 'pdf' !== this._settings.format)
              ? 'none'
              : ''
          )
          .find('input')
          .prop('checked', this._settings.convertTextToPath),
        this._settingsContainer
          .find('[data-setting=layer-as-id]')
          .css('display', this._hasFormat() && 'svg' === this._settings.format ? '' : 'none')
          .find('input')
          .prop('checked', this._settings.layerNamesAsId),
        this._settingsContainer
          .find('[data-setting=export-preserve-editing-capabilities]')
          .css('display', this._hasFormat() && 'svg' === this._settings.format ? '' : 'none')
          .find('input')
          .prop('checked', this._settings.preserveEditingCapabilities),
        this._settingsContainer
          .find('[data-setting=decimal-places-precision]')
          .css('display', this._hasFormat() && 'svg' === this._settings.format ? '' : 'none'),
        this._settingsContainer
          .find('[data-setting=format]')
          .find('[value=' + this._settings.format + ']')
          .attr('selected', true),
        this._settings.colorSpace &&
          this._settingsContainer
            .find('[data-setting=color-space]')
            .find('[value=' + this._settings.colorSpace + ']')
            .attr('selected', true),
        this._settingsContainer
          .find('[data-setting=do-not-downsample-images]')
          .css('display', this._hasFormat() && 'pdf' === this._settings.format ? '' : 'none')
          .find('input')
          .prop('checked', !this._settings.downsampleImages),
        this._settingsContainer
          .find('[data-setting=export-all]')
          .find('input')
          .prop('checked', !this._options || !this._options.element),
        $('.export-background-selector')
          .find('option[value="page-background"]')
          .css('display', 'selection' === this._activeMode ? 'none' : ''),
        $('.export-background-selector')
          .find('option[value="' + this._settings.background + '"]')
          .prop('selected', true),
        this._updateStorageDestinationSetting());
    }

    _generateExportables() {
      if ('canvas' === this._activeMode || 'selection' === this._activeMode) {
        var exports = {
          size: this._settings.size,
          suffix: '',
          format: this._settings.format,
          jpegQuality: this._settings.jpegQuality,
          backgroundColor: this._settings.backgroundColor,
          backgroundOpacity: this._settings.backgroundOpacity,
          colorSpace: this._settings.colorSpace,
          configuration: this._settings.configuration,
          convertTextToPath: this._settings.convertTextToPath,
          decimalPlacesPrecision: this._settings.decimalPlacesPrecision,
          preserveEditingCapabilities: this._settings.preserveEditingCapabilities,
          layerNamesAsId: this._settings.layerNamesAsId,
          overrideBackground: 'page-background' !== this._settings.background,
          downsampleImages: this._settings.downsampleImages,
        };
        if ('canvas' === this._activeMode)
          return ZipDirectory.generateExportables(
            this._document.getScene(),
            $.extend({ name: this._document.getTitle() }, exports),
            false
          );
        var module = this._document.getEditor().getSelection();
        return module && module.length
          ? ZipDirectory.generateExportables(module, exports, false)
          : [];
      }
      if ('assets' === this._activeMode)
        return ZipDirectory.generateExportables(this._document.getScene(), null, true);
    }

    async _export(e) {
      this._options || (f = this._settings);
      var t = this._generateExportables();
      let require = [];
      try {
        var CollaborationMergeUtils = this._previewContainer.find('.item .preview-check input');
        if (CollaborationMergeUtils.length) {
          var AppSettings = [];
          CollaborationMergeUtils.each(function (e, t) {
            var n = $(t);
            n.prop('checked') && AppSettings.push(n.closest('.item').data('element'));
          });
          for (var GMenu = [], c = 0; c < t.length; ++c)
            for (var barrel_panels = 0; barrel_panels < AppSettings.length; ++barrel_panels) {
              if (
                (AppSettings[barrel_panels] instanceof GCore.GPage &&
                  t[c].element instanceof GCore.GPage &&
                  AppSettings[barrel_panels].getReferenceId() === t[c].element.getReferenceId()) ||
                AppSettings[barrel_panels] === t[c].element
              ) {
                GMenu.push(t[c]);
                break;
              }
            }
          t = GMenu;
        }
        var GDocument_389 = i.GBitmapExport.getMaximumCanvasSize();
        if (
          t.some((e) => {
            if ('jpg' === e.format || 'png' === e.format) {
              var t = GCore.GLength.DPI,
                require = i.GBitmapExport.getBitmapPaintArea(e.element, e.size, t);
              if (
                require.getWidth() > GDocument_389.width ||
                require.getHeight() > GDocument_389.height ||
                require.getWidth() * require.getHeight() > GDocument_389.area
              )
                return true;
            }
            return false;
          })
        )
          return void GSystemDialog.alert(
            GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.default-limit'))
              .replace('%width', GDocument_389.width)
              .replace('%height', GDocument_389.height)
              .replace('%area', GDocument_389.area / 1024 / 1024 + 'MP')
          ).css({ width: '500px' });
        if (
          t.some(
            (e) =>
              'pdf' === e.format &&
              !i.GPDFExport.isSupported(
                e.element,
                !e.configuration || !e.configuration.ignoreEffects,
                e.size
              )
          )
        )
          return void GSystemDialog.alert(
            GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.pdf-limit')).replace(
              '%limit',
              Math.round(GEditor.GPlatform.maxPngDataSize / 1024 / 1024) + 'MB'
            )
          ).css({ width: '500px' });
        if (((require = this._persistOpacities(t)), t.length)) {
          const e = this._getSelectedStorageDestination();
          if (e && !(await this._checkWriteAccess(e))) return;
          var m = $('<div></div>')
              .addClass('export-overlay')
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.exporting')) + '...'
              )
              .appendTo(this._dialog),
            y = $('<div></div>').addClass('message').append($('<span></span>'));
          let n = {
            abort: undefined,
            message: (e) => {
              y.find('span').text(e);
            },
            close: () => m.remove(),
            error: () =>
              n.message(
                GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.pdf-export-error'))
              ),
          };
          const GEditor = { storageDestination: e },
            CollaborationMergeUtils = (e) => {
              e && GSystemDialog.error(e, { closeCallback: () => this.close() });
            };
          (t.length &&
            'pdf' === t[0].format &&
            (m.append(
              $('<button>')
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.cancel')))
                .on('click', () => {
                  (n.abort && n.abort(), n.close());
                })
            ),
            m.append(y)),
            ZipDirectory.export(
              t,
              this._document.getStorage() || gDesigner.getDefaultStorage(),
              this._document.getTitle(),
              () => {
                if (
                  (this.close(),
                  !gDesigner.getSetting('disable_warning_unsupported_features', false))
                ) {
                  let e = [];
                  for (let n of t)
                    'svg' === n.format &&
                      (e = e.concat(i.GSVGExport.getUnsupportedFeatures(n.element)));
                  e.length && new GUnsupportedFeaturesDialog(e).open();
                }
              },
              () => this.close(),
              'assets' === this._activeMode,
              function (e) {
                var t = m.find('progress');
                (t.length ||
                  m.append(
                    $('<p>').append(
                      (t = $('<progress>').attr({ min: '0', max: '100' }).css('width', '200px'))
                    )
                  ),
                  t.val(e));
              },
              n,
              CollaborationMergeUtils,
              GEditor
            ));
        }
      } finally {
        this._restoreOpacities(t, require);
      }
    }

    async _checkWriteAccess(e) {
      const module = this._document.getStorage() || gDesigner.getDefaultStorage(),
        require = await module.getWritePermission(e),
        GCore = require.isAuthorized();
      return (
        !GCore &&
          require.hasStatusText() &&
          GSystemDialog.error(require.getStatusText(), { showTitle: false }),
        GCore
      );
    }

    _formatCaption(e) {
      return 'pdf' === this._settings.format ? e.replace(/[^0-9\.]/g, '') + 'dpi' : e;
    }

    _updateSizeMenu() {
      this._sizeMenu.clearItems();
      let exports = '1x';
      if ('pdf' === this._settings.format) {
        const t =
          this._document &&
          this._document.getScene() &&
          this._document.getScene().getProperty('dpi');
        ((exports = isNaN(t) ? '72dpi' : t + 'dpi'),
          this._sizeMenu.createAddItem(
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.default')) + ' (72dpi)'
          ),
          this._sizeMenu.createAddItem(
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.web')) + ' (96dpi)'
          ),
          this._sizeMenu.createAddItem(
            GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.medium-quality')) +
              ' (150dpi)'
          ),
          this._sizeMenu.createAddItem(
            GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.high-quality')) +
              ' (300dpi)'
          ));
      } else
        (this._sizeMenu.createAddItem('1x'),
          this._sizeMenu.createAddItem('2x'),
          this._sizeMenu.createAddItem('0.5x'),
          this._sizeMenu.createAddItem('3x'),
          this._sizeMenu.createAddItem('512w'),
          this._sizeMenu.createAddItem('512h'),
          this._sizeMenu.createAddItem('128x128'),
          this._sizeMenu.createAddItem('300dpi'));
      for (var module = 0; module < this._sizeMenu.getItemCount(); module++)
        if (-1 !== this._sizeMenu.getItem(module).getCaption().indexOf(this._settings.size)) return;
      ((this._settings.size = exports),
        this._settingsContainer.find('.g-input-select > input').val(this._settings.size));
    }

    _updatePreview() {
      this._previewContainer.empty();
      var e = this._generateExportables();
      let module = [];
      try {
        if (
          ((module = this._persistOpacities(e)),
          this._settingsContainer
            .find('[data-setting=export-all]')
            .css('display', 'canvas' !== this._activeMode || e.length > 1 ? '' : 'none'),
          e.length)
        ) {
          for (
            var require = $('<div></div>')
                .addClass('loader')
                .append(
                  $('<span></span>')
                    .addClass('text')
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GExportDialog', 'text.preparing-preview')
                      ) + '...'
                    )
                )
                .appendTo(this._previewContainer),
              GEditor = [],
              CollaborationMergeUtils = 0;
            CollaborationMergeUtils < e.length;
            ++CollaborationMergeUtils
          ) {
            for (
              var AppSettings = e[CollaborationMergeUtils], GMenu = null, c = 0;
              c < GEditor.length;
              ++c
            )
              if (GEditor[c].element === AppSettings.element) {
                GMenu = GEditor[c];
                break;
              }
            (GMenu ||
              ((GMenu = {
                element: AppSettings.element,
                name: AppSettings.name,
                format: AppSettings.format,
                size: AppSettings.size,
                jpegQuality: AppSettings.jpegQuality,
                backgroundColor: AppSettings.backgroundColor,
                backgroundOpacity: AppSettings.backgroundOpacity,
                sizes: '',
                formats: '',
                configuration: AppSettings.configuration,
              }),
              GEditor.push(GMenu)),
              '' !== GMenu.formats && (GMenu.formats += ', '),
              (GMenu.formats += AppSettings.format),
              AppSettings.size &&
                ('' !== GMenu.sizes && (GMenu.sizes += ', '), (GMenu.sizes += AppSettings.size)));
          }
          var barrel_panels = null;
          (GEditor.length > 1 || 'assets' === this._activeMode) &&
            (barrel_panels = $('<div></div>')
              .addClass('list content')
              .appendTo(this._previewContainer));
          var ZipDirectory = [];
          for (
            CollaborationMergeUtils = 0;
            CollaborationMergeUtils < GEditor.length;
            ++CollaborationMergeUtils
          ) {
            GMenu = GEditor[CollaborationMergeUtils];
            var GUnsupportedFeaturesDialog,
              GSystemDialog,
              GDocument_389 = GCore.GBitmap.ImageType.PNG,
              f = null;
            'jpg' === GMenu.format &&
              ((GDocument_389 = GCore.GBitmap.ImageType.JPEG),
              (f = (GMenu.jpegQuality || 100) / 100));
            var m = window.devicePixelRatio;
            if (barrel_panels) {
              var y = new GCore.GLength(50, GCore.GLength.Unit.PX);
              GUnsupportedFeaturesDialog = (GSystemDialog = GMenu.element.toBitmap(
                y,
                y,
                2,
                GMenu.backgroundColor,
                GMenu.configuration,
                null,
                GMenu.backgroundOpacity
              )).toImageDataUrl(GDocument_389, f);
            } else {
              var v = null;
              this._hasBackgroundColor() && (v = GMenu.backgroundColor);
              var _ = GMenu.element._getBitmapPaintArea(),
                b = [0],
                w = i.GBitmapExport.convertSizeToScale(
                  _.getWidth(),
                  _.getHeight(),
                  GMenu.size,
                  null,
                  b
                ),
                C = _.getWidth() * (b[0] / GCore.GLength.DPI) * w.getX(),
                x = _.getHeight() * (b[0] / GCore.GLength.DPI) * w.getY(),
                S = GMenu.size;
              ((C > 1920 || x > 1080) &&
                (S = Math.min(1920 / _.getWidth(), 1080 / _.getHeight()) + 'x'),
                (GUnsupportedFeaturesDialog = (GSystemDialog = i.GBitmapExport.export(
                  GMenu.element,
                  S,
                  v,
                  GMenu.configuration,
                  null,
                  GMenu.backgroundOpacity,
                  true
                )).toImageDataUrl(GDocument_389, f)));
            }
            var E = GSystemDialog.getWidth() / m,
              A = GSystemDialog.getHeight() / m,
              T = $('<img />').attr('src', GUnsupportedFeaturesDialog),
              G = $('<div></div>')
                .addClass('preview-image')
                .css('background', GCore.GPattern.asCSSBackground(null, 0))
                .append(T);
            if ((ZipDirectory.push({ img: T, w: E, h: A, preview: G }), barrel_panels)) {
              var P = '';
              ('assets' === this._activeMode &&
                (GMenu.sizes && (P = GMenu.sizes + ' - '), (P += GMenu.formats)),
                $('<div></div>')
                  .addClass('item')
                  .data('element', GMenu.element)
                  .append(G)
                  .append(
                    $('<div></div>')
                      .addClass('preview-check')
                      .append(
                        $('<input/>')
                          .prop(
                            'checked',
                            !this._options ||
                              !this._options.element ||
                              this._options.element == GMenu.element
                          )
                          .on('change', () => {
                            this._updateStorageDestinationSetting();
                          })
                          .attr('type', 'checkbox')
                      )
                  )
                  .append($('<div></div>').addClass('preview-name').text(GMenu.name))
                  .append($('<div></div>').addClass('preview-meta').text(P))
                  .appendTo(barrel_panels));
            } else G.addClass('content').appendTo(this._previewContainer);
          }
          require.remove();
        } else
          switch (this._activeMode) {
            case 'selection':
              $('<div></div>')
                .addClass('empty')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.selection-warning'))
                )
                .appendTo(this._previewContainer);
              break;
            case 'assets':
              $('<div></div>')
                .addClass('empty')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GExportDialog', 'text.assets-warning'))
                )
                .appendTo(this._previewContainer);
          }
      } finally {
        this._restoreOpacities(e, module);
      }
      (this._updateStorageDestinationSetting(), this._updateWarningSection(e));
    }

    _persistOpacities(e) {
      let module = [];
      if (
        'canvas' === this._activeMode &&
        'svg' !== this._settings.format &&
        'pdf' !== this._settings.format
      )
        for (var require = 0; require < e.length; ++require) {
          var GCore = e[require];
          if (GCore.overrideBackground) {
            var i = GCore.element.getProperty('bop');
            (module.push({ index: require, opacity: i }), GCore.element.setProperty('bop', 0));
          }
        }
      return module;
    }

    _restoreOpacities(e, t) {
      if (t.length > 0)
        for (var require = 0; require < e.length; ++require)
          for (var GCore = e[require], i = 0; i < t.length; ++i)
            if (require === t[i].index) {
              GCore.element.setProperty('bop', t[i].opacity);
              break;
            }
    }

  }
  exports.exports = m;
}