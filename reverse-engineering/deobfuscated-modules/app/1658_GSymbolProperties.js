/**
 * Webpack Module #1658
 * Type: class
 * Name: GSymbolProperties
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var o = require(1) /* module */,
      i = require(123) /* GProperties */,
      a = (require(173) /* stub_requires_1 */, require(874) /* GDetachSymbolAction */),
      r = require(566) /* GFitSelectionAction */;
    const s = require(135) /* GSettingChangedEvent */;
    function l() {}
    o.GObject.inherit(l, i),
      (l.prototype._panel = null),
      (l.prototype._toolbar = null),
      (l.prototype._document = null),
      (l.prototype._symbols = null),
      (l.prototype._disabledSiblingMaps = null),
      (l.prototype.init = function (e, t) {
        (this._panel = e),
          (this._toolbar = t),
          t.addClass("filled"),
          t.addClass("page-toolbar"),
          t.addClass("symbol-instance-toolbar"),
          e.addClass("symbol-instance-panel");
        var n = $("<select></select>")
          .attr("data-property", "symbol-instance")
          .on(
            "change",
            function (e) {
              gDesigner.stats("symbolproperties_select_swap");
              var t = this._document.getScene(),
                n = this._document.getEditor(),
                i = function (e) {
                  var n = e.findParent(function (e) {
                    return e instanceof o.GPage;
                  });
                  n && t.getActivePage() !== n && t.setActivePage(n);
                };
              if (
                e.target.value &&
                "0" !== e.target.value &&
                "-1" !== e.target.value
              ) {
                var s = $(e.target)
                  .find('option[value="' + e.target.value + '"]')
                  .data("symbol");
                if (s) {
                  (n = this._document.getEditor()).beginTransaction();
                  var l = s,
                    c = this._symbols[0],
                    d = c.getMasterSymbol(),
                    u = c.getDisabledSiblings(),
                    p = c.swapWith(l);
                  if (
                    (this._disabledSiblingMaps ||
                      (this._disabledSiblingMaps = {}),
                    u)
                  ) {
                    var g =
                      d.getMultireferenceId() + "_" + p.getMultireferenceId();
                    this._disabledSiblingMaps[g] = u;
                  }
                  var h =
                    this._disabledSiblingMaps[
                      l.getMultireferenceId() + "_" + c.getMultireferenceId()
                    ];
                  h && p.desynchronize(h),
                    p && (i(p), n.updateSelection(false, [p])),
                    n.commitTransaction("Swap symbol instance");
                }
              } else if (e.target.value && "0" === e.target.value) {
                var f = this._symbols[0].getMasterSymbol();
                n.beginTransaction(),
                  i(f),
                  n.clearSelection(),
                  n.updateSelection(false, [f]),
                  n.hasSelection() &&
                    gDesigner.executeAction(r.ID, undefined, undefined, true),
                  n.commitTransaction("Select master symbol");
              } else
                e.target.value &&
                  "-1" === e.target.value &&
                  (gDesigner.executeAction(a.ID, undefined, undefined, true),
                  n.updateSelection(false, n.getSelection().slice()));
            }.bind(this)
          );
        $("<label></label>")
          .text(o.GLocale.get(new o.GLocaleKey("GSymbolProperties", "title")))
          .appendTo(t),
          $("<div></div>")
            .addClass("chooseinstance-row")
            .gPropertyRow({
              columns: [
                {
                  clazz: "chooseinstance-title-col",
                  content: $(
                    "<span>" +
                      o.GLocale.get(
                        new o.GLocaleKey(
                          "GSymbolProperties",
                          "text.chooseinstance"
                        )
                      ) +
                      "</span>"
                  ),
                },
                { clazz: "chooseinstance-select-col", content: n },
              ],
            })
            .appendTo(e);
      }),
      (l.prototype.update = function (e, t) {
        return (
          this._updateUI(),
          this._document &&
            (gDesigner.removeEventListener(s, this._settingChanged, this),
            (this._document = null)),
          (this._symbols = null),
          !(
            !e ||
            (gDesigner.addEventListener(s, this._settingChanged, this),
            !(t = t.filter(
              (e) =>
                e instanceof o.GSymbol && !e.isMaster() && !!e.getMasterSymbol()
            )).length)
          ) &&
            ((this._symbols = t.slice()),
            (this._document = e),
            this._updateProperties(),
            true)
        );
      }),
      (l.prototype._updateUI = function () {
        gDesigner.isTouchEnabled()
          ? this._panel.find(".frm-checkbox").gCheckboxSlider()
          : this._panel.find(".frm-checkbox").gCheckboxSlider("unmount");
      }),
      (l.prototype._settingChanged = function (e) {
        "touch" === e.key && this._updateUI();
      }),
      (l.prototype._updateProperties = function () {
        var e,
          t = this._document.getScene(),
          n = this._symbols[0],
          i = n.getMasterSymbol(),
          r = (t.isFixedSized(), t.getSymbols());
        this._symbols.length > 1
          ? (e =
              this._symbols.length +
              " " +
              o.GLocale.get(
                new o.GLocaleKey("GSymbolProperties", "text.instances")
              ))
          : ((e =
              n.getProperty("name") ||
              o.GLocale.get(new o.GLocaleKey("GSymbolProperties", "title"))),
            i.getProperty("name")
              ? (e +=
                  " (" +
                  o.GLocale.get(
                    new o.GLocaleKey("GSymbolProperties", "text.instanceof")
                  ) +
                  " " +
                  i.getProperty("name"))
              : (e +=
                  " (" +
                  o.GLocale.get(
                    new o.GLocaleKey("GSymbolProperties", "text.instance")
                  )),
            (e += ")")),
          this._toolbar.find("label:first-child").text(e);
        var s,
          l = this._panel
            .find('select[data-property="symbol-instance"]')
            .empty();
        gDesigner.canExecuteAction(a.ID) &&
          (l.append(
            $('<option value="-1">(' + o.GLocale.get(a.TITLE) + ")</option>")
          ),
          l.append((s = $('<option value="-2"></option>'))));
        var c = 0;
        !r.length && i && (r = [i]),
          r.length
            ? l.removeClass("g-disabled").attr("disabled", null)
            : l.addClass("g-disabled").attr("disabled", "");
        var d = false;
        r.forEach(function (e) {
          var t = $("<option></option>")
            .data("symbol", e)
            .attr("value", ++c)
            .text(e.getProperty("name"))
            .appendTo(l);
          i.getMultireferenceId() === e.getMultireferenceId() &&
            (t.prop("selected", true), (d = true));
        }),
          d || s.prop("selected", true),
          i &&
            i.getScene() &&
            l.append(
              $(
                '<option value="0">(' +
                  o.GLocale.get(
                    new o.GLocaleKey("GSymbolProperties", "text.master")
                  ) +
                  ")</option>"
              )
            );
      }),
      (l.prototype.toString = function () {
        return "[Object GSymbolProperties]";
      }),
      (exports.exports = l);
  }