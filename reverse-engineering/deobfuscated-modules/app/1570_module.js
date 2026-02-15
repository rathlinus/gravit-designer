/**
 * Webpack Module #1570
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */, require(3) /* module_3 */;
    const { HAS_ANNOTATIONS: o } = require(10) /* module_10 */;
    function i() {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(
        this,
        {
          isShareEnabled: false,
          isSharing: false,
          isPrivateSharing: false,
          role: undefined,
          realtimeCollaborators: [],
          edit: true,
          save: true,
          export: true,
          inspect: true,
          comment: !!o,
          copyPaste: true,
          isDocumentTabManagementEnabled: true,
        },
        exports
      );
    }
    (i.prototype.isDocumentTabManagementEnabled = true),
      (i.prototype.isShareEnabled = false),
      (i.prototype.isSharing = false),
      (i.prototype.isPrivateSharing = false),
      (i.prototype.role = undefined),
      (i.prototype.realtimeCollaborators = []),
      (i.prototype.edit = true),
      (i.prototype.saveAs = true),
      (i.prototype.export = true),
      (i.prototype.inspect = true),
      (i.prototype.comment = !!o),
      (i.prototype.copyPaste = true),
      (i.prototype.toString = function () {
        return "Object [GApplicationState]";
      }),
      (exports.exports = i);
  }