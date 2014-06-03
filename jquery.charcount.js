(function($) {
	$.fn.extend( {
	    charcount: function(limit, counter) {
	        $(this).on("keyup focus", function() {
	            setCount(this, counter);
	        });
	        function setCount(src, counter) {
	            var chars = src.value.length;
                if (chars > limit) {
	                src.value = src.value.substr(0, limit);
	                chars = limit;
	            }
	            counter.html( limit - chars );
	        }
	        setCount($(this)[0], counter);
	    }
	});
})(jQuery);