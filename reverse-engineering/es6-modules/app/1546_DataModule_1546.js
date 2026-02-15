/**
 * Webpack Module #1546
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (Object.defineProperty(module, '__esModule', { value: true }),
    Object.defineProperty(module, 'GFilesPanelViewBase', {
      enumerable: true,
      get: function () {
        return GCloudFileBrowser.default;
      },
    }),
    Object.defineProperty(module, 'GFilesPanelViewNative', {
      enumerable: true,
      get: function () {
        return GCloudFileBrowserDialog.default;
      },
    }),
    (module.default = undefined));
  var GCloudFileBrowserDialog = _interopRequireDefault(require(1547) /* GCloudFileBrowserDialog */),
    GCloudFileBrowser = _interopRequireDefault(require(1300) /* GCloudFileBrowser */);
  module.default = {
    GFilesPanelViewNative: GCloudFileBrowserDialog.default,
    GFilesPanelViewBase: GCloudFileBrowser.default,
  };
}
