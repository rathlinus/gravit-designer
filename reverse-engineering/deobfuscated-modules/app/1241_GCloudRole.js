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
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.GCloudRole = o),
      (t.default = undefined),
      n(3) /* module_3 */,
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
    t.default = o;
  }