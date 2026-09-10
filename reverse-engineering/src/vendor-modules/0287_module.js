/**
 * chunk.vendor.js Module #287
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      i(30);
      const {
          ACCESS: n,
          INSPECT: r,
          COMMENT: o,
          COPY: a,
          SHARE: s,
          EDIT: l,
          OWNER: h,
          APPROVE: A,
          PASSWORD_PROTECT: c,
        } = i(352),
        { GLocale: p, GLocaleKey: u } = i(209),
        d = (e) =>
          Object.freeze(
            Object.assign(
              {
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
                getName: (t) =>
                  p.get(
                    new u(
                      "GShareRoles",
                      "text.role-".concat(e.i18n || e.id, "-name"),
                    ),
                    null,
                    t,
                  ),
                getDescription: (t) =>
                  p.get(
                    new u(
                      "GShareRoles",
                      "text.role-".concat(e.i18n || e.id, "-description"),
                    ),
                    null,
                    t,
                  ),
                getInvitationMessage: (t) =>
                  p.get(
                    new u(
                      "GShareRoles",
                      "text.role-".concat(
                        e.i18n || e.id,
                        "-invitation-message",
                      ),
                    ),
                    null,
                    t,
                  ),
                getInvitationInfo: (t) =>
                  p.get(
                    new u(
                      "GShareRoles",
                      "text.role-".concat(e.i18n || e.id, "-invitation-info"),
                    ),
                    null,
                    t,
                  ),
                getStatus: (t) =>
                  p.get(
                    new u(
                      "GShareRoles",
                      "text.role-".concat(e.i18n || e.id, "-status"),
                    ),
                    null,
                    t,
                  ),
              },
              e,
            ),
          );
      e.exports = Object.freeze({
        NoAccess: d({
          id: "no_access",
          i18n: "no-access",
          level: 0,
          permissions: {
            [n]: !1,
          },
        }),
        Viewer: d({
          id: "viewer",
          level: 1,
          mentionName: "viewers",
          permissions: {
            [n]: !0,
          },
        }),
        Developer: d({
          id: "developer",
          level: 2,
          mentionName: "developers",
          permissions: {
            [n]: !0,
            [r]: !0,
            [a]: !0,
          },
        }),
        Reviewer: d({
          id: "reviewer",
          level: 3,
          mentionName: "reviewers",
          pro: !0,
          permissions: {
            [n]: !0,
            [o]: !0,
          },
        }),
        Approver: d({
          id: "approver",
          level: 4,
          mentionName: "approvers",
          pro: !0,
          permissions: {
            [n]: !0,
            [o]: !0,
            [A]: !0,
          },
        }),
        CoAuthor: d({
          id: "co_author",
          i18n: "co-author",
          level: 5,
          pro: !0,
          assignable: !1,
          mentionName: "coauthors",
          permissions: {
            [n]: !0,
            [r]: !0,
            [a]: !0,
            [o]: !0,
            [l]: !0,
          },
        }),
        Owner: d({
          id: "owner",
          level: 6,
          mentionName: "owner",
          assignable: !1,
          permissions: {
            [h]: !0,
            [A]: !0,
            [c]: !0,
            [n]: !0,
            [r]: !0,
            [a]: !0,
            [o]: !0,
            [s]: !0,
            [l]: !0,
          },
        }),
      });
    }