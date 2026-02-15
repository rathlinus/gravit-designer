/**
 * Webpack Module #1562
 * Type: class
 * Name: GInstallPwaDialog
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GInstallToDesktopAction = _interopRequireDefault(require(1172) /* GInstallToDesktopAction */),
      s = _interopRequireDefault(require(1173) /* module_1173 */);
    function l(e) {
      const module = (e) => {
        if (GEditor.GKey.translateKey(e.keyCode) === GEditor.GKey.Constant.ESC)
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
    GCore.GObject.inherit(l, GCore.GObject),
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
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GInstallPwaDialog", "text.title")
                )
              )
          )
          .append(
            $("<div />")
              .addClass("description")
              .append(
                $("<span />").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
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
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GInstallPwaDialog",
                        "text.description-pro-link"
                      )
                    )
                  )
              )
              .append(
                $("<span />").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
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
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GInstallPwaDialog", "action.install-button")
                )
              )
              .on("click", function (t) {
                try {
                  gDesigner.executeAction(GInstallToDesktopAction.default.ID);
                } catch (t) {
                  GInstallToDesktopAction.default.install();
                }
                e.close();
              })
          )
          .append(
            $("<button />")
              .addClass("g-button")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GInstallPwaDialog", "action.not-now-button")
                )
              )
              .on("click", () => {
                const e = gDesigner.now().getTime();
                gContainer.setProperty(
                  GInstallToDesktopAction.default.closedInstallPWADialogDatePropName,
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
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GInstallPwaDialog", "text.pwa-requires")
                )
              )
          );
      }),
      (l.prototype._getFooter = function () {
        return $("<div />")
          .addClass("footer")
          .append(
            $("<span />").text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GInstallPwaDialog", "text.footer-main-text")
              )
            )
          )
          .append(
            $("<span />").text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GInstallPwaDialog", "action.footer-link-text")
              )
            )
          )
          .append(
            $("<span />").text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GInstallPwaDialog", "text.end-sentence-dot")
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
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
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