/**
 * chunk.vendor.js Module #1234
 * Type: unknown
 */

function (e, t) {
      function i() {
        throw new Error("This class can not be instantiated");
      }
      ((i.Surrogate = {
        Lead: {
          FirstChar: 55296,
          EndChar: 56319,
        },
        Trail: {
          FirstChar: 56320,
          EndChar: 57343,
        },
      }),
        (i.isSurrogatePair = function (e, t) {
          return i.isSurrogateLead(e) && i.isSurrogateTrail(t);
        }),
        (i.isSurrogateLead = function (e) {
          return (
            e >= i.Surrogate.Lead.FirstChar && e <= i.Surrogate.Lead.EndChar
          );
        }),
        (i.isSurrogateTrail = function (e) {
          return (
            e >= i.Surrogate.Trail.FirstChar && e <= i.Surrogate.Trail.EndChar
          );
        }),
        (i.encodeToUTF32 = function (e, t) {
          return (
            1024 * (e - i.Surrogate.Lead.FirstChar) +
            t -
            i.Surrogate.Trail.FirstChar +
            65536
          );
        }),
        (i.encodeToUTF16BE = function (e) {
          for (var t = i.encodeToUCS2(e), n = 0; n < t.length; n += 2) {
            var r = t[n];
            ((t[n] = t[n + 1]), (t[n + 1] = r));
          }
          return t;
        }),
        (i.encodeToUCS2 = function (e) {
          for (var t, i = [], n = 0; n < e.length; ++n)
            ((t = "string" == typeof e ? e.charCodeAt(n) : e[n]),
              i.push(t % 256),
              i.push(t >> 8));
          return i;
        }),
        (e.exports = i));
    }