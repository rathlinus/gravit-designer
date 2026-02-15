/**
 * Webpack Module #1163
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.default = module.dateToVersionFormat = module.dateToFilePreviewFormat = undefined));
  const { GLocale: o } = require(1) /* GCore */,
    i = (e) =>
      o.toLocaleDate(e, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
  module.dateToVersionFormat = i;
  const a = (e) =>
    o.toLocaleDate(new Date(e), {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    });
  module.dateToFilePreviewFormat = a;
  module.default = { dateToVersionFormat: i, dateToFilePreviewFormat: a };
}
