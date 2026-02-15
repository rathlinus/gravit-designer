/**
 * Webpack Module #789
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = module.NoAccessId = module.CloudToGoogleRoleMap = undefined);
    var i = require(10) /* module_10 */,
      a = o(require(788) /* module_788 */);
    const r = (module.NoAccessId = "NoAccess"),
      s = (module.CloudToGoogleRoleMap = {
        [i.ShareRoles.Viewer.id]: a.default.Reader,
        [i.ShareRoles.Developer.id]: a.default.Commenter,
        [i.ShareRoles.Reviewer.id]: a.default.Commenter,
        [i.ShareRoles.CoAuthor.id]: a.default.Writer,
        [i.ShareRoles.Owner.id]: a.default.Owner,
        [i.ShareRoles.NoAccess.id]: r,
      });
    module.default = s;
  }