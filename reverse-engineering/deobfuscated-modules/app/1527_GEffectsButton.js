/**
 * Webpack Module #1527
 * Type: class
 * Name: GEffectsButton
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */;
    function a(e, t, n, a, r, s, l) {
      var c = e && t && n && a && l;
      if (
        ((this._htmlElement = $("<li></li>").addClass("g-effects-button")), c)
      ) {
        let c = "";
        s && s.category && (c = l(s.category) + "/"),
          this._htmlElement
            .gPro({ pro: r })
            .append(
              $("<span></span>")
                .addClass("g-effects-button-icon")
                .append($("<i></i>").addClass(t))
            )
            .append(
              $("<span></span>").addClass("g-effects-button-caption").append(e)
            )
            .on(
              "click",
              CollaborationMergeUtils.watchDog.trap(
                function () {
                  let e =
                    (n &&
                      GCore.GLocale.getValue(
                        (s && s.i18n) || n,
                        "name",
                        "unknown",
                        0
                      )) ||
                    "unkn";
                  r
                    ? gDesigner.stats("effects_add_proeffectdefault", c + e)
                    : gDesigner.stats("effects_add_effectdefault", c + e),
                    a(n, s);
                },
                () => !r,
                () =>
                  gDesigner.stats(
                    "effects_nonprotriespro_proeffectdefault",
                    c +
                      ((n &&
                        GCore.GLocale.getValue(
                          (s && s.i18n) || n,
                          "name",
                          "unknown",
                          0
                        )) ||
                        "unkn")
                  )
              )
            )
            .on(
              "mouseover",
              function () {
                this._htmlElement.addClass("active");
              }.bind(this)
            )
            .on(
              "mouseout",
              function () {
                this._htmlElement.removeClass("active");
              }.bind(this)
            );
      }
    }
    (a.prototype._htmlElement = null),
      (a.prototype.toString = function () {
        return "[Object GEffectsButton]";
      }),
      (exports.exports = a);
  }