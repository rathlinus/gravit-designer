/**
 * Webpack Module #787
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = module.GoogleToCloudRoleMap = undefined);
    var i = require(10) /* module_10 */,
      a = o(require(788) /* module_788 */);
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