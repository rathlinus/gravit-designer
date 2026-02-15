/**
 * Webpack Module #673
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(674) /* module_674 */;
    var o,
      core_export = require(25) /* core_export */,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      r = require(423) /* module_423 */,
      globalThis = require(23) /* globalThis */,
      l = require(124) /* module_124 */,
      uncurryThis = require(27) /* uncurryThis */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      u = require(120) /* module_120 */,
      p = require(146) /* module_146 */,
      g = require(61) /* module_61 */,
      objectAssignPolyfill = require(415) /* objectAssignPolyfill */,
      f = require(675) /* module_675 */,
      m = require(157) /* stub_requires_27 */,
      y = require(309) /* module_309 */.codeAt,
      v = require(676) /* module_676 */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      setToStringTag = require(137) /* setToStringTag */,
      w = require(303) /* module_303 */,
      C = require(424) /* polyfill_Array_isArray */,
      internalState = require(80) /* internalState */,
      S = internalState.set,
      E = internalState.getterFor("URL"),
      A = C.URLSearchParams,
      T = C.getState,
      G = globalThis.URL,
      P = globalThis.TypeError,
      D = globalThis.parseInt,
      L = Math.floor,
      I = Math.pow,
      k = uncurryThis("".charAt),
      O = uncurryThis(/./.exec),
      F = uncurryThis([].join),
      R = uncurryThis((1).toString),
      M = uncurryThis([].pop),
      N = uncurryThis([].push),
      B = uncurryThis("".replace),
      U = uncurryThis([].shift),
      $ = uncurryThis("".split),
      j = uncurryThis("".slice),
      K = uncurryThis("".toLowerCase),
      V = uncurryThis([].unshift),
      H = /[a-z]/i,
      W = /[\d+-.a-z]/i,
      z = /\d/,
      q = /^0x/i,
      Y = /^[0-7]+$/,
      X = /^\d+$/,
      Q = /^[\da-f]+$/i,
      J = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
      Z = /[\0\t\n\r #/:<>?@[\\\]^|]/,
      ee = /^[\u0000-\u0020]+/,
      te = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
      ne = /[\t\n\r]/g,
      oe = function (e) {
        var t, n, o, core_export;
        if ("number" == typeof e) {
          for (t = [], n = 0; n < 4; n++) V(t, e % 256), (e = L(e / 256));
          return F(t, ".");
        }
        if ("object" == typeof e) {
          for (
            t = "",
              o = (function (e) {
                for (var t = null, n = 1, o = null, core_export = 0, hasOwnProperty_wrapper = 0; hasOwnProperty_wrapper < 8; hasOwnProperty_wrapper++)
                  0 !== e[hasOwnProperty_wrapper]
                    ? (core_export > n && ((t = o), (n = core_export)), (o = null), (core_export = 0))
                    : (null === o && (o = hasOwnProperty_wrapper), ++core_export);
                return core_export > n ? o : t;
              })(e),
              n = 0;
            n < 8;
            n++
          )
            (core_export && 0 === e[n]) ||
              (core_export && (core_export = false),
              o === n
                ? ((t += n ? ":" : "::"), (core_export = true))
                : ((t += R(e[n], 16)), n < 7 && (t += ":")));
          return "[" + t + "]";
        }
        return e;
      },
      ie = {},
      ae = objectAssignPolyfill({}, ie, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      re = objectAssignPolyfill({}, ae, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      se = objectAssignPolyfill({}, re, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      le = function (e, t) {
        var n = y(e, 0);
        return n > 32 && n < 127 && !g(t, e) ? e : encodeURIComponent(e);
      },
      ce = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      de = function (e, t) {
        var n;
        return (
          2 === e.length &&
          O(H, k(e, 0)) &&
          (":" === (n = k(e, 1)) || (!t && "|" === n))
        );
      },
      ue = function (e) {
        var t;
        return (
          e.length > 1 &&
          de(j(e, 0, 2)) &&
          (2 === e.length ||
            "/" === (t = k(e, 2)) ||
            "\\" === t ||
            "?" === t ||
            "#" === t)
        );
      },
      pe = function (e) {
        return "." === e || "%2e" === K(e);
      },
      ge = {},
      he = {},
      fe = {},
      me = {},
      ye = {},
      ve = {},
      _e = {},
      be = {},
      we = {},
      Ce = {},
      xe = {},
      Se = {},
      Ee = {},
      Ae = {},
      Te = {},
      Ge = {},
      Pe = {},
      De = {},
      Le = {},
      Ie = {},
      ke = {},
      Oe = function (e, t, n) {
        var o,
          core_export,
          hasOwnProperty_wrapper,
          r = requireObjectCoercible(e);
        if (t) {
          if ((core_export = this.parse(r))) throw new P(core_export);
          this.searchParams = null;
        } else {
          if (
            (undefined !== n && (o = new Oe(n, true)), (core_export = this.parse(r, null, o)))
          )
            throw new P(core_export);
          (hasOwnProperty_wrapper = T(new A())).bindURL(this), (this.searchParams = hasOwnProperty_wrapper);
        }
      };
    Oe.prototype = {
      type: "URL",
      parse: function (e, t, n) {
        var core_export,
          hasOwnProperty_wrapper,
          r,
          globalThis,
          l,
          uncurryThis = this,
          defineBuiltIn = t || ge,
          u = 0,
          p = "",
          objectAssignPolyfill = false,
          y = false,
          v = false;
        for (
          e = requireObjectCoercible(e),
            t ||
              ((uncurryThis.scheme = ""),
              (uncurryThis.username = ""),
              (uncurryThis.password = ""),
              (uncurryThis.host = null),
              (uncurryThis.port = null),
              (uncurryThis.path = []),
              (uncurryThis.query = null),
              (uncurryThis.fragment = null),
              (uncurryThis.cannotBeABaseURL = false),
              (e = B(e, ee, "")),
              (e = B(e, te, "$1"))),
            e = B(e, ne, ""),
            core_export = f(e);
          u <= core_export.length;

        ) {
          switch (((hasOwnProperty_wrapper = core_export[u]), defineBuiltIn)) {
            case ge:
              if (!hasOwnProperty_wrapper || !O(H, hasOwnProperty_wrapper)) {
                if (t) return "Invalid scheme";
                defineBuiltIn = fe;
                continue;
              }
              (p += K(hasOwnProperty_wrapper)), (defineBuiltIn = he);
              break;
            case he:
              if (hasOwnProperty_wrapper && (O(W, hasOwnProperty_wrapper) || "+" === hasOwnProperty_wrapper || "-" === hasOwnProperty_wrapper || "." === hasOwnProperty_wrapper))
                p += K(hasOwnProperty_wrapper);
              else {
                if (":" !== hasOwnProperty_wrapper) {
                  if (t) return "Invalid scheme";
                  (p = ""), (defineBuiltIn = fe), (u = 0);
                  continue;
                }
                if (
                  t &&
                  (uncurryThis.isSpecial() !== g(ce, p) ||
                    ("file" === p &&
                      (uncurryThis.includesCredentials() || null !== uncurryThis.port)) ||
                    ("file" === uncurryThis.scheme && !uncurryThis.host))
                )
                  return;
                if (((uncurryThis.scheme = p), t))
                  return void (
                    uncurryThis.isSpecial() &&
                    ce[uncurryThis.scheme] === uncurryThis.port &&
                    (uncurryThis.port = null)
                  );
                (p = ""),
                  "file" === uncurryThis.scheme
                    ? (defineBuiltIn = Ae)
                    : uncurryThis.isSpecial() && n && n.scheme === uncurryThis.scheme
                    ? (defineBuiltIn = me)
                    : uncurryThis.isSpecial()
                    ? (defineBuiltIn = be)
                    : "/" === core_export[u + 1]
                    ? ((defineBuiltIn = ye), u++)
                    : ((uncurryThis.cannotBeABaseURL = true), N(uncurryThis.path, ""), (defineBuiltIn = Le));
              }
              break;
            case fe:
              if (!n || (n.cannotBeABaseURL && "#" !== hasOwnProperty_wrapper))
                return "Invalid scheme";
              if (n.cannotBeABaseURL && "#" === hasOwnProperty_wrapper) {
                (uncurryThis.scheme = n.scheme),
                  (uncurryThis.path = m(n.path)),
                  (uncurryThis.query = n.query),
                  (uncurryThis.fragment = ""),
                  (uncurryThis.cannotBeABaseURL = true),
                  (defineBuiltIn = ke);
                break;
              }
              defineBuiltIn = "file" === n.scheme ? Ae : ve;
              continue;
            case me:
              if ("/" !== hasOwnProperty_wrapper || "/" !== core_export[u + 1]) {
                defineBuiltIn = ve;
                continue;
              }
              (defineBuiltIn = we), u++;
              break;
            case ye:
              if ("/" === hasOwnProperty_wrapper) {
                defineBuiltIn = Ce;
                break;
              }
              defineBuiltIn = De;
              continue;
            case ve:
              if (((uncurryThis.scheme = n.scheme), hasOwnProperty_wrapper === o))
                (uncurryThis.username = n.username),
                  (uncurryThis.password = n.password),
                  (uncurryThis.host = n.host),
                  (uncurryThis.port = n.port),
                  (uncurryThis.path = m(n.path)),
                  (uncurryThis.query = n.query);
              else if ("/" === hasOwnProperty_wrapper || ("\\" === hasOwnProperty_wrapper && uncurryThis.isSpecial())) defineBuiltIn = _e;
              else if ("?" === hasOwnProperty_wrapper)
                (uncurryThis.username = n.username),
                  (uncurryThis.password = n.password),
                  (uncurryThis.host = n.host),
                  (uncurryThis.port = n.port),
                  (uncurryThis.path = m(n.path)),
                  (uncurryThis.query = ""),
                  (defineBuiltIn = Ie);
              else {
                if ("#" !== hasOwnProperty_wrapper) {
                  (uncurryThis.username = n.username),
                    (uncurryThis.password = n.password),
                    (uncurryThis.host = n.host),
                    (uncurryThis.port = n.port),
                    (uncurryThis.path = m(n.path)),
                    uncurryThis.path.length--,
                    (defineBuiltIn = De);
                  continue;
                }
                (uncurryThis.username = n.username),
                  (uncurryThis.password = n.password),
                  (uncurryThis.host = n.host),
                  (uncurryThis.port = n.port),
                  (uncurryThis.path = m(n.path)),
                  (uncurryThis.query = n.query),
                  (uncurryThis.fragment = ""),
                  (defineBuiltIn = ke);
              }
              break;
            case _e:
              if (!uncurryThis.isSpecial() || ("/" !== hasOwnProperty_wrapper && "\\" !== hasOwnProperty_wrapper)) {
                if ("/" !== hasOwnProperty_wrapper) {
                  (uncurryThis.username = n.username),
                    (uncurryThis.password = n.password),
                    (uncurryThis.host = n.host),
                    (uncurryThis.port = n.port),
                    (defineBuiltIn = De);
                  continue;
                }
                defineBuiltIn = Ce;
              } else defineBuiltIn = we;
              break;
            case be:
              if (((defineBuiltIn = we), "/" !== hasOwnProperty_wrapper || "/" !== k(p, u + 1))) continue;
              u++;
              break;
            case we:
              if ("/" !== hasOwnProperty_wrapper && "\\" !== hasOwnProperty_wrapper) {
                defineBuiltIn = Ce;
                continue;
              }
              break;
            case Ce:
              if ("@" === hasOwnProperty_wrapper) {
                objectAssignPolyfill && (p = "%40" + p), (objectAssignPolyfill = true), (r = f(p));
                for (var setToStringTag = 0; setToStringTag < r.length; setToStringTag++) {
                  var w = r[setToStringTag];
                  if (":" !== w || v) {
                    var C = le(w, se);
                    v ? (uncurryThis.password += C) : (uncurryThis.username += C);
                  } else v = true;
                }
                p = "";
              } else if (
                hasOwnProperty_wrapper === o ||
                "/" === hasOwnProperty_wrapper ||
                "?" === hasOwnProperty_wrapper ||
                "#" === hasOwnProperty_wrapper ||
                ("\\" === hasOwnProperty_wrapper && uncurryThis.isSpecial())
              ) {
                if (objectAssignPolyfill && "" === p) return "Invalid authority";
                (u -= f(p).length + 1), (p = ""), (defineBuiltIn = xe);
              } else p += hasOwnProperty_wrapper;
              break;
            case xe:
            case Se:
              if (t && "file" === uncurryThis.scheme) {
                defineBuiltIn = Ge;
                continue;
              }
              if (":" !== hasOwnProperty_wrapper || y) {
                if (
                  hasOwnProperty_wrapper === o ||
                  "/" === hasOwnProperty_wrapper ||
                  "?" === hasOwnProperty_wrapper ||
                  "#" === hasOwnProperty_wrapper ||
                  ("\\" === hasOwnProperty_wrapper && uncurryThis.isSpecial())
                ) {
                  if (uncurryThis.isSpecial() && "" === p) return "Invalid host";
                  if (
                    t &&
                    "" === p &&
                    (uncurryThis.includesCredentials() || null !== uncurryThis.port)
                  )
                    return;
                  if ((globalThis = uncurryThis.parseHost(p))) return globalThis;
                  if (((p = ""), (defineBuiltIn = Pe), t)) return;
                  continue;
                }
                "[" === hasOwnProperty_wrapper ? (y = true) : "]" === hasOwnProperty_wrapper && (y = false), (p += hasOwnProperty_wrapper);
              } else {
                if ("" === p) return "Invalid host";
                if ((globalThis = uncurryThis.parseHost(p))) return globalThis;
                if (((p = ""), (defineBuiltIn = Ee), t === Se)) return;
              }
              break;
            case Ee:
              if (!O(z, hasOwnProperty_wrapper)) {
                if (
                  hasOwnProperty_wrapper === o ||
                  "/" === hasOwnProperty_wrapper ||
                  "?" === hasOwnProperty_wrapper ||
                  "#" === hasOwnProperty_wrapper ||
                  ("\\" === hasOwnProperty_wrapper && uncurryThis.isSpecial()) ||
                  t
                ) {
                  if ("" !== p) {
                    var internalState = D(p, 10);
                    if (internalState > 65535) return "Invalid port";
                    (uncurryThis.port = uncurryThis.isSpecial() && internalState === ce[uncurryThis.scheme] ? null : internalState),
                      (p = "");
                  }
                  if (t) return;
                  defineBuiltIn = Pe;
                  continue;
                }
                return "Invalid port";
              }
              p += hasOwnProperty_wrapper;
              break;
            case Ae:
              if (((uncurryThis.scheme = "file"), "/" === hasOwnProperty_wrapper || "\\" === hasOwnProperty_wrapper)) defineBuiltIn = Te;
              else {
                if (!n || "file" !== n.scheme) {
                  defineBuiltIn = De;
                  continue;
                }
                switch (hasOwnProperty_wrapper) {
                  case o:
                    (uncurryThis.host = n.host),
                      (uncurryThis.path = m(n.path)),
                      (uncurryThis.query = n.query);
                    break;
                  case "?":
                    (uncurryThis.host = n.host),
                      (uncurryThis.path = m(n.path)),
                      (uncurryThis.query = ""),
                      (defineBuiltIn = Ie);
                    break;
                  case "#":
                    (uncurryThis.host = n.host),
                      (uncurryThis.path = m(n.path)),
                      (uncurryThis.query = n.query),
                      (uncurryThis.fragment = ""),
                      (defineBuiltIn = ke);
                    break;
                  default:
                    ue(F(m(core_export, u), "")) ||
                      ((uncurryThis.host = n.host),
                      (uncurryThis.path = m(n.path)),
                      uncurryThis.shortenPath()),
                      (defineBuiltIn = De);
                    continue;
                }
              }
              break;
            case Te:
              if ("/" === hasOwnProperty_wrapper || "\\" === hasOwnProperty_wrapper) {
                defineBuiltIn = Ge;
                break;
              }
              n &&
                "file" === n.scheme &&
                !ue(F(m(core_export, u), "")) &&
                (de(n.path[0], true) ? N(uncurryThis.path, n.path[0]) : (uncurryThis.host = n.host)),
                (defineBuiltIn = De);
              continue;
            case Ge:
              if (
                hasOwnProperty_wrapper === o ||
                "/" === hasOwnProperty_wrapper ||
                "\\" === hasOwnProperty_wrapper ||
                "?" === hasOwnProperty_wrapper ||
                "#" === hasOwnProperty_wrapper
              ) {
                if (!t && de(p)) defineBuiltIn = De;
                else if ("" === p) {
                  if (((uncurryThis.host = ""), t)) return;
                  defineBuiltIn = Pe;
                } else {
                  if ((globalThis = uncurryThis.parseHost(p))) return globalThis;
                  if (("localhost" === uncurryThis.host && (uncurryThis.host = ""), t)) return;
                  (p = ""), (defineBuiltIn = Pe);
                }
                continue;
              }
              p += hasOwnProperty_wrapper;
              break;
            case Pe:
              if (uncurryThis.isSpecial()) {
                if (((defineBuiltIn = De), "/" !== hasOwnProperty_wrapper && "\\" !== hasOwnProperty_wrapper)) continue;
              } else if (t || "?" !== hasOwnProperty_wrapper)
                if (t || "#" !== hasOwnProperty_wrapper) {
                  if (hasOwnProperty_wrapper !== o && ((defineBuiltIn = De), "/" !== hasOwnProperty_wrapper)) continue;
                } else (uncurryThis.fragment = ""), (defineBuiltIn = ke);
              else (uncurryThis.query = ""), (defineBuiltIn = Ie);
              break;
            case De:
              if (
                hasOwnProperty_wrapper === o ||
                "/" === hasOwnProperty_wrapper ||
                ("\\" === hasOwnProperty_wrapper && uncurryThis.isSpecial()) ||
                (!t && ("?" === hasOwnProperty_wrapper || "#" === hasOwnProperty_wrapper))
              ) {
                if (
                  (".." === (l = K((l = p))) ||
                  "%2e." === l ||
                  ".%2e" === l ||
                  "%2e%2e" === l
                    ? (uncurryThis.shortenPath(),
                      "/" === hasOwnProperty_wrapper ||
                        ("\\" === hasOwnProperty_wrapper && uncurryThis.isSpecial()) ||
                        N(uncurryThis.path, ""))
                    : pe(p)
                    ? "/" === hasOwnProperty_wrapper ||
                      ("\\" === hasOwnProperty_wrapper && uncurryThis.isSpecial()) ||
                      N(uncurryThis.path, "")
                    : ("file" === uncurryThis.scheme &&
                        !uncurryThis.path.length &&
                        de(p) &&
                        (uncurryThis.host && (uncurryThis.host = ""), (p = k(p, 0) + ":")),
                      N(uncurryThis.path, p)),
                  (p = ""),
                  "file" === uncurryThis.scheme && (hasOwnProperty_wrapper === o || "?" === hasOwnProperty_wrapper || "#" === hasOwnProperty_wrapper))
                )
                  for (; uncurryThis.path.length > 1 && "" === uncurryThis.path[0]; ) U(uncurryThis.path);
                "?" === hasOwnProperty_wrapper
                  ? ((uncurryThis.query = ""), (defineBuiltIn = Ie))
                  : "#" === hasOwnProperty_wrapper && ((uncurryThis.fragment = ""), (defineBuiltIn = ke));
              } else p += le(hasOwnProperty_wrapper, re);
              break;
            case Le:
              "?" === hasOwnProperty_wrapper
                ? ((uncurryThis.query = ""), (defineBuiltIn = Ie))
                : "#" === hasOwnProperty_wrapper
                ? ((uncurryThis.fragment = ""), (defineBuiltIn = ke))
                : hasOwnProperty_wrapper !== o && (uncurryThis.path[0] += le(hasOwnProperty_wrapper, ie));
              break;
            case Ie:
              t || "#" !== hasOwnProperty_wrapper
                ? hasOwnProperty_wrapper !== o &&
                  ("'" === hasOwnProperty_wrapper && uncurryThis.isSpecial()
                    ? (uncurryThis.query += "%27")
                    : (uncurryThis.query += "#" === hasOwnProperty_wrapper ? "%23" : le(hasOwnProperty_wrapper, ie)))
                : ((uncurryThis.fragment = ""), (defineBuiltIn = ke));
              break;
            case ke:
              hasOwnProperty_wrapper !== o && (uncurryThis.fragment += le(hasOwnProperty_wrapper, ae));
          }
          u++;
        }
      },
      parseHost: function (e) {
        var t, n, o;
        if ("[" === k(e, 0)) {
          if ("]" !== k(e, e.length - 1)) return "Invalid host";
          if (
            !(t = (function (e) {
              var t,
                n,
                o,
                core_export,
                hasOwnProperty_wrapper,
                r,
                globalThis,
                l = [0, 0, 0, 0, 0, 0, 0, 0],
                uncurryThis = 0,
                defineBuiltIn = null,
                u = 0,
                p = function () {
                  return k(e, u);
                };
              if (":" === p()) {
                if (":" !== k(e, 1)) return;
                (u += 2), (defineBuiltIn = ++uncurryThis);
              }
              for (; p(); ) {
                if (8 === uncurryThis) return;
                if (":" !== p()) {
                  for (t = n = 0; n < 4 && O(Q, p()); )
                    (t = 16 * t + D(p(), 16)), u++, n++;
                  if ("." === p()) {
                    if (0 === n) return;
                    if (((u -= n), uncurryThis > 6)) return;
                    for (o = 0; p(); ) {
                      if (((core_export = null), o > 0)) {
                        if (!("." === p() && o < 4)) return;
                        u++;
                      }
                      if (!O(z, p())) return;
                      for (; O(z, p()); ) {
                        if (((hasOwnProperty_wrapper = D(p(), 10)), null === core_export)) core_export = hasOwnProperty_wrapper;
                        else {
                          if (0 === core_export) return;
                          core_export = 10 * core_export + hasOwnProperty_wrapper;
                        }
                        if (core_export > 255) return;
                        u++;
                      }
                      (l[uncurryThis] = 256 * l[uncurryThis] + core_export), (2 !== ++o && 4 !== o) || uncurryThis++;
                    }
                    if (4 !== o) return;
                    break;
                  }
                  if (":" === p()) {
                    if ((u++, !p())) return;
                  } else if (p()) return;
                  l[uncurryThis++] = t;
                } else {
                  if (null !== defineBuiltIn) return;
                  u++, (defineBuiltIn = ++uncurryThis);
                }
              }
              if (null !== defineBuiltIn)
                for (r = uncurryThis - defineBuiltIn, uncurryThis = 7; 0 !== uncurryThis && r > 0; )
                  (globalThis = l[uncurryThis]), (l[uncurryThis--] = l[defineBuiltIn + r - 1]), (l[defineBuiltIn + --r] = globalThis);
              else if (8 !== uncurryThis) return;
              return l;
            })(j(e, 1, -1)))
          )
            return "Invalid host";
          this.host = t;
        } else if (this.isSpecial()) {
          if (((e = v(e)), O(J, e))) return "Invalid host";
          if (
            null ===
            (t = (function (e) {
              var t,
                n,
                o,
                core_export,
                hasOwnProperty_wrapper,
                r,
                globalThis,
                l = $(e, ".");
              if (
                (l.length && "" === l[l.length - 1] && l.length--,
                (t = l.length) > 4)
              )
                return e;
              for (n = [], o = 0; o < t; o++) {
                if ("" === (core_export = l[o])) return e;
                if (
                  ((hasOwnProperty_wrapper = 10),
                  core_export.length > 1 &&
                    "0" === k(core_export, 0) &&
                    ((hasOwnProperty_wrapper = O(q, core_export) ? 16 : 8), (core_export = j(core_export, 8 === hasOwnProperty_wrapper ? 1 : 2))),
                  "" === core_export)
                )
                  r = 0;
                else {
                  if (!O(10 === hasOwnProperty_wrapper ? X : 8 === hasOwnProperty_wrapper ? Y : Q, core_export)) return e;
                  r = D(core_export, hasOwnProperty_wrapper);
                }
                N(n, r);
              }
              for (o = 0; o < t; o++)
                if (((r = n[o]), o === t - 1)) {
                  if (r >= I(256, 5 - t)) return null;
                } else if (r > 255) return null;
              for (globalThis = M(n), o = 0; o < n.length; o++)
                globalThis += n[o] * I(256, 3 - o);
              return globalThis;
            })(e))
          )
            return "Invalid host";
          this.host = t;
        } else {
          if (O(Z, e)) return "Invalid host";
          for (t = "", n = f(e), o = 0; o < n.length; o++) t += le(n[o], ie);
          this.host = t;
        }
      },
      cannotHaveUsernamePasswordPort: function () {
        return !this.host || this.cannotBeABaseURL || "file" === this.scheme;
      },
      includesCredentials: function () {
        return "" !== this.username || "" !== this.password;
      },
      isSpecial: function () {
        return g(ce, this.scheme);
      },
      shortenPath: function () {
        var e = this.path,
          t = e.length;
        !t || ("file" === this.scheme && 1 === t && de(e[0], true)) || e.length--;
      },
      serialize: function () {
        var e = this,
          t = e.scheme,
          n = e.username,
          o = e.password,
          core_export = e.host,
          hasOwnProperty_wrapper = e.port,
          r = e.path,
          globalThis = e.query,
          l = e.fragment,
          uncurryThis = t + ":";
        return (
          null !== core_export
            ? ((uncurryThis += "//"),
              e.includesCredentials() && (uncurryThis += n + (o ? ":" + o : "") + "@"),
              (uncurryThis += oe(core_export)),
              null !== hasOwnProperty_wrapper && (uncurryThis += ":" + hasOwnProperty_wrapper))
            : "file" === t && (uncurryThis += "//"),
          (uncurryThis += e.cannotBeABaseURL ? r[0] : r.length ? "/" + F(r, "/") : ""),
          null !== globalThis && (uncurryThis += "?" + globalThis),
          null !== l && (uncurryThis += "#" + l),
          uncurryThis
        );
      },
      setHref: function (e) {
        var t = this.parse(e);
        if (t) throw new P(t);
        this.searchParams.update();
      },
      getOrigin: function () {
        var e = this.scheme,
          t = this.port;
        if ("blob" === e)
          try {
            return new Fe(e.path[0]).origin;
          } catch (e) {
            return "null";
          }
        return "file" !== e && this.isSpecial()
          ? e + "://" + oe(this.host) + (null !== t ? ":" + t : "")
          : "null";
      },
      getProtocol: function () {
        return this.scheme + ":";
      },
      setProtocol: function (e) {
        this.parse(requireObjectCoercible(e) + ":", ge);
      },
      getUsername: function () {
        return this.username;
      },
      setUsername: function (e) {
        var t = f(requireObjectCoercible(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
          this.username = "";
          for (var require = 0; require < t.length; require++) this.username += le(t[require], se);
        }
      },
      getPassword: function () {
        return this.password;
      },
      setPassword: function (e) {
        var t = f(requireObjectCoercible(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
          this.password = "";
          for (var require = 0; require < t.length; require++) this.password += le(t[require], se);
        }
      },
      getHost: function () {
        var e = this.host,
          t = this.port;
        return null === e ? "" : null === t ? oe(e) : oe(e) + ":" + t;
      },
      setHost: function (e) {
        this.cannotBeABaseURL || this.parse(e, xe);
      },
      getHostname: function () {
        var e = this.host;
        return null === e ? "" : oe(e);
      },
      setHostname: function (e) {
        this.cannotBeABaseURL || this.parse(e, Se);
      },
      getPort: function () {
        var e = this.port;
        return null === e ? "" : requireObjectCoercible(e);
      },
      setPort: function (e) {
        this.cannotHaveUsernamePasswordPort() ||
          ("" === (e = requireObjectCoercible(e)) ? (this.port = null) : this.parse(e, Ee));
      },
      getPathname: function () {
        var e = this.path;
        return this.cannotBeABaseURL ? e[0] : e.length ? "/" + F(e, "/") : "";
      },
      setPathname: function (e) {
        this.cannotBeABaseURL || ((this.path = []), this.parse(e, Pe));
      },
      getSearch: function () {
        var e = this.query;
        return e ? "?" + e : "";
      },
      setSearch: function (e) {
        "" === (e = requireObjectCoercible(e))
          ? (this.query = null)
          : ("?" === k(e, 0) && (e = j(e, 1)),
            (this.query = ""),
            this.parse(e, Ie)),
          this.searchParams.update();
      },
      getSearchParams: function () {
        return this.searchParams.facade;
      },
      getHash: function () {
        var e = this.fragment;
        return e ? "#" + e : "";
      },
      setHash: function (e) {
        "" !== (e = requireObjectCoercible(e))
          ? ("#" === k(e, 0) && (e = j(e, 1)),
            (this.fragment = ""),
            this.parse(e, ke))
          : (this.fragment = null);
      },
      update: function () {
        this.query = this.searchParams.serialize() || null;
      },
    };
    var Fe = function (e) {
        var t = p(this, Re),
          n = w(arguments.length, 1) > 1 ? arguments[1] : undefined,
          o = S(t, new Oe(e, false, n));
        hasOwnProperty_wrapper ||
          ((t.href = o.serialize()),
          (t.origin = o.getOrigin()),
          (t.protocol = o.getProtocol()),
          (t.username = o.getUsername()),
          (t.password = o.getPassword()),
          (t.host = o.getHost()),
          (t.hostname = o.getHostname()),
          (t.port = o.getPort()),
          (t.pathname = o.getPathname()),
          (t.search = o.getSearch()),
          (t.searchParams = o.getSearchParams()),
          (t.hash = o.getHash()));
      },
      Re = Fe.prototype,
      Me = function (e, t) {
        return {
          get: function () {
            return E(this)[e]();
          },
          set:
            t &&
            function (e) {
              return E(this)[t](e);
            },
          configurable: true,
          enumerable: true,
        };
      };
    if (
      (hasOwnProperty_wrapper &&
        (u(Re, "href", Me("serialize", "setHref")),
        u(Re, "origin", Me("getOrigin")),
        u(Re, "protocol", Me("getProtocol", "setProtocol")),
        u(Re, "username", Me("getUsername", "setUsername")),
        u(Re, "password", Me("getPassword", "setPassword")),
        u(Re, "host", Me("getHost", "setHost")),
        u(Re, "hostname", Me("getHostname", "setHostname")),
        u(Re, "port", Me("getPort", "setPort")),
        u(Re, "pathname", Me("getPathname", "setPathname")),
        u(Re, "search", Me("getSearch", "setSearch")),
        u(Re, "searchParams", Me("getSearchParams")),
        u(Re, "hash", Me("getHash", "setHash"))),
      defineBuiltIn(
        Re,
        "toJSON",
        function () {
          return E(this).serialize();
        },
        { enumerable: true }
      ),
      defineBuiltIn(
        Re,
        "toString",
        function () {
          return E(this).serialize();
        },
        { enumerable: true }
      ),
      G)
    ) {
      var Ne = G.createObjectURL,
        Be = G.revokeObjectURL;
      Ne && defineBuiltIn(Fe, "createObjectURL", l(Ne, G)),
        Be && defineBuiltIn(Fe, "revokeObjectURL", l(Be, G));
    }
    setToStringTag(Fe, "URL"),
      core_export({ global: true, constructor: true, forced: !r, sham: !hasOwnProperty_wrapper }, { URL: Fe });
  }