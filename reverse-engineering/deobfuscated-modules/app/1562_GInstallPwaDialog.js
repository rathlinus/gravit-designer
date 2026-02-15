/**
 * Webpack Module #1562
 * Type: class
 * Name: GInstallPwaDialog
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(1172) /* GInstallToDesktopAction */),
      s = o(require(1173) /* module_1173 */);
    function l(e) {
      const module = (e) => {
        if (a.GKey.translateKey(e.keyCode) === a.GKey.Constant.ESC)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            $(document).off("keydown", module),
            this._dialog.gDialog("close"),
            false
          );
      };
      let require = "g-install-pwa-dialog";
      e && (require += "-dark"),
        (this._dialog = $("<div />").gDialog({
          releaseOnClose: true,
          className: require,
          alwaysCloseable: true,
          closeCallback: () => $(document).off("keydown", module),
        })),
        $(document).on("keydown", module),
        this._dialog
          .append(this._getCloseButton())
          .append(this._getDialogContent());
    }
    i.GObject.inherit(l, i.GObject),
      (l.prototype._getCloseButton = function () {
        return $("<div />")
          .addClass("g-btn-close")
          .append($("<span />").addClass("gravit-icon-close"))
          .on("click", this.close.bind(this));
      }),
      (l.prototype._getDialogContent = function () {
        return $("<div />")
          .addClass("content")
          .append(this._getHeader())
          .append(this._getMainContent());
      }),
      (l.prototype._getHeader = function () {
        return $("<div />").addClass("header");
      }),
      (l.prototype._getMainContent = function () {
        return $("<div />")
          .addClass("main-content")
          .append(
            $("<div />")
              .addClass("title")
              .text(
                i.GLocale.get(
                  new i.GLocaleKey("GInstallPwaDialog", "text.title")
                )
              )
          )
          .append(
            $("<div />")
              .addClass("description")
              .append(
                $("<span />").text(
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GInstallPwaDialog",
                      "text.description-text"
                    )
                  )
                )
              )
              .append(
                $('<a />')
                  .attr('href', '')
                  .attr('target', '_blank')
                  .text(
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GInstallPwaDialog",
                        "text.description-pro-link"
                      )
                    )
                  )
              )
              .append(
                $("<span />").text(
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GInstallPwaDialog",
                      "text.end-sentence-dot"
                    )
                  )
                )
              )
          )
          .append(
            s.default.isSupported()
              ? this._getButtons()
              : this._buildChromiumInfoSection()
          )
          .append(this._getFooter());
      }),
      (l.prototype._getButtons = function () {
        var e = this;
        return $("<div />")
          .addClass("buttons")
          .append(
            $("<button />")
              .addClass("primary")
              .addClass("g-button")
              .text(
                i.GLocale.get(
                  new i.GLocaleKey("GInstallPwaDialog", "action.install-button")
                )
              )
              .on("click", function (t) {
                try {
                  gDesigner.executeAction(r.default.ID);
                } catch (t) {
                  r.default.install();
                }
                e.close();
              })
          )
          .append(
            $("<button />")
              .addClass("g-button")
              .text(
                i.GLocale.get(
                  new i.GLocaleKey("GInstallPwaDialog", "action.not-now-button")
                )
              )
              .on("click", () => {
                const e = gDesigner.now().getTime();
                gContainer.setProperty(
                  r.default.closedInstallPWADialogDatePropName,
                  e
                ),
                  this.close();
              })
          );
      }),
      (l.prototype._buildChromiumInfoSection = function () {
        return $("<div />")
          .addClass("chromium-section")
          .append(
            $("<div/>")
              .addClass("chromium-content")
              .html(
                i.GLocale.get(
                  new i.GLocaleKey("GInstallPwaDialog", "text.pwa-requires")
                )
              )
          );
      }),
      (l.prototype._getFooter = function () {
        return $("<div />")
          .addClass("footer")
          .append(
            $("<span />").text(
              i.GLocale.get(
                new i.GLocaleKey("GInstallPwaDialog", "text.footer-main-text")
              )
            )
          )
          .append(
            $("<span />").text(
              i.GLocale.get(
                new i.GLocaleKey("GInstallPwaDialog", "action.footer-link-text")
              )
            )
          )
          .append(
            $("<span />").text(
              i.GLocale.get(
                new i.GLocaleKey("GInstallPwaDialog", "text.end-sentence-dot")
              )
            )
          )
          .append($('<span> </span>'))
          .append(
            $('<a />')
              .attr(
                'href',
                ''
              )
              .attr('target', '_blank')
              .text(
                i.GLocale.get(
                  new i.GLocaleKey(
                    "GInstallPwaDialog",
                    "action.footer-more-information"
                  )
                )
              )
          );
      }),
      (l.prototype._dialog = null),
      (l.prototype.open = function () {
        this._dialog.gDialog("open", false);
      }),
      (l.prototype.close = function () {
        this._dialog.gDialog("close");
      }),
      (l.prototype.toString = function () {
        return "[Object GInstallPwaDialog]";
      }),
      (exports.exports = l);
  }