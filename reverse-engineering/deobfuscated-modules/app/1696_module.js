/**
 * Webpack Module #1696
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var o = require(1) /* module */;
    var i = {
      init: function (e) {
        e = $.extend({}, e);
        const module = [
          {
            group: null,
            options: [
              {
                type: o.GPaintCanvas.BlendMode.Normal,
                name: o.GLocale.getValue("GPaintCanvas", "blend.normal"),
                isCompatible: true,
              },
            ],
          },
          {
            group: o.GLocale.getValue(
              "GAppearanceProperties",
              "text.darken-image"
            ),
            options: [
              {
                type: o.GPaintCanvas.BlendMode.Darken,
                name: o.GLocale.getValue("GPaintCanvas", "blend.darken"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Multiply,
                name: o.GLocale.getValue("GPaintCanvas", "blend.multiply"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.ColorBurn,
                name: o.GLocale.getValue("GPaintCanvas", "blend.colorburn"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Subtract,
                name: o.GLocale.getValue("GPaintCanvas", "blend.subtract"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.LinearBurn,
                name: o.GLocale.getValue("GPaintCanvas", "blend.linearburn"),
                isCompatible: false,
              },
            ],
          },
          {
            group: o.GLocale.getValue(
              "GAppearanceProperties",
              "text.lighten-image"
            ),
            options: [
              {
                type: o.GPaintCanvas.BlendMode.Lighten,
                name: o.GLocale.getValue("GPaintCanvas", "blend.lighten"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Screen,
                name: o.GLocale.getValue("GPaintCanvas", "blend.screen"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.ColorDodge,
                name: o.GLocale.getValue("GPaintCanvas", "blend.colordodge"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.LinearDodge,
                name: o.GLocale.getValue("GPaintCanvas", "blend.lineardodge"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.Add,
                name: o.GLocale.getValue("GPaintCanvas", "blend.add"),
                isCompatible: false,
              },
            ],
          },
          {
            group: o.GLocale.getValue(
              "GAppearanceProperties",
              "text.boost-contrast"
            ),
            options: [
              {
                type: o.GPaintCanvas.BlendMode.Overlay,
                name: o.GLocale.getValue("GPaintCanvas", "blend.overlay"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.SoftLight,
                name: o.GLocale.getValue("GPaintCanvas", "blend.softlight"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.HardLight,
                name: o.GLocale.getValue("GPaintCanvas", "blend.hardlight"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.VividLight,
                name: o.GLocale.getValue("GPaintCanvas", "blend.vividlight"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.LinearLight,
                name: o.GLocale.getValue("GPaintCanvas", "blend.linearlight"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.PinLight,
                name: o.GLocale.getValue("GPaintCanvas", "blend.pinlight"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.HardMix,
                name: o.GLocale.getValue("GPaintCanvas", "blend.hardmix"),
                isCompatible: false,
              },
            ],
          },
          {
            group: o.GLocale.getValue(
              "GAppearanceProperties",
              "text.adjust-colors"
            ),
            options: [
              {
                type: o.GPaintCanvas.BlendMode.Hue,
                name: o.GLocale.getValue("GPaintCanvas", "blend.hue"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Saturation,
                name: o.GLocale.getValue("GPaintCanvas", "blend.saturation"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Color,
                name: o.GLocale.getValue("GPaintCanvas", "blend.color"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Luminosity,
                name: o.GLocale.getValue("GPaintCanvas", "blend.luminosity"),
                isCompatible: true,
              },
            ],
          },
          {
            group: o.GLocale.getValue(
              "GAppearanceProperties",
              "text.invert-colors"
            ),
            options: [
              {
                type: o.GPaintCanvas.BlendMode.Difference,
                name: o.GLocale.getValue("GPaintCanvas", "blend.difference"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Exclusion,
                name: o.GLocale.getValue("GPaintCanvas", "blend.exclusion"),
                isCompatible: true,
              },
              {
                type: o.GPaintCanvas.BlendMode.Divide,
                name: o.GLocale.getValue("GPaintCanvas", "blend.divide"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.Power,
                name: o.GLocale.getValue("GPaintCanvas", "blend.power"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.Harmonic,
                name: o.GLocale.getValue("GPaintCanvas", "blend.harmonic"),
                isCompatible: false,
              },
              {
                type: o.GPaintCanvas.BlendMode.Sin,
                name: o.GLocale.getValue("GPaintCanvas", "blend.sin"),
                isCompatible: false,
              },
            ],
          },
        ];
        return this.each(function () {
          const e = $(this);
          for (let require = 0; require < module.length; ++require) {
            let o = e;
            const { group: i, options: a } = module[require];
            i &&
              ((o = $('<optgroup label="' + i + '"></optgroup>')), e.append(o)),
              a.forEach((e) => {
                let { type: module, name: require, isCompatible: i } = e;
                o.append(
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