/**
 * Webpack Module #1181
 * Type: class
 * Name: GMaskWithShapeAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* MenuItemBuilder */,
      r = require(106) /* GElementAction */,
      s = require(809) /* GClipAction */;
    function l() {}
    o.GObject.inherit(l, r),
      (l.ID = "modify.mask-with-shape"),
      (l.TITLE = new o.GLocaleKey("GMaskWithShapeAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return a.CATEGORY_MODIFY;
      }),
      (l.prototype.getGroup = function () {
        return "structure-group";
      }),
      (l.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, i.GKey.Constant.SHIFT, "M"];
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-mask-with-shape" : "";
      }),
      (l.prototype.isEnabled = function () {
        return s.prototype.isEnabled.call(this);
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor();
        e.beginTransaction();
        try {
          if (
            (s.prototype.execute.call(this, true, true),
            e.getSelection().length > 0)
          ) {
            var module = e.getSelection()[0];
            module.setProperty(
              "name",
              o.GLocale.get(
                new o.GLocaleKey("GMaskWithShapeAction", "text.mask")
              )
            );
            var require = module.getPaintLayers();
            if (require) {
              for (
                var i = (function (e) {
                    e: for (
                      var module = e.getFirstChild();
                      null !== module;
                      module = module.getNext()
                    )
                      if (
                        module instanceof o.GStylable.FillPaintLayer &&
                        module.getProperty("_pt") instanceof o.GLinearGradient
                      ) {
                        var require = module.getProperty("_pt");
                        require;
                        t: for (var i = 0; i < require.getStops().length; ++i) {
                          var a = require.getStops()[i].color.toScreenCSS();
                          if ("#FFFFFF" !== a && "#000000" !== a) {
                            require = null;
                            break t;
                          }
                        }
                        if (require) break e;
                      }
                    return require;
                  })(require),
                  a = [],
                  r = require.getFirstChild();
                null !== r;
                r = r.getNext()
              )
                r instanceof o.GStylable.FillPaintLayer && a.push(r);
              for (var l = 0; l < a.length; ++l) require.removeChild(a[l]);
              if (
                (require.insertChild(
                  new o.GStylable.FillPaintLayer(o.GRGBColor.WHITE)
                ),
                i)
              ) {
                i = i.clone();
                for (l = 0; l < i.getStops().length; ++l) {
                  var c = i.getStops()[l];
                  "#FFFFFF" === c.color.toScreenCSS() && (c.opacity = 0);
                }
                var d = new o.GOverlayEffect();
                module.getEffects().appendChild(d),
                  d.setProperties(["alm", "opc", "pat"], [true, 1, i]);
              }
            }
          }
        } finally {
          e.commitTransaction(o.GLocale.get(this.getTitle()));
        }
      }),
      (l.prototype.toString = function () {
        return "[Object GMaskWithShapeAction]";
      }),
      (exports.exports = l);
  }