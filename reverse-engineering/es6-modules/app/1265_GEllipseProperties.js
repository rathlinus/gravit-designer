/**
 * Webpack Module #1265
 * Type: class
 * Name: GEllipseProperties
 */

function (exports, module, require) {
  'use strict';
  (require(57) /* polyfill_parseInt */,
    require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    GProperties = require(123);
  require(173) /* stub_requires_1 */;
  class a extends GProperties {
    constructor() {
      super();
      this._ellipses = [];
    }

    _panel = null;
    _document = null;
    _ellipses = null;

    init(e) {
      this._panel = e;
      var t = function (e) {
        var t = this;
        if (0 === e.indexOf('etp-')) {
          var require = '',
            GProperties = parseInt(e.substr('etp-'.length));
          switch (GProperties) {
            case GCore.GEllipse.Type.Pie:
              require = 'gravit-icon-circle-pie';
              break;
            case GCore.GEllipse.Type.Chord:
              require = 'gravit-icon-ellipse-chord';
              break;
            case GCore.GEllipse.Type.Arc:
              require = 'gravit-icon-ellipse-arc';
              break;
            default:
              throw new Error('');
          }
          return $('<div></div>')
            .attr('data-property', e)
            .addClass('g-button g-icon')
            .on('click', function () {
              (gDesigner.stats('ellipse_change_type', GProperties),
                t._assignProperty(
                  'etp',
                  GProperties,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GEllipseProperties', 'action.change-shape')
                  )
                ),
                GProperties === GCore.GEllipse.Type.Arc && t._setBorderAlignmentCenter());
            })
            .append($('<span></span>').addClass(require));
        }
        if ('sa' === e || 'ea' === e)
          return $('<input>')
            .attr('type', 'text')
            .attr('data-property', e)
            .on('change', function () {
              gDesigner.stats('ellipse_change_angle');
              var n = GCore.GLength.parseEquationValue($(this).gInputBox('value'));
              null !== n
                ? ((n = GCore.GMath.normalizeAngleRadians(GCore.GMath.toRadians(n))),
                  t._assignProperty(
                    e,
                    GCore.GMath.PI2 - n,
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GEllipseProperties', 'action.change-angle')
                    )
                  ))
                : t._updateProperties();
            })
            .gInputBox();
        throw new Error('Unknown input property: ' + e);
      }.bind(this);
      ($('<div></div>')
        .addClass('ellipse-angles-property')
        .gPropertyRow({
          label: GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.angles')),
          columns: [
            { width: '50%', content: t('sa') },
            { width: '50%', content: t('ea') },
          ],
        })
        .appendTo(e),
        $('<div></div>')
          .addClass('ellipse-shape-property')
          .gPropertyRow({
            label: GCore.GLocale.get(new GCore.GLocaleKey('GEllipseProperties', 'text.shape')),
            columns: [
              {
                width: '33.3%',
                clazz: 'shape-type-chooser shape-arc',
                label: GCore.GLocale.get(new GCore.GLocaleKey('GEllipse', 'type.arc')),
                content: t('etp-' + GCore.GEllipse.Type.Arc),
              },
              {
                width: '33.3%',
                clazz: 'shape-type-chooser shape-chord',
                label: GCore.GLocale.get(new GCore.GLocaleKey('GEllipse', 'type.chord')),
                content: t('etp-' + GCore.GEllipse.Type.Chord),
              },
              {
                width: '33.3%',
                clazz: 'shape-type-chooser shape-pie',
                label: GCore.GLocale.get(new GCore.GLocaleKey('GEllipse', 'type.pie')),
                content: t('etp-' + GCore.GEllipse.Type.Pie),
              },
            ],
          })
          .appendTo(e));
    }

    update(e, t) {
      if (
        (this._document &&
          (this._document
            .getScene()
            .removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChange
            ),
          (this._document = null)),
        (this._ellipses = []),
        e)
      ) {
        for (var require = 0; require < t.length; ++require)
          t[require] instanceof GCore.GEllipse && this._ellipses.push(t[require]);
        if (this._ellipses.length && this._ellipses.length === t.length)
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

    _afterPropertiesChange(e) {
      !e.temporary &&
        this._ellipses.length > 0 &&
        this._ellipses[0] === e.node &&
        this._updateProperties();
    }

    _setBorderAlignmentCenter() {
      var e,
        t,
        n = ['_ba'],
        GProperties = [GCore.GStylable.BorderAlignment.Center],
        a = this._document.getEditor();
      a.beginTransaction();
      try {
        for (var r = 0, s = this._ellipses.length; r < s; ++r) {
          e = this._ellipses[r].getPaintLayers().getBorderLayers();
          for (var l = 0, c = e.length; l < c; l++)
            (t = e[l]) instanceof GCore.GStylable.BorderPaintLayer &&
              t.setProperties(n, GProperties);
        }
      } finally {
        a.commitTransaction(
          GCore.GLocale.get(new GCore.GLocaleKey('GEllipseProperties', 'text.ellipse-to-center'))
        );
      }
    }

    _updateProperties() {
      var e = this._ellipses[0];
      (this._panel.find('[data-property^="etp"]').each(function (t, n) {
        var GCore = $(n),
          GProperties = GCore.attr('data-property').substr('etp-'.length);
        GCore.toggleClass('g-active', e.getProperty('etp').toString() === GProperties);
      }),
        this._panel
          .find('input[data-property="sa"]')
          .val(
            GCore.GUtil.formatNumber(
              GCore.GMath.toDegrees(GCore.GMath.PI2 - e.getProperty('sa')),
              2
            )
          ),
        this._panel
          .find('input[data-property="ea"]')
          .val(
            GCore.GUtil.formatNumber(
              GCore.GMath.toDegrees(GCore.GMath.PI2 - e.getProperty('ea')),
              2
            )
          ));
    }

    _assignProperty(e, t, n) {
      this._assignProperties([e], [t], n);
    }

    _assignProperties(e, t, n) {
      var GCore = this._document.getEditor();
      GCore.beginTransaction();
      try {
        for (var GProperties = 0; GProperties < this._ellipses.length; ++GProperties)
          this._ellipses[GProperties].setProperties(e, t);
      } finally {
        GCore.commitTransaction(n);
      }
    }

    toString() {
      return '[Object GEllipseProperties]';
    }

  }
  exports.exports = a;
}