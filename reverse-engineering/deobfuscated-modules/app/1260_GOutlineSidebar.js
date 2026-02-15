/**
 * Webpack Module #1260
 * Type: class
 * Name: GOutlineSidebar
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(596) /* polyfill_Array_reverse */, require(30) /* polyfill_Object_assign */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var i = require(53) /* module */,
      a = require(1) /* module */,
      r = require(15) /* module */,
      s = o(require(340) /* GTouchTool */),
      l = require(67) /* GRichTooltipConfig */,
      c = o(require(442) /* module_442 */),
      d = require(78) /* GDocumentEvent */,
      u = require(217) /* GDocumentStatusEvent */,
      p = require(86) /* module_86 */,
      g = require(603) /* WindowEvent */,
      h = require(449) /* GFitAllAction */,
      f = require(566) /* GFitSelectionAction */,
      m = require(806) /* GSidebar */,
      y = require(395) /* module_395 */,
      v = require(1523) /* GExportProperties */,
      _ = require(44) /* GSystemDialog */,
      b = require(450) /* module_450 */;
    const w = require(808) /* GApplicationStatusEvent */,
      C = require(135) /* GSettingChangedEvent */;
    function x() {
      m.call(this);
    }
    a.GObject.inherit(x, m),
      (x.ID = "outline"),
      (x.TITLE = new a.GLocaleKey("GOutlineSidebar", "title")),
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
          new s.default({
            def: true,
            id: "pages",
            sidebar: this.getId(),
            icon: "gravit-icon-touch-pages-panel",
            panel: ".pages-container",
            toolbar: ".page-toolbar",
            panelWidth: "320px",
          }),
          new s.default({
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
          m.prototype.init.call(this, e),
          (this._pageToolbar = $("<div></div>")
            .addClass("toolbar page-toolbar")
            .append(
              $("<label></label>").text(
                a.GLocale.get(new a.GLocaleKey("GOutlineSidebar", "text.pages"))
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
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "action.toggle-page-mode")
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
                title: a.GLocale.get(
                  new a.GLocaleKey(
                    "GOutlineSidebar",
                    "text.multipage-tooltip-title"
                  )
                ),
                description: a.GLocale.get(
                  new a.GLocaleKey(
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
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "action.delete-active-page")
              )
            )
            .on("click", () => this._deletePage())
            .append($("<span></span>").addClass("gravit-icon-trash"))
            .appendTo(this._pageToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: a.GLocale.get(
                  new a.GLocaleKey(
                    "GOutlineSidebar",
                    "text.delete-page-tooltip-title"
                  )
                ),
                description: a.GLocale.get(
                  new a.GLocaleKey(
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
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "action.create-new-page")
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
                title: a.GLocale.get(
                  new a.GLocaleKey(
                    "GOutlineSidebar",
                    "text.create-new-page-tooltip-title"
                  )
                ),
                description: a.GLocale.get(
                  new a.GLocaleKey(
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
          o = $("<div></div>").addClass("pages-container").appendTo(e);
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
          .appendTo(o)),
          this._pagePanel.gPagePanel({
            moveCallback: this._movePageTreeNodeCallback.bind(this),
            clickCallback: this._clickPageTreeNodeCallback.bind(this),
            startDraggingCallback: this._startPageDraggingCallback.bind(this),
          });
        var r = false,
          s = $("<div/>").attr("id", "page-layer-divider"),
          c = function (e) {
            var i;
            r &&
              ((i = n - t + e.clientY) < this._pageContainerMinHeight &&
                (i = this._pageContainerMinHeight),
              i > this._pageContainerMaxHeight &&
                (i = this._pageContainerMaxHeight),
              o.css("height", i + "px"));
          }.bind(this),
          u = function () {
            $(document).off("mousemove", c),
              $(document).off("mouseup", u),
              (r = false),
              (t = null),
              (n = null),
              e.removeClass("page-container-resizing");
          },
          p = function (i) {
            (t = i.clientY),
              (r = true),
              (n = parseInt(o.css("height"), 10)),
              e.addClass("page-container-resizing"),
              $(document).on("mousemove", c),
              $(document).on("mouseup", u);
          }.bind(this);
        $(s).on("mousedown", p),
          s.appendTo(e),
          $("<hr />").appendTo(s),
          s.append($("<div />")),
          this._addLayerPanel(e),
          $("<hr/>").appendTo(e),
          (this._exportToolbar = $("<div></div>")
            .addClass("toolbar toolbar-export")
            .appendTo(e)),
          (this._exportPanel = $("<div></div>")
            .addClass("properties-panel")
            .addClass("export-panel")
            .appendTo(e)),
          (this._exportInstance = new v()),
          this._exportInstance.init(this._exportPanel, this._exportToolbar),
          gDesigner.addEventListener(d, this._documentEvent, this),
          gDesigner
            .getToolManager()
            .addEventListener(
              i.GToolManager.ToolChangedEvent,
              this._toolChangedEvent,
              this
            ),
          gDesigner.addEventListener(w, this._applicationStatusEvent, this),
          gDesigner.addEventListener(C, this._settingChanged, this),
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
        const o = a.GLocale.get(
          new a.GLocaleKey("GOutlineSidebar", "action.toggle-page-mode")
        );
        this._document.getEditor().pushState(
          o,
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
        e.status === w.Status.Ready && this._touchInterfaceUpdate();
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
                  a.GLocale.get(
                    new a.GLocaleKey("GOutlineSidebar", "text.layers")
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
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "action.delete-layer-item")
              )
            )
            .on("click", () => this._deleteLayerOrItem())
            .append($("<span></span>").addClass("gravit-icon-trash"))
            .appendTo(this._layerToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: a.GLocale.get(
                  new a.GLocaleKey(
                    "GOutlineSidebar",
                    "text.delete-layer-tooltip-title"
                  )
                ),
                description: a.GLocale.get(
                  new a.GLocaleKey(
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
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "action.new-layer")
              )
            )
            .on("click", () => this.insertLayer())
            .append($("<span></span>").addClass("gravit-icon-addlayer"))
            .appendTo(this._layerToolbar)
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: a.GLocale.get(
                  new a.GLocaleKey(
                    "GOutlineSidebar",
                    "text.new-layer-tooltip-title"
                  )
                ),
                description: a.GLocale.get(
                  new a.GLocaleKey(
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
                      e.hasFlag(a.GNode.Flag.Highlighted) &&
                        e.removeFlag(a.GNode.Flag.Highlighted),
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
                    gDesigner.executeAction(h.ID, undefined, "outlinesidebar");
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
        e.type === d.Type.Activated
          ? ((this._document = e.document),
            (t = this._document.getScene()),
            this._pagePanel.gPagePanel("scene", t),
            this._layerPanel.gLayerPanel("scene", t),
            this.trigger(m.UPDATE_EVENT),
            this._document.getStatus() === p.Ready ||
            this._document.getStatus() === p.Loaded
              ? this._document.getActiveWindow()
                ? this._updateMultiPageMode()
                : gDesigner
                    .getWindows()
                    .addEventListener(g.WindowEvent, this._windowsEvent, this)
              : this._document.addEventListener(
                  u,
                  this._documentStatusEvent,
                  this
                ),
            (n = this._document.getEditor()),
            gDesigner
              .getToolManager()
              .addEventListener(
                i.GToolManager.ToolChangedEvent,
                this._updateExport,
                this
              ),
            n.addEventListener(
              i.GEditor.SelectionChangedEvent,
              this._updateExport,
              this
            ),
            t.addEventListener(
              a.GNode.AfterFlagChangeEvent,
              this._afterFlagChangeEvent,
              this
            ),
            t.addEventListener(
              a.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChanged,
              this
            ),
            t.addEventListener(
              a.GNode.AfterInsertEvent,
              this._afterInsert,
              this
            ),
            this._updateExport())
          : e.type === d.Type.Deactivated &&
            (this._pagePanel.gPagePanel("scene", null),
            this._layerPanel.gLayerPanel("scene", null),
            (t = this._document.getScene()),
            (n = this._document.getEditor()),
            gDesigner
              .getToolManager()
              .removeEventListener(
                i.GToolManager.ToolChangedEvent,
                this._updateExport,
                this
              ),
            gDesigner
              .getWindows()
              .removeEventListener(g.WindowEvent, this._windowsEvent, this),
            n.removeEventListener(
              i.GEditor.SelectionChangedEvent,
              this._updateExport,
              this
            ),
            t.removeEventListener(
              a.GNode.AfterFlagChangeEvent,
              this._afterFlagChangeEvent,
              this
            ),
            t.removeEventListener(
              a.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChanged,
              this
            ),
            t.removeEventListener(
              a.GNode.AfterInsertEvent,
              this._afterInsert,
              this
            ),
            this._document.removeEventListener(
              u,
              this._documentStatusEvent,
              this
            ),
            (this._document = null),
            (this._elements = null),
            this._updateExport(),
            this.trigger(m.UPDATE_EVENT));
      }),
      (x.prototype._documentStatusEvent = function (e) {
        (e.status !== p.Ready && e.status !== p.Loaded) ||
          (this._updateMultiPageMode(),
          this._document.removeEventListener(
            u,
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
          t instanceof i.GSelectTool &&
          (e.light || this._updateTransformMode(false),
          t.removeEventListener(
            i.GSelectTool.Event,
            this._selectToolEvent,
            this
          )),
          this._activeTool(n);
      }),
      (x.prototype._activeTool = function (e) {
        e &&
          e instanceof i.GSelectTool &&
          e.addEventListener(i.GSelectTool.Event, this._selectToolEvent, this);
      }),
      (x.prototype._selectToolEvent = function (e) {
        e.type === i.GSelectTool.Event.Type.EditModeChanged &&
          this._updateTransformMode(
            e.args.mode === i.GSelectTool.EditMode.Transform
          );
      }),
      (x.prototype._insertPage = function () {
        if (gDesigner.getApplicationManager().isEditingEnabled()) {
          gDesigner.stats("pages_insert_page");
          var exports = this._document.getScene();
          i.GEditor.tryRunTransaction(
            exports,
            function () {
              var t = exports.insertPage();
              exports.setActivePage(t);
            },
            a.GLocale.get(
              new a.GLocaleKey("GOutlineSidebar", "action.insert-page")
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
        const o = !this.sceneHasInfiniteCanvas();
        if (!this.isEnabled())
          return e.attr("data-title", ""), void e.prop("disabled", true);
        e.prop("disabled", false);
        var i = this._document.getActiveWindow(),
          r = i.getView();
        (o ||
          (e.is(":checked") && e.prop("checked", false),
          module &&
            _.alert(
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "text.multipage-alert")
              )
            ),
          r.getViewConfiguration().multiPageView ||
            r.getViewConfiguration().pageLabelsVisible)) &&
          ((r.getViewConfiguration().multiPageView = e.is(":checked")),
          (r.getViewConfiguration().pageLabelsVisible = e.is(":checked")),
          require ||
            (r.invalidate(null, true),
            module && (i.centerAndZoom(), this._refreshSelection())));
      }),
      (x.prototype._deletePage = function () {
        gDesigner.stats("pages_delete_page");
        this._document.getEditor();
        var e = this._document.getScene(),
          t = e.getActivePage();
        t.getProperty("plkt") & a.GBlock.ProgramLck.NoDelete ||
          (t.getSlavePages().length > 0
            ? _.confirm(
                a.GLocale.get(
                  new a.GLocaleKey(
                    "GOutlineSidebar",
                    "text.confirm-delete-masterpage"
                  )
                ),
                function (t) {
                  t &&
                    i.GEditor.tryRunTransaction(
                      e,
                      function () {
                        e.deleteActivePage();
                      },
                      a.GLocale.get(
                        new a.GLocaleKey(
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
            : i.GEditor.tryRunTransaction(
                e,
                function () {
                  e.deleteActivePage();
                },
                a.GLocale.get(
                  new a.GLocaleKey("GOutlineSidebar", "action.delete-page")
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
          o = t.getActivePage(),
          a = null;
        if (e.hasSelection()) {
          var r = e.getSelection();
          n
            ? e.updateSelection(false, [o])
            : (a = r.filter(function (e) {
                return i.GEditor.getElementPage(e) === o;
              })).length !== r.length && e.updateSelection(false, a);
        } else n && e.updateSelection(false, [o]);
      }),
      (x.prototype._movePageTreeNodeCallback = function (e, t, n) {
        if (n && e && n.length) {
          this._pagePanel.gPagePanel("blockHandlers", true);
          var o = this._document.getScene();
          i.GEditor.tryRunTransaction(
            this._document.getScene(),
            function () {
              this._document.getEditor().clearSelection(),
                o.startBlockReferenceChanges(),
                n.length > 1 && e.beginUpdate();
              for (var i = n.length; i > 0; --i) {
                var a = n[i - 1];
                a.getParent().removeChild(a), e.insertChild(a, t);
              }
              n.length > 1 && e.endUpdate(),
                o.endBlockReferenceChanges(),
                o.isEvenOddMaster() && o.reassignMasterPages();
            }.bind(this),
            a.GLocale.get(
              new a.GLocaleKey("GOutlineSidebar", "action.move-page")
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
          if (e.hasFlag(a.GNode.Flag.Selected)) {
            var o = require.getSelection();
            t = this._filterPageDraggable(o);
            t = a.GNode.order(t, true);
          } else require.clearSelection(), t.push(e);
        }
        return t;
      }),
      (x.prototype._filterPageDraggable = function (e) {
        var t = [];
        if (e)
          for (var require = 0; require < e.length; ++require) {
            var o = e[require];
            o instanceof a.GPage &&
              !o.hasFlag(a.GElement.Flag.PartialLocked) &&
              t.push(o);
          }
        return t;
      }),
      (x.prototype.changeActivePage = function (e) {
        gDesigner.stats("pages_select_page");
        const module = this._document,
          require = module && module.getScene();
        require &&
          e &&
          i.GEditor.tryRunTransaction(
            require,
            () => {
              require.setActivePage(e),
                this._navigateDrawingCenter(e),
                this._refreshSelection();
            },
            a.GLocale.get(
              new a.GLocaleKey("GOutlineSidebar", "action.change-active-page")
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
            o = e.getGeometryBBox();
          r = require.mapRect(o).getSide(a.GRect.Side.CENTER);
          t.zoomAtCenter(r);
        } else if (this._document.hasCDR()) {
          var i = e.getContentBBox();
          if (i && !i.isEmpty()) {
            var r = i.getSide(a.GRect.Side.CENTER);
            t.zoomAtCenter(r);
          }
        }
      }),
      (x.prototype.createLayer = function () {
        const exports = this._document.getScene(),
          module = new a.GLayer();
        return (
          module.setProperty(
            "name",
            a.GLocale.get(new a.GLocaleKey("GOutlineSidebar", "text.layer")) +
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
        i.GEditor.tryRunTransaction(
          exports,
          () => {
            const module = gDesigner.getActiveDocument(),
              require = module && module.getEditor(),
              o = (require && require.getSelection()) || [];
            let i = exports.getActivePage();
            i || ((i = exports.insertPage()), i.setFlag(a.GNode.Flag.Active));
            const r = this.createLayer(),
              s = o.filter((e) => !this._hasSelectedParentLayer(e)),
              l = a.GNode.order(s, true),
              c = l && l[0];
            ((c && c.getParent()) || i).insertChild(r, c),
              exports.setActiveLayer(r),
              this._moveLayers(r, null, s, false);
          },
          a.GLocale.get(
            new a.GLocaleKey("GOutlineSidebar", "action.insert-layer")
          )
        );
      }),
      (x.prototype._hasSelectedParentLayer = function (e) {
        let module = false;
        for (
          let require = e.getParent();
          require instanceof a.GLayer && !module;
          require = require.getParent()
        )
          require.hasFlag(a.GNode.Flag.Selected) && (module = true);
        return module;
      }),
      (x.prototype._moveLayerTreeNodeCallback = function (e, t, n, o) {
        const r = this._document.getScene();
        i.GEditor.tryRunTransaction(
          r,
          () => {
            this._moveLayers(e, t, n, o);
          },
          a.GLocale.get(
            new a.GLocaleKey("GOutlineSidebar", "action.move-layer")
          )
        );
      }),
      (x.prototype._moveLayers = function (e, t, n) {
        let o =
          !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3];
        if (!(e && e.hasMixin(a.GNode.Container) && n && n.length)) return;
        if (
          !(n = n
            .slice()
            .filter((e) =>
              i.GEditor.validateBlockInsertion(e.getParent(), e, t)
            )).length
        )
          return;
        o && this._layerPanel.gLayerPanel("blockHandlers", true);
        const s = this._document.getScene();
        this._document.getEditor().clearSelection(),
          s.startBlockReferenceChanges(),
          n.length > 1 && e.beginUpdate(),
          n.forEach((n) => {
            r.GPlatform.modifiers.optionKey
              ? n.hasMixin(a.GNode.Store) && (n = n.clone())
              : n.getParent().removeChild(n),
              n &&
                (e.insertChild(n, t),
                e instanceof a.GCompoundShape && n.assignStyleFrom(e));
          }),
          n.length > 1 && e.endUpdate(),
          s.endBlockReferenceChanges(),
          this._document.getEditor().updateSelection(false, n),
          o && this._layerPanel.gLayerPanel("blockHandlers", false);
      }),
      (x.prototype._isDuplicateEffectCallback = function (e) {
        return e.altKey;
      }),
      (x.prototype._duplicateLayerTreeNodeCallback = function (e, t, n) {
        if (n && e && e.hasMixin(a.GNode.Container) && n.length) {
          this._layerPanel.gLayerPanel("blockHandlers", false);
          var o = this._document.getScene();
          i.GEditor.tryRunTransaction(
            o,
            function () {
              this._document.getEditor().clearSelection(),
                n.length > 1 && e.beginUpdate();
              for (var o = [], r = 0; r < n.length; ++r) {
                var s = n[r];
                s.validateInsertion(e) &&
                  s.hasMixin(a.GNode.Store) &&
                  i.GEditor.validateBlockInsertion(e, s) &&
                  (s = s.clone()) &&
                  o.push(s);
              }
              if (
                (this._document
                  .getEditor()
                  .insertElements(o, true, true, false, true, e, t),
                e instanceof a.GCompoundShape)
              )
                for (var l = 0; l < o.length; ++l) o[l].assignStyleFrom(e);
              else if (e instanceof a.GShape) {
                var c = e.getPaintBBox();
                if (c) {
                  var d = c.getX(),
                    u = c.getY();
                  for (r = 0; r < o.length; ++r) {
                    var p = o[r],
                      g = p instanceof a.GElement ? p.getPaintBBox() : null;
                    if (g && !c.intersectsRect(g, true)) {
                      var h = g.getX(),
                        f = g.getY();
                      null === d ||
                        null === h ||
                        (a.GMath.isEqualEps(d, h) &&
                          a.GMath.isEqualEps(u, f)) ||
                        p.transform(
                          new a.GTransform(1, 0, 0, 1, d - h, u - f),
                          true
                        );
                    }
                  }
                }
              }
              n.length > 1 && e.endUpdate(),
                this._document.getEditor().updateSelection(false, o);
            }.bind(this),
            a.GLocale.get(
              new a.GLocaleKey("GOutlineSidebar", "action.move-layer")
            )
          );
        }
      }),
      (x.prototype._startLayerDraggingCallback = function (e) {
        var t = null;
        if (e) {
          gDesigner.stats("layers_start_drag"), (t = []);
          var require = this._document.getEditor();
          if (e.hasFlag(a.GNode.Flag.Selected)) {
            var o = require.getSelection();
            (t = this._filterLayerDraggable(o)), (t = a.GNode.order(t, true));
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
            var o = e[require];
            if (!o.hasFlag(a.GElement.Flag.PartialLocked)) {
              for (
                var i = false, r = o.getParent();
                null != r && !i;
                r = r.getParent()
              )
                i = r.hasFlag(a.GNode.Flag.Selected);
              i || t.push(o);
            }
          }
        return t;
      }),
      (x.prototype._clickLayerTreeNodeCallback = function (e) {
        if (e) {
          e instanceof a.GCollabText
            ? gDesigner.stats("layers_select_collab-text")
            : gDesigner.stats("layers_select_layer"),
            this._document.getScene().updateActivePageForElem(e),
            this._document.getScene().updateActiveLayerForElem(e);
          var module = this._document.getEditor(),
            require = null,
            o = false;
          if (
            (e instanceof a.GItem
              ? (require = a.GItem)
              : e instanceof a.GLayer && (require = a.GLayer),
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
                (!e.hasFlag(a.GNode.Flag.Selected) &&
                  !e.hasFlag(a.GElement.Flag.FullLocked) &&
                  !r.GPlatform.modifiers.shiftKey))
            )
              this._layerPanel.gLayerPanel("onlyUpdateStyle", true),
                module.updateSelection(r.GPlatform.modifiers.metaKey, [e]),
                this._layerPanel.gLayerPanel("onlyUpdateStyle", false),
                (o = true);
            else if (r.GPlatform.modifiers.shiftKey) {
              var i = module.getSelection(),
                s = null;
              if (i && i.length) {
                for (var l = i.length - 1; l >= 0 && !s; --l)
                  i[l] instanceof require && (s = i[l]);
                if (s && s !== e) {
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
                    c = a.GNode.order(c);
                    var d = [],
                      u = false,
                      p = null,
                      g = null;
                    for (l = 0; l < c.length && (null === p || null === g); ++l)
                      c[l] === s || c[l] === e
                        ? ((u = !u),
                          d.push(c[l]),
                          c[l] === s ? (p = l) : (g = l))
                        : u && d.push(c[l]);
                    var m = s.getParent(),
                      y = e.getParent();
                    d = d.filter(
                      function (t) {
                        var n = this._layerPanel.gLayerPanel("getTreeNode", t);
                        if (e === t || s === t) return true;
                        var o = this._layerPanel.gLayerPanel(
                          "getItem",
                          n.parent
                        );
                        return o ? m === o : t !== m && t !== y;
                      }.bind(this)
                    );
                    var v = gDesigner.getSetting("auto_expand_layers");
                    gDesigner.setSetting("auto_expand_layers", false),
                      d.length &&
                        (p > g && d.reverse(),
                        module.updateSelection(false, d),
                        (o = true)),
                      setTimeout(function () {
                        gDesigner.setSetting("auto_expand_layers", v);
                      }, 50);
                  }
                } else module.updateSelection(false, [e]), (o = true);
              }
            } else
              e.hasFlag(a.GNode.Flag.Selected) &&
                (this._layerPanel.gLayerPanel("onlyUpdateStyle", true),
                module.clearSelection(),
                this._layerPanel.gLayerPanel("onlyUpdateStyle", false),
                (o = true));
            if (o)
              if (r.GPlatform.modifiers.optionKey)
                module.hasSelection()
                  ? gDesigner.executeAction(f.ID, undefined, "outlinesidebar")
                  : gDesigner.executeAction(h.ID, undefined, "outlinesidebar");
              else if (
                e.hasMixin(a.GNode.Properties) &&
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
          ? i.GEditor.tryRunTransaction(
              t,
              function () {
                e.deleteSelection(true);
                var o = t.getActiveLayer();
                n &&
                  n === o &&
                  (n.acceptChildren(
                    function (e) {
                      return e instanceof a.GItem;
                    },
                    false,
                    true
                  ) ||
                    t.deleteActiveLayer(n));
              },
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "action.delete-layer-item")
              )
            )
          : n &&
            i.GEditor.tryRunTransaction(
              t,
              function () {
                t.deleteActiveLayer(n);
              },
              a.GLocale.get(
                new a.GLocaleKey("GOutlineSidebar", "action.delete-layer-item")
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
        e.node instanceof a.GPage &&
          e.flag === a.GNode.Flag.Active &&
          (this._document.getEditor().hasSelection() || this._updateExport());
      }),
      (x.prototype._afterPropertiesChanged = function (e) {
        !e.temporary &&
          (e.node instanceof a.GScene || e.node instanceof a.GPage) &&
          a.GUtil.containsOneOf(e.properties, ["w", "h"]) &&
          this._refreshPageModeSwitch(this._getMultiPageSwitcher());
      }),
      (x.prototype._afterInsert = function (e) {
        var t = e.node;
        t instanceof a.GPage &&
          0 === t.getProperty("w") &&
          this._refreshPageModeSwitch(this._getMultiPageSwitcher());
      }),
      (x.prototype.toString = function () {
        return "[Object GOutlineSidebar]";
      }),
      (exports.exports = x);
  }