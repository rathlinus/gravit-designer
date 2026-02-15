/**
 * Webpack Module #1656
 * Type: class
 * Name: GItemProperties
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    GProperties = require(123);
  const GSettingChangedEvent = require(135);
  class r extends GProperties {
    constructor() {
      super();
      this._items = [];
    }

    _panel = null;
    _document = null;
    _items = null;

    init(e) {
      ((this._panel = e),
        this._panel.addClass('item-property-panel'),
        $('<div></div>')
          .attr('major-item-only', true)
          .gPropertyRow({
            columns: [
              {
                width: 'auto',
                content: $('<label></label>')
                  .addClass('g-checkbox-label')
                  .append(
                    $('<input>')
                      .addClass('clk-checkbox')
                      .attr('type', 'checkbox')
                      .attr('data-item-property', 'clk')
                      .on(
                        'change',
                        function (e) {
                          (gDesigner.stats('itemproperties_click_through'),
                            this._assignProperty('clk', $(e.target).is(':checked')));
                        }.bind(this)
                      )
                  )
                  .append(
                    $('<span></span>')
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GItemProperties', 'text.click-through')
                        )
                      )
                      .addClass('clickElement')
                  ),
              },
            ],
          })
          .appendTo(this._panel),
        $('<div></div>')
          .attr('major-shape-only', true)
          .gPropertyRow({
            columns: [
              {
                width: 'auto',
                content: $('<label></label>')
                  .addClass('g-checkbox-label')
                  .append(
                    $('<input>')
                      .addClass('scc-checkbox')
                      .attr('type', 'checkbox')
                      .attr('data-item-property', 'scc')
                      .on(
                        'change',
                        function (e) {
                          (gDesigner.stats(
                            'itemproperties_toggle_scale-with-content',
                            $(e.target).is(':checked') ? 'enable' : 'disable'
                          ),
                            this._assignProperty('scc', $(e.target).is(':checked')));
                        }.bind(this)
                      )
                  )
                  .append(
                    $('<span></span>').text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GItemProperties', 'text.scale-with-content')
                      )
                    )
                  ),
              },
            ],
          })
          .appendTo(this._panel));
    }

    update(e, t) {
      if (
        (this._updateUI(),
        this._document &&
          (gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged, this),
          this._document
            .getScene()
            .removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChange
            ),
          (this._document = null)),
        (this._items = []),
        e)
      ) {
        gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this);
        for (var require = 0; require < t.length; ++require)
          t[require] instanceof GCore.GItem && this._items.push(t[require]);
        if (
          this._items.length &&
          this._items.length === t.length &&
          this._hasChildItem(this._items[0])
        )
          return (
            (this._document = e),
            this._document
              .getScene()
              .addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            this._updateProperties(),
            true
          );
      }
      return false;
    }

    _updateUI() {
      gDesigner.isTouchEnabled()
        ? (this._panel.find('.clk-checkbox').gCheckboxSlider(),
          this._panel.find('.scc-checkbox').gCheckboxSlider())
        : (this._panel.find('.clk-checkbox').gCheckboxSlider('unmount'),
          this._panel.find('.scc-checkbox').gCheckboxSlider('unmount'));
    }

    _settingChanged(e) {
      'touch' === e.key && this._updateUI();
    }

    _afterPropertiesChange(e) {
      !e.temporary &&
        this._items.length > 0 &&
        this._items[0] === e.node &&
        this._updateProperties();
    }

    _updateProperties() {
      var e = this._items[0];
      this._hasChildItem(e)
        ? (this._panel.find('[major-item-only]').css('display', ''),
          this._panel
            .find('input[data-item-property="clk"]')
            .prop('disabled', false)
            .prop('checked', e.getProperty('clk')),
          e instanceof GCore.GShape && !(e instanceof GCore.GImage && e.getProperty('dblMode'))
            ? (this._panel.find('[major-shape-only]').css('display', ''),
              this._panel.find('[major-item-only]').addClass('item-click-through'),
              this._panel.find('[major-shape-only]').addClass('shape-scale-with-content'),
              this._panel
                .find('input[data-item-property="scc"]')
                .prop('checked', e.getProperty('scc')))
            : (this._panel.find('[major-shape-only]').css('display', 'none'),
              this._panel.find('[major-item-only]').removeClass('item-click-through'),
              this._panel.find('[major-shape-only]').removeClass('shape-scale-with-content')))
        : (this._panel.find('[major-item-only]').css('display', 'none'),
          this._panel.find('[major-shape-only]').css('display', 'none'),
          this._panel.find('[major-item-only]').removeClass('item-click-through'),
          this._panel.find('[major-shape-only]').removeClass('shape-scale-with-content'));
    }

    _assignProperty(e, t, n) {
      if ('clk' == e || 'scc' == e) {
        var GProperties = this._document.getEditor();
        GProperties.beginTransaction();
        try {
          for (
            var GSettingChangedEvent = 0;
            GSettingChangedEvent < this._items.length;
            ++GSettingChangedEvent
          ) {
            var r = this._items[GSettingChangedEvent];
            this._hasChildItem(r) &&
              ('clk' == e || r instanceof GCore.GShape) &&
              this._items[GSettingChangedEvent].setProperties([e], [t]);
          }
        } finally {
          GProperties.commitTransaction(n);
        }
      }
    }

    _hasChildItem(e) {
      return (
        !!e.hasMixin(GCore.GNode.Container) &&
        !e.acceptChildren(
          function (e) {
            return !(e instanceof GCore.GItem);
          },
          false,
          false
        )
      );
    }

    toString() {
      return '[Object GItemProperties]';
    }

  }
  exports.exports = r;
}