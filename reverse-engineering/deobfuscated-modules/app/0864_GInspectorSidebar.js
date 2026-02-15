/**
 * Webpack Module #864
 * Type: class
 * Name: GInspectorSidebar
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(168) /* polyfill_Array_reduce */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(169) /* stub_requires_683 */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(53) /* module */,
      i = require(1) /* module */,
      a = require(78) /* GDocumentEvent */,
      r = require(606) /* GPanel */,
      s = require(806) /* GSidebar */,
      l = require(395) /* module_395 */,
      c = require(1160) /* GAppearanceProperties */,
      d = require(1261) /* module_1261 */,
      u = require(1162) /* module_1162 */,
      p = require(1262) /* GEffectProperties */,
      g = require(1264) /* GBoolOpProperties */,
      h = require(1265) /* GEllipseProperties */,
      f = require(1266) /* GImageProperties */,
      m = require(1269) /* GPathProperties */,
      y = require(1270) /* GPolygonProperties */,
      v = require(1271) /* GRectangleProperties */,
      _ = require(1272) /* GSliceProperties */,
      b = require(1273) /* GTextProperties */,
      w = require(1274) /* GAlignProperties */,
      C = require(1528) /* GVersionHistoryProperties */,
      x = require(1159) /* module_1159 */;
    const S = require(135) /* GSettingChangedEvent */,
      E = require(198) /* Exports_GOutlineSidebar */,
      A = require(807) /* module_807 */;
    function T() {
      s.call(this), (this._propertyPanels = []), (this._touchTools = []);
    }
    i.GObject.inherit(T, s),
      (T.ACCORDIONS = [
        c.prototype.toString(),
        d.prototype.toString(),
        u.prototype.toString(),
        p.prototype.toString(),
      ]),
      (T.APPEARANCE_PROPERTIES = [
        w.prototype.toString(),
        y.prototype.toString(),
        m.prototype.toString(),
        h.prototype.toString(),
        b.prototype.toString(),
        f.prototype.toString(),
        v.prototype.toString(),
        _.prototype.toString(),
        g.prototype.toString(),
        c.prototype.toString(),
      ]),
      (T.ID = E.SidebarsIds.GInspectorSidebar),
      (T.TITLE = new i.GLocaleKey("GInspectorSidebar", "title")),
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
        return l.Orientation.Right;
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
        s.prototype.init.call(this, e), (this._htmlElement = e);
        var t = $("<div></div>")
            .addClass("panels scrolling-panels")
            .appendTo(this._htmlElement),
          n = $("<div></div>")
            .addClass("panels sticky-panels")
            .appendTo(this._htmlElement),
          o = $("<div></div>").addClass("toolbar appearance-toolbar");
        (this._appearancePanel = $("<div></div>")
          .css("display", "none")
          .addClass("properties-panel")
          .addClass("appearance-properties-panel")),
          $("<label></label>")
            .addClass("appearance-toolbar-title")
            .text(
              i.GLocale.get(new i.GLocaleKey("GAppearanceProperties", "title"))
            )
            .appendTo(o);
        for (
          var a = function (e) {
              var i = e.isSticky() ? n : t,
                a = $("<div></div>")
                  .css("display", "none")
                  .addClass("properties-panel"),
                r = $("<hr/>"),
                s = $("<div></div>").addClass("toolbar");
              if ($.inArray(e.toString(), T.APPEARANCE_PROPERTIES) > -1) {
                var l = $("<div></div>").addClass("appearance-property-panel");
                e.init(l, o),
                  r.appendTo(l),
                  this._appearancePanel.append(l),
                  o.appendTo(i),
                  this._appearancePanel.appendTo(i),
                  (s = o),
                  (a = l);
              } else
                r.appendTo(i),
                  e.init(a, s),
                  "" !== s.html() ? s.appendTo(i) : (s = null),
                  a.appendTo(i);
              this._propertyPanels.push({
                panel: a,
                toolbar: s,
                divider: r,
                properties: e,
              });
            }.bind(this),
            r = 0;
          r < gravit.properties.length;
          ++r
        )
          a(gravit.properties[r]);
        this._activeTool(gDesigner.getToolManager().getActiveTool()),
          this._updatePropertyPanels(),
          this._initVersionHistoryPanel(),
          gDesigner
            .getRightSidebars()
            .addEventListener(A, this._sidebarEvent, this),
          gDesigner.addEventListener(S, this._settingChanged, this);
      }),
      (T.prototype._getPropertyPanel = function (e) {
        return (
          this._propertyPanels.find((t) => t.properties instanceof e) || null
        );
      }),
      (T.prototype.openFillPatternChooser = function () {
        const exports = this._getPropertyPanel(d);
        exports && exports.properties.openPatternChooser();
      }),
      (T.prototype.openBorderPatternChooser = function () {
        const exports = this._getPropertyPanel(u);
        exports && exports.properties.openPatternChooser();
      }),
      (T.prototype.openFillEyeDropper = function (e, t) {
        const require = this._getPropertyPanel(d);
        require && require.properties.openEyeDropper(e, t);
      }),
      (T.prototype.openBorderEyeDropper = function (e, t) {
        const require = this._getPropertyPanel(u);
        require && require.properties.openEyeDropper(e, t);
      }),
      (T.prototype.openTextColorEyeDropper = function (e, t) {
        const require = this._getPropertyPanel(b);
        require && require.properties.openEyeDropper(e, t);
      }),
      (T.prototype.setPathPointsNodeType = function (e) {
        const module = this._getPropertyPanel(m);
        module && module.properties.assignNodeType(e);
      }),
      (T.prototype._sidebarEvent = function (e) {
        gDesigner.isTouchEnabled() &&
          e.type === A.Type.Activated &&
          e.sidebar &&
          e.sidebar.getId() === E.SidebarsIds.GAnnotationsSidebar &&
          this._updatePropertyPanels();
      }),
      (T.prototype.activate = function () {
        gDesigner.addEventListener(a, this._documentEvent, this),
          gDesigner
            .getToolManager()
            .addEventListener(
              o.GToolManager.ToolChangedEvent,
              this._toolChangedEvent,
              this
            );
        var e = gDesigner.getActiveDocument();
        e && this._activateDocument(e);
      }),
      (T.prototype.deactivate = function () {
        gDesigner.removeEventListener(a, this._documentEvent, this),
          gDesigner
            .getToolManager()
            .removeEventListener(
              o.GToolManager.ToolChangedEvent,
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
        (this._versionHistoryProperties = new C()),
          this._versionHistoryProperties.init(e, t),
          this._versionHistoryPanel.append(t).append(e),
          gDesigner.addEventListener(x, this._updateVersionsPanel, this);
      }),
      (T.prototype._updateVersionsPanel = function (e) {
        if (e.type === x.Type.Enable) {
          var module;
          switch (((this._versionHistoryMode = true), this.getOrientation())) {
            case l.Orientation.Left:
              module = gDesigner.getLeftSidebars();
              break;
            case l.Orientation.Right:
              module = gDesigner.getRightSidebars();
          }
          module.setActiveSidebar(this.getId()),
            gDesigner.setPartVisible(module.getSidebarsPart(), true),
            this._htmlElement.find(".panels").css("display", "none"),
            this._versionHistoryPanel.appendTo(this._htmlElement),
            this._versionHistoryPanel.css("display", "");
        } else
          e.type === x.Type.Disable &&
            ((this._versionHistoryMode = false),
            this._htmlElement.find(".panels").css("display", ""),
            this._versionHistoryPanel.css("display", "none"),
            this._updatePropertyPanels(false));
        gDesigner.isTouchEnabled() && this._updateVersionsPanelTouch();
      }),
      (T.prototype._documentEvent = function (e) {
        e.type === a.Type.Activated
          ? this._activateDocument(e.document)
          : e.type === a.Type.Deactivated
          ? this._deactivateDocument()
          : e.type === a.Type.StorageItemUpdated &&
            this._updatePropertyPanels(false, e.data ? e.data : null);
      }),
      (T.prototype._activateDocument = function (e) {
        this._document && this._deactivateDocument(), (this._document = e);
        var t = this._document.getScene(),
          n = this._document.getEditor();
        gDesigner
          .getToolManager()
          .addEventListener(
            o.GToolManager.ToolChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          n.addEventListener(
            o.GEditor.SelectionChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          t.addEventListener(
            i.GNode.AfterFlagChangeEvent,
            this._afterFlagChangeEvent,
            this
          ),
          this._updateFromToolOrSelection(),
          this.trigger(r.UPDATE_EVENT);
      }),
      (T.prototype._deactivateDocument = function () {
        var e = this._document.getScene(),
          t = this._document.getEditor();
        gDesigner
          .getToolManager()
          .removeEventListener(
            o.GToolManager.ToolChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          t.removeEventListener(
            o.GEditor.SelectionChangedEvent,
            this._updateFromToolOrSelection,
            this
          ),
          e.removeEventListener(
            i.GNode.AfterFlagChangeEvent,
            this._afterFlagChangeEvent,
            this
          ),
          (this._document = null),
          (this._elements = null),
          this._updatePropertyPanels(true),
          this.trigger(r.UPDATE_EVENT);
      }),
      (T.prototype._toolChangedEvent = function (e) {
        var t = e.previousTool,
          n = e.newTool;
        t &&
          t instanceof o.GSelectTool &&
          (e.light || this._updateTransformMode(false),
          t.removeEventListener(
            o.GSelectTool.Event,
            this._selectToolEvent,
            this
          )),
          this._activeTool(n);
      }),
      (T.prototype._activeTool = function (e) {
        e &&
          e instanceof o.GSelectTool &&
          e.addEventListener(o.GSelectTool.Event, this._selectToolEvent, this);
      }),
      (T.prototype._selectToolEvent = function (e) {
        e.type === o.GSelectTool.Event.Type.EditModeChanged &&
          this._updateTransformMode(
            e.args.mode === o.GSelectTool.EditMode.Transform
          );
      }),
      (T.prototype._updateTransformMode = function (e) {
        e !== this._transformMode &&
          ((this._transformMode = e), this._updatePropertyPanels(false));
      }),
      (T.prototype._afterFlagChangeEvent = function (e) {
        e.node instanceof i.GPage &&
          e.flag === i.GNode.Flag.Active &&
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
              this._elements.filter((e) => !e.hasMixin(i.GAnnotation))
            )),
          !this._elements || 0 === this._elements.length)
        ) {
          var require = gDesigner.getToolManager().getActiveTool(),
            a = null;
          require instanceof o.GItemTool && (a = require.getDefaultStyle())
            ? (this._elements = [a])
            : (this._elements = [this._document.getScene().getActivePage()]);
        }
        this._updatePropertyPanels(false);
      }),
      (T.prototype._updatePropertyPanels = function (e, t) {
        var n = false,
          o = null,
          i = null;
        this._touchTools = [];
        for (var a = 0; a < this._propertyPanels.length; ++a) {
          var r = this._propertyPanels[a],
            s = r.properties,
            l = s.isAvailable(this._transformMode);
          if (
            (l &&
              (l = r.properties.update(
                e ? null : this._document,
                this._elements ? this._elements : null,
                t || null
              )),
            l)
          ) {
            const e = r.properties.getTouchTools();
            e && (this._touchTools = this._touchTools.concat(e));
          }
          r.panel.css("display", l ? "" : "none"),
            r.toolbar &&
              (r.toolbar.css("display", l ? "" : "none"),
              s instanceof _ && l && (i = r.toolbar),
              $.inArray(r.properties.toString(), T.ACCORDIONS) > -1 &&
                l &&
                (r.toolbar
                  .addClass("appearance-panel-toggle-btn")
                  .gAccordion("init", ".properties-panel", "label"),
                this._htmlElement
                  .find(".appearance-panel-toggle-btn button.g-accordion")
                  [gDesigner.isTouchEnabled() ? "hide" : "show"]()));
          var c = l && n && s.isGroup(o);
          r.divider.css("display", c ? "" : "none"),
            (n = n || l),
            l && ((o = s), this._appearancePanel.css("display", ""));
          const d = this._isPropertiesEnabled(r.properties);
          r.toolbar && r.toolbar.toggleClass("g-disabled", !d),
            r.panel && r.panel.toggleClass("g-disabled", !d);
        }
        i && gDesigner.isTouchEnabled() && i.css("display", "");
        var d = $("<hr/>").addClass("appearance-divider");
        0 === $(".appearance-divider").length &&
          $(".appearance-toolbar:first").before(d),
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
          o = this._htmlElement.find(".symbol-instance-toolbar"),
          i = this._htmlElement.find(".symbol-instance-panel"),
          a = null;
        (a = gDesigner.isTouchEnabled()
          ? this._htmlElement.find(
              ".appearance-properties-panel .appearance-property-panel:last-child"
            )
          : this._htmlElement.find(".scene-properties-panel").next()),
          a &&
            (i.insertAfter(a),
            o.insertAfter(a),
            require.next().insertAfter(a),
            require.insertAfter(a),
            module.next().insertAfter(a),
            module.insertAfter(a),
            exports.next().insertAfter(a),
            exports.insertAfter(a));
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
      require(1529) /* module_1529 */(T),
      (exports.exports = T);
  }