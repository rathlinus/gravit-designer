/**
 * Webpack Module #1260
 * Type: class
 * Name: GOutlineSidebar
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(596) /* polyfill_Array_reverse */, require(30) /* polyfill_Object_assign */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      r = require(15) /* module */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      l = require(67) /* GRichTooltipConfig */,
      c = _interopRequireDefault(require(442) /* module_442 */),
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
      p = require(86) /* module_86 */,
      g = require(603) /* WindowEvent */,
      GFitAllAction = require(449) /* GFitAllAction */,
      GFitSelectionAction = require(566) /* GFitSelectionAction */,
      GSidebar = require(806) /* GSidebar */,
      y = require(395) /* module_395 */,
      GExportProperties = require(1523) /* GExportProperties */,
      GSystemDialog = require(44) /* GSystemDialog */,
      b = require(450) /* module_450 */;
    const GApplicationStatusEvent = require(808) /* GApplicationStatusEvent */,
      GSettingChangedEvent = require(135) /* GSettingChangedEvent */;
    function x() {
      GSidebar.call(this);
    }
    GCore.GObject.inherit(x, GSidebar),
      (x.ID = "outline"),
      (x.TITLE = new GCore.GLocaleKey("GOutlineSidebar", "title")),
      (x.MULTIPAGE_MODE_ENABLED_OPTION_NAME = "OutlineSidebar/Multipage_Mode"),
      (x.prototype._document = null),
      (x.prototype._pageToolbar = null),
      (x.prototype._layerToolbar = null),
      (x.prototype._exportToolbar = null),
      (x.prototype._outlineSidebarElement = null),
      (x.prototype._pageContainerMaxHeight = 500),
      (x.prototype._pageContainerMinHeight = 50),
      (x.prototype._pagePanel = null),
      (x.prototype._pageModeSwitch = null),
      (x.prototype._layerPanel = null),
      (x.prototype._exportPanel = null),
      (x.prototype._exportInstance = null),
      (x.prototype._pageMenuOptionButton = null),
      (x.prototype._transformMode = false),
      (x.prototype._htmlElement = null),
      (x.prototype.getId = function () {
        return x.ID;
      }),
      (x.prototype.getTitle = function () {
        return x.TITLE;
      }),
      (x.prototype.isEnabled = function () {
        return null !== this._document;
      }),
      (x.prototype.isVisible = function () {
        return !!gDesigner.getApplicationManager().isInspectEnabled();
      }),
      (x.prototype.getOrientation = function () {
        return y.Orientation.Left;
      }),
      (x.prototype.getMinimumWidth = function () {
        return 250;
      }),
      (x.prototype.getDefaultWidth = function () {
        return 250;
      }),
      (x.prototype.isResizeable = function () {
        return true;
      }),
      (x.prototype.getLayerPanel = function () {
        return this._layerPanel;
      }),
      (x.prototype.relayout = function () {
        this._pagePanel.gPagePanel("relayout"),
          this._layerPanel.gLayerPanel("relayout"),
          (this._pageContainerMaxHeight =
            parseInt(this._outlineSidebarElement.css("height"), 10) - 150);
      }),
      (x.prototype._copyDataTransfer = function (e, t) {
        var n = t.originalEvent;
        e.hasOwnProperty("dataTransfer")
          ? n &&
            n.dataTransfer &&
            n.dataTransfer.types &&
            n.dataTransfer.types.forEach(function (t) {
              e.dataTransfer.setData(n.dataTransfer.getData(t));
            })
          : (e.dataTransfer = n.dataTransfer);
      }),
      (x.prototype.getTouchTools = function () {
        return [
          new GTouchTool.default({
            def: true,
            id: "pages",
            sidebar: this.getId(),
            icon: "gravit-icon-touch-pages-panel",
            panel: ".pages-container",
            toolbar: ".page-toolbar",
            panelWidth: "320px",
          }),
          new GTouchTool.default({
            id: "layers",
            sidebar: this.getId(),
            icon: "gravit-icon-touch-layers-panel",
            panel: [".layers-container", ".export-panel"],
            toolbar: ".layer-toolbar",
            panelWidth: "350px",
          }),
        ];
      }),
      (x.prototype.init = function (e) {
        (this._htmlElement = e),
          GSidebar.prototype.init.call(this, e),
          (this._pageToolbar = $("<div></div>")
            .addClass("toolbar page-toolbar")
            .append(
              $("<label></label>").text(
                GCore.GLocale.get(new GCore.GLocaleKey("GOutlineSidebar", "text.pages"))
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
                var t = this._pagePanel.gPagePanel("getLastVisitedDroppable");
                if (t) {
                  var n = document.createEvent("mouseEvent");
                  n.initEvent("drop", true, true, null),
                    this._copyDataTransfer(n, e),
                    t.dispatchEvent(n);
                }
              }.bind(this)
            )
            .appendTo(e)),
          (this._pageModeSwitch = $("<label></label>")
            .addClass("g-switch")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "action.toggle-page-mode")
              )
            )
            .css("margin-right", "5px")
            .append(
              $("<input>")
                .attr("id", "toogle-page-mode-checkbox")
                .attr("type", "checkbox")
                .attr("data-property", "multipage-switch")
                .on("change", this._multiPageModeChangeEventHandler.bind(this))
            )
            .append($("<div></div>"))
            .appendTo(this._pageToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.multipage-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.multipage-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            )),
          (this._pageMenuOptionButton = $("<button></button>")
            .addClass("setting-menu-options")
            .on(
              "click",
              function (e) {
                Object.assign(e, { data: { context: b.PagePanel } }),
                  $(gDesigner.getWindows().getHtmlElement()).trigger(
                    "contextmenu",
                    e
                  );
              }.bind(this)
            )
            .append($("<span/>").addClass("gravit-icon-settings"))
            .appendTo(this._pageToolbar)),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "action.delete-active-page")
              )
            )
            .on("click", () => this._deletePage())
            .append($("<span></span>").addClass("gravit-icon-trash"))
            .appendTo(this._pageToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.delete-page-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.delete-page-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            ),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "action.create-new-page")
              )
            )
            .on(
              "click",
              function () {
                this._insertPage(),
                  $(this._pageToolbar).gAccordion("toggleOpen", true),
                  $(this._pageToolbar).gAccordion("init", $(this._pagePanel));
              }.bind(this)
            )
            .append($("<span></span>").addClass("gravit-icon-addpage"))
            .appendTo(this._pageToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.create-new-page-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.create-new-page-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            );
        var t,
          n,
          _interopRequireDefault = $("<div></div>").addClass("pages-container").appendTo(e);
        (this._pagePanel = $("<div></div>")
          .addClass("pages")
          .gToolbarShadow("init", ".page-toolbar")
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
              var t = this._pagePanel.gPagePanel("getLastVisitedDroppable");
              if (t) {
                var n = document.createEvent("mouseEvent");
                n.initEvent("drop", true, true, null),
                  this._copyDataTransfer(n, e),
                  t.dispatchEvent(n);
              }
            }.bind(this)
          )
          .on(
            "mouseenter",
            function () {
              this._pagePanel.gPagePanel("setBlockHighlight", true);
            }.bind(this)
          )
          .on(
            "mouseleave",
            function () {
              this._pagePanel.gPagePanel("setBlockHighlight", false);
            }.bind(this)
          )
          .appendTo(_interopRequireDefault)),
          this._pagePanel.gPagePanel({
            moveCallback: this._movePageTreeNodeCallback.bind(this),
            clickCallback: this._clickPageTreeNodeCallback.bind(this),
            startDraggingCallback: this._startPageDraggingCallback.bind(this),
          });
        var r = false,
          GTouchTool = $("<div/>").attr("id", "page-layer-divider"),
          c = function (e) {
            var GTools;
            r &&
              ((GTools = n - t + e.clientY) < this._pageContainerMinHeight &&
                (GTools = this._pageContainerMinHeight),
              GTools > this._pageContainerMaxHeight &&
                (GTools = this._pageContainerMaxHeight),
              _interopRequireDefault.css("height", GTools + "px"));
          }.bind(this),
          GDocumentStatusEvent = function () {
            $(document).off("mousemove", c),
              $(document).off("mouseup", GDocumentStatusEvent),
              (r = false),
              (t = null),
              (n = null),
              e.removeClass("page-container-resizing");
          },
          p = function (GTools) {
            (t = GTools.clientY),
              (r = true),
              (n = parseInt(_interopRequireDefault.css("height"), 10)),
              e.addClass("page-container-resizing"),
              $(document).on("mousemove", c),
              $(document).on("mouseup", GDocumentStatusEvent);
          }.bind(this);
        $(GTouchTool).on("mousedown", p),
          GTouchTool.appendTo(e),
          $("<hr />").appendTo(GTouchTool),
          GTouchTool.append($("<div />")),
          this._addLayerPanel(e),
          $("<hr/>").appendTo(e),
          (this._exportToolbar = $("<div></div>")
            .addClass("toolbar toolbar-export")
            .appendTo(e)),
          (this._exportPanel = $("<div></div>")
            .addClass("properties-panel")
            .addClass("export-panel")
            .appendTo(e)),
          (this._exportInstance = new GExportProperties()),
          this._exportInstance.init(this._exportPanel, this._exportToolbar),
          gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
          gDesigner
            .getToolManager()
            .addEventListener(
              GTools.GToolManager.ToolChangedEvent,
              this._toolChangedEvent,
              this
            ),
          gDesigner.addEventListener(GApplicationStatusEvent, this._applicationStatusEvent, this),
          gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
          this._pageToolbar.gAccordion("init", ".pages-container", "label"),
          this._exportToolbar.gAccordion("init", ".properties-panel", "label"),
          (this._outlineSidebarElement = e);
      }),
      (x.prototype.toggleMultiPageMode = function () {
        const exports = this._getMultiPageSwitcher();
        if (exports) {
          const t = exports.is(":checked");
          exports.prop("checked", !t), exports.trigger("change");
        }
      }),
      (x.prototype._changePageMode = function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        this._document
          .getScene()
          .setProperty(c.default.MULTIPAGE_VIEW_ENABLED, e),
          gContainer.setProperty(x.MULTIPAGE_MODE_ENABLED_OPTION_NAME, e),
          module &&
            this._pageModeSwitch
              .find("input[data-property=multipage-switch]")
              .prop("checked", e);
      }),
      (x.prototype._getMultiPageSwitcher = function () {
        return this._pageModeSwitch
          ? this._pageModeSwitch.find('input[data-property="multipage-switch"]')
          : null;
      }),
      (x.prototype._multiPageModeChangeEventHandler = function (e) {
        gDesigner.stats("pages_change_multipage-mode");
        const module = $(e.target);
        this._refreshPageModeSwitch(module, { showAlert: true });
        const require = module.is(":checked");
        this._changePageMode(require, false);
        const _interopRequireDefault = GCore.GLocale.get(
          new GCore.GLocaleKey("GOutlineSidebar", "action.toggle-page-mode")
        );
        this._document.getEditor().pushState(
          _interopRequireDefault,
          () => {
            this._changePageMode(require);
          },
          () => {
            this._changePageMode(!require);
          },
          {
            actions: [
              { isPropertyChangeAction: true, node: { hasMixin: () => false } },
            ],
          }
        );
      }),
      (x.prototype._settingChanged = function (e) {
        "touch" === e.key && this._touchInterfaceUpdate();
      }),
      (x.prototype._applicationStatusEvent = function (e) {
        e.status === GApplicationStatusEvent.Status.Ready && this._touchInterfaceUpdate();
      }),
      (x.prototype._touchInterfaceUpdate = function () {
        gDesigner.isTouchEnabled()
          ? (this._pageModeSwitch.toggleClass("toogle-page-mode", true),
            this._pageModeSwitch.toggleClass("g-switch", false),
            this._pageModeSwitch
              .find("#toogle-page-mode-checkbox")
              .gCheckboxSlider(),
            this._pageMenuOptionButton.show(),
            this._pagePanel.gPagePanel("resetVTreeRowHeight", "48"),
            this._layerPanel.gLayerPanel("resetVTreeRowHeight", "48"))
          : (this._pageModeSwitch.toggleClass("toogle-page-mode", false),
            this._pageModeSwitch.toggleClass("g-switch", true),
            this._pageModeSwitch
              .find("#toogle-page-mode-checkbox")
              .gCheckboxSlider("unmount"),
            this._pageMenuOptionButton.hide(),
            this._pagePanel.gPagePanel("resetVTreeRowHeight", "34"),
            this._layerPanel.gLayerPanel("resetVTreeRowHeight", "34"));
      }),
      (x.prototype._addLayerPanel = function (e) {
        this._layerToolbar ||
          ((this._layerToolbar = $("<div></div>")
            .addClass("toolbar")
            .addClass("layer-toolbar")
            .append(
              $("<label></label>")
                .css("flex-grow", "1")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GOutlineSidebar", "text.layers")
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
                var t = this._layerPanel.gLayerPanel("getLastVisitedDroppable");
                if (t) {
                  var require = new CustomEvent("drop", {
                    bubbles: true,
                    cancelable: true,
                  });
                  this._copyDataTransfer(require, e),
                    (require.altKey = e.originalEvent.altKey),
                    (require.layerY = 0),
                    t.dispatchEvent(require);
                }
              }.bind(this)
            )),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "action.delete-layer-item")
              )
            )
            .on("click", () => this._deleteLayerOrItem())
            .append($("<span></span>").addClass("gravit-icon-trash"))
            .appendTo(this._layerToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.delete-layer-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.delete-layer-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            ),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "action.new-layer")
              )
            )
            .on("click", () => this.insertLayer())
            .append($("<span></span>").addClass("gravit-icon-addlayer"))
            .appendTo(this._layerToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.new-layer-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.new-layer-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            )),
          this._layerToolbar.appendTo(e);
        var t = $("<div></div>").addClass("layers-container").appendTo(e);
        this._layerPanel ||
          ((this._layerPanel = $("<div></div>")
            .gToolbarShadow("init", ".layer-toolbar")
            .addClass("layers")
            .on(
              "mouseenter",
              function (e) {
                var t = this._document.getScene();
                t &&
                  t.acceptChildren(function (e) {
                    return (
                      e.hasFlag(GCore.GNode.Flag.Highlighted) &&
                        e.removeFlag(GCore.GNode.Flag.Highlighted),
                      true
                    );
                  }),
                  this._layerPanel.gLayerPanel("setBlockHighlight", true);
              }.bind(this)
            )
            .on(
              "mouseleave",
              function (e) {
                this._layerPanel.gLayerPanel("setBlockHighlight", false);
              }.bind(this)
            )
            .on(
              "click",
              function () {
                gDesigner.stats("layers_deselect_all-layers"),
                  this._document.getEditor().clearSelection();
                var e = this._document.getScene();
                e && e.setActiveLayer(null),
                  r.GPlatform.modifiers.optionKey &&
                    gDesigner.executeAction(GFitAllAction.ID, undefined, "outlinesidebar");
              }.bind(this)
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
                var t = this._layerPanel.gLayerPanel("getLastVisitedDroppable");
                if (t) {
                  var require = document.createEvent("mouseEvent");
                  require.initEvent("drop", true, true, null),
                    this._copyDataTransfer(require, e),
                    t.dispatchEvent(require);
                }
              }.bind(this)
            )
            .appendTo(t)),
          this._layerPanel.gLayerPanel({
            moveCallback: this._moveLayerTreeNodeCallback.bind(this),
            isDuplicateEffectCallback:
              this._isDuplicateEffectCallback.bind(this),
            duplicateCallback: this._duplicateLayerTreeNodeCallback.bind(this),
            clickCallback: this._clickLayerTreeNodeCallback.bind(this),
            startDraggingCallback: this._startLayerDraggingCallback.bind(this),
            patternChooserStatusChangeCallBack:
              this._patternChooserStatusChange.bind(this),
          }));
      }),
      (x.prototype._documentEvent = function (e) {
        var t, n;
        e.type === GDocumentEvent.Type.Activated
          ? ((this._document = e.document),
            (t = this._document.getScene()),
            this._pagePanel.gPagePanel("scene", t),
            this._layerPanel.gLayerPanel("scene", t),
            this.trigger(GSidebar.UPDATE_EVENT),
            this._document.getStatus() === p.Ready ||
            this._document.getStatus() === p.Loaded
              ? this._document.getActiveWindow()
                ? this._updateMultiPageMode()
                : gDesigner
                    .getWindows()
                    .addEventListener(g.WindowEvent, this._windowsEvent, this)
              : this._document.addEventListener(
                  GDocumentStatusEvent,
                  this._documentStatusEvent,
                  this
                ),
            (n = this._document.getEditor()),
            gDesigner
              .getToolManager()
              .addEventListener(
                GTools.GToolManager.ToolChangedEvent,
                this._updateExport,
                this
              ),
            n.addEventListener(
              GTools.GEditor.SelectionChangedEvent,
              this._updateExport,
              this
            ),
            t.addEventListener(
              GCore.GNode.AfterFlagChangeEvent,
              this._afterFlagChangeEvent,
              this
            ),
            t.addEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChanged,
              this
            ),
            t.addEventListener(
              GCore.GNode.AfterInsertEvent,
              this._afterInsert,
              this
            ),
            this._updateExport())
          : e.type === GDocumentEvent.Type.Deactivated &&
            (this._pagePanel.gPagePanel("scene", null),
            this._layerPanel.gLayerPanel("scene", null),
            (t = this._document.getScene()),
            (n = this._document.getEditor()),
            gDesigner
              .getToolManager()
              .removeEventListener(
                GTools.GToolManager.ToolChangedEvent,
                this._updateExport,
                this
              ),
            gDesigner
              .getWindows()
              .removeEventListener(g.WindowEvent, this._windowsEvent, this),
            n.removeEventListener(
              GTools.GEditor.SelectionChangedEvent,
              this._updateExport,
              this
            ),
            t.removeEventListener(
              GCore.GNode.AfterFlagChangeEvent,
              this._afterFlagChangeEvent,
              this
            ),
            t.removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChanged,
              this
            ),
            t.removeEventListener(
              GCore.GNode.AfterInsertEvent,
              this._afterInsert,
              this
            ),
            this._document.removeEventListener(
              GDocumentStatusEvent,
              this._documentStatusEvent,
              this
            ),
            (this._document = null),
            (this._elements = null),
            this._updateExport(),
            this.trigger(GSidebar.UPDATE_EVENT));
      }),
      (x.prototype._documentStatusEvent = function (e) {
        (e.status !== p.Ready && e.status !== p.Loaded) ||
          (this._updateMultiPageMode(),
          this._document.removeEventListener(
            GDocumentStatusEvent,
            this._documentStatusEvent,
            this
          ));
      }),
      (x.prototype._windowsEvent = function (e) {
        e.type === g.WindowEvent.Type.Activated &&
          (this._updateMultiPageMode(),
          gDesigner
            .getWindows()
            .removeEventListener(g.WindowEvent, this._windowsEvent, this));
      }),
      (x.prototype._isMultiPageModeEnabled = function () {
        const exports = this._document
          .getScene()
          .getProperty(c.default.MULTIPAGE_VIEW_ENABLED);
        return "boolean" == typeof exports
          ? exports
          : gContainer.getProperty(x.MULTIPAGE_MODE_ENABLED_OPTION_NAME);
      }),
      (x.prototype._updateMultiPageMode = async function () {
        const exports = this._getMultiPageSwitcher(),
          module = await this._isMultiPageModeEnabled();
        exports.prop("checked", module),
          this._refreshPageModeSwitch(exports, { skipInvalidation: true });
      }),
      (x.prototype._toolChangedEvent = function (e) {
        var t = e.previousTool,
          n = e.newTool;
        t &&
          t instanceof GTools.GSelectTool &&
          (e.light || this._updateTransformMode(false),
          t.removeEventListener(
            GTools.GSelectTool.Event,
            this._selectToolEvent,
            this
          )),
          this._activeTool(n);
      }),
      (x.prototype._activeTool = function (e) {
        e &&
          e instanceof GTools.GSelectTool &&
          e.addEventListener(GTools.GSelectTool.Event, this._selectToolEvent, this);
      }),
      (x.prototype._selectToolEvent = function (e) {
        e.type === GTools.GSelectTool.Event.Type.EditModeChanged &&
          this._updateTransformMode(
            e.args.mode === GTools.GSelectTool.EditMode.Transform
          );
      }),
      (x.prototype._insertPage = function () {
        if (gDesigner.getApplicationManager().isEditingEnabled()) {
          gDesigner.stats("pages_insert_page");
          var exports = this._document.getScene();
          GTools.GEditor.tryRunTransaction(
            exports,
            function () {
              var t = exports.insertPage();
              exports.setActivePage(t);
            },
            GCore.GLocale.get(
              new GCore.GLocaleKey("GOutlineSidebar", "action.insert-page")
            )
          ),
            this._navigateDrawingCenter(exports.getActivePage()),
            this._refreshSelection();
        }
      }),
      (x.prototype.sceneHasInfiniteCanvas = function () {
        var e = false;
        return (
          this._document
            .getScene()
            .iteratePages((t) => (t.isFixedSized() || (e = true), !e), true),
          e
        );
      }),
      (x.prototype._refreshPageModeSwitch = function (e) {
        let { showAlert: module = false, skipInvalidation: require = false } =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const _interopRequireDefault = !this.sceneHasInfiniteCanvas();
        if (!this.isEnabled())
          return e.attr("data-title", ""), void e.prop("disabled", true);
        e.prop("disabled", false);
        var GTools = this._document.getActiveWindow(),
          r = GTools.getView();
        (_interopRequireDefault ||
          (e.is(":checked") && e.prop("checked", false),
          module &&
            GSystemDialog.alert(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "text.multipage-alert")
              )
            ),
          r.getViewConfiguration().multiPageView ||
            r.getViewConfiguration().pageLabelsVisible)) &&
          ((r.getViewConfiguration().multiPageView = e.is(":checked")),
          (r.getViewConfiguration().pageLabelsVisible = e.is(":checked")),
          require ||
            (r.invalidate(null, true),
            module && (GTools.centerAndZoom(), this._refreshSelection())));
      }),
      (x.prototype._deletePage = function () {
        gDesigner.stats("pages_delete_page");
        this._document.getEditor();
        var e = this._document.getScene(),
          t = e.getActivePage();
        t.getProperty("plkt") & GCore.GBlock.ProgramLck.NoDelete ||
          (t.getSlavePages().length > 0
            ? GSystemDialog.confirm(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GOutlineSidebar",
                    "text.confirm-delete-masterpage"
                  )
                ),
                function (t) {
                  t &&
                    GTools.GEditor.tryRunTransaction(
                      e,
                      function () {
                        e.deleteActivePage();
                      },
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GOutlineSidebar",
                          "action.delete-page"
                        )
                      )
                    );
                },
                null,
                null,
                true,
                true
              )
            : GTools.GEditor.tryRunTransaction(
                e,
                function () {
                  e.deleteActivePage();
                },
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GOutlineSidebar", "action.delete-page")
                )
              ),
          this._navigateDrawingCenter(e.getActivePage()),
          this._refreshSelection());
      }),
      (x.prototype._refreshSelection = function () {
        var e = this._document.getEditor(),
          t = this._document.getScene(),
          n = this._document
            .getActiveWindow()
            .getView()
            .getViewConfiguration().multiPageView,
          _interopRequireDefault = t.getActivePage(),
          GCore = null;
        if (e.hasSelection()) {
          var r = e.getSelection();
          n
            ? e.updateSelection(false, [_interopRequireDefault])
            : (GCore = r.filter(function (e) {
                return GTools.GEditor.getElementPage(e) === _interopRequireDefault;
              })).length !== r.length && e.updateSelection(false, GCore);
        } else n && e.updateSelection(false, [_interopRequireDefault]);
      }),
      (x.prototype._movePageTreeNodeCallback = function (e, t, n) {
        if (n && e && n.length) {
          this._pagePanel.gPagePanel("blockHandlers", true);
          var _interopRequireDefault = this._document.getScene();
          GTools.GEditor.tryRunTransaction(
            this._document.getScene(),
            function () {
              this._document.getEditor().clearSelection(),
                _interopRequireDefault.startBlockReferenceChanges(),
                n.length > 1 && e.beginUpdate();
              for (var GTools = n.length; GTools > 0; --GTools) {
                var GCore = n[GTools - 1];
                GCore.getParent().removeChild(GCore), e.insertChild(GCore, t);
              }
              n.length > 1 && e.endUpdate(),
                _interopRequireDefault.endBlockReferenceChanges(),
                _interopRequireDefault.isEvenOddMaster() && _interopRequireDefault.reassignMasterPages();
            }.bind(this),
            GCore.GLocale.get(
              new GCore.GLocaleKey("GOutlineSidebar", "action.move-page")
            )
          ),
            this._pagePanel.gPagePanel("blockHandlers", false);
        }
      }),
      (x.prototype._startPageDraggingCallback = function (e) {
        gDesigner.stats("pages_start_drag");
        var t = null;
        if (e) {
          t = [];
          var require = this._document.getEditor();
          if (e.hasFlag(GCore.GNode.Flag.Selected)) {
            var _interopRequireDefault = require.getSelection();
            t = this._filterPageDraggable(_interopRequireDefault);
            t = GCore.GNode.order(t, true);
          } else require.clearSelection(), t.push(e);
        }
        return t;
      }),
      (x.prototype._filterPageDraggable = function (e) {
        var t = [];
        if (e)
          for (var require = 0; require < e.length; ++require) {
            var _interopRequireDefault = e[require];
            _interopRequireDefault instanceof GCore.GPage &&
              !_interopRequireDefault.hasFlag(GCore.GElement.Flag.PartialLocked) &&
              t.push(_interopRequireDefault);
          }
        return t;
      }),
      (x.prototype.changeActivePage = function (e) {
        gDesigner.stats("pages_select_page");
        const module = this._document,
          require = module && module.getScene();
        require &&
          e &&
          GTools.GEditor.tryRunTransaction(
            require,
            () => {
              require.setActivePage(e),
                this._navigateDrawingCenter(e),
                this._refreshSelection();
            },
            GCore.GLocale.get(
              new GCore.GLocaleKey("GOutlineSidebar", "action.change-active-page")
            )
          );
      }),
      (x.prototype._clickPageTreeNodeCallback = function (e) {
        this.changeActivePage(e);
      }),
      (x.prototype._navigateDrawingCenter = function (e) {
        var t = this._document.getActiveWindow().getView();
        if (t.getViewConfiguration().multiPageView) {
          var require = e.getTransform(),
            _interopRequireDefault = e.getGeometryBBox();
          r = require.mapRect(_interopRequireDefault).getSide(GCore.GRect.Side.CENTER);
          t.zoomAtCenter(r);
        } else if (this._document.hasCDR()) {
          var GTools = e.getContentBBox();
          if (GTools && !GTools.isEmpty()) {
            var r = GTools.getSide(GCore.GRect.Side.CENTER);
            t.zoomAtCenter(r);
          }
        }
      }),
      (x.prototype.createLayer = function () {
        const exports = this._document.getScene(),
          module = new GCore.GLayer();
        return (
          module.setProperty(
            "name",
            GCore.GLocale.get(new GCore.GLocaleKey("GOutlineSidebar", "text.layer")) +
              " " +
              exports.queryCount("layer").toString()
          ),
          module
        );
      }),
      (x.prototype.insertLayer = function () {
        if (!gDesigner.getApplicationManager().isEditingEnabled()) return;
        gDesigner.stats("layers_insert_layer");
        const exports = this._document.getScene();
        GTools.GEditor.tryRunTransaction(
          exports,
          () => {
            const module = gDesigner.getActiveDocument(),
              require = module && module.getEditor(),
              _interopRequireDefault = (require && require.getSelection()) || [];
            let GTools = exports.getActivePage();
            GTools || ((GTools = exports.insertPage()), GTools.setFlag(GCore.GNode.Flag.Active));
            const r = this.createLayer(),
              GTouchTool = _interopRequireDefault.filter((e) => !this._hasSelectedParentLayer(e)),
              l = GCore.GNode.order(GTouchTool, true),
              c = l && l[0];
            ((c && c.getParent()) || GTools).insertChild(r, c),
              exports.setActiveLayer(r),
              this._moveLayers(r, null, GTouchTool, false);
          },
          GCore.GLocale.get(
            new GCore.GLocaleKey("GOutlineSidebar", "action.insert-layer")
          )
        );
      }),
      (x.prototype._hasSelectedParentLayer = function (e) {
        let module = false;
        for (
          let require = e.getParent();
          require instanceof GCore.GLayer && !module;
          require = require.getParent()
        )
          require.hasFlag(GCore.GNode.Flag.Selected) && (module = true);
        return module;
      }),
      (x.prototype._moveLayerTreeNodeCallback = function (e, t, n, _interopRequireDefault) {
        const r = this._document.getScene();
        GTools.GEditor.tryRunTransaction(
          r,
          () => {
            this._moveLayers(e, t, n, _interopRequireDefault);
          },
          GCore.GLocale.get(
            new GCore.GLocaleKey("GOutlineSidebar", "action.move-layer")
          )
        );
      }),
      (x.prototype._moveLayers = function (e, t, n) {
        let _interopRequireDefault =
          !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3];
        if (!(e && e.hasMixin(GCore.GNode.Container) && n && n.length)) return;
        if (
          !(n = n
            .slice()
            .filter((e) =>
              GTools.GEditor.validateBlockInsertion(e.getParent(), e, t)
            )).length
        )
          return;
        _interopRequireDefault && this._layerPanel.gLayerPanel("blockHandlers", true);
        const GTouchTool = this._document.getScene();
        this._document.getEditor().clearSelection(),
          GTouchTool.startBlockReferenceChanges(),
          n.length > 1 && e.beginUpdate(),
          n.forEach((n) => {
            r.GPlatform.modifiers.optionKey
              ? n.hasMixin(GCore.GNode.Store) && (n = n.clone())
              : n.getParent().removeChild(n),
              n &&
                (e.insertChild(n, t),
                e instanceof GCore.GCompoundShape && n.assignStyleFrom(e));
          }),
          n.length > 1 && e.endUpdate(),
          GTouchTool.endBlockReferenceChanges(),
          this._document.getEditor().updateSelection(false, n),
          _interopRequireDefault && this._layerPanel.gLayerPanel("blockHandlers", false);
      }),
      (x.prototype._isDuplicateEffectCallback = function (e) {
        return e.altKey;
      }),
      (x.prototype._duplicateLayerTreeNodeCallback = function (e, t, n) {
        if (n && e && e.hasMixin(GCore.GNode.Container) && n.length) {
          this._layerPanel.gLayerPanel("blockHandlers", false);
          var _interopRequireDefault = this._document.getScene();
          GTools.GEditor.tryRunTransaction(
            _interopRequireDefault,
            function () {
              this._document.getEditor().clearSelection(),
                n.length > 1 && e.beginUpdate();
              for (var _interopRequireDefault = [], r = 0; r < n.length; ++r) {
                var GTouchTool = n[r];
                GTouchTool.validateInsertion(e) &&
                  GTouchTool.hasMixin(GCore.GNode.Store) &&
                  GTools.GEditor.validateBlockInsertion(e, GTouchTool) &&
                  (GTouchTool = GTouchTool.clone()) &&
                  _interopRequireDefault.push(GTouchTool);
              }
              if (
                (this._document
                  .getEditor()
                  .insertElements(_interopRequireDefault, true, true, false, true, e, t),
                e instanceof GCore.GCompoundShape)
              )
                for (var l = 0; l < _interopRequireDefault.length; ++l) _interopRequireDefault[l].assignStyleFrom(e);
              else if (e instanceof GCore.GShape) {
                var c = e.getPaintBBox();
                if (c) {
                  var GDocumentEvent = c.getX(),
                    GDocumentStatusEvent = c.getY();
                  for (r = 0; r < _interopRequireDefault.length; ++r) {
                    var p = _interopRequireDefault[r],
                      g = p instanceof GCore.GElement ? p.getPaintBBox() : null;
                    if (g && !c.intersectsRect(g, true)) {
                      var GFitAllAction = g.getX(),
                        GFitSelectionAction = g.getY();
                      null === GDocumentEvent ||
                        null === GFitAllAction ||
                        (GCore.GMath.isEqualEps(GDocumentEvent, GFitAllAction) &&
                          GCore.GMath.isEqualEps(GDocumentStatusEvent, GFitSelectionAction)) ||
                        p.transform(
                          new GCore.GTransform(1, 0, 0, 1, GDocumentEvent - GFitAllAction, GDocumentStatusEvent - GFitSelectionAction),
                          true
                        );
                    }
                  }
                }
              }
              n.length > 1 && e.endUpdate(),
                this._document.getEditor().updateSelection(false, _interopRequireDefault);
            }.bind(this),
            GCore.GLocale.get(
              new GCore.GLocaleKey("GOutlineSidebar", "action.move-layer")
            )
          );
        }
      }),
      (x.prototype._startLayerDraggingCallback = function (e) {
        var t = null;
        if (e) {
          gDesigner.stats("layers_start_drag"), (t = []);
          var require = this._document.getEditor();
          if (e.hasFlag(GCore.GNode.Flag.Selected)) {
            var _interopRequireDefault = require.getSelection();
            (t = this._filterLayerDraggable(_interopRequireDefault)), (t = GCore.GNode.order(t, true));
          } else require.clearSelection(), t.push(e);
        }
        return t;
      }),
      (x.prototype._patternChooserStatusChange = function (e) {
        this._layerToolbar.toggleClass("pattern-choose-actived", e);
      }),
      (x.prototype._filterLayerDraggable = function (e) {
        var t = [];
        if (e)
          for (var require = 0; require < e.length; ++require) {
            var _interopRequireDefault = e[require];
            if (!_interopRequireDefault.hasFlag(GCore.GElement.Flag.PartialLocked)) {
              for (
                var GTools = false, r = _interopRequireDefault.getParent();
                null != r && !GTools;
                r = r.getParent()
              )
                GTools = r.hasFlag(GCore.GNode.Flag.Selected);
              GTools || t.push(_interopRequireDefault);
            }
          }
        return t;
      }),
      (x.prototype._clickLayerTreeNodeCallback = function (e) {
        if (e) {
          e instanceof GCore.GCollabText
            ? gDesigner.stats("layers_select_collab-text")
            : gDesigner.stats("layers_select_layer"),
            this._document.getScene().updateActivePageForElem(e),
            this._document.getScene().updateActiveLayerForElem(e);
          var module = this._document.getEditor(),
            require = null,
            _interopRequireDefault = false;
          if (
            (e instanceof GCore.GItem
              ? (require = GCore.GItem)
              : e instanceof GCore.GLayer && (require = GCore.GLayer),
            require)
          ) {
            if (
              (jQuery(
                gDesigner
                  .getWindows()
                  .getActiveWindow()
                  .getView()
                  .getHtmlElement()
              )
                .find("> div[tabindex=0]")
                .focus(),
              r.GPlatform.modifiers.metaKey ||
                (!e.hasFlag(GCore.GNode.Flag.Selected) &&
                  !e.hasFlag(GCore.GElement.Flag.FullLocked) &&
                  !r.GPlatform.modifiers.shiftKey))
            )
              this._layerPanel.gLayerPanel("onlyUpdateStyle", true),
                module.updateSelection(r.GPlatform.modifiers.metaKey, [e]),
                this._layerPanel.gLayerPanel("onlyUpdateStyle", false),
                (_interopRequireDefault = true);
            else if (r.GPlatform.modifiers.shiftKey) {
              var GTools = module.getSelection(),
                GTouchTool = null;
              if (GTools && GTools.length) {
                for (var l = GTools.length - 1; l >= 0 && !GTouchTool; --l)
                  GTools[l] instanceof require && (GTouchTool = GTools[l]);
                if (GTouchTool && GTouchTool !== e) {
                  var c = [];
                  if (
                    (this._document.getScene().accept(
                      function (e) {
                        return e instanceof require && c.push(e), true;
                      },
                      false,
                      true
                    ),
                    c)
                  ) {
                    c = GCore.GNode.order(c);
                    var GDocumentEvent = [],
                      GDocumentStatusEvent = false,
                      p = null,
                      g = null;
                    for (l = 0; l < c.length && (null === p || null === g); ++l)
                      c[l] === GTouchTool || c[l] === e
                        ? ((GDocumentStatusEvent = !GDocumentStatusEvent),
                          GDocumentEvent.push(c[l]),
                          c[l] === GTouchTool ? (p = l) : (g = l))
                        : GDocumentStatusEvent && GDocumentEvent.push(c[l]);
                    var GSidebar = GTouchTool.getParent(),
                      y = e.getParent();
                    GDocumentEvent = GDocumentEvent.filter(
                      function (t) {
                        var n = this._layerPanel.gLayerPanel("getTreeNode", t);
                        if (e === t || GTouchTool === t) return true;
                        var _interopRequireDefault = this._layerPanel.gLayerPanel(
                          "getItem",
                          n.parent
                        );
                        return _interopRequireDefault ? GSidebar === _interopRequireDefault : t !== GSidebar && t !== y;
                      }.bind(this)
                    );
                    var GExportProperties = gDesigner.getSetting("auto_expand_layers");
                    gDesigner.setSetting("auto_expand_layers", false),
                      GDocumentEvent.length &&
                        (p > g && GDocumentEvent.reverse(),
                        module.updateSelection(false, GDocumentEvent),
                        (_interopRequireDefault = true)),
                      setTimeout(function () {
                        gDesigner.setSetting("auto_expand_layers", GExportProperties);
                      }, 50);
                  }
                } else module.updateSelection(false, [e]), (_interopRequireDefault = true);
              }
            } else
              e.hasFlag(GCore.GNode.Flag.Selected) &&
                (this._layerPanel.gLayerPanel("onlyUpdateStyle", true),
                module.clearSelection(),
                this._layerPanel.gLayerPanel("onlyUpdateStyle", false),
                (_interopRequireDefault = true));
            if (_interopRequireDefault)
              if (r.GPlatform.modifiers.optionKey)
                module.hasSelection()
                  ? gDesigner.executeAction(GFitSelectionAction.ID, undefined, "outlinesidebar")
                  : gDesigner.executeAction(GFitAllAction.ID, undefined, "outlinesidebar");
              else if (
                e.hasMixin(GCore.GNode.Properties) &&
                e.getProperty("collab")
              ) {
                const t = this._document && this._document.getActiveWindow();
                t && t.scrollIntoView(e.getGeometryBBox());
              }
          }
        }
      }),
      (x.prototype._deleteLayerOrItem = function () {
        gDesigner.stats("layers_delete_layer-or-item");
        var e = this._document.getEditor(),
          t = this._document.getScene(),
          n = t.getActiveLayer();
        e.hasSelection()
          ? GTools.GEditor.tryRunTransaction(
              t,
              function () {
                e.deleteSelection(true);
                var _interopRequireDefault = t.getActiveLayer();
                n &&
                  n === _interopRequireDefault &&
                  (n.acceptChildren(
                    function (e) {
                      return e instanceof GCore.GItem;
                    },
                    false,
                    true
                  ) ||
                    t.deleteActiveLayer(n));
              },
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "action.delete-layer-item")
              )
            )
          : n &&
            GTools.GEditor.tryRunTransaction(
              t,
              function () {
                t.deleteActiveLayer(n);
              },
              GCore.GLocale.get(
                new GCore.GLocaleKey("GOutlineSidebar", "action.delete-layer-item")
              )
            );
      }),
      (x.prototype._updateExport = function () {
        this._exportInstance.update(this._document, this._elements);
      }),
      (x.prototype._updateTransformMode = function (e) {
        e !== this._transformMode &&
          ((this._transformMode = e), this._updateExport());
      }),
      (x.prototype._afterFlagChangeEvent = function (e) {
        e.node instanceof GCore.GPage &&
          e.flag === GCore.GNode.Flag.Active &&
          (this._document.getEditor().hasSelection() || this._updateExport());
      }),
      (x.prototype._afterPropertiesChanged = function (e) {
        !e.temporary &&
          (e.node instanceof GCore.GScene || e.node instanceof GCore.GPage) &&
          GCore.GUtil.containsOneOf(e.properties, ["w", "h"]) &&
          this._refreshPageModeSwitch(this._getMultiPageSwitcher());
      }),
      (x.prototype._afterInsert = function (e) {
        var t = e.node;
        t instanceof GCore.GPage &&
          0 === t.getProperty("w") &&
          this._refreshPageModeSwitch(this._getMultiPageSwitcher());
      }),
      (x.prototype.toString = function () {
        return "[Object GOutlineSidebar]";
      }),
      (exports.exports = x);
  }