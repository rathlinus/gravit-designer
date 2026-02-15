/**
 * Webpack Module #1478
 * Type: class
 * Name: GCloudUser
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.GCloudUser = r),
      (module.default = undefined),
      require(58) /* polyfill_Array_includes */,
      require(3) /* polyfill_RegExp_toString */,
      require(71) /* polyfill_String_includes */;
    var o = require(1241) /* GCloudRole */;
    const i = require(0) /* GObject */,
      a = require(177) /* module_177 */;
    function r() {}
    i.inherit(r, a),
      (r.ValidRoles = [
        o.GCloudRole.Type.Viewer,
        o.GCloudRole.Type.Coauthor,
        o.GCloudRole.Type.Creator,
        o.GCloudRole.Type.Reviewer,
        o.GCloudRole.Type.Approver,
        o.GCloudRole.Type.ContentEditor,
      ]),
      (r.prototype._role = null),
      (r.prototype._id = null),
      (r.prototype._name = null),
      (r.prototype._email = null),
      (r.prototype.setRole = function (e) {
        if (!(e instanceof o.GCloudRole))
          throw new Error("Incorrect type parameter");
        if (!this.getValidRoles().includes(e.getRole()))
          throw new Error("Incorrect User role");
        return (this._role = e), this;
      }),
      (r.prototype.getRole = function () {
        return this._role;
      }),
      (r.prototype.getValidRoles = function () {
        return r.ValidRoles;
      }),
      (r.prototype.getEmail = function () {
        return this._email;
      }),
      (r.prototype.getId = function () {
        return this._id;
      }),
      (r.prototype.getName = function () {
        return this._name;
      }),
      (r.prototype.toString = function () {
        return "[Object GCloudUser]";
      });
    module.default = r;
  }