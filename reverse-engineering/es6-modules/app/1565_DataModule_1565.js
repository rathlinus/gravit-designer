/**
 * Webpack Module #1565
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */, require(3)) /* polyfill_RegExp_toString */;
  const o = require(433);
  class i {
    constructor() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
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

    edit = false;
    inspect = false;
    copy = false;
    owner = true;
    share = false;
    sharing = false;
    comment = false;
    role = o.ROLES.NO_ACCESS_ROLE;
    isPrivate = false;
    realtimeCollaborators = [];

    toString() {
      return 'Object [GShareState]';
    }

  }
  exports.exports = i;
}