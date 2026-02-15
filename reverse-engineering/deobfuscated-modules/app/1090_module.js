/**
 * Webpack Module #1090
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.default = undefined),
      n(8) /* module_8 */;
    const o = n(156) /* module_156 */,
      i = n(220) /* module_220 */,
      a = n(556) /* module_556 */;
    function r() {}
    r.createStorageItem = async function (e) {
      let t = null;
      switch (e.storage) {
        case o.Storage.Gravit:
          t = await i.from(gDesigner.getDefaultStorage(), e);
          break;
        case o.Storage.GoogleDrive:
          t = await new a.Item(gDesigner.getDefaultStorage(), e);
      }
      return t;
    };
    t.default = r;
  }