/**
 * Webpack Module #1339
 * Type: class
 * Name: GPageProperties
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(71) /* polyfill_String_includes */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* module */,
      GTools = require(53) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      AppSettings = require(10) /* AppSettings */,
      l = require(67) /* GRichTooltipConfig */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      GProperties = require(123) /* GProperties */,
      u = require(1153) /* module_1153 */,
      GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
      g = require(603) /* WindowEvent */,
      h = require(1328) /* module_1328 */,
      f = require(442) /* module_442 */;
    const GSystemDialog = require(44) /* GSystemDialog */,
      y = require(1604) /* module_1604 */,
      GDocumentEvent = require(78) /* GDocumentEvent */;
    function _() {}
    GCore.GObject.inherit(_, GProperties),
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
              types: [GCore.GColor, GCore.GGradient, GCore.GTexturePattern],
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
            .on("chooserclose", function (e, t, _interopRequireDefault) {
              if (
                gDesigner.getWorkspace().getStyleEdManager().getOverlayLock(_interopRequireDefault)
              )
                t();
              else {
                if (n._document && n._document.hasCDR()) {
                  var GTools = gPatternChooser.getPattern();
                  !GTools ||
                    GTools instanceof GCore.GRGBColor ||
                    GSystemDialog.showCDRUnsupportedObjectWarning();
                }
                (n._styleEdOn = false),
                  gDesigner
                    .getWorkspace()
                    .getStyleEdManager()
                    .deactivateEditor();
              }
              n._chooserElem = null;
            })
            .on("patternchange", function (e, t, _interopRequireDefault, GTools, CollaborationMergeUtils, AppSettings) {
              var l = [],
                GTouchTool = [];
              if (
                (undefined !== t && (l.push("bck"), GTouchTool.push(t)),
                "number" == typeof _interopRequireDefault && (l.push("bop"), GTouchTool.push(_interopRequireDefault)),
                n._pages)
              )
                if (GTools)
                  n._pages.forEach(function (e) {
                    e.setProperties(l, GTouchTool, false, false, GTools);
                  });
                else {
                  var GProperties = null;
                  CollaborationMergeUtils &&
                    ((GProperties = { chooserOn: true, pagePattern: true }),
                    null !== AppSettings && (GProperties.activeStopIdx = AppSettings)),
                    n._assignProperties(
                      l,
                      GTouchTool,
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GPageProperties",
                          "action.change-background"
                        )
                      ),
                      GProperties
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
                _interopRequireDefault = "";
              (_interopRequireDefault = n || t.text()),
                gDesigner.stats("pageproperties_preset_size", _interopRequireDefault),
                this._assignPresetSize(e.target.value);
            });
        if ("w" === e || "h" === e) {
          var _interopRequireDefault = GCore.GLocale.get(
            new GCore.GLocaleKey(
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
                    _interopRequireDefault = n._document.getScene().stringToPoint(t);
                  "" === t || 0 === _interopRequireDefault
                    ? n._assignProperties(
                        ["w", "h"],
                        [_interopRequireDefault, _interopRequireDefault],
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPageProperties",
                            "action.change-size"
                          )
                        )
                      )
                    : null !== _interopRequireDefault && "number" == typeof _interopRequireDefault && _interopRequireDefault >= 0
                    ? n._assignProperty(
                        e,
                        _interopRequireDefault,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPageProperties",
                            "action.change-size"
                          )
                        )
                      )
                    : n._updateProperties();
                })
                .gInputBox()
            )
            .gInputLabel({ label: _interopRequireDefault, autoPadding: _interopRequireDefault.length > 1 });
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
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
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
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GPageProperties",
                          "action.change-margins"
                        )
                      )
                    )
                  : n._assignProperty(
                      e,
                      t,
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
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
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "action.equal-margin")
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
              CollaborationMergeUtils.watchDog.trap(null, null, () =>
                gDesigner.stats("pageproperties_nonprotriespro_masterpages")
              )
            )
            .on(
              "change",
              CollaborationMergeUtils.watchDog.trap(
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
                  GCore.GLength.parseEquationValue($(this).gInputBox("value")) /
                    100,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
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
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "text.rotate-canvas")
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
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GPageProperties", "action.change-size")
                  )
                );
            });
        if ("trim-canvas" === e)
          return $("<button>")
            .attr("data-property", e)
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "text.size-trim")
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
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "text.clip-content")
              )
            )
            .append($("<span/>").addClass("gravit-icon-clip-content"))
            .on("click", function () {
              var e = gDesigner.getWindows().getActiveWindow();
              if (e) {
                var t = e.getView().getViewConfiguration().paintMode;
                gDesigner.stats(
                  "pageproperties_clip_content",
                  t !== GCore.GScenePaintConfiguration.PaintMode.Output
                ),
                  n(t !== GCore.GScenePaintConfiguration.PaintMode.Output, false);
              }
            });
          const n = function (e) {
            let n =
              arguments.length > 1 && undefined !== arguments[1] && arguments[1];
            var _interopRequireDefault;
            (n && e) ||
              (e
                ? ((_interopRequireDefault = GCore.GScenePaintConfiguration.PaintMode.Output),
                  t._updatePageSetting(f.PAGE_CLIP_CONTENT_ENABLED))
                : ((_interopRequireDefault = GCore.GScenePaintConfiguration.PaintMode.Full),
                  t._updatePageSetting(f.PAGE_CLIP_CONTENT_DISABLED)),
              gDesigner.setPaintMode(_interopRequireDefault));
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
              GCore.GNode.AfterPropertiesChangeEvent,
              this._propertiesUpdateEventHandler,
              this
            ),
            this._lastScene.removeEventListener(
              GCore.GNode.AfterFlagChangeEvent,
              this._pageActivationEventHandler,
              this
            ),
            (this._lastScene = null))
          );
        if (require.getDocument() !== gDesigner.getActiveDocument()) return;
        const _interopRequireDefault = gDesigner.getActiveDocument().getScene();
        _interopRequireDefault.addEventListener(
          GCore.GNode.AfterFlagChangeEvent,
          this._pageActivationEventHandler,
          this
        ),
          _interopRequireDefault.addEventListener(
            GCore.GNode.AfterPropertiesChangeEvent,
            this._propertiesUpdateEventHandler,
            this
          ),
          this._lastScene &&
            (this._lastScene.removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._propertiesUpdateEventHandler,
              this
            ),
            this._lastScene.removeEventListener(
              GCore.GNode.AfterFlagChangeEvent,
              this._pageActivationEventHandler,
              this
            )),
          (this._lastScene = _interopRequireDefault),
          this._pageActivationEventHandler({
            node: _interopRequireDefault.getActivePage(),
            flag: GCore.GNode.Flag.Active,
          });
      }),
      (_.prototype._paintModeEvent = function () {
        this.updatePropertiesAvailability(
          gDesigner.getActiveDocument().getScene().getActivePage()
        );
      }),
      (_.prototype._pageActivationEventHandler = function (e) {
        let { node: module, flag: require } = e;
        if (module instanceof GCore.GPage && require === GCore.GNode.Flag.Active) {
          const e = gDesigner
              .getWindows()
              .getActiveWindow()
              .getView()
              .getViewConfiguration().paintMode,
            n = !module.isFixedSized();
          if (n && e === GCore.GScenePaintConfiguration.PaintMode.Output)
            gDesigner.setPaintMode(GCore.GScenePaintConfiguration.PaintMode.Full),
              this._updatePageSetting(f.PAGE_CLIP_CONTENT_DISABLED);
          else if (!n) {
            var _interopRequireDefault =
              module.getProperty(f.PAGE_CLIP_PROPERTY_NAME, true) ||
              (AppSettings.PAGE_CLIP_DEFAULT
                ? f.PAGE_CLIP_CONTENT_ENABLED
                : f.PAGE_CLIP_CONTENT_DISABLED);
            gDesigner.setPaintMode(
              _interopRequireDefault === f.PAGE_CLIP_CONTENT_ENABLED
                ? GCore.GScenePaintConfiguration.PaintMode.Output
                : GCore.GScenePaintConfiguration.PaintMode.Full
            );
          }
          this.updatePropertiesAvailability(module);
        }
      }),
      (_.prototype._propertiesUpdateEventHandler = function (e) {
        let { node: module, temporary: require, properties: _interopRequireDefault } = e;
        if (
          !require &&
          module instanceof GCore.GPage &&
          (_interopRequireDefault.indexOf("w") >= 0 || _interopRequireDefault.indexOf("h") >= 0)
        ) {
          var GTools = gDesigner
              .getWindows()
              .getActiveWindow()
              .getView()
              .getViewConfiguration().paintMode,
            CollaborationMergeUtils = !module.isFixedSized();
          CollaborationMergeUtils && GTools === GCore.GScenePaintConfiguration.PaintMode.Output
            ? (gDesigner.setPaintMode(
                GCore.GScenePaintConfiguration.PaintMode.Full
              ),
              this._updatePageSetting(f.PAGE_CLIP_CONTENT_DISABLED))
            : this._manageClipButtonState(false, !CollaborationMergeUtils);
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
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.color")
                ),
              },
              {
                width: "25%",
                content: this._createInput("w"),
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.width")
                ),
              },
              {
                width: "25%",
                content: this._createInput("h"),
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.height")
                ),
              },
              {
                width: "25%",
                content: this._createInput("bop"),
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.opacity")
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
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GPageProperties", "text.page-size")
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
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GPageProperties", "text.bleed")
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
          gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
          this.setTouchTools([
            new GTouchTool.default({
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
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "title")
              ).toUpperCase()
            )
            .appendTo(t),
          (this._hrAfterbleedRow = $("<hr/>")
            .attr("data-property-row", "fixed-size")
            .appendTo(e));
        const require = l.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GPageProperties", "text.margin-tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey(
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
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPageProperties", "text.margin")
                    ) +
                    "</span>"
                ).addClass("margin-title"),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.left")
                ),
                content: this._createInput("ml").gRichTooltip(require),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.top")
                ),
                content: this._createInput("mt").gRichTooltip(require),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.right")
                ),
                content: this._createInput("mr").gRichTooltip(require),
              },
              {
                clazz: "margin-input-column",
                labelClass: "margin-input-labels",
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.bottom")
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
        var _interopRequireDefault = gDesigner.getLicense();
        $("<div></div>")
          .attr("data-property-row", "fixed-size")
          .addClass("master-property-row")
          .gPropertyRow({
            columns: [
              {
                clazz: "master-property-title",
                content: $(
                  "<span>" +
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPageProperties", "text.master")
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
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GPageProperties",
                          "text.master-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GPageProperties",
                          "text.master-tooltip-description"
                        )
                      ),
                      middle: false,
                      isPro:
                        !gDesigner.isEnabledProFeatures() ||
                        !(_interopRequireDefault.isPro() && !_interopRequireDefault.isExpired()),
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
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GPageProperties",
                    "text.rotate-canvas-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
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
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GPageProperties",
                    "text.trim-canvas-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
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
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GPageProperties",
                    "text.clip-content-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
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
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GPageProperties",
                    "text.bleed-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
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
              GTools.GStyleEdManager.EditorEvent,
              this._styleEditorEventHandler,
              this
            ),
          this._updateUI();
      }),
      (_.prototype._documentEvent = function (e) {
        e.type === GDocumentEvent.Type.Removed &&
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
            GCore.GLocale.get(
              new GCore.GLocaleKey("GPageProperties", "action.change-size")
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
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "action.change-size")
              )
            ),
              (this._ownChange = false);
          }
        } else {
          var require = this._document.getScene(),
            _interopRequireDefault = e.split("x"),
            GTools = require.stringToPoint(_interopRequireDefault[0]),
            CollaborationMergeUtils = require.stringToPoint(_interopRequireDefault[1]),
            AppSettings = +_interopRequireDefault[2];
          require.getProperty("dpi") !== AppSettings && require.setProperty("dpi", AppSettings),
            this._assignProperties(
              ["w", "h"],
              [GTools, CollaborationMergeUtils],
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "action.change-size")
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
              var _interopRequireDefault = n.getMasterPages(),
                GCore = false;
              _interopRequireDefault.forEach(function (_interopRequireDefault) {
                e !== _interopRequireDefault ? t.unlink(_interopRequireDefault, n) : (GCore = true);
              }),
                GCore || t.link(e, n);
            }),
              this._updateSlavePages(e);
          } finally {
            n.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "action.assign-master-page")
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
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPageProperties", "action.assign-master-page")
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
        var _interopRequireDefault = e !== this._oldDocument;
        if (
          ((this._oldDocument = e),
          this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged),
            (this._document = null)),
          (this._pages = null),
          e && (t = t.filter((e) => e instanceof GCore.GPage)).length)
        )
          return (
            (this._pages = t.slice()),
            (this._document = e),
            this._document
              .getScene()
              .addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
            _interopRequireDefault && this._updatePresetSizes(),
            this._updateProperties(n),
            true
          );
        const CollaborationMergeUtils = gDesigner.getActiveDocument(),
          AppSettings = CollaborationMergeUtils && CollaborationMergeUtils.getScene();
        if (gDesigner.isTouchEnabled() && AppSettings && AppSettings.getActivePage()) {
          const e = gDesigner.getActiveView(),
            t = e && e.getViewConfiguration();
          if (t && t.elementAnnotations) {
            const e = gDesigner.getToolManager().getActiveTool();
            if (!e || e instanceof GTools.GSelectTool) return true;
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
        if (e instanceof GCore.GPage) {
          t || (t = n);
          var _interopRequireDefault = n.filter((e) => t.indexOf(e) >= 0);
          _interopRequireDefault.length &&
            e.getSlavePages().forEach((t) => {
              var n;
              t.setProperties(
                _interopRequireDefault,
                ((n = []), _interopRequireDefault.forEach((t) => n.push(e.getProperty(t))), n)
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
            GCore.GLocale.get(
              new GCore.GLocaleKey("GPageProperties", "text.size-custom")
            )
          );
        $("<option></option>")
          .attr("value", "@infinite")
          .text(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GPageProperties", "text.size-infinite")
            )
          )
          .appendTo(n),
          t.append(n),
          u.getPresets().forEach((n) => {
            var _interopRequireDefault = $("<optgroup></optgroup>").attr("label", n.name),
              GTools = false;
            n.layouts.forEach((t) => {
              if (t.unit === e) {
                var CollaborationMergeUtils = t.includes;
                if (CollaborationMergeUtils)
                  for (var AppSettings = 0; AppSettings < CollaborationMergeUtils.length; AppSettings++) {
                    var l = CollaborationMergeUtils[AppSettings];
                    $("<option></option>")
                      .attr("data-preset-id", n.id)
                      .attr(
                        "data-preset-locale-en",
                        GCore.GLocale.get(
                          l.localeClass,
                          null,
                          GCore.GLocaleLanguage.English
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
                      .appendTo(_interopRequireDefault);
                  }
                else
                  $("<option></option>")
                    .attr("data-preset-id", n.id)
                    .attr(
                      "data-preset-locale-en",
                      GCore.GLocale.get(
                        t.localeClass,
                        null,
                        GCore.GLocaleLanguage.English
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
                    .appendTo(_interopRequireDefault);
                GTools = true;
              }
            }),
              n.hidden && _interopRequireDefault.css({ display: "none" }),
              GTools && t.append(_interopRequireDefault);
          });
      }),
      (_.prototype._styleEditorEventHandler = function (e) {
        this._styleEdOn &&
          e.type === GTools.GStyleEdManager.EditorEventType.PrepareModifiedEvent &&
          (this._styleEditorChange = true);
      }),
      (_.prototype._updateProperties = function (e) {
        var t = this._document.getScene(),
          n = this._pages[0],
          _interopRequireDefault = t.isFixedSized(),
          CollaborationMergeUtils = GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.page"));
        gDesigner.isTouchEnabled() && (CollaborationMergeUtils = CollaborationMergeUtils.toUpperCase());
        var AppSettings = CollaborationMergeUtils + " (";
        this._pages.length > 1
          ? (AppSettings +=
              this._pages.length +
              " " +
              GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.pages")))
          : (AppSettings +=
              n.getProperty("name") ||
              GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.active"))),
          (AppSettings += ")"),
          this._toolbar.find("label:first-child").text(AppSettings),
          this._panel
            .find('input[data-property="bl"]')
            .val(
              t.pointToString(n.getProperty("bl"), t.getOptimalDecimalsCount())
            ),
          n.getProperty("bck") ||
            (n.setProperty("bck", GCore.GRGBColor.WHITE), n.setProperty("bop", 0));
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
              _interopRequireDefault
                ? { types: [GCore.GColor, GCore.GGradient, GCore.GTexturePattern] }
                : { types: [GCore.GColor] }
            )
            .gPatternChooser("setPattern", l)
            .gPatternChooser("value", l)
            .gPatternChooser("opacity", n.getProperty("bop", false, false, true)),
          this._panel
            .find('input[data-property="bop"]')
            .css("display", l ? "" : "none")
            .gInputBox(
              "value",
              GCore.GUtil.formatOpacity(100 * n.getProperty("bop"))
            ),
          _interopRequireDefault)
        ) {
          var GTouchTool =
              t.pointToString(n.getProperty("w"), t.getOptimalDecimalsCount()) +
              "x" +
              t.pointToString(n.getProperty("h"), t.getOptimalDecimalsCount()) +
              "x" +
              t.getProperty("dpi"),
            GProperties = this._panel.find('select[data-property="preset-size"]');
          GProperties.val(GProperties.find('option[value="' + GTouchTool + '"]').length ? GTouchTool : "@custom");
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
          GSettingChangedEvent = -1,
          g = null;
        this._pages.forEach(function (e) {
          var t = e.getMasterPages();
          t.length && (null === g ? (g = t[0]) : g !== t[0] && (g = undefined));
        }),
          t.iteratePages((e) => {
            if (this._pages.indexOf(e) < 0) {
              GSettingChangedEvent++;
              var t = $("<option></option>")
                .data("page", e)
                .attr("value", GSettingChangedEvent)
                .text(e.getProperty("name"))
                .appendTo(u);
              g === e && t.prop("selected", true);
            }
          }, true),
          e &&
            (e.evtType === GTools.GEditor.ModifiedEvent.Type.Undo ||
              e.evtType === GTools.GEditor.ModifiedEvent.Type.Redo) &&
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
          _interopRequireDefault = false;
        if (t && t & GCore.GBlock.ProgramLck.NoSizeChanges)
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
          _interopRequireDefault = this._document && this._document.isDocumentFromTemplate();
          var GTools = e.getProperty("bck", false, false, true),
            CollaborationMergeUtils = this._panel.find('select[data-property="preset-size"]'),
            AppSettings = CollaborationMergeUtils.find('option[value="' + CollaborationMergeUtils.val() + '"]').data("preset-id"),
            l = _interopRequireDefault && this._excludedPresets.includes(AppSettings);
          CollaborationMergeUtils.attr("disabled", l),
            this._panel.find('[data-property="bck"]').attr("disabled", !GTools),
            this._panel.find('input[data-property="bop"]').attr("disabled", !GTools),
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
                  GCore.GScenePaintConfiguration.PaintMode.Output,
              n
            ),
            this._panel.find('input[data-property="bl"]').attr("disabled", false),
            this._panel.find('input[data-property="mt"]').attr("disabled", false),
            this._panel.find('input[data-property="mb"]').attr("disabled", false),
            this._panel.find('input[data-property="ml"]').attr("disabled", false),
            this._panel.find('input[data-property="mr"]').attr("disabled", false),
            this._panel.find("[data-lock-margin]").attr("disabled", false);
          var GTouchTool = false,
            GProperties = e.getScene();
          GProperties &&
            f.CDR_ORIGIN_PROPERTY_NAME &&
            (GTouchTool = !!GProperties.getProperty(f.CDR_ORIGIN_PROPERTY_NAME, true)),
            this._panel
              .find('select[data-property="master-page"]')
              .attr("disabled", GTouchTool)
              .attr("i18n", "text.plkt-no-size-changes");
        }
        var u =
          t && t & GCore.GBlock.ProgramLck.NoSizeChanges
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
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", e.attr("i18n") || u)
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
        const GSettingChangedEvent = (e) =>
          $("<div></div>")
            .addClass("tooltip-wrapper")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", (e && e.attr("i18n")) || u)
              )
            );
        this._panel.find(".tooltip-wrapper").remove(),
          this._panel.find("select:disabled").each(function () {
            l || GSettingChangedEvent($(this)).insertAfter($(this));
          }),
          GSettingChangedEvent().insertAfter(this._panel.find('[data-property="bck"][disabled]'));
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
      (_.prototype._assignProperties = function (e, t, n, _interopRequireDefault, GTools) {
        this._ownChange = true;
        var CollaborationMergeUtils = this._document.getEditor();
        CollaborationMergeUtils.beginTransaction();
        try {
          this._pages.forEach(function (n) {
            var _interopRequireDefault = e,
              CollaborationMergeUtils = t;
            GTools &&
              ((_interopRequireDefault = e.slice()),
              (CollaborationMergeUtils = t.slice()),
              n.getProperty("bck") instanceof GCore.GColor ||
                (_interopRequireDefault.push("bck"),
                CollaborationMergeUtils.push(GCore.GRGBColor.WHITE),
                _interopRequireDefault.push("bop"),
                CollaborationMergeUtils.push(1)));
            n.setProperties(_interopRequireDefault, CollaborationMergeUtils);
          });
        } finally {
          CollaborationMergeUtils.commitTransaction(n, _interopRequireDefault || null), (this._ownChange = false);
        }
      }),
      (_.prototype.toString = function () {
        return "[Object GPageProperties]";
      }),
      (exports.exports = _);
  }