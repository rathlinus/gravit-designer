/**
 * Webpack Module #433
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(290) /* module_290 */, require(38) /* module_38 */;
    const {
        ShareRoles: o,
        defaultUserSettings: {
          share: {
            defaults: {
              public: { role: i } = {},
              private: { role: a } = {},
            } = {},
          } = {},
        } = {},
      } = require(10) /* module_10 */,
      r = require(1067) /* module_1067 */,
      s = require(1070) /* module_1070 */,
      l = require(1071) /* module_1071 */;
    function c() {
      throw "No instantiate";
    }
    (c.makeFromShare = function (e) {
      const module = c._makeFromShareRole(e.getRole());
      return (
        module &&
          (module.applyPermissions(new s(e.getPermissions())), module.lockPermissions()),
        module
      );
    }),
      (c.makeFromShareRole = function (e) {
        const module = c._makeFromShareRole(e);
        return module.lockPermissions(), module;
      }),
      (c._makeFromShareRole = function (e) {
        if (!e) return null;
        const {
            id: module,
            name: require,
            description: o,
            status: i,
            pro: a,
            permissions: c = {},
            assignable: d,
            level: u,
          } = e,
          p = new r({
            id: module,
            level: u,
            name: require,
            description: o,
            status: i,
            pro: a,
            permissions: new s(c),
            assignable: d,
          }),
          g = l[p.id];
        return g && p.grant(g), p;
      }),
      (c.ROLES = {
        get ALL() {
          return Object.values(o).map((e) => c.makeFromShareRole(e));
        },
        get DEFAULT_PUBLIC_ROLE() {
          return c.makeFromShareRole(i);
        },
        get DEFAULT_PRIVATE_ROLE() {
          return c.makeFromShareRole(a);
        },
        get NO_ACCESS_ROLE() {
          return c.makeFromShareRole(o.NoAccess);
        },
        get APPROVER_ROLE() {
          return c.makeFromShareRole(o.Approver);
        },
        get OWNER_ROLE() {
          return c.makeFromShareRole(o.Owner);
        },
        get VIEWER_ROLE() {
          return c.makeFromShareRole(o.Viewer);
        },
      }),
      (exports.exports = c);
  }