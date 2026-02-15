/**
 * Webpack Module #1092
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* module_4 */, require(13) /* module_13 */;
    const o = require(156) /* module_156 */,
      i = require(10) /* module_10 */;
    exports.exports = class {
      static createFrom(e) {
        let module = false;
        e instanceof o && (module = true);
        var n = o.from(e);
        n.setItemType(o.Type.File),
          module ||
            n.setPermissions([
              o.Permission.Open,
              o.Permission.Copy,
              o.Permission.Editing,
              o.Permission.Rename,
              o.Permission.CutPaste,
              o.Permission.Delete,
              o.Permission.Download,
            ]),
          n.autosave
            ? (n.setPreviewURL(n.autosave_url_t),
              n.setModificationTime(e.autosave_updated))
            : (n.setPreviewURL(n.url_t || n.url_s),
              n.setModificationTime(e.updated));
        const a = i.FILE_FORMATS.find((e) => {
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
          (n.storage = o.Storage.Gravit),
          n
        );
      }
    };
  }