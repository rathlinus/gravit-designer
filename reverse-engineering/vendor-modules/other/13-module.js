/**
 * Module 13
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t, i) {
      var n = i(14),
        r = i(17),
        o = i(207),
        a = i(9),
        s = i(47),
        l = n.getScreenDPI(),
        h = {
          autoPanStep: 3 * l,
          maxUndoSteps: 100,
          cloneShift: 10,
          pickDistance: 4,
          annotPickDistance: 0,
          annotDropDistance: 4,
          cursorDistanceSmall: 1,
          cursorDistanceBig: 10,
          cursorConstraint: 0,
          highlightOnHover: !0,
          coordinatesTooltip: !0,
          bboxPositionTooltip: !0,
          sizeTooltip: !0,
          angleTooltip: !0,
          showTooltips: !0,
          tooltipDecimalPlaces: 1,
          showDistance: !0,
          toolExitKey: void 0,
          scaleBorderWidth: void 0,
          scaleCorners: void 0,
          cornerRotate: !0,
          rotateHandle: "top",
          rotateHandleInDetailMode: !0,
          snapRotate: !1,
          simpleLineMode: !0,
          resizeBox: !0,
          resizeHandles: !0,
          resizeHandlesInDetailMode: !0,
          adaptiveResizeHandles: !1,
          visualGroupSelect: !1,
          styleEditors: !0,
          centerCrossSize: 4 * l,
          outlineWidth: 1 * l,
          pageOutlineWidth: 2 * l,
          distanceHelperColor: new r([255, 0, 170]),
          distanceHelperBehaviour: null,
          guideOutlineColor: new r([75, 215, 208]),
          guideLineColor: new r([0, 145, 234]),
          guideLineHintColor: "blue",
          gridColor: new r([38, 50, 56]),
          gridOpacity: 0.125,
          preserveAspectRatio: !1,
          selectDoubleClickBehavior: null,
          leaveWhenClosePath: !1,
          pathDbClickTime: 300,
          invertSelectionMode: !1,
          toggleAnchorPointType: !0,
          pageSelectable: !0,
          inlineEditText: !0,
          debugTransactions: !1,
          imageCropDistance: 0,
          allowTextRatioPreservation: !1,
          pageCollisionTransform: !o.pagesCanOverlap,
          propertiesExcludedFromCopying: null,
          maxNumberOfEditorsToDraw: 2e3,
          annotationHandles: {
            suppressRedundantCorners: !1,
            rectangle: {
              type: "circle",
              size: 8 * l,
              margin: 10 * l,
            },
            ellipse: {
              startType: "circle",
              endType: "diamond",
              size: 8 * l,
            },
            polygon: {
              innerType: "circle",
              outerType: "diamond",
              size: 8 * l,
            },
            textOnPath: {
              type: "diamond",
              size: 8 * l,
            },
            text: {
              showAutoSize: !0,
              blResizeColor: new r([235, 100, 60]),
            },
            simpleShape: {
              type: "circle",
              size: 10 * l,
            },
            path: {
              corner: {
                type: "circle",
                size: 6 * l,
              },
              control: {
                type: "circle",
                size: 6 * l,
              },
              constrain: {
                type: "circle",
                size: 6 * l,
              },
              node: {
                straightType: "rect",
                smoothType: "circle",
                autoType: "diamond",
                size: 10 * l,
              },
              graph: {
                type: "circle",
                size: 10 * l,
              },
              center: {
                type: "circle",
                size: 8 * l,
              },
            },
            gradient: {
              type: "circle",
              startType: "circle",
              endType: "rect",
              size: 9 * l,
              sizeBig: 12 * l,
              outlineWidth: 2 * l,
              shadowColor: "rgba(0,0,0,0.9)",
              lineShadowColor: "rgb(120,120,120)",
            },
            catch: {
              type: "diamond",
              size: 8 * l,
            },
            resize: {
              type: "circle",
              size: 10 * l,
              inverted: !0,
              rotateDistance: 4 * l,
              outsideStroke: !1,
            },
            rotate: {
              type: "circle",
              size: 10 * l,
              distance: 22 * l,
              iconSize: 16 * l,
              iconDynamicColor: !0,
            },
            tranformBox: {
              resizeType: "circle",
              pivotType: "diamond",
              pivotSize: null,
              pivotOutlineWidth: null,
              size: 10 * l,
              inverted: !0,
              skew: {
                enabled: !1,
                type: "circle",
                inverted: !0,
                size: 23 * l,
                distance: 23 * l,
                iconSize: 23 * l,
                outlineWidth: 2 * l,
                outsideStroke: !0,
                shadowColor: "transparent",
              },
              rotate: {
                enabled: !1,
                type: "circle",
                inverted: !0,
                size: 23 * l,
                distance: 23 * l,
                iconSize: 23 * l,
                iconDynamicColor: !0,
                outlineWidth: l,
                shadowColor: "transparent",
              },
            },
            preserveAspectRatio: {
              enabled: !1,
              type: "circle",
              inverted: !0,
              size: 23 * l,
              iconSize: 23 * l,
              outlineWidth: 2 * l,
              outsideStroke: !0,
              shadowColor: "transparent",
              side: null,
            },
          },
          userConfig: {
            uid: 0,
          },
        };
      Object.defineProperty(h.userConfig, "userName", {
        get: function () {
          return a.get(
            new s("GEditorOptions", "text.anonymous-user"),
            "Anonymous"
          );
        },
        enumerable: !0,
        configurable: !0,
      }),
        (h.isPreserveAspectRatioEnabledForSide = function (e) {
          return (
            !(
              !h.annotationHandles.preserveAspectRatio ||
              !h.annotationHandles.preserveAspectRatio.enabled
            ) && h.annotationHandles.preserveAspectRatio.side === e
          );
        }),
        (h.restore = function (e) {
          return JSON.parse(JSON.stringify(e), function (e, t) {
            switch (e) {
              case "blResizeColor":
              case "gridColor":
              case "distanceHelperColor":
              case "guideOutlineColor":
              case "guideLineColor":
                return 3 === t._value.length
                  ? new r(t._value)
                  : new GCMYKColor(t._value);
              default:
                return t;
            }
          });
        }),
        (e.exports = h);
    }
