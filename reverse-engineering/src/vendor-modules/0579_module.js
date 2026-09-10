/**
 * chunk.vendor.js Module #579
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      i(30);
      e.exports = class {
        constructor(e) {
          Object.assign(this, e);
        }
        getCreated() {
          return this.created;
        }
        getFileId() {
          return this.file_id;
        }
        getUser() {
          return this.user;
        }
        isLockedBy(e) {
          return this.user.id === e.id;
        }
        equals(e) {
          return this.file_id == e.file_id && this.user.id === e.user.id;
        }
        toJSON() {
          return {
            file_id: this.getFileId(),
            user: this.getUser(),
            created: this.getCreated(),
          };
        }
      };
    }