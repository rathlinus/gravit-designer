/**
 * Webpack Module #882
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
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
            let _interopRequireDefault = require[e];
            if (
              !_interopRequireDefault.getRole().is(AppSettings.ShareRoles.Viewer) &&
              !_interopRequireDefault.getRole().is(AppSettings.ShareRoles.NoAccess)
            ) {
              let e = await c(_interopRequireDefault.getUID());
              module.push(DataModule_883.default.createUserMention(_interopRequireDefault, e));
            }
          }
        let _interopRequireDefault,
          s,
          l,
          d,
          u = [];
        if (module.length) {
          (_interopRequireDefault = module.filter((e) => e.getRole().is(AppSettings.ShareRoles.Reviewer))),
            (s = module.filter((e) => e.getRole().is(AppSettings.ShareRoles.Approver))),
            (l = module.filter((e) => e.getRole().is(AppSettings.ShareRoles.CoAuthor))),
            (d = module.filter((e) => e.getRole().is(AppSettings.ShareRoles.Owner)));
          const e = (0, GAnnotationPanel.createAdditionalMentions)();
          _interopRequireDefault && _interopRequireDefault.length && u.push(e.MENTION_ALL_REVIEWERS),
            s && s.length && u.push(e.MENTION_ALL_APPROVERS),
            l && l.length && u.push(e.MENTION_ALL_CO_AUTHORS),
            d && d.length && u.push(e.MENTION_OWNER),
            u.push(e.MENTION_ALL);
        }
        return {
          data: module,
          allReviewers: _interopRequireDefault,
          allApprovers: s,
          allCoAuthors: l,
          owner: d,
          additionalMentions: u,
        };
      }),
      (module.replaceAdditionalCollabShowTextBeforeSend = function (e) {
        const module = (0, GAnnotationPanel.createAdditionalMentions)();
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
                _interopRequireDefault = e.map((e) => e.id);
              return (
                (require =
                  t.id === s.MENTION_ALL_REVIEWERS.id &&
                  this._mentionData &&
                  this._mentionData.allReviewers &&
                  this._mentionData.allReviewers.length
                    ? this._mentionData.allReviewers.filter(
                        (e) => !_interopRequireDefault.includes(e.id)
                      )
                    : t.id === s.MENTION_ALL_APPROVERS.id &&
                      this._mentionData &&
                      this._mentionData.allApprovers &&
                      this._mentionData.allApprovers.length
                    ? this._mentionData.allApprovers.filter(
                        (e) => !_interopRequireDefault.includes(e.id)
                      )
                    : t.id === s.MENTION_ALL_CO_AUTHORS.id &&
                      this._mentionData &&
                      this._mentionData.allCoAuthors &&
                      this._mentionData.allCoAuthors.length
                    ? this._mentionData.allCoAuthors.filter(
                        (e) => !_interopRequireDefault.includes(e.id)
                      )
                    : t.id === s.MENTION_ALL.id
                    ? this._data.filter((e) => !_interopRequireDefault.includes(e.id))
                    : t.id === s.MENTION_OWNER.id &&
                      this._owner &&
                      this._owner.length
                    ? this._owner.filter((e) => !_interopRequireDefault.includes(e.id))
                    : _interopRequireDefault.includes(t.id)
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
      require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(168) /* polyfill_Array_reduce */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(71) /* polyfill_String_includes */,
      require(34) /* polyfill_String_replace */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(169) /* stub_requires_683 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var AppSettings = require(10) /* AppSettings */,
      DataModule_883 = _interopRequireDefault(require(883) /* DataModule_883 */),
      GAnnotationPanel = require(1353) /* Exports_GAnnotationPanel */;
    const s = (0, GAnnotationPanel.createAdditionalMentions)(),
      l = {};
    async function c(e) {
      return (
        l.hasOwnProperty(e) || (l[e] = AppSettings.gApi.getUser(e, true).catch(() => null)),
        l[e]
      );
    }
    function d(e) {
      e && e.length && (this._assignees = [e]);
    }
  }