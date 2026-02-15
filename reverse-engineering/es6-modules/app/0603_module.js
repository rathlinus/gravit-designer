/**
 * Webpack Module #603
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GDocumentWindow = require(1503) /* GDocumentWindow */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GSaveAction = require(447) /* GSaveAction */,
    s = require(86);
  class l extends GCore.GEventTarget {
    constructor(e) {
      super();
      ((this._htmlElement = e), (this._windows = []));
    }

    _htmlElement = null;
    _windows = null;
    _activeWindow = null;
    _viewOffset = null;

    getWindows() {
      return this._windows;
    }

    getActiveWindow() {
      return this._activeWindow;
    }

    activateWindow(e, t) {
      if (e !== this._activeWindow) {
        (this._activeWindow &&
          (this._activeWindow.deactivate(), this._activeWindow._container.detach()),
          null === e
            ? gDesigner.activateDocument(null, true)
            : ((e && this._activeWindow && e.getDocument() !== this._activeWindow.getDocument()) ||
                !this._activeWindow) &&
              gDesigner.activateDocument(e.getDocument(), true));
        var require = this._activeWindow;
        ((this._activeWindow = e),
          require &&
            this.hasEventListeners(l.WindowEvent) &&
            this.trigger(new l.WindowEvent(l.WindowEvent.Type.Deactivated, require)),
          e &&
            ((e.getDocument()._activeWindow = e),
            this._htmlElement.append(e._container),
            this._relayoutWindow(e, t),
            this._activeWindow.activate(t),
            this.hasEventListeners(l.WindowEvent) &&
              this.trigger(new l.WindowEvent(l.WindowEvent.Type.Activated, e))));
      }
    }

    addWindow(e, t, n) {
      var GCore = e instanceof GDocumentWindow ? e.getDocument() : e,
        GSystemDialog = this._addWindow(GCore, t, n);
      if (e instanceof GDocumentWindow) {
        var GSaveAction = e.getView();
        GSystemDialog.getView() &&
          GSystemDialog.getView().transform(
            GSaveAction.getScrollX(),
            GSaveAction.getScrollY(),
            GSaveAction.getZoom()
          );
      }
      return GSystemDialog;
    }

    removeWindow(e, t, n, GDocumentWindow) {
      var c = e.getDocument(),
        d = function (n) {
          if (!n || n.documentStatus !== s.SaveCancelled) {
            if (e === this._activeWindow) {
              var GCore = this._windows.indexOf(e);
              GCore > 0
                ? this.activateWindow(this._windows[GCore - 1], GDocumentWindow)
                : GCore + 1 < this._windows.length
                  ? this.activateWindow(this._windows[GCore + 1], GDocumentWindow)
                  : this.activateWindow(null);
            }
            (c._activeWindow === e && (c._activeWindow = null),
              c._windows.splice(c._windows.indexOf(e), 1),
              this._windows.splice(this._windows.indexOf(e), 1),
              e._container.remove(),
              this.hasEventListeners(l.WindowEvent) &&
                this.trigger(new l.WindowEvent(l.WindowEvent.Type.Removed, e)),
              e.release(),
              t && t(),
              0 === c._windows.length && gDesigner.removeDocument(c));
          }
        }.bind(this);
      n
        ? d()
        : c.isSynchronizing()
          ? GSystemDialog.alert(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.please-wait-avoid-losing-progress')
              )
            )
          : 1 === c._windows.length && c.isModified()
            ? gDesigner
                .canUnloadDocument(c)
                .then((e) => {
                  e
                    ? d()
                    : (gDesigner.stats('action_execute_windowalert', GSaveAction.ID),
                      gDesigner.executeAction(GSaveAction.ID, [c, d], undefined, true));
                })
                .catch((e) => {
                  e && !e.documentStatus && console.log(e);
                })
            : d();
    }

    init() {}

    relayout(e) {
      ((this._viewOffset = e || this._viewOffset),
        this._activeWindow && this._relayoutWindow(this._activeWindow));
    }

    _relayoutWindow(e, t) {
      e.relayout(this._htmlElement.width(), this._htmlElement.height(), this._viewOffset, t);
    }

    _addWindow(e, t, n) {
      var GCore = new GDocumentWindow(e, t);
      return (
        e._windows.push(GCore),
        'number' == typeof n ? this._windows.splice(n, 0, GCore) : this._windows.push(GCore),
        this.hasEventListeners(l.WindowEvent) &&
          this.trigger(new l.WindowEvent(l.WindowEvent.Type.Added, GCore, n)),
        this.activateWindow(GCore),
        GCore
      );
    }

    getHtmlElement() {
      return this._htmlElement;
    }

    getWindow(e) {
      for (var module = null, require = 0; require < this._windows.length; ++require)
        if (this._windows[require].getDocument() === e) {
          module = this._windows[require];
          break;
        }
      return module;
    }

    static WindowEvent(e, t, n) {
      ((this.type = e), (this.window = t), (this.index = n));
    }

  }
  (GCore.GObject.inherit(l.WindowEvent, GCore.GEvent),
    l.WindowEvent.Type = {
      Added: 0,
      Removed: 1,
      Deactivated: 10,
      Activated: 11,
    },
    l.WindowEvent.prototype.type = null,
    l.WindowEvent.prototype.window = null,
    l.WindowEvent.prototype.index = null,
    l.WindowEvent.prototype.toString = function () {
      return '[Object GWindows.WindowEvent]';
    },
    exports.exports = l);
}