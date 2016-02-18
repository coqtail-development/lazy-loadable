var ExampleView = Marionette.ItemView.extend({
    template: "#tpl-example",
    behaviors: {
        lazyLoadable: {
            behaviorClass: LazyLoadable
        }
    }
});