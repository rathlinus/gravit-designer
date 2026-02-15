/**
 * Webpack Module #859
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const o = require(1244) /* module_1244 */,
      GContainer = require(85) /* GContainer */,
      { Runtime: a, msTeamsMode: r } = require(10) /* AppSettings */,
      { storeVendor: s } = require(803) /* module_803 */,
      l = "darwin",
      c = "win32",
      d = "linux";
    class u {
      static getRuntimeCode() {
        const exports = u.getRuntime();
        return exports && exports.code;
      }
      static getRuntime() {
        let exports;
        if (r) exports = a.TeamsApp;
        else if (gContainer.getRuntime() === GContainer.Runtime.PWA)
          (exports = a.PWA), s === o.GooglePlay && (exports = a.PWAPlayStore);
        else if (gContainer.getRuntime() === GContainer.Runtime.Browser) exports = a.Browser;
        else if (gContainer.getRuntime() === GContainer.Runtime.Electron) {
          var module = gContainer.getPlatform();
          (exports = module === l ? a.Mac : module === c ? a.Windows : module === d ? a.Linux : module),
            s &&
              (s === o.Apple
                ? (exports = a.AppleStore)
                : s === o.Windows && (exports = a.WindowsStore));
        } else
          gContainer.getRuntime() === GContainer.Runtime.Chrome
            ? ((exports = a.ChromeApp), s === o.ChromeWeb && (exports = a.ChromeWebStore))
            : gContainer.getRuntime() === GContainer.Runtime.IPad && (exports = a.iPadOS);
        return exports;
      }
    }
    exports.exports = u;
  }