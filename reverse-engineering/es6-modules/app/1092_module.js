/**
 * Webpack Module #1092
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(4) /* stub_requires_668 */, require(13)) /* stub_requires_679 */;
  const GCloudStorageItem = require(156) /* GCloudStorageItem */,
    AppSettings = require(10); /* AppSettings */
  exports.exports = class {
    static createFrom(e) {
      let module = false;
      e instanceof GCloudStorageItem && (module = true);
      var n = GCloudStorageItem.from(e);
      (n.setItemType(GCloudStorageItem.Type.File),
        module ||
          n.setPermissions([
            GCloudStorageItem.Permission.Open,
            GCloudStorageItem.Permission.Copy,
            GCloudStorageItem.Permission.Editing,
            GCloudStorageItem.Permission.Rename,
            GCloudStorageItem.Permission.CutPaste,
            GCloudStorageItem.Permission.Delete,
            GCloudStorageItem.Permission.Download,
          ]),
        n.autosave
          ? (n.setPreviewURL(n.autosave_url_t), n.setModificationTime(e.autosave_updated))
          : (n.setPreviewURL(n.url_t || n.url_s), n.setModificationTime(e.updated)));
      const a = AppSettings.FILE_FORMATS.find((e) => {
        const module = n.getMimeType();
        return (
          !(!module || e.type.toLowerCase() !== module.toLowerCase()) ||
          e.ext.toLowerCase() === n.getExtension()
        );
      });
      return (
        n.setMimeType(a.type),
        (n.ext = a.ext),
        (n.extension = a.ext),
        (n.storage = GCloudStorageItem.Storage.Gravit),
        n
      );
    }
  };
}
