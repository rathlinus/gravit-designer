/**
 * chunk.vendor.js Module #1405
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = (i(9), i(47), i(64));

      function o() {}
      (n.inherit(o, n),
        (o.import = function (e, t) {
          var i = new FileReader();
          ((i.onload = function () {
            var e = i.result;
            if (e.length > r.maxImgDataUrlLength) t("Size limit exceeded");
            else {
              var n = new Image();
              ((n.onload = function () {
                var i = n.naturalWidth,
                  o = n.naturalHeight;
                o > r.maxImgLinearDimension ||
                i > r.maxImgLinearDimension ||
                i * o > r.maxImgAreaDots
                  ? t("Size limit exceeded")
                  : t(null, e, i, o);
              }),
                (n.src = e));
            }
          }),
            (i.onerror = function () {
              (i.abort(), console.log("File error"));
            }),
            e instanceof Uint8Array && (e = new Blob([e])),
            i.readAsDataURL(e));
        }),
        (e.exports = o));
    }