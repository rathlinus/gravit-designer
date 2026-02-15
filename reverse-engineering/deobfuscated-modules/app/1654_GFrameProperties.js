/**
 * Webpack Module #1654
 * Type: class
 * Name: GFrameProperties
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */,
      GProperties = require(123) /* GProperties */;
    const GSettingChangedEvent = require(135) /* GSettingChangedEvent */;
    function r() {
      this._items = [];
    }
    GCore.GObject.inherit(r, GProperties),
      (r.prototype._panel = null),
      (r.prototype._document = null),
      (r.prototype._items = null),
      (r.prototype.init = function (e) {
        (this._panel = e),
          this._panel.addClass("frame-property-panel"),
          $("<div></div>")
            .attr("major-item-only", true)
            .addClass("item-frame")
            .gPropertyRow({
              columns: [
                {
                  width: "auto",
                  content: $("<label></label>")
                    .addClass("g-checkbox-label")
                    .append(
                      $("<input>")
                        .addClass("frm-checkbox")
                        .attr("type", "checkbox")
                        .attr("data-item-property", "frm")
                        .on(
                          "change",
                          function (e) {
                            var t = $(e.target).is(":checked");
                            gDesigner.stats(
                              "frameproperties_toggle_frame",
                              t ? "enable" : "disable"
                            ),
                              this._assignProperty(
                                "frm",
                                t,
                                t
                                  ? GCore.GLocale.get(
                                      new GCore.GLocaleKey(
                                        "GFrameProperties",
                                        "text.switch-frame"
                                      )
                                    )
                                  : GCore.GLocale.get(
                                      new GCore.GLocaleKey(
                                        "GFrameProperties",
                                        "text.frame-off"
                                      )
                                    )
                              );
                          }.bind(this)
                        )
                    )
                    .append(
                      $("<span></span>").text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GFrameProperties", "text.frame")
                        )
                      )
                    ),
                },
              ],
            })
            .appendTo(this._panel);
      }),
      (r.prototype.update = function (e, t) {
        if (
          (this._updateUI(),
          this._document &&
            (gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged, this),
            this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange
              ),
            (this._document = null)),
          (this._items = []),
          e)
        ) {
          gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this);
          for (var require = 0; require < t.length; ++require) {
            t[require] instanceof GCore.GLayer && this._items.push(t[require]);
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
      (r.prototype._updateUI = function () {
        gDesigner.isTouchEnabled()
          ? this._panel.find(".frm-checkbox").gCheckboxSlider()
          : this._panel.find(".frm-checkbox").gCheckboxSlider("unmount");
      }),
      (r.prototype._settingChanged = function (e) {
        "touch" === e.key && this._updateUI();
      }),
      (r.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          this._items.length > 0 &&
          this._items[0] === e.node &&
          this._updateProperties();
      }),
      (r.prototype._updateProperties = function () {
        var e = this._items[0];
        this._panel.find("[major-item-only]").css("display", ""),
          this._panel
            .find('input[data-item-property="frm"]')
            .prop("disabled", false)
            .prop("checked", !!e.getProperty("frm"));
      }),
      (r.prototype._assignProperty = function (e, t, n) {
        if ("frm" == e) {
          var GCore = this._document.getEditor();
          GCore.beginTransaction();
          try {
            for (var GProperties = 0; GProperties < this._items.length; ++GProperties) {
              var GSettingChangedEvent = this._items[GProperties];
              GSettingChangedEvent.setFrame && GSettingChangedEvent.setFrame(t);
            }
          } finally {
            GCore.commitTransaction(n);
          }
        }
      }),
      (r.prototype.toString = function () {
        return "[Object GFrameProperties]";
      }),
      (exports.exports = r);
  }