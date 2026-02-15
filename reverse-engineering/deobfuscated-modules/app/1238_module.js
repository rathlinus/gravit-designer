/**
 * Webpack Module #1238
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(38) /* module_38 */, require(26) /* module_26 */;
    var o = require(1) /* module */;
    require(1150) /* module_1150 */;
    function i(e) {
      let module = [
        ...new Set(
          e.map((e) =>
            e.features
              .map((t) =>
                "• "
                  .concat(
                    ((e) =>
                      e instanceof o.GNode
                        ? e.getNodeNameTranslated()
                        : e instanceof o.GNoisePattern
                        ? o.GLocale.get(
                            new o.GLocaleKey(
                              "GPatternChooser",
                              "pattern-type.noise"
                            )
                          )
                        : e instanceof o.GTexturePattern
                        ? o.GLocale.get(
                            new o.GLocaleKey(
                              "GPatternChooser",
                              "pattern-type.texture"
                            )
                          )
                        : e instanceof o.GBackground
                        ? o.GLocale.get(
                            new o.GLocaleKey(
                              "GPatternChooser",
                              "pattern-type.backgroundfill"
                            )
                          )
                        : e instanceof o.GAngularGradient
                        ? o.GLocale.get(
                            new o.GLocaleKey(
                              "GPatternChooser",
                              "pattern-type.angulargradient"
                            )
                          )
                        : "")(t),
                    " ["
                  )
                  .concat(e.name, "]")
              )
              .join("<br>")
          )
        ),
      ].join("<br>");
      (this._dialog = $("<div></div>").gDialog({
        releaseOnClose: true,
        buttons: [
          $(
            "<button>" +
              o.GLocale.get(new o.GLocaleKey("GLocale", "ok")) +
              "</button>"
          ).on("click", () => this.close()),
        ],
      })),
        $("<div/>")
          .addClass("message")
          .css({ lineHeight: "1.5em", maxHeight: "60%", overflow: "auto" })
          .append(
            $("<span/>").html(
              o.GLocale.get(
                new o.GLocaleKey(
                  "GUnsupportedFeaturesDialog",
                  "text.title-unsupported"
                )
              ) +
                "<br>" +
                module
            )
          )
          .appendTo(this._dialog),
        $("<div></div>")
          .css("margin-top", "10px")
          .append(
            $("<label></label>")
              .append(
                $("<input>")
                  .attr("type", "checkbox")
                  .css("margin-right", "5px")
                  .on("change", (e) => {
                    let module = $(e.target).is(":checked");
                    gDesigner.setSetting(
                      "disable_warning_unsupported_features",
                      module
                    );
                  })
              )
              .append(
                $("<span></span>").text(
                  o.GLocale.get(
                    new o.GLocaleKey(
                      "GUnsupportedFeaturesDialog",
                      "text.checked-unsupported"
                    )
                  )
                )
              )
          )
          .appendTo(this._dialog);
    }
    o.GObject.inherit(i, o.GObject),
      (i.prototype.open = function () {
        this._dialog.gDialog("open");
      }),
      (i.prototype.close = function () {
        this._dialog.gDialog("close");
      }),
      (exports.exports = i);
  }