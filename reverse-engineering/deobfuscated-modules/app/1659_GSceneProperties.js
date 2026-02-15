/**
 * Webpack Module #1659
 * Type: class
 * Name: GSceneProperties
 */

function (exports, module, require) {
    "use strict";
    require(193) /* polyfill_Object_keys */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */,
      i = require(357) /* module_357 */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      GProperties = require(123) /* GProperties */,
      GGravitCloudAction = require(448) /* GGravitCloudAction */,
      GSaveAsAction = require(445) /* GSaveAsAction */,
      c = require(86) /* module_86 */,
      GDocument = require(163) /* GDocument */,
      GCloudStorage = require(119) /* GCloudStorage */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
      h = (require(446) /* GLoginPanel */, require(44) /* GSystemDialog */),
      barrel_panels = require(257) /* barrel_panels */;
    const { FILE_FORMATS: m, CLOUD_SYNC_FEATURE: { NEW_LAYOUT: y } = {} } =
      require(10) /* AppSettings */;
    var v = "." + m.find((e) => e.default).ext;
    function _() {}
    GCore.GObject.inherit(_, GProperties),
      (_.prototype._panel = null),
      (_.prototype._document = null),
      (_.prototype._scene = null),
      (_.prototype.init = function (e, t) {
        (this._panel = e.addClass("scene-properties-panel")),
          t.addClass("scene-properties-toolbar"),
          y || gDesigner.addEventListener(GDocumentEvent, this._synchronismUpdated, this);
        var n = function (e) {
          let t =
            arguments.length > 1 && undefined !== arguments[1]
              ? arguments[1]
              : null;
          var n = this;
          if ("dpi" === e)
            return $("<div></div>")
              .append(
                $("<div/>")
                  .attr("data-property", e)
                  .on("change", function () {
                    const t =
                      parseInt($(this).gInputSelect("value")) || GCore.GLength.DPI;
                    gDesigner.stats("sceneproperties_change_canvas-dpi", t),
                      n._assignProperty(
                        e,
                        t,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GSceneProperties",
                            "action.change-canvas-dpi"
                          )
                        )
                      );
                  })
                  .gInputSelect({
                    list: [72, 96, 144, 300],
                    minValue: 72,
                    maxValue: 300,
                  })
              )
              .gRichTooltip(t);
          if ("gx" === e || "gy" === e || "gaw" === e)
            return $("<input>")
              .attr("type", "text")
              .attr("data-property", e)
              .on("change", function () {
                "gx" === e
                  ? gDesigner.stats(
                      "sceneproperties_change_rect-grid-settings",
                      "width"
                    )
                  : "gy" === e
                  ? gDesigner.stats(
                      "sceneproperties_change_rect-grid-settings",
                      "height"
                    )
                  : "gaw" === e &&
                    gDesigner.stats(
                      "sceneproperties_change_axono-grid-settings",
                      "size"
                    );
                var t = n._document
                  .getScene()
                  .stringToPoint($(this).gInputBox("value"));
                null !== t && "number" == typeof t
                  ? n._assignProperty(
                      e,
                      t,
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "action.change-grid-settings"
                        )
                      )
                    )
                  : n._updateProperties();
              })
              .gInputBox();
          if ("ga1" === e || "ga2" === e)
            return $("<input>")
              .attr("type", "text")
              .attr("data-property", e)
              .on("change", function () {
                "ga1" === e
                  ? gDesigner.stats(
                      "sceneproperties_change_axono-grid-settings",
                      "angle1"
                    )
                  : gDesigner.stats(
                      "sceneproperties_change_axono-grid-settings",
                      "angle2"
                    );
                var t = parseFloat($(this).gInputBox("value"));
                null !== t && "number" == typeof t
                  ? ((t = GCore.GMath.normalizeAngleDegrees(t)),
                    "ga1" == e &&
                      (t = (t = t >= 180 ? t - 180 : t) >= 90 ? 89 : t),
                    "ga2" == e &&
                      (t =
                        (t = (t = t > 0 ? t - 360 : t) <= -180 ? t + 180 : t) <=
                        -90
                          ? -89
                          : t),
                    (t = GCore.GMath.toRadians(t)),
                    n._assignProperty(
                      e,
                      t,
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "action.change-grid-settings"
                        )
                      )
                    ))
                  : n._updateProperties();
              })
              .gInputBox({ postfix: "°" });
          if (0 === e.indexOf("gm-")) {
            var i = "",
              GRichTooltipConfig = e.substr("gm-".length);
            switch (GRichTooltipConfig) {
              case GCore.GScene.GridMode.Boxed:
                i = GCore.GLocale.get(
                  new GCore.GLocaleKey("GSceneProperties", "text.on")
                );
                break;
              case GCore.GScene.GridMode.Axonometric:
                i = GCore.GLocale.get(
                  new GCore.GLocaleKey("GSceneProperties", "text.isometric")
                );
                break;
              default:
                i = GCore.GLocale.get(
                  new GCore.GLocaleKey("GSceneProperties", "text.off")
                );
            }
            return $("<label></label>")
              .append(
                $("<input>")
                  .addClass("grid-mode-radio")
                  .attr("type", "radio")
                  .attr("data-property", e)
                  .on("change", function () {
                    gDesigner.stats(
                      "sceneproperties_change_grid-mode",
                      "box" === GRichTooltipConfig ? "on" : "axo" === GRichTooltipConfig ? "isometric" : "off"
                    ),
                      n._assignProperty(
                        "gm",
                        GRichTooltipConfig || null,
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GSceneProperties",
                            "action.change-grid-settings"
                          )
                        )
                      ),
                      n._updateUI();
                  })
                  .gRichTooltip(t)
              )
              .append($("<span></span>").text(i));
          }
          if ("cm" === e)
            return $("<select></select>")
              .attr("data-property", e)
              .gRichTooltip(t)
              .on("change", function () {
                const t = gDesigner.getActiveDocument(),
                  i = t.getScene();
                if (
                  !gDesigner.isEnabledProFeatures() &&
                  0 != this.selectedIndex
                )
                  return (
                    $(this).val(i.getProperty("cm")),
                    void gDesigner.handlePROFeatureInterruption()
                  );
                const GRichTooltipConfig = $(this).val();
                gDesigner.stats("sceneproperties_change_color-mode", GRichTooltipConfig);
                var GProperties = i.getActivePage().getChildren();
                !!GProperties &&
                  GProperties.find((e) => !(e instanceof GCore.GAnnotationsList)) &&
                  h.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GSceneProperties", "text.reminder")
                    )
                  ),
                  gDesigner.setSetting("color_mode", GRichTooltipConfig),
                  n._assignProperty(
                    e,
                    GRichTooltipConfig,
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GSceneProperties",
                        "action.change-color-mode"
                      )
                    )
                  ),
                  t.setColorModeElms(GProperties);
              });
          if ("ut" === e)
            return $("<select></select>")
              .gUnit()
              .attr("data-property", e)
              .gRichTooltip(t)
              .on("change", function () {
                gDesigner.stats(
                  "sceneproperties_change_canvas-unit",
                  $(this).val()
                ),
                  n._assignProperty(
                    e,
                    $(this).val(),
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GSceneProperties",
                        "action.change-canvas-unit"
                      )
                    )
                  );
              });
          if (0 === e.indexOf("sync-")) {
            i = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GSceneProperties",
                "text." + e.substring("sync-".length)
              )
            );
            return $("<label></label>")
              .append(
                $("<input>")
                  .attr("type", "radio")
                  .attr("data-property", e)
                  .on("change", function (e) {
                    var t = -1 !== $(e.target).data().property.indexOf("on");
                    gDesigner.stats(
                      "sceneproperties_toggle_sync",
                      t ? "enable" : "disable"
                    ),
                      n._assignProperty("cfs", t);
                  })
              )
              .append($("<span></span>").text(i));
          }
          if (0 === e.indexOf("action-")) {
            var GProperties = e.substring("action-".length);
            return $("<button></button>")
              .append(
                $("<span></span>").text(
                  GCore.GLocale.get(gDesigner.getAction(GProperties).getTitle())
                )
              )
              .on(
                "click",
                function (e) {
                  gDesigner.canExecuteAction(GProperties) && gDesigner.executeAction(GProperties);
                }.bind(this)
              );
          }
          throw new Error("Unknown input property: " + e);
        }.bind(this);
        if (
          ($("<label></label>")
            .text(
              GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.document"))
            )
            .appendTo(t),
          $("<div></div>")
            .addClass("unit-row")
            .gPropertyRow({
              columns: [
                {
                  clazz: "unit-title-column",
                  content: $(
                    "<span>" +
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GCommonNames", "text.unit")
                      ) +
                      "</span>"
                  ),
                },
                {
                  clazz: "unit-selector-column",
                  content: n(
                    "ut",
                    GRichTooltipConfig.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.unit-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.unit-tooltip-description"
                        )
                      ),
                      middle: false,
                    })
                  ),
                },
              ],
            })
            .appendTo(e),
          $("<hr/>").appendTo(e),
          $("<div></div>")
            .addClass("color-mode-row")
            .gPropertyRow({
              columns: [
                {
                  clazz: "color-mode-title-column",
                  content: $("<span></span>").text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GSceneProperties", "text.color-mode")
                    )
                  ),
                },
                {
                  clazz: "color-mode-selector-column",
                  content: n(
                    "cm",
                    GRichTooltipConfig.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.color-mode-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.color-mode-tooltip-description"
                        )
                      ),
                      middle: false,
                    })
                  ),
                },
              ],
            })
            .appendTo(e),
          $("<hr/>").appendTo(e),
          $("<div></div>")
            .addClass("dpi-row")
            .gPropertyRow({
              columns: [
                {
                  clazz: "dpi-title-column",
                  content: $("<span></span>").text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GSceneProperties", "text.dpi")
                    )
                  ),
                },
                {
                  clazz: "dpi-selector-column",
                  content: n(
                    "dpi",
                    GRichTooltipConfig.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.dpi-tooltip-title"
                        )
                      ),
                      middle: false,
                    })
                  ),
                },
              ],
            })
            .appendTo(e),
          $("<hr/>").appendTo(e),
          $("<div></div>")
            .addClass("grid-mode")
            .gPropertyRow({
              columns: [
                {
                  clazz: "grid-mode-title-column",
                  content: $(
                    "<span>" +
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GCommonNames", "text.grid")
                      ) +
                      "</span>"
                  ),
                },
                {
                  clazz: "grid-mode-off-column",
                  content: n(
                    "gm-",
                    GRichTooltipConfig.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.grid-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.grid-tooltip-description-off"
                        )
                      ),
                      learnMore:
                        "",
                    })
                  ),
                },
                {
                  clazz: "grid-mode-box-column",
                  content: n(
                    "gm-" + GCore.GScene.GridMode.Boxed,
                    GRichTooltipConfig.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.grid-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.grid-tooltip-description-on"
                        )
                      ),
                      learnMore:
                        "",
                    })
                  ),
                },
                {
                  clazz: "grid-mode-axo-column",
                  content: n(
                    "gm-" + GCore.GScene.GridMode.Axonometric,
                    GRichTooltipConfig.GRichTooltipConfig.from({
                      title: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.grid-tooltip-title"
                        )
                      ),
                      description: GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSceneProperties",
                          "text.grid-tooltip-description-isometric"
                        )
                      ),
                      learnMore:
                        "",
                    })
                  ),
                },
              ],
            })
            .appendTo(e),
          $("<div></div>")
            .addClass("grid-mode-type")
            .attr("data-grid-mode", GCore.GScene.GridMode.Boxed)
            .gPropertyRow({
              label: "",
              columns: [
                {
                  width: "33.3%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.width")
                  ),
                  content: n("gx"),
                },
                {
                  width: "33.3%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.height")
                  ),
                  content: n("gy"),
                },
              ],
            })
            .appendTo(e),
          $("<div></div>")
            .addClass("grid-mode-type")
            .attr("data-grid-mode", GCore.GScene.GridMode.Axonometric)
            .gPropertyRow({
              label: "",
              columns: [
                {
                  width: "33.3%",
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.size")
                  ),
                  content: n("gaw"),
                },
                {
                  width: "33.3%",
                  label:
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "text.angle")
                    ) + " 1",
                  content: n("ga1"),
                },
                {
                  width: "33.3%",
                  label:
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "text.angle")
                    ) + " 2",
                  content: n("ga2"),
                },
              ],
            })
            .appendTo(e),
          $("<hr/>").appendTo(e),
          !y)
        ) {
          let t = $("<div></div>")
            .addClass("actions")
            .append(
              $("<button></button>")
                .addClass(barrel_panels["sync-button"])
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GSceneProperties", "sync.enable")
                  )
                )
                .on("click", () => {
                  gDesigner.stats("sceneproperties_enable_cloud-sync"),
                    this._enableCloudSync();
                })
            );
          $("<div></div>")
            .attr("data-property", "enable-cloud-sync")
            .append(
              $("<div></div>")
                .addClass("cloud-sync-panel")
                .append(
                  $("<div></div>").addClass(
                    "svg-cloud-icon svg-background-icon-theme"
                  )
                )
                .append(t)
            )
            .appendTo(e);
          const n = this._getWelcomeLink();
          n && t.append(n),
            $("<div></div>")
              .attr("data-property", "switch-cloud-sync")
              .addClass("cloud-sync-switch")
              .append(
                $("<div></div>").addClass(
                  "svg-cloud-icon svg-background-icon-theme"
                )
              )
              .append(
                $("<div></div>")
                  .addClass("actions")
                  .append(
                    $("<label></label>")
                      .addClass("g-switch")
                      .css("width", "28px")
                      .append(
                        $("<input>")
                          .attr("type", "checkbox")
                          .on("change", (e) => {
                            gDesigner.stats(
                              "sceneproperties_toggle_cloud-sync",
                              $(e.target).is(":checked") ? "enable" : "disable"
                            );
                            var t = this._document.getScene();
                            const n = $(e.target).is(":checked");
                            t.setProperty("cfs", n),
                              n &&
                                this._document.chooseLatestDocument(
                                  t,
                                  (e, n) => {
                                    if (e !== t || n) {
                                      var GCore = new GDocument(
                                        this._document.getStorageItem()
                                      );
                                      GCore.setScene(e),
                                        gDesigner.replaceDocument(
                                          this._document,
                                          GCore
                                        );
                                    } else
                                      this._document.storeToCloud(
                                        e,
                                        async () => {
                                          if (
                                            gDesigner
                                              .getDefaultStorage()
                                              .canSave()
                                          ) {
                                            let e = false,
                                              n =
                                                (await this._document.saveAnnotations(
                                                  e
                                                ),
                                                this._document.updateSaveOptionsLastModifiedDate(
                                                  {},
                                                  t.getLastSavedTime()
                                                ));
                                            this._document.store(
                                              null,
                                              this._updateProperties.bind(this),
                                              null,
                                              n
                                            );
                                          } else this._updateProperties();
                                        }
                                      );
                                  },
                                  null,
                                  (e, t) =>
                                    t.lastModifiedDate().getTime() >
                                    e.lastModifiedDate().getTime()
                                );
                          })
                      )
                      .append($("<div></div>"))
                  )
                  .append(
                    $("<span></span>")
                      .addClass("label")
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GSceneProperties", "sync.label")
                        )
                      )
                  )
                  .append($("<span></span>").addClass("last-modified-date"))
              )
              .appendTo(e),
            i.SCENEPROPERTIES.HAS_LOGO_UNDER_SYNC &&
              e.find(".svg-cloud-icon").load(barrel_panels["cloud-logo"], () => {});
        }
      }),
      (_.prototype._getWelcomeLink = function () {
        return $("<div></div>")
          .addClass("more")
          .append(
            $("<span></span>").text(
              GCore.GLocale.get(new GCore.GLocaleKey("GSceneProperties", "sync.more"))
            )
          )
          .on("click", () => {
            gDesigner.stats(
              "sceneproperties_click_welcome-to-gravit-cloud-medium-com"
            ),
              gContainer.openExternalLink(
                null,
                "https://medium.com/gravitdesigner/welcome-to-the-gravit-cloud-c30f84a7eb1f"
              );
          });
      }),
      (_.prototype.update = function (e, t) {
        return (
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
          (this._scene = null),
          !(
            !e ||
            (1 === t.length &&
              t[0] instanceof GCore.GPage &&
              (this._scene = t[0].getScene()),
            !this._scene)
          ) &&
            ((this._document = e),
            this._document
              .getScene()
              .addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
            this._updateColorMode(),
            this._updateProperties(),
            this._updateUI(),
            true)
        );
      }),
      (_.prototype._afterPropertiesChange = function (e) {
        e.temporary || this._scene !== e.node || this._updateProperties();
      }),
      (_.prototype._updateUI = function () {
        let exports = this._panel.find(".color-mode-row"),
          module = this._panel.find(".dpi-row");
        if (gDesigner.isTouchEnabled()) {
          this._panel.find('input[data-property="gm-"]').is(":checked")
            ? this._panel.find(".grid-mode").removeClass("mode-on")
            : this._panel.find(".grid-mode").addClass("mode-on"),
            exports.insertAfter(module);
          let n = module.find(".dpi-selector-column .g-input-select");
          n.find(".dpi-text").length ||
            $("<span/>")
              .addClass("dpi-text")
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey("GSceneProperties", "text.dpi"))
              )
              .insertAfter(n.find("input")),
            this._panel
              .find(".unit-title-column span")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSceneProperties",
                    "text.unit-tooltip-title"
                  )
                )
              );
        } else
          module.find(".dpi-selector-column .g-input-select .dpi-text").remove(),
            exports.insertBefore(module.prev()),
            this._panel.find(".grid-mode").removeClass("mode-on"),
            this._panel
              .find(".unit-title-column span")
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.unit"))
              );
      }),
      (_.prototype._settingChanged = function (e) {
        "decimals_num" === e.key
          ? this._updateProperties()
          : "touch" === e.key && this._updateUI();
      }),
      (_.prototype._synchronismUpdated = function (e) {
        e.document !== this._document ||
          e.type !== GDocumentEvent.Type.SynchronismUpdated ||
          e.document.isSynchronizing() ||
          this._updateProperties();
      }),
      (_.prototype._updateColorMode = function () {
        var e = this._panel.find('select[data-property="cm"]').empty(),
          t = [
            { value: GCore.GColor.ColorModes.RGB, pro: false, text: "RGB" },
            { value: GCore.GColor.ColorModes.HSB, pro: true, text: "HSB" },
            { value: GCore.GColor.ColorModes.CMYK, pro: true, text: "CMYK" },
          ];
        Array.prototype.forEach.call(t, (t) => {
          var n = $("<option></option>")
            .attr("value", t.value)
            .text(t.text)
            .appendTo(e);
          1 != t.pro || gDesigner.getLicense().isPro() || n.gPro();
        });
      }),
      (_.prototype._updateProperties = function () {
        var e = this._document.getScene();
        this._panel
          .find('[data-property="dpi"]')
          .gInputSelect(
            "value",
            this._scene.getProperty("dpi") || GCore.GLength.DPI
          );
        var t = this._document.hasCDR();
        this._panel
          .find('[data-property="dpi"]')
          .find('[type="text"]')
          .prop("disabled", t),
          this._panel
            .find('[data-property="dpi"]')
            .find("button")
            .prop("disabled", t),
          this._panel
            .find('[data-property="dpi"]')
            .attr(
              "data-title",
              t
                ? GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GCommonNames",
                      "text.cant-change-cdr-limitations"
                    )
                  )
                : ""
            );
        const require = gDesigner.getSetting("color_mode", GCore.GColor.ColorModes.RGB);
        require && this._scene.setProperty("cm", require),
          this._panel.find('select[data-property="cm"]').val(require),
          this._panel
            .find('select[data-property="ut"]')
            .val(this._scene.getProperty("ut")),
          this._panel
            .find('input[data-property="gx"]')
            .gInputBox(
              "value",
              e.pointToString(
                this._scene.getProperty("gx"),
                this._scene.getOptimalDecimalsCount()
              )
            );
        this._panel
          .find('input[data-property="gy"]')
          .gInputBox(
            "value",
            e.pointToString(
              this._scene.getProperty("gy"),
              this._scene.getOptimalDecimalsCount()
            )
          ),
          this._panel
            .find('input[data-property="gaw"]')
            .gInputBox(
              "value",
              e.pointToString(
                this._scene.getProperty("gaw"),
                this._scene.getOptimalDecimalsCount()
              )
            ),
          this._panel
            .find('[type="text"][data-property="ga1"]')
            .gInputBox(
              "value",
              GCore.GUtil.formatNumber(
                GCore.GMath.toDegrees(this._scene.getProperty("ga1")),
                1
              )
            ),
          this._panel
            .find('[type="text"][data-property="ga2"]')
            .gInputBox(
              "value",
              GCore.GUtil.formatNumber(
                GCore.GMath.toDegrees(this._scene.getProperty("ga2")),
                1
              )
            );
        var i = this._scene.getProperty("gm");
        if (
          (this._panel.find('[data-property^="gm"]').each(function (e, t) {
            var n = $(t),
              GCore = n.attr("data-property").substr("gm-".length);
            n.prop("checked", (!GCore && !i) || GCore === i);
          }),
          !y)
        ) {
          var GRichTooltipConfig = this._document.isCloudFile()
              ? !this._document.getScene().getProperty("cid")
              : !this._document.hasCloudReference(),
            GProperties =
              !GRichTooltipConfig &&
              (this._document.isCloudFile() ||
                this._document.hasCloudReference());
          this._panel
            .find('[data-property="enable-cloud-sync"]')
            .css("display", GRichTooltipConfig ? "" : "none")
            .find("button")
            .prop("disabled", this._document.getStatus() === c.Loading),
            this._panel
              .find('[data-property="switch-cloud-sync"]')
              .css("display", GProperties ? "" : "none")
              .find("input")
              .prop(
                "checked",
                (this._document.getScene() &&
                  this._document.getScene().isCloudSynchronization()) ||
                  this._document.isCloudFile()
              )
              .prop("disabled", this._document.isCloudFile());
          var GGravitCloudAction = (function (e) {
            if (0 === e.getTime()) return null;
            var t = e.getHours(),
              n = e.getMinutes(),
              GCore = (t = (t %= 12) || 12) + ":" + (n = n < 10 ? "0" + n : n);
            return (
              e.getMonth() +
              1 +
              "/" +
              e.getDate() +
              "/" +
              e.getFullYear() +
              "  " +
              GCore
            );
          })(this._document.getScene().lastModifiedDate());
          this._panel
            .find('[data-property="switch-cloud-sync"]')
            .find(".last-modified-date")
            .text(GGravitCloudAction || "")
            .css("display", GGravitCloudAction ? "" : "none");
        }
        this._panel.find("[data-grid-mode]").each(function (e, t) {
          var n = $(t),
            GCore = n.attr("data-grid-mode");
          n.css("display", (!GCore && !i) || GCore === i ? "" : "none");
        });
      }),
      (_.prototype._assignProperty = function (e, t, n) {
        this._assignProperties([e], [t], n);
      }),
      (_.prototype._assignProperties = function (e, t, n) {
        var GCore = this._document.getEditor();
        GCore.beginTransaction();
        try {
          this._scene.setProperties(e, t);
        } finally {
          GCore.commitTransaction(n);
        }
      }),
      (_.prototype._enableCloudSync = function () {
        var e = () => {
          var e = this._document;
          gDesigner.getDefaultStorage().canSave()
            ? this._document.isNew()
              ? GCloudStorage.createFile(e, (t) => {
                  e.getScene().setCloudSynchronization(t.id),
                    gDesigner.executeAction(
                      GSaveAsAction.ID + v,
                      [
                        null,
                        e,
                        () => {
                          GCloudStorage.renameFile(t, e.getTitle(), () => {
                            e.storeToCloud(
                              e.getScene(),
                              this._updateProperties.bind(this)
                            );
                          });
                        },
                      ],
                      undefined,
                      true
                    );
                })
              : this._document.isCloudFile()
              ? gDesigner.executeAction(GSaveAsAction.ID + v, undefined, (undefined).true)
              : this._document.hasCloudReference()
              ? console.warn("Enable Sync for referenced file")
              : GCloudStorage.createFile(e, (t) => {
                  e.getScene().setCloudSynchronization(t.id),
                    e.storeToCloud(e.getScene(), () => {
                      e.store();
                    });
                })
            : this._document.isNew()
            ? gDesigner.executeAction(
                GGravitCloudAction.ID + ".save-as",
                [
                  this._document,
                  (t) => {
                    t === c.Loaded && gDesigner.removeDocument(e, null, true);
                  },
                ],
                undefined,
                true
              )
            : this._document.isCloudFile()
            ? gDesigner.executeAction(GSaveAsAction.ID + v, undefined, undefined, true)
            : this._document.hasCloudReference()
            ? console.warn("Enable Sync for referenced file")
            : gDesigner.executeAction(
                GGravitCloudAction.ID + ".save-as",
                [
                  this._document,
                  (t) => {
                    t === c.Loaded && gDesigner.removeDocument(e, null, true);
                  },
                ],
                undefined,
                true
              );
        };
        gDesigner.getUser().then((t) => {
          t
            ? e()
            : GCloudStorage.performLogin().then((t) => {
                t && e();
              });
        });
      }),
      (_.prototype.toString = function () {
        return "[Object GSceneProperties]";
      }),
      (exports.exports = _);
  }