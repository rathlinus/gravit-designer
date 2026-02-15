/**
 * Webpack Module #1477
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.GMicrosoftUser = r),
    (module.default = undefined),
    require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    i = require(1478) /* GCloudUser */,
    a = require(1241);
  class r extends i.GCloudUser {
    constructor(e) {
      super();
      let { Id: module, Email: require, Title: GCore, UserId: i, UserPrincipalName: a } = e;
      ((this._id = module),
      (this._email = require),
      (this._name = GCore),
      (this._userId = i),
      (this._userPrincipalName = a));
    }

    _userId = null;

    getValidRoles() {
      return r.ValidRoles;
    }

    getEmail() {
      return this._email;
    }

    getUserReference() {
      return this.getEmail();
    }

    getUserPrincipalName() {
      return this._userPrincipalName;
    }

    getNameId() {
      return this._userId && this._userId.NameId;
    }

    toString() {
      return '[GObject GMicrosoftUser]';
    }

    static ValidRoles = [a.GCloudRole.Type.Viewer, a.GCloudRole.Type.ContentEditor];

  }
  module.default = r;
}