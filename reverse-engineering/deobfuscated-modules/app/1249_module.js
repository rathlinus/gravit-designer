/**
 * Webpack Module #1249
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */;
    Object.defineProperty(t, "__esModule", { value: true }), (t.default = undefined);
    var i = o(n(1493) /* module_1493 */);
    class a extends i.default {
      constructor() {
        let e =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        super(), (this._options = e);
      }
      getOptions() {
        return this._options;
      }
    }
    t.default = a;
  }