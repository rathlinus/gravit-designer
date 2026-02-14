/**
 * Module 52
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t) {
  var i = {
    Default: null,
    Pixel: "pixel",
    Select: "select",
    SelectInverse: "select-inverse",
    SelectDot: "select-dot",
    SelectDotInverse: "select-dot-inverse",
    SelectPlus: "select-plus",
    SelectPlusInverse: "select-plus-inverse",
    SelectArrowOnly: "select-arrow-only",
    SelectCross: "select-cross",
    SelectResizeVert: "select-resize-vert",
    SelectResizeHoriz: "select-resize-horiz",
    SelectResizeUpLeftDownRight: "select-upleft-downright",
    SelectResizeUpRightDownLeft: "select-upright-downleft",
    SelectSkewVert: "select-skew-vert",
    SelectSkewHoriz: "select-skew-horiz",
    SelectRotate: [
      "select-rot-tl",
      "select-rot-tc",
      "select-rot-tr",
      "select-rot-rc",
      "select-rot-br",
      "select-rot-bc",
      "select-rot-bl",
      "select-rot-lc"
    ],
    SelectRotateRound: "select-rot-round",
    SelectSmallRotateRound: "select-small-rot-round",
    SelectCurve: "select-curve",
    TextResize: "text-resize",
    ZoomPlus: "zoom-plus",
    ZoomMinus: "zoom-minus",
    ZoomNone: "zoom-none",
    HandOpen: "hand-open",
    HandClosed: "hand-closed",
    Cross: "cross",
    CrossEllipse: "cross-ellipse",
    CrossArrow: "cross-arrow",
    CrossRectangle: "cross-rectangle",
    CrossHighlight: "cross-highlight",
    CrossFreehand: "cross-freehand",
    Comment: "comment",
    Pen: "pen",
    PenStart: "pen-start",
    PenEnd: "pen-end",
    PenPlus: "pen-plus",
    PenPlusMiddle: "pen-plus-middle",
    PenMinus: "pen-minus",
    PenModify: "pen-modify",
    PenDrag: "pen-drag",
    Lasso: "lasso",
    Pipette: "pipette",
    Knife: "knife",
    Text: "!text",
    _styleElement: !1,
    initStyle: function () {
      if (!this._styleElement && document && document.createElement) {
        this._styleElement = document.createElement("style"), this._styleElement.setAttribute("type", "text/css");
        var e = [], t = this;
        function i(i) {
          var n = "";
          if ("!" === i.charAt(0))
            n = i = i.substr(1);
          else
            switch (i) {
            case t.CrossEllipse:
            case t.CrossArrow:
            case t.CrossRectangle:
            case t.CrossHighlight:
            case t.CrossFreehand:
            case t.Comment:
              n = "url(\"assets/cursor/" + i + ".svg\") 9 12, auto";
              break;
            default:
              n = "url(\"assets/cursor/" + i + ".cur\"), auto";
            }
          e.push(".g-cursor-" + i + " {cursor: " + n + " !important;}");
        }
        for (var n in this) {
          var r = this[n];
          if (r instanceof Array)
            for (var o = 0; o < r.length; ++o)
              i(r[o]);
          else
            "string" == typeof r && i(r);
        }
        this._styleElement.textContent = e.join("\n"), document.body.appendChild(this._styleElement);
      }
    }
  };
  e.exports = i;
}
