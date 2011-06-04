(function ($) {

$(function () {
    // Card vertical centering and fade in transition.
	var bc = $('#business-card');
	bc.css('margin-top', bc.outerHeight() / -2);
	bc.hide().fadeIn('slow');
});
    
})(jQuery);
