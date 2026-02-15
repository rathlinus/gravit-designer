/**
 * Module 24
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

function (exports, module, require) {
  var n = require(14) /* GPaintCanvas */, r = require(17) /* GRGBColor */, o = require(207) /* GSceneOptions */, a = require(9) /* GLocale */, s = require(47) /* GLocaleKey */, l = n.getScreenDPI(), h = {
      autoPanStep: 3 * l,
      maxUndoSteps: 100,
      cloneShift: 10,
      pickDistance: 4,
      annotPickDistance: 0,
      annotDropDistance: 4,
      cursorDistanceSmall: 1,
      cursorDistanceBig: 10,
      cursorConstraint: 0,
      highlightOnHover: true,
      coordinatesTooltip: true,
      bboxPositionTooltip: true,
      sizeTooltip: true,
      angleTooltip: true,
      showTooltips: true,
      tooltipDecimalPlaces: 1,
      showDistance: true,
      toolExitKey: undefined,
      scaleBorderWidth: undefined,
      scaleCorners: undefined,
      cornerRotate: true,
      rotateHandle: "top",
      rotateHandleInDetailMode: true,
      snapRotate: false,
      simpleLineMode: true,
      resizeBox: true,
      resizeHandles: true,
      resizeHandlesInDetailMode: true,
      adaptiveResizeHandles: false,
      visualGroupSelect: false,
      styleEditors: true,
      centerCrossSize: 4 * l,
      outlineWidth: 1 * l,
      pageOutlineWidth: 2 * l,
      distanceHelperColor: new r([
        255,
        0,
        170
      ]),
      distanceHelperBehaviour: null,
      guideOutlineColor: new r([
        75,
        215,
        208
      ]),
      guideLineColor: new r([
        0,
        145,
        234
      ]),
      guideLineHintColor: "blue",
      gridColor: new r([
        38,
        50,
        56
      ]),
      gridOpacity: 0.125,
      preserveAspectRatio: false,
      selectDoubleClickBehavior: null,
      leaveWhenClosePath: false,
      pathDbClickTime: 300,
      invertSelectionMode: false,
      toggleAnchorPointType: true,
      pageSelectable: true,
      inlineEditText: true,
      debugTransactions: false,
      imageCropDistance: 0,
      allowTextRatioPreservation: false,
      pageCollisionTransform: !o.pagesCanOverlap,
      propertiesExcludedFromCopying: null,
      maxNumberOfEditorsToDraw: 2000,
      annotationHandles: {
        suppressRedundantCorners: false,
        rectangle: {
          type: "circle",
          size: 8 * l,
          margin: 10 * l
        },
        ellipse: {
          startType: "circle",
          endType: "diamond",
          size: 8 * l
        },
        polygon: {
          innerType: "circle",
          outerType: "diamond",
          size: 8 * l
        },
        textOnPath: {
          type: "diamond",
          size: 8 * l
        },
        text: {
          showAutoSize: true,
          blResizeColor: new r([
            235,
            100,
            60
          ])
        },
        simpleShape: {
          type: "circle",
          size: 10 * l
        },
        path: {
          corner: {
            type: "circle",
            size: 6 * l
          },
          control: {
            type: "circle",
            size: 6 * l
          },
          constrain: {
            type: "circle",
            size: 6 * l
          },
          node: {
            straightType: "rect",
            smoothType: "circle",
            autoType: "diamond",
            size: 10 * l
          },
          graph: {
            type: "circle",
            size: 10 * l
          },
          center: {
            type: "circle",
            size: 8 * l
          }
        },
        gradient: {
          type: "circle",
          startType: "circle",
          endType: "rect",
          size: 9 * l,
          sizeBig: 12 * l,
          outlineWidth: 2 * l,
          shadowColor: "rgba(0,0,0,0.9)",
          lineShadowColor: "rgb(120,120,120)"
        },
        catch: {
          type: "diamond",
          size: 8 * l
        },
        resize: {
          type: "circle",
          size: 10 * l,
          inverted: true,
          rotateDistance: 4 * l,
          outsideStroke: false
        },
        rotate: {
          type: "circle",
          size: 10 * l,
          distance: 22 * l,
          iconSize: 16 * l,
          iconDynamicColor: true
        },
        tranformBox: {
          resizeType: "circle",
          pivotType: "diamond",
          pivotSize: null,
          pivotOutlineWidth: null,
          size: 10 * l,
          inverted: true,
          skew: {
            enabled: false,
            type: "circle",
            inverted: true,
            size: 23 * l,
            distance: 23 * l,
            iconSize: 23 * l,
            outlineWidth: 2 * l,
            outsideStroke: true,
            shadowColor: "transparent"
          },
          rotate: {
            enabled: false,
            type: "circle",
            inverted: true,
            size: 23 * l,
            distance: 23 * l,
            iconSize: 23 * l,
            iconDynamicColor: true,
            outlineWidth: l,
            shadowColor: "transparent"
          }
        },
        preserveAspectRatio: {
          enabled: false,
          type: "circle",
          inverted: true,
          size: 23 * l,
          iconSize: 23 * l,
          outlineWidth: 2 * l,
          outsideStroke: true,
          shadowColor: "transparent",
          side: null
        }
      },
      userConfig: { uid: 0 }
    };
  Object.defineProperty(h.userConfig, "userName", {
    get: function () {
      return a.get(new s("GEditorOptions", "text.anonymous-user"), "Anonymous");
    },
    enumerable: true,
    configurable: true
  }), h.isPreserveAspectRatioEnabledForSide = function (e) {
    return !(!h.annotationHandles.preserveAspectRatio || !h.annotationHandles.preserveAspectRatio.enabled) && h.annotationHandles.preserveAspectRatio.side === e;
  }, h.restore = function (e) {
    return JSON.parse(JSON.stringify(e), function (e, t) {
      switch (e) {
      case "blResizeColor":
      case "gridColor":
      case "distanceHelperColor":
      case "guideOutlineColor":
      case "guideLineColor":
        return 3 === t._value.length ? new r(t._value) : new GCMYKColor(t._value);
      default:
        return t;
      }
    });
  }, exports.exports = h;
}
