/**
 * Webpack Module #1101
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor(e, t) {
      null != e
      ? o.Type.hasOwnProperty(e)
      ? (this.errCode = o.Type[e])
      : (this.errCode = o.Type.UnknownError)
      : null != t && t > 0 && t <= o.Type.UnknownError && (this.errCode = t);
    }

    errCode = null;

    static Type = {
    MaxBitmapDim: 1,
    FacingPages: 2,
    OddEvenLayers: 3,
    OtherClientErr: 4,
    TooBigFileSize: 5,
    NoImages: 6,
    UnknownError: 7,
  };

    static MaxFileSize = 471859200;

  }
  exports.exports = o;
}