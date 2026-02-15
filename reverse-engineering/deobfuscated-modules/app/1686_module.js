/**
 * Webpack Module #1686
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* GCore */;
    const GSystemDialog = require(44) /* GSystemDialog */,
      { DESIGNER: { TITLE: a } = {} } = require(10) /* AppSettings */;
    exports.exports = class {
      async init() {
        (await this._shouldOpenWarningDialog()) &&
          gDesigner.executeWhenReady(() => this._openWarningDialog());
      }
      _openWarningDialog() {
        GSystemDialog.custom({
          icon: "info",
          closeable: false,
          className: "g-beta-warning-dialog",
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GBetaFlow", "text.title")
          ).replace("%app", a),
          subtitle: GCore.GLocale.get(
            new GCore.GLocaleKey("GBetaFlow", "text.message")
          ),
          buttons: [
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GBetaFlow", "text.i-understand")
              ).toUpperCase(),
              closeOnClick: true,
              highlighted: true,
            },
          ],
          dontShowAgainCb: (e) => {
            gContainer.setProperty(
              "designer.betaflow.dismiss-warning-dialog",
              !!e
            );
          },
        });
      }
      async _shouldOpenWarningDialog() {
        return !(await gContainer.getProperty(
          "designer.betaflow.dismiss-warning-dialog",
          false
        ));
      }
    };
  }