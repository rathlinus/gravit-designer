/**
 * Webpack Module #682
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    isCallable = require(29) /* isCallable */,
    DataModule_65 = require(65) /* DataModule_65 */,
    toString_default = require(37) /* toString_default */,
    s = require(143) /* module_143 */,
    l = require(371) /* module_371 */,
    DataModule_323 = require(323) /* DataModule_323 */,
    createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
    DataModule_102 = require(102) /* DataModule_102 */,
    p = require(149) /* module_149 */,
    g = !createNonEnumerableProperty && p('filter', TypeError),
    h = l(function () {
      for (
        var exports,
          module,
          require = this.iterator,
          core_export = this.predicate,
          DataModule_65 = this.next;
        ;
      ) {
        if (
          ((exports = toString_default(isCallable(DataModule_65, require))),
          (this.done = !!exports.done))
        )
          return;
        if (
          ((module = exports.value),
          DataModule_323(require, core_export, [module, this.counter++], true))
        )
          return module;
      }
    });
  core_export(
    { target: 'Iterator', proto: true, real: true, forced: createNonEnumerableProperty || g },
    {
      filter: function (e) {
        toString_default(this);
        try {
          DataModule_65(e);
        } catch (e) {
          DataModule_102(this, 'throw', e);
        }
        return g ? isCallable(g, this, e) : new h(s(this), { predicate: e });
      },
    }
  );
}
