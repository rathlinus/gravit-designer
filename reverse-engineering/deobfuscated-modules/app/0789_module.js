/**
 * Webpack Module #789
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */;
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.default = t.NoAccessId = t.CloudToGoogleRoleMap = undefined);
    var i = n(10) /* module_10 */,
      a = o(n(788) /* module_788 */);
    const r = (t.NoAccessId = "NoAccess"),
      s = (t.CloudToGoogleRoleMap = {
        [i.ShareRoles.Viewer.id]: a.default.Reader,
        [i.ShareRoles.Developer.id]: a.default.Commenter,
        [i.ShareRoles.Reviewer.id]: a.default.Commenter,
        [i.ShareRoles.CoAuthor.id]: a.default.Writer,
        [i.ShareRoles.Owner.id]: a.default.Owner,
        [i.ShareRoles.NoAccess.id]: r,
      });
    t.default = s;
  }