/**
 * Webpack Module #1241
 * Type: class
 * Name: GCloudRole
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor(e) {
      if (!o.Type[e]) throw new Error('Incorrect Clour Role type');
      this._type = e;
    }

    _type = null;

    setRole(e) {
      if (!o.Type[e]) throw new Error('Incorrect Clour Role type');
      return ((this._type = e), this);
    }

    getRole() {
      return this._type;
    }

    toString() {
      return '[Object GCloudRole]';
    }

    static Type = {
      Viewer: 'Viewer',
      Coauthor: 'Coauthor',
      Creator: 'Creator',
      Reviewer: 'Reviewer',
      Approver: 'Approver',
      ContentEditor: 'ContentEditor',
    };

  }
  (Object.defineProperty(module, '__esModule', { value: true }),
    module.GCloudRole = o,
    module.default = undefined,
    require(3));
  module.default = o;
}