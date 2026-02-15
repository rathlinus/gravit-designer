/**
 * Webpack Module #1339
 * Type: class
 * Name: GPageProperties
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(58) /* module_58 */, require(20) /* module_20 */, require(3) /* module_3 */, require(71) /* module_71 */, require(34) /* module_34 */, require(4) /* module_4 */, require(41) /* module_41 */, require(13) /* module_13 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var i = require(1) /* module */,
      a = require(53) /* module */,
      r = require(40) /* module_40 */,
      s = require(10) /* module_10 */,
      l = require(67) /* GRichTooltipConfig */,
      c = o(require(340) /* GTouchTool */),
      d = require(123) /* GProperties */,
      u = require(1153) /* module_1153 */,
      p = require(135) /* GSettingChangedEvent */,
      g = require(603) /* module_603 */,
      h = require(1328) /* module_1328 */,
      f = require(442) /* module_442 */;
    const m = require(44) /* GSystemDialog */,
      y = require(1604) /* module_1604 */,
      v = require(78) /* GDocumentEvent */;
    function _() {}
    i.GObject.inherit(_, d),
      (_.prototype._panel = null),
      (_.prototype._canvasPropertiesRowInTouch = null),
      (_.prototype._canvasPropertiesRowInNormal = null),
      (_.prototype._hrAfterCanvasRow = null),
      (_.prototype._bleedRowInTouch = null),
      (_.prototype._bleedRowInNormal = null),
      (_.prototype._pageSizeRowInNormal = null),
      (_.prototype._hrAfterPageSizeRow = null),
      (_.prototype._toolbar = null),
      (_.prototype._document = null),
      (_.prototype._oldDocument = null),
      (_.prototype._pages = null),
      (_.prototype._styleEditorChange = false),
      (_.prototype._styleEdOn = false),
      (_.prototype._ownChange = false),
      (_.prototype._chooserElem = null),
      (_.prototype._clipContentButton = null),
      (_.prototype._excludedPresets = [u.TYPE.MERCH]),
      (_.prototype._createInput = function (e) {
        var t = this,
          n = this;
        if ("bck" === e)
          return $("<div></div>")
            .attr("data-property", e)
            .gPatternChooser({
              types: [i.GColor, i.GGradient, i.GTexturePattern],
            })
            .on("chooseropen", function () {
              gDesigner
                .getWorkspace()
                .getStyleEdManager()
                .updateEditor(n._pages[0], e, false),
                (n._styleEdOn = true),
                (n._chooserElem = $(this)),
                n.updatePropertiesAvailability(
                  gDesigner.getActiveDocument().getScene().getActivePage()
                );
            })
            .on("chooserclose", function (e, t, o) {
              if (
                gDesigner.getWorkspace().getStyleEdManager().getOverlayLock(o)
              )
                t();
              else {
                if (n._document && n._document.hasCDR()) {
                  var a = gPatternChooser.getPattern();
                  !a ||
                    a instanceof i.GRGBColor ||
                    m.showCDRUnsupportedObjectWarning();
                }
                (n._styleEdOn = false),
                  gDesigner
                    .getWorkspace()
                    .getStyleEdManager()
                    .deactivateEditor();
              }
              n._chooserElem = null;
            })
            .on("patternchange", function (e, t, o, a, r, s) {
              var l = [],
                c = [];
              if (
                (undefined !== t && (l.push("bck"), c.push(t)),
                "number" == typeof o && (l.push("bop"), c.push(o)),
                n._pages)
              )
                if (a)
                  n._pages.forEach(function (e) {
                    e.setProperties(l, c, false, false, a);
                  });
                else {
                  var d = null;
                  r &&
                    ((d = { chooserOn: true, pagePattern: true }),
                    null !== s && (d.activeStopIdx = s)),
                    n._assignProperties(
                      l,
                      c,
                      i.GLocale.get(
                        new i.GLocaleKey(
                          "GPageProperties",
                          "action.change-background"
                        )
                      ),
                      d
                    );
                }
            });
        if ("preset-size" === e)
          return $("<select></select>")
            .attr("data-property", "preset-size")
            .css("width", "100%")
            .on("change", (e) => {
              var t = $(e.target).find("option:selected"),
                n = t.attr("data-preset-locale-en"),
                o = "";
              (o = n || t.text()),
                gDesigner.stats("pageproperties_preset_size", o),
                this._assignPresetSize(e.target.value);
            });
        if ("w" === e || "h" === e) {
          var o = i.GLocale.get(
            new i.GLocaleKey(
              "GCommonNames",
              "property-".concat(e.toLowerCase())
            ),
            e
          );
          return $("<div>")
            .append(
              $("<input>")
                .attr("type", "text")
                .attr("data-property", e)
                .on("change", function () {
                  gDesigner.stats("pageproperties_change_size");
                  var t = $(this).gInputBox("value"),
                    o = n._document.getScene().stringToPoint(t);
                  "" === t || 0 === o
                    ? n._assignProperties(
                        ["w", "h"],
                        [o, o],
                        i.GLocale.get(
                          new i.GLocaleKey(
                            "GPageProperties",
                            "action.change-size"
                          )
                        )
                      )
                    : null !== o && "number" == typeof o && o >= 0
                    ? n._assignProperty(
                        e,
                        o,
                        i.GLocale.get(
                          new i.GLocaleKey(
                            "GPageProperties",
                            "action.change-size"
                          )
                        )
                      )
                    : n._updateProperties();
                })
                .gInputBox()
            )
            .gInputLabel({ label: o, autoPadding: o.length > 1 });
        }
        if ("bl" === e)
          return $("<input>")
            .attr("type", "text")
            .attr("data-property", e)
            .on("change", function () {
              gDesigner.stats("pageproperties_change_bleeding");
              var t = n._document
                .getScene()
                .stringToPoint($(this).gInputBox("value"));
              null !== t && "number" == typeof t && t >= 0
                ? n._assignProperty(
                    e,
                    t,
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GPageProperties",
                        "action.change-bleeding"
                      )
                    )
                  )
                : n._updateProperties();
            })
            .gInputBox();
        if ("mt" === e || "mb" === e || "ml" === e || "mr" === e)
          return $("<input>")
            .attr("type", "text")
            .attr("data-property", e)
            .on("change", function () {
              gDesigner.stats("pageproperties_change_margins");
              var t = n._document
                .getScene()
                .stringToPoint($(this).gInputBox("value"));
              null !== t && "number" == typeof t && t >= 0
                ? "yes" ===
                  n._panel.find("[data-lock-margin]").attr("data-lock-margin")
                  ? n._assignProperties(
                      ["mt", "mb", "ml", "mr"],
                      [t, t, t, t],
                      i.GLocale.get(
                        new i.GLocaleKey(
                          "GPageProperties",
                          "action.change-margins"
                        )
                      )
                    )
                  : n._assignProperty(
                      e,
                      t,
                      i.GLocale.get(
                        new i.GLocaleKey(
                          "GPageProperties",
                          "action.change-margin"
                        )
                      )
                    )
                : n._updateProperties();
            })
            .gInputBox();
        if ("equal-margins" === e)
          return $("<span></span>")
            .addClass("g-button g-flat valign-middle")
            .append($("<span></span>").addClass("gravit-icon-linked"))
            .on("click", function () {
              var e = $(this).closest(".g-button");
              gDesigner.stats(
                "pageproperties_lock_margin",
                e.attr("data-lock-margin")
              ),
                "yes" === e.attr("data-lock-margin")
                  ? e
                      .attr("data-lock-margin", "no")
                      .find("span:first-child")
                      .attr("class", "gravit-icon-unlinked")
                  : e
                      .attr("data-lock-margin", "yes")
                      .find("span:first-child")
                      .attr("class", "gravit-icon-linked");
            })
            .attr(
              "data-title",
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "action.equal-margin")
              )
            )
            .attr("data-lock-margin", "yes");
        if ("master-page" === e)
          return $("<select></select>")
            .attr("data-property", "master-page")
            .css("width", "100%")
            .gPro()
            .on(
              "mousedown",
              r.watchDog.trap(null, null, () =>
                gDesigner.stats("pageproperties_nonprotriespro_masterpages")
              )
            )
            .on(
              "change",
              r.watchDog.trap(
                (e) => {
                  gDesigner.stats("pageproperties_change_masterpages"),
                    this._assignMasterPage(
                      $(e.target)
                        .find('option[value="' + e.target.value + '"]')
                        .data("page")
                    );
                },
                null,
                () =>
                  gDesigner.stats("pageproperties_nonprotriespro_masterpages")
              )
            );
        if ("bop" === e)
          return $("<input>")
            .attr("type", "text")
            .attr("data-property", e)
            .on("change", function () {
              gDesigner.stats("pageproperties_change_canvas-opacity"),
                n._assignProperty(
                  e,
                  i.GLength.parseEquationValue($(this).gInputBox("value")) /
                    100,
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GPageProperties",
                      "action.change-canvas-opacity"
                    )
                  )
                );
            })
            .gInputBox({
              minValue: 0,
              maxValue: 100,
              incrementValue: gDesigner.getOpacityIncrement(),
              postfix: "%",
            });
        if ("rotate-canvas" === e)
          return $("<button>")
            .attr("data-property", e)
            .attr(
              "data-title",
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "text.rotate-canvas")
              )
            )
            .append($("<span/>").addClass("gravit-icon-flip-canvas"))
            .on("click", function () {
              gDesigner.stats("pageproperties_change_rotate");
              var e = n._pages[0];
              e &&
                e.getProperty("w") > 0 &&
                e.getProperty("h") > 0 &&
                n._assignProperties(
                  ["w", "h"],
                  [e.getProperty("h"), e.getProperty("w")],
                  i.GLocale.get(
                    new i.GLocaleKey("GPageProperties", "action.change-size")
                  )
                );
            });
        if ("trim-canvas" === e)
          return $("<button>")
            .attr("data-property", e)
            .attr(
              "data-title",
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "text.size-trim")
              )
            )
            .append($("<span/>").addClass("gravit-icon-trim-canvas"))
            .on("click", function () {
              gDesigner.stats("pageproperties_trim_page"),
                n._panel
                  .find('select[data-property="preset-size"]')
                  .val("@trim"),
                n._assignPresetSize("@trim");
            });
        if ("clip-content" === e) {
          this._clipContentButton = $("<button>")
            .attr("data-property", e)
            .attr("disabled", true)
            .addClass("g-disabled")
            .attr(
              "data-title",
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "text.clip-content")
              )
            )
            .append($("<span/>").addClass("gravit-icon-clip-content"))
            .on("click", function () {
              var e = gDesigner.getWindows().getActiveWindow();
              if (e) {
                var t = e.getView().getViewConfiguration().paintMode;
                gDesigner.stats(
                  "pageproperties_clip_content",
                  t !== i.GScenePaintConfiguration.PaintMode.Output
                ),
                  n(t !== i.GScenePaintConfiguration.PaintMode.Output, false);
              }
            });
          const n = function (e) {
            let n =
              arguments.length > 1 && undefined !== arguments[1] && arguments[1];
            var o;
            (n && e) ||
              (e
                ? ((o = i.GScenePaintConfiguration.PaintMode.Output),
                  t._updatePageSetting(f.PAGE_CLIP_CONTENT_ENABLED))
                : ((o = i.GScenePaintConfiguration.PaintMode.Full),
                  t._updatePageSetting(f.PAGE_CLIP_CONTENT_DISABLED)),
              gDesigner.setPaintMode(o));
          };
          return this._clipContentButton;
        }
        throw new Error("Unknown input property: " + e);
      }),
      (_.prototype._windowEvent = function (e) {
        const { type: module, window: require } = e;
        if (module !== g.WindowEvent.Type.Activated)
          return void (
            module === g.WindowEvent.Type.Removed &&
            this._lastScene &&
            (this._lastScene.removeEventListener(
              i.GNode.AfterPropertiesChangeEvent,
              this._propertiesUpdateEventHandler,
              this
            ),
            this._lastScene.removeEventListener(
              i.GNode.AfterFlagChangeEvent,
              this._pageActivationEventHandler,
              this
            ),
            (this._lastScene = null))
          );
        if (require.getDocument() !== gDesigner.getActiveDocument()) return;
        const o = gDesigner.getActiveDocument().getScene();
        o.addEventListener(
          i.GNode.AfterFlagChangeEvent,
          this._pageActivationEventHandler,
          this
        ),
          o.addEventListener(
            i.GNode.AfterPropertiesChangeEvent,
            this._propertiesUpdateEventHandler,
            this
          ),
          this._lastScene &&
            (this._lastScene.removeEventListener(
              i.GNode.AfterPropertiesChangeEvent,
              this._propertiesUpdateEventHandler,
              this
            ),
            this._lastScene.removeEventListener(
              i.GNode.AfterFlagChangeEvent,
              this._pageActivationEventHandler,
              this
            )),
          (this._lastScene = o),
          this._pageActivationEventHandler({
            node: o.getActivePage(),
            flag: i.GNode.Flag.Active,
          });
      }),
      (_.prototype._paintModeEvent = function () {
        this.updatePropertiesAvailability(
          gDesigner.getActiveDocument().getScene().getActivePage()
        );
      }),
      (_.prototype._pageActivationEventHandler = function (e) {
        let { node: module, flag: require } = e;
        if (module instanceof i.GPage && require === i.GNode.Flag.Active) {
          const e = gDesigner
              .getWindows()
              .getActiveWindow()
              .getView()
              .getViewConfiguration().paintMode,
            n = !module.isFixedSized();
          if (n && e === i.GScenePaintConfiguration.PaintMode.Output)
            gDesigner.setPaintMode(i.GScenePaintConfiguration.PaintMode.Full),
              this._updatePageSetting(f.PAGE_CLIP_CONTENT_DISABLED);
          else if (!n) {
            var o =
              module.getProperty(f.PAGE_CLIP_PROPERTY_NAME, true) ||
              (s.PAGE_CLIP_DEFAULT
                ? f.PAGE_CLIP_CONTENT_ENABLED
                : f.PAGE_CLIP_CONTENT_DISABLED);
            gDesigner.setPaintMode(
              o === f.PAGE_CLIP_CONTENT_ENABLED
                ? i.GScenePaintConfiguration.PaintMode.Output
                : i.GScenePaintConfiguration.PaintMode.Full
            );
          }
          this.updatePropertiesAvailability(module);
        }
      }),
      (_.prototype._propertiesUpdateEventHandler = function (e) {
        let { node: module, temporary: require, properties: o } = e;
        if (
          !require &&
          module instanceof i.GPage &&
          (o.indexOf("w") >= 0 || o.indexOf("h") >= 0)
        ) {
          var a = gDesigner
              .getWindows()
              .getActiveWindow()
              .getView()
              .getViewConfiguration().paintMode,
            r = !module.isFixedSized();
          r && a === i.GScenePaintConfiguration.PaintMode.Output
            ? (gDesigner.setPaintMode(
                i.GScenePaintConfiguration.PaintMode.Full
              ),
              this._updatePageSetting(f.PAGE_CLIP_CONTENT_DISABLED))
            : this._manageClipButtonState(false, !r);
        }
      }),
      (_.prototype._updatePageSetting = function (e) {
        gDesigner
          .getActiveDocument()
          .getScene()
          .getActivePage()
          .setProperty(f.PAGE_CLIP_PROPERTY_NAME, e, true);
      }),
      (_.prototype._reInitLayout = function () {
        (this._canvasPropertiesRowInNormal = $("<div></div>")
          .attr("data-property-row", "canvas-size")
          .addClass("canvas-properties-normal")
          .gPropertyRow({
            columns: [
              {
                width: "25%",
                content: this._createInput("bck"),
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.color")
                ),
              },
              {
                width: "25%",
                content: this._createInput("w"),
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.width")
                ),
              },
              {
                width: "25%",
                content: this._createInput("h"),
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.height")
                ),
              },
              {
                width: "25%",
                content: this._createInput("bop"),
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.opacity")
                ),
              },
            ],
          })
          .insertBefore(this._hrAfterbleedRow)),
          (this._hrAfterCanvasRow = $("<hr/>").insertBefore(
            this._hrAfterbleedRow
          )),
          (this._pageSizeRowInNormal = $("<div></div>")
            .addClass("page-size-properties-normal")
            .gPropertyRow({
              columns: [
                {
                  width: "25%",
                  content: $(
                    "<span>" +
                      i.GLocale.get(
                        new i.GLocaleKey("GPageProperties", "text.page-size")
                      ) +
                      "</span>"
                  ),
                },
                { width: "30%", content: this._createInput("preset-size") },
                { width: "15%", content: this._createInput("rotate-canvas") },
                { width: "15%", content: this._createInput("trim-canvas") },
                { width: "15%", content: this._createInput("clip-content") },
              ],
            })
            .insertBefore(this._hrAfterbleedRow)),
          (this._hrAfterPageSizeRow = $("<hr/>")
            .attr("data-property-row", "fixed-size")
            .insertBefore(this._hrAfterbleedRow)),
          (this._bleedRowInNormal = $("<div></div>")
            .addClass("bleed-properties-normal")
            .attr("data-property-row", "fixed-size")
            .gPropertyRow({
              columns: [
                {
                  width: "25%",
                  content: $(
                    "<span>" +
                      i.GLocale.get(
                        new i.GLocaleKey("GPageProperties", "text.bleed")
                      ) +
                      "</span>"
                  ),
                },
                { width: "20%", content: this._createInput("bl") },
              ],
            })
            .insertBefore(this._hrAfterbleedRow));
      }),
      (_.prototype.init = function (e, t) {
        (this._panel = e),
          (this._toolbar = t),
          gDesigner
            .getWindows()
            .addEventListener(g.WindowEvent, this._windowEvent, this),
          gDesigner.addEventListener(h, this._paintModeEvent, this),
          gDesigner.addEventListener(v, this._documentEvent, this),
          this.setTouchTools([
            new c.default({
              id: "document",
              icon: "gravit-icon-touch-document",
              panel: [this._panel, ".scene-properties-panel"],
              toolbar: [this._toolbar, ".scene-properties-toolbar"],
              panelWidth: "380px",
            }),
          ]),
          t.addClass("filled"),
          t.addClass("page-toolbar"),
          t.addClass("page-properties-toolbar"),
          e.addClass("page-properties-panel"),
          $("<label></label>")
            .text(
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "title")
              ).toUpperCase()
            )
            .appendTo(t),
          (this._hrAfterbleedRow = $("<hr/>")
            .attr("data-property-row", "fixed-size")
            .appendTo(e));
        const require = l.GRichTooltipConfig.from({
          title: i.GLocale.get(
            new i.GLocaleKey("GPageProperties", "text.margin-tooltip-title")
          ),
          description: i.GLocale.get(
            new i.GLocaleKey(
              "GPageProperties",
              "text.margin-tooltip-description"
            )
          ),
          learnMore:
            "",
        });
        $("<div></div>")
          .attr("data-property-row", "fixed-size")
          .addClass("page-margin-properties")
          .gPropertyRow({
            columns: [
              {
                clazz: "margin-title-column",
                content: $(
                  "<span>" +
                    i.GLocale.get(
                      new i.GLocaleKey("GPageProperties", "text.margin")
                    ) +
                    "</span>"
                ).addClass("margin-title"),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.left")
                ),
                content: this._createInput("ml").gRichTooltip(require),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.top")
                ),
                content: this._createInput("mt").gRichTooltip(require),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.right")
                ),
                content: this._createInput("mr").gRichTooltip(require),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.bottom")
                ),
                content: this._createInput("mb").gRichTooltip(require),
              },
              {
                clazz: "margin-btn-column",
                labelClass: "margin-input-labels",
                content: this._createInput("equal-margins"),
              },
            ],
          })
          .appendTo(e),
          $("<hr/>").attr("data-property-row", "fixed-size").appendTo(e);
        var o = gDesigner.getLicense();
        $("<div></div>")
          .attr("data-property-row", "fixed-size")
          .addClass("master-property-row")
          .gPropertyRow({
            columns: [
              {
                clazz: "master-property-title",
                content: $(
                  "<span>" +
                    i.GLocale.get(
                      new i.GLocaleKey("GPageProperties", "text.master")
                    ) +
                    "</span>"
                ),
              },
              {
                clazz: "master-property-selector",
                content: $("<div></div>")
                  .append(this._createInput("master-page"))
                  .append($("<span></span>").gPro())
                  .gRichTooltip(
                    l.GRichTooltipConfig.from({
                      title: i.GLocale.get(
                        new i.GLocaleKey(
                          "GPageProperties",
                          "text.master-tooltip-title"
                        )
                      ),
                      description: i.GLocale.get(
                        new i.GLocaleKey(
                          "GPageProperties",
                          "text.master-tooltip-description"
                        )
                      ),
                      middle: false,
                      isPro:
                        !gDesigner.isEnabledProFeatures() ||
                        !(o.isPro() && !o.isExpired()),
                      learnMore:
                        "",
                    })
                  ),
              },
            ],
          })
          .appendTo(e),
          e
            .find('[data-property="rotate-canvas"]')
            .parent(".content")
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.rotate-canvas-tooltip-title"
                  )
                ),
                description: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.rotate-canvas-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            ),
          e
            .find('[data-property="trim-canvas"]')
            .parent(".content")
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.trim-canvas-tooltip-title"
                  )
                ),
                description: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.trim-canvas-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            ),
          e
            .find('[data-property="clip-content"]')
            .parent(".content")
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.clip-content-tooltip-title"
                  )
                ),
                description: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.clip-content-tooltip-description"
                  )
                ),
              })
            ),
          e
            .find('[data-property="bl"]')
            .parent(".content")
            .gRichTooltip(
              l.GRichTooltipConfig.from({
                title: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.bleed-tooltip-title"
                  )
                ),
                description: i.GLocale.get(
                  new i.GLocaleKey(
                    "GPageProperties",
                    "text.bleed-tooltip-description"
                  )
                ),
                middle: false,
                learnMore:
                  "",
              })
            ),
          gDesigner
            .getWorkspace()
            .getStyleEdManager()
            .addEventListener(
              a.GStyleEdManager.EditorEvent,
              this._styleEditorEventHandler,
              this
            ),
          this._updateUI();
      }),
      (_.prototype._documentEvent = function (e) {
        e.type === v.Type.Removed &&
          this._panel
            .find('select[data-property="master-page"]')
            .empty()
            .append($("<option></option>"));
      }),
      (_.prototype._assignPresetSize = function (e) {
        if ("@infinite" === e)
          this._assignProperties(
            ["w", "h"],
            [0, 0],
            i.GLocale.get(
              new i.GLocaleKey("GPageProperties", "action.change-size")
            ),
            null,
            true
          );
        else if ("@trim" === e) {
          this._ownChange = true;
          var module = this._document.getEditor();
          module.beginTransaction();
          try {
            this._pages.forEach((e) => e.trimToContent());
          } finally {
            module.commitTransaction(
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "action.change-size")
              )
            ),
              (this._ownChange = false);
          }
        } else {
          var require = this._document.getScene(),
            o = e.split("x"),
            a = require.stringToPoint(o[0]),
            r = require.stringToPoint(o[1]),
            s = +o[2];
          require.getProperty("dpi") !== s && require.setProperty("dpi", s),
            this._assignProperties(
              ["w", "h"],
              [a, r],
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "action.change-size")
              )
            );
        }
      }),
      (_.prototype._assignMasterPage = function (e) {
        var t = this._document.getScene(),
          n = this._document.getEditor();
        if (e) {
          n.beginTransaction();
          try {
            this._pages.forEach((n) => {
              var o = n.getMasterPages(),
                i = false;
              o.forEach(function (o) {
                e !== o ? t.unlink(o, n) : (i = true);
              }),
                i || t.link(e, n);
            }),
              this._updateSlavePages(e);
          } finally {
            n.commitTransaction(
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "action.assign-master-page")
              )
            );
          }
        } else {
          n.beginTransaction();
          try {
            this._pages.forEach((e) => {
              e.getMasterPages().forEach(function (n) {
                t.unlink(n, e);
              });
            });
          } finally {
            n.commitTransaction(
              i.GLocale.get(
                new i.GLocaleKey("GPageProperties", "action.assign-master-page")
              )
            );
          }
        }
      }),
      (_.prototype.update = function (e, t, n) {
        if ((this._updateUI(), this._styleEditorChange))
          return (this._styleEditorChange = false), true;
        if (this._ownChange) return true;
        this._chooserElem && this._chooserElem.gPatternChooser("close");
        var o = e !== this._oldDocument;
        if (
          ((this._oldDocument = e),
          this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                i.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            gDesigner.removeEventListener(p, this._settingChanged),
            (this._document = null)),
          (this._pages = null),
          e && (t = t.filter((e) => e instanceof i.GPage)).length)
        )
          return (
            (this._pages = t.slice()),
            (this._document = e),
            this._document
              .getScene()
              .addEventListener(
                i.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            gDesigner.addEventListener(p, this._settingChanged, this),
            o && this._updatePresetSizes(),
            this._updateProperties(n),
            true
          );
        const r = gDesigner.getActiveDocument(),
          s = r && r.getScene();
        if (gDesigner.isTouchEnabled() && s && s.getActivePage()) {
          const e = gDesigner.getActiveView(),
            t = e && e.getViewConfiguration();
          if (t && t.elementAnnotations) {
            const e = gDesigner.getToolManager().getActiveTool();
            if (!e || e instanceof a.GSelectTool) return true;
          }
        }
        return false;
      }),
      (_.prototype._afterPropertiesChange = function (e) {
        e.node === this._pages[0]
          ? this._updateProperties()
          : !e.temporary &&
            e.node === this._document.getScene() &&
            e.properties.indexOf("ut") >= 0 &&
            (this._updatePresetSizes(), this._updateProperties()),
          this._updateSlavePages(e.node, e.properties);
      }),
      (_.prototype._updateUI = function () {
        this._removeOldHtmlElement(),
          gDesigner.isTouchEnabled()
            ? y._reInitLayout.call(this)
            : this._reInitLayout(),
          this._document
            ? (this._updatePresetSizes(), this._updateProperties())
            : this._oldDocument && this._updatePresetSizes();
      }),
      (_.prototype._removeOldHtmlElement = function () {
        this._removeHtmlElem(this._canvasPropertiesRowInNormal),
          (this._canvasPropertiesRowInNormal = null),
          this._removeHtmlElem(this._hrAfterCanvasRow),
          (this._hrAfterCanvasRow = null),
          this._removeHtmlElem(this._bleedRowInNormal),
          (this._bleedRowInNormal = null),
          this._removeHtmlElem(this._pageSizeRowInNormal),
          (this._pageSizeRowInNormal = null),
          this._removeHtmlElem(this._hrAfterPageSizeRow),
          (this._hrAfterPageSizeRow = null),
          this._removeHtmlElem(this._canvasPropertiesRowInTouch),
          (this._canvasPropertiesRowInTouch = null),
          this._removeHtmlElem(this._bleedRowInTouch),
          (this._bleedRowInTouch = null);
      }),
      (_.prototype._removeHtmlElem = function (e) {
        e && e.remove();
      }),
      (_.prototype._settingChanged = function (e) {
        "decimals_num" === e.key
          ? this._updateProperties()
          : "touch" === e.key && this._updateUI();
      }),
      (_.prototype._updateSlavePages = function (e, t) {
        var n = ["mt", "mb", "ml", "mr", "bop", "bl", "bck"];
        if (e instanceof i.GPage) {
          t || (t = n);
          var o = n.filter((e) => t.indexOf(e) >= 0);
          o.length &&
            e.getSlavePages().forEach((t) => {
              var n;
              t.setProperties(
                o,
                ((n = []), o.forEach((t) => n.push(e.getProperty(t))), n)
              );
            });
        }
      }),
      (_.prototype._updatePresetSizes = function () {
        var e = (this._document || this._oldDocument)
            .getScene()
            .getProperty("ut"),
          t = this._panel.find('select[data-property="preset-size"]').empty(),
          n = $("<optgroup></optgroup>").attr(
            "label",
            i.GLocale.get(
              new i.GLocaleKey("GPageProperties", "text.size-custom")
            )
          );
        $("<option></option>")
          .attr("value", "@infinite")
          .text(
            i.GLocale.get(
              new i.GLocaleKey("GPageProperties", "text.size-infinite")
            )
          )
          .appendTo(n),
          t.append(n),
          u.getPresets().forEach((n) => {
            var o = $("<optgroup></optgroup>").attr("label", n.name),
              a = false;
            n.layouts.forEach((t) => {
              if (t.unit === e) {
                var r = t.includes;
                if (r)
                  for (var s = 0; s < r.length; s++) {
                    var l = r[s];
                    $("<option></option>")
                      .attr("data-preset-id", n.id)
                      .attr(
                        "data-preset-locale-en",
                        i.GLocale.get(
                          l.localeClass,
                          null,
                          i.GLocaleLanguage.English
                        )
                      )
                      .attr(
                        "value",
                        l.width + "x" + l.height + "x" + (t.dpi || 72)
                      )
                      .text(
                        ""
                          .concat(l.name)
                          .concat(
                            l.displaySize ? " " + l.width + "x" + l.height : ""
                          )
                      )
                      .appendTo(o);
                  }
                else
                  $("<option></option>")
                    .attr("data-preset-id", n.id)
                    .attr(
                      "data-preset-locale-en",
                      i.GLocale.get(
                        t.localeClass,
                        null,
                        i.GLocaleLanguage.English
                      )
                    )
                    .attr(
                      "value",
                      t.width + "x" + t.height + "x" + (t.dpi || 72)
                    )
                    .text(
                      ""
                        .concat(t.name)
                        .concat(
                          t.displaySize ? " " + t.width + "x" + t.height : ""
                        )
                    )
                    .appendTo(o);
                a = true;
              }
            }),
              n.hidden && o.css({ display: "none" }),
              a && t.append(o);
          });
      }),
      (_.prototype._styleEditorEventHandler = function (e) {
        this._styleEdOn &&
          e.type === a.GStyleEdManager.EditorEventType.PrepareModifiedEvent &&
          (this._styleEditorChange = true);
      }),
      (_.prototype._updateProperties = function (e) {
        var t = this._document.getScene(),
          n = this._pages[0],
          o = t.isFixedSized(),
          r = i.GLocale.get(new i.GLocaleKey("GCommonNames", "text.page"));
        gDesigner.isTouchEnabled() && (r = r.toUpperCase());
        var s = r + " (";
        this._pages.length > 1
          ? (s +=
              this._pages.length +
              " " +
              i.GLocale.get(new i.GLocaleKey("GCommonNames", "text.pages")))
          : (s +=
              n.getProperty("name") ||
              i.GLocale.get(new i.GLocaleKey("GCommonNames", "text.active"))),
          (s += ")"),
          this._toolbar.find("label:first-child").text(s),
          this._panel
            .find('input[data-property="bl"]')
            .val(
              t.pointToString(n.getProperty("bl"), t.getOptimalDecimalsCount())
            ),
          n.getProperty("bck") ||
            (n.setProperty("bck", i.GRGBColor.WHITE), n.setProperty("bop", 0));
        var l = n.getProperty("bck", false, false, true);
        if (
          (this._panel
            .find('[data-property-row="background"]')
            .css("display", ""),
          this._panel
            .find('[data-property="bck"]')
            .css("display", l ? "" : "none")
            .gPatternChooser(
              "updateSettings",
              o
                ? { types: [i.GColor, i.GGradient, i.GTexturePattern] }
                : { types: [i.GColor] }
            )
            .gPatternChooser("setPattern", l)
            .gPatternChooser("value", l)
            .gPatternChooser("opacity", n.getProperty("bop", false, false, true)),
          this._panel
            .find('input[data-property="bop"]')
            .css("display", l ? "" : "none")
            .gInputBox(
              "value",
              i.GUtil.formatOpacity(100 * n.getProperty("bop"))
            ),
          o)
        ) {
          var c =
              t.pointToString(n.getProperty("w"), t.getOptimalDecimalsCount()) +
              "x" +
              t.pointToString(n.getProperty("h"), t.getOptimalDecimalsCount()) +
              "x" +
              t.getProperty("dpi"),
            d = this._panel.find('select[data-property="preset-size"]');
          d.val(d.find('option[value="' + c + '"]').length ? c : "@custom");
        } else
          this._panel
            .find('select[data-property="preset-size"]')
            .val("@infinite");
        this._panel
          .find('input[data-property="w"]')
          .gInputBox(
            "value",
            t.pointToString(n.getProperty("w"), t.getOptimalDecimalsCount())
          ),
          this._panel
            .find('input[data-property="h"]')
            .gInputBox(
              "value",
              t.pointToString(n.getProperty("h"), t.getOptimalDecimalsCount())
            ),
          this._panel
            .find('input[data-property="mt"]')
            .gInputBox(
              "value",
              t.pointToString(n.getProperty("mt"), t.getOptimalDecimalsCount())
            ),
          this._panel
            .find('input[data-property="mb"]')
            .gInputBox(
              "value",
              t.pointToString(n.getProperty("mb"), t.getOptimalDecimalsCount())
            ),
          this._panel
            .find('input[data-property="ml"]')
            .gInputBox(
              "value",
              t.pointToString(n.getProperty("ml"), t.getOptimalDecimalsCount())
            ),
          this._panel
            .find('input[data-property="mr"]')
            .gInputBox(
              "value",
              t.pointToString(n.getProperty("mr"), t.getOptimalDecimalsCount())
            );
        var u = this._panel
            .find('select[data-property="master-page"]')
            .empty()
            .append($("<option></option>")),
          p = -1,
          g = null;
        this._pages.forEach(function (e) {
          var t = e.getMasterPages();
          t.length && (null === g ? (g = t[0]) : g !== t[0] && (g = undefined));
        }),
          t.iteratePages((e) => {
            if (this._pages.indexOf(e) < 0) {
              p++;
              var t = $("<option></option>")
                .data("page", e)
                .attr("value", p)
                .text(e.getProperty("name"))
                .appendTo(u);
              g === e && t.prop("selected", true);
            }
          }, true),
          e &&
            (e.evtType === a.GEditor.ModifiedEvent.Type.Undo ||
              e.evtType === a.GEditor.ModifiedEvent.Type.Redo) &&
            e.chooserOn &&
            e.pagePattern &&
            this._panel
              .find('[data-property="bck"]')
              .find(".preview")
              .trigger(
                "click",
                null !== e.activeStopIdx ? e.activeStopIdx : null
              ),
          this.updatePropertiesAvailability(n);
      }),
      (_.prototype.updatePropertiesAvailability = function (e) {
        var t = e.getProperty("plkt"),
          n = e.isFixedSized(),
          o = false;
        if (t && t & i.GBlock.ProgramLck.NoSizeChanges)
          this._panel.find('[data-property="bck"]').attr("disabled", true),
            this._panel.find('input[data-property="bop"]').attr("disabled", true),
            this._panel.find('input[data-property="w"]').attr("disabled", true),
            this._panel.find('input[data-property="h"]').attr("disabled", true),
            this._panel
              .find('button[data-property="rotate-canvas"]')
              .attr("disabled", true),
            this._panel
              .find('select[data-property="preset-size"]')
              .attr("disabled", true),
            this._panel
              .find('button[data-property="trim-canvas"]')
              .attr("disabled", true),
            this._manageClipButtonState(false, false),
            this._panel.find('input[data-property="bl"]').attr("disabled", true),
            this._panel.find('input[data-property="mt"]').attr("disabled", true),
            this._panel.find('input[data-property="mb"]').attr("disabled", true),
            this._panel.find('input[data-property="ml"]').attr("disabled", true),
            this._panel.find('input[data-property="mr"]').attr("disabled", true),
            this._panel.find("[data-lock-margin]").attr("disabled", true),
            this._panel
              .find('select[data-property="master-page"]')
              .attr("disabled", true);
        else {
          o = this._document && this._document.isDocumentFromTemplate();
          var a = e.getProperty("bck", false, false, true),
            r = this._panel.find('select[data-property="preset-size"]'),
            s = r.find('option[value="' + r.val() + '"]').data("preset-id"),
            l = o && this._excludedPresets.includes(s);
          r.attr("disabled", l),
            this._panel.find('[data-property="bck"]').attr("disabled", !a),
            this._panel.find('input[data-property="bop"]').attr("disabled", !a),
            this._panel.find('input[data-property="w"]').attr("disabled", false),
            this._panel.find('input[data-property="h"]').attr("disabled", false),
            n
              ? this._panel
                  .find('button[data-property="rotate-canvas"]')
                  .attr("disabled", false)
              : this._panel
                  .find('button[data-property="rotate-canvas"]')
                  .attr("disabled", true),
            this._panel
              .find('button[data-property="trim-canvas"]')
              .attr("disabled", false),
            this._manageClipButtonState(
              gDesigner.getWindows().getActiveWindow() &&
                gDesigner.getWindows().getActiveWindow().getView() &&
                gDesigner
                  .getWindows()
                  .getActiveWindow()
                  .getView()
                  .getViewConfiguration().paintMode ===
                  i.GScenePaintConfiguration.PaintMode.Output,
              n
            ),
            this._panel.find('input[data-property="bl"]').attr("disabled", false),
            this._panel.find('input[data-property="mt"]').attr("disabled", false),
            this._panel.find('input[data-property="mb"]').attr("disabled", false),
            this._panel.find('input[data-property="ml"]').attr("disabled", false),
            this._panel.find('input[data-property="mr"]').attr("disabled", false),
            this._panel.find("[data-lock-margin]").attr("disabled", false);
          var c = false,
            d = e.getScene();
          d &&
            f.CDR_ORIGIN_PROPERTY_NAME &&
            (c = !!d.getProperty(f.CDR_ORIGIN_PROPERTY_NAME, true)),
            this._panel
              .find('select[data-property="master-page"]')
              .attr("disabled", c)
              .attr("i18n", "text.plkt-no-size-changes");
        }
        var u =
          t && t & i.GBlock.ProgramLck.NoSizeChanges
            ? "text.plkt-no-size-changes"
            : "text.infinite-canvas-no-size-changes";
        this._panel
          .find("[data-title]:not([default-data-title])")
          .each(function () {
            const e = $(this);
            e.attr("default-data-title", e.attr("data-title") || "");
          }),
          this._panel.find(":disabled").each(function () {
            const e = $(this);
            l ||
              (e.attr("default-data-title", e.attr("default-data-title") || ""),
              e.attr(
                "data-title",
                i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", e.attr("i18n") || u)
                ).replace("%name", e.attr("default-data-title") || "")
              ));
          }),
          this._panel
            .find(":not(:disabled)[default-data-title]")
            .removeAttr("data-title")
            .each(function () {
              const e = $(this);
              e.attr("default-data-title").length &&
                e.attr("data-title", e.attr("default-data-title"));
            });
        const p = (e) =>
          $("<div></div>")
            .addClass("tooltip-wrapper")
            .attr(
              "data-title",
              i.GLocale.get(
                new i.GLocaleKey("GCommonNames", (e && e.attr("i18n")) || u)
              )
            );
        this._panel.find(".tooltip-wrapper").remove(),
          this._panel.find("select:disabled").each(function () {
            l || p($(this)).insertAfter($(this));
          }),
          p().insertAfter(this._panel.find('[data-property="bck"][disabled]'));
      }),
      (_.prototype._manageClipButtonState = function (e, t) {
        this._clipContentButton &&
          (t || this._clipContentButton.hasClass("g-disabled")
            ? t &&
              (this._clipContentButton.hasClass("g-disabled") &&
                (this._clipContentButton.removeAttr("disabled"),
                this._clipContentButton.removeClass("g-disabled")),
              e
                ? this._clipContentButton.addClass("g-active")
                : this._clipContentButton.removeClass("g-active"))
            : (this._clipContentButton.attr("disabled", true),
              this._clipContentButton.addClass("g-disabled"),
              this._clipContentButton.removeClass("g-active")));
      }),
      (_.prototype._assignProperty = function (e, t, n) {
        this._assignProperties([e], [t], n);
      }),
      (_.prototype._assignProperties = function (e, t, n, o, a) {
        this._ownChange = true;
        var r = this._document.getEditor();
        r.beginTransaction();
        try {
          this._pages.forEach(function (n) {
            var o = e,
              r = t;
            a &&
              ((o = e.slice()),
              (r = t.slice()),
              n.getProperty("bck") instanceof i.GColor ||
                (o.push("bck"),
                r.push(i.GRGBColor.WHITE),
                o.push("bop"),
                r.push(1)));
            n.setProperties(o, r);
          });
        } finally {
          r.commitTransaction(n, o || null), (this._ownChange = false);
        }
      }),
      (_.prototype.toString = function () {
        return "[Object GPageProperties]";
      }),
      (exports.exports = _);
  }