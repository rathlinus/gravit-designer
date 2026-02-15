/**
 * Webpack Module #1318
 * Type: class
 * Name: GSimplifyAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(865) /* polyfill_Number_toFixed */, require(193) /* polyfill_Object_keys */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function c() {}
    GCore.GObject.inherit(c, GElementAction),
      (c.ID = "modify.simplify"),
      (c.TITLE = new GCore.GLocaleKey("GSimplifyAction", "title")),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_PATH;
      }),
      (c.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-simplity" : null;
      }),
      (c.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, "S"];
      }),
      (c.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getIndividualSelection()
            : null,
          t = false;
        if (e)
          for (var require = 0; !t && require < e.length; ++require)
            e[require] instanceof GCore.GImage ||
              !e[require].hasMixin(GCore.GVertexSource) ||
              (t = true);
        return t;
      }),
      (c.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? t.getIndividualSelection() : null,
          GEditor = e ? e.getScene() : null,
          MenuItemBuilder = [];
        if (n)
          for (var GElementAction = 0; GElementAction < n.length; ++GElementAction) {
            var c = n[GElementAction];
            c.hasMixin(GCore.GVertexSource) && MenuItemBuilder.push(c);
          }
        if (MenuItemBuilder.length) {
          var d = $("<div></div>")
            .append(
              $("<div>")
                .gInputSlider({ min: 0, max: 100, step: 1 })
                .attr("name", "tolerance")
                .css("width", "50%")
                .gInputSlider("value", 10)
                .on("change", function (e) {
                  if (GEditor) {
                    var t = Number(
                      GEditor.stringToPoint($(this).gInputSlider("value")).toFixed(0)
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
                      var t = Number(GEditor.stringToPoint($(this).val()).toFixed(0));
                      $(this)
                        .parent()
                        .find(".g-input-slider")
                        .gInputSlider("value", t);
                    })
                )
                .append(
                  $("<label>").html(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GSimplifyAction", "text.tolerance")
                    )
                  )
                )
            );
          GSystemDialog.prompt(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GSimplifyAction", "text.simplification")
            ),
            (e) => {
              if (e) {
                var n = parseFloat(
                  d.find(".g-input-slider").gInputSlider("value")
                );
                if (isNaN(n) || !isFinite(n) || GCore.GMath.isEqualEps(n, 0))
                  GSystemDialog.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GSimplifyAction", "text.invalid-value")
                    )
                  );
                else {
                  t.beginTransaction();
                  try {
                    for (var GEditor = [], GElementAction = new Set(), c = 0; c < MenuItemBuilder.length; ++c) {
                      var u = MenuItemBuilder[c].getParent();
                      u && GElementAction.add(u);
                    }
                    try {
                      (0, CollaborationMergeUtils.blockChanges)(t, GElementAction);
                      for (c = 0; c < MenuItemBuilder.length; ++c) {
                        var p = MenuItemBuilder[c],
                          g = p.getParent(),
                          h = p.getNext(),
                          f = this._makeSimplified(n, p),
                          m = GCore.GPathUtil.createPathFromVertexSource(f);
                        m &&
                          (GCore.GElement.prototype.assignFrom.call(m, p),
                          g.insertChild(m, h),
                          GEditor.push(m)),
                          g.removeChild(p);
                      }
                    } finally {
                      (0, CollaborationMergeUtils.releaseChanges)(t, GElementAction),
                        GEditor.length && t.updateSelection(false, GEditor);
                    }
                  } finally {
                    t.commitTransaction(GCore.GLocale.get(this.getTitle()));
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
        return new GCore.GVertexSimplifier(t).simplify(n / 2, false, true);
      }),
      (c.prototype.toString = function () {
        return "[Object GSimplifyAction]";
      }),
      (exports.exports = c);
  }