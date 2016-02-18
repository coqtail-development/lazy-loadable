var LazyLoadable = Marionette.Behavior.extend({
    onRender: function () {
        var lazyLoader = new LazyImageLoader(this.view.$el);
        lazyLoader.init();
    }
});