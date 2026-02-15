/**
 * Webpack Module #1269
 * Type: class
 * Name: GPathProperties
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      GTools = require(53) /* GTools */,
      a = require(357) /* module_357 */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      GProperties = require(123) /* GProperties */,
      l = (require(173) /* stub_requires_1 */, require(135) /* GSettingChangedEvent */);
    function c() {
      this._pathes = [];
    }
    GCore.GObject.inherit(c, GProperties),
      (c.prototype._panel = null),
      (c.prototype._document = null),
      (c.prototype._pathes = null),
      (c.prototype._points = null),
      (c.prototype.init = function (e, t) {
        this._panel = e;
        const require = (e) => {
          const t = this._getTargetNodeType($(e.target));
          this.assignNodeType(t);
        };
        var GTools = function (e) {
          var t = this;
          if ("x" === e || "y" === e)
            return $("<div/>")
              .append(
                $("<input>")
                  .attr("type", "text")
                  .attr("data-point-property", e)
                  .on("change", function (n) {
                    var GCore = t._document.getScene().stringToPoint($(this).val());
                    "x" === e
                      ? gDesigner.stats("pathproperties_modify_x")
                      : gDesigner.stats("pathproperties_modify_y"),
                      null !== GCore && "number" == typeof GCore
                        ? t._assignPointProperty(e, GCore)
                        : t._updatePointProperties();
                  })
                  .gInputBox()
              )
              .gInputLabel({ label: e });
          if ("tp" === e)
            return $("<select></select>")
              .attr("data-point-property", e)
              .append(
                $("<option></option>")
                  .attr("value", "-")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPathProperties", "text.straight")
                    )
                  )
              )
              .append(
                $("<option></option>")
                  .attr("value", GCore.GPathBase.AnchorPoint.Type.Mirror)
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPathBase", "anchor-point.mirror")
                    )
                  )
              )
              .append(
                $("<option></option>")
                  .attr("value", GCore.GPathBase.AnchorPoint.Type.Asymmetric)
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPathBase", "anchor-point.asymmetric")
                    )
                  )
              )
              .append(
                $("<option></option>")
                  .attr("value", GCore.GPathBase.AnchorPoint.Type.Symmetric)
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPathBase", "anchor-point.symmetric")
                    )
                  )
              )
              .append(
                $("<option></option>")
                  .attr("value", GCore.GPathBase.AnchorPoint.Type.Connector)
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GPathBase", "anchor-point.connector")
                    )
                  )
              )
              .on("change", function (e) {
                require(e);
              });
          if ("ctp" === e)
            return $("<span></span>")
              .addClass("clickable")
              .addClass("g-button")
              .addClass("corner-type")
              .attr("data-point-property", e)
              .gCornerTypePicker()
              .on("cornertypechange", function (e, n) {
                t._assignPointProperty("tp", n);
              });
          if ("cu" === e)
            return $("<button></button>")
              .addClass("g-flat")
              .attr("data-point-property", e)
              .on("click", function () {
                gDesigner.stats("pathproperties_modify_uniform"),
                  t._assignPointProperty(e, !$(this).hasClass("g-active")),
                  t._updatePointProperties();
              })
              .append(
                $("<span></span>")
                  .addClass("gravit-icon-lock")
                  .css("font-size", "10px")
              );
          if ("cl-slider" === e)
            return $("<div/>")
              .attr("data-point-property", "cl")
              .gInputSlider({
                min: 0,
                max: 100,
                richTooltipConfig: GRichTooltipConfig.GRichTooltipConfig.from({
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
                t._document.getEditor().hideSelection(),
                  $(document).one("mouseup", function () {
                    t._document.getEditor().resetHideSelection();
                  });
              })
              .on("input", function () {
                for (
                  var e = t._document
                      .getScene()
                      .stringToPoint($(this).gInputSlider("value")),
                    require = 0;
                  require < t._points.length;
                  ++require
                )
                  t._points[require].setProperty("cl", e, false, false, true);
                t._panel
                  .find('[type="text"][data-point-property="cl"]')
                  .gInputBox(
                    "value",
                    t._document
                      .getScene()
                      .pointToString(
                        e,
                        t._document.getScene().getOptimalDecimalsCount()
                      )
                  );
              })
              .on("change", function () {
                var e = t._document
                  .getScene()
                  .stringToPoint($(this).gInputSlider("value"));
                gDesigner.stats("pathproperties_modify_corner"),
                  t._assignPointProperty("cl", e);
              });
          if ("cl-input" === e)
            return $("<input>")
              .attr("type", "text")
              .attr("data-point-property", "cl")
              .addClass("corner-radius")
              .on("change", function () {
                var e = t._document.getScene().stringToPoint($(this).val());
                null !== e && "number" == typeof e && e >= 0
                  ? (gDesigner.stats("pathproperties_modify_corner"),
                    t._assignPointProperty("cl", e))
                  : t._updatePointProperties();
              })
              .gInputBox({ minValue: 0 });
          throw new Error("Unknown input property: " + e);
        }.bind(this);
        $("<div></div>")
          .attr("path-only", true)
          .gPropertyRow({
            columns: [
              {
                width: "40%",
                content: $("<label></label>")
                  .addClass("g-checkbox-label")
                  .append(
                    $("<input>")
                      .addClass("closed-checkbox")
                      .attr("type", "checkbox")
                      .attr("data-path-property", "closed")
                      .on(
                        "change",
                        function (e) {
                          $(e.target).is(":checked") ||
                            this._setBorderAlignmentCenter(),
                            gDesigner.stats("pathproperties_modify_closed"),
                            this._assignPathProperty(
                              "closed",
                              $(e.target).is(":checked")
                            );
                        }.bind(this)
                      )
                  )
                  .append(
                    $("<span></span>").text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GPathProperties", "text.closed")
                      )
                    )
                  ),
              },
              {
                width: "60%",
                content: $("<label></label>")
                  .addClass("g-checkbox-label")
                  .append(
                    $("<input>")
                      .addClass("csc-checkbox")
                      .attr("type", "checkbox")
                      .attr("data-path-property", "csc")
                      .on(
                        "change",
                        function (e) {
                          gDesigner.stats("pathproperties_modify_autoscale"),
                            this._assignPathProperty(
                              "csc",
                              $(e.target).is(":checked")
                            );
                        }.bind(this)
                      )
                  )
                  .append(
                    $("<span></span>").text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GCommonNames",
                          "text.autoscale-corners"
                        )
                      )
                    )
                  ),
              },
            ],
          })
          .appendTo(this._panel),
          $("<div></div>")
            .addClass("position-row")
            .attr("point-only", true)
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.position")
              ),
              columns: [
                { width: "32%", content: GTools("x") },
                { width: "32%", content: GTools("y") },
                { width: "auto", content: GTools("tp") },
              ],
            })
            .appendTo(e),
          $("<div></div>")
            .addClass(a.PATHPROPERTIES.PATH_JOIN_CLASS)
            .addClass("joint-row")
            .attr("point-only", true)
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GPathProperties", "text.joint")
              ),
              columns: [
                {
                  width: "25%",
                  padding: false,
                  content: $("<button></button>")
                    .addClass("g-button")
                    .css({
                      borderRadius: "0px",
                      borderTopLeftRadius: "3px",
                      borderBottomLeftRadius: "3px",
                    })
                    .attr("data-node-type", "-")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GPathProperties", "text.straight")
                      )
                    )
                    .append(
                      $("<span></span>").addClass("gravit-icon-node-straight")
                    )
                    .on("click", require),
                },
                {
                  width: "25%",
                  padding: false,
                  content: $("<button></button>")
                    .addClass("g-button")
                    .css({ borderRadius: "0px" })
                    .attr("data-node-type", GCore.GPathBase.AnchorPoint.Type.Mirror)
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GPathBase", "anchor-point.mirror")
                      )
                    )
                    .append(
                      $("<span></span>").addClass("gravit-icon-node-mirrored")
                    )
                    .on("click", require),
                },
                {
                  width: "25%",
                  padding: false,
                  content: $("<button></button>")
                    .addClass("g-button")
                    .css({ borderRadius: "0px" })
                    .attr(
                      "data-node-type",
                      GCore.GPathBase.AnchorPoint.Type.Asymmetric
                    )
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GPathBase", "anchor-point.asymmetric")
                      )
                    )
                    .append(
                      $("<span></span>").addClass(
                        "gravit-icon-node-disconnected"
                      )
                    )
                    .on("click", require),
                },
                {
                  width: "25%",
                  padding: false,
                  content: $("<button></button>")
                    .addClass("g-button")
                    .css({
                      borderRadius: "0px",
                      borderTopRightRadius: "3px",
                      borderBottomRightRadius: "3px",
                    })
                    .attr(
                      "data-node-type",
                      GCore.GPathBase.AnchorPoint.Type.Symmetric
                    )
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GPathBase", "anchor-point.symmetric")
                      )
                    )
                    .append(
                      $("<span></span>").addClass("gravit-icon-node-assymetric")
                    )
                    .on("click", require),
                },
              ],
            })
            .addClass("joint")
            .appendTo(this._panel),
          $("<hr/>").attr("point-only", true).attr("corner-only", true).appendTo(e),
          $("<div></div>")
            .attr("point-only", true)
            .attr("corner-only", true)
            .addClass("path-corner-chooser")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.corner")
              ),
              columns: [
                { width: "auto", content: GTools("cl-slider") },
                { clazz: "corners-radius-no-padding" },
                { width: "35px", content: GTools("cl-input") },
                { width: "3x" },
                { width: "40px", content: GTools("ctp") },
              ],
            })
            .addClass("corner-radius")
            .appendTo(this._panel);
      }),
      (c.prototype.update = function (e, t) {
        if (
          (gDesigner.isTouchEnabled()
            ? (this._panel.find(".closed-checkbox").gCheckboxSlider(),
              this._panel.find(".csc-checkbox").gCheckboxSlider())
            : (this._panel.find(".closed-checkbox").gCheckboxSlider("unmount"),
              this._panel.find(".csc-checkbox").gCheckboxSlider("unmount")),
          this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange
              ),
            this._document
              .getScene()
              .removeEventListener(
                GCore.GElement.AfterFlagChangeEvent,
                this._afterFlagChange
              ),
            this._document
              .getEditor()
              .removeEventListener(
                GTools.GEditor.EdGeometryChangeEvent,
                this._edGeometryChange,
                this
              ),
            gDesigner.removeEventListener(l, this._settingChanged),
            (this._document = null)),
          (this._pathes = []),
          (this._points = []),
          e)
        ) {
          for (var require = 0; require < t.length; ++require)
            if (t[require] instanceof GCore.GPath || t[require] instanceof GCore.GCompoundPath) {
              var a = t[require];
              this._pathes.push(a);
              var GRichTooltipConfig = function (e) {
                for (
                  var t = e.getAnchorPoints().getFirstChild();
                  null !== t;
                  t = t.getNext()
                )
                  t.hasFlag(GCore.GNode.Flag.Selected) &&
                    (this._points.push(t),
                    1 == this._points.legth && (this._mainPath = e));
              }.bind(this);
              if (a instanceof GCore.GPath) GRichTooltipConfig(a);
              else
                for (
                  var GProperties = a.getPaths().getFirstChild();
                  null !== GProperties;
                  GProperties = GProperties.getNext()
                )
                  GRichTooltipConfig(GProperties);
            }
          if (this._pathes.length && this._pathes.length === t.length)
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
                  GCore.GElement.AfterFlagChangeEvent,
                  this._afterFlagChange,
                  this
                ),
              this._document
                .getEditor()
                .addEventListener(
                  GTools.GEditor.EdGeometryChangeEvent,
                  this._edGeometryChange,
                  this
                ),
              gDesigner.addEventListener(l, this._settingChanged, this),
              this._updatePathProperties(),
              this._updatePointProperties(),
              true
            );
        }
        return false;
      }),
      (c.prototype._getTargetNodeType = function (e) {
        return e.is("select")
          ? e.val()
          : e.closest("[data-node-type]").attr("data-node-type");
      }),
      (c.prototype._getStatsNodeType = function (e) {
        switch (e) {
          case GCore.GPathBase.AnchorPoint.Type.Mirror:
            return "Mirror";
          case GCore.GPathBase.AnchorPoint.Type.Asymmetric:
            return "Asymmetric";
          case GCore.GPathBase.AnchorPoint.Type.Symmetric:
            return "Symmetric";
          case GCore.GPathBase.AnchorPoint.Type.Connector:
            return "Connector";
          default:
            return "Straight";
        }
      }),
      (c.prototype.assignNodeType = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "-";
        gDesigner.stats(
          "pathproperties_assign_nodetype",
          this._getStatsNodeType(exports)
        );
        const module = this._document,
          require = module && module.getEditor();
        if (require) {
          require.beginTransaction();
          try {
            let t = null,
              GTools = null;
            "-" === exports &&
              ((t = ["tp", "hlx", "hly", "hrx", "hry", "ah"]),
              (GTools = [
                GCore.GPathBase.CornerType.Rounded,
                null,
                null,
                null,
                null,
                false,
              ])),
              this._points.forEach((n) => {
                if (
                  "-" !== exports &&
                  ((t = ["ah", "tp"]),
                  (GTools = [false, exports]),
                  null === n.getProperty("hlx") &&
                    null === n.getProperty("hrx"))
                ) {
                  const a = n.getParent().getPreviousPoint(n),
                    GRichTooltipConfig = a ? a.getProperty("hrx") : null,
                    GProperties = n.getParent().getNextPoint(n),
                    l = GProperties ? GProperties.getProperty("hlx") : null;
                  if (
                    exports != GCore.GPathBase.AnchorPoint.Type.Asymmetric ||
                    null !== GRichTooltipConfig ||
                    null !== l
                  )
                    GTools[0] = true;
                  else {
                    const e = n.getProperty("x"),
                      GRichTooltipConfig = n.getProperty("y");
                    if (
                      a &&
                      a.getProperty("tp") !=
                        GCore.GPathBase.AnchorPoint.Type.Connector
                    ) {
                      const n = a.getProperty("x"),
                        GProperties = a.getProperty("y");
                      if (
                        !GCore.GMath.isEqualEps(e, n) ||
                        !GCore.GMath.isEqualEps(GRichTooltipConfig, GProperties)
                      ) {
                        const a =
                            e + (n - e) * GCore.GPathBase.AnchorPoint.HANDLE_COEFF,
                          l =
                            GRichTooltipConfig + (GProperties - GRichTooltipConfig) * GCore.GPathBase.AnchorPoint.HANDLE_COEFF;
                        t.push("hlx"), t.push("hly"), GTools.push(a), GTools.push(l);
                      }
                    }
                    if (
                      GProperties &&
                      GProperties.getProperty("tp") !=
                        GCore.GPathBase.AnchorPoint.Type.Connector
                    ) {
                      const n = GProperties.getProperty("x"),
                        a = GProperties.getProperty("y");
                      if (
                        !GCore.GMath.isEqualEps(e, n) ||
                        !GCore.GMath.isEqualEps(GRichTooltipConfig, a)
                      ) {
                        const GProperties =
                            e + (n - e) * GCore.GPathBase.AnchorPoint.HANDLE_COEFF,
                          l =
                            GRichTooltipConfig + (a - GRichTooltipConfig) * GCore.GPathBase.AnchorPoint.HANDLE_COEFF;
                        t.push("hrx"), t.push("hry"), GTools.push(GProperties), GTools.push(l);
                      }
                    }
                  }
                }
                n.setProperties(t, GTools);
                let a = n.getProperty("tp");
                const GRichTooltipConfig = n.getProperty("ah");
                a == GCore.GPathBase.AnchorPoint.Type.Mirror &&
                  GRichTooltipConfig &&
                  n.setProperty("ah", false);
              });
          } finally {
            require.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GPathProperties",
                  "action.modify-path-node-type"
                )
              )
            );
          }
        }
      }),
      (c.prototype._afterPropertiesChange = function (e) {
        e.temporary ||
          (this._pathes.length > 0 &&
            this._pathes[0] === e.node &&
            this._updatePathProperties(),
          this._points.length > 0 &&
            this._points[0] === e.node &&
            this._updatePointProperties());
      }),
      (c.prototype._afterFlagChange = function (e) {
        if (
          e.flag === GCore.GNode.Flag.Selected &&
          e.node instanceof GCore.GPathBase.AnchorPoint
        ) {
          var module = e.node.getParent() ? e.node.getParent().getParent() : null,
            require =
              module && module.getParent() && module.getParent().getParent()
                ? module.getParent().getParent()
                : null;
          ((module && this._pathes.indexOf(module) >= 0) ||
            (require && this._pathes.indexOf(require) >= 0)) &&
            (e.set
              ? this._points.push(e.node)
              : this._points.splice(this._points.indexOf(e.node), 1),
            this._updatePathProperties(),
            this._updatePointProperties());
        }
      }),
      (c.prototype._edGeometryChange = function (e) {
        this._updatePointProperties();
      }),
      (c.prototype._updatePathProperties = function () {
        if (this._points.length)
          this._panel.find("[path-only]").css("display", "none");
        else {
          this._panel.find("[path-only]").css("display", "");
          var exports = this._pathes[0];
          exports instanceof GCore.GPath
            ? (this._panel
                .find('input[data-path-property="closed"]')
                .prop("disabled", false)
                .prop("checked", exports.getProperty("closed")),
              this._panel
                .find('input[data-path-property="csc"]')
                .prop("disabled", false)
                .prop("checked", !!exports.getProperty("csc")))
            : (this._panel
                .find('input[data-path-property="closed"]')
                .prop("disabled", true)
                .prop("checked", false),
              this._panel
                .find('input[data-path-property="csc"]')
                .prop("disabled", false)
                .prop("checked", !!exports.getProperty("csc")));
        }
      }),
      (c.prototype._settingChanged = function (e) {
        "decimals_num" === e.key && this._updatePointProperties();
      }),
      (c.prototype._updatePointProperties = function () {
        var e = this._points.length > 0 ? this._points[0] : null;
        if (e) {
          this._panel.find("[point-only]").css("display", "");
          var module = this._getPointCoord(e);
          this._panel
            .find('input[data-point-property="x"]')
            .val(
              this._document
                .getScene()
                .pointToString(
                  module.getX(),
                  this._document.getScene().getOptimalDecimalsCount()
                )
            ),
            this._panel
              .find('input[data-point-property="y"]')
              .val(
                this._document
                  .getScene()
                  .pointToString(
                    module.getY(),
                    this._document.getScene().getOptimalDecimalsCount()
                  )
              );
          var require = true,
            GTools = e.getProperty("tp");
          for (var a in GCore.GPathBase.AnchorPoint.Type)
            if (GCore.GPathBase.AnchorPoint.Type[a] === GTools) {
              require = false;
              break;
            }
          var GRichTooltipConfig = require ? "-" : GTools;
          this._panel.find('select[data-point-property="tp"]').val(GRichTooltipConfig),
            this._panel.find("[data-node-type]").each(function (e, t) {
              var n = $(t);
              n.toggleClass("g-active", n.attr("data-node-type") === GRichTooltipConfig);
            }),
            this._panel.find("[corner-only]").css("display", require ? "" : "none"),
            this._panel
              .find('[data-point-property="ctp"]')
              .css("display", require ? "" : "none")
              .gCornerTypePicker(
                "value",
                require ? GTools : GCore.GPathBase.CornerType.Rounded
              ),
            this._panel
              .find('div[data-point-property="cl"]')
              .prop("disabled", !require)
              .gInputSlider(
                "value",
                this._document
                  .getScene()
                  .pointToString(
                    e.getProperty("cl"),
                    this._document.getScene().getOptimalDecimalsCount()
                  )
              ),
            this._panel
              .find('input[data-point-property="cl"]')
              .prop("disabled", !require)
              .val(
                this._document
                  .getScene()
                  .pointToString(
                    e.getProperty("cl"),
                    this._document.getScene().getOptimalDecimalsCount()
                  )
              ),
            this._panel
              .find('input[data-point-property="cr"]')
              .prop("disabled", !require || e.getProperty("cu"))
              .val(
                this._document
                  .getScene()
                  .pointToString(
                    e.getProperty("cr"),
                    this._document.getScene().getOptimalDecimalsCount()
                  )
              ),
            this._panel
              .find('button[data-point-property="cu"]')
              .prop("disabled", !require)
              .toggleClass("g-active", !!e.getProperty("cu"));
        } else this._panel.find("[point-only]").css("display", "none");
      }),
      (c.prototype._getPointCoord = function (e) {
        var t,
          n,
          a = e.getPath();
        a && (t = GTools.GElementEditor.getEditor(a))
          ? (t.getPaintElement() != a && (e = t.getPathPointPreview(e)),
            (n = t.getPointCoord(e)))
          : (n = new GCore.GPoint(e.getProperty("x"), e.getProperty("y")));
        return n;
      }),
      (c.prototype._transformPoint = function (e, t, n) {
        t && (n = t.mapPoint(n));
        var GCore = e.getPath(),
          a = GTools.GElementEditor.getEditor(GCore);
        a
          ? a.movePoint(e, n)
          : e.setProperties(["x", "y"], [n.getX(), n.getY()]);
      }),
      (c.prototype._assignPathProperty = function (e, t) {
        this._assignPathProperties([e], [t]);
      }),
      (c.prototype._assignPathProperties = function (e, t) {
        var n = this._document.getEditor();
        n.beginTransaction();
        try {
          for (var GTools = 0; GTools < this._pathes.length; ++GTools)
            this._pathes[GTools].setProperties(e, t);
        } finally {
          n.commitTransaction(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GPathProperties",
                "action.modify-path-properties"
              )
            )
          );
        }
      }),
      (c.prototype._setBorderAlignmentCenter = function () {
        var e,
          t,
          n = ["_ba"],
          GTools = [GCore.GStylable.BorderAlignment.Center],
          a = this._document.getEditor();
        a.beginTransaction();
        try {
          for (var GRichTooltipConfig = 0, GProperties = this._pathes.length; GRichTooltipConfig < GProperties; ++GRichTooltipConfig) {
            e = this._pathes[GRichTooltipConfig].getPaintLayers().getBorderLayers();
            for (var l = 0, c = e.length; l < c; l++)
              (t = e[l]) instanceof GCore.GStylable.BorderPaintLayer &&
                t.setProperties(n, GTools);
          }
        } finally {
          a.commitTransaction(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GPathProperties",
                "action.modify-path-properties"
              )
            )
          );
        }
      }),
      (c.prototype._assignPointProperty = function (e, t) {
        var n = this._document.getEditor();
        n.beginTransaction();
        try {
          for (var GTools = 0; GTools < this._points.length; ++GTools) {
            var a = this._points[GTools];
            if ("x" === e) {
              var GRichTooltipConfig = this._getPointCoord(a),
                GProperties = new GCore.GTransform(1, 0, 0, 1, t - GRichTooltipConfig.getX(), 0);
              this._transformPoint(a, GProperties, GRichTooltipConfig);
            } else if ("y" === e) {
              (GRichTooltipConfig = this._getPointCoord(a)),
                (GProperties = new GCore.GTransform(1, 0, 0, 1, 0, t - GRichTooltipConfig.getY()));
              this._transformPoint(a, GProperties, GRichTooltipConfig);
            } else a.setProperties([e], [t]);
          }
        } finally {
          n.commitTransaction(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GPathProperties",
                "action.modify-point-properties"
              )
            )
          );
        }
      }),
      (c.prototype._assignPointProperties = function (e, t) {
        gDesigner.stats("pathproperties_modify_point-properties");
        var n = this._document.getEditor();
        n.beginTransaction();
        try {
          for (var GTools = 0; GTools < this._points.length; ++GTools)
            this._points[GTools].setProperties(e, t);
        } finally {
          n.commitTransaction(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GPathProperties",
                "action.modify-point-properties"
              )
            )
          );
        }
      }),
      (c.prototype.toString = function () {
        return "[Object GPathProperties]";
      }),
      (exports.exports = c);
  }