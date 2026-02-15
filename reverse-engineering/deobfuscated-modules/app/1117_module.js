/**
 * Webpack Module #1117
 * Type: unknown
 */

function (exports, module, require) {
    var o,
      i =
        i ||
        (function (e) {
          "use strict";
          if (
            !(
              undefined === e ||
              ("undefined" != typeof navigator &&
                /MSIE [1-9]\./.test(navigator.userAgent))
            )
          ) {
            var module = e.document,
              require = function () {
                return e.URL || e.webkitURL || e;
              },
              o = module.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              i = "download" in o,
              a = /constructor/i.test(e.HTMLElement) || e.safari,
              r = /CriOS\/[\d]+/.test(navigator.userAgent),
              s = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw t;
                }, 0);
              },
              l = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? require().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              c = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type
                )
                  ? new Blob([String.fromCharCode(65279), e], { type: e.type })
                  : e;
              },
              d = function (t, d, u) {
                u || (t = c(t));
                var p,
                  g = this,
                  h = "application/octet-stream" === t.type,
                  f = function () {
                    !(function (e, t, n) {
                      for (var o = (t = [].concat(t)).length; o--; ) {
                        var i = e["on" + t[o]];
                        if ("function" == typeof i)
                          try {
                            i.call(e, n || e);
                          } catch (e) {
                            s(e);
                          }
                      }
                    })(g, "writestart progress write writeend".split(" "));
                  };
                if (((g.readyState = g.INIT), i))
                  return (
                    (p = require().createObjectURL(t)),
                    void setTimeout(function () {
                      var e, t;
                      (o.href = p),
                        (o.download = d),
                        (e = o),
                        (t = new MouseEvent("click")),
                        e.dispatchEvent(t),
                        f(),
                        l(p),
                        (g.readyState = g.DONE);
                    })
                  );
                !(function () {
                  if ((r || (h && a)) && e.FileReader) {
                    var o = new FileReader();
                    return (
                      (o.onloadend = function () {
                        var t = r
                          ? o.result
                          : o.result.replace(
                              /^data:[^;]*;/,
                              "data:attachment/file;"
                            );
                        e.open(t, "_blank") || (e.location.href = t),
                          (t = undefined),
                          (g.readyState = g.DONE),
                          f();
                      }),
                      o.readAsDataURL(t),
                      void (g.readyState = g.INIT)
                    );
                  }
                  (p || (p = require().createObjectURL(t)), h)
                    ? (e.location.href = p)
                    : e.open(p, "_blank") || (e.location.href = p);
                  (g.readyState = g.DONE), f(), l(p);
                })();
              },
              u = d.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    (t = t || e.name || "download"),
                    n || (e = c(e)),
                    navigator.msSaveOrOpenBlob(e, t)
                  );
                }
              : ((u.abort = function () {}),
                (u.readyState = u.INIT = 0),
                (u.WRITING = 1),
                (u.DONE = 2),
                (u.error =
                  u.onwritestart =
                  u.onprogress =
                  u.onwrite =
                  u.onabort =
                  u.onerror =
                  u.onwriteend =
                    null),
                function (e, t, n) {
                  return new d(e, t || e.name || "download", n);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this
        );
    exports.exports
      ? (exports.exports.saveAs = i)
      : null !== require(1377) /* module_1377 */ &&
        null !== require(414) /* module_414 */ &&
        (undefined ===
          (o = function () {
            return i;
          }.call(module, require, module, exports)) ||
          (exports.exports = o));
  }