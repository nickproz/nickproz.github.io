// General Javascript
$(document).ready(function() {

	// Responsive util
	var desktopBreakpoint = 767;
	var isDesktop = function() {
		return $(window).width() > desktopBreakpoint;
	}
	// Fade body content in after page has loaded
	$('body').css('visibility','visible').hide().fadeIn('fast');
});
