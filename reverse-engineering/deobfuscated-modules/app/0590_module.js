/**
 * Webpack Module #590
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */, require(134) /* polyfill_String_startsWith */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* module */,
      i = require(1075) /* module_1075 */,
      a = require(381) /* module_381 */;
    function r(e) {
      a.call(this, e);
    }
    GCore.GObject.inherit(r, a);
    var s = GCore.GUtil.uuid(),
      l = {},
      c = null,
      d = [
        {
          family: "Open Sans",
          fonts: [
            {
              weight: GCore.GFont.Weight.Light,
              style: GCore.GFont.Style.Normal,
              url: "assets/font/OpenSans-Light.ttf",
            },
            {
              weight: GCore.GFont.Weight.Light,
              style: GCore.GFont.Style.Italic,
              url: "assets/font/OpenSans-LightItalic.ttf",
            },
            {
              weight: GCore.GFont.Weight.Regular,
              style: GCore.GFont.Style.Normal,
              url: "assets/font/OpenSans-Regular.ttf",
            },
            {
              weight: GCore.GFont.Weight.Regular,
              style: GCore.GFont.Style.Italic,
              url: "assets/font/OpenSans-Italic.ttf",
            },
            {
              weight: GCore.GFont.Weight.SemiBold,
              style: GCore.GFont.Style.Normal,
              url: "assets/font/OpenSans-SemiBold.ttf",
            },
            {
              weight: GCore.GFont.Weight.SemiBold,
              style: GCore.GFont.Style.Italic,
              url: "assets/font/OpenSans-SemiBoldItalic.ttf",
            },
            {
              weight: GCore.GFont.Weight.Bold,
              style: GCore.GFont.Style.Normal,
              url: "assets/font/OpenSans-Bold.ttf",
            },
            {
              weight: GCore.GFont.Weight.Bold,
              style: GCore.GFont.Style.Italic,
              url: "assets/font/OpenSans-BoldItalic.ttf",
            },
            {
              weight: GCore.GFont.Weight.ExtraBold,
              style: GCore.GFont.Style.Normal,
              url: "assets/font/OpenSans-ExtraBold.ttf",
            },
            {
              weight: GCore.GFont.Weight.ExtraBold,
              style: GCore.GFont.Style.Italic,
              url: "assets/font/OpenSans-ExtraBoldItalic.ttf",
            },
          ],
          preview: "assets/font/OpenSans.svg",
          scripts: ["LATIN"],
        },
      ];
    d.push({
      family: "Noto Sans CJK SC",
      fonts: [
        {
          weight: GCore.GFont.Weight.Regular,
          style: GCore.GFont.Style.Normal,
          url: "assets/font/chinese-simplified/NotoSansCJKsc-Regular.otf",
        },
        {
          weight: GCore.GFont.Weight.Bold,
          style: GCore.GFont.Style.Normal,
          url: "assets/font/chinese-simplified/NotoSansCJKsc-Bold.otf",
        },
      ],
      preview: "assets/font/chinese-simplified/NotoSans.svg",
      scripts: ["HAN"],
    }),
      d.push({
        family: "Noto Sans CJK TC",
        fonts: [
          {
            weight: GCore.GFont.Weight.Regular,
            style: GCore.GFont.Style.Normal,
            url: "assets/font/chinese-traditional/NotoSansCJKtc-Regular.otf",
          },
          {
            weight: GCore.GFont.Weight.Bold,
            style: GCore.GFont.Style.Normal,
            url: "assets/font/chinese-traditional/NotoSansCJKtc-Bold.otf",
          },
        ],
        preview: "assets/font/chinese-traditional/NotoSans.svg",
        scripts: ["HAN"],
      }),
      (d = d.concat(i)),
      GCore.GObject.inherit(r, a),
      (r.prototype.getDefaultFamilyForString = function (e) {
        var t = GCore.GOpenTypeFont.getScriptForString(e);
        if ("CYRILLIC" === t || "GREEK" === t) return "Noto Sans";
        var n = d.find((e) => e.scripts && e.scripts.indexOf(t) >= 0);
        return (n && n.family) || null;
      }),
      (r.prototype.addPreviews = function (e) {
        for (var module = new DOMParser(), require = 0; require < e.length; require++)
          e[require].cachedPreview ||
            (e[require].addPreviewCallback = function (e) {
              var n = new XMLHttpRequest();
              n.open("GET", this.preview),
                (n.onload = function () {
                  var n;
                  if (this.status >= 200 && this.status < 300)
                    try {
                      (n = module.parseFromString(
                        this.response,
                        "image/svg+xml"
                      ).firstChild) &&
                        n.getAttribute("xmlns") &&
                        (n.setAttribute("height", "20px"), e(n));
                    } catch (e) {
                      "undefined" != typeof gdb_loaddesign &&
                        console.warn("Couldn't parse default preview");
                    }
                }),
                n.send();
            });
      }),
      (r.prototype.init = function () {
        c || (c = d);
      }),
      (r.prototype.load = function (e, t, n, GCore) {
        this.init(),
          GCore.done(
            c
              .filter(function (t) {
                return e.indexOf("%") >= 0
                  ? t.family.toLowerCase().startsWith(e.replace(/%/g, ""))
                  : t.family.toLowerCase() == e.toLowerCase();
              })
              .slice(t, t + n),
            true,
            null
          );
      }),
      (r.prototype.getTotalFonts = function (e) {
        return (
          this.init(), e ? c.filter(this._searchFilter(e)).length : c.length
        );
      }),
      (r.prototype.hasFont = function (e) {
        var t = false;
        if (d)
          for (var require = 0; require < d.length; ++require)
            if (d[require].family === e) {
              t = true;
              break;
            }
        return t;
      }),
      (r.prototype.resolveFont = function (e, t, n, i) {
        this.init();
        for (var r = 0; r < c.length; r++) {
          var s = c[r];
          if (s.family === e)
            for (var d = s.fonts, u = 0; u < d.length; u++) {
              var p = d[u];
              if (
                p.weight === (n || 400) &&
                p.style === (t || GCore.GFont.Style.Normal)
              ) {
                if (l[p.url]) l[p.url].push(i);
                else {
                  var g = new XMLHttpRequest();
                  (g.responseType = "arraybuffer"),
                    g.open("GET", p.url),
                    (l[p.url] = []),
                    l[p.url].push(i),
                    (g.onload = function () {
                      if (this.status >= 200 && this.status < 300) {
                        var e = l[p.url];
                        delete l[p.url],
                          e.forEach((e) => {
                            e.done(this.response);
                          });
                      }
                    }),
                    (g.onerror = () => {
                      delete l[p.url], i.fail(a.Errors.ConnectionError);
                    }),
                    g.send();
                }
                return;
              }
            }
        }
        i.fail();
      }),
      (r.prototype.getProviderId = function () {
        return s;
      }),
      (exports.exports = r);
  }