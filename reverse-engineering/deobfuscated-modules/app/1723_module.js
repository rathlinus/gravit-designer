/**
 * Webpack Module #1723
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* module */,
      a = _interopRequireDefault(require(565) /* module_565 */),
      r = {
        init: function (e) {
          return (
            (e = $.extend({ allowDrag: true, allowDrop: true }, e)),
            this.each(function () {
              var t = this,
                n = $(this);
              n.data("gpatterntarget", {
                options: e,
                pattern: null,
                types: null,
              }),
                e.allowDrag &&
                  n
                    .attr("draggable", "true")
                    .attr("data-drag-mode", a.default.PRESS_AND_HOLD)
                    .on("dragstart", function (e) {
                      var t = e.originalEvent,
                        _interopRequireDefault = n.data("gpatterntarget").pattern;
                      if (_interopRequireDefault) {
                        t.stopPropagation(), n.trigger("patterndrag", _interopRequireDefault);
                        var a = gDragImage().css({
                          background: GCore.GPattern.asCSSBackground(_interopRequireDefault),
                          width: "20px",
                          height: "20px",
                        });
                        t.dataTransfer.setDragImage(a[0], 10, 10),
                          (t.dataTransfer.effectAllowed = "move"),
                          t.dataTransfer.setData(
                            GCore.GPattern.MIME_TYPE,
                            GCore.GPattern.serialize(_interopRequireDefault)
                          ),
                          (t.dataTransfer.sourceElement = this);
                      } else t.preventDefault();
                    })
                    .on("dragend", function (e) {
                      e.stopPropagation();
                    }),
                e.allowDrop &&
                  n
                    .on("dragover", function (e) {
                      e.stopPropagation();
                      var t = e.originalEvent;
                      t.preventDefault(),
                        t.stopPropagation(),
                        (e.originalEvent.dataTransfer.dropEffect = "move");
                    })
                    .on("drop", function (e) {
                      e.stopPropagation();
                      var _interopRequireDefault = n.data("gpatterntarget"),
                        a = e.originalEvent,
                        s = a.dataTransfer.getData(GCore.GPattern.MIME_TYPE);
                      if (s && (s = GCore.GPattern.deserialize(s))) {
                        var l = true;
                        if (_interopRequireDefault.types && _interopRequireDefault.types.length > 0) {
                          l = false;
                          for (var c = 0; c < _interopRequireDefault.types.length; ++c)
                            if (_interopRequireDefault.types[c] && s instanceof _interopRequireDefault.types[c]) {
                              l = true;
                              break;
                            }
                        }
                        if (l) {
                          var d = n.data("gpatterntarget").pattern;
                          GCore.GUtil.equals(s, d) ||
                            (r.value.call(t, s), n.trigger("patternchange", s)),
                            n.trigger("patterndrop", [s, a]);
                        }
                      }
                      return false;
                    });
            })
          );
        },
        value: function (e) {
          var t = $(this),
            n = t.data("gpatterntarget") || {};
          return arguments.length
            ? ((e = "string" == typeof e ? GCore.GPattern.deserialize(e) : e),
              (n.pattern = e),
              this)
            : n.pattern || null;
        },
        types: function (e) {
          var t = $(this),
            n = t.data("gpatterntarget");
          return arguments.length ? ((n.types = e), this) : n.types;
        },
      };
    $.fn.gPatternTarget = function (e) {
      return r[e]
        ? r[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : r.init.apply(this, arguments);
    };
  }