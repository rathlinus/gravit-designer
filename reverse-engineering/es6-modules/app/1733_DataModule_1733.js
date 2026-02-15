/**
 * Webpack Module #1733
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  const o = {
    init: function () {
      let {
        feature: exports,
        pro: module = true,
        badgeAlwaysVisible: require = false,
      } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return this.each(function () {
        var o = $(this);
        if (
          (o.toggleClass('pro', !!module), o.toggleClass('badge-always-visible', !!require), module)
        ) {
          const t = gDesigner.getLicense(),
            n = t.isLegacy() && gDesigner.isLegacyFeature(exports),
            i = t.isTrial() && !n;
          if ((o.toggleClass('trial', i), 'option' === o.prop('tagName').toLowerCase())) {
            const e = o.closest('select');
            (e.hasClass('has-pro-option') || e.addClass('has-pro-option'),
              i && !e.hasClass('has-trial-option') && e.addClass('has-trial-option'));
          }
        }
        o.toggleClass('legacy-feature', gDesigner.isLegacyFeature(exports));
      });
    },
  };
  $.fn.gPro = function (e) {
    return o[e]
      ? o[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : 'object' != typeof e && e
        ? void $.error('Method ' + e + ' does not exist on jQuery.gPro')
        : o.init.apply(this, arguments);
  };
}
