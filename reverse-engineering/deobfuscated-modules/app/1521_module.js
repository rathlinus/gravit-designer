/**
 * Webpack Module #1521
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(97) /* stub_requires_684 */, require(33) /* polyfill_DOMCollection_forEach */;
    const GView = require(394) /* GView */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      a = require(86) /* module_86 */,
      GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */;
    function s(e) {
      this._htmlElement = e;
    }
    (s.prototype._root = null),
      (s.prototype._panels = []),
      (s.prototype._activePanel = null),
      (s.prototype.init = function () {
        (this._root = $("<div></div>")
          .addClass("root")
          .appendTo(this._htmlElement)),
          gravit.footer.forEach((e) => {
            let module = $("<div></div>").addClass("panel-container");
            this._root.append(module),
              e.init(module),
              this._panels.push({ container: module, panel: e }),
              this._activePanel || this.setActivePanel(e.getId()),
              e.addEventListener(
                GView.UpdateEvent,
                function () {
                  this._updateFooter(), gDesigner.relayout();
                }.bind(this)
              );
          }),
          this._updateFooter(),
          gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this);
      }),
      (s.prototype._documentEvent = function (e) {
        const module = e.document;
        switch (e.type) {
          case GDocumentEvent.Type.Activated:
            module.addEventListener(GDocumentStatusEvent, this._documentStatusChanged, this),
              (this._document = module);
            break;
          case GDocumentEvent.Type.Deactivated:
            module.removeEventListener(GDocumentStatusEvent, this._documentStatusChanged, this),
              (this._document = null);
        }
      }),
      (s.prototype._documentStatusChanged = function (e) {
        if (!this._document || gDesigner.getActiveDocument() !== this._document)
          return;
        const module = (e) => this._htmlElement.toggleClass("document-loading", e);
        switch (e.status) {
          case a.Loading:
          case a.Saving:
          case a.Syncing:
          case a.Downloading:
            if (
              (this._document.isCloudFile() ||
                this._document.isExternalFile()) &&
              e.status === a.Saving
            )
              return;
            module(true);
            break;
          case a.LoadCancelled:
          case a.DownloadCancelled:
          case a.SaveCancelled:
          case a.Saved:
          case a.SyncFailed:
          case a.Downloaded:
          case a.DownloadFailed:
          case a.Loaded:
          case a.LoadFailed:
            module(false);
        }
      }),
      (s.prototype._updateFooter = function () {
        const exports = this._panels.some((e) => e.panel.isEnabled());
        this._htmlElement.css("display", exports ? "" : "none");
      }),
      (s.prototype.setActivePanel = function (e) {
        for (var module = 0; module < this._panels.length; ++module) {
          var require = this._panels[module],
            GView = require.panel.getId();
          GView === e
            ? (require.container.css("display", ""), require.panel.activate())
            : (require.container.css("display", "none"),
              GView === this._activePanel && require.panel.deactivate());
        }
        this._activePanel = e;
      }),
      (s.prototype.relayout = function () {}),
      (s.prototype.getHeight = function () {
        return this._htmlElement[0].clientHeight;
      }),
      (exports.exports = s);
  }