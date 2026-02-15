/**
 * Webpack Module #1191
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */;
    const { GObject: o } = require(1) /* module */,
      { GPlatform: i } = require(15) /* module */;
    function a() {
      this._children = [];
    }
    o.inherit(a, o),
      (a.prototype._children = null),
      (a.prototype.clear = function () {
        this._clearChildren(), this._clearOwnData();
      }),
      (a.prototype._clearOwnData = function () {}),
      (a.prototype._clearChildren = function () {
        this._children &&
          this._children.length &&
          this._children.forEach((e) => e.clear()),
          (this._children = []);
      }),
      (a.prototype.clearChildren = function () {
        this._clearChildren();
      }),
      (a.prototype.getChildren = function () {
        return this._children;
      }),
      (a.prototype.addChild = function (e) {
        this._children.push(e);
      }),
      (a.prototype.scrollIntoView = function () {}),
      (a.prototype.setVisiblity = function (e) {
        throw Error("Not implemented!");
      }),
      (a.prototype._scrollToElement = function (e) {
        if (!e || !e[0]) return;
        const module = i.webBrowser === i.constructor.WebBrowser.Firefox,
          require = module ? "start" : "nearest",
          o = module ? "auto" : "smooth";
        "function" == typeof e[0].scrollIntoView &&
          e[0].scrollIntoView({ behavior: o, block: require });
      }),
      (exports.exports = a);
  }