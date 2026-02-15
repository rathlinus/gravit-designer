/**
 * Webpack Module #1163
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.default = t.dateToVersionFormat = t.dateToFilePreviewFormat = undefined);
    const { GLocale: o } = n(1) /* module_1 */,
      i = (e) =>
        o.toLocaleDate(e, {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        });
    t.dateToVersionFormat = i;
    const a = (e) =>
      o.toLocaleDate(new Date(e), {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
        hour: "numeric",
        minute: "numeric",
      });
    t.dateToFilePreviewFormat = a;
    t.default = { dateToVersionFormat: i, dateToFilePreviewFormat: a };
  }