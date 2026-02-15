/**
 * Webpack Module #1589
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    const i = [
      {
        selector: "#toolbar > .section > .menubar-toolbar-button",
        i18n: "text.menu",
        offsetX: 10,
      },
      {
        selector: "#toolbar > .section > .open-toolbar-button > .action-button",
        i18n: "text.open",
        furtherAway: true,
      },
      {
        selector: "#toolbar > .section > .save-toolbar-button > .action-button",
        i18n: "text.save",
      },
      {
        selector: "#toolbar > .section > .undo-toolbar-button > .action-button",
        i18n: "text.undo-redo",
        furtherAway: true,
      },
      {
        selector:
          "#toolbar > .section > .zoom-button > .action-button > .caption",
        i18n: "text.zoom",
        offsetY: 14,
      },
      {
        selector: "#toolbar > .section > .snap-button > .action-button",
        i18n: "text.snapping",
        furtherAway: true,
      },
      {
        selector:
          "#toolbar > .section > .select-toolbar-button > .action-button",
        i18n: "text.select",
      },
      {
        selector:
          "#toolbar > .section > .shapes-toolbar-button > .action-button",
        i18n: "text.shapes",
        furtherAway: true,
      },
      {
        selector: "#toolbar > .section > .path-toolbar-button > .action-button",
        i18n: "text.path",
      },
      {
        selector:
          "#toolbar > .section > .knife-toolbar-button > .action-button",
        i18n: "text.knife",
        furtherAway: true,
      },
      {
        selector: "#toolbar > .section > .text-toolbar-button > .action-button",
        i18n: "text.text",
      },
      {
        selector:
          "#toolbar > .section > .image-toolbar-button > .action-button",
        i18n: "text.image",
        furtherAway: true,
      },
      {
        selector: "#toolbar > .section > .window-button  > .action-button",
        i18n: "text.files",
      },
      {
        selector:
          "#toolbar > .section > .export-toolbar-button > .action-button",
        i18n: "text.export",
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="pages"]',
        i18n: "text.pages",
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="layers"]',
        i18n: "text.layers",
        furtherAway: true,
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="libraries"]',
        i18n: "text.libraries",
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="symbols"]',
        i18n: "text.symbols",
        furtherAway: true,
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="dimension.align"]',
        i18n: "text.align-distribute",
        className: "align-distribute",
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="dimension.dimension"]',
        i18n: "text.transform",
        furtherAway: true,
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="document"]',
        i18n: "text.document",
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="appearance"]',
        i18n: "text.appearance",
        furtherAway: true,
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="fill"]',
        i18n: "text.fills",
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="border"]',
        i18n: "text.borders",
        furtherAway: true,
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="effect"]',
        i18n: "text.effects",
      },
      {
        selector: '.g-touch-toolbar-button[g-touch-tool="annotation"]',
        i18n: "text.comments",
        furtherAway: true,
      },
      {
        selector: "#assistant-bar > .container",
        side: GCore.GRect.Side.LEFT_CENTER,
        i18n: "text.modifier-keys",
        disconnected: true,
        offsetX: -15,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar > .container",
        side: GCore.GRect.Side.RIGHT_CENTER,
        i18n: "text.nudge",
        disconnected: true,
        offsetX: 15,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-copy",
        side: GCore.GRect.Side.TOP_CENTER,
        i18n: "text.copy",
        offsetY: -10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-paste",
        side: GCore.GRect.Side.TOP_CENTER,
        i18n: "text.paste",
        furtherAway: true,
        offsetY: -10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-trash-2",
        side: GCore.GRect.Side.TOP_CENTER,
        i18n: "text.delete",
        offsetY: -10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-selection",
        side: GCore.GRect.Side.TOP_CENTER,
        i18n: "text.select-deselect",
        furtherAway: true,
        offsetY: -10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-arrange-order",
        side: GCore.GRect.Side.TOP_CENTER,
        i18n: "text.arrange",
        offsetY: -10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-fullscreen",
        side: GCore.GRect.Side.TOP_CENTER,
        i18n: "text.fullscreen",
        furtherAway: true,
        offsetY: -10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-group",
        i18n: "text.group",
        offsetY: 10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-ungroup",
        i18n: "text.ungroup",
        furtherAway: true,
        offsetY: 10,
        className: "assistant-bar",
      },
      {
        selector: "#assistant-bar .gravit-icon-touch-convert-to-path",
        i18n: "text.convert-to-path",
        offsetY: 10,
        className: "assistant-bar",
      },
    ];
    exports.exports = new (class {
      constructor() {
        this._resizeBound = this._resize.bind(this);
      }
      open() {
        this._panel && this._panel.remove();
        const exports = $("body").addClass("g-quick-help");
        (this._panel = $("<div/>")
          .addClass("g-quick-help-screen")
          .addClass(GCore.GLocale.getLocaleTagISO6391())
          .addClass("hidden")
          .on("click", () => this.close())
          .appendTo(exports)),
          gDesigner.getRightSidebars().disableContextSensitive(),
          this._update(),
          this._panel.removeClass("hidden"),
          $(window).on("resize", this._resizeBound);
      }
      close() {
        $("body").removeClass("g-quick-help"),
          this._panel && this._panel.remove(),
          delete this._panel,
          gDesigner.getRightSidebars().enableContextSensitive(),
          $(window).off("resize", this._resizeBound);
      }
      _resize() {
        this._panel && (this._panel.empty(), this._update());
      }
      _update() {
        this._createStaticTooltips(),
          i.forEach((e) => this._createDynamicTooltip(e));
      }
      _createStaticTooltips() {
        $("<div/>")
          .addClass("static-tooltips")
          .append(
            $("<div/>")
              .addClass("container")
              .append($("<img/>").attr("src", "assets/help/pinch-to-zoom.svg"))
              .append(
                this._createTooltip({
                  disconnected: true,
                  i18n: "text.pinch-to-zoom",
                })
              )
          )
          .append(
            $("<div/>")
              .addClass("container")
              .append(
                $("<img/>").attr("src", "assets/help/drag-with-2-fingers.svg")
              )
              .append(
                this._createTooltip({
                  disconnected: true,
                  i18n: "text.drag-with-2-fingers",
                })
              )
          )
          .append(
            $("<div/>")
              .addClass("container")
              .append($("<img/>").attr("src", "assets/help/tap-and-holder.svg"))
              .append(
                this._createTooltip({
                  disconnected: true,
                  i18n: "text.tap-and-hold",
                })
              )
          )
          .appendTo(this._panel);
      }
      _createDynamicTooltip(e) {
        const module = $(e.selector),
          require = module.offset();
        if (!require || !module.is(":visible")) return;
        const i = this._createTooltip(e).appendTo(this._panel),
          a = new GCore.GRect(require.left, require.top, module.outerWidth(), module.outerHeight()),
          r = new GCore.GRect(0, 0, i.outerWidth(), i.outerHeight()),
          s = this._calculatePosition(r, a, e);
        i.css({ top: s.getY(), left: s.getX() });
      }
      _calculatePosition(e, t, n) {
        const i = n.side || GCore.GRect.Side.BOTTOM_CENTER,
          a = t.getSide(i);
        switch (i) {
          case GCore.GRect.Side.TOP_CENTER: {
            const t = e.getSide(GCore.GRect.Side.CENTER).getX();
            return new GCore.GPoint(
              a.getX() - t + (n.offsetX || 0),
              a.getY() - e.getHeight() + (n.offsetY || 0)
            );
          }
          case GCore.GRect.Side.BOTTOM_CENTER: {
            const t = e.getSide(GCore.GRect.Side.CENTER).getX();
            return new GCore.GPoint(
              a.getX() - t + (n.offsetX || 0),
              a.getY() + (n.offsetY || 0)
            );
          }
          case GCore.GRect.Side.LEFT_CENTER: {
            const t = e.getSide(GCore.GRect.Side.CENTER).getY();
            return new GCore.GPoint(
              a.getX() - e.getWidth() + (n.offsetX || 0),
              a.getY() - t + (n.offsetY || 0)
            );
          }
          case GCore.GRect.Side.RIGHT_CENTER: {
            const t = e.getSide(GCore.GRect.Side.CENTER).getY();
            return new GCore.GPoint(
              a.getX() + (n.offsetX || 0),
              a.getY() - t + (n.offsetY || 0)
            );
          }
          default:
            throw "Unsupported side";
        }
      }
      _createTooltip(e) {
        const module = $("<div>")
          .addClass("content")
          .append(
            $("<span/>").text(
              GCore.GLocale.get(new GCore.GLocaleKey("GQuickHelpScreen", e.i18n))
            )
          );
        return $("<div/>")
          .addClass("tooltip" + (e.className ? " " + e.className : ""))
          .addClass("side-" + (e.side || GCore.GRect.Side.BOTTOM_CENTER))
          .toggleClass("further-away", !!e.furtherAway)
          .append(
            $("<div/>")
              .addClass("container")
              .append(
                $("<div>")
                  .addClass("connector")
                  .css("display", e.disconnected ? "none" : "")
              )
              .append(module)
          );
      }
    })();
  }