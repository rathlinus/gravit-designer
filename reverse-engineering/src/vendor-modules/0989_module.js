/**
 * chunk.vendor.js Module #989
 * Type: unknown
 */

function (e, t, i) {
      var n = i(379).isArabicChar;
      ((e.exports.arabicWordStartCheck = function (e) {
        var t = e.current,
          i = e.get(-1);
        return (null === i && n(t)) || (!n(i) && n(t));
      }),
        (e.exports.arabicWordEndCheck = function (e) {
          var t = e.get(1);
          return null === t || !n(t);
        }));
    }