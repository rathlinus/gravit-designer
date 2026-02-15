/**
 * Webpack Module #1538
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(38)) /* stub_requires_680 */;
  const { GLocale: o, GLocaleKey: i } = require(1) /* GCore */,
    a = require(1166) /* module_1166 */,
    GUserModel = require(177) /* GUserModel */,
    {
      gApi: s,
      Notification: l,
      NotificationConstants: {
        ACTIONS: {
          ACTION_APPROVE: c,
          ACTION_REQUEST_APPROVE: d,
          ACTION_REOPEN: u,
          ACTION_IN_REVIEW: p,
        } = {},
      },
    } = require(10);
  class g {
    constructor() {
      ((this._container = null), (this._opened = false));
    }

    async _updateHistoryList() {
    const exports = this._container.find('.list');
    (exports.empty(), exports.addClass('loading'));
    var t = await s.annotations
      .getDesignHistory(gDesigner.getActiveDocument().getId())
      .catch((e) => []);
    (exports.append(
      t.map((e) => {
        const t = l.from(e);
        var n;
        switch (t.getAction()) {
          case c:
            n = o.get(new i('GFileStatusHistoryDialog', 'text.action-approved'));
            break;
          case d:
            n = o.get(new i('GFileStatusHistoryDialog', 'text.action-request-approval'));
            break;
          case u:
            n = o.get(new i('GFileStatusHistoryDialog', 'text.action-reopened'));
            break;
          case p:
            n = o.get(new i('GFileStatusHistoryDialog', 'text.action-in-review'));
        }
        if (n) {
          var GUserModel = $('<span></span>').addClass('annotation-title-group'),
            s = $('<span></span>')
              .html(n.replace('%name', this._getUserNameFromNotification(t)))
              .addClass('annotation-title')
              .appendTo(GUserModel),
            g = o.toLocaleDate(t.created, {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            });
          return (
            $('<span>').text('·').addClass('dot').appendTo(GUserModel),
            $('<span></span>').text(g).addClass('annotation-date').appendTo(GUserModel),
            new a({ id: t.uid, name: t.uname, last_name: t.last_name })
              .build()
              .addClass('g-user-preview-history')
              .insertBefore(s),
            GUserModel
          );
        }
      })
    ),
      exports.removeClass('loading'));
  }

    open() {
      if (this._opened) return;
      ((this._opened = true),
        this._container && this._container.remove(),
        (this._container = $('<div/>').gDialog({
          className: 'g-file-status-history-dialog',
        })));
      let exports = $('<div/>').addClass('row').addClass('header').appendTo(this._container);
      ($('<div/>')
        .addClass('title')
        .text(o.get(new i('GFileStatusHistoryDialog', 'text.status-history')))
        .appendTo(exports),
        $('<div></div>')
          .addClass('btn-close')
          .click(() => {
            ((this._opened = false), this._container.gDialog('close'));
          })
          .append($('<span></span>').addClass('gravit-icon-close'))
          .appendTo(exports),
        $('<div/>').addClass('list').appendTo(this._container));
      (this._container.gDialog('open', false), this._updateHistoryList());
    }

    _getUserNameFromNotification(e) {
      return new GUserModel({
        name: e.uname,
        last_name: e.last_name,
      }).getFullUserName();
    }

  }
  exports.exports = g;
}