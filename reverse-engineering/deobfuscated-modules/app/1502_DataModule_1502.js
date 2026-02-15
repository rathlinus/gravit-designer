/**
 * Webpack Module #1502
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GPersona = require(1246) /* Exports_GPersona */,
      GEvent_oldPersona = require(1250) /* GEvent_oldPersona */;
    exports.exports = class {
      constructor() {
        (this._htmlElement = $("<div></div>").addClass("g-persona-bar")),
          (this._container = $("<div></div>")
            .addClass("g-persona-container")
            .appendTo(this._htmlElement));
      }
      init() {
        var e = Object.keys(GPersona.GPersona);
        e.length > 1 &&
          (gDesigner.addEventListener(GEvent_oldPersona, this._personaChangeEvent, this),
          e.forEach((e) => {
            var t = GPersona.GPersona[e];
            $("<div></div>")
              .data("persona", t)
              .attr("data-title", t.name)
              .addClass("g-persona-item")
              .append($("<img>").attr("src", t.icon))
              .on("click", (e) => {
                gDesigner.stats("persona_click_activate-button");
                var t = $(e.target).closest(".g-persona-item").data("persona");
                gDesigner.activatePersona(t);
              })
              .appendTo(this._container);
          }),
          this._activate(gDesigner.getActivePersona()));
      }
      _activate(e) {
        this._htmlElement.find(".g-persona-item").removeClass("g-active"),
          this._htmlElement.find(".g-persona-item").each(function (t, n) {
            var GPersona = $(n);
            if (GPersona.data("persona") === e) return GPersona.addClass("g-active"), false;
          });
      }
      _personaChangeEvent(e) {
        this._activate(e.newPersona);
      }
    };
  }