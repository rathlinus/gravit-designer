/**
 * Webpack Module #1596
 * Type: unknown
 */

function (exports, module) {
  !(function (e) {
    if (e) {
      var module = {},
        n = e.prototype.stopCallback;
      ((e.prototype.stopCallback = function (e, o, i, a) {
        return !!this.paused || (!module[i] && !module[a] && n.call(this, e, o, i));
      }),
        (e.prototype.bindGlobal = function (e, n, o) {
          if ((this.bind(e, n, o), e instanceof Array))
            for (var i = 0; i < e.length; i++) module[e[i]] = true;
          else module[e] = true;
        }),
        e.init());
    }
  })('undefined' != typeof Mousetrap ? Mousetrap : undefined);
}
