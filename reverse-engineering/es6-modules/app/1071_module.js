/**
 * Webpack Module #1071
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  const {
      ShareRoles: { CoAuthor: o, Developer: i, Reviewer: a, Approver: r, Owner: s },
      GFileReviewActions: {
        ACTION_REQUEST_REVIEW: l,
        ACTION_REQUEST_APPROVAL: c,
        ACTION_REOPEN: d,
        ACTION_APPROVE: u,
      },
    } = require(10) /* AppSettings */,
    p = require(434); /* stub_requires_30_1072 */
  exports.exports = {
    [r.id]: [
      l,
      d,
      u,
      p.RESOLVE_COMMENT_ANNOTATION,
      p.RESOLVE_ALL_COMMENT_ANNOTATION,
      p.REOPEN_COMMENT_ANNOTATION,
    ],
    [o.id]: [p.DELETE_COMMENT_ANNOTATION],
    [i.id]: [
      p.DELETE_COMMENT_ANNOTATION,
      p.RESOLVE_COMMENT_ANNOTATION,
      p.REOPEN_COMMENT_ANNOTATION,
    ],
    [a.id]: [],
    [s.id]: [
      l,
      c,
      p.DELETE_COMMENT_ANNOTATION,
      p.RESOLVE_COMMENT_ANNOTATION,
      p.REOPEN_COMMENT_ANNOTATION,
    ],
  };
}
