/**
 * Webpack Module #1161
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.handleDragForDeleteIcon = function (e, t, n, o, i, a) {
      if (!n) return false;
      var r = false;
      if (e.clientX < n.left || e.clientY < n.top || e.clientY > n.top + o) {
        var s = gDesigner.isTouchEnabled() ? 30 : 10,
          l = e.clientX - i - t.outerWidth() - s,
          c = e.clientY - a;
        ('none' === t.css('display') && t.css('display', 'block'),
          t.css({ top: c, left: l }),
          (r = true));
      } else (t.css('display', 'none'), (r = false));
      return r;
    }));
}
