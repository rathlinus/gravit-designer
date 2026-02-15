/**
 * Webpack Module #1668
 * Type: class
 * Name: GCollaborativeTextPanel
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(196) /* polyfill_Promise_finally */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34)) /* polyfill_String_replace */;
  var GCore = require(1);
  const GPanel = require(606) /* GPanel */,
    GView = require(394) /* GView */,
    GEvent_document = require(392) /* GEvent_document */,
    GCollaborationEvent = require(393) /* GCollaborationEvent */,
    GDocumentEvent = require(78) /* GDocumentEvent */,
    GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
    GUnloadEvent = require(1346) /* GUnloadEvent */,
    u = require(1348) /* StatusChangedEvent */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GUserModel = require(177) /* GUserModel */,
    { DateAPI: h, ShareRoles: f } = require(10);
  class m extends GPanel {
    constructor() {
      super();
    }

    _htmlElement = null;
    _requestLockDialog = null;
    _lastRequestLockTime = 0;
    _isModified = false;

    _applicationStateChangedEvent(e) {
      e.document === this._document && this._update();
    }

    _documentEvent(e) {
      if (!e.document.isLockedByVersionHistory())
        switch (e.type) {
          case GDocumentEvent.Type.Activated:
            (this._deactivate(),
              (this._document = e.document),
              this._document.addEventListener(u.StatusChangedEvent, this._update, this),
              this._document.addEventListener(u.LockUpdateEvent, this._update, this),
              this._document.addEventListener(GCollaborationEvent, this._collaborationEvent, this),
              gDesigner.addEventListener(
                GNetworkAvailabilityChangedEvent,
                this._networkAvailabilityChangedEvent,
                this
              ),
              this._update());
            break;
          case GDocumentEvent.Type.Deactivated:
            e.document === this._document &&
              (this._deactivate(), this._htmlElement.css('display', 'none'));
            break;
          case GDocumentEvent.Type.Modified:
            if (!this.isEnabled()) return;
            if (e.document === this._document && this._document.isCollaborativeTextEditing()) {
              const e = this._document.isModified();
              this._isModified !== e && ((this._isModified = e), this._update());
            }
        }
    }

    _deactivate() {
      this._document &&
        (this._document.removeEventListener(u.StatusChangedEvent, this._update, this),
        this._document.removeEventListener(u.LockUpdateEvent, this._update, this),
        this._document.removeEventListener(GCollaborationEvent, this._collaborationEvent, this),
        gDesigner.removeEventListener(
          GNetworkAvailabilityChangedEvent,
          this._networkAvailabilityChangedEvent,
          this
        ));
    }

    _collaborationEvent(e) {
      e.type === GCollaborationEvent.Type.LockRequest &&
        this._requestLock(e.data.from && e.data.from.name);
    }

    _networkAvailabilityChangedEvent(e) {
      this._htmlElement.toggleClass('offline', !e.connected);
    }

    async _update() {
      if ((this._htmlElement.css('display', this.isEnabled() ? '' : 'none'), this.isEnabled())) {
        const e = this._document.getCollaborativeTextController();
        if (e)
          if (e.getStatus() === u.Status.UpdateAvailable)
            (this._document.lock(), this._showUpdatePanel());
          else if (e.getStatus() === u.Status.Updating) this._showUpdatingPanel();
          else if (gDesigner.getApplicationManager().hasRole(f.Owner)) this._showOwnerPanel();
          else if (await e.canLock())
            switch (e.getStatus()) {
              case u.Status.Initial:
              case u.Status.Editing:
                this._showEditPanel();
                break;
              case u.Status.Finished:
              case u.Status.Previewed:
                this._showFinishedPanel();
                break;
              case u.Status.Previewing:
                this._showPreviewPanel();
                break;
              case u.Status.Sending:
                this._showSendingPanel();
            }
          else this._showRequestPanel();
      }
      this.trigger(GView.UPDATE_EVENT);
    }

    _showOwnerPanel() {
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('owner-panel')
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.owner-message')
                )
              )
          )
      );
    }

    _showUpdatePanel() {
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('update-panel')
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.update-available-message')
                )
              )
          )
          .append(
            $('<div/>')
              .addClass('buttons')
              .append(
                $('<button/>')
                  .addClass('g-highlight-button')
                  .addClass('highlighted')
                  .addClass('online-action')
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.update-now')
                    )
                  )
                  .on('click', () => {
                    (gDesigner.stats('collabtextpanel_bottom-bar_file-update'),
                      this._document.getCollaborativeTextController().reloadDocument());
                  })
              )
          )
      );
    }

    _showUpdatingPanel() {
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('updating-panel')
          .append($('<div>').addClass('g-loading'))
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.updating'))
              )
          )
      );
    }

    _showEditPanel() {
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('edit-panel')
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.finish-editing-message')
                )
              )
          )
          .append(
            $('<button/>')
              .addClass('g-highlight-button')
              .addClass('highlighted')
              .addClass('online-action')
              .prop('disabled', !this._document.isModified())
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.finish-editing')
                )
              )
              .on('click', () => {
                (gDesigner.stats('collabtextpanel_bottom-bar_finish-editing'),
                  this._document.getCollaborativeTextController().finishTextEditing());
              })
          )
      );
    }

    _showFinishedPanel() {
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('finish-panel')
          .append(
            $('<button/>')
              .prop(
                'disabled',
                this._document.getCollaborativeTextController().getStatus() === u.Status.Previewed
              )
              .addClass('g-highlight-button')
              .addClass('outlined')
              .addClass('online-action')
              .append($('<span/>').addClass('icon').addClass('gravit-icon-co-text-editing-display'))
              .append(
                $('<span/>').text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.preview-changes')
                  )
                )
              )
              .on('click', () => {
                (gDesigner.stats('collabtextpanel_bottom-bar_preview-changes'),
                  this._document.getCollaborativeTextController().previewChanges());
              })
          )
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.send-changes-message')
                )
              )
          )
          .append(
            $('<div/>')
              .addClass('buttons')
              .append(
                $('<button/>')
                  .addClass('g-highlight-button')
                  .addClass('secondary')
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.back-to-editing')
                    )
                  )
                  .on('click', () => {
                    (gDesigner.stats('collabtextpanel_bottom-bar_back-to-editing'),
                      this._document.getCollaborativeTextController().backToTextEditing());
                  })
              )
              .append(
                $('<button/>')
                  .addClass('g-highlight-button')
                  .addClass('highlighted')
                  .addClass('online-action')
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.send-changes')
                    )
                  )
                  .on('click', () => {
                    (gDesigner.stats('collabtextpanel_bottom-bar_send-changes'),
                      GSystemDialog.confirm(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.send-to-owner')
                        ),
                        (e) => {
                          e &&
                            this._document
                              .getCollaborativeTextController()
                              .sendChanges()
                              .then(() => {
                                GSystemDialog.alert(
                                  GCore.GLocale.get(
                                    new GCore.GLocaleKey(
                                      'GCollaborativeTextPanel',
                                      'text.your-changes-were-applied'
                                    )
                                  )
                                );
                              })
                              .catch(() => {
                                GSystemDialog.alert(
                                  GCore.GLocale.get(
                                    new GCore.GLocaleKey(
                                      'GCollaborativeTextPanel',
                                      'text.send-changes-failed'
                                    )
                                  )
                                );
                              });
                        }
                      ));
                  })
              )
          )
      );
    }

    _showPreviewPanel() {
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('preview-panel')
          .append($('<div>').addClass('g-loading'))
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.rendering-preview')
                )
              )
          )
      );
    }

    _showSendingPanel() {
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('sending-panel')
          .append($('<div>').addClass('g-loading'))
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.sending-changes')
                )
              )
          )
      );
    }

    async _showRequestPanel() {
      const exports = await this._document.getCollaborativeTextController().getCurrentLock();
      if (!exports) return this._document.getCollaborativeTextController().resetTextEditing();
      const module = new GUserModel(exports.user);
      this._htmlElement.empty().append(
        $('<div/>')
          .addClass('container')
          .addClass('request-access-panel')
          .append(
            $('<span/>')
              .addClass('message')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.request-access-message')
                ).replace('%name', module.getFullUserName())
              )
          )
          .append(
            $('<button/>')
              .addClass('g-highlight-button')
              .addClass('highlighted')
              .addClass('online-action')
              .prop(
                'disabled',
                this._document.getCollaborativeTextController().hasAlreadyRequestedAccess()
              )
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.request-access')
                )
              )
              .on('click', (e) => {
                (gDesigner.stats('collabtextpanel_bottom-bar_request-access'),
                  gDesigner.toggleLoading(true),
                  this._document
                    .getCollaborativeTextController()
                    .requestAccess()
                    .then(() => {
                      ($(e.target).closest('button').attr('disabled', true),
                        GSystemDialog.alert(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              'GCollaborativeTextPanel',
                              'text.request-has-been-sent'
                            )
                          ).replace('%name', module.getFullUserName())
                        ));
                    })
                    .catch((e) => {
                      e.status &&
                        e.status !== gApi.HTTP_STATUS_CODES.NOT_FOUND &&
                        GSystemDialog.error(e);
                    })
                    .finally(() => {
                      (this._update(), gDesigner.toggleLoading(false));
                    }));
              })
          )
      );
    }

    _requestLock(e) {
      if (!this.isEnabled()) return;
      if (this._requestLockDialog) return;
      const module = h.now(),
        require = h.minutesToMilliseconds(5);
      (this._lastRequestLockTime && module - this._lastRequestLockTime < require) ||
        ((this._lastRequestLockTime = module),
        (this._requestLockDialog = GSystemDialog.custom({
          className: 'g-request-lock-dialog',
          closeCallback: () => (this._requestLockDialog = null),
          closeable: false,
          subtitle: GCore.GLocale.get(
            new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.wants-to-take-over')
          ).replace(
            /%name/g,
            e || GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.unknown-user'))
          ),
          buttons: [
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.save-my-edits-and-allow')
              ),
              onclick: (e) => {
                (e.gDialog('close'),
                  this._document
                    .getCollaborativeTextController()
                    .sendChanges()
                    .catch(() => {
                      GSystemDialog.alert(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            'GCollaborativeTextPanel',
                            'text.send-changes-failed'
                          )
                        )
                      );
                    }));
              },
            },
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.discard-my-edits-and-allow')
              ),
              onclick: (e) => {
                (e.addClass('g-loading'),
                  this._document
                    .getCollaborativeTextController()
                    .releaseLock()
                    .catch((e) => {
                      GSystemDialog.error(e);
                    })
                    .finally(() => {
                      e.gDialog('close');
                    }));
              },
            },
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey('GCollaborativeTextPanel', 'text.decline')
              ),
              highlighted: true,
              onclick: (e) => {
                e.gDialog('close');
              },
            },
          ],
        })));
    }

    init(e) {
      ((this._htmlElement = e),
        this._htmlElement.addClass('g-collaborative-text-panel').css('display', 'none'),
        gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
        gDesigner.addEventListener(GUnloadEvent, this._unloadEvent, this),
        gDesigner.addEventListener(GEvent_document, this._applicationStateChangedEvent, this));
    }

    _unloadEvent(e) {
      if (this._document)
        try {
          gApi.lock.releaseSync(this._document.getId());
        } catch (e) {}
    }

    isEnabled() {
      return !!this._document && this._document.isCollaborativeTextEditing();
    }

    toString() {
      return '[Object GCollaborativeTextPanel]';
    }

    getId() {
      return m.ID;
    }

    static ID = 'collaborative-text-panel';

  }
  exports.exports = m;
}