/**
 * Webpack Module #1719
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(4) /* stub_requires_668 */, require(13)) /* stub_requires_679 */;
  var GCore = require(1); /* GCore */
  const i = {
    init: function (e) {
      e = $.extend(
        {
          clazz: null,
          defaultText: GCore.GLocale.get(new GCore.GLocaleKey('GToolbar', 'text.share')),
          stats: 'toolbar_click_share',
          restrictedStats: 'toolbar_nonprotriespro_share',
          closeCallback: null,
        },
        e
      );
      let module = $(this);
      return (
        module.data('gsharebutton', { options: e }),
        this.addClass('share-button')
          .addClass('g-highlight-button')
          .addClass('highlighted')
          .addClass(e.clazz || '')
          .append($('<span/>').addClass('icon'))
          .append($('<span/>').addClass('label').text(e.defaultText))
          .on('click', () => {
            if (module.hasClass('g-disabled')) return;
            const require = gDesigner.getShareManager();
            require.isShareProRestricted()
              ? (gDesigner.stats(e.restrictedStats),
                gDesigner.handleShareFilePROFeatureInterruption())
              : (gDesigner.stats(e.stats),
                require.share(module.data('gsharebutton').storeItem, e.closeCallback));
          }),
        this
      );
    },
    update: function (e) {
      const { isPrivate: module, isSharing: require, disabled: i } = e,
        a = $(this);
      i ? a.addClass('g-disabled') : a.removeClass('g-disabled');
      gDesigner.getShareManager().isShareProRestricted() && a.gPro();
      const r = a.data('gsharebutton');
      a.find('.icon')
        .css('display', require ? '' : 'none')
        .toggleClass('gravit-icon-private-share', module)
        .toggleClass('gravit-icon-public-share', !module);
      const s = require
        ? new GCore.GLocaleKey('GToolbar', 'text.shared')
        : r.options.defaultText
          ? r.options.defaultText
          : new GCore.GLocaleKey('GToolbar', 'text.share');
      return (
        a.find('.label').text(GCore.GLocale.get(s)),
        (r.storeItem = e.storeItem),
        e.closeCallback && (r.options.closeCallback = e.closeCallback),
        this
      );
    },
  };
  $.fn.gShareButton = function (e) {
    return i[e]
      ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : 'object' != typeof e && e
        ? void $.error('Method ' + e + ' does not exist on jQuery.gShareButton')
        : i.init.apply(this, arguments);
  };
}
