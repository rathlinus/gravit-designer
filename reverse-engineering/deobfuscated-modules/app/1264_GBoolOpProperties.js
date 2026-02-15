/**
 * Webpack Module #1264
 * Type: class
 * Name: GBoolOpProperties
 */

function (exports, module, require) {
    "use strict";
    require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var o = require(1) /* module */,
      i = require(123) /* GProperties */,
      a = require(1160) /* GAppearanceProperties */;
    function r() {}
    o.GObject.inherit(r, i),
      (r.prototype._panel = null),
      (r.prototype._document = null),
      (r.prototype._elements = null),
      (r.prototype.isGroup = function (e) {
        return e instanceof a;
      }),
      (r.prototype.init = function (e, t) {
        this._panel = e;
        var n = function (e) {
          var t = parseInt($(e.target).closest("[data-op]").attr("data-op"));
          gDesigner.stats(
            "booleanops_click_" +
              (t === o.GVertexPolyBoolean.OR
                ? "merge"
                : t === o.GVertexPolyBoolean.AND
                ? "intersect"
                : t === o.GVertexPolyBoolean.XOR
                ? "difference"
                : t === o.GVertexPolyBoolean.SUB
                ? "subtract"
                : "unkn")
          );
          var n = this._document.getEditor();
          n.beginTransaction();
          try {
            for (var i = 0; i < this._elements.length; ++i)
              this._elements[i].setProperty("bool", t);
          } finally {
            n.commitTransaction(
              o.GLocale.get(
                new o.GLocaleKey(
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
            label: o.GLocale.get(
              new o.GLocaleKey("GBoolOpProperties", "text.boolean")
            ),
            columns: [
              {
                width: "25%",
                content: $("<button></button>")
                  .addClass("compound-chooser-btn")
                  .attr("data-op", o.GVertexPolyBoolean.OR)
                  .attr(
                    "data-title",
                    o.GLocale.get(
                      new o.GLocaleKey("GBoolOpProperties", "text.union")
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
                  .attr("data-op", o.GVertexPolyBoolean.SUB)
                  .attr(
                    "data-title",
                    o.GLocale.get(
                      new o.GLocaleKey("GBoolOpProperties", "text.subtract")
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
                  .attr("data-op", o.GVertexPolyBoolean.AND)
                  .attr(
                    "data-title",
                    o.GLocale.get(
                      new o.GLocaleKey("GBoolOpProperties", "text.intersect")
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
                  .attr("data-op", o.GVertexPolyBoolean.XOR)
                  .attr(
                    "data-title",
                    o.GLocale.get(
                      new o.GLocaleKey("GBoolOpProperties", "text.difference")
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
                o.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange
              ),
            (this._document = null)),
          (this._elements = []),
          e && t)
        ) {
          for (var require = 0; require < t.length; ++require) {
            var i = t[require];
            if (
              i.getParent() &&
              i.getParent() instanceof o.GCompoundShape &&
              i.getPrevious()
            )
              this._elements.push(i);
            else if (i instanceof o.GCompoundShape && i.getFirstChild())
              for (
                var a = i.getFirstChild().getNext();
                null !== a;
                a = a.getNext()
              )
                this._elements.push(a);
          }
          if (this._elements.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  o.GNode.AfterPropertiesChangeEvent,
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
          var o = $(n);
          o.toggleClass(
            "g-active",
            e.getProperty("bool") === parseInt(o.attr("data-op"))
          );
        });
      }),
      (r.prototype.toString = function () {
        return "[Object GBoolOpProperties]";
      }),
      (exports.exports = r);
  }