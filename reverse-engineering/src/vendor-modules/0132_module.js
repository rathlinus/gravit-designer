/**
 * chunk.vendor.js Module #132
 * Type: unknown
 */

function (e, t, i) {
      var n = i(11),
        r = i(0);

      function o(e, t) {
        ((this._value = e), (this._unit = t || o.DEFAULT_UNIT));
      }
      (r.inheritAndMix(o, r),
        (o.Unit = {
          PT: "pt",
          PX: "px",
          PC: "pc",
          IN: "in",
          MM: "mm",
          CM: "cm",
          PIX: "pix",
          CC: "cc",
          DD: "dd",
          FT: "ft",
          YD: "yd",
          MI: "mi",
          M: "m",
          KM: "km",
          Q: "q",
          H: "h",
        }),
        (o.DEFAULT_UNIT = o.Unit.PX),
        (o.DPI = 72));
      var a = {
        pt: o.DPI / 72,
        px: 1,
        pc: o.DPI / 6,
        in: o.DPI,
        mm: o.DPI / 25.4,
        cm: o.DPI / 2.54,
        pix: o.DPI / 300,
        cc: (4.51165812456 * o.DPI) / 25.4,
        dd: (4.51165812456 * o.DPI) / 25.4 / 12,
        ft: 12 * o.DPI,
        yd: 36 * o.DPI,
        mi: 63360 * o.DPI,
        m: o.DPI / 0.0254,
        km: o.DPI / 254e-7,
        q: o.DPI / 101.6,
        h: o.DPI / 101.6,
      };
      ((o.parseLength = function (e, t) {
        if (!e) return null;
        if (0 == (e = e.trim()).length) return null;
        var i = n.parseNumber(e);
        if ("number" != typeof i) return null;
        var r = t || o.DEFAULT_UNIT,
          a = e.substr(i.toString().length);
        return (
          a &&
            a.length > 0 &&
            ((a = a.trim().toLowerCase()).length >= 2 &&
            "p" == a.charAt(0) &&
            "t" == a.charAt(1)
              ? (r = o.Unit.PT)
              : a.length >= 2 && "p" == a.charAt(0) && "x" == a.charAt(1)
                ? (r = o.Unit.PX)
                : a.length >= 2 && "p" == a.charAt(0) && "c" == a.charAt(1)
                  ? (r = o.Unit.PC)
                  : a.length >= 2 && "i" == a.charAt(0) && "n" == a.charAt(1)
                    ? (r = o.Unit.IN)
                    : a.length >= 2 && "m" == a.charAt(0) && "m" == a.charAt(1)
                      ? (r = o.Unit.MM)
                      : a.length >= 2 &&
                          "c" == a.charAt(0) &&
                          "m" == a.charAt(1)
                        ? (r = o.Unit.CM)
                        : a.length >= 1 &&
                          "m" == a.charAt(0) &&
                          (r = o.Unit.M)),
          new o(i, r)
        );
      }),
        (o.parseEquation = function (e, t) {
          t = t || o.DEFAULT_UNIT;
          var i = new s.Context(t),
            n = new s.Evaluator(i);
          try {
            return new o(n.evaluate(e), t);
          } catch (e) {
            return null;
          }
        }),
        (o.parseEquationValue = function (e) {
          var t = o.parseEquation(e);
          return t ? t.getValue() : null;
        }),
        (o.prototype._value = null),
        (o.prototype._unit = o.DEFAULT_UNIT),
        (o.prototype._dpiMap = null),
        (o.prototype.getValue = function () {
          return this._value;
        }),
        (o.prototype.getUnit = function () {
          return this._unit;
        }),
        (o.prototype.toPoint = function () {
          return this._unit != o.Unit.PT
            ? a[this._unit] * this._value
            : this._value;
        }),
        (o.prototype.toUnit = function (e) {
          return this._unit != e ? this.toPoint() / a[e] : this._value;
        }),
        (o.prototype.convert = function (e) {
          return this._unit != e
            ? new o(this.toPoint() / a[e], e)
            : new o(this._value, e);
        }),
        (o.prototype.toString = function (e) {
          var t = n.formatNumber(this._value, e);
          return (this._unit && (t += o.Unit[this._unit]), t);
        }));
      var s = {
        Token: {
          Operator: "Operator",
          Identifier: "Identifier",
          Number: "Number",
        },
      };
      ((s.Lexer = function () {
        var e = "",
          t = 0,
          i = 0,
          n = 0,
          r = s.Token;

        function o() {
          var n = i;
          return n < t ? e.charAt(n) : "\0";
        }

        function a() {
          var n = "\0",
            r = i;
          return (r < t && ((n = e.charAt(r)), (i += 1)), n);
        }

        function l(e) {
          return "\t" === e || " " === e || " " === e;
        }

        function h(e) {
          return (e >= "a" && e <= "z") || (e >= "A" && e <= "Z");
        }

        function A(e) {
          return e >= "0" && e <= "9";
        }

        function c(e, t) {
          return {
            unit: e,
            value: t,
            start: n,
            end: i - 1,
          };
        }

        function p(e) {
          return "_" === e || h(e);
        }

        function u(e) {
          return p(e) || A(e);
        }

        function d() {
          var e;
          if (
            ((function () {
              for (; i < t && l(o()); ) a();
            })(),
            !(i >= t))
          ) {
            if (
              ((n = i),
              void 0 !==
                (e = (function () {
                  var e, n;
                  if (A((e = o())) || "." === e) {
                    if (((n = ""), "." !== e))
                      for (n = a(); A((e = o())); ) n += a();
                    if ("." === e || "," === e)
                      for (n += a(); A((e = o())); ) n += a();
                    if ("e" === e || "E" === e) {
                      if (((n += a()), "+" !== (e = o()) && "-" !== e && !A(e)))
                        throw (
                          (e = "character " + e),
                          i >= t && (e = "<end>"),
                          new SyntaxError(
                            "Unexpected " + e + " after the exponent sign",
                          )
                        );
                      for (n += a(); A((e = o())); ) n += a();
                    }
                    if (h(e)) for (n += a(); h((e = o())); ) n += a();
                    if ("." === n)
                      throw new SyntaxError(
                        "Expecting decimal digits after the dot sign",
                      );
                    return c(r.Number, n);
                  }
                })()))
            )
              return e;
            if (
              void 0 !==
              (e = (function () {
                var e = o();
                if ("+-*/()^%=;,".indexOf(e) >= 0) return c(r.Operator, a());
              })())
            )
              return e;
            if (
              void 0 !==
              (e = (function () {
                var e;
                if (p(o())) {
                  for (e = a(); u(o()); ) e += a();
                  return c(r.Identifier, e);
                }
              })())
            )
              return e;
            throw new SyntaxError("Unknown token from character " + o());
          }
        }
        return {
          reset: function (n) {
            ((e = n), (t = n.length), (i = 0));
          },
          next: d,
          peek: function () {
            var e, t;
            t = i;
            try {
              e = d();
            } catch (t) {
              e = void 0;
            }
            return ((i = t), e);
          },
        };
      }),
        (s.Parser = function () {
          var e = new s.Lexer(),
            t = s.Token;

          function i(e, i) {
            return void 0 !== e && e.unit === t.Operator && e.value === i;
          }

          function n(t) {
            var n = [];
            if (!i(e.next(), "("))
              throw new SyntaxError(
                'Expecting ( in a function call "' + t + '"',
              );
            if (
              (i(e.peek(), ")") ||
                (n = (function () {
                  for (
                    var t, n = [];
                    void 0 !== (t = l()) && (n.push(t), i(e.peek(), ","));
                  )
                    e.next();
                  return n;
                })()),
              !i(e.next(), ")"))
            )
              throw new SyntaxError(
                'Expecting ) in a function call "' + t + '"',
              );
            return {
              FunctionCall: {
                name: t,
                args: n,
              },
            };
          }

          function r() {
            var o, s;
            return i((o = e.peek()), "-") || i(o, "+")
              ? ((o = e.next()),
                (s = r()),
                {
                  Unary: {
                    operator: o.value,
                    expression: s,
                  },
                })
              : (function () {
                  var r, o;
                  if (void 0 === (r = e.peek()))
                    throw new SyntaxError(
                      "Unexpected termination of expression",
                    );
                  if (r.unit === t.Identifier)
                    return (
                      (r = e.next()),
                      i(e.peek(), "(")
                        ? n(r.value)
                        : {
                            Identifier: r.value,
                          }
                    );
                  if (r.unit === t.Number)
                    return {
                      Number: (r = e.next()).value,
                    };
                  if (i(r, "(")) {
                    if ((e.next(), (o = a()), !i((r = e.next()), ")")))
                      throw new SyntaxError("Expecting )");
                    return {
                      Expression: o,
                    };
                  }
                  throw new SyntaxError(
                    "Parse error, can not process token " + r.value,
                  );
                })();
          }

          function o() {
            var t, n;
            for (t = r(), n = e.peek(); i(n, "*") || i(n, "/"); )
              ((t = {
                Binary: {
                  operator: (n = e.next()).value,
                  left: t,
                  right: r(),
                },
              }),
                (n = e.peek()));
            return t;
          }

          function a() {
            var t;
            return void 0 !==
              (t = (function () {
                var t, n;
                for (t = o(), n = e.peek(); i(n, "+") || i(n, "-"); )
                  ((t = {
                    Binary: {
                      operator: (n = e.next()).value,
                      left: t,
                      right: o(),
                    },
                  }),
                    (n = e.peek()));
                return t;
              })()) &&
              t.Identifier &&
              i(e.peek(), "=")
              ? (e.next(),
                {
                  Assignment: {
                    name: t,
                    value: a(),
                  },
                })
              : t;
          }

          function l() {
            return a();
          }
          return {
            parse: function (t) {
              var i, n;
              if ((e.reset(t), (i = l()), void 0 !== (n = e.next())))
                throw new SyntaxError("Unexpected token " + n.value);
              return {
                Expression: i,
              };
            },
          };
        }),
        (s.Context = function (e) {
          return {
            Unit: e,
            Constants: {
              pi: 3.141592653589793,
              phi: 1.618033988749895,
            },
            Functions: {
              abs: Math.abs,
              acos: Math.acos,
              asin: Math.asin,
              atan: Math.atan,
              ceil: Math.ceil,
              cos: Math.cos,
              exp: Math.exp,
              floor: Math.floor,
              ln: Math.ln,
              random: Math.random,
              sin: Math.sin,
              sqrt: Math.sqrt,
              tan: Math.tan,
            },
            Variables: {},
          };
        }),
        (s.Evaluator = function (e) {
          var t = new s.Parser(),
            i = arguments.length < 1 ? new s.Context(o.DEFAULT_UNIT) : e;

          function n(t) {
            var r, a, s, l, h;
            if (t.hasOwnProperty("Expression")) return n(t.Expression);
            if (t.hasOwnProperty("Number")) {
              var A = o.parseLength(t.Number, e.Unit);
              if (!A) throw new SyntaxError("Invalid length " + t.Number);
              return A.toUnit(e.Unit);
            }
            if (t.hasOwnProperty("Binary"))
              switch (
                ((r = n((t = t.Binary).left)), (a = n(t.right)), t.operator)
              ) {
                case "+":
                  return r + a;
                case "-":
                  return r - a;
                case "*":
                  return r * a;
                case "/":
                  return r / a;
                default:
                  throw new SyntaxError("Unknown operator " + t.operator);
              }
            if (t.hasOwnProperty("Unary"))
              switch (((s = n((t = t.Unary).expression)), t.operator)) {
                case "+":
                  return s;
                case "-":
                  return -s;
                default:
                  throw new SyntaxError("Unknown operator " + t.operator);
              }
            if (t.hasOwnProperty("Identifier")) {
              if (i.Constants.hasOwnProperty(t.Identifier))
                return i.Constants[t.Identifier];
              if (i.Variables.hasOwnProperty(t.Identifier))
                return i.Variables[t.Identifier];
              throw new SyntaxError("Unknown identifier");
            }
            if (t.hasOwnProperty("Assignment"))
              return (
                (a = n(t.Assignment.value)),
                (i.Variables[t.Assignment.name.Identifier] = a),
                a
              );
            if (t.hasOwnProperty("FunctionCall")) {
              if (((s = t.FunctionCall), i.Functions.hasOwnProperty(s.name))) {
                for (l = [], h = 0; h < s.args.length; h += 1)
                  l.push(n(s.args[h]));
                return i.Functions[s.name].apply(null, l);
              }
              throw new SyntaxError("Unknown function " + s.name);
            }
            throw new SyntaxError("Unknown syntax node");
          }

          function r(e) {
            return n(t.parse(e));
          }
          return {
            evaluate: r,
          };
        }),
        (e.exports = o));
    }