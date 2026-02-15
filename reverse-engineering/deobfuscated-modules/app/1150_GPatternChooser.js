/**
 * Webpack Module #1150
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(193) /* polyfill_Object_keys */,
      require(57) /* polyfill_parseInt */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(34) /* polyfill_String_replace */,
      require(134) /* polyfill_String_startsWith */,
      require(4) /* stub_requires_668 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      GSwatchesChangedEvent = require(1151) /* GSwatchesChangedEvent */,
      GInputSliderWidget = require(857) /* GInputSliderWidget */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function u() {
      this.initLayout(),
        this._container.gOverlay({ releaseOnClose: false, padding: false });
    }
    (u.ColorMode = { RGB: "rgb", HSV: "hsv", CMYK: "cmyk" }),
      (u._ColorModeToFrameworkColorMode = {
        [u.ColorMode.RGB]: GCore.GColor.ColorModes.RGB,
        [u.ColorMode.HSV]: GCore.GColor.ColorModes.HSB,
        [u.ColorMode.CMYK]: GCore.GColor.ColorModes.CMYK,
      }),
      (u.ColorModeLabel = { RGB: "RGB", HSV: "HSB", CMYK: "CMYK" }),
      (u.ColorModelFree = { RGB: true }),
      (u.ExtendedGamut = { COMPONENTS: "cp", COLOR_SLIDER: "cs", MAP: "map" }),
      (u.canDragSwatch = false),
      (u.dragSwatch = null),
      (u.dragDeltaX = 0),
      (u.dragDeltaY = 0),
      (u.hasDropped = false),
      (u.EXTEND_DRAG_RANGE = 50),
      GCore.GObject.inheritAndMix(u, GCore.GObject),
      (u.enableFileTypes = [
        { ext: "png", mime: "image/png" },
        { ext: "jpg", mime: "image/jpeg" },
        { ext: "jpeg", mime: "image/jpeg" },
        { ext: "gif", mime: "image/gif" },
      ]),
      (u.prototype._container = null),
      (u.prototype._toolbar = null),
      (u.prototype._settingsMenu = null),
      (u.prototype._rgbModeItem = null),
      (u.prototype._hsvModeItem = null),
      (u.prototype._cmykModeItem = null),
      (u.prototype._gradientEditor = null),
      (u.prototype._gradientActions = null),
      (u.prototype._colorEditor = null),
      (u.prototype._patternEditor = null),
      (u.prototype._noiseEditor = null),
      (u.prototype._colorMap = null),
      (u.prototype._colorSlider = null),
      (u.prototype._colorComponents = null),
      (u.prototype._systemColorInput = null),
      (u.prototype._colorPreview = null),
      (u.prototype._colorPreviewOld = null),
      (u.prototype._colorPreviewNew = null),
      (u.prototype._opacitySlider = null),
      (u.prototype._palettes = null),
      (u.prototype._activePalette = null),
      (u.prototype._swatchesScope = "user"),
      (u.prototype._colorMode = null),
      (u.prototype._oldColor = GCore.GRGBColor.BLACK),
      (u.prototype._color = GCore.GRGBColor.BLACK),
      (u.prototype._oldColorOpacity = 100),
      (u.prototype._colorOpacity = 100),
      (u.prototype._activeGradientStop = null),
      (u.prototype._activeGradient = null),
      (u.prototype._pattern = null),
      (u.prototype._patternUpdateBlocker = false),
      (u.prototype._texture = null),
      (u.prototype._opacity = null),
      (u.prototype._settings = null),
      (u.prototype._isVisible = false),
      (u.prototype._extendedGamutInitiated = null),
      (u.prototype._sliderColorThumb = null),
      (u.prototype._sliderOpacityThumb = null),
      (u.prototype._extValue = null),
      (u.prototype.getPattern = function () {
        return this._pattern;
      }),
      (u.prototype.setPattern = function (e) {
        this._updatePattern(e, "set_pattern");
      }),
      (u.prototype.getOpacity = function () {
        return this._opacity;
      }),
      (u.prototype.setOpacity = function (e) {
        this._updateOpacity(e, "set_opacity");
      }),
      (u.prototype.initLayout = function () {
        (this._container = $("<div/>")
          .addClass("pattern-chooser")
          .on(
            "close",
            function (e, t, n) {
              if (
                this._settings &&
                this._settings.onClose &&
                this._settings.onClose(this._pattern, this._opacity, t, n)
              ) {
                var GCore = gDesigner.getActiveDocument();
                GCore &&
                  (GCore
                    .getEditor()
                    .removeEventListener(
                      GTools.GEditor.ModifiedEvent,
                      this._closeIfNeeded,
                      this
                    ),
                  GCore.getEditor().keysOn([GEditor.GKey.Constant.OPTION])),
                  gDesigner.getWorkspace().getStyleEdManager() &&
                    gDesigner
                      .getWorkspace()
                      .getStyleEdManager()
                      .isActivated() &&
                    gDesigner
                      .getWorkspace()
                      .getStyleEdManager()
                      .removeEventListener(
                        GTools.GStyleEdManager.EditorEvent,
                        this._styleEditorHandler,
                        this
                      );
              }
            }.bind(this)
          )),
          (this._toolbar = $("<div/>")
            .addClass("toolbar")
            .appendTo(this._container)),
          u.PATTERN_TYPES || (u.PATTERN_TYPES = u.initPatternType());
        var e = u.PATTERN_TYPES.map(u._createPatternOption);
        this._toolbar.append(
          $("<select></select>")
            .addClass("pattern-type-select")
            .append(e)
            .on("change", (e) => {
              var t = $(e.target).children("option:selected").data("type"),
                n = $(".colormode-selector")
                  .children("option:selected")
                  .data("colormode"),
                GTools = t.createDefault(this._pattern);
              null === GTools
                ? gDesigner.stats("patternchooser_change_type", "transparent")
                : GTools instanceof GCore.GBackground
                ? gDesigner.stats("patternchooser_change_type", "background")
                : GTools instanceof GCore.GTexturePattern
                ? gDesigner.stats("patternchooser_change_type", "texture")
                : GTools instanceof GCore.GNoisePattern
                ? gDesigner.stats("patternchooser_change_type", "noise")
                : GTools instanceof GCore.GRadialGradient
                ? gDesigner.stats(
                    "patternchooser_change_type",
                    "radialgradient"
                  )
                : GTools instanceof GCore.GLinearGradient
                ? gDesigner.stats(
                    "patternchooser_change_type",
                    "lineargradient"
                  )
                : GTools instanceof GCore.GAngularGradient
                ? gDesigner.stats(
                    "patternchooser_change_type",
                    "angulargradient"
                  )
                : GTools instanceof GCore.GColor &&
                  gDesigner.stats("patternchooser_change_type", "color"),
                this._updateOpacity(1),
                this._updatePattern(GTools, "set_type"),
                this._updateSwatchesPalette(
                  this._getSwatchScope("global", this._pattern)
                ),
                this._updateSwatchesPalette(
                  this._getSwatchScope("document", this._pattern)
                ),
                this.setColorMode(n),
                this._updateActiveGradient();
            })
        );
        var t = $("<select></select>").addClass("colormode-selector");
        Array.prototype.forEach.call(Object.keys(u.ColorMode), function (e) {
          $("<option></option>")
            .addClass("color-mode")
            .data("colormode", u.ColorMode[e])
            .text(u.ColorModeLabel[e])
            .appendTo(t)
            .gPro({ pro: !u.ColorModelFree[e], feature: e.toLowerCase() });
        }),
          t
            .on(
              "change",
              CollaborationMergeUtils.watchDog.trap(
                (e) => {
                  var t = $(e.target)
                    .children("option:selected")
                    .data("colormode");
                  u.ColorModelFree[(t || "").toUpperCase()]
                    ? gDesigner.stats("patternchooser_change_colormode", t)
                    : gDesigner.stats("patternchooser_change_procolormode", t);
                  var n =
                      gDesigner.getActiveDocument().getColorModeElms() || [],
                    GTools = gDesigner
                      .getActiveDocument()
                      .getEditor()
                      .getIndividualSelection();
                  GTools &&
                    (n.push(GTools[0]),
                    gDesigner.getActiveDocument().setColorModeElms(n)),
                    this.setColorMode(t),
                    this._updateActiveGradient();
                },
                (e) => {
                  var t = (
                    $(e.target).children("option:selected").data("colormode") ||
                    ""
                  ).toUpperCase();
                  return (
                    !!gDesigner.isEnabledProFeatures(t.toLowerCase()) ||
                    !!u.ColorModelFree[t]
                  );
                },
                (e) => {
                  var t = $(e.target)
                    .children("option:selected")
                    .data("colormode");
                  this.setColorMode(this._colorMode, true),
                    gDesigner.stats(
                      "patternchooser_nonprotriespro_procolormode",
                      t
                    );
                }
              )
            )
            .appendTo(this._toolbar),
          (this._gradientEditor = $("<div/>")
            .addClass("gradient-editor")
            .append($("<div/>").addClass("stops"))
            .on(
              "mousedown",
              function (e) {
                var t = this._gradientEditor.offset(),
                  n = e.pageX - t.left,
                  GTools = {
                    position: n / this._gradientEditor.outerWidth(),
                    color: this._defineStopInitColor(n),
                    opacity: 1,
                  };
                this._activeGradient.getStops().push(GTools);
                var GCore = this._insertGradientStop(GTools);
                this._setActiveGradientStop(GTools),
                  this._updatePatternFromActiveGradient(),
                  this._updateOnlineEditorStops(),
                  GCore.trigger("mousedown");
              }.bind(this)
            )
            .appendTo(this._container)),
          (this._patternEditor = this._createPatternEditor().appendTo(
            this._container
          )),
          (this._noiseEditor = this._createNoiseEditor().appendTo(
            this._container
          )),
          (this._colorEditor = $("<div/>")
            .addClass("color-editor")
            .appendTo(this._container)),
          (this._systemColorInput = $("<input>")
            .attr("type", "color")
            .css({ position: "absolute", visibility: "hidden" })
            .on(
              "change",
              function (e) {
                this._updateColor(GCore.GRGBColor.fromCSSColor($(e.target).val()));
              }.bind(this)
            )
            .appendTo(this._colorEditor)),
          (this._colorMap = $("<div/>")
            .addClass("color-map")
            .append($("<canvas></canvas>"))
            .append(
              $("<div/>")
                .addClass("overlay")
                .on("mousedown touchstart", this._colorMapMouseDown.bind(this))
                .on("mousemove", function (e) {
                  e.originalEvent.isTrusted &&
                    (e.preventDefault(), e.stopPropagation());
                })
            )
            .append($("<div/>").addClass("marker"))
            .appendTo(this._colorEditor));
        var n = $("<div/>")
          .addClass("color-details")
          .appendTo(this._colorEditor);
        $("<div/>")
          .addClass("color-eyedropper g-flat eye-drop")
          .gEyeDropper()
          .on(
            "colorchange",
            function (e, t) {
              this._updateColor(new GCore.GRGBColor(t)),
                this._updateOpacity(t[3] / 255, "eyedropper");
            }.bind(this)
          )
          .appendTo(n);
        var GRichTooltipConfig = $("<div/>").addClass("color-sliders").appendTo(n);
        (this._colorSlider = $("<div>")
          .gColorSlider()
          .css("box-sizing", "border-box")
          .on(
            "input",
            function () {
              this._updateColorFromColorSlider(true);
            }.bind(this)
          )
          .on(
            "change",
            function () {
              gDesigner.stats("patternchooser_change_color-from-colorslider"),
                this._updateColorFromColorSlider();
            }.bind(this)
          )
          .appendTo(GRichTooltipConfig)),
          (this._opacitySlider = $("<div/>")
            .gInputSlider(GInputSliderWidget.prototype.OPACITY_DEFAULT)
            .css("box-sizing", "border-box")
            .on(
              "input",
              function (e) {
                this._updateOpacity(
                  $(e.target).gInputSlider("value") / 100,
                  "slider",
                  true
                );
              }.bind(this)
            )
            .on(
              "change",
              function (e) {
                gDesigner.stats("patternchooser_change_opacity"),
                  this._updateOpacity(
                    $(e.target).gInputSlider("value") / 100,
                    "slider",
                    false,
                    true
                  );
              }.bind(this)
            )
            .appendTo(GRichTooltipConfig)),
          (this._sliderColorThumb = $(this._colorSlider)
            .find(".g-input-slider-thumb")
            .css("box-sizing", "border-box")),
          (this._sliderOpacityThumb = $(this._opacitySlider)
            .find(".g-input-slider-thumb")
            .css("box-sizing", "border-box"));
        var GSwatchesChangedEvent = $("<div/>").addClass("color-preview-container").appendTo(n);
        (this._colorPreview = $("<div/>")
          .addClass("color-preview")
          .css("background", GCore.GPattern.asCSSBackground(null, 0))
          .appendTo(GSwatchesChangedEvent)),
          (this._colorPreviewOld = $("<div/>")
            .addClass("color-preview-old")
            .appendTo(this._colorPreview)),
          (this._colorPreviewNew = $("<div/>")
            .addClass("color-preview-new")
            .appendTo(this._colorPreview)),
          $("<div/>")
            .addClass("color-preview-overlay")
            .appendTo(this._colorPreview),
          (this._colorComponents = $("<div/>")
            .addClass("color-components")
            .appendTo(this._colorEditor)),
          (this._gradientActions = $("<div/>")
            .addClass("gradient-actions")
            .append(
              $("<button />")
                .addClass("g-flat")
                .attr("data-action", "exchange")
                .attr(
                  "data-title",
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GPatternChooser",
                      "action.change-stops-order"
                    )
                  )
                )
                .on(
                  "click",
                  function () {
                    gDesigner.stats("patternchooser_change_stops-order");
                    for (
                      var e = this._activeGradient.getStops(), t = 0;
                      t < e.length;
                      ++t
                    )
                      (e[t].position = 1 - e[t].position),
                        this._updateGradientStop(e[t]);
                    this._updatePatternFromActiveGradient();
                  }.bind(this)
                )
                .append($("<span />").addClass("gravit-icon-exchange"))
            )
            .append(
              $("<div/>")
                .addClass("g-flat")
                .css("float", "right")
                .append(
                  $("<button />")
                    .addClass("g-flat")
                    .attr("data-action", "rotate-left")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GPatternChooser",
                          "action.rotate-gradient-left"
                        )
                      )
                    )
                    .on(
                      "click",
                      function () {
                        gDesigner.stats(
                          "patternchooser_rotate_gradient",
                          "left"
                        ),
                          this._rotateActiveGradient(-45);
                      }.bind(this)
                    )
                    .append($("<span />").addClass("gravit-icon-rotate-left"))
                )
                .append(
                  $("<button />")
                    .addClass("g-flat")
                    .attr("data-action", "rotate-right")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GPatternChooser",
                          "action.rotate-gradient-right"
                        )
                      )
                    )
                    .on(
                      "click",
                      function () {
                        gDesigner.stats(
                          "patternchooser_rotate_gradient",
                          "right"
                        ),
                          this._rotateActiveGradient(45);
                      }.bind(this)
                    )
                    .append($("<span />").addClass("gravit-icon-rotate-right"))
                )
            )
            .appendTo(this._container)),
          (this._palettes = $("<div/>")
            .addClass("palettes")
            .appendTo(this._container));
        var GSystemDialog = function (e) {
          var t = $(e.target).closest("[data-palette]").attr("data-palette");
          gDesigner.stats("patternchooser_activate_palette", t),
            this._activatePalette(t);
        }.bind(this);
        this._createChoosers(GSystemDialog).appendTo(this._palettes),
          this._createColorsPalette(
            $("<div/>")
              .attr("data-palette", "colors")
              .addClass("palette colors-palette")
              .appendTo(this._palettes)
          ),
          this._createMixerPalette(
            $("<div/>")
              .attr("data-palette", "mixer")
              .addClass("palette mixer-palette")
              .appendTo(this._palettes)
          ),
          $("<div/>")
            .attr("data-palette", "used")
            .addClass("palette used-palette")
            .appendTo(this._palettes);
        var p = $("<div/>")
          .attr("data-palette", "swatches")
          .addClass("palette swatches-palette global")
          .appendTo(this._palettes);
        const g = this._palettes
          .find(".chooser")
          .find("button[data-palette=swatches]")
          .hasClass("trial")
          ? " trial"
          : "";
        this._createSwatchesPalette(p, "global" + g),
          this._createSwatchesPalette(
            $("<div/>")
              .attr("data-palette", "swatches")
              .addClass("palette swatches-palette document")
              .appendTo(this._palettes),
            "document"
          ),
          (this._swatchesScope = this._getSwatchScope("global", this._pattern)),
          this._activatePalette("colors"),
          this._container.find("button").each(function (e, t) {
            $(t).on("mousedown", function (e) {
              e.preventDefault();
            });
          }),
          this.setColorMode(u.ColorMode.RGB);
      }),
      (u.prototype._createChoosers = function (e) {
        return $("<div/>")
          .addClass("chooser")
          .append(
            $("<button />")
              .attr("data-palette", "colors")
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.colors"))
              )
              .on("click", e)
          )
          .append(
            $("<button />")
              .gPro({ feature: "swatches" })
              .attr("data-palette", "swatches")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GPatternChooser", "text.swatches")
                )
              )
              .on(
                "click",
                CollaborationMergeUtils.watchDog.trap(
                  e,
                  null,
                  () =>
                    gDesigner.stats(
                      "patternchooser_nonprotriespro_palette",
                      "swatches"
                    ),
                  "swatches"
                )
              )
          )
          .append(
            $("<button />")
              .attr("data-palette", "used")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GPatternChooser", "text.in-use")
                )
              )
              .on("click", e)
          )
          .append(
            $("<button />")
              .attr("data-palette", "mixer")
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey("GPatternChooser", "text.mixer"))
              )
              .on("click", e)
          );
      }),
      (u.prototype.__getColorModeParams = function () {
        return {
          hexWidth: "27%",
          isTouchEnabled: false,
          rgbWidth: "15%",
          cmykWidth: "18%",
        };
      }),
      (u.prototype._updateActiveGradient = function () {
        if (this._activeGradient) {
          const e = this._activeGradient.getStops();
          if (e && e.length) {
            const t =
              u._ColorModeToFrameworkColorMode[this._colorMode] ||
              GCore.GColor.ColorModes.RGB;
            e.forEach((e) => {
              const require = GCore.GColorHelper.convertColor(e.color, t);
              require && (e.color = require), this._updateGradientStop(e);
            }),
              this._updatePatternFromActiveGradient();
          }
        }
      }),
      (u.prototype.setColorMode = function (e, t) {
        var n = this.__getColorModeParams();
        if (e !== this._colorMode || t) {
          this._colorMode = e;
          var GTools = null;
          if (
            (this._toolbar.find(".color-mode").each((t, n) => {
              var GTools = $(n),
                GCore = GTools.data("colormode");
              GCore && GTools.prop("selected", e === GCore);
            }),
            this._colorComponents.empty(),
            this._colorMode === u.ColorMode.RGB ||
              this._colorMode === u.ColorMode.HSV)
          ) {
            this._colorMap.css("display", ""),
              this._colorSlider.css("display", ""),
              this._colorEditor.toggleClass("cmyk-mode", false),
              this._opacitySlider.toggleClass("cmyk-mode", false),
              $("<label />")
                .css("width", n.hexWidth)
                .attr("data-css", "")
                .append(
                  $("<input>")
                    .attr("type", "text")
                    .attr("data-long-press-delay", "500")
                    .gInputBox({
                      keyIncrement: false,
                      wheelIncrement: false,
                      mousemoveIncrement: false,
                    })
                    .on("long-press", (e) => {
                      n.isTouchEnabled &&
                        ((this._currentLongPressTarget = e.target),
                        this._contextMenu.open(e.target));
                    })
                    .on(
                      "change",
                      function (t) {
                        var n = GCore.GRGBColor.fromCSSColor($(t.target).val());
                        n || (n = this._color),
                          e === u.ColorMode.HSV &&
                            (n = new GCore.GHSVColor(
                              GCore.GColor.rgbToHSV(n.getValue())
                            )),
                          gDesigner.stats("patternchooser_update_color", e),
                          this._updateColor(n, null, false, true);
                      }.bind(this)
                    )
                    .on("paste keydown keyup", (e) => {
                      var t = $(e.target),
                        n = e.target,
                        GTools = t.val();
                      if ("keydown" === e.type) {
                        var GCore = /[0-9a-z\u017F\u212A]/i.test(
                          String.fromCharCode(e.keyCode || e.charCode)
                        );
                        if (
                          GTools.length >= 7 &&
                          GCore &&
                          n.selectionStart === n.selectionEnd
                        )
                          return false;
                      }
                      GTools.startsWith("#") || ((GTools = "#" + GTools), t.val(GTools));
                      var GEditor = /^#[0-9A-Za-z]{0,6}/.exec(GTools);
                      GEditor && GEditor[0] && GTools !== GEditor[0] && t.val(GEditor[0]);
                    })
                )
                .append(
                  $("<span />").text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPatternChooser", "text.hex")
                    )
                  )
                )
                .appendTo(this._colorComponents),
              n.isTouchEnabled &&
                $("<div/>").css("width", "11%").appendTo(this._colorComponents);
            var GEditor =
              this._colorMode === u.ColorMode.RGB
                ? ["R", "G", "B"]
                : ["H", "S", "B"];
            Array.prototype.forEach.call(
              GEditor,
              function (e, t) {
                var GTools = 0;
                switch (e) {
                  case "R":
                  case "G":
                  case "B":
                    this._colorMode === u.ColorMode.RGB
                      ? (GTools = 255)
                      : this._colorMode === u.ColorMode.HSV && (GTools = 100);
                    break;
                  case "H":
                    GTools = 360;
                    break;
                  case "S":
                    GTools = 100;
                }
                $("<label />")
                  .css("width", n.rgbWidth)
                  .attr("data-component-index", t)
                  .append(
                    $("<input>")
                      .attr("type", "text")
                      .gInputBox({ minValue: 0, maxValue: GTools })
                  )
                  .append($("<span />").text(e))
                  .appendTo(this._colorComponents);
              }.bind(this)
            );
          } else
            this._colorMode === u.ColorMode.CMYK &&
              (this._colorMap.css("display", "none"),
              this._colorEditor.toggleClass("cmyk-mode", true),
              this._opacitySlider.toggleClass("cmyk-mode", true),
              this._colorSlider.css("display", "none"),
              Array.prototype.forEach.call(
                ["C", "M", "Y", "K"],
                function (e, t) {
                  $("<label />")
                    .addClass("cymk-label")
                    .css("width", n.cmykWidth)
                    .attr("data-component-index", t)
                    .append(
                      $("<input>")
                        .attr("type", "text")
                        .gInputBox({ minValue: 0, maxValue: 100, postfix: "%" })
                    )
                    .append($("<span />").text(e))
                    .appendTo(this._colorComponents);
                }.bind(this)
              ),
              this._color instanceof GCore.GCMYKColor ||
                (GTools = new GCore.GCMYKColor(
                  GCore.GColor.rgbToCMYK(this._color.toScreen())
                )));
          var CollaborationMergeUtils = this._updateColorFromColorComponents.bind(this);
          this._colorComponents
            .find("[data-component-index] input")
            .each(function (e, t) {
              $(t).on("change", () => {
                gDesigner.stats("patternchooser_change_colorinput"), CollaborationMergeUtils();
              });
            }),
            $("<label />")
              .css("width", "18%")
              .attr("data-opacity", "")
              .append(
                $("<input>")
                  .attr("type", "text")
                  .gInputBox({ minValue: 0, maxValue: 100, postfix: "%" })
                  .gInputBox(
                    "value",
                    GCore.GUtil.formatOpacity(100 * this._colorOpacity)
                  )
                  .on(
                    "change",
                    function (e) {
                      gDesigner.stats("patternchooser_change_opacity"),
                        this._updateOpacity(
                          GCore.GLength.parseEquationValue(
                            $(e.target).gInputBox("value")
                          ) / 100,
                          "input"
                        );
                    }.bind(this)
                  )
              )
              .append($("<span />").text("A"))
              .appendTo(this._colorComponents),
            this._updateColorMap(),
            GTools
              ? this._updateColor(GTools, "mode")
              : this._updateColorComponentsFromColor(),
            this._relayout();
        }
      }),
      (u.prototype.open = function (e, t) {
        this._updateSettings(t, true),
          this._container.gOverlay("open", e),
          "used" === this._activePalette && this._updateUsedPalette(),
          gDesigner.getWorkspace().getStyleEdManager() &&
            gDesigner.getWorkspace().getStyleEdManager().isActivated() &&
            gDesigner
              .getWorkspace()
              .getStyleEdManager()
              .addEventListener(
                GTools.GStyleEdManager.EditorEvent,
                this._styleEditorHandler,
                this
              );
        var n = gDesigner.getActiveDocument();
        n &&
          (n
            .getEditor()
            .addEventListener(
              GTools.GEditor.ModifiedEvent,
              this._closeIfNeeded,
              this
            ),
          n.getEditor().keysOff([GEditor.GKey.Constant.OPTION]));
      }),
      (u.prototype.close = function () {
        this._container.gOverlay("close");
      }),
      (u.prototype.isOpenned = function (e) {
        return this._container.gOverlay("isOpenned", e);
      }),
      (u.prototype.setActiveGradientStopByIdx = function (e) {
        if (this._activeGradient && null !== e) {
          var module = this._activeGradient.getStops();
          if (e >= 0 && e < module.length) {
            var require = module[e];
            this._setActiveGradientStop(require), this._updateOnlineEditorStops();
          }
        }
      }),
      (u.prototype._updateSettings = function (e, t) {
        this._settings = t
          ? $.extend({ types: [] }, e)
          : $.extend({ types: [] }, this._settings, e);
        const { types: require, singleOption: GTools } = this._settings;
        if (GTools) this._toolbar.css("display", "none");
        else {
          "none" === this._toolbar.css("display") &&
            this._toolbar.css("display", "");
          const e = [];
          for (let t = 0, GTools = u.PATTERN_TYPES.length; t < GTools; t++) {
            var GCore = u.PATTERN_TYPES[t],
              GEditor = !require.length;
            if (!GEditor)
              for (var CollaborationMergeUtils = 0; CollaborationMergeUtils < require.length; ++CollaborationMergeUtils)
                if (GCore.isCompatible(require[CollaborationMergeUtils])) {
                  GEditor = true;
                  break;
                }
            if (GEditor) {
              var GRichTooltipConfig = u._createPatternOption(GCore);
              e.push(GRichTooltipConfig);
            }
          }
          this._toolbar.find(".pattern-type-select").empty().append(e);
        }
        this._opacitySlider.gInputSlider(
          "disabled",
          this._settings.hasOwnProperty("hasOpacity") &&
            !this._settings.hasOpacity
        ),
          this._patternEditor
            .find('[data-property="texture_mask"]')
            .prop("disabled", !this._settings.hasMask);
      }),
      (u.prototype._createNoiseEditor = function () {
        var e = $("<div/>").addClass("noise-editor");
        $("<div/>")
          .gPropertyRow({
            label: GCore.GLocale.get(
              new GCore.GLocaleKey("GPatternChooser", "text.intensity")
            ),
            columns: [
              {
                width: "auto",
                content: $("<div/>")
                  .attr("data-property", "noise_amount")
                  .gInputSlider({ min: 0, max: 100 })
                  .on(
                    "input",
                    function (t) {
                      var n = $(t.target),
                        GTools = parseFloat(n.gInputSlider("value")) / 100;
                      if (
                        (e
                          .find('[type="text"][data-property="noise_amount"]')
                          .gInputBox("value", GCore.GUtil.formatNumber(100 * GTools, 0)),
                        this._pattern)
                      ) {
                        var GEditor = this._pattern.clone();
                        GEditor.setAmount(GTools),
                          this._updatePattern(GEditor, "noise_amount", null, true);
                      }
                    }.bind(this)
                  )
                  .on(
                    "change",
                    function (e) {
                      if (
                        (gDesigner.stats("patternchooser_change_noise-amount"),
                        this._pattern)
                      ) {
                        var t = this._pattern.clone();
                        t.setAmount(
                          parseFloat($(e.target).gInputSlider("value")) / 100
                        ),
                          this._updatePattern(t, "noise_amount");
                      }
                    }.bind(this)
                  ),
              },
              {
                width: "40px",
                content: $("<input>")
                  .attr("data-property", "noise_amount")
                  .attr("type", "text")
                  .on(
                    "change",
                    function (e) {
                      if (
                        (gDesigner.stats(
                          "patternchooser_change_noise",
                          "amount"
                        ),
                        this._pattern)
                      ) {
                        var t = this._pattern.clone();
                        t.setAmount(
                          GCore.GLength.parseEquationValue(
                            $(e.target).gInputBox("value")
                          ) / 100
                        ),
                          this._updatePattern(t, "noise_amount");
                      }
                    }.bind(this)
                  )
                  .gInputBox({ minValue: 0, maxValue: 100, incrementValue: 1 }),
              },
            ],
          })
          .appendTo(e);
        var t, n, GTools;
        return (
          $("<div/>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GPatternChooser", "text.type")
              ),
              columns: [
                {
                  width: "auto",
                  content: ((t = GCore.GNoisePattern.Type),
                  (n = "type"),
                  (GTools = $("<select></select>")),
                  (t = t || []),
                  Array.prototype.forEach.call(Object.keys(t), function (e) {
                    $("<option></option>")
                      .attr("value", t[e])
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GCommonNames",
                            "noise." + n + "." + t[e]
                          )
                        )
                      )
                      .appendTo(GTools);
                  }),
                  GTools)
                    .attr("data-property", "noise_type")
                    .on(
                      "change",
                      function (e) {
                        if (
                          (gDesigner.stats(
                            "patternchooser_change_noise",
                            "type"
                          ),
                          this._pattern)
                        ) {
                          var t = this._pattern.clone();
                          t.setType($(e.target).val()),
                            this._updatePattern(t, "noise_type");
                        }
                      }.bind(this)
                    ),
                },
              ],
            })
            .appendTo(e),
          e
        );
      }),
      (u.prototype._createPatternEditorFirstRow = function (e, t) {
        return [
          {
            padding: false,
            content: $(
              "<button>" +
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GPatternChooser", "action.choose-image")
                ) +
                "...</button>"
            )
              .addClass("pattern-choose-image-button")
              .on("click", e),
          },
          {
            width: "auto",
            content: $("<button />")
              .addClass("paste-btn")
              .addClass("g-flat")
              .append($("<span />").addClass("gravit-icon-paste"))
              .append(
                $("<span />")
                  .addClass("title")
                  .html(
                    GCore.GLocale.get(new GCore.GLocaleKey("GPasteAction", "title"))
                  )
              )
              .on("click", t),
          },
        ];
      }),
      (u.prototype._createPatternEditorMaskRow = function (e) {
        return [
          {
            padding: false,
            width: "auto",
            content: $("<span />").text(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GPatternChooser",
                  "action.set-transparency-mask"
                )
              )
            ),
          },
          {
            padding: false,
            width: "40px",
            content: $("<label />")
              .addClass("g-switch")
              .append(
                $("<input>")
                  .attr("type", "checkbox")
                  .attr("data-property", "texture_mask")
                  .prop("disabled", true)
                  .on("change", e)
              )
              .append($("<div/>")),
          },
        ];
      }),
      (u.prototype._createPatternEditorScaleRow = function (e, t, n) {
        return [
          {
            width: "auto",
            content: $("<div/>")
              .attr("data-property", "texture_tile")
              .gInputSlider({ min: 10, max: 200 })
              .on("input", e)
              .on("change", t),
          },
          {
            width: "40px",
            content: $("<input>")
              .attr("data-property", "texture_tile")
              .attr("type", "text")
              .on("change", n)
              .gInputBox({
                minValue: 10,
                maxValue: 200,
                incrementValue: 1,
                postfix: "%",
              }),
          },
        ];
      }),
      (u.prototype._createPatternEditorAdvancedRow = function (e) {
        return [
          {
            width: "auto",
            content: $(
              "<button>" +
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.advanced")
                ) +
                "</button>"
            ).on(
              "click",
              function () {
                gDesigner.stats("patternchooser_click_advanced"),
                  e.slideToggle();
              }.bind(this)
            ),
          },
        ];
      }),
      (u.prototype.__getCreatePatternEditorParams = function () {
        return {
          isTouchEnabled: false,
          repeatWidth: "50%",
          ghostWidth: "0%",
          postionWith: "50%",
          sizeWidth: "52%",
          unitWidth: "10%",
        };
      }),
      (u.prototype._createPatternEditor = function () {
        var e = this.__getCreatePatternEditorParams(),
          t = $("<div/>").addClass("pattern-editor"),
          n = function (e, t) {
            var n = $("<select></select>");
            return (
              (e = e || []),
              Array.prototype.forEach.call(Object.keys(e), function (GTools) {
                $("<option></option>")
                  .attr("value", e[GTools])
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GCommonNames",
                        "texture." + t + "." + e[GTools]
                      )
                    )
                  )
                  .appendTo(n);
              }),
              n
            );
          },
          GTools = (e) => {
            gDesigner.stats("patternchooser_change_texture", "mask");
            var t = this._pattern.clone();
            t.setMask($(e.target).prop("checked")),
              this._updatePattern(t, "texture_mask");
          },
          GEditor = (e) => {
            var n = $(e.target),
              GTools = n.attr("data-property"),
              GEditor = parseFloat(n.gInputSlider("value")) / 100;
            if (
              (t
                .find('[type="text"][data-property="' + GTools + '"]')
                .gInputBox("value", GCore.GUtil.formatNumber(100 * GEditor, 0)),
              this._pattern)
            ) {
              var CollaborationMergeUtils = this._pattern.clone();
              CollaborationMergeUtils.setTileSize(GEditor),
                this._updatePattern(CollaborationMergeUtils, "texture_tile", null, true);
            }
          },
          CollaborationMergeUtils = (e) => {
            if (
              (gDesigner.stats("patternchooser_change_texture", "tile"),
              this._pattern)
            ) {
              var t = this._pattern.clone();
              t.setTileSize(
                parseFloat($(e.target).gInputSlider("value")) / 100
              ),
                this._updatePattern(t, "texture_tile");
            }
          },
          GRichTooltipConfig = (e) => {
            if (
              (gDesigner.stats("patternchooser_change_texture", "tile"),
              this._pattern)
            ) {
              var t = this._pattern.clone();
              t.setTileSize(
                GCore.GLength.parseEquationValue($(e.target).gInputBox("value")) /
                  100
              ),
                this._updatePattern(t, "texture_tile");
            }
          };
        $("<div/>")
          .addClass("choose-section")
          .append(
            $("<div/>")
              .addClass("pattern-preview-container")
              .append($("<div/>").addClass("pattern-preview"))
          )
          .append(
            $("<div/>")
              .addClass("pattern-info-container")
              .append(
                $("<div/>").gPropertyRow({
                  clazz: "first-row",
                  columns: this._createPatternEditorFirstRow(
                    () => {
                      gDesigner.stats("patternchooser_choose_image");
                      var e = gDesigner.getActiveDocument(),
                        t =
                          t ||
                          (e ? e.getStorage() : null) ||
                          gDesigner.getDefaultStorage();
                      t &&
                        t.canPromptOpen() &&
                        t.openPrompt(
                          u.enableFileTypes,
                          (e) => {
                            e.read((e) => {
                              var t = new FileReader();
                              (t.onload = () => {
                                var e,
                                  n = t.result;
                                this._pattern instanceof GCore.GTexturePattern
                                  ? (e = this._pattern.clone()).setTexture(n)
                                  : (e = new GCore.GTexturePattern(n)).setScene(
                                      gDesigner.getActiveDocument().getScene()
                                    ),
                                  this._updatePattern(e, "texture_upload");
                              }),
                                t.readAsDataURL(new Blob([e]));
                            });
                          },
                          false
                        );
                    },
                    () => {
                      gDesigner.stats("patternchooser_paste_texture");
                      var e = false,
                        t = GCore.GNode.deserialize(
                          gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
                        );
                      if (t && t.length)
                        for (var n = 0; n < t.length; ++n) {
                          var GTools = t[n];
                          if (
                            GTools.hasMixin(GCore.GVertexSource) ||
                            GTools instanceof GCore.GGroup
                          ) {
                            if (this._pattern) {
                              var GEditor = this._pattern.clone();
                              GEditor.setTexture(GTools),
                                this._updatePattern(GEditor, "texture_paste");
                            }
                            e = true;
                            break;
                          }
                        }
                      e ||
                        window.alert(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GCommonNames",
                              "arrow-paste.alert"
                            )
                          )
                        );
                    }
                  ),
                })
              )
              .append(
                $("<div/>").gPropertyRow({
                  columns: [
                    {
                      width: "100%",
                      content: n(GCore.GTexturePattern.ScaleMode, "scale")
                        .attr("data-property", "texture_scale")
                        .on(
                          "change",
                          function (e) {
                            if (this._pattern) {
                              var t = this._pattern.clone();
                              t.setScaleMode($(e.target).val()),
                                (0,
                                GCore.GTexturePattern.ScaleSettings[
                                  $(e.target).val()
                                ])(t),
                                gDesigner.stats(
                                  "patternchooser_change_texture",
                                  t.getScaleMode()
                                ),
                                this._updatePattern(t, "texture_pattern");
                            }
                          }.bind(this)
                        ),
                    },
                  ],
                })
              )
              .append(
                $("<div/>").gPropertyRow({
                  columns: e.isTouchEnabled
                    ? this._createPatternEditorMaskRow(GTools)
                    : this._createPatternEditorScaleRow(GEditor, CollaborationMergeUtils, GRichTooltipConfig),
                })
              )
          )
          .appendTo(t),
          $("<div/>")
            .addClass(e.isTouchEnabled ? "scale" : "")
            .gPropertyRow({
              columns: e.isTouchEnabled
                ? this._createPatternEditorScaleRow(GEditor, CollaborationMergeUtils, GRichTooltipConfig)
                : this._createPatternEditorMaskRow(GTools),
            })
            .appendTo(t);
        var GSwatchesChangedEvent = $("<div/>").addClass("pattern-advanced-settings");
        return (
          $("<div/>")
            .gPropertyRow({ columns: this._createPatternEditorAdvancedRow(GSwatchesChangedEvent) })
            .appendTo(t),
          $("<div/>")
            .gPropertyRow({
              columns: [
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GPatternChooser", "text.repeat")
                  ),
                  width: e.repeatWidth,
                  content: n(GCore.GTexturePattern.RepeatMode, "repeat")
                    .attr("data-property", "texture_repeat")
                    .on(
                      "change",
                      function (e) {
                        if (
                          (gDesigner.stats(
                            "patternchooser_change_texture",
                            "repeat"
                          ),
                          this._pattern)
                        ) {
                          var t = this._pattern.clone();
                          t.setRepeatMode($(e.target).val()),
                            this._updatePattern(t, "texture_repeat");
                        }
                      }.bind(this)
                    ),
                },
                { width: e.ghostWidth },
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.position")
                  ),
                  width: e.postionWith,
                  content: n(GCore.GTexturePattern.PositionMode, "position")
                    .attr("data-property", "texture_position")
                    .on(
                      "change",
                      function (e) {
                        if (
                          (gDesigner.stats(
                            "patternchooser_change_texture",
                            "position"
                          ),
                          this._pattern)
                        ) {
                          var t = this._pattern.clone();
                          t.setPosition($(e.target).val()),
                            this._updatePattern(t, "texture_position");
                        }
                      }.bind(this)
                    ),
                },
              ],
            })
            .gPropertyRow({
              columns: [
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.size")
                  ),
                  width: e.sizeWidth,
                  content: n(GCore.GTexturePattern.SizeMode, "size")
                    .attr("data-property", "texture_size")
                    .on(
                      "change",
                      function (e) {
                        if (
                          (gDesigner.stats(
                            "patternchooser_change_texture",
                            "size"
                          ),
                          this._pattern)
                        ) {
                          var t = this._pattern.clone();
                          t.setSizeMode($(e.target).val()),
                            this._updatePattern(t, "texture_size");
                        }
                      }.bind(this)
                    ),
                },
                { width: e.ghostWidth },
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.width")
                  ),
                  width: "20%",
                  content: $("<input>")
                    .attr("data-property", "texture_size_w")
                    .attr("type", "text")
                    .on(
                      "change",
                      function (e) {
                        if (
                          (gDesigner.stats(
                            "patternchooser_change_texture",
                            "size"
                          ),
                          this._pattern)
                        ) {
                          var t = GCore.GLength.parseEquationValue(
                            $(e.target).val()
                          );
                          if (null !== t && t >= 0) {
                            var n = this._pattern.clone();
                            n.setWidth(t),
                              this._updatePattern(n, "texture_size");
                          }
                        }
                      }.bind(this)
                    )
                    .gInputBox(),
                },
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.height")
                  ),
                  width: "20%",
                  content: $("<input>")
                    .attr("data-property", "texture_size_h")
                    .attr("type", "text")
                    .on(
                      "change",
                      function (e) {
                        if (
                          (gDesigner.stats(
                            "patternchooser_change_texture",
                            "size-h"
                          ),
                          this._pattern)
                        ) {
                          var t = GCore.GLength.parseEquationValue(
                            $(e.target).val()
                          );
                          if (null !== t && t >= 0) {
                            var n = this._pattern.clone();
                            n.setHeight(t),
                              this._updatePattern(n, "texture_size");
                          }
                        }
                      }.bind(this)
                    )
                    .gInputBox(),
                },
                {
                  label: e.isTouchEnabled
                    ? ""
                    : GCore.GLocale.get(
                        new GCore.GLocaleKey("GCommonNames", "text.unit")
                      ),
                  width: e.unitWidth,
                  content: $("<label />").attr(
                    "data-property",
                    "texture_size_u"
                  ),
                },
              ],
            })
            .appendTo(GSwatchesChangedEvent),
          GSwatchesChangedEvent.appendTo(t),
          t
        );
      }),
      (u.prototype.__getCreatePaletteSwatchParamas = function () {
        return { isTouchEnabled: false };
      }),
      (u.prototype._findOrCreateLastSwitchContiner = function (e) {
        var t = e.find(".swatches:last");
        t.length > 0
          ? t.find(".swatch").length >= 8 &&
            (t = $("<div/>").addClass("swatches").appendTo(e))
          : (t = $("<div/>").addClass("swatches").appendTo(e));
        return t;
      }),
      (u.prototype._createPaletteSwatch = function (e, t, n, GTools) {
        var CollaborationMergeUtils = this.__getCreatePaletteSwatchParamas(),
          GRichTooltipConfig = e instanceof GCore.GSwatch ? e : new GCore.GSwatch(e),
          GSwatchesChangedEvent = t;
        CollaborationMergeUtils.isTouchEnabled &&
          (GSwatchesChangedEvent = GTools
            ? $("<div/>").addClass("swatches").appendTo(t)
            : this._findOrCreateLastSwitchContiner(t));
        var GInputSliderWidget = function (e) {
            if (!u.canDragSwatch)
              return e.preventDefault(), void e.stopPropagation();
            var t = $(e.target).closest(".swatch"),
              n = t.offset(),
              GTools = e.originalEvent;
            GTools.stopPropagation(),
              (u.dragSwatch = t),
              (u.hasDropped = false),
              (u.dragDeltaX = GTools.pageX - n.left),
              (u.dragDeltaY = GTools.pageY - n.top),
              (GTools.dataTransfer.effectAllowed = "move"),
              GTools.dataTransfer.setData("text/plain", "dummy_data");
          }.bind(this),
          GSystemDialog = function (e) {
            var t = e.originalEvent;
            t.stopPropagation(), GSwatchesChangedEvent.find(".grid-drag-overlay").remove();
            var n = false,
              GTools = $(".pattern-chooser"),
              GEditor = GTools.offset().top,
              CollaborationMergeUtils = GTools.offset().left,
              GRichTooltipConfig = CollaborationMergeUtils + GTools.width(),
              GInputSliderWidget = GEditor + GTools.height(),
              GSystemDialog = t.pageX,
              p = t.pageY;
            if (
              ((GSystemDialog > GRichTooltipConfig || GSystemDialog < CollaborationMergeUtils || p > GInputSliderWidget || p < GEditor) && (n = true),
              u.dragSwatch && n)
            ) {
              var g = gDesigner.getActiveDocument().getEditor();
              g.beginTransaction();
              try {
                var h = u.dragSwatch.data("swatch"),
                  f = this._getSwatchScope(
                    u.dragSwatch.closest(".swatches-wrapper").hasClass("global")
                      ? "global"
                      : "document",
                    h.getProperty("_pt")
                  ),
                  m = gDesigner.getSwatches(f);
                if (h && m) {
                  for (var y = 0; y < m.length; ++y)
                    if (GCore.GUtil.equals(h, m[y])) {
                      (m = m.slice()).splice(y, 1);
                      break;
                    }
                  gDesigner.setSwatches(f, m);
                }
              } finally {
                g.commitTransaction(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GPatternChooser", "action.remove-swatch")
                  ),
                  { chooserOn: true }
                );
              }
            }
            u.hasDropped = false;
          }.bind(this),
          p = GRichTooltipConfig.getProperty("_pt");
        const g =
          p instanceof GCore.GTexturePattern && !(p instanceof GCore.GNoisePattern);
        gDesigner.getActiveDocument() && g && (p = this._clonePattern(p));
        var h = GRichTooltipConfig.getProperty("_op"),
          f = $("<div/>")
            .addClass("swatch")
            .css("background", GCore.GPattern.asCSSBackground(p, h))
            .data("swatch", GRichTooltipConfig)
            .attr("draggable", n)
            .attr("data-long-press-delay", "500")
            .on("long-press", (e) => {
              CollaborationMergeUtils.isTouchEnabled &&
                ((this._currentLongPressTarget = e.target),
                this._contextMenu.open(e.target));
            })
            .on(
              "click",
              function (e) {
                gDesigner.stats("patternchooser_click_swatch");
                var t = $(e.target).closest(".swatch").data("swatch"),
                  n = t.getProperty("_pt"),
                  GTools = t.getProperty("_op"),
                  CollaborationMergeUtils = $(".colormode-selector")
                    .children("option:selected")
                    .data("colormode");
                if (GEditor.GPlatform.modifiers.optionKey) {
                  var GRichTooltipConfig = gDesigner
                    .getActiveDocument()
                    .getEditor()
                    .selectFromPattern(n, true);
                  if (GRichTooltipConfig) {
                    $(".g-overlay .pattern-chooser").length > 0 &&
                      $(".g-overlay .pattern-chooser").gOverlay("close"),
                      gDesigner
                        .getActiveDocument()
                        .getEditor()
                        .updateSelection(false, GRichTooltipConfig),
                      gDesigner
                        .getActiveDocument()
                        .getEditor()
                        .blinkSelection(2e3, 4);
                    for (
                      var GSwatchesChangedEvent = $(
                          ".fill-properties-panel .g-pattern-chooser .preview"
                        ),
                        GInputSliderWidget = 0;
                      GInputSliderWidget < GSwatchesChangedEvent.length;
                      ++GInputSliderWidget
                    )
                      if (
                        $(GSwatchesChangedEvent[GInputSliderWidget]).data("gpatterntarget") &&
                        GCore.GUtil.equals(
                          $(GSwatchesChangedEvent[GInputSliderWidget]).data("gpatterntarget").pattern,
                          n
                        )
                      ) {
                        $(GSwatchesChangedEvent[GInputSliderWidget]).trigger("click");
                        break;
                      }
                  }
                } else
                  this._updateOpacity(GTools),
                    this._updatePattern(n, "set_type", true);
                this.setColorMode(CollaborationMergeUtils);
              }.bind(this)
            )
            .appendTo(GSwatchesChangedEvent);
        if (
          (GRichTooltipConfig.isCMYK() && this._addCmykIcon(f),
          n &&
            f
              .on("mousedown", function (e) {
                u.canDragSwatch = $(e.target).hasClass("swatch");
              })
              .on("dragenter", function () {
                (function (e) {
                  let t = u.dragSwatch
                      .closest(".swatches-wrapper")
                      .hasClass("global"),
                    n = e.closest(".swatches-wrapper").hasClass("global"),
                    GTools =
                      u.dragSwatch.data("swatch").isCMYK() ===
                      e.data("swatch").isCMYK();
                  return !(!((t && n) || (!t && !n)) || !GTools);
                })($(this)) && $(this).addClass("g-drop");
              })
              .on("dragleave", function () {
                $(this).removeClass("g-drop");
              })
              .on("dragstart", GInputSliderWidget)
              .on("dragend", GSystemDialog)
              .on("dragover", function (e) {
                e.preventDefault();
              })
              .on(
                "drop",
                function () {
                  GSwatchesChangedEvent.find(".grid-drag-overlay").remove();
                  var e = u.dragSwatch
                    .closest(".swatches-wrapper")
                    .find(".g-drop");
                  if ((e.removeClass("g-drop"), u.dragSwatch && e.length > 0)) {
                    var t = u.dragSwatch.data("swatch"),
                      n = $(e).data("swatch"),
                      GTools = this._getSwatchScope(
                        u.dragSwatch
                          .closest(".swatches-wrapper")
                          .hasClass("global")
                          ? "global"
                          : "document",
                        t.getProperty("_pt")
                      ),
                      GEditor = gDesigner.getSwatches(GTools),
                      CollaborationMergeUtils = -1,
                      GRichTooltipConfig = -1;
                    if (t && GEditor && n) {
                      for (var GInputSliderWidget = 0; GInputSliderWidget < GEditor.length; ++GInputSliderWidget)
                        GCore.GUtil.equals(t, GEditor[GInputSliderWidget])
                          ? (CollaborationMergeUtils = GInputSliderWidget)
                          : GCore.GUtil.equals(n, GEditor[GInputSliderWidget]) && (GRichTooltipConfig = GInputSliderWidget);
                      CollaborationMergeUtils > -1 &&
                        GRichTooltipConfig > -1 &&
                        ((GEditor = GEditor.slice()).splice(CollaborationMergeUtils, 1), GEditor.splice(GRichTooltipConfig, 0, t)),
                        gDesigner.setSwatches(GTools, GEditor);
                    }
                  }
                }.bind(this)
              ),
          g && !p.isReady())
        ) {
          const e = () => {
            p.isReady() &&
              (f.css("background", GCore.GPattern.asCSSBackground(p, h)),
              p.removeEventListener(GCore.GTexturePattern.UpdateEvent, e));
          };
          p.addEventListener(GCore.GTexturePattern.UpdateEvent, e);
        }
      }),
      (u.prototype._addCmykIcon = function (e) {
        e.append(
          $("<div/>")
            .addClass("cmyk-swatch")
            .append($("<div/>").addClass("cmyk-icon c"))
            .append($("<div/>").addClass("cmyk-icon m"))
            .append($("<div/>").addClass("cmyk-icon y"))
            .append($("<div/>").addClass("cmyk-icon k"))
        );
      }),
      (u.prototype.__getCreateColorsPaletteParams = function () {
        return { isTouchEnabled: false };
      }),
      (u.prototype._createColorsPalette = function (e) {
        var t = this.__getCreatePaletteSwatchParamas(),
          n = $("<div/>").addClass("swatches").appendTo(e);
        t.isTouchEnabled && (n = e);
        var GTools = [0, 0, 0],
          GEditor = [255, 255, 255];
        this._createPaletteSwatch(new GCore.GRGBColor(GTools), n, false, false);
        for (var CollaborationMergeUtils = 1; CollaborationMergeUtils <= 10; CollaborationMergeUtils += 1)
          this._createPaletteSwatch(
            new GCore.GRGBColor(GCore.GRGBColor.blend(GTools, GEditor, CollaborationMergeUtils * (1 / 11))),
            n,
            false,
            false
          );
        this._createPaletteSwatch(new GCore.GRGBColor(GEditor), n, false, false);
        var GRichTooltipConfig = [
            [152, 0, 0],
            [255, 0, 0],
            [255, 153, 0],
            [255, 255, 0],
            [0, 255, 0],
            [0, 255, 255],
            [0, 150, 136],
            [96, 125, 139],
            [74, 134, 232],
            [0, 0, 255],
            [153, 0, 255],
            [255, 0, 255],
          ],
          GSwatchesChangedEvent = [];
        for (let n = -1; n < GSwatchesChangedEvent.length; ++n) {
          var GInputSliderWidget = e;
          t.isTouchEnabled ||
            (GInputSliderWidget = $("<div/>").addClass("swatches").appendTo(e));
          var GSystemDialog = null,
            u = 0;
          n >= 0 && ((GSystemDialog = GSwatchesChangedEvent[n].color), (u = GSwatchesChangedEvent[n].factor));
          for (let e = 0; e < GRichTooltipConfig.length; ++e) {
            var p = GRichTooltipConfig[e],
              g = GSystemDialog ? GCore.GRGBColor.blend(p, GSystemDialog, u) : p;
            this._createPaletteSwatch(new GCore.GRGBColor(g), GInputSliderWidget, false, false);
          }
        }
      }),
      (u.prototype._createMixerPalette = function (e) {
        for (
          var module = $("<div/>")
              .attr("data-container", "tints")
              .addClass("swatches")
              .append(
                $("<label />").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GPatternChooser", "text.tints")
                  )
                )
              )
              .appendTo(e),
            require = $("<div/>")
              .attr("data-container", "shades")
              .append(
                $("<label />").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GPatternChooser", "text.shades")
                  )
                )
              )
              .addClass("swatches")
              .appendTo(e),
            GTools = $("<div/>")
              .attr("data-container", "tones")
              .append(
                $("<label />").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GPatternChooser", "text.tones")
                  )
                )
              )
              .addClass("swatches")
              .appendTo(e),
            GEditor = $("<div/>")
              .attr("data-container", "mixes")
              .append(
                $("<label />").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GPatternChooser", "text.mixes")
                  )
                )
              )
              .addClass("swatches")
              .appendTo(e),
            CollaborationMergeUtils = 1;
          CollaborationMergeUtils <= 10;
          CollaborationMergeUtils += 1
        )
          this._createPaletteSwatch(GCore.GRGBColor.WHITE, module),
            this._createPaletteSwatch(GCore.GRGBColor.WHITE, require),
            this._createPaletteSwatch(GCore.GRGBColor.WHITE, GTools),
            this._createPaletteSwatch(GCore.GRGBColor.WHITE, GEditor);
        this._updateMixerPalette();
      }),
      (u.prototype.__getUpdateMixerPaletteParams = function () {
        return { maxCount: 10 };
      }),
      (u.prototype._updateMixerPalette = function () {
        var e = this.__getUpdateMixerPaletteParams();
        function module(e, t, n) {
          $(t[n])
            .css("background", GCore.GPattern.asCSSBackground(e))
            .data("swatch", new GCore.GSwatch(e));
        }
        for (
          var require = [255, 255, 255],
            GTools = [0, 0, 0],
            GEditor = [128, 128, 128],
            CollaborationMergeUtils = this._color.toScreen(),
            GRichTooltipConfig = this._palettes.find(
              '.mixer-palette [data-container="tints"] .swatch'
            ),
            GSwatchesChangedEvent = this._palettes.find(
              '.mixer-palette [data-container="shades"] .swatch'
            ),
            GInputSliderWidget = this._palettes.find(
              '.mixer-palette [data-container="tones"] .swatch'
            ),
            GSystemDialog = this._palettes.find(
              '.mixer-palette [data-container="mixes"] .swatch'
            ),
            u = 0;
          u < e.maxCount;
          u += 1
        ) {
          var p = (u + 1) / (1 * e.maxCount);
          module(new GCore.GRGBColor(GCore.GRGBColor.blend(CollaborationMergeUtils, require, p)), GRichTooltipConfig, u),
            module(new GCore.GRGBColor(GCore.GRGBColor.blend(CollaborationMergeUtils, GTools, p)), GSwatchesChangedEvent, u),
            module(new GCore.GRGBColor(GCore.GRGBColor.blend(CollaborationMergeUtils, GEditor, p)), GInputSliderWidget, u),
            module(
              new GCore.GRGBColor(
                GCore.GRGBColor.blend(CollaborationMergeUtils, this._oldColor.toScreen(), p)
              ),
              GSystemDialog,
              u
            );
        }
      }),
      (u.prototype.__getCreateUsedPaletteParams = function () {
        return { isTouchEnabled: false, maxCount: 12 };
      }),
      (u.prototype._createUsedPalette = function (e) {
        var t = this.__getCreateUsedPaletteParams();
        let require;
        t.isTouchEnabled || (require = $("<div/>").addClass("swatches").appendTo(e));
        for (var GTools = 0; GTools < t.maxCount; GTools += 1)
          this._createPaletteSwatch(
            GCore.GRGBColor.WHITE,
            t.isTouchEnabled ? e : require,
            false,
            false
          );
      }),
      (u.prototype._updateUsedPalette = function () {
        var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getDocumentColors()
          : [];
        $(".palettes > .used-palette").empty(),
          this._createUsedPalette($(".palettes > .used-palette"));
        for (var module = 12, require = 0; require < module; require += 1) {
          var GTools = require < e.length,
            GEditor = GTools ? e[require] : null,
            CollaborationMergeUtils = this._palettes.find(".used-palette .swatches .swatch")[require],
            GRichTooltipConfig = new GCore.GSwatch(GEditor);
          GTools &&
            $(CollaborationMergeUtils)
              .css("background", GCore.GPattern.asCSSBackground(GEditor))
              .data("swatch", GRichTooltipConfig),
            $(CollaborationMergeUtils).css("display", GTools ? "" : "none"),
            GRichTooltipConfig.isCMYK() && this._addCmykIcon($(CollaborationMergeUtils)),
            require % 11 == 0 &&
              GTools &&
              ((module += 12),
              this._createUsedPalette($(".palettes > .used-palette")));
        }
      }),
      (u.prototype._createSwatchesPalette = function (e, t) {
        var n = $("<span/>").text(
            "global" === t
              ? GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.global"))
              : GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.document"))
          ),
          GTools = $("<div/>").addClass("swatches-wrapper").addClass(t),
          GEditor = $("<div/>")
            .addClass("toolbar")
            .addClass(t)
            .append(n)
            .append(
              $("<button/>")
                .append("<span/>")
                .attr(
                  "data-title",
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.import-swatches")
                  )
                )
                .addClass("swatch-icon")
                .addClass("gravit-icon-swatches-import")
                .on("click", () => {
                  gDesigner.stats("patternchooser_import_swatches"),
                    gDesigner.importSwatches(t);
                })
            )
            .append(
              $("<button/>")
                .append("<span/>")
                .attr(
                  "data-title",
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.export-swatches")
                  )
                )
                .addClass("swatch-icon")
                .addClass("gravit-icon-swatches-export")
                .on("click", () => {
                  gDesigner.stats("patternchooser_export_swatches"),
                    gDesigner.exportSwatches(t);
                })
            )
            .appendTo(e);
        GTools.appendTo(e), GEditor.gAccordion(GTools, "span", false);
      }),
      (u.prototype._getSwatchScope = function (e, t) {
        return t && t instanceof GCore.GLinearGradient
          ? e + "-linear-gradient"
          : t && t instanceof GCore.GRadialGradient
          ? e + "-radial-gradient"
          : t && t instanceof GCore.GAngularGradient
          ? e + "-angular-gradient"
          : t &&
            t instanceof GCore.GTexturePattern &&
            !(t instanceof GCore.GNoisePattern)
          ? e + "-texture-pattern"
          : t && t instanceof GCore.GNoisePattern
          ? e + "-noise-pattern"
          : e;
      }),
      (u.prototype.__getUpdateSwatchesPaletteParams = function () {
        return { isTouchEnabled: false };
      }),
      (u.prototype._updateSwatchesPalette = function (e) {
        var t = this.__getUpdateSwatchesPaletteParams(),
          n = e.indexOf("-") > 0,
          GTools = this._palettes
            .find(
              ".swatches-palette .swatches-wrapper." +
                (n ? e.substring(0, e.indexOf("-")) : e)
            )
            .empty(),
          GEditor = gDesigner.getSwatches(e);
        if (!GEditor)
          return void $("<div/>")
            .addClass("info")
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPatternChooser", "text.error-on-loading")
              )
            )
            .appendTo(GTools);
        var CollaborationMergeUtils = [],
          GRichTooltipConfig = [];
        for (let e = 0; e < GEditor.length; ++e)
          GEditor[e].isCMYK() ? GRichTooltipConfig.push(GEditor[e]) : CollaborationMergeUtils.push(GEditor[e]);
        CollaborationMergeUtils = CollaborationMergeUtils.concat(GRichTooltipConfig);
        let GSwatchesChangedEvent = null;
        var GInputSliderWidget = 1;
        if (!t.isTouchEnabled && CollaborationMergeUtils.length)
          for (let e = 0; e < CollaborationMergeUtils.length; ++e)
            GSwatchesChangedEvent || (GSwatchesChangedEvent = $("<div/>").addClass("swatches").appendTo(GTools)),
              this._createPaletteSwatch(CollaborationMergeUtils[e], GSwatchesChangedEvent, true, false),
              14 == ++GInputSliderWidget && ((GInputSliderWidget = 1), (GSwatchesChangedEvent = null));
        if (
          (GSwatchesChangedEvent || (GSwatchesChangedEvent = $("<div/>").addClass("swatches").appendTo(GTools)),
          $("<button />")
            .addClass(
              t.isTouchEnabled ? "add-button swatch-button" : "swatch-button"
            )
            .addClass("g-flat")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPatternChooser", "action.add-swatch")
              )
            )
            .append($('<span class="gravit-icon-plus"/>'))
            .on(
              "click",
              function () {
                gDesigner.stats("patternchooser_add_swatch", e);
                var t = new GCore.GSwatch(this._pattern, this._opacity),
                  n = gDesigner.getSwatches(e);
                if (n) {
                  for (var GTools = 0; GTools < n.length; ++GTools)
                    if (GCore.GUtil.equals(t, n[GTools], true))
                      return void GSystemDialog.alert(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPatternChooser",
                            "text.equal-swatch-alert"
                          )
                        )
                      );
                  n.push(t), gDesigner.setSwatches(e, n);
                }
              }.bind(this)
            )
            .appendTo(GSwatchesChangedEvent),
          t.isTouchEnabled && ((GSwatchesChangedEvent = null), CollaborationMergeUtils.length))
        )
          for (var u = 0; u < CollaborationMergeUtils.length; ++u)
            this._createPaletteSwatch(CollaborationMergeUtils[u], GTools, true, 7 === u);
        this._updateActiveSwatch(n ? e.substring(0, e.indexOf("-")) : e);
      }),
      (u.prototype._updateActiveSwatch = function (e) {
        if ("swatches" === this._activePalette) {
          var module = this._palettes.find(".swatches-palette." + e),
            require = false;
          module.find(".swatches-wrapper .swatches .swatch").each(
            function (e, t) {
              var GTools = $(t),
                GEditor = GCore.GUtil.equals(
                  GTools.data("swatch"),
                  new GCore.GSwatch(this._pattern, this._opacity),
                  true
                );
              GEditor && (require = true), GTools.data("isActive", GEditor).toggleClass("g-active", GEditor);
            }.bind(this)
          ),
            module.find(".toolbar button[data-active-swatch]").each(function (e, t) {
              $(t).prop("disabled", !require);
            });
        }
      }),
      (u.prototype._swatchesChanged = function (e) {
        this._updateSwatchesPalette(e.scope);
      }),
      (u.prototype._activatePalette = function (e) {
        if (e !== this._activePalette) {
          switch (this._activatePalette) {
            case "swatches":
              gDesigner.removeEventListener(GSwatchesChangedEvent, this._swatchesChanged, this);
          }
          switch (
            (this._palettes
              .find(".chooser [data-palette]")
              .each(function (t, n) {
                var GTools = $(n);
                GTools.toggleClass("g-active", GTools.attr("data-palette") === e);
              }),
            this._palettes.find(".palette").each(function (t, n) {
              var GTools = $(n);
              GTools.css("display", GTools.attr("data-palette") === e ? "" : "none");
            }),
            e)
          ) {
            case "mixer":
              this._updateMixerPalette();
              break;
            case "used":
              this._updateUsedPalette();
              break;
            case "swatches":
              this._updateSwatchesPalette(
                this._getSwatchScope("global", this._pattern)
              ),
                this._updateSwatchesPalette(
                  this._getSwatchScope("document", this._pattern)
                ),
                gDesigner.addEventListener(GSwatchesChangedEvent, this._swatchesChanged, this);
          }
          (this._activePalette = e), this._relayout();
        }
      }),
      (u.prototype._setActiveGradientStop = function (e, t, n) {
        (e !== this._activeGradientStop || n) &&
          ((this._activeGradientStop = e),
          this._activeGradientStop &&
            (this._updateColor(
              t || this._activeGradientStop.color,
              n ? "" : "gradient-stop"
            ),
            this._updateOpacity(
              this._activeGradientStop.opacity,
              "gradient-stop"
            ),
            Array.prototype.forEach.call(
              this._activeGradient.getStops(),
              function (e) {
                this._updateGradientStop(e);
              }.bind(this)
            )));
      }),
      (u.prototype._updateOnlineEditorStops = function () {
        if (
          gDesigner.getWorkspace().getStyleEdManager() &&
          gDesigner.getWorkspace().getStyleEdManager().isActivated()
        ) {
          var exports = null;
          this._activeGradientStop &&
            this._activeGradient &&
            Array.prototype.forEach.call(
              this._activeGradient.getStops(),
              function (t, n) {
                t === this._activeGradientStop && (exports = n);
              }.bind(this)
            );
          var module = gDesigner
              .getWorkspace()
              .getStyleEdManager()
              .getActiveEditor(),
            require = null;
          null !== exports &&
            module &&
            (require = { type: GTools.GGradientStyleEditor.STOP_HANDLE_PART_ID, idx: exports }),
            module && module.updatePartSelection(false, require ? [require] : null, true);
        }
      }),
      (u.prototype._insertGradientStop = function (e) {
        var t = this._gradientEditor.find(".stops"),
          n = t.width(),
          GTools = t.height(),
          GEditor = t.offset(),
          CollaborationMergeUtils = null,
          GRichTooltipConfig = function (t, GCore) {
            var GRichTooltipConfig = Math.max(0, Math.min(n, Math.round(t.pageX - GEditor.left)));
            t.pageY < GEditor.top - u.EXTEND_DRAG_RANGE ||
            t.pageY > GEditor.top + GTools + u.EXTEND_DRAG_RANGE
              ? this._activeGradient.getStops().length >= 3 &&
                (CollaborationMergeUtils.css("display", "none"), (e.remove = true))
              : (CollaborationMergeUtils.css("display", ""), (e.remove = false)),
              (e.position = GRichTooltipConfig / n),
              this._updateGradientStop(e),
              this._updatePatternFromActiveGradient(!GCore);
          }.bind(this),
          GSwatchesChangedEvent = function (t) {
            if (
              (GRichTooltipConfig(t, true),
              t.stopPropagation(),
              document.removeEventListener("mouseup", GSwatchesChangedEvent, true),
              document.removeEventListener("mousemove", GRichTooltipConfig, true),
              e.remove)
            ) {
              var n = this._activeGradient.getStops(),
                GTools = n.indexOf(e);
              n.splice(GTools, 1);
            }
          }.bind(this);
        return (
          (CollaborationMergeUtils = $("<div/>")
            .addClass("stop")
            .data("stop", e)
            .on(
              "mousedown",
              function (t) {
                t.stopPropagation(),
                  this._setActiveGradientStop(e),
                  this._updateOnlineEditorStops(),
                  document.addEventListener("mouseup", GSwatchesChangedEvent, true),
                  document.addEventListener("mousemove", GRichTooltipConfig, true);
                var n = this._activeGradient.getStops()[0].color;
                n instanceof GCore.GCMYKColor
                  ? this.setColorMode(u.ColorMode.CMYK)
                  : n instanceof GCore.GHSVColor
                  ? this.setColorMode(u.ColorMode.HSV)
                  : n instanceof GCore.GRGBColor &&
                    this.setColorMode(u.ColorMode.RGB);
              }.bind(this)
            )
            .appendTo(t)),
          this._updateGradientStop(e),
          CollaborationMergeUtils
        );
      }),
      (u.prototype.__getUpdateGradientStopParams = function () {
        return { isTouchEnabled: false };
      }),
      (u.prototype._updateGradientStop = function (e) {
        var t = this.__getUpdateGradientStopParams(),
          n = this._gradientEditor.find(".stops"),
          GTools = n.width();
        n.find(".stop").each(
          function (n, GCore) {
            var GEditor = $(GCore);
            if (GEditor.data("stop") === e) {
              GEditor.toggleClass("g-active", e === this._activeGradientStop),
                t.isTouchEnabled &&
                  (e === this._activeGradientStop
                    ? (GEditor.css("background", e.color.toScreenCSS(e.opacity)),
                      GEditor.css("border", "2px solid #FFFFFF"))
                    : (GEditor.css("background", "transparent"),
                      GEditor.css("border", "2px solid transparent")));
              var CollaborationMergeUtils = Math.round(e.position * GTools),
                GRichTooltipConfig = GEditor.outerWidth() / 2 + 1;
              CollaborationMergeUtils < GRichTooltipConfig
                ? t.isTouchEnabled || (CollaborationMergeUtils = GRichTooltipConfig)
                : CollaborationMergeUtils > GTools - GRichTooltipConfig && (t.isTouchEnabled || (CollaborationMergeUtils = GTools - GRichTooltipConfig)),
                GEditor.css("left", CollaborationMergeUtils + "px");
            }
          }.bind(this)
        );
      }),
      (u.prototype._updatePatternFromActiveGradient = function (e) {
        if (this._activeGradient) {
          this._activeGradient.sortStops();
          var module = this._activeGradient.clone(),
            require = module.getStops();
          Array.prototype.forEach.call(
            this._activeGradient.getStops(),
            function (e, t) {
              e.remove && require.splice(t, 1);
            }
          ),
            this._updatePattern(module, "gradient", null, e);
        }
      }),
      (u.prototype._rotateActiveGradient = function (e) {
        var t = GCore.GMath.toRadians(e),
          n = new GCore.GPoint(this._activeGradient._fx, this._activeGradient._fy);
        (n = n.rotatedAt(t, new GCore.GPoint(0.5, 0.5))),
          (this._activeGradient._fx = n.getX()),
          (this._activeGradient._fy = n.getY()),
          (this._activeGradient._angle = this._activeGradient._angle + t),
          this._updatePatternFromActiveGradient();
      }),
      (u.prototype._updateTexture = function (e) {
        GCore.GUtil.equals(e, this._texture) || (this._texture = e);
      }),
      (u.prototype.__getUpdateColorParams = function () {
        return { isTouchEnabled: false };
      }),
      (u.prototype._updateColor = function (e, t, n, GTools) {
        var GEditor = this.__getUpdateColorParams();
        (GCore.GUtil.equals(e, this._color) && "set_pattern" !== t && !GTools) ||
          ((this._color = e),
          this._updateSwatchesPalette(
            this._getSwatchScope("global", this._pattern)
          ),
          this._updateSwatchesPalette(
            this._getSwatchScope("document", this._pattern)
          ),
          this._pattern &&
            this._pattern instanceof GCore.GColor &&
            "set_pattern" !== t &&
            "update_pattern" !== t &&
            this._updatePattern(this._color, "set_color", null, n),
          this._activeGradientStop &&
            "gradient-stop" !== t &&
            ((this._activeGradientStop.color = this._color),
            this._updatePatternFromActiveGradient(n)),
          "mode" !== t &&
            (this._color instanceof GCore.GCMYKColor
              ? this.setColorMode(u.ColorMode.CMYK)
              : this._color instanceof GCore.GHSVColor
              ? this.setColorMode(u.ColorMode.HSV)
              : this._color instanceof GCore.GRGBColor &&
                this.setColorMode(u.ColorMode.RGB)),
          this._updateColorComponentsFromColor(),
          "slider" !== t && "map" !== t && this._updateColorSliderFromColor(),
          this._systemColorInput.val(this._color.toScreenCSS()),
          "map" !== t && this._updateMapMarker(),
          ("set_pattern" !== t && "gradient-stop" !== t) ||
            ((this._oldColor = this._color),
            this._colorPreviewOld.css(
              "background",
              this._oldColor.toScreenCSS(this._oldColorOpacity)
            )),
          "swatch" !== t &&
            "mixer" === this._activePalette &&
            this._updateMixerPalette(),
          GCore.GUtil.equals(this._oldColor, this._color) ||
            (0 === this._oldColorOpacity && this._updateOpacity(1)),
          GEditor.isTouchEnabled &&
            (this._sliderColorThumb.css(
              "background",
              this._color.toScreenCSS(1)
            ),
            this._sliderOpacityThumb.css(
              "background",
              this._color.toScreenCSS(this._colorOpacity)
            )),
          this._colorPreviewNew.css(
            "background",
            this._color.toScreenCSS(this._colorOpacity)
          ));
      }),
      (u.prototype.__getUpdateOpacityParams = function () {
        return { isTouchEnabled: false };
      }),
      (u.prototype._updateOpacity = function (e, t, n, GTools) {
        var GEditor = this.__getUpdateColorParams();
        if (e !== this._colorOpacity || "set_opacity" === t || GTools) {
          if (this._activeGradientStop && "set_opacity" === t) return;
          this._activeGradientStop ||
            ((this._opacity = e),
            "set_opacity" !== t &&
              this._settings &&
              this._settings.onOpacity &&
              this._settings.onOpacity(this._opacity, !!n)),
            (this._colorOpacity = e),
            ("set_opacity" !== t && "gradient-stop" !== t) ||
              ((this._oldColorOpacity = this._colorOpacity),
              this._colorPreviewOld.css(
                "background",
                this._oldColor.toScreenCSS(this._oldColorOpacity)
              )),
            this._colorPreviewNew.css(
              "background",
              this._color.toScreenCSS(this._colorOpacity)
            ),
            "slider" !== t &&
              this._opacitySlider.gInputSlider(
                "value",
                Math.round(100 * this._colorOpacity)
              ),
            this._colorComponents
              .find("[data-opacity]")
              .find("input")
              .prop(
                "disabled",
                this._settings &&
                  this._settings.hasOwnProperty("hasOpacity") &&
                  !this._settings.hasOpacity
              )
              .gInputBox(
                "value",
                GCore.GUtil.formatOpacity(100 * this._colorOpacity)
              ),
            this._activeGradientStop &&
              "gradient-stop" !== t &&
              ((this._activeGradientStop.opacity = this._colorOpacity),
              this._updatePatternFromActiveGradient(n)),
            GEditor.isTouchEnabled &&
              (this._sliderColorThumb.css(
                "background",
                this._color.toScreenCSS(1)
              ),
              this._sliderOpacityThumb.css(
                "background",
                this._color.toScreenCSS(this._colorOpacity)
              ));
        }
      }),
      (u.prototype._updatePattern = function (e, t, n, GTools) {
        if (!this._patternUpdateBlocker) {
          ("set_pattern" !== t && "gradient" !== t) ||
            (this._patternUpdateBlocker = true),
            (!n || e instanceof GCore.GGradient) &&
              ((this._pattern = e),
              this._toolbar.find(".pattern-type").each(function (t, n) {
                var GTools = $(n),
                  GCore = GTools.data("type");
                GCore && GTools.prop("selected", !!GCore.isInstance(e));
              }));
          var GEditor = this._pattern && this._pattern instanceof GCore.GGradient,
            CollaborationMergeUtils = this._pattern && this._pattern instanceof GCore.GColor,
            GRichTooltipConfig =
              this._pattern &&
              this._pattern instanceof GCore.GTexturePattern &&
              !(e instanceof GCore.GNoisePattern),
            GSwatchesChangedEvent = this._pattern && this._pattern instanceof GCore.GNoisePattern,
            GInputSliderWidget = this._pattern && this._pattern instanceof GCore.GBackground;
          this._gradientEditor.css("display", GEditor ? "" : "none"),
            this._gradientActions.css("display", GEditor ? "" : " none"),
            this._colorEditor.css("display", CollaborationMergeUtils || GEditor ? "" : "none"),
            this._palettes.css("display", CollaborationMergeUtils || GEditor || GRichTooltipConfig || GSwatchesChangedEvent ? "" : "none"),
            GRichTooltipConfig || GSwatchesChangedEvent
              ? (this._palettes
                  .find(".chooser")
                  .find("button[data-palette!='swatches']")
                  .css("display", "none"),
                this._activatePalette("swatches"))
              : this._palettes
                  .find(".chooser")
                  .find("button")
                  .css("display", ""),
            this._patternEditor.css("display", GRichTooltipConfig && !GSwatchesChangedEvent ? "" : "none"),
            this._noiseEditor.css("display", GSwatchesChangedEvent ? "" : "none"),
            ("set_pattern" === t || ("set_type" === t && !GEditor)) &&
              ((this._activeGradient = null),
              (this._activeGradientStop = null));
          var GSystemDialog = null;
          if (GEditor) {
            if (
              (this._gradientEditor.css(
                "background",
                GCore.GPattern.asCSSBackground(
                  new GCore.GLinearGradient(this._pattern.getStops()),
                  this._opacity
                )
              ),
              "set_pattern" === t || "set_type" === t)
            ) {
              this._gradientEditor.find(".stops").empty(),
                (this._activeGradient = this._pattern.clone());
              var u = null,
                p = null;
              Array.prototype.forEach.call(
                this._activeGradient.getStops(),
                function (e, t) {
                  this._insertGradientStop(e),
                    0 === t && (u = e),
                    this._activeGradientStop &&
                      this._activeGradientStop.position === e.position &&
                      (p = e);
                }.bind(this)
              );
              var g = gDesigner.getWorkspace().getStyleEdManager()
                ? gDesigner.getWorkspace().getStyleEdManager().getActiveEditor()
                : null;
              if (!p && g && g.getPartsSelectionLength()) {
                var h = this._activeGradient.getStops(),
                  f = g.getPartSelection(),
                  m = f && null !== f[0].idx ? f[0].idx : null;
                h && null !== m && h.length > m && ((p = h[m]), (GSystemDialog = m));
              }
              p || (p = u),
                this._setActiveGradientStop(
                  p,
                  e && e instanceof GCore.GColor ? e : null,
                  n
                ),
                this._gradientActions
                  .find("[data-action]")
                  .each(function (t, n) {
                    var GTools = $(n),
                      GEditor = true;
                    switch (GTools.attr("data-action")) {
                      case "rotate-left":
                      case "rotate-right":
                        GEditor = e instanceof GCore.GLinearGradient;
                    }
                    GTools.css("display", GEditor ? "" : "none");
                  });
            }
            null === GSystemDialog &&
              Array.prototype.forEach.call(
                this._activeGradient.getStops(),
                function (e, t) {
                  e === this._activeGradientStop && (GSystemDialog = t);
                }.bind(this)
              );
          } else if (CollaborationMergeUtils) this._updateColor(e, t || "update_pattern", !!GTools);
          else if (GSwatchesChangedEvent) {
            var y = 100 * e.getAmount();
            this._noiseEditor
              .find('.g-input-slider[data-property="noise_amount"]')
              .gInputSlider("value", y),
              this._noiseEditor
                .find('[type="text"][data-property="noise_amount"]')
                .gInputBox("value", GCore.GUtil.formatNumber(y, 0));
            var v = this._patternEditor.find('[data-property="noise_type"]');
            v.children("option").attr("selected", false),
              v
                .children('option[value="' + e.getType() + '"]')
                .attr("selected", true);
          } else if (GRichTooltipConfig) {
            this._updateTexture(e, t || "update_pattern");
            var _ = !!e.getTexture(),
              b =
                -1 !==
                GCore.GTexturePattern.SizeMode.Length.concat(
                  GCore.GTexturePattern.SizeMode.Percent
                ).indexOf(e.getSizeMode()),
              w = function (e, t) {
                var n = this._patternEditor
                  .find('[data-property="' + e + '"]')
                  .prop("disabled", !_);
                n.children("option").attr("selected", false),
                  n.children('option[value="' + t + '"]').attr("selected", true),
                  n.val(t);
              }.bind(this),
              C = function (e, t) {
                this._patternEditor
                  .find('[data-property="' + e + '"]')
                  .prop("disabled", !(_ && b))
                  .val(GCore.GUtil.formatNumber(t));
              }.bind(this);
            w("texture_repeat", e.getRepeatMode()),
              w("texture_position", e.getPosition()),
              w("texture_size", e.getSizeMode()),
              w("texture_scale", e.getScaleMode()),
              C("texture_size_w", e.getWidth()),
              C("texture_size_h", e.getHeight());
            var x = 100 * e.getTileSize();
            if (
              (this._patternEditor
                .find('.g-input-slider[data-property="texture_tile"]')
                .gInputSlider("value", x),
              this._patternEditor
                .find('[type="text"][data-property="texture_tile"]')
                .gInputBox("value", GCore.GUtil.formatNumber(x, 0)),
              this._patternEditor
                .find('[data-property="texture_tile"]')
                .gInputSlider(
                  "disabled",
                  e.getScaleMode() !== GCore.GTexturePattern.ScaleMode.Tile
                ),
              this._patternEditor
                .find('[data-property="texture_size_u"]')
                .text(
                  e.getSizeMode() === GCore.GTexturePattern.SizeMode.Length
                    ? "px"
                    : "%"
                ),
              this._patternEditor
                .find('[data-property="texture_mask"]')
                .prop("checked", e.isMask()),
              this._patternEditor
                .find(".pattern-preview")
                .css("background-image", e.asCSSBackground())
                .css("background-repeat", "no-repeat")
                .css("background-position", "center")
                .css("background-size", "contain"),
              "set_type" === t)
            ) {
              const t = this._clonePattern(e);
              this._updatePattern(t, "texture_pattern");
            }
          }
          this._relayout(!GInputSliderWidget),
            "set_pattern" !== t &&
              this._settings &&
              this._settings.onPattern &&
              this._settings.onPattern(
                n ? this._pattern : e,
                !!GTools,
                null !== GSystemDialog ? GSystemDialog : null
              ),
            GEditor && this._updateOnlineEditorStops(),
            "swatches" === this._activePalette &&
              (this._updateSwatchesPalette(
                this._getSwatchScope("global", this._pattern)
              ),
              this._updateSwatchesPalette(
                this._getSwatchScope("document", this._pattern)
              )),
            (this._patternUpdateBlocker = false);
        }
      }),
      (u.prototype._styleEditorHandler = function (e) {
        if (e.type === GTools.GStyleEdManager.EditorEventType.ActivePointChange) {
          var module = this._activeGradient ? this._activeGradient.getStops() : null,
            require = e.data ? e.data.idx : null;
          module && null !== require && module.length > require
            ? this._setActiveGradientStop(module[require])
            : module && this._setActiveGradientStop(module.null),
            this._updatePatternFromActiveGradient();
        }
      }),
      (u.prototype._closeIfNeeded = function (e) {
        !this.isOpenned() || (e.data && e.data.chooserOn) || this.close();
      }),
      (u.prototype._updateColorFromColorSlider = function (e) {
        var t = parseInt(this._colorSlider.gColorSlider("value")),
          n = null,
          GTools = null;
        if (
          this._colorMode === u.ColorMode.RGB ||
          this._colorMode === u.ColorMode.HSV
        ) {
          switch (this._colorMode) {
            case u.ColorMode.RGB:
              GTools = GCore.GColor.rgbToHSV(this._color.toScreen());
              break;
            case u.ColorMode.HSV:
              (GTools = []),
                this._colorComponents
                  .find("[data-component-index]")
                  .each(function (e, t) {
                    var n = $(t),
                      GCore = parseInt(n.attr("data-component-index"));
                    0 !== GCore &&
                      (GTools[GCore] =
                        parseInt(n.find("input").gInputBox("value")) / 100);
                  });
          }
          GTools &&
            ((GTools = [t, GTools[1], GTools[2]]),
            (n =
              this._colorMode === u.ColorMode.RGB
                ? new GCore.GRGBColor(GCore.GColor.hsvToRGB(GTools))
                : new GCore.GHSVColor(GTools)),
            (this._extendedGamutInitiated = u.ExtendedGamut.COLOR_SLIDER),
            this._updateColor(n, "slider", e, true),
            this._updateColorMap(),
            (this._extendedGamutInitiated = null));
        }
      }),
      (u.prototype._updateColorSliderFromColor = function () {
        var e;
        switch (this._colorMode) {
          case u.ColorMode.RGB:
          case u.ColorMode.HSV:
            if (
              this._extendedGamutInitiated === u.ExtendedGamut.COLOR_SLIDER ||
              this._extendedGamutInitiated === u.ExtendedGamut.MAP
            )
              return;
            (e =
              this._extendedGamutInitiated === u.ExtendedGamut.COMPONENTS &&
              this._extValue &&
              this._colorMode === u.ColorMode.HSV
                ? this._extValue[0]
                : GCore.GColor.rgbToHSV(this._color.toScreen())[0]),
              parseInt(this._colorSlider.gColorSlider("value")) !== e &&
                (this._colorSlider.gColorSlider("value", e),
                this._updateColorMap());
            break;
          case u.ColorMode.CMYK:
        }
      }),
      (u.prototype._updateColorFromColorComponents = function () {
        var e = [];
        this._colorComponents
          .find("[data-component-index]")
          .each(function (t, n) {
            var GTools = $(n),
              GCore = parseInt(GTools.attr("data-component-index"));
            e[GCore] = parseInt(GTools.find("input").gInputBox("value"));
          });
        var t = null;
        switch (this._colorMode) {
          case u.ColorMode.RGB:
            t = new GCore.GRGBColor(e);
            break;
          case u.ColorMode.HSV: {
            const n = e.map(function (e, t) {
              return 0 === t ? e : e / 100;
            });
            t = new GCore.GHSVColor(n);
            break;
          }
          case u.ColorMode.CMYK:
            t = new GCore.GCMYKColor(
              e.map(function (e) {
                return e / 100;
              })
            );
        }
        (this._extendedGamutInitiated = u.ExtendedGamut.COMPONENTS),
          t && this._updateColor(t, "components", false, true),
          (this._extendedGamutInitiated = null);
      }),
      (u.prototype._updateColorComponentsFromColor = function () {
        if (
          (this._colorComponents
            .find("[data-css]")
            .find("input")
            .gInputBox("value", this._color.toScreenCSS()),
          this._extendedGamutInitiated !== u.ExtendedGamut.COMPONENTS ||
            this._colorMode !== u.ColorMode.HSV)
        ) {
          var exports = null,
            module = function (e, t) {
              return t;
            };
          switch (this._colorMode) {
            case u.ColorMode.RGB:
              exports = this._color.toScreen();
              break;
            case u.ColorMode.HSV:
              (exports =
                (this._extendedGamutInitiated !==
                  u.ExtendedGamut.COLOR_SLIDER &&
                  this._extendedGamutInitiated !== u.ExtendedGamut.MAP) ||
                !this._extValue
                  ? this._color instanceof GCore.GHSVColor
                    ? this._color.getValue()
                    : GCore.GColor.rgbToHSV(this._color.toScreen())
                  : this._extValue),
                (module = function (e, t) {
                  return 0 === e ? t : GCore.GUtil.formatNumber(100 * t, 0);
                });
              break;
            case u.ColorMode.CMYK:
              (exports =
                this._color instanceof GCore.GCMYKColor
                  ? this._color.getValue()
                  : GCore.GColor.rgbToCMYK(this._color.toScreen())),
                (module = function (e, t) {
                  return GCore.GUtil.formatNumber(100 * t, 0);
                });
          }
          this._colorComponents
            .find("[data-component-index]")
            .each(function (n, GTools) {
              var GCore = $(GTools),
                GEditor = parseInt(GCore.attr("data-component-index"));
              GCore.find("input").gInputBox("value", module(GEditor, exports[GEditor]));
            });
        }
      }),
      (u.prototype._updateMapMarker = function () {
        if (this._extendedGamutInitiated !== u.ExtendedGamut.MAP) {
          var exports,
            module = this._colorMap.find("canvas")[0],
            require = module.width,
            GTools = module.height;
          exports =
            (this._extendedGamutInitiated !== u.ExtendedGamut.COLOR_SLIDER &&
              this._extendedGamutInitiated !== u.ExtendedGamut.COMPONENTS) ||
            !this._extValue ||
            this._colorMode !== u.ColorMode.HSV
              ? GCore.GColor.rgbToHSV(this._color.toScreen())
              : this._extValue;
          var GEditor = Math.round(exports[1] * require),
            CollaborationMergeUtils = Math.round((1 - exports[2]) * GTools);
          this._setMarkerPosition(GEditor, CollaborationMergeUtils);
        }
      }),
      (u.prototype._setMarkerPosition = function (e, t) {
        var n = this._colorMap.find(".marker"),
          GTools = this._colorMap.find("canvas"),
          GCore = GTools[0].width,
          GEditor = GTools[0].height,
          CollaborationMergeUtils = n.width() / 2,
          GRichTooltipConfig = n.height() / 2;
        e < CollaborationMergeUtils && (e = CollaborationMergeUtils),
          t < GRichTooltipConfig && (t = GRichTooltipConfig),
          e > GCore - CollaborationMergeUtils && (e = GCore - CollaborationMergeUtils),
          t > GEditor - GRichTooltipConfig && (t = GEditor - GRichTooltipConfig),
          n.css({ left: e + "px", top: t + "px" });
      }),
      (u.prototype._updateColorMap = function () {
        var e = this._colorMap.find("canvas")[0];
        this._colorMap.width() &&
          this._colorMap.height() &&
          ((e.width = this._colorMap.width()),
          (e.height = this._colorMap.height()));
        var t = e.width,
          n = e.height,
          GTools = e.getContext("2d"),
          GEditor = this._colorSlider.gColorSlider("value"),
          CollaborationMergeUtils = GTools.getImageData(0, 0, t, n);
        if (CollaborationMergeUtils) {
          for (var GRichTooltipConfig = 0; GRichTooltipConfig < t; ++GRichTooltipConfig)
            for (var GSwatchesChangedEvent = 0; GSwatchesChangedEvent < n; ++GSwatchesChangedEvent) {
              var GInputSliderWidget = GCore.GColor.hsvToRGB([parseInt(GEditor), GRichTooltipConfig / t, 1 - GSwatchesChangedEvent / n]),
                GSystemDialog = 4 * (GSwatchesChangedEvent * t + GRichTooltipConfig);
              (CollaborationMergeUtils.data[GSystemDialog] = GInputSliderWidget[0]),
                (CollaborationMergeUtils.data[GSystemDialog + 1] = GInputSliderWidget[1]),
                (CollaborationMergeUtils.data[GSystemDialog + 2] = GInputSliderWidget[2]),
                (CollaborationMergeUtils.data[GSystemDialog + 3] = 255);
            }
          GTools.putImageData(CollaborationMergeUtils, 0, 0);
        }
      }),
      (u.prototype._colorMapMouseDown = function (e) {
        if (e.originalEvent.isTrusted) {
          var module = function (e, t) {
              if (!e.isTrusted) return;
              e.cancelable && e.preventDefault();
              let require = e.pageX,
                GTools = e.pageY;
              if ("touchstart" === e.type || "touchmove" === e.type) {
                const t = e.changedTouches[0];
                (require = t && t.pageX), (GTools = t && t.pageY);
              }
              var GEditor = this._colorMap.find("canvas")[0],
                CollaborationMergeUtils = GEditor.width,
                GRichTooltipConfig = GEditor.height,
                GSwatchesChangedEvent = this._colorMap.offset(),
                GInputSliderWidget = Math.max(0, Math.min(CollaborationMergeUtils, Math.round(require - GSwatchesChangedEvent.left))),
                GSystemDialog = Math.max(0, Math.min(GRichTooltipConfig, Math.round(GTools - GSwatchesChangedEvent.top)));
              const p = [
                parseInt(this._colorSlider.gColorSlider("value")),
                GInputSliderWidget / CollaborationMergeUtils,
                1 - GSystemDialog / GRichTooltipConfig,
              ];
              var g;
              (g =
                this._colorMode === u.ColorMode.HSV
                  ? new GCore.GHSVColor(p)
                  : new GCore.GRGBColor(GCore.GColor.hsvToRGB(p))),
                this._setMarkerPosition(GInputSliderWidget, GSystemDialog),
                (this._extendedGamutInitiated = u.ExtendedGamut.MAP),
                this._updateColor(g, "map", !t, t),
                (this._extendedGamutInitiated = null);
            }.bind(this),
            require = function (e) {
              module(e, true),
                e.stopPropagation(),
                document.removeEventListener("mouseup", require, true),
                document.removeEventListener("mousemove", module, true),
                document.removeEventListener("touchmove", module, true);
            };
          module(e.originalEvent),
            document.addEventListener("mouseup", require, true),
            document.addEventListener("mousemove", module, true),
            document.addEventListener("touchmove", module, true);
        }
      }),
      (u.prototype._defineStopInitColor = function (e) {
        var t = this._gradientEditor.find(".stop:visible"),
          n = function (e) {
            return Number($(e).css("left").replace("px", ""));
          },
          GTools = function (e) {
            var t = $(e).data("stop");
            return t && t.color instanceof GCore.GColor
              ? t.color.toScreen()
              : [0, 0, 0];
          },
          GEditor = [],
          CollaborationMergeUtils = [],
          GRichTooltipConfig = null,
          GSwatchesChangedEvent = null,
          GInputSliderWidget = null,
          GSystemDialog = null;
        for (let GTools = 0; GTools < t.length; ++GTools)
          n(t[GTools]) < e ? CollaborationMergeUtils.push(t[GTools]) : GEditor.push(t[GTools]);
        for (let e = 0; e < CollaborationMergeUtils.length; ++e)
          GRichTooltipConfig
            ? n(CollaborationMergeUtils[e]) > GInputSliderWidget && ((GRichTooltipConfig = CollaborationMergeUtils[e]), (GInputSliderWidget = n(CollaborationMergeUtils[e])))
            : ((GRichTooltipConfig = CollaborationMergeUtils[e]), (GInputSliderWidget = n(CollaborationMergeUtils[e])));
        for (let e = 0; e < GEditor.length; ++e)
          GSwatchesChangedEvent
            ? n(GEditor[e]) < GSystemDialog && ((GSwatchesChangedEvent = GEditor[e]), (GSystemDialog = n(GEditor[e])))
            : ((GSwatchesChangedEvent = GEditor[e]), (GSystemDialog = n(GEditor[e])));
        var p = (100 * (e -= GInputSliderWidget)) / (GSystemDialog -= GInputSliderWidget) / 100;
        const g = (function (e, t, n) {
          var GTools = ((2 * n - 1) / 1 + 1) / 2,
            GCore = 1 - GTools;
          return [
            Math.round(t[0] * GTools + e[0] * GCore),
            Math.round(t[1] * GTools + e[1] * GCore),
            Math.round(t[2] * GTools + e[2] * GCore),
          ];
        })(GTools(GRichTooltipConfig), GTools(GSwatchesChangedEvent), p);
        switch (this._colorMode) {
          case u.ColorMode.CMYK:
            return new GCore.GCMYKColor(GCore.GColor.rgbToCMYK(g));
          case u.ColorMode.HSV:
            return new GCore.GHSVColor(GCore.GColor.rgbToHSV(g));
          default:
            return new GCore.GRGBColor(g);
        }
      }),
      (u._createPatternOption = function (e) {
        return $("<option></option>")
          .addClass("pattern-type")
          .data("type", e)
          .attr("data-title", e.name)
          .attr("value", e.name)
          .text(e.name);
      }),
      (u.prototype._relayout = function () {
        this._container.gOverlay("relayout", { preserveTop: false });
      }),
      (u.getGradientStopsFromCurrentPattern = function (e) {
        var t;
        return (
          e instanceof GCore.GGradient
            ? (t = e.getClonedStops())
            : ((t = [
                { color: GCore.GRGBColor.WHITE, position: 0, opacity: 1 },
                { color: GCore.GRGBColor.BLACK, position: 1, opacity: 1 },
              ]),
              e instanceof GCore.GColor &&
                !GCore.GUtil.equals(e.toScreen(), t[1].color.toScreen()) &&
                (t[0].color = e)),
          t
        );
      }),
      (u.PATTERN_TYPES = null),
      (u.initPatternType = function () {
        return [
          {
            name: GCore.GLocale.get(
              new GCore.GLocaleKey("GPatternChooser", "pattern-type.color")
            ),
            cssBackgroundImage: new GCore.GLinearGradient(
              [
                { color: GCore.GRGBColor.WHITE, position: 0, opacity: 0.5 },
                { color: GCore.GRGBColor.WHITE, position: 1, opacity: 0.5 },
              ],
              1,
              GCore.GMath.toRadians(90)
            ).asCSSBackground(),
            isCompatible: function (e) {
              return e === GCore.GColor;
            },
            isInstance: function (e) {
              return e && e instanceof GCore.GColor;
            },
            createDefault: function (e) {
              if (e instanceof GCore.GGradient)
                for (var module = e.getStops(), require = 0; require < module.length; ++require)
                  if (module[require].hasOwnProperty("color")) return module[require].color;
              return new GCore.GRGBColor();
            },
          },
          {
            name: GCore.GLocale.get(
              new GCore.GLocaleKey("GPatternChooser", "pattern-type.lineargradient")
            ),
            cssBackgroundImage: new GCore.GLinearGradient(
              [
                { color: GCore.GRGBColor.WHITE, position: 0, opacity: 1 },
                { color: GCore.GRGBColor.BLACK, position: 1, opacity: 0 },
              ],
              1,
              GCore.GMath.toRadians(90)
            ).asCSSBackground(),
            isCompatible: function (e) {
              return e === GCore.GLinearGradient || e === GCore.GGradient;
            },
            isInstance: function (e) {
              return e && e instanceof GCore.GLinearGradient;
            },
            createDefault: function (e) {
              return new GCore.GLinearGradient(
                u.getGradientStopsFromCurrentPattern(e)
              );
            },
          },
          {
            name: GCore.GLocale.get(
              new GCore.GLocaleKey("GPatternChooser", "pattern-type.radialgradient")
            ),
            cssBackgroundImage: new GCore.GRadialGradient([
              { color: GCore.GRGBColor.WHITE, position: 0, opacity: 1 },
              { color: GCore.GRGBColor.BLACK, position: 1, opacity: 0 },
            ]).asCSSBackground(),
            isCompatible: function (e) {
              return e === GCore.GRadialGradient || e === GCore.GGradient;
            },
            isInstance: function (e) {
              return e && e instanceof GCore.GRadialGradient;
            },
            createDefault: function (e) {
              return new GCore.GRadialGradient(
                u.getGradientStopsFromCurrentPattern(e)
              );
            },
          },
          {
            name: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GPatternChooser",
                "pattern-type.angulargradient"
              )
            ),
            cssBackgroundImage: new GCore.GAngularGradient([
              { color: GCore.GRGBColor.WHITE, position: 0, opacity: 1 },
              { color: GCore.GRGBColor.BLACK, position: 1, opacity: 0 },
            ]).asCSSBackground(),
            isCompatible: function (e) {
              return e === GCore.GAngularGradient || e === GCore.GGradient;
            },
            isInstance: function (e) {
              return e && e instanceof GCore.GAngularGradient;
            },
            createDefault: function (e) {
              return new GCore.GAngularGradient(
                u.getGradientStopsFromCurrentPattern(e)
              );
            },
          },
          {
            name: GCore.GLocale.get(
              new GCore.GLocaleKey("GPatternChooser", "pattern-type.texture")
            ),
            cssBackgroundImage:
              'url("data:image/svg+xml;base64,' +
              btoa(
                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">\n                        <circle r="9.2" stroke-width="2" stroke="white" fill="none"/>\n                        <circle cy="18.4" r="9.2" stroke-width="2px" stroke="white" fill="none"/>\n                        <circle cx="18.4" cy="18.4" r="9.2" stroke-width="2" stroke="white" fill="none"/>\n                    </svg>'
              ) +
              '")',
            isCompatible: function (e) {
              return e === GCore.GTexturePattern;
            },
            isInstance: function (e) {
              return (
                e &&
                e instanceof GCore.GTexturePattern &&
                !(e instanceof GCore.GNoisePattern)
              );
            },
            createDefault: function () {
              var e = GCore.GNode.deserialize(
                  '[{"@":"group","$":[{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,370.93546258325506,25.987797270522503],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}},{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,410.7307331490452,25.987797270522503],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}},{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,390.7793771686299,44.58515959609013],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}},{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,430.57464773441995,44.58515959609013],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}},{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,370.9623229320152,63.96998301267038],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}},{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,410.75759349780526,63.96998301267038],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}},{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,390.80623751739,82.56734533823798],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}},{"@":"rectangle","uf":true,"ct":"R","sl":0,"reftxt":null,"trf":[9.948817641447532,0,0,9.692411708290129,430.60150808318014,82.56734533823798],"_sdf":84,"_layers":{"@":"paintLayers","$":[{"@":"fillPaintLayer","_pt":"C#[0,0,0]"}]}}]}]'
                ).pop(),
                t = new GCore.GTexturePattern(e, GCore.GTexturePattern.RepeatMode.Both);
              return t.setScene(gDesigner.getActiveDocument().getScene()), t;
            },
          },
          {
            name: GCore.GLocale.get(
              new GCore.GLocaleKey("GPatternChooser", "pattern-type.noise")
            ),
            cssBackgroundImage:
              'url("data:image/svg+xml;base64,' +
              btoa(
                '<svg width="100%" height="100%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><rect x="-0.994" y="-1.097" width="24.763" height="23.271" style="fill:transparent;"/><path d="M7.689,17.9l0.848,0l0,0.565l-0.848,0l0,0.848l-0.565,0l0,-0.848l-0.848,0l0,-0.565l0.848,0l0,-0.848l0.565,0l0,0.848Zm5.769,0l0.848,0l0,0.565l-0.848,0l0,0.848l-0.565,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.848l0.565,0l0,0.848Zm5.094,0l0.847,0l0,0.565l-0.847,0l0,0.848l-0.566,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.848l0.566,0l0,0.848Zm-16.58,0l0.847,0l0,0.565l-0.847,0l0,0.848l-0.566,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.848l0.566,0l0,0.848Zm3.015,-2.33l1.321,0l0,0.881l-1.321,0l0,1.321l-0.88,0l0,-1.321l-1.321,0l0,-0.881l1.321,0l0,-1.32l0.88,0l0,1.32Zm5.752,0l1.32,0l0,0.881l-1.32,0l0,1.321l-0.881,0l0,-1.321l-1.32,0l0,-0.881l1.32,0l0,-1.32l0.881,0l0,1.32Zm5.764,0l1.32,0l0,0.881l-1.32,0l0,1.321l-0.881,0l0,-1.321l-1.321,0l0,-0.881l1.321,0l0,-1.32l0.881,0l0,1.32Zm-8.814,-2.896l0.848,0l0,0.566l-0.848,0l0,0.847l-0.565,0l0,-0.847l-0.848,0l0,-0.566l0.848,0l0,-0.847l0.565,0l0,0.847Zm5.769,0l0.848,0l0,0.566l-0.848,0l0,0.847l-0.565,0l0,-0.847l-0.847,0l0,-0.566l0.847,0l0,-0.847l0.565,0l0,0.847Zm5.094,0l0.847,0l0,0.566l-0.847,0l0,0.847l-0.566,0l0,-0.847l-0.847,0l0,-0.566l0.847,0l0,-0.847l0.566,0l0,0.847Zm-16.58,0l0.847,0l0,0.566l-0.847,0l0,0.847l-0.566,0l0,-0.847l-0.847,0l0,-0.566l0.847,0l0,-0.847l0.566,0l0,0.847Zm3.015,-2.91l1.321,0l0,0.88l-1.321,0l0,1.321l-0.88,0l0,-1.321l-1.321,0l0,-0.88l1.321,0l0,-1.321l0.88,0l0,1.321Zm5.752,0l1.32,0l0,0.88l-1.32,0l0,1.321l-0.881,0l0,-1.321l-1.32,0l0,-0.88l1.32,0l0,-1.321l0.881,0l0,1.321Zm5.764,0l1.32,0l0,0.88l-1.32,0l0,1.321l-0.881,0l0,-1.321l-1.321,0l0,-0.88l1.321,0l0,-1.321l0.881,0l0,1.321Zm-8.814,-2.932l0.848,0l0,0.565l-0.848,0l0,0.848l-0.565,0l0,-0.848l-0.848,0l0,-0.565l0.848,0l0,-0.848l0.565,0l0,0.848Zm5.769,0l0.848,0l0,0.565l-0.848,0l0,0.848l-0.565,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.848l0.565,0l0,0.848Zm5.094,0l0.847,0l0,0.565l-0.847,0l0,0.848l-0.566,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.848l0.566,0l0,0.848Zm-16.58,0l0.847,0l0,0.565l-0.847,0l0,0.848l-0.566,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.848l0.566,0l0,0.848Zm3.015,-2.833l1.321,0l0,0.881l-1.321,0l0,1.32l-0.88,0l0,-1.32l-1.321,0l0,-0.881l1.321,0l0,-1.321l0.88,0l0,1.321Zm5.752,2.201l-0.881,0l0,-1.32l-1.32,0l0,-0.881l1.32,0l0,-1.321l0.881,0l0,1.321l1.32,0l0,0.881l-1.32,0l0,1.32Zm5.764,0l-0.881,0l0,-1.32l-1.321,0l0,-0.881l1.321,0l0,-1.321l0.881,0l0,1.321l1.32,0l0,0.881l-1.32,0l0,1.32Zm-8.814,-4.515l0.848,0l0,0.565l-0.848,0l0,0.848l-0.565,0l0,-0.848l-0.848,0l0,-0.565l0.848,0l0,-0.847l0.565,0l0,0.847Zm5.769,0l0.848,0l0,0.565l-0.848,0l0,0.848l-0.565,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.847l0.565,0l0,0.847Zm5.094,0l0.847,0l0,0.565l-0.847,0l0,0.848l-0.566,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.847l0.566,0l0,0.847Zm-16.58,0l0.847,0l0,0.565l-0.847,0l0,0.848l-0.566,0l0,-0.848l-0.847,0l0,-0.565l0.847,0l0,-0.847l0.566,0l0,0.847Z" style="fill:#fff;"/></svg>'
              ) +
              '")',
            isCompatible: function (e) {
              return e === GCore.GNoisePattern;
            },
            isInstance: function (e) {
              return e && e instanceof GCore.GNoisePattern;
            },
            createDefault: function () {
              return new GCore.GNoisePattern();
            },
          },
          {
            name: GCore.GLocale.get(
              new GCore.GLocaleKey("GPatternChooser", "pattern-type.backgroundfill")
            ),
            cssBackgroundImage:
              'url("data:image/svg+xml;base64,' +
              btoa(
                '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 5 10"><line x1="-2" y1="1" x2="7" y2="10" stroke="white" stroke-width="2"/><line x1="-2" y1="6" x2="7" y2="15" stroke="white" stroke-width="2"/><line x1="-2" y1="-4" x2="7" y2="5" stroke="white" stroke-width="2"/></svg>'
              ) +
              '")',
            isCompatible: function (e) {
              return e === GCore.GBackground;
            },
            isInstance: function (e) {
              return e && e instanceof GCore.GBackground;
            },
            createDefault: function () {
              return new GCore.GBackground();
            },
          },
        ];
      }),
      (function (e) {
        var t = {
          init: function (n) {
            return (
              (n = e.extend({ asButton: true, label: "", singleOption: false }, n)),
              window.gPatternChooser._updateSettings(n, true),
              this.each(function () {
                var GTools = this,
                  GEditor = e(this),
                  CollaborationMergeUtils = null;
                n.label &&
                  (CollaborationMergeUtils = e("<span />")
                    .addClass("label")
                    .css("margin-left", "5px")
                    .text(n.label));
                var GSwatchesChangedEvent = n.simplified,
                  GInputSliderWidget = e("<span />")
                    .addClass("preview")
                    .data("gpatternchooser", { options: n, opacity: 1 })
                    .on(
                      "click",
                      function (GCore, CollaborationMergeUtils) {
                        if (
                          (gDesigner.isTouchEnabled()
                            ? (window.gPatternChooser =
                                window.gPatternChooserTouch)
                            : (window.gPatternChooser =
                                window.gPatternChooserNormal),
                          n.onOpen
                            ? n.onOpen.call(this)
                            : gDesigner.stats("patternchooser_click_open"),
                          GCore.stopPropagation(),
                          GCore.preventDefault(),
                          !GEditor.hasClass("g-disabled"))
                        ) {
                          var GRichTooltipConfig = GEditor.data("gpatternchooser");
                          GRichTooltipConfig.options.asButton && GEditor.addClass("g-active");
                          var GSwatchesChangedEvent = e.extend({}, GRichTooltipConfig.options),
                            GInputSliderWidget = e.extend(GSwatchesChangedEvent, {
                              onPattern: function (e, n, GCore) {
                                t.value.call(GTools, e),
                                  GEditor.trigger("patternchange", [
                                    e,
                                    null,
                                    n,
                                    true,
                                    null !== GCore ? GCore : null,
                                  ]);
                              },
                              onOpacity: function (e, n) {
                                t.opacity.call(GTools, e),
                                  GEditor.trigger("patternchange", [
                                    undefined,
                                    e,
                                    n,
                                    true,
                                  ]);
                              },
                              onClose: function (e, t, n, GTools) {
                                var GCore = false;
                                return (
                                  GEditor.trigger("chooserclose", [
                                    function () {
                                      (GCore = true), n && n();
                                    },
                                    GTools,
                                  ]),
                                  !GCore &&
                                    (GRichTooltipConfig.options.asButton &&
                                      GEditor.removeClass("g-active"),
                                    true)
                                );
                              },
                            });
                          window.gPatternChooser.open(GEditor, GInputSliderWidget),
                            window.gPatternChooser.setOpacity(
                              t.opacity.call(GTools)
                            ),
                            window.gPatternChooser.setPattern(t.value.call(GTools)),
                            GEditor.trigger("chooseropen"),
                            null !== CollaborationMergeUtils &&
                              window.gPatternChooser.setActiveGradientStopByIdx(
                                CollaborationMergeUtils
                              );
                        }
                      }.bind(this)
                    )
                    .gPatternTarget()
                    .gRichTooltip(
                      GRichTooltipConfig.GRichTooltipConfig.from({
                        title: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPatternChooser",
                            "text.color-picker-tooltip-title"
                          )
                        ),
                        description: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPatternChooser",
                            "text.color-picker-tooltip-description"
                          )
                        ),
                        learnMore:
                          "",
                      })
                    );
                if (
                  (n.asButton && GInputSliderWidget.addClass("g-button"),
                  GEditor
                    .addClass(
                      GSwatchesChangedEvent ? "g-pattern-chooser-simplified" : "g-pattern-chooser"
                    )
                    .data("gpatternchooser", { options: n, opacity: 1 }),
                  !GSwatchesChangedEvent && !n.noEyedropper)
                ) {
                  var GSystemDialog = e("<div/>")
                    .addClass("eyedropper")
                    .addClass("eye-drop")
                    .gEyeDropper({ onClick: n.onClickEyedropper })
                    .on("colorchange", function (e, t) {
                      GEditor.trigger("patternchange", [
                        new GCore.GRGBColor(t),
                        t[3] / 255,
                        false,
                      ]);
                    })
                    .removeClass("g-button")
                    .gRichTooltip(
                      GRichTooltipConfig.GRichTooltipConfig.from({
                        title: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPatternChooser",
                            "text.eyedropper-tooltip-title"
                          )
                        ),
                        description: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPatternChooser",
                            "text.eyedropper-tooltip-description"
                          )
                        ),
                      })
                    );
                  GInputSliderWidget.append(GSystemDialog);
                }
                n.noEyedropper && GEditor.addClass("only-picker"),
                  GEditor.append(GInputSliderWidget).append(CollaborationMergeUtils);
              })
            );
          },
          opacity: function (n) {
            var GTools = e(this),
              GCore = GTools.data("gpatternchooser");
            return arguments.length
              ? (GCore && ((GCore.opacity = n), t._updateBackground.call(this)), this)
              : GCore
              ? GCore.opacity
              : 1;
          },
          value: function (n) {
            var GTools = e(this);
            return arguments.length
              ? (GTools.find(".preview").gPatternTarget("value", n),
                GTools.find(".eye-drop").gEyeDropper("setValue", n),
                t._updateBackground.call(this),
                this)
              : GTools.find(".preview").gPatternTarget("value");
          },
          setPattern: function (t) {
            var n = e(this);
            return (
              gPatternChooser.isOpenned(n) && gPatternChooser.setPattern(t),
              this
            );
          },
          nullValue: function (n) {
            var GTools = e(this),
              GCore = GTools.data("gpatternchooser");
            return arguments.length
              ? (GCore && (GCore.nullValue = n), t._updateBackground.call(this), this)
              : GCore
              ? GCore.nullValue
              : null;
          },
          close: function () {
            gPatternChooser.isOpenned(e(this)) && gPatternChooser.close();
          },
          openEyeDropper: function (t, n) {
            e(this).find(".eye-drop").gEyeDropper("setActive", true, t, n);
          },
          _updateBackground: function () {
            var t = e(this),
              n = t.data("gpatternchooser"),
              GTools = t.find(".preview").gPatternTarget("value"),
              GEditor = t.find(".preview");
            let CollaborationMergeUtils;
            !GTools && n && n.nullValue && (GTools = n.nullValue),
              GTools instanceof GCore.GTexturePattern
                ? ((CollaborationMergeUtils = GCore.GPattern.asCSSBackground(
                    GTools,
                    n && "number" == typeof n.opacity ? n.opacity : 1
                  )),
                  GEditor
                    .css("background-image", CollaborationMergeUtils)
                    .css("background-repeat", GTools.getRepeatMode())
                    .css("background-size", "contain"),
                  t.find(".eye-drop").gEyeDropper("setValue", GTools))
                : GTools &&
                  "function" == typeof GTools.asCSSBackground &&
                  ((CollaborationMergeUtils = GCore.GPattern.asCSSBackground(
                    GTools,
                    n && "number" == typeof n.opacity ? n.opacity : 1
                  )),
                  GEditor.css("background", CollaborationMergeUtils),
                  t.find(".eye-drop").gEyeDropper("setValue", CollaborationMergeUtils));
          },
          updateSettings: function (t) {
            var n = e(this).data("gpatternchooser");
            return n && n.options && e.extend(n.options, t), this;
          },
        };
        e.fn.gPatternChooser = function (n) {
          return t[n]
            ? t[n].apply(this, Array.prototype.slice.call(arguments, 1))
            : "object" != typeof n && n
            ? void e.error(
                "Method " + n + " does not exist on jQuery.gPatternChooser"
              )
            : t.init.apply(this, arguments);
        };
      })(jQuery),
      (u.prototype._clonePattern = function (e) {
        const module = e.clone();
        return module.setScene(gDesigner.getActiveDocument().getScene()), module;
      }),
      (exports.exports = u);
  }