/**
 * Webpack Module #1523
 * Type: class
 * Name: GExportProperties
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    a = require(67) /* GRichTooltipConfig */,
    GMenu = require(238) /* GMenu */,
    s = require(444) /* module_444 */,
    GProperties = require(123) /* GProperties */,
    ZipDirectory = require(1253) /* ZipDirectory */,
    GLoginPanel = require(446) /* GLoginPanel */,
    DataModule_442 = require(442);
  const GSettingChangedEvent = require(135);
  class g extends GProperties {
    constructor() {
      super();
    }

    _panel = null;
    _toolbar = null;
    _exportButton = null;
    _createSliceButton = null;
    _document = null;
    _elements = null;
    _sizeMenu = null;

    isSticky() {
      return true;
    }

    init(e, t) {
      ((this._panel = e),
        (this._toolbar = t),
        t.addClass('list-toolbar'),
        $('<label></label>')
          .addClass('panel-title')
          .text(
            GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'text.make-exportable'))
          )
          .appendTo(t),
        (this._exportButton = $('<button></button>')
          .addClass('btn-export')
          .attr('id', 'btn-export')
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.export')) + '...'
          )
          .append($('<span></span>').addClass('gravit-icon-export'))
          .on('click', this._export.bind(this))
          .appendTo(t)),
        (this._createSliceButton = $('<button></button>')
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'action.create-slice'))
          )
          .append($('<span></span>').addClass('gravit-icon-slice'))
          .on('click', this._createSlice.bind(this))
          .appendTo(t)
          .gRichTooltip(
            a.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GExportProperties', 'text.create-slice-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey('GExportProperties', 'text.create-slice-tooltip-description')
              ),
              learnMore: '',
            })
          )),
        $('<button></button>')
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'action.add'))
          )
          .append($('<span></span>').addClass('gravit-icon-plus'))
          .on('click', this._addExport.bind(this))
          .appendTo(t)
          .gRichTooltip(
            a.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GExportProperties', 'text.add-export-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey('GExportProperties', 'text.add-export-tooltip-description')
              ),
              learnMore: '',
            })
          ),
        (this._sizeMenu = new GMenu()),
        this._sizeMenu.createAddItem('1x'),
        this._sizeMenu.createAddItem('2x'),
        this._sizeMenu.createAddItem('0.5x'),
        this._sizeMenu.createAddItem('3x'),
        this._sizeMenu.createAddItem('512w'),
        this._sizeMenu.createAddItem('512h'),
        this._sizeMenu.createAddItem('128x128'),
        this._sizeMenu.createAddItem('300dpi'),
        gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this));
    }

    update(e) {
      if (
        (this._document &&
          (this._document
            .getScene()
            .removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChange,
              this
            ),
          (this._document = null)),
        (this._elements = null),
        e)
      ) {
        this._document = e;
        var module = this._getElements();
        this._elements = [];
        for (var require = false, GTools = 0; GTools < module.length; ++GTools)
          (module[GTools] instanceof GCore.GBlock && this._elements.push(module[GTools]),
            module[GTools] instanceof GCore.GSlice || (require = true));
        if (this._elements && this._elements.length)
          return (
            (this._document = e),
            this._document
              .getScene()
              .addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            this._createSliceButton.css('display', require ? '' : 'none'),
            this._updateProperties(),
            true
          );
      }
      return false;
    }

    _getElements() {
      var e = this._document.getEditor();
      if (
        this._document &&
        e &&
        ((this._elements = e.getSelection()),
        this._elements &&
          this._elements.length &&
          (this._elements = e.filterIndividualElements(this._elements)),
        !this._elements || 0 === this._elements.length)
      ) {
        var module = gDesigner.getToolManager().getActiveTool(),
          require = null;
        module instanceof GTools.GItemTool && (require = module.getDefaultStyle())
          ? (this._elements = [require])
          : (this._elements = [this._document.getScene().getActivePage()]);
      }
      return this._elements;
    }

    _export() {
      new GLoginPanel(
        () => {
          gDesigner.stats('exportproperties_click_export');
          var e = ZipDirectory.generateExportables(this._elements);
          ZipDirectory.export(
            e,
            this._document.getStorage() || gDesigner.getDefaultStorage(),
            this._document.getTitle(),
            null,
            null,
            true
          );
        },
        () => {
          gDesigner.stats('exportproperties_cancel_anonymous');
        }
      );
    }

    _createSlice() {
      gDesigner.stats('exportproperties_click_createslice');
      var e = this._document.getEditor();
      e.beginTransaction();
      try {
        for (var module = [], require = 0; require < this._elements.length; ++require) {
          var GTools = this._elements[require];
          if (!(GTools instanceof GCore.GSlice)) {
            var a = (
                GTools.getProperty(DataModule_442.EXPORT_PROPERTY_NAME, true, []) || []
              ).slice(),
              GMenu = GTools.getPaintBBox();
            GTools.setProperty(DataModule_442.EXPORT_PROPERTY_NAME, undefined, true);
            var s = new GCore.GSlice();
            (s.setProperties(
              ['x', 'y', 'w', 'h'],
              [GMenu.getX(), GMenu.getY(), GMenu.getWidth(), GMenu.getHeight()]
            ),
              s.setProperty(DataModule_442.EXPORT_PROPERTY_NAME, a, true),
              module.push(s));
          }
        }
        e.insertElements(module, true, true, false);
      } finally {
        e.commitTransaction(
          GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'action.create-slices'))
        );
      }
    }

    _addExport() {
      gDesigner.stats('exportproperties_click_add-item-to-export');
      var e = this._document.getEditor();
      e.beginTransaction();
      try {
        for (var module = 0; module < this._elements.length; ++module) {
          for (
            var require = this._elements[module],
              GTools = (
                require.getProperty(DataModule_442.EXPORT_PROPERTY_NAME, true, []) || []
              ).slice(),
              a = { sz: '', sf: '', fm: 'png' },
              GMenu = [
                { sz: '1x', sf: '@1x' },
                { sz: '2x', sf: '@2x' },
                { sz: '3x', sf: '@3x' },
                { sz: '1.5x', sf: '@1,5x' },
                { sz: '0.5x', sf: '@0,5x' },
              ],
              s = 0;
            s < GMenu.length;
            ++s
          ) {
            for (
              var GProperties = GMenu[s], ZipDirectory = false, GLoginPanel = 0;
              GLoginPanel < GTools.length;
              ++GLoginPanel
            )
              if (GTools[GLoginPanel].sz === GProperties.sz) {
                ZipDirectory = true;
                break;
              }
            if (!ZipDirectory) {
              ((a.sz = GProperties.sz), (a.sf = GTools.length > 0 ? GProperties.sf : ''));
              break;
            }
          }
          (GTools.push(a), require.setProperty(DataModule_442.EXPORT_PROPERTY_NAME, GTools, true));
        }
      } finally {
        e.commitTransaction(
          GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'action.add'))
        );
      }
    }

    _settingChanged(e) {
      'touch' === e.key && this._updateProperties();
    }

    _updateExport(e, t, n) {
      var GTools = this._document.getEditor();
      GTools.beginTransaction();
      try {
        for (var a = 0; a < this._elements.length; ++a) {
          var GMenu = this._elements[a],
            s = GMenu.getProperty(DataModule_442.EXPORT_PROPERTY_NAME, true);
          !s ||
            e >= s.length ||
            (((s = s.slice())[e] = $.extend({}, s[e])),
            (s[e][t] = n),
            GMenu.setProperty(DataModule_442.EXPORT_PROPERTY_NAME, s, true));
        }
      } finally {
        GTools.commitTransaction(
          GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'action.update-setting'))
        );
      }
    }

    _removeExport(e) {
      var t = this._document.getEditor();
      t.beginTransaction();
      try {
        for (var require = 0; require < this._elements.length; ++require) {
          var GTools = this._elements[require],
            a = GTools.getProperty(DataModule_442.EXPORT_PROPERTY_NAME, true);
          !a ||
            e >= a.length ||
            ((a = a.slice()).splice(e, 1),
            GTools.setProperty(DataModule_442.EXPORT_PROPERTY_NAME, a, true));
        }
      } finally {
        t.commitTransaction(
          GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'action.remove'))
        );
      }
    }

    _afterPropertiesChange(e) {
      !e.temporary &&
        this._elements.length &&
        this._elements[0] === e.node &&
        e.properties.indexOf(DataModule_442.EXPORT_PROPERTY_NAME) >= 0 &&
        this._updateProperties();
    }

    _updateProperties() {
      var e = [],
        t = gDesigner.isTouchEnabled(),
        n = t ? '40%' : '30%',
        GTools = t ? '25%' : '35%',
        a = t ? '25%' : '30%',
        GMenu = t ? '12%' : '5%';
      if (this._elements)
        for (let t = 0; t < this._elements.length; ++t) {
          var GProperties =
            this._elements[t].getProperty(DataModule_442.EXPORT_PROPERTY_NAME, true, []) || [];
          if (GProperties)
            for (var ZipDirectory = 0; ZipDirectory < GProperties.length; ++ZipDirectory)
              ZipDirectory < e.length
                ? (e[ZipDirectory].diff = true)
                : e.push($.extend({}, GProperties[ZipDirectory]));
        }
      (this._panel.empty().css('margin', e.length ? '' : '0'),
        this._toolbar
          .toggleClass('empty-list', 0 === e.length)
          .find('label:first-child')
          .text(
            0 === e.length
              ? GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'text.make-exportable'))
              : GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.export'))
          ),
        this._exportButton.css('display', e.length ? '' : 'none'));
      for (let GProperties = 0; GProperties < e.length; ++GProperties) {
        var GLoginPanel = GProperties + 1 === e.length,
          GSettingChangedEvent = e[GProperties];
        $('<div></div>')
          .data('index', GProperties)
          .gPropertyRow({
            clazz: 'export-properties-row',
            columns: [
              {
                width: n,
                label: GLoginPanel
                  ? GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.size'))
                  : null,
                content: $('<div></div>')
                  .append(
                    $('<input/>')
                      .attr('type', 'text')
                      .css('margin', '0')
                      .css('width', '70%')
                      .val(GSettingChangedEvent.sz)
                      .on(
                        'change',
                        function (e) {
                          gDesigner.stats('exportproperties_change_size-dropdown');
                          var t = $(e.target);
                          this._updateExport(
                            $(e.target).closest('.g-property-row').data('index'),
                            'sz',
                            t.val()
                          );
                        }.bind(this)
                      )
                  )
                  .append(
                    $('<button></button>')
                      .addClass('g-flat')
                      .css('width', '30%')
                      .append($('<span class="gravit-icon-down"></span>').css('font-size', '12px'))
                      .on(
                        'click',
                        function (e) {
                          (gDesigner.stats('exportproperties_click_change-size'),
                            this._sizeMenu.open(
                              e.target,
                              s.Position.Left_Top,
                              s.Position.Right_Bottom,
                              function (t) {
                                $(e.target)
                                  .closest('div')
                                  .find('input')
                                  .val(t.getCaption())
                                  .trigger('change')
                                  .focus()
                                  .select();
                              }
                            ));
                        }.bind(this)
                      )
                  ),
              },
              {
                width: GTools,
                label: GLoginPanel
                  ? GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'text.suffix'))
                  : null,
                content: $('<input/>')
                  .attr('type', 'text')
                  .val(GSettingChangedEvent.diff ? null : GSettingChangedEvent.sf)
                  .attr(
                    'placeholder',
                    GSettingChangedEvent.diff
                      ? GCore.GLocale.get(
                          new GCore.GLocaleKey('GExportProperties', 'text.multiple')
                        )
                      : GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.none'))
                  )
                  .on(
                    'change',
                    function (e) {
                      gDesigner.stats('exportproperties_toggle_multiple');
                      var t = $(e.target);
                      this._updateExport(
                        $(e.target).closest('.g-property-row').data('index'),
                        'sf',
                        t.val()
                      );
                    }.bind(this)
                  ),
              },
              {
                width: a,
                label: GLoginPanel
                  ? GCore.GLocale.get(new GCore.GLocaleKey('GExportProperties', 'text.format'))
                  : null,
                content: $('<select></select>')
                  .append($('<option></option>').attr('value', 'png').text('PNG'))
                  .append($('<option></option>').attr('value', 'jpg').text('JPEG'))
                  .append($('<option></option>').attr('value', 'svg').text('SVG'))
                  .append($('<option></option>').attr('value', 'pdf').text('PDF'))
                  .val(GSettingChangedEvent.fm)
                  .on(
                    'change',
                    function (e) {
                      gDesigner.stats('exportproperties_format_dropdown');
                      var t = $(e.target);
                      this._updateExport(
                        $(e.target).closest('.g-property-row').data('index'),
                        'fm',
                        t.val()
                      );
                    }.bind(this)
                  ),
              },
              {
                width: GMenu,
                content: $('<button></button>')
                  .addClass(t ? 'g-flat gravit-icon-close' : 'g-flat')
                  .html(t ? '' : '&#x2715;')
                  .on(
                    'click',
                    function (e) {
                      (gDesigner.stats('exportproperties_click_removeitem'),
                        this._removeExport($(e.target).closest('.g-property-row').data('index')));
                    }.bind(this)
                  ),
              },
            ],
          })
          .appendTo(this._panel);
      }
    }

    toString() {
      return '[Object GExportProperties]';
    }

  }
  exports.exports = g;
}