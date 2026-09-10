/**
 * chunk.vendor.js Module #326
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(709);

      function r() {
        ((this.commands = []),
          (this.fill = "black"),
          (this.stroke = null),
          (this.strokeWidth = 1));
      }
      ((r.prototype.moveTo = function (e, t) {
        this.commands.push({
          type: "M",
          x: e,
          y: t,
        });
      }),
        (r.prototype.lineTo = function (e, t) {
          this.commands.push({
            type: "L",
            x: e,
            y: t,
          });
        }),
        (r.prototype.curveTo = r.prototype.bezierCurveTo =
          function (e, t, i, n, r, o) {
            this.commands.push({
              type: "C",
              x1: e,
              y1: t,
              x2: i,
              y2: n,
              x: r,
              y: o,
            });
          }),
        (r.prototype.quadTo = r.prototype.quadraticCurveTo =
          function (e, t, i, n) {
            this.commands.push({
              type: "Q",
              x1: e,
              y1: t,
              x: i,
              y: n,
            });
          }),
        (r.prototype.close = r.prototype.closePath =
          function () {
            this.commands.push({
              type: "Z",
            });
          }),
        (r.prototype.extend = function (e) {
          if (e.commands) e = e.commands;
          else if (e instanceof n.BoundingBox) {
            var t = e;
            return (
              this.moveTo(t.x1, t.y1),
              this.lineTo(t.x2, t.y1),
              this.lineTo(t.x2, t.y2),
              this.lineTo(t.x1, t.y2),
              void this.close()
            );
          }
          Array.prototype.push.apply(this.commands, e);
        }),
        (r.prototype.getBoundingBox = function () {
          for (
            var e = new n.BoundingBox(), t = 0, i = 0, r = 0, o = 0, a = 0;
            a < this.commands.length;
            a++
          ) {
            var s = this.commands[a];
            switch (s.type) {
              case "M":
                (e.addPoint(s.x, s.y), (t = r = s.x), (i = o = s.y));
                break;
              case "L":
                (e.addPoint(s.x, s.y), (r = s.x), (o = s.y));
                break;
              case "Q":
                (e.addQuad(r, o, s.x1, s.y1, s.x, s.y), (r = s.x), (o = s.y));
                break;
              case "C":
                (e.addBezier(r, o, s.x1, s.y1, s.x2, s.y2, s.x, s.y),
                  (r = s.x),
                  (o = s.y));
                break;
              case "Z":
                ((r = t), (o = i));
                break;
              default:
                throw new Error("Unexpected path command " + s.type);
            }
          }
          return (e.isEmpty() && e.addPoint(0, 0), e);
        }),
        (r.prototype.draw = function (e) {
          e.beginPath();
          for (var t = 0; t < this.commands.length; t += 1) {
            var i = this.commands[t];
            "M" === i.type
              ? e.moveTo(i.x, i.y)
              : "L" === i.type
                ? e.lineTo(i.x, i.y)
                : "C" === i.type
                  ? e.bezierCurveTo(i.x1, i.y1, i.x2, i.y2, i.x, i.y)
                  : "Q" === i.type
                    ? e.quadraticCurveTo(i.x1, i.y1, i.x, i.y)
                    : "Z" === i.type && e.closePath();
          }
          (this.fill && ((e.fillStyle = this.fill), e.fill()),
            this.stroke &&
              ((e.strokeStyle = this.stroke),
              (e.lineWidth = this.strokeWidth),
              e.stroke()));
        }),
        (r.prototype.toPathData = function (e) {
          function t(t) {
            return Math.round(t) === t ? "" + Math.round(t) : t.toFixed(e);
          }

          function i() {
            for (var e = "", i = 0; i < arguments.length; i += 1) {
              var n = arguments[i];
              (n >= 0 && i > 0 && (e += " "), (e += t(n)));
            }
            return e;
          }
          e = void 0 !== e ? e : 2;
          for (var n = "", r = 0; r < this.commands.length; r += 1) {
            var o = this.commands[r];
            "M" === o.type
              ? (n += "M" + i(o.x, o.y))
              : "L" === o.type
                ? (n += "L" + i(o.x, o.y))
                : "C" === o.type
                  ? (n += "C" + i(o.x1, o.y1, o.x2, o.y2, o.x, o.y))
                  : "Q" === o.type
                    ? (n += "Q" + i(o.x1, o.y1, o.x, o.y))
                    : "Z" === o.type && (n += "Z");
          }
          return n;
        }),
        (r.prototype.toSVG = function (e) {
          var t = '<path d="';
          return (
            (t += this.toPathData(e)),
            (t += '"'),
            this.fill &&
              "black" !== this.fill &&
              (null === this.fill
                ? (t += ' fill="none"')
                : (t += ' fill="' + this.fill + '"')),
            this.stroke &&
              (t +=
                ' stroke="' +
                this.stroke +
                '" stroke-width="' +
                this.strokeWidth +
                '"'),
            (t += "/>")
          );
        }),
        (r.prototype.toDOMElement = function (e) {
          var t = this.toPathData(e),
            i = document.createElementNS("http://www.w3.org/2000/svg", "path");
          return (i.setAttribute("d", t), i);
        }),
        (t.Path = r));
    }