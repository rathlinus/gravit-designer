/**
 * Webpack Module #1249
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }), (module.default = undefined);
    var i = _interopRequireDefault(require(1493) /* module_1493 */);
    class a extends i.default {
      constructor() {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        super(), (this._options = exports);
      }
      getOptions() {
        return this._options;
      }
    }
    module.default = a;
  }