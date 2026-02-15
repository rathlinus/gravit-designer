/**
 * Webpack Module #1695
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(4) /* stub_requires_668 */, require(13)) /* stub_requires_679 */;
  var GEditor = require(15) /* GEditor */,
    GRenameLayerAction = _interopRequireDefault(require(1340) /* GRenameLayerAction */),
    GCycleThroughLayersAction = _interopRequireDefault(
      require(1344) /* GCycleThroughLayersAction */
    ),
    s = {
      init: function (e) {
        e = $.extend({ selector: null, submitCallback: null, noDblClickEdit: false }, e);
        var t = this;
        return this.each(function () {
          if (($(t).data('gautoedit', { options: e, input: null }), !e.noDblClickEdit)) {
            var require = $(t).data('gautoedit');
            $(t).on('dblclick', function (e) {
              s.open.call(t, require);
            });
          }
        });
      },
      open: function (e) {
        var t = this,
          n = $(this);
        e.input && s.close.call(this, e);
        var _interopRequireDefault,
          l = e.options.containerSelector
            ? n.find(e.options.containerSelector)
            : e.options.getContainer && 'function' == typeof e.options.getContainer
              ? e.options.getContainer()
              : n,
          c = e.options.textSelector ? n.find(e.options.textSelector).text() : l.text(),
          d = l.offset();
        ((e.value = c),
          e.options.textarea
            ? ((_interopRequireDefault = $('<textarea>')),
              e.options.textareaResizable || _interopRequireDefault.css({ resize: 'none' }))
            : (_interopRequireDefault = $('<input>').attr('type', 'text')),
          e.options.style &&
            'object' == typeof e.options.style &&
            _interopRequireDefault.css(e.options.style),
          gDesigner.isTouchEnabled() &&
            document.addEventListener(
              'click',
              function n(_interopRequireDefault) {
                $(_interopRequireDefault.target).hasClass('g-auto-edit') ||
                  (document.removeEventListener('click', n, true), s.submit.call(t, e));
              },
              true
            ),
          (e.input = _interopRequireDefault
            .css({
              position: 'absolute',
              left: d.left + 'px',
              top: d.top + 'px',
              width: l.outerWidth() + 'px',
              height: l.outerHeight() + 'px',
            })
            .addClass('g-auto-edit')
            .val(e.value)
            .on('blur', () => {
              s.submit.call(t, e);
            })
            .on('keydown', (n) => {
              if (GEditor.GKey.translateCode(n.code) === GEditor.GKey.Constant.TAB) {
                s.submit.call(t, e);
                const _interopRequireDefault = n.shiftKey
                  ? GCycleThroughLayersAction.default.Type.Previous
                  : GCycleThroughLayersAction.default.Type.Next;
                return (
                  gDesigner.executeAction(
                    ''
                      .concat(GCycleThroughLayersAction.default.ID, '.')
                      .concat(_interopRequireDefault),
                    [GCycleThroughLayersAction.default.Mode.Focus]
                  ),
                  gDesigner.executeAction(GRenameLayerAction.default.ID),
                  false
                );
              }
            })
            .on('keyup', function (n) {
              switch (GEditor.GKey.translateKey(n.keyCode)) {
                case GEditor.GKey.Constant.ENTER:
                  s.submit.call(t, e);
                  break;
                case GEditor.GKey.Constant.ESC:
                  s.close.call(t, e);
              }
            })
            .appendTo($('body'))
            .focus()
            .select()));
      },
      submit: function (e) {
        var t = $(this),
          n = e.input ? e.input.val() : null;
        (s.close.call(this, e),
          n &&
            e.value !== n &&
            (e.options.submitCallback
              ? e.options.submitCallback.call(this, n)
              : t.trigger('submitvalue', n)));
      },
      close: function (e) {
        $(this);
        e.input && (e.input.remove(), (e.input = null), (e.value = null));
      },
    };
  $.fn.gAutoEdit = function (e) {
    return s[e]
      ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : 'object' != typeof e && e
        ? void $.error('Method ' + e + ' does not exist on jQuery.myPlugin')
        : s.init.apply(this, arguments);
  };
}
