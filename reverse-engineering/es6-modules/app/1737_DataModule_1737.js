/**
 * Webpack Module #1737
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = {
    init: function (e) {
      return this.each(function () {
        $(this).on('scroll', function () {
          if (gDesigner.isTouchEnabled()) {
            var module = $(this)[0].scrollTop,
              require = 'light' == gDesigner.getSetting('theme') ? 'DFDFDF' : '2E2E2E';
            ((module = module > 20 ? 20 : module),
              $(e).css({
                'box-shadow': '0 '.concat(module, 'px 20px -5px #').concat(require),
              }));
          }
        });
      });
    },
  };
  $.fn.gToolbarShadow = function (e) {
    return o[e]
      ? o[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : 'object' != typeof e && e
        ? void $.error('Method ' + e + ' does not exist on jQuery.myPlugin')
        : o.init.apply(this, arguments);
  };
}
