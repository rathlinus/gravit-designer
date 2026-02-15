/**
 * Webpack Module #1548
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(196) /* polyfill_Promise_finally */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(38)) /* stub_requires_680 */;
  const GCloudStorageItem = require(156);
  class i {
    constructor(e, t, n) {
      var GCloudStorageItem;
      ((this._folder = e),
      (this._isRootFolder = n),
      (this._container = $('<div/>').addClass('g-container').data('node', e)),
      (this._element = GCloudStorageItem =
      $('<div/>')
      .addClass('g-gravit-folder')
      .addClass('g-cloud-element')
      .attr('data-title', e.name)
      .data('node', e)
      .appendTo(this._container)),
      (this._childrenContainer = $('<div/>').addClass('g-children').appendTo(this._container)),
      (this._folderContainer = $('<div/>')
      .addClass('folder-container')
      .appendTo(GCloudStorageItem)),
      (this._folderState = $('<div />')
      .addClass('folder-state-icon')
      .appendTo(this._folderContainer)),
      (this._folderIcon = $('<div />').addClass('folder-icon').appendTo(this._folderContainer)),
      $('<div />').addClass('name').text(e.name).appendTo(this._folderContainer),
      $('<input />')
      .attr('type', 'text')
      .css('display', 'none')
      .addClass('folder-name')
      .css('width', this._folderContainer.find('.name').outerWidth())
      .val(e.name)
      .appendTo(this._folderContainer),
      (this._parent = t),
      (this._folderContext = $('<div/>')
      .addClass('folder-context')
      .append(
      $('<span />')
      .addClass('icon')
      .addClass('gravit-icon-w-kebab')
      .on('mouseover', function (e) {
      e.stopPropagation();
      })
      )
      .on('mouseover', function (e) {
      e.stopPropagation();
      })
      .appendTo(GCloudStorageItem)),
      this._update());
    }

    _isRootFolder = false;
    _parent = null;
    _container = null;
    _element = null;
    _folderContainer = null;
    _folderContext = null;
    _folder = null;
    _loading = false;
    _children = null;
    _isOpen = false;
    _done = false;

    isRootFolder() {
      return this._isRootFolder;
    }

    isLoading() {
      return this._loading;
    }

    getFolder() {
      return this._folder;
    }

    getParent() {
      return this._parent;
    }

    setLoading(e) {
      this._loading !== e && ((this._loading = e), this._update());
    }

    onToggle(e) {
      return ((this._onToggle = e), this);
    }

    toggleState() {
      (gDesigner.stats('filespanel_expand-collapse_cloudfolder'),
        this._folderState.removeClass('open'),
        this._folderState.removeClass('closed'),
        (this._isOpen = !this._isOpen),
        this._update(),
        this._onToggle && this._onToggle(this._isOpen));
    }

    isStateOpen() {
      return this._isOpen;
    }

    update() {
      this._update();
    }

    setRefreshHandler(e) {
      return ((this._refreshCallback = e), this);
    }

    isDone() {
      return this._done;
    }

    loadChildrenOnDemand(e) {
      this.setLoading(true);
      const module = (this._children || []).length;
      return e(this._folder, 100, module)
        .then((e) => {
          ((this._done = e.length < 100),
            e.length &&
              (this._childrenContainer.append(e.map((e) => e.getHTMLContainer())),
              (this._children = this._children.concat(e))),
            this.update());
        })
        .finally(() => {
          this.setLoading(false);
        });
    }

    refresh() {
      return (
        this.setChildren([]),
        this.update(),
        this._refreshCallback && this._refreshCallback(this)
      );
    }

    _update() {
      (this._children && this._children.length
        ? (this._folderState.addClass(this._isOpen ? 'open' : 'closed'),
          this._isOpen ? this._childrenContainer.show() : this._childrenContainer.hide())
        : this._childrenContainer.hide(),
        this._folderIcon.empty(),
        this._folderIcon.append(
          $('<div />')
            .addClass('icon')
            .addClass(this._loading ? 'loading' : this._folder.getIcon() || 'gravit-icon-w-folder')
        ));
    }

    onClick(e) {
      return (
        this._folderContainer.on('click', (t) => {
          (t.stopPropagation(), e(this._folder, this.getHTMLElement()));
        }),
        this
      );
    }

    onDoubleClick(e) {
      return (
        this._folderContainer.on('dblclick', (t) => {
          (t.stopPropagation(), e(this._folder, this.getHTMLElement()));
        }),
        this
      );
    }

    onFolderStateClick(e) {
      return (
        this._folderState.on('click', (t) => {
          (t.stopPropagation(), e(this._folder, this.getHTMLElement()));
        }),
        this
      );
    }

    onContext(e) {
      return (
        this._folderContext &&
          (this._element.on('contextmenu', (t) => {
            (t.stopPropagation(), e(this._folder, this.getHTMLElement(), t));
          }),
          this._folderContext.on('click', (t) => {
            (t.stopPropagation(), e(this._folder, this.getHTMLElement(), t));
          })),
        this
      );
    }

    onFileDrop(e) {
      let module = null,
        require = this;
      return (
        this._element
          .on('drop', async function (t) {
            $(this).removeClass('drag-over');
            const i = t.originalEvent.dataTransfer,
              a = JSON.parse(i.getData('text'));
            var r = GCloudStorageItem.from(a);
            e(r, require._folder);
          })
          .on('dragover', function (e) {
            ($(this).addClass('drag-over'),
              module ||
                (module = setTimeout(() => {
                  require._isOpen || require._folderState.trigger('click');
                }, 1e3)));
          })
          .on('dragleave', function (e) {
            ($(this).removeClass('drag-over'), module && clearTimeout(module), (module = null));
          }),
        this
      );
    }

    getHTMLContainer() {
      return this._container;
    }

    setChildren(e) {
      ((this._children = e),
        this._childrenContainer.empty(),
        (this._children && this._children.length) || (this._isOpen = false),
        this._children &&
          this._children.length &&
          this._childrenContainer.append(e.map((e) => e.getHTMLContainer())));
    }

    getChildren() {
      return this._children;
    }

    getHTMLElement() {
      return this._element;
    }

  }
  exports.exports = i;
}