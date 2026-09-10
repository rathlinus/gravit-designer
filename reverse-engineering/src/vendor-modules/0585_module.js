/**
 * chunk.vendor.js Module #585
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      const n = {
        ACTION: 60,
        ACTION_INSERT: 4,
        ACTION_REMOVE: 8,
        ACTION_EDIT: 12,
        ACTION_RESOLVE: 16,
        ACTION_APPROVE: 20,
        ACTION_REQUEST_APPROVE: 24,
        ACTION_REOPEN: 28,
        ACTION_IN_REVIEW: 36,
        ACTION_ASSIGN: 32,
        ACTION_CDR_SAVED: 44,
        ACTION_UPDATE_TEXT: 48,
      };
      e.exports = Object.freeze({
        TYPES: {
          TYPE: 3,
          TYPE_ANNOTATION: 0,
          TYPE_COMMENT: 1,
          TYPE_DESIGN: 2,
        },
        ACTIONS: n,
        FILE_REVIEW_FLOW: [
          n.ACTION_APPROVE,
          n.ACTION_REQUEST_APPROVE,
          n.ACTION_REOPEN,
          n.ACTION_IN_REVIEW,
        ],
      });
    }