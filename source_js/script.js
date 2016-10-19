$(document).ready(function() {

	/* Full Page Plugin Settings */
	$('#fullpage').fullpage({
		anchors: ['top', 'about', 'work', 'expertise', 'connect', 'bottom'],
		menu: '#menu',
		fixedElements: '#modal0, #modal1'
	});

	/* Navigation */
	var $navigationLink = $('.nav li');
	var $navigationToggle = $('.navbar-toggle');
	$navigationLink.on('click', function() {
		if(!isDesktop()) {
			$navigationToggle.click();
		}
	});

	/* Responsive util */
	var desktopBreakpoint = 767;
	var isDesktop = function() {
		return $(window).width() > desktopBreakpoint;
	}
});
