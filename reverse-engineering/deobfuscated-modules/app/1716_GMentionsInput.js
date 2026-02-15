/**
 * Webpack Module #1716
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(57) /* polyfill_parseInt */,
      require(356) /* polyfill_RegExp_constructor */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(71) /* polyfill_String_includes */,
      require(34) /* polyfill_String_replace */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var DataModule_883 = _interopRequireDefault(require(883) /* DataModule_883 */),
      GRegex = require(263) /* Exports_GRegex */,
      r = 8,
      s = 9,
      l = 13,
      c = 37,
      d = 38,
      u = 39,
      p = 40,
      g = 36,
      h = 35,
      f = {
        triggerChar: "@",
        onDataRequest: $.noop,
        minChars: 1,
        allowRepeat: false,
        showAvatars: true,
        elastic: true,
        defaultValue: "",
        onCaret: true,
        classes: { autoCompleteItemActive: "active" },
        templates: {
          wrapper: '<div class="mentions-input-box"></div>',
          autocompleteList: '<div class="mentions-autocomplete-list"></div>',
          autocompleteListItem:
            '<li data-ref-id="<%=id%>" data-ref-type="<%=type%>" data-display="<%=display%>" data-style="<%=fontWeight%>"><%=content%></li>',
          autocompleteListItemAvatar: '<img src="<%=avatar%>"/>',
          autocompleteListItemLetterAvatar:
            '<div class="avatar g-user-commit-avatar"><%=letterAvatarsValue%></div>',
          autocompleteListItemIcon: '<div class="icon <%=icon%>"></div>',
          mentionsOverlay: '<div class="mentions"><div></div></div>',
          mentionItemSyntax: "@[<%=value%>](<%=type%>:<%=id%>)",
          mentionItemHighlight:
            '<strong><span id="<%=id%>"><%=value%></span></strong>',
        },
      },
      m = 0,
      y = function (e) {
        return $("<div>").text(e).html();
      },
      v = function (e) {
        return e.replace(GRegex.GRegex.String.MentionInputRegexpEncode, "\\$1");
      },
      _ = function (e, t, n) {
        return !t || (t instanceof Array && !t.length) || !n
          ? e
          : e.replace(
              new RegExp(
                GRegex.GRegex.String.MentionInputHighlightRegString.replace(
                  "<%=term%>",
                  t
                ),
                "gi"
              ),
              "<b>$1</b>"
            );
      },
      b = function (e, t) {
        if (e.createTextRange) {
          var require = e.createTextRange();
          require.move("character", t), require.select();
        } else
          e.selectionStart ? (e.focus(), e.setSelectionRange(t, t)) : e.focus();
      },
      w = function (e) {
        return e.replace(GRegex.GRegex.String.MentionInputRtrim, "");
      },
      C = function (e) {
        let module = ++m + "";
        return e ? e + module : module;
      },
      x = function (e, t) {
        return (
          t.forEach((t) => {
            e = e.replace(t.key, t.value);
          }),
          e
        );
      },
      S = function (e) {
        var t,
          n,
          _interopRequireDefault,
          GRegex,
          m,
          S,
          E = [],
          A = {},
          T = [],
          G = "";
        function P() {
          var n = I(),
            _interopRequireDefault = [];
          E.forEach((e) => {
            _interopRequireDefault.some((t) => t.name === e.name) || _interopRequireDefault.push(e);
          }),
            _interopRequireDefault.forEach((t) => {
              let _interopRequireDefault = x(e.templates.mentionItemSyntax, [
                { key: "<%=value%>", value: t.value },
                { key: "<%=type%>", value: t.type },
                { key: "<%=id%>", value: t.getUID() },
              ]);
              n = n.replace(new RegExp(v(t.value), "g"), _interopRequireDefault);
            });
          var DataModule_883 = y(n);
          _interopRequireDefault.forEach((t) => {
            let n = y(t.value),
              _interopRequireDefault = x(e.templates.mentionItemSyntax, [
                { key: "<%=value%>", value: t.value },
                { key: "<%=type%>", value: t.type },
                { key: "<%=id%>", value: t.getUID() },
              ]),
              GRegex = x(e.templates.mentionItemHighlight, [
                { key: "<%=value%>", value: n },
                { key: "<%=id%>", value: t.getUID() },
              ]);
            DataModule_883 = DataModule_883.replace(new RegExp(v(_interopRequireDefault), "g"), GRegex);
          }),
            (DataModule_883 = (DataModule_883 = DataModule_883.replace(/\n/g, "<br />")).replace(/ {2}/g, "&nbsp; ")),
            t.data("messageText", n),
            t.trigger("updated"),
            m.find("div").html(DataModule_883);
        }
        function D() {
          T = [];
        }
        function L(n) {
          for (
            var _interopRequireDefault = I(),
              DataModule_883 = t[0].selectionStart,
              GRegex = false,
              r = false,
              s = new RegExp("\\" + e.triggerChar + G, "gi");
            s.exec(_interopRequireDefault);

          )
            (false === GRegex || Math.abs(s.lastIndex - DataModule_883) < GRegex) &&
              ((GRegex = Math.abs(s.lastIndex - DataModule_883)), (r = s.lastIndex));
          var l = r - G.length - 1,
            c = r,
            d = _interopRequireDefault.substr(0, l),
            u = _interopRequireDefault.substr(c, _interopRequireDefault.length),
            p = (d + n.value).length + 1;
          E.find((e) => e.id === n.id) || E.push(n), D(), (G = ""), B();
          var g = d + n.value + " " + u;
          t.val(g), t.trigger("mention"), P(), t.focus(), b(t[0], p);
        }
        function I() {
          return $.trim(t.val());
        }
        function k() {
          var e,
            n,
            _interopRequireDefault = $(this);
          return (
            L(A[_interopRequireDefault.attr("data-uid")]),
            (e = $(t).offset().top),
            (n = $("body").offset().top),
            $(window).scrollTop() > e && $(window).scrollTop(e - n),
            false
          );
        }
        function O() {
          D();
        }
        function F() {
          B();
        }
        function R() {
          var t;
          P(),
            (t = I()),
            (E = (E = E.filter((e) => e.value && t.includes(e.value))).filter(
              (e) => e
            ));
          var n = T.lastIndexOf(e.triggerChar);
          n > -1 &&
            ((G = T.slice(n + 1).join("")),
            (G = w(G)),
            setTimeout(() => {
              K.call(this, G);
            }, 1));
        }
        function M(e) {
          if (e.keyCode !== r) {
            var t = String.fromCharCode(e.which || e.keyCode);
            T.push(t);
          }
        }
        function N(e) {
          if (
            (_interopRequireDefault.data("assign", _interopRequireDefault.find("li").length),
            e.keyCode === c ||
              e.keyCode === u ||
              e.keyCode === g ||
              e.keyCode === h)
          )
            return (
              setTimeout(D, 1),
              void (
                navigator.userAgent.indexOf("MSIE 9") > -1 && setTimeout(P, 1)
              )
            );
          if (e.keyCode !== r) {
            if (!_interopRequireDefault.is(":visible")) return true;
            switch (e.keyCode) {
              case d:
              case p:
                var t = null;
                return (
                  (t =
                    e.keyCode === p
                      ? S && S.length
                        ? S.next()
                        : _interopRequireDefault.find("li").first()
                      : $(S).prev()).length && U(t),
                  false
                );
              case l:
              case s:
                if ((e.stopPropagation(), S && S.length))
                  return S.trigger("mousedown"), false;
            }
            return true;
          }
          T = T.slice(0, -1 + T.length);
        }
        function B() {
          (S = null), _interopRequireDefault.empty().hide();
        }
        function U(t) {
          t.addClass(e.classes.autoCompleteItemActive),
            t.siblings().removeClass(e.classes.autoCompleteItemActive),
            (S = t);
        }
        function j(n, DataModule_883) {
          if ((_interopRequireDefault.show(), !e.allowRepeat)) {
            let e = E.map((e) => e.value);
            DataModule_883 = DataModule_883.filter((t) => !e.includes(t.showText));
          }
          if (DataModule_883.length) {
            _interopRequireDefault.empty();
            var GRegex = $("<ul>").appendTo(_interopRequireDefault).css("visibility", "hidden");
            DataModule_883.forEach((t, _interopRequireDefault) => {
              let DataModule_883 = C("mention_");
              t.setValue(t.showText), (A[DataModule_883] = t);
              let r = $(
                x(e.templates.autocompleteListItem, [
                  { key: "<%=id%>", value: y(t.getUID()) },
                  { key: "<%=display%>", value: y(t.getFullUserName()) },
                  { key: "<%=type%>", value: y(t.type) },
                  {
                    key: "<%=content%>",
                    value: _(
                      y(
                        t.display
                          ? t.display
                          : ""
                              .concat(t.getFullUserName())
                              .concat(
                                t.getEmail() ? "\n ".concat(t.getEmail()) : ""
                              )
                      ),
                      n,
                      false
                    ),
                  },
                  { key: "<%=fontWeight%>", value: y(t.fontWeight) },
                ])
              ).attr("data-uid", DataModule_883);
              if ((0 === _interopRequireDefault && U(r), e.showAvatars)) {
                var s, l;
                if (((l = t.getUserNameInitials()), t.avatar))
                  if ("assets/icon/notification-icon.svg" === t.avatar) {
                    let t;
                    (t =
                      "light" === gDesigner.getSetting("theme", "light")
                        ? "assets/icon/notification-icon-light.svg"
                        : "assets/icon/notification-icon-dark.svg"),
                      (s = $(
                        x(e.templates.autocompleteListItemAvatar, [
                          { key: "<%=avatar%>", value: t },
                        ])
                      ));
                  } else
                    t.hasOwnPictureAvatar()
                      ? (s = $(
                          x(e.templates.autocompleteListItemAvatar, [
                            { key: "<%=avatar%>", value: t.avatar },
                          ])
                        ))
                      : (s = $(
                          x(e.templates.autocompleteListItemLetterAvatar, [
                            { key: "<%=letterAvatarsValue%>", value: l },
                          ])
                        )).css({ "background-color": t.getUserColor() });
                else
                  (s = $(
                    x(e.templates.autocompleteListItemLetterAvatar, [
                      { key: "<%=letterAvatarsValue%>", value: l },
                    ])
                  )).css({ "background-color": t.getUserColor() });
                s.prependTo(r);
              }
              r = r.appendTo(GRegex);
            }),
              _interopRequireDefault.show(),
              e.onCaret &&
                (function (e, t) {
                  var n,
                    _interopRequireDefault = e.css("position");
                  if ("absolute" === _interopRequireDefault) {
                    var DataModule_883 = (function (e) {
                      var t, n, _interopRequireDefault, DataModule_883, GRegex, r, s, l, c, d, u;
                      if (
                        (c = e[0]) &&
                        $(c).is("textarea") &&
                        null !== c.selectionEnd
                      ) {
                        for (
                          s = {
                            position: "absolute",
                            overflow: "auto",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            boxSizing: "content-box",
                            top: 0,
                            left: -9999,
                          },
                            d = 0,
                            u = (l = [
                              "boxSizing",
                              "fontFamily",
                              "fontSize",
                              "fontStyle",
                              "fontVariant",
                              "fontWeight",
                              "height",
                              "letterSpacing",
                              "lineHeight",
                              "paddingBottom",
                              "paddingLeft",
                              "paddingRight",
                              "paddingTop",
                              "textDecoration",
                              "textIndent",
                              "textTransform",
                              "width",
                              "word-spacing",
                            ]).length;
                          d < u;
                          d++
                        )
                          s[(GRegex = l[d])] = $(c).css(GRegex);
                        return (
                          (_interopRequireDefault = document.createElement("div")),
                          $(_interopRequireDefault).css(s),
                          $(c).after(_interopRequireDefault),
                          (n = document.createTextNode(
                            c.value.substring(0, c.selectionEnd)
                          )),
                          (t = document.createTextNode(
                            c.value.substring(c.selectionEnd)
                          )),
                          ((DataModule_883 = document.createElement("span")).innerHTML =
                            "&nbsp;"),
                          _interopRequireDefault.appendChild(n),
                          _interopRequireDefault.appendChild(DataModule_883),
                          _interopRequireDefault.appendChild(t),
                          (_interopRequireDefault.scrollTop = c.scrollTop),
                          (r = $(DataModule_883).position()),
                          $(_interopRequireDefault).remove(),
                          r
                        );
                      }
                    })(t);
                    (n = parseInt(t.css("line-height"), 10) || 18),
                      e.css("width", "15em"),
                      e.css("left", DataModule_883.left),
                      e.css("top", n + DataModule_883.top);
                    var GRegex = t.offset().left + t.width(),
                      r = e.offset().left + e.width();
                    GRegex <= r &&
                      e.css("left", Math.abs(e.position().left - (r - GRegex)));
                  } else if ("fixed" === _interopRequireDefault) {
                    var s = (function (e) {
                      var t, n, _interopRequireDefault, DataModule_883, GRegex, r, s, l, c, d, u;
                      if (
                        (c = e[0]) &&
                        $(c).is("textarea") &&
                        null !== c.selectionEnd
                      ) {
                        for (
                          s = {
                            position: "absolute",
                            overflow: "auto",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            boxSizing: "content-box",
                            top: 0,
                            left: -9999,
                          },
                            d = 0,
                            u = (l = [
                              "boxSizing",
                              "fontFamily",
                              "fontSize",
                              "fontStyle",
                              "fontVariant",
                              "fontWeight",
                              "height",
                              "letterSpacing",
                              "lineHeight",
                              "paddingBottom",
                              "paddingLeft",
                              "paddingRight",
                              "paddingTop",
                              "textDecoration",
                              "textIndent",
                              "textTransform",
                              "width",
                              "word-spacing",
                            ]).length;
                          d < u;
                          d++
                        )
                          s[(GRegex = l[d])] = $(c).css(GRegex);
                        return (
                          (_interopRequireDefault = document.createElement("div")),
                          $(_interopRequireDefault).css(s),
                          $(c).after(_interopRequireDefault),
                          (n = document.createTextNode(
                            c.value.substring(0, c.selectionEnd)
                          )),
                          (t = document.createTextNode(
                            c.value.substring(c.selectionEnd)
                          )),
                          ((DataModule_883 = document.createElement("span")).innerHTML =
                            "&nbsp;"),
                          _interopRequireDefault.appendChild(n),
                          _interopRequireDefault.appendChild(DataModule_883),
                          _interopRequireDefault.appendChild(t),
                          (_interopRequireDefault.scrollTop = c.scrollTop),
                          (r = $(DataModule_883).offset()),
                          $(_interopRequireDefault).remove(),
                          r
                        );
                      }
                    })(t);
                    (n = parseInt(t.css("line-height"), 10) || 18),
                      e.css("width", "15em"),
                      e.css("left", s.left + 1e4),
                      e.css("top", n + s.top);
                  }
                })(_interopRequireDefault, t),
              GRegex.css("visibility", "visible");
          } else B();
        }
        function K(t) {
          t && t.length && t.length >= e.minChars
            ? e.onDataRequest.call(this, "search", t, function (e) {
                j(t, e);
              })
            : B();
        }
        function V(n) {
          E = [];
          for (
            var _interopRequireDefault,
              GRegex = y(n),
              r = new RegExp(
                "(" + e.triggerChar + ")\\[(.*?)\\]\\((.*?):(.*?)\\)",
                "gi"
              ),
              s = GRegex;
            null !== (_interopRequireDefault = r.exec(GRegex));

          )
            (s = s.replace(_interopRequireDefault[0], _interopRequireDefault[1] + _interopRequireDefault[2])),
              E.push(
                new DataModule_883.default({
                  id: _interopRequireDefault[4],
                  type: _interopRequireDefault[3],
                  value: _interopRequireDefault[2],
                  trigger: _interopRequireDefault[1],
                })
              );
          t.val(s), P();
        }
        return (
          (e = $.extend(true, {}, f, e)),
          {
            init: function (DataModule_883) {
              "true" !== (t = $(DataModule_883)).attr("data-mentions-input") &&
                ((n = t.parent()),
                (GRegex = $(e.templates.wrapper)),
                t.wrapAll(GRegex),
                (GRegex = n.find("> div.mentions-input-box")),
                t.attr("data-mentions-input", "true"),
                t.bind("keydown", N),
                t.bind("keypress", M),
                t.bind("click", O),
                t.bind("blur", F),
                t.bind("input", R),
                e.elastic && t.elastic()),
                (_interopRequireDefault = $(e.templates.autocompleteList)).appendTo(GRegex),
                _interopRequireDefault.delegate("li", "mousedown", k),
                (m = $(e.templates.mentionsOverlay)).prependTo(GRegex),
                V(e.defaultValue),
                e.prefillMention && L(e.prefillMention);
            },
            val: function (e) {
              $.isFunction(e) &&
                e.call(this, E.length ? t.data("messageText") : I());
            },
            reset: function () {
              V();
            },
            reinit: function () {
              V(false);
            },
            getMentions: function (e) {
              $.isFunction(e) && e.call(this, E);
            },
            setMentions: function (e) {
              e && e.length && (E = e);
            },
          }
        );
      };
    $.fn.mentionsInput = function (e, t) {
      var n = arguments;
      return (
        ("object" != typeof e && e) || (t = e),
        this.each(function () {
          var _interopRequireDefault =
            $.data(this, "mentionsInput") ||
            $.data(this, "mentionsInput", new S(t));
          return $.isFunction(_interopRequireDefault[e])
            ? _interopRequireDefault[e].apply(this, Array.prototype.slice.call(n, 1))
            : "object" != typeof e && e
            ? void $.error("Method " + e + " does not exist")
            : _interopRequireDefault.init.call(this, this);
        })
      );
    };
  }