/**
 * chunk.vendor.js Module #176
 * Type: unknown
 */

function (e, t, i) {
      var n,
        r = i(610);

      function o() {}
      ((o.OperatingSystem = {
        Unix: 0,
        Windows: 1,
        OSX_IOS: 2,
      }),
        (o.Hardware = {
          Desktop: 10,
          Tablet: 20,
          Phone: 30,
        }),
        (o.littleEndian = !0),
        (o.operatingSystem = null),
        (o.hardware = null),
        (o.language = null),
        (o.littleEndian =
          ((n = new ArrayBuffer(8)),
          (new Uint32Array(n)[1] = 168496141),
          !(10 === n[4] && 11 === n[5] && 12 === n[6] && 13 === n[7]))),
        (o.hardware = (function () {
          if ("undefined" == typeof navigator) return o.Hardware.Desktop;
          try {
            var e = [
                [/android.+((SM-P605|SM-P610|SM-P615))/i],
                [
                  [r.DEVICE.VENDOR, "Samsung"],
                  r.DEVICE.MODEL,
                  [r.DEVICE.TYPE, r.DEVICE.TABLET],
                ],
              ],
              t = new r({
                device: e,
              }).getResult(),
              i = t && t.device,
              n = i && i.type;
            if (n) {
              if ("tablet" === n) return o.Hardware.Tablet;
              if ("mobile" === n) return o.Hardware.Phone;
            }
          } catch (e) {
            console.error("UAParser (Third party library)", e);
          }
          var a, s, l;
          return (
            "undefined" != typeof navigator &&
              navigator.userAgent &&
              ((a = !!navigator.userAgent.match(
                /(iPad|SCH-I800|xoom|kindle)/i,
              )),
              (s = !!navigator.userAgent.match(
                /(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i,
              )),
              (l =
                !!navigator.userAgent.match(/(macintosh)/i) &&
                navigator.maxTouchPoints &&
                navigator.maxTouchPoints > 1)),
            a || l
              ? o.Hardware.Tablet
              : s
                ? o.Hardware.Phone
                : o.Hardware.Desktop
          );
        })()),
        (o.operatingSystem = (function () {
          if ("undefined" == typeof navigator) return o.OperatingSystem.Unix;
          for (
            var e = [
                {
                  string: navigator.platform,
                  subString: "Win",
                  identity: o.OperatingSystem.Windows,
                },
                {
                  string: navigator.platform,
                  subString: "Mac",
                  identity: o.OperatingSystem.OSX_IOS,
                },
                {
                  string: navigator.userAgent,
                  subString: "iPhone",
                  identity: o.OperatingSystem.OSX_IOS,
                },
                {
                  string: navigator.userAgent,
                  subString: "iPad",
                  identity: o.OperatingSystem.OSX_IOS,
                },
                {
                  string: navigator.userAgent,
                  subString: "Android",
                  identity: o.OperatingSystem.Unix,
                },
                {
                  string: navigator.platform,
                  subString: "Linux",
                  identity: o.OperatingSystem.Unix,
                },
              ],
              t = 0;
            t < e.length;
            t++
          ) {
            var i = e[t].string;
            if (i && -1 != i.indexOf(e[t].subString)) return e[t].identity;
          }
          return o.OperatingSystem.Windows;
        })()),
        (o.language = (function () {
          if ("undefined" == typeof navigator) return null;
          var e = (
            navigator.language ||
            navigator.browserLanguage ||
            navigator.systemLanguage ||
            navigator.userLanguage ||
            ""
          ).split("-");
          return 2 == e.length || e ? e[0].toLowerCase() : null;
        })()),
        (e.exports = o));
    }