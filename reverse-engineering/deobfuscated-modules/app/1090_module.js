/**
 * Webpack Module #1090
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = undefined),
      require(8) /* polyfill_bundle_ES6 */;
    const GCloudStorageItem = require(156) /* GCloudStorageItem */,
      i = require(220) /* Item */,
      GGoogleDriveItem = require(556) /* GGoogleDriveItem */;
    function r() {}
    r.createStorageItem = async function (e) {
      let module = null;
      switch (e.storage) {
        case GCloudStorageItem.Storage.Gravit:
          module = await i.from(gDesigner.getDefaultStorage(), e);
          break;
        case GCloudStorageItem.Storage.GoogleDrive:
          module = await new GGoogleDriveItem.Item(gDesigner.getDefaultStorage(), e);
      }
      return module;
    };
    module.default = r;
  }