/**
 * Webpack Module #1042
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require.r(module),
    require.d(module, 'encode', function () {
      return a;
    }),
    require.d(module, 'decode', function () {
      return r;
    }),
    require.d(module, 'trim', function () {
      return s;
    }),
    require.d(module, 'isBase64', function () {
      return l;
    }),
    require.d(module, 'isUrlSafeBase64', function () {
      return c;
    }));
  const o = { '+': '-', '/': '_' },
    i = { '-': '+', _: '/', '.': '=' },
    a = (e) => e.replace(/[+/]/g, (e) => o[e]),
    r = (e) => e.replace(/[-_.]/g, (e) => i[e]),
    s = (e) => e.replace(/[.=]{1,2}$/, ''),
    l = (e) => /^[A-Za-z0-9+/]*[=]{0,2}$/.test(e),
    c = (e) => /^[A-Za-z0-9_-]*[.=]{0,2}$/.test(e);
}
