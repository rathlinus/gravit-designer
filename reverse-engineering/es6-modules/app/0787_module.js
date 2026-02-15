/**
 * Webpack Module #787
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.default = module.GoogleToCloudRoleMap = undefined));
  var AppSettings = require(10) /* AppSettings */,
    GoogleShareRoles = _interopRequireDefault(require(788) /* Exports_GoogleShareRoles */);
  const r = (module.GoogleToCloudRoleMap = {
    [GoogleShareRoles.default.Reader]: AppSettings.ShareRoles.Viewer.id,
    [GoogleShareRoles.default.Commenter]: AppSettings.ShareRoles.Reviewer.id,
    [GoogleShareRoles.default.Writer]: AppSettings.ShareRoles.CoAuthor.id,
    [GoogleShareRoles.default.Owner]: AppSettings.ShareRoles.Owner.id,
    [GoogleShareRoles.default.Organizer]: AppSettings.ShareRoles.CoAuthor.id,
    [GoogleShareRoles.default.FileOrganizer]: AppSettings.ShareRoles.CoAuthor.id,
  });
  module.default = r;
}
