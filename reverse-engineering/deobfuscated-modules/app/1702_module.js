/**
 * Webpack Module #1702
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(193) /* polyfill_Object_keys */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */;
    require(1259) /* module_1259 */;
    var r = _interopRequireDefault(require(1278) /* module_1278 */),
      s = {
        value: function (e) {
          var t = $(this),
            n = t.data("ginputbox");
          function _interopRequireDefault(e) {
            if (n) {
              var t = null;
              "undefined" != typeof gDesigner &&
                gDesigner.getActiveDocument() &&
                (t = gDesigner
                  .getActiveDocument()
                  .getScene()
                  .getProperty("ut"));
              var _interopRequireDefault =
                n.options && n.options.postfix !== t ? n.options.postfix : null;
              if (e && e.length && n && _interopRequireDefault) {
                var GCore = e.lastIndexOf(_interopRequireDefault);
                GCore >= 0 && (e = e.substr(0, GCore));
              }
            }
            return e;
          }
          function GEditor(e) {
            if (n) {
              var t = "" === (e = _interopRequireDefault(e)),
                GEditor = t ? null : GCore.GLength.parseEquationValue(e),
                r = n.options ? n.options.minValue : null,
                s = n.options ? n.options.maxValue : null;
              ("number" != typeof r && "number" != typeof s) ||
                (("number" == typeof GEditor && isFinite(GEditor)) ||
                (t && n.options.allowEmptyValue)
                  ? "number" == typeof r && null !== GEditor && GEditor < r
                    ? (e = r.toString())
                    : "number" == typeof s &&
                      null !== GEditor &&
                      GEditor > s &&
                      (e = s.toString())
                  : (e = "number" == typeof r ? r.toString() : s.toString()));
            }
            return e;
          }
          function r(e) {
            if (
              ((e || 0 === e) && (e = (e = e.toString()).replace(",", ".")), n)
            ) {
              if (
                ((e = GEditor(e)),
                n.options.allowEmptyValue || e || (e = "0"),
                n.options.replace &&
                  null !== n.options.replace.oldValue &&
                  e === n.options.replace.oldValue)
              )
                return t.val(n.options.replace.newValue);
              var _interopRequireDefault = null;
              "undefined" != typeof gDesigner &&
                gDesigner.getActiveDocument() &&
                (_interopRequireDefault = gDesigner
                  .getActiveDocument()
                  .getScene()
                  .getProperty("ut"));
              var GCore =
                n.options && n.options.postfix !== _interopRequireDefault ? n.options.postfix : null;
              e &&
                e.length &&
                GCore &&
                e.substr(e.length - GCore.length) !== GCore &&
                (e += GCore);
            }
            var r = t[0];
            return r && (r.value = e), t;
          }
          if (arguments.length) return r(e);
          var s = t.val();
          s = _interopRequireDefault(s);
          var l = "" === s,
            c = l ? null : GCore.GLength.parseEquationValue(s);
          return (
            (s = GEditor(s)),
            (n &&
              (n.options.allowEmptyValue ||
                (s && null !== c && isFinite(c)))) ||
              (s = "0"),
            s
          );
        },
        increment: function (e, t, n) {
          var _interopRequireDefault = $(this),
            GEditor = _interopRequireDefault.data("ginputbox"),
            r = parseFloat(GCore.GUtil.parseNumber(s.value.call(this)));
          if ("number" == typeof r && !isNaN(r) && GEditor) {
            var l,
              c = e
                ? GEditor.options.fastIncrementValue
                : t && "%" !== GEditor.options.postfix
                ? GEditor.options.slowIncrementValue
                : GEditor.options.incrementValue,
              d = 2;
            "undefined" != typeof gDesigner &&
              gDesigner.getActiveDocument() &&
              ((l = gDesigner.getActiveDocument().getScene().getProperty("ut")),
              (d = gDesigner
                .getActiveDocument()
                .getScene()
                .getOptimalDecimalsCount())),
              (l !== GCore.GLength.Unit.IN && l !== GCore.GLength.Unit.CM) ||
                (GEditor.options.postfix !== l && null !== GEditor.options.postfix) ||
                GEditor.fixedIncrement ||
                (c *= 0.1),
              c < 1 && 0 == d && (c = 1),
              n ? (r -= c) : (r += c),
              s.value.call(this, GCore.GUtil.formatNumber(r, d)),
              _interopRequireDefault.change();
          }
        },
        mousemoveIncrement: function (e, t, n, _interopRequireDefault) {
          var GEditor = $(this),
            r = GEditor.data("ginputbox");
          if ("number" == typeof n && !isNaN(n) && r) {
            var l,
              c = e
                ? r.options.fastIncrementValue * _interopRequireDefault
                : t && "%" !== r.options.postfix
                ? _interopRequireDefault * r.options.slowIncrementValue
                : _interopRequireDefault,
              d = 2;
            "undefined" != typeof gDesigner &&
              gDesigner.getActiveDocument() &&
              ((l = gDesigner.getActiveDocument().getScene().getProperty("ut")),
              (d = gDesigner
                .getActiveDocument()
                .getScene()
                .getOptimalDecimalsCount())),
              (l !== GCore.GLength.Unit.IN && l !== GCore.GLength.Unit.CM) ||
                (r.options.postfix !== l && null !== r.options.postfix) ||
                r.fixedIncrement ||
                (c *= 0.1),
              c < 1 && 0 == d && (c = 1);
            var u = n + c;
            return (
              s.value.call(this, GCore.GUtil.formatNumber(u, d)), GEditor.change(), u
            );
          }
        },
        onFocusIn: function () {
          var e = $(this);
          (e.data("ginputbox").receivingFocus = true),
            e.css("border", "1px solid rgba(215, 46, 99, 0.3)");
        },
        onFocusOut: function () {
          var e = $(this);
          (e.data("ginputbox").insideClicked = false),
            (e.data("ginputbox").leftMouseMoved = false),
            e.css("border", "");
        },
        requestFocus: function () {
          var e = $(this),
            t = e.data("ginputbox");
          t.receivingFocus &&
            (t.options.selectOnFocus && e.select(), (t.receivingFocus = false));
        },
        onMouseEnter: function () {
          var e = $(this),
            t = e.data("ginputbox");
          !t.insideClicked &&
            t.options.mousemoveIncrement &&
            (e.css("cursor", "url(assets/cursor/cursor-scrub.svg) 16 16, auto"),
            e.css("border", "1px solid rgba(215, 46, 99, 0.3)"));
        },
        onMouseLeave: function () {
          var e = $(this),
            t = e.data("ginputbox");
          t.leftMouseMoved ||
            t.insideClicked ||
            !t.options.mousemoveIncrement ||
            (e.css("cursor", ""), e.css("border", ""));
        },
        leftMouseDown: function (e) {
          var t = $(this),
            n = t.data("ginputbox");
          if (
            ((n.strValue = t.val()),
            !n.insideClicked && n.options.mousemoveIncrement)
          ) {
            t.css("border", "1px solid rgba(215, 46, 99, 0.3)"),
              (n.leftMouseMoved = false);
            var _interopRequireDefault = parseFloat(GCore.GUtil.parseNumber(s.value.call(this)));
            "" === n.strValue && isNaN(_interopRequireDefault) && (_interopRequireDefault = 0);
            var r = null,
              l = t.scrollParent();
            "undefined" != typeof gDesigner &&
              l &&
              gDesigner.isTouchDevice() &&
              l.css("overflow-y", "hidden");
            var c = function (e) {
                e.originalEvent.cancelable && e.preventDefault();
                var GCore = 0,
                  l =
                    e.pageY ||
                    (e.originalEvent.changedTouches &&
                      e.originalEvent.changedTouches[0] &&
                      e.originalEvent.changedTouches[0].pageY);
                null === r
                  ? ($("html").css(
                      "cursor",
                      "url(assets/cursor/cursor-scrub.svg) 16 16, auto"
                    ),
                    $("html").css("user-select", "none"),
                    $("body").css("pointer-events", "none"),
                    (n.leftMouseMoved = true),
                    (r = l))
                  : ((GCore = r - l), (r = l)),
                  (_interopRequireDefault = s.mousemoveIncrement.call(
                    t[0],
                    GEditor.GPlatform.modifiers.shiftKey || e.shiftKey,
                    GEditor.GPlatform.modifiers.optionKey || e.altKey,
                    _interopRequireDefault,
                    GCore
                  ));
              },
              d = function (e) {
                $("body").css("pointer-events", ""),
                  $("html").css("cursor", ""),
                  $("html").css("user-select", ""),
                  $("html").unbind("mousemove", c),
                  $("html").unbind("mouseup", d),
                  t.off("touchmove", c),
                  "undefined" != typeof gDesigner &&
                    !gDesigner.isTouchDevice() &&
                    n.leftMouseMoved &&
                    t.blur(),
                  "undefined" != typeof gDesigner &&
                    gDesigner.isTouchDevice() &&
                    (l && l.css("overflow-y", "auto"),
                    t.is(":focus") || t.css("border", ""));
              };
            t.on("touchmove", c),
              $("html").bind("mousemove", c),
              $("html").bind("mouseup", d);
          }
        },
        leftMouseUp: function () {
          var e = $(this),
            t = e.data("ginputbox");
          t.options.mousemoveIncrement &&
            (t.leftMouseMoved || ((t.insideClicked = true), e.css("cursor", "")),
            "undefined" != typeof gDesigner &&
              gDesigner.isTouchDevice() &&
              t.leftMouseMoved &&
              t.strValue === e.val() &&
              e.trigger("focus"));
        },
        isInit: function () {
          return !!$(this).data("ginputbox");
        },
        init: function (e) {
          return (
            this.each(function () {
              var t = this,
                n = $(this);
              (e = $.extend(
                {
                  selectOnFocus: true,
                  triggerChangeOnEnter: true,
                  keyIncrement: true,
                  wheelIncrement: true,
                  mousemoveIncrement: true,
                  incrementValue: 1,
                  fastIncrementValue: 10,
                  slowIncrementValue: 0.1,
                  fixedIncrement: false,
                  minValue: null,
                  maxValue: null,
                  postfix: null,
                },
                e
              )),
                n
                  .data("ginputbox", {
                    options: e,
                    receivingFocus: false,
                    enterKeyValue: undefined,
                    insideClicked: false,
                    leftMouseMoved: false,
                    strValue: undefined,
                  })
                  .prop("draggable", false),
                e.created ||
                  n
                    .on("change", function (e) {
                      s.value.call(t, n.val());
                    })
                    .on("focusin", function (e) {
                      s.onFocusIn.call(t);
                    })
                    .on("focusout", function (e) {
                      s.onFocusOut.call(t);
                    })
                    .on("click", function (e) {
                      s.requestFocus.call(t);
                    })
                    .on("wheel", function (e) {
                      if (
                        n.data("ginputbox").options.wheelIncrement &&
                        n.is(":focus")
                      ) {
                        e.preventDefault();
                        var _interopRequireDefault =
                          0 != e.originalEvent.deltaX
                            ? e.originalEvent.deltaX
                            : e.originalEvent.deltaY;
                        s.increment.call(
                          t,
                          GEditor.GPlatform.modifiers.shiftKey || e.shiftKey,
                          GEditor.GPlatform.modifiers.optionKey || e.altKey,
                          _interopRequireDefault > 0
                        );
                      }
                    })
                    .on("keydown", function (e) {
                      var _interopRequireDefault = n.data("ginputbox");
                      (38 != e.keyCode && 40 !== e.keyCode) ||
                        !_interopRequireDefault.options.keyIncrement ||
                        (e.preventDefault(),
                        s.increment.call(
                          t,
                          GEditor.GPlatform.modifiers.shiftKey || e.shiftKey,
                          GEditor.GPlatform.modifiers.optionKey || e.altKey,
                          40 === e.keyCode
                        ),
                        n.trigger("focus")),
                        13 === e.keyCode &&
                          _interopRequireDefault.options.triggerChangeOnEnter &&
                          n.blur();
                    })
                    .on("mouseenter", function (e) {
                      r.default.isEnabled() &&
                        (e.preventDefault(), s.onMouseEnter.call(t));
                    })
                    .on("mouseleave", function (e) {
                      r.default.isEnabled() && s.onMouseLeave.call(t);
                    })
                    .on("mousedown", function (e) {
                      r.default.isEnabled() &&
                        1 === e.which &&
                        (s.leftMouseDown.call(t, e),
                        $(this)
                          .parents(".properties-panel")
                          .addClass("noscroll"));
                    })
                    .on("mouseup", function (e) {
                      r.default.isEnabled() &&
                        1 === e.which &&
                        (s.leftMouseUp.call(t),
                        $(this)
                          .parents(".properties-panel")
                          .removeClass("noscroll"));
                    });
            }),
            this
          );
        },
      };
    $.fn.gInputBox = function (e) {
      return s[e]
        ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : s.init.apply(this, arguments);
    };
  }