/**
 * Webpack Module #1318
 * Type: class
 * Name: GSimplifyAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(865) /* polyfill_Number_toFixed */, require(193) /* polyfill_Object_keys */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* CollaborationMergeUtils */,
      r = require(18) /* MenuItemBuilder */,
      s = require(106) /* GElementAction */,
      l = require(44) /* GSystemDialog */;
    function c() {}
    o.GObject.inherit(c, s),
      (c.ID = "modify.simplify"),
      (c.TITLE = new o.GLocaleKey("GSimplifyAction", "title")),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return r.CATEGORY_MODIFY_PATH;
      }),
      (c.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-simplity" : null;
      }),
      (c.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, i.GKey.Constant.OPTION, "S"];
      }),
      (c.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getIndividualSelection()
            : null,
          t = false;
        if (e)
          for (var require = 0; !t && require < e.length; ++require)
            e[require] instanceof o.GImage ||
              !e[require].hasMixin(o.GVertexSource) ||
              (t = true);
        return t;
      }),
      (c.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? t.getIndividualSelection() : null,
          i = e ? e.getScene() : null,
          r = [];
        if (n)
          for (var s = 0; s < n.length; ++s) {
            var c = n[s];
            c.hasMixin(o.GVertexSource) && r.push(c);
          }
        if (r.length) {
          var d = $("<div></div>")
            .append(
              $("<div>")
                .gInputSlider({ min: 0, max: 100, step: 1 })
                .attr("name", "tolerance")
                .css("width", "50%")
                .gInputSlider("value", 10)
                .on("change", function (e) {
                  if (i) {
                    var t = Number(
                      i.stringToPoint($(this).gInputSlider("value")).toFixed(0)
                    );
                    $(this).parent().find("input").val(t);
                  }
                })
            )
            .append(
              $("<span>")
                .css("width", "50%")
                .append(
                  $("<input>")
                    .attr("type", "text")
                    .css("width", "3em")
                    .val(10)
                    .on("change", function (e) {
                      var t = Number(i.stringToPoint($(this).val()).toFixed(0));
                      $(this)
                        .parent()
                        .find(".g-input-slider")
                        .gInputSlider("value", t);
                    })
                )
                .append(
                  $("<label>").html(
                    o.GLocale.get(
                      new o.GLocaleKey("GSimplifyAction", "text.tolerance")
                    )
                  )
                )
            );
          l.prompt(
            o.GLocale.get(
              new o.GLocaleKey("GSimplifyAction", "text.simplification")
            ),
            (e) => {
              if (e) {
                var n = parseFloat(
                  d.find(".g-input-slider").gInputSlider("value")
                );
                if (isNaN(n) || !isFinite(n) || o.GMath.isEqualEps(n, 0))
                  l.alert(
                    o.GLocale.get(
                      new o.GLocaleKey("GSimplifyAction", "text.invalid-value")
                    )
                  );
                else {
                  t.beginTransaction();
                  try {
                    for (var i = [], s = new Set(), c = 0; c < r.length; ++c) {
                      var u = r[c].getParent();
                      u && s.add(u);
                    }
                    try {
                      (0, a.blockChanges)(t, s);
                      for (c = 0; c < r.length; ++c) {
                        var p = r[c],
                          g = p.getParent(),
                          h = p.getNext(),
                          f = this._makeSimplified(n, p),
                          m = o.GPathUtil.createPathFromVertexSource(f);
                        m &&
                          (o.GElement.prototype.assignFrom.call(m, p),
                          g.insertChild(m, h),
                          i.push(m)),
                          g.removeChild(p);
                      }
                    } finally {
                      (0, a.releaseChanges)(t, s),
                        i.length && t.updateSelection(false, i);
                    }
                  } finally {
                    t.commitTransaction(o.GLocale.get(this.getTitle()));
                  }
                }
              }
            },
            d
          );
        }
      }),
      (c.prototype._makeSimplified = function (e, t) {
        var n = e > 0 ? e : -e;
        return new o.GVertexSimplifier(t).simplify(n / 2, false, true);
      }),
      (c.prototype.toString = function () {
        return "[Object GSimplifyAction]";
      }),
      (exports.exports = c);
  }