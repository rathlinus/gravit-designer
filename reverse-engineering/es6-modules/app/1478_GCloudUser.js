/**
 * Webpack Module #1478
 * Type: class
 * Name: GCloudUser
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.GCloudUser = r),
    (module.default = undefined),
    require(58) /* polyfill_Array_includes */,
    require(3) /* polyfill_RegExp_toString */,
    require(71)) /* polyfill_String_includes */;
  var o = require(1241);
  const GObject = require(0) /* GObject */,
    GUserModel = require(177);
  class r extends GUserModel {
    constructor() {
      super();
    }

    _role = null;
    _id = null;
    _name = null;
    _email = null;

    setRole(e) {
      if (!(e instanceof o.GCloudRole)) throw new Error('Incorrect type parameter');
      if (!this.getValidRoles().includes(e.getRole())) throw new Error('Incorrect User role');
      return ((this._role = e), this);
    }

    getRole() {
      return this._role;
    }

    getValidRoles() {
      return r.ValidRoles;
    }

    getEmail() {
      return this._email;
    }

    getId() {
      return this._id;
    }

    getName() {
      return this._name;
    }

    toString() {
      return '[Object GCloudUser]';
    }

    static ValidRoles = [
      o.GCloudRole.Type.Viewer,
      o.GCloudRole.Type.Coauthor,
      o.GCloudRole.Type.Creator,
      o.GCloudRole.Type.Reviewer,
      o.GCloudRole.Type.Approver,
      o.GCloudRole.Type.ContentEditor,
    ];

  }
  module.default = r;
}