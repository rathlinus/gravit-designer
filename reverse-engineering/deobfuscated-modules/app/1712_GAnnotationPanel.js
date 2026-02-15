/**
 * Webpack Module #1712
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(71) /* polyfill_String_includes */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(97) /* stub_requires_684 */,
      require(1175) /* stub_requires_1559 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GCollaborationMentionsUtils = require(882) /* GCollaborationMentionsUtils */,
      AppSettings = require(10) /* AppSettings */,
      GInvalidationOptions = _interopRequireDefault(require(1354) /* GInvalidationOptions */);
    const GSystemDialog = require(44) /* GSystemDialog */,
      GAnnotationsUtils = require(358) /* GAnnotationsUtils */,
      GSimpleTreeNodeNamed = require(1355) /* GSimpleTreeNodeNamed */,
      p = require(1713) /* module_1713 */,
      GAnnotationReplyEditor = require(1357) /* GAnnotationReplyEditor */,
      GAnnotationRow = require(1356) /* GAnnotationRow */,
      f = require(1279) /* module_1279 */,
      GUserModel = require(177) /* GUserModel */,
      y = ["text"];
    function v() {}
    function _(e) {
      var t = $(this).data("gannotationpanel");
      if (t.options.clickCallback) {
        var require = x.call(this, e.id);
        t.options.clickCallback(require);
      }
    }
    function b(e) {
      x.call(this, e.id) && e.expanded;
    }
    function w(e, t) {
      var n = $(this).data("gannotationpanel");
      if (n.options.renderer) return n.options.renderer(e.id, e.virtualNode, t);
    }
    function C(e) {
      var t = $(this);
      e.id === GSimpleTreeNodeNamed.COLLAPSE_ID
        ? $(e).addClass(t.data("gannotationpanel").options.collapseStyle)
        : e.id === GSimpleTreeNodeNamed.EXPAND_ID &&
          $(e).addClass(t.data("gannotationpanel").options.expandStyle);
    }
    function x(e) {
      var t = $(this).data("gannotationpanel").annotTreeNodeMap[e];
      return t ? t.annot : null;
    }
    function S(e) {
      return $(this).data("gannotationpanel").annotTreeNodeMap[e];
    }
    function E(e) {
      var t = $(this).data("gannotationpanel").annotTreeNodeMapByNodes.get(e);
      return t ? t.treeId : null;
    }
    function A(e) {
      var t = $(this).data("gannotationpanel").annotTreeNodeMapByNodes.get(e);
      return t ? t.treeNode : null;
    }
    function T(e) {
      var t = $(this).data("gannotationpanel").annotTreeNodeMap,
        n = $(this).data("gannotationpanel").annotTreeNodeMapByNodes;
      e.accept(
        function (e) {
          var _interopRequireDefault = n.get(e);
          _interopRequireDefault && (n.delete(e), (t[_interopRequireDefault.treeId] = null));
        }.bind(this)
      );
    }
    function G(e) {
      var t = $(this).data("gannotationpanel"),
        n = [];
      if (t.annotTreeNodeMap)
        for (var _interopRequireDefault in (e instanceof GCore.GComment &&
          n.push(E.call(this, e.getParent())),
        t.annotTreeNodeMap))
          t.annotTreeNodeMap[_interopRequireDefault] &&
            t.annotTreeNodeMap[_interopRequireDefault].annot &&
            (t.annotTreeNodeMap[_interopRequireDefault].annot === e ||
              (t.annotTreeNodeMap[_interopRequireDefault].annot instanceof GCore.GComment &&
                t.annotTreeNodeMap[_interopRequireDefault].annot.getParent() === e)) &&
            n.push(_interopRequireDefault);
      return n;
    }
    function P() {
      return (
        !!gDesigner.getApplicationManager().isCommentingEditingEnabled() ||
        (GSystemDialog.alert(
          GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GAnnotationPanel",
              "text.document-approved-no-annotations-update"
            )
          )
        ),
        false)
      );
    }
    function D() {
      const exports = $(this).data("gannotationpanel");
      if (exports && exports.syncCallback)
        try {
          exports.syncCallback();
        } finally {
          exports.syncCallback = null;
        }
    }
    function L(e, t, n) {
      const _interopRequireDefault = gDesigner.getApplicationManager().isCommentingEditingEnabled();
      var GCollaborationMentionsUtils = $(this).data("gannotationpanel"),
        AppSettings = S.call(this, e),
        GInvalidationOptions = AppSettings ? AppSettings.annot : null,
        GSimpleTreeNodeNamed = null;
      if (GInvalidationOptions) {
        var p = false,
          f = $(n);
        if (
          (f.attr("draggable", false),
          GInvalidationOptions.hasMixin(GCore.GAnnotation)
            ? f.addClass("parent")
            : f.addClass("child"),
          !GCollaborationMentionsUtils.showResolved &&
            ((GInvalidationOptions.hasMixin(GCore.GAnnotation) && GInvalidationOptions.getProperty("rsv")) ||
              (GInvalidationOptions instanceof GCore.GComment && GInvalidationOptions.getParent().getProperty("rsv"))))
        )
          return void f.css("display", "none");
        if (
          (f.hover(
            () =>
              G.call(this, GInvalidationOptions).forEach((e) =>
                $("#".concat(e)).addClass("on-hover")
              ),
            () =>
              G.call(this, GInvalidationOptions).forEach((e) =>
                $("#".concat(e)).removeClass("on-hover")
              )
          ),
          !(GInvalidationOptions.hasMixin(GCore.GAnnotation) ? GInvalidationOptions : GInvalidationOptions.getParent()).hasFlag(
            GCore.GNode.Flag.Selected
          ) &&
            ((GInvalidationOptions.hasMixin(GCore.GAnnotation) && !B(GInvalidationOptions).length) || U(GInvalidationOptions)) &&
            (p = true),
          !GCollaborationMentionsUtils.blockHighlight)
        ) {
          var GUserModel = GInvalidationOptions.hasFlag(GCore.GNode.Flag.Highlighted);
          !GUserModel &&
            GInvalidationOptions.hasMixin(GCore.GNode.Container) &&
            (GUserModel = GInvalidationOptions.acceptChildren(
              function (e) {
                return e.hasFlag(GCore.GNode.Flag.Highlighted);
              },
              false,
              true
            )),
            $(f).toggleClass("g-highlighted-row", GUserModel);
        }
        var y = k.call(this, GInvalidationOptions),
          v = S.call(this, y);
        undefined === v.expanded && (v.expanded = true);
        var _ = gDesigner.getActiveDocument();
        _ &&
          GInvalidationOptions.getId() === _.getFocusAnnotationId() &&
          !_.isAnnotationFocused() &&
          (_.getScene().updateActivePageForElem(v.annot),
          _.getScene().updateActiveLayerForElem(v.annot),
          _.setAnnotationFocused(),
          (v.expanded = true),
          v.annot.setFlag(GCore.GNode.Flag.Selected));
        var b = O.call(this, GInvalidationOptions);
        GInvalidationOptions.hasMixin(GCore.GAnnotation) && (GSimpleTreeNodeNamed = I.call(this, GInvalidationOptions, GCollaborationMentionsUtils.showResolved));
        var w = new GAnnotationRow({
          isCommentingEditingEnable: _interopRequireDefault,
          container: f,
          annotation: GInvalidationOptions,
          relatedNodesCount: b,
          sidebarActive: GCollaborationMentionsUtils.sidebarActive,
          isLastRow: p,
          hasResolveAccess: GCollaborationMentionsUtils.vtree.hasResolveAccess(),
          hasReopenAccess: GCollaborationMentionsUtils.vtree.hasReopenAccess(),
          mentionData: GCollaborationMentionsUtils.vtree.getMentionData(),
          onMouseEnter: () => {
            GInvalidationOptions.hasMixin(GCore.GAnnotation) &&
              !GInvalidationOptions.hasFlag(GCore.GAnnotation.Flag.Hidden) &&
              GInvalidationOptions.setFlag(GCore.GNode.Flag.Highlighted);
          },
          onMouseLeave: () => {
            GInvalidationOptions.hasMixin(GCore.GAnnotation) &&
              !GInvalidationOptions.hasFlag(GCore.GAnnotation.Flag.Hidden) &&
              GInvalidationOptions.removeFlag(GCore.GNode.Flag.Highlighted);
          },
          onChange: (e) => {
            P() &&
              (GInvalidationOptions.getProperty("text") === e
                ? D.call(this)
                : GTools.GEditor.tryRunTransaction(
                    GInvalidationOptions,
                    function () {
                      GInvalidationOptions.setProperty("text", e);
                    },
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GAnnotationPanel", "text.edit-comment")
                    )
                  ));
          },
          onToggleState: () => {
            P() &&
              (GTools.GEditor.tryRunTransaction(
                GInvalidationOptions,
                function () {
                  GCollaborationMentionsUtils.showResolved ||
                    GInvalidationOptions.getProperty("rsv") ||
                    !GInvalidationOptions.hasFlag(GCore.GNode.Flag.Selected) ||
                    GInvalidationOptions.removeFlag(GCore.GNode.Flag.Selected),
                    GInvalidationOptions.setProperty("rsv", !GInvalidationOptions.getProperty("rsv"));
                },
                GInvalidationOptions.getProperty("rsv")
                  ? GCore.GLocale.get(
                      new GCore.GLocaleKey("GAnnotationPanel", "text.reopen")
                    )
                  : GCore.GLocale.get(
                      new GCore.GLocaleKey("GAnnotationPanel", "text.resolve")
                    )
              ),
              ne.call(this),
              te.call(this));
          },
          onResolve: () => {
            P() &&
              (GTools.GEditor.tryRunTransaction(
                GInvalidationOptions,
                function () {
                  !GCollaborationMentionsUtils.showResolved &&
                    GInvalidationOptions.hasFlag(GCore.GNode.Flag.Selected) &&
                    GInvalidationOptions.removeFlag(GCore.GNode.Flag.Selected),
                    GInvalidationOptions.setProperty("rsv", true);
                },
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GAnnotationPanel", "text.resolve")
                )
              ),
              ne.call(this),
              te.call(this));
          },
          onReopen: () => {
            P() &&
              (GTools.GEditor.tryRunTransaction(
                GInvalidationOptions,
                function () {
                  GInvalidationOptions.setProperty("rsv", false);
                },
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GAnnotationPanel", "text.reopen")
                )
              ),
              ne.call(this),
              te.call(this));
          },
          onDelete: () => {
            P() &&
              GSystemDialog.confirm(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GAnnotationPanel", "text.confirm-remove")
                ),
                (e) => {
                  e &&
                    GAnnotationsUtils.removeAnnotations(
                      [GInvalidationOptions],
                      GInvalidationOptions.getParent(),
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GAnnotationPanel",
                          "text.remove-".concat(
                            GInvalidationOptions.hasMixin(GCore.GAnnotation) ? "annotation" : "comment"
                          )
                        )
                      )
                    );
                },
                null,
                null,
                null,
                true,
                true
              );
          },
          onCancel: () => {
            D.call(this);
          },
          onExpandClick: (t) => {
            t.stopPropagation(), (v.expanded = !v.expanded);
            var n = S.call(this, e);
            try {
              n.component.setCollapseState(v.expanded);
            } catch (e) {
              "function" == typeof gdb_showScene &&
                console.error("REPAIR THIS! component is NULL!");
            }
            var _interopRequireDefault = n.annot;
            G.call(this, _interopRequireDefault).forEach((e, t) => {
              if (t > 0) {
                var n = S.call(this, e);
                try {
                  n.component.setVisiblity(v.expanded);
                } catch (e) {
                  "function" == typeof gdb_showScene &&
                    console.error("REPAIR THIS! component is NULL!");
                }
              }
            });
          },
          onCopyPermalinkClick: async (e) => {
            const t = gDesigner.getActiveDocument();
            if (t) {
              const n = await gDesigner.getShareManager().getPermalink(t, e);
              n && gContainer.copyToClipboard(n);
            }
          },
          onAssignTo: (e) => {
            GInvalidationOptions.hasMixin(GCore.GAnnotation)
              ? GInvalidationOptions.setProperty("asgn", e)
              : GInvalidationOptions.getParent() &&
                GInvalidationOptions.getParent().hasMixin(GCore.GAnnotation) &&
                GInvalidationOptions.getParent().setProperty("asgn", e);
          },
          mainAnnotObject: v,
        });
        (AppSettings.element = f), (AppSettings.component = w), GCollaborationMentionsUtils.vtree.addChild(w);
      } else if (AppSettings && AppSettings.replyAnnot) {
        let e = $(n);
        if (
          (e.addClass("last-row"),
          !_interopRequireDefault ||
            !AppSettings.replyAnnot.hasFlag(GCore.GNode.Flag.Selected) ||
            AppSettings.replyAnnot.getProperty("rsv") ||
            (!GCollaborationMentionsUtils.showResolved && AppSettings.replyAnnot.getProperty("rsv")))
        )
          return void e.hide();
        const t = !AppSettings.replyAnnot.isFillingCompleted(),
          GInvalidationOptions = (e) => {
            if (P() && (e.length || (t && AppSettings.replyAnnot.isEmptyTextAllowed()))) {
              let GSystemDialog = gDesigner.getSyncUser();
              if (GAnnotationsUtils.canUpdate(GSystemDialog)) {
                const GAnnotationsUtils = AppSettings.replyAnnot.getScene(),
                  GSimpleTreeNodeNamed = GAnnotationsUtils && GTools.GEditor.getEditor(GAnnotationsUtils);
                let p, GAnnotationReplyEditor;
                (p = t
                  ? GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GAnnotationPanel",
                        "text.set-annotation-text"
                      )
                    )
                  : GCore.GLocale.get(
                      new GCore.GLocaleKey("GAnnotationPanel", "text.add-comment")
                    )),
                  GSimpleTreeNodeNamed && GSimpleTreeNodeNamed.beginTransaction();
                try {
                  if (t) {
                    AppSettings.replyAnnot.setProperty("text", e),
                      AppSettings.replyAnnot.setProperty("email", GSystemDialog.getAccountName()),
                      V.call(this, AppSettings.replyAnnot);
                    var n = GCore.GUtil.uuid(),
                      _interopRequireDefault = A.call(this, AppSettings.replyAnnot),
                      GInvalidationOptions = {
                        element: null,
                        annot: null,
                        treeNode: M.call(this, n, _interopRequireDefault, true, true),
                        replyAnnot: AppSettings.replyAnnot,
                        treeId: n,
                      };
                    (GCollaborationMentionsUtils.annotTreeNodeMap[n] = GInvalidationOptions),
                      GCollaborationMentionsUtils.replyNodes.set(AppSettings.replyAnnot, GInvalidationOptions);
                  } else {
                    V.call(this, AppSettings.replyAnnot);
                    const t = AppSettings.replyAnnot.addComment(
                      e,
                      GSystemDialog.getUID(),
                      GTools.GEditorOptions.userConfig.userName,
                      GSystemDialog.avatar,
                      GSystemDialog.getAccountName()
                    );
                    GAnnotationReplyEditor = GTools.GAnnotationEditor.createAddAnnotationTransactionData(
                      [t],
                      AppSettings.replyAnnot
                    );
                  }
                  ne.call(this), te.call(this);
                } catch (e) {
                  console.log(e);
                } finally {
                  GSimpleTreeNodeNamed && GSimpleTreeNodeNamed.commitTransaction(p, GAnnotationReplyEditor);
                }
              }
              H(this, AppSettings.replyAnnot);
            }
          },
          GSystemDialog = () => {
            H(this, AppSettings.replyAnnot), D.call(this);
          },
          GSimpleTreeNodeNamed = (e) => {
            AppSettings.replyAnnot.setProperty("asgn", e);
          };
        var C = new GAnnotationReplyEditor({
            container: e,
            annotation: AppSettings.replyAnnot,
            onSubmit: GInvalidationOptions,
            onCancel: GSystemDialog,
            onAssignTo: GSimpleTreeNodeNamed,
            mentionData: GCollaborationMentionsUtils.vtree.getMentionData(),
          }),
          x = GCollaborationMentionsUtils.annotTreeNodeMapByNodes.get(AppSettings.replyAnnot);
        (AppSettings.reply = C), GCollaborationMentionsUtils.vtree.addChild(C), x && (x.reply = C);
      }
      return GSimpleTreeNodeNamed;
    }
    function I(e, t) {
      let require = e.getProperty("asgn");
      if (!(require || []).length) return;
      var _interopRequireDefault = e.getProperty("rsv");
      let AppSettings = $("<div/>")
          .addClass("already-assigned-user-row")
          .appendTo($(this)),
        GInvalidationOptions = $("<span/>").addClass("assigned-content-group").appendTo(AppSettings);
      return (
        (0, GCollaborationMentionsUtils.getCollabInfo)(require[0]).then(async (n) => {
          let GCollaborationMentionsUtils = new GUserModel(n).getFullUserName();
          $("<span/>")
            .addClass("assign-to-text")
            .html(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GAnnotationPanel", "text.assigned-to")
              ) +
                (n && n.name
                  ? GCollaborationMentionsUtils
                  : GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "text.unknown-user")
                    ))
            )
            .appendTo(GInvalidationOptions);
          const AppSettings = !_interopRequireDefault;
          ((await AppSettings) ? GAnnotationsUtils.canResolveAnnotation(e) : GAnnotationsUtils.canReopenAnnotation(e)) &&
            $("<span/>")
              .addClass("assigned-action-group")
              .append(
                $("<span/>")
                  .addClass(
                    "icon " +
                      (AppSettings ? "gravit-icon-resolve" : "gravit-icon-resolved")
                  )
                  .addClass("assigned-icon-resolve")
                  .addClass("assigned-resolve-action")
                  .attr(
                    "data-title",
                    AppSettings
                      ? GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GAnnotationPanel",
                            "text.assign-resolve"
                          )
                        )
                      : GCore.GLocale.get(
                          new GCore.GLocaleKey("GAnnotationPanel", "text.reopen")
                        )
                  )
                  .on("click", () => {
                    P() &&
                      (AppSettings
                        ? GTools.GEditor.tryRunTransaction(
                            e,
                            function () {
                              !t &&
                                e.hasFlag(GCore.GNode.Flag.Selected) &&
                                e.removeFlag(GCore.GNode.Flag.Selected),
                                e.setProperty("rsv", true);
                            },
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GAnnotationPanel",
                                "text.resolve"
                              )
                            )
                          )
                        : GTools.GEditor.tryRunTransaction(
                            e,
                            function () {
                              e.setProperty("rsv", false);
                            },
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GAnnotationPanel",
                                "text.reopen"
                              )
                            )
                          ),
                      ne.call(this),
                      te.call(this));
                  })
              )
              .appendTo(GInvalidationOptions);
        }),
        AppSettings
      );
    }
    function k(e) {
      return G.call($(this), e)[0];
    }
    function O(e) {
      return G.call($(this), e).length;
    }
    function F(e, t, n) {
      var _interopRequireDefault = new GSimpleTreeNodeNamed.GSimpleTreeNodeNamed(e);
      return (
        n && (_interopRequireDefault.virtualNode = true),
        $(this).data("gannotationpanel").vtree.insertNodeAfter(t, _interopRequireDefault),
        _interopRequireDefault
      );
    }
    function R(e, t, n) {
      var _interopRequireDefault = new GSimpleTreeNodeNamed.GSimpleTreeNodeNamed(e);
      return (
        n && (_interopRequireDefault.virtualNode = true),
        $(this).data("gannotationpanel").vtree.insertNodeBefore(t, _interopRequireDefault),
        _interopRequireDefault
      );
    }
    function M(e, t, n, _interopRequireDefault) {
      var GTools = new GSimpleTreeNodeNamed.GSimpleTreeNodeNamed(e);
      return (
        n && (GTools.virtualNode = true),
        $(this).data("gannotationpanel").vtree.appendNode(t, GTools, _interopRequireDefault),
        GTools
      );
    }
    function N(e) {
      $(this).data("gannotationpanel").vtree.removeNode(e);
    }
    function B(e) {
      return e
        .getChildren()
        .filter((e) => e instanceof GCore.GComment && !e.getProperty("rmd"));
    }
    function U(e) {
      if (!(e instanceof GCore.GComment)) return false;
      for (var module = true, require = e.getNext(); require; ) {
        if (require instanceof GCore.GComment && !require.getProperty("rmd")) {
          module = false;
          break;
        }
        require = require.getNext();
      }
      return module;
    }
    function j(e) {
      var t = gDesigner.getSyncUser();
      t && e.getProperty("uid") && GAnnotationsUtils.isOwner(t, e)
        ? (e.$plkt = null)
        : (e.$plkt =
            GCore.GBlock.ProgramLck.NoSizeChanges |
            GCore.GBlock.ProgramLck.NoMove |
            GCore.GBlock.ProgramLck.NoDelete);
    }
    function K(e, t, n) {
      var _interopRequireDefault = GCore.GUtil.uuid(),
        GTools = $(this).data("gannotationpanel"),
        GCollaborationMentionsUtils = GTools.vtree;
      if (
        t ||
        !e.getParent() ||
        e.getParent() instanceof GCore.GAnnotationsList ||
        E.call(this, e.getParent())
      ) {
        var AppSettings;
        if ((GCollaborationMentionsUtils.beginUpdate(), e.hasMixin(GCore.GAnnotation))) {
          V.call(this, e);
          var GInvalidationOptions = (function (e) {
              for (var t = null, n = e; !t && n.getPrevious(); )
                n.getPrevious().getProperty("rmd")
                  ? (n = n.getPrevious())
                  : (t = n.getPrevious());
              return t;
            })(e),
            GSystemDialog = GInvalidationOptions ? A.call(this, GInvalidationOptions) : null;
          AppSettings = GSystemDialog ? R.call(this, _interopRequireDefault, GSystemDialog, false) : M.call(this, _interopRequireDefault, null, false);
        } else {
          var GAnnotationsUtils = e.getParent();
          V.call(this, GAnnotationsUtils);
          var GSimpleTreeNodeNamed = A.call(this, GAnnotationsUtils);
          AppSettings = M.call(this, _interopRequireDefault, GSimpleTreeNodeNamed, false, true);
        }
        var p = { element: null, annot: e, treeNode: AppSettings, treeId: _interopRequireDefault };
        if (
          ((GTools.annotTreeNodeMap[_interopRequireDefault] = p),
          GTools.annotTreeNodeMapByNodes.set(e, p),
          e.hasMixin(GCore.GAnnotation))
        ) {
          for (var GAnnotationReplyEditor = e.getFirstChild(); null !== GAnnotationReplyEditor; GAnnotationReplyEditor = GAnnotationReplyEditor.getNext())
            GAnnotationReplyEditor instanceof GCore.GComment &&
              !GAnnotationReplyEditor.getProperty("rmd") &&
              K.call(this, GAnnotationReplyEditor, t);
          if (!B(e).length) {
            var GAnnotationRow = GCore.GUtil.uuid(),
              f = {
                element: null,
                annot: null,
                treeNode: e.isFillingCompleted()
                  ? M.call(this, GAnnotationRow, AppSettings, true, true)
                  : F.call(this, GAnnotationRow, AppSettings, true),
                replyAnnot: e,
                treeId: GAnnotationRow,
              };
            (GTools.annotTreeNodeMap[GAnnotationRow] = f), GTools.replyNodes.set(e, f);
          }
          j(e);
        } else if (e instanceof GCore.GComment && U(e)) {
          let t,
            n = GCore.GUtil.uuid();
          t = F.call(this, n, AppSettings, true);
          var GUserModel = e.getParent();
          let _interopRequireDefault = {
            element: null,
            annot: null,
            treeNode: t,
            replyAnnot: GUserModel,
            treeId: n,
          };
          (GTools.annotTreeNodeMap[n] = _interopRequireDefault), GTools.replyNodes.set(GUserModel, _interopRequireDefault);
        }
        GCollaborationMentionsUtils.endUpdate(n);
      }
    }
    function V(e) {
      var t = $(this).data("gannotationpanel").replyNodes,
        n = t.get(e);
      return (
        n &&
          (N.call(this, n.treeNode),
          t.delete(e),
          ($(this).data("gannotationpanel").annotTreeNodeMap[n.treeNode.id] =
            null)),
        n
      );
    }
    function H(e, t) {
      if (t)
        !t.getParent() ||
          t.getProperty("rmd") ||
          t.isFillingCompleted() ||
          GAnnotationsUtils.removeAnnotations(
            [t],
            t.getParent(),
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GAnnotationPanel",
                "text.remove-empty-annotation"
              )
            )
          );
      else {
        var require = gDesigner.getActiveDocument();
        if (require) {
          var _interopRequireDefault = require.getEditor().getSelection();
          _interopRequireDefault &&
            _interopRequireDefault.map((t) => {
              t.hasMixin(GCore.GAnnotation) && H(e, t);
            });
        }
      }
    }
    function W(e, t) {
      var n = e.data("gannotationpanel").annotTreeNodeMapByNodes.get(t);
      n &&
        n.component &&
        (n.component.cancelEditMode(), n.reply && n.reply.hide());
    }
    function z(e) {
      var t = A.call(this, e);
      t &&
        (N.call(this, t),
        T.call(this, e),
        V.call(this, e),
        oe.requestInvalidation.call(this));
    }
    function q(e, t) {
      return !e.blockHandlers || !(!e.ignoreBlock || e.ignoreBlock !== t);
    }
    function Y() {
      return !(
        !$(this)
          .find(".annotations-buttonrow")
          .toArray()
          .some((e) => "none" !== $(e).css("display")) &&
        !$(this).find(".g-edit-mode").length
      );
    }
    function X(e, t) {
      let require = $(this).data("gannotationpanel"),
        _interopRequireDefault = false;
      const GTools = {};
      if (!require) return;
      if (require.blockAnnotationsUpdate) return;
      if (null !== require.scheduledUpdate)
        return void (require.updateInProgress && (require.scheduleNextUpdate = true));
      if (
        e &&
        e.node &&
        e.node.recordedTransaction &&
        ((_interopRequireDefault = true),
        e.properties && e.values && e.properties.length === e.values.length)
      )
        for (var GCollaborationMentionsUtils = 0, AppSettings = e.values.length; GCollaborationMentionsUtils < AppSettings; GCollaborationMentionsUtils++)
          GTools[e.properties[GCollaborationMentionsUtils]] = e.values[GCollaborationMentionsUtils];
      if (e && e.node) {
        if (e.custom) return;
        if (
          e.node.hasMixin(GCore.GAnnotation) &&
          e.node.isPropertiesIgnorable(e.properties)
        )
          return;
      }
      let GInvalidationOptions = gDesigner.getActiveDocument();
      GInvalidationOptions &&
        GInvalidationOptions.getAnnotationsId() &&
        (require.scheduledUpdate = setTimeout(() => {
          let e = $(this).data("gannotationpanel");
          if (!e) return;
          if (Y.call(this) || e.vtree.isPendingInvalidation())
            return (e.scheduledUpdate = null), void X.call(this);
          console.log("updating annotations"), (e.updateInProgress = true);
          let require = e.page.getAnnotations();
          GAnnotationsUtils.updateAndReturnCloudAnnotationsForDocument(
            GInvalidationOptions,
            GCore.GNode.store(require, { recordedTransaction: _interopRequireDefault, recordedProperties: GTools })
          )
            .then((e) => {
              let require = e.annotationsCollection,
                GCollaborationMentionsUtils = false,
                AppSettings = $(this).data("gannotationpanel");
              if (!AppSettings) return GCollaborationMentionsUtils;
              if (!AppSettings.updateInProgress) return GCollaborationMentionsUtils;
              if (
                (Y.call(this) && (AppSettings.scheduleNextUpdate = true),
                (AppSettings.updateInProgress = false),
                !AppSettings.scheduleNextUpdate)
              ) {
                let e = GAnnotationsUtils.findAnnotationsListForPage(AppSettings.page, require);
                if (e) {
                  let n = GCore.GNode.restore(e),
                    GInvalidationOptions = n.getChildren();
                  n.clearChildren(), AppSettings.vtree.beginUpdate();
                  let GSystemDialog = GAnnotationsUtils.mergeAnnotations(
                    AppSettings.page.getAnnotations(),
                    AppSettings.page.getAnnotations().getChildren(),
                    n,
                    GInvalidationOptions,
                    _interopRequireDefault ? GTools : undefined
                  );
                  (GCollaborationMentionsUtils = GCollaborationMentionsUtils || GSystemDialog),
                    AppSettings.vtree.endUpdate(t),
                    ne.call(this),
                    te.call(this);
                }
                e ||
                  (AppSettings.vtree.beginUpdate(),
                  AppSettings.page.getAnnotations().clearChildren(),
                  AppSettings.vtree.endUpdate(t),
                  ne.call(this)),
                  AppSettings.options.updateAnnotationCache(require);
              }
              if (
                ((AppSettings.scheduledUpdate = null),
                AppSettings.scheduleNextUpdate &&
                  ((AppSettings.scheduleNextUpdate = false), X.call(this)),
                GCollaborationMentionsUtils)
              ) {
                let t = AppSettings.page.getScene();
                t &&
                  t.getLastTimeAnnotationsFromCloudModified() <
                    e.lastUpdateTime &&
                  t.setLastTimeAnnotationsFromCloudModified(e.lastUpdateTime),
                  gDesigner.notifyDocumentModified(GInvalidationOptions);
              }
              return GCollaborationMentionsUtils;
            })
            .catch((t) => {
              console.warn("error during annotations list update: " + t),
                (e.scheduledUpdate = null),
                (e.updateInProgress = false),
                e.scheduleNextUpdate &&
                  ((e.scheduleNextUpdate = false), X.call(this));
            });
        }, 500));
    }
    function Q(e) {
      var t = $(this).data("gannotationpanel");
      if (q(t, e.node)) {
        const n = e.node.findParent((e) => e instanceof GCore.GAnnotationsList),
          _interopRequireDefault = () => {
            const t = new GInvalidationOptions.default();
            if (e.node instanceof GCore.GComment) {
              const n = e.node.getProperty("text");
              (n && AppSettings.NOTIFICATION_USER_MENTION_REGEX.test(n)) ||
                (t.collaboratorsCache = false);
            }
            return t;
          };
        let GTools = false;
        const GCollaborationMentionsUtils = () => {
            if (!e.node.getProperty("rmd")) {
              const t = n ? GInvalidationOptions.default.NO_CACHE_INVALIDATION : _interopRequireDefault();
              K.call(this, e.node, null, t);
            }
          },
          GSystemDialog = () => {
            n && X.call(this, null, _interopRequireDefault());
          };
        (e.node.hasMixin(GCore.GAnnotation) ||
          e.node instanceof GCore.GComment ||
          e.node instanceof GCore.GAnnotationsList) &&
          (e.node.getProperty("rmd") ? (GTools = true) : GCollaborationMentionsUtils()),
          GTools
            ? "number" != typeof t.delayedUpdate &&
              (t.delayedUpdate = setTimeout(() => {
                GCollaborationMentionsUtils(), GSystemDialog(), (t.delayedUpdate = null);
              }))
            : GSystemDialog();
      }
    }
    function J(e) {
      q($(this).data("gannotationpanel"), e.node) &&
        (z.call(this, e.node),
        e.node.findParent((e) => e instanceof GCore.GAnnotationsList) &&
          X.call(this));
    }
    function Z(e) {
      if (!e.temporary && !$(this).data("gannotationpanel").blockHandlers) {
        e.properties.some((e) => y.indexOf(e) >= 0) &&
          oe.requestInvalidation.call(this);
        let t = gDesigner.getSyncUser();
        GAnnotationsUtils.canUpdate(t) &&
          e.node.hasMixin(GCore.GAnnotation) &&
          e.properties.includes("rsv") &&
          setTimeout(() => {
            let require = e.values[e.properties.indexOf("rsv")];
            (undefined !== require && false !== require) !== e.node.getProperty("rsv") &&
              (V.call(this, e.node),
              e.node.addComment(
                "",
                t.getUID(),
                GTools.GEditorOptions.userConfig.userName,
                t.avatar,
                t.getAccountName(),
                e.node.getProperty("rsv")
                  ? GCore.GComment.Type.Close
                  : GCore.GComment.Type.Open
              ));
          }),
          (e.node instanceof GCore.GAnnotationsList ||
            e.node.findParent((e) => e instanceof GCore.GAnnotationsList)) &&
            (e.node.hasMixin(GCore.GAnnotation) &&
              e.properties.indexOf("uid") >= 0 &&
              j(e.node),
            X.call(this, e)),
          e.properties.includes("rmd") && e.node.getProperty("rmd")
            ? (e.node.hasMixin(GCore.GAnnotation) && W(this, e.node),
              ne.call(this),
              te.call(this))
            : e.properties.includes("text") &&
              e.node.isFillingCompleted() &&
              e.node.hasMixin(GCore.GAnnotation) &&
              W(this, e.node);
      }
    }
    function ee(e) {
      var t,
        n = $(this).data("gannotationpanel");
      if (q(n, e.node)) {
        var _interopRequireDefault = false;
        if (e.node instanceof GCore.GComment || e.node.hasMixin(GCore.GAnnotation))
          if (
            e.flag === GCore.GAnnotation.Flag.Hidden ||
            e.flag === GCore.GNode.Flag.Selected ||
            e.flag === GCore.GNode.Flag.Active
          ) {
            var GCollaborationMentionsUtils = e.node.getPage(),
              AppSettings = e.node.getScene(),
              GAnnotationsUtils = AppSettings && AppSettings.getActivePage();
            if (
              ((GAnnotationsUtils && GCollaborationMentionsUtils && GAnnotationsUtils !== GCollaborationMentionsUtils) || (_interopRequireDefault = true),
              e.node.hasMixin(GCore.GAnnotation) &&
                e.flag === GCore.GNode.Flag.Selected &&
                false === e.set &&
                !e.node.isFillingCompleted() &&
                !(t = e.node).getProperty("rmd") &&
                t.getParent())
            )
              if (e.node.isEmptyTextAllowed()) {
                let t = n.annotTreeNodeMapByNodes.get(e.node);
                t &&
                  t.reply &&
                  t.reply.isVisible() &&
                  setTimeout(() => t.reply.forceSubmit());
              } else
                GSystemDialog.confirm(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GAnnotationPanel",
                      "text.confirm-discard-annotation"
                    )
                  ),
                  (t) => {
                    if (t)
                      setTimeout(() => {
                        H(this, e.node);
                      });
                    else {
                      gDesigner
                        .getActiveDocument()
                        .getEditor()
                        .updateSelection(false, [e.node]),
                        gDesigner
                          .getToolManager()
                          .activateTool(GTools.GPointerTool, null, true);
                      var _interopRequireDefault = n.annotTreeNodeMapByNodes.get(e.node);
                      _interopRequireDefault &&
                        _interopRequireDefault.reply &&
                        setTimeout(() => {
                          _interopRequireDefault.reply.requestFocus();
                        });
                    }
                  }
                );
          } else if (!n.blockHighlight && e.flag === GCore.GNode.Flag.Highlighted) {
            var GSimpleTreeNodeNamed = e.node,
              p = function (e) {
                var t = A.call(this, e);
                return t && t.isVisible();
              }.bind(this);
            if (p(GSimpleTreeNodeNamed) || GSimpleTreeNodeNamed.findParent(p)) {
              var GAnnotationReplyEditor = n.annotTreeNodeMapByNodes.get(GSimpleTreeNodeNamed).component;
              GAnnotationReplyEditor
                ? GAnnotationReplyEditor.toggleHighlight(e.set)
                : console.warn("element parent was null");
            }
          }
        _interopRequireDefault && oe.requestInvalidation.call(this, GInvalidationOptions.default.NO_CACHE_INVALIDATION);
      }
    }
    function te() {
      var e = $(this).data("gannotationpanel");
      if ((e.vtree.beginUpdate(), e.page))
        for (
          var module = e.page.getAnnotations().getFirstChild();
          null !== module;
          module = module.getNext()
        )
          module.getProperty("rmd") || K.call(this, module, true);
      e.vtree.endUpdate();
    }
    function ne(e) {
      var t = $(this).data("gannotationpanel");
      t.vtree.clean(),
        (t.annotTreeNodeMap = {}),
        (t.replyNodes = new Map()),
        (t.annotTreeNodeMapByNodes = new Map()),
        undefined !== e && (t.page = e),
        "number" == typeof t.delayedUpdate &&
          (clearTimeout(t.delayedUpdate), (t.delayedUpdate = null));
    }
    GCore.GObject.inheritAndMix(v, GCore.GObject);
    var oe = {
      init: function (e) {
        return (
          (e = $.extend(
            {
              nodeStyle: "annotation-row",
              expandStyle: "annotation-arrow gravit-icon-right",
              collapseStyle: "annotation-arrow gravit-icon-down",
              freeHeight: 7,
              insertIntoStyle: "g-drop",
              upSeparatorSpan1Style: "g-up-separator-span1",
              upSeparatorSpan2Style: "g-up-separator-span2",
              downSeparatorSpan1Style: "g-down-separator-span1",
              downSeparatorSpan2Style: "g-down-separator-span2",
              renderer: L.bind(this),
              expandRenderer: C.bind(this),
              separatorRenderer: null,
              moveCallback: null,
              clickCallback: null,
              startDraggingCallback: null,
              updateCommentCount: null,
            },
            e
          )),
          this.each(function () {
            $(this)
              .addClass("g-annotation-panel")
              .data("gannotationpanel", {
                vtree: new p(
                  this,
                  w.bind(this),
                  e.nodeStyle,
                  e.expandStyle === e.collapseStyle ? e.expandStyle : null,
                  _.bind(this),
                  b.bind(this),
                  e.upSeparatorSpan1Style,
                  e.upSeparatorSpan2Style,
                  e.downSeparatorSpan1Style,
                  e.downSeparatorSpan2Style
                ),
                options: e,
                annotTreeNodeMap: {},
                annotTreeNodeMapByNodes: new Map(),
                replyNodes: new Map(),
                page: null,
                scheduledUpdate: null,
                scheduleNextUpdate: false,
                blockAnnotationsUpdate: false,
                updateInProgress: false,
                showResolved:
                  "boolean" == typeof e.showResolved && e.showResolved,
                currentFocus: null,
                sidebarActive: e.sidebarActive,
                syncCallback: null,
                delayedUpdate: null,
              });
          })
        );
      },
      requestInvalidation: function (e) {
        $(this).data("gannotationpanel").vtree.requestInvalidation(0, e);
      },
      refresh: function () {
        $(this).data("gannotationpanel").vtree.refresh();
      },
      relayout: function (e) {
        var t = $(this).data("gannotationpanel"),
          n = t.vtree,
          _interopRequireDefault = t.currentFocus;
        _interopRequireDefault && n.expandAndFocus(_interopRequireDefault),
          e
            ? (ne.call(this), te.call(this))
            : oe.requestInvalidation.call(
                this,
                GInvalidationOptions.default.NO_CACHE_INVALIDATION
              );
      },
      cleanEmptyAnnotations: function () {
        H(this);
      },
      isEditingOrAddingContent: function () {
        return $(this)
          .data("gannotationpanel")
          .vtree.isEditingOrAddingContent();
      },
      showResolved: function (e) {
        var t = $(this).data("gannotationpanel");
        t.showResolved !== e &&
          ((t.showResolved = e), ne.call(this), te.call(this));
      },
      page: function (e) {
        var t = $(this),
          n = t.data("gannotationpanel") || {};
        return arguments.length
          ? (e !== n.page &&
              (n.page &&
                n.page.hasMixin(GCore.GEventTarget) &&
                (n.page.removeEventListener(
                  GCore.GNode.AfterInsertEvent,
                  n.afterNodeInsertHandler,
                  this
                ),
                n.page.removeEventListener(
                  GCore.GNode.BeforeRemoveEvent,
                  n.beforeNodeRemoveHandler,
                  this
                ),
                n.page.removeEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  n.afterPropertiesChangeHandler,
                  this
                ),
                n.page.removeEventListener(
                  GCore.GNode.AfterFlagChangeEvent,
                  n.afterFlagChangeHandler,
                  this
                ),
                null !== n.scheduledUpdate &&
                  (clearTimeout(n.scheduledUpdate), (n.scheduledUpdate = null)),
                (n.updateInProgress = false)),
              ne.call(this, e),
              (n.page = e),
              n.page &&
                (n.page.hasMixin(GCore.GEventTarget) &&
                  ((n.beforeNodeRemoveHandler = J.bind(this)),
                  (n.afterPropertiesChangeHandler = Z.bind(this)),
                  (n.afterFlagChangeHandler = ee.bind(this)),
                  (n.afterNodeInsertHandler = Q.bind(this)),
                  n.page.addEventListener(
                    GCore.GNode.AfterInsertEvent,
                    n.afterNodeInsertHandler,
                    this
                  ),
                  n.page.addEventListener(
                    GCore.GNode.BeforeRemoveEvent,
                    n.beforeNodeRemoveHandler,
                    this
                  ),
                  n.page.addEventListener(
                    GCore.GNode.AfterPropertiesChangeEvent,
                    n.afterPropertiesChangeHandler,
                    this
                  ),
                  n.page.addEventListener(
                    GCore.GNode.AfterFlagChangeEvent,
                    n.afterFlagChangeHandler,
                    this
                  )),
                te.call(this))),
            this)
          : n.page;
      },
      setDelayedSyncCallback: function (e) {
        $(this).data("gannotationpanel").syncCallback = e;
      },
      annotations: function (e) {
        let module = false;
        if (Y.call(this)) return f.DELAYED;
        let require = $(this).data("gannotationpanel"),
          _interopRequireDefault = GCore.GNode.restore(e),
          GTools = _interopRequireDefault.getChildren();
        return (
          _interopRequireDefault.clearChildren(),
          (require.blockAnnotationsUpdate = true),
          require.vtree.beginUpdate(),
          (module = GAnnotationsUtils.mergeAnnotations(
            require.page.getAnnotations(),
            require.page.getAnnotations().getChildren(),
            _interopRequireDefault,
            GTools
          )),
          require.vtree.endUpdate(),
          (require.blockAnnotationsUpdate = false),
          ne.call(this),
          te.call(this),
          module ? f.UPDATED : f.SKIPPED
        );
      },
      blockHandlers: function (e) {
        $(this).data("gannotationpanel").blockHandlers = !!e;
      },
      ignoreBlock: function (e) {
        $(this).data("gannotationpanel").ignoreBlock = e;
      },
      setBlockHighlight: function (e) {
        $(this).data("gannotationpanel").blockHighlight = !!e;
      },
      getTreeNode: function (e) {
        var t = null;
        return $(this).data("gannotationpanel") && (t = A.call(this, e)), t;
      },
      scrollIntoView: function () {
        const exports = $(this).find(".annotation-row.g-selected").attr("id");
        if (exports) {
          const t = S.call(this, exports);
          t &&
            (t.reply
              ? t.reply.scrollIntoView()
              : t.component && t.component.scrollIntoView());
        }
      },
      getItem: function (e) {
        return x.call(this, e.id);
      },
    };
    (exports.exports = v),
      ($.fn.gAnnotationPanel = function (e) {
        return oe[e]
          ? oe[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
          : oe.init.apply(this, arguments);
      });
  }