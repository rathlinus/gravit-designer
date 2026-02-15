/**
 * Webpack Module #1502
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var o = require(1246) /* Exports_GPersona */,
      i = require(1250) /* module_1250 */;
    exports.exports = class {
      constructor() {
        (this._htmlElement = $("<div></div>").addClass("g-persona-bar")),
          (this._container = $("<div></div>")
            .addClass("g-persona-container")
            .appendTo(this._htmlElement));
      }
      init() {
        var e = Object.keys(o.GPersona);
        e.length > 1 &&
          (gDesigner.addEventListener(i, this._personaChangeEvent, this),
          e.forEach((e) => {
            var t = o.GPersona[e];
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
            var o = $(n);
            if (o.data("persona") === e) return o.addClass("g-active"), false;
          });
      }
      _personaChangeEvent(e) {
        this._activate(e.newPersona);
      }
    };
  }