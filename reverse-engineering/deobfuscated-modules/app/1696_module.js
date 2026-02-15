/**
 * Webpack Module #1696
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* module */;
    var i = {
      init: function (e) {
        e = $.extend({}, e);
        const module = [
          {
            group: null,
            options: [
              {
                type: GCore.GPaintCanvas.BlendMode.Normal,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.normal"),
                isCompatible: true,
              },
            ],
          },
          {
            group: GCore.GLocale.getValue(
              "GAppearanceProperties",
              "text.darken-image"
            ),
            options: [
              {
                type: GCore.GPaintCanvas.BlendMode.Darken,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.darken"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Multiply,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.multiply"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.ColorBurn,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.colorburn"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Subtract,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.subtract"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.LinearBurn,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.linearburn"),
                isCompatible: false,
              },
            ],
          },
          {
            group: GCore.GLocale.getValue(
              "GAppearanceProperties",
              "text.lighten-image"
            ),
            options: [
              {
                type: GCore.GPaintCanvas.BlendMode.Lighten,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.lighten"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Screen,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.screen"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.ColorDodge,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.colordodge"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.LinearDodge,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.lineardodge"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Add,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.add"),
                isCompatible: false,
              },
            ],
          },
          {
            group: GCore.GLocale.getValue(
              "GAppearanceProperties",
              "text.boost-contrast"
            ),
            options: [
              {
                type: GCore.GPaintCanvas.BlendMode.Overlay,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.overlay"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.SoftLight,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.softlight"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.HardLight,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.hardlight"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.VividLight,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.vividlight"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.LinearLight,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.linearlight"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.PinLight,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.pinlight"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.HardMix,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.hardmix"),
                isCompatible: false,
              },
            ],
          },
          {
            group: GCore.GLocale.getValue(
              "GAppearanceProperties",
              "text.adjust-colors"
            ),
            options: [
              {
                type: GCore.GPaintCanvas.BlendMode.Hue,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.hue"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Saturation,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.saturation"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Color,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.color"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Luminosity,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.luminosity"),
                isCompatible: true,
              },
            ],
          },
          {
            group: GCore.GLocale.getValue(
              "GAppearanceProperties",
              "text.invert-colors"
            ),
            options: [
              {
                type: GCore.GPaintCanvas.BlendMode.Difference,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.difference"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Exclusion,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.exclusion"),
                isCompatible: true,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Divide,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.divide"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Power,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.power"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Harmonic,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.harmonic"),
                isCompatible: false,
              },
              {
                type: GCore.GPaintCanvas.BlendMode.Sin,
                name: GCore.GLocale.getValue("GPaintCanvas", "blend.sin"),
                isCompatible: false,
              },
            ],
          },
        ];
        return this.each(function () {
          const e = $(this);
          for (let require = 0; require < module.length; ++require) {
            let GCore = e;
            const { group: i, options: a } = module[require];
            i &&
              ((GCore = $('<optgroup label="' + i + '"></optgroup>')), e.append(GCore)),
              a.forEach((e) => {
                let { type: module, name: require, isCompatible: i } = e;
                GCore.append(
                  $("<option></option>")
                    .attr("value", module)
                    .text("".concat(require).concat(i ? "" : " *"))
                );
              });
          }
        });
      },
    };
    $.fn.gBlendMode = function (e) {
      return i[e]
        ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : i.init.apply(this, arguments);
    };
  }