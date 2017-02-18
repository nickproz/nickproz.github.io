/*
-----------------------------------------
|               General JS              |
-----------------------------------------
*/
$(document).ready(function() {

	/**
	 * Responsive utility for determining if the current window is a desktop viewport.
	 */
	var desktopBreakpoint = 767;
	var isDesktop = function() {
		return $(window).width() > desktopBreakpoint;
	};

	// Fade body content in after page has loaded
	$('body').css('visibility','visible').hide().fadeIn('fast');

	if(window.innerHeight > window.innerWidth) {
		$('.section').addClass('fp-auto-height');
	}

    window.addEventListener("orientationchange", function() {
        // Announce the new orientation number
        alert(window.orientation);
    }, false);

});
