/**
 * Webpack Module #1162
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(57) /* polyfill_parseInt */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var GEditor = require(15) /* GEditor */,
      GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      GEvent_type = _interopRequireDefault(require(807) /* GEvent_type */),
      GOutlineSidebar = _interopRequireDefault(require(198) /* Exports_GOutlineSidebar */),
      DataModule_1161 = require(1161) /* DataModule_1161 */,
      p = _interopRequireDefault(require(565) /* module_565 */),
      AppSettings = require(10) /* AppSettings */,
      GProperties = require(123) /* GProperties */,
      f = require(450) /* module_450 */;
    const m = require(607) /* module_607 */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function v() {}
    GCore.GObject.inherit(v, GProperties),
      (v.prototype._panel = null),
      (v.prototype._toolbar = null),
      (v.prototype._elements = null),
      (v.prototype._document = null),
      (v.prototype._advancedStrokePanel = null),
      (v.prototype._styleEditorChange = false),
      (v.prototype._styleEdOn = false),
      (v.prototype._ownChange = false),
      (v.prototype._chooserElem = null),
      (v.prototype.init = function (e, t) {
        (this._panel = e.addClass("border-properties-panel")),
          (this._toolbar = t),
          this.setTouchTools([
            new GTouchTool.default({
              id: "border",
              icon: "gravit-icon-touch-border",
              panel: this._panel,
              toolbar: this._toolbar,
              panelWidth: "368px",
            }),
          ]),
          $("<label></label>")
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GBorderPaintLayerProperties", "title")
              )
            )
            .appendTo(t);
        var n = this;
        (this._advancedStrokePanel = $("<div></div>")
          .css("width", "280px")
          .gOverlay({ releaseOnClose: false })),
          this._advancedStrokePanel.parent().addClass("border-settings");
        var _interopRequireDefault = function (e, t, n) {
            var _interopRequireDefault = this._getSelectedPaintLayer();
            _interopRequireDefault ||
              (_interopRequireDefault = $(this._panel)
                .find(".border-block:last")
                .data("paintLayer")),
              _interopRequireDefault && this._assign(_interopRequireDefault, e, t, n);
          }.bind(this),
          GEditor = function (e, t, n) {
            this._getSelectedPaintLayer()
              ? this._assign(this._getSelectedPaintLayer(), e, t, n)
              : this._panel.find(".border-block").each(
                  function (_interopRequireDefault, GEditor) {
                    var GTools = $(GEditor).data("paintLayer");
                    GTools && this._assign(GTools, e, t, n);
                  }.bind(this)
                );
          }.bind(this),
          DataModule_1161 = function (e) {
            var t = this;
            if ("_bw" === e || "_bml" === e)
              return $("<input>")
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function () {
                  var n = t._getSelectedPaintLayer();
                  if (
                    (n ||
                      (n = $(t._panel)
                        .find(".border-block:last")
                        .data("paintLayer")),
                    t._getProperty(n, "_blj") === GCore.GPaintCanvas.LineJoin.Miter)
                  ) {
                    var GEditor = GCore.GLength.parseEquationValue($(this).val());
                    gDesigner.stats("border_change_miterlimit", GEditor),
                      null !== GEditor && GEditor > 0
                        ? _interopRequireDefault(["_vs", e], [true, GEditor])
                        : t._updateProperties();
                  }
                })
                .gInputBox();
            if ("_bds" === e)
              return $("<input>")
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function () {
                  var t = [];
                  gDesigner.stats("border_change_dash"),
                    $(this)
                      .closest(".columns")
                      .find('[data-property="_bds"]')
                      .each(function (e, n) {
                        var _interopRequireDefault = GCore.GLength.parseEquationValue($(this).val());
                        null !== _interopRequireDefault && _interopRequireDefault >= 0 && t.push(_interopRequireDefault);
                      }),
                    GEditor(["_vs", e], [true, t]);
                })
                .gInputBox();
            if (0 === e.indexOf("_ba-")) {
              var n = "",
                GTools = "",
                GRichTooltipConfig = e.substr("_ba-".length);
              switch (GRichTooltipConfig) {
                case GCore.GStylable.BorderAlignment.Inside:
                  (n = "gravit-icon-line-stroke-inside"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GStylable", "border-alignment.inside")
                    ));
                  break;
                case GCore.GStylable.BorderAlignment.Center:
                  (n = "gravit-icon-line-stroke-center"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GStylable", "border-alignment.center")
                    ));
                  break;
                case GCore.GStylable.BorderAlignment.Outside:
                  (n = "gravit-icon-line-stroke-outside"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GStylable", "border-alignment.outside")
                    ));
              }
              return $("<button></button>")
                .addClass("g-icon g-flat")
                .css("width", "33.3%")
                .attr("data-property", e)
                .attr("data-title", GTools)
                .on("click", function () {
                  var e = GRichTooltipConfig,
                    t = Object.keys(GCore.GStylable.BorderAlignment);
                  for (var n of t)
                    if (GRichTooltipConfig === GCore.GStylable.BorderAlignment[n]) {
                      e = n;
                      break;
                    }
                  gDesigner.stats("border_change_align", e),
                    GEditor(["_vs", "_ba"], [true, GRichTooltipConfig]);
                })
                .append($("<span></span>").addClass(n));
            }
            if (0 === e.indexOf("_blc-")) {
              (n = ""), (GTools = "");
              var GTouchTool = e.substr("_blc-".length);
              switch (GTouchTool) {
                case GCore.GPaintCanvas.LineCap.Butt:
                  (n = "gravit-icon-line-cap-butt"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GPaintCanvas", "linecap.butt")
                    ));
                  break;
                case GCore.GPaintCanvas.LineCap.Round:
                  (n = "gravit-icon-line-cap-round"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GPaintCanvas", "linecap.round")
                    ));
                  break;
                case GCore.GPaintCanvas.LineCap.Square:
                  (n = "gravit-icon-line-cap-square"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GPaintCanvas", "linecap.square")
                    ));
              }
              return $("<button></button>")
                .addClass("g-icon g-flat")
                .css("width", "33.3%")
                .attr("data-title", GTools)
                .attr("data-property", e)
                .on("click", function () {
                  gDesigner.stats("border_change_cap", GTouchTool),
                    GEditor(["_vs", "_blc"], [true, GTouchTool]);
                })
                .append($("<span></span>").addClass(n));
            }
            if (0 === e.indexOf("_blj-")) {
              (n = ""), (GTools = "");
              var GEvent_type = e.substr("_blj-".length);
              switch (GEvent_type) {
                case GCore.GPaintCanvas.LineJoin.Bevel:
                  (n = "gravit-icon-line-join-bevel"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GPaintCanvas", "linejoin.bevel")
                    ));
                  break;
                case GCore.GPaintCanvas.LineJoin.Round:
                  (n = "gravit-icon-line-join-round"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GPaintCanvas", "linejoin.round")
                    ));
                  break;
                case GCore.GPaintCanvas.LineJoin.Miter:
                  (n = "gravit-icon-line-join-miter"),
                    (GTools = GCore.GLocale.get(
                      new GCore.GLocaleKey("GPaintCanvas", "linejoin.miter")
                    ));
              }
              return $("<button></button>")
                .addClass("g-icon g-flat")
                .css("width", "33.3%")
                .attr("data-title", GTools)
                .attr("data-property", e)
                .on("click", function () {
                  gDesigner.stats("border_change_join", GEvent_type),
                    GEditor(["_vs", "_blj"], [true, GEvent_type]);
                })
                .append($("<span></span>").addClass(n));
            }
            if ("_bhmo" === e || "_btmo" === e)
              return $("<label></label>")
                .addClass("g-switch")
                .append(
                  $("<input>")
                    .attr("type", "checkbox")
                    .attr("data-property", e)
                    .on("change", function (t) {
                      gDesigner.stats(
                        "border_toggle_markersoutline",
                        $(this).prop("checked") ? "enable" : "disable"
                      ),
                        GEditor([e], [$(this).prop("checked")]);
                    })
                )
                .append($("<div></div>"));
            if ("_bhmi" === e || "_btmi" === e)
              return $("<div/>")
                .attr("data-property", e)
                .gInputSlider({ type: "range", min: 0, max: 100, step: 1 })
                .on("mousedown", function () {
                  var e = t._document.getEditor();
                  e.hideSelection(),
                    $(document).one("mouseup", function () {
                      e.resetHideSelection();
                    });
                })
                .on("input", function (t) {
                  var n = $(t.target),
                    _interopRequireDefault = parseInt(n.gInputSlider("value")) / 100;
                  GEditor([e], [_interopRequireDefault]);
                })
                .on("change", function (t) {
                  gDesigner.stats("border_change_markersposition"),
                    GEditor([e], [parseInt($(this).gInputSlider("value")) / 100]);
                });
            if ("_bhms" === e || "_btms" === e)
              return $("<input>")
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function () {
                  gDesigner.stats("border_change_tailmarkerscalation"),
                    GEditor(
                      [e],
                      [
                        GCore.GLength.parseEquationValue(
                          $(this).gInputBox("value")
                        ) / 100,
                      ]
                    );
                })
                .gInputBox({ minValue: 1, incrementValue: 1, postfix: "%" });
            if ("_bhm" === e || "_btm" === e)
              return $("<select></select>")
                .attr("data-property", e)
                .append(
                  $("<option></option>")
                    .attr("value", "")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GCommonNames", "text.none")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.Circle)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-marker.circle")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.Bullet)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-marker.bullet")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.Diamond)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-marker.diamond")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.Line)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-marker.line")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.LineDouble)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GStylable",
                          "border-marker.linedouble"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.Arrow)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-marker.arrow")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.ArrowFat)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-marker.arrowfat")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.ArrowLine)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-marker.arrowline")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.ArrowDoubleLine)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GStylable",
                          "border-marker.arrowdoubleline"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.ArrowLineBar)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GStylable",
                          "border-marker.arrowlinebar"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", GCore.GStylable.BorderMarker.ArrowPointer)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GStylable",
                          "border-marker.arrowpointer"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", "#")
                    .prop("disabled", true)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GBorderPaintLayerProperties",
                          "option.custom"
                        )
                      )
                    )
                )
                .on("change", function (t) {
                  var n = $(this).val(),
                    _interopRequireDefault = Object.keys(GCore.GStylable.BorderMarker);
                  for (var GTools of _interopRequireDefault)
                    if (n === GCore.GStylable.BorderMarker[GTools]) {
                      n = GTools;
                      break;
                    }
                  gDesigner.stats("border_change_headmarker", n),
                    GEditor([e], [$(this).val() || null]);
                });
            if (0 === e.indexOf("arrow-paste-")) {
              var GOutlineSidebar = e.substr("arrow-paste-".length);
              return $("<button></button>")
                .addClass("g-flat g-icon")
                .attr(
                  "data-title",
                  GCore.GLocale.get(new GCore.GLocaleKey("GPasteAction", "title"))
                )
                .append($("<span></span>").addClass("gravit-icon-paste"))
                .on(
                  "click",
                  function () {
                    gDesigner.stats("border_click_paste");
                    var e = false,
                      t = GCore.GNode.deserialize(
                        gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
                      );
                    if (t && t.length)
                      for (var n = 0; n < t.length; ++n)
                        if (t[n].hasMixin(GCore.GVertexSource)) {
                          var _interopRequireDefault = t[n],
                            GTools = GCore.GVertexInfo.calculateBounds(_interopRequireDefault, true);
                          if (GTools) {
                            var GRichTooltipConfig = GTools.getSide(GCore.GRect.Side.BOTTOM_CENTER);
                            GEditor(
                              [GOutlineSidebar],
                              [
                                new GCore.GVertexContainer(
                                  new GCore.GVertexTransformer(
                                    _interopRequireDefault,
                                    new GCore.GTransform(
                                      1,
                                      0,
                                      0,
                                      -1,
                                      -GRichTooltipConfig.getX(),
                                      -GRichTooltipConfig.getY()
                                    )
                                  )
                                ),
                              ]
                            ),
                              (e = true);
                            break;
                          }
                        }
                    e ||
                      alert(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GCommonNames", "arrow-paste.alert")
                        )
                      );
                  }.bind(this)
                );
            }
            throw new Error("Unknown input property: " + e);
          }.bind(this);
        $("<div></div>")
          .gPropertyRow({
            justified: true,
            columns: [
              {
                width: "50%",
                content: $("<div></div>")
                  .addClass("border-property-wrapper")
                  .append(
                    $("<div />")
                      .addClass("border-property-label")
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GBorderPaintLayerProperties",
                            "text.ends"
                          )
                        )
                      )
                  )
                  .append(
                    $("<div />")
                      .addClass("border-property-content")
                      .append(
                        DataModule_1161("_blc-" + GCore.GPaintCanvas.LineCap.Butt).addClass(
                          "g-group-start"
                        )
                      )
                      .append(
                        DataModule_1161("_blc-" + GCore.GPaintCanvas.LineCap.Round).addClass(
                          "g-group-element"
                        )
                      )
                      .append(
                        DataModule_1161("_blc-" + GCore.GPaintCanvas.LineCap.Square).addClass(
                          "g-group-end"
                        )
                      )
                  ),
              },
              {
                width: "50%",
                content: $("<div></div>")
                  .addClass("border-property-wrapper")
                  .append(
                    $("<div />")
                      .addClass("border-property-label")
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GCommonNames", "text.position")
                        )
                      )
                  )
                  .append(
                    $("<div />")
                      .addClass("border-property-content")
                      .append(
                        DataModule_1161("_ba-" + GCore.GStylable.BorderAlignment.Inside).addClass(
                          "g-group-start"
                        )
                      )
                      .append(
                        DataModule_1161("_ba-" + GCore.GStylable.BorderAlignment.Center).addClass(
                          "g-group-element"
                        )
                      )
                      .append(
                        DataModule_1161(
                          "_ba-" + GCore.GStylable.BorderAlignment.Outside
                        ).addClass("g-group-end")
                      )
                  ),
              },
            ],
          })
          .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              justified: true,
              columns: [
                {
                  width: "50%",
                  content: $("<div></div>")
                    .addClass("border-property-wrapper")
                    .append(
                      $("<div />")
                        .addClass("border-property-label")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GBorderPaintLayerProperties",
                              "text.joins"
                            )
                          )
                        )
                    )
                    .append(
                      $("<div />")
                        .addClass("border-property-content")
                        .append(
                          DataModule_1161("_blj-" + GCore.GPaintCanvas.LineJoin.Bevel).addClass(
                            "g-group-start"
                          )
                        )
                        .append(
                          DataModule_1161("_blj-" + GCore.GPaintCanvas.LineJoin.Miter).addClass(
                            "g-group-element "
                          )
                        )
                        .append(
                          DataModule_1161("_blj-" + GCore.GPaintCanvas.LineJoin.Round).addClass(
                            "g-group-end"
                          )
                        )
                    ),
                },
                {
                  width: "50%",
                  content: $("<div />")
                    .addClass("border-property-wrapper")
                    .append(
                      $("<div />")
                        .addClass("border-property-label")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GBorderPaintLayerProperties",
                              "text.miter-limit"
                            )
                          )
                        )
                    )
                    .append(
                      $("<div />")
                        .addClass("border-property-content top-2px")
                        .append(DataModule_1161("_bml"))
                    )
                    .gRichTooltip(
                      GRichTooltipConfig.GRichTooltipConfig.from({
                        title: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GBorderPaintLayerProperties",
                            "text.miter-limit"
                          )
                        ),
                        video: AppSettings.gApi.getRichTooltipVideoURL("Miter_Limit.mp4"),
                        description: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GBorderPaintLayerProperties",
                            "text.miter-limit-tooltip-description"
                          )
                        ),
                        learnMore:
                          "",
                      })
                    ),
                },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<hr />")
            .css("margin-bottom", "10px")
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "25%",
                  content: DataModule_1161("_bds"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GBorderPaintLayerProperties", "text.dash")
                  ),
                },
                {
                  width: "25%",
                  content: DataModule_1161("_bds"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GBorderPaintLayerProperties", "text.gap")
                  ),
                },
                {
                  width: "25%",
                  content: DataModule_1161("_bds"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GBorderPaintLayerProperties", "text.dash")
                  ),
                },
                {
                  width: "25%",
                  content: DataModule_1161("_bds"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GBorderPaintLayerProperties", "text.gap")
                  ),
                },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<hr/>").appendTo(this._advancedStrokePanel),
          $("<p/>").appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "45%",
                  padding: false,
                  content: $("<div></div>").html(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.start-arrow"
                      )
                    )
                  ),
                },
                { width: "10%" },
                {
                  width: "45%",
                  padding: false,
                  content: $("<div></div>").html(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.end-arrow"
                      )
                    )
                  ),
                },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                { width: "37%", content: DataModule_1161("_bhm") },
                { width: "8%", content: DataModule_1161("arrow-paste-_bhm") },
                { width: "10%" },
                { width: "37%", content: DataModule_1161("_btm") },
                { width: "8%", content: DataModule_1161("arrow-paste-_btm") },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                { width: "45%", padding: false, content: DataModule_1161("_bhms") },
                { width: "10%" },
                { width: "45%", padding: false, content: DataModule_1161("_btms") },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "45%",
                  prefix: {
                    label: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.outline"
                      )
                    ),
                    width: "50px",
                  },
                  padding: false,
                  content: DataModule_1161("_bhmo"),
                },
                { width: "10%" },
                {
                  width: "45%",
                  prefix: {
                    label: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.outline"
                      )
                    ),
                    width: "50px",
                  },
                  padding: false,
                  content: DataModule_1161("_btmo"),
                },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "45%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GBorderPaintLayerProperties",
                      "text.marker-position"
                    )
                  ),
                  padding: false,
                  content: DataModule_1161("_bhmi"),
                },
                { width: "10%" },
                {
                  width: "45%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GBorderPaintLayerProperties",
                      "text.marker-position"
                    )
                  ),
                  padding: false,
                  content: DataModule_1161("_btmi"),
                },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "auto",
                  content: $("<label></label>")
                    .append(
                      $("<input />")
                        .addClass("gravit-icon-touch-check-small")
                        .attr("type", "checkbox")
                        .attr("data-property", "_bs")
                        .on("change", function () {
                          gDesigner.stats(
                            "border_change_autoscale",
                            $(this).prop("checked") ? "enabled" : "disabled"
                          ),
                            GEditor(["_bs"], [$(this).prop("checked")]);
                        })
                    )
                    .append(
                      $("<span></span>").text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GBorderPaintLayerProperties",
                            "text.autoscale-borders"
                          )
                        )
                      )
                    ),
                },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          this._toolbar.addClass("list-toolbar border-toolbar"),
          $("<button></button>")
            .attr("data-action", "stroke-settings")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GBorderPaintLayerProperties",
                  "text.advanced-stroke-settings"
                )
              )
            )
            .append($("<span></span>").addClass("gravit-icon-settings"))
            .append($("<span></span>").addClass("gravit-icon-touch-settings"))
            .on(
              "click",
              function (e) {
                gDesigner.stats("border_open_advancedstrokepanel"),
                  this._updateAdvancedSettings(),
                  this._advancedStrokePanel.gOverlay(
                    "open",
                    $(e.target).closest("button")
                  );
              }.bind(this)
            )
            .gRichTooltip(
              GRichTooltipConfig.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.advanced-stroke-settings-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.advanced-stroke-settings-tooltip-description"
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
                  "GBorderPaintLayerProperties",
                  "action.remove-selected-border"
                )
              )
            )
            .append($("<span></span>").addClass("gravit-icon-trash"))
            .append($("<span></span>").addClass("gravit-icon-touch-trash"))
            .on("click", function (e) {
              gDesigner.stats("border_remove_border"), e.stopPropagation();
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
                      "GBorderPaintLayerProperties",
                      "action.remove-border"
                    )
                  )
                );
              const _interopRequireDefault = gDesigner
                .getRightSidebars()
                .getSidebar(GOutlineSidebar.default.SidebarsIds.GInspectorSidebar);
              _interopRequireDefault.trigger(new GEvent_type.default(GEvent_type.default.Type.ChildRemoved, _interopRequireDefault));
            })
            .gRichTooltip(
              GRichTooltipConfig.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.remove-border-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.remove-border-tooltip-description"
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
                new GCore.GLocaleKey(
                  "GBorderPaintLayerProperties",
                  "action.add-border"
                )
              )
            )
            .append($("<span></span>").addClass("gravit-icon-plus"))
            .append($("<span></span>").addClass("gravit-icon-touch-plus"))
            .on(
              "click",
              function (e) {
                gDesigner.stats("border_add_border"),
                  GTools.GEditor.tryRunTransaction(
                    n._elements[0],
                    function () {
                      const e = n._document && n._document.getScene(),
                        t = e && e.getProperty("cm"),
                        _interopRequireDefault = GCore.GColorHelper.convertColor(
                          GCore.GRGBColor.BLACK,
                          t || GCore.GColor.ColorModes.RGB
                        );
                      for (var GEditor = 0; GEditor < n._elements.length; ++GEditor) {
                        var GTools = n._elements[GEditor],
                          GRichTooltipConfig = new GCore.GStylable.BorderPaintLayer();
                        GTools instanceof GCore.GText
                          ? GRichTooltipConfig.setProperty(
                              "_ba",
                              GCore.GStylable.BorderAlignment.Outside
                            )
                          : GTools instanceof GCore.GShape
                          ? GTools instanceof GCore.GEllipse &&
                            GTools.$etp === GCore.GEllipse.Type.Arc
                            ? GRichTooltipConfig.setProperty(
                                "_ba",
                                GCore.GStylable.BorderAlignment.Center
                              )
                            : GRichTooltipConfig.setProperty(
                                "_ba",
                                GCore.GStylable.BorderAlignment.Inside
                              )
                          : GTools instanceof GCore.GPath &&
                            !GTools.$closed &&
                            GRichTooltipConfig.setProperty(
                              "_ba",
                              GCore.GStylable.BorderAlignment.Center
                            ),
                          GRichTooltipConfig.setProperty("_pt", _interopRequireDefault),
                          GTools.getPaintLayers().appendChild(GRichTooltipConfig);
                        const e = gDesigner
                          .getRightSidebars()
                          .getSidebar(GOutlineSidebar.default.SidebarsIds.GInspectorSidebar);
                        e.trigger(new GEvent_type.default(GEvent_type.default.Type.ChildAdded, e));
                      }
                    },
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "action.add-border"
                      )
                    )
                  ),
                  $(this._toolbar).gAccordion("toggleOpen", true),
                  $(this._toolbar).gAccordion("init", $(this._panel));
              }.bind(this)
            )
            .gRichTooltip(
              GRichTooltipConfig.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.add-border-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.add-border-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            )
            .appendTo(this._toolbar),
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
              m.BorderPropertiesPanel,
              e,
              function (e) {
                var t = this._panel.find(".copy-info-overlay").eq(0),
                  n = this._panel.find(".border-block.g-selected") || null,
                  _interopRequireDefault = (n && n.position().top) || 0,
                  GEditor = $("<span/>")
                    .addClass("copy-info-overlay")
                    .css({ top: _interopRequireDefault })
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GBorderPaintLayerProperties",
                          "text.copy-border"
                        )
                      )
                    );
                t && t.remove(),
                  this._panel.append(GEditor),
                  setTimeout(() => {
                    GEditor.animate({ opacity: 0, top: "+=20" }, 500, GEditor.remove);
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
          for (var GEditor = 0; GEditor < t.length; ++GEditor) {
            var GRichTooltipConfig = t[GEditor],
              GTouchTool = function (e, t) {
                t.hasMixin(GCore.GStylable) &&
                  t
                    .getStylePropertySets()
                    .indexOf(GCore.GStylable.PropertySet.FillPaintLayers) >= 0 &&
                  this._elements.push(t);
              }.bind(this),
              GEvent_type = GTools.GElementEditor.getEditor(GRichTooltipConfig);
            GEvent_type && GEvent_type.getStylableParts()
              ? GCore.GUtil.each(GEvent_type.getStylableParts(), GTouchTool)
              : GTouchTool(null, GRichTooltipConfig);
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
      (v.prototype.openPatternChooser = function () {
        this._panel
          .find(".border-block:first-child")
          .find('[data-property="_pt"]')
          .find(".g-button")
          .click();
      }),
      (v.prototype.openEyeDropper = function (e, t) {
        this._panel
          .find(".border-block:first-child")
          .find('[data-property="_pt"]')
          .gPatternChooser("openEyeDropper", e, t);
      }),
      (v.prototype._styleEditorEventHandler = function (e) {
        this._styleEdOn &&
          e.type == GTools.GStyleEdManager.EditorEventType.PrepareModifiedEvent &&
          (this._styleEditorChange = true);
      }),
      (v.prototype._updateProperties = function (e) {
        if (this._elements && this._elements.length) {
          this._panel.find(".border-block").remove();
          var module = this._elements[0].getPaintLayers().getBorderLayers();
          GCore.GUtil.each(
            module,
            function (t, n) {
              n && this._insertPaintLayer(n, e);
            }.bind(this)
          ),
            this._updateToolbar();
        } else
          console.warn("GBorderPaintLayerProperties: empty _elements array");
      }),
      (v.prototype._updateToolbar = function () {
        var e = this._panel.find(".border-block").length > 0;
        this._toolbar.toggleClass("empty-list", !e),
          this._toolbar
            .find("[data-action=stroke-settings]")
            .css("display", e ? "" : "none"),
          this._toolbar
            .find("[data-action=arrow-settings]")
            .css("display", e ? "" : "none"),
          this._toolbar
            .find("[data-action=remove]")
            .css("display", e ? "" : "none");
      }),
      (v.prototype._insertPaintLayer = function (e, t) {
        var n = this,
          _interopRequireDefault = false,
          GTouchTool = null,
          GEvent_type = null,
          GOutlineSidebar = null,
          GProperties = null,
          m = null,
          v = 0,
          _ = 0,
          b = function (e) {
            if (GTouchTool) {
              var t = $(e).data("paintLayer");
              if (t && (t !== GTouchTool || GEditor.GPlatform.modifiers.shiftKey))
                return GTouchTool.getParent() === t.getParent();
            }
            return false;
          },
          w = function (t, n, _interopRequireDefault, GEditor) {
            this._assign(e, t, n, _interopRequireDefault, GEditor);
          }.bind(this),
          C = function (t) {
            if ("_pt" === t)
              return $("<div></div>")
                .attr("data-property", "_pt")
                .gPatternChooser({
                  types: [
                    GCore.GColor,
                    GCore.GLinearGradient,
                    GCore.GRadialGradient,
                    GCore.GAngularGradient,
                    GCore.GBackground,
                    GCore.GTexturePattern,
                  ],
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
                    var GEditor = gPatternChooser.getPattern();
                    !GEditor ||
                      GEditor instanceof GCore.GRGBColor ||
                      GSystemDialog.showCDRUnsupportedObjectWarning();
                  }
                  n._chooserElem = null;
                })
                .on("patternchange", function (e, t, n, _interopRequireDefault, GEditor, GTools) {
                  var GCore = ["_vs"],
                    GRichTooltipConfig = [true];
                  undefined !== t && (GCore.push("_pt"), GRichTooltipConfig.push(t)),
                    "number" == typeof n && (GCore.push("_op"), GRichTooltipConfig.push(n));
                  var GTouchTool = null;
                  GEditor &&
                    ((GTouchTool = { chooserOn: true }),
                    null != GTools && (GTouchTool.activeStopIdx = GTools)),
                    w(GCore, GRichTooltipConfig, _interopRequireDefault, GTouchTool);
                });
            if ("_bl" == t)
              return $("<select></select>")
                .gBlendMode()
                .gRichTooltip(
                  GRichTooltipConfig.GRichTooltipConfig.from({
                    title: GCore.GLocale.getValue(
                      "GAppearanceProperties",
                      "text.blend-tooltip-title"
                    ),
                    description: GCore.GLocale.getValue(
                      "GAppearanceProperties",
                      "text.blend-tooltip-description"
                    ),
                    middle: false,
                    forceShow: true,
                    learnMore: AppSettings.LINKS.BLENDING_MODES_DOCUMENTATION_URL,
                  })
                )
                .attr("data-property", "_bl")
                .on("change", function (e) {
                  gDesigner.stats("border_change_blendmode", $(e.target).val()),
                    w(["_bl"], [$(e.target).val()]);
                });
            if ("_op" === t)
              return $("<input>")
                .addClass("border-op")
                .attr("data-property", "_op")
                .attr("type", "text")
                .on("change", function (e, t) {
                  gDesigner.stats("border_change_opacity"),
                    w(
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
                      .find($(".transparency"))
                      .gInputSlider(
                        "value",
                        GCore.GLength.parseEquationValue($(this).gInputBox("value"))
                      );
                })
                .gInputBox({
                  minValue: 0,
                  maxValue: 100,
                  incrementValue: gDesigner.getOpacityIncrement(),
                  postfix: "%",
                });
            if ("_bw" === t)
              return $("<input>")
                .attr("data-property", t)
                .on("change", function () {
                  gDesigner.stats("border_change_width");
                  var e = $(this).gUnitBox("value"),
                    _interopRequireDefault = e ? e.toUnit(GCore.GLength.Unit.PX) : null;
                  null !== _interopRequireDefault && _interopRequireDefault >= 0
                    ? w(["_vs", t], [true, _interopRequireDefault])
                    : n._updateProperties();
                })
                .gUnitBox({ minValue: 0, source: "border" })
                .gRichTooltip(
                  GRichTooltipConfig.GRichTooltipConfig.from({
                    title: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.border-width-tooltip-title"
                      )
                    ),
                    description: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.border-width-tooltip-description"
                      )
                    ),
                    learnMore:
                      "",
                  })
                );
            if ("_vs" === t)
              return $("<span></span>")
                .attr("data-property", "_vs")
                .addClass(
                  "border-action border-visibility gravit-icon-touch-show"
                )
                .attr(
                  "data-title",
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "action.toggle-visibility")
                  )
                )
                .on("click", function (e) {
                  gDesigner.stats("border_hide_border"), e.stopPropagation();
                  var t = $(this).hasClass("gravit-icon-touch-hide");
                  $(this).removeClass(
                    "gravit-icon-touch-" + (t ? "hide" : "show")
                  ),
                    $(this).addClass(
                      "gravit-icon-touch-" + (t ? "show" : "hide")
                    ),
                    w(["_vs"], [t]);
                });
            if ("_ra" === t)
              return $("<div/>")
                .addClass("transparency gravit-icon-touch-rectangle")
                .gInputSlider({ type: "range", min: 0, max: 100, step: 1 })
                .on("input", function (e) {
                  var t = $(e.target),
                    n = parseInt(t.gInputSlider("value"));
                  t.parents(".touch")
                    .find($(".border-op"))
                    .trigger("change", [n]);
                });
            throw new Error("Unknown input property: " + t);
          },
          x = $("<div/>").addClass("g-drop-indicator"),
          S = $("<div></div>")
            .addClass("border-block")
            .addClass("g-cursor-hand-open")
            .attr("data-drag-mode", p.default.PRESS_AND_HOLD)
            .data("paintLayer", e)
            .attr("draggable", "true")
            .on("mousedown", function (e) {
              (_interopRequireDefault =
                gDesigner.isTouchEnabled() &&
                e.originalEvent &&
                e.originalEvent.target
                  ? !!$(e.originalEvent.target).closest(".drag-indicator")
                      .length
                  : $(e.target).hasClass("border-block") ||
                    $(e.target).hasClass("gravit-icon-drag-indicator") ||
                    $(e.target).hasClass("columns") ||
                    $(e.target).hasClass("column")),
                $(e.target)
                  .closest(".border-block")
                  .toggleClass("g-draggable-disabled", !_interopRequireDefault);
            })
            .on("dragstart", function (e) {
              if (!_interopRequireDefault) return e.preventDefault(), void e.stopPropagation();
              var t = $(e.target).closest(".border-block"),
                GRichTooltipConfig = t.offset(),
                GOutlineSidebar = e.originalEvent;
              (GEvent_type = window.gDragImage()).addClass(
                "drag-delete gravit-icon-trash"
              ),
                (GProperties = n._panel.offset()),
                (m = n._panel.outerHeight()),
                (v = e.clientX - GRichTooltipConfig.left),
                (_ = e.clientY - GRichTooltipConfig.top),
                GOutlineSidebar.stopPropagation(),
                (GTouchTool = t.data("paintLayer")),
                (GOutlineSidebar.dataTransfer.effectAllowed = "move"),
                GOutlineSidebar.dataTransfer.setData("text/plain", "dummy_data"),
                n._panel.find(".border-block").each(function (e, t) {
                  $(t).append(
                    $("<div></div>")
                      .addClass("grid-drag-overlay")
                      .on("dragenter", function () {
                        var e = $(this.parentNode).data("paintLayer");
                        if (b(this.parentNode)) {
                          if (GTouchTool && e && GTouchTool.getParent() === e.getParent()) {
                            var t = GTouchTool.getParent(),
                              n = t.getIndexOfChild(GTouchTool),
                              _interopRequireDefault = t.getIndexOfChild(e);
                            n !== _interopRequireDefault &&
                              (n < _interopRequireDefault
                                ? x.insertBefore(this.parentNode)
                                : x.insertAfter(this.parentNode));
                          }
                        } else x.remove();
                      })
                      .on("dragleave", function () {
                        b(this.parentNode) &&
                          $(this).parent().find(".g-drop-indicator").remove();
                      })
                      .on("dragover", function (e) {
                        var t = e.originalEvent;
                        b(this.parentNode) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          (t.dataTransfer.dropEffect = "move"));
                      })
                      .on("drop", function (e) {
                        var t = $(this.parentNode).data("paintLayer");
                        if (
                          (n._panel.find(".g-drop-indicator").remove(),
                          n._panel.find(".grid-drag-overlay").remove(),
                          GTouchTool && t && GTouchTool.getParent() === t.getParent())
                        ) {
                          var _interopRequireDefault = GTouchTool.getParent(),
                            GRichTooltipConfig = _interopRequireDefault.getIndexOfChild(GTouchTool),
                            GEvent_type = _interopRequireDefault.getIndexOfChild(t);
                          GTools.GEditor.tryRunTransaction(
                            _interopRequireDefault,
                            function () {
                              if (GEditor.GPlatform.modifiers.shiftKey) {
                                var e = GTouchTool.clone();
                                _interopRequireDefault.insertChild(e, GRichTooltipConfig < GEvent_type ? t.getNext() : t);
                              } else
                                GRichTooltipConfig !== GEvent_type &&
                                  (_interopRequireDefault.removeChild(GTouchTool),
                                  _interopRequireDefault.insertChild(GTouchTool, GRichTooltipConfig < GEvent_type ? t.getNext() : t));
                            },
                            GEditor.GPlatform.modifiers.shiftKey
                              ? GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GBorderPaintLayerProperties",
                                    "action.duplicate-border"
                                  )
                                )
                              : GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GBorderPaintLayerProperties",
                                    "action.move-border"
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
              GOutlineSidebar = (0, DataModule_1161.handleDragForDeleteIcon)(e, GEvent_type, GProperties, m, v, _);
            })
            .on("dragend", function (e) {
              var t = e.originalEvent,
                _interopRequireDefault = $(e.target)
                  .closest(".border-block")
                  .closest(".border-block")
                  .data("paintLayer");
              if (
                (n._panel.find(".g-drop-indicator").remove(),
                n._panel.find(".grid-drag-overlay").remove(),
                GTouchTool && _interopRequireDefault && GTouchTool.getParent() === _interopRequireDefault.getParent())
              ) {
                var GRichTooltipConfig = GTouchTool.getParent(),
                  DataModule_1161 = GRichTooltipConfig.getIndexOfChild(GTouchTool),
                  p = GRichTooltipConfig.getIndexOfChild(_interopRequireDefault);
                GTools.GEditor.tryRunTransaction(
                  GRichTooltipConfig,
                  function () {
                    if (GEditor.GPlatform.modifiers.shiftKey) {
                      var e = GTouchTool.clone();
                      GRichTooltipConfig.insertChild(e, DataModule_1161 < p ? _interopRequireDefault.getNext() : _interopRequireDefault);
                    } else
                      DataModule_1161 !== p &&
                        (GRichTooltipConfig.removeChild(GTouchTool),
                        GRichTooltipConfig.insertChild(
                          GTouchTool,
                          DataModule_1161 < p ? _interopRequireDefault.getNext() : _interopRequireDefault.getPrevious()
                        ));
                  },
                  GEditor.GPlatform.modifiers.shiftKey
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
                      "GBorderPaintLayerProperties",
                      "action.remove-border"
                    )
                  )
                ),
                GEvent_type && GEvent_type.css("display", "none"),
                (GEvent_type = null),
                t.stopPropagation(),
                (GTouchTool = null);
            })
            .on("click", function () {
              gDesigner.stats("border_set_border"), n._setSelectedPaintLayer(e);
            })
            .gPropertyRow({
              columns: [
                {
                  clazz: "drag-indicator",
                  content: $("<div></div>").addClass(
                    "gravit-icon-drag-indicator g-cursor-hand-open gravit-icon-touch-drag-indicator"
                  ),
                },
                { width: "40px", clazz: "color-preview", content: C("_pt") },
                { width: "40px", content: C("_bw").addClass("normal") },
                { width: "auto", content: C("_bl").addClass("normal") },
                { width: "45px", content: C("_op").addClass("normal") },
                {
                  width: "20px",
                  content: $("<span></span>")
                    .attr("data-property", "_vs")
                    .addClass(
                      "border-action border-visibility gravit-icon-display normal"
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
                      gDesigner.stats("border_hide_border"),
                        e.stopPropagation();
                      var t = $(this).hasClass("gravit-icon-hide");
                      $(this).removeClass(
                        "gravit-icon-" + (t ? "hide" : "display")
                      ),
                        $(this).addClass(
                          "gravit-icon-" + (t ? "display" : "hide")
                        ),
                        w(["_vs"], [t]);
                    }),
                },
                {
                  width: "auto",
                  content: $("<div/>")
                    .addClass("touch")
                    .gPropertyRow({
                      columns: [
                        { width: "40px", content: C("_bw") },
                        { width: "auto", content: C("_bl") },
                        { width: "60px", content: C("_vs") },
                      ],
                    })
                    .gPropertyRow({
                      columns: [
                        { width: "auto", content: C("_ra") },
                        { width: "60px", content: C("_op") },
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
          S.contextmenu({ context: f.BorderPropertyPanel }, function (e) {
            e.preventDefault();
            var t = $(this).data("paintLayer");
            n._setSelectedPaintLayer(t),
              $(gDesigner.getWindows().getHtmlElement()).trigger(
                "contextmenu",
                {
                  previousEvent: e,
                  data: {
                    openAdvancedSettings: function () {
                      n._updateAdvancedSettings(),
                        n._advancedStrokePanel.gOverlay(
                          "open",
                          n._toolbar.find("[data-action=stroke-settings]")
                        );
                    },
                    paintLayer: t,
                  },
                }
              );
          }),
          this._setSelectedPaintLayer(e),
          this._updatePaintLayer(e, t),
          S.find(".transparency").each(function (e, t) {
            $(t).gInputSlider(
              "value",
              parseInt($(this).parents(".touch").find(".border-op").val())
            );
          });
      }),
      (v.prototype._removePaintLayer = function (e) {
        this._panel.find(".border-block").each(function (t, n) {
          var _interopRequireDefault = $(n);
          if (_interopRequireDefault.data("paintLayer") === e) return _interopRequireDefault.remove(), false;
        });
      }),
      (v.prototype._updatePaintLayer = function (e, t) {
        var n = this;
        e &&
          (this._panel.find(".border-block").each(function (t, _interopRequireDefault) {
            var GEditor = $(_interopRequireDefault);
            if (GEditor.data("paintLayer") === e) {
              GEditor.find('[data-property="_pt"]')
                .gPatternChooser("setPattern", e.getProperty("_pt", false, false, true))
                .gPatternChooser("value", e.getProperty("_pt", false, false, true))
                .gPatternChooser("opacity", e.getProperty("_op", false, false, true));
              var GTools = n._getProperty(e, "_bw", false, null);
              GEditor.find('[data-property="_bw"]').each(function (e, t) {
                $(t)
                  .gUnitBox({
                    unit:
                      n._document.getScene().getProperty("ut") ===
                      GCore.GLength.Unit.PX
                        ? GCore.GLength.Unit.PX
                        : GCore.GLength.Unit.PT,
                    minValue: 0,
                  })
                  .gUnitBox(
                    "value",
                    null !== GTools ? new GCore.GLength(GTools, GCore.GLength.Unit.PX) : null
                  );
              }),
                GEditor.find('[data-property="_op"]').each(function (t, n) {
                  $(n).gInputBox(
                    "value",
                    GCore.GUtil.formatOpacity(
                      100 * e.getProperty("_op", false, false, true)
                    )
                  );
                }),
                GEditor.find('[data-property="_bl"]').val(e.getProperty("_bl"));
              var GRichTooltipConfig = e.getProperty("_vs");
              GEditor.find('[data-property="_vs"]')
                .removeClass("gravit-icon-" + (GRichTooltipConfig ? "hide" : "display"))
                .addClass("gravit-icon-" + (GRichTooltipConfig ? "display" : "hide"));
            }
          }),
          this._updateAdvancedSettings(),
          t &&
            (t.evtType == GTools.GEditor.ModifiedEvent.Type.Undo ||
              t.evtType == GTools.GEditor.ModifiedEvent.Type.Redo) &&
            t.chooserOn &&
            null != t.borderLayerIndex &&
            e.getParent().getIndexOfChild(e) == t.borderLayerIndex &&
            $element
              .find(".preview")
              .trigger(
                "click",
                null != t.activeStopIdx ? t.activeStopIdx : null
              ));
      }),
      (v.prototype._assign = function (e, t, n, _interopRequireDefault, GEditor) {
        if (_interopRequireDefault)
          this._iterateEqualPaintLayer(e, function (e) {
            e.setProperties(t, n, false, false, true);
          });
        else if (this._document) {
          var GRichTooltipConfig = null;
          if (GEditor) {
            var GTouchTool = e.getParent().getIndexOfChild(e);
            GRichTooltipConfig = $.extend({ borderLayerIndex: GTouchTool }, GEditor);
          }
          this._ownChange = true;
          var GEvent_type = this._document.getEditor();
          GEvent_type.beginTransaction();
          try {
            this._iterateEqualPaintLayer(e, function (e, _interopRequireDefault) {
              var GEditor = GTools.GElementEditor.getEditor(_interopRequireDefault);
              (GEditor && GEditor.applyPropertiesToParts(t, n)) || e.setProperties(t, n);
            });
          } finally {
            GEvent_type.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GBorderPaintLayerProperties",
                  "action.change-border-properties"
                )
              ),
              GRichTooltipConfig
            ),
              (this._ownChange = false);
          }
        }
      }),
      (v.prototype._getProperty = function (e, t, n, _interopRequireDefault) {
        return e ? e.getProperty(t) : null;
      }),
      (v.prototype._afterInsert = function (e) {
        e.node instanceof GCore.GStylable.BorderPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0] &&
          (this._insertPaintLayer(e.node), this._updateToolbar());
      }),
      (v.prototype._beforeRemove = function (e) {
        if (
          e.node instanceof GCore.GStylable.BorderPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0]
        ) {
          this._removePaintLayer(e.node);
          for (
            var module = e.node.getPrevious();
            module && !(module instanceof GCore.GStylable.BorderPaintLayer);

          )
            module = module.getPrevious();
          if (!(module instanceof GCore.GStylable.BorderPaintLayer))
            for (
              module = e.node.getNext();
              module && !(module instanceof GCore.GStylable.BorderPaintLayer);

            )
              module = module.getNext();
          this._setSelectedPaintLayer(module), this._updateToolbar();
        }
      }),
      (v.prototype._afterPropertiesChange = function (e) {
        e.node instanceof GCore.GStylable.BorderPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0] &&
          this._updatePaintLayer(e.node);
      }),
      (v.prototype._updateAdvancedSettings = function () {
        var e = this,
          t = function (t) {
            var n = this._getProperty(t, "_bds", false, null),
              _interopRequireDefault = this._advancedStrokePanel;
            _interopRequireDefault.find('[data-property="_bds"]').each(function (e, t) {
              $(t).val(n && n.length > e ? n[e] : "");
            }),
              _interopRequireDefault.find('[data-property^="_ba"]').each(function (n, _interopRequireDefault) {
                var GEditor = $(_interopRequireDefault),
                  GTools = GEditor.attr("data-property").substr("_ba-".length);
                if (
                  GTools === GCore.GStylable.BorderAlignment.Inside ||
                  GTools === GCore.GStylable.BorderAlignment.Outside
                ) {
                  for (
                    var GRichTooltipConfig, GTouchTool, GEvent_type = false, GOutlineSidebar = false, DataModule_1161 = 0, p = e._elements.length;
                    DataModule_1161 < p;
                    DataModule_1161++
                  ) {
                    var AppSettings = e._elements[DataModule_1161];
                    (AppSettings instanceof GCore.GPath && !AppSettings.$closed) ||
                    (AppSettings instanceof GCore.GEllipse && AppSettings.$etp === GCore.GEllipse.Type.Arc)
                      ? (GEvent_type = true)
                      : (GOutlineSidebar = true);
                  }
                  switch (GTools) {
                    case GCore.GStylable.BorderAlignment.Inside:
                      GTouchTool = GCore.GLocale.get(
                        new GCore.GLocaleKey("GStylable", "border-alignment.inside")
                      );
                      break;
                    case GCore.GStylable.BorderAlignment.Outside:
                      GTouchTool = GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GStylable",
                          "border-alignment.outside"
                        )
                      );
                  }
                  GEvent_type ? GEditor.attr("disabled", true) : GEditor.attr("disabled", false),
                    (GRichTooltipConfig =
                      GEvent_type && GOutlineSidebar
                        ? GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GBorderPaintLayerProperties",
                              "text.border-alignment.disabled"
                            )
                          ) +
                          ": " +
                          GTouchTool
                        : GTouchTool),
                    GEditor.attr("data-title", GRichTooltipConfig);
                }
                GEditor.toggleClass("g-active", e._getProperty(t, "_ba", true) === GTools);
              }),
              _interopRequireDefault.find('[data-property^="_blc"]').each(function (n, _interopRequireDefault) {
                var GEditor = $(_interopRequireDefault),
                  GTools = GEditor.attr("data-property").substr("_blc-".length);
                GEditor.toggleClass("g-active", e._getProperty(t, "_blc", true) === GTools);
              }),
              _interopRequireDefault.find('[data-property^="_blj"]').each(function (n, _interopRequireDefault) {
                var GEditor = $(_interopRequireDefault),
                  GTools = GEditor.attr("data-property").substr("_blj-".length);
                GEditor.toggleClass("g-active", e._getProperty(t, "_blj", true) === GTools);
              });
            var GEditor = _interopRequireDefault.find('[data-property="_bml"]');
            GEditor.gInputBox(
              "value",
              GCore.GUtil.formatNumber(this._getProperty(t, "_bml", true))
            ),
              this._getProperty(t, "_blj") !== GCore.GPaintCanvas.LineJoin.Miter
                ? GEditor.attr("disabled", true)
                : GEditor.removeAttr("disabled");
            var GTools = this._getProperty(t, "_bhm", false, null);
            _interopRequireDefault.find('[data-property="_bhm"]').val(
              GTools instanceof GCore.GVertexContainer ? "#" : GTools || ""
            );
            var GRichTooltipConfig = this._getProperty(t, "_btm", false, null);
            _interopRequireDefault
              .find('[data-property="_btm"]')
              .val(GRichTooltipConfig instanceof GCore.GVertexContainer ? "#" : GRichTooltipConfig || ""),
              _interopRequireDefault
                .find('[data-property="_bhms"]')
                .gInputBox(
                  "value",
                  GCore.GUtil.formatNumber(
                    100 * this._getProperty(t, "_bhms", false, 1),
                    0
                  )
                ),
              _interopRequireDefault
                .find('[data-property="_btms"]')
                .gInputBox(
                  "value",
                  GCore.GUtil.formatNumber(
                    100 * this._getProperty(t, "_btms", false, 1),
                    0
                  )
                ),
              _interopRequireDefault
                .find('[data-property="_bhmo"]')
                .prop("checked", this._getProperty(t, "_bhmo", false, false)),
              _interopRequireDefault
                .find('[data-property="_bhmi"]')
                .gInputSlider("value", 100 * this._getProperty(t, "_bhmi")),
              _interopRequireDefault
                .find('[data-property="_btmo"]')
                .prop("checked", this._getProperty(t, "_btmo", false, false)),
              _interopRequireDefault
                .find('[data-property="_btmi"]')
                .gInputSlider("value", 100 * this._getProperty(t, "_btmi")),
              _interopRequireDefault
                .find('[data-property="_bs"]')
                .prop("checked", this._getProperty(t, "_bs", false, false));
          }.bind(this);
        if (this._getSelectedPaintLayer()) t(this._getSelectedPaintLayer());
        else {
          var require = $(this._panel).find(".border-block:last").data("paintLayer");
          require && t(require);
        }
      }),
      (v.prototype._setSelectedPaintLayer = function (e) {
        this._panel.find(".border-block").each(function (t, n) {
          var _interopRequireDefault = $(n);
          _interopRequireDefault.toggleClass("g-selected", _interopRequireDefault.data("paintLayer") === e);
        }),
          this._document && this._document.updateActiveStylesList("Border", e);
      }),
      (v.prototype._getSelectedPaintLayer = function () {
        return this._panel.find(".border-block.g-selected").data("paintLayer");
      }),
      (v.prototype._iterateEqualPaintLayer = function (e, t) {
        if (e)
          for (
            var require = e.getParent().getBorderLayers().indexOf(e), _interopRequireDefault = 0;
            _interopRequireDefault < this._elements.length;
            ++_interopRequireDefault
          ) {
            var GEditor = this._elements[_interopRequireDefault].getPaintLayers().getBorderLayers();
            GCore.GUtil.each(
              GEditor,
              function (GEditor, GTools) {
                ((GTools && GTools === e) ||
                  (GTools.constructor === e.constructor && GEditor === require)) &&
                  t(GTools, this._elements[_interopRequireDefault]);
              }.bind(this)
            );
          }
      }),
      (exports.exports = v);
  }