$(document).ready(function() {

	/* Full Page Plugin Settings */
	$('#fullpage').fullpage({
		anchors: ['top', 'about', 'work', 'expertise', 'connect', 'bottom'],
		menu: '#menu',
		fixedElements: '#modal0, #modal1'
	});

	/* Responsive util */
	var desktopBreakpoint = 767;
	var isDesktop = function() {
		return $(window).width() > desktopBreakpoint;
	}
	/* Fade body content in after page has loaded */
	$('body').css('visibility','visible').hide().fadeIn('fast');
});
