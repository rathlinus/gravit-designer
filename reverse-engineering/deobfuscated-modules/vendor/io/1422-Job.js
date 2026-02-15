/**
 * Module 1422
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  var n = require(1423) /* module */, r = require(293) /* Stroke */, o = require(338) /* module */, a = require(359) /* module */, s = require(1442) /* module */, l = require(1443) /* module */, h = require(640) /* module */, A = require(11) /* GUtil */, c = require(7) /* GTransform */, p = require(791) /* DataModule_791 */, u = function (e) {
      this.compress = e.compress, e.jpegQuality && (this._jpegQuality = e.jpegQuality), this._downsampleImages = !!e.downsampleImages, this.colorSpace = e.colorSpace, this.header = new s(e.version), this.body = new n(this, e.user, e.title), this._promises = [], this._executors = [], this._workers = e.workers, this._stackGraphics = [], this._jobs = [], this._tasksAreSubmitted = false, this._promiseCapability = {}, this._promise = new p(function (e, t) {
        this._promiseCapability.resolve = e, this._promiseCapability.reject = t;
      }.bind(this));
    };
  u.prototype._workers = null, u.prototype._jobs = null, u.prototype._lastJob = null, u.prototype._promise = null, u.prototype._promiseCapability = null, u.prototype._tasksAreSubmitted = false, u.prototype._abort = null, u.prototype._writer = null, u.prototype._executors = null, u.prototype._promises = null, u.prototype._jpegQuality = 85, u.prototype._downsampleImages = false, u.prototype._resetPromise = function () {
    this._promiseCapability = {}, this._promise = new p(function (e, t) {
      this._promiseCapability.resolve = e, this._promiseCapability.reject = t;
    }.bind(this));
  }, u.prototype.isDownsamplingImages = function () {
    return this._downsampleImages;
  }, u.prototype.hasConcurrencyFeature = function () {
    return this._workers && !!this._workers.length;
  }, u.prototype.getLastJob = function () {
    return this._lastJob;
  }, u.prototype.beginJob = function (e) {
    var t = new u.Job(e || "Unknown", this);
    return this._jobs.length || this._resetPromise(), this._jobs.push(t), t;
  }, u.prototype.endJob = function (e) {
    if (this._lastJob = e, e._status !== u.Job.Status.FAILED) {
      for (var module = 0; module < this._jobs.length; module++)
        if (this._jobs[module]._id === e._id) {
          this._jobs.splice(module, 1);
          break;
        }
      !this._jobs.length && this._tasksAreSubmitted && this._promiseCapability.resolve();
    } else
      this._promiseCapability.reject(e._error);
  }, u.prototype.isAbort = function () {
    return this._abort;
  }, u.prototype.abort = function (e) {
    this._abort = true, this._promiseCapability.reject(e), this._writer && this._writer.abort(), this._executors && this._executors.forEach(function (e) {
      e.abort();
    }), this._promises && this._promises.forEach(function (e) {
      e.reject();
    }), this.finish();
  }, u.prototype.finish = function () {
    this._workers && this._workers.forEach(function (e) {
      e.terminate();
    }), delete this.body, delete this._executors, delete this._promises;
  }, u.prototype.createPromise = function (e) {
    var t = this, i = function (e) {
        t._promises && t._promises.some(function (i, n) {
          if (i === e && t._promises)
            return t._promises.splice(n, 1), true;
        });
      }, n = new p(function (i, n) {
        t._promises.push({
          resolve: i,
          reject: n
        }), e(i, n);
      });
    return n.then(i.bind(null, n)).catch(i.bind(null, n)), n;
  }, u.prototype.createExecutor = function (e, t) {
    var i = this, n = new h(e, t, function () {
        i._executors && i._executors.some(function (e, t) {
          if (e === n && i._executors)
            return i._executors.splice(t, 1), true;
        });
      });
    return this._executors.push(n), n;
  }, u.prototype.ready = function () {
    return this._tasksAreSubmitted = true, this._jobs.length || this._promiseCapability.resolve(), this._promise;
  }, u.prototype.getWorkers = function () {
    return this._workers;
  }, u.prototype.newWriter = function () {
    return this._writerClass ? new this._writerClass() : new l();
  }, u.prototype.getBody = function () {
    return this.body;
  }, u.prototype.getInfo = function () {
    return this.body.getInfo();
  }, u.prototype.setPageOrigin = function (e) {
    this.body.setPageOrigin(e);
  }, u.prototype.getPageOrigin = function () {
    return this.body.getPageOrigin();
  }, u.prototype.getColorSpace = function () {
    return this.colorSpace || a.RGB;
  }, u.prototype.isCompress = function () {
    return this.compress;
  }, u.prototype.getJPEGQuality = function () {
    return this._jpegQuality;
  }, u.prototype.newPage = function (e, t) {
    return this.body.newPage(e, t);
  }, u.prototype.getPageSize = function () {
    return this.body.getPageSize();
  }, u.prototype.relativeY = function (e) {
    return o.normalizeNumber(this.getPageSize().height - e);
  }, u.prototype.convertToPDFPoint = function (e) {
    return new c(1, 0, 0, -1, 0, this.getPageSize().height).mapPoint(e);
  }, u.prototype.convertToViewportPoint = function (e) {
    return new c(1, 0, 0, -1, 0, this.getPageSize().height).inverted().mapPoint(e);
  }, u.prototype.convertToPDFCoordinates = function (e) {
    return new c(1, 0, 0, -1, 0, this.getPageSize().height).preMultiplied(e).preMultiplied(new c(1, 0, 0, -1, 0, 0));
  }, u.prototype.add = function (e, t) {
    this.body.add(e, t), e instanceof r && this.pushGraphics(e);
  }, u.prototype.addText = function (e) {
    var t = this.getCurrentGraphics();
    if (t)
      return t.addText(e);
  }, u.prototype.addResource = function (e, t) {
    return this.getCurrentResources().add(e, t);
  }, u.prototype.getCurrentGraphics = function () {
    return this._stackGraphics.slice(-1).pop();
  }, u.prototype.createGraphics = function () {
    var e = new r(this);
    return this.add(e), e;
  }, u.prototype.pushGraphics = function (e) {
    this._stackGraphics.push(e);
  }, u.prototype.popGraphics = function () {
    return this._stackGraphics.pop();
  }, u.prototype.getCurrentResources = function () {
    return this.body.getCurrentResources();
  }, u.prototype.addIndirectObject = function (e) {
    this.body.addIndirectObject(e);
  }, u.prototype.removeIndirectObject = function (e) {
    this.body.removeIndirectObject(e);
  }, u.prototype.getIndirectObject = function (e) {
    return this.body.getIndirectObject(e);
  }, u.prototype.write = function (e) {
    this._writer = e, this.header.write(e), this.body.write(e), e.write("%%EOF");
  }, u.prototype.toString = function () {
    return "[Object GPDFDocument]";
  }, (u.Job = function (e, t) {
    this._name = e, this._doc = t, this._id = A.uuid(), this._status = u.Job.Status.RUNNING;
  }).Status = {
    IDLE: 0,
    RUNNING: 1,
    COMPLETED: 2,
    FAILED: 3
  }, u.Job.prototype._name = null, u.Job.prototype._doc = null, u.Job.prototype._status = u.Job.Status.IDLE, u.Job.prototype._error = null, u.Job.prototype.failed = function (e) {
    this._updateStatus(u.Job.Status.FAILED) && (this._error = e, this._doc.endJob(this));
  }, u.Job.prototype.done = function () {
    this._updateStatus(u.Job.Status.COMPLETED) && this._doc.endJob(this);
  }, u.Job.prototype._updateStatus = function (e) {
    if (this._status !== e && e > this._status)
      return this._status = e, true;
  }, u.Job.prototype.getStatus = function () {
    return this._status;
  }, u.Job.prototype.toString = function () {
    return JSON.stringify({
      name: this._name,
      status: this._status
    });
  }, exports.exports = u;
}
