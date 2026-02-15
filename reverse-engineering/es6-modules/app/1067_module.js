/**
 * Webpack Module #1067
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(290) /* DataModule_290 */;
  const { GObject: o, GLocale: i } = require(1) /* GCore */,
    a = require(1068);
  class r {
    constructor(e) {
      let {
      id: module,
      level: require = 0,
      name: o,
      description: i,
      status: r,
      pro: s = false,
      assignable: l = true,
      permissions: c,
      } = e;
      (a.call(this),
      (this.id = module),
      (this.name = o),
      (this.description = i),
      (this.status = r),
      (this.pro = s),
      (this.permissions = c),
      (this.assignable = l),
      (this.level = require));
    }

    getPermissions() {
      return this.permissions;
    }

    getDescription() {
      return this.description;
    }

    getStatus() {
      return this.status;
    }

    getName() {
      return this.name;
    }

    getId() {
      return this.id;
    }

    setId(e) {
      this.id = e;
    }

    getName() {
      return this.name;
    }

    getLevel() {
      return this.level;
    }

    isPro() {
      return this.pro;
    }

    equals(e) {
      return e.getId() === this.getId();
    }

    hasPermission(e) {
      return !!this.permissions[e];
    }

    applyPermissions(e) {
      this.permissions.applyFrom(e);
    }

    isAssignable() {
      return this.assignable;
    }

    is(e) {
      return this.getId() === e.id;
    }

  }
  (o.inheritAndMix(r, o, [a]),
    exports.exports = r);
}