/**
 * Webpack Module #1570
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */, require(3)) /* polyfill_RegExp_toString */;
  const { HAS_ANNOTATIONS: o } = require(10);
  class i {
    constructor() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(
      this,
      {
      isShareEnabled: false,
      isSharing: false,
      isPrivateSharing: false,
      role: undefined,
      realtimeCollaborators: [],
      edit: true,
      save: true,
      export: true,
      inspect: true,
      comment: !!o,
      copyPaste: true,
      isDocumentTabManagementEnabled: true,
      },
      exports
      );
    }

    isDocumentTabManagementEnabled = true;
    isShareEnabled = false;
    isSharing = false;
    isPrivateSharing = false;
    role = undefined;
    realtimeCollaborators = [];
    edit = true;
    saveAs = true;
    export = true;
    inspect = true;
    comment = !!o;
    copyPaste = true;

    toString() {
      return 'Object [GApplicationState]';
    }

  }
  exports.exports = i;
}