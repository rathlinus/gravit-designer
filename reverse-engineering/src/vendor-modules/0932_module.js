/**
 * chunk.vendor.js Module #932
 * Type: unknown
 */

function (e, t, i) {
      var n = i(250),
        r = i(659);

      function o() {}
      ((o.getDecoder = function (e) {
        if ("string" == typeof e) {
          var t = /^data:.{0,255};base64,/i.exec(e);
          if (t) {
            var i = e.substring(t.pop().length);
            if (i.length && i.length % 4 == 0) {
              var o = n.toByteArray(i);
              return new r(o);
            }
            return null;
          }
        } else if (ArrayBuffer.isView(e)) return new r(e);
        return null;
      }),
        (o.decodeCMYK = function (e) {
          return (
            "string" == typeof e && (e = o.getDecoder(e)),
            e && e.getColorSpace() === r.ColorSpace.CMYK ? e.getData() : null
          );
        }),
        (e.exports = o));
    }