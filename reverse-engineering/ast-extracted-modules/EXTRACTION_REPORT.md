# AST-Based Module Extraction Report

**Date:** 2026-02-14T21:59:22.463Z
**Method:** AST-based parsing with esprima

## Summary

- **Total Modules Extracted:** 756
- **Known Classes:** 150

## Module Structure

Each module follows the webpack module pattern:

```javascript
function(e, t, n) {
  // e = exports
  // t = module
  // n = require function
  // Module code here...
}
```

## Known Classes

### ANNOTATIONS

- Module 84: GAnnotation
- Module 285: GCommentAnnotation
- Module 318: GHighlighterAnnotation
- Module 319: GArrowAnnotation
- Module 320: GPencilAnnotation
- Module 366: GComment
- Module 1035: GEmptyAnnotation

### CORE

- Module 0: GObject
- Module 2: GNode
- Module 9: GLocale
- Module 11: GUtil
- Module 12: GMath
- Module 47: GLocaleKey
- Module 72: GEvent
- Module 75: GEventTarget
- Module 142: GDate
- Module 176: GSystem
- Module 224: GTranslation
- Module 227: GDictionary
- Module 457: GLocaleLanguage
- Module 471: GTransactionRecorder

### EFFECTS

- Module 51: GWebGLEffect
- Module 249: GBlurEffect
- Module 282: GGLBlurEffect
- Module 321: GDropShadowEffect
- Module 432: GInnerShadowEffect
- Module 535: GMultiEffect
- Module 588: GGLColorAdjustEffect
- Module 661: GGLNoiseEffect
- Module 728: GGLSepiaEffect
- Module 729: GOverlayEffect
- Module 730: GGLBrightnessContrastEffect
- Module 731: GGLDotScreenEffect
- Module 732: GGLHueSaturationEffect
- Module 839: GGLZoomBlurEffect
- Module 840: GMirrorEffect
- Module 1004: GGLBulgePinchEffect
- Module 1005: GGLEdgeWorkEffect
- Module 1006: GGLColorHalfToneEffect
- Module 1007: GGLHexagonalEffect
- Module 1008: GColorGradingEffect
- Module 1010: GGLInnerGlowEffect
- Module 1011: GGLToonEffect
- Module 1012: GGLBloomEffect
- Module 1013: GGLTrueBlurEffect
- Module 1014: GGLDenoiseEffect
- Module 1015: GGLOuterGlowEffect
- Module 1016: GGLSwirlEffect
- Module 1017: GGLVignetteEffect
- Module 1019: GGLInkEffect
- Module 1020: GGLUnsharpMaskEffect
- Module 1021: GGLVibranceEffect
- Module 1022: GGLSketchEffect
- Module 1023: GGLLensBlurEffect
- Module 1024: GGLTiltShiftEffect
- Module 1025: GGLRecolourEffect
- Module 1026: GColorAdjustMultiEffect
- Module 1027: GAdjustMultiEffect
- Module 1028: GContactShadowEffect
- Module 1029: GCurvedShadowEffect
- Module 1031: GLongShadowEffect
- Module 1032: GGLBendEffect
- Module 1033: GGLDrunkEffect
- Module 1034: GGLFisheyeEffect

### GEOMETRY

- Module 5: GPoint
- Module 6: GRect
- Module 7: GTransform
- Module 45: GPathBase
- Module 48: GVertex
- Module 54: GVertexContainer
- Module 56: GShape
- Module 59: GVertexInfo
- Module 60: GPath
- Module 63: GVertexTransformer
- Module 73: GRectangle
- Module 87: GVertexSource
- Module 113: GCompoundPath
- Module 132: GLength
- Module 162: GPathsGraph
- Module 179: GPathUtil
- Module 214: GEllipse
- Module 215: GTLPathTextTransformer
- Module 233: GCompoundShape
- Module 264: GVertexPolyBoolean
- Module 266: GTLDirectionTextTransformer
- Module 268: GConnector
- Module 284: GPolygon
- Module 289: GSlice
- Module 316: GRectangleAnnotation
- Module 317: GEllipseAnnotation
- Module 528: GParameterizedVertexProcessor
- Module 530: GSimpleShape
- Module 651: GVertexOffsetter
- Module 1002: GVertexSimplifier

### OTHER

- Module 347: GPGEdge
- Module 656: GPGFacet

### RENDERING

- Module 14: GPaintCanvas
- Module 17: GRGBColor
- Module 50: GPattern
- Module 68: GColor
- Module 95: GImage
- Module 111: GRendererCtx
- Module 138: GGradient
- Module 139: GTexturePattern
- Module 147: GLinearGradient
- Module 158: GRadialGradient
- Module 166: GRendererConfig
- Module 188: GCMYKColor
- Module 205: GRendererCtxDbg
- Module 228: GPaintContext
- Module 229: GHitResult
- Module 283: GAngularGradient
- Module 345: GBitmap
- Module 518: GNoisePattern
- Module 534: GImageGrid
- Module 648: GColorHelper
- Module 649: GHSVColor
- Module 1003: GImageTracer

### SCENE

- Module 22: GElement
- Module 28: GStylable
- Module 69: GBlock
- Module 83: GPage
- Module 104: GItem
- Module 122: GGroup
- Module 133: GScenePaintConfiguration
- Module 159: GLayer
- Module 160: GScene
- Module 207: GSceneOptions
- Module 216: GSymbol
- Module 265: GBackground
- Module 280: GWorkspace
- Module 327: GActionable
- Module 506: GAnnotationsList
- Module 511: GStyle
- Module 517: GSwatch
- Module 532: GAnnotable
- Module 658: GSceneDictionary
- Module 662: GSwatches
- Module 727: GActionItem
- Module 1001: GSceneUtil
- Module 1018: GGLStrokeLayerEffect

### TEXT

- Module 70: GText
- Module 108: GFont
- Module 161: GTLUtil
- Module 281: GFontManager
- Module 370: GTextAnnotation
- Module 531: GCollabText
- Module 533: GCollaborativeTextAnnotation
- Module 587: GOpenTypeFont
- Module 726: GOpenTypeUtil

