/**
 * Webpack Module #40
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(91) /* polyfill_String_trim */, require(842) /* polyfill_String_trimStart */;
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
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
      (module.blockChanges = function (e, t, n, _interopRequireDefault) {
        n && n.startBlockReferenceChanges();
        _interopRequireDefault && _interopRequireDefault.beginUpdate();
        e && e._beginSelectionUpdate();
        t &&
          t.forEach((e) => {
            e.beginUpdate();
          });
      }),
      (module.buildDialogDocumentHasUpdates = function (e, t, n, _interopRequireDefault) {
        return GSystemDialog.custom({
          subtitle: GCore.GLocale.get(
            new GCore.GLocaleKey("GSaveAction", "has-new-version-when-save-message")
          ),
          className: "g-has-updates-warning-dialog",
          icon: "info",
          closeable: false,
          buttons: [
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.cancel")
              ),
              closeOnClick: true,
              shortcut: GSystemDialog.Shortcut.Esc,
              position: "left",
              onclick: () => {
                _interopRequireDefault && _interopRequireDefault.call(this, e);
              },
            },
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey(
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
              label: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GSaveAction",
                  "has-new-version-when-save-save"
                )
              ),
              className: "primary",
              closeOnClick: true,
              shortcut: GSystemDialog.Shortcut.Enter,
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
          const _interopRequireDefault = arguments;
          let GCore = () => {
            (require = 0), e.apply(this, _interopRequireDefault);
          };
          require && clearTimeout(require), (require = setTimeout(GCore, t));
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
            _interopRequireDefault = s.enc.Hex.parse(require),
            GCore = module.join(":");
          return s.AES.decrypt(GCore, g, {
            iv: _interopRequireDefault,
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
          _interopRequireDefault = e.match(n);
        return _interopRequireDefault ? _interopRequireDefault[0] : null;
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
                var module = new Uint8Array(e), require = [], _interopRequireDefault = 0;
                _interopRequireDefault < module.length;
                _interopRequireDefault += 4
              )
                require.push(
                  (module[_interopRequireDefault] << 24) | (module[_interopRequireDefault + 1] << 16) | (module[_interopRequireDefault + 2] << 8) | module[_interopRequireDefault + 3]
                );
              return s.lib.WordArray.create(require, module.length);
            })(e)
          )
          .toString();
      }),
      (module.getFileStateAndRole = function (e, t) {
        let require,
          _interopRequireDefault =
            arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        const GCore = t.getPrivateShareList();
        GCore.forEach((t) => {
          const {
            id: GCore,
            copy: GAnnotation,
            inspect: r,
            comment: s,
            owner: l,
            access: GSystemDialog,
            edit: p,
          } = t;
          e.getUID() === GCore
            ? ((require = d.makeFromShare(t)),
              l
                ? Object.assign(_interopRequireDefault, {
                    owner: true,
                    edit: true,
                    inspect: true,
                    copy: true,
                    comment: !!u,
                    share: true,
                  })
                : Object.assign(_interopRequireDefault, {
                    owner: false,
                    share: false,
                    edit: p,
                    copy: GAnnotation,
                    inspect: r,
                    comment: !!u && s,
                    sharing: GSystemDialog,
                  }))
            : GSystemDialog && Object.assign(_interopRequireDefault, { sharing: true });
        });
        const GAnnotation = GCore.find((e) => e.owner);
        if (GAnnotation) {
          const t = e.getUID() === GAnnotation.id;
          (_interopRequireDefault.owner = t), (_interopRequireDefault.share = t);
        }
        const r = t.getPublicShare();
        r && r.access && ((_interopRequireDefault.isPrivate = false), (_interopRequireDefault.sharing = true));
        return (
          Object.assign(_interopRequireDefault, {
            isPrivate: GCore && GCore.filter((e) => !e.owner).length > 0,
          }),
          { state: _interopRequireDefault, role: require, publicShare: r }
        );
      }),
      (module.getSizeInfo = function (e) {
        var t = e;
        const require = 1e6,
          _interopRequireDefault = 1e3 * require;
        var GCore = { gb: 0, mb: 0, kb: 0 },
          GAnnotation = Math.floor(t / _interopRequireDefault);
        GAnnotation && ((GCore.gb = GAnnotation), (t -= GAnnotation * _interopRequireDefault));
        var r = Math.floor(t / require);
        r && ((GCore.mb = r), (t -= r * require));
        var s = Math.floor(t / 1e3);
        s && ((GCore.kb = s), (t -= 1e3 * s));
        return GCore;
      }),
      (module.getVersionFromString = function (e, t, n) {
        var _interopRequireDefault = e.match(t.join("|"));
        return _interopRequireDefault ? _interopRequireDefault[0] : n;
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
        if (!e && GCore.GSystem.hardware === GCore.GSystem.Hardware.Tablet) {
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
        var _interopRequireDefault = 0,
          GCore = 0,
          GAnnotation = e.length;
        for (; _interopRequireDefault < GAnnotation; ) {
          var r = t + GCore;
          n(e[r], r),
            _interopRequireDefault++,
            GCore > 0 && t - GCore >= 0
              ? (GCore = -GCore)
              : GCore > 0
              ? GCore++
              : t - GCore + 1 < GAnnotation
              ? (GCore = 1 - GCore)
              : GCore--;
        }
      }),
      (module.iterateEqualStyleLayers = function (e, t, n, _interopRequireDefault) {
        var GAnnotation = [];
        if (n.length > 1) {
          for (var r = 0; r < n.length; r++) {
            var s = n[r],
              l = [];
            if ("fill" === e) l = s.getPaintLayers().getFillLayers();
            else if ("border" === e) l = s.getPaintLayers().getBorderLayers();
            else if ("effect" === e)
              for (
                var GSystemDialog = s.getEffects().getFirstChild();
                null !== GSystemDialog;
                GSystemDialog = GSystemDialog.getNext()
              )
                l.push(GSystemDialog);
            for (var d = 0; d < l.length; d++) {
              var u = l[d];
              (("fill" === e && GCore.GStylable.FillPaintLayer.equals(u, t)) ||
                ("border" === e && GCore.GStylable.BorderPaintLayer.equals(u, t)) ||
                ("effect" === e && GCore.GUtil.equals(u, t))) &&
                GAnnotation.push(u);
            }
          }
          GAnnotation.forEach(function (e) {
            _interopRequireDefault(e);
          });
        } else _interopRequireDefault(t);
      }),
      (module.mergeNode = _),
      (module.releaseChanges = function (e, t, n) {
        t &&
          t.forEach((e) => {
            e.endUpdate();
          });
        e && e._finishSelectionUpdate();
        for (
          var _interopRequireDefault = arguments.length, GCore = new Array(_interopRequireDefault > 3 ? _interopRequireDefault - 3 : 0), GAnnotation = 3;
          GAnnotation < _interopRequireDefault;
          GAnnotation++
        )
          GCore[GAnnotation - 3] = arguments[GAnnotation];
        GCore &&
          GCore.forEach((e) => {
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
        return new Promise(async (_interopRequireDefault, GAnnotation) => {
          const r = (e) =>
            e === GCore.GImage.ImageStatus.Loaded ||
            e === GCore.GImage.ImageStatus.Error;
          let s = 0;
          if (
            (e.accept((e) => {
              e instanceof GCore.GImage && !r(e.getStatus()) && s++;
            }),
            s > 0)
          ) {
            let l = setTimeout(() => {
              (s > 0 || require.cancelled) &&
                (e.removeEventListener(GCore.GImage.StatusEvent, GSystemDialog), GAnnotation());
            }, t);
            const GSystemDialog = (t) => {
              let { status: d } = t;
              r(d) &&
                --s <= 0 &&
                (l && (clearTimeout(l), (l = null)),
                e.removeEventListener(GCore.GImage.StatusEvent, GSystemDialog),
                _interopRequireDefault(true)),
                require.cancelled &&
                  (l && (clearTimeout(l), (l = null)),
                  e.removeEventListener(GCore.GImage.StatusEvent, GSystemDialog),
                  GAnnotation());
            };
            e.addEventListener(GCore.GImage.StatusEvent, GSystemDialog);
          } else _interopRequireDefault(true);
        });
      }),
      (module.saveBBoxes = function (e) {
        var t = [];
        e.accept(function (e) {
          if (e instanceof GCore.GElement) {
            var require = e.getPaintBBox(false, null, true);
            t.push(require);
          }
        });
        for (var require = new Float64Array(4 * t.length), _interopRequireDefault = 0; _interopRequireDefault < t.length; ++_interopRequireDefault)
          for (var GAnnotation = GCore.GRect.serialize(t[_interopRequireDefault]), r = 0; r < 4; ++r)
            require[4 * _interopRequireDefault + r] = GAnnotation[r];
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
          const _interopRequireDefault = arguments;
          require || (e.apply(this, _interopRequireDefault), (require = true), setTimeout(() => (require = false), t));
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
      require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(180) /* module_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(356) /* module_356 */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(271) /* polyfill_String_endsWith */,
      require(71) /* polyfill_String_includes */,
      require(151) /* module_151 */,
      require(134) /* polyfill_String_startsWith */,
      require(1041) /* module_1041 */,
      require(218) /* module_218 */,
      require(189) /* module_189 */,
      require(190) /* module_190 */,
      require(191) /* module_191 */,
      require(192) /* module_192 */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(97) /* stub_requires_684 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* module */,
      GAnnotation = _interopRequireDefault(require(84) /* GAnnotation */),
      r = require(1042) /* module_1042 */;
    const s = require(1043) /* module_1043 */;
    var l = require(250) /* module_250 */,
      GSystemDialog = require(44) /* GSystemDialog */;
    const d = require(433) /* module_433 */,
      { HAS_ANNOTATIONS: u, MIN_SUPPORTED_SCREEN_SIZE: p } = require(10) /* AppSettings */;
    module.watchDog = {
      trap: (e, t, n, _interopRequireDefault) => (GCore) =>
        ((e, t, n, _interopRequireDefault, GCore) =>
          gDesigner.isEnabledProFeatures(GCore) || (n && n(e))
            ? t
              ? t(e)
              : undefined
            : (_interopRequireDefault && _interopRequireDefault(e),
              e.stopImmediatePropagation(),
              e.preventDefault(),
              gDesigner.handlePROFeatureInterruption(),
              false))(GCore, e, t, n, _interopRequireDefault),
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
      const require = (e) => e && e instanceof GCore.GSymbol && (!t || !e.isMaster());
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
      const _interopRequireDefault = (e) =>
          Object.keys(e)
            .filter(
              (e) => (e.startsWith("$") || e.startsWith("@")) && !require.includes(e)
            )
            .map((e) => e.slice(1)),
        GAnnotation = _interopRequireDefault(e),
        r = _interopRequireDefault(t);
      return !GCore.GUtil.equals(GAnnotation, r) || !e.arePropertiesEqual(t, GAnnotation);
    }
    function v(e, t, n) {
      if (
        (n || (n = ["$lmd", "$storedUrl", "$__ids"]),
        !(e instanceof t.constructor))
      )
        return true;
      if (e.hasMixin(GCore.GNode.Properties) !== t.hasMixin(GCore.GNode.Properties))
        return true;
      if (e.hasMixin(GCore.GNode.Properties) && y(e, t, n)) return true;
      if (e.hasMixin(GCore.GElement.Stylable) !== t.hasMixin(GCore.GElement.Stylable))
        return true;
      if (e.hasMixin(GCore.GElement.Stylable)) {
        const _interopRequireDefault = e.getEffects(),
          GCore = t.getEffects();
        if (Boolean(_interopRequireDefault) !== Boolean(GCore)) return true;
        if (_interopRequireDefault && v(_interopRequireDefault, GCore, n)) return true;
        const GAnnotation = e.getPaintLayers(),
          r = t.getPaintLayers();
        if (Boolean(GAnnotation) !== Boolean(r)) return true;
        if (GAnnotation && v(GAnnotation, r, n)) return true;
      }
      if (e.hasMixin(GCore.GNode.Container) !== t.hasMixin(GCore.GNode.Container))
        return true;
      if (e instanceof GCore.GPathBase != t instanceof GCore.GPathBase) return true;
      if (e instanceof GCore.GPathBase) {
        var _interopRequireDefault = e.getAnchorPoints(),
          GAnnotation = _interopRequireDefault.getChildren(),
          r = t.getAnchorPoints(),
          s = r.getChildren();
        if (GAnnotation.length !== s.length) return true;
        for (var l = 0; l < GAnnotation.length; l++) {
          var GSystemDialog = _interopRequireDefault.getChildByIndex(l),
            d = r.getChildByIndex(l);
          if (GSystemDialog ^ d) return true;
          if (y(GSystemDialog, d, n)) return true;
        }
      }
      if (e.hasMixin(GCore.GNode.Container)) {
        const _interopRequireDefault = e.getChildren(),
          GCore = t.getChildren();
        if (_interopRequireDefault.length !== GCore.length) return true;
        for (let e = 0; e < _interopRequireDefault.length; e++) if (v(_interopRequireDefault[e], GCore[e], n)) return true;
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
      if (e.hasMixin(GCore.GElement.Stylable)) {
        var require = e.getPaintLayers(),
          _interopRequireDefault = t.getPaintLayers(),
          r = require.getBorderLayers(),
          s = _interopRequireDefault.getBorderLayers(),
          l = require.getFillLayers(),
          GSystemDialog = _interopRequireDefault.getFillLayers();
        e.hasMixin(GAnnotation.default)
          ? (s.length && r.length && r[0].assignFrom(s[0]),
            GSystemDialog.length && l.length && l[0].assignFrom(GSystemDialog[0]))
          : (r.forEach((e) => {
              var t = s.find((t) => t.getId() === e.getId());
              t && e.assignFrom(t);
            }),
            l.forEach((e) => {
              var t = GSystemDialog.find((t) => t.getId() === e.getId());
              t && e.assignFrom(t);
            }));
      }
    }
    function C(e, t) {
      if (e instanceof GCore.GPathBase) {
        var require = e.getAnchorPoints();
        require.beginUpdate(),
          require.clearChildren(),
          require.deserialize(t.getAnchorPoints().serialize()),
          require.endUpdate();
      }
    }
    function x(e, t) {
      if (!e.hasMixin(GCore.GNode.Container)) return;
      let require = e.getChildren(),
        _interopRequireDefault = t.getChildren();
      S(e, t), E(e, t), A(require, _interopRequireDefault);
    }
    function S(e, t) {
      let require = e.getChildren(),
        _interopRequireDefault = t.getChildren();
      require.forEach((t) => {
        _interopRequireDefault.some((e) => e.getId() === t.getId()) || e.removeChild(t);
      });
    }
    function E(e, t) {
      for (var require = t.getLastChild(); null !== require; require = require.getPrevious()) {
        if (e.getChildren().some((e) => e.getId() === require.getId())) continue;
        let t = require.getNext(),
          _interopRequireDefault = t && e.getChildren().find((e) => e.getId() === t.getId());
        e.insertChild(require.clone(), _interopRequireDefault);
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