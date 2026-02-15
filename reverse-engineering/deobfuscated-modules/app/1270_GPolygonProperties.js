/**
 * Webpack Module #1270
 * Type: class
 * Name: GPolygonProperties
 */

function (exports, module, require) {
    "use strict";
    require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */,
      i = require(67) /* GRichTooltipConfig */,
      GProperties = require(123) /* GProperties */,
      r = (require(173) /* stub_requires_1 */, require(135) /* GSettingChangedEvent */);
    function s() {
      this._polygons = [];
    }
    GCore.GObject.inherit(s, GProperties),
      (s.prototype._panel = null),
      (s.prototype._advancedPanel = null),
      (s.prototype._document = null),
      (s.prototype._polygons = null),
      (s.prototype.init = function (e, t) {
        this._panel = e;
        var n = this,
          GProperties = function (e) {
            if ("ir" === e || "or" === e)
              return $("<input>")
                .addClass("radius-input-" + e)
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function () {
                  gDesigner.stats("polygonproperties_change_radius");
                  var t = n._document.getScene().stringToPoint($(this).val());
                  null !== t && "number" == typeof t && t >= 0
                    ? n._assignProperty(
                        e,
                        t,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPolygonProperties",
                            "action.change-radius"
                          )
                        )
                      )
                    : n._updateProperties();
                })
                .gInputBox();
            if ("ia" === e || "oa" === e)
              return $("<input>")
                .addClass("angle-input-" + e)
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function () {
                  gDesigner.stats("polygonproperties_change_angle");
                  var t = GCore.GLength.parseEquationValue($(this).val());
                  null !== t
                    ? ((t = GCore.GMath.normalizeAngleRadians(
                        GCore.GMath.toRadians(t)
                      )),
                      n._assignProperty(
                        e,
                        GCore.GMath.PI2 - t,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPolygonProperties",
                            "action.change-angle"
                          )
                        )
                      ))
                    : n._updateProperties();
                })
                .gInputBox({ fixedIncrement: true });
            if ("ict" === e || "oct" === e)
              return $("<button></button>")
                .addClass("g-flat")
                .attr("data-property", e)
                .gCornerTypePicker()
                .on("cornertypechange", function (t, i) {
                  n._assignProperty(
                    e,
                    i,
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GPolygonProperties",
                        "action.change-corner-type"
                      )
                    )
                  );
                });
            if ("icr" === e || "ocr" === e)
              return $("<input>")
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function (t) {
                  gDesigner.stats("polygonproperties_change_corner-radius");
                  var i = n._document.getScene().stringToPoint($(this).val());
                  null !== i && "number" == typeof i && i >= 0
                    ? n._assignProperty(
                        e,
                        i < 0 ? 0 : i,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPolygonProperties",
                            "action.change-corner-radius"
                          )
                        )
                      )
                    : n._updateProperties();
                })
                .gInputBox();
            if ("corners-type" !== e) {
              if ("corners-radius-slider" === e)
                return $("<div/>")
                  .attr("data-property", "corners-radius-slider")
                  .gInputSlider({
                    min: 0,
                    max: 100,
                    richTooltipConfig: i.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GCommonNames",
                          "text.corner-radius-slider-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GCommonNames",
                          "text.corner-radius-slider-tooltip-description"
                        )
                      ),
                    }),
                  })
                  .on("mousedown", function () {
                    n._document.getEditor().hideSelection(),
                      $(document).one("mouseup", function () {
                        n._document.getEditor().resetHideSelection();
                      });
                  })
                  .on("input", function () {
                    var e = n._assignCornersRadius(
                      parseInt($(this).gInputSlider("value")) / 100,
                      true
                    );
                    n._panel
                      .find('[data-property="corners-radius"]')
                      .val(
                        n._document
                          .getScene()
                          .pointToString(
                            e,
                            n._document.getScene().getOptimalDecimalsCount()
                          )
                      );
                  })
                  .on("change", function () {
                    gDesigner.stats("polygonproperties_change_radius"),
                      n._assignCornersRadius(
                        parseInt($(this).gInputSlider("value")) / 100,
                        false
                      );
                  });
              if ("corners-radius-input" === e)
                return $("<input>")
                  .attr("type", "text")
                  .attr("data-property", "corners-radius")
                  .addClass("corner-radius")
                  .on("change", function () {
                    gDesigner.stats("polygonproperties_change_corners-radius");
                    var e = n._document
                      .getScene()
                      .stringToPoint($(this).gInputBox("value"));
                    null !== e && "number" == typeof e && e >= 0
                      ? n._assignCornersRadius(e, false, true)
                      : n._updateProperties();
                  })
                  .gInputBox({ minValue: 0, incrementValue: 1 });
              throw new Error("Unknown input property: " + e);
            }
          };
        $("<div></div>")
          .gPropertyRow({
            label: GCore.GLocale.get(
              new GCore.GLocaleKey("GPolygonProperties", "text.points")
            ),
            columns: [
              {
                width: "auto",
                clazz: "point-slider-wrapper",
                content: $("<div/>")
                  .attr("data-property", "pts")
                  .gInputSlider({ min: 3, max: 25 })
                  .on("input", function () {
                    var e = $(this).gInputSlider("value");
                    n._assignPoints(parseInt(e), true),
                      n._panel
                        .find('input[type="text"][data-property="pts"]')
                        .val(e);
                  })
                  .on("change", function (e) {
                    gDesigner.stats(
                      "polygonproperties_change_number-of-points"
                    ),
                      n._assignPoints(
                        parseInt($(this).gInputSlider("value")),
                        false
                      );
                  }),
              },
              {
                width: "40px",
                content: $("<input>")
                  .attr("type", "text")
                  .attr("data-property", "pts")
                  .on("change", function (e) {
                    gDesigner.stats(
                      "polygonproperties_change_number-of-points"
                    ),
                      n._assignPoints(
                        GCore.GLength.parseEquationValue(
                          $(this).gInputBox("value")
                        ),
                        false
                      );
                  })
                  .gInputBox({ minValue: 3 }),
              },
            ],
          })
          .appendTo(this._panel),
          $("<div></div>")
            .attr("data-plain-edges", "false")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.size")
              ),
              columns: [
                {
                  width: "auto",
                  clazz: "size-slider-wrapper",
                  content: $("<div/>")
                    .attr("data-property", "size")
                    .gInputSlider({ min: 0, max: 100 })
                    .on("input", function () {
                      var e = parseInt($(this).gInputSlider("value"));
                      n._assignSize(e / 100, true),
                        n._panel
                          .find('[type="text"][data-property="size"]')
                          .gInputBox("value", GCore.GUtil.formatNumber(e, 0));
                    })
                    .on("change", function () {
                      gDesigner.stats("polygonproperties_change_plain-edges"),
                        n._assignSize(
                          parseInt($(this).gInputSlider("value")) / 100,
                          false
                        );
                    }),
                },
                {
                  width: "40px",
                  content: $("<input>")
                    .attr("type", "text")
                    .attr("data-property", "size")
                    .on("change", function () {
                      gDesigner.stats("polygonproperties_change_plain-edges"),
                        n._assignSize(
                          GCore.GLength.parseEquationValue(
                            $(this).gInputBox("value")
                          ) / 100,
                          false
                        );
                    })
                    .gInputBox({ minValue: 0, maxValue: 100, postfix: "%" }),
                },
              ],
            })
            .appendTo(this._panel),
          $("<hr/>").appendTo(this._panel),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.corner")
              ),
              columns: [
                {
                  width: "auto",
                  clazz: "corners-radius-slider-wrapper",
                  content: GProperties("corners-radius-slider"),
                },
                { clazz: "corners-radius-no-padding" },
                {
                  clazz: "corners-radius-input-wrapper",
                  content: GProperties("corners-radius-input"),
                },
                { width: "3px" },
                {
                  clazz: "advanced-settings-col",
                  content: $("<div></div>")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GCommonNames",
                          "text.advanced-settings"
                        )
                      )
                    )
                    .addClass("g-button g-icon g-advanced-setting")
                    .css({ display: "flex", justifyContent: "center" })
                    .append(
                      $("<span></span>")
                        .addClass("gravit-icon-settings")
                        .css({ alignSelf: "center", lineHeight: "19px" })
                    )
                    .on(
                      "click",
                      function (e) {
                        gDesigner.stats(
                          "polygonproperties_click_advanced-corners"
                        ),
                          this._advancedPanel.gOverlay(
                            "open",
                            $(e.target).closest(".g-button")
                          ),
                          gDesigner.isTouchEnabled()
                            ? (this._advancedPanel
                                .find(".edges-checkbox")
                                .gCheckboxSlider(),
                              this._advancedPanel
                                .find(".csc-checkbox")
                                .gCheckboxSlider())
                            : (this._advancedPanel
                                .find(".edges-checkbox")
                                .gCheckboxSlider("unmount"),
                              this._advancedPanel
                                .find(".csc-checkbox")
                                .gCheckboxSlider("unmount"));
                        var t = $('div[data-property="corners-type"]');
                        t.gCornerTypePicker(
                          "update",
                          t.gCornerTypePicker("value")
                        );
                      }.bind(this)
                    ),
                },
              ],
            })
            .addClass("corner-radius")
            .appendTo(this._panel),
          (this._advancedPanel = $("<div></div>")
            .addClass("advanced-panel-wrapper")
            .gOverlay({ releaseOnClose: false, clazz: "advanced-overlay" })),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "100%",
                  content: $("<div/>")
                    .css("margin-bottom", "10px")
                    .attr("data-property", "corners-type")
                    .addClass("corner-type")
                    .gCornerTypePicker({ notOverlay: true })
                    .on("cornertypechange", function (e, t) {
                      n._assignProperties(
                        ["ict", "oct"],
                        [t, t],
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPolygonProperties",
                            "action.change-corner-type"
                          )
                        )
                      );
                    }),
                },
              ],
            })
            .appendTo(this._advancedPanel),
          $("<div></div>")
            .addClass("g-checkbox-label-wrapper")
            .gPropertyRow({
              columns: [
                {
                  width: "100%",
                  content: $("<label></label>")
                    .addClass("g-checkbox-label")
                    .append(
                      $("<input>")
                        .addClass("edges-checkbox")
                        .attr("type", "checkbox")
                        .attr("data-property", "edges")
                        .on("change", function () {
                          gDesigner.stats(
                            "polygonproperties_toggle_plain-edges",
                            $(this).is(":checked") ? "enabled" : "disabled"
                          ),
                            n._assignEdges($(this).is(":checked")),
                            n._updateProperties();
                        })
                    )
                    .append(
                      $(
                        "<span>" +
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GPolygonProperties",
                              "text.plain-edges"
                            )
                          ) +
                          "</span>"
                      )
                    ),
                },
              ],
            })
            .appendTo(this._advancedPanel),
          $("<div></div>")
            .addClass("g-checkbox-label-wrapper")
            .gPropertyRow({
              columns: [
                {
                  width: "100%",
                  content: $("<label></label>")
                    .addClass("g-checkbox-label")
                    .append(
                      $("<input>")
                        .addClass("csc-checkbox")
                        .attr("type", "checkbox")
                        .attr("data-property", "csc")
                        .on(
                          "change",
                          function (e) {
                            gDesigner.stats(
                              "polygonproperties_toggle_autoscale-corners",
                              $(e.target).is(":checked")
                                ? "enabled"
                                : "disabled"
                            ),
                              this._assignProperty(
                                "csc",
                                $(e.target).is(":checked")
                              );
                          }.bind(this)
                        )
                    )
                    .append(
                      $(
                        "<span>" +
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GCommonNames",
                              "text.autoscale-corners"
                            )
                          ) +
                          "</span>"
                      )
                    ),
                },
              ],
            })
            .appendTo(this._advancedPanel),
          $("<div></div>")
            .addClass("corner-row-wrapper")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GPolygonProperties", "text.corners")
              ),
              columns: [
                {
                  width: "50%",
                  content: $("<div></div>")
                    .addClass("corner-wrapper")
                    .append(GProperties("ocr"))
                    .append(GProperties("oct")),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.outside")
                  ),
                },
                {
                  width: "50%",
                  content: $("<div></div>")
                    .addClass("corner-wrapper")
                    .append(GProperties("icr"))
                    .append(GProperties("ict")),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.inside")
                  ),
                },
              ],
            })
            .appendTo(this._advancedPanel),
          $("<div></div>")
            .addClass("radius-row-wrapper")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.radius")
              ),
              columns: [
                {
                  width: "50%",
                  content: GProperties("or"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.outside")
                  ),
                },
                {
                  width: "50%",
                  content: GProperties("ir"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.inside")
                  ),
                },
              ],
            })
            .appendTo(this._advancedPanel),
          $("<div></div>")
            .addClass("angles-row-wrapper")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.angles")
              ),
              columns: [
                {
                  width: "50%",
                  content: GProperties("oa"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.outside")
                  ),
                },
                {
                  width: "50%",
                  content: GProperties("ia"),
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.inside")
                  ),
                },
              ],
            })
            .appendTo(this._advancedPanel);
      }),
      (s.prototype.update = function (e, t) {
        if (
          (this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange
              ),
            gDesigner.removeEventListener(r, this._settingChanged),
            (this._document = null)),
          (this._polygons = []),
          e)
        ) {
          for (var require = 0; require < t.length; ++require)
            t[require] instanceof GCore.GPolygon && this._polygons.push(t[require]);
          if (this._polygons.length && this._polygons.length === t.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              gDesigner.addEventListener(r, this._settingChanged, this),
              this._updateProperties(true),
              true
            );
        }
        return false;
      }),
      (s.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          this._polygons.length > 0 &&
          this._polygons[0] === e.node &&
          this._updateProperties();
      }),
      (s.prototype._settingChanged = function (e) {
        "decimals_num" === e.key && this._updateProperties();
      }),
      (s.prototype._updateProperties = function (e) {
        var t = this._polygons[0],
          n = t.getProperty("or"),
          i = t.getProperty("ir"),
          GProperties = t.getProperty("pts"),
          r = (i / n) * 100,
          s = t.isPlainEdges(),
          l = t.getProperty("ocr");
        this._panel
          .find('.g-input-slider[data-property="pts"]')
          .gInputSlider("value", GProperties),
          this._panel
            .find('[type="text"][data-property="pts"]')
            .gInputBox("value", GProperties),
          this._panel
            .find('.g-input-slider[data-property="size"]')
            .gInputSlider("value", Math.round(r)),
          this._panel
            .find('[type="text"][data-property="size"]')
            .gInputBox("value", GCore.GUtil.formatNumber(r, 0)),
          this._advancedPanel
            .find('[data-property="corners-type"]')
            .gCornerTypePicker("value", t.getProperty("oct"));
        var c = t.getPointsMinDistance();
        s || (c /= 2), (l = Math.min(l, c));
        var d = c > 0 ? (l / c) * 100 : 0;
        this._panel
          .find('[data-property="corners-radius-slider"]')
          .gInputSlider("value", Math.round(d)),
          this._panel
            .find('[data-property="corners-radius"]')
            .val(
              this._document
                .getScene()
                .pointToString(
                  t.getProperty("ocr"),
                  this._document.getScene().getOptimalDecimalsCount()
                )
            ),
          e && s
            ? this._advancedPanel
                .find('input[data-property="edges"]')
                .prop("checked", true)
            : s ||
              this._advancedPanel
                .find('input[data-property="edges"]')
                .prop("checked", false),
          this._advancedPanel
            .find('input[data-property="csc"]')
            .prop("checked", !!t.getProperty("csc")),
          this._advancedPanel
            .find('button[data-property="oct"]')
            .gCornerTypePicker("value", t.getProperty("oct")),
          this._advancedPanel
            .find('button[data-property="ict"]')
            .gCornerTypePicker("value", t.getProperty("ict")),
          this._advancedPanel
            .find('input[data-property="ocr"]')
            .val(
              this._document
                .getScene()
                .pointToString(
                  t.getProperty("ocr"),
                  this._document.getScene().getOptimalDecimalsCount()
                )
            ),
          this._advancedPanel
            .find('input[data-property="icr"]')
            .val(
              this._document
                .getScene()
                .pointToString(
                  t.getProperty("icr"),
                  this._document.getScene().getOptimalDecimalsCount()
                )
            ),
          this._advancedPanel
            .find('input[data-property="or"]')
            .val(
              this._document
                .getScene()
                .pointToString(
                  t.getProperty("or"),
                  this._document.getScene().getOptimalDecimalsCount()
                )
            ),
          this._advancedPanel
            .find('input[data-property="ir"]')
            .val(
              this._document
                .getScene()
                .pointToString(
                  t.getProperty("ir"),
                  this._document.getScene().getOptimalDecimalsCount()
                )
            ),
          this._advancedPanel
            .find('input[data-property="oa"]')
            .val(
              GCore.GUtil.formatNumber(
                GCore.GMath.toDegrees(GCore.GMath.PI2 - t.getProperty("oa")),
                2
              )
            ),
          this._advancedPanel
            .find('input[data-property="ia"]')
            .val(
              GCore.GUtil.formatNumber(
                GCore.GMath.toDegrees(GCore.GMath.PI2 - t.getProperty("ia")),
                2
              )
            ),
          this._panel
            .find('[data-plain-edges="false"]')
            .css(
              "display",
              this._advancedPanel
                .find('input[data-property="edges"]')
                .prop("checked")
                ? "none"
                : ""
            );
      }),
      (s.prototype._assignCornersRadius = function (e, t, n) {
        t || this._document.getEditor().beginTransaction();
        var i = 0;
        try {
          for (var GProperties = 0; GProperties < this._polygons.length; ++GProperties) {
            var r = this._polygons[GProperties];
            if (r.isVisible()) {
              var s = e;
              if (!n) s = e * r.getPointsMinDistance();
              r.isPlainEdges()
                ? r.setProperties(["ocr"], [s], false, false, t)
                : (n || (s /= 2),
                  r.setProperties(["ocr", "icr"], [s, s], false, false, t)),
                0 === GProperties && (i = s);
            }
          }
        } finally {
          t ||
            this._document
              .getEditor()
              .commitTransaction(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "action.change-corners")
                )
              );
        }
        return i;
      }),
      (s.prototype._assignProperty = function (e, t, n) {
        this._assignProperties([e], [t], n);
      }),
      (s.prototype._assignProperties = function (e, t, n) {
        var GCore = this._document.getEditor();
        GCore.beginTransaction();
        try {
          for (var i = 0; i < this._polygons.length; ++i)
            this._polygons[i].setProperties(e, t);
        } finally {
          GCore.commitTransaction(n);
        }
      }),
      (s.prototype._assignSize = function (e, t) {
        t || this._document.getEditor().beginTransaction();
        try {
          for (var require = 0; require < this._polygons.length; ++require) {
            var i = this._polygons[require],
              GProperties = i.getProperty("or") * e;
            i.setProperty("ir", GProperties, false, false, t);
          }
        } finally {
          t ||
            this._document
              .getEditor()
              .commitTransaction(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GPolygonProperties",
                    "action.change-polygon-size"
                  )
                )
              );
        }
      }),
      (s.prototype._assignPoints = function (e, t) {
        t || this._document.getEditor().beginTransaction();
        try {
          for (var require = 0; require < this._polygons.length; ++require) {
            var i = this._polygons[require],
              GProperties = i.isPlainEdges(),
              r = Math.PI / e,
              s = GCore.GMath.normalizeAngleRadians(i.getProperty("oa") + r);
            if (GProperties) {
              var l = i.getProperty("or") * Math.cos(r);
              i.setProperties(["pts", "ia", "ir"], [e, s, l], false, false, t);
            } else i.setProperties(["pts", "ia"], [e, s], false, false, t);
          }
        } finally {
          t ||
            this._document
              .getEditor()
              .commitTransaction(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GPolygonProperties",
                    "action.change-polygon-points"
                  )
                )
              );
        }
      }),
      (s.prototype._assignEdges = function (e, t) {
        if (e) {
          t || this._document.getEditor().beginTransaction();
          try {
            for (var require = 0; require < this._polygons.length; ++require) {
              var i = this._polygons[require],
                GProperties = i.getProperty("or"),
                r = i.getProperty("pts"),
                s = i.getProperty("oa"),
                l = Math.PI / r,
                c = s + l,
                d = GProperties * Math.cos(l);
              i.setProperties(["ir", "ia"], [d, c], false, false, t);
            }
          } finally {
            t ||
              this._document
                .getEditor()
                .commitTransaction(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GPolygonProperties",
                      "action.change-polygon-size"
                    )
                  )
                );
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GPolygonProperties]";
      }),
      (exports.exports = s);
  }