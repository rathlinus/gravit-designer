/**
 * Webpack Module #1162
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(57) /* polyfill_parseInt */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var i = require(15) /* module */,
      a = require(53) /* module */,
      r = require(1) /* module */,
      s = require(67) /* GRichTooltipConfig */,
      l = o(require(340) /* GTouchTool */),
      c = o(require(807) /* module_807 */),
      d = o(require(198) /* Exports_GOutlineSidebar */),
      u = require(1161) /* module_1161 */,
      p = o(require(565) /* module_565 */),
      g = require(10) /* AppSettings */,
      h = require(123) /* GProperties */,
      f = require(450) /* module_450 */;
    const m = require(607) /* module_607 */,
      y = require(44) /* GSystemDialog */;
    function v() {}
    r.GObject.inherit(v, h),
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
            new l.default({
              id: "border",
              icon: "gravit-icon-touch-border",
              panel: this._panel,
              toolbar: this._toolbar,
              panelWidth: "368px",
            }),
          ]),
          $("<label></label>")
            .text(
              r.GLocale.get(
                new r.GLocaleKey("GBorderPaintLayerProperties", "title")
              )
            )
            .appendTo(t);
        var n = this;
        (this._advancedStrokePanel = $("<div></div>")
          .css("width", "280px")
          .gOverlay({ releaseOnClose: false })),
          this._advancedStrokePanel.parent().addClass("border-settings");
        var o = function (e, t, n) {
            var o = this._getSelectedPaintLayer();
            o ||
              (o = $(this._panel)
                .find(".border-block:last")
                .data("paintLayer")),
              o && this._assign(o, e, t, n);
          }.bind(this),
          i = function (e, t, n) {
            this._getSelectedPaintLayer()
              ? this._assign(this._getSelectedPaintLayer(), e, t, n)
              : this._panel.find(".border-block").each(
                  function (o, i) {
                    var a = $(i).data("paintLayer");
                    a && this._assign(a, e, t, n);
                  }.bind(this)
                );
          }.bind(this),
          u = function (e) {
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
                    t._getProperty(n, "_blj") === r.GPaintCanvas.LineJoin.Miter)
                  ) {
                    var i = r.GLength.parseEquationValue($(this).val());
                    gDesigner.stats("border_change_miterlimit", i),
                      null !== i && i > 0
                        ? o(["_vs", e], [true, i])
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
                        var o = r.GLength.parseEquationValue($(this).val());
                        null !== o && o >= 0 && t.push(o);
                      }),
                    i(["_vs", e], [true, t]);
                })
                .gInputBox();
            if (0 === e.indexOf("_ba-")) {
              var n = "",
                a = "",
                s = e.substr("_ba-".length);
              switch (s) {
                case r.GStylable.BorderAlignment.Inside:
                  (n = "gravit-icon-line-stroke-inside"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GStylable", "border-alignment.inside")
                    ));
                  break;
                case r.GStylable.BorderAlignment.Center:
                  (n = "gravit-icon-line-stroke-center"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GStylable", "border-alignment.center")
                    ));
                  break;
                case r.GStylable.BorderAlignment.Outside:
                  (n = "gravit-icon-line-stroke-outside"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GStylable", "border-alignment.outside")
                    ));
              }
              return $("<button></button>")
                .addClass("g-icon g-flat")
                .css("width", "33.3%")
                .attr("data-property", e)
                .attr("data-title", a)
                .on("click", function () {
                  var e = s,
                    t = Object.keys(r.GStylable.BorderAlignment);
                  for (var n of t)
                    if (s === r.GStylable.BorderAlignment[n]) {
                      e = n;
                      break;
                    }
                  gDesigner.stats("border_change_align", e),
                    i(["_vs", "_ba"], [true, s]);
                })
                .append($("<span></span>").addClass(n));
            }
            if (0 === e.indexOf("_blc-")) {
              (n = ""), (a = "");
              var l = e.substr("_blc-".length);
              switch (l) {
                case r.GPaintCanvas.LineCap.Butt:
                  (n = "gravit-icon-line-cap-butt"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GPaintCanvas", "linecap.butt")
                    ));
                  break;
                case r.GPaintCanvas.LineCap.Round:
                  (n = "gravit-icon-line-cap-round"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GPaintCanvas", "linecap.round")
                    ));
                  break;
                case r.GPaintCanvas.LineCap.Square:
                  (n = "gravit-icon-line-cap-square"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GPaintCanvas", "linecap.square")
                    ));
              }
              return $("<button></button>")
                .addClass("g-icon g-flat")
                .css("width", "33.3%")
                .attr("data-title", a)
                .attr("data-property", e)
                .on("click", function () {
                  gDesigner.stats("border_change_cap", l),
                    i(["_vs", "_blc"], [true, l]);
                })
                .append($("<span></span>").addClass(n));
            }
            if (0 === e.indexOf("_blj-")) {
              (n = ""), (a = "");
              var c = e.substr("_blj-".length);
              switch (c) {
                case r.GPaintCanvas.LineJoin.Bevel:
                  (n = "gravit-icon-line-join-bevel"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GPaintCanvas", "linejoin.bevel")
                    ));
                  break;
                case r.GPaintCanvas.LineJoin.Round:
                  (n = "gravit-icon-line-join-round"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GPaintCanvas", "linejoin.round")
                    ));
                  break;
                case r.GPaintCanvas.LineJoin.Miter:
                  (n = "gravit-icon-line-join-miter"),
                    (a = r.GLocale.get(
                      new r.GLocaleKey("GPaintCanvas", "linejoin.miter")
                    ));
              }
              return $("<button></button>")
                .addClass("g-icon g-flat")
                .css("width", "33.3%")
                .attr("data-title", a)
                .attr("data-property", e)
                .on("click", function () {
                  gDesigner.stats("border_change_join", c),
                    i(["_vs", "_blj"], [true, c]);
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
                        i([e], [$(this).prop("checked")]);
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
                    o = parseInt(n.gInputSlider("value")) / 100;
                  i([e], [o]);
                })
                .on("change", function (t) {
                  gDesigner.stats("border_change_markersposition"),
                    i([e], [parseInt($(this).gInputSlider("value")) / 100]);
                });
            if ("_bhms" === e || "_btms" === e)
              return $("<input>")
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function () {
                  gDesigner.stats("border_change_tailmarkerscalation"),
                    i(
                      [e],
                      [
                        r.GLength.parseEquationValue(
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
                      r.GLocale.get(
                        new r.GLocaleKey("GCommonNames", "text.none")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.Circle)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-marker.circle")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.Bullet)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-marker.bullet")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.Diamond)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-marker.diamond")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.Line)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-marker.line")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.LineDouble)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey(
                          "GStylable",
                          "border-marker.linedouble"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.Arrow)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-marker.arrow")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.ArrowFat)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-marker.arrowfat")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.ArrowLine)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-marker.arrowline")
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.ArrowDoubleLine)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey(
                          "GStylable",
                          "border-marker.arrowdoubleline"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.ArrowLineBar)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey(
                          "GStylable",
                          "border-marker.arrowlinebar"
                        )
                      )
                    )
                )
                .append(
                  $("<option></option>")
                    .attr("value", r.GStylable.BorderMarker.ArrowPointer)
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey(
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
                      r.GLocale.get(
                        new r.GLocaleKey(
                          "GBorderPaintLayerProperties",
                          "option.custom"
                        )
                      )
                    )
                )
                .on("change", function (t) {
                  var n = $(this).val(),
                    o = Object.keys(r.GStylable.BorderMarker);
                  for (var a of o)
                    if (n === r.GStylable.BorderMarker[a]) {
                      n = a;
                      break;
                    }
                  gDesigner.stats("border_change_headmarker", n),
                    i([e], [$(this).val() || null]);
                });
            if (0 === e.indexOf("arrow-paste-")) {
              var d = e.substr("arrow-paste-".length);
              return $("<button></button>")
                .addClass("g-flat g-icon")
                .attr(
                  "data-title",
                  r.GLocale.get(new r.GLocaleKey("GPasteAction", "title"))
                )
                .append($("<span></span>").addClass("gravit-icon-paste"))
                .on(
                  "click",
                  function () {
                    gDesigner.stats("border_click_paste");
                    var e = false,
                      t = r.GNode.deserialize(
                        gDesigner.getClipboardContent(r.GNode.MIME_TYPE)
                      );
                    if (t && t.length)
                      for (var n = 0; n < t.length; ++n)
                        if (t[n].hasMixin(r.GVertexSource)) {
                          var o = t[n],
                            a = r.GVertexInfo.calculateBounds(o, true);
                          if (a) {
                            var s = a.getSide(r.GRect.Side.BOTTOM_CENTER);
                            i(
                              [d],
                              [
                                new r.GVertexContainer(
                                  new r.GVertexTransformer(
                                    o,
                                    new r.GTransform(
                                      1,
                                      0,
                                      0,
                                      -1,
                                      -s.getX(),
                                      -s.getY()
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
                        r.GLocale.get(
                          new r.GLocaleKey("GCommonNames", "arrow-paste.alert")
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
                        r.GLocale.get(
                          new r.GLocaleKey(
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
                        u("_blc-" + r.GPaintCanvas.LineCap.Butt).addClass(
                          "g-group-start"
                        )
                      )
                      .append(
                        u("_blc-" + r.GPaintCanvas.LineCap.Round).addClass(
                          "g-group-element"
                        )
                      )
                      .append(
                        u("_blc-" + r.GPaintCanvas.LineCap.Square).addClass(
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
                        r.GLocale.get(
                          new r.GLocaleKey("GCommonNames", "text.position")
                        )
                      )
                  )
                  .append(
                    $("<div />")
                      .addClass("border-property-content")
                      .append(
                        u("_ba-" + r.GStylable.BorderAlignment.Inside).addClass(
                          "g-group-start"
                        )
                      )
                      .append(
                        u("_ba-" + r.GStylable.BorderAlignment.Center).addClass(
                          "g-group-element"
                        )
                      )
                      .append(
                        u(
                          "_ba-" + r.GStylable.BorderAlignment.Outside
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
                          r.GLocale.get(
                            new r.GLocaleKey(
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
                          u("_blj-" + r.GPaintCanvas.LineJoin.Bevel).addClass(
                            "g-group-start"
                          )
                        )
                        .append(
                          u("_blj-" + r.GPaintCanvas.LineJoin.Miter).addClass(
                            "g-group-element "
                          )
                        )
                        .append(
                          u("_blj-" + r.GPaintCanvas.LineJoin.Round).addClass(
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
                          r.GLocale.get(
                            new r.GLocaleKey(
                              "GBorderPaintLayerProperties",
                              "text.miter-limit"
                            )
                          )
                        )
                    )
                    .append(
                      $("<div />")
                        .addClass("border-property-content top-2px")
                        .append(u("_bml"))
                    )
                    .gRichTooltip(
                      s.GRichTooltipConfig.from({
                        title: r.GLocale.get(
                          new r.GLocaleKey(
                            "GBorderPaintLayerProperties",
                            "text.miter-limit"
                          )
                        ),
                        video: g.gApi.getRichTooltipVideoURL("Miter_Limit.mp4"),
                        description: r.GLocale.get(
                          new r.GLocaleKey(
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
                  content: u("_bds"),
                  label: r.GLocale.get(
                    new r.GLocaleKey("GBorderPaintLayerProperties", "text.dash")
                  ),
                },
                {
                  width: "25%",
                  content: u("_bds"),
                  label: r.GLocale.get(
                    new r.GLocaleKey("GBorderPaintLayerProperties", "text.gap")
                  ),
                },
                {
                  width: "25%",
                  content: u("_bds"),
                  label: r.GLocale.get(
                    new r.GLocaleKey("GBorderPaintLayerProperties", "text.dash")
                  ),
                },
                {
                  width: "25%",
                  content: u("_bds"),
                  label: r.GLocale.get(
                    new r.GLocaleKey("GBorderPaintLayerProperties", "text.gap")
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
                    r.GLocale.get(
                      new r.GLocaleKey(
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
                    r.GLocale.get(
                      new r.GLocaleKey(
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
                { width: "37%", content: u("_bhm") },
                { width: "8%", content: u("arrow-paste-_bhm") },
                { width: "10%" },
                { width: "37%", content: u("_btm") },
                { width: "8%", content: u("arrow-paste-_btm") },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                { width: "45%", padding: false, content: u("_bhms") },
                { width: "10%" },
                { width: "45%", padding: false, content: u("_btms") },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "45%",
                  prefix: {
                    label: r.GLocale.get(
                      new r.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.outline"
                      )
                    ),
                    width: "50px",
                  },
                  padding: false,
                  content: u("_bhmo"),
                },
                { width: "10%" },
                {
                  width: "45%",
                  prefix: {
                    label: r.GLocale.get(
                      new r.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.outline"
                      )
                    ),
                    width: "50px",
                  },
                  padding: false,
                  content: u("_btmo"),
                },
              ],
            })
            .appendTo(this._advancedStrokePanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "45%",
                  label: r.GLocale.get(
                    new r.GLocaleKey(
                      "GBorderPaintLayerProperties",
                      "text.marker-position"
                    )
                  ),
                  padding: false,
                  content: u("_bhmi"),
                },
                { width: "10%" },
                {
                  width: "45%",
                  label: r.GLocale.get(
                    new r.GLocaleKey(
                      "GBorderPaintLayerProperties",
                      "text.marker-position"
                    )
                  ),
                  padding: false,
                  content: u("_btmi"),
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
                            i(["_bs"], [$(this).prop("checked")]);
                        })
                    )
                    .append(
                      $("<span></span>").text(
                        r.GLocale.get(
                          new r.GLocaleKey(
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
              r.GLocale.get(
                new r.GLocaleKey(
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
              s.GRichTooltipConfig.from({
                title: r.GLocale.get(
                  new r.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.advanced-stroke-settings-tooltip-title"
                  )
                ),
                description: r.GLocale.get(
                  new r.GLocaleKey(
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
              r.GLocale.get(
                new r.GLocaleKey(
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
                a.GEditor.tryRunTransaction(
                  n._elements[0],
                  function () {
                    var e = [];
                    n._iterateEqualPaintLayer(t, function (t) {
                      e.push(t);
                    }),
                      r.GUtil.each(e, function (e, t) {
                        t.getParent().removeChild(t);
                      });
                  },
                  r.GLocale.get(
                    new r.GLocaleKey(
                      "GBorderPaintLayerProperties",
                      "action.remove-border"
                    )
                  )
                );
              const o = gDesigner
                .getRightSidebars()
                .getSidebar(d.default.SidebarsIds.GInspectorSidebar);
              o.trigger(new c.default(c.default.Type.ChildRemoved, o));
            })
            .gRichTooltip(
              s.GRichTooltipConfig.from({
                title: r.GLocale.get(
                  new r.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.remove-border-tooltip-title"
                  )
                ),
                description: r.GLocale.get(
                  new r.GLocaleKey(
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
              r.GLocale.get(
                new r.GLocaleKey(
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
                  a.GEditor.tryRunTransaction(
                    n._elements[0],
                    function () {
                      const e = n._document && n._document.getScene(),
                        t = e && e.getProperty("cm"),
                        o = r.GColorHelper.convertColor(
                          r.GRGBColor.BLACK,
                          t || r.GColor.ColorModes.RGB
                        );
                      for (var i = 0; i < n._elements.length; ++i) {
                        var a = n._elements[i],
                          s = new r.GStylable.BorderPaintLayer();
                        a instanceof r.GText
                          ? s.setProperty(
                              "_ba",
                              r.GStylable.BorderAlignment.Outside
                            )
                          : a instanceof r.GShape
                          ? a instanceof r.GEllipse &&
                            a.$etp === r.GEllipse.Type.Arc
                            ? s.setProperty(
                                "_ba",
                                r.GStylable.BorderAlignment.Center
                              )
                            : s.setProperty(
                                "_ba",
                                r.GStylable.BorderAlignment.Inside
                              )
                          : a instanceof r.GPath &&
                            !a.$closed &&
                            s.setProperty(
                              "_ba",
                              r.GStylable.BorderAlignment.Center
                            ),
                          s.setProperty("_pt", o),
                          a.getPaintLayers().appendChild(s);
                        const e = gDesigner
                          .getRightSidebars()
                          .getSidebar(d.default.SidebarsIds.GInspectorSidebar);
                        e.trigger(new c.default(c.default.Type.ChildAdded, e));
                      }
                    },
                    r.GLocale.get(
                      new r.GLocaleKey(
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
              s.GRichTooltipConfig.from({
                title: r.GLocale.get(
                  new r.GLocaleKey(
                    "GBorderPaintLayerProperties",
                    "text.add-border-tooltip-title"
                  )
                ),
                description: r.GLocale.get(
                  new r.GLocaleKey(
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
              a.GStyleEdManager.EditorEvent,
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
                  o = (n && n.position().top) || 0,
                  i = $("<span/>")
                    .addClass("copy-info-overlay")
                    .css({ top: o })
                    .text(
                      r.GLocale.get(
                        new r.GLocaleKey(
                          "GBorderPaintLayerProperties",
                          "text.copy-border"
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
        const o = this._styleEditorChange;
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
                r.GNode.AfterInsertEvent,
                this._afterInsert,
                this
              ),
            this._document
              .getScene()
              .removeEventListener(
                r.GNode.BeforeRemoveEvent,
                this._beforeRemove,
                this
              ),
            this._document
              .getScene()
              .removeEventListener(
                r.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            (this._document = null)),
          (this._elements = []),
          e)
        ) {
          for (var i = 0; i < t.length; ++i) {
            var s = t[i],
              l = function (e, t) {
                t.hasMixin(r.GStylable) &&
                  t
                    .getStylePropertySets()
                    .indexOf(r.GStylable.PropertySet.FillPaintLayers) >= 0 &&
                  this._elements.push(t);
              }.bind(this),
              c = a.GElementEditor.getEditor(s);
            c && c.getStylableParts()
              ? r.GUtil.each(c.getStylableParts(), l)
              : l(null, s);
          }
          if (this._elements.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  r.GNode.AfterInsertEvent,
                  this._afterInsert,
                  this
                ),
              this._document
                .getScene()
                .addEventListener(
                  r.GNode.BeforeRemoveEvent,
                  this._beforeRemove,
                  this
                ),
              this._document
                .getScene()
                .addEventListener(
                  r.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              o || this._updateProperties(n),
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
          e.type == a.GStyleEdManager.EditorEventType.PrepareModifiedEvent &&
          (this._styleEditorChange = true);
      }),
      (v.prototype._updateProperties = function (e) {
        if (this._elements && this._elements.length) {
          this._panel.find(".border-block").remove();
          var module = this._elements[0].getPaintLayers().getBorderLayers();
          r.GUtil.each(
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
          o = false,
          l = null,
          c = null,
          d = null,
          h = null,
          m = null,
          v = 0,
          _ = 0,
          b = function (e) {
            if (l) {
              var t = $(e).data("paintLayer");
              if (t && (t !== l || i.GPlatform.modifiers.shiftKey))
                return l.getParent() === t.getParent();
            }
            return false;
          },
          w = function (t, n, o, i) {
            this._assign(e, t, n, o, i);
          }.bind(this),
          C = function (t) {
            if ("_pt" === t)
              return $("<div></div>")
                .attr("data-property", "_pt")
                .gPatternChooser({
                  types: [
                    r.GColor,
                    r.GLinearGradient,
                    r.GRadialGradient,
                    r.GAngularGradient,
                    r.GBackground,
                    r.GTexturePattern,
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
                .on("chooserclose", function (e, t, o) {
                  if (
                    gDesigner
                      .getWorkspace()
                      .getStyleEdManager()
                      .getOverlayLock(o)
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
                      i instanceof r.GRGBColor ||
                      y.showCDRUnsupportedObjectWarning();
                  }
                  n._chooserElem = null;
                })
                .on("patternchange", function (e, t, n, o, i, a) {
                  var r = ["_vs"],
                    s = [true];
                  undefined !== t && (r.push("_pt"), s.push(t)),
                    "number" == typeof n && (r.push("_op"), s.push(n));
                  var l = null;
                  i &&
                    ((l = { chooserOn: true }),
                    null != a && (l.activeStopIdx = a)),
                    w(r, s, o, l);
                });
            if ("_bl" == t)
              return $("<select></select>")
                .gBlendMode()
                .gRichTooltip(
                  s.GRichTooltipConfig.from({
                    title: r.GLocale.getValue(
                      "GAppearanceProperties",
                      "text.blend-tooltip-title"
                    ),
                    description: r.GLocale.getValue(
                      "GAppearanceProperties",
                      "text.blend-tooltip-description"
                    ),
                    middle: false,
                    forceShow: true,
                    learnMore: g.LINKS.BLENDING_MODES_DOCUMENTATION_URL,
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
                          r.GLength.parseEquationValue(
                            $(this).gInputBox("value")
                          )) / 100,
                      ]
                    ),
                    $(e.target)
                      .parents(".touch")
                      .find($(".transparency"))
                      .gInputSlider(
                        "value",
                        r.GLength.parseEquationValue($(this).gInputBox("value"))
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
                    o = e ? e.toUnit(r.GLength.Unit.PX) : null;
                  null !== o && o >= 0
                    ? w(["_vs", t], [true, o])
                    : n._updateProperties();
                })
                .gUnitBox({ minValue: 0, source: "border" })
                .gRichTooltip(
                  s.GRichTooltipConfig.from({
                    title: r.GLocale.get(
                      new r.GLocaleKey(
                        "GBorderPaintLayerProperties",
                        "text.border-width-tooltip-title"
                      )
                    ),
                    description: r.GLocale.get(
                      new r.GLocaleKey(
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
                  r.GLocale.get(
                    new r.GLocaleKey("GCommonNames", "action.toggle-visibility")
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
              (o =
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
                  .toggleClass("g-draggable-disabled", !o);
            })
            .on("dragstart", function (e) {
              if (!o) return e.preventDefault(), void e.stopPropagation();
              var t = $(e.target).closest(".border-block"),
                s = t.offset(),
                d = e.originalEvent;
              (c = window.gDragImage()).addClass(
                "drag-delete gravit-icon-trash"
              ),
                (h = n._panel.offset()),
                (m = n._panel.outerHeight()),
                (v = e.clientX - s.left),
                (_ = e.clientY - s.top),
                d.stopPropagation(),
                (l = t.data("paintLayer")),
                (d.dataTransfer.effectAllowed = "move"),
                d.dataTransfer.setData("text/plain", "dummy_data"),
                n._panel.find(".border-block").each(function (e, t) {
                  $(t).append(
                    $("<div></div>")
                      .addClass("grid-drag-overlay")
                      .on("dragenter", function () {
                        var e = $(this.parentNode).data("paintLayer");
                        if (b(this.parentNode)) {
                          if (l && e && l.getParent() === e.getParent()) {
                            var t = l.getParent(),
                              n = t.getIndexOfChild(l),
                              o = t.getIndexOfChild(e);
                            n !== o &&
                              (n < o
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
                          l && t && l.getParent() === t.getParent())
                        ) {
                          var o = l.getParent(),
                            s = o.getIndexOfChild(l),
                            c = o.getIndexOfChild(t);
                          a.GEditor.tryRunTransaction(
                            o,
                            function () {
                              if (i.GPlatform.modifiers.shiftKey) {
                                var e = l.clone();
                                o.insertChild(e, s < c ? t.getNext() : t);
                              } else
                                s !== c &&
                                  (o.removeChild(l),
                                  o.insertChild(l, s < c ? t.getNext() : t));
                            },
                            i.GPlatform.modifiers.shiftKey
                              ? r.GLocale.get(
                                  new r.GLocaleKey(
                                    "GBorderPaintLayerProperties",
                                    "action.duplicate-border"
                                  )
                                )
                              : r.GLocale.get(
                                  new r.GLocaleKey(
                                    "GBorderPaintLayerProperties",
                                    "action.move-border"
                                  )
                                )
                          ),
                            n._updateProperties(),
                            n._setSelectedPaintLayer(l);
                        }
                        l = null;
                      })
                  );
                });
            })
            .on("drag", function (e) {
              d = (0, u.handleDragForDeleteIcon)(e, c, h, m, v, _);
            })
            .on("dragend", function (e) {
              var t = e.originalEvent,
                o = $(e.target)
                  .closest(".border-block")
                  .closest(".border-block")
                  .data("paintLayer");
              if (
                (n._panel.find(".g-drop-indicator").remove(),
                n._panel.find(".grid-drag-overlay").remove(),
                l && o && l.getParent() === o.getParent())
              ) {
                var s = l.getParent(),
                  u = s.getIndexOfChild(l),
                  p = s.getIndexOfChild(o);
                a.GEditor.tryRunTransaction(
                  s,
                  function () {
                    if (i.GPlatform.modifiers.shiftKey) {
                      var e = l.clone();
                      s.insertChild(e, u < p ? o.getNext() : o);
                    } else
                      u !== p &&
                        (s.removeChild(l),
                        s.insertChild(
                          l,
                          u < p ? o.getNext() : o.getPrevious()
                        ));
                  },
                  i.GPlatform.modifiers.shiftKey
                    ? r.GLocale.get(
                        new r.GLocaleKey(
                          "GFillPaintLayerProperties",
                          "action.duplicate"
                        )
                      )
                    : r.GLocale.get(
                        new r.GLocaleKey(
                          "GFillPaintLayerProperties",
                          "action.move"
                        )
                      )
                ),
                  n._updateProperties(),
                  n._setSelectedPaintLayer(l);
              }
              l &&
                d &&
                a.GEditor.tryRunTransaction(
                  n._elements[0],
                  function () {
                    var e = [];
                    n._iterateEqualPaintLayer(l, function (t) {
                      e.push(t);
                    }),
                      r.GUtil.each(e, function (e, t) {
                        t.getParent().removeChild(t);
                      });
                  },
                  r.GLocale.get(
                    new r.GLocaleKey(
                      "GBorderPaintLayerProperties",
                      "action.remove-border"
                    )
                  )
                ),
                c && c.css("display", "none"),
                (c = null),
                t.stopPropagation(),
                (l = null);
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
                      r.GLocale.get(
                        new r.GLocaleKey(
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
          var o = $(n);
          if (o.data("paintLayer") === e) return o.remove(), false;
        });
      }),
      (v.prototype._updatePaintLayer = function (e, t) {
        var n = this;
        e &&
          (this._panel.find(".border-block").each(function (t, o) {
            var i = $(o);
            if (i.data("paintLayer") === e) {
              i.find('[data-property="_pt"]')
                .gPatternChooser("setPattern", e.getProperty("_pt", false, false, true))
                .gPatternChooser("value", e.getProperty("_pt", false, false, true))
                .gPatternChooser("opacity", e.getProperty("_op", false, false, true));
              var a = n._getProperty(e, "_bw", false, null);
              i.find('[data-property="_bw"]').each(function (e, t) {
                $(t)
                  .gUnitBox({
                    unit:
                      n._document.getScene().getProperty("ut") ===
                      r.GLength.Unit.PX
                        ? r.GLength.Unit.PX
                        : r.GLength.Unit.PT,
                    minValue: 0,
                  })
                  .gUnitBox(
                    "value",
                    null !== a ? new r.GLength(a, r.GLength.Unit.PX) : null
                  );
              }),
                i.find('[data-property="_op"]').each(function (t, n) {
                  $(n).gInputBox(
                    "value",
                    r.GUtil.formatOpacity(
                      100 * e.getProperty("_op", false, false, true)
                    )
                  );
                }),
                i.find('[data-property="_bl"]').val(e.getProperty("_bl"));
              var s = e.getProperty("_vs");
              i.find('[data-property="_vs"]')
                .removeClass("gravit-icon-" + (s ? "hide" : "display"))
                .addClass("gravit-icon-" + (s ? "display" : "hide"));
            }
          }),
          this._updateAdvancedSettings(),
          t &&
            (t.evtType == a.GEditor.ModifiedEvent.Type.Undo ||
              t.evtType == a.GEditor.ModifiedEvent.Type.Redo) &&
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
      (v.prototype._assign = function (e, t, n, o, i) {
        if (o)
          this._iterateEqualPaintLayer(e, function (e) {
            e.setProperties(t, n, false, false, true);
          });
        else if (this._document) {
          var s = null;
          if (i) {
            var l = e.getParent().getIndexOfChild(e);
            s = $.extend({ borderLayerIndex: l }, i);
          }
          this._ownChange = true;
          var c = this._document.getEditor();
          c.beginTransaction();
          try {
            this._iterateEqualPaintLayer(e, function (e, o) {
              var i = a.GElementEditor.getEditor(o);
              (i && i.applyPropertiesToParts(t, n)) || e.setProperties(t, n);
            });
          } finally {
            c.commitTransaction(
              r.GLocale.get(
                new r.GLocaleKey(
                  "GBorderPaintLayerProperties",
                  "action.change-border-properties"
                )
              ),
              s
            ),
              (this._ownChange = false);
          }
        }
      }),
      (v.prototype._getProperty = function (e, t, n, o) {
        return e ? e.getProperty(t) : null;
      }),
      (v.prototype._afterInsert = function (e) {
        e.node instanceof r.GStylable.BorderPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0] &&
          (this._insertPaintLayer(e.node), this._updateToolbar());
      }),
      (v.prototype._beforeRemove = function (e) {
        if (
          e.node instanceof r.GStylable.BorderPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0]
        ) {
          this._removePaintLayer(e.node);
          for (
            var module = e.node.getPrevious();
            module && !(module instanceof r.GStylable.BorderPaintLayer);

          )
            module = module.getPrevious();
          if (!(module instanceof r.GStylable.BorderPaintLayer))
            for (
              module = e.node.getNext();
              module && !(module instanceof r.GStylable.BorderPaintLayer);

            )
              module = module.getNext();
          this._setSelectedPaintLayer(module), this._updateToolbar();
        }
      }),
      (v.prototype._afterPropertiesChange = function (e) {
        e.node instanceof r.GStylable.BorderPaintLayer &&
          e.node.getOwnerStylable() === this._elements[0] &&
          this._updatePaintLayer(e.node);
      }),
      (v.prototype._updateAdvancedSettings = function () {
        var e = this,
          t = function (t) {
            var n = this._getProperty(t, "_bds", false, null),
              o = this._advancedStrokePanel;
            o.find('[data-property="_bds"]').each(function (e, t) {
              $(t).val(n && n.length > e ? n[e] : "");
            }),
              o.find('[data-property^="_ba"]').each(function (n, o) {
                var i = $(o),
                  a = i.attr("data-property").substr("_ba-".length);
                if (
                  a === r.GStylable.BorderAlignment.Inside ||
                  a === r.GStylable.BorderAlignment.Outside
                ) {
                  for (
                    var s, l, c = false, d = false, u = 0, p = e._elements.length;
                    u < p;
                    u++
                  ) {
                    var g = e._elements[u];
                    (g instanceof r.GPath && !g.$closed) ||
                    (g instanceof r.GEllipse && g.$etp === r.GEllipse.Type.Arc)
                      ? (c = true)
                      : (d = true);
                  }
                  switch (a) {
                    case r.GStylable.BorderAlignment.Inside:
                      l = r.GLocale.get(
                        new r.GLocaleKey("GStylable", "border-alignment.inside")
                      );
                      break;
                    case r.GStylable.BorderAlignment.Outside:
                      l = r.GLocale.get(
                        new r.GLocaleKey(
                          "GStylable",
                          "border-alignment.outside"
                        )
                      );
                  }
                  c ? i.attr("disabled", true) : i.attr("disabled", false),
                    (s =
                      c && d
                        ? r.GLocale.get(
                            new r.GLocaleKey(
                              "GBorderPaintLayerProperties",
                              "text.border-alignment.disabled"
                            )
                          ) +
                          ": " +
                          l
                        : l),
                    i.attr("data-title", s);
                }
                i.toggleClass("g-active", e._getProperty(t, "_ba", true) === a);
              }),
              o.find('[data-property^="_blc"]').each(function (n, o) {
                var i = $(o),
                  a = i.attr("data-property").substr("_blc-".length);
                i.toggleClass("g-active", e._getProperty(t, "_blc", true) === a);
              }),
              o.find('[data-property^="_blj"]').each(function (n, o) {
                var i = $(o),
                  a = i.attr("data-property").substr("_blj-".length);
                i.toggleClass("g-active", e._getProperty(t, "_blj", true) === a);
              });
            var i = o.find('[data-property="_bml"]');
            i.gInputBox(
              "value",
              r.GUtil.formatNumber(this._getProperty(t, "_bml", true))
            ),
              this._getProperty(t, "_blj") !== r.GPaintCanvas.LineJoin.Miter
                ? i.attr("disabled", true)
                : i.removeAttr("disabled");
            var a = this._getProperty(t, "_bhm", false, null);
            o.find('[data-property="_bhm"]').val(
              a instanceof r.GVertexContainer ? "#" : a || ""
            );
            var s = this._getProperty(t, "_btm", false, null);
            o
              .find('[data-property="_btm"]')
              .val(s instanceof r.GVertexContainer ? "#" : s || ""),
              o
                .find('[data-property="_bhms"]')
                .gInputBox(
                  "value",
                  r.GUtil.formatNumber(
                    100 * this._getProperty(t, "_bhms", false, 1),
                    0
                  )
                ),
              o
                .find('[data-property="_btms"]')
                .gInputBox(
                  "value",
                  r.GUtil.formatNumber(
                    100 * this._getProperty(t, "_btms", false, 1),
                    0
                  )
                ),
              o
                .find('[data-property="_bhmo"]')
                .prop("checked", this._getProperty(t, "_bhmo", false, false)),
              o
                .find('[data-property="_bhmi"]')
                .gInputSlider("value", 100 * this._getProperty(t, "_bhmi")),
              o
                .find('[data-property="_btmo"]')
                .prop("checked", this._getProperty(t, "_btmo", false, false)),
              o
                .find('[data-property="_btmi"]')
                .gInputSlider("value", 100 * this._getProperty(t, "_btmi")),
              o
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
          var o = $(n);
          o.toggleClass("g-selected", o.data("paintLayer") === e);
        }),
          this._document && this._document.updateActiveStylesList("Border", e);
      }),
      (v.prototype._getSelectedPaintLayer = function () {
        return this._panel.find(".border-block.g-selected").data("paintLayer");
      }),
      (v.prototype._iterateEqualPaintLayer = function (e, t) {
        if (e)
          for (
            var require = e.getParent().getBorderLayers().indexOf(e), o = 0;
            o < this._elements.length;
            ++o
          ) {
            var i = this._elements[o].getPaintLayers().getBorderLayers();
            r.GUtil.each(
              i,
              function (i, a) {
                ((a && a === e) ||
                  (a.constructor === e.constructor && i === require)) &&
                  t(a, this._elements[o]);
              }.bind(this)
            );
          }
      }),
      (exports.exports = v);
  }