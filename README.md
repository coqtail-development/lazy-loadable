## LazyLoadable ##
LazyLoadable is a small Backbone.Marionette behavior which enables background images to be loaded whenever they're ready. Just set the desired image URL's as data attribute on your elements.  This will prevent large background images to be loaded pixel by pixel and instead load the image and set it as background when it's completely downloaded.

**Usage**

To use this behavior, instantiate the behavior in your view. This will pass the view's $el scope to the LazyImageLoader method.

```javascript
var ExampleView = Marionette.ItemView.extend({
	template: "#tpl-example",
	behaviors: {
		lazyLoadable: {
			behaviorClass: LazyLoadable
		}
	}
});
```

Your template should look like this:

```
<script type="text/template" id="tpl-example">
    <div class="home-section section-production row" data-lazy-type="background"
         data-lazy-src="http://giphy.com/embed/bzoD9WOiU1wAg">
    </div>
</script>
```

As you can see, the following data attributes data attributes can be used:

 - "data-lazy-type" representing the way you're going to use the lazy loaded image. At the moment, background images can be used.
 - "data-lazy-src" being the URL to the image you'd like to include.

**Contributors**

A [COQTAIL](http://www.coqtail.com) production.