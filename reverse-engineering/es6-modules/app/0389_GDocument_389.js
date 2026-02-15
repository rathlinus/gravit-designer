/**
 * Webpack Module #389
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i {
    static GVDESIGN = {
    ext: 'gvdesign',
    mime: 'application/gravit+design',
    name: new GCore.GLocaleKey('GDocument', 'file-type.gvdesign'),
    title: new GCore.GLocaleKey('GDocument', 'title.save-gvdesign'),
    category: 'gravit',
    load: true,
    store: true,
    import_image: false,
    default: true,
  };

    static HEIC = {
      ext: 'heic',
      mime: 'image/heic',
      name: new GCore.GLocaleKey('GDocument', 'file-type.png'),
      category: 'image',
      load: true,
      store: false,
      import_image: true,
    };

    static PNG = {
      ext: 'png',
      mime: 'image/png',
      name: new GCore.GLocaleKey('GDocument', 'file-type.png'),
      category: 'image',
      load: true,
      store: true,
      import_image: true,
    };

    static JPG = {
      ext: 'jpg',
      mime: 'image/jpeg',
      name: new GCore.GLocaleKey('GDocument', 'file-type.jpeg'),
      category: 'image',
      load: true,
      store: true,
      import_image: true,
    };

    static JPEG = {
      ext: 'jpeg',
      mime: 'image/jpeg',
      category: 'image',
      load: true,
      import_image: true,
    };

    static SVG = {
      ext: 'svg',
      mime: 'image/svg+xml',
      name: new GCore.GLocaleKey('GDocument', 'file-type.svg'),
      category: 'vector',
      load: true,
      store: true,
      import_image: true,
    };

    static SVGZ = {
      ext: 'svgz',
      mime: 'image/svg+xml',
      name: new GCore.GLocaleKey('GDocument', 'file-type.svgz'),
      category: 'vector',
      load: true,
      store: false,
      import_image: true,
    };

    static PDF = {
      ext: 'pdf',
      mime: 'application/pdf',
      name: new GCore.GLocaleKey('GDocument', 'file-type.pdf'),
      category: 'document',
      load: true,
      store: true,
      import_image: true,
    };

    static AI = {
      ext: 'ai',
      mime: 'application/pdf',
      name: new GCore.GLocaleKey('GDocument', 'file-type.ai'),
      category: 'document',
      load: true,
      store: false,
      import_image: true,
      pro: true,
    };

    static EPS = {
      ext: 'eps',
      mime: 'application/postscript',
      name: new GCore.GLocaleKey('GDocument', 'file-type.eps'),
      category: 'document',
      load: true,
      store: false,
      import_image: true,
      pro: true,
    };

    static SKETCH = {
      ext: 'sketch',
      mime: 'application/zip',
      name: new GCore.GLocaleKey('GDocument', 'file-type.sketch'),
      category: 'document',
      load: true,
      store: false,
      import_image: true,
      pro: true,
    };

    static ZIP = {
      ext: 'zip',
      mime: 'application/zip',
      load: false,
      store: false,
      import_image: false,
    };

    static getFileTypesArray() {
      return [i.GVDESIGN, i.PNG, i.HEIC, i.JPG, i.JPEG, i.SVG, i.PDF, i.EPS];
    }

  }
  exports.exports = i;
}