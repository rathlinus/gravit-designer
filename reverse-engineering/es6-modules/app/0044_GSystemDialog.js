/**
 * Webpack Module #44
 * Type: class
 * Name: GSystemDialog
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(30) /* polyfill_Object_assign */,
    require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15); /* GEditor */
  class a {
    static error(e) {
      let { showTitle: module = true, closeCallback: require } =
        arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      return a.custom({
        title: module
          ? GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.something-wrong'))
          : '',
        subtitle: gApi.formatError(e),
        closeCallback: require,
      });
    }
    static externalFileError(e) {
      let module = e
        ? GCore.GLocale.get(new GCore.GLocaleKey('GContainer', 'text.load-failed-from-recent'))
        : GCore.GLocale.get(new GCore.GLocaleKey('GContainer', 'text.load-failed-from-link'));
      return a.custom({ subtitle: module, icon: 'error' });
    }
    static splashScreenError(e, t, n) {
      var GCore = $('<div></div>').append($('<div></div>').addClass('message').html(e));
      const GEditor = [];
      return (
        n &&
          GEditor.push(
            $('<button></button>')
              .text(t)
              .on('click', (e) => {
                (n && n(e), GCore.gDialog('close'));
              })
          ),
        GCore.gDialog({
          releaseOnClose: true,
          className: 'g-system-dialog g-splash-screen-error-dialog',
          buttons: GEditor,
        }),
        GCore.gDialog('open', false),
        GCore
      );
    }
    static async confirm(e, t, n, a, r, s, l, c) {
      if (c) {
        let e = () => {
          try {
            return gContainer.getProperty(c);
          } catch (e) {
            return false;
          }
        };
        if (await e()) return;
      }
      var d = $('<div></div>').append($('<div></div>').addClass('message').html(e));
      let u;
      const p = (e) => {
        (u && document.removeEventListener('keydown', u, true), d.gDialog('close'), t && t(e));
      };
      (s || l) &&
        ((u = (e) => {
          s && GEditor.GKey.translateKey(e.keyCode) === GEditor.GKey.Constant.ENTER
            ? d.gDialog('isOpen') && (e.preventDefault(), e.stopImmediatePropagation(), p(true))
            : l &&
              GEditor.GKey.translateKey(e.keyCode) === GEditor.GKey.Constant.ESC &&
              d.gDialog('isOpen') &&
              (e.preventDefault(), e.stopImmediatePropagation(), p(false));
        }),
        document.addEventListener('keydown', u, true));
      const g = (e) => (e && 'object' == typeof e ? e.text : e),
        h = (e) => !!e && 'object' == typeof e && !!e.pro,
        f = !!(m = a) && 'object' == typeof m && !!m.disabled;
      var m;
      (d.gDialog({
        releaseOnClose: true,
        className: 'g-system-dialog g-confirm-dialog' + (c ? ' g-onetime-dialog' : ''),
        buttons: [
          $('<button></button>')
            .text(g(n) || GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'cancel')))
            .gPro({ pro: h(n) })
            .on('click', () => {
              p(false);
            }),
          $('<button></button>')
            .addClass('primary')
            .toggleClass('g-disabled', f)
            .text(g(a) || GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
            .gPro({ pro: h(a) })
            .on('click', () => {
              f || p(true);
            }),
        ],
      }),
        c &&
          d
            .closest('.g-dialog')
            .find('.g-dialog-footer')
            .prepend(
              $('<label></label>').append([
                $('<input>')
                  .attr('type', 'checkbox')
                  .on('change', function () {
                    this.checked
                      ? gContainer.setProperty(c, true)
                      : gContainer.setProperty(c, false);
                  }),
                $('<span></span>').text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GSystemDialog', 'text.do-not-show-again'))
                ),
              ])
            ),
        null === r && (r = false),
        d.gDialog('open', r));
    }
    static prompt(e, t, n, GEditor, a, r) {
      var s = n && 'string' != typeof n,
        l = s
          ? n
          : $('<input/>')
              .addClass('max-width')
              .attr('type', 'text')
              .val(n || '')
              .on('keypress', (e) => {
                13 === e.keyCode || 'Enter' === e.key
                  ? (c.gDialog('close'), t && t(!!s || l.val()))
                  : (27 !== e.keyCode && 'Escape' !== e.key) || (c.gDialog('close'), t && t());
              }),
        c = $('<div></div>')
          .append($('<div></div>').addClass('message').html(e))
          .append($('<div></div>').addClass('input').append(l));
      (c.gDialog({
        releaseOnClose: true,
        className: 'g-system-dialog g-prompt-dialog ' + r,
        buttons: [
          $('<button></button>')
            .text(GEditor || GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'cancel')))
            .on('click', () => {
              (c.gDialog('close'), t && t());
            }),
          $('<button></button>')
            .addClass('primary')
            .text(a || GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
            .on('click', () => {
              t && (t(!!s || l.val()), c.gDialog('close'));
            }),
        ],
      }),
        c.gDialog('open', true),
        c.find('input:first-child').focus().select());
    }
    static alert(e, t) {
      let { closeByEnter: require = true, className: a } =
        arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      var r,
        s = $('<div></div>').append($('<div></div>').addClass('message').html(e));
      const l = () => {
        (require && document.removeEventListener('keypress', r, true),
          s.gDialog('close'),
          t && t());
      };
      return (
        (r = (e) => {
          GEditor.GKey.translateKey(e.keyCode) === GEditor.GKey.Constant.ENTER &&
            s.gDialog('isOpen') &&
            (e.preventDefault(), e.stopImmediatePropagation(), l());
        }),
        s.gDialog({
          releaseOnClose: true,
          className: 'g-system-dialog g-alert-dialog' + (a ? ' ' + a : ''),
          buttons: [
            $('<button></button>')
              .addClass('primary')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
              .on('click', () => l()),
          ],
        }),
        s.gDialog('open', false),
        require && document.addEventListener('keypress', r, true),
        s
      );
    }
    static showOneTimeDialog(e, t) {
      return gContainer.getProperty(t).then((n) => {
        if (!n) {
          var GEditor = $('<div></div>').append($('<div></div>').addClass('message').html(e));
          return (
            GEditor.gDialog({
              releaseOnClose: true,
              className: 'g-system-dialog g-onetime-dialog',
              buttons: [
                $('<button></button>')
                  .addClass('primary')
                  .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
                  .on('click', () => {
                    GEditor.gDialog('close');
                  }),
              ],
            }),
            GEditor.closest('.g-dialog')
              .find('.g-dialog-footer')
              .prepend(
                $('<label></label>').append([
                  $('<input>')
                    .attr('type', 'checkbox')
                    .on('change', function () {
                      this.checked
                        ? gContainer.setProperty(t, true)
                        : gContainer.setProperty(t, false);
                    }),
                  $('<span></span>').text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GSystemDialog', 'text.do-not-show-again')
                    )
                  ),
                ])
              ),
            GEditor.gDialog('open', false),
            GEditor
          );
        }
      });
    }
    static showCDRWarning() {
      return gDesigner.getSetting('disable_cdr_warning', false)
        ? Promise.resolve()
        : this.info({
            className: 'g-cdr-warning',
            setting: 'disable_cdr_warning',
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GSystemDialog', 'text.cdr-warning-title')
            ),
            label: GCore.GLocale.get(
              new GCore.GLocaleKey('GSystemDialog', 'text.cdr-warning-label')
            ),
            message: GCore.GLocale.get(
              new GCore.GLocaleKey('GSystemDialog', 'text.cdr-warning-message')
            ),
          });
    }
    static showCDRUnsupportedObjectWarning(e) {
      if (
        !this.isDialogOpen('.g-system-dialog.g-dialog-v1') &&
        !gDesigner.getSetting('disable_cdr_unsupported_effect', false)
      ) {
        const t =
          e instanceof GCore.GStylable.Effect
            ? GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GSystemDialog',
                  'text.cdr-unsupported-object-warning-effect-name'
                )
              ).replace('%name', e.getNodeNameTranslated())
            : GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GSystemDialog',
                  'text.cdr-unsupported-object-warning-generic-name'
                )
              );
        return this.info({
          setting: 'disable_cdr_unsupported_effect',
          title: GCore.GLocale.get(new GCore.GLocaleKey('GSystemDialog', 'text.cdr-warning-title')),
          label: GCore.GLocale.get(
            new GCore.GLocaleKey('GSystemDialog', 'text.cdr-unsupported-objects-warning-label')
          ),
          message: GCore.GLocale.get(
            new GCore.GLocaleKey('GSystemDialog', 'text.cdr-unsupported-object-warning-message')
          ).replace('%name', t),
        });
      }
      return Promise.resolve();
    }
    static showCDRUnsupportedObjectsWarning() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
      return gDesigner.getSetting('disable_cdr_unsupported_effects', false)
        ? Promise.resolve(gDesigner.getSetting('default_cdr_unsupported_effects', 1))
        : (gDesigner.stats('unsupported-dialog_open'),
          this.warning({
            setting: 'disable_cdr_unsupported_effects',
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GSystemDialog', 'text.cdr-unsupported-objects-warning-title')
            ),
            label: GCore.GLocale.get(
              new GCore.GLocaleKey('GSystemDialog', 'text.cdr-unsupported-objects-warning-label')
            ),
            message: GCore.GLocale.get(
              new GCore.GLocaleKey('GSystemDialog', 'text.cdr-unsupported-objects-warning-message')
            ),
            options: {
              setting: 'default_cdr_unsupported_effects',
              values: [
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    'GSystemDialog',
                    'text.cdr-unsupported-objects-warning-option-0'
                  )
                ),
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    'GSystemDialog',
                    'text.cdr-unsupported-objects-warning-option-1'
                  )
                ),
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    'GSystemDialog',
                    'text.cdr-unsupported-objects-warning-option-2'
                  )
                ),
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    'GSystemDialog',
                    'text.cdr-unsupported-objects-warning-option-3'
                  )
                ),
              ],
              tooltips: [
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    'GSystemDialog',
                    'text.cdr-unsupported-objects-warning-option-0-tooltip'
                  )
                ),
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    'GSystemDialog',
                    'text.cdr-unsupported-objects-warning-option-1-tooltip'
                  )
                ),
                '',
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    'GSystemDialog',
                    'text.cdr-unsupported-objects-warning-option-3-tooltip'
                  )
                ),
              ],
              onClick: () => {
                gDesigner.stats('unsupported-dialog_click_option');
              },
            },
            details: {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GSystemDialog',
                  'text.cdr-unsupported-objects-warning-details-label'
                )
              ),
              onClick: () => {
                gDesigner.stats('unsupported-dialog_click_details');
              },
              items: exports,
            },
            onCancel: () => {
              gDesigner.stats('unsupported-dialog_click_cancel');
            },
            onSubmit: () => {
              gDesigner.stats('unsupported-dialog_click_submit');
            },
          }).then((e) => (gDesigner.setSetting('default_cdr_unsupported_effects', e), e)));
    }
    static warning(e) {
      return this._dialogV1(
        Object.assign(
          {
            icon: 'assets/icon/dialog/warning.svg',
            buttons: [
              $('<button/>')
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'cancel')))
                .attr(
                  'data-title',
                  GCore.GLocale.get(new GCore.GLocaleKey('GFilesPanel', 'action.cancel-tooltip'))
                )
                .on('click', (t) => {
                  (e.onCancel && e.onCancel.call(this),
                    $(t.target).closest('.g-dialog-content').gDialog('close', true));
                }),
              $('<button/>')
                .addClass('primary')
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
                .on('click', (t) => {
                  (e.onSubmit && e.onSubmit.call(this),
                    $(t.target).closest('.g-dialog-content').gDialog('close'));
                }),
            ],
          },
          e || {}
        )
      );
    }
    static info(e) {
      return this._dialogV1(
        Object.assign(
          {
            icon: 'assets/icon/dialog/info.svg',
            buttons: [
              $('<button/>')
                .addClass('primary')
                .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
                .on('click', (e) => $(e.target).closest('.g-dialog-content').gDialog('close')),
            ],
          },
          e || {}
        )
      );
    }
    static isDialogOpen(e) {
      return $(e).length > 0;
    }
    static _dialogV1() {
      let {
        title: exports = '',
        label: module = '',
        message: require = '',
        icon: GEditor = 'assets/icon/dialog/info.svg',
        closeable: a = true,
        buttons: r = [],
        details: s,
        options: l,
        setting: c,
        className: d = '',
      } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      const u = {},
        p = new Promise((e, t) => Object.assign(u, { resolve: e, reject: t })),
        g = $('<div></div>').gDialog({
          releaseOnClose: true,
          className: 'g-system-dialog g-dialog-v1 ' + d,
          closeCallback: (e) => {
            e
              ? u.reject()
              : (c &&
                  gDesigner.setSetting(
                    c,
                    g.find('input[data-property="'.concat(c, '"]')).is(':checked')
                  ),
                l
                  ? u.resolve(parseInt(g.find('input[name="options"]:checked').val()) || 0)
                  : u.resolve());
          },
        }),
        h = $('<header></header>').append($('<span/>').addClass('title').text(exports)).appendTo(g);
      return (
        a &&
          h.append(
            $('<div></div>')
              .addClass('g-btn-close')
              .append($('<span></span>').addClass('gravit-icon-close'))
              .on('click', () => g.gDialog('close', true))
          ),
        $('<main></main>')
          .append(
            $('<img/>')
              .attr('src', GEditor)
              .css('display', GEditor ? '' : 'none')
          )
          .append(
            $('<div/>')
              .addClass('container')
              .append(
                $('<div/>')
                  .addClass('content')
                  .append($('<span/>').addClass('label').text(module))
                  .append($('<pre/>').addClass('message').text(require))
                  .append(
                    s
                      ? $('<div/>')
                          .addClass('details')
                          .append(
                            $('<label/>')
                              .append($('<span/>').text(s.label))
                              .append($('<span/>').addClass('gravit-icon-down icon'))
                              .on('click', (e) => {
                                s.onClick && s.onClick.call(this);
                                const module = $(e.target).closest('.details');
                                (module.find('.panel').toggleClass('collapsed'),
                                  module
                                    .find('.icon')
                                    .toggleClass('gravit-icon-down gravit-icon-up'));
                              })
                          )
                          .append(
                            $('<div/>')
                              .addClass('panel collapsed')
                              .append(
                                $('<ul/>').append(
                                  s.items.map((e) => $('<li/>').append($('<span/>').text(e)))
                                )
                              )
                          )
                      : ''
                  )
                  .append(
                    l
                      ? $('<div/>')
                          .addClass('options')
                          .append(
                            l.values.map((e, t) => {
                              let require = $('<label/>')
                                .append(
                                  $('<input/>')
                                    .attr('type', 'radio')
                                    .attr('name', 'options')
                                    .attr('value', t)
                                    .prop(
                                      'checked',
                                      (e) =>
                                        e === (l.setting ? gDesigner.getSetting(l.setting, 0) : 0)
                                    )
                                    .on('change', () => {
                                      l.onClick && l.onClick.call(this);
                                    })
                                )
                                .append($('<span/>').text(e));
                              return (
                                l.tooltips &&
                                  l.tooltips[t] &&
                                  require.append(
                                    $('<span/>')
                                      .addClass('tooltip')
                                      .text('?')
                                      .attr('data-title', l.tooltips[t])
                                  ),
                                require
                              );
                            })
                          )
                      : ''
                  )
              )
              .append(
                $('<footer/>')
                  .append(
                    c
                      ? $('<label/>')
                          .append($('<input>').attr('type', 'checkbox').attr('data-property', c))
                          .append(
                            $('<span/>').text(
                              GCore.GLocale.get(
                                new GCore.GLocaleKey('GSystemDialog', 'text.do-not-show-again')
                              )
                            )
                          )
                      : ''
                  )
                  .append(r.length ? $('<div/>').addClass('buttons').append(r) : '')
              )
          )
          .appendTo(g),
        g.gDialog('open', a),
        p
      );
    }
    static messageWithInfo(e) {
      let { mainMessage: module, infoMessage: require } = e;
      const GEditor = $('<div />').gDialog({
          releaseOnClose: true,
          className: 'g-system-dialog g-message-with-info-dialog',
          buttons: [
            $('<button/>')
              .addClass('primary')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
              .on('click', () => GEditor.gDialog('close')),
          ],
        }),
        a = $('<div />').addClass('content').appendTo(GEditor);
      return (
        module && a.append($('<div />').addClass('main-message').html(module)),
        require &&
          a.append(
            $('<div />')
              .addClass('info-message')
              .append(
                $('<div />')
                  .addClass('info-message-icon')
                  .append($('<img/>').attr('src', 'assets/icon/dialog/info.svg'))
              )
              .append($('<div />').addClass('info-message-content').html(require))
          ),
        GEditor.gDialog('open', true)
      );
    }
    static custom(e) {
      let {
        title: module = '',
        subtitle: require = '',
        styles: GEditor = {},
        footer: a,
        icon: r,
        buttons: s = [],
        openCallback: l,
        closeCallback: c,
        closeable: d = true,
        className: u = '',
        dontShowAgainCb: p,
      } = e;
      var g = [];
      const h = $('<div></div>').gDialog({
        releaseOnClose: true,
        className: 'g-system-dialog g-custom-dialog '.concat(u),
        closeCallback: (e) => {
          (g.length && (g.forEach((e) => Mousetrap.unbind(e)), (g = [])), c && c(e));
        },
        openCallback: l,
      });
      (GEditor.dialog && h.css(GEditor.dialog),
        d &&
          $('<div></div>')
            .addClass('g-btn-close')
            .append($('<span></span>').addClass('gravit-icon-close'))
            .on('click', () => h.gDialog('close'))
            .appendTo(h),
        r && $('<div></div>').addClass('icon').append($('<div></div>').addClass(r)).appendTo(h));
      let f = $('<div></div>')
        .addClass('content')
        .append($('<span></span>').addClass('title').html(module))
        .append($('<span></span>').addClass('subtitle').html(require))
        .appendTo(h);
      if ((a && f.append($('<span></span>').addClass('footer').html(a)), s && s.length)) {
        var m = $('<div></div>').addClass('buttons');
        (p &&
          m.prepend(
            $('<label></label>').append([
              $('<input>')
                .attr('type', 'checkbox')
                .on('change', function () {
                  p(this.checked);
                }),
              $('<span></span>')
                .addClass('dont-show-this-again-message')
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GSystemDialog', 'text.do-not-show-again'))
                ),
            ])
          ),
          m.append(
            s.map((e) => {
              let {
                label: module,
                onclick: require,
                highlighted: GCore,
                className: GEditor,
                position: a,
                shortcut: r,
                closeOnClick: s = false,
              } = e;
              var l = false,
                c = () => {
                  l ||
                    ((l = true),
                    r && (Mousetrap.unbind(r), g.splice(g.indexOf(r), 1)),
                    g.length && (g.forEach((e) => Mousetrap.unbind(e)), (g = [])),
                    s && h.gDialog('close'),
                    require && require(h));
                },
                d = $('<button></button>')
                  .append($('<span></span>').text(module))
                  .addClass('g-pro-button ' + (GCore ? 'highlighted' : ''))
                  .on('click', () => c());
              return (
                r && (Mousetrap.bind(r, c), g.push(r)),
                GEditor &&
                  ((GEditor = GEditor instanceof Array ? GEditor : [GEditor]),
                  GEditor.forEach((e) => d.addClass(e))),
                a && d.css('float', a),
                d
              );
            })
          ),
          GEditor.buttons && m.css(GEditor.buttons),
          m.appendTo(f));
      }
      return (h.gDialog('open', d), h);
    }
    static advanced(e) {
      let {
        title: module = '',
        buttons: require = [],
        closeCallback: GCore,
        closeable: GEditor = true,
      } = e;
      var a = [],
        r = $('<div></div>').append($('<div></div>').addClass('message').html(module));
      return (
        r.gDialog({
          releaseOnClose: true,
          className: 'g-system-dialog g-advanced-dialog',
          closeCallback: (e) => {
            (a.length && (a.forEach((e) => Mousetrap.unbind(e)), (a = [])), GCore && GCore(e));
          },
          buttons: require.map((e) => {
            let {
              label: module,
              onclick: require,
              highlighted: GCore,
              className: GEditor,
              position: s,
              shortcut: l,
              closeOnClick: c = false,
            } = e;
            var d = false,
              u = () => {
                d ||
                  ((d = true),
                  l && (Mousetrap.unbind(l), a.splice(a.indexOf(l), 1)),
                  a.length && (a.forEach((e) => Mousetrap.unbind(e)), (a = [])),
                  require(r),
                  c && r.gDialog('close', false));
              },
              p = $('<button></button>')
                .append($('<span></span>').text(module))
                .addClass(GCore ? 'primary' : '')
                .on('click', () => u());
            return (
              l && (Mousetrap.bind(l, u), a.push(l)),
              GEditor &&
                ((GEditor = GEditor instanceof Array ? GEditor : [GEditor]),
                GEditor.forEach((e) => p.addClass(e))),
              s && p.css('float', s),
              p
            );
          }),
        }),
        r.gDialog('open', GEditor),
        r
      );
    }
    toString() {
      return '[Object GSystemDialog]';
    }
  }
  ((a.Shortcut = { Esc: 'esc', Enter: 'enter' }), (exports.exports = a));
}
