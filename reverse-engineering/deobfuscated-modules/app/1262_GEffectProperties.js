/**
 * Webpack Module #1262
 * Type: class
 * Name: GEffectProperties
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(328) /* polyfill_Array_sort */, require(96) /* polyfill_JSON_stringify */, require(865) /* polyfill_Number_toFixed */, require(193) /* polyfill_Object_keys */, require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      GEvent_type = _interopRequireDefault(require(807) /* GEvent_type */),
      DataModule_1161 = require(1161) /* DataModule_1161 */,
      u = _interopRequireDefault(require(565) /* module_565 */),
      GProperties = require(123) /* GProperties */,
      DataModule_1263 = require(1263) /* DataModule_1263 */,
      GEffectsPanel = require(1526) /* GEffectsPanel */,
      f = require(450) /* module_450 */;
    const m = require(607) /* module_607 */,
      { SidebarsIds: y } = require(198) /* Exports_GOutlineSidebar */;
    var v = null,
      _ = null,
      b = null,
      w = null,
      C = null,
      x = null,
      S = null;
    function E() {
      (this._elements = []),
        (v = GCore.GLocale.get(
          new GCore.GLocaleKey("GEffectProperties", "text.most-used")
        )),
        (_ = GCore.GLocale.get(new GCore.GLocaleKey("GEffectProperties", "text.blur"))),
        (b = GCore.GLocale.get(
          new GCore.GLocaleKey("GEffectProperties", "text.artistic")
        )),
        (w = GCore.GLocale.get(
          new GCore.GLocaleKey("GEffectProperties", "text.adjust")
        )),
        (C = GCore.GLocale.get(
          new GCore.GLocaleKey("GEffectProperties", "text.distortion")
        )),
        (x = GCore.GLocale.get(
          new GCore.GLocaleKey("GEffectProperties", "text.other")
        )),
        (S = GCore.GLocale.get(
          new GCore.GLocaleKey("GEffectProperties", "text.shadow")
        )),
        V || (V = H());
    }
    GCore.GObject.inherit(E, GProperties),
      (E.EngCat = (e) =>
        e === v
          ? "MostUsed"
          : e === _
          ? "Blur"
          : e === b
          ? "Artistic"
          : e === w
          ? "Adjust"
          : e === C
          ? "Distortion"
          : e === x
          ? "Other"
          : "Shadow"),
      (E.prototype._panel = null),
      (E.prototype._toolbar = null),
      (E.prototype._document = null),
      (E.prototype._elements = null),
      (E.prototype._addEffectMenu = null),
      (E.prototype._effectsPanel = null),
      (E.prototype._disableFx = null),
      (E.prototype._defaultEffects = [
        GCore.GDropShadowEffect,
        GCore.GInnerShadowEffect,
        GCore.GBlurEffect,
        GCore.GGLColorAdjustEffect,
      ]),
      (E.prototype._styleEditorChange = false),
      (E.prototype._styleEdOn = false),
      (E.prototype._ownChange = false),
      (E.prototype._chooserElem = null),
      (E.prototype.init = function (e, t) {
        (this._toolbar = t.addClass("list-toolbar effects-toolbar")),
          this._createAddEffectMenu(),
          (this._panel = e.addClass("effects-properties-panel")),
          this.setTouchTools([
            new GTouchTool.default({
              id: "effect",
              icon: "gravit-icon-touch-effect-panel",
              panel: this._panel,
              toolbar: this._toolbar,
              panelWidth: "368px",
            }),
          ]);
        var n = this;
        $("<label></label>")
          .text(GCore.GLocale.get(new GCore.GLocaleKey("GEffectProperties", "title")))
          .appendTo(this._toolbar),
          this._toolbar.append(
            $("<button></button>")
              .append($("<span></span>").addClass("gravit-icon-plus"))
              .append($("<span></span>").addClass("gravit-icon-touch-plus"))
              .on("click", function () {
                gDesigner.stats("effects_open_effectsmenu", "main"),
                  n._openEffectsMenu(this);
              })
              .gRichTooltip(
                GRichTooltipConfig.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GEffectProperties",
                      "text.add-effect-tooltip-title"
                    )
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GEffectProperties",
                      "text.add-effect-tooltip-description"
                    )
                  ),
                  learnMore:
                    "",
                })
              )
          ),
          (this._effectsPanel = $("<div></div>")
            .addClass("effects-panel")
            .append($("<div></div>").addClass("effects"))
            .appendTo(this._panel));
        for (
          var _interopRequireDefault = function (e, t) {
              var _interopRequireDefault = e;
              (function () {
                gDesigner.stats(
                  "effects_add_effectsmenu",
                  (e &&
                    GCore.GLocale.getValue(
                      (t && t.i18n) || e,
                      "name",
                      "unknown",
                      0
                    )) ||
                    "unkn"
                ),
                  GTools.GEditor.tryRunTransaction(
                    this._elements[0],
                    function () {
                      for (var e = 0; e < this._elements.length; ++e) {
                        var t = new _interopRequireDefault();
                        this._validateInsertation(
                          this._elements[e].getEffects(),
                          t
                        ) && this._elements[e].getEffects().appendChild(t),
                          n._addEffectMenu.close();
                        const GTools = gDesigner
                          .getRightSidebars()
                          .getSidebar(y.GInspectorSidebar);
                        GTools.trigger(new GEvent_type.default(GEvent_type.default.Type.ChildAdded, GTools));
                      }
                    }.bind(this),
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GEffectProperties", "action.add")
                    )
                  );
              }).bind(this)();
            }.bind(this),
            GEditor = 0;
          GEditor < V.length;
          ++GEditor
        ) {
          var DataModule_1161 = V[GEditor];
          $.inArray(DataModule_1161.clazz, this._defaultEffects) > -1 &&
            this._createDefaultEffect(false, DataModule_1161, _interopRequireDefault);
        }
        this._createDefaultEffect(true),
          gDesigner
            .getWorkspace()
            .getStyleEdManager()
            .addEventListener(
              GTools.GStyleEdManager.EditorEvent,
              this._styleEditorEventHandler,
              this
            ),
          this._panel.data("contextmenu", true);
      }),
      (E.prototype._openEffectsMenu = function (e) {
        this._addEffectMenu.open(e);
      }),
      (E.prototype.update = function (e, t, n) {
        if (this._styleEditorChange) return (this._styleEditorChange = false), true;
        if (this._ownChange) return true;
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
            (this._document = null),
            (this._elements = null),
            this._invalidateEffects()),
          (this._elements = []),
          e && t && t.length)
        ) {
          for (var _interopRequireDefault = 0; _interopRequireDefault < t.length; ++_interopRequireDefault)
            t[_interopRequireDefault].hasMixin(GCore.GStylable) &&
              t[_interopRequireDefault]
                .getStylePropertySets()
                .indexOf(GCore.GStylable.PropertySet.Effects) >= 0 &&
              this._elements.push(t[_interopRequireDefault]);
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
              this._invalidateEffects(n),
              true
            );
        }
        return false;
      }),
      (E.prototype._styleEditorEventHandler = function (e) {
        this._styleEdOn &&
          e.type == GTools.GStyleEdManager.EditorEventType.PrepareModifiedEvent &&
          (this._styleEditorChange = true);
      }),
      (E.prototype._afterInsert = function (e) {
        e.node instanceof GCore.GStylable.Effect &&
          e.node.getOwnerStylable() === this._elements[0] &&
          (this._insertEffect(e.node), this._updateToolbar());
      }),
      (E.prototype._beforeRemove = function (e) {
        e.node instanceof GCore.GStylable.Effect &&
          e.node.getOwnerStylable() === this._elements[0] &&
          (this._removeEffect(e.node), this._updateToolbar());
      }),
      (E.prototype._afterPropertiesChange = function (e) {
        (!e.temporary || e.node instanceof GCore.GOverlayEffect) &&
          e.node instanceof GCore.GStylable.Effect &&
          e.node.getOwnerStylable() === this._elements[0] &&
          this._updateEffect(e.node);
      }),
      (E.prototype._iterateEqualEffects = function (e, t, n) {
        for (
          var _interopRequireDefault = e.getOwnerStylable(),
            GTools = e.getParent().getIndexOfChild(e),
            GEditor = 0;
          GEditor < this._elements.length;
          ++GEditor
        )
          if (!_interopRequireDefault || this._elements[GEditor] !== _interopRequireDefault || n)
            for (
              var GRichTooltipConfig = this._elements[GEditor].getEffects(), GTouchTool = GRichTooltipConfig.getFirstChild();
              null !== GTouchTool;
              GTouchTool = GTouchTool.getNext()
            )
              (GTouchTool !== e || n) &&
                ((GCore.GUtil.equals(GTouchTool, e) && !n) ||
                  (GTouchTool.constructor === e.constructor &&
                    GRichTooltipConfig.getIndexOfChild(GTouchTool) === GTools)) &&
                t(GTouchTool);
      }),
      (E.prototype._insertEffect = function (e, t) {
        var n = this,
          _interopRequireDefault = null,
          GRichTooltipConfig = null,
          GTouchTool = null,
          GProperties = 0,
          DataModule_1263 = 0,
          GEffectsPanel = null,
          v = function () {
            GTools.GEditor.tryRunTransaction(
              e,
              function () {
                this._iterateEqualEffects(e, function (t) {
                  t.setProperty("cl", !e.getProperty("cl"));
                }),
                  e.setProperty("cl", !e.getProperty("cl"));
              }.bind(this),
              GCore.GLocale.get(
                new GCore.GLocaleKey("GEffectProperties", "action.toggle-collapse")
              )
            );
          }.bind(this),
          _ = function (t) {
            t.stopPropagation(),
              GTools.GEditor.tryRunTransaction(
                e,
                function () {
                  this._iterateEqualEffects(e, function (t) {
                    t.setProperty("vs", !e.getProperty("vs"));
                  }),
                    e.setProperty("vs", !e.getProperty("vs"));
                }.bind(this),
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GEffectProperties",
                    "action.toggle-visibility"
                  )
                )
              );
          }.bind(this),
          b = function (t) {
            var n = V.find((t) => e instanceof t.clazz);
            gDesigner.stats(
              "effects_delete_effect",
              GCore.GLocale.getValue(
                (n && n.i18n) || e,
                "name",
                e.getNodeName(),
                666
              )
            ),
              t.stopPropagation(),
              GTools.GEditor.tryRunTransaction(
                e,
                function () {
                  this._iterateEqualEffects(e, function (e) {
                    e.getParent().removeChild(e);
                  }),
                    e.getParent().removeChild(e),
                    gDesigner.setMouseOverContext(null);
                }.bind(this),
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GEffectProperties", "action.remove")
                )
              );
            const _interopRequireDefault = gDesigner
              .getRightSidebars()
              .getSidebar(y.GInspectorSidebar);
            _interopRequireDefault.trigger(new GEvent_type.default(GEvent_type.default.Type.ChildRemoved, _interopRequireDefault));
          }.bind(this),
          w = null,
          C = e.getPrevious();
        C &&
          this._effectsPanel.find(".effect-block").each(function (e, t) {
            var n = $(t);
            if (n.data("effect") === C) return (w = n), false;
          });
        var x = U(e),
          S = $("<div/>").addClass("g-drop-indicator"),
          E = $("<div></div>")
            .addClass("effect-header")
            .addClass("g-cursor-hand-open"),
          P = $("<div></div>")
            .addClass("effect-block")
            .attr("data-drag-mode", u.default.PRESS_AND_HOLD)
            .data("effect", e)
            .attr("draggable", "true")
            .on("mousedown", function (e) {
              (A =
                $(e.target).hasClass("effect-title") ||
                $(e.target).hasClass("gravit-icon-drag-indicator") ||
                $(e.target).hasClass("effect-header")),
                $(e.target)
                  .closest(".effect-block")
                  .toggleClass("g-draggable-disabled", !A);
            })
            .on("click", function (e) {
              var t = $(e.target).parents(".effect-block");
              t.children().addClass("selected"),
                t.siblings().children().removeClass("selected");
            })
            .on("mousedown", (e) => {
              GEffectsPanel = e.originalEvent.target;
            })
            .on("dragstart", function (e) {
              var t = GEffectsPanel || e.target;
              if (
                !A ||
                (gDesigner.isTouchEnabled() &&
                  !$(t).closest(".effect-header").length)
              )
                return e.preventDefault(), void e.stopPropagation();
              var GEvent_type = $(e.target).closest(".effect-block"),
                DataModule_1161 = GEvent_type.offset(),
                u = e.originalEvent;
              (_interopRequireDefault = gDragImage()).addClass("drag-delete gravit-icon-trash"),
                (GRichTooltipConfig = n._panel.offset()),
                (GTouchTool = n._effectsPanel.outerHeight()),
                (GProperties = e.clientX - DataModule_1161.left),
                (DataModule_1263 = e.clientY - DataModule_1161.top),
                u.stopPropagation(),
                (T = GEvent_type.data("effect")),
                (u.dataTransfer.effectAllowed = "move"),
                u.dataTransfer.setData("text/plain", "dummy_data"),
                n._effectsPanel.find(".effect-block").each(function (e, t) {
                  $(t).append(
                    $("<div></div>")
                      .addClass("grid-drag-overlay")
                      .on("dragenter", function () {
                        var e = $(this.parentNode).data("effect");
                        if (G(this.parentNode)) {
                          if (
                            (u.preventDefault(),
                            u.stopPropagation(),
                            (u.dataTransfer.dropEffect = "move"),
                            T && e && T.getParent() === e.getParent())
                          ) {
                            var t = T.getParent(),
                              n = t.getIndexOfChild(T),
                              _interopRequireDefault = t.getIndexOfChild(e);
                            n !== _interopRequireDefault &&
                              (n < _interopRequireDefault
                                ? S.insertBefore(this.parentNode)
                                : S.insertAfter(this.parentNode));
                          }
                        } else S.remove();
                      })
                      .on("dragleave", function () {
                        G(this.parentNode) &&
                          $(this).parent().find(".g-drop-indicator").remove();
                      })
                      .on("dragover", function (e) {
                        var t = e.originalEvent;
                        G(this.parentNode) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          (t.dataTransfer.dropEffect = "move"));
                      })
                      .on("drop", function (e) {
                        var t = $(this.parentNode)
                          .closest(".effect-block")
                          .data("effect");
                        if (
                          (n._panel.find(".g-drop-indicator").remove(),
                          n._panel.find(".grid-drag-overlay").remove(),
                          T && t && T.getParent() === t.getParent())
                        ) {
                          var _interopRequireDefault = T.getParent(),
                            GRichTooltipConfig = _interopRequireDefault.getIndexOfChild(T),
                            GTouchTool = _interopRequireDefault.getIndexOfChild(t);
                          GTools.GEditor.tryRunTransaction(
                            _interopRequireDefault,
                            function () {
                              if (GEditor.GPlatform.modifiers.shiftKey) {
                                var e = T.clone();
                                _interopRequireDefault.insertChild(e, GRichTooltipConfig < GTouchTool ? t.getNext() : t);
                              } else
                                GRichTooltipConfig !== GTouchTool &&
                                  (_interopRequireDefault.removeChild(T),
                                  _interopRequireDefault.insertChild(T, GRichTooltipConfig < GTouchTool ? t.getNext() : t));
                            },
                            GEditor.GPlatform.modifiers.shiftKey
                              ? GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GEffectProperties",
                                    "action.duplicate"
                                  )
                                )
                              : GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GEffectProperties",
                                    "action.move"
                                  )
                                )
                          );
                        }
                        T = null;
                      })
                  );
                });
            })
            .on("drag", function (e) {
              (0, DataModule_1161.handleDragForDeleteIcon)(e, _interopRequireDefault, GRichTooltipConfig, GTouchTool, GProperties, DataModule_1263);
            })
            .on("dragend", function (e) {
              var t = e.originalEvent;
              $(e.target).closest(".effect-block");
              n._panel.find(".g-drop-indicator").remove(),
                n._panel.find(".grid-drag-overlay").remove(),
                _interopRequireDefault && _interopRequireDefault.css("display", "none"),
                (_interopRequireDefault = null),
                t.stopPropagation(),
                T &&
                  GTools.GEditor.tryRunTransaction(
                    n._elements[0],
                    function () {
                      var e = [];
                      n._iterateEqualEffects(
                        T,
                        function (t) {
                          e.push(t);
                        },
                        true
                      ),
                        GCore.GUtil.each(e, function (e, t) {
                          t.getParent().removeChild(t);
                        });
                    },
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GEffectProperties", "action.remove")
                    )
                  );
            })
            .append(
              E.append(
                $("<div></div>").addClass(
                  "gravit-icon-drag-indicator g-cursor-hand-open gravit-icon-touch-drag-indicator"
                )
              )
                .append(
                  $("<div></div>")
                    .addClass("effect-title g-cursor-hand-open")
                    .append(
                      $("<label></label>").append(
                        $("<span></span>").text(e.getNodeNameTranslated())
                      )
                    )
                )
                .append(
                  $("<div></div>")
                    .addClass("effect-icon effect-visibility normal")
                    .on("click", function (e) {
                      e.stopPropagation();
                      var t = $(this).find("span").hasClass("gravit-icon-hide");
                      gDesigner.stats(
                        "effects_toggle_visibility",
                        t ? "hidden" : "visible"
                      ),
                        $(this)
                          .find("span")
                          .removeClass(
                            "gravit-icon-" + (t ? "hide" : "display")
                          ),
                        $(this)
                          .find("span")
                          .addClass("gravit-icon-" + (t ? "display" : "hide")),
                        _(e);
                    })
                    .append(
                      $("<span></span>").addClass(
                        "gravit-icon-" +
                          (e.getProperty("vs") ? "display" : "hide")
                      )
                    )
                )
                .append(
                  $("<div></div>")
                    .addClass("effect-icon effect-delete normal")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GEffectProperties", "action.remove")
                      )
                    )
                    .on("click", b)
                    .append($("<span></span>").addClass("gravit-icon-trash"))
                )
                .append(
                  $("<div></div>")
                    .addClass("effect-icon effect-setting touch")
                    .attr("data-action", "stroke-settings")
                    .append(
                      $("<span></span>").addClass("gravit-icon-touch-settings")
                    )
                    .on(
                      "click",
                      function (e) {
                        (e.data = { context: f.EffectPropertyPanel }),
                          P.trigger("contextmenu", [e]);
                      }.bind(this)
                    )
                )
                .append(
                  $("<div></div>")
                    .addClass("effect-icon effect-delete touch")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GEffectProperties", "action.remove")
                      )
                    )
                    .on("click", b)
                    .append(
                      $("<span></span>").addClass("gravit-icon-touch-trash")
                    )
                )
                .append(
                  $("<div></div>")
                    .addClass("effect-icon effect-visibility touch")
                    .on("click", function (e) {
                      e.stopPropagation();
                      var t = $(this)
                        .find("span")
                        .hasClass("gravit-icon-touch-hide");
                      gDesigner.stats(
                        "effects_toggle_visibility",
                        t ? "hidden" : "visible"
                      ),
                        $(this)
                          .find("span")
                          .removeClass(
                            "gravit-icon-touch-" + (t ? "hide" : "show")
                          ),
                        $(this)
                          .find("span")
                          .addClass(
                            "gravit-icon-touch-" + (t ? "show" : "hide")
                          ),
                        _(e);
                    })
                    .append(
                      $("<span></span>").addClass(
                        "gravit-icon-touch-" +
                          (e.getProperty("vs") ? "show" : "hide")
                      )
                    )
                )
            );
        if (x.createSettings) {
          var D = function (t, n, _interopRequireDefault, GTools) {
              if (_interopRequireDefault)
                this._iterateEqualEffects(e, function (e) {
                  e.setProperties(t, n, false, false, true);
                }),
                  e.setProperties(t, n, false, false, true);
              else {
                if (!this._document) return;
                gDesigner.stats(
                  "effects_assign_effectproperty",
                  GCore.GLocale.getValue(x.i18n, "name", e.getNodeName(), 666)
                );
                var GEditor = null;
                if (GTools) {
                  var GRichTooltipConfig = e.getParent().getIndexOfChild(e);
                  GEditor = $.extend({ effectIndex: GRichTooltipConfig }, GTools);
                }
                this._ownChange = true;
                var GTouchTool = this._document.getEditor();
                GTouchTool.beginTransaction();
                try {
                  this._iterateEqualEffects(e, function (e) {
                    e.setProperties(t, n);
                  }),
                    e.setProperties(t, n);
                } finally {
                  GTouchTool.commitTransaction(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GEffectProperties",
                        "action.change-properties"
                      )
                    ),
                    GEditor
                  ),
                    (this._ownChange = false);
                }
              }
            }.bind(this),
            L = x.createSettings.call(this, e, D);
          if (L) {
            var I = $("<div></div>").addClass("effect-settings");
            L.addClass("content"), P.append(I.append(L));
          }
        }
        w && w.length > 0
          ? P.insertBefore(w)
          : P.appendTo(this._effectsPanel.find(".effects")),
          E.gAccordion("init", ".effect-settings:last", "label").on(
            "change",
            function () {
              gDesigner.stats("effects_toggle_collapse"), v();
            }
          ),
          P.contextmenu({ context: f.EffectPropertyPanel }, function (e, t) {
            (e = t || e).preventDefault();
            var n = $(this).data("effect");
            $(gDesigner.getWindows().getHtmlElement()).trigger("contextmenu", {
              previousEvent: e,
              data: { effect: n },
            });
          }),
          P.on("mouseenter", (t) => {
            this._document &&
              this._document.updateActiveStylesList("Effect", e),
              gDesigner.setMouseOverContext(
                m.EffectPropertiesPanel,
                t,
                function (e) {
                  var t = this._panel.find(".copy-info-overlay").eq(0),
                    n = e && $(e.target).closest(".effect-block"),
                    _interopRequireDefault = (n && n.height()) || 0,
                    GTools = (n && n.position().top) || 0,
                    GEditor = _interopRequireDefault ? GTools + _interopRequireDefault / 2 : GTools,
                    GRichTooltipConfig = $("<span/>")
                      .addClass("copy-info-overlay")
                      .css({ top: GEditor })
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GEffectProperties",
                            "text.copy-effect"
                          )
                        )
                      );
                  t && t.remove(),
                    this._panel.append(GRichTooltipConfig),
                    setTimeout(() => {
                      GRichTooltipConfig.animate({ opacity: 0, top: "+=20" }, 500, GRichTooltipConfig.remove);
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
          P.on("mouseleave", () => {
            this._panel.off("mousemove.check-context"),
              this._document &&
                this._document.updateActiveStylesList("Effect", null),
              gDesigner.setMouseOverContext(null, null, null);
          }),
          this._updateEffect(e, t);
      }),
      (E.prototype._updateEffect = function (e, t) {
        this._effectsPanel.find(".effect-block").each(function (n, _interopRequireDefault) {
          var GEditor = $(_interopRequireDefault);
          if (GEditor.data("effect") === e) {
            U(e);
            if (
              e instanceof GCore.GOverlayEffect ||
              e instanceof GCore.GDropShadowEffect ||
              e instanceof GCore.GInnerShadowEffect ||
              e instanceof GCore.GCurvedShadowEffect ||
              e instanceof GCore.GContactShadowEffect ||
              e instanceof GCore.GLongShadowEffect
            )
              if (
                (GEditor
                  .find('[data-property="pat"]')
                  .gPatternChooser(
                    "setPattern",
                    e.getProperty("pat", false, false, true)
                  )
                  .gPatternChooser("value", e.getProperty("pat", false, false, true))
                  .gPatternChooser("opacity", e.getProperty("opc", false, false, true)),
                GEditor
                  .find('[data-property="opc"]')
                  .gInputBox(
                    "value",
                    GCore.GUtil.formatOpacity(
                      100 * e.getProperty("opc", false, false, true)
                    )
                  ),
                t &&
                  (t.evtType == GTools.GEditor.ModifiedEvent.Type.Undo ||
                    t.evtType == GTools.GEditor.ModifiedEvent.Type.Redo) &&
                  t.chooserOn &&
                  null != t.effectIndex)
              )
                e.getParent().getIndexOfChild(e) == t.effectIndex &&
                  GEditor
                    .find('[data-property="pat"]')
                    .find(".preview")
                    .trigger(
                      "click",
                      null != t.activeStopIdx ? t.activeStopIdx : null
                    );
            var GRichTooltipConfig = e.getProperty("vs"),
              GTouchTool = e.getProperty("ly"),
              GEvent_type = e.getProperty("cl");
            GEditor.toggleClass("g-selected", e.hasFlag(GCore.GNode.Flag.Selected)),
              GEditor.find(".effect-title input[type=checkbox]").prop("checked", GRichTooltipConfig),
              GEditor.find(".effect-header").gAccordion("toggleOpen", !GEvent_type);
            var DataModule_1161 = GEditor.find(".effect-settings");
            if (
              (DataModule_1161.css("display", GEvent_type ? "none" : ""),
              e instanceof GCore.GBlurEffect &&
                DataModule_1161
                  .find('[data-property="r"]:not(.g-input-slider)')
                  .gUnitBox("value", new GCore.GLength(e.getProperty("r"))),
              e instanceof GCore.GWebGLEffect)
            ) {
              var u = e.getProperty("shp");
              for (var GProperties in u) {
                var DataModule_1263 = u[GProperties];
                if ("number" == typeof DataModule_1263) {
                  var GEffectsPanel = DataModule_1161.find(
                    "[data-property=" + GProperties + "]:not(.g-input-slider)"
                  );
                  GEffectsPanel.gUnitBox("options").hasOwnProperty("unit") &&
                    GEffectsPanel.gUnitBox("value", new GCore.GLength(DataModule_1263, GCore.GLength.Unit.PT));
                }
              }
            }
            return (
              e instanceof GCore.GDropShadowEffect &&
                (DataModule_1161
                  .find('[data-property="r"]')
                  .gUnitBox("value", new GCore.GLength(e.getProperty("r"))),
                DataModule_1161
                  .find('[data-property="x"]')
                  .gUnitBox("value", new GCore.GLength(e.getProperty("x"))),
                DataModule_1161
                  .find('[data-property="y"]')
                  .gUnitBox("value", new GCore.GLength(e.getProperty("y")))),
              GEditor
                .find(".effect-layer")
                .attr(
                  "data-title",
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GEffectProperties", "text.applies-to")
                  ) +
                    " " +
                    GCore.GLocale.get(GCore.GStylable.StyleLayerName[GTouchTool || ""])
                )
                .find("> span")
                .toggleClass("gravit-icon-circle", !GTouchTool)
                .toggleClass(
                  "gravit-icon-fill",
                  GTouchTool === GCore.GStylable.StyleLayer.Fill
                )
                .toggleClass(
                  "gravit-icon-stroke",
                  GTouchTool === GCore.GStylable.StyleLayer.Border
                ),
              false
            );
          }
        });
      }),
      (E.prototype._removeEffect = function (e) {
        this._effectsPanel.find(".effect-block").each(function (t, n) {
          var _interopRequireDefault = $(n);
          if (_interopRequireDefault.data("effect") === e) return _interopRequireDefault.remove(), false;
        });
      }),
      (E.prototype._invalidateEffects = function (e) {
        if (
          (this._effectsPanel.find(".effects").empty(),
          this._elements && this._elements.length)
        )
          for (
            var module = this._elements[0].getEffects().getFirstChild();
            null !== module;
            module = module.getNext()
          )
            module instanceof GCore.GStylable.Effect && this._insertEffect(module, e);
        this._updateToolbar();
      }),
      (E.prototype._createAddEffectMenu = function () {
        this._addEffectMenu = new GEffectsPanel(E.EngCat);
        var e = this._addEffectMenu,
          t = e.createSelector(),
          n = this,
          _interopRequireDefault = function (e, t) {
            var _interopRequireDefault = e;
            this._elements[0].getScene();
            (function () {
              gDesigner.stats(
                "effects_add_panelbutton",
                (e &&
                  GCore.GLocale.getValue(
                    (t && t.i18n) || e,
                    "name",
                    "unknown",
                    0
                  )) ||
                  "unkn"
              ),
                GTools.GEditor.tryRunTransaction(
                  this._elements[0],
                  function () {
                    for (var e = 0; e < this._elements.length; ++e) {
                      var t = new _interopRequireDefault();
                      this._validateInsertation(
                        this._elements[e].getEffects(),
                        t
                      ) && this._elements[e].getEffects().appendChild(t),
                        n._addEffectMenu.close();
                    }
                  }.bind(this),
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GEffectProperties", "action.add")
                  )
                ),
                $(this._toolbar).gAccordion("toggleOpen", true),
                $(this._toolbar).gAccordion("init", $(this._panel));
              const GEditor = gDesigner
                .getRightSidebars()
                .getSidebar(y.GInspectorSidebar);
              GEditor.trigger(new GEvent_type.default(GEvent_type.default.Type.ChildAdded, GEditor));
            }).bind(this)();
          }.bind(this),
          GEditor = {};
        GEditor[v] = new Array();
        var GRichTooltipConfig = $("<option></option>").attr({ value: v }).append(v);
        t.append(GRichTooltipConfig);
        for (var GTouchTool = [], DataModule_1161 = 0; DataModule_1161 < V.length; ++DataModule_1161) {
          var u = V[DataModule_1161];
          if (!u.hidden) {
            u.cb = _interopRequireDefault;
            var GProperties = u.mostUsed,
              DataModule_1263 = u.category;
            if (DataModule_1263) {
              if (!GEditor[DataModule_1263]) {
                GEditor[DataModule_1263] = new Array();
                GRichTooltipConfig = $("<option></option>").attr({ value: DataModule_1263 }).append(DataModule_1263);
                GTouchTool.push(GRichTooltipConfig);
              }
              GEditor[DataModule_1263].push(u);
            }
            GProperties && GEditor[v].push(u);
          }
        }
        GTouchTool.sort(function (e, t) {
          return $(e).attr("value") ===
            GCore.GLocale.get(
              new GCore.GLocaleKey("GEffectProperties", "text.other")
            ) || $(e).attr("value") > $(t).attr("value")
            ? 1
            : $(t).attr("value") ===
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GEffectProperties", "text.other")
                ) || $(t).attr("value") > $(e).attr("value")
            ? -1
            : 0;
        });
        for (DataModule_1161 = 0; DataModule_1161 < GTouchTool.length; ++DataModule_1161) t.append(GTouchTool[DataModule_1161]);
        t.on("change", function (t) {
          gDesigner.stats("effects_choose_type", E.EngCat(this.value)),
            e.addItems(GEditor[this.value]);
        }),
          e.addItems(GEditor[v]);
      }),
      (E.prototype._validateInsertation = function (e, t) {
        if (t.isSingleton())
          for (
            var require = GCore.GObject.getTypeId(t), _interopRequireDefault = e.getFirstChild();
            null !== _interopRequireDefault;
            _interopRequireDefault = _interopRequireDefault.getNext()
          )
            if (GCore.GObject.getTypeId(_interopRequireDefault) === require) return false;
        return true;
      }),
      (E.prototype._createDefaultEffect = function (e, t, n) {
        var _interopRequireDefault = function (_interopRequireDefault) {
            e
              ? (gDesigner.stats("effects_open_effectsmenu", "more"),
                this._openEffectsMenu(_interopRequireDefault))
              : n(t.clazz, t);
          }.bind(this),
          GTools = $("<span></span>")
            .text(
              e
                ? GCore.GLocale.get(
                    new GCore.GLocaleKey("GEffectProperties", "text.more")
                  )
                : GCore.GLocale.getValue(t.i18n, "name")
            )
            .addClass("effects-default-label"),
          GEditor = $("<span>+</span>");
        $("<div></div>")
          .addClass("effects-default")
          .append(GTools)
          .append(GEditor)
          .on("click", function () {
            _interopRequireDefault(this);
          })
          .appendTo(this._panel);
      }),
      (E.prototype._updateToolbar = function () {
        var e =
          this._panel.find(".effect-block").length > 0 ||
          this._panel.find(".effects-default").length > 0;
        this._toolbar.toggleClass("empty-list", !e);
      }),
      (E.prototype.toString = function () {
        return "[Object GEffectProperties]";
      });
    var A = false,
      T = null;
    function G(e) {
      if (T) {
        var module = $(e).data("effect");
        if (module && (module !== T || GEditor.GPlatform.modifiers.shiftKey))
          return T.getParent() === module.getParent();
      }
      return false;
    }
    function P(e, t, n) {
      var _interopRequireDefault = n || e,
        GTools = _interopRequireDefault.getProperty.bind(_interopRequireDefault),
        GEditor = (this._document.getScene(), this._document.getEditor()),
        GRichTooltipConfig = GTools("shp"),
        GTouchTool = GCore.GNode.getClassFromId(GCore.GObject.getTypeId(_interopRequireDefault)).RANGES || fxRanges,
        GEvent_type = this,
        DataModule_1161 = $("<div></div>");
      for (var u in GRichTooltipConfig) {
        var GProperties = GRichTooltipConfig[u];
        if (-1 !== ["contrast", "brightness", "hue", "saturation"].indexOf(u)) {
          var GEffectsPanel = GTouchTool[u],
            f = 100 * GProperties;
          isNaN(f) || (f = GCore.GUtil.formatNumber(f, 0));
          var m = 100 * GEffectsPanel[0],
            y = 100 * GEffectsPanel[1],
            v = DataModule_1263.DefaultStops.Hue;
          if ("hue" === u)
            _interopRequireDefault instanceof GCore.GGLRecolourEffect
              ? ((m = 0), (y = 360))
              : ((m = -180), (y = 180)),
              (v = DataModule_1263.DefaultStops.Hue),
              (f = GCore.GMath.normalizeValue(GProperties, GEffectsPanel[0], GEffectsPanel[1], m, y));
          else if (-1 !== ["contrast", "brightness"].indexOf(u))
            v = DataModule_1263.DefaultStops.Luminosity;
          else if (
            "saturation" === u &&
            ((v = DataModule_1263.DefaultStops.Saturation(0)),
            _interopRequireDefault instanceof GCore.GGLRecolourEffect)
          ) {
            var _ = GCore.GMath.normalizeValue(GRichTooltipConfig.hue, GEffectsPanel[0], GEffectsPanel[1], 0, 360);
            v = DataModule_1263.DefaultStops.Saturation(_);
          }
          var b = function (e, t, n) {
            if ("hue" === t && _interopRequireDefault instanceof GCore.GGLRecolourEffect) {
              var GTools = $(n)
                  .closest(".effect-settings")
                  .find('.g-input-slider[data-property="saturation"]'),
                GEditor = GTools.gColorSlider("value");
              GTools.empty()
                .gColorSlider({
                  min: 100 * GEffectsPanel[0],
                  max: 100 * GEffectsPanel[1],
                  stops: DataModule_1263.DefaultStops.Saturation(e),
                })
                .gColorSlider("value", GEditor)
                .trigger("input");
            }
          };
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(new GCore.GLocaleKey("GWebGLEffect", u)),
              columns: [
                {
                  width: "75%",
                  content: $("<div>")
                    .attr("data-property", u)
                    .gColorSlider({ min: m, max: y, stops: v, maxDecimal: 0 })
                    .gColorSlider("value", f)
                    .on("input", function (e) {
                      var n = $(e.target).data().property,
                        _interopRequireDefault = $(e.target).gColorSlider("value"),
                        GEditor = _interopRequireDefault,
                        GRichTooltipConfig = $(e.target).gColorSlider("minValue"),
                        GTouchTool = $(e.target).gColorSlider("maxValue");
                      (_interopRequireDefault = GCore.GMath.normalizeValue(_interopRequireDefault, GRichTooltipConfig, GTouchTool, GEffectsPanel[0], GEffectsPanel[1])),
                        b(GEditor, n, e.target);
                      var GEvent_type = GTools("shp");
                      if (GEvent_type[n] !== _interopRequireDefault) {
                        var DataModule_1161 = JSON.parse(JSON.stringify(GEvent_type));
                        (DataModule_1161[n] = _interopRequireDefault), t(["shp"], [DataModule_1161]);
                      }
                      $(e.target)
                        .closest(".effect-settings")
                        .find("[data-property=" + n + "]:not(.g-input-slider)")
                        .val(GEditor)
                        .trigger("change");
                    }),
                },
                {
                  width: "40px",
                  content: $("<input>")
                    .attr("type", "text")
                    .attr("data-property", u)
                    .val(f)
                    .on("change", function (e) {
                      var n = $(e.target).data().property,
                        GEditor = Number(
                          _interopRequireDefault
                            .propertyInverseTransform(
                              n,
                              parseFloat($(e.target).gInputBox("value"))
                            )
                            .toFixed(3)
                        ),
                        GRichTooltipConfig = GTools("shp"),
                        GTouchTool = $(this)
                          .parents(".effect-settings")
                          .find(".g-input-slider[data-property=" + n + "]");
                      GTouchTool.gColorSlider("value") != GEditor &&
                        GTouchTool.gColorSlider("value", GEditor),
                        b(GEditor, n, e.target);
                      var GEvent_type = GTouchTool.gColorSlider("minValue"),
                        DataModule_1161 = GTouchTool.gColorSlider("maxValue");
                      if (
                        ((GEditor = GCore.GMath.normalizeValue(GEditor, GEvent_type, DataModule_1161, GEffectsPanel[0], GEffectsPanel[1])),
                        GRichTooltipConfig && GRichTooltipConfig[n] !== GEditor)
                      ) {
                        var u = JSON.parse(JSON.stringify(GRichTooltipConfig));
                        (u[n] = GEditor), t(["shp"], [u]);
                      }
                    })
                    .gInputBox({
                      minValue: m,
                      maxValue: y,
                      postfix: "hue" === u ? "°" : "%",
                      incrementValue: 1,
                    }),
                },
              ],
            })
            .appendTo(DataModule_1161);
        } else if ("number" == typeof GProperties) {
          f = new GCore.GLength(GProperties, GCore.GLength.Unit.PT);
          GEffectsPanel = GTouchTool[u];
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(new GCore.GLocaleKey("GWebGLEffect", u)),
              columns: [
                {
                  width: "75%",
                  content: $("<div/>")
                    .gInputSlider({
                      min: GEffectsPanel[0],
                      max: GEffectsPanel[1],
                      step: 0.002 * Math.abs(GEffectsPanel[1] - GEffectsPanel[0]),
                    })
                    .attr("data-property", u)
                    .on("mousedown", function () {
                      GEditor.hideSelection(),
                        $(document).one("mouseup", function () {
                          GEditor.resetHideSelection();
                        });
                    })
                    .gInputSlider(
                      "value",
                      Number(_interopRequireDefault.propertyInverseTransform(u, GProperties).toFixed(3))
                    )
                    .on("input", function (e) {
                      var n = $(e.target),
                        GEditor = n.data().property,
                        GRichTooltipConfig = GCore.GLength.parseEquation(
                          $(this).gInputSlider("value")
                        ),
                        GTouchTool = 0;
                      GRichTooltipConfig && (GTouchTool = GRichTooltipConfig.toPoint()),
                        (GTouchTool = Number(_interopRequireDefault.propertyTransform(GEditor, GTouchTool).toFixed(3)));
                      var GEvent_type = GTools("shp");
                      if (null !== GTouchTool && "number" == typeof GTouchTool && GEvent_type[GEditor] !== GTouchTool) {
                        var DataModule_1161 = JSON.parse(JSON.stringify(GEvent_type));
                        (DataModule_1161[GEditor] = GTouchTool), t(["shp"], [DataModule_1161], true);
                      }
                      n.closest(".effect-settings")
                        .find("[data-property=" + GEditor + "]:not(.g-input-slider)")
                        .val(GTouchTool)
                        .trigger("change");
                    })
                    .on("change", function (e) {
                      var t = $(e.target),
                        n = t.data().property,
                        GTools = GCore.GLength.parseEquation(
                          $(this).gInputSlider("value")
                        ),
                        GEditor = 0;
                      GTools && (GEditor = GTools.toPoint()),
                        (GEditor = Number(_interopRequireDefault.propertyTransform(n, GEditor).toFixed(3))),
                        t
                          .closest(".effect-settings")
                          .find(
                            "[data-property=" + n + "]:not(.g-input-slider)"
                          )
                          .val(GEditor)
                          .trigger("change");
                    }),
                },
                {
                  width: "40px",
                  content: $("<input>")
                    .attr("data-property", u)
                    .on("change", function (e) {
                      var n = $(e.target).data().property,
                        GCore = $(this).gUnitBox("value"),
                        GEditor = 0;
                      GCore && (GEditor = GCore.toPoint());
                      var GRichTooltipConfig = Number(
                          _interopRequireDefault.propertyInverseTransform(n, GEditor).toFixed(3)
                        ),
                        GTouchTool = GTools("shp"),
                        GEvent_type = $(this)
                          .parents(".effect-settings")
                          .find("[data-property=" + n + "].g-input-slider");
                      if (
                        (GEvent_type.gInputSlider("value") != GRichTooltipConfig &&
                          GEvent_type.gInputSlider("value", GRichTooltipConfig),
                        null !== GEditor && "number" == typeof GEditor && GTouchTool[n] !== GEditor)
                      ) {
                        var DataModule_1161 = JSON.parse(JSON.stringify(GTouchTool));
                        (DataModule_1161[n] = GEditor), t(["shp"], [DataModule_1161]);
                      }
                    })
                    .gUnitBox({
                      minValue: GEffectsPanel[0],
                      maxValue: GEffectsPanel[1],
                      incrementValue: 0.002 * Math.abs(GEffectsPanel[1] - GEffectsPanel[0]),
                      source: "effects",
                    })
                    .gUnitBox("value", f),
                },
              ],
            })
            .appendTo(DataModule_1161);
        } else if (GProperties instanceof Array && 3 === GProperties.length) {
          var w = undefined,
            C = [GCore.GColor];
          GRichTooltipConfig.opacity &&
            "object" == typeof GRichTooltipConfig.opacity &&
            "opacity" === GRichTooltipConfig.opacity.type &&
            ((w = GRichTooltipConfig.opacity.value), C.push()),
            $("<div></div>")
              .gPropertyRow({
                label: GCore.GLocale.get(new GCore.GLocaleKey("GWebGLEffect", u)),
                columns: [
                  {
                    width: "50px",
                    content: $("<div></div>")
                      .gPatternChooser({ types: C })
                      .gPatternChooser("value", new GCore.GRGBColor(GProperties))
                      .gPatternChooser("opacity", w)
                      .on("chooseropen", function () {
                        GEvent_type._document.getEditor().hideSelection(),
                          (GEvent_type._chooserElem = $(this));
                      })
                      .on("chooserclose", function (e, t, n) {
                        GEvent_type._document &&
                          GEvent_type._document.getEditor().resetHideSelection(),
                          (GEvent_type._chooserElem = null);
                      })
                      .on("patternchange", function (e, n, _interopRequireDefault, GCore, GEditor) {
                        var GRichTooltipConfig = GTools("shp"),
                          GTouchTool = JSON.parse(JSON.stringify(GRichTooltipConfig));
                        undefined !== n && (GTouchTool.color = n.getValue()),
                          "number" == typeof _interopRequireDefault &&
                            GRichTooltipConfig.opacity &&
                            "object" == typeof GRichTooltipConfig.opacity &&
                            "opacity" === GRichTooltipConfig.opacity.type &&
                            (GTouchTool.opacity.value = _interopRequireDefault);
                        var GEvent_type = null;
                        GEditor && (GEvent_type = { chooserOn: true }), t(["shp"], [GTouchTool], GCore, GEvent_type);
                      }),
                  },
                ],
              })
              .appendTo(DataModule_1161);
        } else if ("object" == typeof GProperties && "dropdown" === GProperties.type) {
          GEffectsPanel = GTouchTool[u];
          for (
            var x = $("<select></select>")
                .attr("data-property", u)
                .on("change", function (e) {
                  var n = $(e.target).data().property,
                    _interopRequireDefault = $(e.target).val(),
                    GCore = GTools("shp");
                  if (GCore && (!GCore[n] || GCore[n].value !== _interopRequireDefault)) {
                    var GEditor = JSON.parse(JSON.stringify(GCore));
                    (GEditor[n].value = _interopRequireDefault), t(["shp"], [GEditor]);
                  }
                }),
              S = 0;
            S < GEffectsPanel.length;
            S++
          )
            $("<option></option>")
              .attr("value", S)
              .text(GEffectsPanel[S] instanceof GCore.GLocaleKey ? GCore.GLocale.get(GEffectsPanel[S]) : GEffectsPanel[S])
              .appendTo(x);
          x.val(GProperties.value),
            $("<div></div>")
              .gPropertyRow({
                label: GCore.GLocale.get(new GCore.GLocaleKey("GWebGLEffect", u)),
                columns: [{ width: "100%", content: x }],
              })
              .appendTo(DataModule_1161);
        } else
          "boolean" == typeof GProperties &&
            $("<div></div>")
              .gPropertyRow({
                label: GCore.GLocale.get(new GCore.GLocaleKey("GWebGLEffect", u)),
                columns: [
                  {
                    width: "20px",
                    content: $("<label></label>")
                      .addClass("g-switch")
                      .append(
                        $("<input>")
                          .attr("type", "checkbox")
                          .attr("data-property", u)
                          .prop("checked", GProperties)
                          .on("change", function (e) {
                            var n = $(e.target).data().property,
                              _interopRequireDefault = $(this).is(":checked"),
                              GCore = GTools("shp");
                            if (GCore[n] !== _interopRequireDefault) {
                              var GEditor = JSON.parse(JSON.stringify(GCore));
                              (GEditor[n] = _interopRequireDefault), t(["shp"], [GEditor]);
                            }
                          })
                      )
                      .append($("<div></div>")),
                  },
                ],
              })
              .appendTo(DataModule_1161);
      }
      return DataModule_1161;
    }
    function D(e, t, n) {
      this._document.getScene();
      var _interopRequireDefault = n ? n.getProperty.bind(n) : e.getProperty.bind(e),
        GTools = _interopRequireDefault("x"),
        GEditor = _interopRequireDefault("y"),
        GRichTooltipConfig = new GCore.GLength(_interopRequireDefault("r"), GCore.GLength.Unit.PT),
        GTouchTool = _interopRequireDefault("pat"),
        GEvent_type = _interopRequireDefault("opc"),
        DataModule_1161 = this,
        u = [0, 200],
        GProperties = e.RANGES;
      return (
        GProperties && GProperties.r && (u = GProperties.r),
        $("<div></div>").append(
          $("<div></div>")
            .addClass("touch-effects-shadow")
            .gPropertyRow({
              columns: [
                {
                  width: "20%",
                  label: "X",
                  content: $("<input>")
                    .attr("type", "text")
                    .attr("data-property", "x")
                    .gUnitBox({ source: "effects" })
                    .gUnitBox("value", new GCore.GLength(GTools, GCore.GLength.Unit.PT))
                    .on("change", function () {
                      var e = $(this).gUnitBox("value"),
                        n = e ? e.toUnit(GCore.GLength.Unit.PT) : null;
                      null !== n && "number" == typeof n && t(["x"], [n]);
                    }),
                },
                {
                  width: "20%",
                  label: "Y",
                  content: $("<input>")
                    .attr("type", "text")
                    .attr("data-property", "y")
                    .gUnitBox({ source: "effects" })
                    .gUnitBox("value", new GCore.GLength(GEditor, GCore.GLength.Unit.PT))
                    .on("change", function () {
                      var e = $(this).gUnitBox("value"),
                        n = e ? e.toUnit(GCore.GLength.Unit.PT) : null;
                      null !== n && "number" == typeof n && t(["y"], [n]);
                    }),
                },
                {
                  width: "20%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GEffectProperties", "text.blur")
                  ),
                  content: $("<input>")
                    .attr("type", "text")
                    .attr("data-property", "r")
                    .gUnitBox({
                      minValue: u[0],
                      maxValue: u[1],
                      source: "effects",
                    })
                    .gUnitBox("value", GRichTooltipConfig)
                    .on("change", function (e) {
                      var n = $(this).gUnitBox("value"),
                        _interopRequireDefault = n ? n.toUnit(GCore.GLength.Unit.PT) : null;
                      null !== _interopRequireDefault && t(["r"], [_interopRequireDefault]);
                    }),
                },
                {
                  width: "20%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.opacity")
                  ),
                  content: $("<input>")
                    .attr("type", "text")
                    .attr("data-property", "opc")
                    .on("change", function (e) {
                      var n =
                        GCore.GLength.parseEquationValue(
                          $(e.target).gInputBox("value")
                        ) / 100;
                      t(["opc"], [n]),
                        $(e.target)
                          .parents(".effect-settings")
                          .find('[data-property="pat"]')
                          .gPatternChooser("opacity", n);
                    })
                    .gInputBox({
                      minValue: 0,
                      maxValue: 100,
                      incrementValue: gDesigner.getOpacityIncrement(),
                      postfix: "%",
                    })
                    .gInputBox("value", GCore.GUtil.formatOpacity(100 * GEvent_type)),
                },
                {
                  width: "20%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.color")
                  ),
                  content: $("<div></div>")
                    .attr("data-property", "pat")
                    .gPatternChooser({ types: [GCore.GColor, GCore.GGradient] })
                    .gPatternChooser("value", GTouchTool)
                    .gPatternChooser("opacity", GEvent_type)
                    .on("chooseropen", function () {
                      DataModule_1161._document.getEditor().hideSelection(),
                        (DataModule_1161._chooserElem = $(this));
                    })
                    .on("chooserclose", function (e, t, n) {
                      DataModule_1161._document &&
                        DataModule_1161._document.getEditor().resetHideSelection(),
                        (DataModule_1161._chooserElem = null);
                    })
                    .on("patternchange", function (e, n, _interopRequireDefault, GTools, GEditor, GRichTooltipConfig) {
                      var GTouchTool = [],
                        GEvent_type = [];
                      undefined !== n && (GTouchTool.push("pat"), GEvent_type.push(n)),
                        "number" == typeof _interopRequireDefault &&
                          (GTouchTool.push("opc"),
                          GEvent_type.push(_interopRequireDefault),
                          $(e.target)
                            .parents(".effect-settings")
                            .find('[data-property="opc"]')
                            .gInputBox(
                              "value",
                              GCore.GUtil.formatOpacity(100 * _interopRequireDefault)
                            ));
                      var DataModule_1161 = null;
                      GEditor &&
                        ((DataModule_1161 = { chooserOn: true }),
                        null != GRichTooltipConfig && (DataModule_1161.activeStopIdx = GRichTooltipConfig)),
                        t(GTouchTool, GEvent_type, GTools, DataModule_1161);
                    }),
                },
              ],
            })
        )
      );
    }
    function L(e, t, n) {
      this._document.getScene();
      var _interopRequireDefault = n ? n.getProperty.bind(n) : e.getProperty.bind(e),
        GTools = _interopRequireDefault("a"),
        GEditor = _interopRequireDefault("s"),
        GRichTooltipConfig = _interopRequireDefault("l"),
        GTouchTool = _interopRequireDefault("b"),
        GEvent_type = _interopRequireDefault("c"),
        DataModule_1161 = _interopRequireDefault("pat"),
        u = _interopRequireDefault("opc"),
        GProperties = this._document.getEditor(),
        DataModule_1263 = $("<div></div>"),
        GEffectsPanel = this;
      function f(e, n, _interopRequireDefault, GTools, GEditor, GRichTooltipConfig, GTouchTool, GEvent_type, DataModule_1161) {
        var u,
          DataModule_1263 = $("<input>")
            .attr("type", "text")
            .attr("data-property", n)
            .val(_interopRequireDefault)
            .on("change", function (e) {
              var _interopRequireDefault = GCore.GLength.parseEquationValue(
                $(e.target).gInputBox("value")
              );
              GTools && (_interopRequireDefault = $(this).gUnitBox("value").toUnit(GCore.GLength.Unit.PT));
              var GTouchTool = $(this)
                .parents(".effect-settings")
                .find('[data-property="' + n + '"].g-input-slider');
              GTouchTool.gInputSlider("value") != _interopRequireDefault && GTouchTool.gInputSlider("value", _interopRequireDefault),
                null !== _interopRequireDefault &&
                  "number" == typeof _interopRequireDefault &&
                  _interopRequireDefault >= GEditor &&
                  _interopRequireDefault <= GRichTooltipConfig &&
                  t([n], [_interopRequireDefault]);
            });
        return (
          GTools
            ? ((u = new GCore.GLength(_interopRequireDefault, GCore.GLength.Unit.PT)),
              DataModule_1263
                .gUnitBox({ minValue: GEditor, maxValue: GRichTooltipConfig, source: "effects" })
                .gUnitBox("value", u))
            : DataModule_1263
                .gInputBox({
                  minValue: GEditor,
                  maxValue: GRichTooltipConfig,
                  postfix: GEvent_type || "",
                  incrementValue: (GRichTooltipConfig - GEditor) / 100,
                })
                .gInputBox("value", _interopRequireDefault),
          $("<div></div>").gPropertyRow({
            columns: [
              {
                label: e,
                width: "75%",
                content: $("<div>")
                  .gInputSlider({
                    type: "range",
                    maxDecimal: DataModule_1161,
                    min: GEditor,
                    max: GRichTooltipConfig,
                    step: GTouchTool || (GRichTooltipConfig - GEditor) / 100,
                  })
                  .gInputSlider("value", _interopRequireDefault)
                  .attr("data-property", n)
                  .on("mousedown", function () {
                    GProperties.hideSelection(),
                      $(document).one("mouseup", function () {
                        GProperties.resetHideSelection();
                      });
                  })
                  .on("input", function (e) {
                    var _interopRequireDefault = $(this),
                      GTools = parseFloat(_interopRequireDefault.gInputSlider("value"));
                    t([n], [GTools], true),
                      _interopRequireDefault
                        .parents(".effect-settings")
                        .find(
                          '[data-property="' + n + '"]:not(.g-input-slider)'
                        )
                        .val(_interopRequireDefault.gInputSlider("value"));
                  })
                  .on("change", function (e) {
                    var t = $(this),
                      _interopRequireDefault = t.gInputSlider("value");
                    t.parents(".effect-settings")
                      .find('[data-property="' + n + '"]:not(.g-input-slider)')
                      .val(_interopRequireDefault)
                      .trigger("change");
                  }),
              },
              { width: "25%", content: DataModule_1263 },
            ],
          })
        );
      }
      return (
        DataModule_1263.append(
          f(
            GCore.GLocale.get(new GCore.GLocaleKey("GEffectProperties", "text.bend")),
            "b",
            GTouchTool,
            true,
            -60,
            60,
            null,
            "",
            1
          )
        ),
        DataModule_1263.append(
          f(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GEffectProperties", "text.softness")
            ),
            "s",
            GEditor,
            false,
            0,
            1,
            null,
            "",
            2
          )
        ),
        DataModule_1263.append(
          f(
            GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.radius")),
            "l",
            GRichTooltipConfig,
            false,
            0,
            50,
            null,
            "",
            1
          )
        ),
        DataModule_1263.append(
          f(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GEffectProperties", "text.coverage")
            ),
            "c",
            GEvent_type,
            false,
            0,
            1,
            null,
            "",
            2
          )
        ),
        DataModule_1263.append(
          f(
            GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.angle")),
            "a",
            GTools,
            false,
            0,
            360,
            1,
            "°"
          )
        ),
        $("<div></div>")
          .addClass("touch-effects-shadow")
          .gPropertyRow({
            columns: [
              {
                width: "50%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.opacity")
                ),
                content: $("<input>")
                  .attr("type", "text")
                  .attr("data-property", "opc")
                  .on("change", function (e) {
                    var n =
                      GCore.GLength.parseEquationValue(
                        $(e.target).gInputBox("value")
                      ) / 100;
                    t(["opc"], [n]),
                      $(e.target)
                        .parents(".effect-settings")
                        .find('[data-property="pat"]')
                        .gPatternChooser("opacity", n);
                  })
                  .gInputBox({
                    minValue: 0,
                    maxValue: 100,
                    incrementValue: gDesigner.getOpacityIncrement(),
                    postfix: "%",
                  })
                  .gInputBox("value", GCore.GUtil.formatOpacity(100 * u)),
              },
              {
                width: "20%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.color")
                ),
                content: $("<div></div>")
                  .attr("data-property", "pat")
                  .gPatternChooser({ types: [GCore.GColor, GCore.GGradient] })
                  .gPatternChooser("value", DataModule_1161)
                  .gPatternChooser("opacity", u)
                  .on("chooseropen", function () {
                    GEffectsPanel._document.getEditor().hideSelection(),
                      (GEffectsPanel._chooserElem = $(this));
                  })
                  .on("chooserclose", function (e, t, n) {
                    GEffectsPanel._document && GEffectsPanel._document.getEditor().resetHideSelection(),
                      (GEffectsPanel._chooserElem = null);
                  })
                  .on("patternchange", function (e, n, _interopRequireDefault, GTools, GEditor, GRichTooltipConfig) {
                    var GTouchTool = [],
                      GEvent_type = [];
                    undefined !== n && (GTouchTool.push("pat"), GEvent_type.push(n)),
                      "number" == typeof _interopRequireDefault &&
                        (GTouchTool.push("opc"),
                        GEvent_type.push(_interopRequireDefault),
                        $(e.target)
                          .parents(".effect-settings")
                          .find('[data-property="opc"]')
                          .gInputBox("value", GCore.GUtil.formatOpacity(100 * _interopRequireDefault)));
                    var DataModule_1161 = null;
                    GEditor &&
                      ((DataModule_1161 = { chooserOn: true }),
                      null != GRichTooltipConfig && (DataModule_1161.activeStopIdx = GRichTooltipConfig)),
                      t(GTouchTool, GEvent_type, GTools, DataModule_1161);
                  }),
              },
            ],
          })
          .appendTo(DataModule_1263),
        DataModule_1263
      );
    }
    function I(e, t, n) {
      this._document.getScene();
      var _interopRequireDefault = n ? n.getProperty.bind(n) : e.getProperty.bind(e),
        GTools = _interopRequireDefault("a"),
        GEditor = new GCore.GLength(_interopRequireDefault("r"), GCore.GLength.Unit.PT),
        GRichTooltipConfig = new GCore.GLength(_interopRequireDefault("o"), GCore.GLength.Unit.PT),
        GTouchTool = _interopRequireDefault("pat"),
        GEvent_type = _interopRequireDefault("opc"),
        DataModule_1161 = this,
        u = [5, 200],
        GProperties = e.RANGES;
      GProperties && GProperties.r && (u = GProperties.r);
      var DataModule_1263 = function (e) {
        return "r" === e
          ? $("<input>")
              .attr("type", "text")
              .gUnitBox({ minValue: u[0], maxValue: u[1], source: "effects" })
              .gUnitBox("value", GEditor)
              .on("change", function (e) {
                t(["r"], [$(this).gUnitBox("value").toUnit(GCore.GLength.Unit.PT)]);
              })
          : "a" === e
          ? $("<input>")
              .attr("type", "text")
              .gInputBox({ minValue: 5, maxValue: 35, postfix: "°" })
              .gInputBox("value", GTools)
              .on("change", function (e) {
                t(
                  ["a"],
                  [GCore.GLength.parseEquationValue($(e.target).gInputBox("value"))]
                );
              })
          : "o" === e
          ? $("<input>")
              .attr("type", "text")
              .gUnitBox({ source: "effects" })
              .gUnitBox("value", GRichTooltipConfig)
              .on("change", function (e) {
                t(["o"], [$(this).gUnitBox("value").toUnit(GCore.GLength.Unit.PT)]);
              })
          : "opc" === e
          ? $("<input>")
              .attr("type", "text")
              .attr("data-property", "opc")
              .on("change", function (e) {
                var n =
                  GCore.GLength.parseEquationValue($(e.target).gInputBox("value")) /
                  100;
                t(["opc"], [n]),
                  $(e.target)
                    .parents(".effect-settings")
                    .find('[data-property="pat"]')
                    .gPatternChooser("opacity", n);
              })
              .gInputBox({
                minValue: 0,
                maxValue: 100,
                incrementValue: gDesigner.getOpacityIncrement(),
                postfix: "%",
              })
              .gInputBox("value", GCore.GUtil.formatOpacity(100 * GEvent_type))
          : "pat" === e
          ? $("<div></div>")
              .attr("data-property", "pat")
              .gPatternChooser({ types: [GCore.GColor] })
              .gPatternChooser("value", GTouchTool)
              .gPatternChooser("opacity", GEvent_type)
              .on("chooseropen", function () {
                DataModule_1161._document.getEditor().hideSelection(),
                  (DataModule_1161._chooserElem = $(this));
              })
              .on("chooserclose", function (e, t, n) {
                DataModule_1161._document && DataModule_1161._document.getEditor().resetHideSelection(),
                  (DataModule_1161._chooserElem = null);
              })
              .on("patternchange", function (e, n, _interopRequireDefault, GTools, GEditor) {
                var GRichTooltipConfig = [],
                  GTouchTool = [];
                undefined !== n && (GRichTooltipConfig.push("pat"), GTouchTool.push(n)),
                  "number" == typeof _interopRequireDefault &&
                    (GRichTooltipConfig.push("opc"),
                    GTouchTool.push(_interopRequireDefault),
                    $(e.target)
                      .parents(".effect-settings")
                      .find('[data-property="opc"]')
                      .gInputBox("value", GCore.GUtil.formatOpacity(100 * _interopRequireDefault)));
                var GEvent_type = null;
                GEditor && (GEvent_type = { chooserOn: true }), t(GRichTooltipConfig, GTouchTool, GTools, GEvent_type);
              })
          : undefined;
      };
      return $("<div></div>").append(
        $("<div></div>").gPropertyRow({
          columns: [
            {
              width: "20%",
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GEffectProperties", "text.offset")
              ),
              content: DataModule_1263("o"),
            },
            {
              width: "20%",
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.angle")
              ),
              content: DataModule_1263("a"),
            },
            {
              width: "20%",
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GEffectProperties", "text.blur")
              ),
              content: DataModule_1263("r"),
            },
            {
              width: "20%",
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.opacity")
              ),
              content: DataModule_1263("opc"),
            },
            {
              width: "20%",
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.color")
              ),
              content: DataModule_1263("pat"),
            },
          ],
        })
      );
    }
    function k(e, t, n) {
      this._document.getScene();
      var _interopRequireDefault = n ? n.getProperty.bind(n) : e.getProperty.bind(e),
        GTools = _interopRequireDefault("a"),
        GEditor = new GCore.GLength(_interopRequireDefault("l"), GCore.GLength.Unit.PT),
        GRichTooltipConfig = _interopRequireDefault("pat"),
        GTouchTool = _interopRequireDefault("opc"),
        GEvent_type = _interopRequireDefault("den"),
        DataModule_1161 = _interopRequireDefault("fdm"),
        u = this,
        GProperties = function (e) {
          return "l" === e
            ? $("<input>")
                .attr("type", "text")
                .gUnitBox({ minValue: 0, source: "effects" })
                .gUnitBox("value", GEditor)
                .on("change", function (e) {
                  t(
                    ["l"],
                    [$(this).gUnitBox("value").toUnit(GCore.GLength.Unit.PT)]
                  );
                })
            : "a" === e
            ? $("<input>")
                .attr("type", "text")
                .gInputBox({ minValue: -180, maxValue: 180, postfix: "°" })
                .gInputBox(
                  "value",
                  GCore.GUtil.formatNumber(Math.round(GCore.GMath.toDegrees(GTools)), 1)
                )
                .on("change", function (e) {
                  t(
                    ["a"],
                    [
                      GCore.GMath.toRadians(
                        GCore.GLength.parseEquationValue(
                          $(e.target).gInputBox("value")
                        )
                      ),
                    ]
                  );
                })
            : "opc" === e
            ? $("<input>")
                .attr("type", "text")
                .attr("data-property", "opc")
                .on("change", function (e) {
                  var n =
                    GCore.GLength.parseEquationValue(
                      $(e.target).gInputBox("value")
                    ) / 100;
                  t(["opc"], [n]),
                    $(e.target)
                      .parents(".effect-settings")
                      .find('[data-property="pat"]')
                      .gPatternChooser("opacity", n);
                })
                .gInputBox({ minValue: 0, maxValue: 100, postfix: "%" })
                .gInputBox("value", GCore.GUtil.formatOpacity(100 * GTouchTool))
            : "den" === e
            ? $("<input>")
                .attr("type", "text")
                .on("change", function (e) {
                  var n = $(e.target).gInputBox("value") / 100;
                  t(["den"], [n]);
                })
                .gInputBox({
                  minValue: 5,
                  maxValue: 100,
                  incrementValue: 1,
                  postfix: "%",
                })
                .gInputBox("value", GCore.GUtil.formatNumber(100 * GEvent_type))
            : "fdm" === e
            ? $("<label></label>")
                .addClass("g-switch")
                .append(
                  $("<input>")
                    .attr("type", "checkbox")
                    .prop("checked", DataModule_1161)
                    .on("change", function (e) {
                      t(["fdm"], [$(this).is(":checked")]);
                    })
                )
                .append($("<div></div>"))
            : "pat" === e
            ? $("<div></div>")
                .attr("data-property", "pat")
                .gPatternChooser({ types: [GCore.GColor, GCore.GGradient] })
                .gPatternChooser("value", GRichTooltipConfig)
                .gPatternChooser("opacity", GTouchTool)
                .on("chooseropen", function () {
                  u._document.getEditor().hideSelection(),
                    (u._chooserElem = $(this));
                })
                .on("chooserclose", function (e, t, n) {
                  u._document && u._document.getEditor().resetHideSelection(),
                    (u._chooserElem = null);
                })
                .on("patternchange", function (e, n, _interopRequireDefault, GTools, GEditor, GRichTooltipConfig) {
                  var GTouchTool = [],
                    GEvent_type = [];
                  undefined !== n && (GTouchTool.push("pat"), GEvent_type.push(n)),
                    "number" == typeof _interopRequireDefault &&
                      (GTouchTool.push("opc"),
                      GEvent_type.push(_interopRequireDefault),
                      $(e.target)
                        .parents(".effect-settings")
                        .find('[data-property="opc"]')
                        .gInputBox("value", GCore.GUtil.formatOpacity(100 * _interopRequireDefault)));
                  var DataModule_1161 = null;
                  GEditor &&
                    ((DataModule_1161 = { chooserOn: true }),
                    null != GRichTooltipConfig && (DataModule_1161.activeStopIdx = GRichTooltipConfig)),
                    t(GTouchTool, GEvent_type, GTools, DataModule_1161);
                })
            : undefined;
        };
      return $("<div></div>")
        .append(
          $("<div></div>").gPropertyRow({
            columns: [
              {
                width: "33%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.angle")
                ),
                content: GProperties("a"),
              },
              {
                width: "33%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GEffectProperties", "text.length")
                ),
                content: GProperties("l"),
              },
              {
                width: "33%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GEffectProperties", "text.density")
                ),
                content: GProperties("den"),
              },
            ],
          })
        )
        .append(
          $("<div></div>").gPropertyRow({
            columns: [
              {
                width: "33%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.color")
                ),
                content: GProperties("pat"),
              },
              {
                width: "33%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.opacity")
                ),
                content: GProperties("opc"),
              },
              {
                width: "33%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GEffectProperties", "text.fade")
                ),
                content: GProperties("fdm"),
              },
            ],
          })
        );
    }
    function O(e, t, n) {
      this._document.getScene();
      var _interopRequireDefault = n ? n.getProperty.bind(n) : e.getProperty.bind(e),
        GTools = this._document.getEditor(),
        GEditor = new GCore.GLength(_interopRequireDefault("r"), GCore.GLength.Unit.PT),
        GRichTooltipConfig = _interopRequireDefault("b"),
        GTouchTool = $("<div></div>");
      return (
        $("<div></div>")
          .gPropertyRow({
            columns: [
              {
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.radius")
                ),
                width: "75%",
                content: $("<div>")
                  .gInputSlider({
                    maxDecimal: 1,
                    min: "0",
                    max: new GCore.GLength(K ? 50 : 10, GCore.GLength.Unit.PT).toUnit(
                      GCore.GLength.Unit.PX
                    ),
                    step: "0.1",
                  })
                  .gInputSlider("value", _interopRequireDefault("r"))
                  .attr("data-property", "r")
                  .on("mousedown", function () {
                    GTools.hideSelection(),
                      $(document).one("mouseup", function () {
                        GTools.resetHideSelection();
                      });
                  })
                  .on("input", function (e) {
                    var n = $(this),
                      _interopRequireDefault = parseFloat(n.gInputSlider("value"));
                    t(["r"], [_interopRequireDefault], true),
                      n
                        .parents(".effect-settings")
                        .find('[data-property="r"]:not(.g-input-slider)')
                        .val(n.gInputSlider("value"));
                  })
                  .on("change", function (e) {
                    var t = $(this),
                      n = parseFloat(t.gInputSlider("value"));
                    t.parents(".effect-settings")
                      .find('[data-property="r"]:not(.g-input-slider)')
                      .val(n)
                      .trigger("change");
                  }),
              },
              {
                width: "25%",
                content: $("<input>")
                  .attr("data-property", "r")
                  .gUnitBox({ source: "effects" })
                  .gUnitBox("value", GEditor)
                  .on("change", function (e) {
                    var n = $(this).gUnitBox("value"),
                      _interopRequireDefault = n ? n.toUnit(GCore.GLength.Unit.PT) : null,
                      GTools = $(this)
                        .parents(".effect-settings")
                        .find('[data-property="r"].g-input-slider');
                    parseFloat(GTools.gInputSlider("value")) != _interopRequireDefault &&
                      GTools.gInputSlider("value", _interopRequireDefault),
                      null !== _interopRequireDefault &&
                        "number" == typeof _interopRequireDefault &&
                        _interopRequireDefault >= 0 &&
                        _interopRequireDefault <= 254 &&
                        t(["r"], [_interopRequireDefault]);
                  }),
              },
            ],
          })
          .appendTo(GTouchTool),
        $("<div></div>")
          .gPropertyRow({
            columns: [
              {
                label: GCore.GLocale.get(new GCore.GLocaleKey("GWebGLEffect", "clip")),
                width: "25%",
                content: $("<label></label>")
                  .addClass("g-switch")
                  .append(
                    $("<input>")
                      .attr("type", "checkbox")
                      .prop("checked", GRichTooltipConfig)
                      .on("change", function (e) {
                        t(["b"], [$(this).is(":checked")]);
                      })
                  )
                  .append($("<div></div>")),
              },
            ],
          })
          .appendTo(GTouchTool),
        GTouchTool
      );
    }
    function F(e, t, n) {
      var _interopRequireDefault = this._document.getEditor(),
        GTools = n ? n.getProperty.bind(n) : e.getProperty.bind(e),
        GEditor = GTools("pat"),
        GRichTooltipConfig = GTools("opc"),
        GTouchTool = GTools("alm"),
        GEvent_type = this;
      return $("<div></div>").append(
        $("<div></div>")
          .addClass("touch-effects-overlay")
          .gPropertyRow({
            columns: [
              {
                width: "20%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.color")
                ),
                content: $("<div></div>")
                  .attr("data-property", "pat")
                  .gPatternChooser({ types: [GCore.GColor, GCore.GGradient] })
                  .gPatternChooser("value", GEditor)
                  .gPatternChooser("opacity", GRichTooltipConfig)
                  .on("chooseropen", function () {
                    _interopRequireDefault.hideSelection(),
                      gDesigner
                        .getWorkspace()
                        .getStyleEdManager()
                        .updateEditor(e, "pat", false),
                      (GEvent_type._styleEdOn = true),
                      (GEvent_type._chooserElem = $(this));
                  })
                  .on("chooserclose", function (e, t, n) {
                    gDesigner
                      .getWorkspace()
                      .getStyleEdManager()
                      .getOverlayLock(n)
                      ? t()
                      : ((GEvent_type._styleEdOn = false),
                        gDesigner
                          .getWorkspace()
                          .getStyleEdManager()
                          .deactivateEditor(),
                        _interopRequireDefault.resetHideSelection()),
                      (GEvent_type._chooserElem = null);
                  })
                  .on("patternchange", function (e, n, _interopRequireDefault, GTools, GCore, GEditor) {
                    var GRichTooltipConfig = [],
                      GTouchTool = [];
                    undefined !== n && (GRichTooltipConfig.push("pat"), GTouchTool.push(n)),
                      "number" == typeof _interopRequireDefault && (GRichTooltipConfig.push("opc"), GTouchTool.push(_interopRequireDefault));
                    var GEvent_type = null;
                    GCore &&
                      ((GEvent_type = { chooserOn: true }),
                      null != GEditor && (GEvent_type.activeStopIdx = GEditor)),
                      t(GRichTooltipConfig, GTouchTool, GTools, GEvent_type);
                  }),
              },
              { width: "20%" },
              {
                width: "20%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.opacity")
                ),
                content: $("<input>")
                  .attr("type", "text")
                  .attr("data-property", "opc")
                  .on("change", function (e) {
                    var n = $(e.target).gInputBox("value") / 100;
                    t(["opc"], [n]);
                  })
                  .gInputBox({
                    minValue: 0,
                    maxValue: 100,
                    incrementValue: gDesigner.getOpacityIncrement(),
                    postfix: "%",
                  })
                  .gInputBox("value", GCore.GUtil.formatOpacity(100 * GRichTooltipConfig)),
              },
              { width: "20%" },
              {
                width: "20%",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GEffectProperties", "text.blend")
                ),
                content: $("<div/>")
                  .css({ display: "flex", justifyContent: "center" })
                  .append(
                    $("<label></label>")
                      .addClass("g-switch")
                      .css({ width: "20px", alignSelf: "center" })
                      .append(
                        $("<input>")
                          .attr("type", "checkbox")
                          .prop("checked", GTouchTool)
                          .on("change", function (e) {
                            if ($(this).is(":checked")) {
                              var n = new GCore.GLinearGradient([
                                {
                                  color: GCore.GRGBColor.BLACK,
                                  position: 0,
                                  opacity: 1,
                                },
                                {
                                  color: GCore.GRGBColor.WHITE,
                                  position: 1,
                                  opacity: 0,
                                },
                              ]);
                              t(["alm", "opc", "pat"], [true, 1, n]);
                            } else t(["alm"], [false]);
                          })
                      )
                      .append($("<div></div>"))
                  ),
              },
            ],
          })
      );
    }
    function R(e, t) {
      return $("<div></div>")
        .append(
          $("<input>")
            .attr("type", "file")
            .attr("accept", ".acv")
            .css({ position: "absolute", left: "-10000px" })
            .on("change", function (e) {
              gDesigner.stats("effects_change_colorgrading");
              var n = $(e.target)[0].files;
              if (
                n &&
                n.length &&
                (n[0] instanceof File || n[0] instanceof Blob)
              ) {
                var _interopRequireDefault = new FileReader();
                (_interopRequireDefault.onload = function () {
                  var e = GCore.GUtil.readACVFile(_interopRequireDefault.result);
                  e && t(["cp"], [e]);
                }),
                  _interopRequireDefault.readAsArrayBuffer(n[0]);
              }
            })
        )
        .append(
          $("<select></select>")
            .append(
              $("<option></option>")
                .attr("value", "")
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.none"))
                )
            )
            .append(
              $(
                '<optgroup label="'.concat(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GEffectProperties",
                      "text.color.gradient.grp.instagram"
                    )
                  ),
                  '"></optgroup>'
                )
              )
                .append(
                  $("<option></option>")
                    .attr("value", "1977")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GEffectProperties",
                          "text.color.gradient.opt.1977"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr(
                      "value",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GEffectProperties",
                          "text.color.gradient.opt.brannan"
                        )
                      )
                    )
                    .text("Brannan")
                )
                .append(
                  $("<option></option>")
                    .attr("value", "Gotham")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GEffectProperties",
                          "text.color.gradient.opt.gotham"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", "Hefe")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GEffectProperties",
                          "text.color.gradient.opt.hefe"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", "Lord Kelvin")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GEffectProperties",
                          "text.color.gradient.opt.lord-kelvin"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", "Nashville")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GEffectProperties",
                          "text.color.gradient.opt.nashville"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", "X-PRO II")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GEffectProperties",
                          "text.color.gradient.opt.x-pro-ii"
                        )
                      )
                    )
                )
            )
            .on("change", function (e) {
              var n = $(e.target).val();
              if ((gDesigner.stats("effects_change_grading", n || "none"), n)) {
                var _interopRequireDefault = new XMLHttpRequest();
                _interopRequireDefault.addEventListener("load", function () {
                  if (200 == _interopRequireDefault.status && _interopRequireDefault.response) {
                    var e = GCore.GUtil.readACVFile(_interopRequireDefault.response);
                    e && t(["cp"], [e]);
                  }
                }),
                  _interopRequireDefault.open("GET", "assets/data/acv/" + n + ".acv"),
                  (_interopRequireDefault.responseType = "arraybuffer"),
                  _interopRequireDefault.send(null);
              } else t(["cp"], [null]);
            })
        )
        .append(
          $("<button></button>")
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GEffectProperties", "text.load-acv")
              ) + "..."
            )
            .on("click", function (e) {
              gDesigner.stats("effects_choose_acv"),
                $(e.target)
                  .parents(".effect-settings")
                  .find('input[type="file"]')
                  .focus()
                  .trigger("click");
            })
        );
    }
    function M(e, t) {
      for (
        var require = GCore.GObject.getTypeId(e),
          _interopRequireDefault = (GCore.GNode.getClassFromId(require), e.getFXArray()),
          GTools = $("<div></div>"),
          GEditor = 0;
        GEditor < _interopRequireDefault.length;
        GEditor++
      )
        for (
          var GRichTooltipConfig = _interopRequireDefault[GEditor],
            GTouchTool = GCore.GNode.getClassFromId(GCore.GObject.getTypeId(_interopRequireDefault[GEditor])),
            GEvent_type = GCore.GNode.getName(GTouchTool),
            DataModule_1161 = 0;
          DataModule_1161 < V.length;
          DataModule_1161++
        )
          if (V[DataModule_1161].clazz === GTouchTool) {
            GTools.append(
              V[DataModule_1161].createSettings
                .call(this, e, B(GEvent_type, t), GRichTooltipConfig)
                .css("margin-top", "7px")
            );
            break;
          }
      return GTools;
    }
    function N(e, t, n) {
      var _interopRequireDefault = this._document.getEditor(),
        GTools = n ? n.getProperty.bind(n) : e.getProperty.bind(e),
        GEditor = GTools("opc"),
        GRichTooltipConfig = new GCore.GLength(GTools("pad")),
        GTouchTool = GTools("rfh"),
        GEvent_type = function (e) {
          return "rfh" === e
            ? $("<input>")
                .attr("data-property", e)
                .attr("type", "text")
                .on("change", function (n) {
                  var _interopRequireDefault =
                    GCore.GLength.parseEquationValue(
                      $(n.target).gInputBox("value")
                    ) / 100;
                  t([e], [_interopRequireDefault]);
                })
                .gInputBox({
                  minValue: 0,
                  maxValue: 100,
                  incrementValue: 10,
                  slowIncrementValue: 1,
                  postfix: "%",
                })
                .gInputBox("value", 100 * GTouchTool)
            : "pad" === e
            ? $("<input>")
                .attr("data-property", e)
                .attr("type", "text")
                .on("change", function (n) {
                  var _interopRequireDefault = $(n.target).gUnitBox("value").getValue();
                  t([e], [_interopRequireDefault]);
                })
                .gUnitBox({ minValue: 0, incrementValue: 1, source: "effects" })
                .gUnitBox("value", GRichTooltipConfig)
            : "opacity-slider" === e
            ? $("<div/>")
                .attr("data-property", "opc")
                .gInputSlider({ type: "range", min: 0, max: 100 })
                .on("mousedown", function () {
                  _interopRequireDefault.hideSelection(),
                    $(document).one("mouseup", function () {
                      _interopRequireDefault.resetHideSelection();
                    });
                })
                .on("input", function (e) {
                  var n = $(e.target),
                    _interopRequireDefault = parseInt(n.gInputSlider("value")) / 100;
                  t(["opc"], [_interopRequireDefault]),
                    $(e.target)
                      .parents(".effect-settings")
                      .find('[type="text"][data-property="opc"]')
                      .gInputBox("value", GCore.GUtil.formatOpacity(100 * _interopRequireDefault));
                })
                .on("change", function (e) {
                  t(["opc"], [parseFloat($(this).gInputSlider("value")) / 100]);
                })
                .gInputSlider("value", 100 * GEditor)
            : "opacity-input" === e
            ? $("<input>")
                .attr("type", "text")
                .attr("data-property", "opc")
                .on("change", function (e) {
                  var n = $(this).gInputBox("value");
                  $(this)
                    .parents(".effect-settings")
                    .find('[data-property="opc"].g-input-slider')
                    .gInputSlider("value", n),
                    t(
                      ["opc"],
                      [
                        GCore.GLength.parseEquationValue(
                          $(this).gInputBox("value")
                        ) / 100,
                      ]
                    );
                })
                .gInputBox({
                  minValue: 0,
                  maxValue: 100,
                  incrementValue: 5,
                  postfix: "%",
                })
                .gInputBox("value", GCore.GUtil.formatOpacity(100 * GEditor))
            : undefined;
        };
      return $("<div></div>").gPropertyRow({
        columns: [
          {
            width: "auto",
            label: GCore.GLocale.get(
              new GCore.GLocaleKey("GCommonNames", "text.opacity")
            ),
            content: $("<div></div>").gPropertyRow({
              columns: [
                { width: "auto", content: GEvent_type("opacity-slider") },
                {
                  width: $("body").hasClass("g-touch") ? "60px" : "40px",
                  content: GEvent_type("opacity-input"),
                },
              ],
            }),
          },
          {
            width: $("body").hasClass("g-touch") ? "60px" : "40px",
            label: GCore.GLocale.get(
              new GCore.GLocaleKey("GEffectProperties", "text.padding")
            ),
            content: GEvent_type("pad"),
          },
          {
            width: $("body").hasClass("g-touch") ? "60px" : "40px",
            label: GCore.GLocale.get(
              new GCore.GLocaleKey("GEffectProperties", "text.height")
            ),
            content: GEvent_type("rfh"),
          },
        ],
      });
    }
    function B(e, t) {
      return function (n, _interopRequireDefault, GTools) {
        for (var GCore = n.slice(), GEditor = _interopRequireDefault.slice(), GRichTooltipConfig = 0; GRichTooltipConfig < GCore.length; GRichTooltipConfig++)
          (GCore[GRichTooltipConfig] = e + "&" + GCore[GRichTooltipConfig]), (GEditor[GRichTooltipConfig] = _interopRequireDefault[GRichTooltipConfig]);
        t(GCore, GEditor, GTools);
      };
    }
    function U(e) {
      var t = null;
      t = e instanceof GCore.GStylable.Effect ? e.constructor : e;
      for (var require = 0; require < V.length; ++require) if (V[require].clazz === t) return V[require];
      throw new Error("Invalid effect/class");
    }
    var j = document.createElement("canvas"),
      K = null;
    try {
      K =
        j.getContext("webgl", { premultipliedAlpha: false }) ||
        j.getContext("experimental-webgl");
    } catch (e) {
      K = null;
    }
    var V = null,
      H = function () {
        return [
          {
            clazz: GCore.GGLBlurEffect,
            i18n: "GGLBlurEffect",
            group: "raster",
            createSettings: P,
            icon: "gravit-icon-blur-effect",
          },
          {
            clazz: GCore.GBlurEffect,
            i18n: "GBlurEffect",
            group: "raster",
            category: _,
            createSettings: O,
            icon: "gravit-icon-blur-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GGLVignetteEffect,
            i18n: "GGLVignetteEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-vignette-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GGLColorAdjustEffect,
            i18n: "GGLColorAdjustEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-adjust-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GGLRecolourEffect,
            i18n: "GGLRecolourEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-recolour-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GOverlayEffect,
            i18n: "GOverlayEffect",
            group: "filter",
            category: w,
            createSettings: F,
            icon: "gravit-icon-overlay-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GMirrorEffect,
            i18n: "GMirrorEffect",
            group: "mirror",
            category: x,
            createSettings: N,
            icon: "gravit-icon-mirror-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GCurvedShadowEffect,
            i18n: "GCurvedShadowEffect",
            group: "raster",
            category: S,
            createSettings: L,
            icon: "gravit-icon-curved-shadow-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GDropShadowEffect,
            i18n: "GDropShadowEffect",
            group: "raster",
            category: S,
            createSettings: D,
            icon: "gravit-icon-drop-shadow-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GInnerShadowEffect,
            i18n: "GInnerShadowEffect",
            group: "raster",
            category: S,
            createSettings: D,
            icon: "gravit-icon-inner-shadow-effect",
            mostUsed: true,
          },
          {
            clazz: GCore.GGLBulgePinchEffect,
            i18n: "GGLBulgePinchEffect",
            group: "webgl",
            category: C,
            createSettings: P,
            icon: "gravit-icon-bulge-effect",
          },
          {
            clazz: GCore.GGLColorHalfToneEffect,
            i18n: "GGLColorHalfToneEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-half-tone-effect",
          },
          {
            clazz: GCore.GGLDotScreenEffect,
            i18n: "GGLDotScreenEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-dotscreen-effect",
          },
          {
            clazz: GCore.GGLBrightnessContrastEffect,
            i18n: "GGLBrightnessContrastEffect",
            group: "webgl",
            category: w,
            hidden: true,
            createSettings: P,
          },
          {
            clazz: GCore.GGLFisheyeEffect,
            i18n: "GGLFisheyeEffect",
            group: "webgl",
            category: C,
            createSettings: P,
            icon: "gravit-icon-fisheye-effect",
          },
          {
            clazz: GCore.GGLBendEffect,
            i18n: "GGLBendEffect",
            group: "webgl",
            category: C,
            createSettings: P,
            icon: "gravit-icon-bend-effect",
          },
          {
            clazz: GCore.GGLDenoiseEffect,
            i18n: "GGLDenoiseEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-denoise-effect",
          },
          {
            clazz: GCore.GGLEdgeWorkEffect,
            i18n: "GGLEdgeWorkEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-edge-work-effect",
          },
          {
            clazz: GCore.GGLHexagonalEffect,
            i18n: "GGLHexagonalEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-hexagonal-effect",
          },
          {
            clazz: GCore.GGLHueSaturationEffect,
            i18n: "GGLHueSaturationEffect",
            group: "webgl",
            category: w,
            hidden: true,
            createSettings: P,
          },
          {
            clazz: GCore.GColorAdjustMultiEffect,
            i18n: "GColorAdjustMultiEffect",
            group: "webgl",
            category: w,
            createSettings: M,
            hidden: true,
          },
          {
            clazz: GCore.GGLInkEffect,
            i18n: "GGLInkEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-ink-effect",
          },
          {
            clazz: GCore.GGLLensBlurEffect,
            i18n: "GGLLensBlurEffect",
            group: "webgl",
            category: _,
            createSettings: P,
            icon: "gravit-icon-lens-blur-effect",
          },
          {
            clazz: GCore.GGLNoiseEffect,
            i18n: "GGLNoiseEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-noise-effect",
          },
          {
            clazz: GCore.GGLSepiaEffect,
            i18n: "GGLSepiaEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-sepia-effect",
          },
          {
            clazz: GCore.GGLSwirlEffect,
            i18n: "GGLSwirlEffect",
            group: "webgl",
            category: C,
            createSettings: P,
            icon: "gravit-icon-swirl-effect",
          },
          {
            clazz: GCore.GGLTiltShiftEffect,
            i18n: "GGLTiltShiftEffect",
            group: "webgl",
            category: _,
            createSettings: P,
            icon: "gravit-icon-tilt-shift-effect",
          },
          {
            clazz: GCore.GGLDrunkEffect,
            i18n: "GGLDrunkEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-alcohol-effect",
          },
          {
            clazz: GCore.GGLUnsharpMaskEffect,
            i18n: "GGLUnsharpMaskEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-unsharp-mask-effect",
          },
          {
            clazz: GCore.GGLVibranceEffect,
            i18n: "GGLVibranceEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-vibrance-effect",
          },
          {
            clazz: GCore.GGLBloomEffect,
            i18n: "GGLBloomEffect",
            group: "webgl",
            category: w,
            createSettings: P,
            icon: "gravit-icon-bloom-effect",
          },
          {
            clazz: GCore.GGLSketchEffect,
            i18n: "GGLSketchEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-sketch-effect",
          },
          {
            clazz: GCore.GGLToonEffect,
            i18n: "GGLToonEffect",
            group: "webgl",
            category: b,
            createSettings: P,
            icon: "gravit-icon-toon-effect",
          },
          {
            clazz: GCore.GGLZoomBlurEffect,
            i18n: "GGLZoomBlurEffect",
            group: "webgl",
            category: _,
            createSettings: P,
            icon: "gravit-icon-zoom-blur-effect",
          },
          {
            clazz: GCore.GGLStrokeLayerEffect,
            i18n: "GGLStrokeLayerEffect",
            group: "raster",
            category: x,
            createSettings: P,
            icon: "gravit-icon-stroke-effect",
          },
          {
            clazz: GCore.GGLInnerGlowEffect,
            i18n: "GGLInnerGlowEffect",
            group: "raster",
            category: x,
            createSettings: P,
            icon: "gravit-icon-inner-glow-effect",
          },
          {
            clazz: GCore.GGLOuterGlowEffect,
            i18n: "GGLOuterGlowEffect",
            group: "raster",
            category: x,
            createSettings: P,
            icon: "gravit-icon-outer-glow-effect",
          },
          {
            clazz: GCore.GContactShadowEffect,
            i18n: "GContactShadowEffect",
            group: "raster",
            category: S,
            createSettings: I,
            icon: "gravit-icon-contact-shadow-effect",
          },
          {
            clazz: GCore.GLongShadowEffect,
            i18n: "GLongShadowEffect",
            group: "raster",
            category: S,
            createSettings: k,
            icon: "gravit-icon-long-shadow-effect",
          },
          {
            clazz: GCore.GColorGradingEffect,
            i18n: "GColorGradingEffect",
            group: "filter",
            category: w,
            createSettings: R,
            icon: "gravit-icon-color-grading-effect",
          },
        ];
      };
    exports.exports = E;
  }