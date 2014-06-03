jquery-charcount
================

A jQuery plugin to set character limits on textareas, etc.

### Useage

Sample HTML

```
<form>
	<textarea id="message"></textarea>
	<span class="char-count"></span>
</form>
```

Initialize the plugin

``` javascript
$(document).ready(function() {
	var charlimit = 140;
	var counter = $('.char-count');
	var message = $('#message');

	message.charcount(charlimit, counter);
});
```

Cheers.

