/**
 * Webpack Module #1517
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.REARRANGE_TAB_SELECTOR = module.REARRANGE_TAB_CLASS = undefined),
    (module.allowRearrangeTabs = function (e) {
      ($('.tabs').sortable({
        axis: 'x',
        containment: $('#header'),
        revert: 150,
        activate: function (e, t) {
          ($(t.item[0]).trigger('click'), $(t.placeholder[0]).css({ height: '1px' }));
          var n = t.item.offset().top;
          $('.tabs')
            .children()
            .map(function () {
              $(this).hasClass('ui-sortable-placeholder') ||
                ($(this).offset().top > n && $(this).addClass('hide'));
            });
        },
        beforeStop: function () {
          $('.tabs').children().removeClass('hide');
        },
      }),
        $('#mainframe').on('click', function () {
          $('.more-button').hasClass('active') && $('.more-button').removeClass('active');
        }),
        $('<div></div>')
          .addClass('more-button')
          .append($('<div></div>').addClass('more-symbol'))
          .append($('<div></div>').addClass('moreTab'))
          .on('click', function () {
            (gDesigner.stats(
              'header_click_more-button',
              $('.more-button').hasClass('active') ? 'Close' : 'Open'
            ),
              $('.more-button').hasClass('active')
                ? $('.more-button').removeClass('active')
                : setTimeout(function () {
                    $('.more-button').addClass('active');
                  }, 10),
              a());
          })
          .appendTo(e));
    }),
    (module.toggleRearrangeTabsVisibility = function (e, t) {
      $(e)
        .find(i)
        .css('display', t ? '' : 'none');
    }),
    (module.updateTabsInterface = a),
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(38) /* stub_requires_680 */,
    require(1518)) /* JQueryUISortable */;
  const o = (module.REARRANGE_TAB_CLASS = 'more-button'),
    i = (module.REARRANGE_TAB_SELECTOR = '.'.concat(o));
  function a() {
    var e = 0,
      t = 0;
    ($('.moreTab').empty(),
      $('.moreTab').append($('.tabs').children().clone(true)),
      $('.moreTab').children().children().prepend($('<span/>').addClass('select')),
      $('.moreTab').css({
        left: -$('.moreTab').width(),
        maxHeight: $('body').height() - 50,
      }),
      $('.moreTab').children().off('contextmenu'),
      $('.tabs')
        .children()
        .each(function (n) {
          if (t);
          else if ((e += $(this).outerWidth() + 7.5) > $('.section.windows').outerWidth())
            return (t = n);
        }),
      setTimeout(function () {
        (t &&
          $('.tabs>div').index($('.tab.g-active')) >= t &&
          $('.tabs')
            .find('.tab.g-active')
            .insertBefore(
              $('.tabs')
                .children()
                .eq(t - 1)
            ),
          $('.moreTab')
            .children()
            .eq($('.tabs>div').index($('.tab.g-active')))
            .children()
            .children('.select')
            .addClass('more-tab-icon'));
      }, 100));
  }
}
