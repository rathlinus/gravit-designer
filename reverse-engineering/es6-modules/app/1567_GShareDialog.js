/**
 * Webpack Module #1567
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(30) /* polyfill_Object_assign */,
    require(8) /* polyfill_bundle_ES6 */,
    require(196) /* polyfill_Promise_finally */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(71) /* polyfill_String_includes */,
    require(34) /* polyfill_String_replace */,
    require(91) /* polyfill_String_trim */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(38) /* stub_requires_680 */,
    require(26) /* polyfill_DOMCollection_iterator */,
    require(125) /* stub_requires_673 */,
    require(126) /* polyfill_URL_toJSON */,
    require(114)) /* stub_requires_424 */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15); /* GEditor */
  const {
      FileExtended: a,
      gApi: r,
      trunkURL: s,
      betaURL: l,
      ltsURL: c,
      rcURL: d,
      prodURL: u,
      DateAPI: p,
      ShareRoles: g,
      Share: h,
      REMOVE_GUEST_USER_WHEN_ROLE_IS_NO_ACCESS: f,
      ENABLE_GUEST_ACCESS: m,
      defaultUserSettings: {
        share: {
          defaults: { private: { pro: y = true } = {} } = {},
          quotas: { free: { private: v = 0 } = {} } = {},
        } = {},
      } = {},
    } = require(10) /* AppSettings */,
    { IS_TRUNK: _, IS_BETA: b, IS_RC: w, IS_LTS: C } = require(231) /* DataModule_231 */,
    { sleep: x } = require(40) /* CollaborationMergeUtils */,
    GUserModel = require(177) /* GUserModel */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GContainer = require(85) /* GContainer */,
    T = require(388) /* Item */,
    G = require(433) /* module_433 */,
    barrel_panels = require(257) /* barrel_panels */,
    DataModule_436 = require(436) /* DataModule_436 */,
    GEvent_storageItem = require(336); /* GEvent_storageItem */
  class I {
    constructor(e, t, n) {
      ((this._user = e),
        (this._sharedFile = new a()),
        (this._initialSharedFile = null),
        (this._statistics = null),
        (this._storageItem = t),
        (this._closeCallback = n));
    }
    _initialize() {
      if (!this._isInitialized)
        return (
          this._initLayout(),
          this._toggleLoading(true),
          this._loadShare()
            .then(() => this._loadShareInit())
            .then(() => this._updateProperties())
            .then(() => {
              this._isInitialized = true;
            })
            .catch((e) => this._handleException(e))
            .finally(() => this._toggleLoading(false))
        );
    }
    async _loadShareInit() {
      if (!this._sharedFile.getPublicShare()) {
        const t = G.ROLES.DEFAULT_PUBLIC_ROLE;
        if (t) {
          const n = new h().assignRole(t);
          return this._storageItem.supportsExternalSharing()
            ? this._storageItem
                .requestExternalShare(null, n)
                .then(() => exports.call(this, n))
                .catch((e) => this._handleException(e))
            : exports.call(this, n);
        }
      }
      function exports(e) {
        return r
          .createShare(this._storageItem.getId(), e)
          .then(
            () => (
              gDesigner.hasEventListeners(GEvent_storageItem) &&
                gDesigner.trigger(
                  new GEvent_storageItem(GEvent_storageItem.Type.ShareCreated, this._storageItem)
                ),
              this._loadShare()
            )
          );
      }
    }
    _initLayout() {
      ((this._infoSection = $('<div/>')
        .addClass('share-info-section')
        .css('display', 'none')
        .append($('<span/>').addClass('gravit-icon-info'))
        .append(
          $('<span/>').text(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GShareDialog', 'text.participants-will-be-invited')
            )
          )
        )),
        (this._dialog = $('<div/>')
          .append(
            $('<div/>')
              .addClass('header')
              .append(
                $('<span/>')
                  .addClass('title')
                  .text(GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.title')))
              )
          )
          .append(
            $('<div/>')
              .addClass('share-link')
              .append(
                $('<div/>')
                  .addClass('share-input')
                  .append($('<input>').attr('type', 'text').attr('readonly', true))
                  .append(
                    $('<div/>')
                      .addClass('share-copied')
                      .append(
                        $('<span/>').text(
                          GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.copied'))
                        )
                      )
                  )
              )
              .append(
                $('<div/>')
                  .addClass('share-copy')
                  .addClass('g-highlight-button')
                  .addClass('highlighted')
                  .append(
                    $('<span/>').addClass('icon').addClass(barrel_panels['gravit-icon-share-copy'])
                  )
                  .append(
                    $('<span/>').text(
                      GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.copy'))
                    )
                  )
                  .on('click', async (e) => {
                    const module = $(e.target).closest('.share-link'),
                      require = module.find('input').val();
                    if (require && require.trim().length)
                      return (
                        gDesigner.stats('sharedialog_click_copy'),
                        gContainer
                          .copyToClipboard(require.trim())
                          .then(async () => {
                            const e = module.find('.share-copied');
                            (e.addClass('visible'), await x(2e3), e.removeClass('visible'));
                          })
                          .catch((e) => {
                            GSystemDialog.alert(
                              (e && e.message) ||
                                GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    'GShareDialog',
                                    'text.failed-copying-to-clipboard'
                                  )
                                )
                            );
                          })
                      );
                  })
              )
              .append(this._buildNativeShareButton())
          )
          .append(this._buildShareByLink())
          .append(this._buildShareByUser())
          .append(this._infoSection)
          .gDialog({
            releaseOnClose: true,
            className: 'g-share-dialog',
            closeCallback: () => {
              (this._sendInvitationEmails(), this._closeCallback && this._closeCallback());
            },
          })),
        $('<div/>')
          .addClass('g-btn-close')
          .append($('<span />').addClass('gravit-icon-close'))
          .on('click', () => this.close())
          .appendTo($(this._dialog).parent()));
    }
    _buildNativeShareButton() {
      if (!gContainer.isNativeShareLinkSupported()) return null;
      const exports = $('<div/>')
        .addClass('share-native')
        .addClass('g-highlight-button')
        .addClass('highlighted')
        .append($('<span/>').addClass('icon').addClass('gravit-icon-share-link-native'));
      return (
        exports.on('click', (e) => {
          gDesigner.stats('sharedialog_click_native-sharing');
          const module = this._dialog.find('.share-link').find('input').val();
          if (module && module.trim().length) {
            const e = this._user.getFullUserName(),
              n = this._sharedFile.name,
              GEditor = GCore.GLocale.get(
                new GCore.GLocaleKey('GShareDialog', 'text.native-link-share-title')
              ).replace('%filename', n),
              a = GCore.GLocale.get(
                new GCore.GLocaleKey('GShareDialog', 'text.native-link-share-description')
              ).replace('%username', e);
            gContainer.nativeShareLink(GEditor, a, module).catch((e) => console.error(e));
          }
        }),
        exports
      );
    }
    _getRole(e) {
      return G.makeFromShare(e);
    }
    _loadShare() {
      if (!this._storageItem.hasMixin(DataModule_436))
        throw (console.log('Storage item not supported'), 'Storage not supported');
      return this._storageItem
        .getOrCreateCollaborativeFile()
        .then((e) => {
          ((this._sharedFile = e),
            this._initialSharedFile || (this._initialSharedFile = this._sharedFile.clone()));
        })
        .then(async () => {
          this._statistics = await r.getSharingStatistics();
        });
    }
    _setSelectedPrivateShare(e) {
      if (
        (this._dialog
          .find('.share-by-user > .share-settings > .share-setting.g-selected')
          .removeClass('g-selected'),
        e)
      ) {
        const t = this._dialog
          .find('.share-by-user > .share-settings > .share-setting[user_id="'.concat(e, '"]'))
          .addClass('g-selected')[0];
        t && t.scrollIntoView({ behavior: 'smooth' });
      }
    }
    _handleException(e) {
      (console.error(e.stack ? e.stack : e),
        GSystemDialog.alert(r.formatError(e)),
        this._toggleLoading(false));
    }
    _getPrivateAndInvitedShareList() {
      const exports = this._sharedFile
          .getPrivateShareList()
          .filter((e) => !e.owner || e.id !== this._user.getUID()),
        module =
          (this._sharedFile.getInvitedShareList && this._sharedFile.getInvitedShareList()) || [];
      return exports.concat(module);
    }
    _getShareListLayout(e) {
      return GCore.GUtil.bubbleSort(e, (e, t) => {
        let { created: require } = e,
          { created: GCore } = t;
        return p.gt(require, GCore, false) ? 1 : p.lt(require, GCore, false) ? -1 : 0;
      }).map((e) => {
        const module = new GUserModel(e),
          require = module.getUID(),
          GEditor = module.getEmail(),
          { guest: a = false } = e,
          s = this._getRole(e),
          l = this._canResendInvitationEmail(e)
            ? [
                {
                  icon: 'gravit-icon-resend-invitation-email',
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey('GShareDialog', 'text.resend-invitation-email')
                  ),
                  click: () => {
                    (gDesigner.stats('sharedialog_private-share_resend'),
                      this._toggleLoading(true),
                      r.share
                        .sendInvitationEmails(this._storageItem.getId(), [GEditor])
                        .then(() => {
                          GSystemDialog.alert(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey('GShareDialog', 'text.resent-invitation-email')
                            ).replace('%email', GEditor)
                          );
                        })
                        .catch((e) => this._handleException(e))
                        .finally(() => this._toggleLoading(false)));
                  },
                },
              ]
            : [],
          c = this._createShareSetting({
            label: GEditor,
            icon: this._getAvatar(module),
            defaultRole: G.ROLES.DEFAULT_PRIVATE_ROLE,
            removeCallback: () => {
              this._unshareWithUser({ id: require, email: GEditor, role: s });
            },
            buttons: l,
          })
            .attr('user_id', require)
            .on('click', () => {
              this._setSelectedPrivateShare(require);
            });
        return (
          c
            .find('.g-role-selector')
            .gRoleSelector('role', s)
            .on('rolechange', (t) => {
              const r = $(t.target).closest('.g-role-selector').gRoleSelector('role');
              r
                ? f && a && r.is(g.NoAccess)
                  ? this._unshareWithUser({ id: require, email: GEditor, role: r })
                  : this._shareWithUser(
                      { id: require, email: GEditor, role: r },
                      e.assignRole(r)
                    ).catch(() => {
                      $(t.target).closest('.g-role-selector').gRoleSelector('restoreRole');
                    })
                : GSystemDialog.alert(
                    GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.role-required'))
                  );
            }),
          c
        );
      });
    }
    _updateProperties() {
      if (this._sharedFile.getPublicShare()) {
        const e = this._getRole(this._sharedFile.getPublicShare());
        this._dialog.find('.share-by-link .g-role-selector').gRoleSelector('role', e);
      }
      this._infoSection.css('display', this._hasNewInvitationEmails() ? '' : 'none');
      const exports = this._getPrivateAndInvitedShareList(),
        module = gDesigner.getLicense();
      if (0 === module.getPrivateShareQuota())
        this._dialog
          .find('.share-by-user')
          .addClass('g-disabled')
          .on('click', (e) => {
            $(e.target).hasClass('share-by-user') && gDesigner.handlePROFeatureInterruption();
          });
      else if (module.getPrivateShareQuota() > 0) {
        const n = this._statistics ? this._statistics.getPrivateShareQuota() : 0,
          GEditor = module.getPrivateShareQuota() - n;
        this._dialog
          .find('.share-by-user .subtitle')
          .css('display', '')
          .text(
            GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.projects-left')).replace(
              '%number',
              GEditor
            )
          );
        const a = GEditor <= 0 && !(exports && exports.length);
        this._dialog.find('.share-by-user .add-button').prop('disabled', a);
      } else
        (this._dialog.find('.share-by-user .subtitle').css('display', 'none'),
          this._dialog.find('.share-by-user .add-button').prop('disabled', false));
      (this._dialog.find('.share-by-user > .share-settings').empty(),
        exports &&
          exports.length &&
          this._dialog
            .find('.share-by-user > .share-settings')
            .append(this._getShareListLayout(exports)));
      let require = '';
      const GEditor = new URL(this._getOrigin()),
        a = GEditor.searchParams;
      (this._sharedFile.getPublicShare()
        ? a.set('token', this._sharedFile.getPublicShare().token)
        : a.set('d', this._storageItem.getId()),
        (require = GEditor.toString()),
        this._dialog.find('.share-link > .share-input > input').val(require));
    }
    _getOrigin() {
      return gContainer.getRuntime() === GContainer.Runtime.Browser ||
        gContainer.getRuntime() === GContainer.Runtime.PWA
        ? location.origin
        : _
          ? s
          : b
            ? l
            : w
              ? d
              : C
                ? c
                : u;
    }
    _buildShareByLink() {
      const exports = this._createShareSetting({
          icon: $('<span/>').addClass('gravit-icon-public-share-link').addClass('icon'),
          label: GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.public-share-link')),
          defaultRole: G.ROLES.DEFAULT_PUBLIC_ROLE,
        }),
        module = exports.find('.g-role-selector');
      return (
        exports.find('.g-role-selector').on('rolechange', () => {
          const require = module.gRoleSelector('role');
          if (!require)
            return void GSystemDialog.alert(
              GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.role-required'))
            );
          gDesigner.stats('sharedialog_public-share_role', require.name);
          const GEditor = this._sharedFile.getPublicShare();
          if (GEditor)
            return (
              this._toggleLoading(true),
              this._storageItem.supportsExternalSharingByLink()
                ? this._storageItem
                    .updateDomainShare(require)
                    .then(() => {
                      a.call(this);
                    })
                    .catch((t) => {
                      (GSystemDialog.alert(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GShareDialog', 'text.error-change-role-failed')
                        )
                      ),
                        exports.find('.g-role-selector').gRoleSelector('restoreRole'),
                        this._toggleLoading(false),
                        console.error('updateDomainShare error: ', t));
                    })
                : a.call(this)
            );
          function a() {
            r.updateShare(GEditor.token, GEditor.assignRole(require))
              .then(() => this._loadShare())
              .then(() => this._updateProperties())
              .catch((e) => this._handleException(e))
              .finally(() => this._toggleLoading(false));
          }
        }),
        $('<div/>')
          .addClass('share-settings-section')
          .append(
            $('<div/>')
              .addClass('share-settings-container')
              .addClass('share-by-link')
              .append($('<div/>').addClass('share-settings').append(exports))
          )
      );
    }
    _buildShareByUser() {
      const exports = $('<input/>')
          .addClass('private-share-email-input')
          .attr(
            'placeholder',
            GCore.GLocale.get(
              new GCore.GLocaleKey('GShareDialog', 'text.private-share-placeholder')
            )
          )
          .attr('type', 'email')
          .on('keypress', (e) => {
            const module = e.which || e.charCode || e.keyCode;
            if (GEditor.GKey.translateKey(module) === GEditor.GKey.Constant.ENTER)
              return (
                e.preventDefault(),
                e.stopPropagation(),
                $(e.target).closest('.share-by-user').find('.add-button').trigger('click'),
                false
              );
          }),
        module = $('<div/>').gRoleSelector({
          defaultRole: G.ROLES.DEFAULT_PRIVATE_ROLE,
        });
      return (
        module.on('rolechange', () => {
          const exports = module.gRoleSelector('role');
          gDesigner.stats('sharedialog_private-share_role', exports.name);
        }),
        $('<div/>')
          .addClass('share-settings-section')
          .append(
            $('<div/>')
              .addClass('share-settings-container')
              .addClass('share-by-user')
              .append(
                $('<div/>')
                  .addClass('share-settings-header')
                  .append(
                    $('<div/>')
                      .addClass('share-settings-header-caption')
                      .append(
                        $('<span/>')
                          .addClass('title')
                          .text(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey('GShareDialog', 'text.private-sharing')
                            )
                          )
                          .gPro({
                            pro: y || -1 !== v,
                            badgeAlwaysVisible: true,
                          })
                      )
                      .append($('<span/>').addClass('subtitle'))
                  )
                  .append(
                    $('<div/>')
                      .addClass('share-settings-header-input')
                      .append($('<div/>').addClass('input-section').append(exports).append(module))
                      .append(
                        $('<button/>')
                          .addClass('add-button')
                          .addClass('g-highlight-button highlighted')
                          .text(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey('GShareDialog', 'text.private-sharing-add')
                            )
                          )
                          .on('click', (n) => {
                            const GCore = (exports.val() || '').trim(),
                              GEditor = module.gRoleSelector('role');
                            this._tryPrivateShareWithUser(GCore, GEditor, n);
                          })
                      )
                  )
              )
              .append($('<div/>').addClass('share-settings'))
          )
      );
    }
    async _tryPrivateShareWithUser(e, t, n) {
      if ((gDesigner.stats('sharedialog_private-share_add'), !e))
        return void GSystemDialog.alert(
          GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.empty-email'))
        );
      if (!t)
        return void GSystemDialog.alert(
          GCore.GLocale.get(new GCore.GLocaleKey('GShareDialog', 'text.role-required'))
        );
      this._toggleLoading(true);
      try {
        if (
          this._storageItem instanceof T.Item &&
          !(await this._storageItem.isEmailFromCorporateDomain(e))
        )
          return (
            this._handleException(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GShareDialog',
                  'text.you-can-not-invite-user-from-another-domain'
                )
              )
            ),
            void this._toggleLoading(false)
          );
      } catch (e) {}
      const GEditor = (e) => {
        this._toggleLoading(true);
        const n = new h().assignRole(t),
          GCore = this._dialog.find('.share-settings-header-input'),
          GEditor = GCore.find('.g-role-selector'),
          a = GCore.find('.private-share-email-input');
        this._shareWithUser(e, n, false)
          .then((e) => {
            e ? a.val(null) : gDesigner.stats('sharedialog_invalid-email');
          })
          .catch(() => {
            GEditor.gRoleSelector('restoreRole');
          })
          .finally(() => {
            this._toggleLoading(false);
          });
      };
      try {
        let t = await r
          .listUsers({ q: e, all: true })
          .then((e) => e.filter((e) => e.id !== this._user.getUID()).map((e) => new GUserModel(e)));
        const a = t && t.length > 0;
        let s = true;
        if (a) {
          this._storageItem instanceof T.Item &&
            this._storageItem.getCloudClient().isCorporate() &&
            (t = t.filter(
              (e) =>
                e.corporate_provider &&
                e.corporate_provider ===
                  this._storageItem.getCloudClient().getCorporateProviderName()
            ));
          const e = (this._sharedFile.getPrivateShareList() || [])
            .filter((e) => e.role !== g.Owner.id)
            .map((e) => e.id);
          e &&
            e.length &&
            ((t = t.filter((t) => {
              let { id: n } = t;
              return !e.includes(n);
            })),
            (s = false));
        }
        if (t && t.length > 0)
          if ((this._toggleLoading(false), t.length > 1)) {
            const GCore = $(n.target).closest('.share-settings-header-input');
            this._pickUser(e, t, GCore)
              .then((t) => {
                t && GEditor(Object.assign(t, { email: e }));
              })
              .catch(this._handleException);
          } else GEditor(Object.assign(t[0], { email: e }));
        else
          s
            ? GEditor({ id: e, email: e })
            : this._handleException(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GShareDialog', 'text.private-share-no-options-left')
                ).replace('%email', e)
              );
      } catch (e) {
        this._handleException(e);
      }
    }
    _createShareSetting(e) {
      let {
        icon: module,
        label: require,
        defaultRole: GCore,
        removeCallback: GEditor,
        buttons: a,
      } = e;
      return $('<div/>')
        .addClass('share-setting')
        .append(module || '')
        .append($('<span/>').addClass('label').text(require))
        .append($('<div/>').gRoleSelector({ defaultRole: GCore, buttons: a }))
        .append(GEditor ? $('<div/>').addClass('gravit-icon-x-delete').on('click', GEditor) : '');
    }
    _getAvatar(e) {
      const module = e.getUserColor(),
        { avatar: require } = e,
        GCore = $('<div/>').addClass('avatar');
      return (
        this._shouldShowAvatar(e)
          ? this._isSVGAvatar(require)
            ? $(require).appendTo(GCore)
            : GCore.css({ backgroundImage: 'url("'.concat(require, '")') })
          : ((e.getFirstName() && !e.guest) || (e.name = e.getFullUserName()),
            GCore.css('border-color', module)
              .css('background-color', module)
              .append($('<span/>').text(e.getUserNameInitials()))),
        GCore
      );
    }
    _getAvatarForPicker(e) {
      const module = e.getUserColor(),
        { avatar: require } = e,
        GCore = $('<div/>')
          .append(
            $('<div/>')
              .addClass('g-user-selector-avatar')
              .css('border-color', module)
              .css('background-color', module)
              .append($('<span/>').text(e.getUserNameInitials()))
          )
          .addClass('g-user-selector-all-avatar');
      return (
        this._shouldShowAvatar(e) &&
          (this._isSVGAvatar(require)
            ? $(require).appendTo(GCore)
            : GCore.append(
                $('<div/>')
                  .addClass('avatar')
                  .append(
                    $('<div/>')
                      .addClass('gravatar-avatar')
                      .css({ backgroundImage: 'url("'.concat(require, '")') })
                  )
              )),
        GCore
      );
    }
    _isSVGAvatar(e) {
      return '<svg>' === e.substr(0, '<svg>'.length);
    }
    _shouldShowAvatar(e) {
      return !!e.hasOwnPictureAvatar() || !(!e.avatar || -1 === e.avatar.indexOf('static/assets'));
    }
    _isSameUser(e, t) {
      let require = Object.assign({}, e),
        GCore = Object.assign({}, t);
      return (
        require.id || (require.id = require.email),
        GCore.id || (GCore.id = GCore.email),
        e.id === t.id ||
          e.id === t.email ||
          e.id === t.login ||
          e.email === t.email ||
          e.login === t.email
      );
    }
    _shareWithUser(e, t) {
      let require,
        GEditor,
        a = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
      if ('object' != typeof e || !e.email) throw Error('Invalid args');
      (({ email: GEditor, id: require } = e), require || (require = GEditor));
      const r = this._user;
      return require === r.id || require === r.email || require === r.login
        ? (GSystemDialog.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GShareDialog', 'text.you-can-not-invite-yourself')
            )
          ),
          Promise.reject())
        : (this._toggleLoading(true),
          this._storageItem instanceof T.Item
            ? this._storageItem
                .isEmailFromCorporateDomain(GEditor)
                .then((e) => {
                  if (e) return this._prepareShare(GEditor, t, require, a);
                  throw GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      'GShareDialog',
                      'text.you-can-not-invite-user-from-another-domain'
                    )
                  );
                })
                .catch((e) => {
                  throw (this._handleException(e), e);
                })
            : this._prepareShare(GEditor, t, require, a));
    }
    _prepareShare(e, t, n, GCore) {
      return this._storageItem.supportsExternalSharing()
        ? this._storageItem
            .requestExternalShare(e, t)
            .then(() => this._processShare(e, t, n, GCore))
            .catch((e) => {
              throw (this._handleException(e), e);
            })
        : this._processShare(e, t, n, GCore);
    }
    _processShare(e, t, n, GEditor) {
      const a = GEditor ? t : Object.assign(t, { sendEmail: GEditor, validated: true }),
        s = this._storageItem.toString();
      let l = false;
      return (
        this._storageItem instanceof T.Item &&
          (l = this._storageItem.getCloudClient().isCorporate()),
        s.indexOf('GCloudStorage') >= 0
          ? gDesigner.stats('sharedialog_private-share_cloud')
          : s.indexOf('GGoogleDriveStorage') >= 0
            ? gDesigner.stats(
                'sharedialog_private-share_'.concat(l ? 'corporate-' : '', 'googledrive')
              )
            : s.indexOf('GSharePointStorage') >= 0 &&
              gDesigner.stats(
                'sharedialog_private-share_'.concat(l ? 'corporate-' : '', 'sharepoint')
              ),
        r
          .shareWithUser(this._storageItem.getId(), n, a)
          .then(
            async (e) => (
              await this._loadShare(),
              this._updateProperties(),
              this._setSelectedPrivateShare(e.user_id),
              e
            )
          )
          .catch((t) => {
            if (t.status)
              switch (t.status) {
                case r.HTTP_STATUS_CODES.CONFLICT:
                  return void GSystemDialog.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GShareDialog', 'text.you-can-not-invite-yourself')
                    )
                  );
                case r.HTTP_STATUS_CODES.NOT_FOUND:
                  return void GSystemDialog.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GShareDialog', 'text.invalid-email')
                    ).replace('%email', e)
                  );
                case r.HTTP_STATUS_CODES.FORBIDDEN:
                  return void ('only same domain users allowed' === t.message
                    ? GSystemDialog.alert(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            'GShareDialog',
                            'text.you-can-not-invite-user-from-another-domain'
                          )
                        )
                      )
                    : GSystemDialog.alert(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GCommonNames', 'error.http.forbidden')
                        )
                      ));
              }
            this._handleException(t);
          })
          .finally(() => this._toggleLoading(false))
      );
    }
    _unshareWithUser(e) {
      const { email: module, role: require } = e,
        { id: GCore = module } = e;
      return (
        this._toggleLoading(true),
        this._storageItem.supportsExternalSharing()
          ? this._storageItem
              .requestExternalUnShare(module, require)
              .then(() => GEditor.call(this))
              .catch((e) => {
                this._handleException(e);
              })
          : GEditor.call(this)
      );
      function GEditor() {
        return r
          .unshareWithUser(this._storageItem.getId(), GCore)
          .then(() => this._setSelectedPrivateShare(null))
          .then(() => this._loadShare())
          .then(() => this._updateProperties())
          .catch((e) => this._handleException(e))
          .finally(() => this._toggleLoading(false));
      }
    }
    _toggleLoading(e) {
      ((this._isLoading = !!e),
        ($(this._dialog).data('gdialog').closable = !e),
        this._dialog.toggleClass('g-loading', !!e));
    }
    async open() {
      (await this._initialize(), this._dialog.gDialog('open', true));
    }
    close() {
      this._isLoading || this._dialog.gDialog('close');
    }
    _canResendInvitationEmail(e) {
      const module = G.makeFromShare(e);
      if (module && !module.is(g.NoAccess)) {
        return (
          (this._initialSharedFile &&
            this._initialSharedFile
              .getPrivateShareList()
              .map((e) => e.id)
              .concat(this._initialSharedFile.getInvitedShareList().map((e) => e.id))) ||
          []
        ).includes(e.id);
      }
      return false;
    }
    _hasNewInvitationEmails() {
      return this._getNewAddedShareEmails().length > 0;
    }
    async _sendInvitationEmails() {
      const exports = this._getNewAddedShareEmails();
      if (exports && exports.length > 0)
        return m ? this._sendGuestInvitation(exports) : this._sendUserInvitation(exports);
    }
    _sendUserInvitation(e) {
      return (
        gDesigner.stats('sharedialog_private-share_invite'),
        r.share.sendInvitationEmails(this._storageItem.getId(), e).then(() => {
          this._showSentInvitationEmailAlert(e);
        })
      );
    }
    _sendGuestInvitation(e) {
      let module = [],
        require = e.slice();
      return Promise.all(
        require.map((e) =>
          r.signupGuestUser({ email: e, file_id: this._storageItem.getId() }).catch(() => {
            module.push(e);
          })
        )
      )
        .then(() => {
          if (module.length)
            return r.share.sendInvitationEmails(this._storageItem.getId(), module).catch(() => {});
        })
        .then(() => {
          this._showSentInvitationEmailAlert(e);
        });
    }
    _showSentInvitationEmailAlert(e) {
      GSystemDialog.alert(
        GCore.GLocale.get(
          new GCore.GLocaleKey('GShareDialog', 'text.sent-invitation-email')
        ).replace('%emails', e.join(', ')),
        null,
        { className: 'g-sent-invitation-email-dialog' }
      );
    }
    _pickUser(e, t, n) {
      return new Promise((GCore) => {
        let GEditor;
        const a = $('<div/>')
          .addClass('g-user-selector')
          .append(
            $('<div/>')
              .addClass('g-user-selector-container')
              .append(
                t.map((t) =>
                  $('<div/>')
                    .addClass('g-user-selector-content')
                    .append(this._getAvatarForPicker(t))
                    .append(
                      $('<div/>')
                        .addClass('g-user-selector-info')
                        .append($('<span/>').text(t.getFullUserName()))
                        .append($('<span/>').text(e))
                    )
                    .on('click', () => {
                      ((GEditor = t), a.gOverlay('close'));
                    })
                )
              )
          )
          .gOverlay({
            clazz: 'g-share-dialog-user-selector',
            releaseOnClose: true,
            padding: false,
            closeCallback: () => GCore(GEditor),
          })
          .gOverlay('open', n);
      });
    }
    _getNewAddedShareEmails() {
      const exports =
          (this._initialSharedFile &&
            this._initialSharedFile.getPrivateShareList().map((e) => e.id)) ||
          [],
        module =
          (this._initialSharedFile &&
            this._initialSharedFile.getInvitedShareList().map((e) => e.email)) ||
          [];
      return this._sharedFile
        .getPrivateShareList()
        .filter((t) => !exports.includes(t.id))
        .filter((e) => !module.includes(e.email))
        .map((e) => e.email)
        .concat(
          this._sharedFile
            .getInvitedShareList()
            .filter((e) => !module.includes(e.email))
            .map((e) => e.email)
        );
    }
  }
  ((I.prototype._isInitialized = false),
    (I.prototype._sharedFile = null),
    (I.prototype._isLoading = false),
    (exports.exports = I));
}
