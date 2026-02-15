/**
 * Webpack Module #1571
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(10) /* AppSettings */;
    const {
        ANNOTATION_EVENT: i,
        SHARE_EVENT: a,
        USER_EVENT: r,
        REVIEW_STATUS_CHANGED: s,
        LOCK_REQUEST_EVENT: l,
        LOCK_UPDATE_EVENT: c,
        FILE_UPDATE_EVENT: d,
        FILE_AUTO_SAVE_EVENT: u,
      } = o.gApi.COLLABORATION_EVENTS,
      p = require(393) /* GCollaborationEvent */,
      g = require(78) /* GDocumentEvent */;
    function h() {
      (this._documents = new Map()),
        gDesigner.addEventListener(g, this._documentEvent, this);
    }
    (h.prototype._documents = null),
      (h.prototype._documentEvent = function (e) {
        const module = e.document;
        switch (e.type) {
          case g.Type.Added:
          case g.Type.Activated:
          case g.Type.StorageItemUpdated:
            ((!module.isLockedByVersionHistory() && module.isCloudFile()) ||
              (module.getId() &&
                module.getStorageItem() &&
                module.getStorageItem().supportsShadowFile())) &&
              this.attachDocument(module);
            break;
          case g.Type.Removed:
            this.detachDocument(module);
        }
      }),
      (h.prototype.attachDocument = function (e) {
        if (!o.ENABLE_COLLABORATION) return;
        if (this._documents.has(e)) return;
        const module = new o.gApi.WebSocketClient();
        module.setToken(e.getToken()),
          module.connect("/v2/realtime/" + e.getId()),
          o.ENABLE_COLLABORATION &&
            (module.on(i, (t) => {
              this._trigger(e, p.Type.AnnotationsUpdate, t.data);
            }),
            module.on(r, (t) => {
              this._trigger(e, p.Type.UserUpdate, t.data);
            }),
            module.on(s, (t) => {
              this._trigger(e, p.Type.ReviewStatusChanged, t.data);
            }),
            module.on(l, (t) => {
              this._trigger(e, p.Type.LockRequest, t.data);
            }),
            module.on(c, (t) => {
              const require = t.data && t.data.lock ? new o.Lock(t.data.lock) : null;
              this._trigger(e, p.Type.LockUpdated, require);
            }),
            module.on(d, (t) => {
              this._trigger(e, p.Type.FileUpdate, t.data);
            })),
          o.SHARE_ENGINE &&
            module.on(a, (t) => {
              this._trigger(e, p.Type.ShareUpdate, t.data);
            }),
          o.AUTO_SAVE_ENABLED &&
            module.on(u, (t) => {
              this._trigger(e, p.Type.FileAutoSave, t.data);
            }),
          this._documents.set(e, { doc: e, ws: module });
      }),
      (h.prototype.detachDocument = function (e) {
        const module = this._documents.get(e);
        module && (module.ws.close(), this._documents.delete(e));
      }),
      (h.prototype._trigger = function (e, t, n) {
        const o = new p(t, n);
        e.hasEventListeners(o) && e.trigger(o);
      }),
      (exports.exports = h);
  }