/**
 * Webpack Module #1067
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(290) /* module_290 */;
    const { GObject: o, GLocale: i } = require(1) /* GCore */,
      a = require(1068) /* module_1068 */;
    function r(e) {
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
      a.call(this),
        (this.id = module),
        (this.name = o),
        (this.description = i),
        (this.status = r),
        (this.pro = s),
        (this.permissions = c),
        (this.assignable = l),
        (this.level = require);
    }
    o.inheritAndMix(r, o, [a]),
      (r.prototype.getPermissions = function () {
        return this.permissions;
      }),
      (r.prototype.getDescription = function () {
        return this.description;
      }),
      (r.prototype.getStatus = function () {
        return this.status;
      }),
      (r.prototype.getName = function () {
        return this.name;
      }),
      (r.prototype.getId = function () {
        return this.id;
      }),
      (r.prototype.setId = function (e) {
        this.id = e;
      }),
      (r.prototype.getName = function () {
        return this.name;
      }),
      (r.prototype.getLevel = function () {
        return this.level;
      }),
      (r.prototype.isPro = function () {
        return this.pro;
      }),
      (r.prototype.equals = function (e) {
        return e.getId() === this.getId();
      }),
      (r.prototype.hasPermission = function (e) {
        return !!this.permissions[e];
      }),
      (r.prototype.applyPermissions = function (e) {
        this.permissions.applyFrom(e);
      }),
      (r.prototype.isAssignable = function () {
        return this.assignable;
      }),
      (r.prototype.is = function (e) {
        return this.getId() === e.id;
      }),
      (exports.exports = r);
  }