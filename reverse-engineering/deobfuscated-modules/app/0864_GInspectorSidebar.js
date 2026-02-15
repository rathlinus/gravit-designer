/**
 * Webpack Module #864
 * Type: class
 * Name: GInspectorSidebar
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(168) /* polyfill_Array_reduce */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(169) /* stub_requires_683 */, require(26) /* polyfill_DOMCollection_iterator */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GPanel = require(606) /* GPanel */,
      GSidebar = require(806) /* GSidebar */,
      GSidebarContainer = require(395) /* GSidebarContainer */,
      c = require(1160) /* GAppearanceProperties */,
      GFillProperties = require(1261) /* GFillProperties */,
      GBorderProperties = require(1162) /* GBorderProperties */,
      GEffectProperties = require(1262) /* GEffectProperties */,
      GBoolOpProperties = require(1264) /* GBoolOpProperties */,
      GEllipseProperties = require(1265) /* GEllipseProperties */,
      GImageProperties = require(1266) /* GImageProperties */,
      GPathProperties = require(1269) /* GPathProperties */,
      GPolygonProperties = require(1270) /* GPolygonProperties */,
      GRectangleProperties = require(1271) /* GRectangleProperties */,
      GSliceProperties = require(1272) /* GSliceProperties */,
      GTextProperties = require(1273) /* GTextProperties */,
      GAlignProperties = require(1274) /* GAlignProperties */,
      GVersionHistoryProperties = require(1528) /* GVersionHistoryProperties */,
      GEvent_fileId = require(1159) /* GEvent_fileId */;
    const GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
      GOutlineSidebar = require(198) /* Exports_GOutlineSidebar */,
      GEvent_type = require(807) /* GEvent_type */;
    function T() {
      GSidebar.call(this), (this._propertyPanels = []), (this._touchTools = []);
    }
    GCore.GObject.inherit(T, GSidebar),
      (T.ACCORDIONS = [
        c.prototype.toString(),
        GFillProperties.prototype.toString(),
        GBorderProperties.prototype.toString(),
        GEffectProperties.prototype.toString(),
      ]),
      (T.APPEARANCE_PROPERTIES = [
        GAlignProperties.prototype.toString(),
        GPolygonProperties.prototype.toString(),
        GPathProperties.prototype.toString(),
        GEllipseProperties.prototype.toString(),
        GTextProperties.prototype.toString(),
        GImageProperties.prototype.toString(),
        GRectangleProperties.prototype.toString(),
        GSliceProperties.prototype.toString(),
        GBoolOpProperties.prototype.toString(),
        c.prototype.toString(),
      ]),
      (T.ID = GOutlineSidebar.SidebarsIds.GInspectorSidebar),
      (T.TITLE = new GCore.GLocaleKey("GInspectorSidebar", "title")),
      (T.prototype._touchTools = null),
      (T.prototype._htmlElement = null),
      (T.prototype._propertyPanels = null),
      (T.prototype._document = null),
      (T.prototype._elements = null),
      (T.prototype._transformMode = false),
      (T.prototype._appearancePanel = null),
      (T.prototype._versionHistoryPanel = null),
      (T.prototype._versionHistoryProperties = null),
      (T.prototype._versionHistoryMode = false),
      (T.prototype.getId = function () {
        return T.ID;
      }),
      (T.prototype.getTitle = function () {
        return T.TITLE;
      }),
      (T.prototype.isEnabled = function () {
        return !!this._document;
      }),
      (T.prototype.isVisible = function () {
        return !(
          !gDesigner.getApplicationManager().isInspectEnabled() &&
          gDesigner.getActiveDocument()
        );
      }),
      (T.prototype.getOrientation = function () {
        return GSidebarContainer.Orientation.Right;
      }),
      (T.prototype.getMinimumWidth = function () {
        return 300;
      }),
      (T.prototype.isResizeable = function () {
        return false;
      }),
      (T.prototype.getDefaultWidth = function () {
        return 300;
      }),
      (T.prototype.init = function (e) {
        GSidebar.prototype.init.call(this, e), (this._htmlElement = e);
        var t = $("<div></div>")
            .addClass("panels scrolling-panels")
            .appendTo(this._htmlElement),
          n = $("<div></div>")
            .addClass("panels sticky-panels")
            .appendTo(this._htmlElement),
          GTools = $("<div></div>").addClass("toolbar appearance-toolbar");
        (this._appearancePanel = $("<div></div>")
          .css("display", "none")
          .addClass("properties-panel")
          .addClass("appearance-properties-panel")),
          $("<label></label>")
            .addClass("appearance-toolbar-title")
            .text(
              GCore.GLocale.get(new GCore.GLocaleKey("GAppearanceProperties", "title"))
            )
            .appendTo(GTools);
        for (
          var GDocumentEvent = function (e) {
              var GCore = e.isSticky() ? n : t,
                GDocumentEvent = $("<div></div>")
                  .css("display", "none")
                  .addClass("properties-panel"),
                GPanel = $("<hr/>"),
                GSidebar = $("<div></div>").addClass("toolbar");
              if ($.inArray(e.toString(), T.APPEARANCE_PROPERTIES) > -1) {
                var GSidebarContainer = $("<div></div>").addClass("appearance-property-panel");
                e.init(GSidebarContainer, GTools),
                  GPanel.appendTo(GSidebarContainer),
                  this._appearancePanel.append(GSidebarContainer),
                  GTools.appendTo(GCore),
                  this._appearancePanel.appendTo(GCore),
                  (GSidebar = GTools),
                  (GDocumentEvent = GSidebarContainer);
              } else
                GPanel.appendTo(GCore),
                  e.init(GDocumentEvent, GSidebar),
                  "" !== GSidebar.html() ? GSidebar.appendTo(GCore) : (GSidebar = null),
                  GDocumentEvent.appendTo(GCore);
              this._propertyPanels.push({
                panel: GDocumentEvent,
                toolbar: GSidebar,
                divider: GPanel,
                properties: e,
              });
            }.bind(this),
            GPanel = 0;
          GPanel < gravit.properties.length;
          ++GPanel
        )
          GDocumentEvent(gravit.properties[GPanel]);
        this._activeTool(gDesigner.getToolManager().getActiveTool()),
          this._updatePropertyPanels(),
          this._initVersionHistoryPanel(),
          gDesigner
            .getRightSidebars()
            .addEventListener(GEvent_type, this._sidebarEvent, this),
          gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this);
      }),
      (T.prototype._getPropertyPanel = function (e) {
        return (
          this._propertyPanels.find((t) => t.properties instanceof e) || null
        );
      }),
      (T.prototype.openFillPatternChooser = function () {
        const exports = this._getPropertyPanel(GFillProperties);
        exports && exports.properties.openPatternChooser();
      }),
      (T.prototype.openBorderPatternChooser = function () {
        const exports = this._getPropertyPanel(GBorderProperties);
        exports && exports.properties.openPatternChooser();
      }),
      (T.prototype.openFillEyeDropper = function (e, t) {
        const require = this._getPropertyPanel(GFillProperties);
        require && require.properties.openEyeDropper(e, t);
      }),
      (T.prototype.openBorderEyeDropper = function (e, t) {
        const require = this._getPropertyPanel(GBorderProperties);
        require && require.properties.openEyeDropper(e, t);
      }),
      (T.prototype.openTextColorEyeDropper = function (e, t) {
        const require = this._getPropertyPanel(GTextProperties);
        require && require.properties.openEyeDropper(e, t);
      }),
      (T.prototype.setPathPointsNodeType = function (e) {
        const module = this._getPropertyPanel(GPathProperties);
        module && module.properties.assignNodeType(e);
      }),
      (T.prototype._sidebarEvent = function (e) {
        gDesigner.isTouchEnabled() &&
          e.type === GEvent_type.Type.Activated &&
          e.sidebar &&
          e.sidebar.getId() === GOutlineSidebar.SidebarsIds.GAnnotationsSidebar &&
          this._updatePropertyPanels();
      }),
      (T.prototype.activate = function () {
        gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
          gDesigner
            .getToolManager()
            .addEventListener(
              GTools.GToolManager.ToolChangedEvent,
              this._toolChangedEvent,
              this
            );
        var e = gDesigner.getActiveDocument();
        e && this._activateDocument(e);
      }),
      (T.prototype.deactivate = function () {
        gDesigner.removeEventListener(GDocumentEvent, this._documentEvent, this),
          gDesigner
            .getToolManager()
            .removeEventListener(
              GTools.GToolManager.ToolChangedEvent,
              this._toolChangedEvent,
              this
            ),
          this._document && this._deactivateDocument();
      }),
      (T.prototype._initVersionHistoryPanel = function () {
        this._versionHistoryPanel = $("<div />")
          .css("display", "none")
          .addClass("panels history-panel")
          .appendTo(this._htmlElement);
        var e = $("<div></div>").addClass(
            "properties-panel version-history-panel"
          ),
          t = $("<div></div>").addClass("toolbar");
        (this._versionHistoryProperties = new GVersionHistoryProperties()),
          this._versionHistoryProperties.init(e, t),
          this._versionHistoryPanel.append(t).append(e),
          gDesigner.addEventListener(GEvent_fileId, this._updateVersionsPanel, this);
      }),
      (T.prototype._updateVersionsPanel = function (e) {
        if (e.type === GEvent_fileId.Type.Enable) {
          var module;
          switch (((this._versionHistoryMode = true), this.getOrientation())) {
            case GSidebarContainer.Orientation.Left:
              module = gDesigner.getLeftSidebars();
              break;
            case GSidebarContainer.Orientation.Right:
              module = gDesigner.getRightSidebars();
          }
          module.setActiveSidebar(this.getId()),
            gDesigner.setPartVisible(module.getSidebarsPart(), true),
            this._htmlElement.find(".panels").css("display", "none"),
            this._versionHistoryPanel.appendTo(this._htmlElement),
            this._versionHistoryPanel.css("display", "");
        } else
          e.type === GEvent_fileId.Type.Disable &&
            ((this._versionHistoryMode = false),
            this._htmlElement.find(".panels").css("display", ""),
            this._versionHistoryPanel.css("display", "none"),
            this._updatePropertyPanels(false));
        gDesigner.isTouchEnabled() && this._updateVersionsPanelTouch();
      }),
      (T.prototype._documentEvent = function (e) {
        e.type === GDocumentEvent.Type.Activated
          ? this._activateDocument(e.document)
          : e.type === GDocumentEvent.Type.Deactivated
          ? this._deactivateDocument()
          : e.type === GDocumentEvent.Type.StorageItemUpdated &&
            this._updatePropertyPanels(false, e.data ? e.data : null);
      }),
      (T.prototype._activateDocument = function (e) {
        this._document && this._deactivateDocument(), (this._document = e);
        var t = this._document.getScene(),
          n = this._document.getEditor();
        gDesigner
          .getToolManager()
          .addEventListener(
            GTools.GToolManager.ToolChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          n.addEventListener(
            GTools.GEditor.SelectionChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          t.addEventListener(
            GCore.GNode.AfterFlagChangeEvent,
            this._afterFlagChangeEvent,
            this
          ),
          this._updateFromToolOrSelection(),
          this.trigger(GPanel.UPDATE_EVENT);
      }),
      (T.prototype._deactivateDocument = function () {
        var e = this._document.getScene(),
          t = this._document.getEditor();
        gDesigner
          .getToolManager()
          .removeEventListener(
            GTools.GToolManager.ToolChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          t.removeEventListener(
            GTools.GEditor.SelectionChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          e.removeEventListener(
            GCore.GNode.AfterFlagChangeEvent,
            this._afterFlagChangeEvent,
            this
          ),
          (this._document = null),
          (this._elements = null),
          this._updatePropertyPanels(true),
          this.trigger(GPanel.UPDATE_EVENT);
      }),
      (T.prototype._toolChangedEvent = function (e) {
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
      (T.prototype._activeTool = function (e) {
        e &&
          e instanceof GTools.GSelectTool &&
          e.addEventListener(GTools.GSelectTool.Event, this._selectToolEvent, this);
      }),
      (T.prototype._selectToolEvent = function (e) {
        e.type === GTools.GSelectTool.Event.Type.EditModeChanged &&
          this._updateTransformMode(
            e.args.mode === GTools.GSelectTool.EditMode.Transform
          );
      }),
      (T.prototype._updateTransformMode = function (e) {
        e !== this._transformMode &&
          ((this._transformMode = e), this._updatePropertyPanels(false));
      }),
      (T.prototype._afterFlagChangeEvent = function (e) {
        e.node instanceof GCore.GPage &&
          e.flag === GCore.GNode.Flag.Active &&
          !this._document.getEditor().hasSelection() &&
          this._updateFromToolOrSelection();
      }),
      (T.prototype._updateFromToolOrSelection = function (e) {
        var t = this._document.getEditor();
        if (
          this._document &&
          t &&
          ((this._elements = t.getSelection()),
          this._elements &&
            this._elements.length &&
            (this._elements = t.filterIndividualElements(
              this._elements.filter((e) => !e.hasMixin(GCore.GAnnotation))
            )),
          !this._elements || 0 === this._elements.length)
        ) {
          var require = gDesigner.getToolManager().getActiveTool(),
            GDocumentEvent = null;
          require instanceof GTools.GItemTool && (GDocumentEvent = require.getDefaultStyle())
            ? (this._elements = [GDocumentEvent])
            : (this._elements = [this._document.getScene().getActivePage()]);
        }
        this._updatePropertyPanels(false);
      }),
      (T.prototype._updatePropertyPanels = function (e, t) {
        var n = false,
          GTools = null,
          GCore = null;
        this._touchTools = [];
        for (var GDocumentEvent = 0; GDocumentEvent < this._propertyPanels.length; ++GDocumentEvent) {
          var GPanel = this._propertyPanels[GDocumentEvent],
            GSidebar = GPanel.properties,
            GSidebarContainer = GSidebar.isAvailable(this._transformMode);
          if (
            (GSidebarContainer &&
              (GSidebarContainer = GPanel.properties.update(
                e ? null : this._document,
                this._elements ? this._elements : null,
                t || null
              )),
            GSidebarContainer)
          ) {
            const e = GPanel.properties.getTouchTools();
            e && (this._touchTools = this._touchTools.concat(e));
          }
          GPanel.panel.css("display", GSidebarContainer ? "" : "none"),
            GPanel.toolbar &&
              (GPanel.toolbar.css("display", GSidebarContainer ? "" : "none"),
              GSidebar instanceof GSliceProperties && GSidebarContainer && (GCore = GPanel.toolbar),
              $.inArray(GPanel.properties.toString(), T.ACCORDIONS) > -1 &&
                GSidebarContainer &&
                (GPanel.toolbar
                  .addClass("appearance-panel-toggle-btn")
                  .gAccordion("init", ".properties-panel", "label"),
                this._htmlElement
                  .find(".appearance-panel-toggle-btn button.g-accordion")
                  [gDesigner.isTouchEnabled() ? "hide" : "show"]()));
          var c = GSidebarContainer && n && GSidebar.isGroup(GTools);
          GPanel.divider.css("display", c ? "" : "none"),
            (n = n || GSidebarContainer),
            GSidebarContainer && ((GTools = GSidebar), this._appearancePanel.css("display", ""));
          const GFillProperties = this._isPropertiesEnabled(GPanel.properties);
          GPanel.toolbar && GPanel.toolbar.toggleClass("g-disabled", !GFillProperties),
            GPanel.panel && GPanel.panel.toggleClass("g-disabled", !GFillProperties);
        }
        GCore && gDesigner.isTouchEnabled() && GCore.css("display", "");
        var GFillProperties = $("<hr/>").addClass("appearance-divider");
        0 === $(".appearance-divider").length &&
          $(".appearance-toolbar:first").before(GFillProperties),
          $(".appearance-divider").css(
            "display",
            "none" === $(".appearance-toolbar:first").css("display")
              ? "none"
              : ""
          ),
          $(".appearance-properties-panel >div >hr:visible:last").css(
            "display",
            "none"
          ),
          $(".sidebar-inspector").find(".toolbar").removeClass("last-toolbar"),
          $(".sidebar-inspector")
            .find(".toolbar")
            .filter(":visible")
            .filter(":last")
            .addClass("last-toolbar"),
          gDesigner.isTouchEnabled() && this._fireUpdateEvent(),
          this._updateUI();
      }),
      (T.prototype._updateUI = function () {
        let exports = this._htmlElement.find(".group-frame-property-panel"),
          module = this._htmlElement.find(".frame-property-panel"),
          require = this._htmlElement.find(".item-property-panel"),
          GTools = this._htmlElement.find(".symbol-instance-toolbar"),
          GCore = this._htmlElement.find(".symbol-instance-panel"),
          GDocumentEvent = null;
        (GDocumentEvent = gDesigner.isTouchEnabled()
          ? this._htmlElement.find(
              ".appearance-properties-panel .appearance-property-panel:last-child"
            )
          : this._htmlElement.find(".scene-properties-panel").next()),
          GDocumentEvent &&
            (GCore.insertAfter(GDocumentEvent),
            GTools.insertAfter(GDocumentEvent),
            require.next().insertAfter(GDocumentEvent),
            require.insertAfter(GDocumentEvent),
            module.next().insertAfter(GDocumentEvent),
            module.insertAfter(GDocumentEvent),
            exports.next().insertAfter(GDocumentEvent),
            exports.insertAfter(GDocumentEvent));
      }),
      (T.prototype._settingChanged = function (e) {
        "touch" === e.key &&
          (this._htmlElement
            .find(".appearance-panel-toggle-btn button.g-accordion")
            [gDesigner.isTouchEnabled() ? "hide" : "show"](),
          this._updateUI(),
          this._updatePropertyPanels());
      }),
      (T.prototype._isPropertiesEnabled = function (e) {
        return true;
      }),
      (T.prototype.getTouchTools = function () {
        let { disableContextSensitive: exports = false } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        return exports ? this._getAllTouchTools() : this._touchTools;
      }),
      (T.prototype._getAllTouchTools = function () {
        return [
          ...new Set(
            this._propertyPanels.reduce((e, t) => {
              const require = t.properties.getTouchTools();
              return require && (e = e.concat(require)), e;
            }, [])
          ),
        ];
      }),
      (T.prototype.toString = function () {
        return "[Object GInspectorSidebar]";
      }),
      require(1529) /* DataModule_1529 */(T),
      (exports.exports = T);
  }