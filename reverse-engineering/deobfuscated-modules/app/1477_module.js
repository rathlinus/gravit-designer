/**
 * Webpack Module #1477
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.GMicrosoftUser = r),
      (module.default = undefined),
      require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GCloudUser = require(1478) /* GCloudUser */,
      GCloudRole = require(1241) /* GCloudRole */;
    function r(e) {
      let { Id: module, Email: require, Title: GCore, UserId: GCloudUser, UserPrincipalName: GCloudRole } = e;
      (this._id = module),
        (this._email = require),
        (this._name = GCore),
        (this._userId = GCloudUser),
        (this._userPrincipalName = GCloudRole);
    }
    GCore.GObject.inherit(r, GCloudUser.GCloudUser),
      (r.ValidRoles = [
        GCloudRole.GCloudRole.Type.Viewer,
        GCloudRole.GCloudRole.Type.ContentEditor,
      ]),
      (r.prototype._userId = null),
      (r.prototype.getValidRoles = function () {
        return r.ValidRoles;
      }),
      (r.prototype.getEmail = function () {
        return this._email;
      }),
      (r.prototype.getUserReference = function () {
        return this.getEmail();
      }),
      (r.prototype.getUserPrincipalName = function () {
        return this._userPrincipalName;
      }),
      (r.prototype.getNameId = function () {
        return this._userId && this._userId.NameId;
      }),
      (r.prototype.toString = function () {
        return "[GObject GMicrosoftUser]";
      });
    module.default = r;
  }