/**
 * Webpack Module #882
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.getCollabInfo = c),
      (module.handleCollabsData = async function (e) {
        if (
          !gDesigner.getActiveDocument() ||
          !gDesigner.getActiveDocument().getStorageItem()
        )
          return;
        let module = [];
        const require = e
          ? await e
          : gDesigner
              .getShareManager()
              .getCollaboratorsCached(gDesigner.getActiveDocument());
        if (require && require.length)
          for (let e = 0; e < require.length; e++) {
            let o = require[e];
            if (
              !o.getRole().is(i.ShareRoles.Viewer) &&
              !o.getRole().is(i.ShareRoles.NoAccess)
            ) {
              let e = await c(o.getUID());
              module.push(a.default.createUserMention(o, e));
            }
          }
        let o,
          s,
          l,
          d,
          u = [];
        if (module.length) {
          (o = module.filter((e) => e.getRole().is(i.ShareRoles.Reviewer))),
            (s = module.filter((e) => e.getRole().is(i.ShareRoles.Approver))),
            (l = module.filter((e) => e.getRole().is(i.ShareRoles.CoAuthor))),
            (d = module.filter((e) => e.getRole().is(i.ShareRoles.Owner)));
          const e = (0, r.createAdditionalMentions)();
          o && o.length && u.push(e.MENTION_ALL_REVIEWERS),
            s && s.length && u.push(e.MENTION_ALL_APPROVERS),
            l && l.length && u.push(e.MENTION_ALL_CO_AUTHORS),
            d && d.length && u.push(e.MENTION_OWNER),
            u.push(e.MENTION_ALL);
        }
        return {
          data: module,
          allReviewers: o,
          allApprovers: s,
          allCoAuthors: l,
          owner: d,
          additionalMentions: u,
        };
      }),
      (module.replaceAdditionalCollabShowTextBeforeSend = function (e) {
        const module = (0, r.createAdditionalMentions)();
        return (
          this._mentionsCollection.forEach((n) => {
            n.id === module.MENTION_ALL.id
              ? e.replace(module.MENTION_ALL.showText, module.MENTION_ALL.id)
              : n.id === module.MENTION_OWNER.id
              ? e.replace(module.MENTION_OWNER.showText, module.MENTION_OWNER.id)
              : n.id === module.MENTION_ALL_REVIEWERS.id
              ? e.replace(
                  module.MENTION_ALL_REVIEWERS.showText,
                  module.MENTION_ALL_REVIEWERS.id
                )
              : n.id === module.MENTION_ALL_APPROVERS.id
              ? e.replace(
                  module.MENTION_ALL_APPROVERS.showText,
                  module.MENTION_ALL_APPROVERS.id
                )
              : n.id === module.MENTION_ALL_CO_AUTHORS.id &&
                e.replace(
                  module.MENTION_ALL_CO_AUTHORS.showText,
                  module.MENTION_ALL_CO_AUTHORS.id
                );
          }),
          e
        );
      }),
      (module.showAssigneeRow = function (e) {
        if (!e || !e.length) return;
        e.mentionsInput("getMentions", (e) => {
          if (
            ((this._mentionsCollection = e), this._mentionsCollection.length)
          ) {
            this._assigneeRow.show();
            let e = this._mentionsCollection.reduce((e, t) => {
              let require = [],
                o = e.map((e) => e.id);
              return (
                (require =
                  t.id === s.MENTION_ALL_REVIEWERS.id &&
                  this._mentionData &&
                  this._mentionData.allReviewers &&
                  this._mentionData.allReviewers.length
                    ? this._mentionData.allReviewers.filter(
                        (e) => !o.includes(e.id)
                      )
                    : t.id === s.MENTION_ALL_APPROVERS.id &&
                      this._mentionData &&
                      this._mentionData.allApprovers &&
                      this._mentionData.allApprovers.length
                    ? this._mentionData.allApprovers.filter(
                        (e) => !o.includes(e.id)
                      )
                    : t.id === s.MENTION_ALL_CO_AUTHORS.id &&
                      this._mentionData &&
                      this._mentionData.allCoAuthors &&
                      this._mentionData.allCoAuthors.length
                    ? this._mentionData.allCoAuthors.filter(
                        (e) => !o.includes(e.id)
                      )
                    : t.id === s.MENTION_ALL.id
                    ? this._data.filter((e) => !o.includes(e.id))
                    : t.id === s.MENTION_OWNER.id &&
                      this._owner &&
                      this._owner.length
                    ? this._owner.filter((e) => !o.includes(e.id))
                    : o.includes(t.id)
                    ? []
                    : [t]),
                e.push(...require),
                e
              );
            }, []);
            if (1 === e.length)
              this._assigneeSelector.hide(),
                this._onlyOneAssignee.html(e[0].name),
                this._onlyOneAssignee.show();
            else {
              this._onlyOneAssignee.hide();
              let t = this._assigneeSelector.find("select");
              t.find("option").remove(),
                e.forEach((e) => {
                  t.append($("<option>").attr("value", e.id).text(e.name));
                }),
                this._assigneeSelector.show();
            }
            d.call(this, e[0].id);
          } else
            this._assigneeRow.hide(),
              (this._shouldAssign = false),
              this._assigneeCheckBox.prop("checked", this._shouldAssign);
        });
      }),
      (module.updateAssignee = d),
      require(58) /* module_58 */,
      require(19) /* module_19 */,
      require(168) /* module_168 */,
      require(8) /* module_8 */,
      require(20) /* module_20 */,
      require(71) /* module_71 */,
      require(34) /* module_34 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(13) /* module_13 */,
      require(32) /* module_32 */,
      require(38) /* module_38 */,
      require(169) /* module_169 */,
      require(33) /* module_33 */,
      require(26) /* module_26 */;
    var i = require(10) /* module_10 */,
      a = o(require(883) /* module_883 */),
      r = require(1353) /* Exports_GAnnotationPanel */;
    const s = (0, r.createAdditionalMentions)(),
      l = {};
    async function c(e) {
      return (
        l.hasOwnProperty(e) || (l[e] = i.gApi.getUser(e, true).catch(() => null)),
        l[e]
      );
    }
    function d(e) {
      e && e.length && (this._assignees = [e]);
    }
  }