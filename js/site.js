(function ($) {

$(function () {
    // Card vertical centering and fade in transition.
	var bc = $('#business-card');
	bc.css('margin-top', bc.outerHeight() / -2);
	bc.hide().fadeIn('slow');
	
	// Footer slide up transition.
	//var footer = $('#footer');
	//var footer_margin_top = $('#footer').css('margin-top');
	//footer.css({'margin-top': 0, 'opacity': 0.01}).animate({
	//        'margin-top': footer_margin_top,
	//        'opacity': 1
	//    }, 'slow');
});
    
})(jQuery);
