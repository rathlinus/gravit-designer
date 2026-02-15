/**
 * Webpack Module #1348
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */;
    const { gApi: a } = require(10) /* AppSettings */,
      GCollaborationEvent = require(393) /* GCollaborationEvent */,
      GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
      l = require(86) /* module_86 */;
    function c(e) {
      (this._document = e),
        (this._currentLock = null),
        (this._openingInlineEditor = false),
        (this._alreadyRequestedAccess = false),
        this._document.addEventListener(
          GCollaborationEvent,
          this._collaborationEvent,
          this,
          null,
          true
        );
      const module = this._document.getEditor();
      module &&
        module.addEventListener(
          GTools.GEditor.InlineEditorEvent,
          this._inlineEditorEvent,
          this,
          null,
          true
        );
    }
    (c.StatusChangedEvent = function (e) {
      this.status = e;
    }),
      GCore.GObject.inherit(c.StatusChangedEvent, GCore.GEvent),
      (c.StatusChangedEvent.prototype.status = null),
      (c.Status = {
        Initial: 0,
        Editing: 1,
        Finished: 2,
        Previewing: 3,
        Previewed: 4,
        Sending: 5,
        UpdateAvailable: 6,
        Updating: 7,
      }),
      (c.LockUpdateEvent = function (e) {
        this.lock = e;
      }),
      GCore.GObject.inherit(c.LockUpdateEvent, GCore.GEvent),
      (c.LockUpdateEvent.prototype.lock = null),
      (c.prototype._status = c.Status.Initial),
      (c.prototype._openingInlineEditor = false),
      (c.prototype._currentLock = null),
      (c.prototype._alreadyRequestedAccess = false),
      (c.prototype.detach = function () {
        this._document.removeEventListener(GCollaborationEvent, this._collaborationEvent, this);
        const exports = this._document.getEditor();
        exports &&
          exports.removeEventListener(
            GTools.GEditor.InlineEditorEvent,
            this._inlineEditorEvent,
            this
          );
      }),
      (c.prototype.getStatus = function () {
        return this._status;
      }),
      (c.prototype.getCurrentLock = async function () {
        return (
          this._currentLock ||
            ((this._currentLock = await a.lock
              .get(this._document.getId())
              .catch(() => null)),
            this._currentLock && this._fireLockUpdateEvent()),
          this._currentLock
        );
      }),
      (c.prototype.acquireLock = async function () {
        return (await this.canLock())
          ? (this._currentLock ||
              ((this._currentLock = await a.lock
                .acquire(this._document.getId())
                .catch(() => null)),
              this._currentLock && this._fireLockUpdateEvent()),
            this._currentLock)
          : null;
      }),
      (c.prototype.releaseLock = function () {
        return a.lock.release(this._document.getId()).then(() => {
          this._currentLock = null;
        });
      }),
      (c.prototype.canLock = async function () {
        return !(await this.getCurrentLock()) || this.isLockedByMe();
      }),
      (c.prototype.isLockedByMe = function () {
        if (!this._currentLock) return false;
        const exports = gDesigner.getSyncUser();
        return this._currentLock.isLockedBy(exports);
      }),
      (c.prototype.reloadDocument = async function () {
        this._updateStatus(c.Status.Updating);
        const exports = (t) => {
          t.status !== l.Loading &&
            (this._document.removeEventListener(GDocumentStatusEvent, exports),
            this._document.unlock(),
            this.resetTextEditing());
        };
        await this.releaseLock(),
          this._document.addEventListener(GDocumentStatusEvent, exports),
          this._document.lock(),
          this._document.reload();
      }),
      (c.prototype.resetTextEditing = function () {
        this._updateStatus(c.Status.Initial);
      }),
      (c.prototype.finishTextEditing = async function () {
        this._closeInlineEditor(), this._updateStatus(c.Status.Finished);
      }),
      (c.prototype.backToTextEditing = async function () {
        this._closeInlineEditor(), this._updateStatus(c.Status.Editing);
      }),
      (c.prototype.sendChanges = async function () {
        return (
          this._closeInlineEditor(),
          this._document.lock(),
          this._updateStatus(c.Status.Sending),
          new Promise(async (e, t) => {
            this._document.storeToCloud(
              this._document.getScene(),
              async () => {
                await this.releaseLock().catch((e) => console.error(e)), e();
              },
              t,
              true,
              { collabTextUpdate: true, sendEmail: true }
            );
          })
            .then(async () => {
              await gDesigner
                .updateCollabTextPreviews()
                .catch((e) => console.error(e)),
                this.resetTextEditing();
            })
            .catch((e) => {
              throw (
                (this.finishTextEditing(),
                this._document.updateStatus(l.SaveCancelled),
                this._document.updateStatus(l.Ready),
                e)
              );
            })
            .finally(() => {
              this._document.unlock();
            })
        );
      }),
      (c.prototype.previewChanges = async function () {
        return (
          this._closeInlineEditor(),
          this._updateStatus(c.Status.Previewing),
          this._document.lock(),
          gDesigner
            .updateCollabTextPreviews()
            .then(() => {
              this._updateStatus(c.Status.Previewed);
            })
            .catch(() => {
              this.finishTextEditing();
            })
            .finally(() => {
              this._document.unlock();
            })
        );
      }),
      (c.prototype.requestAccess = async function () {
        return a.lock
          .request(this._document.getId())
          .then(() => (this._alreadyRequestedAccess = true));
      }),
      (c.prototype.hasAlreadyRequestedAccess = function () {
        return this._alreadyRequestedAccess;
      }),
      (c.prototype._updateStatus = function (e) {
        e !== this._status &&
          ((this._status = e),
          this._document.hasEventListeners(c.StatusChangedEvent) &&
            this._document.trigger(new c.StatusChangedEvent(this._status)));
      }),
      (c.prototype._closeInlineEditor = function () {
        const exports = this._document.getEditor();
        exports && (exports.closeInlineEditor(), exports.clearSelection());
      }),
      (c.prototype._inlineEditorEvent = function (e) {
        switch (e.type) {
          case GTools.GEditor.InlineEditorEvent.Type.TryOpen:
            this._tryOpenInlineEditor(e);
        }
      }),
      (c.prototype._tryOpenInlineEditor = async function (e) {
        if (
          !this._openingInlineEditor &&
          this._document.isCollaborativeTextEditing()
        )
          if (
            (e.editor.disableInlineEditingSupport(),
            e.editor instanceof GTools.GCollabTextEditor)
          ) {
            this._openingInlineEditor = true;
            try {
              gDesigner.toggleLoading(true);
              if (!(await this.acquireLock()))
                return void this._closeInlineEditor();
              e.editor.enableInlineEditingSupport();
              const t = this._document.getEditor();
              if (t) {
                const n = this._document.getActiveWindow(),
                  GTools = n && n.getView();
                GTools &&
                  t.openInlineEditor(e.editor.getElement(), GTools) &&
                  this._updateStatus(c.Status.Editing);
              }
            } finally {
              (this._openingInlineEditor = false), gDesigner.toggleLoading(false);
            }
          } else this._closeInlineEditor();
      }),
      (c.prototype._fireLockUpdateEvent = function () {
        this._document.hasEventListeners(c.LockUpdateEvent) &&
          this._document.trigger(new c.LockUpdateEvent(this._currentLock));
      }),
      (c.prototype._collaborationEvent = function (e) {
        if (e.type === GCollaborationEvent.Type.LockUpdated)
          (this._currentLock = e.data), this._fireLockUpdateEvent();
        else if (e.type === GCollaborationEvent.Type.FileUpdate) {
          if (e.data && e.data.from === gDesigner.getSyncUser().id) return;
          this._updateStatus(c.Status.UpdateAvailable);
        }
      }),
      (exports.exports = c);
  }