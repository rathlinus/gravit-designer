/**
 * Webpack Module #1538
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(20) /* module_20 */, require(34) /* module_34 */, require(4) /* module_4 */, require(13) /* module_13 */, require(38) /* module_38 */;
    const { GLocale: o, GLocaleKey: i } = require(1) /* module */,
      a = require(1166) /* module_1166 */,
      r = require(177) /* module_177 */,
      {
        gApi: s,
        Notification: l,
        NotificationConstants: {
          ACTIONS: {
            ACTION_APPROVE: c,
            ACTION_REQUEST_APPROVE: d,
            ACTION_REOPEN: u,
            ACTION_IN_REVIEW: p,
          } = {},
        },
      } = require(10) /* module_10 */;
    function g() {
      (this._container = null), (this._opened = false);
    }
    (g.prototype._updateHistoryList = async function () {
      const exports = this._container.find(".list");
      exports.empty(), exports.addClass("loading");
      var t = await s.annotations
        .getDesignHistory(gDesigner.getActiveDocument().getId())
        .catch((e) => []);
      exports.append(
        t.map((e) => {
          const t = l.from(e);
          var n;
          switch (t.getAction()) {
            case c:
              n = o.get(
                new i("GFileStatusHistoryDialog", "text.action-approved")
              );
              break;
            case d:
              n = o.get(
                new i(
                  "GFileStatusHistoryDialog",
                  "text.action-request-approval"
                )
              );
              break;
            case u:
              n = o.get(
                new i("GFileStatusHistoryDialog", "text.action-reopened")
              );
              break;
            case p:
              n = o.get(
                new i("GFileStatusHistoryDialog", "text.action-in-review")
              );
          }
          if (n) {
            var r = $("<span></span>").addClass("annotation-title-group"),
              s = $("<span></span>")
                .html(n.replace("%name", this._getUserNameFromNotification(t)))
                .addClass("annotation-title")
                .appendTo(r),
              g = o.toLocaleDate(t.created, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              });
            return (
              $("<span>").text("·").addClass("dot").appendTo(r),
              $("<span></span>")
                .text(g)
                .addClass("annotation-date")
                .appendTo(r),
              new a({ id: t.uid, name: t.uname, last_name: t.last_name })
                .build()
                .addClass("g-user-preview-history")
                .insertBefore(s),
              r
            );
          }
        })
      ),
        exports.removeClass("loading");
    }),
      (g.prototype.open = function () {
        if (this._opened) return;
        (this._opened = true),
          this._container && this._container.remove(),
          (this._container = $("<div/>").gDialog({
            className: "g-file-status-history-dialog",
          }));
        let exports = $("<div/>")
          .addClass("row")
          .addClass("header")
          .appendTo(this._container);
        $("<div/>")
          .addClass("title")
          .text(o.get(new i("GFileStatusHistoryDialog", "text.status-history")))
          .appendTo(exports),
          $("<div></div>")
            .addClass("btn-close")
            .click(() => {
              (this._opened = false), this._container.gDialog("close");
            })
            .append($("<span></span>").addClass("gravit-icon-close"))
            .appendTo(exports),
          $("<div/>").addClass("list").appendTo(this._container);
        this._container.gDialog("open", false), this._updateHistoryList();
      }),
      (g.prototype._getUserNameFromNotification = function (e) {
        return new r({
          name: e.uname,
          last_name: e.last_name,
        }).getFullUserName();
      }),
      (exports.exports = g);
  }