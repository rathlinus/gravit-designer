/**
 * Webpack Module #1477
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.GMicrosoftUser = r),
      (t.default = undefined),
      n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(1478) /* GCloudUser */,
      a = n(1241) /* GCloudRole */;
    function r(e) {
      let { Id: t, Email: n, Title: o, UserId: i, UserPrincipalName: a } = e;
      (this._id = t),
        (this._email = n),
        (this._name = o),
        (this._userId = i),
        (this._userPrincipalName = a);
    }
    o.GObject.inherit(r, i.GCloudUser),
      (r.ValidRoles = [
        a.GCloudRole.Type.Viewer,
        a.GCloudRole.Type.ContentEditor,
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
    t.default = r;
  }