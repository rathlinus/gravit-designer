/**
 * Webpack Module #1519
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, a;
    (i = [require(171) /* module_171 */, require(1257) /* module_1257 */, require(605) /* module_605 */, require(1258) /* module_1258 */]),
      undefined ===
        (a =
          "function" ==
          typeof (o = function (e) {
            var t = false;
            return (
              e(document).on("mouseup", function () {
                t = false;
              }),
              e.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                  cancel: "input, textarea, button, select, option",
                  distance: 1,
                  delay: 0,
                },
                _mouseInit: function () {
                  var t = this;
                  this.element
                    .on("mousedown." + this.widgetName, function (e) {
                      return t._mouseDown(e);
                    })
                    .on("click." + this.widgetName, function (n) {
                      if (
                        true ===
                        e.data(n.target, t.widgetName + ".preventClickEvent")
                      )
                        return (
                          e.removeData(
                            n.target,
                            t.widgetName + ".preventClickEvent"
                          ),
                          n.stopImmediatePropagation(),
                          false
                        );
                    }),
                    (this.started = false);
                },
                _mouseDestroy: function () {
                  this.element.off("." + this.widgetName),
                    this._mouseMoveDelegate &&
                      this.document
                        .off(
                          "mousemove." + this.widgetName,
                          this._mouseMoveDelegate
                        )
                        .off(
                          "mouseup." + this.widgetName,
                          this._mouseUpDelegate
                        );
                },
                _mouseDown: function (n) {
                  if (!t) {
                    (this._mouseMoved = false),
                      this._mouseStarted && this._mouseUp(n),
                      (this._mouseDownEvent = n);
                    var o = this,
                      i = 1 === n.which,
                      a =
                        !(
                          "string" != typeof this.options.cancel ||
                          !n.target.nodeName
                        ) && e(n.target).closest(this.options.cancel).length;
                    return !(
                      i &&
                      !a &&
                      this._mouseCapture(n) &&
                      ((this.mouseDelayMet = !this.options.delay),
                      this.mouseDelayMet ||
                        (this._mouseDelayTimer = setTimeout(function () {
                          o.mouseDelayMet = true;
                        }, this.options.delay)),
                      this._mouseDistanceMet(n) &&
                      this._mouseDelayMet(n) &&
                      ((this._mouseStarted = false !== this._mouseStart(n)),
                      !this._mouseStarted)
                        ? (n.preventDefault(), 0)
                        : (true ===
                            e.data(
                              n.target,
                              this.widgetName + ".preventClickEvent"
                            ) &&
                            e.removeData(
                              n.target,
                              this.widgetName + ".preventClickEvent"
                            ),
                          (this._mouseMoveDelegate = function (e) {
                            return o._mouseMove(e);
                          }),
                          (this._mouseUpDelegate = function (e) {
                            return o._mouseUp(e);
                          }),
                          this.document
                            .on(
                              "mousemove." + this.widgetName,
                              this._mouseMoveDelegate
                            )
                            .on(
                              "mouseup." + this.widgetName,
                              this._mouseUpDelegate
                            ),
                          n.preventDefault(),
                          (t = true),
                          0))
                    );
                  }
                },
                _mouseMove: function (t) {
                  if (this._mouseMoved) {
                    if (
                      e.ui.ie &&
                      (!document.documentMode || document.documentMode < 9) &&
                      !t.button
                    )
                      return this._mouseUp(t);
                    if (!t.which)
                      if (
                        t.originalEvent.altKey ||
                        t.originalEvent.ctrlKey ||
                        t.originalEvent.metaKey ||
                        t.originalEvent.shiftKey
                      )
                        this.ignoreMissingWhich = true;
                      else if (!this.ignoreMissingWhich)
                        return this._mouseUp(t);
                  }
                  return (
                    (t.which || t.button) && (this._mouseMoved = true),
                    this._mouseStarted
                      ? (this._mouseDrag(t), t.preventDefault())
                      : (this._mouseDistanceMet(t) &&
                          this._mouseDelayMet(t) &&
                          ((this._mouseStarted =
                            false !== this._mouseStart(this._mouseDownEvent, t)),
                          this._mouseStarted
                            ? this._mouseDrag(t)
                            : this._mouseUp(t)),
                        !this._mouseStarted)
                  );
                },
                _mouseUp: function (n) {
                  this.document
                    .off(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .off("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted &&
                      ((this._mouseStarted = false),
                      n.target === this._mouseDownEvent.target &&
                        e.data(
                          n.target,
                          this.widgetName + ".preventClickEvent",
                          true
                        ),
                      this._mouseStop(n)),
                    this._mouseDelayTimer &&
                      (clearTimeout(this._mouseDelayTimer),
                      delete this._mouseDelayTimer),
                    (this.ignoreMissingWhich = false),
                    (t = false),
                    n.preventDefault();
                },
                _mouseDistanceMet: function (e) {
                  return (
                    Math.max(
                      Math.abs(this._mouseDownEvent.pageX - e.pageX),
                      Math.abs(this._mouseDownEvent.pageY - e.pageY)
                    ) >= this.options.distance
                  );
                },
                _mouseDelayMet: function () {
                  return this.mouseDelayMet;
                },
                _mouseStart: function () {},
                _mouseDrag: function () {},
                _mouseStop: function () {},
                _mouseCapture: function () {
                  return true;
                },
              })
            );
          })
            ? o.apply(module, i)
            : o) || (exports.exports = a);
  }