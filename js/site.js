(function ($) {

$(function () {
    // Card vertical centering and fade in transition.
	var bc = $('#business-card');
	bc.css('margin-top', bc.outerHeight() / -2);
	bc.hide().fadeIn('slow');
	
	// Highlight the current page in navigation.
	var path = window.location.pathname;
	$('#navigation a').each(function () {
		if (path.indexOf($(this).attr('href')) === 0) {
			$(this).addClass('current');
		}
	});
});
    
})(jQuery);
