/**
 * Webpack Module #1302
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = setInterval(function () {
    navigator.onLine && ($(document).trigger('networkAvailable'), clearInterval(o));
  }, 2e4);
  module.youtubePlaylist =
    'https://www.youtube.com/playlist?list=PLqsk_4aqUvEYxmy5NpQakcZXa6_3w-I8F';
}
