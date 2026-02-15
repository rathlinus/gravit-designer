/**
 * Webpack Module #1688
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* module_20 */, require(151) /* module_151 */;
    var o = require(1) /* module */;
    (o.GUtil.image2Canvas = function (e, t) {
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
      var o = document.createElement("canvas");
      return (
        (o.width = e.naturalWidth),
        (o.height = e.naturalHeight),
        o.getContext("2d").drawImage(e, 0, 0),
        t && t(o),
        o
      );
    }),
      (o.GUtil.image2Base64 = function (e, t) {
        var n = this.image2Canvas(e, function (e) {
          t && t(e.toDataURL("image/png"));
        });
        return n ? n.toDataURL("image/png") : null;
      });
  }