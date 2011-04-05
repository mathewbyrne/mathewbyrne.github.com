(function ($) {

$(function () {
	var bc = $('#business-card');
	bc.css('margin-top', bc.outerHeight() / -2);
	bc.hide().fadeIn('slow');
	
	var tl = $('#tag-line'),
	    tl_text = tl.text(),
	    tl_timeout;
	
	$('#navigation a').mouseover(function () {
        var self = $(this);
        if (tl_timeout) {
            window.clearTimeout(tl_timeout);
            tl_timeout = null;
        }
        tl.animate({opacity: 0.01}, function () {
            tl.text(self.attr('title')).animate({opacity: 1});
        });
    });
	
	$('#navigation').mouseout(function (e) {
        tl_timeout = window.setTimeout(function () {
            tl.animate({opacity: 0.01}, function () {
                tl.text(tl_text).animate({opacity: 1});
            });
        });
	});
});
    
})(jQuery);