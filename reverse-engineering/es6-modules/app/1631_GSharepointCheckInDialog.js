/**
 * Webpack Module #1631
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(8) /* polyfill_bundle_ES6 */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    SharepointException = _interopRequireDefault(require(1239) /* SharepointException */);
  const r = [
    {
      text: new GCore.GLocaleKey('GFilesPanelViewSharepoint', 'text.checkin-type-minor'),
      value: SharepointException.default.CheckinType.MinorCheckIn,
      selected: true,
    },
    {
      text: new GCore.GLocaleKey('GFilesPanelViewSharepoint', 'text.checkin-type-major'),
      value: SharepointException.default.CheckinType.MajorCheckIn,
    },
    {
      text: new GCore.GLocaleKey('GFilesPanelViewSharepoint', 'text.checkin-type-overwrite'),
      value: SharepointException.default.CheckinType.OverwriteCheckIn,
    },
  ];
  exports.exports = class {
    static openCheckInDialog(e) {
      return new Promise(async (t) => {
        var n = $('<div></div>')
          .addClass('g-container-sharepoint-check-in-dialog')
          .append(
            $('<div></div>')
              .addClass('minor-related')
              .addClass('row')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GFilesPanelViewSharepoint', 'text.choose-checkin-type')
                )
              )
          )
          .append(
            $('<div></div>')
              .addClass('row')
              .addClass('minor-related')
              .append(
                $('<select/>')
                  .addClass('check-in-type')
                  .addClass('field')
                  .append(
                    r.map((e) => {
                      let { text: t, value: n, selected: _interopRequireDefault } = e;
                      return $('<option/>')
                        .attr('value', n)
                        .text(GCore.GLocale.get(t))
                        .prop('selected', !!_interopRequireDefault);
                    })
                  )
              )
          )
          .append(
            $('<div></div>')
              .addClass('row')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GFilesPanelViewSharepoint', 'text.checkin-comment')
                )
              )
          )
          .append(
            $('<div></div>')
              .addClass('row')
              .append(
                $('<textarea/>')
                  .addClass('comment')
                  .addClass('field')
                  .addClass('max-width')
                  .attr('type', 'text')
              )
          );
        (n.gDialog({
          releaseOnClose: true,
          className: 'g-sharepoint-check-in-dialog',
          buttons: [
            $('<button></button>')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'cancel')))
              .on('click', () => {
                (n.gDialog('close'),
                  t({ ok: false }),
                  gDesigner.stats('filespanel-view_sharepoint-checkin_cancel'));
              }),
            $('<button></button>')
              .addClass('primary')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')))
              .on('click', () => {
                n.gDialog('close');
                const _interopRequireDefault = e.enableMinorVersions
                  ? n.find('.check-in-type').val()
                  : SharepointException.default.CheckinType.MajorCheckIn;
                let GCore;
                ((GCore =
                  _interopRequireDefault === SharepointException.default.CheckinType.MinorCheckIn
                    ? 'minor'
                    : _interopRequireDefault ===
                        SharepointException.default.CheckinType.MajorCheckIn
                      ? 'major'
                      : 'overwrite-minor-version'),
                  gDesigner.stats('filespanel-view_sharepoint-checkin_confirm', GCore),
                  t({ ok: true, comment: n.find('.comment').val(), type: _interopRequireDefault }));
              }),
          ],
        }),
          n.gDialog('open', false),
          e.enableMinorVersions || (n.find('.minor-related').hide(), n.find('textarea').focus()));
      });
    }
  };
}
