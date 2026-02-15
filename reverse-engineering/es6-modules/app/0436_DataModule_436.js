/**
 * Webpack Module #436
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  const { GObject: o } = require(1);
  class i extends o {
    constructor(e) {
      super();
      ((this._app = e), (this._collaborativeFile = null));
    }

    async getOrCreateCollaborativeFile() {
      throw 'Not implemented';
    }

    async createCollaborativeFile() {
      throw 'Not implemented';
    }

    updateCollaborativeFile() {
      throw 'Not implemented';
    }

    async getCollaborativeFile() {
      throw 'Not implemented';
    }

    async shareWithUser(e, t) {
      throw 'Not implemented';
    }

    async unshareWithUser(e, t) {
      throw 'Not implemented';
    }

    async setCollaborativeFileStatus(e) {
      throw 'Not implemented';
    }

  }
  exports.exports = i;
}