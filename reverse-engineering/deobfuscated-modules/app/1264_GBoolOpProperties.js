/**
 * Webpack Module #1264
 * Type: class
 * Name: GBoolOpProperties
 */

function (exports, module, require) {
    "use strict";
    require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* module */,
      GProperties = require(123) /* GProperties */,
      GAppearanceProperties = require(1160) /* GAppearanceProperties */;
    function r() {}
    GCore.GObject.inherit(r, GProperties),
      (r.prototype._panel = null),
      (r.prototype._document = null),
      (r.prototype._elements = null),
      (r.prototype.isGroup = function (e) {
        return e instanceof GAppearanceProperties;
      }),
      (r.prototype.init = function (e, t) {
        this._panel = e;
        var n = function (e) {
          var t = parseInt($(e.target).closest("[data-op]").attr("data-op"));
          gDesigner.stats(
            "booleanops_click_" +
              (t === GCore.GVertexPolyBoolean.OR
                ? "merge"
                : t === GCore.GVertexPolyBoolean.AND
                ? "intersect"
                : t === GCore.GVertexPolyBoolean.XOR
                ? "difference"
                : t === GCore.GVertexPolyBoolean.SUB
                ? "subtract"
                : "unkn")
          );
          var n = this._document.getEditor();
          n.beginTransaction();
          try {
            for (var GProperties = 0; GProperties < this._elements.length; ++GProperties)
              this._elements[GProperties].setProperty("bool", t);
          } finally {
            n.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GBoolOpProperties",
                  "action.modify-merge-mode"
                )
              )
            );
          }
        }.bind(this);
        $("<div></div>")
          .addClass("compound-row")
          .gPropertyRow({
            label: GCore.GLocale.get(
              new GCore.GLocaleKey("GBoolOpProperties", "text.boolean")
            ),
            columns: [
              {
                width: "25%",
                content: $("<button></button>")
                  .addClass("compound-chooser-btn")
                  .attr("data-op", GCore.GVertexPolyBoolean.OR)
                  .attr(
                    "data-title",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GBoolOpProperties", "text.union")
                    )
                  )
                  .append(
                    $("<span></span>").addClass("gravit-icon-merge-union")
                  )
                  .on("click", n),
              },
              {
                width: "25%",
                content: $("<button></button>")
                  .addClass("compound-chooser-btn")
                  .attr("data-op", GCore.GVertexPolyBoolean.SUB)
                  .attr(
                    "data-title",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GBoolOpProperties", "text.subtract")
                    )
                  )
                  .append(
                    $("<span></span>").addClass("gravit-icon-merge-subtract")
                  )
                  .on("click", n),
              },
              {
                width: "25%",
                content: $("<button></button>")
                  .addClass("compound-chooser-btn")
                  .attr("data-op", GCore.GVertexPolyBoolean.AND)
                  .attr(
                    "data-title",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GBoolOpProperties", "text.intersect")
                    )
                  )
                  .append(
                    $("<span></span>").addClass("gravit-icon-merge-intersect")
                  )
                  .on("click", n),
              },
              {
                width: "25%",
                content: $("<button></button>")
                  .addClass("compound-chooser-btn")
                  .attr("data-op", GCore.GVertexPolyBoolean.XOR)
                  .attr(
                    "data-title",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GBoolOpProperties", "text.difference")
                    )
                  )
                  .append(
                    $("<span></span>").addClass("gravit-icon-merge-difference")
                  )
                  .on("click", n),
              },
            ],
          })
          .appendTo(this._panel),
          $("<hr/>").appendTo(this._panel);
      }),
      (r.prototype.update = function (e, t) {
        if (
          (this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange
              ),
            (this._document = null)),
          (this._elements = []),
          e && t)
        ) {
          for (var require = 0; require < t.length; ++require) {
            var GProperties = t[require];
            if (
              GProperties.getParent() &&
              GProperties.getParent() instanceof GCore.GCompoundShape &&
              GProperties.getPrevious()
            )
              this._elements.push(GProperties);
            else if (GProperties instanceof GCore.GCompoundShape && GProperties.getFirstChild())
              for (
                var GAppearanceProperties = GProperties.getFirstChild().getNext();
                null !== GAppearanceProperties;
                GAppearanceProperties = GAppearanceProperties.getNext()
              )
                this._elements.push(GAppearanceProperties);
          }
          if (this._elements.length)
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
      (r.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          this._elements.length > 0 &&
          this._elements[0] === e.node &&
          this._updateProperties();
      }),
      (r.prototype._updateProperties = function () {
        var e = this._elements[0];
        this._panel.find("button[data-op]").each(function (t, n) {
          var GCore = $(n);
          GCore.toggleClass(
            "g-active",
            e.getProperty("bool") === parseInt(GCore.attr("data-op"))
          );
        });
      }),
      (r.prototype.toString = function () {
        return "[Object GBoolOpProperties]";
      }),
      (exports.exports = r);
  }