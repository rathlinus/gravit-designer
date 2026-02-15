/**
 * Webpack Module #554
 * Type: unknown
 */

function (exports, module) {
  class n {
    getImageAsBlob() {
      return new Blob([this.getImageAsBinary()], {
        type: this.getMimeType(),
      });
    }
    getImageAsBinary() {
      const exports = atob(this.getImageAsBase64()),
        module = new Uint8Array(exports.length);
      for (let n = 0; n < exports.length; n++) module[n] = exports.charCodeAt(n);
      return module;
    }
    getMimeType() {
      return this.mimeType;
    }
    getImageAsDataURL() {
      return this.image;
    }
    getImageAsBase64() {
      return this.image.split('base64,')[1];
    }
    static async fromBlob(e) {
      const module = new n(),
        o = await new Promise((t) => {
          const n = new FileReader();
          ((n.onload = function (e) {
            t(e.target.result);
          }),
            n.readAsDataURL(e));
        });
      return ((module.image = o), (module.mimeType = e.type), module);
    }
  }
  exports.exports = n;
}
