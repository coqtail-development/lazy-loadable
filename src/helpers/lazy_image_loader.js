/**
 * Create a new instance of LazyImageLoader and pass a scope (jQuery element)
 * @param $scope
 * @constructor
 */

function LazyImageLoader($scope) {
    var elements = $('[data-lazy-type]', $scope),
        self = this;

    this.init = function () {
        $.each(elements, function () {
            var type = $(this).data('lazy-type');
            if (type == 'background') {
                self.lazyLoadBackground($(this));
            }
        });
    };

    this.lazyLoadBackground = function ($el) {
        var src = $el.data('lazy-src');
        $el.addClass('is-lazy-loading');
        $('<img/>').attr('src', src).load(function () {
            $el.removeClass('is-lazy-loading');
            $(this).remove();
            $el.css('background-image', 'url("' + src + '")');
        });
    }
}