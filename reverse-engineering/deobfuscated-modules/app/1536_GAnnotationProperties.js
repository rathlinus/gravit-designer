/**
 * Webpack Module #1536
 * Type: class
 * Name: GAnnotationProperties
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */, require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */, require(71) /* polyfill_String_includes */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(97) /* stub_requires_684 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GAnnotationsUtils = _interopRequireDefault(require(358) /* GAnnotationsUtils */),
      GProperties = require(123) /* GProperties */;
    const GCollaborationEvent = require(393) /* GCollaborationEvent */,
      c = require(392) /* module_392 */,
      GFileReviewFlowManager = require(1165) /* GFileReviewFlowManager */,
      GSettingChangedEvent = require(135) /* GSettingChangedEvent */;
    function p(e, t, n, _interopRequireDefault, GTools, GCore, GAnnotationsUtils, GProperties) {
      (this._elements = []),
        (this._availableProperties = e || []),
        (this._propertyClass = t),
        (this._propertyTool = n),
        (this._toolbarIcon = _interopRequireDefault),
        (this._toolbarTooltip = GTools),
        (this._tooltips = GCore),
        (this._pendingUpdates = new Map()),
        (this._statType = GAnnotationsUtils),
        (this._panelClass = GProperties);
    }
    GCore.GObject.inherit(p, GProperties),
      (p.PropertySet = {
        BorderHeadMarker: "_bhm",
        BorderTailMarker: "_btm",
        FillLayer: "_ptf",
        BorderLayer: "_ptb",
        BorderWidth: "_bw",
      }),
      (p.PropertyTarget = {
        FillLayer: p.PropertySet.FillLayer,
        BorderLayer: p.PropertySet.BorderLayer,
        Element: null,
      }),
      (p.prototype._panel = null),
      (p.prototype._pendingUpdates = null),
      (p.prototype._document = null),
      (p.prototype._elements = null),
      (p.prototype._availableProperties = null),
      (p.prototype._propertyClass = null),
      (p.prototype._propertyTool = null),
      (p.prototype._toolbarIcon = null),
      (p.prototype._toolbarTooltip = null),
      (p.prototype._tooltips = null),
      (p.prototype._isEditing = false),
      (p.prototype.init = function (e, t) {
        (this._panel = e), this._panel.addClass(this._panelClass);
        var n = function (e) {
            var t = this;
            if (
              e === p.PropertySet.BorderLayer ||
              e === p.PropertySet.FillLayer
            ) {
              let n,
                _interopRequireDefault = () =>
                  e === p.PropertySet.FillLayer
                    ? t._statType + "/FillColor"
                    : e === p.PropertySet.BorderLayer
                    ? t._statType + "/OutlineColor"
                    : undefined,
                GTools = $("<div></div>")
                  .attr("data-property", e)
                  .toggleClass(
                    "g-disabled",
                    !this._getAppManager().isCommentingEditingEnabled()
                  )
                  .gPatternChooser({
                    types: [GCore.GColor],
                    singleOption: true,
                    onOpen: function () {
                      gDesigner.stats("annotations_open_patternchooser", _interopRequireDefault());
                    },
                    onClickEyedropper: function () {
                      gDesigner.stats("annotations_click_eyedropper", _interopRequireDefault());
                    },
                  })
                  .on("chooseropen", function () {
                    try {
                      t._document.getEditor().hideSelection(),
                        (t._chooserElem = $(this));
                    } finally {
                      t.setIsEditing(true);
                    }
                  })
                  .on("chooserclose", function (e, n, _interopRequireDefault) {
                    try {
                      gDesigner
                        .getWorkspace()
                        .getStyleEdManager()
                        .getOverlayLock(_interopRequireDefault)
                        ? n()
                        : ((t._styleEdOn = false),
                          gDesigner
                            .getWorkspace()
                            .getStyleEdManager()
                            .deactivateEditor(),
                          t._document &&
                            t._document.getEditor().resetHideSelection()),
                        (t._chooserElem = null);
                    } finally {
                      t.setIsEditing(false);
                    }
                  })
                  .on("patternchange", function (n, _interopRequireDefault, GTools, GAnnotationsUtils, GProperties, GCollaborationEvent) {
                    if (t._getAppManager().isCommentingEditingEnabled()) {
                      var c = ["_vs"],
                        GFileReviewFlowManager = [true];
                      undefined !== _interopRequireDefault && (c.push("_pt"), GFileReviewFlowManager.push(_interopRequireDefault)),
                        "number" == typeof GTools && (c.push("_op"), GFileReviewFlowManager.push(GTools));
                      var GSettingChangedEvent = null;
                      GProperties &&
                        ((GSettingChangedEvent = { chooserOn: true }),
                        null != GCollaborationEvent && (GSettingChangedEvent.activeStopIdx = GCollaborationEvent)),
                        t._assignProperties(
                          c,
                          GFileReviewFlowManager,
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GAnnotationProperties",
                              "text.change-annotation-style"
                            )
                          ),
                          GAnnotationsUtils,
                          e,
                          GSettingChangedEvent
                        );
                    }
                  })
                  .prepend(
                    this._availableProperties.includes(
                      p.PropertySet.BorderLayer
                    ) &&
                      this._availableProperties.includes(
                        p.PropertySet.FillLayer
                      )
                      ? $("<span>")
                          .addClass("gravit-icon")
                          .addClass("patternchooser-icon")
                          .addClass(
                            e === p.PropertySet.BorderLayer
                              ? "gravit-icon-pen"
                              : "gravit-icon-annotation-fill"
                          )
                      : null
                  );
              return (
                GTools
                  .find("span.preview.g-button")
                  .attr(
                    "data-title",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GAnnotationProperties",
                        this._tooltips[e]
                      )
                    )
                  ),
                GTools
                  .find("div.eyedropper")
                  .attr(
                    "data-title",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GAnnotationProperties",
                        this._tooltips[e + "dropper"]
                      )
                    )
                  ),
                (n =
                  e === p.PropertySet.BorderLayer
                    ? new GCore.GLocaleKey("GStylable", "layer.border")
                    : new GCore.GLocaleKey("GStylable", "layer.fill")),
                GTools.append(
                  $("<span/>").addClass("layer-title").text(GCore.GLocale.get(n))
                ),
                GTools
              );
            }
            if (e === p.PropertySet.BorderWidth) {
              var n = (n, _interopRequireDefault) => {
                if (this._getAppManager().isCommentingEditingEnabled()) {
                  gDesigner.stats("annotations_line-width", this._statType);
                  var GTools = $(n).gUnitBox("value"),
                    GAnnotationsUtils = GTools ? GTools.toUnit(GCore.GLength.Unit.PX) : null;
                  if (null !== GAnnotationsUtils && GAnnotationsUtils >= 0) {
                    const n = ["_vs", e],
                      GTools = [true, GAnnotationsUtils],
                      GCore = undefined,
                      GProperties = p.PropertyTarget.BorderLayer;
                    _interopRequireDefault
                      ? this._recordPendingUpdateForSelection(e, n, GTools, GCore, GProperties)
                      : this._cleanPendingUpdateForSelection(e),
                      t._assignProperties(n, GTools, GCore, _interopRequireDefault, GProperties);
                  } else t._updateProperties();
                }
              };
              return $("<input>")
                .attr("data-property", e)
                .attr(
                  "data-title",
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GAnnotationProperties", this._tooltips[e])
                  )
                )
                .toggleClass(
                  "g-disabled",
                  !this._getAppManager().isCommentingEditingEnabled()
                )
                .prop(
                  "disabled",
                  !this._getAppManager().isCommentingEditingEnabled()
                )
                .on("change", function () {
                  n(this, true);
                })
                .blur(function () {
                  n(this);
                })
                .gUnitBox({ minValue: 0, source: "border" });
            }
            if (
              e === p.PropertySet.BorderHeadMarker ||
              e === p.PropertySet.BorderTailMarker
            ) {
              const n = (n) => {
                  if (!this._getAppManager().isCommentingEditingEnabled())
                    return;
                  const _interopRequireDefault = $(n.target).prop("checked"),
                    GTools = e === p.PropertySet.BorderHeadMarker ? "head" : "tail";
                  gDesigner.stats(
                    "annotations_border-marker_".concat(GTools),
                    _interopRequireDefault ? "on" : "off"
                  ),
                    t._assignProperty(
                      e,
                      _interopRequireDefault ? GCore.GStylable.BorderMarker.Arrow : null,
                      undefined,
                      undefined,
                      p.PropertyTarget.BorderLayer
                    );
                },
                _interopRequireDefault = $("<input>")
                  .attr("data-property", e)
                  .addClass("custom-checkbox-mode")
                  .attr("type", "checkbox")
                  .toggleClass(
                    "g-disabled",
                    !this._getAppManager().isCommentingEditingEnabled()
                  )
                  .prop(
                    "disabled",
                    !this._getAppManager().isCommentingEditingEnabled()
                  )
                  .on("change", n);
              return (
                gDesigner.isTouchEnabled() && _interopRequireDefault.gCheckboxSlider(),
                $("<label>")
                  .append(_interopRequireDefault)
                  .append(
                    $("<span>").text(
                      e === p.PropertySet.BorderTailMarker
                        ? GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GAnnotationProperties",
                              "text.end-arrow"
                            )
                          )
                        : GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GAnnotationProperties",
                              "text.start-arrow"
                            )
                          )
                    )
                  )
              );
            }
            throw new Error("Unknown input property: " + e);
          }.bind(this),
          _interopRequireDefault = [];
        this._availableProperties.indexOf(p.PropertySet.BorderHeadMarker) >=
          0 &&
          this._availableProperties.indexOf(p.PropertySet.BorderTailMarker) >=
            0 &&
          (this._availableProperties.splice(
            this._availableProperties.indexOf(p.PropertySet.BorderHeadMarker),
            1
          ),
          this._availableProperties.splice(
            this._availableProperties.indexOf(p.PropertySet.BorderTailMarker),
            1
          ),
          this._availableProperties.push("arrows"));
        for (var GAnnotationsUtils = 0; GAnnotationsUtils < this._availableProperties.length; GAnnotationsUtils++) {
          let e = this._availableProperties[GAnnotationsUtils];
          _interopRequireDefault.push({
            clazz:
              this._availableProperties.includes(p.PropertySet.BorderLayer) &&
              this._availableProperties.includes(p.PropertySet.FillLayer)
                ? "larger"
                : "arrows" === e
                ? "auto-grow"
                : "medium",
            content:
              "arrows" === e
                ? $("<div>")
                    .append(n(p.PropertySet.BorderHeadMarker))
                    .append(n(p.PropertySet.BorderTailMarker))
                    .addClass("arrows")
                : n(e),
          });
        }
        $("<div></div>").gPropertyRow({ columns: _interopRequireDefault }).appendTo(this._panel),
          this._availableProperties.indexOf(p.PropertySet.FillLayer) >= 0 &&
            this._availableProperties.indexOf(p.PropertySet.BorderLayer) >= 0 &&
            this._panel
              .find('[data-property="'.concat(p.PropertySet.FillLayer, '"]'))
              .closest(".column")
              .css("margin-right", "40px"),
          this._availableProperties.indexOf(p.PropertySet.BorderWidth) >= 0 &&
            this._panel
              .find('[data-property="'.concat(p.PropertySet.BorderWidth, '"]'))
              .closest(".column")
              .css("margin-right", "10px"),
          (this._toolbarButton = $("<button>")
            .attr("class", "toolbar-button icon " + this._toolbarIcon)
            .toggleClass(
              "g-disabled",
              !this._getAppManager().isCommentingEditingEnabled()
            )
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GAnnotationProperties", this._toolbarTooltip)
              )
            )
            .on("click", () => {
              if (
                (gDesigner.stats(
                  "annotations_click_toolbar-btn",
                  this._statType
                ),
                this._getAppManager().isCommentingEditingEnabled())
              ) {
                var e = gDesigner.getToolManager().getTool(this._propertyTool);
                e === gDesigner.getToolManager().getActiveTool()
                  ? gDesigner
                      .getToolManager()
                      .activateTool(GTools.GPointerTool, null, true)
                  : gDesigner.getToolManager().activateTool(e, null, true);
              }
            })
            .data("toolClass", this._propertyTool)
            .prependTo(t));
      }),
      (p.prototype._settingChanged = function (e) {
        "touch" === e.key && this._updateTouchComponents();
      }),
      (p.prototype._updateTouchComponents = function (e) {
        const module = this._panel.find(".custom-checkbox-mode");
        gDesigner.isTouchEnabled()
          ? module.gCheckboxSlider()
          : module.gCheckboxSlider("unmount");
      }),
      (p.prototype.update = function (e, t, n) {
        if (
          (this._document &&
            (this._applyPendingUpdateForSelection(),
            gDesigner.removeEventListener(c, this._stateChangedEvent, this),
            gDesigner
              .getFileReviewManager()
              .removeEventListener(
                GFileReviewFlowManager.UpdateEvent,
                this._handleReviewUpdate,
                this
              ),
            gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged, this),
            this._document.getScene() &&
              this._document
                .getScene()
                .removeEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange
                ),
            this._document.removeEventListener(
              GCollaborationEvent,
              this._collaborationEvent,
              this
            ),
            (this._document = null)),
          (this._elements = []),
          e && t && e.getScene())
        ) {
          if (
            (gDesigner.addEventListener(c, this._stateChangedEvent, this),
            gDesigner
              .getFileReviewManager()
              .addEventListener(GFileReviewFlowManager.UpdateEvent, this._handleReviewUpdate, this),
            gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
            t)
          )
            for (var _interopRequireDefault = 0; _interopRequireDefault < t.length; ++_interopRequireDefault) {
              var GTools = t[_interopRequireDefault];
              ((GTools instanceof GCore.GStyle &&
                n &&
                n instanceof this._propertyTool) ||
                (GTools instanceof this._propertyClass &&
                  GTools.hasMixin(GCore.GAnnotation))) &&
                this._elements.push(GTools);
            }
          if (this._elements.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              this._document.addEventListener(
                GCollaborationEvent,
                this._collaborationEvent,
                this
              ),
              this._updateProperties(),
              this._updateTouchComponents(),
              true
            );
        }
        return false;
      }),
      (p.prototype._collaborationEvent = async function (e) {
        switch (e.type) {
          case GCollaborationEvent.Type.ReviewStatusChanged:
            this._updateToolbar(),
              this._elements.length && this._updateProperties();
        }
      }),
      (p.prototype._handleReviewUpdate = async function (e) {
        this._updateToolbar(),
          this._elements.length && this._updateProperties();
      }),
      (p.prototype._stateChangedEvent = async function (e) {
        this._updateToolbar(),
          this._document &&
            e.document === this._document &&
            this._updateProperties();
      }),
      (p.prototype._getAppManager = function () {
        return (
          this._appManager ||
            (this._appManager = gDesigner.getApplicationManager()),
          this._appManager
        );
      }),
      (p.prototype._updateToolbar = function () {
        this._toolbarButton.toggleClass(
          "g-disabled",
          !this._getAppManager().isCommentingEditingEnabled()
        );
      }),
      (p.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          e.node === this._elements[0] &&
          this._availableProperties.some((t) => e.properties.indexOf(t) >= 0) &&
          this._updateProperties();
      }),
      (p.prototype._recordPendingUpdateForSelection = function (e, t, n, _interopRequireDefault, GTools) {
        this._pendingUpdates.set(e, {
          props: t,
          values: n,
          title: _interopRequireDefault,
          target: GTools,
        });
      }),
      (p.prototype._cleanPendingUpdateForSelection = function (e) {
        this._pendingUpdates.delete(e);
      }),
      (p.prototype._applyPendingUpdateForSelection = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
        function module(e) {
          const module = this._pendingUpdates.get(e);
          module && this._assignProperties(module.props, module.values, module.title, false, module.target);
        }
        exports
          ? module.call(this, exports)
          : this._pendingUpdates.forEach((e, n) => {
              module.call(this, n), this._cleanPendingUpdateForSelection(n);
            });
      }),
      (p.prototype._updateProperties = function () {
        if (!this._elements || !this._elements.length)
          return void console.warn(
            "GAnnotationProperties: empty _elements array"
          );
        if (!this._document.getScene())
          return void console.warn("Scene is null");
        var e = this._elements[0];
        GTools.GElementEditor.getEditor(e);
        const module =
            !e.hasMixin(GCore.GAnnotation) ||
            GAnnotationsUtils.default.isOwner(gDesigner.getSyncUser(), e),
          require = this._getAppManager().isCommentingEditingEnabled();
        if (this._availableProperties.indexOf(p.PropertySet.FillLayer) >= 0) {
          var _interopRequireDefault = e.getPaintLayers().getFillLayers()[0];
          this._panel
            .find('[data-property="'.concat(p.PropertySet.FillLayer, '"]'))
            .gPatternChooser(
              "setPattern",
              _interopRequireDefault ? _interopRequireDefault.getProperty("_pt", false, false, true) : null
            )
            .gPatternChooser(
              "value",
              _interopRequireDefault ? _interopRequireDefault.getProperty("_pt", false, false, true) : null
            )
            .gPatternChooser(
              "opacity",
              _interopRequireDefault ? _interopRequireDefault.getProperty("_op", false, false, true) : null
            ),
            module && require
              ? this._panel
                  .find(
                    '[data-property="'.concat(p.PropertySet.FillLayer, '"]')
                  )
                  .removeClass("g-disabled")
              : this._panel
                  .find(
                    '[data-property="'.concat(p.PropertySet.FillLayer, '"]')
                  )
                  .addClass("g-disabled");
        }
        if (this._availableProperties.indexOf(p.PropertySet.BorderLayer) >= 0) {
          _interopRequireDefault = e.getPaintLayers().getBorderLayers()[0];
          this._panel
            .find('[data-property="'.concat(p.PropertySet.BorderLayer, '"]'))
            .gPatternChooser(
              "setPattern",
              _interopRequireDefault ? _interopRequireDefault.getProperty("_pt", false, false, true) : null
            )
            .gPatternChooser(
              "value",
              _interopRequireDefault ? _interopRequireDefault.getProperty("_pt", false, false, true) : null
            )
            .gPatternChooser(
              "opacity",
              _interopRequireDefault ? _interopRequireDefault.getProperty("_op", false, false, true) : null
            ),
            module && require
              ? this._panel
                  .find(
                    '[data-property="'.concat(p.PropertySet.BorderLayer, '"]')
                  )
                  .removeClass("g-disabled")
              : this._panel
                  .find(
                    '[data-property="'.concat(p.PropertySet.BorderLayer, '"]')
                  )
                  .addClass("g-disabled");
        }
        if (this._availableProperties.indexOf(p.PropertySet.BorderWidth) >= 0) {
          var GProperties = (_interopRequireDefault = e.getPaintLayers().getBorderLayers()[0])
              .getProperty(p.PropertySet.BorderWidth)
              .toString(),
            GCollaborationEvent = this._panel.find(
              '[data-property="'.concat(p.PropertySet.BorderWidth, '"]')
            );
          GCollaborationEvent
            .gUnitBox({
              unit:
                this._document.getScene().$ut === GCore.GLength.Unit.PX
                  ? GCore.GLength.Unit.PX
                  : GCore.GLength.Unit.PT,
              minValue: 0,
            })
            .gUnitBox(
              "value",
              null !== GProperties
                ? new GCore.GLength.parseLength(GProperties, GCore.GLength.Unit.PT)
                : null
            ),
            module && require
              ? GCollaborationEvent.removeClass("g-disabled").attr("disabled", false)
              : GCollaborationEvent.addClass("g-disabled").attr("disabled", true);
        }
        [p.PropertySet.BorderHeadMarker, p.PropertySet.BorderTailMarker]
          .filter(
            (e) =>
              this._availableProperties.indexOf(e) >= 0 ||
              this._availableProperties.includes("arrows")
          )
          .forEach((_interopRequireDefault) => {
            var GTools = e.getPaintLayers().getBorderLayers()[0].getProperty(_interopRequireDefault),
              GCore = this._panel.find('[data-property="' + _interopRequireDefault + '"]');
            GCore.prop("checked", !!GTools),
              module && require
                ? (GCore.removeClass("g-disabled"), GCore.attr("disabled", false))
                : (GCore.addClass("g-disabled"), GCore.attr("disabled", true));
          });
      }),
      (p.prototype._assignProperty = function (e, t, n, _interopRequireDefault, GTools, GCore) {
        this._assignProperties([e], [t], n, _interopRequireDefault, GTools, GCore);
      }),
      (p.prototype._assignProperties = function (e, t, n, _interopRequireDefault, GTools, GAnnotationsUtils) {
        if (this._document) {
          var GProperties = this._document.getEditor();
          _interopRequireDefault || GProperties.beginTransaction();
          try {
            for (var GCollaborationEvent = null, c = 0; c < this._elements.length; ++c) {
              var GFileReviewFlowManager;
              GTools === p.PropertyTarget.FillLayer
                ? ((GFileReviewFlowManager = this._elements[c]
                    .getPaintLayers()
                    .getFillLayers()[0]) ||
                    ((GFileReviewFlowManager = new GCore.GStylable.FillPaintLayer()),
                    this._elements[c].getPaintLayers().appendChild(GFileReviewFlowManager)),
                  (GCollaborationEvent = $.extend(
                    { fillLayerIndex: GFileReviewFlowManager.getParent().getIndexOfChild(GFileReviewFlowManager) },
                    GCollaborationEvent || GAnnotationsUtils
                  )))
                : GTools === p.PropertyTarget.BorderLayer
                ? ((GFileReviewFlowManager = this._elements[c]
                    .getPaintLayers()
                    .getBorderLayers()[0]) ||
                    ((GFileReviewFlowManager = new GCore.GStylable.BorderPaintLayer()),
                    this._elements[c].getPaintLayers().appendChild(GFileReviewFlowManager)),
                  (GCollaborationEvent = $.extend(
                    { borderLayerIndex: GFileReviewFlowManager.getParent().getIndexOfChild(GFileReviewFlowManager) },
                    GCollaborationEvent || GAnnotationsUtils
                  )))
                : (GFileReviewFlowManager = this._elements[c]),
                GFileReviewFlowManager && GFileReviewFlowManager.setProperties(e, t, false, false, _interopRequireDefault);
            }
          } finally {
            _interopRequireDefault || GProperties.commitTransaction(n, GCollaborationEvent);
          }
        } else console.warn("GAnnotationProperties: empty _document property");
      }),
      (p.prototype.isEditing = function () {
        return this._isEditing;
      }),
      (p.prototype.setIsEditing = function (e) {
        this._isEditing = e;
      }),
      (p.prototype.toString = function () {
        return "[Object GAnnotationProperties]";
      }),
      (exports.exports = p);
  }