/**
 * Webpack Module #1469
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }), (module.getOS = undefined);
    var GCore = require(1) /* GCore */;
    module.getOS = () => {
      let exports = null;
      switch (GCore.GSystem.operatingSystem) {
        case GCore.GSystem.OperatingSystem.Unix:
          exports = "Unix";
          break;
        case GCore.GSystem.OperatingSystem.Windows:
          exports = "Windows";
          break;
        case GCore.GSystem.OperatingSystem.OSX_IOS:
          exports = "OSX";
      }
      return exports;
    };
  }