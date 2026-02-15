/**
 * Webpack Module #1165
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */, require(8) /* polyfill_bundle_ES6 */, require(71) /* polyfill_String_includes */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */, require(97) /* stub_requires_684 */;
    var GCore = require(1) /* GCore */;
    const GDocumentEvent = require(78) /* GDocumentEvent */,
      GCollaborationEvent = require(393) /* GCollaborationEvent */,
      r = require(433) /* module_433 */,
      GEvent_storageItem = require(336) /* GEvent_storageItem */,
      GEvent_type_868 = require(868) /* GEvent_type_868 */,
      {
        GFileReviewFlow: c,
        gApi: d,
        FileStatus: u,
        FILE_REVIEW_ENABLED: p,
        Notification: g,
        NotificationConstants: { FILE_REVIEW_FLOW: h = [] },
      } = require(10) /* AppSettings */;
    function f() {
      if (!p) return this;
      gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
        gDesigner.addEventListener(
          GEvent_storageItem.FileStatusUpdate,
          this._storageItemFileStatusEvent,
          this
        ),
        gDesigner.addEventListener(GEvent_type_868, this._handleShareEvent, this),
        gDesigner.getActiveDocument() &&
          (this._addDocumentEvents(gDesigner.getActiveDocument()),
          this._updateFromDocument(gDesigner.getActiveDocument()));
    }
    GCore.GObject.inherit(f, GCore.GEventTarget),
      (f.UpdateEvent = function () {}),
      GCore.GObject.inherit(f.UpdateEvent, GCore.GEvent),
      (f.prototype._addDocumentEvents = function (e) {
        e.addEventListener(GCollaborationEvent, this._collaborationEvent, this);
      }),
      (f.prototype._removeDocumentEvents = function (e) {
        e.removeEventListener(GCollaborationEvent, this._collaborationEvent, this);
      }),
      (f.prototype._storageItemFileStatusEvent = async function (e) {
        let { storageItem: module, newStatus: require } = e;
        this._fileId === module.getId() &&
          this._doc.isCollaborative() &&
          this._setStatus(require) &&
          this.trigger(new f.UpdateEvent());
      }),
      (f.prototype._handleShareEvent = async function (e) {
        switch (e.type) {
          case GEvent_type_868.Type.Updated:
            await this._updateCollaboratorRoleListIfInitialized(),
              this.hasEventListeners(f.UpdateEvent) &&
                this.trigger(new f.UpdateEvent());
        }
      }),
      (f.prototype._documentEvent = async function (e) {
        const module = e.document;
        switch (e.type) {
          case GDocumentEvent.Type.Activated:
            this._addDocumentEvents(module), this._updateFromDocument(module);
            break;
          case GDocumentEvent.Type.Deactivated:
            this._removeDocumentEvents(module),
              this._updateFromDocument(module),
              (this._doc = null);
            break;
          case GDocumentEvent.Type.StorageItemUpdated:
            this._updateFromDocument(module);
        }
      }),
      (f.prototype._collaborationEvent = async function (e) {
        const { type: module, sender: require } = e;
        if (require === gDesigner.getActiveDocument())
          switch (module) {
            case GCollaborationEvent.Type.ShareUpdate:
            case GCollaborationEvent.Type.UserUpdate:
              await this._updateCollaboratorRoleListIfInitialized(),
                this.hasEventListeners(f.UpdateEvent) &&
                  this.trigger(new f.UpdateEvent());
          }
      }),
      (f.prototype._updateFromDocument = async function (e) {
        if (
          (e !== this._doc &&
            ((this._flow = null),
            (this._fileId = null),
            (this._status = null),
            (this._doc = e),
            (this._collaboratorRoleList = null),
            (this._collaboratorList = null)),
          this._doc &&
            this._doc.getId() &&
            this._doc.getStorageItem() &&
            this._doc.isCollaborative())
        ) {
          this._fileId = this._doc.getId();
          const e = await this._doc
            .getStorageItem()
            .getOrCreateCollaborativeFile();
          e && this._setStatus(e.status) && this.trigger(new f.UpdateEvent());
        } else this._setStatus(null) && this.trigger(new f.UpdateEvent());
      }),
      (f.prototype._setStatus = function (e) {
        return (
          this._status !== e &&
          ((this._status = e),
          (undefined !== this._status && null !== this._status) ||
            (this._status = u.IN_REVIEW),
          undefined !== c && c.constructor && (this._flow = new c(this._status)),
          true)
        );
      }),
      (f.prototype._isCurrentUserApprover = function () {
        const exports = gDesigner.getSyncUser();
        if (!exports) return false;
        if (!this._collaboratorList) return false;
        const module = this._collaboratorList.find((t) => t.getUID() === exports.getUID());
        return module && module.getRole().is(r.ROLES.APPROVER_ROLE);
      }),
      (f.prototype._shouldStatusDisabledForApproverWithCurrentStatus =
        function (e) {
          if (this._isCurrentUserApprover())
            switch (this._status) {
              case u.IN_REVIEW:
              case u.REOPENED:
                return true;
              case u.APPROVED:
                return e === u.IN_REVIEW || e === u.AWAITING_APPROVAL;
              case u.AWAITING_APPROVAL:
                return e === u.IN_REVIEW;
            }
          return false;
        }),
      (f.prototype.getStatus = function () {
        return this._status;
      }),
      (f.prototype.updateReviewStatus = function (e) {
        return this.canUpdateToStatus(e) && this._fileId
          ? d.updateStatus(this._fileId, e)
          : Promise.reject(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFileReviewManager",
                  "text.cant-update-file-to-status"
                )
              )
            );
      }),
      (f.prototype.canUpdateToStatus = function (e) {
        return (
          !!this._flow &&
          (this._isCurrentUserApprover()
            ? !this._shouldStatusDisabledForApproverWithCurrentStatus(e)
            : this._flow.canMoveTo(e))
        );
      }),
      (f.prototype._updateCollaboratorRoleListIfInitialized =
        async function () {
          this._canUpdateCollaboratorList() &&
            this._collaboratorRoleList &&
            (await this._updateCollaboratorRoleList());
        }),
      (f.prototype._canUpdateCollaboratorList = function () {
        return this._doc && this._fileId;
      }),
      (f.prototype._updateCollaboratorRoleList = async function () {
        if (!this._canUpdateCollaboratorList()) return;
        const exports = await gDesigner
          .getShareManager()
          .getCollaboratorsCached(this._doc);
        exports &&
          ((this._collaboratorList = exports),
          (this._collaboratorRoleList = exports.map((e) => e.getRole())));
      }),
      (f.prototype.hasApprovers = async function () {
        return (
          !(!this._doc || !this._fileId) &&
          (this._collaboratorRoleList ||
            (await this._updateCollaboratorRoleList()),
          this._collaboratorRoleList.some((e) => e.is(r.ROLES.APPROVER_ROLE)))
        );
      }),
      (f.prototype.getDocumentReviewHistory = async function (e) {
        const module = await d.annotations.getDesignHistory(e).catch(() => []),
          require = [];
        for (let e = 0; e < module.length; e++) {
          const GCore = module[e],
            GDocumentEvent = g.from(GCore);
          h.includes(GDocumentEvent.getAction()) && require.push(GDocumentEvent);
        }
        return require;
      }),
      (exports.exports = f);
  }