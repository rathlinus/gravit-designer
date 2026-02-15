/**
 * Webpack Module #213
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o,
    i,
    globalThis = require(23) /* globalThis */,
    r = require(129) /* stub_requires_23 */,
    s = globalThis.process,
    l = globalThis.Deno,
    c = (s && s.versions) || (l && l.version),
    d = c && c.v8;
  (d && (i = (o = d.split('.'))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])),
    !i &&
      r &&
      (!(o = r.match(/Edge\/(\d+)/)) || o[1] >= 74) &&
      (o = r.match(/Chrome\/(\d+)/)) &&
      (i = +o[1]),
    (exports.exports = i));
}
