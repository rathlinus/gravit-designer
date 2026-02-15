/**
 * Webpack Module #1661
 * Type: class
 * Name: GSymbolsSidebar
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var GCore = require(1) /* GCore */,
      GTools = require(53) /* GTools */,
      r = require(67) /* GRichTooltipConfig */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GCreateSymbolAction = require(608) /* GCreateSymbolAction */,
      GFitSelectionAction = require(566) /* GFitSelectionAction */,
      GSidebar = require(806) /* GSidebar */,
      GSidebarContainer = require(395) /* GSidebarContainer */;
    function g() {
      GSidebar.call(this);
    }
    GCore.GObject.inherit(g, GSidebar),
      (g.ID = "symbols"),
      (g.TITLE = new GCore.GLocaleKey("GSymbolsSidebar", "title")),
      (g.prototype._htmlElement = null),
      (g.prototype._newSymbolButton = null),
      (g.prototype._symbolsToolbar = null),
      (g.prototype._symbolsPanel = null),
      (g.prototype.getId = function () {
        return g.ID;
      }),
      (g.prototype.getTitle = function () {
        return g.TITLE;
      }),
      (g.prototype.isEnabled = function () {
        return true;
      }),
      (g.prototype.isVisible = function () {
        return !!gDesigner.getApplicationManager().isEditingEnabled();
      }),
      (g.prototype.getOrientation = function () {
        return GSidebarContainer.Orientation.Left;
      }),
      (g.prototype.getMinimumWidth = function () {
        return 250;
      }),
      (g.prototype.getDefaultWidth = function () {
        return 250;
      }),
      (g.prototype.isResizeable = function () {
        return true;
      }),
      (g.prototype.relayout = function () {
        this._symbolsPanel.gSymbolsPanel("relayout");
      }),
      (g.prototype.init = function (e) {
        GSidebar.prototype.init.call(this, e),
          (this._htmlElement = e),
          (this._symbolsToolbar = $("<div></div>")
            .addClass("toolbar symbols-toolbar")
            .append(
              $("<label></label>")
                .css("flex-grow", "1")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GSymbolsSidebar", "text.symbols")
                  )
                )
            )
            .on("dragover", function (e) {
              e.preventDefault(), e.stopPropagation();
            })
            .on("dragenter", function (e) {
              e.preventDefault(), e.stopPropagation();
            })
            .on(
              "drop",
              function (e) {
                e.preventDefault(), e.stopPropagation();
              }.bind(this)
            )
            .appendTo(e)),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GSymbolsSidebar", "action.delete-symbol")
              )
            )
            .on("click", () => this._deleteSymbol())
            .append($("<span></span>").addClass("gravit-icon-trash"))
            .append($("<span></span>").addClass("gravit-icon-touch-trash"))
            .appendTo(this._symbolsToolbar)
            .gRichTooltip(
              r.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSymbolsSidebar",
                    "text.delete-symbol-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSymbolsSidebar",
                    "text.delete-symbol-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            ),
          (this._newSymbolButton = $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GSymbolsSidebar", "action.create-symbol")
              )
            )
            .on(
              "click",
              function () {
                gDesigner.stats("symbols_new_symbol"),
                  this._symbolsPanel.gSymbolsPanel("newSymbolClick") &&
                    ($(this._symbolsToolbar).gAccordion("toggleOpen", true),
                    $(this._symbolsToolbar).gAccordion(
                      "init",
                      $(this._symbolsPanel)
                    ));
              }.bind(this)
            )
            .append($("<span></span>").addClass("gravit-icon-plus"))
            .append($("<span></span>").addClass("gravit-icon-touch-plus"))
            .appendTo(this._symbolsToolbar)
            .addClass("g-disabled")
            .gRichTooltip(
              r.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSymbolsSidebar",
                    "text.create-symbol-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSymbolsSidebar",
                    "text.create-symbol-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            ));
        var t = this,
          n = $("<div></div>")
            .addClass("symbols-container")
            .appendTo(e)
            .on("click", function (e) {
              gDesigner.stats("symbols_click_symbol"),
                (e.target === this ||
                  $(e.target).hasClass("g-symbols-panel")) &&
                  t._symbolsPanel.gSymbolsPanel("isSelected") &&
                  t._document.getEditor().updateSelection(
                    false,
                    t._document
                      .getEditor()
                      .getSelection()
                      .slice()
                      .filter(function (e) {
                        return !(e instanceof GCore.GSymbol && e.isMaster());
                      })
                  );
            })
            .on("scroll", function () {
              if ($("body").hasClass("g-touch")) {
                var e = $(this)[0].scrollTop,
                  t =
                    "light" == gDesigner.getSetting("theme")
                      ? "DFDFDF"
                      : "2E2E2E";
                (e = e > 20 ? 20 : e),
                  $(".symbols-toolbar").css({
                    "box-shadow": "0 0 25px ".concat(e, "px #").concat(t),
                  });
              }
            });
        (this._symbolsPanel = $("<div></div>")
          .addClass("symbols")
          .on("dragover", function (e) {
            e.preventDefault(), e.stopPropagation();
          })
          .on("dragenter", function (e) {
            e.preventDefault(), e.stopPropagation();
          })
          .on(
            "drop",
            function (e) {
              e.preventDefault(), e.stopPropagation();
            }.bind(this)
          )
          .appendTo(n)),
          this._symbolsPanel.gSymbolsPanel({
            moveCallback: this._moveSymbolCallback.bind(this),
            clickCallback: this._clickSymbolCallback.bind(this),
            dblClickCallback: this._dblClickSymbolCallback.bind(this),
            startDraggingCallback: this._startSymbolDraggingCallback.bind(this),
          }),
          gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this);
      }),
      (g.prototype._documentEvent = function (e) {
        if (e.type === GDocumentEvent.Type.Activated)
          (this._document = e.document),
            this._symbolsPanel.gSymbolsPanel(
              "scene",
              this._document.getScene()
            ),
            this.trigger(GSidebar.UPDATE_EVENT),
            this._document
              .getEditor()
              .addEventListener(
                GTools.GEditor.SelectionChangedEvent,
                this._selectionUpdate,
                this
              );
        else if (e.type === GDocumentEvent.Type.Deactivated) {
          this._symbolsPanel.gSymbolsPanel("scene", null),
            this._document
              .getEditor()
              .removeEventListener(
                GTools.GEditor.SelectionChangedEvent,
                this._selectionUpdate,
                this
              ),
            (this._document = null),
            this.trigger(GSidebar.UPDATE_EVENT);
        }
      }),
      (g.prototype._deleteSymbol = function () {
        gDesigner.stats("symbols_delete_symbol");
        this._document.getEditor();
        var e = this._document.getScene(),
          t = (e.getActivePage(), this._symbolsPanel);
        t.gSymbolsPanel("isSelected") &&
          GTools.GEditor.tryRunTransaction(
            e,
            function () {
              t.gSymbolsPanel("removeSelected");
            },
            GCore.GLocale.get(
              new GCore.GLocaleKey("GSymbolsSidebar", "action.delete-symbol")
            )
          );
      }),
      (g.prototype._moveSymbolCallback = function (e, t, n) {
        n && e && n.length;
      }),
      (g.prototype._startSymbolDraggingCallback = function (e) {
        return console.log("start dragging cb"), null;
      }),
      (g.prototype._clickSymbolCallback = function (e) {
        if (e && e.isMaster()) {
          var module = this._document.getEditor();
          if (module) {
            var require = GTools.GEditor.getElementPage(e);
            require && this._document.getScene().setActivePage(require),
              module.clearSelection(),
              module.updateSelection(false, [e]),
              module.hasSelection() &&
                gDesigner.executeAction(GFitSelectionAction.ID, undefined, undefined, true);
          }
        }
      }),
      (g.prototype._dblClickSymbolCallback = function (e) {
        if (e && e.isMaster()) {
          var module = this._document.getEditor(),
            require = this._document.getScene(),
            _interopRequireDefault = (require.getActivePage(), [e]);
          require.visitLinks(e, function (e) {
            e instanceof GCore.GSymbol && _interopRequireDefault.push(e);
          }),
            module && (module.clearSelection(), module.updateSelection(false, _interopRequireDefault));
        }
      }),
      (g.prototype._selectionUpdate = function () {
        var e = gDesigner.canExecuteAction(GCreateSymbolAction.ID),
          t = this._newSymbolButton.hasClass("g-disabled");
        e && t
          ? this._newSymbolButton.removeClass("g-disabled")
          : e || t || this._newSymbolButton.addClass("g-disabled");
      }),
      (g.prototype.getTouchTools = function () {
        return [
          new GTouchTool.default({
            id: "symbols",
            sidebar: this.getId(),
            icon: "gravit-icon-touch-newSymbols",
            panel: ".symbols-container",
            toolbar: ".symbols-toolbar",
          }),
        ];
      }),
      (g.prototype.toString = function () {
        return "[Object GSymbolsSidebar]";
      }),
      (exports.exports = g);
  }