/**
 * Webpack Module #1688
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(151) /* module_151 */;
    var GCore = require(1) /* module */;
    (GCore.GUtil.image2Canvas = function (e, t) {
      if ("string" == typeof e) {
        var require = new Image();
        return (
          e && e.match(/^(http|https|\/\/)/)
            ? (require.crossOrigin = "Anonymous")
            : (require.crossOrigin = null),
          (require.src = e),
          (require.onload = function () {
            this.image2Canvas(require, t);
          }.bind(this)),
          null
        );
      }
      var GCore = document.createElement("canvas");
      return (
        (GCore.width = e.naturalWidth),
        (GCore.height = e.naturalHeight),
        GCore.getContext("2d").drawImage(e, 0, 0),
        t && t(GCore),
        GCore
      );
    }),
      (GCore.GUtil.image2Base64 = function (e, t) {
        var n = this.image2Canvas(e, function (e) {
          t && t(e.toDataURL("image/png"));
        });
        return n ? n.toDataURL("image/png") : null;
      });
  }