/**
 * Webpack Module #1322
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(34) /* polyfill_String_replace */,
      require(4) /* stub_requires_668 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(97) /* stub_requires_684 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(125) /* stub_requires_673 */,
      require(126) /* polyfill_URL_toJSON */,
      require(114) /* stub_requires_424 */;
    var GCore = require(1) /* module */,
      GOfflineDialog = _interopRequireDefault(require(256) /* GOfflineDialog */),
      r = _interopRequireDefault(require(355) /* module_355 */),
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */;
    const GSystemDialog = require(44) /* GSystemDialog */,
      c = require(292) /* module_292 */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
      p = require(220) /* Item */,
      GCollaborationEvent = require(393) /* GCollaborationEvent */,
      h = require(1323) /* module_1323 */,
      f = require(86) /* module_86 */,
      {
        DESIGNER: m,
        SHARE_ENGINE: y,
        HAS_ANNOTATIONS: v,
        gApi: _,
        ShareRoles: b,
        SharePermissions: w,
        Share: C,
        LEGACY_SHARE_DIALOG: x,
        ENABLE_REQUEST_ACCESS: S,
      } = require(10) /* AppSettings */,
      E = require(433) /* module_433 */,
      A = require(1324) /* module_1324 */,
      T = require(177) /* module_177 */,
      G = require(1565) /* module_1565 */,
      P = require(868) /* module_868 */,
      D = require(536) /* module_536 */,
      L = require(237) /* Item */,
      I = require(x ? 1566 : 1567);
    function k() {
      y &&
        (gDesigner.addEventListener(c, this._userEvent, this),
        gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this)),
        (this._states = new Map()),
        (this._isDefaulNotificationAlreadyShown = new Map());
    }
    (k.prototype._states = null),
      (k.prototype._requestAccessDialog = null),
      (k.prototype._requestPermissionDialog = null),
      (k.prototype._requestEmailHasBeenSent = false),
      (k.prototype._collaboratorsCached = {}),
      (k.prototype.share = function (e, t) {
        const require = this,
          _interopRequireDefault = e instanceof L.Item,
          GCore = async function () {
            let GCore = null;
            if (_interopRequireDefault) GCore = e;
            else {
              const t = e || gDesigner.getActiveDocument();
              GCore = t && t.getStorageItem();
            }
            GCore.supportsExternalSharing() &&
              (await require._syncExternalPermissions(GCore)),
              require._openShareDialog(await gDesigner.getUser(), GCore, t);
          };
        gDesigner.isOffline()
          ? GOfflineDialog.default.openUnavailableFeature(GCore)
          : this.isShareProRestricted()
          ? gDesigner.handlePROFeatureInterruption()
          : GCore();
      }),
      (k.prototype._openShareDialog = async function (e, t, n) {
        const _interopRequireDefault = new I(e, t, n);
        await _interopRequireDefault.open();
      }),
      (k.prototype._documentEvent = async function (e) {
        const module = e.document;
        if (!module || !module.isLockedByVersionHistory())
          switch (e.type) {
            case GDocumentEvent.Type.Activated:
              (await this._checkAccessAndUpdateState(module)) &&
                (this._showDefaultNotification(module),
                module.removeEventListener(GCollaborationEvent, this._collaborationEvent, this),
                module.addEventListener(GCollaborationEvent, this._collaborationEvent, this));
              break;
            case GDocumentEvent.Type.Deactivated:
              module.removeEventListener(GCollaborationEvent, this._collaborationEvent, this);
              break;
            case GDocumentEvent.Type.Removed:
              module.getId() && delete this._collaboratorsCached[module.getId()],
                this._states.delete(module);
              break;
            case GDocumentEvent.Type.StorageItemUpdated: {
              module.isShareable() && module.lock();
              const e = async (n) => {
                if (n.status !== f.Loading)
                  try {
                    module.removeEventListener(GDocumentStatusEvent, e),
                      (await this._checkAccessAndUpdateState(module)) &&
                        this._showDefaultNotification(module);
                  } finally {
                    module.unlock();
                  }
              };
              module.addEventListener(GDocumentStatusEvent, e);
              break;
            }
          }
      }),
      (k.prototype.isPermissionRequestEnabled = function () {
        return S && !gDesigner.getLicense().isGuest();
      }),
      (k.prototype.getRole = function (e) {
        e = e || gDesigner.getActiveDocument();
        const { role: module } = this._getState(e);
        return module || E.ROLES.NO_ACCESS_ROLE;
      }),
      (k.prototype._collaborationEvent = async function (e) {
        const { sender: module, type: require } = e;
        if (module === gDesigner.getActiveDocument())
          switch (require) {
            case GCollaborationEvent.Type.ShareUpdate:
              this.resetCollaboratorsCached(module),
                this._getState(module).sharing || (await this._updateState(module));
              const e = this.getRole(module);
              if (await this._checkAccessAndUpdateState(module)) {
                const n = this.getRole(module);
                e.equals(n) ||
                  (module.getStatus() !== f.Loading &&
                    this._showRoleNotification(module));
              }
              break;
            case GCollaborationEvent.Type.UserUpdate:
              this._updateRealtimeCollaborators(module);
          }
      }),
      (k.prototype._userEvent = async function () {
        const exports = gDesigner.getActiveDocument();
        exports && (await this._updateState(exports), this._showDefaultNotification(exports));
      }),
      (k.prototype._showRoleNotification = function (e) {
        if (!e) return;
        const module = this.getRole(e);
        if (!module) return;
        const require = GCore.GLocale.get(
          new GCore.GLocaleKey(
            "GShareManager",
            "text.new-role-is-".concat(module.getId())
          )
        );
        require &&
          gDesigner.addNotification({
            document: e,
            message: require,
            anonymous: gDesigner.isAnonymous(),
            popup: true,
          });
      }),
      (k.prototype._showDefaultNotification = async function (e) {
        if (!e) return;
        if (
          (undefined === this._isDefaulNotificationAlreadyShown.get(e.sessionId) &&
            this._isDefaulNotificationAlreadyShown.set(e.sessionId, false),
          this._isDefaulNotificationAlreadyShown.get(e.sessionId))
        )
          return;
        const module = e.isDocumentFromTemplate() && e.isShared();
        let require;
        if (module) require = { name: m.TITLE };
        else {
          const t = await gDesigner.getUser(),
            _interopRequireDefault = await this._getFileExtended(e);
          if (t && _interopRequireDefault) {
            _interopRequireDefault.getPrivateShareList().some((e) => {
              if (e.owner && e.id !== t.getUID())
                return (require = { name: e.name || e.email, id: e.id }), true;
            });
            const e = new URL(location.href).searchParams.get("token");
            if (e) {
              const GCore = _interopRequireDefault.getPublicShare();
              if (GCore && GCore.token === e) {
                const e = GCore.shared_by;
                e && e.id && e.id !== t.getUID() && (require = e);
              }
            }
          }
        }
        if (require) {
          e.setOwner(require);
          const _interopRequireDefault = [];
          if (module)
            _interopRequireDefault.push(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GShareManager", "text.template-shared-by")
              ).replace("%name", require.name)
            );
          else if (
            (_interopRequireDefault.push(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GShareManager", "text.shared-by")
              ).replace("%name", require.name)
            ),
            !x)
          ) {
            const t = this.getRole(e);
            t && t.getStatus() && _interopRequireDefault.push(t.getStatus());
          }
          if (x) {
            const t = this._getState(e);
            t.copy || t.inspect
              ? (t.copy ||
                  _interopRequireDefault.push(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GShareManager", "text.save-warning")
                    )
                  ),
                t.inspect ||
                  _interopRequireDefault.push(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GShareManager", "text.inspect-warning")
                    )
                  ))
              : _interopRequireDefault.push(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GShareManager", "text.combined-warnings")
                  )
                );
          }
          _interopRequireDefault.length &&
            gDesigner.addNotification({
              document: e,
              message: _interopRequireDefault.join(" "),
              anonymous: gDesigner.isAnonymous(),
              popup: true,
              closeCallback: () => {
                this._isDefaulNotificationAlreadyShown.set(e.sessionId, true);
              },
            });
        }
      }),
      (k.prototype._canAccess = async function (e) {
        return !!(await this._getFileExtended(e).catch(() => false));
      }),
      (k.prototype.getRealtimeCollaborators = async function (e) {
        return _.realtime
          .getCollaborators(e.id, { anonymous: false })
          .then((t) =>
            t.map((t) => {
              const require = ((t) => {
                const require = e.getPrivateShare(t.access_id);
                if (require) return E.makeFromShare(require);
                const _interopRequireDefault = e.getPublicShare();
                return _interopRequireDefault ? E.makeFromShare(_interopRequireDefault) : E.makeFromShareRole(b.NoAccess);
              })(t);
              return new A(Object.assign(t, { role: require }));
            })
          )
          .catch(() => []);
      }),
      (k.prototype._getFileExtended = function (e) {
        return gDesigner
          .getCloudCommunicationManager()
          .getFileExtendedCached(e);
      }),
      (k.prototype._getCollaborators = async function (e) {
        const module = await this._getFileExtended(e);
        if (!module) return null;
        let require = [];
        return (
          (require = require.concat(await this._getFileCollaboratorsAsUsers(module))),
          (require = require.concat(this._getInvitedCollaboratorsAsUsers(module))),
          require
        );
      }),
      (k.prototype._getInvitedCollaboratorsAsUsers = function (e) {
        return e.getInvitedShareList().map((e) => {
          const module = E.makeFromShare(e),
            require = new T({ id: e.email });
          return require.setRole(module), require;
        });
      }),
      (k.prototype._getFileCollaboratorsAsUsers = function (e) {
        return gDesigner
          .getCloudCommunicationManager()
          .getCollaborators(e.id)
          .then((t) =>
            t.map((t) => {
              const require = new T(t),
                _interopRequireDefault = ((t) => {
                  const require = e.getPrivateShare(t.getUID());
                  if (require) return E.makeFromShare(require);
                  const _interopRequireDefault = e.getPublicShare();
                  return _interopRequireDefault
                    ? E.makeFromShare(_interopRequireDefault)
                    : E.makeFromShareRole(b.NoAccess);
                })(require);
              return require.setRole(_interopRequireDefault), require;
            })
          )
          .catch(() => []);
      }),
      (k.prototype.resetCollaboratorsCached = function (e) {
        if ((e = e || gDesigner.getActiveDocument()) && e.getId()) {
          const t = this._collaboratorsCached[e.getId()];
          t && t.reset();
        }
      }),
      (k.prototype.getCollaboratorsCached = async function (e) {
        return (e = e || gDesigner.getActiveDocument()) && e.getId()
          ? (this._collaboratorsCached[e.getId()] ||
              (this._collaboratorsCached[e.getId()] = new D(() =>
                this._getCollaborators(e)
              )),
            this._collaboratorsCached[e.getId()].get())
          : [];
      }),
      (k.prototype.getPrivateInvitedShareList = async function (e) {
        const module = await this._getFileExtended(e);
        return this._getPrivateInvitedShareListForFile(module);
      }),
      (k.prototype.getRoleNameByUserId = async function (e) {
        const module = gDesigner.getActiveDocument();
        if (!module.isCloudFile() && !module.isExternalFile())
          return E.ROLES.OWNER_ROLE.getName();
        const require = await this.getCollaboratorById(e);
        return ((require && require.getRole()) || E.ROLES.NO_ACCESS_ROLE).getName();
      }),
      (k.prototype.getCollaboratorById = async function (e) {
        let module = null;
        const require = await this.getCollaboratorsCached();
        return require && (module = require.find((t) => t.getUID() === e)), module;
      }),
      (k.prototype._getPrivateInvitedShareListForFile = function (e) {
        if (!e) return null;
        const module = e.getPrivateShareList(),
          require = (e.getInvitedShareList && e.getInvitedShareList()) || [];
        return module.concat(require);
      }),
      (k.prototype.updateStateForDocument = function (e) {
        this._updateState(e);
      }),
      (k.prototype._updateState = async function (e) {
        const module = this._createDefaultShareStateForDoc(e),
          require = e && e.getStorageItem(),
          _interopRequireDefault = await gDesigner.getUser();
        if (!_interopRequireDefault) return this._setState(e, module);
        if (e && e.isDocumentFromTemplate() && e.isShared())
          this._applyStateFromTemplate(module);
        else if (require instanceof p.Item) {
          const n = await this._getFileExtended(e);
          n && (await this._applyStateFromFile(_interopRequireDefault, n, module));
        } else if (
          require &&
          require.getId() &&
          require.supportsSharing() &&
          require.supportsShadowFile()
        ) {
          const n = await this._getFileExtended(e);
          n && ((module.share = true), await this._applyStateFromFile(_interopRequireDefault, n, module));
        } else await this._getFileExtended(e);
        this._setState(e, module),
          gDesigner.hasEventListeners(P) &&
            gDesigner.trigger(new P(P.Type.Updated));
      }),
      (k.prototype._createDefaultShareStateForDoc = function (e) {
        return new G(
          Object.assign({}, this._getState(e), {
            owner: true,
            share: false,
            sharing: false,
            role: E.ROLES.OWNER_ROLE,
            isPrivate: true,
          })
        );
      }),
      (k.prototype._applyStateFromTemplate = function (e) {
        return Object.assign(e, {
          edit: true,
          inspect: true,
          copy: true,
          comment: false,
          share: false,
          owner: false,
          sharing: false,
          realtimeCollaborators: [],
        });
      }),
      (k.prototype._applyStateFromFile = async function (e, t, n) {
        if (!t) throw new r.default("File object is required");
        const _interopRequireDefault = (0, CollaborationMergeUtils.getFileStateAndRole)(e, t, n);
        let GCore = _interopRequireDefault.role;
        const { state: GOfflineDialog } = _interopRequireDefault;
        if (!GCore) {
          const e = t.getPublicShare();
          if (e) {
            const { copy: t, inspect: n, comment: _interopRequireDefault, edit: r } = e;
            (GCore = E.makeFromShare(e)),
              Object.assign(GOfflineDialog, {
                owner: false,
                edit: r,
                copy: t,
                inspect: n,
                comment: !!v && _interopRequireDefault,
              });
          }
        }
        GOfflineDialog.role = GCore || E.ROLES.NO_ACCESS_ROLE;
        const GSystemDialog = await this.getRealtimeCollaborators(t);
        Object.assign(GOfflineDialog, { realtimeCollaborators: GSystemDialog });
      }),
      (k.prototype._updateRealtimeCollaborators = async function (e) {
        const module = await this._getFileExtended(e);
        if (module) {
          const n = await this.getRealtimeCollaborators(module);
          this._setState(
            e,
            new G(
              Object.assign({}, this._getState(e), { realtimeCollaborators: n })
            )
          );
        }
      }),
      (k.prototype._setState = function (e, t) {
        this._states.set(e, t),
          gDesigner.hasEventListeners(h) && gDesigner.trigger(new h(e, t));
      }),
      (k.prototype._getState = function (e) {
        return this._states.get(e) || new G();
      }),
      (k.prototype._checkAccessAndUpdateState = async function (e) {
        if (!(await this._requestAccessIfAbsent(e))) return false;
        this._closeRequestAccessDialog();
        const module = this.getRole(e);
        await this._updateState(e);
        const require = this.getRole(e);
        return (
          (module && module.equals(require)) || this._requestPermissionToCommentIfAbsent(e),
          (await this._isUserUnableToOperateSystem(e)) &&
            this._openRequestAccessDialog(e),
          true
        );
      }),
      (k.prototype._isUserUnableToOperateSystem = async function (e) {
        if (!e.getId()) return false;
        var t = await this._getShareLevelForCurrentUser(e);
        return !!(gDesigner.getLicense().isGuest() && t < 1);
      }),
      (k.prototype._getShareLevelForCurrentUser = async function (e) {
        const module = await gDesigner.getUser(),
          require = await this._getFileExtended(e);
        if (module && require) {
          var _interopRequireDefault = require.getPrivateShareList().find((e) => {
            if (e.id === module.getUID()) return true;
          });
          if (_interopRequireDefault) return _interopRequireDefault.getRole().level;
          const e = require.getPublicShare();
          return e ? e.getRole().level : new E.makeFromShareRole(b.NoAccess);
        }
        return new E.makeFromShareRole(b.NoAccess).level;
      }),
      (k.prototype._requestAccessIfAbsent = async function (e) {
        return (
          !e.isShareable() ||
          !!(await this._canAccess(e)) ||
          (this._openRequestAccessDialog(e), false)
        );
      }),
      (k.prototype._requestPermissionToCommentIfAbsent = function (e) {
        if (!e.isShareable()) return;
        if (!e.getFocusAnnotationId()) return;
        const module = this.getRole(e);
        (module && module.is(b.Owner)) ||
          module.hasPermission(w.COMMENT) ||
          this._requestPermissionToComment(e);
      }),
      (k.prototype._requestPermissionToComment = function (e) {
        if (this._requestPermissionDialog) return;
        const module = this.getRole(e);
        module &&
          !module.is(b.NoAccess) &&
          (this._requestPermissionDialog = this._createRequestDialog(e, {
            className: "g-request-permission-dialog",
            openCallback: () => {
              gDesigner.stats("permission-dialog_comment-access_open");
            },
            closeCallback: () => {
              this._requestPermissionDialog = null;
            },
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GShareManager",
                "text.file-can-not-be-commented-title"
              )
            ).replace("%role", module.getName()),
            subtitle: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GShareManager",
                "text.file-can-not-be-commented-info"
              )
            ),
            requestButton: {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GShareManager",
                  "text.file-request-permission-to-comment"
                )
              ),
              permissions: { comment: true },
            },
            statType: "comment-access",
          }));
      }),
      (k.prototype._openRequestAccessDialog = function (e) {
        this._requestAccessDialog ||
          (this._requestAccessDialog = this._createRequestDialog(e, {
            className: "g-request-access-dialog",
            openCallback: () => {
              gDesigner.stats("permission-dialog_no-access_open");
            },
            closeCallback: async () => {
              (this._requestAccessDialog = null),
                (await this._canAccess(e)) ||
                  (gDesigner.removeDocument(e, null, true),
                  this._requestEmailHasBeenSent &&
                    (GSystemDialog.alert(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GShareManager",
                          "text.sent-request-email"
                        )
                      )
                    ),
                    (this._requestEmailHasBeenSent = false)));
            },
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GShareManager",
                "text.file-can-not-be-accessed-title"
              )
            ),
            subtitle: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GShareManager",
                "text.file-can-not-be-accessed-info"
              )
            ),
            requestButton: {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GShareManager", "text.file-request-access")
              ),
              permissions: { access: true },
            },
            statType: "no-access",
          }));
      }),
      (k.prototype._closeRequestAccessDialog = function () {
        this._requestAccessDialog &&
          (this._requestAccessDialog.gDialog("close"),
          (this._requestAccessDialog = null));
      }),
      (k.prototype._createRequestDialog = function (e) {
        let {
          className: module = "",
          title: require,
          subtitle: _interopRequireDefault,
          closeCallback: GOfflineDialog,
          requestButton: { label: r, permissions: CollaborationMergeUtils = {} } = {},
          statType: c,
        } = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        var GDocumentEvent = [];
        return (
          this.isPermissionRequestEnabled() &&
            GDocumentEvent.push({
              label: r,
              onclick: (t) => {
                gDesigner.stats(
                  "permission-dialog_".concat(c, "_request-access")
                );
                const require = Object.assign(CollaborationMergeUtils, { isToken: !e.getId() });
                _.requestPermission(
                  e.getId() || e.getFailedDocumentIdOrToken(),
                  require
                )
                  .then(() => {
                    t.gDialog("close"), (this._requestEmailHasBeenSent = true);
                  })
                  .catch(() => {
                    GSystemDialog.error(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GShareManager",
                          "text.cannot-request-access"
                        )
                      )
                    );
                  });
              },
            }),
          GDocumentEvent.push({
            label: GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")),
            onclick: async (t) => {
              gDesigner.stats("permission-dialog_".concat(c, "_click-ok")),
                t.gDialog("close"),
                (await this._isUserUnableToOperateSystem(e)) &&
                  gDesigner.signout(true);
            },
            highlighted: true,
          }),
          GSystemDialog.custom({
            icon: "error",
            closeable: false,
            className: module,
            closeCallback: GOfflineDialog,
            title: require,
            subtitle: _interopRequireDefault,
            buttons: GDocumentEvent,
          })
        );
      }),
      (k.prototype._syncExternalPermissions = async function (e) {
        const module = await e.getPermissionsList(),
          require = await async function t() {
            return gDesigner
              .getCloudCommunicationManager()
              .getExternalFile(e.getId())
              .catch((n) => {
                if (n && 404 === n.status && e.supportsShadowFile())
                  return e.createShadowFile().then(() => t.call(this));
                throw n;
              });
          }.call(this),
          _interopRequireDefault = this._getPrivateInvitedShareListForFile(require),
          GCore = await gDesigner.getUser();
        return function () {
          const require = [],
            GOfflineDialog = [],
            r = [];
          module.forEach((t) => {
            let { email: GCore, role: GOfflineDialog, externalRole: r } = t;
            if (GCore) {
              let t = false;
              _interopRequireDefault.some((n) => {
                let { email: _interopRequireDefault, role: GOfflineDialog } = n;
                if (GCore && GCore === _interopRequireDefault && e.rolesMatch(r, GOfflineDialog)) return (t = true), t;
              }),
                t || require.push({ email: GCore, role: GOfflineDialog });
            }
          }),
            _interopRequireDefault.forEach((e) => {
              let require = false;
              module.some((t) => {
                let { email: _interopRequireDefault } = t;
                if (e.email === _interopRequireDefault) return (require = true), require;
              }),
                require ||
                  E.makeFromShare(e).is(b.NoAccess) ||
                  GOfflineDialog.push({ email: e.email });
            }),
            require.length &&
              r.concat(
                require.map(async (t) => {
                  let { email: require, role: _interopRequireDefault } = t;
                  if (GCore.getEmail() === require) return null;
                  const GOfflineDialog = Object.values(b).find((e) => {
                      let { id: t } = e;
                      return t === _interopRequireDefault;
                    }),
                    r = _interopRequireDefault && GOfflineDialog ? GOfflineDialog : b.NoAccess,
                    CollaborationMergeUtils = new C().assignRole(r);
                  try {
                    return await _.shareWithUser(e.getId(), require, CollaborationMergeUtils);
                  } catch (e) {
                    return null;
                  }
                })
              );
          GOfflineDialog.length &&
            r.concat(
              GOfflineDialog.map(async (t) => {
                let { email: require } = t;
                return _.shareWithUser(
                  e.getId(),
                  require,
                  new C().assignRole(b.NoAccess)
                );
              })
            );
          return Promise.all(r);
        }.call(this);
      }),
      (k.prototype.getPermalink = async function (e, t) {
        const require = await this._getFileExtended(e);
        if (require) {
          const e = gDesigner.getAppBaseUrl(true),
            _interopRequireDefault = new URL(require.getShareLink(e));
          return _interopRequireDefault.searchParams.set("annot", t.getId()), _interopRequireDefault.toString();
        }
        return null;
      }),
      (k.prototype.isShareProRestricted = function () {
        return C.isPro() && !gDesigner.isEnabledProFeatures();
      }),
      (exports.exports = k);
  }