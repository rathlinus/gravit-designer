/**
 * Webpack Module #1686
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */, n(20) /* module_20 */, n(34) /* module_34 */;
    var o = n(1) /* module_1 */;
    const i = n(44) /* GSystemDialog */,
      { DESIGNER: { TITLE: a } = {} } = n(10) /* module_10 */;
    e.exports = class {
      async init() {
        (await this._shouldOpenWarningDialog()) &&
          gDesigner.executeWhenReady(() => this._openWarningDialog());
      }
      _openWarningDialog() {
        i.custom({
          icon: "info",
          closeable: false,
          className: "g-beta-warning-dialog",
          title: o.GLocale.get(
            new o.GLocaleKey("GBetaFlow", "text.title")
          ).replace("%app", a),
          subtitle: o.GLocale.get(
            new o.GLocaleKey("GBetaFlow", "text.message")
          ),
          buttons: [
            {
              label: o.GLocale.get(
                new o.GLocaleKey("GBetaFlow", "text.i-understand")
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