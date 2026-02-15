/**
 * Webpack Module #1356
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(30) /* polyfill_Object_assign */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(71) /* polyfill_String_includes */,
    require(151) /* DataModule_151 */,
    require(34) /* polyfill_String_replace */,
    require(91) /* polyfill_String_trim */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var AppSettings = require(10) /* AppSettings */,
    GCollaborationMentionsUtils = require(882) /* GCollaborationMentionsUtils */,
    r = require(1353) /* Exports_GAnnotationPanel */,
    s = require(263) /* Exports_GRegex */,
    l = require(67) /* GRichTooltipConfig */,
    GAnnotationsUtils = _interopRequireDefault(require(358) /* GAnnotationsUtils */),
    GCollaborators = _interopRequireDefault(require(1324) /* GCollaborators */),
    DataModule_883 = _interopRequireDefault(require(883) /* DataModule_883 */);
  const {
      GSystem: p,
      GLocale: g,
      GLocaleKey: h,
      GUtil: f,
      GComment: m,
      GAnnotation: y,
      GObject: v,
      GNode: _,
    } = require(1) /* GCore */,
    {
      NEW_COMMENT_READ_TIMEOUT: b,
      ANNOTATION_PERMANENT_LINK: w,
      IS_COREL: C,
    } = ((0, r.createAdditionalMentions)(), require(10)) /* AppSettings */,
    DataModule_1191 = require(1191) /* DataModule_1191 */,
    S = require(1166) /* module_1166 */,
    E = require(434) /* stub_requires_30_1072 */,
    { getAnnotationType: A } = require(40);
  class T extends DataModule_1191 {
    constructor(e) {
      super();
      let {
      container: module,
      annotation: require,
      relatedNodesCount: _interopRequireDefault,
      sidebarActive: AppSettings,
      isLastRow: GCollaborationMentionsUtils,
      mentionData: r,
      onMouseEnter: s,
      onMouseLeave: l,
      onChange: GAnnotationsUtils,
      onToggleState: GCollaborators,
      onResolve: DataModule_883,
      onReopen: p,
      onDelete: g,
      onCancel: h,
      onExpandClick: f,
      onCopyPermalinkClick: m,
      onAssignTo: y,
      mainAnnotObject: v,
      isCommentingEditingEnable: _,
      hasResolveAccess: b,
      hasReopenAccess: w,
      } = e;
      ((this._container = module),
      (this._annotation = require),
      (this._relatedNodesCount = _interopRequireDefault),
      (this._sidebarActive = AppSettings),
      (this._isLastRow = GCollaborationMentionsUtils),
      (this._onMouseEnter = s),
      (this._onMouseLeave = l),
      (this._onChange = GAnnotationsUtils),
      (this._onToggleState = GCollaborators),
      (this._onResolve = DataModule_883),
      (this._onReopen = p),
      (this._onDelete = g),
      (this._onCancel = h),
      (this._onExpandClick = f),
      (this._onCopyPermalinkClick = m),
      (this._onAssignTo = y),
      (this._mainAnnotObject = v),
      (this._shouldAssign = false),
      (this._assignees = []),
      (this._mentionsCollection = []),
      (this._data = r.data),
      (this._owner = r.owner),
      (this._additionalMentions = r.additionalMentions),
      (this._mentionData = r),
      (this._isCommentingEditingEnable = _),
      (this._hasResolveAccess = b),
      (this._hasReopenAccess = w),
      this._init());
    }

    _isRead = false;
    _isTypeResolved = false;
    _isTypeReopened = false;
    _isParentAnnotResolved = false;

    _init() {
      var e,
        t = this._container,
        n = this._annotation,
        _interopRequireDefault = A(
          this._annotation instanceof m ? this._annotation._parent : this._annotation
        ),
        AppSettings = this,
        r = gDesigner.getSyncUser(),
        s = GAnnotationsUtils.default.isOwner(r, n),
        GCollaborators = gDesigner.getApplicationManager();
      const DataModule_883 = this._isCommentingEditingEnable && (this._hasResolveAccess || s),
        f = this._isCommentingEditingEnable && (this._hasReopenAccess || s);
      var v = $('<span></span>').addClass('annotation-title-group').appendTo(t);
      t.on('mouseenter', this._onMouseEnter).on('mouseleave', this._onMouseLeave);
      var b = $('<div/>').addClass('email-and-role-tooltop').appendTo(v);
      gDesigner
        .getShareManager()
        .getRoleNameByUserId(n.getProperty('uid'))
        .then((e) => {
          b.gRichTooltip(
            l.GRichTooltipConfig.from({
              title: n.getProperty('email') || r.getEmail() || ' ',
              description: e,
              forceShow: true,
              middle: false,
              flipHorizontal: true,
              marginLeft: 26,
            })
          );
        });
      var DataModule_1191 = n.getProperty('name');
      DataModule_1191 =
        DataModule_1191 ||
        n.getProperty('login') ||
        n.getProperty('email').split('@')[0] ||
        g.get(new h('GAnnotationPanel', 'text.empty'));
      var T = $('<span></span>').html(L(DataModule_1191)).addClass('annotation-title').appendTo(b);
      gDesigner
        .getShareManager()
        .getCollaboratorById(n.getProperty('uid'))
        .then((e) => {
          const t = S.getUserDataFromAnnotAndUser(n, e || r);
          new S(t).build().addClass('g-user-comment-preview').insertBefore(T);
        });
      var P = new Date(n.getProperty('mtime') || n.getProperty('time')),
        D = g.toLocaleDate(P, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        });
      ($('<span>').text('·').addClass('dot').appendTo(v),
        $('<span></span>').text(D).addClass('annotation-date').appendTo(v),
        (this._annotationCommentContainer = $('<div/>')
          .addClass('annotation-comment-container')
          .appendTo(t)),
        (this._contentEditorButtons = $('<div>')));
      var I = $('<span></span>')
        .addClass('annotation-comment-content')
        .css('userSelect', 'text')
        .appendTo(this._annotationCommentContainer);
      if (n instanceof m)
        switch ((this._updateParentAnnotResolvedStatus(n.getParent()), n.getProperty('type'))) {
          case m.Type.User:
            ((e = this._generateCommentContentHTML(n)),
              I.html(e.html),
              this._updateReadUnreadStatus(v));
            break;
          case m.Type.Open:
            (I.addClass('automatic').text(g.get(new h('GAnnotationPanel', 'text.re-opened'))),
              this._updateReadUnreadStatus(v),
              (this._isTypeReopened = true),
              (this._isTypeResolved = false));
            break;
          case m.Type.Close:
            (I.addClass('automatic').text(
              g.get(new h('GAnnotationPanel', 'text.marked-as-resolved'))
            ),
              (this._isRead = true),
              (this._isTypeResolved = true),
              (this._isTypeReopened = false));
        }
      else
        (this._updateParentAnnotResolvedStatus(n),
          (e = this._generateCommentContentHTML(n)),
          I.html(e.html),
          this._updateReadUnreadStatus(v));
      var k = (e) => {
          ((e = (
            (e = GCollaborationMentionsUtils.replaceAdditionalCollabShowTextBeforeSend.call(
              this,
              e
            )) || ''
          ).trim()) ||
            n.isEmptyTextAllowed()) &&
            (this._onChange(e),
            this._shouldAssign &&
              this._assignees &&
              this._assignees.length &&
              AppSettings._onAssignTo(AppSettings._assignees));
        },
        O = $('<textarea></textarea>')
          .appendTo(this._annotationCommentContainer)
          .addClass('annotation-comment-editor')
          .addClass('mention')
          .on('click', function (e) {
            AppSettings.isEditMode() && e.stopPropagation();
          })
          .on('blur', function () {
            !AppSettings.isEditMode() ||
              (AppSettings._mentionsCollection && AppSettings._mentionsCollection.length) ||
              (k(this.value), AppSettings.cancelEditMode());
          })
          .on('keydown', function (e) {
            AppSettings.isEditMode() && G(e) && e.preventDefault();
          })
          .on('keypress', function (e) {
            AppSettings.isEditMode() &&
              p.operatingSystem === p.OperatingSystem.OSX_IOS &&
              13 === e.keyCode &&
              e.altKey &&
              e.preventDefault();
          })
          .on('keyup', function (e) {
            const t = O.parent().find('.mentions-autocomplete-list').data('assign');
            AppSettings.isEditMode() &&
              (G(e) && !t
                ? (k(this.value), AppSettings.cancelEditMode(), e.preventDefault())
                : 27 === e.keyCode && (AppSettings.cancelEditMode(), AppSettings._onCancel()));
          });
      if (
        (O.mentionsInput({
          elastic: false,
          onDataRequest: (e, t, n) => {
            let _interopRequireDefault = this._data.filter(
              (e) =>
                e.getFullUserName().toLowerCase().includes(t.toLowerCase()) ||
                (e.getEmail() && e.getEmail().toLowerCase().includes(t.toLowerCase()))
            );
            (_interopRequireDefault.push(...this._additionalMentions),
              n.call(this, _interopRequireDefault));
          },
          onSelectItem: () => {
            gDesigner.stats('commentdocker_mention_select-user', _interopRequireDefault);
          },
        }).on('input', function () {
          (GCollaborationMentionsUtils.showAssigneeRow.call(AppSettings, O),
            (this.style.height = 0),
            (this.style.height = this.scrollHeight + 'px'));
        }),
        this._annotationCommentContainer
          .find('.mentions-autocomplete-list')
          .delegate('li', 'mousedown', () => {
            GCollaborationMentionsUtils.showAssigneeRow.call(this, O);
          }),
        this.setMentionOverlayBorderVisiblity(false),
        (this._onlyOneAssignee = $('<span>')
          .addClass('only-one-assignee')
          .html(1 === this._mentionsCollection.length ? this._mentionsCollection[0].name : '')
          .css('display', 'none')),
        (this._assigneeSelector = $('<div>')
          .addClass('assignee-selector')
          .css('display', 'none')
          .append(
            $('<select>').on('change', (e) => {
              GCollaborationMentionsUtils.updateAssignee.call(this, $(e.target).val());
            })
          )),
        (this._assigneeCheckBox = $('<input>')
          .attr('type', 'checkbox')
          .prop('checked', this._shouldAssign)
          .on('change', (e) => {
            ((this._shouldAssign = $(e.target).prop('checked')),
              gDesigner.stats('commentdocker_mention_assign-user', _interopRequireDefault));
          })),
        (this._assigneeRow = $('<div>')
          .css('display', 'none')
          .addClass('assignee-row-container')
          .append(
            $('<label>')
              .addClass('label')
              .addClass('assignee-row-label')
              .append(this._assigneeCheckBox)
              .append($('<span>').html(g.get(new h('GAnnotationPanel', 'text.assign-to'))))
              .append(this._onlyOneAssignee)
              .append(this._assigneeSelector)
          )
          .appendTo(this._annotationCommentContainer)),
        this._contentEditorButtons
          .appendTo(this._annotationCommentContainer)
          .css('display', 'none')
          .addClass('contenteditor-buttonrow')
          .append(
            $('<button>')
              .addClass('annotations-cancelcomment')
              .text(g.get(new h('GAnnotationPanel', 'text.cancel')))
              .on('mousedown', (e) => {
                e.preventDefault();
              })
              .on('click', (e) => {
                (e.stopPropagation(),
                  gDesigner.stats('commentdocker_cancel-btn', _interopRequireDefault),
                  AppSettings.cancelEditMode(),
                  AppSettings._onCancel());
              })
          )
          .append(
            $('<button>')
              .addClass('annotations-addcomment')
              .text(g.get(new h('GAnnotationPanel', 'text.fill-contents')))
              .on('mousedown', (e) => {
                e.preventDefault();
              })
              .on('click', (e) => {
                (e.stopPropagation(),
                  gDesigner.stats(
                    n.getProperty('text').trim().length > 0
                      ? 'commentdocker_edit-btn'
                      : 'commentdocker_add-btn',
                    _interopRequireDefault
                  ),
                  k(O.val()),
                  AppSettings.cancelEditMode());
              })
          ),
        $(t)
          .toggleClass('g-active', n.hasFlag(_.Flag.Active))
          .toggleClass(
            'g-selected',
            n.hasFlag(_.Flag.Selected) || (n instanceof m && n.getParent().hasFlag(_.Flag.Selected))
          ),
        this._relatedNodesCount > 1)
      )
        this.isCollapsible()
          ? (this._container.addClass('collapsible'),
            (this._expandIcon = $('<div></div>')
              .addClass(this._mainAnnotObject.expanded ? 'gravit-icon-down ' : 'gravit-icon-right')
              .addClass('annotation-collapse')
              .click(this._onExpandClick)),
            v.prepend(this._expandIcon))
          : this._mainAnnotObject.expanded
            ? t.show()
            : t.hide();
      else {
        const e = $('<div></div>').addClass('annotation-collapse-empty');
        v.prepend(e);
      }
      (n.hasFlag(_.Flag.Selected) || (n instanceof m && n.getParent().hasFlag(_.Flag.Selected))) &&
        (this.setCollapseState(true), this.setVisiblity(true));
      var F = $('<span>').addClass('annotation-action-group').appendTo(v);
      if (this._isCommentingEditingEnable && n.hasMixin(y)) {
        var R = n.getProperty('rsv'),
          M = false,
          N = '';
        (R
          ? ((M = true),
            (N = f
              ? g.get(new h('GAnnotationPanel', 'text.reopen'))
              : g.get(new h('GAnnotationPanel', 'text.marked-as-resolved'))))
          : ((M = false), (N = g.get(new h('GAnnotationPanel', 'text.resolve')))),
          (!R && !f) ||
            (n.getProperty('asgn') || []).length ||
            $('<span>')
              .addClass('icon ' + (R ? 'gravit-icon-resolved' : 'gravit-icon-resolve'))
              .addClass(M ? 'visible' : '')
              .addClass('annotation-action')
              .attr('data-title', N)
              .click((e) => {
                (e.stopPropagation(),
                  GCollaborators.hasAccess(E.RESOLVE_COMMENT_ANNOTATION).then((e) => {
                    e || s
                      ? this._onToggleState(n)
                      : GCollaborators.hasAccess(E.REOPEN_COMMENT_ANNOTATION).then((e) => {
                          (e || s) && this._onToggleState(n);
                        });
                  }));
              })
              .appendTo(F));
      }
      var B = $('<span>')
          .append($('<span></span>').addClass('gravit-annotation-icon-menu'))
          .addClass('annotationpanel-menubutton')
          .addClass('annotation-action'),
        U = $('<div></div>')
          .addClass('annotations-menu')
          .gOverlay({
            releaseOnClose: false,
            closeCallback: () => {
              B.removeClass('g-active');
            },
          });
      if (
        (t.data('annotmenu', U),
        n.hasMixin(y) &&
          (DataModule_883 || f) &&
          !(n.getProperty('asgn') || []).length &&
          (n.getProperty('rsv')
            ? U.append(
                $('<label>')
                  .append(
                    $('<span>').addClass('icon gravit-icon-reopen').addClass('annot-menu-icon')
                  )
                  .on('click', (e) => {
                    (e.stopPropagation(),
                      gDesigner.stats('commentdocker_option_reopen', _interopRequireDefault),
                      U.gOverlay('close'),
                      this._onReopen(n));
                  })
                  .append($('<span>').text(g.get(new h('GAnnotationPanel', 'text.reopen'))))
              )
            : U.append(
                $('<label>')
                  .append(
                    $('<span>')
                      .addClass('icon '.concat(C ? 'gravit-icon-resolved' : 'gravit-icon-resolve'))
                      .addClass('annot-menu-icon')
                  )
                  .on('click', (e) => {
                    (e.stopPropagation(),
                      gDesigner.stats('commentdocker_option_resolve', _interopRequireDefault),
                      U.gOverlay('close'),
                      this._onResolve(n));
                  })
                  .append($('<span>').text(g.get(new h('GAnnotationPanel', 'text.resolve'))))
              )),
        s &&
          ((n.hasMixin(y) && !n.getProperty('rsv')) ||
            (n instanceof m && !n.getParent().getProperty('rsv'))) &&
          n.isFillingCompleted())
      ) {
        const e = n.getProperty('text').trim().length > 0;
        this._isCommentingEditingEnable &&
          U.append(
            $('<label>')
              .append($('<span>').addClass('icon gravit-icon-edit').addClass('annot-menu-icon'))
              .on(
                'click',
                function (t) {
                  t.stopPropagation();
                  let GCollaborationMentionsUtils = e
                    ? 'commentdocker_option_edit'
                    : 'commentdocker_option_add';
                  (gDesigner.stats(''.concat(GCollaborationMentionsUtils), _interopRequireDefault),
                    AppSettings._startEditMode(
                      AppSettings._annotationCommentContainer,
                      n.getProperty('text').trim().length > 0,
                      n.getProperty('text'),
                      I.outerWidth(),
                      I.outerHeight(),
                      AppSettings._data,
                      AppSettings._additionalMentions
                    ),
                    U.gOverlay('close'));
                }.bind(I)
              )
              .append(
                $('<span>').text(
                  g.get(new h('GAnnotationPanel', e ? 'text.edit-comment' : 'text.add-comment'))
                )
              )
          );
      }
      s &&
        this._isCommentingEditingEnable &&
        U.append(
          $('<label>')
            .append($('<span>').addClass('icon gravit-icon-trash').addClass('annot-menu-icon'))
            .on('click', (e) => {
              (e.stopPropagation(),
                gDesigner.stats('commentdocker_option_delete', _interopRequireDefault),
                U.gOverlay('close'),
                this._onDelete(n));
            })
            .append($('<span>').text(g.get(new h('GAnnotationPanel', 'text.delete'))))
        );
      const j = gDesigner.getActiveDocument();
      (w &&
        j &&
        j.isShareable() &&
        U.append(
          $('<label/>')
            .append(
              $('<span/>').addClass('icon gravit-icon-copy-annot').addClass('annot-menu-icon')
            )
            .append($('<span>').text(g.get(new h('GAnnotationPanel', 'text.copy-permalink'))))
            .on('click', async (e) => {
              (e.stopPropagation(),
                gDesigner.stats('commentdocker_option_copy-permalink', _interopRequireDefault));
              const t = $('<span/>').addClass('g-loading').appendTo($(e.target).closest('label'));
              try {
                await this._onCopyPermalinkClick(this._annotation);
              } finally {
                (t.remove(), U.gOverlay('close'));
              }
            })
        ),
        (n.hasMixin(y) || n.getProperty('type') === m.Type.User) &&
          U.find('.annot-menu-icon').length &&
          B.on('click', (e) => {
            (e.stopPropagation(),
              B.addClass('g-active'),
              U.gOverlay('open', $(e.target).closest('span').closest('span')));
          }).appendTo(F));
    }

    isCollapsible() {
      return this._annotation.hasMixin(y);
    }

    setCollapseState(e) {
      if (this.isCollapsible())
        return $(this._expandIcon)
          .removeClass(e ? 'gravit-icon-right' : 'gravit-icon-down')
          .addClass(e ? 'gravit-icon-down' : 'gravit-icon-right');
    }

    isEditMode() {
      return this._annotationCommentContainer.hasClass('g-edit-mode');
    }

    _clearOwnData() {
      var e = this._container.data('annotmenu');
      e && (e.empty(), this._container.data('annotmenu', null));
    }

    cancelEditMode() {
      (this._annotationCommentContainer.removeClass('g-edit-mode'),
        this._contentEditorButtons.hide(),
        this._assigneeRow.hide(),
        this.setMentionOverlayBorderVisiblity(false));
    }

    toggleHighlight(e) {
      this._container.toggleClass('g-highlighted-row', e);
    }

    isRead() {
      return this._isRead;
    }

    isTypeResolved() {
      return this._isTypeResolved;
    }

    isTypeReopened() {
      return this._isTypeReopened;
    }

    isParentAnnotationResolved() {
      return this._isParentAnnotResolved;
    }

    setVisiblity(e) {
      e ? this._container.show() : this._container.hide();
    }

    setMentionOverlayBorderVisiblity(e) {
      e
        ? this._annotationCommentContainer.find('.mentions-input-box').css('display', 'block')
        : this._annotationCommentContainer.find('.mentions-input-box').css('display', 'none');
    }

    _updateParentAnnotResolvedStatus(e) {
      this._isParentAnnotResolved = !!e.getProperty('rsv');
    }

    _updateReadUnreadStatus(e) {
      var t = this._annotation,
        n = gDesigner.getSyncUser(),
        _interopRequireDefault = GAnnotationsUtils.default.isOwner(n, t);
      if (
        this._isParentAnnotResolved ||
        _interopRequireDefault ||
        (t.getProperty('read') || []).includes(n.getUID())
      )
        this._isRead = true;
      else {
        var GCollaborationMentionsUtils = null;
        (AppSettings.SHOW_SIDEBAR_BADGE &&
          ((GCollaborationMentionsUtils = $('<div/>')
            .addClass('new-comment')
            .append([
              $('<span/>').addClass('dot').text('·'),
              $('<span/>')
                .addClass('text-new')
                .text(g.get(new h('GAnnotationPanel', 'text.unread-comment'))),
            ])
            .appendTo(e)),
          this._container.addClass('new-element')),
          this._sidebarActive &&
            setTimeout(() => {
              let e = t.getProperty('read') || [];
              e.includes(n.getUID()) ||
                (t.setProperty('read', e.concat(n.getUID())),
                GCollaborationMentionsUtils && GCollaborationMentionsUtils.remove(),
                (this._isRead = true),
                this._container.addClass('new-element'));
            }, b));
      }
    }

    scrollIntoView() {
      this._scrollToElement(this._container);
    }

    _startEditMode(e, t, n, _interopRequireDefault, AppSettings) {
      let GCollaborationMentionsUtils =
          arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : [],
        r = arguments.length > 6 && undefined !== arguments[6] ? arguments[6] : [];
      if (!e.hasClass('g-edit-mode')) {
        var s = e.find('.annotation-comment-editor'),
          l = e.find('.contenteditor-buttonrow');
        s.val(L(n));
        var GAnnotationsUtils = this._generateCommentContentHTML(n);
        let _interopRequireDefault = GAnnotationsUtils.mentioned.map((e) => e.id),
          AppSettings = GCollaborationMentionsUtils.concat(r)
            .filter((e) => _interopRequireDefault.includes(e.id))
            .map((e) => DataModule_883.default.clone(e));
        (AppSettings &&
          AppSettings.length &&
          (AppSettings.forEach((e) => {
            const t = GAnnotationsUtils.mentioned.find((t) => t.id === e.id);
            ((e.value = t.showText), (e.showText = t.showText));
          }),
          e.find('.annotation-comment-editor').mentionsInput('setMentions', AppSettings)),
          this.setMentionOverlayBorderVisiblity(true),
          s.trigger('input'),
          s[0].setSelectionRange(s[0].textLength, s[0].textLength),
          l.show(),
          l
            .find('.annotations-addcomment')
            .text(g.get(new h('GAnnotationPanel', t ? 'text.edit-comment' : 'text.add-comment'))),
          setTimeout(() => s.focus()),
          e.addClass('g-edit-mode'));
      }
    }

    _generateCommentContentHTML(e) {
      let module = 'string' == typeof e ? e : L(e.getProperty('text'));
      if (
        ((module = module || ''),
        !gDesigner.getActiveDocument() || !gDesigner.getActiveDocument().getStorageItem())
      )
        return { html: module, mentioned: [] };
      let require = module.match(s.GRegex.String.USERNAME_RE);
      if (!(require || []).length) return { html: module, mentioned: [] };
      let _interopRequireDefault = (this._data || []).filter((e) => {
          let module = (e.getRole && e.getRole()) || e.role;
          return (
            !module.is(AppSettings.ShareRoles.Viewer) && !module.is(AppSettings.ShareRoles.NoAccess)
          );
        }),
        GCollaborationMentionsUtils = [];
      if (
        (require.forEach((e) => {
          const module = e.substring(1);
          if (!module) return;
          if (D(e)) return void GCollaborationMentionsUtils.push(e);
          const require = _interopRequireDefault.find(P(module));
          require &&
            !GCollaborationMentionsUtils.find(
              (function (e) {
                return (t) =>
                  e.getFirstName() === t.substring(1) ||
                  e.getFullUserName() === t.substring(1) ||
                  e.getEmail() === t.substring(1);
              })(require)
            ) &&
            GCollaborationMentionsUtils.push(e);
        }),
        !(GCollaborationMentionsUtils || []).length)
      )
        return { html: module, mentioned: [] };
      let r = _interopRequireDefault.filter(
        (e) =>
          GCollaborationMentionsUtils.includes('@' + e.getFirstName()) ||
          GCollaborationMentionsUtils.includes('@' + e.getFullUserName()) ||
          (e.getEmail() && GCollaborationMentionsUtils.includes('@' + e.getEmail()))
      );
      return (
        (r = r.map((e) => {
          const module = Object.assign(new GCollaborators.default(), e),
            require = '@' + module.getEmail(),
            _interopRequireDefault = '@' + module.getFirstName();
          return (
            GCollaborationMentionsUtils.includes(_interopRequireDefault)
              ? (module.showText = '@' + module.getFullUserName())
              : GCollaborationMentionsUtils.includes(require) && (module.showText = require),
            module
          );
        })),
        GCollaborationMentionsUtils.forEach((e) => {
          let require = e;
          const _interopRequireDefault = D(e);
          if (_interopRequireDefault)
            ((require = _interopRequireDefault.showText), r.push(_interopRequireDefault));
          else {
            const _interopRequireDefault = e.substring(1),
              AppSettings = r.find(P(_interopRequireDefault));
            AppSettings &&
              ((require = AppSettings.showText), module.includes(require) && (e = require));
          }
          module = module.replace(e, '<strong><span>' + require + '</span></strong>');
        }),
        { html: module, mentioned: r }
      );
    }

  }
  function G(e) {
    if (13 !== e.keyCode) return false;
    if (p.operatingSystem !== p.OperatingSystem.OSX_IOS) {
      if (!e.shiftKey) return true;
    } else {
      if (!e.altKey) return true;
      if ('keydown' === e.type) {
        let t = $(e.target).val();
        $(e.target).val(t + '\n');
      }
    }
    return false;
  };
  function P(e) {
    return (t) => t.getFirstName() === e || t.getFullUserName() === e || t.getEmail() === e;
  };
  function D(e) {
    const module = (0, r.createAdditionalMentions)();
    return Object.values(module).find((t) => t.getUID() === e);
  };
  function L(e) {
    return f.xss(e);
  };
  exports.exports = T;
}