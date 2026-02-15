/**
 * Webpack Module #789
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = module.NoAccessId = module.CloudToGoogleRoleMap = undefined);
    var AppSettings = require(10) /* AppSettings */,
      GoogleShareRoles = _interopRequireDefault(require(788) /* Exports_GoogleShareRoles */);
    const r = (module.NoAccessId = "NoAccess"),
      s = (module.CloudToGoogleRoleMap = {
        [AppSettings.ShareRoles.Viewer.id]: GoogleShareRoles.default.Reader,
        [AppSettings.ShareRoles.Developer.id]: GoogleShareRoles.default.Commenter,
        [AppSettings.ShareRoles.Reviewer.id]: GoogleShareRoles.default.Commenter,
        [AppSettings.ShareRoles.CoAuthor.id]: GoogleShareRoles.default.Writer,
        [AppSettings.ShareRoles.Owner.id]: GoogleShareRoles.default.Owner,
        [AppSettings.ShareRoles.NoAccess.id]: r,
      });
    module.default = s;
  }