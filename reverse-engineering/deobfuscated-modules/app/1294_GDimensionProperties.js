/**
 * Webpack Module #1294
 * Type: class
 * Name: GDimensionProperties
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(57) /* polyfill_parseInt */, require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      r = require(67) /* GRichTooltipConfig */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      GAlignAction = require(866) /* GAlignAction */,
      GDistributeAction = require(867) /* GDistributeAction */,
      GProperties = require(123) /* GProperties */,
      u = (require(173) /* stub_requires_1 */, require(135) /* GSettingChangedEvent */),
      barrel_panels = require(257) /* barrel_panels */,
      GSnapUnitAction = require(1295) /* GSnapUnitAction */;
    function h() {
      this._elements = [];
    }
    GCore.GObject.inherit(h, GProperties),
      (h._keepRatioName = "designer.settings.dimension.preserveratio"),
      (h.prototype._panel = null),
      (h.prototype._toolbar = null),
      (h.prototype._transformButton = null),
      (h.prototype._document = null),
      (h.prototype._elements = null),
      (h.prototype._elementsBBox = null),
      (h.prototype._anchorsPanel = null),
      (h.prototype._firstElementsBBox = null),
      (h.prototype.init = function (e, t) {
        (this._panel = e),
          (this._toolbar = t),
          this._panel.addClass("dimension-panel"),
          this.setTouchTools([
            new GTouchTool.default({
              id: "dimension.align",
              icon: "gravit-icon-align",
              panelWidth: "370px",
              panel: this._toolbar,
            }),
            new GTouchTool.default({
              id: "dimension.dimension",
              icon: "gravit-icon-touch-transform",
              toolbar: ".advanced-transform-toolbar",
              panelWidth: "395px",
              panel: [this._panel, ".advanced-transform-properties"],
            }),
          ]);
        var n = function (e, t) {
          var n = this;
          if ("keep-ratio" == e)
            return $("<span></span>")
              .addClass(
                GTools.GEditorOptions.preserveAspectRatio
                  ? "gravit-icon-linked"
                  : "gravit-icon-unlinked"
              )
              .css("text-align", "center")
              .css("cursor", "pointer")
              .on("click", function (e) {
                var t = $(this);
                "yes" === t.attr("data-ratio")
                  ? (t
                      .attr("data-ratio", "no")
                      .attr("class", "gravit-icon-unlinked"),
                    n._setAspectRatioBehavior(false),
                    gDesigner.stats(
                      "dimension_toggle_preserveratio",
                      "disabled"
                    ))
                  : (t
                      .attr("data-ratio", "yes")
                      .attr("class", "gravit-icon-linked"),
                    n._setAspectRatioBehavior(true),
                    gDesigner.stats(
                      "dimension_toggle_preserveratio",
                      "enabled"
                    ));
              })
              .attr(
                "data-title",
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GDimensionProperties", "action.keep-ratio")
                )
              )
              .attr(
                "data-ratio",
                GTools.GEditorOptions.preserveAspectRatio ? "yes" : "no"
              )
              .gRichTooltip(t);
          if ("x" === e || "y" === e || "w" === e || "h" === e) {
            var _interopRequireDefault = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GCommonNames",
                "property-".concat(e.toLowerCase())
              ),
              e
            );
            return $("<div/>")
              .append(
                $("<input>")
                  .attr("type", "text")
                  .attr("data-dimension", e)
                  .on(
                    "change",
                    function (t) {
                      gDesigner.stats("dimension_set_positionOrSize"),
                        this._assignDimension(
                          e,
                          $(t.target).gInputBox("value")
                        );
                    }.bind(this)
                  )
                  .gInputBox({ minValue: "w" === e || "h" === e ? 0 : null })
              )
              .gInputLabel({ label: _interopRequireDefault, autoPadding: _interopRequireDefault.length > 1 })
              .gRichTooltip(t);
          }
          return "rotate" === e
            ? $("<div/>")
                .append(
                  $("<input>")
                    .attr("type", "text")
                    .attr("data-dimension", e)
                    .on(
                      "change",
                      function (t) {
                        gDesigner.stats("dimension_set_rotation"),
                          this._assignDimension(
                            e,
                            $(t.target).gInputBox("value")
                          );
                      }.bind(this)
                    )
                    .gInputBox({ postfix: "°" })
                )
                .gInputLabel({ label: "R" })
                .gRichTooltip(t)
            : undefined;
        }.bind(this);
        function _interopRequireDefault(e) {
          var t = GAlignAction.ID + "." + e,
            n = gDesigner.getAction(t);
          const _interopRequireDefault = n.getTooltipConfig(r.TOOLTIP_AREA.SIDEBAR),
            GTools = $("<span></span>");
          return (
            barrel_panels.icon
              ? (GTools.addClass("icon"), GTools.addClass(n.getIcon()))
              : GTools.append(n.getIcon()),
            GTools.css("stroke", "transparent"),
            _interopRequireDefault && GTools.gRichTooltip(_interopRequireDefault),
            $("<button></button>")
              .attr("data-title", GCore.GLocale.get(n.getTitle()))
              .attr("data-action", t)
              .addClass("svg-button")
              .append(GTools.addClass("normal"))
              .append(
                $("<span/>").addClass("gravit-icon-touch-".concat(e, " touch"))
              )
              .on("click", function () {
                gDesigner.executeAction(t, undefined, "dimensionproperties");
              })
          );
        }
        function GProperties(e) {
          var t = GDistributeAction.ID + "." + e,
            n = gDesigner.getAction(t);
          const _interopRequireDefault = n.getTooltipConfig(r.TOOLTIP_AREA.SIDEBAR),
            GTools = $("<span></span>").append(n.getIcon());
          return (
            _interopRequireDefault && GTools.gRichTooltip(_interopRequireDefault),
            $("<button></button>")
              .attr("data-title", GCore.GLocale.get(n.getTitle()))
              .attr("data-action", t)
              .addClass("svg-button")
              .append(GTools.addClass("normal"))
              .append(
                $("<span/>").addClass("gravit-icon-touch-".concat(e, " touch"))
              )
              .on("click", function () {
                var n = $(".".concat(e, "Input")).find("input").val();
                (n = "Auto" == n ? undefined : parseInt(n)),
                  gDesigner.executeAction(
                    t,
                    [undefined, undefined, n],
                    "dimensionproperties"
                  );
              })
          );
        }
        function u(e) {
          var t = $("<div></div>")
              .addClass(e + "Input")
              .gInputSelect({ list: ["Auto", "0", 1, 10, 20, 30, 50, 100] }),
            n = /^-?[0-9]+.?[0-9]*$/;
          return (
            t
              .find("input")
              .val("Auto")
              .off("change")
              .on("change", function () {
                n.test($(this).val()) || $(this).val("Auto");
              }),
            t
          );
        }
        t
          .addClass("main-toolbar")
          .append(GProperties(GDistributeAction.Type.Horizontal).addClass("primary normalDistribute"))
          .append(GProperties(GDistributeAction.Type.Vertical).addClass("primary normalDistribute"))
          .append($("<span></span>").addClass("divider"))
          .append(_interopRequireDefault(GTools.GEditor.ArrangeAlignType.AlignLeft).addClass("secondary"))
          .append(
            _interopRequireDefault(GTools.GEditor.ArrangeAlignType.AlignCenter).addClass("secondary")
          )
          .append(
            _interopRequireDefault(GTools.GEditor.ArrangeAlignType.AlignRight).addClass("secondary")
          )
          .append($("<span></span>").addClass("divider"))
          .append($("<p/>").addClass("interval"))
          .append(_interopRequireDefault(GTools.GEditor.ArrangeAlignType.AlignTop).addClass("secondary"))
          .append(
            _interopRequireDefault(GTools.GEditor.ArrangeAlignType.AlignMiddle).addClass("secondary")
          )
          .append(
            _interopRequireDefault(GTools.GEditor.ArrangeAlignType.AlignBottom).addClass("secondary")
          )
          .append($("<p/>").addClass("lineBreak"))
          .append(GProperties(GDistributeAction.Type.Horizontal).addClass("primary touchDistribute"))
          .append(u(GDistributeAction.Type.Horizontal).addClass("touchDistribute"))
          .append($("<p/>").addClass("interval"))
          .append(GProperties(GDistributeAction.Type.Vertical).addClass("primary touchDistribute"))
          .append(u(GDistributeAction.Type.Vertical).addClass("touchDistribute")),
          (this._advancedFillPanel = $("<div></div>").gOverlay({
            releaseOnClose: false,
          })),
          this._advancedFillPanel.parent().addClass("settingBox"),
          $("<div></div>")
            .addClass("alignSettings")
            .gPropertyRow({
              columns: [
                {
                  width: "100%",
                  content: $("<div></div>")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GDimensionProperties",
                          "text.sameHeight"
                        )
                      )
                    )
                    .prepend(
                      $("<span></span>").addClass("gravit-icon-sameHeight")
                    )
                    .on("click", () => {
                      new GAlignAction(
                        GTools.GEditor.ArrangeAlignType.AlignJustifyVertical
                      ).execute(),
                        this._advancedFillPanel.gOverlay("close");
                    }),
                },
              ],
            })
            .gPropertyRow({
              columns: [
                {
                  width: "100%",
                  content: $("<div></div>")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GDimensionProperties",
                          "text.sameWidth"
                        )
                      )
                    )
                    .prepend(
                      $("<span></span>").addClass("gravit-icon-sameWidth")
                    )
                    .on("click", () => {
                      new GAlignAction(
                        GTools.GEditor.ArrangeAlignType.AlignJustifyHorizontal
                      ).execute(),
                        this._advancedFillPanel.gOverlay("close");
                    }),
                },
              ],
            })
            .gPropertyRow({
              columns: [
                {
                  width: "100%",
                  content: $("<div></div>")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GDimensionProperties",
                          "text.fullUnit"
                        )
                      )
                    )
                    .prepend(
                      $("<span></span>").addClass("gravit-icon-fullUnit")
                    )
                    .on("click", () => {
                      new GSnapUnitAction(GSnapUnitAction.Type.FullUnit).execute(),
                        this._advancedFillPanel.gOverlay("close");
                    }),
                },
              ],
            })
            .gPropertyRow({
              columns: [
                {
                  width: "100%",
                  content: $("<div></div>")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GDimensionProperties",
                          "text.halfUnit"
                        )
                      )
                    )
                    .prepend(
                      $("<span></span>").addClass("gravit-icon-HalfUnit")
                    )
                    .on("click", () => {
                      new GSnapUnitAction(GSnapUnitAction.Type.HalfUnit).execute(),
                        this._advancedFillPanel.gOverlay("close");
                    }),
                },
              ],
            })
            .appendTo(this._advancedFillPanel),
          $("<p/>").addClass("lineBreak").prependTo(t),
          $("<button></button>")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GDimensionProperties", "text.setting")
              )
            )
            .addClass("align-settings")
            .append($("<span></span>").addClass("gravit-icon-touch-settings"))
            .on(
              "click",
              function (e) {
                this._advancedFillPanel.gOverlay(
                  "open",
                  $(e.target).closest("button")
                );
              }.bind(this)
            )
            .prependTo(t),
          $("<label></label>")
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GDimensionProperties", "text.alignTitle")
              )
            )
            .prependTo(t);
        const h = r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.property-x-y-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.property-x-y-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          f = r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.property-w-h-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.property-w-h-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          m = r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.keep-ratio-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.keep-ratio-tooltip-description"
              )
            ),
          }),
          y = r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.transform-button-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.transform-button-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          v = r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.rotate-angle-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GDimensionProperties",
                "text.rotate-angle-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          });
        $("<div/>")
          .addClass("transform-titile")
          .text(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GDimensionProperties", "text.transform-title")
            )
          )
          .appendTo(this._panel),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.position")
              ),
              columns: [
                { width: "44%", content: n("x", h) },
                { width: "12%" },
                { width: "44%", content: n("y", h) },
              ],
            })
            .appendTo(e),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.size")
              ),
              columns: [
                { width: "44%", content: n("w", f) },
                { width: "12%", content: n("keep-ratio", m) },
                { width: "44%", content: n("h", f) },
              ],
            })
            .appendTo(e),
          (this._transformButton = $(
            "<button>" +
              GCore.GLocale.get(
                new GCore.GLocaleKey("GDimensionProperties", "text.transform")
              ) +
              "</button>"
          )
            .addClass("transform-button")
            .on("click", this._toggleTransformMode.bind(this))
            .gRichTooltip(y)),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.angle")
              ),
              columns: [
                { width: "44%", content: n("rotate", v) },
                { width: "12%" },
                { width: "44%", content: this._transformButton },
              ],
            })
            .appendTo(e),
          (this._anchorsPanel = $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GDimensionProperties", "text.anchors")
              ),
              columns: [
                {
                  width: "44%",
                  content: $("<div/>")
                    .addClass("anchor-buttons")
                    .append(
                      $("<div/>")
                        .append(
                          $("<span/>").addClass("gravit-icon-anchor-left")
                        )
                        .addClass("g-button")
                        .addClass("g-group-start")
                        .addClass("hacr-start")
                        .attr(
                          "data-title",
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GDimensionProperties",
                              "action.anchor-left"
                            )
                          )
                        )
                        .on(
                          "click",
                          function () {
                            gDesigner.stats(
                              "dimension_set_anchors-horizontalstart"
                            );
                            var e = this._getHorizontalAnchorValue(),
                              t = this._defineAnchorProperty(
                                "hacr",
                                GCore.GElement.Anchor.AnchorType.Start,
                                e
                              );
                            this._defineAnchorButtonState(null, t);
                          }.bind(this)
                        )
                        .gRichTooltip(
                          r.GRichTooltipConfig.from({
                            title: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-left-tooltip-title"
                              )
                            ),
                            description: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-left-tooltip-description"
                              )
                            ),
                            learnMore:
                              "",
                          })
                        )
                    )
                    .append(
                      $("<div/>")
                        .append(
                          $("<span/>").addClass("gravit-icon-anchor-center")
                        )
                        .addClass("g-button")
                        .addClass("g-group-element")
                        .addClass("hacr-middle")
                        .attr(
                          "data-title",
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GDimensionProperties",
                              "action.anchor-center"
                            )
                          )
                        )
                        .on(
                          "click",
                          function () {
                            gDesigner.stats(
                              "dimension_set_anchors-horizontalmiddle"
                            );
                            var e = this._getHorizontalAnchorValue(),
                              t = this._defineAnchorProperty(
                                "hacr",
                                GCore.GElement.Anchor.AnchorType.Middle,
                                e
                              );
                            this._defineAnchorButtonState(null, t);
                          }.bind(this)
                        )
                        .gRichTooltip(
                          r.GRichTooltipConfig.from({
                            title: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-center-tooltip-title"
                              )
                            ),
                            description: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-center-tooltip-description"
                              )
                            ),
                            learnMore:
                              "",
                          })
                        )
                    )
                    .append(
                      $("<div/>")
                        .append(
                          $("<span/>").addClass("gravit-icon-anchor-right")
                        )
                        .addClass("g-button")
                        .addClass("g-group-end")
                        .addClass("hacr-end")
                        .attr(
                          "data-title",
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GDimensionProperties",
                              "action.anchor-right"
                            )
                          )
                        )
                        .on(
                          "click",
                          function () {
                            gDesigner.stats(
                              "dimension_set_anchors-horizontalend"
                            );
                            var e = this._getHorizontalAnchorValue(),
                              t = this._defineAnchorProperty(
                                "hacr",
                                GCore.GElement.Anchor.AnchorType.End,
                                e
                              );
                            this._defineAnchorButtonState(null, t);
                          }.bind(this)
                        )
                        .gRichTooltip(
                          r.GRichTooltipConfig.from({
                            title: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-right-tooltip-title"
                              )
                            ),
                            description: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-right-tooltip-description"
                              )
                            ),
                            learnMore:
                              "",
                          })
                        )
                    ),
                },
                { width: "12%" },
                {
                  width: "44%",
                  content: $("<div>")
                    .addClass("anchor-buttons")
                    .append(
                      $("<div/>")
                        .append($("<span/>").addClass("gravit-icon-anchor-top"))
                        .addClass("g-button")
                        .addClass("g-group-start")
                        .addClass("vacr-start")
                        .attr(
                          "data-title",
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GDimensionProperties",
                              "action.anchor-top"
                            )
                          )
                        )
                        .on(
                          "click",
                          function () {
                            gDesigner.stats(
                              "dimension_set_anchors-verticalstart"
                            );
                            var e = this._getVerticalAnchorValue(),
                              t = this._defineAnchorProperty(
                                "vacr",
                                GCore.GElement.Anchor.AnchorType.Start,
                                e
                              );
                            this._defineAnchorButtonState(t, null);
                          }.bind(this)
                        )
                        .gRichTooltip(
                          r.GRichTooltipConfig.from({
                            title: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-top-tooltip-title"
                              )
                            ),
                            description: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-top-tooltip-description"
                              )
                            ),
                            learnMore:
                              "",
                          })
                        )
                    )
                    .append(
                      $("<div/>")
                        .append(
                          $("<span/>").addClass("gravit-icon-anchor-middle")
                        )
                        .addClass("g-button")
                        .addClass("g-group-element")
                        .addClass("vacr-middle")
                        .attr(
                          "data-title",
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GDimensionProperties",
                              "action.anchor-middle"
                            )
                          )
                        )
                        .on(
                          "click",
                          function () {
                            gDesigner.stats(
                              "dimension_set_anchors-verticalmiddle"
                            );
                            var e = this._getVerticalAnchorValue(),
                              t = this._defineAnchorProperty(
                                "vacr",
                                GCore.GElement.Anchor.AnchorType.Middle,
                                e
                              );
                            this._defineAnchorButtonState(t, null);
                          }.bind(this)
                        )
                        .gRichTooltip(
                          r.GRichTooltipConfig.from({
                            title: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-middle-tooltip-title"
                              )
                            ),
                            description: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-middle-tooltip-description"
                              )
                            ),
                            learnMore:
                              "",
                          })
                        )
                    )
                    .append(
                      $("<div/>")
                        .append(
                          $("<span/>").addClass("gravit-icon-anchor-bottom")
                        )
                        .addClass("g-button")
                        .addClass("g-group-end")
                        .addClass("vacr-end")
                        .attr(
                          "data-title",
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GDimensionProperties",
                              "action.anchor-bottom"
                            )
                          )
                        )
                        .on(
                          "click",
                          function () {
                            gDesigner.stats(
                              "dimension_set_anchors-verticalend"
                            );
                            var e = this._getVerticalAnchorValue(),
                              t = this._defineAnchorProperty(
                                "vacr",
                                GCore.GElement.Anchor.AnchorType.End,
                                e
                              );
                            this._defineAnchorButtonState(t, null);
                          }.bind(this)
                        )
                        .gRichTooltip(
                          r.GRichTooltipConfig.from({
                            title: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-bottom-tooltip-title"
                              )
                            ),
                            description: GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDimensionProperties",
                                "text.anchor-bottom-tooltip-description"
                              )
                            ),
                            learnMore:
                              "",
                          })
                        )
                    ),
                },
              ],
            })
            .addClass("anchor-panel")
            .appendTo(e));
      }),
      (h.prototype._setAspectRatioBehavior = function (e) {
        (GTools.GEditorOptions.preserveAspectRatio = e),
          (GTools.GEditorOptions.allowTextRatioPreservation = e),
          gContainer.setProperty(h._keepRatioName, e);
      }),
      (h.prototype.isAvailable = function (e) {
        return (
          this._transformButton.toggleClass("g-active", e),
          gDesigner.isTouchEnabled() &&
            (e
              ? (this._transformButton.text(
                  GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "close"))
                ),
                $(".advanced-transform-toolbar > label").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GDimensionProperties",
                      "text.transform-advanced"
                    )
                  )
                ),
                this._anchorsPanel.toggleClass("down", true),
                this._panel.toggleClass("have-anchor", false),
                $(".advanced-transform-properties").toggleClass(
                  "have-anchor",
                  true
                ))
              : (this._transformButton.text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GDimensionProperties", "text.transform")
                  )
                ),
                this._anchorsPanel.toggleClass("down", false),
                this._panel.toggleClass("have-anchor", true),
                $(".advanced-transform-properties").toggleClass(
                  "have-anchor",
                  false
                ),
                this._panel.addClass("have-anchor")),
            this._changeSideBarContinerZIndex(e)),
          true
        );
      }),
      (h.prototype._changeSideBarContinerZIndex = function (e) {
        gDesigner.isTouchEnabled() &&
          (e
            ? gDesigner.getRightSidebars().addClassName("more-z-index")
            : gDesigner.getRightSidebars().removeClassName("more-z-index"));
      }),
      (h.prototype.update = function (e, t) {
        if (
          (this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GElement.GeometryChangeEvent,
                this._geometryChange,
                this
              ),
            this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            this._document
              .getEditor()
              .removeEventListener(
                GTools.GEditor.EdGeometryChangeEvent,
                this._edGeometryChange,
                this
              ),
            gDesigner.removeEventListener(u, this._settingChanged),
            (this._document = null)),
          (this._elements = []),
          $(this._panel).find(".anchor-panel").css("display", "none"),
          e)
        ) {
          for (var require = 0; require < t.length; ++require)
            !t[require].hasMixin(GCore.GElement.Transform) ||
              t[require] instanceof GCore.GPage ||
              this._elements.push(t[require]);
          if (this._elements.length && this._elements.length === t.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GElement.GeometryChangeEvent,
                  this._geometryChange,
                  this
                ),
              this._document
                .getEditor()
                .addEventListener(
                  GTools.GEditor.EdGeometryChangeEvent,
                  this._edGeometryChange,
                  this
                ),
              gDesigner.addEventListener(u, this._settingChanged, this),
              this._updateDimensions(),
              this._updateToolbar(),
              this._showAnchor() &&
                ($(this._panel).find(".anchor-panel").css("display", ""),
                this._defineAnchorButtonState(
                  this._getVerticalAnchorValue(),
                  this._getHorizontalAnchorValue()
                )),
              true
            );
        }
        return false;
      }),
      (h.prototype._toggleTransformMode = function () {
        gDesigner.stats("dimension_change_transform-mode");
        var e = gDesigner.getToolManager();
        (e.getActiveTool() && e.getActiveTool() instanceof GTools.GSelectTool) ||
          e.activateTool(GTools.GPointerTool),
          e.getActiveTool() instanceof GTools.GSelectTool &&
            e
              .getActiveTool()
              .setEditMode(
                e.getActiveTool().getEditMode() ===
                  GTools.GSelectTool.EditMode.Transform
                  ? GTools.GSelectTool.EditMode.Select
                  : GTools.GSelectTool.EditMode.Transform
              );
      }),
      (h.prototype._geometryChange = function (e) {
        (e.type !== GCore.GElement.GeometryChangeEvent.Type.After &&
          e.type !== GCore.GElement.GeometryChangeEvent.Type.Child) ||
          (this._elements.indexOf(e.element) >= 0 && this._updateDimensions());
      }),
      (h.prototype._edGeometryChange = function (e) {
        this._updateDimensions(false, true);
      }),
      (h.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          this._elements &&
          this._elements.indexOf(e.node) >= 0 &&
          this._showAnchor() &&
          this._defineAnchorButtonState(
            this._getVerticalAnchorValue(),
            this._getHorizontalAnchorValue()
          );
      }),
      (h.prototype._settingChanged = function (e) {
        "decimals_num" === e.key && this._updateDimensions();
      }),
      (h.prototype._getCurrentDimensions = function (e, t) {
        var n = null,
          _interopRequireDefault = 0;
        if (!e) {
          (this._elementsBBox = null), (this._firstElementsBBox = null);
          for (var r = 0; r < this._elements.length; ++r) {
            var GTouchTool = this._elements[r];
            if (GTouchTool.hasMixin(GCore.GElement.Transform)) {
              var GAlignAction = null;
              if (t) {
                var GDistributeAction = GTools.GElementEditor.getEditor(GTouchTool);
                GDistributeAction && GDistributeAction.getElement() && (GAlignAction = GDistributeAction.getPEGeometryBBox());
              } else GAlignAction = GTouchTool.getGeometryBBox();
              GAlignAction &&
                ((this._elementsBBox = this._elementsBBox
                  ? this._elementsBBox.united(GAlignAction)
                  : GAlignAction),
                this._firstElementsBBox ||
                  ((this._firstElementsBBox = GAlignAction),
                  (_interopRequireDefault = t && GDistributeAction ? GDistributeAction.getRotationAngle() : GTouchTool.getAngle())));
            }
          }
          this._elementsBBox ||
            ((this._elementsBBox = null),
            (this._firstElementsBBox = this._elementsBBox));
        }
        if (this._firstElementsBBox) {
          var GProperties = this._elements.length > 1,
            u = this._getDelta();
          if (GProperties) {
            var barrel_panels = 0;
            if (t) {
              var GSnapUnitAction = this._document.getEditor().getSelectionEditor();
              GSnapUnitAction && (barrel_panels = GSnapUnitAction.getRotationAngle());
            }
            n = {
              x: this._elementsBBox.getX() - u.getX(),
              y: this._elementsBBox.getY() - u.getY(),
              w: this._elementsBBox.getWidth(),
              h: this._elementsBBox.getHeight(),
              angle: barrel_panels,
            };
          } else
            n = {
              x: this._firstElementsBBox.getX() - u.getX(),
              y: this._firstElementsBBox.getY() - u.getY(),
              w: this._firstElementsBBox.getWidth(),
              h: this._firstElementsBBox.getHeight(),
              angle: _interopRequireDefault,
            };
        }
        return n;
      }),
      (h.prototype._updateDimensions = function (e, t) {
        var n = (e, t) => {
            var n = "";
            if (null !== t)
              switch (e) {
                case "x":
                case "y":
                case "w":
                case "h":
                  n = this._document
                    .getScene()
                    .pointToString(
                      t,
                      this._document.getScene().getOptimalDecimalsCount()
                    );
                  break;
                case "rotate":
                  n = GCore.GUtil.formatNumber(GCore.GMath.toDegrees(t), 1);
              }
            this._panel
              .find('input[data-dimension="' + e + '"]')
              .gInputBox("value", n)
              .prop("disabled", null === t);
          },
          _interopRequireDefault = this._getCurrentDimensions(e, t);
        _interopRequireDefault
          ? (this._panel.find("[data-ratio]").css("display", ""),
            n("x", _interopRequireDefault.x),
            n("y", _interopRequireDefault.y),
            n("w", _interopRequireDefault.w),
            n("h", _interopRequireDefault.h),
            n("rotate", _interopRequireDefault.angle))
          : (this._panel.find("[data-ratio]").css("display", "none"),
            n("x", null),
            n("y", null),
            n("w", null),
            n("h", null),
            n("rotate", 0));
      }),
      (h.prototype._updateToolbar = function () {
        this._toolbar.find("[data-action]").each(
          function (e, t) {
            var n = $(t);
            n.prop(
              "disabled",
              !gDesigner.canExecuteAction(n.attr("data-action"))
            );
          }.bind(this)
        ),
          this._toolbar.find(".touchDistribute>input").each(
            function (e, t) {
              $(t).prop(
                "disabled",
                !gDesigner.canExecuteAction("arrange.distribute.horizontal")
              );
            }.bind(this)
          ),
          this._toolbar.find(".touchDistribute>button").each(
            function (e, t) {
              $(t).prop(
                "disabled",
                !gDesigner.canExecuteAction("arrange.distribute.horizontal")
              );
            }.bind(this)
          );
      }),
      (h.prototype._assignDimension = function (e, t) {
        if (this._document) {
          var require = null,
            _interopRequireDefault = null,
            r = "",
            GTouchTool = this._getCurrentDimensions(false, false);
          switch (e) {
            case "x":
            case "y":
              (r = "Move"),
                (require = this._document.getScene().stringToPoint(t)),
                (_interopRequireDefault = GTouchTool ? ("x" == e ? GTouchTool.x : GTouchTool.y) : null);
              break;
            case "w":
            case "h":
              (r = GCore.GLocale.get(
                new GCore.GLocaleKey("GDimensionProperties", "action.change-size")
              )),
                (require = this._document.getScene().stringToPoint(t)),
                (_interopRequireDefault = GTouchTool ? ("w" == e ? GTouchTool.w : GTouchTool.h) : null);
              break;
            case "rotate":
              (r = GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "action.rotate")
              )),
                (require = GCore.GLength.parseEquationValue(t)),
                (_interopRequireDefault = GTouchTool ? GTouchTool.angle : null);
          }
          if (
            null === require ||
            "number" != typeof require ||
            (("w" == e || "h" == e) && require <= 0) ||
            require === _interopRequireDefault
          )
            this._updateDimensions();
          else {
            if ("x" === e || "y" === e) {
              var GAlignAction = this._getDelta();
              switch (e) {
                case "x":
                  require += GAlignAction.getX();
                  break;
                case "y":
                  require += GAlignAction.getY();
              }
            }
            var GDistributeAction = function (t, _interopRequireDefault, GTools) {
                if ("w" === e || "h" === e) {
                  if (
                    ("w" === e && t.getWidth() <= 0) ||
                    ("h" === e && t.getHeight() <= 0)
                  )
                    return new GCore.GTransform();
                  var r = 1,
                    GTouchTool = 1;
                  switch (e) {
                    case "w":
                      (r = require / t.getWidth()), _interopRequireDefault && (GTouchTool = r);
                      break;
                    case "h":
                      (GTouchTool = require / t.getHeight()), _interopRequireDefault && (r = GTouchTool);
                  }
                  return new GCore.GTransform()
                    .translated(-t.getX(), -t.getY())
                    .scaled(r, GTouchTool)
                    .translated(t.getX(), t.getY());
                }
                if ("x" === e)
                  return new GCore.GTransform().translated(require - t.getX(), 0);
                if ("y" === e)
                  return new GCore.GTransform().translated(0, require - t.getY());
                if ("rotate" === e) {
                  var GAlignAction = t.getSide(GCore.GRect.Side.CENTER);
                  GTools = GTools || 0;
                  return new GCore.GTransform()
                    .translated(-GAlignAction.getX(), -GAlignAction.getY())
                    .rotated(GTools - GCore.GMath.toRadians(require))
                    .translated(GAlignAction.getX(), GAlignAction.getY());
                }
              },
              GProperties = this._elements.length > 1,
              u = "yes" === this._panel.find("[data-ratio]").attr("data-ratio"),
              barrel_panels = this._document.getEditor();
            barrel_panels.beginTransaction();
            try {
              for (
                var GSnapUnitAction = function (t, n, _interopRequireDefault, r) {
                    if ((t = _interopRequireDefault.length && _interopRequireDefault.indexOf(t) >= 0 ? null : t)) {
                      var GTouchTool =
                          (t instanceof GCore.GSymbol &&
                            ("x" === e || "y" === e)) ||
                          "rotate" === e ||
                          (r && r.fullContentTransform),
                        GAlignAction = GTools.GElementEditor.openEditor(t);
                      GAlignAction
                        ? (GAlignAction._setTransform(n), GAlignAction.applyTransform(t, GTouchTool, _interopRequireDefault))
                        : t.transform(n, GTouchTool, _interopRequireDefault);
                    }
                  },
                  h = [],
                  f = 0;
                f < this._elements.length;
                ++f
              ) {
                var m = this._elements[f];
                h = h.concat(barrel_panels.getLinkedElementsInSelection(m, this._elements));
              }
              if (GProperties) {
                if (this._elementsBBox) {
                  var y = GDistributeAction(this._elementsBBox, u);
                  for (f = 0; f < this._elements.length; ++f)
                    GSnapUnitAction(this._elements[f], y, h, barrel_panels.getEdTransformSettings());
                }
              } else
                for (f = 0; f < this._elements.length; ++f) {
                  var v = this._elements[f].getGeometryBBox();
                  if (v)
                    (y = GDistributeAction(
                      v,
                      u,
                      "rotate" === e ? this._elements[f].getAngle() : null
                    )) &&
                      !y.isIdentity() &&
                      GSnapUnitAction(this._elements[f], y, h, barrel_panels.getEdTransformSettings());
                }
            } finally {
              barrel_panels.commitTransaction(r);
            }
          }
        }
      }),
      (h.prototype._showAnchor = function () {
        for (var exports = this._elements, module = true, require = 0; require < exports.length; ++require)
          if (
            !exports[require].getParent() ||
            !exports[require].getParent().hasMixin(GCore.GElement.Layout)
          ) {
            module = false;
            break;
          }
        return module;
      }),
      (h.prototype._getHorizontalAnchorValue = function () {
        for (
          var exports = this._elements,
            module = exports[0].getProperty("hacr") ? exports[0].getProperty("hacr") : 0,
            require = 0;
          require < exports.length;
          ++require
        )
          if (exports[require].getProperty("hacr") !== module) {
            module = 0;
            break;
          }
        return module;
      }),
      (h.prototype._getVerticalAnchorValue = function () {
        for (
          var exports = this._elements,
            module = exports[0].getProperty("vacr") ? exports[0].getProperty("vacr") : 0,
            require = 0;
          require < exports.length;
          ++require
        )
          if (exports[require].getProperty("vacr") !== module) {
            module = 0;
            break;
          }
        return module;
      }),
      (h.prototype._defineAnchorButtonState = function (e, t) {
        null !== e &&
          ($(this._panel)
            .find(".vacr-middle")
            .addClass(
              e === GCore.GElement.Anchor.AnchorType.Middle ? "g-active" : ""
            ),
          $(this._panel)
            .find(".vacr-start")
            .addClass(
              e === GCore.GElement.Anchor.AnchorType.Stretch ||
                e === GCore.GElement.Anchor.AnchorType.Start
                ? "g-active"
                : ""
            ),
          $(this._panel)
            .find(".vacr-end")
            .addClass(
              e === GCore.GElement.Anchor.AnchorType.Stretch ||
                e === GCore.GElement.Anchor.AnchorType.End
                ? "g-active"
                : ""
            ),
          $(this._panel)
            .find(".vacr-middle")
            .removeClass(
              e !== GCore.GElement.Anchor.AnchorType.Middle ? "g-active" : ""
            ),
          $(this._panel)
            .find(".vacr-start")
            .removeClass(
              e !== GCore.GElement.Anchor.AnchorType.Start &&
                e !== GCore.GElement.Anchor.AnchorType.Stretch
                ? "g-active"
                : ""
            ),
          $(this._panel)
            .find(".vacr-end")
            .removeClass(
              e !== GCore.GElement.Anchor.AnchorType.End &&
                e !== GCore.GElement.Anchor.AnchorType.Stretch
                ? "g-active"
                : ""
            )),
          null !== t &&
            ($(this._panel)
              .find(".hacr-middle")
              .addClass(
                t === GCore.GElement.Anchor.AnchorType.Middle ? "g-active" : ""
              ),
            $(this._panel)
              .find(".hacr-start")
              .addClass(
                t === GCore.GElement.Anchor.AnchorType.Stretch ||
                  t === GCore.GElement.Anchor.AnchorType.Start
                  ? "g-active"
                  : ""
              ),
            $(this._panel)
              .find(".hacr-end")
              .addClass(
                t === GCore.GElement.Anchor.AnchorType.Stretch ||
                  t === GCore.GElement.Anchor.AnchorType.End
                  ? "g-active"
                  : ""
              ),
            $(this._panel)
              .find(".hacr-middle")
              .removeClass(
                t !== GCore.GElement.Anchor.AnchorType.Middle ? "g-active" : ""
              ),
            $(this._panel)
              .find(".hacr-start")
              .removeClass(
                t !== GCore.GElement.Anchor.AnchorType.Start &&
                  t !== GCore.GElement.Anchor.AnchorType.Stretch
                  ? "g-active"
                  : ""
              ),
            $(this._panel)
              .find(".hacr-end")
              .removeClass(
                t !== GCore.GElement.Anchor.AnchorType.End &&
                  t !== GCore.GElement.Anchor.AnchorType.Stretch
                  ? "g-active"
                  : ""
              ));
      }),
      (h.prototype._defineAnchorProperty = function (e, t, n) {
        var _interopRequireDefault = t;
        return (
          t === n
            ? (_interopRequireDefault = 0)
            : t !== GCore.GElement.Anchor.AnchorType.Middle &&
              (n === GCore.GElement.Anchor.AnchorType.Stretch
                ? (_interopRequireDefault =
                    t === GCore.GElement.Anchor.AnchorType.End
                      ? GCore.GElement.Anchor.AnchorType.Start
                      : GCore.GElement.Anchor.AnchorType.End)
                : n === GCore.GElement.Anchor.AnchorType.Start
                ? (_interopRequireDefault =
                    t === GCore.GElement.Anchor.AnchorType.End
                      ? GCore.GElement.Anchor.AnchorType.Stretch
                      : 0)
                : n === GCore.GElement.Anchor.AnchorType.End &&
                  (_interopRequireDefault =
                    t === GCore.GElement.Anchor.AnchorType.Start
                      ? GCore.GElement.Anchor.AnchorType.Stretch
                      : 0)),
          this._assignAnchorProperty([e], [_interopRequireDefault]),
          _interopRequireDefault
        );
      }),
      (h.prototype._assignAnchorProperty = function (e, t) {
        if (this._document) {
          var require = this._document.getEditor();
          require.beginTransaction();
          try {
            for (var _interopRequireDefault = 0; _interopRequireDefault < this._elements.length; ++_interopRequireDefault) {
              var r = this._elements[_interopRequireDefault];
              if (r.getParent().hasMixin(GCore.GElement.Layout)) {
                var GTouchTool = GTools.GElementEditor.getEditor(this._elements[_interopRequireDefault]);
                (GTouchTool && GTouchTool.applyPropertiesToParts(e, t)) ||
                  this._elements[_interopRequireDefault].setProperties(e, t);
              }
            }
          } finally {
            require.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GDimensionProperties", "action.change-anchor")
              )
            );
          }
        } else console.warn("GDimensionProperties: empty _document property");
      }),
      (h.prototype._getDelta = function () {
        return new GCore.GPoint(0, 0);
      }),
      (h.prototype.toString = function () {
        return "[Object GDimensionProperties]";
      }),
      (exports.exports = h);
  }