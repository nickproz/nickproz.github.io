/*
-----------------------------------------
|               General JS              |
-----------------------------------------
*/
$(document).ready(function() {

    /**
	 * Responsive utility for determining if the current window is a desktop viewport.
     */
	let desktopBreakpoint = 767;
	let isDesktop = function() {
		return $(window).width() > desktopBreakpoint;
	};

	// Fade body content in after page has loaded
	$('body').css('visibility','visible').hide().fadeIn('fast');
});
