/**
 * Webpack Module #787
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */;
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.default = t.GoogleToCloudRoleMap = undefined);
    var i = n(10) /* module_10 */,
      a = o(n(788) /* module_788 */);
    const r = (t.GoogleToCloudRoleMap = {
      [a.default.Reader]: i.ShareRoles.Viewer.id,
      [a.default.Commenter]: i.ShareRoles.Reviewer.id,
      [a.default.Writer]: i.ShareRoles.CoAuthor.id,
      [a.default.Owner]: i.ShareRoles.Owner.id,
      [a.default.Organizer]: i.ShareRoles.CoAuthor.id,
      [a.default.FileOrganizer]: i.ShareRoles.CoAuthor.id,
    });
    t.default = r;
  }