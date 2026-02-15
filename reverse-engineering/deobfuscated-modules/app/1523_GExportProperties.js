/**
 * Webpack Module #1523
 * Type: class
 * Name: GExportProperties
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */, require(4) /* module_4 */, require(13) /* module_13 */;
    var o = require(1) /* module */,
      i = require(53) /* module */,
      a = require(67) /* GRichTooltipConfig */,
      r = require(238) /* GMenu */,
      s = require(444) /* module_444 */,
      l = require(123) /* GProperties */,
      c = require(1253) /* module_1253 */,
      d = require(446) /* module_446 */,
      u = require(442) /* module_442 */;
    const p = require(135) /* GSettingChangedEvent */;
    function g() {}
    o.GObject.inherit(g, l),
      (g.prototype._panel = null),
      (g.prototype._toolbar = null),
      (g.prototype._exportButton = null),
      (g.prototype._createSliceButton = null),
      (g.prototype._document = null),
      (g.prototype._elements = null),
      (g.prototype._sizeMenu = null),
      (g.prototype.isSticky = function () {
        return true;
      }),
      (g.prototype.init = function (e, t) {
        (this._panel = e),
          (this._toolbar = t),
          t.addClass("list-toolbar"),
          $("<label></label>")
            .addClass("panel-title")
            .text(
              o.GLocale.get(
                new o.GLocaleKey("GExportProperties", "text.make-exportable")
              )
            )
            .appendTo(t),
          (this._exportButton = $("<button></button>")
            .addClass("btn-export")
            .attr("id", "btn-export")
            .attr(
              "data-title",
              o.GLocale.get(new o.GLocaleKey("GCommonNames", "text.export")) +
                "..."
            )
            .append($("<span></span>").addClass("gravit-icon-export"))
            .on("click", this._export.bind(this))
            .appendTo(t)),
          (this._createSliceButton = $("<button></button>")
            .attr(
              "data-title",
              o.GLocale.get(
                new o.GLocaleKey("GExportProperties", "action.create-slice")
              )
            )
            .append($("<span></span>").addClass("gravit-icon-slice"))
            .on("click", this._createSlice.bind(this))
            .appendTo(t)
            .gRichTooltip(
              a.GRichTooltipConfig.from({
                title: o.GLocale.get(
                  new o.GLocaleKey(
                    "GExportProperties",
                    "text.create-slice-tooltip-title"
                  )
                ),
                description: o.GLocale.get(
                  new o.GLocaleKey(
                    "GExportProperties",
                    "text.create-slice-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            )),
          $("<button></button>")
            .attr(
              "data-title",
              o.GLocale.get(new o.GLocaleKey("GExportProperties", "action.add"))
            )
            .append($("<span></span>").addClass("gravit-icon-plus"))
            .on("click", this._addExport.bind(this))
            .appendTo(t)
            .gRichTooltip(
              a.GRichTooltipConfig.from({
                title: o.GLocale.get(
                  new o.GLocaleKey(
                    "GExportProperties",
                    "text.add-export-tooltip-title"
                  )
                ),
                description: o.GLocale.get(
                  new o.GLocaleKey(
                    "GExportProperties",
                    "text.add-export-tooltip-description"
                  )
                ),
                learnMore:
                  "",
              })
            ),
          (this._sizeMenu = new r()),
          this._sizeMenu.createAddItem("1x"),
          this._sizeMenu.createAddItem("2x"),
          this._sizeMenu.createAddItem("0.5x"),
          this._sizeMenu.createAddItem("3x"),
          this._sizeMenu.createAddItem("512w"),
          this._sizeMenu.createAddItem("512h"),
          this._sizeMenu.createAddItem("128x128"),
          this._sizeMenu.createAddItem("300dpi"),
          gDesigner.addEventListener(p, this._settingChanged, this);
      }),
      (g.prototype.update = function (e) {
        if (
          (this._document &&
            (this._document
              .getScene()
              .removeEventListener(
                o.GNode.AfterPropertiesChangeEvent,
                this._afterPropertiesChange,
                this
              ),
            (this._document = null)),
          (this._elements = null),
          e)
        ) {
          this._document = e;
          var module = this._getElements();
          this._elements = [];
          for (var require = false, i = 0; i < module.length; ++i)
            module[i] instanceof o.GBlock && this._elements.push(module[i]),
              module[i] instanceof o.GSlice || (require = true);
          if (this._elements && this._elements.length)
            return (
              (this._document = e),
              this._document
                .getScene()
                .addEventListener(
                  o.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              this._createSliceButton.css("display", require ? "" : "none"),
              this._updateProperties(),
              true
            );
        }
        return false;
      }),
      (g.prototype._getElements = function () {
        var e = this._document.getEditor();
        if (
          this._document &&
          e &&
          ((this._elements = e.getSelection()),
          this._elements &&
            this._elements.length &&
            (this._elements = e.filterIndividualElements(this._elements)),
          !this._elements || 0 === this._elements.length)
        ) {
          var module = gDesigner.getToolManager().getActiveTool(),
            require = null;
          module instanceof i.GItemTool && (require = module.getDefaultStyle())
            ? (this._elements = [require])
            : (this._elements = [this._document.getScene().getActivePage()]);
        }
        return this._elements;
      }),
      (g.prototype._export = function () {
        new d(
          () => {
            gDesigner.stats("exportproperties_click_export");
            var e = c.generateExportables(this._elements);
            c.export(
              e,
              this._document.getStorage() || gDesigner.getDefaultStorage(),
              this._document.getTitle(),
              null,
              null,
              true
            );
          },
          () => {
            gDesigner.stats("exportproperties_cancel_anonymous");
          }
        );
      }),
      (g.prototype._createSlice = function () {
        gDesigner.stats("exportproperties_click_createslice");
        var e = this._document.getEditor();
        e.beginTransaction();
        try {
          for (var module = [], require = 0; require < this._elements.length; ++require) {
            var i = this._elements[require];
            if (!(i instanceof o.GSlice)) {
              var a = (
                  i.getProperty(u.EXPORT_PROPERTY_NAME, true, []) || []
                ).slice(),
                r = i.getPaintBBox();
              i.setProperty(u.EXPORT_PROPERTY_NAME, undefined, true);
              var s = new o.GSlice();
              s.setProperties(
                ["x", "y", "w", "h"],
                [r.getX(), r.getY(), r.getWidth(), r.getHeight()]
              ),
                s.setProperty(u.EXPORT_PROPERTY_NAME, a, true),
                module.push(s);
            }
          }
          e.insertElements(module, true, true, false);
        } finally {
          e.commitTransaction(
            o.GLocale.get(
              new o.GLocaleKey("GExportProperties", "action.create-slices")
            )
          );
        }
      }),
      (g.prototype._addExport = function () {
        gDesigner.stats("exportproperties_click_add-item-to-export");
        var e = this._document.getEditor();
        e.beginTransaction();
        try {
          for (var module = 0; module < this._elements.length; ++module) {
            for (
              var require = this._elements[module],
                i = (
                  require.getProperty(u.EXPORT_PROPERTY_NAME, true, []) || []
                ).slice(),
                a = { sz: "", sf: "", fm: "png" },
                r = [
                  { sz: "1x", sf: "@1x" },
                  { sz: "2x", sf: "@2x" },
                  { sz: "3x", sf: "@3x" },
                  { sz: "1.5x", sf: "@1,5x" },
                  { sz: "0.5x", sf: "@0,5x" },
                ],
                s = 0;
              s < r.length;
              ++s
            ) {
              for (var l = r[s], c = false, d = 0; d < i.length; ++d)
                if (i[d].sz === l.sz) {
                  c = true;
                  break;
                }
              if (!c) {
                (a.sz = l.sz), (a.sf = i.length > 0 ? l.sf : "");
                break;
              }
            }
            i.push(a), require.setProperty(u.EXPORT_PROPERTY_NAME, i, true);
          }
        } finally {
          e.commitTransaction(
            o.GLocale.get(new o.GLocaleKey("GExportProperties", "action.add"))
          );
        }
      }),
      (g.prototype._settingChanged = function (e) {
        "touch" === e.key && this._updateProperties();
      }),
      (g.prototype._updateExport = function (e, t, n) {
        var i = this._document.getEditor();
        i.beginTransaction();
        try {
          for (var a = 0; a < this._elements.length; ++a) {
            var r = this._elements[a],
              s = r.getProperty(u.EXPORT_PROPERTY_NAME, true);
            !s ||
              e >= s.length ||
              (((s = s.slice())[e] = $.extend({}, s[e])),
              (s[e][t] = n),
              r.setProperty(u.EXPORT_PROPERTY_NAME, s, true));
          }
        } finally {
          i.commitTransaction(
            o.GLocale.get(
              new o.GLocaleKey("GExportProperties", "action.update-setting")
            )
          );
        }
      }),
      (g.prototype._removeExport = function (e) {
        var t = this._document.getEditor();
        t.beginTransaction();
        try {
          for (var require = 0; require < this._elements.length; ++require) {
            var i = this._elements[require],
              a = i.getProperty(u.EXPORT_PROPERTY_NAME, true);
            !a ||
              e >= a.length ||
              ((a = a.slice()).splice(e, 1),
              i.setProperty(u.EXPORT_PROPERTY_NAME, a, true));
          }
        } finally {
          t.commitTransaction(
            o.GLocale.get(
              new o.GLocaleKey("GExportProperties", "action.remove")
            )
          );
        }
      }),
      (g.prototype._afterPropertiesChange = function (e) {
        !e.temporary &&
          this._elements.length &&
          this._elements[0] === e.node &&
          e.properties.indexOf(u.EXPORT_PROPERTY_NAME) >= 0 &&
          this._updateProperties();
      }),
      (g.prototype._updateProperties = function () {
        var e = [],
          t = gDesigner.isTouchEnabled(),
          n = t ? "40%" : "30%",
          i = t ? "25%" : "35%",
          a = t ? "25%" : "30%",
          r = t ? "12%" : "5%";
        if (this._elements)
          for (let t = 0; t < this._elements.length; ++t) {
            var l =
              this._elements[t].getProperty(u.EXPORT_PROPERTY_NAME, true, []) ||
              [];
            if (l)
              for (var c = 0; c < l.length; ++c)
                c < e.length ? (e[c].diff = true) : e.push($.extend({}, l[c]));
          }
        this._panel.empty().css("margin", e.length ? "" : "0"),
          this._toolbar
            .toggleClass("empty-list", 0 === e.length)
            .find("label:first-child")
            .text(
              0 === e.length
                ? o.GLocale.get(
                    new o.GLocaleKey(
                      "GExportProperties",
                      "text.make-exportable"
                    )
                  )
                : o.GLocale.get(new o.GLocaleKey("GCommonNames", "text.export"))
            ),
          this._exportButton.css("display", e.length ? "" : "none");
        for (let l = 0; l < e.length; ++l) {
          var d = l + 1 === e.length,
            p = e[l];
          $("<div></div>")
            .data("index", l)
            .gPropertyRow({
              clazz: "export-properties-row",
              columns: [
                {
                  width: n,
                  label: d
                    ? o.GLocale.get(
                        new o.GLocaleKey("GCommonNames", "text.size")
                      )
                    : null,
                  content: $("<div></div>")
                    .append(
                      $("<input/>")
                        .attr("type", "text")
                        .css("margin", "0")
                        .css("width", "70%")
                        .val(p.sz)
                        .on(
                          "change",
                          function (e) {
                            gDesigner.stats(
                              "exportproperties_change_size-dropdown"
                            );
                            var t = $(e.target);
                            this._updateExport(
                              $(e.target)
                                .closest(".g-property-row")
                                .data("index"),
                              "sz",
                              t.val()
                            );
                          }.bind(this)
                        )
                    )
                    .append(
                      $("<button></button>")
                        .addClass("g-flat")
                        .css("width", "30%")
                        .append(
                          $('<span class="gravit-icon-down"></span>').css(
                            "font-size",
                            "12px"
                          )
                        )
                        .on(
                          "click",
                          function (e) {
                            gDesigner.stats(
                              "exportproperties_click_change-size"
                            ),
                              this._sizeMenu.open(
                                e.target,
                                s.Position.Left_Top,
                                s.Position.Right_Bottom,
                                function (t) {
                                  $(e.target)
                                    .closest("div")
                                    .find("input")
                                    .val(t.getCaption())
                                    .trigger("change")
                                    .focus()
                                    .select();
                                }
                              );
                          }.bind(this)
                        )
                    ),
                },
                {
                  width: i,
                  label: d
                    ? o.GLocale.get(
                        new o.GLocaleKey("GExportProperties", "text.suffix")
                      )
                    : null,
                  content: $("<input/>")
                    .attr("type", "text")
                    .val(p.diff ? null : p.sf)
                    .attr(
                      "placeholder",
                      p.diff
                        ? o.GLocale.get(
                            new o.GLocaleKey(
                              "GExportProperties",
                              "text.multiple"
                            )
                          )
                        : o.GLocale.get(
                            new o.GLocaleKey("GCommonNames", "text.none")
                          )
                    )
                    .on(
                      "change",
                      function (e) {
                        gDesigner.stats("exportproperties_toggle_multiple");
                        var t = $(e.target);
                        this._updateExport(
                          $(e.target).closest(".g-property-row").data("index"),
                          "sf",
                          t.val()
                        );
                      }.bind(this)
                    ),
                },
                {
                  width: a,
                  label: d
                    ? o.GLocale.get(
                        new o.GLocaleKey("GExportProperties", "text.format")
                      )
                    : null,
                  content: $("<select></select>")
                    .append(
                      $("<option></option>").attr("value", "png").text("PNG")
                    )
                    .append(
                      $("<option></option>").attr("value", "jpg").text("JPEG")
                    )
                    .append(
                      $("<option></option>").attr("value", "svg").text("SVG")
                    )
                    .append(
                      $("<option></option>").attr("value", "pdf").text("PDF")
                    )
                    .val(p.fm)
                    .on(
                      "change",
                      function (e) {
                        gDesigner.stats("exportproperties_format_dropdown");
                        var t = $(e.target);
                        this._updateExport(
                          $(e.target).closest(".g-property-row").data("index"),
                          "fm",
                          t.val()
                        );
                      }.bind(this)
                    ),
                },
                {
                  width: r,
                  content: $("<button></button>")
                    .addClass(t ? "g-flat gravit-icon-close" : "g-flat")
                    .html(t ? "" : "&#x2715;")
                    .on(
                      "click",
                      function (e) {
                        gDesigner.stats("exportproperties_click_removeitem"),
                          this._removeExport(
                            $(e.target).closest(".g-property-row").data("index")
                          );
                      }.bind(this)
                    ),
                },
              ],
            })
            .appendTo(this._panel);
        }
      }),
      (g.prototype.toString = function () {
        return "[Object GExportProperties]";
      }),
      (exports.exports = g);
  }