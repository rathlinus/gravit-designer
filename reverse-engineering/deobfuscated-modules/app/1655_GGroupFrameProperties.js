/**
 * Webpack Module #1655
 * Type: class
 * Name: GGroupFrameProperties
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */,
      GProperties = require(123) /* GProperties */;
    function a() {
      this._items = [];
    }
    GCore.GObject.inherit(a, GProperties),
      (a.prototype._panel = null),
      (a.prototype._document = null),
      (a.prototype._items = null),
      (a.prototype.init = function (e) {
        (this._panel = e),
          this._panel.addClass("group-frame-property-panel"),
          $("<div></div>")
            .addClass("group-frame-row")
            .attr("major-item-only", true)
            .gPropertyRow({
              columns: [
                {
                  width: "auto",
                  content: $("<select></select>")
                    .attr("data-item-property", "frm")
                    .on(
                      "change",
                      function (e) {
                        var t = "1" == $(e.target).val();
                        gDesigner.stats(
                          "groupframeproperties_toggle_frame",
                          t ? "enable" : "disable"
                        ),
                          this._assignProperty(
                            "frm",
                            t,
                            t
                              ? GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GGroupFrameProperties",
                                    "text.switch-frame"
                                  )
                                )
                              : GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GGroupFrameProperties",
                                    "text.switch-group"
                                  )
                                )
                          );
                      }.bind(this)
                    )
                    .append(
                      $("<option></option>")
                        .attr("value", "0")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GGroupFrameProperties",
                              "text.group"
                            )
                          )
                        )
                    )
                    .append(
                      $("<option></option>")
                        .attr("value", "1")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GGroupFrameProperties",
                              "text.frame"
                            )
                          )
                        )
                    ),
                },
              ],
            })
            .appendTo(this._panel);
      }),
      (a.prototype.update = function (e, t) {
        if (
          (this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange
              ),
            (this._document = null)),
          (this._items = []),
          e)
        ) {
          for (var require = 0; require < t.length; ++require) {
            t[require] instanceof GCore.GGroup && this._items.push(t[require]);
          }
          if (this._items.length && this._items.length === t.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              this._updateProperties(),
              true
            );
        }
        return false;
      }),
      (a.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          this._items.length > 0 &&
          this._items[0] === e.node &&
          this._updateProperties();
      }),
      (a.prototype._updateProperties = function () {
        var e = this._items[0];
        this._panel.find("[major-item-only]").css("display", ""),
          this._panel
            .find('[data-item-property="frm"]')
            .prop("disabled", false)
            .prop("value", e.getProperty("frm") ? "1" : "0");
      }),
      (a.prototype._assignProperty = function (e, t, n) {
        if ("frm" == e) {
          var GCore = this._document.getEditor();
          GCore.beginTransaction();
          try {
            for (var GProperties = 0; GProperties < this._items.length; ++GProperties) {
              var a = this._items[GProperties];
              a.setFrame && a.setFrame(t);
            }
          } finally {
            GCore.commitTransaction(n);
          }
        }
      }),
      (a.prototype.toString = function () {
        return "[Object GGroupFrameProperties]";
      }),
      (exports.exports = a);
  }