/**
 * Webpack Module #1718
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* module_4 */, require(13) /* module_13 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var o = require(1) /* module */,
      i = require(67) /* GRichTooltipConfig */,
      a = require(608) /* GCreateSymbolAction */;
    function r(e) {
      var t = $(this).data("gsymbolspanel"),
        n = e.getMultireferenceId();
      if (t.symbolNodes[n])
        e.isMaster() &&
          !e.hasEventListeners(o.GSymbol.AfterThumbnailUpdate) &&
          e.addEventListener(o.GSymbol.AfterThumbnailUpdate, l.bind(this));
      else {
        var i = c.call(this, e);
        i && (i.appendTo($(this)), (t.symbolNodes[n] = e));
      }
    }
    function s(e, t) {
      if (e.isMaster()) {
        var require = $(this).data("gsymbolspanel"),
          i = e.getMultireferenceId(),
          a = $(this).find("#symbol_" + i);
        if (a.length) {
          if (require.scene) {
            var r = d.call(this, e);
            if (
              r &&
              (r.removeEventListener(o.GSymbol.AfterThumbnailUpdate, l), !t)
            ) {
              var s = require.blockHandlers;
              (require.blockHandlers = true),
                require.scene.removeSymbol(r),
                (require.blockHandlers = s);
            }
          }
          delete require.symbolNodes[i],
            a.remove(),
            0 === Object.keys(require.symbolNodes).length && y.call(this);
        }
      }
    }
    function l(e) {
      var t = e.symbol,
        n = t.getFrame();
      if (n && t.getPaintBBox()) {
        $(this).data("gsymbolspanel");
        var i = t.getMultireferenceId(),
          a = $(this).find("#symbol_" + i),
          r = a.find(".symbol-image");
        r.empty();
        var s = n.getWidth(),
          l = n.getHeight() / s,
          c = 85,
          d = c * l;
        d > 85 && (c = (d = 85) / l), h(r, c, d);
        var u = e.image.getBitmap().getHTMLElement(true);
        if (
          ($(u).css({ width: c, height: d, margin: "5px" }),
          t.hasFlag(o.GNode.Flag.Selected))
        )
          a.find(".symbol-title-group").addClass("g-highlighted");
        $(u).appendTo(r);
      }
    }
    function c(e) {
      var t = $(this).data("gsymbolspanel");
      if (e.isMaster()) {
        if (!(e instanceof o.GSymbol)) throw new Error("item not symbol");
        var require = $(this).find(".symbol-panel-info").parent();
        require.length && require.remove();
        var a = $("<div />")
            .attr("draggable", false)
            .attr("id", "symbol_" + e.getMultireferenceId())
            .css({ display: "inline" })
            .gRichTooltip(
              i.GRichTooltipConfig.from({
                title: e.getProperty("name"),
                description: o.GLocale.get(
                  new o.GLocaleKey(
                    "GCommonNames",
                    "text.symbol-panel-symbol-tooltip-description"
                  )
                ),
                middle: false,
                learnMore:
                  "",
              })
            ),
          r = $("<span></span>").addClass("symbol-title-group");
        r.appendTo(a);
        var s = e.getProperty("name");
        s = s || e.getNodeNameTranslated();
        var c = $("<span></span>");
        e.addEventListener(o.GSymbol.AfterThumbnailUpdate, l.bind(this)),
          c.addClass("symbol-image").appendTo(r);
        var u = this;
        return (
          r
            .attr("draggable", true)
            .css({
              display: "inline-block",
              backgroundColor: "#eee",
              margin: "5px",
              height: "95px",
              width: "45%",
              textAlign: "center",
              lineHeight: "180px",
            })
            .on("dragstart", function (n) {
              $(this).addClass("g-dragging"),
                (n.originalEvent.dataTransfer.effectAllowed = "move"),
                n.originalEvent.dataTransfer.setData(
                  o.GNode.MIME_TYPE,
                  o.GNode.serialize(e)
                ),
                (t.dragNode = e),
                setTimeout(
                  function () {
                    $(this).removeClass("g-dragging");
                  }.bind(this),
                  0
                );
            })
            .on("drop", function (e) {
              $(this).parent().parent().data("gsymbolspanel").dragNode = null;
            })
            .on("click", function (n) {
              gDesigner.stats("symbol_click_select");
              var o = d.call(u, e);
              o &&
                (o.getScene()
                  ? t.options.clickCallback(o)
                  : r.toggleClass("g-highlighted"));
            })
            .on("dblclick", function (n) {
              gDesigner.stats("symbol_click_focus");
              var o = d.call(u, e);
              o && t.options.dblClickCallback(o);
            }),
          a
        );
      }
    }
    function d(e) {
      if (e.getScene()) return e;
      var t = $(this).data("gsymbolspanel");
      if (!t.scene) return null;
      for (var require = t.scene.getSymbols(), o = 0; o < require.length; o++)
        if (require[o].getMultireferenceId() === e.getMultireferenceId()) return require[o];
    }
    function u(e) {
      var t = $(this).data("gsymbolspanel");
      if (!t.blockHandlers && e.node instanceof o.GSymbol)
        if (e.data.created) {
          r.call(this, e.node);
          var require = t.scene.getSymbolImage(e.node);
          require ? l.call(this, { symbol: e.node, image: require }) : e.node.toBitmap();
        } else s.call(this, e.node, true);
    }
    function p(e) {
      !$(this).data("gsymbolspanel").blockHandlers && (e.node, o.GSymbol);
    }
    function g(e) {
      for (
        var module = $(this).data("gsymbolspanel"), require = e.node;
        require && !(require instanceof o.GSymbol && require.isMaster());

      )
        require = require.getParent();
      if (!module.blockHandlers && require) {
        var i = require.getMultireferenceId(),
          a = $(this)
            .find("#symbol_" + i)
            .find(".symbol-title-group");
        e.flag === o.GNode.Flag.Selected &&
          (e.set
            ? a.addClass("g-highlighted")
            : a.removeClass("g-highlighted"));
      }
    }
    function h(e, t, n) {
      e.css({ position: "relative", top: n / 2 - 42.5 + "px" });
    }
    function f() {
      $(this).data("gsymbolspanel"), $(this).data("gsymbolspanel");
      for (var exports = $(this).find(".symbol-image"), module = 0; module < exports.length; module++) {
        var require = $(exports[module]),
          o = require.find("canvas");
        (o.css("width") || "0px").split("px")[0];
        h(require, 0, (o.css("height") || "0px").split("px")[0]);
      }
    }
    function m() {
      var e = $(this).data("gsymbolspanel");
      (e.symbolNodes = {}), (e.scene = null), $(this).empty(), y.call(this);
    }
    function y() {
      $("<div>")
        .append(
          $("<div>")
            .addClass("symbol-panel-info")
            .append(
              $("<div></div>")
                .addClass("symbol-panel-infotitle")
                .text(
                  o.GLocale.get(
                    new o.GLocaleKey(
                      "GCreateSymbolAction",
                      "common.nosymbolsdefined"
                    )
                  )
                )
            )
            .append(
              $("<span></span>").text(
                o.GLocale.get(
                  new o.GLocaleKey(
                    "GCreateSymbolAction",
                    "common.nosymbolsdefined-info"
                  )
                )
              )
            )
        )
        .appendTo($(this));
    }
    var v = {
      init: function (e) {
        return (
          (e = $.extend(
            {
              moveCallback: null,
              clickCallback: null,
              dblClickCallback: null,
              startDraggingCallback: null,
            },
            e
          )),
          this.each(function () {
            $(this).addClass("g-symbols-panel").data("gsymbolspanel", {
              options: e,
              symbolNodes: {},
              scene: null,
              currentFocus: null,
            });
          })
        );
      },
      relayout: function () {
        f.call(this);
      },
      newSymbolClick: function () {
        return (
          gDesigner.canExecuteAction(a.ID) &&
            (gDesigner.stats("symbol_click_createnewsymbol"),
            gDesigner.executeAction(a.ID, undefined, undefined, true)),
          false
        );
      },
      isSelected: function () {
        $(this).data("gsymbolspanel");
        return $(this).find(".g-highlighted").length > 0;
      },
      removeSelected: function () {
        var e = $(this).data("gsymbolspanel"),
          t = $(this).find(".g-highlighted").parent().attr("id");
        if (t) {
          var require = t.split("_")[1],
            o = e.symbolNodes[require];
          o && s.call(this, o);
        }
      },
      scene: function (e) {
        var t = $(this),
          n = t.data("gsymbolspanel");
        if (!arguments.length) return n.scene;
        if (
          e !== n.scene &&
          (n.scene &&
            n.scene.hasMixin(o.GEventTarget) &&
            (n.scene.removeEventListener(
              o.GNode.AfterSpecialChangeEvent,
              n.afterSpecialChangeHandler,
              this
            ),
            n.scene.removeEventListener(
              o.GNode.AfterPropertiesChangeEvent,
              n.afterPropertiesChangeHandler,
              this
            ),
            n.scene.removeEventListener(
              o.GNode.AfterFlagChangeEvent,
              n.afterFlagChangeHandler,
              this
            )),
          m.call(this),
          (n.scene = e),
          n.scene)
        ) {
          n.scene.hasMixin(o.GEventTarget) &&
            ((n.afterSpecialChangeHandler = u.bind(this)),
            (n.afterPropertiesChangeHandler = p.bind(this)),
            (n.afterFlagChangeHandler = g.bind(this)),
            n.scene.addEventListener(
              o.GNode.AfterSpecialChangeEvent,
              n.afterSpecialChangeHandler,
              this
            ),
            n.scene.addEventListener(
              o.GNode.AfterPropertiesChangeEvent,
              n.afterPropertiesChangeHandler,
              this
            ),
            n.scene.addEventListener(
              o.GNode.AfterFlagChangeEvent,
              n.afterFlagChangeHandler,
              this
            ));
          var i = n.scene.getSymbols();
          i &&
            i.forEach(
              function (e) {
                r.call(this, e);
                var t = n.scene.getSymbolImage(e);
                t ? l.call(this, { symbol: e, image: t }) : e.toBitmap();
              }.bind(this)
            );
        }
        return this;
      },
    };
    $.fn.gSymbolsPanel = function (e) {
      return v[e]
        ? v[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : v.init.apply(this, arguments);
    };
  }