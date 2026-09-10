/**
 * chunk.vendor.js Module #1132
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(139),
        o = i(11),
        a = i(792),
        s = i(600);

      function l() {
        s.apply(this, arguments);
      }
      (n.inherit(l, s),
        (l.DefaultTexture =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q=="));
      var h = [
        r.ScaleMode.Tile,
        r.ScaleMode.Fill,
        r.ScaleMode.Stretch,
        r.ScaleMode.Fit,
      ];
      ((l.prototype._texturePattern = null),
        (l.prototype.parse = function () {
          ((this._texturePattern = new r(l.DefaultTexture)),
            this._texturePattern.setTileSize(this._data.patternTileScale));
          var e = h[this._data.patternFillType];
          (this._texturePattern.setScaleMode(e),
            r.ScaleSettings[e](this._texturePattern));
          var t = this;
          this._getReference(this._data.image._ref).then(function (e) {
            var i = new window.FileReader();
            (i.readAsDataURL(e),
              (i.onload = function () {
                var e,
                  n = /^data:.{0,255};base64,/i.exec(i.result).pop().length,
                  r = i.result.substring(n, n + 10),
                  s = window.atob(r);
                try {
                  e = Uint8Array.from(s, function (e) {
                    return e.charCodeAt(0);
                  }).slice(0, 4);
                } catch (e) {
                  return;
                }
                o.equals(Array.from(e), [37, 80, 68, 70])
                  ? a.getDocument(i.result).then(function (e) {
                      e.getPage({
                        scale: 1,
                      }).then(function (e) {
                        var i = e.getViewport({
                            scale: 1,
                          }),
                          n = document.createElement("canvas"),
                          r = {
                            canvasContext: n.getContext("2d"),
                            viewport: i,
                          };
                        ((n.height = i.height),
                          (n.width = i.width),
                          e.render(r).promise.then(function () {
                            t._texturePattern.setTexture(n.toDataURL());
                          }));
                      });
                    })
                  : t._texturePattern.setTexture(i.result);
              }));
          });
        }),
        (l.prototype.applyTo = function (e) {
          e.setProperty("_pt", this._texturePattern);
        }),
        (e.exports = l));
    }