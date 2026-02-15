/**
 * Module 633
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

function (exports, module) {
  function i() {
  }
  var n;
  i.OperatingSystem = {
    Unix: 0,
    Windows: 1,
    OSX_IOS: 2
  }, i.Hardware = {
    Desktop: 10,
    Tablet: 20,
    Phone: 30
  }, i.littleEndian = true, i.operatingSystem = null, i.hardware = null, i.language = null, i.littleEndian = (n = new ArrayBuffer(8), new Uint32Array(n)[1] = 168496141, !(10 === n[4] && 11 === n[5] && 12 === n[6] && 13 === n[7])), i.hardware = function () {
    if ("undefined" == typeof navigator)
      return i.Hardware.Desktop;
    var e = !!navigator.userAgent.match(/(iPad|SCH-I800|xoom|kindle)/i), t = !!navigator.userAgent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i);
    return e ? i.Hardware.Tablet : t ? i.Hardware.Phone : i.Hardware.Desktop;
  }(), i.operatingSystem = function () {
    if ("undefined" == typeof navigator)
      return i.Hardware.Linux;
    for (var exports = [
          {
            string: navigator.platform,
            subString: "Win",
            identity: i.OperatingSystem.Windows
          },
          {
            string: navigator.platform,
            subString: "Mac",
            identity: i.OperatingSystem.OSX_IOS
          },
          {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: i.OperatingSystem.OSX_IOS
          },
          {
            string: navigator.userAgent,
            subString: "iPad",
            identity: i.OperatingSystem.OSX_IOS
          },
          {
            string: navigator.userAgent,
            subString: "Android",
            identity: i.OperatingSystem.Unix
          },
          {
            string: navigator.platform,
            subString: "Linux",
            identity: i.OperatingSystem.Unix
          }
        ], module = 0; module < exports.length; module++) {
      if (-1 != exports[module].string.indexOf(exports[module].subString))
        return exports[module].identity;
    }
    return i.OperatingSystem.Windows;
  }(), i.language = function () {
    if ("undefined" == typeof navigator)
      return null;
    var e = (navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "").split("-");
    return 2 == e.length || e ? e[0].toLowerCase() : null;
  }(), i.fullLanguage = function () {
    if ("undefined" == typeof navigator)
      return null;
    var e = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    return e ? e.toLowerCase() : null;
  }(), exports.exports = i;
}
