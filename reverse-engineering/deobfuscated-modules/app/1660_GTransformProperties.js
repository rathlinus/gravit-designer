/**
 * Webpack Module #1660
 * Type: class
 * Name: GTransformProperties
 */

function (exports, module, require) {
    "use strict";
    require(865) /* polyfill_Number_toFixed */, require(193) /* polyfill_Object_keys */, require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      a = require(67) /* GRichTooltipConfig */,
      GProperties = require(123) /* GProperties */,
      s = (require(173) /* stub_requires_1 */, require(135) /* GSettingChangedEvent */);
    require(1162) /* GBorderProperties */;
    function l() {
      this._elements = [];
    }
    GCore.GObject.inherit(l, GProperties),
      (l.prototype._panel = null),
      (l.prototype._copiesAndApply = null),
      (l.prototype._copiesAndApplyTouch = null),
      (l.prototype._document = null),
      (l.prototype._elements = null),
      (l.prototype.isGroup = function (e) {
        return false;
      }),
      (l.prototype._scaleKeepRatio = false),
      (l.prototype._preserveScaleX = 100),
      (l.prototype._preserveScaleY = 100),
      (l.prototype.init = function (e, t) {
        t.addClass("advanced-transform-toolbar"),
          (this._panel = e.addClass("advanced-transform-properties"));
        var n = this;
        (this._advancedTransformPanel = $("<div></div>")
          .css("width", "180px")
          .gOverlay({
            releaseOnClose: false,
            clazz: "g-overlay-advanced-transform",
          })),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "auto",
                  content: $("<label></label>")
                    .append(
                      $("<input />")
                        .attr("type", "checkbox")
                        .attr("data-property", "_bs")
                        .prop("checked", true)
                        .on("change", function () {
                          gDesigner.stats(
                            "transformproperties_toggle_autoscale-borders",
                            $(this).prop("checked") ? "enabled" : "disabled"
                          ),
                            n._setBorderScale($(this).prop("checked"));
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
            .appendTo(this._advancedTransformPanel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "auto",
                  content: $("<label></label>")
                    .append(
                      $("<input />")
                        .attr("type", "checkbox")
                        .attr("data-property", "esc")
                        .prop("checked", true)
                        .on("change", function () {
                          gDesigner.stats(
                            "transformproperties_toggle_autoscale-corners",
                            $(this).prop("checked") ? "enabled" : "disabled"
                          ),
                            n._setCornersScale($(this).prop("checked"));
                        })
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
            .appendTo(this._advancedTransformPanel),
          $("<label></label>")
            .text(
              GCore.GLocale.get(new GCore.GLocaleKey("GTransformProperties", "title"))
            )
            .appendTo(t),
          $("<button></button>")
            .attr("data-action", "stroke-settings")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GTransformProperties",
                  "text.advanced-transform-settings"
                )
              )
            )
            .append($("<span></span>").addClass("gravit-icon-settings"))
            .on(
              "click",
              function (e) {
                gDesigner.stats("transformproperties_open_advanced"),
                  this._advancedTransformPanel.gOverlay(
                    "open",
                    $(e.target).closest("button")
                  );
              }.bind(this)
            )
            .appendTo(t);
        const GTools = a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.move-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.move-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          GProperties = a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.scale-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.scale-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          s = a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.rotate-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.rotate-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          l = a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.rotate-axis-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.rotate-axis-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          c = a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.skew-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.skew-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          d = a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.copies-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.copies-tooltip-description"
              )
            ),
            middle: false,
            learnMore:
              "",
          }),
          u = a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.transdorm-origin-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GTransformProperties",
                "text.transdorm-origin-tooltip-description"
              )
            ),
            learnMore:
              "",
          });
        $("<div></div>")
          .gPropertyRow({
            label: GCore.GLocale.get(
              new GCore.GLocaleKey("GCommonNames", "action.move")
            ),
            columns: [
              {
                width: "44%",
                content: $("<div/>")
                  .append(
                    $("<input/>")
                      .on("keydown", this._confirmEvent.bind(this))
                      .on("change", (e) =>
                        gDesigner.stats("transformproperties_change_move-x")
                      )
                      .attr({ type: "text", "data-property": "move-x" })
                      .gInputBox()
                      .gInputBox("value", "0")
                  )
                  .gInputLabel({ label: "x" })
                  .gRichTooltip(GTools),
              },
              { width: "12%" },
              {
                width: "44%",
                content: $("<div/>")
                  .append(
                    $("<input/>")
                      .on("keydown", this._confirmEvent.bind(this))
                      .on("change", (e) =>
                        gDesigner.stats("transformproperties_change_move-y")
                      )
                      .attr({ type: "text", "data-property": "move-y" })
                      .gInputBox()
                      .gInputBox("value", "0")
                  )
                  .gInputLabel({ label: "y" })
                  .gRichTooltip(GTools),
              },
            ],
          })
          .appendTo(this._panel),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GTransformProperties", "text.scale")
              ),
              columns: [
                {
                  width: "44%",
                  content: $("<div/>")
                    .append(
                      $("<input/>")
                        .attr({ type: "text", "data-property": "scale-x" })
                        .on("change", (e) => {
                          gDesigner.stats("transformproperties_change_scale-x");
                          var t =
                            parseFloat($(e.target).gInputBox("value")) || 100;
                          if (this._scaleKeepRatio) {
                            var n = t / this._preserveScaleX,
                              GTools = this._panel.find('[data-property="scale-y"]'),
                              GCore = parseFloat(GTools.gInputBox("value")) || 100;
                            (GCore *= n),
                              GTools.gInputBox("value", parseFloat(GCore).toFixed(1));
                          }
                          this._preserveScaleX = t;
                        })
                        .gInputBox({ postfix: "%" })
                        .gInputBox("value", "100")
                    )
                    .gInputLabel({
                      label: GCore.GLocale.get(
                        new GCore.GLocaleKey("GCommonNames", "property-w"),
                        "w"
                      ),
                    })
                    .gRichTooltip(GProperties),
                },
                {
                  width: "12%",
                  content: $("<span></span>")
                    .addClass("gravit-icon-unlinked transform-scale-link")
                    .css("text-align", "center")
                    .css("cursor", "pointer")
                    .on("click", function (e) {
                      var t = $(this);
                      "yes" === t.attr("data-ratio")
                        ? (t
                            .attr("data-ratio", "no")
                            .attr(
                              "class",
                              "gravit-icon-unlinked transform-scale-link"
                            ),
                          (n._scaleKeepRatio = false))
                        : (t
                            .attr("data-ratio", "yes")
                            .attr(
                              "class",
                              "gravit-icon-linked transform-scale-link"
                            ),
                          (n._scaleKeepRatio = true));
                    })
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GDimensionProperties",
                          "action.keep-ratio"
                        )
                      )
                    )
                    .attr("data-ratio", "no"),
                },
                {
                  width: "44%",
                  content: $("<div/>")
                    .append(
                      $("<input/>")
                        .attr({ type: "text", "data-property": "scale-y" })
                        .on("change", (e) => {
                          gDesigner.stats("transformproperties_change_scale-y");
                          var t =
                            parseFloat($(e.target).gInputBox("value")) || 100;
                          if (this._scaleKeepRatio) {
                            var n = t / this._preserveScaleY,
                              GTools = this._panel.find('[data-property="scale-x"]'),
                              GCore = parseFloat(GTools.gInputBox("value")) || 100;
                            (GCore *= n),
                              GTools.gInputBox("value", parseFloat(GCore).toFixed(1));
                          }
                          this._preserveScaleY = t;
                        })
                        .gInputBox({ postfix: "%" })
                        .gInputBox("value", "100")
                    )
                    .gInputLabel({
                      label: GCore.GLocale.get(
                        new GCore.GLocaleKey("GCommonNames", "property-h"),
                        "h"
                      ),
                    })
                    .gRichTooltip(GProperties),
                },
              ],
            })
            .appendTo(this._panel),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "action.rotate")
              ),
              columns: [
                {
                  width: "44%",
                  content: $("<div/>")
                    .append(
                      $("<input/>")
                        .attr({ type: "text", "data-property": "rotate" })
                        .on("change", (e) =>
                          gDesigner.stats(
                            "transformproperties_change_rotate-up"
                          )
                        )
                        .gInputBox({ postfix: "°" })
                        .gInputBox("value", "0")
                    )
                    .gInputLabel({ label: "&#x2191;" })
                    .gRichTooltip(s),
                },
                { width: "12%" },
                {
                  width: "44%",
                  content: $("<div/>")
                    .append(
                      $("<input/>")
                        .attr({ type: "text", "data-property": "reflect" })
                        .on("change", (e) =>
                          gDesigner.stats(
                            "transformproperties_change_rotate-down"
                          )
                        )
                        .gInputBox({ postfix: "°" })
                        .gInputBox("value", "0")
                    )
                    .gInputLabel({ label: "&#x2193;" })
                    .gRichTooltip(l),
                },
              ],
            })
            .appendTo(this._panel),
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GTransformProperties", "text.skew")
              ),
              columns: [
                {
                  width: "44%",
                  content: $("<div/>")
                    .append(
                      $("<input/>")
                        .attr({ type: "text", "data-property": "skew-x" })
                        .on("change", (e) =>
                          gDesigner.stats("transformproperties_change_skew-x")
                        )
                        .gInputBox({ postfix: "°" })
                        .gInputBox("value", "0")
                    )
                    .gInputLabel({ label: "X" })
                    .gRichTooltip(c),
                },
                { width: "12%" },
                {
                  width: "44%",
                  content: $("<div/>")
                    .append(
                      $("<input/>")
                        .attr({ type: "text", "data-property": "skew-y" })
                        .on("change", (e) =>
                          gDesigner.stats("transformproperties_change_skew-y")
                        )
                        .gInputBox({ postfix: "°" })
                        .gInputBox("value", "0")
                    )
                    .gInputLabel({ label: "Y" })
                    .gRichTooltip(c),
                },
              ],
            })
            .appendTo(this._panel),
          $("<hr/>").appendTo(this._panel),
          (this._copiesAndApply = $("<div/>")
            .addClass("copies-apply")
            .appendTo(this._panel)),
          (this._copiesAndApplyTouch = $("<div/>")
            .addClass("copies-apply-touch")
            .appendTo(this._panel));
        ((e) => {
          $("<div></div>")
            .gPropertyRow({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GTransformProperties", "text.copies")
              ),
              columns: [
                {
                  width: "44%",
                  content: $("<input/>")
                    .on("change", (e) =>
                      gDesigner.stats("transformproperties_change_copies")
                    )
                    .attr({ type: "text", "data-property": "copies" })
                    .gInputBox()
                    .gInputBox("value", "0")
                    .gRichTooltip(d),
                },
                { width: "12%" },
                {
                  width: "44%",
                  html: $("<div/>")
                    .css("width", "100%")
                    .css("display", "flex")
                    .css("justify-content", "center")
                    .append(
                      $("<div></div>")
                        .attr("data-property", "pivot")
                        .css("align-self", "center")
                        .gPivot()
                        .gPivot("value", GCore.GRect.Side.CENTER)
                    )
                    .gRichTooltip(u),
                },
              ],
            })
            .appendTo(e),
            $("<div></div>")
              .gPropertyRow({
                label: "",
                columns: [
                  {
                    width: "100%",
                    content: $("<button></button>")
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GCommonNames", "action.apply")
                        )
                      )
                      .addClass("transform-button")
                      .css("margin-top", "5px")
                      .on("click", this._applyTransformation.bind(this)),
                  },
                ],
              })
              .appendTo(e);
        })(this._copiesAndApply),
          ((e) => {
            var t = $("<div/>").addClass("left");
            $("<div></div>")
              .gPropertyRow({
                label: GCore.GLocale.get(
                  new GCore.GLocaleKey("GTransformProperties", "text.copies")
                ),
                columns: [
                  {
                    width: "100px",
                    content: $("<input/>")
                      .on("change", (e) =>
                        gDesigner.stats("transformproperties_change_copies")
                      )
                      .attr({ type: "text", "data-property": "copies" })
                      .gInputBox()
                      .gInputBox("value", "0")
                      .gRichTooltip(d),
                  },
                ],
              })
              .appendTo(t),
              $("<div></div>")
                .addClass("transform-apply")
                .gPropertyRow({
                  columns: [
                    {
                      width: "100%",
                      content: $("<button></button>")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GDimensionProperties",
                              "text.transform-apply"
                            )
                          )
                        )
                        .addClass("transform-button")
                        .on("click", this._applyTransformation.bind(this)),
                    },
                  ],
                })
                .appendTo(t),
              t.appendTo(e),
              $("<div></div>")
                .addClass("right")
                .append(
                  $("<div/>")
                    .attr("data-property", "pivot")
                    .gPivot()
                    .gPivot("value", GCore.GRect.Side.CENTER)
                )
                .appendTo(e);
          })(this._copiesAndApplyTouch);
      }),
      (l.prototype.isAvailable = function (e) {
        return true === e;
      }),
      (l.prototype._enableTouchModal = function (e) {
        e
          ? (this._copiesAndApplyTouch.css("display", "block"),
            this._copiesAndApply.css("display", "none"))
          : (this._copiesAndApplyTouch.css("display", "none"),
            this._copiesAndApply.css("display", "block"));
      }),
      (l.prototype.update = function (e, t) {
        if (
          (this._document &&
            (gDesigner.removeEventListener(s, this._settingChanged),
            (this._document = null)),
          this._enableTouchModal(gDesigner.isTouchEnabled()),
          (this._elements = []),
          e)
        ) {
          for (var require = 0; require < t.length; ++require)
            !t[require].hasMixin(GCore.GElement.Transform) ||
              t[require] instanceof GCore.GPage ||
              this._elements.push(t[require]);
          if (this._elements.length && this._elements.length === t.length)
            return (
              (this._document = e),
              gDesigner.addEventListener(s, this._settingChanged, this),
              this._setBorderScale(this._getOwnBorderScale()),
              this._setCornersScale(this._getOwnCornersScale()),
              true
            );
        }
        return false;
      }),
      (l.prototype._confirmEvent = function (e) {
        13 === e.keyCode && this._updateDisplayValues();
      }),
      (l.prototype._settingChanged = function (e) {
        "decimals_num" === e.key && this._updateDisplayValues();
      }),
      (l.prototype._updateDisplayValues = function () {
        this._document.getScene();
        var e = this._panel.find('[data-property="move-x"]'),
          t = parseFloat(e.gInputBox("value"));
        (t = isNaN(t) || t <= 0 || !t ? 0 : t),
          e.gInputBox(
            "value",
            GCore.GUtil.formatNumber(
              t,
              this._document.getScene().getOptimalDecimalsCount()
            )
          ),
          (e = this._panel.find('[data-property="move-y"]')),
          (t = parseFloat(e.gInputBox("value"))),
          (t = isNaN(t) || t <= 0 || !t ? 0 : t),
          e.gInputBox(
            "value",
            GCore.GUtil.formatNumber(
              t,
              this._document.getScene().getOptimalDecimalsCount()
            )
          );
      }),
      (l.prototype._applyTransformation = function () {
        gDesigner.stats("transformproperties_apply_transformation");
        var e = this._document.getScene(),
          t = gDesigner.isTouchEnabled()
            ? this._copiesAndApplyTouch
            : this._copiesAndApply,
          n = parseInt(t.find('[data-property="copies"]').gInputBox("value")),
          a = t.find('[data-property="pivot"]').gPivot("value"),
          GProperties =
            e.stringToPoint(
              this._panel.find('[data-property="move-x"]').gInputBox("value")
            ) || 0,
          s =
            e.stringToPoint(
              this._panel.find('[data-property="move-y"]').gInputBox("value")
            ) || 0,
          l =
            parseFloat(
              this._panel.find('[data-property="scale-x"]').gInputBox("value")
            ) / 100 || 1,
          c =
            parseFloat(
              this._panel.find('[data-property="scale-y"]').gInputBox("value")
            ) / 100 || 1,
          d =
            GCore.GMath.toRadians(
              parseFloat(
                this._panel.find('[data-property="rotate"]').gInputBox("value")
              )
            ) || 0,
          u =
            GCore.GMath.toRadians(
              parseFloat(
                this._panel.find('[data-property="skew-x"]').gInputBox("value")
              )
            ) || 0,
          p =
            GCore.GMath.toRadians(
              parseFloat(
                this._panel.find('[data-property="skew-y"]').gInputBox("value")
              )
            ) || 0,
          g =
            parseFloat(
              parseFloat(
                this._panel.find('[data-property="reflect"]').gInputBox("value")
              )
            ) || 0;
        g = 0 !== g ? GCore.GMath.toRadians(-g) : g;
        var h = function (e, t) {
          var n = GTools.GElementEditor.openEditor(e);
          n
            ? (n._setTransform(t), n.applyTransform(e, true, null, null))
            : e.transform(e, true);
        };
        function f(e, t, n) {
          t.beginUpdate();
          try {
            if (
              ((GProperties || s) && h(t, new GCore.GTransform(1, 0, 0, 1, GProperties * e, s * e)),
              (1 === l && 1 === c) ||
                h(
                  t,
                  new GCore.GTransform()
                    .translated(-n.getX(), -n.getY())
                    .scaled(l + (l - 1) * (e - 1), c + (c - 1) * (e - 1))
                    .translated(n.getX(), n.getY())
                ),
              0 !== d &&
                h(
                  t,
                  new GCore.GTransform()
                    .translated(-n.getX(), -n.getY())
                    .rotated(d * e)
                    .translated(n.getX(), n.getY())
                ),
              (0 !== u || 0 !== p) &&
                u > -GCore.GMath.PIHALF &&
                p > -GCore.GMath.PIHALF &&
                u < GCore.GMath.PIHALF &&
                p < GCore.GMath.PIHALF &&
                h(
                  t,
                  new GCore.GTransform()
                    .translated(-n.getX(), -n.getY())
                    .skewed(u * e, p * e)
                    .translated(n.getX(), n.getY())
                ),
              0 !== g)
            ) {
              var GTools = Math.cos(g),
                a = Math.sin(g);
              e % 2 &&
                h(
                  t,
                  new GCore.GTransform()
                    .translated(-n.getX(), -n.getY())
                    .multiplied(new GCore.GTransform(GTools, -a, a, GTools, 0, 0))
                    .multiplied(new GCore.GTransform(1, 0, 0, -1, 0, 0))
                    .multiplied(new GCore.GTransform(GTools, a, -a, GTools, 0, 0))
                    .translated(n.getX(), n.getY())
                );
            }
          } finally {
            t.endUpdate();
          }
        }
        GTools.GEditor.tryRunTransaction(
          e,
          function () {
            for (
              var e = [], t = null, GTools = null, GProperties = 0;
              GProperties < this._elements.length;
              ++GProperties
            ) {
              var s = this._elements[GProperties];
              a && (GTools = s.getGeometryBBox()) && (t = t ? t.united(GTools) : GTools);
              var l = [s];
              if (n > 0)
                for (
                  var c = s.getParent(),
                    d = s.getNext() ? s.getNext() : null,
                    u = 0;
                  u < n;
                  ++u
                ) {
                  var p = s.clone();
                  c.insertChild(p, d),
                    u == n - 1 &&
                      (p.setFlag(GCore.GNode.Flag.Selected),
                      s.removeFlag(GCore.GNode.Flag.Selected)),
                    l.push(p);
                }
              e.push(l);
            }
            var g = null;
            if ((t && !t.isEmpty() && (g = t.getSide(a)), g))
              for (GProperties = 0; GProperties < e.length; ++GProperties) {
                if ((l = e[GProperties]).length > 1)
                  for (var h = 0; h < l.length; ++h) f(h, l[h], g);
                else 1 == l.length && f(1, l[0], g);
              }
          }.bind(this),
          GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GTransformProperties",
              "action.apply-transformation"
            )
          )
        );
      }),
      (l.prototype._getOwnBorderScale = function () {
        return this._advancedTransformPanel
          .find('[data-property="_bs"]')
          .prop("checked");
      }),
      (l.prototype._setBorderScale = function (e) {
        this._document &&
          this._document
            .getScene()
            .setBorderScale(
              e &&
                (undefined === GTools.GEditorOptions.scaleBorderWidth ||
                  GTools.GEditorOptions.scaleBorderWidth)
            );
      }),
      (l.prototype._getOwnCornersScale = function () {
        return this._advancedTransformPanel
          .find('[data-property="esc"]')
          .prop("checked");
      }),
      (l.prototype._setCornersScale = function (e) {
        this._document &&
          this._document
            .getScene()
            .setCornersScale(
              e &&
                (undefined === GTools.GEditorOptions.scaleCorners ||
                  GTools.GEditorOptions.scaleCorners)
            );
      }),
      (l.prototype.toString = function () {
        return "[Object GTransformProperties]";
      }),
      (exports.exports = l);
  }