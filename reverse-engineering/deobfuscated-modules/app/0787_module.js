/**
 * Webpack Module #787
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = module.GoogleToCloudRoleMap = undefined);
    var i = require(10) /* AppSettings */,
      a = o(require(788) /* Exports_GoogleShareRoles */);
    const r = (module.GoogleToCloudRoleMap = {
      [a.default.Reader]: i.ShareRoles.Viewer.id,
      [a.default.Commenter]: i.ShareRoles.Reviewer.id,
      [a.default.Writer]: i.ShareRoles.CoAuthor.id,
      [a.default.Owner]: i.ShareRoles.Owner.id,
      [a.default.Organizer]: i.ShareRoles.CoAuthor.id,
      [a.default.FileOrganizer]: i.ShareRoles.CoAuthor.id,
    });
    module.default = r;
  }