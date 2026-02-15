/**
 * Webpack Module #423
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var tryCall = require(21) /* tryCall */,
    wellKnownSymbol = require(43) /* wellKnownSymbol */,
    hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
    s = wellKnownSymbol('iterator');
  exports.exports = !tryCall(function () {
    var e = new URL('b?a=1&b=2&c=3', 'https://a'),
      t = e.searchParams,
      n = new URLSearchParams('a=1&a=2&b=3'),
      tryCall = '';
    return (
      (e.pathname = 'c%20d'),
      t.forEach(function (e, n) {
        (t.delete('b'), (tryCall += n + e));
      }),
      n.delete('a', 2),
      n.delete('b', undefined),
      (createNonEnumerableProperty &&
        (!e.toJSON || !n.has('a', 1) || n.has('a', 2) || !n.has('a', undefined) || n.has('b'))) ||
        (!t.size && (createNonEnumerableProperty || !hasOwnProperty_wrapper)) ||
        !t.sort ||
        'https://a/c%20d?a=1&c=3' !== e.href ||
        '3' !== t.get('c') ||
        'a=1' !== String(new URLSearchParams('?a=1')) ||
        !t[s] ||
        'a' !== new URL('https://a@b').username ||
        'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
        'xn--e1aybc' !== new URL('https://тест').host ||
        '#%D0%B1' !== new URL('https://a#б').hash ||
        'a1c3' !== tryCall ||
        'x' !== new URL('https://x', undefined).host
    );
  });
}
