/**
 * Webpack Module #1546
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    Object.defineProperty(module, "__esModule", { value: true }),
      Object.defineProperty(module, "GFilesPanelViewBase", {
        enumerable: true,
        get: function () {
          return a.default;
        },
      }),
      Object.defineProperty(module, "GFilesPanelViewNative", {
        enumerable: true,
        get: function () {
          return i.default;
        },
      }),
      (module.default = undefined);
    var i = o(require(1547) /* module_1547 */),
      a = o(require(1300) /* module_1300 */);
    module.default = {
      GFilesPanelViewNative: i.default,
      GFilesPanelViewBase: a.default,
    };
  }