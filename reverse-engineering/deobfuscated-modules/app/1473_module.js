/**
 * Webpack Module #1473
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var o = require(1) /* module */,
      i = require(40) /* CollaborationMergeUtils */;
    require(10) /* AppSettings */;
    require(1474) /* module_1474 */, require(220) /* Item */, require(44) /* GSystemDialog */, require(119) /* module_119 */;
    function a(e, t, n) {
      (this._document = e),
        (this._storageItem = t),
        (this._file = t.getFile()),
        (this._action = n),
        this._init();
    }
    o.GObject.inherit(a, o.GObject),
      (a.prototype._init = function () {
        (this._dialog = $("<div></div>").gDialog({
          releaseOnClose: true,
          className: "g-paywall-dialog",
          closeTimeout: 1100,
        })),
          $("<div></div>")
            .addClass("header")
            .append($("<span></span>").addClass("gravit-icon-welcome"))
            .appendTo(this._dialog),
          $("<div></div>")
            .addClass("content")
            .append(
              $("<span></span>")
                .text(
                  o.GLocale.get(
                    new o.GLocaleKey("GPaywallDialog", "text.paywall-info")
                  )
                )
                .append($("<span></span>").addClass("price g-loading"))
                .append($("<span></span>").text("."))
            )
            .appendTo(this._dialog),
          $("<hr/>").appendTo(this._dialog),
          $("<div></div>")
            .addClass("footer")
            .append(
              $("<button></button>")
                .addClass("highlight")
                .append(
                  $("<span></span>").text(
                    o.GLocale.get(
                      new o.GLocaleKey("GPaywallDialog", "text.paywall-buy")
                    )
                  )
                )
                .append($("<span></span>").addClass("price g-loading"))
                .on("click", this._buy.bind(this))
            )
            .append(
              $("<button></button>")
                .text(
                  o.GLocale.get(
                    new o.GLocaleKey("GPaywallDialog", "text.paywall-edit")
                  )
                )
                .on("click", this.close.bind(this))
            )
            .appendTo(this._dialog),
          this._load();
      }),
      (a.prototype._load = async function () {
        const exports = await this._storageItem.getFormattedPrice();
        this._dialog.find("span.price").removeClass("g-loading").text(exports);
      }),
      (a.prototype._buy = async function () {}),
      (a.prototype.open = async function () {
        this._dialog.gDialog("open", true),
          await (0, i.sleep)(100),
          this._dialog.closest(".g-dialog").addClass("slide-up");
      }),
      (a.prototype.close = function () {
        this._dialog.gDialog("close"),
          this._dialog.closest(".g-dialog").removeClass("slide-up");
      }),
      (exports.exports = a);
  }