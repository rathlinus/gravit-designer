/**
 * Webpack Module #1090
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0),
      n(8) /* polyfill_bundle_ES6 */;
    const o = n(156) /* GCloudStorageItem */,
      i = n(220) /* Item */,
      a = n(556) /* GGoogleDriveItem */;
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