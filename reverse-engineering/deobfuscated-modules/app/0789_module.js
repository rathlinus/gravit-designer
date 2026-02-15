/**
 * Webpack Module #789
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = module.NoAccessId = module.CloudToGoogleRoleMap = undefined);
    var i = require(10) /* AppSettings */,
      a = o(require(788) /* Exports_GoogleShareRoles */);
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