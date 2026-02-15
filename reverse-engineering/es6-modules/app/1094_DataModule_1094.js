/**
 * Webpack Module #1094
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var o = require(592);
  const { isUTS: i, UTStoCDA: a } = require(1095);
  class r {
    constructor(e, t, n, r) {
      if (!t) throw new o('GCloudAnnotations: no cloud annotations id');
      if (!e) throw new o('GCloudAnnotations: empty cloud annotations result', t);
      if (
      (null === e.annotationsCollection && (e.annotationsCollection = []),
      !e.annotationsCollection ||
      (!i(e.annotationsCollection) && !(e.annotationsCollection instanceof Array)))
      )
      throw new o('GCloudAnnotations: no annotationsCollection inside cloud annotations', t);
      if (!e.lastUpdateTime && 0 !== e.lastUpdateTime)
      throw new o('GCloudAnnotations: no lastUpdateTime inside cloud annotations', t);
      ((this.annotationsCollection = e.annotationsCollection),
      i(this.annotationsCollection)
      ? ((this.annotationsCollection = a(this.annotationsCollection)), r && (r.hasUTS = true))
      : r && (r.hasUTS = false),
      (this.lastUpdateTime = new Date(e.lastUpdateTime).getTime()),
      (this.cid = t),
      n && (this.accessToken = n));
    }

    annotationsCollection = null;
    lastUpdateTime = null;
    cid = null;
    accessToken = null;

    toString() {
      return '[GCloudAnnotations]';
    }

    static hasUTS = true;

    static hasUTS = false;

  }
  exports.exports = r;
}