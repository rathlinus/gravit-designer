/**
 * Webpack Module #1261
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(57) /* polyfill_parseInt */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var i = require(15) /* module */,
      GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      AppSettings = require(10) /* AppSettings */,
      l = require(67) /* GRichTooltipConfig */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      d = _interopRequireDefault(require(807) /* module_807 */),
      GOutlineSidebar = _interopRequireDefault(require(198) /* Exports_GOutlineSidebar */),
      p = require(1161) /* module_1161 */,
      g = _interopRequireDefault(require(565) /* module_565 */),
      GProperties = require(123) /* GProperties */,
      f = require(450) /* module_450 */;
    const m = require(607) /* module_607 */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function v() {}
    GCore.GObject.inherit(v, GProperties),
      (v.prototype._panel = null),
      (v.prototype._advancedFillPanel = null),
      (v.prototype._toolbar = null),
      (v.prototype._elements = null),
      (v.prototype._document = null),
      (v.prototype._styleEditorChange = false),
      (v.prototype._styleEdOn = false),
      (v.prototype._ownChange = false),
      (v.prototype._chooserElem = null),
      (v.prototype.init = function (e, t) {
        (this._panel = e.addClass("fill-properties-panel")),
          (this._toolbar = t),
          this.setTouchTools([
            new GTouchTool.default({
              id: "fill",
              icon: "gravit-icon-touch-fill",
              panel: this._panel,
              toolbar: this._toolbar,
              panelWidth: "368px",
            }),
          ]);
        var n = this;
        this._advancedFillPanel = $("<div></div>").gOverlay({
          releaseOnClose: false,
        });
        var _interopRequireDefault = function (e) {
          if ("evenodd" === e)
            return $("<select></select>")
              .attr("data-property", "evenodd")
              .append(
                $("<option></option>")
                  .attr("value", "0")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "evenodd.non-zero")
                    )
                  )
              )
              .append(
                $("<option></option>")
                  .attr("value", "1")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "evenodd.even-odd")
                    )
                  )
              )
              .on("change", function () {
                gDesigner.stats(
                  "fill_toggle_fill-rule",
                  "1" === $(this).val() ? "enable" : "disable"
                ),
                  n._assignProperty(
                    "evenodd",
                    "1" === $(this).val(),
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GCommonNames",
                        "action.change-fill-rule"
                      )
                    )
                  );
              });
          throw new Error("Unknown input property: " + e);
        }.bind(this);
        this._toolbar.addClass("list-toolbar fill-toolbar"),
          $("<label></label>")
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GFillPaintLayerProperties", "title")
              )
            )
            .appendTo(this._toolbar),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFillPaintLayerProperties",
                  "action.advanced-settings"
                )
              )
            )
            .addClass("fill completely-fill g-active")
            .append(
              $("<span></span>").addClass("gravit-icon-touch-completely-fill")
            )
            .on(
              "click",
              function (e) {
                $(".completely-fill").addClass("g-active"),
                  $(".winding-fill").removeClass("g-active"),
                  n._assignProperty(
                    "evenodd",
                    false,
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GCommonNames",
                        "action.change-fill-rule"
                      )
                    )
                  );
              }.bind(this)
            )
            .appendTo(this._toolbar),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFillPaintLayerProperties",
                  "action.advanced-settings"
                )
              )
            )
            .addClass("fill winding-fill")
            .append(
              $("<span></span>").addClass("gravit-icon-touch-winding-fill")
            )
            .on(
              "click",
              function (e) {
                $(".winding-fill").addClass("g-active"),
                  $(".completely-fill").removeClass("g-active"),
                  n._assignProperty(
                    "evenodd",
                    true,
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GCommonNames",
                        "action.change-fill-rule"
                      )
                    )
                  );
              }.bind(this)
            )
            .appendTo(this._toolbar),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFillPaintLayerProperties",
                  "action.advanced-settings"
                )
              )
            )
            .attr("data-action", "settings")
            .addClass("fill-settings")
            .append($("<span></span>").addClass("gravit-icon-settings"))
            .on(
              "click",
              function (e) {
                gDesigner.stats("fill_open_advancedfillpanel"),
                  this._advancedFillPanel.gOverlay(
                    "open",
                    $(e.target).closest("button")
                  );
              }.bind(this)
            )
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GFillPaintLayerProperties",
                    "text.fill-rule-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GFillPaintLayerProperties",
                    "text.fill-rule-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            )
            .appendTo(this._toolbar),
          $("<button></button>")
            .attr("data-action", "remove")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFillPaintLayerProperties",
                  "action.remove-selected"
                )
              )
            )
            .append($("<span></span>").addClass("gravit-icon-trash"))
            .append($("<span></span>").addClass("gravit-icon-touch-trash"))
            .on("click", function (e) {
              gDesigner.stats("fill_remove_fill"), e.stopPropagation();
              var t = n._getSelectedPaintLayer();
              t &&
                GTools.GEditor.tryRunTransaction(
                  n._elements[0],
                  function () {
                    var e = [];
                    n._iterateEqualPaintLayer(t, function (t) {
                      e.push(t);
                    }),
                      GCore.GUtil.each(e, function (e, t) {
                        t.getParent().removeChild(t);
                      });
                  },
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GFillPaintLayerProperties",
                      "action.remove"
                    )
                  )
                );
              const _interopRequireDefault = gDesigner
                .getRightSidebars()
                .getSidebar(GOutlineSidebar.default.SidebarsIds.GInspectorSidebar);
              _interopRequireDefault.trigger(new d.default(d.default.Type.ChildRemoved, _interopRequireDefault));
            })
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GFillPaintLayerProperties",
                    "text.remove-layer-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GFillPaintLayerProperties",
                    "text.remove-layer-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            )
            .appendTo(this._toolbar),
          $("<button></button>")
            .attr("data-action", "add")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GFillPaintLayerProperties", "action.add")
              )
            )
            .append($("<span></span>").addClass("gravit-icon-plus"))
            .append($("<span></span>").addClass("gravit-icon-touch-plus"))
            .on(
              "click",
              function (e) {
                gDesigner.stats("fill_add_fill"),
                  GTools.GEditor.tryRunTransaction(
                    n._elements[0],
                    function () {
                      const e = n._document && n._document.getScene(),
                        t = e && e.getProperty("cm"),
                        _interopRequireDefault = GCore.GColorHelper.convertColor(
                          GCore.GRGBColor.BLACK,
                          t || GCore.GColor.ColorModes.RGB
                        );
                      for (var i = 0; i < n._elements.length; ++i) {
                        var GTools = new GCore.GStylable.FillPaintLayer();
                        GTools.setProperty("_pt", _interopRequireDefault),
                          n._elements[i].getPaintLayers().appendChild(GTools);
                      }
                    },
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFillPaintLayerProperties",
                        "action.add"
                      )
                    )
                  ),
                  $(this._toolbar).gAccordion("toggleOpen", true),
                  $(this._toolbar).gAccordion("init", $(this._panel));
                const t = gDesigner
                  .getRightSidebars()
                  .getSidebar(GOutlineSidebar.default.SidebarsIds.GInspectorSidebar);
                t.trigger(new d.default(d.default.Type.ChildAdded, t));
              }.bind(this)
            )
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GFillPaintLayerProperties",
                    "text.add-layer-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GFillPaintLayerProperties",
                    "text.add-layer-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            )
            .appendTo(this._toolbar),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GFillPaintLayerProperties", "text.fill-rule")
              ),
              columns: [{ width: "100%", content: _interopRequireDefault("evenodd") }],
            })
            .appendTo(this._advancedFillPanel),
          gDesigner
            .getWorkspace()
            .getStyleEdManager()
            .addEventListener(
              GTools.GStyleEdManager.EditorEvent,
              this._styleEditorEventHandler,
              this
            ),
          this._panel.data("contextmenu", true),
          this._panel.on("mouseenter", (e) => {
            gDesigner.setMouseOverContext(
              m.FillPropertiesPanel,
              e,
              function (e) {
                var t = this._panel.find(".copy-info-overlay").eq(0),
                  n = this._panel.find(".fill-block.g-selected") || null,
                  _interopRequireDefault = (n && n.position().top) || 0,
                  i = $("<span/>")
                    .addClass("copy-info-overlay")
                    .css({ top: _interopRequireDefault })
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GFillPaintLayerProperties",
                          "text.copy-fill"
                        )
                      )
                    );
                t && t.remove(),
                  this._panel.append(i),
                  setTimeout(() => {
                    i.animate({ opacity: 0, top: "+=20" }, 500, i.remove);
                  }, 1e3);
              }.bind(this)
            ),
              this._panel.on("mousemove.check-context", (e) => {
                var t = this._panel.outerHeight(),
                  n = this._panel.offset();
                e.clientY > n.top + t - 2 &&
                  (gDesigner.setMouseOverContext(null, null, null),
                  this._panel.off("mousemove.check-context"));
              });
          }),
          this._panel.on("mouseleave", () => {
            this._panel.off("mousemove.check-context"),
              gDesigner.setMouseOverContext(null, null, null);
          });
      }),
      (v.prototype.update = function (e, t, n) {
        const _interopRequireDefault = this._styleEditorChange;
        if (
          (this._styleEditorChange && (this._styleEditorChange = false),
          this._ownChange)
        )
          return true;
        if (
          (this._chooserElem && this._chooserElem.gPatternChooser("close"),
          this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterInsertEvent,
                this._afterInsert,
                this
              ),
            this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.BeforeRemoveEvent,
                this._beforeRemove,
                this
              ),
            this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            (this._document = null)),
          (this._elements = []),
          e)
        ) {
          e.getEditor();
          for (var i = 0; i < t.length; ++i) {
            var AppSettings = t[i],
              l = function (e, t) {
                t.hasMixin(GCore.GStylable) &&
                  t
                    .getStylePropertySets()
                    .indexOf(GCore.GStylable.PropertySet.FillPaintLayers) >= 0 &&
                  this._elements.push(t);
              }.bind(this),
              GTouchTool = GTools.GElementEditor.getEditor(AppSettings);
            GTouchTool && GTouchTool.getStylableParts()
              ? GCore.GUtil.each(GTouchTool.getStylableParts(), l)
              : l(null, AppSettings);
          }
          if (this._elements.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterInsertEvent,
                  this._afterInsert,
                  this
                ),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.BeforeRemoveEvent,
                  this._beforeRemove,
                  this
                ),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              _interopRequireDefault || this._updateProperties(n),
              true
            );
        }
        return false;
      }),
      (v.prototype._styleEditorEventHandler = function (e) {
        this._styleEdOn &&
          e.type == GTools.GStyleEdManager.EditorEventType.PrepareModifiedEvent &&
          (this._styleEditorChange = true);
      }),
      (v.prototype._updateProperties = function (e) {
        if (this._elements && this._elements.length) {
          var module = this._elements[0];
          this._panel.find(".fill-block").remove();
          var require = module.getPaintLayers().getFillLayers();
          GCore.GUtil.each(
            require,
            function (t, n) {
              n && this._insertPaintLayer(n, e);
            }.bind(this)
          ),
            this._advancedFillPanel
              .find('[data-property="evenodd"]')
              .prop("disabled", !module.hasProperty("evenodd"))
              .val(module.getProperty("evenodd") ? "1" : "0"),
            this._updateToolbar();
        } else console.warn("GFillPaintLayerProperties: empty _elements array");
      }),
      (v.prototype._assignProperty = function (e, t, n) {
        this._assignProperties([e], [t], n);
      }),
      (v.prototype._assignProperties = function (e, t, n) {
        if (this._document) {
          this._ownChange = true;
          var _interopRequireDefault = this._document.getEditor();
          _interopRequireDefault.beginTransaction();
          try {
            for (var i = 0; i < this._elements.length; ++i)
              this._elements[i].setProperties(e, t);
          } finally {
            _interopRequireDefault.commitTransaction(
              n ||
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFillPaintLayerProperties", "action.modify")
                )
            ),
              (this._ownChange = false);
          }
        } else
          console.warn("GFillPaintLayerProperties: empty _document property");
      }),
      (v.prototype._updateToolbar = function () {
        var e = this._panel.find(".fill-block").length > 0;
        this._toolbar.toggleClass("empty-list", !e),
          this._toolbar
            .find("[data-action=settings]")
            .css("display", e ? "" : "none"),
          this._toolbar
            .find("[data-action=remove]")
            .css("display", e ? "" : "none");
      }),
      (v.prototype._insertPaintLayer = function (e, t) {
        var n = this,
          _interopRequireDefault = false,
          GTouchTool = null,
          d = null,
          GOutlineSidebar = null,
          GProperties = null,
          m = null,
          v = 0,
          _ = 0,
          b = function (t, n, _interopRequireDefault, i) {
            if (_interopRequireDefault)
              this._iterateEqualPaintLayer(e, function (e) {
                e.setProperties(t, n, false, false, true);
              });
            else {
              if (!this._document) return;
              var AppSettings = null;
              if (i) {
                var l = e.getParent().getIndexOfChild(e);
                AppSettings = $.extend({ fillLayerIndex: l }, i);
              }
              this._ownChange = true;
              var GTouchTool = this._document.getEditor();
              GTouchTool.beginTransaction();
              try {
                this._iterateEqualPaintLayer(e, function (e, _interopRequireDefault) {
                  var i = GTools.GElementEditor.getEditor(_interopRequireDefault);
                  (i && i.applyPropertiesToParts(t, n)) ||
                    e.setProperties(t, n);
                });
              } finally {
                GTouchTool.commitTransaction(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GFillPaintLayerProperties",
                      "action.change-properties"
                    )
                  ),
                  AppSettings
                ),
                  (this._ownChange = false);
              }
            }
          }.bind(this),
          w = function (e) {
            if (GTouchTool) {
              var t = $(e).data("paintLayer");
              if (t && (t !== GTouchTool || i.GPlatform.modifiers.shiftKey))
                return GTouchTool.getParent() === t.getParent();
            }
            return false;
          },
          C = $("<div/>").addClass("g-drop-indicator"),
          x = function (e) {
            return "_bl" === e
              ? $("<select></select>")
                  .gBlendMode()
                  .gRichTooltip(
                    l.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GAppearanceProperties",
                          "text.blend-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GAppearanceProperties",
                          "text.blend-tooltip-description"
                        )
                      ),
                      middle: false,
                      forceShow: true,
                      learnMore: AppSettings.LINKS.BLENDING_MODES_DOCUMENTATION_URL,
                    })
                  )
                  .attr("data-property", "_bl")
                  .on("change", function (e) {
                    gDesigner.stats(
                      "fill_change_blend-mode",
                      $(e.target).val()
                    ),
                      b(["_bl"], [$(e.target).val()]);
                  })
              : "_op" === e
              ? $("<input>")
                  .addClass("fill-op")
                  .attr("data-property", "_op")
                  .attr("type", "text")
                  .on("change", function (e, t) {
                    gDesigner.stats("fill_change_opacity"),
                      b(
                        ["_vs", "_op"],
                        [
                          true,
                          (t ||
                            GCore.GLength.parseEquationValue(
                              $(this).gInputBox("value")
                            )) / 100,
                        ]
                      ),
                      $(e.target)
                        .parents(".touch")
                        .find(".transparency")
                        .gInputSlider(
                          "value",
                          GCore.GLength.parseEquationValue(
                            $(this).gInputBox("value")
                          )
                        );
                  })
                  .gInputBox({
                    minValue: 0,
                    maxValue: 100,
                    incrementValue: gDesigner.getOpacityIncrement(),
                    postfix: "%",
                  })
              : "_vs" === e
              ? $("<span></span>")
                  .attr("data-property", "_vs")
                  .addClass(
                    "fill-action fill-visibility gravit-icon-touch-show"
                  )
                  .attr(
                    "data-title",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GCommonNames",
                        "action.toggle-visibility"
                      )
                    )
                  )
                  .on("click", function (e) {
                    gDesigner.stats("fill_hide_show"), e.stopPropagation();
                    var t = $(this).hasClass("gravit-icon-touch-hide");
                    $(this).removeClass(
                      "gravit-icon-touch-" + (t ? "hide" : "show")
                    ),
                      $(this).addClass(
                        "gravit-icon-touch-" + (t ? "show" : "hide")
                      ),
                      b(["_vs"], [t]);
                  })
              : "_ra" === e
              ? $("<div/>")
                  .addClass("transparency gravit-icon-touch-rectangle")
                  .gInputSlider({ type: "range", min: 0, max: 100, step: 1 })
                  .on("input", function (e) {
                    var t = $(e.target),
                      n = parseInt(t.gInputSlider("value"));
                    t.parents(".touch").find(".fill-op").trigger("change", [n]);
                  })
              : undefined;
          },
          S = $("<div></div>")
            .addClass("fill-block")
            .addClass("g-cursor-hand-open")
            .attr("data-drag-mode", g.default.PRESS_AND_HOLD)
            .data("paintLayer", e)
            .attr("draggable", "true")
            .on("mousedown", function (e) {
              (_interopRequireDefault =
                gDesigner.isTouchEnabled() &&
                e.originalEvent &&
                e.originalEvent.target
                  ? !!$(e.originalEvent.target).closest(".drag-indicator")
                      .length
                  : $(e.target).hasClass("fill-block") ||
                    $(e.target).hasClass("gravit-icon-drag-indicator") ||
                    $(e.target).hasClass("columns") ||
                    $(e.target).hasClass("column")),
                $(e.target)
                  .closest(".fill-block")
                  .toggleClass("g-draggable-disabled", !_interopRequireDefault);
            })
            .on("dragstart", function (e) {
              if (!_interopRequireDefault) return e.preventDefault(), void e.stopPropagation();
              var t = $(e.target).closest(".fill-block"),
                AppSettings = t.offset(),
                l = e.originalEvent;
              (d = window.gDragImage()).addClass(
                "drag-delete gravit-icon-trash"
              ),
                (GProperties = n._panel.offset()),
                (m = n._panel.outerHeight()),
                (v = e.clientX - AppSettings.left),
                (_ = e.clientY - AppSettings.top),
                l.stopPropagation(),
                (GTouchTool = t.data("paintLayer")),
                (l.dataTransfer.effectAllowed = "move"),
                l.dataTransfer.setData("text/plain", "dummy_data"),
                n._panel.find(".fill-block").each(function (e, t) {
                  $(t).append(
                    $("<div></div>")
                      .addClass("grid-drag-overlay")
                      .on("dragenter", function () {
                        var e = $(this.parentNode).data("paintLayer");
                        if (w(this.parentNode)) {
                          if (GTouchTool && e && GTouchTool.getParent() === e.getParent()) {
                            var t = GTouchTool.getParent(),
                              n = t.getIndexOfChild(GTouchTool),
                              _interopRequireDefault = t.getIndexOfChild(e);
                            n !== _interopRequireDefault &&
                              (n < _interopRequireDefault
                                ? C.insertBefore(this.parentNode)
                                : C.insertAfter(this.parentNode));
                          }
                        } else C.remove();
                      })
                      .on("dragleave", function () {
                        w(this.parentNode) &&
                          $(this).parent().find(".g-drop-indicator").remove();
                      })
                      .on("dragover", function (e) {
                        var t = e.originalEvent;
                        w(this.parentNode) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          (t.dataTransfer.dropEffect = "move"));
                      })
                      .on("drop", function (e) {
                        var t = $(this.parentNode)
                          .closest(".fill-block")
                          .data("paintLayer");
                        if (
                          (n._panel.find(".g-drop-indicator").remove(),
                          n._panel.find(".grid-drag-overlay").remove(),
                          GTouchTool && t && GTouchTool.getParent() === t.getParent())
                        ) {
                          var _interopRequireDefault = GTouchTool.getParent(),
                            AppSettings = _interopRequireDefault.getIndexOfChild(GTouchTool),
                            l = _interopRequireDefault.getIndexOfChild(t);
                          GTools.GEditor.tryRunTransaction(
                            _interopRequireDefault,
                            function () {
                              if (i.GPlatform.modifiers.shiftKey) {
                                var e = GTouchTool.clone();
                                _interopRequireDefault.insertChild(e, AppSettings < l ? t.getNext() : t);
                              } else
                                AppSettings !== l &&
                                  (_interopRequireDefault.removeChild(GTouchTool),
                                  _interopRequireDefault.insertChild(GTouchTool, AppSettings < l ? t.getNext() : t));
                            },
                            i.GPlatform.modifiers.shiftKey
                              ? GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GFillPaintLayerProperties",
                                    "action.duplicate"
                                  )
                                )
                              : GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GFillPaintLayerProperties",
                                    "action.move"
                                  )
                                )
                          ),
                            n._updateProperties(),
                            n._setSelectedPaintLayer(GTouchTool);
                        }
                        GTouchTool = null;
                      })
                  );
                });
            })
            .on("drag", function (e) {
              GOutlineSidebar = (0, p.handleDragForDeleteIcon)(e, d, GProperties, m, v, _);
            })
            .on("dragend", function (e) {
              var t = e.originalEvent,
                _interopRequireDefault = $(e.target)
                  .closest(".fill-block")
                  .closest(".fill-block")
                  .data("paintLayer");
              if (
                (n._panel.find(".g-drop-indicator").remove(),
                n._panel.find(".grid-drag-overlay").remove(),
                GTouchTool && _interopRequireDefault && GTouchTool.getParent() === _interopRequireDefault.getParent())
              ) {
                var AppSettings = GTouchTool.getParent(),
                  l = AppSettings.getIndexOfChild(GTouchTool),
                  p = AppSettings.getIndexOfChild(_interopRequireDefault);
                GTools.GEditor.tryRunTransaction(
                  AppSettings,
                  function () {
                    if (i.GPlatform.modifiers.shiftKey) {
                      var e = GTouchTool.clone();
                      AppSettings.insertChild(e, l < p ? _interopRequireDefault.getNext() : _interopRequireDefault);
                    } else
                      l !== p &&
                        (AppSettings.removeChild(GTouchTool),
                        AppSettings.insertChild(
                          GTouchTool,
                          l < p ? _interopRequireDefault.getNext() : _interopRequireDefault.getPrevious()
                        ));
                  },
                  i.GPlatform.modifiers.shiftKey
                    ? GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GFillPaintLayerProperties",
                          "action.duplicate"
                        )
                      )
                    : GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GFillPaintLayerProperties",
                          "action.move"
                        )
                      )
                ),
                  n._updateProperties(),
                  n._setSelectedPaintLayer(GTouchTool);
              }
              GTouchTool &&
                GOutlineSidebar &&
                GTools.GEditor.tryRunTransaction(
                  n._elements[0],
                  function () {
                    var e = [];
                    n._iterateEqualPaintLayer(GTouchTool, function (t) {
                      e.push(t);
                    }),
                      GCore.GUtil.each(e, function (e, t) {
                        t.getParent().removeChild(t);
                      });
                  },
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GFillPaintLayerProperties",
                      "action.remove"
                    )
                  )
                ),
                d && d.css("display", "none"),
                (d = null),
                t.stopPropagation(),
                (GTouchTool = null);
            })
            .on("click", function () {
              n._setSelectedPaintLayer(e);
            })
            .gPropertyRow({
              columns: [
                {
                  clazz: "drag-indicator",
                  content: $("<div></div>").addClass(
                    "gravit-icon-drag-indicator g-cursor-hand-open gravit-icon-touch-drag-indicator"
                  ),
                },
                {
                  width: "40px",
                  clazz: "color-preview",
                  content: $("<div></div>")
                    .attr("data-property", "_pt")
                    .gPatternChooser({
                      types: [
                        GCore.GColor,
                        GCore.GLinearGradient,
                        GCore.GRadialGradient,
                        GCore.GAngularGradient,
                        GCore.GBackground,
                        GCore.GTexturePattern,
                        GCore.GNoisePattern,
                      ],
                      hasMask: true,
                    })
                    .on("chooseropen", function () {
                      n._document.getEditor().hideSelection(),
                        gDesigner
                          .getWorkspace()
                          .getStyleEdManager()
                          .updateEditor(e, "_pt", false),
                        n._setSelectedPaintLayer(e),
                        (n._styleEdOn = true),
                        (n._chooserElem = $(this));
                    })
                    .on("chooserclose", function (e, t, _interopRequireDefault) {
                      if (
                        gDesigner
                          .getWorkspace()
                          .getStyleEdManager()
                          .getOverlayLock(_interopRequireDefault)
                      )
                        t();
                      else if (
                        ((n._styleEdOn = false),
                        gDesigner
                          .getWorkspace()
                          .getStyleEdManager()
                          .deactivateEditor(),
                        n._document &&
                          (n._document.getEditor().resetHideSelection(),
                          n._document.hasCDR()))
                      ) {
                        var i = gPatternChooser.getPattern();
                        !i ||
                          i instanceof GCore.GRGBColor ||
                          GSystemDialog.showCDRUnsupportedObjectWarning();
                      }
                      n._chooserElem = null;
                    })
                    .on("patternchange", function (e, t, n, _interopRequireDefault, i, GTools) {
                      var GCore = ["_vs"],
                        AppSettings = [true];
                      undefined !== t && (GCore.push("_pt"), AppSettings.push(t)),
                        "number" == typeof n && (GCore.push("_op"), AppSettings.push(n));
                      var l = null;
                      i &&
                        ((l = { chooserOn: true }),
                        null != GTools && (l.activeStopIdx = GTools)),
                        b(GCore, AppSettings, _interopRequireDefault, l);
                    }),
                },
                {
                  width: "auto",
                  content: $("<select></select>")
                    .addClass("normal")
                    .gBlendMode()
                    .gRichTooltip(
                      l.GRichTooltipConfig.from({
                        title: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GAppearanceProperties",
                            "text.blend-tooltip-title"
                          )
                        ),
                        description: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GAppearanceProperties",
                            "text.blend-tooltip-description"
                          )
                        ),
                        middle: false,
                        forceShow: true,
                        learnMore: AppSettings.LINKS.BLENDING_MODES_DOCUMENTATION_URL,
                      })
                    )
                    .attr("data-property", "_bl")
                    .on("change", function (e) {
                      gDesigner.stats(
                        "fill_change_blend-mode",
                        $(e.target).val()
                      ),
                        b(["_bl"], [$(e.target).val()]);
                    }),
                },
                {
                  width: "45px",
                  content: $("<input>")
                    .addClass("normal")
                    .attr("data-property", "_op")
                    .attr("type", "text")
                    .on("change", function (e) {
                      gDesigner.stats("fill_change_opacity"),
                        b(
                          ["_vs", "_op"],
                          [
                            true,
                            GCore.GLength.parseEquationValue(
                              $(this).gInputBox("value")
                            ) / 100,
                          ]
                        );
                    })
                    .gInputBox({
                      minValue: 0,
                      maxValue: 100,
                      incrementValue: gDesigner.getOpacityIncrement(),
                      postfix: "%",
                    }),
                },
                {
                  width: "20px",
                  content: $("<span></span>")
                    .attr("data-property", "_vs")
                    .addClass(
                      "fill-action fill-visibility gravit-icon-display normal"
                    )
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GCommonNames",
                          "action.toggle-visibility"
                        )
                      )
                    )
                    .on("click", function (e) {
                      gDesigner.stats("fill_hide_show"), e.stopPropagation();
                      var t = $(this).hasClass("gravit-icon-hide");
                      $(this).removeClass(
                        "gravit-icon-" + (t ? "hide" : "display")
                      ),
                        $(this).addClass(
                          "gravit-icon-" + (t ? "display" : "hide")
                        ),
                        b(["_vs"], [t]);
                    }),
                },
                {
                  width: "auto",
                  content: $("<div/>")
                    .addClass("touch")
                    .gPropertyRow({
                      columns: [
                        { width: "auto", content: x("_bl") },
                        { width: "60px", content: x("_vs") },
                      ],
                    })
                    .gPropertyRow({
                      columns: [
                        { width: "auto", content: x("_ra") },
                        { width: "60px", content: x("_op") },
                      ],
                    }),
                },
              ],
            })
            .prependTo(this._panel);
        S.find(".columns").addClass("g-cursor-hand-open"),
          S.find(".column").addClass("g-cursor-hand-open"),
          S.find(".touch").parents(".column").addClass("g-touch"),
          S.find(".normal").parents(".column").addClass("g-normal"),
          S.find('[data-property="_pt"]')
            .parents(".column")
            .addClass("g-color"),
          S.find(".transparency")
            .parents(".touch div:last-child>div")
            .addClass("g-transparency"),
          S.find(".touch")
            .find("select")
            .addClass("g-select")
            .parent()
            .append($("<span/>").addClass("gravit-icon-touch-arrowDown")),
          S.contextmenu({ context: f.FillPropertyPanel }, function (e) {
            e.preventDefault();
            var t = $(this).data("paintLayer");
            n._setSelectedPaintLayer(t),
              $(gDesigner.getWindows().getHtmlElement()).trigger(
                "contextmenu",
                { previousEvent: e, data: { paintLayer: t } }
              );
          }),
          this._setSelectedPaintLayer(e),
          this._updatePaintLayer(e, t),
          S.find(".transparency").each(function (e, t) {
            $(t).gInputSlider(
              "value",
              parseInt($(this).parents(".touch").find(".fill-op").val())
            );
          });
      }),
      (v.prototype.openPatternChooser = function () {
        this._panel
          .find(".fill-block:first-child")
          .find('[data-property="_pt"]')
          .find(".g-button")
          .click();
      }),
      (v.prototype.openEyeDropper = function (e, t) {
        this._panel
          .find(".fill-block:first-child")
          .find('[data-property="_pt"]')
          .gPatternChooser("openEyeDropper", e, t);
      }),
      (v.prototype._setSelectedPaintLayer = function (e) {
        this._panel.find(".fill-block").each(function (t, n) {
          var _interopRequireDefault = $(n);
          _interopRequireDefault.toggleClass("g-selected", _interopRequireDefault.data("paintLayer") === e);
        }),
          this._document && this._document.updateActiveStylesList("Fill", e);
      }),
      (v.prototype._getSelectedPaintLayer = function () {
        return this._panel.find(".fill-block.g-selected").data("paintLayer");
      }),
      (v.prototype._removePaintLayer = function (e) {
        this._panel.find(".fill-block").each(function (t, n) {
          var _interopRequireDefault = $(n);
          if (_interopRequireDefault.data("paintLayer") === e) return _interopRequireDefault.remove(), false;
        });
      }),
      (v.prototype._updatePaintLayer = function (e, t) {
        e &&
          this._panel.find(".fill-block").each(function (n, _interopRequireDefault) {
            var i = $(_interopRequireDefault);
            if (i.data("paintLayer") === e) {
              i
                .find('[data-property="_pt"]')
                .gPatternChooser("setPattern", e.getProperty("_pt", false, false, true))
                .gPatternChooser("value", e.getProperty("_pt", false, false, true))
                .gPatternChooser("opacity", e.getProperty("_op", false, false, true)),
                i.find('[data-property="_op"]').each(function (t, n) {
                  $(n).gInputBox(
                    "value",
                    GCore.GUtil.formatOpacity(
                      100 * e.getProperty("_op", false, false, true)
                    )
                  );
                }),
                i.find('[data-property="_bl"]').val(e.getProperty("_bl"));
              var AppSettings = e.getProperty("_vs");
              if (
                (i
                  .find('[data-property="_vs"]')
                  .removeClass("gravit-icon-" + (AppSettings ? "hide" : "display"))
                  .addClass("gravit-icon-" + (AppSettings ? "display" : "hide")),
                t &&
                  (t.evtType == GTools.GEditor.ModifiedEvent.Type.Undo ||
                    t.evtType == GTools.GEditor.ModifiedEvent.Type.Redo) &&
                  t.chooserOn &&
                  null != t.fillLayerIndex)
              )
                e.getParent().getIndexOfChild(e) == t.fillLayerIndex &&
                  i
                    .find(".preview")
                    .trigger(
                      "click",
                      null != t.activeStopIdx ? t.activeStopIdx : null
                    );
            }
          });
      }),
      (v.prototype._afterInsert = function (e) {
        e.node instanceof GCore.GStylable.FillPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0] &&
          (this._insertPaintLayer(e.node), this._updateToolbar());
      }),
      (v.prototype._beforeRemove = function (e) {
        if (
          e.node instanceof GCore.GStylable.FillPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0]
        ) {
          this._removePaintLayer(e.node);
          for (
            var module = e.node.getPrevious();
            module && !(module instanceof GCore.GStylable.FillPaintLayer);

          )
            module = module.getPrevious();
          if (!(module instanceof GCore.GStylable.FillPaintLayer))
            for (
              module = e.node.getNext();
              module && !(module instanceof GCore.GStylable.FillPaintLayer);

            )
              module = module.getNext();
          this._setSelectedPaintLayer(module), this._updateToolbar();
        }
      }),
      (v.prototype._afterPropertiesChange = function (e) {
        e.node instanceof GCore.GStylable.FillPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0] &&
          this._updatePaintLayer(e.node);
      }),
      (v.prototype._iterateEqualPaintLayer = function (e, t) {
        if (e)
          for (
            var require = e.getParent().getIndexOfChild(e), _interopRequireDefault = 0;
            _interopRequireDefault < this._elements.length;
            ++_interopRequireDefault
          ) {
            var i = this._elements[_interopRequireDefault].getPaintLayers();
            GCore.GUtil.each(
              i.getFillLayers(),
              function (GTools, GCore) {
                ((GCore && GCore === e) ||
                  (GCore.constructor === e.constructor &&
                    i.getIndexOfChild(GCore) === require)) &&
                  t(GCore, this._elements[_interopRequireDefault]);
              }.bind(this)
            );
          }
      }),
      (exports.exports = v);
  }