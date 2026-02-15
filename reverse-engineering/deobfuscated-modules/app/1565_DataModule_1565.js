/**
 * Webpack Module #1565
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(3) /* polyfill_RegExp_toString */;
    const o = require(433) /* module_433 */;
    function i() {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(
        this,
        {
          edit: false,
          inspect: false,
          copy: false,
          owner: true,
          share: false,
          sharing: false,
          isPrivate: false,
          comment: false,
          role: o.ROLES.NO_ACCESS_ROLE,
          realtimeCollaborators: [],
        },
        exports
      );
    }
    (i.prototype.edit = false),
      (i.prototype.inspect = false),
      (i.prototype.copy = false),
      (i.prototype.owner = true),
      (i.prototype.share = false),
      (i.prototype.sharing = false),
      (i.prototype.comment = false),
      (i.prototype.role = o.ROLES.NO_ACCESS_ROLE),
      (i.prototype.isPrivate = false),
      (i.prototype.realtimeCollaborators = []),
      (i.prototype.toString = function () {
        return "Object [GShareState]";
      }),
      (exports.exports = i);
  }