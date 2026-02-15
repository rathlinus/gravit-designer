/**
 * Webpack Module #1469
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }), (module.getOS = undefined);
    var o = require(1) /* module */;
    module.getOS = () => {
      let exports = null;
      switch (o.GSystem.operatingSystem) {
        case o.GSystem.OperatingSystem.Unix:
          exports = "Unix";
          break;
        case o.GSystem.OperatingSystem.Windows:
          exports = "Windows";
          break;
        case o.GSystem.OperatingSystem.OSX_IOS:
          exports = "OSX";
      }
      return exports;
    };
  }