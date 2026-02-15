/**
 * Webpack Module #1507
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(290) /* DataModule_290 */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var o = require(357) /* module_357 */,
    GCore = require(1) /* GCore */,
    CollaborationMergeUtils = require(40);
  const { gApi: r, LINKS: s, DESIGNER: { TITLE: l } = {}, SubscriptionStatus: c } = require(
      10
    ) /* AppSettings */,
    d = (require(173) /* stub_requires_1 */, require(337)) /* stub_requires_1098 */,
    u = ['number', 'name', 'price', 'date'];
  class p extends GCore.GObject {
    constructor(e, t) {
      super();
      let require = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      ((this._user = e),
      (this._options = require),
      (this._query = { skip: 0, name: '', issued: 'true' }),
      (this._messageHandler = t),
      (this._typing = false),
      this._init(),
      (this._allowReactivateSubscriptions = false),
      this._load());
    }

    _init() {
      this._container = $('<div></div>').addClass('g-purchase-panel');
      let exports = undefined;
      const module = () => this._showInfoIfAny(),
        require = (n) => {
          (exports && clearTimeout(exports),
            (exports = setTimeout(module, 500)),
            this._search($(n.target).closest('input').val()));
        };
      ($('<div></div>')
        .addClass('search-panel')
        .append(
          $('<input>')
            .attr('type', 'text')
            .attr('data-property', 'search')
            .attr(
              'placeholder',
              GCore.GLocale.get(new GCore.GLocaleKey('GPurchasePanel', 'text.search-label'))
            )
            .on(
              'input',
              (0, CollaborationMergeUtils.debounce)(
                (0, CollaborationMergeUtils.throttle)(require, 500),
                500
              )
            )
            .on('keyup', (e) => {
              13 === e.which &&
                (gDesigner.stats('profile-dialog_purchase-panel_search'), require(e));
            })
        )
        .append(
          $('<label></label>')
            .append(
              $('<span></span>').text(
                GCore.GLocale.get(new GCore.GLocaleKey('GPurchasePanel', 'text.orderby-label'))
              )
            )
            .append(
              $('<select></select>')
                .attr('data-property', 'orderby')
                .append(
                  u.map((e) =>
                    $('<option></option>')
                      .attr('value', e)
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GPurchasePanel', 'text.orderby-' + e)
                        )
                      )
                  )
                )
                .on('change', (e) => {
                  (gDesigner.stats('profile-dialog_purchase-panel_order-by', e.target.value),
                    this._orderBy.bind(this));
                })
            )
            .append(
              $('<span></span>')
                .data('direction', '')
                .attr('data-property', 'direction')
                .addClass('gravit-icon-sort-asc')
                .on('click', (e) => {
                  let module = $(e.target).closest('span'),
                    require = module.data('direction'),
                    o = 'asc';
                  ('-' === require
                    ? ((require = ''), (o = 'asc'))
                    : ((require = '-'), (o = 'desc')),
                    module.data('direction', require),
                    module.toggleClass('gravit-icon-sort-asc gravit-icon-sort-desc'),
                    gDesigner.stats('profile-dialog_purchase-panel_sort', o),
                    this._orderBy());
                })
            )
        )
        .appendTo(this._container),
        (this._purchaseList = $('<div></div>').addClass('purchase-list').appendTo(this._container)),
        $('<footer></footer>')
          .append(
            $(
              '<span>'
                .concat(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      'GPurchasePanel',
                      'text.contact-partner-billing-alternative'
                    )
                  ),
                  '</span>'
                )
                .replace(
                  '%partner%',
                  $('<a/>')
                    .addClass('cb-link')
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GPurchasePanel', 'text.contact-partner-cleverbridge')
                      )
                    )
                    .prop('outerHTML')
                )
            )
          )
          .appendTo(this._container),
        this._container.find('.cb-link').on('click', (e) => {
          (gDesigner.stats('profile-dialog_purchase-panel_cleverbridge-link'),
            gContainer.openExternalLink(e, s.CLEVERBRIDGE_SUPPORT_URL));
        }),
        $(this._purchaseList).scroll((e) => {
          let module = $(e.currentTarget);
          module[0].scrollHeight - module.scrollTop() === module.outerHeight() &&
            $(this._purchaseList).children().length > 0 &&
            this._load();
        }));
    }

    async _search(e) {
      (this._messageHandler(undefined),
        (this._query.skip = 0),
        (this._query.name = e),
        (this._query.by = this._container
          .find('select[data-property="orderby"] > option:selected')
          .attr('value')),
        (this._query.direction = this._container
          .find('span[data-property="direction"]')
          .data('direction')),
        await this._load(true));
    }

    _orderBy() {
      (this._search(this._container.find('input[data-property="search"]').val()),
        this._showInfoIfAny());
    }

    _showInfoIfAny() {
      this._purchaseList[0].hasChildNodes() ||
        this._messageHandler(
          GCore.GLocale.get(new GCore.GLocaleKey('GPurchasePanel', 'text.empty-search')),
          'info'
        );
    }

    async _load(e) {
      if (-1 !== this._query.skip) {
        this._toggleLoading(true);
        try {
          let t = await r.listPurchasedProducts(this._query),
            n = t.length;
          ((this._query.skip = n > 0 ? (n < 10 ? -1 : this._query.skip + n) : -1),
            e && this._purchaseList.empty(),
            t.forEach((e) => this._addOrUpdateItem(e)));
        } catch (e) {
          this._handleError(e);
        } finally {
          this._toggleLoading(false);
        }
      }
    }

    _addOrUpdateItem(e, t) {
      const require = e.issued_coupon && e.issued_coupon.lifetime;
      (t =
        t ||
        $('<div></div>')
          .addClass('purchase-item')
          .data('purchase', e)
          .on('click', (e) => {
            (this._purchaseList.find('.purchase-item.g-active').removeClass('g-active'),
              $(e.target).closest('.purchase-item').addClass('g-active'));
          })
          .appendTo(this._purchaseList)).empty();
      let CollaborationMergeUtils = false,
        s = false;
      (this._options &&
        this._options.subscription &&
        e.purchase_id == this._options.subscription.purchase &&
        ((CollaborationMergeUtils = true),
        (s = !!this._options.subscription.reinstate),
        (this._options = null)),
        CollaborationMergeUtils && t.addClass('g-selected'));
      const u =
        e.name ||
        (require
          ? GCore.GLocale.get(
              new GCore.GLocaleKey('GPurchasePanel', 'text.pro-subscription-lifetime')
            ).replace('%app', l)
          : GCore.GLocale.get(
              new GCore.GLocaleKey('GPurchasePanel', 'text.pro-subscription')
            ).replace('%app', l));
      $('<div></div>')
        .addClass('header')
        .append($('<label></label>').addClass('title').text(u))
        .appendTo(t);
      (e.invoice &&
        $('<div></div>')
          .addClass('orderno')
          .append(
            $('<a></a>')
              .attr('href', e.invoice)
              .attr('target', '_blank')
              .append(
                $('<span></span>').text(
                  ''
                    .concat(
                      GCore.GLocale.get(new GCore.GLocaleKey('GPurchasePanel', 'text.orderno')),
                      ' '
                    )
                    .concat(e.purchase_id)
                )
              )
          )
          .appendTo(t),
        o.PURCHASEPANEL.HAS_PRODUCT_DESCRIPTION &&
          $('<div></div>')
            .addClass('description')
            .append($('<label></label>').text(e.description))
            .appendTo(t));
      let p = ''
        .concat(GCore.GLocale.get(new GCore.GLocaleKey('GPurchasePanel', 'text.purchased')), ' ')
        .concat(e.created ? GCore.GLocale.toLocaleDate(new Date(e.created)) : '');
      !require &&
        e.issued_coupon &&
        e.issued_coupon.expires &&
        (p += ', '.concat(
          GCore.GLocale.get(
            new GCore.GLocaleKey('GPurchasePanel', 'text.purchased-expires')
          ).replace('%date', GCore.GLocale.toLocaleDate(new Date(e.issued_coupon.expires)))
        ));
      let g = $('<span></span>').text(p + '.');
      if (e.subscription && !e.refunded) {
        let CollaborationMergeUtils = p;
        (g.text(p + '...'),
          r
            .getSubscriptionByPurchase(e.purchase_id, e.provider)
            .then((u) => {
              const p = (e, n, o, CollaborationMergeUtils, r) => {
                let s = $('<div></div>')
                  .addClass('prompt')
                  .append(
                    $('<div></div>')
                      .append($('<span></span>').addClass('title').text(e))
                      .append(
                        $('<div></div>')
                          .append(
                            $('<button></button>')
                              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'yes')))
                              .on('click', () => CollaborationMergeUtils(s))
                          )
                          .append(
                            $('<button></button>')
                              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'no')))
                              .on('click', () => s.removeClass('show'))
                          )
                      )
                  )
                  .append(
                    $('<div></div>').append(
                      $('<div></div>').addClass('subtitle').append($('<span></span>').html(n))
                    )
                  )
                  .insertAfter(t);
                return (
                  $('<div></div>')
                    .addClass('subscription')
                    .append($('<label></label>').html('&nbsp;'))
                    .append(
                      $('<button></button>')
                        .toggleClass('highlight', !!r)
                        .text(o)
                        .on('click', () => s.addClass('show'))
                    )
                    .appendTo(t),
                  s
                );
              };
              if (u.status === c.Active)
                (require
                  ? g.text(CollaborationMergeUtils + '.')
                  : g.text(
                      ''
                        .concat(CollaborationMergeUtils, ', ')
                        .concat(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey('GPurchasePanel', 'text.purchased-renews')
                          ),
                          ' '
                        )
                        .concat(GCore.GLocale.toLocaleDate(new Date(u.endDate)), '.')
                    ),
                  p(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GPurchasePanel', 'text.prompt-cancel-title')
                    ),
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GPurchasePanel', 'text.prompt-cancel-info')
                    )
                      .replace('%app', l)
                      .replace('%date', GCore.GLocale.toLocaleDate(new Date(u.endDate))),
                    GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'cancel')),
                    async (n) => {
                      this._toggleLoading(true);
                      try {
                        (await r
                          .deactivateSubscription(u.id, e.provider)
                          .then(() => {
                            (gDesigner.stats('profile-dialog_purchase-panel_cancel-subscription'),
                              n.remove(),
                              this._addOrUpdateItem(e, t));
                          })
                          .catch((e) => this._handleError(e)),
                          await d.checkLicense());
                      } finally {
                        this._toggleLoading(false);
                      }
                    }
                  ));
              else {
                if (
                  (g.text(
                    ''
                      .concat(CollaborationMergeUtils, ', ')
                      .concat(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GPurchasePanel', 'text.subscription-ends')
                        ).replace('%date', GCore.GLocale.toLocaleDate(new Date(u.endDate))),
                        '.'
                      )
                  ),
                  !this._allowReactivateSubscriptions)
                )
                  return;
                if (u.repurchase) return;
                let n = p(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPurchasePanel', 'text.prompt-activate-title')
                  ),
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPurchasePanel', 'text.prompt-activate-info')
                  ).replace('%date', GCore.GLocale.toLocaleDate(new Date(u.nextBillingDate))),
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GPurchasePanel', 'text.prompt-activate-label')
                  ),
                  async (n) => {
                    this._toggleLoading(true);
                    try {
                      (await r
                        .activateSubscription(u.id, e.provider)
                        .then(() => {
                          (gDesigner.stats('profile-dialog_purchase-panel_activate-subscription'),
                            n.remove(),
                            this._addOrUpdateItem(e, t));
                        })
                        .catch((e) => this._handleError(e)),
                        await d.checkLicense());
                    } finally {
                      this._toggleLoading(false);
                    }
                  },
                  o.PURCHASEPANEL.HAS_HIGHLIGHT
                );
                s && n.addClass('show');
              }
            })
            .catch(() => g.text(CollaborationMergeUtils + '.')));
      }
      return (
        $('<div></div>').addClass('purchased').append($('<label></label>').append(g)).appendTo(t),
        t
      );
    }

    _handleError(e) {
      let module = GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.something-wrong'));
      (e && e.message
        ? (module = e.message)
        : e && e.errors && (module = e.errors.map((e) => e[1]).join('<br>')),
        this._messageHandler(module));
    }

    _toggleLoading(e) {
      e ? this._container.addClass('g-loading') : this._container.removeClass('g-loading');
    }

    getHTMLElement() {
      return this._container;
    }

  }
  exports.exports = p;
}