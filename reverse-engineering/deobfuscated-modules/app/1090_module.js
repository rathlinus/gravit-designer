/**
 * Webpack Module #1090
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = undefined),
      require(8) /* polyfill_bundle_ES6 */;
    const o = require(156) /* module_156 */,
      i = require(220) /* Item */,
      a = require(556) /* Item */;
    function r() {}
    r.createStorageItem = async function (e) {
      let module = null;
      switch (e.storage) {
        case o.Storage.Gravit:
          module = await i.from(gDesigner.getDefaultStorage(), e);
          break;
        case o.Storage.GoogleDrive:
          module = await new a.Item(gDesigner.getDefaultStorage(), e);
      }
      return module;
    };
    module.default = r;
  }