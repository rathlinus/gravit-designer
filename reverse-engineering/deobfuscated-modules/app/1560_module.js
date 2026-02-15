/**
 * Webpack Module #1560
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(96) /* polyfill_JSON_stringify */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* module */,
      GTools = require(53) /* module */,
      r = _interopRequireDefault(require(1561) /* module_1561 */),
      s = _interopRequireDefault(require(177) /* module_177 */);
    const { gApi: l } = require(10) /* AppSettings */;
    exports.exports = class {
      constructor(e, t) {
        let require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
        (this._firstName = e),
          (this._lastName = t),
          (this._anonymous = require),
          (this._confirmBtn = $("<button/>")
            .addClass("confirm-btn")
            .attr("disabled", this._checkNameFieldsFilled())
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GUserNameConfigDialog", "text.ok")
              )
            )
            .on("click", () => {
              gDesigner.stats("user-name-config-dialog_update-user-name"),
                this._updateUserName();
            })),
          (this._dialog = $("<div/>")
            .append(
              $("<div/>")
                .addClass("header")
                .append(
                  $("<span/>")
                    .addClass("title")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GUserNameConfigDialog",
                          "text.dialog-title"
                        )
                      )
                    )
                )
            )
            .append(
              $("<div/>")
                .addClass("tips-content-container")
                .append(
                  $("<span/>")
                    .addClass("tips")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GUserNameConfigDialog",
                          "text.name-usage-tips"
                        )
                      )
                    )
                )
            )
            .append(this._buildNameFields())
            .append(this._confirmBtn)
            .gDialog({
              releaseOnClose: true,
              className: "g-username-config-dialog",
            }));
      }
      _buildNameFields() {
        return $("<div/>")
          .addClass("name-fields")
          .append(
            $("<div/>")
              .addClass("label-and-input")
              .addClass("first-name-field")
              .append(
                $("<span/>").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GUserNameConfigDialog", "text.first-name")
                  )
                )
              )
              .append(
                $("<input/>")
                  .addClass("field-input")
                  .val(this._firstName)
                  .on("input", (e) => this._nameFieldValueChange(true, e))
                  .on("change", (e) => this._nameFieldValueChange(true, e))
              )
          )
          .append(
            $("<div/>")
              .addClass("label-and-input")
              .addClass("last-name-field")
              .append(
                $("<span/>").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GUserNameConfigDialog", "text.last-name")
                  )
                )
              )
              .append(
                $("<input/>")
                  .addClass("field-input")
                  .val(this._lastName)
                  .on("input", (e) => this._nameFieldValueChange(false, e))
                  .on("change", (e) => this._nameFieldValueChange(false, e))
              )
          );
      }
      async _updateUserName() {
        const exports = { name: this._firstName, last_name: this._lastName },
          module = new s.default(exports);
        this._anonymous
          ? gContainer.setCookie({
              name: r.default.ANONYMOUS_USERNAME,
              value: encodeURIComponent(JSON.stringify(exports)),
            })
          : await l.updateUser(exports),
          await this._updateUserProperties(module),
          this.close();
      }
      async _updateUserProperties(e) {
        (GTools.GEditorOptions.userConfig = Object.assign(
          {},
          GTools.GEditorOptions.userConfig,
          { userName: e.getFullUserName() }
        )),
          gDesigner.getCloudCommunicationManager().userPropertiesChanged(),
          await gDesigner.getUser();
      }
      _checkNameFieldsFilled() {
        return !this._firstName || !this._firstName.length;
      }
      _nameFieldValueChange(e, t) {
        e
          ? (this._firstName = $(t.target).val())
          : (this._lastName = $(t.target).val()),
          this._confirmBtn.attr("disabled", this._checkNameFieldsFilled());
      }
      open() {
        gDesigner.stats("user-name-config-dialog_open"),
          this._dialog.gDialog("open", false);
      }
      close() {
        this._dialog.gDialog("close");
      }
    };
  }