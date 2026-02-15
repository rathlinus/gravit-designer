/**
 * Webpack Module #1271
 * Type: class
 * Name: GRectangleProperties
 */

function (exports, module, require) {
    "use strict";
    require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* module */,
      GTools = require(53) /* module */,
      a = require(67) /* GRichTooltipConfig */,
      GProperties = require(123) /* GProperties */,
      s = (require(173) /* stub_requires_1 */, require(135) /* GSettingChangedEvent */);
    function l() {
      this._rectangles = [];
    }
    GCore.GObject.inherit(l, GProperties),
      (l.prototype._panel = null),
      (l.prototype._advancedPanel = null),
      (l.prototype._document = null),
      (l.prototype._rectangles = null),
      (l.prototype.isGroup = function (e) {
        return true;
      }),
      (l.prototype.init = function (e, t) {
        this._panel = e;
        var n = this,
          GProperties = function (e) {
            if ("uf" === e)
              return $("<input>")
                .addClass("uf-checkbox")
                .attr("type", "checkbox")
                .attr("data-property", e)
                .on("change", function () {
                  gDesigner.stats(
                    "rectangleproperties_toggle_uniform",
                    $(this).is(":checked") ? "enabled" : "disabled"
                  ),
                    n._assignProperty(e, $(this).is(":checked")),
                    n._updateProperties();
                });
            if ("csc" === e)
              return $("<input>")
                .addClass("csc-checkbox")
                .attr("type", "checkbox")
                .attr("data-property", e)
                .on("change", function () {
                  gDesigner.stats(
                    "rectangleproperties_toggle_scale-corners",
                    $(this).is(":checked") ? "enabled" : "disabled"
                  ),
                    n._assignProperty(e, $(this).is(":checked"));
                });
            if (
              "tl_sx" === e ||
              "tl_sy" === e ||
              "tr_sx" === e ||
              "tr_sy" === e ||
              "bl_sx" === e ||
              "bl_sy" === e ||
              "br_sx" === e ||
              "br_sy" === e
            ) {
              var t = "";
              return (
                ("tl_sy" !== e &&
                  "tr_sy" !== e &&
                  "bl_sy" !== e &&
                  "br_sy" !== e) ||
                  (t = "sy-input"),
                $("<input>")
                  .addClass("corner-input")
                  .addClass(t)
                  .attr("type", "text")
                  .attr("data-property", e)
                  .on("change", function () {
                    gDesigner.stats(
                      "rectangleproperties_scale_individual-corners"
                    );
                    var t = n._document.getScene().stringToPoint($(this).val());
                    null !== t && "number" == typeof t && t >= 0
                      ? n._assignProperty(e, t)
                      : n._updateProperties();
                  })
                  .gInputBox()
              );
            }
            if (
              "tl_ct" === e ||
              "tr_ct" === e ||
              "bl_ct" === e ||
              "br_ct" === e
            ) {
              var GProperties = 0,
                s = "right";
              return (
                "tl_ct" === e
                  ? ((GProperties = 270), (s = "left"))
                  : "bl_ct" === e
                  ? ((GProperties = 180), (s = "left"))
                  : "br_ct" === e && (GProperties = 90),
                $("<button></button>")
                  .addClass("g-flat")
                  .addClass(s)
                  .attr("data-property", e)
                  .css("width", "32px")
                  .gCornerTypePicker({ rotate: GProperties })
                  .on("cornertypechange", function (t, GCore) {
                    n._assignProperty(e, GCore);
                  })
              );
            }
            if (
              "tl_uf" === e ||
              "tr_uf" === e ||
              "bl_uf" === e ||
              "br_uf" === e
            ) {
              var l = "uf-right";
              return (
                ("tl_uf" !== e && "bl_uf" !== e) || (l = "uf-left"),
                $("<button></button>")
                  .addClass("g-flat")
                  .addClass("uf-btn")
                  .addClass(l)
                  .attr("data-property", e)
                  .on("click", function () {
                    gDesigner.stats(
                      "rectangleproperties_toggle_individual-uniform-corners"
                    ),
                      n._assignProperty(e, !$(this).hasClass("g-active")),
                      n._updateProperties();
                  })
                  .append($("<span></span>").addClass("gravit-icon-lock"))
              );
            }
            if ("corners-type" !== e) {
              if ("corners-radius-slider" === e)
                return $("<div/>")
                  .attr("data-property", "corners-radius")
                  .gInputSlider({
                    min: 0,
                    max: 100,
                    richTooltipConfig: a.GRichTooltipConfig.from({
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
                      learnMore:
                        "",
                    }),
                  })
                  .on("mousedown", function () {
                    n._document.getEditor().hideSelection(),
                      $(document).one("mouseup", function () {
                        n._document.getEditor().resetHideSelection();
                      });
                  })
                  .on("input", function () {
                    var e = n._assignCorners(
                        parseInt($(this).gInputSlider("value")) / 100,
                        undefined,
                        true
                      ),
                      t = n._document.getScene().getProperty("ut"),
                      a =
                        (t == GCore.GLength.Unit.PX || t == GCore.GLength.Unit.PT) &&
                        GTools.GGuides.options.guides &&
                        GTools.GGuides.options.guides.indexOf(
                          GTools.GFullPixelsGuide.ID
                        ) >= 0
                          ? 0
                          : n._document.getScene().getOptimalDecimalsCount();
                    n._panel
                      .find('[type="text"][data-property="corners-radius"]')
                      .val(n._document.getScene().pointToString(e, a));
                  })
                  .on("change", function () {
                    gDesigner.stats("rectangleproperties_input_corners-radius"),
                      n._assignCorners(
                        parseInt($(this).gInputSlider("value")) / 100,
                        undefined,
                        false
                      );
                  });
              if ("corners-radius-input" === e)
                return $("<input>")
                  .attr("type", "text")
                  .attr("data-property", "corners-radius")
                  .addClass("corner-radius")
                  .on("change", function () {
                    gDesigner.stats("rectangleproperties_slide_corners-radius");
                    var e = n._document
                      .getScene()
                      .stringToPoint($(this).gInputBox("value"));
                    null !== e && "number" == typeof e && e >= 0
                      ? n._assignProperties(["uf", "tl_sx"], [true, e])
                      : n._updateProperties();
                  })
                  .gInputBox({ minValue: 0 });
              throw new Error("Unknown input property: " + e);
            }
          }.bind(this),
          s = GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GRectangleProperties",
              "text.uniform-corner-smoothness"
            )
          ),
          l = GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GRectangleProperties",
              "text.horizontal-corner-smoothness"
            )
          ),
          c = GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GRectangleProperties",
              "text.vertical-corner-smoothness"
            )
          ),
          d = GCore.GLocale.get(
            new GCore.GLocaleKey("GRectangleProperties", "text.corner-type")
          );
        (this._advancedPanel = $("<div></div>")
          .addClass("advanced-panel-wrapper")
          .addClass("rectangle-properties")
          .gOverlay({ releaseOnClose: false, clazz: "advanced-overlay" })
          .append(
            $("<div/>")
              .css("margin-bottom", "10px")
              .attr("data-property", "corners-type")
              .addClass("corner-type")
              .gCornerTypePicker({ notOverlay: true })
              .on("cornertypechange", function (e, t) {
                n._assignCorners(undefined, t);
              })
          )
          .append(
            $("<label></label>")
              .addClass("g-checkbox-label")
              .append(GProperties("csc"))
              .append(
                $("<span></span>").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.autoscale-corners")
                  )
                )
              )
          )
          .append(
            $("<label></label>")
              .addClass("g-checkbox-label")
              .append(GProperties("uf"))
              .append(
                $("<span></span>").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GRectangleProperties",
                      "text.uniform-corners"
                    )
                  )
                )
              )
          )
          .append(
            $("<div></div>")
              .addClass("corners-panel")
              .append(
                $("<div></div>")
                  .addClass("corners-item-row with-padding")
                  .append(GProperties("tl_ct").attr("data-title", s))
                  .append(GProperties("tl_sx").attr("data-title", l))
                  .append(GProperties("tr_sx").attr("data-title", l))
                  .append(GProperties("tr_ct").attr("data-title", s))
              )
              .append(
                $("<div></div>")
                  .addClass("corners-item-row with-padding")
                  .append(GProperties("tl_sy").attr("data-title", c))
                  .append(GProperties("tl_uf").attr("data-title", d))
                  .append(GProperties("tr_uf").attr("data-title", d))
                  .append(GProperties("tr_sy").attr("data-title", c))
              )
              .append(
                $("<div></div>")
                  .addClass("corners-item-row with-padding")
                  .append(GProperties("bl_sy").attr("data-title", c))
                  .append(GProperties("bl_uf").attr("data-title", d))
                  .append(GProperties("br_uf").attr("data-title", d))
                  .append(GProperties("br_sy").attr("data-title", c))
              )
              .append(
                $("<div></div>")
                  .addClass("corners-item-row with-padding")
                  .append(GProperties("bl_ct").attr("data-title", s))
                  .append(GProperties("bl_sx").attr("data-title", l))
                  .append(GProperties("br_sx").attr("data-title", l))
                  .append(GProperties("br_ct").attr("data-title", s))
              )
          )),
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
                        gDesigner.stats("rectangleproperties_open_advanced"),
                          this._advancedPanel.gOverlay(
                            "open",
                            $(e.target).closest(".g-button")
                          ),
                          gDesigner.isTouchEnabled()
                            ? (this._advancedPanel
                                .find(".uf-checkbox")
                                .gCheckboxSlider(),
                              this._advancedPanel
                                .find(".csc-checkbox")
                                .gCheckboxSlider())
                            : (this._advancedPanel
                                .find(".uf-checkbox")
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
            .appendTo(this._panel);
      }),
      (l.prototype.update = function (e, t) {
        if (
          (this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange
              ),
            gDesigner.removeEventListener(s, this._settingChanged),
            (this._document = null)),
          (this._rectangles = []),
          e)
        ) {
          for (var require = 0; require < t.length; ++require)
            t[require] instanceof GCore.GRectangle && this._rectangles.push(t[require]);
          if (this._rectangles.length && this._rectangles.length === t.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              gDesigner.addEventListener(s, this._settingChanged, this),
              this._updateProperties(),
              true
            );
        }
        return false;
      }),
      (l.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          this._rectangles.length > 0 &&
          this._rectangles[0] === e.node &&
          this._updateProperties();
      }),
      (l.prototype._settingChanged = function (e) {
        "decimals_num" === e.key && this._updateProperties();
      }),
      (l.prototype._updateProperties = function () {
        var e = this._rectangles[0],
          t = e.getProperty("tl_sx"),
          n = e.getGeometryBBox(),
          a = this._panel.find(
            '.g-input-slider[data-property="corners-radius"]'
          ),
          GProperties = this._panel.find(
            'input[type="text"][data-property="corners-radius"]'
          ),
          s = this._advancedPanel.find('[data-property="corners-type"]'),
          l = null === n;
        if (
          (a.prop("disabled", l),
          GProperties.prop("disabled", l),
          this._panel.find("button").prop("disabled", l),
          l)
        )
          s.addClass("g-disabled");
        else {
          s.removeClass("g-disabled");
          var c = (t / (e.getPointsMinDistance() / 2)) * 100,
            d = this._document.getScene().getProperty("ut"),
            u =
              (d == GCore.GLength.Unit.PX || d == GCore.GLength.Unit.PT) &&
              GTools.GGuides.options.guides &&
              GTools.GGuides.options.guides.indexOf(GTools.GFullPixelsGuide.ID) >= 0
                ? 0
                : this._document.getScene().getOptimalDecimalsCount();
          a.gInputSlider("value", Math.round(c)),
            GProperties.gInputBox("value", this._document.getScene().pointToString(t, u)),
            s.gCornerTypePicker("value", e.getProperty("tl_ct")),
            this._advancedPanel
              .find('input[data-property="csc"]')
              .prop("disabled", l || e instanceof GCore.GImage)
              .prop("checked", !!e.getProperty("csc"));
          var p = e.getProperty("uf");
          if (
            (this._advancedPanel
              .find('input[data-property="uf"]')
              .prop("checked", p),
            p)
          )
            this._advancedPanel.find(".corners-panel").css("display", "none");
          else
            this._advancedPanel.find(".corners-panel").css("display", ""),
              function (t) {
                for (var n = 0; n < t.length; ++n) {
                  var GCore = t[n],
                    GTools = this._advancedPanel.find(
                      'button[data-property="' + GCore + '_uf"]'
                    ),
                    a = this._advancedPanel.find(
                      'input[data-property="' + GCore + '_sx"]'
                    ),
                    GProperties = this._advancedPanel.find(
                      'input[data-property="' + GCore + '_sy"]'
                    ),
                    s = this._advancedPanel.find(
                      'button[data-property="' + GCore + '_ct"]'
                    );
                  a.val(
                    this._document
                      .getScene()
                      .pointToString(e.getProperty(GCore + "_sx"), u)
                  ),
                    GProperties.val(
                      this._document
                        .getScene()
                        .pointToString(e.getProperty(GCore + "_sy"), u)
                    ),
                    e.getProperty(GCore + "_uf")
                      ? (GTools.addClass("g-active"), GProperties.prop("disabled", true))
                      : (GTools.removeClass("g-active"), GProperties.prop("disabled", false)),
                    GTools.prop("disabled", p),
                    s.gCornerTypePicker("value", e.getProperty(GCore + "_ct"));
                }
              }.bind(this)(["tl", "tr", "bl", "br"]);
        }
      }),
      (l.prototype._assignCorners = function (e, t, n) {
        n || this._document.getEditor().beginTransaction();
        var GTools = 0;
        try {
          for (var a = 0; a < this._rectangles.length; ++a)
            if (this._rectangles[a].isVisible()) {
              var GProperties = this._rectangles[a].getProperty("tl_sx"),
                s = this._rectangles[a].getProperty("tl_ct");
              if (
                (0 === GProperties &&
                  "string" == typeof t &&
                  "number" != typeof e &&
                  (e = 0.25),
                "number" == typeof e)
              ) {
                this._rectangles[a].getGeometryBBox();
                GProperties = e * (this._rectangles[a].getPointsMinDistance() / 2);
              }
              "string" == typeof t && (s = t),
                0 === a && (GTools = GProperties),
                this._rectangles[a].setProperties(
                  ["uf", "tl_sx", "tl_ct"],
                  [true, GProperties, s],
                  false,
                  false,
                  n
                );
            }
        } finally {
          n ||
            this._document
              .getEditor()
              .commitTransaction(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "action.change-corners")
                )
              );
        }
        return GTools;
      }),
      (l.prototype._assignProperty = function (e, t) {
        this._assignProperties([e], [t]);
      }),
      (l.prototype._assignProperties = function (e, t) {
        var n = this._document.getEditor();
        n.beginTransaction();
        try {
          for (var GTools = 0; GTools < this._rectangles.length; ++GTools)
            this._rectangles[GTools].setProperties(e, t);
        } finally {
          n.commitTransaction(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GRectangleProperties",
                "action.modify-rectangle-properties"
              )
            )
          );
        }
      }),
      (l.prototype.toString = function () {
        return "[Object GRectangleProperties]";
      }),
      (exports.exports = l);
  }