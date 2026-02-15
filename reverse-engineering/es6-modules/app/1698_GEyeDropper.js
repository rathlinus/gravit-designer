/**
 * Webpack Module #1698
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    GEditor = require(15); /* GEditor */
  const r = require(1699); /* module_1699 */
  function s() {}
  GCore.GObject.inheritAndMix(s, GCore.GObject);
  var l = {
    init: function (e) {
      return (
        (e = $.extend({}, e)),
        this.each(function () {
          var t = this,
            n = $(this);
          n.addClass('g-button')
            .data('g-eye-dropper', {
              picker: null,
              documentMove: null,
              documentMouseDown: null,
              documentKeyDown: null,
              rgba: null,
            })
            .attr(
              'data-title',
              GCore.GLocale.get(new GCore.GLocaleKey('GEyeDropper', 'text.tooltip'))
            )
            .append($('<span></span>').addClass('gravit-icon-picker'))
            .on('click', function (GTools) {
              n.closest('.g-disabled').length ||
                (e.onClick ? e.onClick.call(this) : gDesigner.stats('eyedropper_click_pick'),
                GTools.stopPropagation(),
                GTools.preventDefault(),
                l.setActive.call(t, !l.isActive.call(t), GTools.pageX, GTools.pageY));
            });
        })
      );
    },
    isActive: function () {
      var e = $(this).data('g-eye-dropper');
      return !!e && !!e.picker;
    },
    setValue: function (e) {
      const module = $(this),
        require = 'string' == typeof e ? e : GCore.GPattern.asCSSBackground(e);
      module
        .find('.g-eye-dropper-preview-color-difference')
        .find('.current')
        .css({ background: require });
      const GTools = module.data('g-eye-dropper') || {};
      ((GTools.currentColor = require), module.data('g-eye-dropper', GTools));
    },
    setActive: function (e, t, n) {
      if (e !== l.isActive.call(this)) {
        var s = $(this),
          c = s.data('g-eye-dropper'),
          d = function () {
            (gDesigner
              .getToolManager()
              .removeEventListener(GTools.GToolManager.ToolChangedEvent, d, this),
              $('.g-eye-dropper-picker').remove());
          }.bind(this);
        if (e) {
          var u = gDesigner.getWindows().getActiveWindow();
          if (!u) return;
          s.addClass('g-active');
          for (
            var p = u.getView().getSceneCanvas().getBitmap().getHTMLElement(true),
              g = GCore.GPaintCanvas.getScreenDPI(),
              h = $('<canvas></canvas>')
                .attr({ width: 135, height: 135 })
                .addClass('g-cursor-pixel g-eye-dropper-preview'),
              f = $('<span></span>').addClass('g-eye-dropper-preview-color'),
              m = $('<span/>')
                .addClass('g-eye-dropper-preview-color-difference')
                .append(
                  $('<div/>')
                    .addClass('color-preview')
                    .addClass('current')
                    .css({ background: c.currentColor })
                )
                .append($('<div/>').addClass('color-preview').addClass('new')),
              y = $('<div/>').addClass('g-eye-dropper-color-pointer'),
              v = h[0].getContext('2d'),
              _ = [
                'imageSmoothingEnabled',
                'webkitImageSmoothingEnabled',
                'mozImageSmoothingEnabled',
              ],
              b = 0;
            b < _.length;
            ++b
          ) {
            var w = _[b];
            if (CanvasRenderingContext2D.prototype.hasOwnProperty(w)) {
              v[w] = false;
              break;
            }
          }
          c.picker = $('<div></div>')
            .addClass('g-eye-dropper-picker g-cursor-pixel')
            .append(h)
            .append(f)
            .append(m)
            .append(y)
            .appendTo($('body'));
          var C = function (e) {
            return 1 == e.length ? '0' + e : e;
          };
          function x(e, t) {
            if ((v.setTransform(1, 0, 0, 1, 0, 0), u.viewContainsMouse(e, t))) {
              var n = e * g,
                GTools = t * g;
              ((n = Math.max(0, Math.min(n, p.width))),
                (GTools = Math.max(0, Math.min(GTools, p.height))));
              var GEditor = p.getContext('2d').getImageData(n, GTools, 1, 1).data,
                r =
                  C(GEditor[0].toString(16)) +
                  C(GEditor[1].toString(16)) +
                  C(GEditor[2].toString(16));
              ((r = r.toUpperCase()), (c.rgba = GEditor));
              const GCore = gDesigner.isTouchEnabled() ? 10 : 5;
              (h.css(
                'box-shadow',
                '0 0 0 '.concat(GCore, 'px rgb(') +
                  GEditor[0] +
                  ',' +
                  GEditor[1] +
                  ',' +
                  GEditor[2] +
                  ')'
              ),
                f.text('R:' + GEditor[0] + ' G:' + GEditor[1] + ' B:' + GEditor[2] + ' #' + r),
                f.css({
                  display: 'block',
                  top: t + 5 + 'px',
                  left: e - 55 + 'px',
                }),
                m.find('.new').css({ background: '#' + r }),
                y.css({
                  display: 'block',
                  top: t - 5 + 'px',
                  left: e - 5 + 'px',
                }),
                m.css({
                  display: 'block',
                  top: t - 76 + 'px',
                  left: e - 78 + 'px',
                }),
                v.clearRect(0, 0, 135, 135),
                v.drawImage(p, e * g - 8, t * g - 8, 16, 16, 0, 0, 135, 135));
            } else
              ((c.rgba = null),
                h.css('box-shadow', ''),
                f.css({ display: 'none' }),
                m.css({ display: 'none' }),
                y.attr('style', 'display: none !important'),
                v.clearRect(0, 0, 135, 135),
                (v.fillStyle = 'rgba(0,0,0,0.75)'),
                v.scale(0.9, 0.9),
                v.fillText(
                  GCore.GLocale.get(new GCore.GLocaleKey('GEyeDropper', 'text.preview')),
                  10,
                  72,
                  135
                ));
          }
          (gDesigner.isTouchEnabled() &&
            (c.draggablePoint = new r(
              h.get(0),
              (e) => {
                const t = h.get(0).getBoundingClientRect();
                let n = e.pageX,
                  GTools = e.pageY;
                ((n -= t.width - 8),
                  (GTools -= t.height - 30),
                  (n += 8),
                  (GTools += 8),
                  h.css({ left: n + 'px', top: GTools + 'px' }));
                const GCore = h.get(0).getBoundingClientRect(),
                  GEditor = GCore.left + GCore.width / 2,
                  r = GCore.top + GCore.height / 2;
                x.call(this, GEditor, r);
              },
              () => {
                (l.setActive.call(this, false), c.rgba && s.trigger('colorchange', [c.rgba]));
              }
            )),
            (c.documentMove = function (e) {
              if (gDesigner.isTouchEnabled()) return;
              const t = e.pageX,
                n = e.pageY,
                GTools = h.get(0).getBoundingClientRect(),
                GCore = t - GTools.width / 2 + 8,
                GEditor = n - GTools.height / 2 + 8;
              (h.css({ left: GCore + 'px', top: GEditor + 'px' }), x.call(this, t, n));
            }.bind(this)),
            (c.documentMouseDown = function (e) {
              gDesigner.isTouchEnabled()
                ? l.isActive.call(this)
                  ? l.setActive.call(this, false)
                  : l.setActive.call(this, true)
                : (l.setActive.call(this, false), c.rgba && s.trigger('colorchange', [c.rgba]));
            }.bind(this)),
            (c.documentKeyDown = function (e) {
              GEditor.GKey.translateKey(e.keyCode) === GEditor.GKey.Constant.ESC &&
                l.setActive.call(this, false);
            }.bind(this)),
            'number' == typeof t &&
              'number' == typeof n &&
              (gDesigner.isTouchEnabled()
                ? c.draggablePoint.moveTo(t, n, true)
                : c.documentMove({ pageX: t, pageY: n })),
            document.addEventListener('keydown', c.documentKeyDown),
            document.addEventListener('mousedown', c.documentMouseDown),
            document.addEventListener('mousemove', c.documentMove),
            gDesigner
              .getToolManager()
              .addEventListener(GTools.GToolManager.ToolChangedEvent, d, this));
        } else
          (document.removeEventListener('keydown', c.documentKeyDown),
            document.removeEventListener('mousedown', c.documentMouseDown),
            document.removeEventListener('mousemove', c.documentMove),
            gDesigner
              .getToolManager()
              .removeEventListener(GTools.GToolManager.ToolChangedEvent, d, this),
            c.picker.remove(),
            (c.picker = null),
            (c.documentKeyDown = null),
            (c.documentMouseDown = null),
            (c.documentMove = null),
            c.draggablePoint && c.draggablePoint.unmount(),
            s.removeClass('g-active'));
      }
    },
  };
  ((exports.exports = s),
    ($.fn.gEyeDropper = function (e) {
      return l[e]
        ? l[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : 'object' != typeof e && e
          ? void $.error('Method ' + e + ' does not exist on jQuery.myPlugin')
          : l.init.apply(this, arguments);
    }));
}
