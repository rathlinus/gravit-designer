/**
 * Webpack Module #400
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    tryCall = require(21); /* tryCall */
  exports.exports =
    hasOwnProperty_wrapper &&
    tryCall(function () {
      return (
        42 !==
        Object.defineProperty(function () {}, 'prototype', {
          value: 42,
          writable: false,
        }).prototype
      );
    });
}
