/**
 * Webpack Module #1324
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* module_20 */, require(34) /* module_34 */;
    const o = require(177) /* module_177 */,
      {
        SharePermissions: { COMMENT: i, EDIT: a },
        ShareRoles: r,
      } = require(10) /* module_10 */,
      { GLocale: s, GLocaleKey: l } = require(1) /* module */;
    exports.exports = class extends o {
      function Object() { [native code] }() {
        let {
          access_id: exports,
          file_id: module,
          accessed: require,
          name: o,
          last_name: i,
          avatar: a,
          anonymous: r = false,
          role: s,
        } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        super({
          file_id: module,
          accessed: require,
          name: o,
          last_name: i,
          avatar: a,
          anonymous: r,
        }),
          (this.id = exports),
          (this._role = s);
      }
      getTooltip() {
        const exports = this.getRole();
        return exports.is(r.Owner)
          ? s
              .get(new l("GCollaborators", "text.owner-tooltip"))
              .replace("%username", this.getFullUserName())
          : s
              .get(
                new l(
                  "GCollaborators",
                  exports.hasPermission(a)
                    ? "text.can-edit-tooltip"
                    : "text.can-comment-tooltip"
                )
              )
              .replace("%username", this.getFullUserName());
      }
      getIcon() {
        const exports = this.getRole();
        return exports.hasPermission(i) && !exports.hasPermission(a)
          ? "gravit-icon-avatar-comment"
          : null;
      }
    };
  }