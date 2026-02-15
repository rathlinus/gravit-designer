/**
 * Webpack Module #1669
 * Type: class
 * Name: GDocumentNotificationsPanel
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */;
    const i = require(606) /* GPanel */,
      a = require(394) /* GView */,
      r = require(78) /* GDocumentEvent */,
      s = require(291) /* GNetworkAvailabilityChangedEvent */,
      l = require(217) /* GDocumentStatusEvent */,
      c = require(86) /* module_86 */;
    require(1348) /* StatusChangedEvent */;
    function d() {}
    o.GObject.inherit(d, i),
      (d.ID = "document-notifications-panel"),
      (d.prototype._htmlElement = null),
      (d.prototype._isModified = false),
      (d.prototype._documentEvent = function (e) {
        if (!e.document.isLockedByVersionHistory())
          switch (e.type) {
            case r.Type.Activated:
              this._deactivate(),
                (this._document = e.document),
                gDesigner.addEventListener(
                  s,
                  this._networkAvailabilityChangedEvent,
                  this
                ),
                this._document.addEventListener(
                  l,
                  this._handleDocumentStatusEvent,
                  this
                ),
                this._update(true);
              break;
            case r.Type.Deactivated:
              e.document === this._document &&
                (this._deactivate(), this._update(true));
              break;
            case r.Type.UpdateAvailable:
              this._document === e.document && this._update(false);
          }
      }),
      (d.prototype._deactivate = function () {
        this._document &&
          (gDesigner.removeEventListener(
            s,
            this._networkAvailabilityChangedEvent,
            this
          ),
          this._document.removeEventListener(
            l,
            this._handleDocumentStatusEvent,
            this
          ),
          (this._document = null));
      }),
      (d.prototype._handleDocumentStatusEvent = function (e) {
        e.status === c.Loaded && this._update(true);
      }),
      (d.prototype._networkAvailabilityChangedEvent = function (e) {
        this._htmlElement.toggleClass("offline", !e.connected);
      }),
      (d.prototype._update = async function () {
        let exports =
          !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
        if (
          !this.isEnabled() ||
          !this._document ||
          this._document.isIgnoringCurrentUpdate() ||
          this._document.getStatus() === c.Loading
        )
          return void this._close(true);
        let module = !exports || (await this._document.isUpdateAvailable());
        module ? this._showUpdatePanel() : this._close(),
          this.trigger(a.UPDATE_EVENT);
      }),
      (d.prototype._close = function () {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        this._htmlElement.css("display", "none"),
          exports && this.trigger(a.UPDATE_EVENT);
      }),
      (d.prototype._showUpdatePanel = function () {
        this._htmlElement.empty().append(
          $("<div/>")
            .addClass("container")
            .addClass("update-panel")
            .append(
              $("<span/>")
                .addClass("message")
                .text(
                  o.GLocale.get(
                    new o.GLocaleKey(
                      "GCollaborativeTextPanel",
                      "text.update-available-message"
                    )
                  )
                )
            )
            .append(
              $("<div/>")
                .addClass("buttons")
                .append(
                  $("<button/>")
                    .addClass("g-highlight-button")
                    .addClass("secondary")
                    .text(
                      o.GLocale.get(
                        new o.GLocaleKey("GCommonNames", "text.cancel")
                      )
                    )
                    .on("click", () => {
                      this._document.ignoreCurrentUpdate(), this._close(true);
                    })
                )
                .append(
                  $("<button/>")
                    .addClass("g-highlight-button")
                    .addClass("highlighted")
                    .addClass("online-action")
                    .text(
                      o.GLocale.get(
                        new o.GLocaleKey(
                          "GCollaborativeTextPanel",
                          "text.update-now"
                        )
                      )
                    )
                    .on("click", () => {
                      this._close(true), this._document.reload();
                    })
                )
            )
        ),
          this._htmlElement.css("display", "");
      }),
      (d.prototype.init = function (e) {
        (this._htmlElement = e),
          this._htmlElement
            .addClass("g-document-notification-panel")
            .css("display", "none"),
          gDesigner.addEventListener(r, this._documentEvent, this);
      }),
      (d.prototype.isEnabled = function () {
        return !!this._document && !this._document.isCollaborativeTextEditing();
      }),
      (d.prototype.toString = function () {
        return "[Object GDocumentNotificationsPanel]";
      }),
      (d.prototype.getId = function () {
        return d.ID;
      }),
      (exports.exports = d);
  }