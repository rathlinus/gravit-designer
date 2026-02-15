/**
 * Webpack Module #1241
 * Type: class
 * Name: GCloudRole
 */

function (exports, module, require) {
    "use strict";
    function o(e) {
      if (!o.Type[e]) throw new Error("Incorrect Clour Role type");
      this._type = e;
    }
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.GCloudRole = o),
      (module.default = undefined),
      require(3) /* polyfill_RegExp_toString */,
      (o.Type = {
        Viewer: "Viewer",
        Coauthor: "Coauthor",
        Creator: "Creator",
        Reviewer: "Reviewer",
        Approver: "Approver",
        ContentEditor: "ContentEditor",
      }),
      (o.prototype._type = null),
      (o.prototype.setRole = function (e) {
        if (!o.Type[e]) throw new Error("Incorrect Clour Role type");
        return (this._type = e), this;
      }),
      (o.prototype.getRole = function () {
        return this._type;
      }),
      (o.prototype.toString = function () {
        return "[Object GCloudRole]";
      });
    module.default = o;
  }