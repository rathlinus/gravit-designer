/**
 * Webpack Module #1669
 * Type: class
 * Name: GDocumentNotificationsPanel
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */, require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  const GPanel = require(606) /* GPanel */,
    GView = require(394) /* GView */,
    GDocumentEvent = require(78) /* GDocumentEvent */,
    GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
    GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
    c = require(86);
  require(1348) /* StatusChangedEvent */;
  class d extends GPanel {
    constructor() {
      super();
    }

    _htmlElement = null;
    _isModified = false;

    _documentEvent(e) {
      if (!e.document.isLockedByVersionHistory())
        switch (e.type) {
          case GDocumentEvent.Type.Activated:
            (this._deactivate(),
              (this._document = e.document),
              gDesigner.addEventListener(
                GNetworkAvailabilityChangedEvent,
                this._networkAvailabilityChangedEvent,
                this
              ),
              this._document.addEventListener(
                GDocumentStatusEvent,
                this._handleDocumentStatusEvent,
                this
              ),
              this._update(true));
            break;
          case GDocumentEvent.Type.Deactivated:
            e.document === this._document && (this._deactivate(), this._update(true));
            break;
          case GDocumentEvent.Type.UpdateAvailable:
            this._document === e.document && this._update(false);
        }
    }

    _deactivate() {
      this._document &&
        (gDesigner.removeEventListener(
          GNetworkAvailabilityChangedEvent,
          this._networkAvailabilityChangedEvent,
          this
        ),
        this._document.removeEventListener(
          GDocumentStatusEvent,
          this._handleDocumentStatusEvent,
          this
        ),
        (this._document = null));
    }

    _handleDocumentStatusEvent(e) {
      e.status === c.Loaded && this._update(true);
    }

    _networkAvailabilityChangedEvent(e) {
      this._htmlElement.toggleClass('offline', !e.connected);
    }

    async _update() {
      let exports = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
      if (
        !this.isEnabled() ||
        !this._document ||
        this._document.isIgnoringCurrentUpdate() ||
        this._document.getStatus() === c.Loading
      )
        return void this._close(true);
      let module = !exports || (await this._document.isUpdateAvailable());
      (module ? this._showUpdatePanel() : this._close(), this.trigger(GView.UPDATE_EVENT));
    }

    _close() {
      let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
      (this._htmlElement.css('display', 'none'), exports && this.trigger(GView.UPDATE_EVENT));
    }

    _showUpdatePanel() {
      (this._htmlElement.empty().append(
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
                  .addClass('secondary')
                  .text(GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.cancel')))
                  .on('click', () => {
                    (this._document.ignoreCurrentUpdate(), this._close(true));
                  })
              )
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
                    (this._close(true), this._document.reload());
                  })
              )
          )
      ),
        this._htmlElement.css('display', ''));
    }

    init(e) {
      ((this._htmlElement = e),
        this._htmlElement.addClass('g-document-notification-panel').css('display', 'none'),
        gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this));
    }

    isEnabled() {
      return !!this._document && !this._document.isCollaborativeTextEditing();
    }

    toString() {
      return '[Object GDocumentNotificationsPanel]';
    }

    getId() {
      return d.ID;
    }

    static ID = 'document-notifications-panel';

  }
  exports.exports = d;
}