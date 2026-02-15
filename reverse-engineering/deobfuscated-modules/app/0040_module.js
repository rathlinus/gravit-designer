/**
 * Webpack Module #40
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(91) /* module_91 */, require(842) /* module_842 */;
    var o = require(16) /* module_16 */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module._cloneChildrenIntoReceiver = E),
      (module._mergeChildren = x),
      (module._mergePath = C),
      (module._mergeProperties = b),
      (module._mergeStyle = w),
      (module._removeDeletedChildren = S),
      (module._tryAndCatch = undefined),
      (module._updateCommonChildren = A),
      (module.areNodePropertiesDifferent = y),
      (module.base64StringToString = function (e) {
        let module;
        try {
          module = f(l.toByteArray(e));
        } catch (e) {
          module = "";
        }
        return module;
      }),
      (module.base64URLSafeEncode = function (e) {
        return (0, r.trim)((0, r.encode)(e));
      }),
      (module.blockChanges = function (e, t, n, o) {
        n && n.startBlockReferenceChanges();
        o && o.beginUpdate();
        e && e._beginSelectionUpdate();
        t &&
          t.forEach((e) => {
            e.beginUpdate();
          });
      }),
      (module.buildDialogDocumentHasUpdates = function (e, t, n, o) {
        return c.custom({
          subtitle: i.GLocale.get(
            new i.GLocaleKey("GSaveAction", "has-new-version-when-save-message")
          ),
          className: "g-has-updates-warning-dialog",
          icon: "info",
          closeable: false,
          buttons: [
            {
              label: i.GLocale.get(
                new i.GLocaleKey("GCommonNames", "text.cancel")
              ),
              closeOnClick: true,
              shortcut: c.Shortcut.Esc,
              position: "left",
              onclick: () => {
                o && o.call(this, e);
              },
            },
            {
              label: i.GLocale.get(
                new i.GLocaleKey(
                  "GSaveAction",
                  "has-new-version-when-save-reload"
                )
              ),
              closeOnClick: true,
              onclick: () => {
                gDesigner.getToolbar()._updateActions(), t.call(this, e);
              },
            },
            {
              label: i.GLocale.get(
                new i.GLocaleKey(
                  "GSaveAction",
                  "has-new-version-when-save-save"
                )
              ),
              className: "primary",
              closeOnClick: true,
              shortcut: c.Shortcut.Enter,
              onclick: () => {
                n.call(this, e);
              },
            },
          ],
        });
      }),
      (module.chaining = undefined),
      (module.debounce = function (e, t) {
        let require;
        return function () {
          const o = arguments;
          let i = () => {
            (require = 0), e.apply(this, o);
          };
          require && clearTimeout(require), (require = setTimeout(i, t));
        };
      }),
      (module.decodeFromUTF8 = f),
      (module.decodeHTML = function (e) {
        return $("<textarea/>").html(e).text();
      }),
      (module.decrypt = function (e) {
        try {
          var module = e.split(":"),
            require = module.shift(),
            o = s.enc.Hex.parse(require),
            i = module.join(":");
          return s.AES.decrypt(i, g, {
            iv: o,
            format: s.format.OpenSSL,
            mode: s.mode.CBC,
          }).toString(s.enc.Utf8);
        } catch (e) {
          return;
        }
      }),
      (module.encodeToUTF8 = m),
      (module.encrypt = function (e) {
        try {
          var module = s.lib.WordArray.random(32),
            require = s.AES.encrypt(e, g, {
              iv: module,
              format: s.format.OpenSSL,
              mode: s.mode.CBC,
            });
          return module.toString(s.enc.Hex) + ":" + require.toString();
        } catch (e) {
          return;
        }
      }),
      (module.fakeFunction = function () {}),
      (module.getAnnotationType = function (e) {
        let module = e
          .toString()
          .match(
            /\[G((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)Annotation\]/
          );
        return (module && module[1]) || null;
      }),
      (module.getExtensionFromString = function (e, t) {
        var n = new RegExp("\\b" + t.join("|") + "\\b", "gim"),
          o = e.match(n);
        return o ? o[0] : null;
      }),
      (module.getFileNameWithoutExtension = function (e, t) {
        e.toLowerCase().endsWith(".".concat(t).toLowerCase()) &&
          (e = e.substr(0, e.lastIndexOf(".")));
        return e;
      }),
      (module.getFileSHA256Digest = async function (e) {
        e instanceof Blob
          ? (e = await e.arrayBuffer())
          : "string" == typeof e && (e = m(e));
        return s
          .SHA256(
            (function (e) {
              for (
                var module = new Uint8Array(e), require = [], o = 0;
                o < module.length;
                o += 4
              )
                require.push(
                  (module[o] << 24) | (module[o + 1] << 16) | (module[o + 2] << 8) | module[o + 3]
                );
              return s.lib.WordArray.create(require, module.length);
            })(e)
          )
          .toString();
      }),
      (module.getFileStateAndRole = function (e, t) {
        let require,
          o =
            arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        const i = t.getPrivateShareList();
        i.forEach((t) => {
          const {
            id: i,
            copy: a,
            inspect: r,
            comment: s,
            owner: l,
            access: c,
            edit: p,
          } = t;
          e.getUID() === i
            ? ((require = d.makeFromShare(t)),
              l
                ? Object.assign(o, {
                    owner: true,
                    edit: true,
                    inspect: true,
                    copy: true,
                    comment: !!u,
                    share: true,
                  })
                : Object.assign(o, {
                    owner: false,
                    share: false,
                    edit: p,
                    copy: a,
                    inspect: r,
                    comment: !!u && s,
                    sharing: c,
                  }))
            : c && Object.assign(o, { sharing: true });
        });
        const a = i.find((e) => e.owner);
        if (a) {
          const t = e.getUID() === a.id;
          (o.owner = t), (o.share = t);
        }
        const r = t.getPublicShare();
        r && r.access && ((o.isPrivate = false), (o.sharing = true));
        return (
          Object.assign(o, {
            isPrivate: i && i.filter((e) => !e.owner).length > 0,
          }),
          { state: o, role: require, publicShare: r }
        );
      }),
      (module.getSizeInfo = function (e) {
        var t = e;
        const require = 1e6,
          o = 1e3 * require;
        var i = { gb: 0, mb: 0, kb: 0 },
          a = Math.floor(t / o);
        a && ((i.gb = a), (t -= a * o));
        var r = Math.floor(t / require);
        r && ((i.mb = r), (t -= r * require));
        var s = Math.floor(t / 1e3);
        s && ((i.kb = s), (t -= 1e3 * s));
        return i;
      }),
      (module.getVersionFromString = function (e, t, n) {
        var o = e.match(t.join("|"));
        return o ? o[0] : n;
      }),
      (module.isDifferent = v),
      (module.isFunction = function (e) {
        if (undefined === e) return false;
        var t = Object.prototype.toString.call(e);
        return (
          [
            "[object Function]",
            "[object AsyncFunction]",
            "[object GeneratorFunction]",
            "[object Proxy]",
          ].indexOf(t) >= 0
        );
      }),
      (module.isPassiveSupported = function () {
        if (undefined === T) {
          T = false;
          try {
            const e = {
              get passive() {
                return (T = true), false;
              },
            };
            window.addEventListener("test", null, e),
              window.removeEventListener("test", null, e);
          } catch (e) {
            T = false;
          }
        }
        return T;
      }),
      (module.isSupportedScreenSize = function (e) {
        if (!e && i.GSystem.hardware === i.GSystem.Hardware.Tablet) {
          return (
            (window.screen.height > window.screen.width
              ? window.screen.height
              : window.screen.width) >= p
          );
        }
        return (e || window.screen.availWidth) >= p;
      }),
      (module.isSymbol = h),
      (module.isSymbolInstance = undefined),
      (module.iterateAroundIndex = function (e, t, n) {
        var o = 0,
          i = 0,
          a = e.length;
        for (; o < a; ) {
          var r = t + i;
          n(e[r], r),
            o++,
            i > 0 && t - i >= 0
              ? (i = -i)
              : i > 0
              ? i++
              : t - i + 1 < a
              ? (i = 1 - i)
              : i--;
        }
      }),
      (module.iterateEqualStyleLayers = function (e, t, n, o) {
        var a = [];
        if (n.length > 1) {
          for (var r = 0; r < n.length; r++) {
            var s = n[r],
              l = [];
            if ("fill" === e) l = s.getPaintLayers().getFillLayers();
            else if ("border" === e) l = s.getPaintLayers().getBorderLayers();
            else if ("effect" === e)
              for (
                var c = s.getEffects().getFirstChild();
                null !== c;
                c = c.getNext()
              )
                l.push(c);
            for (var d = 0; d < l.length; d++) {
              var u = l[d];
              (("fill" === e && i.GStylable.FillPaintLayer.equals(u, t)) ||
                ("border" === e && i.GStylable.BorderPaintLayer.equals(u, t)) ||
                ("effect" === e && i.GUtil.equals(u, t))) &&
                a.push(u);
            }
          }
          a.forEach(function (e) {
            o(e);
          });
        } else o(t);
      }),
      (module.mergeNode = _),
      (module.releaseChanges = function (e, t, n) {
        t &&
          t.forEach((e) => {
            e.endUpdate();
          });
        e && e._finishSelectionUpdate();
        for (
          var o = arguments.length, i = new Array(o > 3 ? o - 3 : 0), a = 3;
          a < o;
          a++
        )
          i[a - 3] = arguments[a];
        i &&
          i.forEach((e) => {
            e.endUpdate();
          });
        n && n.endBlockReferenceChanges();
      }),
      (module.removeAllSuffixWhichLikeExtension = function (e, t) {
        const require = ".".concat(t).toLowerCase();
        for (; e.toLowerCase().endsWith(require); )
          e = e.substr(0, e.lastIndexOf("."));
        return e;
      }),
      (module.resolveDocumentImages = function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        return new Promise(async (o, a) => {
          const r = (e) =>
            e === i.GImage.ImageStatus.Loaded ||
            e === i.GImage.ImageStatus.Error;
          let s = 0;
          if (
            (e.accept((e) => {
              e instanceof i.GImage && !r(e.getStatus()) && s++;
            }),
            s > 0)
          ) {
            let l = setTimeout(() => {
              (s > 0 || require.cancelled) &&
                (e.removeEventListener(i.GImage.StatusEvent, c), a());
            }, t);
            const c = (t) => {
              let { status: d } = t;
              r(d) &&
                --s <= 0 &&
                (l && (clearTimeout(l), (l = null)),
                e.removeEventListener(i.GImage.StatusEvent, c),
                o(true)),
                require.cancelled &&
                  (l && (clearTimeout(l), (l = null)),
                  e.removeEventListener(i.GImage.StatusEvent, c),
                  a());
            };
            e.addEventListener(i.GImage.StatusEvent, c);
          } else o(true);
        });
      }),
      (module.saveBBoxes = function (e) {
        var t = [];
        e.accept(function (e) {
          if (e instanceof i.GElement) {
            var require = e.getPaintBBox(false, null, true);
            t.push(require);
          }
        });
        for (var require = new Float64Array(4 * t.length), o = 0; o < t.length; ++o)
          for (var a = i.GRect.serialize(t[o]), r = 0; r < 4; ++r)
            require[4 * o + r] = a[r];
        (s = "Test_invisible-.dat"),
          (l = require),
          navigator.webkitTemporaryStorage.requestQuota(1e3, function (e) {
            var t = e;
            console.log("Requested bytes:", 1e3, "Granted bytes:", t),
              window.webkitRequestFileSystem(
                window.TEMPORARY,
                t,
                function (e) {
                  const t = e.root.toURL();
                  window.webkitResolveLocalFileSystemURL(
                    t,
                    function (e) {
                      e.getFile(s, { create: true }, function (e) {
                        e.createWriter(
                          function (e) {
                            (e.onwriteend = function () {
                              console.log("Write completed.");
                            }),
                              (e.onerror = function (e) {
                                console.log("Write failed: " + e.toString());
                              }),
                              e.seek(0);
                            var t = new Blob([l.buffer], {
                              type: "application/octet-stream",
                            });
                            e.write(t);
                          },
                          function (e) {
                            console.log(e);
                          }
                        );
                      });
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
                },
                function (e) {
                  console.log(e);
                }
              );
          });
        var s, l;
      }),
      (module.sleep = function (e) {
        return new Promise((t) => setTimeout(t, e));
      }),
      (module.stringToBase64String = function (e) {
        return l.fromByteArray(m(e));
      }),
      (module.throttle = function (e, t) {
        let require;
        return function () {
          const o = arguments;
          require || (e.apply(this, o), (require = true), setTimeout(() => (require = false), t));
        };
      }),
      (module.toCapitalize = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }),
      (module.toMD5 = function (e) {
        return s.MD5(e).toString();
      }),
      (module.trimStart = function (e, t) {
        if (!t || !t.length) return e;
        if (!e || !e.startsWith(t)) return e;
        return e.substring(t.length);
      }),
      (module.watchDog = undefined),
      require(58) /* module_58 */,
      require(19) /* module_19 */,
      require(180) /* module_180 */,
      require(181) /* module_181 */,
      require(30) /* module_30 */,
      require(8) /* module_8 */,
      require(356) /* module_356 */,
      require(20) /* module_20 */,
      require(3) /* module_3 */,
      require(271) /* module_271 */,
      require(71) /* module_71 */,
      require(151) /* module_151 */,
      require(134) /* module_134 */,
      require(1041) /* module_1041 */,
      require(218) /* module_218 */,
      require(189) /* module_189 */,
      require(190) /* module_190 */,
      require(191) /* module_191 */,
      require(192) /* module_192 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(13) /* module_13 */,
      require(32) /* module_32 */,
      require(38) /* module_38 */,
      require(97) /* module_97 */,
      require(33) /* module_33 */;
    var i = require(1) /* module */,
      a = o(require(84) /* GAnnotation */),
      r = require(1042) /* module_1042 */;
    const s = require(1043) /* module_1043 */;
    var l = require(250) /* module_250 */,
      c = require(44) /* GSystemDialog */;
    const d = require(433) /* module_433 */,
      { HAS_ANNOTATIONS: u, MIN_SUPPORTED_SCREEN_SIZE: p } = require(10) /* module_10 */;
    module.watchDog = {
      trap: (e, t, n, o) => (i) =>
        ((e, t, n, o, i) =>
          gDesigner.isEnabledProFeatures(i) || (n && n(e))
            ? t
              ? t(e)
              : undefined
            : (o && o(e),
              e.stopImmediatePropagation(),
              e.preventDefault(),
              gDesigner.handlePROFeatureInterruption(),
              false))(i, e, t, n, o),
      check: (e, t) => (gDesigner.isEnabledProFeatures() ? e : t),
    };
    module._tryAndCatch = async (e) => {
      try {
        await e();
      } catch (e) {
        console.log(e);
      }
    };
    const g = s.enc.Latin1.parse(
      s.enc.Latin1.stringify(
        s.SHA256("#a09j!@10jas-109827s*%#1098XAapoc-9908#!123")
      )
    );
    function h(e, t) {
      const require = (e) => e && e instanceof i.GSymbol && (!t || !e.isMaster());
      return !!require(e) || !!e.findParent(require);
    }
    function f(e) {
      return new TextDecoder("utf-8").decode(e);
    }
    function m(e) {
      return new TextEncoder("utf-8").encode(e);
    }
    module.isSymbolInstance = (e) => h(e, true);
    function y(e, t) {
      let require =
        arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [];
      const o = (e) =>
          Object.keys(e)
            .filter(
              (e) => (e.startsWith("$") || e.startsWith("@")) && !require.includes(e)
            )
            .map((e) => e.slice(1)),
        a = o(e),
        r = o(t);
      return !i.GUtil.equals(a, r) || !e.arePropertiesEqual(t, a);
    }
    function v(e, t, n) {
      if (
        (n || (n = ["$lmd", "$storedUrl", "$__ids"]),
        !(e instanceof t.constructor))
      )
        return true;
      if (e.hasMixin(i.GNode.Properties) !== t.hasMixin(i.GNode.Properties))
        return true;
      if (e.hasMixin(i.GNode.Properties) && y(e, t, n)) return true;
      if (e.hasMixin(i.GElement.Stylable) !== t.hasMixin(i.GElement.Stylable))
        return true;
      if (e.hasMixin(i.GElement.Stylable)) {
        const o = e.getEffects(),
          i = t.getEffects();
        if (Boolean(o) !== Boolean(i)) return true;
        if (o && v(o, i, n)) return true;
        const a = e.getPaintLayers(),
          r = t.getPaintLayers();
        if (Boolean(a) !== Boolean(r)) return true;
        if (a && v(a, r, n)) return true;
      }
      if (e.hasMixin(i.GNode.Container) !== t.hasMixin(i.GNode.Container))
        return true;
      if (e instanceof i.GPathBase != t instanceof i.GPathBase) return true;
      if (e instanceof i.GPathBase) {
        var o = e.getAnchorPoints(),
          a = o.getChildren(),
          r = t.getAnchorPoints(),
          s = r.getChildren();
        if (a.length !== s.length) return true;
        for (var l = 0; l < a.length; l++) {
          var c = o.getChildByIndex(l),
            d = r.getChildByIndex(l);
          if (c ^ d) return true;
          if (y(c, d, n)) return true;
        }
      }
      if (e.hasMixin(i.GNode.Container)) {
        const o = e.getChildren(),
          i = t.getChildren();
        if (o.length !== i.length) return true;
        for (let e = 0; e < o.length; e++) if (v(o[e], i[e], n)) return true;
      }
      return false;
    }
    function _(e, t) {
      try {
        w(e, t), C(e, t), x(e, t), b(e, t);
      } catch (e) {
        console.log(e, e && e.stack);
      }
    }
    function b(e, t) {
      const require = (function (e) {
        const t = [];
        return Object.keys(e)
          .filter((e) => e.startsWith("$") && !t.includes(e))
          .map((e) => e.slice(1));
      })(t);
      e.setProperties(require, t.getProperties(require));
    }
    function w(e, t) {
      if (e.hasMixin(i.GElement.Stylable)) {
        var require = e.getPaintLayers(),
          o = t.getPaintLayers(),
          r = require.getBorderLayers(),
          s = o.getBorderLayers(),
          l = require.getFillLayers(),
          c = o.getFillLayers();
        e.hasMixin(a.default)
          ? (s.length && r.length && r[0].assignFrom(s[0]),
            c.length && l.length && l[0].assignFrom(c[0]))
          : (r.forEach((e) => {
              var t = s.find((t) => t.getId() === e.getId());
              t && e.assignFrom(t);
            }),
            l.forEach((e) => {
              var t = c.find((t) => t.getId() === e.getId());
              t && e.assignFrom(t);
            }));
      }
    }
    function C(e, t) {
      if (e instanceof i.GPathBase) {
        var require = e.getAnchorPoints();
        require.beginUpdate(),
          require.clearChildren(),
          require.deserialize(t.getAnchorPoints().serialize()),
          require.endUpdate();
      }
    }
    function x(e, t) {
      if (!e.hasMixin(i.GNode.Container)) return;
      let require = e.getChildren(),
        o = t.getChildren();
      S(e, t), E(e, t), A(require, o);
    }
    function S(e, t) {
      let require = e.getChildren(),
        o = t.getChildren();
      require.forEach((t) => {
        o.some((e) => e.getId() === t.getId()) || e.removeChild(t);
      });
    }
    function E(e, t) {
      for (var require = t.getLastChild(); null !== require; require = require.getPrevious()) {
        if (e.getChildren().some((e) => e.getId() === require.getId())) continue;
        let t = require.getNext(),
          o = t && e.getChildren().find((e) => e.getId() === t.getId());
        e.insertChild(require.clone(), o);
      }
    }
    function A(e, t) {
      e.forEach((e) => {
        let require = t.find((t) => t.getId() === e.getId());
        require && v(e, require) && _(e, require);
      });
    }
    let T;
    module.chaining = (e, t) => () => e() && t();
  }