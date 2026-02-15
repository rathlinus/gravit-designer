/**
 * Module 287
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  require(30) /* polyfill_Object_assign */;
  const {
      ACCESS: n,
      INSPECT: r,
      COMMENT: o,
      COPY: a,
      SHARE: s,
      EDIT: l,
      OWNER: h,
      APPROVE: A,
      PASSWORD_PROTECT: c
    } = require(352) /* module */, {
      GLocale: p,
      GLocaleKey: u
    } = require(209) /* module */, d = e => Object.freeze(Object.assign({
      get name() {
        return this.getName();
      },
      get description() {
        return this.getDescription();
      },
      get invitationMessage() {
        return this.getInvitationMessage();
      },
      get invitationInfo() {
        return this.getInvitationInfo();
      },
      get status() {
        return this.getStatus();
      },
      getName: t => p.get(new u("GShareRoles", "text.role-".concat(e.i18n || e.id, "-name")), null, t),
      getDescription: t => p.get(new u("GShareRoles", "text.role-".concat(e.i18n || e.id, "-description")), null, t),
      getInvitationMessage: t => p.get(new u("GShareRoles", "text.role-".concat(e.i18n || e.id, "-invitation-message")), null, t),
      getInvitationInfo: t => p.get(new u("GShareRoles", "text.role-".concat(e.i18n || e.id, "-invitation-info")), null, t),
      getStatus: t => p.get(new u("GShareRoles", "text.role-".concat(e.i18n || e.id, "-status")), null, t)
    }, e));
  exports.exports = Object.freeze({
    NoAccess: d({
      id: "no_access",
      i18n: "no-access",
      level: 0,
      permissions: { [n]: false }
    }),
    Viewer: d({
      id: "viewer",
      level: 1,
      mentionName: "viewers",
      permissions: { [n]: true }
    }),
    Developer: d({
      id: "developer",
      level: 2,
      mentionName: "developers",
      permissions: {
        [n]: true,
        [r]: true,
        [a]: true
      }
    }),
    Reviewer: d({
      id: "reviewer",
      level: 3,
      mentionName: "reviewers",
      pro: true,
      permissions: {
        [n]: true,
        [o]: true
      }
    }),
    Approver: d({
      id: "approver",
      level: 4,
      mentionName: "approvers",
      pro: true,
      permissions: {
        [n]: true,
        [o]: true,
        [A]: true
      }
    }),
    CoAuthor: d({
      id: "co_author",
      i18n: "co-author",
      level: 5,
      pro: true,
      assignable: false,
      mentionName: "coauthors",
      permissions: {
        [n]: true,
        [r]: true,
        [a]: true,
        [o]: true,
        [l]: true
      }
    }),
    Owner: d({
      id: "owner",
      level: 6,
      mentionName: "owner",
      assignable: false,
      permissions: {
        [h]: true,
        [A]: true,
        [c]: true,
        [n]: true,
        [r]: true,
        [a]: true,
        [o]: true,
        [s]: true,
        [l]: true
      }
    })
  });
}
