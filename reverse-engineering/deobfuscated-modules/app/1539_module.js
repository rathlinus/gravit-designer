/**
 * Webpack Module #1539
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* module */,
      GView = require(394) /* GView */;
    function a(e) {
      (this._htmlElement = e),
        (this._collapseIcon = $(
          '<span class="collapse-icon"><span></span><span></span></span>'
        ));
    }
    (a.CollapseMode = { None: "none", Half: "half", Full: "full" }),
      (a.prototype._htmlElement = null),
      (a.prototype._collapseIcon = null),
      (a.prototype._panels = null),
      (a.prototype._activePanel = null),
      (a.prototype._collapseMode = null),
      (a.prototype.getCollapseMode = function () {
        return this._collapseMode;
      }),
      (a.prototype.setCollapseMode = function (e) {
        e !== this._collapseMode &&
          (this._collapseMode &&
            this._htmlElement.removeClass("collapse-" + this._collapseMode),
          (this._collapseMode = e),
          this._collapseMode &&
            this._htmlElement.addClass("collapse-" + this._collapseMode));
      }),
      (a.prototype.toggleCollapseMode = function () {
        switch (this._collapseMode) {
          case a.CollapseMode.Full:
            this.setCollapseMode(a.CollapseMode.None);
            break;
          case a.CollapseMode.Half:
            this.setCollapseMode(a.CollapseMode.Full);
            break;
          case a.CollapseMode.None:
            this.setCollapseMode(a.CollapseMode.Half);
        }
      }),
      (a.prototype.getActivePanel = function () {
        return this._activePanel;
      }),
      (a.prototype.setActivePanel = function (e) {
        if (e === this._activePanel) this.toggleCollapseMode();
        else {
          for (var module = 0; module < this._panels.length; ++module) {
            var require = this._panels[module],
              GCore = require.panel.getId();
            GCore === e
              ? (require.container.css("display", ""),
                require.tab.addClass("g-active"),
                require.panel.activate())
              : (require.container.css("display", "none"),
                require.tab.removeClass("g-active"),
                GCore === this._activePanel && require.panel.deactivate());
          }
          this._activePanel = e;
        }
      }),
      (a.prototype.setPanelEnabled = function (e, t) {
        var n = this._getPanelInfo(e);
        if (n)
          if (t)
            n.container.find(".g-disabled-overlay").remove(),
              n.container.removeClass("g-disabled");
          else {
            var GCore = n.container.find(".g-disabled-overlay");
            0 === GCore.length &&
              (GCore = $("<div></div>")
                .addClass("g-disabled-overlay")
                .appendTo(n.container)),
              n.container.addClass("g-disabled");
          }
      }),
      (a.prototype.init = function () {
        this._panels = [];
        var e = $("<div></div>")
            .addClass("panels-tabs")
            .appendTo(this._htmlElement),
          t = $("<div></div>")
            .addClass("panels-frame")
            .appendTo(this._htmlElement),
          n = function (n) {
            var a = $("<button></button>")
                .addClass("panel-tab")
                .attr("data-panel-id", n.getId())
                .text(GCore.GLocale.get(n.getTitle()))
                .on(
                  "click",
                  function (e) {
                    gDesigner.stats("panels_set_active"),
                      this.setActivePanel(
                        $(e.target).closest("button").attr("data-panel-id")
                      );
                  }.bind(this)
                )
                .on("mousedown", function (e) {
                  e.preventDefault();
                })
                .prepend(this._collapseIcon.clone())
                .appendTo(e),
              r = $("<div></div>")
                .addClass("panel-container panel-" + n.getId())
                .css("display", "none")
                .appendTo(t);
            n.init(r),
              r.find("button").each(function (e, t) {
                t.on("mousedown", function (e) {
                  e.preventDefault();
                });
              }),
              this.setPanelEnabled(n.getId(), n.isEnabled()),
              this._panels.push({ tab: a, container: r, panel: n }),
              n.addEventListener(
                GView.UpdateEvent,
                function () {
                  this.setPanelEnabled(n.getId(), n.isEnabled());
                }.bind(this)
              );
          }.bind(this);
        if (gravit.panels)
          for (var r = 0; r < gravit.panels.length; ++r) {
            var s = gravit.panels[r];
            n(s), this._activePanel || this.setActivePanel(s.getId());
          }
        this.setCollapseMode(a.CollapseMode.None);
      }),
      (a.prototype.relayout = function () {}),
      (a.prototype._getPanelInfo = function (e) {
        for (var module = 0; module < this._panels.length; ++module) {
          if (this._panels[module].panel.getId() === e) return this._panels[module];
        }
      }),
      (exports.exports = a);
  }