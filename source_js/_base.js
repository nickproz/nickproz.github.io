// General Javascript
$(document).ready(function() {

	// Full Page Plugin Settings
	$('#fullpage').fullpage({
		anchors: ['top', 'about', 'work', 'connect', 'bottom'],
		menu: '#menu',
		fixedElements: '',
		verticalCentered: false
	});

	// Responsive util
	var desktopBreakpoint = 767;
	var isDesktop = function() {
		return $(window).width() > desktopBreakpoint;
	}
	// Fade body content in after page has loaded
	$('body').css('visibility','visible').hide().fadeIn('fast');
});
