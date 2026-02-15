/**
 * Webpack Module #1550
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    DataModule_1163 = require(1163) /* DataModule_1163 */,
    r = _interopRequireDefault(require(1090) /* module_1090 */),
    GAnnotationsUtils = _interopRequireDefault(require(358) /* GAnnotationsUtils */),
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    AppSettings = require(10);
  const GObject = require(0) /* GObject */,
    DataModule_1551 = require(1551) /* DataModule_1551 */,
    GEvent_type_1174 = require(1174);
  class g extends DataModule_1551 {
    constructor() {
      super();
    }

    async render(e, t) {
      (this._createUI(e), await this._updateUIForFile(e, t));
    }

    _createUI(e) {
      $('<div/>')
        .addClass('file-preview-container')
        .append($('<img/>').addClass('file-preview').attr('src', ''))
        .appendTo(e);
      const module = $('<div/>').addClass('file-button-container').appendTo(e);
      ($('<button/>')
        .gShareButton({
          clazz: 'file-panel-share-button',
          defaultText: GCore.GLocale.get(
            new GCore.GLocaleKey('GFilesPanelViewBase', 'text.share-this-file')
          ),
          stats: 'filespanel-view_infoPanel_share',
          restrictedStats: 'filespanel-view_infoPanel_nonprotriespro-share',
        })
        .appendTo(module)
        .hide(),
        $('<div/>').addClass('file-name').appendTo(e),
        $('<div/>').addClass('file-created').appendTo(e));
      var n = $('<div/>').addClass('collaboration').appendTo(e);
      ($('<span/>')
        .addClass('collaborators')
        .append($('<div/>').addClass('gravit-icon-collaborators'))
        .append($('<div/>').addClass('collaborators-number').text('0'))
        .append(
          $('<span/>').text(
            ' ' +
              GCore.GLocale.get(new GCore.GLocaleKey('GFilesPanelViewBase', 'text.collaborators'))
          )
        )
        .appendTo(n)
        .hide(),
        $('<span/>')
          .addClass('comments')
          .append($('<div/>').addClass('gravit-icon-comment'))
          .append($('<div/>').addClass('comments-number').text('0'))
          .append(
            $('<span/>')
              .addClass('comments-label')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GFilesPanelViewBase', 'text.comments')))
          )
          .appendTo(n)
          .hide(),
        $('<div/>')
          .addClass('status')
          .append(
            $('<div/>')
              .addClass('label')
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey('GFilesPanelViewBase', 'text.status')) + ': '
              )
          )
          .append($('<div/>').addClass('state').text(''))
          .appendTo(e)
          .hide());
    }

    async _updateUIForFile(e, t) {
      const require = e.find('.share-button'),
        _interopRequireDefault = e.find('.comments-number'),
        GObject = e.find('.comments-label'),
        DataModule_1551 = e.find('.collaborators-number'),
        g = e.find('.file-created'),
        h = e.find('.collaboration'),
        f = e.find('.status'),
        m = e.find('.collaborators');
      (e.find('.file-preview').attr('src', t.getPreviewURL() || AppSettings.DEFAULT_FILE_THUMBNAIL),
        e.find('.file-preview').unbind('dblclick'),
        e.find('.file-preview').on('dblclick', (e) => {
          (e.stopPropagation(),
            e.preventDefault(),
            this._triggerEvent(GEvent_type_1174.Type.DoubleClickFile, t));
        }),
        e.find('.file-name').text(t.name),
        e.data('fileId', t.id));
      const y = await r.default.createStorageItem(t);
      y.supportsShadowFile() && (await y.syncShadowFile());
      const v = await AppSettings.gApi.getFileExtended(y.getId()).catch(() => null);
      g.text(
        GCore.GLocale.get(new GCore.GLocaleKey('GFilesPanelViewBase', 'text.created')).replace(
          '%createdTime',
          (0, DataModule_1163.dateToFilePreviewFormat)(t.created || v.created)
        )
      );
      const _ = (v && GAnnotationsUtils.default.getCommentsCount(v)) || 0;
      (_interopRequireDefault.text(_),
        GObject.text(
          GCore.GLocale.get(
            new GCore.GLocaleKey('GFilesPanelViewBase', 1 === _ ? 'text.comment' : 'text.comments')
          )
        ));
      let b = null,
        w = null,
        C = false;
      if (!v)
        return (
          h.hide(),
          require.gShareButton('update', { disabled: true, isSharing: false }),
          void require.attr(
            'data-title',
            GCore.GLocale.get(
              new GCore.GLocaleKey('GFilesPanelViewBase', 'text.can-only-share-by-owner')
            )
          )
        );
      {
        const e = gDesigner.getSyncUser();
        (({
          state: { isPrivate: b, sharing: w, owner: C },
        } = (0, CollaborationMergeUtils.getFileStateAndRole)(e, v, {})),
          !gDesigner.getApplicationManager().isShareEngineEnabled() || (w && !C) || require.show(),
          h.show());
      }
      if (
        (require.gShareButton('update', {
          disabled: false,
          storeItem: y,
          isSharing: w,
          closeCallback: () => {
            this._triggerEvent(GEvent_type_1174.Type.Reload);
          },
          isPrivate: b,
        }),
        require.removeAttr('data-title'),
        !w)
      )
        return (f.hide(), e.find('.collaborators').hide(), void e.find('.comments').hide());
      const x = await gDesigner.getFileReviewManager().getDocumentReviewHistory(y.getId());
      (e.find('.comments').show(),
        x.length > 1 && v ? (f.show(), this._updateStatus(e, v.status)) : f.hide());
      const S = v.getPrivateShareList().filter((e) => !e.owner).length;
      S > 0 ? (m.show(), DataModule_1551.text(S)) : m.hide();
    }

    _updateStatus(e, t) {
      const require = e.find('.state');
      switch (t) {
        case AppSettings.FileStatus.IN_REVIEW:
          require.text(
            GCore.GLocale.get(new GCore.GLocaleKey('GReviewDockerProperties', 'text.review-title'))
          );
          break;
        case AppSettings.FileStatus.REOPENED:
          require.text(
            GCore.GLocale.get(new GCore.GLocaleKey('GReviewDockerProperties', 'text.reopen-title'))
          );
          break;
        case AppSettings.FileStatus.AWAITING_APPROVAL:
          require.text(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GReviewDockerProperties', 'text.request-approval-title')
            )
          );
          break;
        case AppSettings.FileStatus.APPROVED:
          require.text(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GReviewDockerProperties', 'text.approved-title')
            )
          );
      }
    }

  }
  exports.exports = g;
}