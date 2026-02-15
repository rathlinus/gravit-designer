/**
 * Module 717
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
  "use strict";
  var n = require(89) /* module */, r = require(115) /* module */;
  module.parse = function (e, t) {
    var i = {}, r = new n.Parser(e, t);
    return i.version = r.parseVersion(), i.numGlyphs = r.parseUShort(), 1 === i.version && (i.maxPoints = r.parseUShort(), i.maxContours = r.parseUShort(), i.maxCompositePoints = r.parseUShort(), i.maxCompositeContours = r.parseUShort(), i.maxZones = r.parseUShort(), i.maxTwilightPoints = r.parseUShort(), i.maxStorage = r.parseUShort(), i.maxFunctionDefs = r.parseUShort(), i.maxInstructionDefs = r.parseUShort(), i.maxStackElements = r.parseUShort(), i.maxSizeOfInstructions = r.parseUShort(), i.maxComponentElements = r.parseUShort(), i.maxComponentDepth = r.parseUShort()), i;
  }, module.make = function (e) {
    return new r.Table("maxp", [
      {
        name: "version",
        type: "FIXED",
        value: 20480
      },
      {
        name: "numGlyphs",
        type: "USHORT",
        value: e
      }
    ]);
  };
}
