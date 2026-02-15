/**
 * Module 176 - GSystem
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
  var n, r = require(610) /* UAParser */;
  function o() {
  }
  o.OperatingSystem = {
    Unix: 0,
    Windows: 1,
    OSX_IOS: 2
  }, o.Hardware = {
    Desktop: 10,
    Tablet: 20,
    Phone: 30
  }, o.littleEndian = true, o.operatingSystem = null, o.hardware = null, o.language = null, o.littleEndian = (n = new ArrayBuffer(8), new Uint32Array(n)[1] = 168496141, !(10 === n[4] && 11 === n[5] && 12 === n[6] && 13 === n[7])), o.hardware = function () {
    if ("undefined" == typeof navigator)
      return o.Hardware.Desktop;
    try {
      var exports = [
          [/android.+((SM-P605|SM-P610|SM-P615))/i],
          [
            [
              r.DEVICE.VENDOR,
              "Samsung"
            ],
            r.DEVICE.MODEL,
            [
              r.DEVICE.TYPE,
              r.DEVICE.TABLET
            ]
          ]
        ], module = new r({ device: exports }).getResult(), require = module && module.device, n = require && require.type;
      if (n) {
        if ("tablet" === n)
          return o.Hardware.Tablet;
        if ("mobile" === n)
          return o.Hardware.Phone;
      }
    } catch (e) {
      console.error("UAParser (Third party library)", e);
    }
    var a, s, l;
    return "undefined" != typeof navigator && navigator.userAgent && (a = !!navigator.userAgent.match(/(iPad|SCH-I800|xoom|kindle)/i), s = !!navigator.userAgent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i), l = !!navigator.userAgent.match(/(macintosh)/i) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1), a || l ? o.Hardware.Tablet : s ? o.Hardware.Phone : o.Hardware.Desktop;
  }(), o.operatingSystem = function () {
    if ("undefined" == typeof navigator)
      return o.OperatingSystem.Unix;
    for (var exports = [
          {
            string: navigator.platform,
            subString: "Win",
            identity: o.OperatingSystem.Windows
          },
          {
            string: navigator.platform,
            subString: "Mac",
            identity: o.OperatingSystem.OSX_IOS
          },
          {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: o.OperatingSystem.OSX_IOS
          },
          {
            string: navigator.userAgent,
            subString: "iPad",
            identity: o.OperatingSystem.OSX_IOS
          },
          {
            string: navigator.userAgent,
            subString: "Android",
            identity: o.OperatingSystem.Unix
          },
          {
            string: navigator.platform,
            subString: "Linux",
            identity: o.OperatingSystem.Unix
          }
        ], module = 0; module < exports.length; module++) {
      var require = exports[module].string;
      if (require && -1 != require.indexOf(exports[module].subString))
        return exports[module].identity;
    }
    return o.OperatingSystem.Windows;
  }(), o.language = function () {
    if ("undefined" == typeof navigator)
      return null;
    var e = (navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "").split("-");
    return 2 == e.length || e ? e[0].toLowerCase() : null;
  }(), exports.exports = o;
}
