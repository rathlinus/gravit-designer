/**
 * Webpack Module #1546
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
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
    var i = _interopRequireDefault(require(1547) /* module_1547 */),
      a = _interopRequireDefault(require(1300) /* module_1300 */);
    module.default = {
      GFilesPanelViewNative: i.default,
      GFilesPanelViewBase: a.default,
    };
  }