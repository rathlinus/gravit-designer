/**
 * chunk.vendor.js Module #925
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(54),
        o = i(48);
      e.exports = function (e) {
        var t,
          i = {
            SquareFilled:
              ((t = new r()),
              t.addVertex(o.Command.Move, -1, -2),
              t.addVertex(o.Command.Line, 1, -2),
              t.addVertex(o.Command.Line, 1, 0),
              t.addVertex(o.Command.Line, -1, 0),
              t.addVertex(o.Command.Close),
              t),
            SquareOutlined: (function () {
              var e = new r();
              return (
                e.addVertex(o.Command.Move, -1, -2),
                e.addVertex(o.Command.Line, 1, -2),
                e.addVertex(o.Command.Line, 1, 0),
                e.addVertex(o.Command.Line, -1, 0),
                e.addVertex(o.Command.Close),
                e.addVertex(o.Command.Move, -0.8, -1.8),
                e.addVertex(o.Command.Line, -0.8, -0.2),
                e.addVertex(o.Command.Line, 0.8, -0.2),
                e.addVertex(o.Command.Line, 0.8, -1.8),
                e.addVertex(o.Command.Close),
                e
              );
            })(),
            CircleFilled: (function () {
              var e = new r();
              return (
                e.addVertex(o.Command.Move, -1, -1),
                e.addVertex(o.Command.Curve2, 0, -2),
                e.addVertex(o.Command.Curve2, -1, -1.551915024494),
                e.addVertex(o.Command.Curve2, -0.551915024494, -2),
                e.addVertex(o.Command.Curve2, 1, -1),
                e.addVertex(o.Command.Curve2, 0.551915024494, -2),
                e.addVertex(o.Command.Curve2, 1, -1.551915024494),
                e.addVertex(o.Command.Curve2, 0, 0),
                e.addVertex(o.Command.Curve2, 1, -0.448084975506),
                e.addVertex(o.Command.Curve2, 0.551915024494, 0),
                e.addVertex(o.Command.Curve2, -1, -1),
                e.addVertex(o.Command.Curve2, -0.551915024494, 0),
                e.addVertex(o.Command.Curve2, -1, -0.448084975506),
                e.addVertex(o.Command.Close),
                e
              );
            })(),
            CircleOutlined: (function () {
              var e = new r();
              return (
                e.addVertex(o.Command.Move, -1, -1),
                e.addVertex(o.Command.Curve2, 0, -2),
                e.addVertex(o.Command.Curve2, -1, -1.551915024494),
                e.addVertex(o.Command.Curve2, -0.551915024494, -2),
                e.addVertex(o.Command.Curve2, 1, -1),
                e.addVertex(o.Command.Curve2, 0.551915024494, -2),
                e.addVertex(o.Command.Curve2, 1, -1.551915024494),
                e.addVertex(o.Command.Curve2, 0, 0),
                e.addVertex(o.Command.Curve2, 1, -0.448084975506),
                e.addVertex(o.Command.Curve2, 0.551915024494, 0),
                e.addVertex(o.Command.Curve2, -1, -1),
                e.addVertex(o.Command.Curve2, -0.551915024494, 0),
                e.addVertex(o.Command.Curve2, -1, -0.448084975506),
                e.addVertex(o.Command.Close),
                e.addVertex(o.Command.Move, -0.8, -1),
                e.addVertex(o.Command.Curve2, 0, -0.2),
                e.addVertex(o.Command.Curve2, -0.8, -0.5584679804048),
                e.addVertex(o.Command.Curve2, -0.4415320195952, -0.2),
                e.addVertex(o.Command.Curve2, 0.8, -1),
                e.addVertex(o.Command.Curve2, 0.4415320195952, -0.2),
                e.addVertex(o.Command.Curve2, 0.8, -0.5584679804048),
                e.addVertex(o.Command.Curve2, 0, -1.8),
                e.addVertex(o.Command.Curve2, 0.8, -1.4415320195952),
                e.addVertex(o.Command.Curve2, 0.4415320195952, -1.8),
                e.addVertex(o.Command.Curve2, -0.8, -1),
                e.addVertex(o.Command.Curve2, -0.4415320195952, -1.8),
                e.addVertex(o.Command.Curve2, -0.8, -1.4415320195952),
                e.addVertex(o.Command.Close),
                e
              );
            })(),
            Check: (function () {
              var e = new r();
              return (
                e.addVertex(1, -0.22766122766122898, 0.30380730380730236),
                e.addVertex(4, -0.44470344470344614, -0.0712250712250726),
                e.addVertex(4, -0.3216783216783231, 0.1339031339031327),
                e.addVertex(4, -0.39393939393939537, 0.008806008806007348),
                e.addVertex(2, -0.5249935249935265, -0.19709919709919865),
                e.addVertex(2, -0.5858585858585875, -0.28956228956229135),
                e.addVertex(4, -1.0000000000000018, -0.8010878010878031),
                e.addVertex(4, -0.7182077182077199, -0.4959854959854979),
                e.addVertex(4, -0.8565138565138584, -0.6664076664076686),
                e.addVertex(4, -0.7710437710437728, -0.9026159026159049),
                e.addVertex(4, -0.91815591815592, -0.8689458689458711),
                e.addVertex(4, -0.8417508417508435, -0.9026159026159049),
                e.addVertex(4, -0.5387205387205404, -0.8070448070448093),
                e.addVertex(4, -0.6840196840196857, -0.9026159026159049),
                e.addVertex(4, -0.6065786065786081, -0.8707588707588729),
                e.addVertex(4, -0.28231028231028366, -0.44289044289044477),
                e.addVertex(4, -0.47086247086247246, -0.7433307433307454),
                e.addVertex(4, -0.38539238539238685, -0.621859621859624),
                e.addVertex(4, 0.16550116550116445, -1.5281015281015309),
                e.addVertex(4, -0.16498316498316634, -0.8243978243978265),
                e.addVertex(4, -0.01579901579901688, -1.1859621859621883),
                e.addVertex(4, 0.4333074333074325, -1.9036519036519066),
                e.addVertex(4, 0.26547526547526457, -1.714063714063717),
                e.addVertex(4, 0.35483035483035397, -1.8394198394198424),
                e.addVertex(4, 0.7451437451437444, -2.000000000000003),
                e.addVertex(4, 0.511784511784511, -1.9678839678839708),
                e.addVertex(4, 0.6156436156436149, -2.000000000000003),
                e.addVertex(4, 0.9999999999999996, -1.9681429681429712),
                e.addVertex(4, 0.8140378140378135, -2.000000000000003),
                e.addVertex(4, 0.8989898989898988, -1.9893809893809924),
                e.addVertex(4, 0.37632737632737556, -1.2214452214452238),
                e.addVertex(4, 0.7399637399637393, -1.7586117586117616),
                e.addVertex(4, 0.5322455322455313, -1.5097125097125124),
                e.addVertex(4, -0.22766122766122898, 0.30380730380730236),
                e.addVertex(4, 0.22066822066821978, -0.9331779331779355),
                e.addVertex(4, 0.0191660191660179, -0.42476042476042664),
                e.addVertex(5, 0, 0),
                e
              );
            })(),
            DiamondFilled: (function () {
              var e = new r();
              return (
                e.addVertex(o.Command.Move, -1, -1),
                e.addVertex(o.Command.Line, 0, -2),
                e.addVertex(o.Command.Line, 1, -1),
                e.addVertex(o.Command.Line, 0, 0),
                e.addVertex(o.Command.Close),
                e
              );
            })(),
            DiamondOutlined: (function () {
              var e = new r();
              return (
                e.addVertex(o.Command.Move, -1, -1),
                e.addVertex(o.Command.Line, 0, -2),
                e.addVertex(o.Command.Line, 1, -1),
                e.addVertex(o.Command.Line, 0, 0),
                e.addVertex(o.Command.Close),
                e.addVertex(o.Command.Move, -0.717157287525381, -1),
                e.addVertex(o.Command.Line, 0, -0.282842712474619),
                e.addVertex(o.Command.Line, 0.717157287525381, -1),
                e.addVertex(o.Command.Line, 0, -1.717157287525381),
                e.addVertex(o.Command.Close),
                e
              );
            })(),
            RightPointingFilled: (function () {
              var e = new r();
              return (
                e.addVertex(o.Command.Move, -1, -2),
                e.addVertex(o.Command.Line, 1, -0.84529946162075),
                e.addVertex(o.Command.Line, -1, 0.3094010767585),
                e.addVertex(o.Command.Close),
                e
              );
            })(),
            RightPointingOutlined: (function () {
              var e = new r();
              return (
                e.addVertex(o.Command.Move, -1, -2),
                e.addVertex(o.Command.Line, 1, -0.84529946162075),
                e.addVertex(o.Command.Line, -1, 0.3094010767585),
                e.addVertex(o.Command.Close),
                e.addVertex(o.Command.Move, -0.8, -1.6535898384862),
                e.addVertex(o.Command.Line, -0.8, -0.0370090847553),
                e.addVertex(o.Command.Line, 0.6, -0.84529946162075),
                e.addVertex(o.Command.Close),
                e
              );
            })(),
          };

        function a(t, n) {
          var r = n[t.node.getDepth() % n.length];
          e.VertexSource.call(this, i[r.$]);
        }

        function s(t, i, n) {
          e.PathNumber.call(this, t, i, function (e) {
            var t = e.length - 1,
              i = e[t],
              r = String(i + 1),
              o = t % 3;
            if (1 === o) {
              var a = "a".charCodeAt(),
                s = "z".charCodeAt() - a,
                l = String.fromCharCode((i % s) + a),
                h = Math.floor(i / s);
              for (r = l; h-- > 0; ) r += l;
            } else if (2 === o) {
              r = "";
              for (
                var A = i + 1,
                  c = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                  p = [
                    "M",
                    "CM",
                    "D",
                    "CD",
                    "C",
                    "XC",
                    "L",
                    "XL",
                    "X",
                    "IX",
                    "V",
                    "IV",
                    "I",
                  ],
                  u = 0;
                u <= c.length;
                u++
              )
                for (; A % c[u] < A; ) ((r += p[u].toLowerCase()), (A -= c[u]));
            }
            return r + n;
          });
        }
        (n.inherit(a, e.VertexSource),
          (e.Bullet = function (e, t) {
            a.call(this, t, [
              {
                $: "CircleFilled",
              },
              {
                $: "CircleOutlined",
              },
              {
                $: "SquareFilled",
              },
            ]);
          }),
          n.inherit(e.Bullet, a),
          (e.Check = function (e, t) {
            a.call(this, t, [
              {
                $: "Check",
              },
              {
                $: "DiamondFilled",
              },
              {
                $: "DiamondOutlined",
              },
            ]);
          }),
          n.inherit(e.Check, a),
          (e.Square = function (e, t) {
            a.call(this, t, [
              {
                $: "SquareOutlined",
              },
              {
                $: "RightPointingFilled",
              },
              {
                $: "RightPointingOutlined",
              },
            ]);
          }),
          n.inherit(e.Square, a),
          (e.Number = function (t, i) {
            e.PathNumber.call(this, t, i, function (e) {
              return e
                .map(function (e) {
                  return e + 1;
                })
                .join(".");
            });
          }),
          n.inherit(e.Number, e.PathNumber),
          n.inherit(s, e.PathNumber),
          (e.RomanDot = function (e, t) {
            s.call(this, e, t, ".");
          }),
          n.inherit(e.RomanDot, s),
          (e.RomanBracket = function (e, t) {
            s.call(this, e, t, ")");
          }),
          n.inherit(e.RomanBracket, s));
      };
    }