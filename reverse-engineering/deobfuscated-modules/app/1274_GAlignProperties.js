/**
 * Webpack Module #1274
 * Type: class
 * Name: GAlignProperties
 */

function (exports, module, require) {
    "use strict";
    require(193) /* polyfill_Object_keys */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      GAlignAction = require(866) /* GAlignAction */,
      GDistributeAction = require(867) /* GDistributeAction */,
      GProperties = require(123) /* GProperties */,
      GSettingChangedEvent = require(135) /* GSettingChangedEvent */;
    function c() {
      this._elements = [];
    }
    GCore.GObject.inherit(c, GProperties),
      (c.prototype._panel = null),
      (c.prototype._document = null),
      (c.prototype._elements = null),
      (c.prototype.isGroup = function (e) {
        return false;
      }),
      (c.prototype.init = function (e, t) {
        this._panel = e;
        var n = (e) => {
          var t = GAlignAction.ID + "." + e,
            n = gDesigner.getAction(t);
          return $("<button></button>")
            .attr("data-action", t)
            .on("click", this._executeAction.bind(this))
            .text(GCore.GLocale.get(n.getTitle()));
        };
        $("<hr/>").appendTo(this._panel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "45%",
                  content: n(GTools.GEditor.ArrangeAlignType.AlignJustifyHorizontal),
                },
                { width: "10%" },
                {
                  width: "45%",
                  content: n(GTools.GEditor.ArrangeAlignType.AlignJustifyVertical),
                },
              ],
            })
            .appendTo(this._panel),
          $("<div></div>")
            .gPropertyRow({
              columns: [
                {
                  width: "45%",
                  prefix: {
                    label: GCore.GLocale.get(
                      new GCore.GLocaleKey("GAlignProperties", "text.space-x")
                    ),
                    width: "50px",
                  },
                  content: $("<input>")
                    .on("keydown", this._spaceEvent.bind(this))
                    .attr({ type: "text", "data-dist": GDistributeAction.Type.Horizontal })
                    .val("1")
                    .gInputBox({ minValue: 1 }),
                },
                { width: "10%" },
                {
                  width: "45%",
                  prefix: {
                    label: GCore.GLocale.get(
                      new GCore.GLocaleKey("GAlignProperties", "text.space-y")
                    ),
                    width: "50px",
                  },
                  content: $("<input>")
                    .on("keydown", this._spaceEvent.bind(this))
                    .attr({ type: "text", "data-dist": GDistributeAction.Type.Vertical })
                    .val("1")
                    .gInputBox({ minValue: 1 }),
                },
              ],
            })
            .appendTo(this._panel);
      }),
      (c.prototype._executeAction = function (e) {
        var t = $(e.target).closest("[data-action]").attr("data-action");
        t && gDesigner.executeAction(t, undefined, "alignproperties");
      }),
      (c.prototype._spaceEvent = function (e) {
        if (13 === e.keyCode) {
          var module = $(e.target).closest("input"),
            require = module.attr("data-dist"),
            GTools = this._document.getScene().stringToPoint(module.gInputBox("value"));
          !isNaN(GTools) &&
            GTools > 0 &&
            gDesigner.executeAction(
              GDistributeAction.ID + "." + require,
              [this._elements, null, GTools],
              "shortcut"
            ),
            this._updateDisplayValues();
        }
      }),
      (c.prototype.isAvailable = function (e) {
        return true === e;
      }),
      (c.prototype.update = function (e, t) {
        if (
          (this._document &&
            ((this._document = null),
            gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged)),
          (this._elements = []),
          e)
        ) {
          for (var require = 0; require < t.length; ++require)
            !t[require].hasMixin(GCore.GElement.Transform) ||
              t[require] instanceof GCore.GPage ||
              this._elements.push(t[require]);
          if (this._elements.length >= 2 && this._elements.length === t.length)
            return (
              (this._document = e),
              gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
              true
            );
        }
        return false;
      }),
      (c.prototype._settingChanged = function (e) {
        "decimals_num" === e.key && this._updateDisplayValues();
      }),
      (c.prototype._updateDisplayValues = function () {
        this._panel.find("[data-dist]").each(
          function (e, t) {
            var n = $(t),
              GTools = parseFloat(n.gInputBox("value"));
            (GTools = isNaN(GTools) || GTools <= 0 || !GTools ? 1 : GTools),
              n.gInputBox(
                "value",
                GCore.GUtil.formatNumber(
                  GTools,
                  this._document.getScene().getOptimalDecimalsCount()
                )
              );
          }.bind(this)
        );
      }),
      (c.prototype.toString = function () {
        return "[Object GAlignProperties]";
      }),
      (exports.exports = c);
  }